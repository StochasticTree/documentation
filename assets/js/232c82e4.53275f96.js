"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6726],{7538:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"python-documentation-markdown/supervised","title":"Supervised Learning","description":"This vignette provides a quick overview (using simulated data) of how to use stochtree for supervised learning.","source":"@site/docs/python-documentation-markdown/supervised.md","sourceDirName":"python-documentation-markdown","slug":"/python-documentation-markdown/supervised","permalink":"/documentation/docs/python-documentation-markdown/supervised","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-documentation-markdown/supervised.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Installation","permalink":"/documentation/docs/python-documentation-markdown/install"}}');var r=t(4848),a=t(8453);const o={},i="Supervised Learning",d={},c=[];function p(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"supervised-learning",children:"Supervised Learning"})}),"\n",(0,r.jsxs)(e.p,{children:["This vignette provides a quick overview (using simulated data) of how to use ",(0,r.jsx)(e.code,{children:"stochtree"})," for supervised learning.\nStart by loading stochtree\u2019s ",(0,r.jsx)(e.code,{children:"BARTModel"})," class and a number of other packages."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nfrom stochtree import BARTModel\nfrom sklearn.model_selection import train_test_split\n"})}),"\n",(0,r.jsx)(e.p,{children:"Now, we generate a simulated prediction problem"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"# RNG\nrandom_seed = 1234\nrng = np.random.default_rng(random_seed)\n\n# Generate covariates and basis\nn = 1000\np_X = 10\np_W = 1\nX = rng.uniform(0, 1, (n, p_X))\nW = rng.uniform(0, 1, (n, p_W))\n\n# Define the outcome mean function\ndef outcome_mean(X, W):\n    return np.where(\n        (X[:,0] >= 0.0) & (X[:,0] < 0.25), -7.5 * W[:,0],\n        np.where(\n            (X[:,0] >= 0.25) & (X[:,0] < 0.5), -2.5 * W[:,0],\n            np.where(\n                (X[:,0] >= 0.5) & (X[:,0] < 0.75), 2.5 * W[:,0],\n                7.5 * W[:,0]\n            )\n        )\n    )\n\n# Generate outcome\nepsilon = rng.normal(0, 1, n)\ny = outcome_mean(X, W) + epsilon\n\n# Standardize outcome\ny_bar = np.mean(y)\ny_std = np.std(y)\nresid = (y-y_bar)/y_std\n"})}),"\n",(0,r.jsx)(e.p,{children:"Split the dataset into train and test sets"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"sample_inds = np.arange(n)\ntrain_inds, test_inds = train_test_split(sample_inds, test_size=0.5)\nX_train = X[train_inds,:]\nX_test = X[test_inds,:]\nbasis_train = W[train_inds,:]\nbasis_test = W[test_inds,:]\ny_train = y[train_inds]\ny_test = y[test_inds]\n"})}),"\n",(0,r.jsx)(e.p,{children:"Initialize and run a BART sampler for 100 iterations (after 10 \u201cwarm-start\u201d draws)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"bart_model = BARTModel()\nbart_model.sample(X_train=X_train, y_train=y_train, basis_train=basis_train, X_test=X_test, basis_test=basis_test, num_gfr=10, num_mcmc=100)\n"})})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var s=t(6540);const r={},a=s.createContext(r);function o(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);