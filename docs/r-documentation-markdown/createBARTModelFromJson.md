---
title: createBARTModelFromJson
---

# Convert an (in-memory) JSON representation of a BART model to a BART model object

## Description

Convert an (in-memory) JSON representation of a BART model to a BART model object
which can be used for prediction, etc...

## Usage

```r
createBARTModelFromJson(json_object)
```

## Arguments

* `json_object`: Object of type `CppJson` containing Json representation of a BART model

## Value

Object of type `bartmodel`

## Examples

```r
n \<- 100
p \<- 5
X \<- matrix(runif(n*p), ncol = p)
f_XW \<- (
```r
((0 \<= X[,1]) & (0.25 \> X[,1])) * (-7.5) + 
((0.25 \<= X[,1]) & (0.5 \> X[,1])) * (-2.5) + 
((0.5 \<= X[,1]) & (0.75 \> X[,1])) * (2.5) + 
((0.75 \<= X[,1]) & (1 \> X[,1])) * (7.5)
```
)
noise_sd \<- 1
y \<- f_XW + rnorm(n, 0, noise_sd)
test_set_pct \<- 0.2
n_test \<- round(test_set_pct*n)
n_train \<- n - n_test
test_inds \<- sort(sample(1:n, n_test, replace = FALSE))
train_inds \<- (1:n)[!((1:n) %in% test_inds)]
X_test \<- X[test_inds,]
X_train \<- X[train_inds,]
y_test \<- y[test_inds]
y_train \<- y[train_inds]
bart_model \<- bart(X_train = X_train, y_train = y_train)
# bart_json \<- convertBARTModelToJson(bart_model)
# bart_model_roundtrip \<- createBARTModelFromJson(bart_json)
```

