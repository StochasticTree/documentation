---
title: createBCFModelFromJsonFile
---

# Convert a JSON file containing sample information on a trained BCF model

## Description

Convert a JSON file containing sample information on a trained BCF model
to a BCF model object which can be used for prediction, etc...

## Usage

```r
createBCFModelFromJsonFile(json_filename)
```

## Arguments

* `json_filename`: String of filepath, must end in ".json"

## Value

Object of type `bcf`

## Examples

```r
n \<- 500
x1 \<- rnorm(n)
x2 \<- rnorm(n)
x3 \<- rnorm(n)
x4 \<- as.numeric(rbinom(n,1,0.5))
x5 \<- as.numeric(sample(1:3,n,replace=TRUE))
X \<- cbind(x1,x2,x3,x4,x5)
p \<- ncol(X)
g \<- function(x) \{ifelse(x[,5]==1,2,ifelse(x[,5]==2,-1,4))\}
mu1 \<- function(x) \{1+g(x)+x[,1]*x[,3]\}
mu2 \<- function(x) \{1+g(x)+6*abs(x[,3]-1)\}
tau1 \<- function(x) \{rep(3,nrow(x))\}
tau2 \<- function(x) \{1+2*x[,2]*x[,4]\}
mu_x \<- mu1(X)
tau_x \<- tau2(X)
pi_x \<- 0.8*pnorm((3*mu_x/sd(mu_x)) - 0.5*X[,1]) + 0.05 + runif(n)/10
Z \<- rbinom(n,1,pi_x)
E_XZ \<- mu_x + Z*tau_x
snr \<- 3
group_ids \<- rep(c(1,2), n %/% 2)
rfx_coefs \<- matrix(c(-1, -1, 1, 1), nrow=2, byrow=TRUE)
rfx_basis \<- cbind(1, runif(n, -1, 1))
rfx_term \<- rowSums(rfx_coefs[group_ids,] * rfx_basis)
y \<- E_XZ + rfx_term + rnorm(n, 0, 1)*(sd(E_XZ)/snr)
X \<- as.data.frame(X)
X$x4 \<- factor(X$x4, ordered = TRUE)
X$x5 \<- factor(X$x5, ordered = TRUE)
test_set_pct \<- 0.2
n_test \<- round(test_set_pct*n)
n_train \<- n - n_test
test_inds \<- sort(sample(1:n, n_test, replace = FALSE))
train_inds \<- (1:n)[!((1:n) %in% test_inds)]
X_test \<- X[test_inds,]
X_train \<- X[train_inds,]
pi_test \<- pi_x[test_inds]
pi_train \<- pi_x[train_inds]
Z_test \<- Z[test_inds]
Z_train \<- Z[train_inds]
y_test \<- y[test_inds]
y_train \<- y[train_inds]
mu_test \<- mu_x[test_inds]
mu_train \<- mu_x[train_inds]
tau_test \<- tau_x[test_inds]
tau_train \<- tau_x[train_inds]
group_ids_test \<- group_ids[test_inds]
group_ids_train \<- group_ids[train_inds]
rfx_basis_test \<- rfx_basis[test_inds,]
rfx_basis_train \<- rfx_basis[train_inds,]
rfx_term_test \<- rfx_term[test_inds]
rfx_term_train \<- rfx_term[train_inds]
bcf_model \<- bcf(X_train = X_train, Z_train = Z_train, y_train = y_train, 
```r
             pi_train = pi_train, group_ids_train = group_ids_train, 
             rfx_basis_train = rfx_basis_train, X_test = X_test, 
             Z_test = Z_test, pi_test = pi_test, group_ids_test = group_ids_test,
             rfx_basis_test = rfx_basis_test, 
             num_gfr = 100, num_burnin = 0, num_mcmc = 100, 
             sample_sigma_leaf_mu = TRUE, sample_sigma_leaf_tau = FALSE)
```
# saveBCFModelToJsonFile(bcf_model, "test.json")
# bcf_model_roundtrip \<- createBCFModelFromJsonFile("test.json")
```
