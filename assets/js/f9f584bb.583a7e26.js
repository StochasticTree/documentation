"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7883],{1228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"r-documentation-markdown/saveBARTModelToJsonFile","title":"saveBARTModelToJsonFile","description":"Description","source":"@site/docs/r-documentation-markdown/saveBARTModelToJsonFile.md","sourceDirName":"r-documentation-markdown","slug":"/r-documentation-markdown/saveBARTModelToJsonFile","permalink":"/documentation/docs/r-documentation-markdown/saveBARTModelToJsonFile","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r-documentation-markdown/saveBARTModelToJsonFile.md","tags":[],"version":"current","frontMatter":{"title":"saveBARTModelToJsonFile"},"sidebar":"tutorialSidebar","previous":{"title":"sample_tau_one_iteration","permalink":"/documentation/docs/r-documentation-markdown/sample_tau_one_iteration"},"next":{"title":"saveBARTModelToJsonString","permalink":"/documentation/docs/r-documentation-markdown/saveBARTModelToJsonString"}}');var s=t(4848),a=t(8453);const i={title:"saveBARTModelToJsonFile"},r="Convert the persistent aspects of a BART model to (in-memory) JSON and save to a file",d={},l=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"convert-the-persistent-aspects-of-a-bart-model-to-in-memory-json-and-save-to-a-file",children:"Convert the persistent aspects of a BART model to (in-memory) JSON and save to a file"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Convert the persistent aspects of a BART model to (in-memory) JSON and save to a file"}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-r",children:"saveBARTModelToJsonFile(object, filename)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),": Object of type ",(0,s.jsx)(n.code,{children:"bartmodel"})," containing draws of a BART model and associated sampling outputs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filename"}),': String of filepath, must end in ".json"']}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-r",children:"n \\<- 100\np \\<- 5\nX \\<- matrix(runif(n*p), ncol = p)\nf_XW \\<- (\n```r\n((0 \\<= X[,1]) & (0.25 \\> X[,1])) * (-7.5) + \n((0.25 \\<= X[,1]) & (0.5 \\> X[,1])) * (-2.5) + \n((0.5 \\<= X[,1]) & (0.75 \\> X[,1])) * (2.5) + \n((0.75 \\<= X[,1]) & (1 \\> X[,1])) * (7.5)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[")\nnoise_sd <- 1\ny <- f_XW + rnorm(n, 0, noise_sd)\ntest_set_pct <- 0.2\nn_test <- round(test_set_pct*n)\nn_train <- n - n_test\ntest_inds <- sort(sample(1",":n",", n_test, replace = FALSE))\ntrain_inds <- (1",":n",")[!((1",":n",") %in% test_inds)]\nX_test <- X[test_inds,]\nX_train <- X[train_inds,]\ny_test <- y[test_inds]\ny_train <- y[train_inds]\nbart_model <- bart(X_train = X_train, y_train = y_train)"]}),"\n",(0,s.jsx)(n.h1,{id:"savebartmodeltojsonfilebart_model-testjson",children:'saveBARTModelToJsonFile(bart_model, "test.json")'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(6540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);