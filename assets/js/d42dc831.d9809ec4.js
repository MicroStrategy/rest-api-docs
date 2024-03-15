"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6560],{44518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(74848),s=n(28453);const o={title:"Update a subtotal within a changeset",sidebar_label:"Update a subtotal within a changeset",description:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service."},a=void 0,r={id:"common-workflows/modeling/manage-subtotal-objects/update-a-subtotal-within-a-changeset",title:"Update a subtotal within a changeset",description:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-subtotal-objects/update-a-subtotal-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-subtotal-objects",slug:"/common-workflows/modeling/manage-subtotal-objects/update-a-subtotal-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/update-a-subtotal-within-a-changeset",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-subtotal-objects/update-a-subtotal-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Update a subtotal within a changeset",sidebar_label:"Update a subtotal within a changeset",description:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a subtotal within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/create-a-subtotal-within-a-changeset"},next:{title:"Manage table objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/"}},d={},l=[{value:"Update the metric&#39;s definition using PUT /api/model/subtotals/{subtotalId}",id:"update-the-metrics-definition-using-put-apimodelsubtotalssubtotalid",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{since:"2021 Update 5"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["You can try out this workflow at ",(0,i.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0054ca44-40a6-4387-b766-35fc5f00e428?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,i.jsxs)(t.p,{children:["You want to update the definition of the max subtotal with object ID ",(0,i.jsx)(t.code,{children:"77C1228E42FCD8EF5CA7779988763A35"})," to achieve the below changes:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Add a calculated level of \u201cCustomer Region\u201c"}),"\n",(0,i.jsxs)(t.li,{children:["Move it to another objects folder with the ID of ",(0,i.jsx)(t.code,{children:"8A1831FF494F528D02A4A8BF5FB73459"})]}),"\n",(0,i.jsxs)(t.li,{children:["Rename the subtotal to ",(0,i.jsx)(t.code,{children:'"Average at Customer Region"'})]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(t.p,{children:["Get the project ID from ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,i.jsxs)(t.h2,{id:"update-the-metrics-definition-using-put-apimodelsubtotalssubtotalid",children:["Update the metric's definition using ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subtotals/ms-putSubtotal",children:"PUT /api/model/subtotals/{subtotalId}"})]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "metric_subtotal",\n    "name": "Average at Customer Region"\n  },\n  "expression": {\n    "text": "Revenue",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Revenue",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:42:52.000Z",\n          "dateModified": "2007-03-04T16:43:12.000Z",\n          "versionId": "CBFF0429433BF148C21DEF8E9BCB851F",\n          "primaryLocale": "en-US",\n          "objectId": "4C05176211D3E877C000B3B2D86C964F",\n          "subType": "agg_metric",\n          "name": "Revenue"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "{",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "@",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ",",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "[Customer Region]",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:07.000Z",\n          "dateModified": "2021-02-26T03:18:48.000Z",\n          "versionId": "989B300749981E32FFC00886259028BC",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "+",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "}",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  },\n  "dimty": {\n    "dimtyUnits": [\n      { "dimtyUnitType": "report_level", "relativePosition": 0 },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/77C1228E42FCD8EF5CA7779988763A35?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mtl3j38atj8tmrfip3vofrjes6" -H "X-MSTR-MS-Changeset: 038AB22B5A8D4E5A9749D74B77712C50 " -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"8A1831FF494F528D02A4A8BF5FB73459\\",\\"subType\\":\\"metric_subtotal\\",\\"name\\":\\"Average at Customer Region\\"},\\"expression\\":{\\"text\\":\\"Avg(Revenue)\\",\\"tree\\":{\\"type\\":\\"object_reference\\",\\"target\\":{\\"objectId\\":\\"EE5BF65E4E565AE84587468203AF8237\\",\\"subType\\":\\"agg_metric\\",\\"isEmbedded\\":true},\\"isIndependent\\":0}},\\"dimty\\":{\\"dimtyUnits\\":[{\\"dimtyUnitType\\":\\"report_level\\",\\"relativePosition\\":0},{\\"dimtyUnitType\\":\\"attribute\\",\\"target\\":{\\"objectId\\":\\"8D679D3B11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Region\\"}}]}}"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:"You can view the updated subtotal's definition in the body of the response."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-03-10T09:00:50.991Z",\n    "dateModified": "2022-03-10T09:01:55.226Z",\n    "versionId": "2BCB1BC246EDA06088DC7E92C4794DF4",\n    "primaryLocale": "en-US",\n    "objectId": "77C1228E42FCD8EF5CA7779988763A35",\n    "subType": "metric_subtotal",\n    "name": "Average at Customer Region"\n  },\n  "expression": {\n    "text": "Avg(Revenue)",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "EE5BF65E4E565AE84587468203AF8237",\n        "subType": "agg_metric",\n        "isEmbedded": true\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [\n      { "dimtyUnitType": "report_level", "relativePosition": 0 },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Response Code: 200 (The subtotal's definition is updated successfully in the changeset.)"}),"\n",(0,i.jsx)(t.p,{children:"The model for the definition of a subtotal can be updated with the following fields:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Fields"}),(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Data Type"}),(0,i.jsx)(t.th,{children:"Required?"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"information"}),(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"Name of the subtotal. This is the most user-friendly value that can be used to identify the subtotal."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"subtype"}),(0,i.jsxs)(t.td,{children:["For the subtotal, ",(0,i.jsx)(t.code,{children:"subType"})," is ",(0,i.jsx)(t.code,{children:"metric_subtotal"}),"."]}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"destinationFolderId"}),(0,i.jsx)(t.td,{children:"Folder ID where the new metric is saved."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expression"}),(0,i.jsx)(t.td,{children:"text"}),(0,i.jsx)(t.td,{children:"A human readable, but non-parsable text, describing the expression."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"tree"}),(0,i.jsx)(t.td,{children:"A tree data structure fully defining the expression."}),(0,i.jsx)(t.td,{children:"List<ObjectInfoReference>"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"tokens"}),(0,i.jsx)(t.td,{children:"A list of parsed tokens."}),(0,i.jsx)(t.td,{children:"List<ObjectInfoReference>"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dimty"}),(0,i.jsx)(t.td,{children:"dimtyUnits"}),(0,i.jsx)(t.td,{children:"Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated."}),(0,i.jsx)(t.td,{children:"List<ObjectInfoReference>"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"allowAddingUnit"}),(0,i.jsx)(t.td,{children:"This setting allows other users to add extra units to this definition."}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"No"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);