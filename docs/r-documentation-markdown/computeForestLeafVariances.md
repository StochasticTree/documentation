# Compute vector of forest leaf scale parameters

## Description

Return each forest's leaf node scale parameters.
If leaf scale is not sampled for the forest in question, throws an error that the
leaf model does not have a stochastic scale parameter.

## Usage

```r
computeForestLeafVariances(model_object, forest_type, forest_inds = NULL)
```

## Arguments

* `model_object`: Object of type `bartmodel` or `bcf` corresponding to a BART / BCF model with at least one forest sample
* `forest_type`: Which forest to use from `model_object`.
Valid inputs depend on the model type, and whether or not a given forest was sampled in that model.***1. BART***
* `'mean'`: Extracts leaf indices for the mean forest
* `'variance'`: Extracts leaf indices for the variance forest***2. BCF***
* `'prognostic'`: Extracts leaf indices for the prognostic forest
* `'treatment'`: Extracts leaf indices for the treatment effect forest
* `'variance'`: Extracts leaf indices for the variance forest
* `forest_inds`: (Optional) Indices of the forest sample(s) for which to compute leaf indices. If not provided,
this function will return leaf indices for every sample of a forest.
This function uses 1-indexing, so the first forest sample corresponds to `forest_num = 1`, and so on.

## Value

Vector of size `length(forest_inds)` with the leaf scale parameter for each requested forest.

