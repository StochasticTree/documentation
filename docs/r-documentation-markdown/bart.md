---
title: bart
---

# Run the BART algorithm for supervised learning.

## Description

Run the BART algorithm for supervised learning.

## Usage

```r
bart(
  X_train,
  y_train,
  W_train = NULL,
  group_ids_train = NULL,
  rfx_basis_train = NULL,
  X_test = NULL,
  W_test = NULL,
  group_ids_test = NULL,
  rfx_basis_test = NULL,
  num_gfr = 5,
  num_burnin = 0,
  num_mcmc = 100,
  params = list()
)
```

## Arguments

* `X_train`: Covariates used to split trees in the ensemble. May be provided either as a dataframe or a matrix.
Matrix covariates will be assumed to be all numeric. Covariates passed as a dataframe will be
preprocessed based on the variable types (e.g. categorical columns stored as unordered factors will be one-hot encoded,
categorical columns stored as ordered factors will passed as integers to the core algorithm, along with the metadata
that the column is ordered categorical).
* `y_train`: Outcome to be modeled by the ensemble.
* `W_train`: (Optional) Bases used to define a regression model `y ~ W` in
each leaf of each regression tree. By default, BART assumes constant leaf node
parameters, implicitly regressing on a constant basis of ones (i.e. `y ~ 1`).
* `group_ids_train`: (Optional) Group labels used for an additive random effects model.
* `rfx_basis_train`: (Optional) Basis for "random-slope" regression in an additive random effects model.
If `group_ids_train` is provided with a regression basis, an intercept-only random effects model
will be estimated.
* `X_test`: (Optional) Test set of covariates used to define "out of sample" evaluation data.
May be provided either as a dataframe or a matrix, but the format of `X_test` must be consistent with
that of `X_train`.
* `W_test`: (Optional) Test set of bases used to define "out of sample" evaluation data.
While a test set is optional, the structure of any provided test set must match that
of the training set (i.e. if both X_train and W_train are provided, then a test set must
consist of X_test and W_test with the same number of columns).
* `group_ids_test`: (Optional) Test set group labels used for an additive random effects model.
We do not currently support (but plan to in the near future), test set evaluation for group labels
that were not in the training set.
* `rfx_basis_test`: (Optional) Test set basis for "random-slope" regression in additive random effects model.
* `num_gfr`: Number of "warm-start" iterations run using the grow-from-root algorithm (He and Hahn, 2021). Default: 5.
* `num_burnin`: Number of "burn-in" iterations of the MCMC sampler. Default: 0.
* `num_mcmc`: Number of "retained" iterations of the MCMC sampler. Default: 100.
* `params`: The list of model parameters, each of which has a default value.***1. Global Parameters***
* `cutpoint_grid_size` Maximum size of the "grid" of potential cutpoints to consider. Default: `100`.
* `sigma2_init` Starting value of global error variance parameter. Calibrated internally as `pct_var_sigma2_init*var((y-mean(y))/sd(y))` if not set.
* `pct_var_sigma2_init` Percentage of standardized outcome variance used to initialize global error variance parameter. Default: `1`. Superseded by `sigma2_init`.
* `variance_scale` Variance after the data have been scaled. Default: `1`.
* `a_global` Shape parameter in the `IG(a_global, b_global)` global error variance model. Default: `0`.
* `b_global` Scale parameter in the `IG(a_global, b_global)` global error variance model. Default: `0`.
* `random_seed` Integer parameterizing the C++ random number generator. If not specified, the C++ random number generator is seeded according to `std::random_device`.
* `sample_sigma_global` Whether or not to update the `sigma^2` global error variance parameter based on `IG(a_global, b_global)`. Default: `TRUE`.
* `keep_burnin` Whether or not "burnin" samples should be included in cached predictions. Default `FALSE`. Ignored if `num_mcmc = 0`.
* `keep_gfr` Whether or not "grow-from-root" samples should be included in cached predictions. Default `TRUE`. Ignored if `num_mcmc = 0`.
* `standardize` Whether or not to standardize the outcome (and store the offset / scale in the model object). Default: `TRUE`.
* `verbose` Whether or not to print progress during the sampling loops. Default: `FALSE`.***2. Mean Forest Parameters***
* `num_trees_mean` Number of trees in the ensemble for the conditional mean model. Default: `200`. If `num_trees_mean = 0`, the conditional mean will not be modeled using a forest, and the function will only proceed if `num_trees_variance \> 0`.
* `sample_sigma_leaf` Whether or not to update the `tau` leaf scale variance parameter based on `IG(a_leaf, b_leaf)`. Cannot (currently) be set to true if `ncol(W_train)\>1`. Default: `FALSE`.***2.1. Tree Prior Parameters***
* `alpha_mean` Prior probability of splitting for a tree of depth 0 in the mean model. Tree split prior combines `alpha_mean` and `beta_mean` via `alpha_mean*(1+node_depth)^-beta_mean`. Default: `0.95`.
* `beta_mean` Exponent that decreases split probabilities for nodes of depth \> 0 in the mean model. Tree split prior combines `alpha_mean` and `beta_mean` via `alpha_mean*(1+node_depth)^-beta_mean`. Default: `2`.
* `min_samples_leaf_mean` Minimum allowable size of a leaf, in terms of training samples, in the mean model. Default: `5`.
* `max_depth_mean` Maximum depth of any tree in the ensemble in the mean model. Default: `10`. Can be overridden with `-1` which does not enforce any depth limits on trees.***2.2. Leaf Model Parameters***
* `variable_weights_mean` Numeric weights reflecting the relative probability of splitting on each variable in the mean forest. Does not need to sum to 1 but cannot be negative. Defaults to `rep(1/ncol(X_train), ncol(X_train))` if not set here.
* `sigma_leaf_init` Starting value of leaf node scale parameter. Calibrated internally as `1/num_trees_mean` if not set here.
* `a_leaf` Shape parameter in the `IG(a_leaf, b_leaf)` leaf node parameter variance model. Default: `3`.
* `b_leaf` Scale parameter in the `IG(a_leaf, b_leaf)` leaf node parameter variance model. Calibrated internally as `0.5/num_trees_mean` if not set here.***3. Conditional Variance Forest Parameters***
* `num_trees_variance` Number of trees in the ensemble for the conditional variance model. Default: `0`. Variance is only modeled using a tree / forest if `num_trees_variance \> 0`.
* `variance_forest_init` Starting value of root forest prediction in conditional (heteroskedastic) error variance model. Calibrated internally as `log(pct_var_variance_forest_init*var((y-mean(y))/sd(y)))/num_trees_variance` if not set.
* `pct_var_variance_forest_init` Percentage of standardized outcome variance used to initialize global error variance parameter. Default: `1`. Superseded by `variance_forest_init`.***3.1. Tree Prior Parameters***
* `alpha_variance` Prior probability of splitting for a tree of depth 0 in the variance model. Tree split prior combines `alpha_variance` and `beta_variance` via `alpha_variance*(1+node_depth)^-beta_variance`. Default: `0.95`.
* `beta_variance` Exponent that decreases split probabilities for nodes of depth \> 0 in the variance model. Tree split prior combines `alpha_variance` and `beta_variance` via `alpha_variance*(1+node_depth)^-beta_variance`. Default: `2`.
* `min_samples_leaf_variance` Minimum allowable size of a leaf, in terms of training samples, in the variance model. Default: `5`.
* `max_depth_variance` Maximum depth of any tree in the ensemble in the variance model. Default: `10`. Can be overridden with `-1` which does not enforce any depth limits on trees.***3.2. Leaf Model Parameters***
* `variable_weights_variance` Numeric weights reflecting the relative probability of splitting on each variable in the variance forest. Does not need to sum to 1 but cannot be negative. Defaults to `rep(1/ncol(X_train), ncol(X_train))` if not set here.
* `sigma_leaf_init` Starting value of leaf node scale parameter. Calibrated internally as `1/num_trees_mean` if not set here.
* `a_forest` Shape parameter in the `IG(a_forest, b_forest)` conditional error variance model (which is only sampled if `num_trees_variance \> 0`). Calibrated internally as `num_trees_variance / 1.5^2 + 0.5` if not set.
* `b_forest` Scale parameter in the `IG(a_forest, b_forest)` conditional error variance model (which is only sampled if `num_trees_variance \> 0`). Calibrated internally as `num_trees_variance / 1.5^2` if not set.

