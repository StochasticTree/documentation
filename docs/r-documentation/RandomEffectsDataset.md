# Dataset used to sample a random effects model

## Description

A dataset consists of three matrices / vectors: group labels,
bases, and variance weights. Variance weights are optional.

## Public fields

* `data_ptr`: External pointer to a C++ RandomEffectsDataset class

## Methods

### Public methods

* [`RandomEffectsDataset$new()`](#method-RandomEffectsDataset-new)
* [`RandomEffectsDataset$num_observations()`](#method-RandomEffectsDataset-num_observations)
* [`RandomEffectsDataset$has_group_labels()`](#method-RandomEffectsDataset-has_group_labels)
* [`RandomEffectsDataset$has_basis()`](#method-RandomEffectsDataset-has_basis)
* [`RandomEffectsDataset$has_variance_weights()`](#method-RandomEffectsDataset-has_variance_weights)

### Method `new()`

Create a new RandomEffectsDataset object.

#### Usage

```
RandomEffectsDataset$new(group_labels, basis, variance_weights = NULL)
```

#### Arguments

* `group_labels`: Vector of group labels
* `basis`: Matrix of bases used to define the random effects regression (for an intercept-only model, pass an array of ones)
* `variance_weights`: (Optional) Vector of observation-specific variance weights

#### Returns

A new `RandomEffectsDataset` object.

### Method `num_observations()`

Return number of observations in a `RandomEffectsDataset` object

#### Usage

```
RandomEffectsDataset$num_observations()
```

#### Returns

Observation count

### Method `has_group_labels()`

Whether or not a dataset has group label indices

#### Usage

```
RandomEffectsDataset$has_group_labels()
```

#### Returns

True if group label vector is loaded, false otherwise

### Method `has_basis()`

Whether or not a dataset has a basis matrix

#### Usage

```
RandomEffectsDataset$has_basis()
```

#### Returns

True if basis matrix is loaded, false otherwise

### Method `has_variance_weights()`

Whether or not a dataset has variance weights

#### Usage

```
RandomEffectsDataset$has_variance_weights()
```

#### Returns

True if variance weights are loaded, false otherwise

