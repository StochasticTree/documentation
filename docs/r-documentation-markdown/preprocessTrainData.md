# Preprocess covariates. DataFrames will be preprocessed based on their column

## Description

Preprocess covariates. DataFrames will be preprocessed based on their column
types. Matrices will be passed through assuming all columns are numeric.

## Usage

```r
preprocessTrainData(input_data)
```

## Arguments

* `input_data`: Covariates, provided as either a dataframe or a matrix
* `variable_weights`: Numeric weights reflecting the relative probability of splitting on each variable

## Value

List with preprocessed (unmodified) data and details on the number of each type
of variable, unique categories associated with categorical variables, and the
vector of feature types needed for calls to BART and BCF.

## Examples

```r
cov_mat <- matrix(1:12, ncol = 3)
preprocess_list <- preprocessTrainData(cov_mat)
X <- preprocess_list$X
```

