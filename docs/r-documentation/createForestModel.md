# Create a forest model object

## Description

Create a forest model object

## Usage

```r
createForestModel(
  forest_dataset,
  feature_types,
  num_trees,
  n,
  alpha,
  beta,
  min_samples_leaf,
  max_depth
)
```

## Arguments

* `forest_dataset`: `ForestDataset` object, used to initialize forest sampling data structures
* `feature_types`: Feature types (integers where 0 = numeric, 1 = ordered categorical, 2 = unordered categorical)
* `num_trees`: Number of trees in the forest being sampled
* `n`: Number of observations in `forest_dataset`
* `alpha`: Root node split probability in tree prior
* `beta`: Depth prior penalty in tree prior
* `min_samples_leaf`: Minimum number of samples in a tree leaf

## Value

`ForestModel` object

