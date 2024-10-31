---
title: createForestContainer
---

# Create a container of forest samples

## Description

Create a container of forest samples

## Usage

```r
createForestContainer(
  num_trees,
  output_dimension = 1,
  is_leaf_constant = F,
  is_exponentiated = F
)
```

## Arguments

* `num_trees`: Number of trees
* `output_dimension`: Dimensionality of the outcome model
* `is_leaf_constant`: Whether leaf is constant
* `is_exponentiated`: Whether forest predictions should be exponentiated before being returned

## Value

`ForestSamples` object

