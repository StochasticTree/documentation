---
title: computeMaxLeafIndex
---

# Compute and return the largest possible leaf index computable by

## Description

Compute and return the largest possible leaf index computable by `computeForestLeafIndices` for the forests in a designated forest sample container.

## Usage

```r
computeMaxLeafIndex(model_object, covariates, forest_type, forest_inds = NULL)
```

## Arguments

* `model_object`: Object of type `bartmodel` or `bcf` corresponding to a BART / BCF model with at least one forest sample
* `covariates`: Covariates to use for prediction. Must have the same dimensions / column types as the data used to train a forest.
* `forest_type`: Which forest to use from `model_object`.
Valid inputs depend on the model type, and whether or not a***1. BART***
* `'mean'`: Extracts leaf indices for the mean forest
* `'variance'`: Extracts leaf indices for the variance forest***2. BCF***
* `'prognostic'`: Extracts leaf indices for the prognostic forest
* `'treatment'`: Extracts leaf indices for the treatment effect forest
* `'variance'`: Extracts leaf indices for the variance forest
* `forest_inds`: (Optional) Indices of the forest sample(s) for which to compute leaf indices. If not provided,
this function will return leaf indices for every sample of a forest.
This function uses 1-indexing, so the first forest sample corresponds to `forest_num = 1`, and so on.

## Value

Vector containing the largest possible leaf index computable by `computeForestLeafIndices` for the forests in a designated forest sample container.

