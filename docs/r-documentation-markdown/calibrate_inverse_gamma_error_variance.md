---
title: calibrate_inverse_gamma_error_variance
---

# Calibrate the scale parameter on an inverse gamma prior for the global error variance as in Chipman et al (2022)

## Description

[1](1) Chipman, H., George, E., Hahn, R., McCulloch, R., Pratola, M. and Sparapani, R. (2022). Bayesian Additive Regression Trees, Computational Approaches. In Wiley StatsRef: Statistics Reference Online (eds N. Balakrishnan, T. Colton, B. Everitt, W. Piegorsch, F. Ruggeri and J.L. Teugels). https://doi.org/10.1002/9781118445112.stat08288

## Usage

```r
calibrate_inverse_gamma_error_variance(
  y,
  X,
  W = NULL,
  nu = 3,
  quant = 0.9,
  standardize = TRUE
)
```

## Arguments

* `y`: Outcome to be modeled using BART, BCF or another nonparametric ensemble method.
* `X`: Covariates to be used to partition trees in an ensemble or series of ensemble.
* `W`: [Optional](Optional) Basis used to define a "leaf regression" model for each decision tree. The "classic" BART model assumes a constant leaf parameter, which is equivalent to a "leaf regression" on a basis of all ones, though it is not necessary to pass a vector of ones, here or to the BART function. Default: `NULL`.
* `nu`: The shape parameter for the global error variance's IG prior. The scale parameter in the Sparapani et al (2021) parameterization is defined as `nu*lambda` where `lambda` is the output of this function. Default: `3`.
* `quant`: [Optional](Optional) Quantile of the inverse gamma prior distribution represented by a linear-regression-based overestimate of `sigma^2`. Default: `0.9`.
* `standardize`: [Optional](Optional) Whether or not outcome should be standardized (`(y-mean(y))/sd(y)`) before calibration of `lambda`. Default: `TRUE`.

## Value

Value of `lambda` which determines the scale parameter of the global error variance prior (`sigma^2 ~ IG(nu,nu*lambda)`)

## Examples

```r
n \<- 100
p \<- 5
X \<- matrix(runif(n*p), ncol = p)
y \<- 10*X[,1] - 20*X[,2] + rnorm(n)
nu \<- 3
lambda \<- calibrate_inverse_gamma_error_variance(y, X, nu = nu)
sigma2hat \<- mean(resid(lm(y~X))^2)
mean(var(y)/rgamma(100000, nu, rate = nu*lambda) \< sigma2hat)
```

