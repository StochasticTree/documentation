---
title: Outcome
---

# Outcome / partial residual used to sample an additive model.

## Description

The outcome class is wrapper around a vector of (mutable)
outcomes for ML tasks (supervised learning, causal inference).
When an additive tree ensemble is sampled, the outcome used to
sample a specific model term is the "partial residual" consisting
of the outcome minus the predictions of every other model term
(trees, group random effects, etc...).

## Public fields

* `data_ptr`: External pointer to a C++ Outcome class

## Methods

### Public methods

* [`Outcome$new()`](#method-Outcome-new)
* [`Outcome$get_data()`](#method-Outcome-get_data)
* [`Outcome$add_vector()`](#method-Outcome-add_vector)
* [`Outcome$subtract_vector()`](#method-Outcome-subtract_vector)
* [`Outcome$update_data()`](#method-Outcome-update_data)

### Method `new()`

Create a new Outcome object.

#### Usage

```
Outcome$new(outcome)
```

#### Arguments

* `outcome`: Vector of outcome values

#### Returns

A new `Outcome` object.

### Method `get_data()`

Extract raw data in R from the underlying C++ object

#### Usage

```
Outcome$get_data()
```

#### Returns

R vector containing (copy of) the values in `Outcome` object

### Method `add_vector()`

Update the current state of the outcome (i.e. partial residual) data by adding the values of `update_vector`

#### Usage

```
Outcome$add_vector(update_vector)
```

#### Arguments

* `update_vector`: Vector to be added to outcome

#### Returns

NULL

### Method `subtract_vector()`

Update the current state of the outcome (i.e. partial residual) data by subtracting the values of `update_vector`

#### Usage

```
Outcome$subtract_vector(update_vector)
```

#### Arguments

* `update_vector`: Vector to be subtracted from outcome

#### Returns

NULL

### Method `update_data()`

Update the current state of the outcome (i.e. partial residual) data by replacing each element with the elements of `new_vector`

#### Usage

```
Outcome$update_data(new_vector)
```

#### Arguments

* `new_vector`: Vector from which to overwrite the current data

#### Returns

NULL

