---
title: RandomEffectsModel
---

# The core "model" class for sampling random effects.

## Description

Stores current model state, prior parameters, and procedures for
sampling from the conditional posterior of each parameter.

## Public fields

* `rfx_model_ptr`: External pointer to a C++ StochTree::RandomEffectsModel class
* `num_groups`: Number of groups in the random effects model
* `num_components`: Number of components (i.e. dimension of basis) in the random effects model

## Methods

### Public methods

* [`RandomEffectsModel$new()`](#method-RandomEffectsModel-new)
* [`RandomEffectsModel$sample_random_effect()`](#method-RandomEffectsModel-sample_random_effect)
* [`RandomEffectsModel$predict()`](#method-RandomEffectsModel-predict)
* [`RandomEffectsModel$set_working_parameter()`](#method-RandomEffectsModel-set_working_parameter)
* [`RandomEffectsModel$set_group_parameters()`](#method-RandomEffectsModel-set_group_parameters)
* [`RandomEffectsModel$set_working_parameter_cov()`](#method-RandomEffectsModel-set_working_parameter_cov)
* [`RandomEffectsModel$set_group_parameter_cov()`](#method-RandomEffectsModel-set_group_parameter_cov)
* [`RandomEffectsModel$set_variance_prior_shape()`](#method-RandomEffectsModel-set_variance_prior_shape)
* [`RandomEffectsModel$set_variance_prior_scale()`](#method-RandomEffectsModel-set_variance_prior_scale)

### Method `new()`

Create a new RandomEffectsModel object.

#### Usage

```
RandomEffectsModel$new(num_components, num_groups)
```

#### Arguments

* `num_components`: Number of "components" or bases defining the random effects regression
* `num_groups`: Number of random effects groups

#### Returns

A new `RandomEffectsModel` object.

### Method `sample_random_effect()`

Sample from random effects model.

#### Usage

```
RandomEffectsModel$sample_random_effect(
  rfx_dataset,
  residual,
  rfx_tracker,
  rfx_samples,
  global_variance,
  rng
)
```

#### Arguments

* `rfx_dataset`: Object of type `RandomEffectsDataset`
* `residual`: Object of type `Outcome`
* `rfx_tracker`: Object of type `RandomEffectsTracker`
* `rfx_samples`: Object of type `RandomEffectSamples`
* `global_variance`: Scalar global variance parameter
* `rng`: Object of type `CppRNG`

#### Returns

None

### Method `predict()`

Predict from (a single sample of a) random effects model.

#### Usage

```
RandomEffectsModel$predict(rfx_dataset, rfx_tracker)
```

#### Arguments

* `rfx_dataset`: Object of type `RandomEffectsDataset`
* `rfx_tracker`: Object of type `RandomEffectsTracker`

#### Returns

Vector of predictions with size matching number of observations in rfx_dataset

### Method `set_working_parameter()`

Set value for the "working parameter." This is typically
used for initialization, but could also be used to interrupt
or override the sampler.

#### Usage

```
RandomEffectsModel$set_working_parameter(value)
```

#### Arguments

* `value`: Parameter input

#### Returns

None

### Method `set_group_parameters()`

Set value for the "group parameters." This is typically
used for initialization, but could also be used to interrupt
or override the sampler.

#### Usage

```
RandomEffectsModel$set_group_parameters(value)
```

#### Arguments

* `value`: Parameter input

#### Returns

None

### Method `set_working_parameter_cov()`

Set value for the working parameter covariance. This is typically
used for initialization, but could also be used to interrupt
or override the sampler.

#### Usage

```
RandomEffectsModel$set_working_parameter_cov(value)
```

#### Arguments

* `value`: Parameter input

#### Returns

None

### Method `set_group_parameter_cov()`

Set value for the group parameter covariance. This is typically
used for initialization, but could also be used to interrupt
or override the sampler.

#### Usage

```
RandomEffectsModel$set_group_parameter_cov(value)
```

#### Arguments

* `value`: Parameter input

#### Returns

None

### Method `set_variance_prior_shape()`

Set shape parameter for the group parameter variance prior.

#### Usage

```
RandomEffectsModel$set_variance_prior_shape(value)
```

#### Arguments

* `value`: Parameter input

#### Returns

None

### Method `set_variance_prior_scale()`

Set shape parameter for the group parameter variance prior.

#### Usage

```
RandomEffectsModel$set_variance_prior_scale(value)
```

#### Arguments

* `value`: Parameter input

#### Returns

None

