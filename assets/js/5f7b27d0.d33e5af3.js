"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6084],{8495:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"r-documentation-markdown/orderedCatPreprocess","title":"orderedCatPreprocess","description":"Description","source":"@site/docs/r-documentation-markdown/orderedCatPreprocess.md","sourceDirName":"r-documentation-markdown","slug":"/r-documentation-markdown/orderedCatPreprocess","permalink":"/documentation/docs/r-documentation-markdown/orderedCatPreprocess","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r-documentation-markdown/orderedCatPreprocess.md","tags":[],"version":"current","frontMatter":{"title":"orderedCatPreprocess"},"sidebar":"tutorialSidebar","previous":{"title":"orderedCatInitializeAndPreprocess","permalink":"/documentation/docs/r-documentation-markdown/orderedCatInitializeAndPreprocess"},"next":{"title":"predict.bartmodel","permalink":"/documentation/docs/r-documentation-markdown/predict.bartmodel"}}');var t=n(4848),a=n(8453);const s={title:"orderedCatPreprocess"},i="Run some simple preprocessing of ordered categorical variables, converting",d={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Value",id:"value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"run-some-simple-preprocessing-of-ordered-categorical-variables-converting",children:"Run some simple preprocessing of ordered categorical variables, converting"})}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Run some simple preprocessing of ordered categorical variables, converting\nordered levels to integers if necessary, and storing the unique levels of a\nvariable."}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-r",children:"orderedCatPreprocess(x_input, unique_levels, var_name = NULL)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"x_input"}),": Vector of ordered categorical data. If the data is not already\nstored as an ordered factor, it will be converted to one using the default\nsort order."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"unique_levels"}),": Vector of unique levels for a categorical feature."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"var_name"}),": (Optional) Name of variable."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"value",children:"Value"}),"\n",(0,t.jsx)(r.p,{children:"List containing a preprocessed vector of integer-converted ordered\ncategorical observations and the unique level of the original ordered\ncategorical feature."}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-r",children:'x_levels \\<- c("1. Strongly disagree", "2. Disagree", "3. Neither agree nor disagree", "4. Agree", "5. Strongly agree")\nx \\<- c("1. Strongly disagree", "3. Neither agree nor disagree", "2. Disagree", "4. Agree", "3. Neither agree nor disagree", "5. Strongly agree", "4. Agree")\nx_processed \\<- orderedCatPreprocess(x, x_levels)\n'})})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var o=n(6540);const t={},a=o.createContext(t);function s(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);