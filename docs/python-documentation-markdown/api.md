# StochTree API

## BART

### *class* stochtree.bart.BARTModel

Class that handles sampling, storage, and serialization of stochastic forest models like BART, XBART, and Warm-Start BART

#### predict(covariates: array, basis: array | None = None) → array

Return predictions from every forest sampled (either / both of mean and variance)

### Parameters

covariates
: Test set covariates.

basis_train
: Optional test set basis vector, must be provided if the model was trained with a leaf regression basis.

### Returns

tuple of `np.array`
: Tuple of arrays of predictions corresponding to each forest (mean and variance, depending on whether either / both was included). Each array will contain as many rows as in `covariates` and as many columns as retained samples of the algorithm.

#### sample(X_train: array, y_train: array, basis_train: array | None = None, X_test: array | None = None, basis_test: array | None = None, num_gfr: int = 5, num_burnin: int = 0, num_mcmc: int = 100, params: Dict[str, Any] | None = None) → None

Runs a BART sampler on provided training set. Predictions will be cached for the training set and (if provided) the test set. 
Does not require a leaf regression basis.

### Parameters

X_train
: Training set covariates on which trees may be partitioned.

y_train
: Training set outcome.

basis_train
: Optional training set basis vector used to define a regression to be run in the leaves of each tree.

X_test
: Optional test set covariates.

basis_test
: Optional test set basis vector used to define a regression to be run in the leaves of each tree. 
  Must be included / omitted consistently (i.e. if basis_train is provided, then basis_test must be provided alongside X_test).

num_gfr
: Number of “warm-start” iterations run using the grow-from-root algorithm (He and Hahn, 2021). Defaults to `5`.

num_burnin
: Number of “burn-in” iterations of the MCMC sampler. Defaults to `0`. Ignored if `num_gfr > 0`.

num_mcmc
: Number of “retained” iterations of the MCMC sampler. Defaults to `100`. If this is set to 0, GFR (XBART) samples will be retained.

