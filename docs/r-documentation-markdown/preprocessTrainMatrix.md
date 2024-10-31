# Preprocess a matrix of covariate values, assuming all columns are numeric.

## Description

Preprocess a matrix of covariate values, assuming all columns are numeric.
Returns a list including a matrix of preprocessed covariate values and associated tracking.

## Usage

```r
preprocessTrainMatrix(input_matrix)
```

## Arguments

* `input_matrix`: Covariate matrix.

## Value

List with preprocessed (unmodified) data and details on the number of each type
of variable, unique categories associated with categorical variables, and the
vector of feature types needed for calls to BART and BCF.

## Examples

```r
cov_mat <- matrix(1:12, ncol = 3)
preprocess_list <- preprocessTrainMatrix(cov_mat)
X <- preprocess_list$X
```

