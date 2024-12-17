"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1398],{523:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"r-documentation-markdown/createBARTModelFromCombinedJson","title":"createBARTModelFromCombinedJson","description":"Description","source":"@site/docs/r-documentation-markdown/createBARTModelFromCombinedJson.md","sourceDirName":"r-documentation-markdown","slug":"/r-documentation-markdown/createBARTModelFromCombinedJson","permalink":"/documentation/docs/r-documentation-markdown/createBARTModelFromCombinedJson","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r-documentation-markdown/createBARTModelFromCombinedJson.md","tags":[],"version":"current","frontMatter":{"title":"createBARTModelFromCombinedJson"},"sidebar":"tutorialSidebar","previous":{"title":"convertBCFModelToJson","permalink":"/documentation/docs/r-documentation-markdown/convertBCFModelToJson"},"next":{"title":"createBARTModelFromCombinedJsonString","permalink":"/documentation/docs/r-documentation-markdown/createBARTModelFromCombinedJsonString"}}');var r=o(4848),s=o(8453);const i={title:"createBARTModelFromCombinedJson"},d="Convert a list of (in-memory) JSON representations of a BART model to a single combined BART model object",a={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Value",id:"value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"convert-a-list-of-in-memory-json-representations-of-a-bart-model-to-a-single-combined-bart-model-object",children:"Convert a list of (in-memory) JSON representations of a BART model to a single combined BART model object"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Convert a list of (in-memory) JSON representations of a BART model to a single combined BART model object\nwhich can be used for prediction, etc..."}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-r",children:"createBARTModelFromCombinedJson(json_object_list)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"json_object_list"}),": List of objects of type ",(0,r.jsx)(n.code,{children:"CppJson"})," containing Json representation of a BART model"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"value",children:"Value"}),"\n",(0,r.jsxs)(n.p,{children:["Object of type ",(0,r.jsx)(n.code,{children:"bartmodel"})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-r",children:"n \\<- 100\np \\<- 5\nX \\<- matrix(runif(n*p), ncol = p)\nf_XW \\<- (\n```r\n((0 \\<= X[,1]) & (0.25 \\> X[,1])) * (-7.5) + \n((0.25 \\<= X[,1]) & (0.5 \\> X[,1])) * (-2.5) + \n((0.5 \\<= X[,1]) & (0.75 \\> X[,1])) * (2.5) + \n((0.75 \\<= X[,1]) & (1 \\> X[,1])) * (7.5)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[")\nnoise_sd <- 1\ny <- f_XW + rnorm(n, 0, noise_sd)\ntest_set_pct <- 0.2\nn_test <- round(test_set_pct*n)\nn_train <- n - n_test\ntest_inds <- sort(sample(1",":n",", n_test, replace = FALSE))\ntrain_inds <- (1",":n",")[!((1",":n",") %in% test_inds)]\nX_test <- X[test_inds,]\nX_train <- X[train_inds,]\ny_test <- y[test_inds]\ny_train <- y[train_inds]\nbart_model <- bart(X_train = X_train, y_train = y_train)"]}),"\n",(0,r.jsx)(n.h1,{id:"bart_json---listconvertbartmodeltojsonbart_model",children:"bart_json <- list(convertBARTModelToJson(bart_model))"}),"\n",(0,r.jsx)(n.h1,{id:"bart_model_roundtrip---createbartmodelfromcombinedjsonbart_json",children:"bart_model_roundtrip <- createBARTModelFromCombinedJson(bart_json)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>d});var t=o(6540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);