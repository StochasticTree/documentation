---
title: createForestCovariates
---

# Preprocess a dataframe of covariate values, converting categorical variables

## Description

Preprocess a dataframe of covariate values, converting categorical variables
to integers and one-hot encoding if need be. Returns a list including a
matrix of preprocessed covariate values and associated tracking.

## Usage

```r
createForestCovariates(
  input_data,
  ordered_cat_vars = NULL,
  unordered_cat_vars = NULL
)
```

## Arguments

* `input_data`: Dataframe or matrix of covariates. Users may pre-process any
categorical variables as factors but it is not necessary.
* `ordered_cat_vars`: (Optional) Vector of names of ordered categorical variables, or vector of column indices if `input_data` is a matrix.
* `unordered_cat_vars`: (Optional) Vector of names of unordered categorical variables, or vector of column indices if `input_data` is a matrix.

## Value

List with preprocessed data and details on the number of each type
of variable, unique categories associated with categorical variables, and the
vector of feature types needed for calls to BART and BCF.

## Examples

```r
cov_df \<- data.frame(x1 = 1:5, x2 = 5:1, x3 = 6:10)
preprocess_list \<- createForestCovariates(cov_df)
X \<- preprocess_list$X
```

