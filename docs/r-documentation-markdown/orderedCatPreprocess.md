---
title: orderedCatPreprocess
---

# Run some simple preprocessing of ordered categorical variables, converting

## Description

Run some simple preprocessing of ordered categorical variables, converting
ordered levels to integers if necessary, and storing the unique levels of a
variable.

## Usage

```r
orderedCatPreprocess(x_input, unique_levels, var_name = NULL)
```

## Arguments

* `x_input`: Vector of ordered categorical data. If the data is not already
stored as an ordered factor, it will be converted to one using the default
sort order.
* `unique_levels`: Vector of unique levels for a categorical feature.
* `var_name`: (Optional) Name of variable.

## Value

List containing a preprocessed vector of integer-converted ordered
categorical observations and the unique level of the original ordered
categorical feature.

## Examples

```r
x_levels \<- c("1. Strongly disagree", "2. Disagree", "3. Neither agree nor disagree", "4. Agree", "5. Strongly agree")
x \<- c("1. Strongly disagree", "3. Neither agree nor disagree", "2. Disagree", "4. Agree", "3. Neither agree nor disagree", "5. Strongly agree", "4. Agree")
x_processed \<- orderedCatPreprocess(x, x_levels)
```

