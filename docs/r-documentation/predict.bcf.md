# Predict from a sampled BCF model on new data

## Description

Predict from a sampled BCF model on new data

## Usage

```r
# S3 method for bcf
predict(
  bcf,
  X_test,
  Z_test,
  pi_test = NULL,
  group_ids_test = NULL,
  rfx_basis_test = NULL
)
```

## Arguments

* `bcf`: Object of type `bcf` containing draws of a Bayesian causal forest model and associated sampling outputs.
* `X_test`: Covariates used to determine tree leaf predictions for each observation. Must be passed as a matrix or dataframe.
* `Z_test`: Treatments used for prediction.
* `pi_test`: (Optional) Propensities used for prediction.
* `group_ids_test`: (Optional) Test set group labels used for an additive random effects model.
We do not currently support (but plan to in the near future), test set evaluation for group labels
that were not in the training set.
* `rfx_basis_test`: (Optional) Test set basis for "random-slope" regression in additive random effects model.

## Value

List of 3-5 `nrow(X_test)` by `bcf$num_samples` matrices: prognostic function estimates, treatment effect estimates, (optionally) random effects predictions, (optionally) variance forest predictions, and outcome predictions.

## Examples

```r
n <- 500
x1 <- rnorm(n)
x2 <- rnorm(n)
x3 <- rnorm(n)
x4 <- as.numeric(rbinom(n,1,0.5))
x5 <- as.numeric(sample(1:3,n,replace=TRUE))
X <- cbind(x1,x2,x3,x4,x5)
p <- ncol(X)
g <- function(x) {ifelse(x[,5]==1,2,ifelse(x[,5]==2,-1,4))}
mu1 <- function(x) {1+g(x)+x[,1]*x[,3]}
mu2 <- function(x) {1+g(x)+6*abs(x[,3]-1)}
tau1 <- function(x) {rep(3,nrow(x))}
tau2 <- function(x) {1+2*x[,2]*x[,4]}
mu_x <- mu1(X)
tau_x <- tau2(X)
pi_x <- 0.8*pnorm((3*mu_x/sd(mu_x)) - 0.5*X[,1]) + 0.05 + runif(n)/10
Z <- rbinom(n,1,pi_x)
E_XZ <- mu_x + Z*tau_x
snr <- 4
y <- E_XZ + rnorm(n, 0, 1)*(sd(E_XZ)/snr)
X <- as.data.frame(X)
X$x4 <- factor(X$x4, ordered = TRUE)
X$x5 <- factor(X$x5, ordered = TRUE)
test_set_pct <- 0.2
n_test <- round(test_set_pct*n)
n_train <- n - n_test
test_inds <- sort(sample(1:n, n_test, replace = FALSE))
train_inds <- (1:n)[!((1:n) %in% test_inds)]
X_test <- X[test_inds,]
X_train <- X[train_inds,]
pi_test <- pi_x[test_inds]
pi_train <- pi_x[train_inds]
Z_test <- Z[test_inds]
Z_train <- Z[train_inds]
y_test <- y[test_inds]
y_train <- y[train_inds]
mu_test <- mu_x[test_inds]
mu_train <- mu_x[train_inds]
tau_test <- tau_x[test_inds]
tau_train <- tau_x[train_inds]
bcf_model <- bcf(X_train = X_train, Z_train = Z_train, y_train = y_train, pi_train = pi_train)
preds <- predict(bcf_model, X_test, Z_test, pi_test)
# plot(rowMeans(preds$mu_hat), mu_test, xlab = "predicted", ylab = "actual", main = "Prognostic function")
# abline(0,1,col="red",lty=3,lwd=3)
# plot(rowMeans(preds$tau_hat), tau_test, xlab = "predicted", ylab = "actual", main = "Treatment effect")
# abline(0,1,col="red",lty=3,lwd=3)
```