params
: Dictionary of model parameters, each of which has a default value.
  <br/>
  * `cutpoint_grid_size` (`int`): Maximum number of cutpoints to consider for each feature. Defaults to `100`.
  * `sigma_leaf` (`float`): Scale parameter on the (conditional mean) leaf node regression model.
  * `alpha_mean` (`float`): Prior probability of splitting for a tree of depth 0 in the conditional mean model. Tree split prior combines `alpha_mean` and `beta_mean` via `alpha_mean*(1+node_depth)^-beta_mean`.
  * `beta_mean` (`float`): Exponent that decreases split probabilities for nodes of depth > 0 in the conditional mean model. Tree split prior combines `alpha_mean` and `beta_mean` via `alpha_mean*(1+node_depth)^-beta_mean`.
  * `min_samples_leaf_mean` (`int`): Minimum allowable size of a leaf, in terms of training samples, in the conditional mean model. Defaults to `5`.
  * `max_depth_mean` (`int`): Maximum depth of any tree in the ensemble in the conditional mean model. Defaults to `10`. Can be overriden with `-1` which does not enforce any depth limits on trees.
  * `alpha_variance` (`float`): Prior probability of splitting for a tree of depth 0 in the conditional variance model. Tree split prior combines `alpha_variance` and `beta_variance` via `alpha_variance*(1+node_depth)^-beta_variance`.
  * `beta_variance` (`float`): Exponent that decreases split probabilities for nodes of depth > 0 in the conditional variance model. Tree split prior combines `alpha_variance` and `beta_variance` via `alpha_variance*(1+node_depth)^-beta_variance`.
  * `min_samples_leaf_variance` (`int`): Minimum allowable size of a leaf, in terms of training samples in the conditional variance model. Defaults to `5`.
  * `max_depth_variance` (`int`): Maximum depth of any tree in the ensemble in the conditional variance model. Defaults to `10`. Can be overriden with `-1` which does not enforce any depth limits on trees.
  * `a_global` (`float`): Shape parameter in the `IG(a_global, b_global)` global error variance model. Defaults to `0`.
  * `b_global` (`float`): Scale parameter in the `IG(a_global, b_global)` global error variance prior. Defaults to `0`.
  * `a_leaf` (`float`): Shape parameter in the `IG(a_leaf, b_leaf)` leaf node parameter variance model. Defaults to `3`.
  * `b_leaf` (`float`): Scale parameter in the `IG(a_leaf, b_leaf)` leaf node parameter variance model. Calibrated internally as `0.5/num_trees_mean` if not set here.
  * `a_forest` (`float`): Shape parameter in the [optional] `IG(a_forest, b_forest)` conditional error variance forest (which is only sampled if `num_trees_variance > 0`). Calibrated internally as `num_trees_variance / 1.5^2 + 0.5` if not set here.
  * `b_forest` (`float`): Scale parameter in the [optional] `IG(a_forest, b_forest)` conditional error variance forest (which is only sampled if `num_trees_variance > 0`). Calibrated internally as `num_trees_variance / 1.5^2` if not set here.
  * `sigma2_init` (`float`): Starting value of global variance parameter. Set internally as a percentage of the standardized outcome variance if not set here.
  * `variance_forest_leaf_init` (`float`): Starting value of root forest prediction in conditional (heteroskedastic) error variance model. Calibrated internally as `np.log(pct_var_variance_forest_init*np.var((y-np.mean(y))/np.std(y)))/num_trees_variance` if not set.
  * `pct_var_sigma2_init` (`float`): Percentage of standardized outcome variance used to initialize global error variance parameter. Superseded by `sigma2`. Defaults to `1`.
  * `pct_var_variance_forest_init` (`float`): Percentage of standardized outcome variance used to initialize global error variance parameter. Default: `1`. Superseded by `variance_forest_init`.
  * `variance_scale` (`float`): Variance after the data have been scaled. Default: `1`.
  * `variable_weights_mean` (`np.array`): Numeric weights reflecting the relative probability of splitting on each variable in the mean forest. Does not need to sum to 1 but cannot be negative. Defaults to uniform over the columns of `X_train` if not provided.
  * `variable_weights_forest` (`np.array`): Numeric weights reflecting the relative probability of splitting on each variable in the variance forest. Does not need to sum to 1 but cannot be negative. Defaults to uniform over the columns of `X_train` if not provided.
  * `num_trees_mean` (`int`): Number of trees in the ensemble for the conditional mean model. Defaults to `200`. If `num_trees_mean = 0`, the conditional mean will not be modeled using a forest and the function will only proceed if `num_trees_variance > 0`.
  * `num_trees_variance` (`int`): Number of trees in the ensemble for the conditional variance model. Defaults to `0`. Variance is only modeled using a tree / forest if `num_trees_variance > 0`.
  * `sample_sigma_global` (`bool`): Whether or not to update the `sigma^2` global error variance parameter based on `IG(a_global, b_global)`. Defaults to `True`.
  * `sample_sigma_leaf` (`bool`): Whether or not to update the `tau` leaf scale variance parameter based on `IG(a_leaf, b_leaf)`. Cannot (currently) be set to true if `basis_train` has more than one column. Defaults to `False`.
  * `random_seed` (`int`): Integer parameterizing the C++ random number generator. If not specified, the C++ random number generator is seeded according to `std::random_device`.
  * `keep_burnin` (`bool`): Whether or not “burnin” samples should be included in predictions. Defaults to `False`. Ignored if `num_mcmc == 0`.
  * `keep_gfr` (`bool`): Whether or not “warm-start” / grow-from-root samples should be included in predictions. Defaults to `False`. Ignored if `num_mcmc == 0`.

### Returns

self
: Sampled BART Model.

## BCF

### *class* stochtree.bcf.BCFModel

Class that handles sampling, storage, and serialization of causal BART models like BCF, XBCF, and Warm-Start BCF

#### predict(X: array, Z: array, propensity: array | None = None) → array

Predict outcome model components (CATE function and prognostic function) as well as overall outcome for every provided observation. 
Predicted outcomes are computed as `yhat = mu_x + Z*tau_x` where mu_x is a sample of the prognostic function and tau_x is a sample of the treatment effect (CATE) function.

### Parameters

X
: Test set covariates.

Z
: Test set treatment indicators.

propensity
: Optional test set propensities. Must be provided if propensities were provided when the model was sampled.

### Returns

tuple of np.array
: Tuple of arrays with as many rows as in `X` and as many columns as retained samples of the algorithm. 
  The first entry of the tuple contains conditional average treatment effect (CATE) samples, 
  the second entry contains prognostic effect samples, and the third entry contains outcome prediction samples

#### predict_tau(X: array, Z: array, propensity: array | None = None) → array

Predict CATE function for every provided observation.

### Parameters

X
: Test set covariates.

Z
: Test set treatment indicators.

propensity
: Optional test set propensities. Must be provided if propensities were provided when the model was sampled.

### Returns

np.array
: Array with as many rows as in `X` and as many columns as retained samples of the algorithm.

#### sample(X_train: DataFrame | array, Z_train: array, y_train: array, pi_train: array | None = None, X_test: DataFrame | array | None = None, Z_test: array | None = None, pi_test: array | None = None, num_gfr: int = 5, num_burnin: int = 0, num_mcmc: int = 100, params: Dict[str, Any] | None = None) → None

