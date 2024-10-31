# Create a forest dataset object

## Description

Create a forest dataset object

## Usage

```r
createForestDataset(covariates, basis = NULL, variance_weights = NULL)
```

## Arguments

* `covariates`: Matrix of covariates
* `basis`: (Optional) Matrix of bases used to define a leaf regression
* `variance_weights`: (Optional) Vector of observation-specific variance weights

## Value

`ForestDataset` object

