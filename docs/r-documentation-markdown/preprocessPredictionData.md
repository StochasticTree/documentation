# Preprocess covariates. DataFrames will be preprocessed based on their column

## Description

Preprocess covariates. DataFrames will be preprocessed based on their column
types. Matrices will be passed through assuming all columns are numeric.

## Usage

```r
preprocessPredictionData(input_data, metadata)
```

## Arguments

* `input_data`: Covariates, provided as either a dataframe or a matrix
* `metadata`: List containing information on variables, including train set
categories for categorical variables

## Value

Preprocessed data with categorical variables appropriately handled

## Examples

```r
cov_df <- data.frame(x1 = 1:5, x2 = 5:1, x3 = 6:10)
metadata <- list(num_ordered_cat_vars = 0, num_unordered_cat_vars = 0, 
                 num_numeric_vars = 3, numeric_vars = c("x1", "x2", "x3"))
X_preprocessed <- preprocessPredictionData(cov_df, metadata)
```