Runs a BCF sampler on provided training set. Outcome predictions and estimates of the prognostic and treatment effect functions 
will be cached for the training set and (if provided) the test set.

### Parameters

X_train
: Covariates used to split trees in the ensemble. Can be passed as either a matrix or dataframe.

Z_train
: Array of (continuous or binary; univariate or multivariate) treatment assignments.

y_train
: Outcome to be modeled by the ensemble.

pi_train
: Optional vector of propensity scores. If not provided, this will be estimated from the data.

X_test
: Optional test set of covariates used to define “out of sample” evaluation data.

Z_test
: Optional test set of (continuous or binary) treatment assignments.
  Must be provided if `X_test` is provided.

pi_test
: Optional test set vector of propensity scores. If not provided (but `X_test` and `Z_test` are), this will be estimated from the data.

num_gfr
: Number of “warm-start” iterations run using the grow-from-root algorithm (He and Hahn, 2021). Defaults to `5`.

num_burnin
: Number of “burn-in” iterations of the MCMC sampler. Defaults to `0`. Ignored if `num_gfr > 0`.

num_mcmc
: Number of “retained” iterations of the MCMC sampler. Defaults to `100`. If this is set to 0, GFR (XBART) samples will be retained.

params
: Dictionary of model parameters, each of which has a default value.
  <br/>
  * `cutpoint_grid_size` (`int`): Maximum number of cutpoints to consider for each feature. Defaults to `100`.
  * `sigma_leaf_mu` (`float`): Starting value of leaf node scale parameter for the prognostic forest. Calibrated internally as `2/num_trees_mu` if not set here.
  * `sigma_leaf_tau` (`float` or `np.array`): Starting value of leaf node scale parameter for the treatment effect forest. 
    : When treatment (`Z_train`) is multivariate, this can be either a `float` or a square 2-dimensional `np.array` 
      with `sigma_leaf_tau.shape[0] == Z_train.shape[1]` and `sigma_leaf_tau.shape[1] == Z_train.shape[1]`.
      If `sigma_leaf_tau` is provided as a float for multivariate treatment, the leaf scale term will be set as a 
      diagonal matrix with `sigma_leaf_tau` on every diagonal. If not passed as an argument, this parameter is 
      calibrated internally as `1/num_trees_tau` (and propagated to a diagonal matrix if necessary).
  * `alpha_mu` (`float`): Prior probability of splitting for a tree of depth 0 for the prognostic forest. 
    : Tree split prior combines `alpha` and `beta` via `alpha*(1+node_depth)^-beta`.
  * `alpha_tau` (`float`): Prior probability of splitting for a tree of depth 0 for the treatment effect forest. 
    : Tree split prior combines `alpha` and `beta` via `alpha*(1+node_depth)^-beta`.
  * `beta_mu` (`float`): Exponent that decreases split probabilities for nodes of depth > 0 for the prognostic forest. 
    : Tree split prior combines `alpha` and `beta` via `alpha*(1+node_depth)^-beta`.
  * `beta_tau` (`float`): Exponent that decreases split probabilities for nodes of depth > 0 for the treatment effect forest. 
    : Tree split prior combines `alpha` and `beta` via `alpha*(1+node_depth)^-beta`.
  * `min_samples_leaf_mu` (`int`): Minimum allowable size of a leaf, in terms of training samples, for the prognostic forest. Defaults to `5`.
  * `min_samples_leaf_tau` (`int`): Minimum allowable size of a leaf, in terms of training samples, for the treatment effect forest. Defaults to `5`.
  * `max_depth_mu` (`int`): Maximum depth of any tree in the mu ensemble. Defaults to `10`. Can be overriden with `-1` which does not enforce any depth limits on trees.
  * `max_depth_tau` (`int`): Maximum depth of any tree in the tau ensemble. Defaults to `5`. Can be overriden with `-1` which does not enforce any depth limits on trees.
  * `a_global` (`float`): Shape parameter in the `IG(a_global, b_global)` global error variance model. Defaults to `0`.
  * `b_global` (`float`): Component of the scale parameter in the `IG(a_global, b_global)` global error variance prior. Defaults to `0`.
  * `a_leaf_mu` (`float`): Shape parameter in the `IG(a_leaf, b_leaf)` leaf node parameter variance model for the prognostic forest. Defaults to `3`.
  * `a_leaf_tau` (`float`): Shape parameter in the `IG(a_leaf, b_leaf)` leaf node parameter variance model for the treatment effect forest. Defaults to `3`.
  * `b_leaf_mu` (`float`): Scale parameter in the `IG(a_leaf, b_leaf)` leaf node parameter variance model for the prognostic forest. Calibrated internally as `0.5/num_trees` if not set here.
  * `b_leaf_tau` (`float`): Scale parameter in the `IG(a_leaf, b_leaf)` leaf node parameter variance model for the treatment effect forest. Calibrated internally as `0.5/num_trees` if not set here.
  * `sigma2` (`float`): Starting value of global variance parameter. Calibrated internally as in Sparapani et al (2021) if not set here.
  * `pct_var_sigma2_init` (`float`): Percentage of standardized outcome variance used to initialize global error variance parameter. Superseded by `sigma2`. Defaults to `0.25`.
  * `variable_weights` (np.\`array\`): Numeric weights reflecting the relative probability of splitting on each variable. Does not need to sum to 1 but cannot be negative. Defaults to `np.repeat(1/X_train.shape[1], X_train.shape[1])` if not set here. Note that if the propensity score is included as a covariate in either forest, its weight will default to `1/X_train.shape[1]`. A workaround if you wish to provide a custom weight for the propensity score is to include it as a column in `X_train` and then set `propensity_covariate` to `'none'` and adjust `keep_vars_mu` and `keep_vars_tau` accordingly.
  * `keep_vars_mu` (`list` or `np.array`): Vector of variable names or column indices denoting variables that should be included in the prognostic (`mu(X)`) forest. Defaults to `None`.
  * `drop_vars_mu` (`list` or `np.array`): Vector of variable names or column indices denoting variables that should be excluded from the prognostic (`mu(X)`) forest. Defaults to `None`. If both `drop_vars_mu` and `keep_vars_mu` are set, `drop_vars_mu` will be ignored.
  * `keep_vars_tau` (`list` or `np.array`): Vector of variable names or column indices denoting variables that should be included in the treatment effect (`tau(X)`) forest. Defaults to `None`.
  * `drop_vars_tau` (`list` or `np.array`): Vector of variable names or column indices denoting variables that should be excluded from the treatment effect (`tau(X)`) forest. Defaults to `None`. If both `drop_vars_tau` and `keep_vars_tau` are set, `drop_vars_tau` will be ignored.
  * `num_trees_mu` (`int`): Number of trees in the prognostic forest. Defaults to `200`.
  * `num_trees_tau` (`int`): Number of trees in the treatment effect forest. Defaults to `50`.
  * `sample_sigma_global` (`bool`): Whether or not to update the `sigma^2` global error variance parameter based on `IG(a_global, b_global)`. Defaults to `True`.
  * `sample_sigma_leaf_mu` (`bool`): Whether or not to update the `tau` leaf scale variance parameter based on `IG(a_leaf, b_leaf)` for the prognostic forest. 
    : Cannot (currently) be set to true if `basis_train` has more than one column. Defaults to `True`.
  * `sample_sigma_leaf_tau` (`bool`): Whether or not to update the `tau` leaf scale variance parameter based on `IG(a_leaf, b_leaf)` for the treatment effect forest. 
    : Cannot (currently) be set to true if `basis_train` has more than one column. Defaults to `True`.
  * `propensity_covariate` (`str`): Whether to include the propensity score as a covariate in either or both of the forests. Enter `"none"` for neither, `"mu"` for the prognostic forest, `"tau"` for the treatment forest, and `"both"` for both forests. 
    : If this is not `"none"` and a propensity score is not provided, it will be estimated from (`X_train`, `Z_train`) using `BARTModel`. Defaults to `"mu"`.
  * `adaptive_coding` (`bool`): Whether or not to use an “adaptive coding” scheme in which a binary treatment variable is not coded manually as (0,1) or (-1,1) but learned via 
    : parameters `b_0` and `b_1` that attach to the outcome model `[b_0 (1-Z) + b_1 Z] tau(X)`. This is ignored when Z is not binary. Defaults to True.
  * `b_0` (`float`): Initial value of the “control” group coding parameter. This is ignored when `Z` is not binary. Default: `-0.5`.
  * `b_1` (`float`): Initial value of the “treated” group coding parameter. This is ignored when `Z` is not binary. Default: `0.5`.
  * `random_seed` (`int`): Integer parameterizing the C++ random number generator. If not specified, the C++ random number generator is seeded according to `std::random_device`.
  * `keep_burnin` (`bool`): Whether or not “burnin” samples should be included in predictions. Defaults to `False`. Ignored if `num_mcmc == 0`.
  * `keep_gfr` (`bool`): Whether or not “warm-start” / grow-from-root samples should be included in predictions. Defaults to `False`. Ignored if `num_mcmc == 0`.

### Returns

self
: Sampled BCF Model.
