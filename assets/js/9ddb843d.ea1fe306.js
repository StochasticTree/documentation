"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[643],{7729:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"r-documentation-markdown/preprocessPredictionData","title":"preprocessPredictionData","description":"Description","source":"@site/docs/r-documentation-markdown/preprocessPredictionData.md","sourceDirName":"r-documentation-markdown","slug":"/r-documentation-markdown/preprocessPredictionData","permalink":"/documentation/docs/r-documentation-markdown/preprocessPredictionData","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r-documentation-markdown/preprocessPredictionData.md","tags":[],"version":"current","frontMatter":{"title":"preprocessPredictionData"},"sidebar":"tutorialSidebar","previous":{"title":"preprocessBcfParams","permalink":"/documentation/docs/r-documentation-markdown/preprocessBcfParams"},"next":{"title":"preprocessPredictionDataFrame","permalink":"/documentation/docs/r-documentation-markdown/preprocessPredictionDataFrame"}}');var t=a(4848),s=a(8453);const o={title:"preprocessPredictionData"},i="Preprocess covariates. DataFrames will be preprocessed based on their column",c={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Value",id:"value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"preprocess-covariates-dataframes-will-be-preprocessed-based-on-their-column",children:"Preprocess covariates. DataFrames will be preprocessed based on their column"})}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Preprocess covariates. DataFrames will be preprocessed based on their column\ntypes. Matrices will be passed through assuming all columns are numeric."}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-r",children:"preprocessPredictionData(input_data, metadata)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"input_data"}),": Covariates, provided as either a dataframe or a matrix"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"metadata"}),": List containing information on variables, including train set\ncategories for categorical variables"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"value",children:"Value"}),"\n",(0,t.jsx)(r.p,{children:"Preprocessed data with categorical variables appropriately handled"}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-r",children:'cov_df \\<- data.frame(x1 = 1:5, x2 = 5:1, x3 = 6:10)\nmetadata \\<- list(num_ordered_cat_vars = 0, num_unordered_cat_vars = 0, \n```r\n             num_numeric_vars = 3, numeric_vars = c("x1", "x2", "x3"))\n'})}),"\n",(0,t.jsx)(r.p,{children:"X_preprocessed <- preprocessPredictionData(cov_df, metadata)"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>o,x:()=>i});var n=a(6540);const t={},s=n.createContext(t);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);