"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3178],{5629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"r-documentation-markdown/getRandomEffectSamples.bartmodel","title":"getRandomEffectSamples.bartmodel","description":"Description","source":"@site/docs/r-documentation-markdown/getRandomEffectSamples.bartmodel.md","sourceDirName":"r-documentation-markdown","slug":"/r-documentation-markdown/getRandomEffectSamples.bartmodel","permalink":"/documentation/docs/r-documentation-markdown/getRandomEffectSamples.bartmodel","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r-documentation-markdown/getRandomEffectSamples.bartmodel.md","tags":[],"version":"current","frontMatter":{"title":"getRandomEffectSamples.bartmodel"},"sidebar":"tutorialSidebar","previous":{"title":"createRandomEffectsTracker","permalink":"/documentation/docs/r-documentation-markdown/createRandomEffectsTracker"},"next":{"title":"getRandomEffectSamples.bcf","permalink":"/documentation/docs/r-documentation-markdown/getRandomEffectSamples.bcf"}}');var s=t(4848),a=t(8453);const o={title:"getRandomEffectSamples.bartmodel"},i="Extract raw sample values for each of the random effect parameter terms.",d={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Value",id:"value",level:2},{value:"Examples",id:"examples",level:2}];function m(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"extract-raw-sample-values-for-each-of-the-random-effect-parameter-terms",children:"Extract raw sample values for each of the random effect parameter terms."})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Extract raw sample values for each of the random effect parameter terms."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-r",children:"# S3 method for bartmodel\ngetRandomEffectSamples(object, ...)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),": Object of type ",(0,s.jsx)(n.code,{children:"bcf"})," containing draws of a Bayesian causal forest model and associated sampling outputs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"..."}),": Other parameters to be used in random effects extraction"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"value",children:"Value"}),"\n",(0,s.jsxs)(n.p,{children:["List of arrays. The alpha array has dimension (",(0,s.jsx)(n.code,{children:"num_components"}),", ",(0,s.jsx)(n.code,{children:"num_samples"}),") and is simply a vector if ",(0,s.jsx)(n.code,{children:"num_components = 1"}),".\nThe xi and beta arrays have dimension (",(0,s.jsx)(n.code,{children:"num_components"}),", ",(0,s.jsx)(n.code,{children:"num_groups"}),", ",(0,s.jsx)(n.code,{children:"num_samples"}),") and is simply a matrix if ",(0,s.jsx)(n.code,{children:"num_components = 1"}),".\nThe sigma array has dimension (",(0,s.jsx)(n.code,{children:"num_components"}),", ",(0,s.jsx)(n.code,{children:"num_samples"}),") and is simply a vector if ",(0,s.jsx)(n.code,{children:"num_components = 1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-r",children:"n \\<- 100\np \\<- 5\nX \\<- matrix(runif(n*p), ncol = p)\nf_XW \\<- (\n```r\n((0 \\<= X[,1]) & (0.25 \\> X[,1])) * (-7.5) + \n((0.25 \\<= X[,1]) & (0.5 \\> X[,1])) * (-2.5) + \n((0.5 \\<= X[,1]) & (0.75 \\> X[,1])) * (2.5) + \n((0.75 \\<= X[,1]) & (1 \\> X[,1])) * (7.5)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[")\nsnr <- 3\ngroup_ids <- rep(c(1,2), n %/% 2)\nrfx_coefs <- matrix(c(-1, -1, 1, 1), nrow=2, byrow=TRUE)\nrfx_basis <- cbind(1, runif(n, -1, 1))\nrfx_term <- rowSums(rfx_coefs[group_ids,] * rfx_basis)\nE_y <- f_XW + rfx_term\ny <- E_y + rnorm(n, 0, 1)",(0,s.jsx)(n.em,{children:"(sd(E_y)/snr)\ntest_set_pct <- 0.2\nn_test <- round(test_set_pct"}),"n)\nn_train <- n - n_test\ntest_inds <- sort(sample(1",":n",", n_test, replace = FALSE))\ntrain_inds <- (1",":n",")[!((1",":n",") %in% test_inds)]\nX_test <- X[test_inds,]\nX_train <- X[train_inds,]\ny_test <- y[test_inds]\ny_train <- y[train_inds]\ngroup_ids_test <- group_ids[test_inds]\ngroup_ids_train <- group_ids[train_inds]\nrfx_basis_test <- rfx_basis[test_inds,]\nrfx_basis_train <- rfx_basis[train_inds,]\nrfx_term_test <- rfx_term[test_inds]\nrfx_term_train <- rfx_term[train_inds]\nbart_model <- bart(X_train = X_train, y_train = y_train,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-r",children:"               group_ids_train = group_ids_train, rfx_basis_train = rfx_basis_train, \n               X_test = X_test, group_ids_test = group_ids_test, rfx_basis_test = rfx_basis_test, \n               num_gfr = 100, num_burnin = 0, num_mcmc = 100)\n"})}),"\n",(0,s.jsx)(n.p,{children:"rfx_samples <- getRandomEffectSamples(bart_model)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);