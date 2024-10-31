---
title: RandomEffectsTracker
---

# Class that defines a "tracker" for random effects models, most notably

## Description

Stores a mapping from every observation to its group index, a mapping
from group indices to the training sample observations available in that
group, and predictions for each observation.

## Public fields

* `rfx_tracker_ptr`: External pointer to a C++ StochTree::RandomEffectsTracker class

## Methods

### Public methods

* [`RandomEffectsTracker$new()`](#method-RandomEffectsTracker-new)

### Method `new()`

Create a new RandomEffectsTracker object.

#### Usage

```
RandomEffectsTracker$new(rfx_group_indices)
```

#### Arguments

* `rfx_group_indices`: Integer indices indicating groups used to define random effects

#### Returns

A new `RandomEffectsTracker` object.

