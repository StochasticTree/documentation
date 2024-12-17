"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[649],{9425:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"r-documentation-markdown/preprocessTrainData","title":"preprocessTrainData","description":"Description","source":"@site/docs/r-documentation-markdown/preprocessTrainData.md","sourceDirName":"r-documentation-markdown","slug":"/r-documentation-markdown/preprocessTrainData","permalink":"/documentation/docs/r-documentation-markdown/preprocessTrainData","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r-documentation-markdown/preprocessTrainData.md","tags":[],"version":"current","frontMatter":{"title":"preprocessTrainData"},"sidebar":"tutorialSidebar","previous":{"title":"preprocessPredictionMatrix","permalink":"/documentation/docs/r-documentation-markdown/preprocessPredictionMatrix"},"next":{"title":"preprocessTrainDataFrame","permalink":"/documentation/docs/r-documentation-markdown/preprocessTrainDataFrame"}}');var t=a(4848),s=a(8453);const i={title:"preprocessTrainData"},o="Preprocess covariates. DataFrames will be preprocessed based on their column",c={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Value",id:"value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"preprocess-covariates-dataframes-will-be-preprocessed-based-on-their-column",children:"Preprocess covariates. DataFrames will be preprocessed based on their column"})}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Preprocess covariates. DataFrames will be preprocessed based on their column\ntypes. Matrices will be passed through assuming all columns are numeric."}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-r",children:"preprocessTrainData(input_data)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"input_data"}),": Covariates, provided as either a dataframe or a matrix"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"variable_weights"}),": Numeric weights reflecting the relative probability of splitting on each variable"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"value",children:"Value"}),"\n",(0,t.jsx)(r.p,{children:"List with preprocessed (unmodified) data and details on the number of each type\nof variable, unique categories associated with categorical variables, and the\nvector of feature types needed for calls to BART and BCF."}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-r",children:"cov_mat \\<- matrix(1:12, ncol = 3)\npreprocess_list \\<- preprocessTrainData(cov_mat)\nX \\<- preprocess_list$X\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>o});var n=a(6540);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);