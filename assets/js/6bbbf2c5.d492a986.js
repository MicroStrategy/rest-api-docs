"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7823],{85583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(74848),r=n(28453);const s={title:"Hierarchy qualification prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."},o=void 0,a={id:"common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",title:"Hierarchy qualification prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters.",source:"@site/docs/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts.md",sourceDirName:"common-workflows/analytics/use-prompts-objects/prompt-types",slug:"/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Hierarchy qualification prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."},sidebar:"tutorialSidebar",previous:{title:"Metric expression prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/metric-expression-prompts"},next:{title:"Level prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/level-prompts"}},c={},l=[{value:"Get information about a hierarchy qualification prompt",id:"get-information-about-a-hierarchy-qualification-prompt",level:2},{value:"Get the hierarchy qualification prompt&#39;s available objects",id:"get-the-hierarchy-qualification-prompts-available-objects",level:2},{value:"Get the attributes of a hierarchy",id:"get-the-attributes-of-a-hierarchy",level:2},{value:"Answer a hierarchy qualification prompt",id:"answer-a-hierarchy-qualification-prompt",level:2},{value:"Provide specific prompt answers",id:"provide-specific-prompt-answers",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{since:"2021 Update 1"}),"\n",(0,i.jsx)(t.p,{children:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."}),"\n",(0,i.jsx)(t.p,{children:"Use REST APIs to perform the following actions on hierarchy qualification prompts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#get-information-about-a-hierarchy-qualification-prompt",children:"Get information about a hierarchy qualification prompt"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#get-the-hierarchy-qualification-prompts-available-objects",children:"Get the hierarchy qualification prompt's available objects"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#get-the-attributes-of-a-hierarchy",children:"Get the attributes of a hierarchy"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#answer-a-hierarchy-qualification-prompt",children:"Answer a hierarchy qualification prompt"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#provide-specific-prompt-answers",children:"Provide specific prompt answers"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"get-information-about-a-hierarchy-qualification-prompt",children:"Get information about a hierarchy qualification prompt"}),"\n",(0,i.jsx)(t.p,{children:"Use the following REST API endpoints to get information about hierarchy qualification prompts applied to dashboard, document, and report objects in the metadata, as well as instances of those objects:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["GET ",(0,i.jsx)(t.code,{children:"/api/documents/{id}/prompts"})]}),"\n",(0,i.jsxs)(t.li,{children:["GET ",(0,i.jsx)(t.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts"})]}),"\n",(0,i.jsxs)(t.li,{children:["GET ",(0,i.jsx)(t.code,{children:"/api/reports/{reportId}/prompts"})]}),"\n",(0,i.jsxs)(t.li,{children:["GET ",(0,i.jsx)(t.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Provide the ID of the document, dashboard, or report in the path of the request. In addition, you need to supply the instance ID if you are getting information about a prompt applied to an instance of a document, dashboard, or report. The response contains the prompt information. All available parameters for the prompt definition are shown below."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Data Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"id"}),(0,i.jsx)(t.td,{children:"The ID of the prompt"}),(0,i.jsx)(t.td,{children:"string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"key"}),(0,i.jsx)(t.td,{children:"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dashboard, document, or report."}),(0,i.jsx)(t.td,{children:"string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of the prompt"}),(0,i.jsx)(t.td,{children:"string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"title"}),(0,i.jsx)(t.td,{children:"The title of the prompt"}),(0,i.jsx)(t.td,{children:"string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"type"}),(0,i.jsx)(t.td,{children:"The type of prompt; Enum: [ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"}),(0,i.jsx)(t.td,{children:"string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"required"}),(0,i.jsx)(t.td,{children:"An indicator that specifies if a prompt is required"}),(0,i.jsx)(t.td,{children:"boolean"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"closed"}),(0,i.jsx)(t.td,{children:"An indicator that specifies if a prompt is closed"}),(0,i.jsx)(t.td,{children:"boolean"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The sample code below contains a hierarchy qualification prompt definition."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n  "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",\n  "name": "test prompt",\n  "title": "test prompt",\n  "type": "EXPRESSION",\n  "closed": false,\n  "required": true,\n  "max": 2,\n  "min": 1,\n  "displayForms": "all", // all|browseForms|reportDisplayForms|customForms\n  "maxElementsPerSelection": -1,\n  "defaultAnswer": {\n    "content": "Category ID In 1, 2, 3, 4, 5",\n    "xml": "<exp></exp>",\n    "expression": {\n      "operator": "In",\n      "operands": [\n        {\n          "type": "form",\n          "attribute": {\n            "id": "8D679D3711D3E4981000E787EC6DE8A4",\n            "name": "Category"\n          },\n          "form": {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID"\n          }\n        },\n        {\n          "type": "constants",\n          "dataType": "Real",\n          "values": ["1", "2", "3", "4", "5"]\n        }\n      ]\n    }\n  },\n  "answers": {\n    "content": "Category In List Books, Movies",\n    "xml": "<exp></exp>",\n    "expression": {\n      "operator": "In",\n      "operands": [\n        {\n          "type": "attribute",\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category"\n        },\n        {\n          "type": "elements",\n          "elements": [\n            {\n              "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",\n              "name": "Books"\n            },\n            {\n              "id": "h2;8D679D3711D3E4981000E787EC6DE8A4",\n              "name": "Electronics"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Besides the commonly-used fields, the hierarchy qualification prompt also contains the following field:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"maxElementsPerSelection"})," The maximum number of elements that can be supplied to answer the prompt per selection. The default setting of ",(0,i.jsx)(t.strong,{children:"-1"})," means there is no limit to the maximum number of elements."]}),"\n",(0,i.jsx)(t.h2,{id:"get-the-hierarchy-qualification-prompts-available-objects",children:"Get the hierarchy qualification prompt's available objects"}),"\n",(0,i.jsx)(t.p,{children:"Use the following REST API endpoints to get a hierarchy qualification prompt's available objects:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["GET ",(0,i.jsx)(t.code,{children:"/api/reports/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects"})]}),"\n",(0,i.jsxs)(t.li,{children:["GET ",(0,i.jsx)(t.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In a hierarchy qualification prompt, the available objects returned by this endpoint are hierarchies, which contain an ID and name. The hierarchy prompt provides the user with a list of available objects. These objects can come from three different sources:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Predefined list of objects"}),"\n",(0,i.jsx)(t.li,{children:"Result of a search object"}),"\n",(0,i.jsx)(t.li,{children:"List of all attributes and hierarchies"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The sample code below contains a hierarchy qualification prompt's available objects."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "objects": [\n    {\n      "id": "C11D3E4981000E8D679D3787EC6DE8A4",\n      "name": "Time",\n      "type": "HIERARCHY"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"get-the-attributes-of-a-hierarchy",children:"Get the attributes of a hierarchy"}),"\n",(0,i.jsx)(t.p,{children:"After getting a hierarchy qualification prompt's available objects, the user may need to get the attributes of some hierarchies to construct their own view filter expression. Use the following REST API endpoints to retrieve the attributes of a hierarchy."}),"\n",(0,i.jsxs)(t.p,{children:["GET ",(0,i.jsx)(t.code,{children:"/api/hierarchies/{hierarchyId}/attributes"})]}),"\n",(0,i.jsx)(t.p,{children:"The sample code below contains the definition of the attributes of a hierarchy."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": [\n    {\n      "name": "Month",\n      "id": "8D679D4411D3E4981000E787EC6DE8A4",\n      "type": "attribute",\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID"\n        },\n        {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        },\n        {\n          "id": "4B97DFC611D5AEDAC000E38A4CC5F24F",\n          "name": "DATE"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"answer-a-hierarchy-qualification-prompt",children:"Answer a hierarchy qualification prompt"}),"\n",(0,i.jsx)(t.p,{children:"Use the following REST API endpoints to answer a hierarchy qualification prompt applied to a dashboard, document, or report:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["PUT ",(0,i.jsx)(t.code,{children:"/api/reports/{id}/instances/{instanceId}/prompts/answers"})]}),"\n",(0,i.jsxs)(t.li,{children:["PUT ",(0,i.jsx)(t.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"provide-specific-prompt-answers",children:"Provide specific prompt answers"}),"\n",(0,i.jsxs)(t.p,{children:["You provide answers to a hierarchy qualification prompt in the body parameter of the request. Identify the prompt by providing the prompt ID, name or key, and specify the prompt type as EXPRESSION. Then, specify the expression used to answer the prompt. The format of the expression is the same as the ",(0,i.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/",children:"JSON Data API's view filter"}),". This expression can be used with attribute elements."]}),"\n",(0,i.jsx)(t.p,{children:"All available parameters for the prompt answer are shown below."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Data Type"}),(0,i.jsx)(t.th,{children:"Required?"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"key"}),(0,i.jsx)(t.td,{children:"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dashboard, document, or report."}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"id"}),(0,i.jsx)(t.td,{children:"The object ID of the prompt"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of the prompt"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"type"}),(0,i.jsx)(t.td,{children:"The type of prompt; Enum: [ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"useDefault"}),(0,i.jsx)(t.td,{children:"An indicator that specifies if the default answer should be used. If this is set to true, the values are ignored."}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The sample code below answers an attribute qualification prompt."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "prompts": [\n    {\n      "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n      "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",\n      "name": "test prompt",\n      "type": "EXPRESSION",\n      "answers": {\n        "content": "Category In List 1, 2, 3, 4, 5",\n        "expression": {\n          "operator": "In",\n          "operands": [\n            {\n              "type": "form",\n              "attribute": {\n                "id": "8D679D3711D3E4981000E787EC6DE8A4",\n                "name": "Category"\n              },\n              "form": {\n                "id": "45C11FA478E745FEA08D781CEA190FE5",\n                "name": "ID"\n              }\n            },\n            {\n              "type": "constants",\n              "dataType": "Real",\n              "values": ["1", "2", "3", "4", "5"]\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Some things to keep in mind:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You only need to provide one ",(0,i.jsx)(t.strong,{children:"id"}),", ",(0,i.jsx)(t.strong,{children:"key"}),", or ",(0,i.jsx)(t.strong,{children:"name"}),". ",(0,i.jsx)(t.strong,{children:"Key"})," is preferred."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.strong,{children:"useDefault"})," field is optional, since the default value is false."]}),"\n",(0,i.jsxs)(t.li,{children:["Content in the answer is optional. Its values do not affect the resulting answer. The default value is ",(0,i.jsx)(t.strong,{children:'""'}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);