## Value

List of sampling outputs and a wrapper around the sampled forests (which can be used for in-memory prediction on new data, or serialized to JSON on disk).

## Examples

```r
n \<- 100
p \<- 5
X \<- matrix(runif(n*p), ncol = p)
f_XW \<- (
```r
((0 \<= X[,1]) & (0.25 \> X[,1])) * (-7.5) + 
((0.25 \<= X[,1]) & (0.5 \> X[,1])) * (-2.5) + 
((0.5 \<= X[,1]) & (0.75 \> X[,1])) * (2.5) + 
((0.75 \<= X[,1]) & (1 \> X[,1])) * (7.5)
```
)
noise_sd \<- 1
y \<- f_XW + rnorm(n, 0, noise_sd)
test_set_pct \<- 0.2
n_test \<- round(test_set_pct*n)
n_train \<- n - n_test
test_inds \<- sort(sample(1:n, n_test, replace = FALSE))
train_inds \<- (1:n)[!((1:n) %in% test_inds)]
X_test \<- X[test_inds,]
X_train \<- X[train_inds,]
y_test \<- y[test_inds]
y_train \<- y[train_inds]
bart_model \<- bart(X_train = X_train, y_train = y_train, X_test = X_test)
# plot(rowMeans(bart_model$y_hat_test), y_test, xlab = "predicted", ylab = "actual")
# abline(0,1,col="red",lty=3,lwd=3)
```

