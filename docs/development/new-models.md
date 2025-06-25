# Adding New Models to stochtree

While the process of working with `stochtree`'s codebase to add 
functionality or fix bugs is covered in the [contributing](contributing.md) 
page, this page discusses a specific type of contribution in detail: 
contributing new models (i.e. likelihoods and leaf parameter priors).

Our C++ core is designed to support any conditionally-conjugate model, but this flexibility requires some explanation in order to be easily modified.

## Overview

The key components of `stochtree`'s models are:

1. A **SuffStat** class that stores and accumulates sufficient statistics
2. A **LeafModel** class that computes marginal likelihoods / posterior parameters and samples leaf node parameters

Each model implements a different version of these two classes. For example, the "classic" 
BART model with constant Gaussian leaves and a Gaussian likelihood is represented by the 
`GaussianConstantSuffStat` and `GaussianConstantLeafModel` classes.

Each class implements a common API, and we use a [factory pattern](https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)) and the C++17 
[std::variant](https://www.cppreference.com/w/cpp/utility/variant.html) 
feature to dispatch the correct model at runtime. 
Finally, R and Python wrappers expose this flexibility through the BART / BCF interfaces.

Adding a new leaf model thus requires implementing new `SuffStat` and `LeafModel` 
classes, then updating the factory functions and R / Python logic.

## SuffStat Class

As a pattern, sufficient statistic classes end in `*SuffStat` and implement several methods:

* `IncrementSuffStat`: Increment a model's sufficient statistics by one data observation
* `ResetSuffStat`: Reset a model's sufficient statistics to zero / empty
* `AddSuffStat`: Combine two sufficient statistics, storing their sum in the sufficient statistic object that calls this method (without modifying the supplied `SuffStat` objects)
* `SubtractSuffStat`: Same as above but subtracting the second `SuffStat` argument from the first, rather than adding
* `SampleGreaterThan`: Checks whether the current sample size of a `SuffStat` object is greater than some threshold
* `SampleGreaterThanEqual`: Checks whether the current sample size of a `SuffStat` object is greater than or equal to some threshold
* `SampleSize`: Returns the current sample size of a `SuffStat` object

For the sake of illustration, imagine we are adding a model called `OurNewModel`. The new sufficient statistic class should look something like:

```cpp
class OurNewModelSuffStat {
 public:
  data_size_t n;
  // Custom sufficient statistics for `OurNewModel`
  double stat1;
  double stat2;
  
  OurNewModelSuffStat() {
    n = 0;
    stat1 = 0.0;
    stat2 = 0.0;
  }
  
  void IncrementSuffStat(ForestDataset& dataset, Eigen::VectorXd& outcome, 
                         ForestTracker& tracker, data_size_t row_idx, int tree_idx) {
    n += 1;
    stat1 += /* accumulate from outcome, dataset, or tracker as needed */;
    stat2 += /* accumulate from outcome, dataset, or tracker as needed */;
  }
  
  void ResetSuffStat() {
    n = 0;
    stat1 = 0.0;
    stat2 = 0.0;
  }
  
  void AddSuffStat(OurNewModelSuffStat& lhs, OurNewModelSuffStat& rhs) {
    n = lhs.n + rhs.n;
    stat1 = lhs.stat1 + rhs.stat1;
    stat2 = lhs.stat2 + rhs.stat2;
  }
  
  void SubtractSuffStat(OurNewModelSuffStat& lhs, OurNewModelSuffStat& rhs) {
    n = lhs.n - rhs.n;
    stat1 = lhs.stat1 - rhs.stat1;
    stat2 = lhs.stat2 - rhs.stat2;
  }
  
  bool SampleGreaterThan(data_size_t threshold) { return n > threshold; }
  bool SampleGreaterThanEqual(data_size_t threshold) { return n >= threshold; }
  data_size_t SampleSize() { return n; }
};
```

## LeafModel Class

Leaf model classes end in `*LeafModel` and implement several methods:

* `SplitLogMarginalLikelihood`: the log marginal likelihood of a potential split, as a function of the sufficient statistics for the newly proposed left and right node (i.e. ignoring data points unaffected by a split)
* `NoSplitLogMarginalLikelihood`: the log marginal likelihood of a node without splitting, as a function of the sufficient statistics for that node
* `SampleLeafParameters`: Sample the leaf node parameters for every leaf in a provided tree, according to this model's conditionally conjugate leaf node posterior
* `RequiresBasis`: Whether or not a model requires regressing on "basis functions" in the leaves

As above, imagine that we are implementing a new model called `OurNewModel`. The new leaf model class should look something like:

```cpp
class OurNewModelLeafModel {
 public:
  OurNewModelLeafModel(/* model parameters */) {
    // Set model parameters
  }
  
  double SplitLogMarginalLikelihood(OurNewModelSuffStat& left_stat, 
                                   OurNewModelSuffStat& right_stat, 
                                   double global_variance) {
    double left_log_ml = /* calculate left node log ML */;
    double right_log_ml = /* calculate right node log ML */;
    return left_log_ml + right_log_ml;
  }
  
  double NoSplitLogMarginalLikelihood(OurNewModelSuffStat& suff_stat, 
                                     double global_variance) {
    double log_ml = /* calculate node log ML */;
    return log_ml;
  }
  
  void SampleLeafParameters(ForestDataset& dataset, ForestTracker& tracker, 
                            ColumnVector& residual, Tree* tree, int tree_num, 
                            double global_variance, std::mt19937& gen) {
    // Sample parameters for every leaf in a tree, update `tree` directly
  }
  
  inline bool RequiresBasis() { return /* true/false based on your model */; }

  // Helper methods below for `SampleLeafParameters`, which depend on the
  // nature of the leaf model (i.e. location-scale, shape-scale, etc...)
  
  double PosteriorParameterMean(OurNewModelSuffStat& suff_stat, 
                               double global_variance) {
    return /* calculate posterior mean */;
  }
  
  double PosteriorParameterVariance(OurNewModelSuffStat& suff_stat, 
                                   double global_variance) {
    return /* calculate posterior variance */;
  }
  
 private:
  // Leaf model parameters
  double param1_;
  double param2_;
};
```

## Factory Functions

Updating the factory pattern to be able to dispatch `OurNewModel` has several steps.

First, we add our model to the `ModelType` enum in `include/stochtree/leaf_model.h`:

```cpp
enum ModelType {
  kConstantLeafGaussian, 
  kUnivariateRegressionLeafGaussian, 
  kMultivariateRegressionLeafGaussian, 
  kLogLinearVariance,
  kOurNewModel  // New model
};
```

Next, we add the `OurNewModelSuffStat` and `OurNewModelLeafModel` classes to the `std::variant` unions in `include/stochtree/leaf_model.h`:

```cpp
using SuffStatVariant = std::variant<GaussianConstantSuffStat, 
                                     GaussianUnivariateRegressionSuffStat, 
                                     GaussianMultivariateRegressionSuffStat, 
                                     LogLinearVarianceSuffStat,
                                     OurNewModelSuffStat>;  // New model

using LeafModelVariant = std::variant<GaussianConstantLeafModel, 
                                      GaussianUnivariateRegressionLeafModel, 
                                      GaussianMultivariateRegressionLeafModel, 
                                      LogLinearVarianceLeafModel,
                                      OurNewModelLeafModel>;  // New model
```

Finally, we update the factory functions to dispatch the correct class from the union based on the `ModelType` integer code

```cpp
static inline SuffStatVariant suffStatFactory(ModelType model_type, int basis_dim = 0) {
  if (model_type == kConstantLeafGaussian) {
    return createSuffStat<GaussianConstantSuffStat>();
  } else if (model_type == kUnivariateRegressionLeafGaussian) {
    return createSuffStat<GaussianUnivariateRegressionSuffStat>();
  } else if (model_type == kMultivariateRegressionLeafGaussian) {
    return createSuffStat<GaussianMultivariateRegressionSuffStat, int>(basis_dim);
  } else if (model_type == kLogLinearVariance) {
    return createSuffStat<LogLinearVarianceSuffStat>();
  } else if (model_type == kOurNewModel) {  // New model
    return createSuffStat<OurNewModelSuffStat>();
  } else {
    Log::Fatal("Incompatible model type provided to suff stat factory");
  }
}

static inline LeafModelVariant leafModelFactory(ModelType model_type, double tau, 
                                                Eigen::MatrixXd& Sigma0, double a, double b) {
  if (model_type == kConstantLeafGaussian) {
    return createLeafModel<GaussianConstantLeafModel, double>(tau);
  } else if (model_type == kUnivariateRegressionLeafGaussian) {
    return createLeafModel<GaussianUnivariateRegressionLeafModel, double>(tau);
  } else if (model_type == kMultivariateRegressionLeafGaussian) {
    return createLeafModel<GaussianMultivariateRegressionLeafModel, Eigen::MatrixXd>(Sigma0);
  } else if (model_type == kLogLinearVariance) {
    return createLeafModel<LogLinearVarianceLeafModel, double, double>(a, b);
  } else if (model_type == kOurNewModel) {  // New model
    return createLeafModel<OurNewModelLeafModel, /* initializer types */>(/* initializer values */);
  } else {
    Log::Fatal("Incompatible model type provided to leaf model factory");
  }
}
```

## R Wrapper

To reflect this change through to the R interface, we first add the new model to the logic in the `sample_gfr_one_iteration_cpp` 
and `sample_mcmc_one_iteration_cpp` functions in the `src/sampler.cpp` file

```cpp
// Convert leaf model type to enum
StochTree::ModelType model_type;
if (leaf_model_int == 0) model_type = StochTree::ModelType::kConstantLeafGaussian;
else if (leaf_model_int == 1) model_type = StochTree::ModelType::kUnivariateRegressionLeafGaussian;
else if (leaf_model_int == 2) model_type = StochTree::ModelType::kMultivariateRegressionLeafGaussian;
else if (leaf_model_int == 3) model_type = StochTree::ModelType::kLogLinearVariance;
else if (leaf_model_int == 4) model_type = StochTree::ModelType::kOurNewModel;  // New model
else StochTree::Log::Fatal("Invalid model type");
```

Then we add the integer code for `OurNewModel` to the `leaf_model_type` field signature in `R/config.R`

```r
#' @field leaf_model_type Integer specifying the leaf model type (0 = constant leaf, 1 = univariate leaf regression, 2 = multivariate leaf regression, 4 = your new model)
leaf_model_type = NULL,
```

## Python Wrapper

Python's C++ wrapper code contains similar logic to that of the `src/sampler.cpp` file in the R interface. 
Add the new model to the `SampleOneIteration` method of the `ForestSamplerCpp` class in the `src/py_stochtree.cpp` file.

```cpp
// Convert leaf model type to enum
StochTree::ModelType model_type;
if (leaf_model_int == 0) model_type = StochTree::ModelType::kConstantLeafGaussian;
else if (leaf_model_int == 1) model_type = StochTree::ModelType::kUnivariateRegressionLeafGaussian;
else if (leaf_model_int == 2) model_type = StochTree::ModelType::kMultivariateRegressionLeafGaussian;
else if (leaf_model_int == 3) model_type = StochTree::ModelType::kLogLinearVariance;
else if (leaf_model_int == 4) model_type = StochTree::ModelType::kOurNewModel;  // New model
else StochTree::Log::Fatal("Invalid model type");
```

And then add the integer code for your new model to the `leaf_model_type` documentation in `stochtree/config.py`

## Additional Considerations

Some of the `SuffStat` and `LeafModel` classes currently supported by stochtree require extra initialization parameters. 
We support this via [variadic templates](https://en.cppreference.com/w/cpp/language/parameter_pack.html) in C++

```cpp
template <typename LeafModel, typename LeafSuffStat, typename... LeafSuffStatConstructorArgs>
static inline void GFRSampleOneIter(TreeEnsemble& active_forest, ForestTracker& tracker, ForestContainer& forests, LeafModel& leaf_model, ForestDataset& dataset, 
                                    ColumnVector& residual, TreePrior& tree_prior, std::mt19937& gen, std::vector<double>& variable_weights, 
                                    std::vector<int>& sweep_update_indices, double global_variance, std::vector<FeatureType>& feature_types, int cutpoint_grid_size, 
                                    bool keep_forest, bool pre_initialized, bool backfitting, int num_features_subsample, LeafSuffStatConstructorArgs&... leaf_suff_stat_args)
```

If your new classes take any initialization arguments, these are provided in the factory functions, so you might also need to edit the signature of the factory functions.
