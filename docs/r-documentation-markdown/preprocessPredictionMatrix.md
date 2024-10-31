---
title: preprocessPredictionMatrix
---

# Preprocess a matrix of covariate values, assuming all columns are numeric.

## Description

Preprocess a matrix of covariate values, assuming all columns are numeric.

## Usage

```r
preprocessPredictionMatrix(input_matrix, metadata)
```

## Arguments

* `input_matrix`: Covariate matrix.
* `metadata`: List containing information on variables, including train set
categories for categorical variables

## Value

Preprocessed data with categorical variables appropriately preprocessed

## Examples

```r
cov_mat \<- matrix(c(1:5, 5:1, 6:10), ncol = 3)
metadata \<- list(num_ordered_cat_vars = 0, num_unordered_cat_vars = 0, 
```r
             num_numeric_vars = 3, numeric_vars = c("x1", "x2", "x3"))
```
X_preprocessed \<- preprocessPredictionMatrix(cov_mat, metadata)
```

