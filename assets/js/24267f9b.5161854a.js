"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2995],{98235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(74848),o=n(28453);const s={title:"Retrieve a subtotal's definition",sidebar_label:"Retrieve a subtotal's definition",description:"This topic covers several workflows for retrieving a metric's definition."},r=void 0,a={id:"common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition",title:"Retrieve a subtotal's definition",description:"This topic covers several workflows for retrieving a metric's definition.",source:"@site/docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition.md",sourceDirName:"common-workflows/modeling/manage-subtotal-objects",slug:"/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Retrieve a subtotal's definition",sidebar_label:"Retrieve a subtotal's definition",description:"This topic covers several workflows for retrieving a metric's definition."},sidebar:"tutorialSidebar",previous:{title:"Manage subtotal objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/"},next:{title:"Retrieve a subtotal's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset"}},d={},l=[{value:"Retrieve a subtotal&#39;s definition",id:"retrieve-a-subtotals-definition",level:2},{value:"Retrieve a subtotal&#39;s definition in tree format",id:"retrieve-a-subtotals-definition-in-tree-format",level:2},{value:"Retrieve a subtotal&#39;s definition in tokens format",id:"retrieve-a-subtotals-definition-in-tokens-format",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{since:"2021 Update 5"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["You can try out this workflow at ",(0,i.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d1504a52-db9a-4d71-99d2-0ffbd82ee91a?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"This topic covers several workflows for retrieving a metric's definition:"}),"\n",(0,i.jsxs)(t.p,{children:["You want to get the definition of an object with the ID of ",(0,i.jsx)(t.code,{children:"514C2064DF754990AF60432A1C1E4A77"})," in the MicroStrategy Tutorial project. The project ID is ",(0,i.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(t.p,{children:["Get the project ID from ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsxs)(t.p,{children:["Retrieve the definition of the specified metric within a changeset using ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subtotals/ms-getSubtotalDetails",children:"GET /api/model/Subtotals/{SubtotalId}"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Location"}),(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"header"}),(0,i.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,i.jsx)(t.td,{children:"The authorization token"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"header"}),(0,i.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,i.jsx)(t.td,{children:"The ID of the project"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"params"}),(0,i.jsx)(t.td,{children:"showExpressionAs"}),(0,i.jsxs)(t.td,{children:["Omitted, tree, or tokens:",(0,i.jsx)("br",{}),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,i.jsx)("br",{}),"- If ",(0,i.jsx)(t.code,{children:"tree"}),', the expression is returned in "text" and "tree" formats.',(0,i.jsx)("br",{}),"- If ",(0,i.jsx)(t.code,{children:"tokens"}),', the expression is returned in "text" and "tokens" formats.']})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(t.h2,{id:"retrieve-a-subtotals-definition",children:"Retrieve a subtotal's definition"}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:'You can view the subtotal\'s definition in the body of the response. The following is an example of an expression in "text" formats.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-03-08T03:36:01.097Z",\n    "dateModified": "2022-03-08T03:36:01.097Z",\n    "versionId": "C8F384E54BD9E1A415260B9F4A63B643",\n    "primaryLocale": "en-US",\n    "objectId": "514C2064DF754990AF60432A1C1E4A77",\n    "subType": "metric_subtotal",\n    "name": "Custom_Max"\n  },\n  "expression": { "text": "Revenue" },\n  "dimty": {\n    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Response Code: 200 (Subtotal's definition is returned successfully.)"}),"\n",(0,i.jsx)(t.h2,{id:"retrieve-a-subtotals-definition-in-tree-format",children:"Retrieve a subtotal's definition in tree format"}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:'You can view the subtotal\'s definition in the body of the response, including the information and expression of the specified subtotal. The following is an example of the expression in "text" and "tree" formats.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-03-08T03:36:01.097Z",\n    "dateModified": "2022-03-08T03:36:01.097Z",\n    "versionId": "C8F384E54BD9E1A415260B9F4A63B643",\n    "primaryLocale": "en-US",\n    "objectId": "514C2064DF754990AF60432A1C1E4A77",\n    "subType": "metric_subtotal",\n    "name": "Custom_Max"\n  },\n  "expression": {\n    "text": "Revenue",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "1116B53103FC4A72BBACBAED388243D6",\n        "subType": "agg_metric",\n        "name": "Revenue"\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Response Code: 200 (Subtotal's definition is returned successfully.)"}),"\n",(0,i.jsx)(t.h2,{id:"retrieve-a-subtotals-definition-in-tokens-format",children:"Retrieve a subtotal's definition in tokens format"}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77?showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:'The following is an example of the expression in "text" and "tokens" formats.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-03-08T03:36:01.097Z",\n    "dateModified": "2022-03-08T03:36:01.097Z",\n    "versionId": "C8F384E54BD9E1A415260B9F4A63B643",\n    "primaryLocale": "en-US",\n    "objectId": "514C2064DF754990AF60432A1C1E4A77",\n    "subType": "metric_subtotal",\n    "name": "Custom_Max"\n  },\n  "expression": {\n    "text": "Revenue",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Revenue",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2022-03-07T09:12:09.283Z",\n          "dateModified": "2022-03-07T09:12:09.283Z",\n          "versionId": "D62E22D14A34757568AEF480BF7D96AE",\n          "primaryLocale": "en-US",\n          "objectId": "1116B53103FC4A72BBACBAED388243D6",\n          "subType": "agg_metric",\n          "name": "Revenue"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "{",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "@",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "}",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  },\n  "dimty": {\n    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Response Code: 200 (Subtotal's definition is returned successfully.)"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);