# Class that wraps the "persistent" aspects of a C++ random effects model

## Description

Coordinates various C++ random effects classes and persists those
needed for prediction / serialization

## Public fields

* `rfx_container_ptr`: External pointer to a C++ StochTree::RandomEffectsContainer class
* `label_mapper_ptr`: External pointer to a C++ StochTree::LabelMapper class
* `training_group_ids`: Unique vector of group IDs that were in the training dataset

## Methods

### Public methods

* [`RandomEffectSamples$new()`](#method-RandomEffectSamples-new)
* [`RandomEffectSamples$load_in_session()`](#method-RandomEffectSamples-load_in_session)
* [`RandomEffectSamples$load_from_json()`](#method-RandomEffectSamples-load_from_json)
* [`RandomEffectSamples$append_from_json()`](#method-RandomEffectSamples-append_from_json)
* [`RandomEffectSamples$load_from_json_string()`](#method-RandomEffectSamples-load_from_json_string)
* [`RandomEffectSamples$append_from_json_string()`](#method-RandomEffectSamples-append_from_json_string)
* [`RandomEffectSamples$predict()`](#method-RandomEffectSamples-predict)
* [`RandomEffectSamples$extract_parameter_samples()`](#method-RandomEffectSamples-extract_parameter_samples)
* [`RandomEffectSamples$extract_label_mapping()`](#method-RandomEffectSamples-extract_label_mapping)

### Method `new()`

Create a new RandomEffectSamples object.

#### Usage

```
RandomEffectSamples$new()
```

#### Returns

A new `RandomEffectSamples` object.

### Method `load_in_session()`

Construct RandomEffectSamples object from other "in-session" R objects

#### Usage

```
RandomEffectSamples$load_in_session(
  num_components,
  num_groups,
  random_effects_tracker
)
```

#### Arguments

* `num_components`: Number of "components" or bases defining the random effects regression
* `num_groups`: Number of random effects groups
* `random_effects_tracker`: Object of type `RandomEffectsTracker`

#### Returns

NULL

### Method `load_from_json()`

Construct RandomEffectSamples object from a json object

#### Usage

```
RandomEffectSamples$load_from_json(
  json_object,
  json_rfx_container_label,
  json_rfx_mapper_label,
  json_rfx_groupids_label
)
```

#### Arguments

* `json_object`: Object of class `CppJson`
* `json_rfx_container_label`: Label referring to a particular rfx sample container (i.e. "random_effect_container_0") in the overall json hierarchy
* `json_rfx_mapper_label`: Label referring to a particular rfx label mapper (i.e. "random_effect_label_mapper_0") in the overall json hierarchy
* `json_rfx_groupids_label`: Label referring to a particular set of rfx group IDs (i.e. "random_effect_groupids_0") in the overall json hierarchy

#### Returns

A new `RandomEffectSamples` object.

### Method `append_from_json()`

Append random effect draws to `RandomEffectSamples` object from a json object

#### Usage

```
RandomEffectSamples$append_from_json(
  json_object,
  json_rfx_container_label,
  json_rfx_mapper_label,
  json_rfx_groupids_label
)
```

#### Arguments

* `json_object`: Object of class `CppJson`
* `json_rfx_container_label`: Label referring to a particular rfx sample container (i.e. "random_effect_container_0") in the overall json hierarchy
* `json_rfx_mapper_label`: Label referring to a particular rfx label mapper (i.e. "random_effect_label_mapper_0") in the overall json hierarchy
* `json_rfx_groupids_label`: Label referring to a particular set of rfx group IDs (i.e. "random_effect_groupids_0") in the overall json hierarchy

#### Returns

NULL (updates object in-place)

### Method `load_from_json_string()`

Construct RandomEffectSamples object from a json object

#### Usage

```
RandomEffectSamples$load_from_json_string(
  json_string,
  json_rfx_container_label,
  json_rfx_mapper_label,
  json_rfx_groupids_label
)
```

#### Arguments

* `json_string`: JSON string which parses into object of class `CppJson`
* `json_rfx_container_label`: Label referring to a particular rfx sample container (i.e. "random_effect_container_0") in the overall json hierarchy
* `json_rfx_mapper_label`: Label referring to a particular rfx label mapper (i.e. "random_effect_label_mapper_0") in the overall json hierarchy
* `json_rfx_groupids_label`: Label referring to a particular set of rfx group IDs (i.e. "random_effect_groupids_0") in the overall json hierarchy

#### Returns

A new `RandomEffectSamples` object.

### Method `append_from_json_string()`

Append random effect draws to `RandomEffectSamples` object from a json object

#### Usage

```
RandomEffectSamples$append_from_json_string(
  json_string,
  json_rfx_container_label,
  json_rfx_mapper_label,
  json_rfx_groupids_label
)
```

#### Arguments

* `json_string`: JSON string which parses into object of class `CppJson`
* `json_rfx_container_label`: Label referring to a particular rfx sample container (i.e. "random_effect_container_0") in the overall json hierarchy
* `json_rfx_mapper_label`: Label referring to a particular rfx label mapper (i.e. "random_effect_label_mapper_0") in the overall json hierarchy
* `json_rfx_groupids_label`: Label referring to a particular set of rfx group IDs (i.e. "random_effect_groupids_0") in the overall json hierarchy

#### Returns

NULL (updates object in-place)

### Method `predict()`

Predict random effects for each observation implied by `rfx_group_ids` and `rfx_basis`.
If a random effects model is "intercept-only" the `rfx_basis` will be a vector of ones of size `length(rfx_group_ids)`.

#### Usage

```
RandomEffectSamples$predict(rfx_group_ids, rfx_basis = NULL)
```

#### Arguments

* `rfx_group_ids`: Indices of random effects groups in a prediction set
* `rfx_basis`: (Optional ) Basis used for random effects prediction

#### Returns

Matrix with as many rows as observations provided and as many columns as samples drawn of the model.

### Method `extract_parameter_samples()`

Extract the random effects parameters sampled. With the "redundant parameterization"
of Gelman et al (2008), this includes four parameters: alpha (the "working parameter"
shared across every group), xi (the "group parameter" sampled separately for each group),
beta (the product of alpha and xi, which corresponds to the overall group-level random effects),
and sigma (group-independent prior variance for each component of xi).

#### Usage

```
RandomEffectSamples$extract_parameter_samples()
```

#### Returns

List of arrays. The alpha array has dimension (`num_components`, `num_samples`) and is simply a vector if `num_components = 1`.
The xi and beta arrays have dimension (`num_components`, `num_groups`, `num_samples`) and is simply a matrix if `num_components = 1`.
The sigma array has dimension (`num_components`, `num_samples`) and is simply a vector if `num_components = 1`.

### Method `extract_label_mapping()`

Convert the mapping of group IDs to random effect components indices from C++ to R native format

#### Usage

```
RandomEffectSamples$extract_label_mapping()
```

#### Returns

List mapping group ID to random effect components.

