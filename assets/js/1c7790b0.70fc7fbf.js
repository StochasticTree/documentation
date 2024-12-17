"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[608],{1667:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"python-documentation-markdown/api","title":"StochTree API","description":"BART","source":"@site/docs/python-documentation-markdown/api.md","sourceDirName":"python-documentation-markdown","slug":"/python-documentation-markdown/api","permalink":"/documentation/docs/python-documentation-markdown/api","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-documentation-markdown/api.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"stochtree-package","permalink":"/documentation/docs/r-documentation-markdown/stochtree-package"},"next":{"title":"Causal Inference","permalink":"/documentation/docs/python-documentation-markdown/causal"}}');var i=r(4848),t=r(8453);const o={},s="StochTree API",d={},l=[{value:"BART",id:"bart",level:2},{value:"<em>class</em> stochtree.bart.BARTModel",id:"class-stochtreebartbartmodel",level:3},{value:"predict(covariates: array, basis: array | None = None) \u2192 array",id:"predictcovariates-array-basis-array--none--none--array",level:4},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"sample(X_train: array, y_train: array, basis_train: array | None = None, X_test: array | None = None, basis_test: array | None = None, num_gfr: int = 5, num_burnin: int = 0, num_mcmc: int = 100, params: Dict[str, Any] | None = None) \u2192 None",id:"samplex_train-array-y_train-array-basis_train-array--none--none-x_test-array--none--none-basis_test-array--none--none-num_gfr-int--5-num_burnin-int--0-num_mcmc-int--100-params-dictstr-any--none--none--none",level:4},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"BCF",id:"bcf",level:2},{value:"<em>class</em> stochtree.bcf.BCFModel",id:"class-stochtreebcfbcfmodel",level:3},{value:"predict(X: array, Z: array, propensity: array | None = None) \u2192 array",id:"predictx-array-z-array-propensity-array--none--none--array",level:4},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"predict_tau(X: array, Z: array, propensity: array | None = None) \u2192 array",id:"predict_taux-array-z-array-propensity-array--none--none--array",level:4},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"sample(X_train: DataFrame | array, Z_train: array, y_train: array, pi_train: array | None = None, X_test: DataFrame | array | None = None, Z_test: array | None = None, pi_test: array | None = None, num_gfr: int = 5, num_burnin: int = 0, num_mcmc: int = 100, params: Dict[str, Any] | None = None) \u2192 None",id:"samplex_train-dataframe--array-z_train-array-y_train-array-pi_train-array--none--none-x_test-dataframe--array--none--none-z_test-array--none--none-pi_test-array--none--none-num_gfr-int--5-num_burnin-int--0-num_mcmc-int--100-params-dictstr-any--none--none--none",level:4},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"stochtree-api",children:"StochTree API"})}),"\n",(0,i.jsx)(n.h2,{id:"bart",children:"BART"}),"\n",(0,i.jsxs)(n.h3,{id:"class-stochtreebartbartmodel",children:[(0,i.jsx)(n.em,{children:"class"})," stochtree.bart.BARTModel"]}),"\n",(0,i.jsx)(n.p,{children:"Class that handles sampling, storage, and serialization of stochastic forest models like BART, XBART, and Warm-Start BART"}),"\n",(0,i.jsx)(n.h4,{id:"predictcovariates-array-basis-array--none--none--array",children:"predict(covariates: array, basis: array | None = None) \u2192 array"}),"\n",(0,i.jsx)(n.p,{children:"Return predictions from every forest sampled (either / both of mean and variance)"}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.p,{children:"covariates\n: Test set covariates."}),"\n",(0,i.jsx)(n.p,{children:"basis_train\n: Optional test set basis vector, must be provided if the model was trained with a leaf regression basis."}),"\n",(0,i.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["tuple of ",(0,i.jsx)(n.code,{children:"np.array"}),"\n: Tuple of arrays of predictions corresponding to each forest (mean and variance, depending on whether either / both was included). Each array will contain as many rows as in ",(0,i.jsx)(n.code,{children:"covariates"})," and as many columns as retained samples of the algorithm."]}),"\n",(0,i.jsx)(n.h4,{id:"samplex_train-array-y_train-array-basis_train-array--none--none-x_test-array--none--none-basis_test-array--none--none-num_gfr-int--5-num_burnin-int--0-num_mcmc-int--100-params-dictstr-any--none--none--none",children:"sample(X_train: array, y_train: array, basis_train: array | None = None, X_test: array | None = None, basis_test: array | None = None, num_gfr: int = 5, num_burnin: int = 0, num_mcmc: int = 100, params: Dict[str, Any] | None = None) \u2192 None"}),"\n",(0,i.jsx)(n.p,{children:"Runs a BART sampler on provided training set. Predictions will be cached for the training set and (if provided) the test set.\nDoes not require a leaf regression basis."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsx)(n.p,{children:"X_train\n: Training set covariates on which trees may be partitioned."}),"\n",(0,i.jsx)(n.p,{children:"y_train\n: Training set outcome."}),"\n",(0,i.jsx)(n.p,{children:"basis_train\n: Optional training set basis vector used to define a regression to be run in the leaves of each tree."}),"\n",(0,i.jsx)(n.p,{children:"X_test\n: Optional test set covariates."}),"\n",(0,i.jsx)(n.p,{children:"basis_test\n: Optional test set basis vector used to define a regression to be run in the leaves of each tree.\nMust be included / omitted consistently (i.e. if basis_train is provided, then basis_test must be provided alongside X_test)."}),"\n",(0,i.jsxs)(n.p,{children:["num_gfr\n: Number of \u201cwarm-start\u201d iterations run using the grow-from-root algorithm (He and Hahn, 2021). Defaults to ",(0,i.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["num_burnin\n: Number of \u201cburn-in\u201d iterations of the MCMC sampler. Defaults to ",(0,i.jsx)(n.code,{children:"0"}),". Ignored if ",(0,i.jsx)(n.code,{children:"num_gfr > 0"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["num_mcmc\n: Number of \u201cretained\u201d iterations of the MCMC sampler. Defaults to ",(0,i.jsx)(n.code,{children:"100"}),". If this is set to 0, GFR (XBART) samples will be retained."]}),"\n",(0,i.jsx)(n.p,{children:"params\n: Dictionary of model parameters, each of which has a default value."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cutpoint_grid_size"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Maximum number of cutpoints to consider for each feature. Defaults to ",(0,i.jsx)(n.code,{children:"100"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sigma_leaf"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Scale parameter on the (conditional mean) leaf node regression model."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alpha_mean"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Prior probability of splitting for a tree of depth 0 in the conditional mean model. Tree split prior combines ",(0,i.jsx)(n.code,{children:"alpha_mean"})," and ",(0,i.jsx)(n.code,{children:"beta_mean"})," via ",(0,i.jsx)(n.code,{children:"alpha_mean*(1+node_depth)^-beta_mean"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"beta_mean"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Exponent that decreases split probabilities for nodes of depth > 0 in the conditional mean model. Tree split prior combines ",(0,i.jsx)(n.code,{children:"alpha_mean"})," and ",(0,i.jsx)(n.code,{children:"beta_mean"})," via ",(0,i.jsx)(n.code,{children:"alpha_mean*(1+node_depth)^-beta_mean"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"min_samples_leaf_mean"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Minimum allowable size of a leaf, in terms of training samples, in the conditional mean model. Defaults to ",(0,i.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_depth_mean"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Maximum depth of any tree in the ensemble in the conditional mean model. Defaults to ",(0,i.jsx)(n.code,{children:"10"}),". Can be overriden with ",(0,i.jsx)(n.code,{children:"-1"})," which does not enforce any depth limits on trees."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alpha_variance"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Prior probability of splitting for a tree of depth 0 in the conditional variance model. Tree split prior combines ",(0,i.jsx)(n.code,{children:"alpha_variance"})," and ",(0,i.jsx)(n.code,{children:"beta_variance"})," via ",(0,i.jsx)(n.code,{children:"alpha_variance*(1+node_depth)^-beta_variance"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"beta_variance"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Exponent that decreases split probabilities for nodes of depth > 0 in the conditional variance model. Tree split prior combines ",(0,i.jsx)(n.code,{children:"alpha_variance"})," and ",(0,i.jsx)(n.code,{children:"beta_variance"})," via ",(0,i.jsx)(n.code,{children:"alpha_variance*(1+node_depth)^-beta_variance"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"min_samples_leaf_variance"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Minimum allowable size of a leaf, in terms of training samples in the conditional variance model. Defaults to ",(0,i.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_depth_variance"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Maximum depth of any tree in the ensemble in the conditional variance model. Defaults to ",(0,i.jsx)(n.code,{children:"10"}),". Can be overriden with ",(0,i.jsx)(n.code,{children:"-1"})," which does not enforce any depth limits on trees."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"a_global"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Shape parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_global, b_global)"})," global error variance model. Defaults to ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b_global"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Scale parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_global, b_global)"})," global error variance prior. Defaults to ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"a_leaf"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Shape parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_leaf, b_leaf)"})," leaf node parameter variance model. Defaults to ",(0,i.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b_leaf"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Scale parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_leaf, b_leaf)"})," leaf node parameter variance model. Calibrated internally as ",(0,i.jsx)(n.code,{children:"0.5/num_trees_mean"})," if not set here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"a_forest"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Shape parameter in the [optional] ",(0,i.jsx)(n.code,{children:"IG(a_forest, b_forest)"})," conditional error variance forest (which is only sampled if ",(0,i.jsx)(n.code,{children:"num_trees_variance > 0"}),"). Calibrated internally as ",(0,i.jsx)(n.code,{children:"num_trees_variance / 1.5^2 + 0.5"})," if not set here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b_forest"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Scale parameter in the [optional] ",(0,i.jsx)(n.code,{children:"IG(a_forest, b_forest)"})," conditional error variance forest (which is only sampled if ",(0,i.jsx)(n.code,{children:"num_trees_variance > 0"}),"). Calibrated internally as ",(0,i.jsx)(n.code,{children:"num_trees_variance / 1.5^2"})," if not set here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sigma2_init"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Starting value of global variance parameter. Set internally as a percentage of the standardized outcome variance if not set here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"variance_forest_leaf_init"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Starting value of root forest prediction in conditional (heteroskedastic) error variance model. Calibrated internally as ",(0,i.jsx)(n.code,{children:"np.log(pct_var_variance_forest_init*np.var((y-np.mean(y))/np.std(y)))/num_trees_variance"})," if not set."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pct_var_sigma2_init"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Percentage of standardized outcome variance used to initialize global error variance parameter. Superseded by ",(0,i.jsx)(n.code,{children:"sigma2"}),". Defaults to ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pct_var_variance_forest_init"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Percentage of standardized outcome variance used to initialize global error variance parameter. Default: ",(0,i.jsx)(n.code,{children:"1"}),". Superseded by ",(0,i.jsx)(n.code,{children:"variance_forest_init"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"variance_scale"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Variance after the data have been scaled. Default: ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"variable_weights_mean"})," (",(0,i.jsx)(n.code,{children:"np.array"}),"): Numeric weights reflecting the relative probability of splitting on each variable in the mean forest. Does not need to sum to 1 but cannot be negative. Defaults to uniform over the columns of ",(0,i.jsx)(n.code,{children:"X_train"})," if not provided."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"variable_weights_forest"})," (",(0,i.jsx)(n.code,{children:"np.array"}),"): Numeric weights reflecting the relative probability of splitting on each variable in the variance forest. Does not need to sum to 1 but cannot be negative. Defaults to uniform over the columns of ",(0,i.jsx)(n.code,{children:"X_train"})," if not provided."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num_trees_mean"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Number of trees in the ensemble for the conditional mean model. Defaults to ",(0,i.jsx)(n.code,{children:"200"}),". If ",(0,i.jsx)(n.code,{children:"num_trees_mean = 0"}),", the conditional mean will not be modeled using a forest and the function will only proceed if ",(0,i.jsx)(n.code,{children:"num_trees_variance > 0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num_trees_variance"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Number of trees in the ensemble for the conditional variance model. Defaults to ",(0,i.jsx)(n.code,{children:"0"}),". Variance is only modeled using a tree / forest if ",(0,i.jsx)(n.code,{children:"num_trees_variance > 0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sample_sigma_global"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not to update the ",(0,i.jsx)(n.code,{children:"sigma^2"})," global error variance parameter based on ",(0,i.jsx)(n.code,{children:"IG(a_global, b_global)"}),". Defaults to ",(0,i.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sample_sigma_leaf"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not to update the ",(0,i.jsx)(n.code,{children:"tau"})," leaf scale variance parameter based on ",(0,i.jsx)(n.code,{children:"IG(a_leaf, b_leaf)"}),". Cannot (currently) be set to true if ",(0,i.jsx)(n.code,{children:"basis_train"})," has more than one column. Defaults to ",(0,i.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"random_seed"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Integer parameterizing the C++ random number generator. If not specified, the C++ random number generator is seeded according to ",(0,i.jsx)(n.code,{children:"std::random_device"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"keep_burnin"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not \u201cburnin\u201d samples should be included in predictions. Defaults to ",(0,i.jsx)(n.code,{children:"False"}),". Ignored if ",(0,i.jsx)(n.code,{children:"num_mcmc == 0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"keep_gfr"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not \u201cwarm-start\u201d / grow-from-root samples should be included in predictions. Defaults to ",(0,i.jsx)(n.code,{children:"False"}),". Ignored if ",(0,i.jsx)(n.code,{children:"num_mcmc == 0"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"self\n: Sampled BART Model."}),"\n",(0,i.jsx)(n.h2,{id:"bcf",children:"BCF"}),"\n",(0,i.jsxs)(n.h3,{id:"class-stochtreebcfbcfmodel",children:[(0,i.jsx)(n.em,{children:"class"})," stochtree.bcf.BCFModel"]}),"\n",(0,i.jsx)(n.p,{children:"Class that handles sampling, storage, and serialization of causal BART models like BCF, XBCF, and Warm-Start BCF"}),"\n",(0,i.jsx)(n.h4,{id:"predictx-array-z-array-propensity-array--none--none--array",children:"predict(X: array, Z: array, propensity: array | None = None) \u2192 array"}),"\n",(0,i.jsxs)(n.p,{children:["Predict outcome model components (CATE function and prognostic function) as well as overall outcome for every provided observation.\nPredicted outcomes are computed as ",(0,i.jsx)(n.code,{children:"yhat = mu_x + Z*tau_x"})," where mu_x is a sample of the prognostic function and tau_x is a sample of the treatment effect (CATE) function."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsx)(n.p,{children:"X\n: Test set covariates."}),"\n",(0,i.jsx)(n.p,{children:"Z\n: Test set treatment indicators."}),"\n",(0,i.jsx)(n.p,{children:"propensity\n: Optional test set propensities. Must be provided if propensities were provided when the model was sampled."}),"\n",(0,i.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["tuple of np.array\n: Tuple of arrays with as many rows as in ",(0,i.jsx)(n.code,{children:"X"})," and as many columns as retained samples of the algorithm.\nThe first entry of the tuple contains conditional average treatment effect (CATE) samples,\nthe second entry contains prognostic effect samples, and the third entry contains outcome prediction samples"]}),"\n",(0,i.jsx)(n.h4,{id:"predict_taux-array-z-array-propensity-array--none--none--array",children:"predict_tau(X: array, Z: array, propensity: array | None = None) \u2192 array"}),"\n",(0,i.jsx)(n.p,{children:"Predict CATE function for every provided observation."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsx)(n.p,{children:"X\n: Test set covariates."}),"\n",(0,i.jsx)(n.p,{children:"Z\n: Test set treatment indicators."}),"\n",(0,i.jsx)(n.p,{children:"propensity\n: Optional test set propensities. Must be provided if propensities were provided when the model was sampled."}),"\n",(0,i.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["np.array\n: Array with as many rows as in ",(0,i.jsx)(n.code,{children:"X"})," and as many columns as retained samples of the algorithm."]}),"\n",(0,i.jsx)(n.h4,{id:"samplex_train-dataframe--array-z_train-array-y_train-array-pi_train-array--none--none-x_test-dataframe--array--none--none-z_test-array--none--none-pi_test-array--none--none-num_gfr-int--5-num_burnin-int--0-num_mcmc-int--100-params-dictstr-any--none--none--none",children:"sample(X_train: DataFrame | array, Z_train: array, y_train: array, pi_train: array | None = None, X_test: DataFrame | array | None = None, Z_test: array | None = None, pi_test: array | None = None, num_gfr: int = 5, num_burnin: int = 0, num_mcmc: int = 100, params: Dict[str, Any] | None = None) \u2192 None"}),"\n",(0,i.jsx)(n.p,{children:"Runs a BCF sampler on provided training set. Outcome predictions and estimates of the prognostic and treatment effect functions\nwill be cached for the training set and (if provided) the test set."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsx)(n.p,{children:"X_train\n: Covariates used to split trees in the ensemble. Can be passed as either a matrix or dataframe."}),"\n",(0,i.jsx)(n.p,{children:"Z_train\n: Array of (continuous or binary; univariate or multivariate) treatment assignments."}),"\n",(0,i.jsx)(n.p,{children:"y_train\n: Outcome to be modeled by the ensemble."}),"\n",(0,i.jsx)(n.p,{children:"pi_train\n: Optional vector of propensity scores. If not provided, this will be estimated from the data."}),"\n",(0,i.jsx)(n.p,{children:"X_test\n: Optional test set of covariates used to define \u201cout of sample\u201d evaluation data."}),"\n",(0,i.jsxs)(n.p,{children:["Z_test\n: Optional test set of (continuous or binary) treatment assignments.\nMust be provided if ",(0,i.jsx)(n.code,{children:"X_test"})," is provided."]}),"\n",(0,i.jsxs)(n.p,{children:["pi_test\n: Optional test set vector of propensity scores. If not provided (but ",(0,i.jsx)(n.code,{children:"X_test"})," and ",(0,i.jsx)(n.code,{children:"Z_test"})," are), this will be estimated from the data."]}),"\n",(0,i.jsxs)(n.p,{children:["num_gfr\n: Number of \u201cwarm-start\u201d iterations run using the grow-from-root algorithm (He and Hahn, 2021). Defaults to ",(0,i.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["num_burnin\n: Number of \u201cburn-in\u201d iterations of the MCMC sampler. Defaults to ",(0,i.jsx)(n.code,{children:"0"}),". Ignored if ",(0,i.jsx)(n.code,{children:"num_gfr > 0"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["num_mcmc\n: Number of \u201cretained\u201d iterations of the MCMC sampler. Defaults to ",(0,i.jsx)(n.code,{children:"100"}),". If this is set to 0, GFR (XBART) samples will be retained."]}),"\n",(0,i.jsx)(n.p,{children:"params\n: Dictionary of model parameters, each of which has a default value."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cutpoint_grid_size"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Maximum number of cutpoints to consider for each feature. Defaults to ",(0,i.jsx)(n.code,{children:"100"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sigma_leaf_mu"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Starting value of leaf node scale parameter for the prognostic forest. Calibrated internally as ",(0,i.jsx)(n.code,{children:"2/num_trees_mu"})," if not set here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sigma_leaf_tau"})," (",(0,i.jsx)(n.code,{children:"float"})," or ",(0,i.jsx)(n.code,{children:"np.array"}),"): Starting value of leaf node scale parameter for the treatment effect forest.\n: When treatment (",(0,i.jsx)(n.code,{children:"Z_train"}),") is multivariate, this can be either a ",(0,i.jsx)(n.code,{children:"float"})," or a square 2-dimensional ",(0,i.jsx)(n.code,{children:"np.array"}),"\nwith ",(0,i.jsx)(n.code,{children:"sigma_leaf_tau.shape[0] == Z_train.shape[1]"})," and ",(0,i.jsx)(n.code,{children:"sigma_leaf_tau.shape[1] == Z_train.shape[1]"}),".\nIf ",(0,i.jsx)(n.code,{children:"sigma_leaf_tau"})," is provided as a float for multivariate treatment, the leaf scale term will be set as a\ndiagonal matrix with ",(0,i.jsx)(n.code,{children:"sigma_leaf_tau"})," on every diagonal. If not passed as an argument, this parameter is\ncalibrated internally as ",(0,i.jsx)(n.code,{children:"1/num_trees_tau"})," (and propagated to a diagonal matrix if necessary)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alpha_mu"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Prior probability of splitting for a tree of depth 0 for the prognostic forest.\n: Tree split prior combines ",(0,i.jsx)(n.code,{children:"alpha"})," and ",(0,i.jsx)(n.code,{children:"beta"})," via ",(0,i.jsx)(n.code,{children:"alpha*(1+node_depth)^-beta"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alpha_tau"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Prior probability of splitting for a tree of depth 0 for the treatment effect forest.\n: Tree split prior combines ",(0,i.jsx)(n.code,{children:"alpha"})," and ",(0,i.jsx)(n.code,{children:"beta"})," via ",(0,i.jsx)(n.code,{children:"alpha*(1+node_depth)^-beta"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"beta_mu"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Exponent that decreases split probabilities for nodes of depth > 0 for the prognostic forest.\n: Tree split prior combines ",(0,i.jsx)(n.code,{children:"alpha"})," and ",(0,i.jsx)(n.code,{children:"beta"})," via ",(0,i.jsx)(n.code,{children:"alpha*(1+node_depth)^-beta"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"beta_tau"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Exponent that decreases split probabilities for nodes of depth > 0 for the treatment effect forest.\n: Tree split prior combines ",(0,i.jsx)(n.code,{children:"alpha"})," and ",(0,i.jsx)(n.code,{children:"beta"})," via ",(0,i.jsx)(n.code,{children:"alpha*(1+node_depth)^-beta"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"min_samples_leaf_mu"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Minimum allowable size of a leaf, in terms of training samples, for the prognostic forest. Defaults to ",(0,i.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"min_samples_leaf_tau"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Minimum allowable size of a leaf, in terms of training samples, for the treatment effect forest. Defaults to ",(0,i.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_depth_mu"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Maximum depth of any tree in the mu ensemble. Defaults to ",(0,i.jsx)(n.code,{children:"10"}),". Can be overriden with ",(0,i.jsx)(n.code,{children:"-1"})," which does not enforce any depth limits on trees."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_depth_tau"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Maximum depth of any tree in the tau ensemble. Defaults to ",(0,i.jsx)(n.code,{children:"5"}),". Can be overriden with ",(0,i.jsx)(n.code,{children:"-1"})," which does not enforce any depth limits on trees."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"a_global"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Shape parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_global, b_global)"})," global error variance model. Defaults to ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b_global"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Component of the scale parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_global, b_global)"})," global error variance prior. Defaults to ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"a_leaf_mu"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Shape parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_leaf, b_leaf)"})," leaf node parameter variance model for the prognostic forest. Defaults to ",(0,i.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"a_leaf_tau"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Shape parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_leaf, b_leaf)"})," leaf node parameter variance model for the treatment effect forest. Defaults to ",(0,i.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b_leaf_mu"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Scale parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_leaf, b_leaf)"})," leaf node parameter variance model for the prognostic forest. Calibrated internally as ",(0,i.jsx)(n.code,{children:"0.5/num_trees"})," if not set here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b_leaf_tau"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Scale parameter in the ",(0,i.jsx)(n.code,{children:"IG(a_leaf, b_leaf)"})," leaf node parameter variance model for the treatment effect forest. Calibrated internally as ",(0,i.jsx)(n.code,{children:"0.5/num_trees"})," if not set here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sigma2"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Starting value of global variance parameter. Calibrated internally as in Sparapani et al (2021) if not set here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pct_var_sigma2_init"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Percentage of standardized outcome variance used to initialize global error variance parameter. Superseded by ",(0,i.jsx)(n.code,{children:"sigma2"}),". Defaults to ",(0,i.jsx)(n.code,{children:"0.25"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"variable_weights"})," (np.`array`): Numeric weights reflecting the relative probability of splitting on each variable. Does not need to sum to 1 but cannot be negative. Defaults to ",(0,i.jsx)(n.code,{children:"np.repeat(1/X_train.shape[1], X_train.shape[1])"})," if not set here. Note that if the propensity score is included as a covariate in either forest, its weight will default to ",(0,i.jsx)(n.code,{children:"1/X_train.shape[1]"}),". A workaround if you wish to provide a custom weight for the propensity score is to include it as a column in ",(0,i.jsx)(n.code,{children:"X_train"})," and then set ",(0,i.jsx)(n.code,{children:"propensity_covariate"})," to ",(0,i.jsx)(n.code,{children:"'none'"})," and adjust ",(0,i.jsx)(n.code,{children:"keep_vars_mu"})," and ",(0,i.jsx)(n.code,{children:"keep_vars_tau"})," accordingly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"keep_vars_mu"})," (",(0,i.jsx)(n.code,{children:"list"})," or ",(0,i.jsx)(n.code,{children:"np.array"}),"): Vector of variable names or column indices denoting variables that should be included in the prognostic (",(0,i.jsx)(n.code,{children:"mu(X)"}),") forest. Defaults to ",(0,i.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"drop_vars_mu"})," (",(0,i.jsx)(n.code,{children:"list"})," or ",(0,i.jsx)(n.code,{children:"np.array"}),"): Vector of variable names or column indices denoting variables that should be excluded from the prognostic (",(0,i.jsx)(n.code,{children:"mu(X)"}),") forest. Defaults to ",(0,i.jsx)(n.code,{children:"None"}),". If both ",(0,i.jsx)(n.code,{children:"drop_vars_mu"})," and ",(0,i.jsx)(n.code,{children:"keep_vars_mu"})," are set, ",(0,i.jsx)(n.code,{children:"drop_vars_mu"})," will be ignored."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"keep_vars_tau"})," (",(0,i.jsx)(n.code,{children:"list"})," or ",(0,i.jsx)(n.code,{children:"np.array"}),"): Vector of variable names or column indices denoting variables that should be included in the treatment effect (",(0,i.jsx)(n.code,{children:"tau(X)"}),") forest. Defaults to ",(0,i.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"drop_vars_tau"})," (",(0,i.jsx)(n.code,{children:"list"})," or ",(0,i.jsx)(n.code,{children:"np.array"}),"): Vector of variable names or column indices denoting variables that should be excluded from the treatment effect (",(0,i.jsx)(n.code,{children:"tau(X)"}),") forest. Defaults to ",(0,i.jsx)(n.code,{children:"None"}),". If both ",(0,i.jsx)(n.code,{children:"drop_vars_tau"})," and ",(0,i.jsx)(n.code,{children:"keep_vars_tau"})," are set, ",(0,i.jsx)(n.code,{children:"drop_vars_tau"})," will be ignored."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num_trees_mu"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Number of trees in the prognostic forest. Defaults to ",(0,i.jsx)(n.code,{children:"200"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num_trees_tau"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Number of trees in the treatment effect forest. Defaults to ",(0,i.jsx)(n.code,{children:"50"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sample_sigma_global"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not to update the ",(0,i.jsx)(n.code,{children:"sigma^2"})," global error variance parameter based on ",(0,i.jsx)(n.code,{children:"IG(a_global, b_global)"}),". Defaults to ",(0,i.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sample_sigma_leaf_mu"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not to update the ",(0,i.jsx)(n.code,{children:"tau"})," leaf scale variance parameter based on ",(0,i.jsx)(n.code,{children:"IG(a_leaf, b_leaf)"})," for the prognostic forest.\n: Cannot (currently) be set to true if ",(0,i.jsx)(n.code,{children:"basis_train"})," has more than one column. Defaults to ",(0,i.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sample_sigma_leaf_tau"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not to update the ",(0,i.jsx)(n.code,{children:"tau"})," leaf scale variance parameter based on ",(0,i.jsx)(n.code,{children:"IG(a_leaf, b_leaf)"})," for the treatment effect forest.\n: Cannot (currently) be set to true if ",(0,i.jsx)(n.code,{children:"basis_train"})," has more than one column. Defaults to ",(0,i.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"propensity_covariate"})," (",(0,i.jsx)(n.code,{children:"str"}),"): Whether to include the propensity score as a covariate in either or both of the forests. Enter ",(0,i.jsx)(n.code,{children:'"none"'})," for neither, ",(0,i.jsx)(n.code,{children:'"mu"'})," for the prognostic forest, ",(0,i.jsx)(n.code,{children:'"tau"'})," for the treatment forest, and ",(0,i.jsx)(n.code,{children:'"both"'})," for both forests.\n: If this is not ",(0,i.jsx)(n.code,{children:'"none"'})," and a propensity score is not provided, it will be estimated from (",(0,i.jsx)(n.code,{children:"X_train"}),", ",(0,i.jsx)(n.code,{children:"Z_train"}),") using ",(0,i.jsx)(n.code,{children:"BARTModel"}),". Defaults to ",(0,i.jsx)(n.code,{children:'"mu"'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"adaptive_coding"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not to use an \u201cadaptive coding\u201d scheme in which a binary treatment variable is not coded manually as (0,1) or (-1,1) but learned via\n: parameters ",(0,i.jsx)(n.code,{children:"b_0"})," and ",(0,i.jsx)(n.code,{children:"b_1"})," that attach to the outcome model ",(0,i.jsx)(n.code,{children:"[b_0 (1-Z) + b_1 Z] tau(X)"}),". This is ignored when Z is not binary. Defaults to True."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b_0"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Initial value of the \u201ccontrol\u201d group coding parameter. This is ignored when ",(0,i.jsx)(n.code,{children:"Z"})," is not binary. Default: ",(0,i.jsx)(n.code,{children:"-0.5"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b_1"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Initial value of the \u201ctreated\u201d group coding parameter. This is ignored when ",(0,i.jsx)(n.code,{children:"Z"})," is not binary. Default: ",(0,i.jsx)(n.code,{children:"0.5"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"random_seed"})," (",(0,i.jsx)(n.code,{children:"int"}),"): Integer parameterizing the C++ random number generator. If not specified, the C++ random number generator is seeded according to ",(0,i.jsx)(n.code,{children:"std::random_device"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"keep_burnin"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not \u201cburnin\u201d samples should be included in predictions. Defaults to ",(0,i.jsx)(n.code,{children:"False"}),". Ignored if ",(0,i.jsx)(n.code,{children:"num_mcmc == 0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"keep_gfr"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether or not \u201cwarm-start\u201d / grow-from-root samples should be included in predictions. Defaults to ",(0,i.jsx)(n.code,{children:"False"}),". Ignored if ",(0,i.jsx)(n.code,{children:"num_mcmc == 0"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"self\n: Sampled BCF Model."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var a=r(6540);const i={},t=a.createContext(i);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);