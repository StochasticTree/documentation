---
title: createRandomEffectsDataset
---

# Create a random effects dataset object

## Description

Create a random effects dataset object

## Usage

```r
createRandomEffectsDataset(group_labels, basis, variance_weights = NULL)
```

## Arguments

* `group_labels`: Vector of group labels
* `basis`: Matrix of bases used to define the random effects regression (for an intercept-only model, pass an array of ones)
* `variance_weights`: (Optional) Vector of observation-specific variance weights

## Value

`RandomEffectsDataset` object

