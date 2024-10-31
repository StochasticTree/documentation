---
title: oneHotEncode
---

# Convert a vector of unordered categorical data (either numeric or character

## Description

This procedure assumes that a reference set of observations for this variable
(typically a training set that was used to sample a forest) has already been
one-hot encoded and that the unique levels of the training set variable are
available (and passed as `unique_levels`). Test set observations that contain
categories not in `unique_levels` will all be mapped to the last column of
this matrix

## Usage

```r
oneHotEncode(x_input, unique_levels)
```

## Arguments

* `x_input`: Vector of unordered categorical data (typically either strings
integers, but this function also accepts floating point data).
* `unique_levels`: Unique values of the categorical variable used to create
the initial one-hot matrix (typically a training set)

## Value

Binary one-hot matrix

## Examples

```r
x \<- sample(1:8, 100, TRUE)
x_test \<- sample(1:9, 10, TRUE)
x_onehot \<- oneHotEncode(x_test, levels(factor(x)))
```

