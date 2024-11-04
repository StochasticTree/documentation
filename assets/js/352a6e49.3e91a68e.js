"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1062],{2879:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"r-documentation-markdown/CppJson","title":"CppJson","description":"Description","source":"@site/docs/r-documentation-markdown/CppJson.md","sourceDirName":"r-documentation-markdown","slug":"/r-documentation-markdown/CppJson","permalink":"/documentation/docs/r-documentation-markdown/CppJson","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r-documentation-markdown/CppJson.md","tags":[],"version":"current","frontMatter":{"title":"CppJson"},"sidebar":"tutorialSidebar","previous":{"title":"struct `StochTree::LocalFile`","permalink":"/documentation/docs/c-documentation-markdown/struct_`StochTreeLocalFile`"},"next":{"title":"CppRNG","permalink":"/documentation/docs/r-documentation-markdown/CppRNG"}}');var l=d(4848),r=d(8453);const i={title:"CppJson"},o="Class that stores draws from an random ensemble of decision trees",t={},c=[{value:"Description",id:"description",level:2},{value:"Public fields",id:"public-fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Public methods",id:"public-methods",level:3},{value:"Method <code>new()</code>",id:"method-new",level:3},{value:"Usage",id:"usage",level:4},{value:"Returns",id:"returns",level:4},{value:"Method <code>add_forest()</code>",id:"method-add_forest",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Method <code>add_random_effects()</code>",id:"method-add_random_effects",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Method <code>add_scalar()</code>",id:"method-add_scalar",level:3},{value:"Usage",id:"usage-3",level:4},{value:"Arguments",id:"arguments-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Method <code>add_boolean()</code>",id:"method-add_boolean",level:3},{value:"Usage",id:"usage-4",level:4},{value:"Arguments",id:"arguments-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Method <code>add_string()</code>",id:"method-add_string",level:3},{value:"Usage",id:"usage-5",level:4},{value:"Arguments",id:"arguments-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Method <code>add_vector()</code>",id:"method-add_vector",level:3},{value:"Usage",id:"usage-6",level:4},{value:"Arguments",id:"arguments-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Method <code>add_string_vector()</code>",id:"method-add_string_vector",level:3},{value:"Usage",id:"usage-7",level:4},{value:"Arguments",id:"arguments-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Method <code>add_list()</code>",id:"method-add_list",level:3},{value:"Usage",id:"usage-8",level:4},{value:"Arguments",id:"arguments-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Method <code>add_string_list()</code>",id:"method-add_string_list",level:3},{value:"Usage",id:"usage-9",level:4},{value:"Arguments",id:"arguments-8",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Method <code>get_scalar()</code>",id:"method-get_scalar",level:3},{value:"Usage",id:"usage-10",level:4},{value:"Arguments",id:"arguments-9",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Method <code>get_boolean()</code>",id:"method-get_boolean",level:3},{value:"Usage",id:"usage-11",level:4},{value:"Arguments",id:"arguments-10",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Method <code>get_string()</code>",id:"method-get_string",level:3},{value:"Usage",id:"usage-12",level:4},{value:"Arguments",id:"arguments-11",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Method <code>get_vector()</code>",id:"method-get_vector",level:3},{value:"Usage",id:"usage-13",level:4},{value:"Arguments",id:"arguments-12",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Method <code>get_string_vector()</code>",id:"method-get_string_vector",level:3},{value:"Usage",id:"usage-14",level:4},{value:"Arguments",id:"arguments-13",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Method <code>get_numeric_list()</code>",id:"method-get_numeric_list",level:3},{value:"Usage",id:"usage-15",level:4},{value:"Arguments",id:"arguments-14",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Method <code>get_string_list()</code>",id:"method-get_string_list",level:3},{value:"Usage",id:"usage-16",level:4},{value:"Arguments",id:"arguments-15",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Method <code>return_json_string()</code>",id:"method-return_json_string",level:3},{value:"Usage",id:"usage-17",level:4},{value:"Returns",id:"returns-17",level:4},{value:"Method <code>save_file()</code>",id:"method-save_file",level:3},{value:"Usage",id:"usage-18",level:4},{value:"Arguments",id:"arguments-16",level:4},{value:"Returns",id:"returns-18",level:4},{value:"Method <code>load_from_file()</code>",id:"method-load_from_file",level:3},{value:"Usage",id:"usage-19",level:4},{value:"Arguments",id:"arguments-17",level:4},{value:"Returns",id:"returns-19",level:4},{value:"Method <code>load_from_string()</code>",id:"method-load_from_string",level:3},{value:"Usage",id:"usage-20",level:4},{value:"Arguments",id:"arguments-18",level:4},{value:"Returns",id:"returns-20",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"class-that-stores-draws-from-an-random-ensemble-of-decision-trees",children:"Class that stores draws from an random ensemble of decision trees"})}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Wrapper around a C++ container of tree ensembles"}),"\n",(0,l.jsx)(n.h2,{id:"public-fields",children:"Public fields"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"json_ptr"}),": External pointer to a C++ nlohmann::json object"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"num_forests"}),": Number of forests in the nlohmann::json object"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"forest_labels"}),": Names of forest objects in the overall nlohmann::json object"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"num_rfx"}),": Number of random effects terms in the nlohman::json object"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rfx_container_labels"}),": Names of rfx container objects in the overall nlohmann::json object"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rfx_mapper_labels"}),": Names of rfx label mapper objects in the overall nlohmann::json object"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rfx_groupid_labels"}),": Names of rfx group id objects in the overall nlohmann::json object"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(n.h3,{id:"public-methods",children:"Public methods"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-new",children:(0,l.jsx)(n.code,{children:"CppJson$new()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-add_forest",children:(0,l.jsx)(n.code,{children:"CppJson$add_forest()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-add_random_effects",children:(0,l.jsx)(n.code,{children:"CppJson$add_random_effects()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-add_scalar",children:(0,l.jsx)(n.code,{children:"CppJson$add_scalar()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-add_boolean",children:(0,l.jsx)(n.code,{children:"CppJson$add_boolean()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-add_string",children:(0,l.jsx)(n.code,{children:"CppJson$add_string()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-add_vector",children:(0,l.jsx)(n.code,{children:"CppJson$add_vector()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-add_string_vector",children:(0,l.jsx)(n.code,{children:"CppJson$add_string_vector()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-add_list",children:(0,l.jsx)(n.code,{children:"CppJson$add_list()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-add_string_list",children:(0,l.jsx)(n.code,{children:"CppJson$add_string_list()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-get_scalar",children:(0,l.jsx)(n.code,{children:"CppJson$get_scalar()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-get_boolean",children:(0,l.jsx)(n.code,{children:"CppJson$get_boolean()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-get_string",children:(0,l.jsx)(n.code,{children:"CppJson$get_string()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-get_vector",children:(0,l.jsx)(n.code,{children:"CppJson$get_vector()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-get_string_vector",children:(0,l.jsx)(n.code,{children:"CppJson$get_string_vector()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-get_numeric_list",children:(0,l.jsx)(n.code,{children:"CppJson$get_numeric_list()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-get_string_list",children:(0,l.jsx)(n.code,{children:"CppJson$get_string_list()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-return_json_string",children:(0,l.jsx)(n.code,{children:"CppJson$return_json_string()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-save_file",children:(0,l.jsx)(n.code,{children:"CppJson$save_file()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-load_from_file",children:(0,l.jsx)(n.code,{children:"CppJson$load_from_file()"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#method-CppJson-load_from_string",children:(0,l.jsx)(n.code,{children:"CppJson$load_from_string()"})})}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"method-new",children:["Method ",(0,l.jsx)(n.code,{children:"new()"})]}),"\n",(0,l.jsx)(n.p,{children:"Create a new CppJson object."}),"\n",(0,l.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$new()\n"})}),"\n",(0,l.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:["A new ",(0,l.jsx)(n.code,{children:"CppJson"})," object."]}),"\n",(0,l.jsxs)(n.h3,{id:"method-add_forest",children:["Method ",(0,l.jsx)(n.code,{children:"add_forest()"})]}),"\n",(0,l.jsxs)(n.p,{children:["Convert a forest container to json and add to the current ",(0,l.jsx)(n.code,{children:"CppJson"})," object"]}),"\n",(0,l.jsx)(n.h4,{id:"usage-1",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$add_forest(forest_samples)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"forest_samples"}),": ",(0,l.jsx)(n.code,{children:"ForestSamples"})," R class"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-add_random_effects",children:["Method ",(0,l.jsx)(n.code,{children:"add_random_effects()"})]}),"\n",(0,l.jsxs)(n.p,{children:["Convert a random effects container to json and add to the current ",(0,l.jsx)(n.code,{children:"CppJson"})," object"]}),"\n",(0,l.jsx)(n.h4,{id:"usage-2",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$add_random_effects(rfx_samples)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-1",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rfx_samples"}),": ",(0,l.jsx)(n.code,{children:"RandomEffectSamples"})," R class"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-add_scalar",children:["Method ",(0,l.jsx)(n.code,{children:"add_scalar()"})]}),"\n",(0,l.jsx)(n.p,{children:'Add a scalar to the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-3",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$add_scalar(field_name, field_value, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-2",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_value"}),": Numeric value of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which to place the value"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-add_boolean",children:["Method ",(0,l.jsx)(n.code,{children:"add_boolean()"})]}),"\n",(0,l.jsx)(n.p,{children:'Add a boolean value to the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-4",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$add_boolean(field_name, field_value, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-3",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_value"}),": Numeric value of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which to place the value"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-add_string",children:["Method ",(0,l.jsx)(n.code,{children:"add_string()"})]}),"\n",(0,l.jsx)(n.p,{children:'Add a string value to the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-5",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$add_string(field_name, field_value, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-4",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_value"}),": Numeric value of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which to place the value"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-add_vector",children:["Method ",(0,l.jsx)(n.code,{children:"add_vector()"})]}),"\n",(0,l.jsx)(n.p,{children:'Add an array to the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-6",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$add_vector(field_name, field_vector, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-5",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_vector"}),": Vector to be stored in json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which to place the value"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-add_string_vector",children:["Method ",(0,l.jsx)(n.code,{children:"add_string_vector()"})]}),"\n",(0,l.jsx)(n.p,{children:'Add an array to the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-7",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$add_string_vector(field_name, field_vector, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-6",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_vector"}),": Character vector to be stored in json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which to place the value"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-add_list",children:["Method ",(0,l.jsx)(n.code,{children:"add_list()"})]}),"\n",(0,l.jsx)(n.p,{children:'Add a list of vectors (as an object map of arrays) to the json object under the name "field_name"'}),"\n",(0,l.jsx)(n.h4,{id:"usage-8",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$add_list(field_name, field_list)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-7",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_list"}),": List to be stored in json"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-add_string_list",children:["Method ",(0,l.jsx)(n.code,{children:"add_string_list()"})]}),"\n",(0,l.jsx)(n.p,{children:'Add a list of vectors (as an object map of arrays) to the json object under the name "field_name"'}),"\n",(0,l.jsx)(n.h4,{id:"usage-9",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$add_string_list(field_name, field_list)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-8",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_list"}),": List to be stored in json"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-get_scalar",children:["Method ",(0,l.jsx)(n.code,{children:"get_scalar()"})]}),"\n",(0,l.jsx)(n.p,{children:'Retrieve a scalar value from the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-10",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$get_scalar(field_name, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-9",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be accessed from json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which the field is stored"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-get_boolean",children:["Method ",(0,l.jsx)(n.code,{children:"get_boolean()"})]}),"\n",(0,l.jsx)(n.p,{children:'Retrieve a boolean value from the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-11",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$get_boolean(field_name, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-10",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be accessed from json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which the field is stored"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-get_string",children:["Method ",(0,l.jsx)(n.code,{children:"get_string()"})]}),"\n",(0,l.jsx)(n.p,{children:'Retrieve a string value from the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-12",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$get_string(field_name, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-11",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be accessed from json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which the field is stored"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-12",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-get_vector",children:["Method ",(0,l.jsx)(n.code,{children:"get_vector()"})]}),"\n",(0,l.jsx)(n.p,{children:'Retrieve a vector from the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-13",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$get_vector(field_name, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-12",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be accessed from json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which the field is stored"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-13",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-get_string_vector",children:["Method ",(0,l.jsx)(n.code,{children:"get_string_vector()"})]}),"\n",(0,l.jsx)(n.p,{children:'Retrieve a character vector from the json object under the name "field_name" (with optional subfolder "subfolder_name")'}),"\n",(0,l.jsx)(n.h4,{id:"usage-14",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$get_string_vector(field_name, subfolder_name = NULL)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-13",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be accessed from json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"subfolder_name"}),": (Optional) Name of the subfolder / hierarchy under which the field is stored"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-14",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-get_numeric_list",children:["Method ",(0,l.jsx)(n.code,{children:"get_numeric_list()"})]}),"\n",(0,l.jsx)(n.p,{children:'Reconstruct a list of numeric vectors from the json object stored under "field_name"'}),"\n",(0,l.jsx)(n.h4,{id:"usage-15",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$get_numeric_list(field_name, key_names)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-14",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"key_names"}),": Vector of names of list elements (each of which is a vector)"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-15",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-get_string_list",children:["Method ",(0,l.jsx)(n.code,{children:"get_string_list()"})]}),"\n",(0,l.jsx)(n.p,{children:'Reconstruct a list of string vectors from the json object stored under "field_name"'}),"\n",(0,l.jsx)(n.h4,{id:"usage-16",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$get_string_list(field_name, key_names)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-15",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field_name"}),": The name of the field to be added to json"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"key_names"}),": Vector of names of list elements (each of which is a vector)"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-16",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-return_json_string",children:["Method ",(0,l.jsx)(n.code,{children:"return_json_string()"})]}),"\n",(0,l.jsx)(n.p,{children:"Convert a JSON object to in-memory string"}),"\n",(0,l.jsx)(n.h4,{id:"usage-17",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$return_json_string()\n"})}),"\n",(0,l.jsx)(n.h4,{id:"returns-17",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"JSON string"}),"\n",(0,l.jsxs)(n.h3,{id:"method-save_file",children:["Method ",(0,l.jsx)(n.code,{children:"save_file()"})]}),"\n",(0,l.jsx)(n.p,{children:"Save a json object to file"}),"\n",(0,l.jsx)(n.h4,{id:"usage-18",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$save_file(filename)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-16",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"filename"}),': String of filepath, must end in ".json"']}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-18",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-load_from_file",children:["Method ",(0,l.jsx)(n.code,{children:"load_from_file()"})]}),"\n",(0,l.jsx)(n.p,{children:"Load a json object from file"}),"\n",(0,l.jsx)(n.h4,{id:"usage-19",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$load_from_file(filename)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-17",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"filename"}),': String of filepath, must end in ".json"']}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-19",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"}),"\n",(0,l.jsxs)(n.h3,{id:"method-load_from_string",children:["Method ",(0,l.jsx)(n.code,{children:"load_from_string()"})]}),"\n",(0,l.jsx)(n.p,{children:"Load a json object from string"}),"\n",(0,l.jsx)(n.h4,{id:"usage-20",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CppJson$load_from_string(json_string)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-18",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"json_string"}),": JSON string dump"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returns-20",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"NULL"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>o});var s=d(6540);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);