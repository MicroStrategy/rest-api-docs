"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7378],{86744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const s={title:"Update a custom group's definition",sidebar_label:"Update a custom group's definition",description:"This workflow sample demonstrates how to update a custom group\u2019s definition through the Modeling service."},r=void 0,a={id:"common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition",title:"Update a custom group's definition",description:"This workflow sample demonstrates how to update a custom group\u2019s definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition.md",sourceDirName:"common-workflows/modeling/manage-custom-group-objects",slug:"/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Update a custom group's definition",sidebar_label:"Update a custom group's definition",description:"This workflow sample demonstrates how to update a custom group\u2019s definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a custom group object with filter elements using custom expressions",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions"},next:{title:"Manage datamart objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/"}},u={},d=[{value:"Update the filter&#39;s definition",id:"update-the-filters-definition",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{since:"2021 Update 2"}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.p,{children:["You can try out this workflow at ",(0,o.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3c57732e-0689-406a-a6ad-c73ece5960c2?ctx=documentation",children:"REST API Playground"}),"."]}),(0,o.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,o.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,o.jsx)(t.p,{children:"This workflow sample demonstrates how to update a custom group\u2019s definition through the Modeling service."}),"\n",(0,o.jsx)(t.p,{children:'You want to update the definition of the "Customers Value Metric Value Banding" custom group and rename it to "Customers Value Points Banding". The custom group is in the MicroStrategy Tutorial project. The object ID of the custom group is C4E98C9B4BACB6D57CCF58BD95672BF4. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.'}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,o.jsxs)(t.p,{children:["Get the project ID from ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"update-the-filters-definition",children:"Update the filter's definition"}),"\n",(0,o.jsxs)(t.p,{children:["Endpoint: ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-putCustomGroup",children:"PUT /api/model/customGroups/{CustomGroupId}"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "bkf2bee310a9olr23h68dhgsvb"\n"X-MSTR-MS-Changeset": "0187393B5F524C8781B7CF86A1A70FB9"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "custom_group",\n    "name": "Customers Value Points Banding",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "All Customers",\n      "displayOption": "element",\n      "qualification": {\n        "text": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n        "tree": {\n          "type": "predicate_banding_points",\n          "predicateText": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n          "predicateTree": {\n            "level": [\n              {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              }\n            ],\n            "metric": {\n              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Running Revenue Contribution to All Customers Abs."\n            },\n            "bandMetricFunction": "value",\n            "bandNames": ["bottom 20%", "20%-40%", "40%-60%", "60%-80%", "Top 20%"],\n            "points": [0, 0.2, 0.4, 0.6, 0.8, 1]\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups/C4E98C9B4BACB6D57CCF58BD95672BF4" -H "accept: application/json" -H "X-MSTR-AuthToken: bkf2bee310a9olr23h68dhgsvb" -H "X-MSTR-MS-Changeset: 0187393B5F524C8781B7CF86A1A70FB9" -H "Content-Type: application/json" -d "{\\"information\\":{\\"name\\":\\"Customers Value Points Banding\\"},\\"options\\":{\\"hierarchyDisplay\\":true,\\"subtotalsDisplay\\":false,\\"elementHeaderAboveChild\\":true},\\"elements\\":[{\\"name\\":\\"All Customers\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"text\\":\\"Set of Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)\\",\\"tree\\":{\\"type\\":\\"predicate_banding_points\\",\\"predicateText\\":\\"Set of Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)\\",\\"predicateTree\\":{\\"level\\":[{\\"objectId\\":\\"8D679D3C11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer\\"}],\\"metric\\":{\\"objectId\\":\\"4C051BCD11D3E877C000B3B2D86C964F\\",\\"subType\\":\\"metric\\",\\"name\\":\\"Running Revenue Contribution to All Customers Abs.\\"},\\"bandMetricFunction\\":\\"value\\",\\"bandNames\\":[\\"bottom 20%\\",\\"20%-40%\\",\\"40%-60%\\",\\"60%-80%\\",\\"Top 20%\\"],\\"points\\":[0,0.2,0.4,0.6,0.8,1]}}}}]}"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Response Body: You can view the custom group's new definition in the body of the response."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2021-06-17T12:18:16.462Z",\n    "dateModified": "2021-06-17T12:18:24.204Z",\n    "versionId": "E24959DD554D98FE656EA898E332103E",\n    "primaryLocale": "en-US",\n    "objectId": "C4E98C9B4BACB6D57CCF58BD95672BF4",\n    "subType": "custom_group",\n    "name": "Customers Value Points Banding",\n    "description": "Custom group defined with metric banding on Running Revenue Contribution to all Customers Abs."\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "id": "040A250F4DFD4052B918A1F2A42D02C9",\n      "name": "All Customers",\n      "displayOption": "element",\n      "qualification": {\n        "text": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n        "tree": {\n          "type": "predicate_banding_points",\n          "predicateId": "040A250F4DFD4052B918A1F2A42D02C9",\n          "predicateText": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n          "predicateTree": {\n            "level": [\n              {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              }\n            ],\n            "metric": {\n              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Running Revenue Contribution to All Customers Abs."\n            },\n            "bandMetricFunction": "value",\n            "bandNames": ["bottom 20%", "20%-40%", "40%-60%", "60%-80%", "Top 20%"],\n            "points": [0, 0.2, 0.4, 0.6, 0.8, 1]\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Response Code: 200 (The custom group's definition is updated successfully in the changeset.)"})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);