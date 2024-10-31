---
title: createForestCovariatesFromMetadata
---

# Preprocess a dataframe of covariate values, converting categorical variables

## Description

Preprocess a dataframe of covariate values, converting categorical variables
to integers and one-hot encoding if need be. Returns a list including a
matrix of preprocessed covariate values and associated tracking.

## Usage

```r
createForestCovariatesFromMetadata(input_data, metadata)
```

## Arguments

* `input_data`: Dataframe or matrix of covariates. Users may pre-process any
categorical variables as factors but it is not necessary.
* `metadata`: List containing information on variables, including train set
categories for categorical variables

## Value

Preprocessed data with categorical variables appropriately preprocessed

## Examples

```r
cov_df \<- data.frame(x1 = 1:5, x2 = 5:1, x3 = 6:10)
metadata \<- list(num_ordered_cat_vars = 0, num_unordered_cat_vars = 0, 
```r
             num_numeric_vars = 3, numeric_vars = c("x1", "x2", "x3"))
```
X_preprocessed \<- createForestCovariatesFromMetadata(cov_df, metadata)
```

