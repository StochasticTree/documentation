"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5774],{6322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"r-documentation-markdown/oneHotEncode","title":"oneHotEncode","description":"Description","source":"@site/docs/r-documentation-markdown/oneHotEncode.md","sourceDirName":"r-documentation-markdown","slug":"/r-documentation-markdown/oneHotEncode","permalink":"/documentation/docs/r-documentation-markdown/oneHotEncode","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r-documentation-markdown/oneHotEncode.md","tags":[],"version":"current","frontMatter":{"title":"oneHotEncode"},"sidebar":"tutorialSidebar","previous":{"title":"loadVectorJson","permalink":"/documentation/docs/r-documentation-markdown/loadVectorJson"},"next":{"title":"oneHotInitializeAndEncode","permalink":"/documentation/docs/r-documentation-markdown/oneHotInitializeAndEncode"}}');var a=t(4848),r=t(8453);const i={title:"oneHotEncode"},c="Convert a vector of unordered categorical data (either numeric or character",s={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Value",id:"value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"convert-a-vector-of-unordered-categorical-data-either-numeric-or-character",children:"Convert a vector of unordered categorical data (either numeric or character"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["This procedure assumes that a reference set of observations for this variable\n(typically a training set that was used to sample a forest) has already been\none-hot encoded and that the unique levels of the training set variable are\navailable (and passed as ",(0,a.jsx)(n.code,{children:"unique_levels"}),"). Test set observations that contain\ncategories not in ",(0,a.jsx)(n.code,{children:"unique_levels"})," will all be mapped to the last column of\nthis matrix"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-r",children:"oneHotEncode(x_input, unique_levels)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"x_input"}),": Vector of unordered categorical data (typically either strings\nintegers, but this function also accepts floating point data)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"unique_levels"}),": Unique values of the categorical variable used to create\nthe initial one-hot matrix (typically a training set)"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"value",children:"Value"}),"\n",(0,a.jsx)(n.p,{children:"Binary one-hot matrix"}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-r",children:"x \\<- sample(1:8, 100, TRUE)\nx_test \\<- sample(1:9, 10, TRUE)\nx_onehot \\<- oneHotEncode(x_test, levels(factor(x)))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);