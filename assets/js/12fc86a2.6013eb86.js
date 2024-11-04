"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5524],{9206:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"r-documentation-markdown/ForestModel","title":"ForestModel","description":"Description","source":"@site/docs/r-documentation-markdown/ForestModel.md","sourceDirName":"r-documentation-markdown","slug":"/r-documentation-markdown/ForestModel","permalink":"/documentation/docs/r-documentation-markdown/ForestModel","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r-documentation-markdown/ForestModel.md","tags":[],"version":"current","frontMatter":{"title":"ForestModel"},"sidebar":"tutorialSidebar","previous":{"title":"ForestDataset","permalink":"/documentation/docs/r-documentation-markdown/ForestDataset"},"next":{"title":"ForestSamples","permalink":"/documentation/docs/r-documentation-markdown/ForestSamples"}}');var r=n(4848),i=n(8453);const o={title:"ForestModel"},d="Class that defines and samples a forest model",a={},l=[{value:"Description",id:"description",level:2},{value:"Public fields",id:"public-fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Public methods",id:"public-methods",level:3},{value:"Method <code>new()</code>",id:"method-new",level:3},{value:"Usage",id:"usage",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"Method <code>sample_one_iteration()</code>",id:"method-sample_one_iteration",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Method <code>propagate_basis_update()</code>",id:"method-propagate_basis_update",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Arguments",id:"arguments-2",level:4},{value:"Method <code>propagate_residual_update()</code>",id:"method-propagate_residual_update",level:3},{value:"Usage",id:"usage-3",level:4},{value:"Arguments",id:"arguments-3",level:4},{value:"Returns",id:"returns-1",level:4}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"class-that-defines-and-samples-a-forest-model",children:"Class that defines and samples a forest model"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Hosts the C++ data structures needed to sample an ensemble of decision\ntrees, and exposes functionality to run a forest sampler\n(using either MCMC or the grow-from-root algorithm)."}),"\n",(0,r.jsx)(s.h2,{id:"public-fields",children:"Public fields"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"tracker_ptr"}),": External pointer to a C++ ForestTracker class"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"tree_prior_ptr"}),": External pointer to a C++ TreePrior class"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"public-methods",children:"Public methods"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#method-ForestModel-new",children:(0,r.jsx)(s.code,{children:"ForestModel$new()"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#method-ForestModel-sample_one_iteration",children:(0,r.jsx)(s.code,{children:"ForestModel$sample_one_iteration()"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#method-ForestModel-propagate_basis_update",children:(0,r.jsx)(s.code,{children:"ForestModel$propagate_basis_update()"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#method-ForestModel-propagate_residual_update",children:(0,r.jsx)(s.code,{children:"ForestModel$propagate_residual_update()"})})}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"method-new",children:["Method ",(0,r.jsx)(s.code,{children:"new()"})]}),"\n",(0,r.jsx)(s.p,{children:"Create a new ForestModel object."}),"\n",(0,r.jsx)(s.h4,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"ForestModel$new(\n  forest_dataset,\n  feature_types,\n  num_trees,\n  n,\n  alpha,\n  beta,\n  min_samples_leaf,\n  max_depth = -1\n)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"forest_dataset"}),": ",(0,r.jsx)(s.code,{children:"ForestDataset"})," object, used to initialize forest sampling data structures"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"feature_types"}),": Feature types (integers where 0 = numeric, 1 = ordered categorical, 2 = unordered categorical)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"num_trees"}),": Number of trees in the forest being sampled"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"n"}),": Number of observations in ",(0,r.jsx)(s.code,{children:"forest_dataset"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"alpha"}),": Root node split probability in tree prior"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beta"}),": Depth prior penalty in tree prior"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"min_samples_leaf"}),": Minimum number of samples in a tree leaf"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"max_depth"}),": Maximum depth that any tree can reach"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:["A new ",(0,r.jsx)(s.code,{children:"ForestModel"})," object."]}),"\n",(0,r.jsxs)(s.h3,{id:"method-sample_one_iteration",children:["Method ",(0,r.jsx)(s.code,{children:"sample_one_iteration()"})]}),"\n",(0,r.jsx)(s.p,{children:"Run a single iteration of the forest sampling algorithm (MCMC or GFR)"}),"\n",(0,r.jsx)(s.h4,{id:"usage-1",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"ForestModel$sample_one_iteration(\n  forest_dataset,\n  residual,\n  forest_samples,\n  rng,\n  feature_types,\n  leaf_model_int,\n  leaf_model_scale,\n  variable_weights,\n  a_forest,\n  b_forest,\n  global_scale,\n  cutpoint_grid_size = 500,\n  gfr = T,\n  pre_initialized = F\n)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"arguments-1",children:"Arguments"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"forest_dataset"}),": Dataset used to sample the forest"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"residual"}),": Outcome used to sample the forest"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"forest_samples"}),": Container of forest samples"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"rng"}),": Wrapper around C++ random number generator"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"feature_types"}),": Vector specifying the type of all p covariates in ",(0,r.jsx)(s.code,{children:"forest_dataset"})," (0 = numeric, 1 = ordered categorical, 2 = unordered categorical)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"leaf_model_int"}),": Integer specifying the leaf model type (0 = constant leaf, 1 = univariate leaf regression, 2 = multivariate leaf regression)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"leaf_model_scale"}),": Scale parameter used in the leaf node model (should be a q x q matrix where q is the dimensionality of the basis and is only >1 when ",(0,r.jsx)(s.code,{children:"leaf_model_int = 2"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"variable_weights"}),": Vector specifying sampling probability for all p covariates in ",(0,r.jsx)(s.code,{children:"forest_dataset"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"a_forest"}),": Shape parameter on variance forest model (if applicable)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"b_forest"}),": Scale parameter on variance forest model (if applicable)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"global_scale"}),": Global variance parameter"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"cutpoint_grid_size"}),": (Optional) Number of unique cutpoints to consider (default: 500, currently only used when ",(0,r.jsx)(s.code,{children:"GFR = TRUE"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"gfr"}),': (Optional) Whether or not the forest should be sampled using the "grow-from-root" (GFR) algorithm']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"pre_initialized"}),": (Optional) Whether or not the leaves are pre-initialized outside of the sampling loop (before any samples are drawn). In multi-forest implementations like BCF, this is true, though in the single-forest supervised learning implementation, we can let C++ do the initialization. Default: F."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"method-propagate_basis_update",children:["Method ",(0,r.jsx)(s.code,{children:"propagate_basis_update()"})]}),"\n",(0,r.jsx)(s.p,{children:'Propagates basis update through to the (full/partial) residual by iteratively\n(a) adding back in the previous prediction of each tree, (b) recomputing predictions\nfor each tree (caching on the C++ side), (c) subtracting the new predictions from the residual.\nThis is useful in cases where a basis (for e.g. leaf regression) is updated outside\nof a tree sampler (as with e.g. adaptive coding for binary treatment BCF).\nOnce a basis has been updated, the overall "function" represented by a tree model has\nchanged and this should be reflected through to the residual before the next sampling loop is run.'}),"\n",(0,r.jsx)(s.h4,{id:"usage-2",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"ForestModel$propagate_basis_update(\n  dataset,\n  outcome,\n  forest_samples,\n  forest_num\n)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"arguments-2",children:"Arguments"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"dataset"}),": ",(0,r.jsx)(s.code,{children:"ForestDataset"})," object storing the covariates and bases for a given forest"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"outcome"}),": ",(0,r.jsx)(s.code,{children:"Outcome"})," object storing the residuals to be updated based on forest predictions"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"forest_samples"}),": ",(0,r.jsx)(s.code,{children:"ForestSamples"})," object storing draws of tree ensembles"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"forest_num"}),": Index of forest used to update residuals (starting at 1, in R style)"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"method-propagate_residual_update",children:["Method ",(0,r.jsx)(s.code,{children:"propagate_residual_update()"})]}),"\n",(0,r.jsxs)(s.p,{children:["Update the current state of the outcome (i.e. partial residual) data by subtracting the current predictions of each tree.\nThis function is run after the ",(0,r.jsx)(s.code,{children:"Outcome"})," class's ",(0,r.jsx)(s.code,{children:"update_data"})," method, which overwrites the partial residual with an entirely new stream of outcome data."]}),"\n",(0,r.jsx)(s.h4,{id:"usage-3",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"ForestModel$propagate_residual_update(residual)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"arguments-3",children:"Arguments"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"residual"}),": Outcome used to sample the forest"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:"NULL"})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var t=n(6540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);