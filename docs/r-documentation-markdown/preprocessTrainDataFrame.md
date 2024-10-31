---
title: preprocessTrainDataFrame
---

# Preprocess a dataframe of covariate values, converting categorical variables

## Description

Preprocess a dataframe of covariate values, converting categorical variables
to integers and one-hot encoding if need be. Returns a list including a
matrix of preprocessed covariate values and associated tracking.

## Usage

```r
preprocessTrainDataFrame(input_df)
```

## Arguments

* `input_df`: Dataframe of covariates. Users must pre-process any
categorical variables as factors (ordered for ordered categorical).

## Value

List with preprocessed data and details on the number of each type
of variable, unique categories associated with categorical variables, and the
vector of feature types needed for calls to BART and BCF.

## Examples

```r
cov_df \<- data.frame(x1 = 1:5, x2 = 5:1, x3 = 6:10)
preprocess_list \<- preprocessTrainDataFrame(cov_df)
X \<- preprocess_list$X
```

