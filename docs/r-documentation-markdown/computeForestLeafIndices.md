---
title: computeForestLeafIndices
---

# Compute vector of forest leaf indices

## Description

Compute and return a vector representation of a forest's leaf predictions for
every observation in a dataset.
The vector has a "row-major" format that can be easily re-represented as
as a CSR sparse matrix: elements are organized so that the first `n` elements
correspond to leaf predictions for all `n` observations in a dataset for the
first tree in an ensemble, the next `n` elements correspond to predictions for
the second tree and so on. The "data" for each element corresponds to a uniquely
mapped column index that corresponds to a single leaf of a single tree (i.e.
if tree 1 has 3 leaves, its column indices range from 0 to 2, and then tree 2's
leaf indices begin at 3, etc...).

## Usage

```r
computeForestLeafIndices(
  model_object,
  covariates,
  forest_type,
  forest_inds = NULL
)
```

## Arguments

* `model_object`: Object of type `bartmodel` or `bcf` corresponding to a BART / BCF model with at least one forest sample
* `covariates`: Covariates to use for prediction. Must have the same dimensions / column types as the data used to train a forest.
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

List of vectors. Each vector is of size `num_obs * num_trees`, where `num_obs = nrow(covariates)`and `num_trees` is the number of trees in the relevant forest of `model_object`.

