---
title: ForestDataset
---

# Dataset used to sample a forest

## Description

A dataset consists of three matrices / vectors: covariates,
bases, and variance weights. Both the basis vector and variance
weights are optional.

## Public fields

* `data_ptr`: External pointer to a C++ ForestDataset class

## Methods

### Public methods

* [`ForestDataset$new()`](#method-ForestDataset-new)
* [`ForestDataset$update_basis()`](#method-ForestDataset-update_basis)
* [`ForestDataset$num_observations()`](#method-ForestDataset-num_observations)
* [`ForestDataset$num_covariates()`](#method-ForestDataset-num_covariates)
* [`ForestDataset$num_basis()`](#method-ForestDataset-num_basis)
* [`ForestDataset$has_basis()`](#method-ForestDataset-has_basis)
* [`ForestDataset$has_variance_weights()`](#method-ForestDataset-has_variance_weights)

### Method `new()`

Create a new ForestDataset object.

#### Usage

```
ForestDataset$new(covariates, basis = NULL, variance_weights = NULL)
```

#### Arguments

* `covariates`: Matrix of covariates
* `basis`: (Optional) Matrix of bases used to define a leaf regression
* `variance_weights`: (Optional) Vector of observation-specific variance weights

#### Returns

A new `ForestDataset` object.

### Method `update_basis()`

Update basis matrix in a dataset

#### Usage

```
ForestDataset$update_basis(basis)
```

#### Arguments

* `basis`: Updated matrix of bases used to define a leaf regression

### Method `num_observations()`

Return number of observations in a `ForestDataset` object

#### Usage

```
ForestDataset$num_observations()
```

#### Returns

Observation count

### Method `num_covariates()`

Return number of covariates in a `ForestDataset` object

#### Usage

```
ForestDataset$num_covariates()
```

#### Returns

Covariate count

### Method `num_basis()`

Return number of bases in a `ForestDataset` object

#### Usage

```
ForestDataset$num_basis()
```

#### Returns

Basis count

### Method `has_basis()`

Whether or not a dataset has a basis matrix

#### Usage

```
ForestDataset$has_basis()
```

#### Returns

True if basis matrix is loaded, false otherwise

### Method `has_variance_weights()`

Whether or not a dataset has variance weights

#### Usage

```
ForestDataset$has_variance_weights()
```

#### Returns

True if variance weights are loaded, false otherwise

