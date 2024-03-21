"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2039],{63220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(74848),i=t(28453);const r={title:"Retrieve a custom group's definition within a changeset",sidebar_label:"Retrieve a custom group's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a custom group\u2019s definition within a changeset."},a=void 0,s={id:"common-workflows/modeling/manage-custom-group-objects/retrieve-a-custom-groups-definition-within-a-changeset",title:"Retrieve a custom group's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a custom group\u2019s definition within a changeset.",source:"@site/docs/common-workflows/modeling/manage-custom-group-objects/retrieve-a-custom-groups-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-custom-group-objects",slug:"/common-workflows/modeling/manage-custom-group-objects/retrieve-a-custom-groups-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/retrieve-a-custom-groups-definition-within-a-changeset",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-custom-group-objects/retrieve-a-custom-groups-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve a custom group's definition within a changeset",sidebar_label:"Retrieve a custom group's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a custom group\u2019s definition within a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a custom group's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/retrieve-a-custom-groups-definition"},next:{title:"Create a custom group object",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object"}},c={},d=[{value:"Get a custom group&#39;s definition within a changeset",id:"get-a-custom-groups-definition-within-a-changeset",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{since:"2021 Update 2"}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["You can try out this workflow at ",(0,o.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-1cd8c3f9-4d8f-496f-b183-3f615c8812e2?ctx=documentation",children:"REST API Playground"}),"."]}),(0,o.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,o.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:"This workflow sample demonstrates how to retrieve a custom group\u2019s definition within a changeset."}),"\n",(0,o.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),". If you plan to use the response of ",(0,o.jsx)(n.code,{children:"GET /api/model/customGroups/{customGroupsId}"})," to create a new custom group or update the custom group's definition, it is recommended to associate all requests to one changeset."]}),"\n",(0,o.jsxs)(n.p,{children:["You want to get the definition of the ",(0,o.jsx)(n.code,{children:'"Age Group"'})," custom group object. The object ID of the custom group is ",(0,o.jsx)(n.code,{children:"085CBF314703A71E926EA187C2002969"})," in the MicroStrategy Tutorial project. The project ID is ",(0,o.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,o.jsxs)(n.p,{children:["Get the project ID from ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"get-a-custom-groups-definition-within-a-changeset",children:"Get a custom group's definition within a changeset"}),"\n",(0,o.jsxs)(n.p,{children:["Endpoint: ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-getCustomGroupDetails",children:"GET /api/model/customGroups/{customGroupsId}"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,o.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups/085CBF314703A71E926EA187C2002969" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,o.jsx)(n.p,{children:"You can view the custom group's definition in the body of the response."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2007-08-20T14:00:08.000Z",\n    "dateModified": "2021-06-17T09:32:09.733Z",\n    "versionId": "ACAD884F6749F38A71B10CAF7E040B16",\n    "primaryLocale": "en-US",\n    "objectId": "085CBF314703A71E926EA187C2002969",\n    "subType": "custom_group",\n    "name": "Age Groups",\n    "description": "Custom group defined with attribute qualification on Customer Age."\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "id": "C53C93AC7D4E485B85B926AB57509A6B",\n      "name": "< 25",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) < 25)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "C53C93AC7D4E485B85B926AB57509A6B",\n          "predicateText": "({Customer Age} (ID) < 25)",\n          "predicateTree": {\n            "function": "less",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "25.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "0658E08519034E71892D07D7FAFB4717",\n      "name": "25-35",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) Between 25 and 35)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "0658E08519034E71892D07D7FAFB4717",\n          "predicateText": "({Customer Age} (ID) Between 25 and 35)",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "25.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "35.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "1AB9E1CE1127458D80C453F275F6DAA7",\n      "name": "36-50",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) Between 36 and 50)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "1AB9E1CE1127458D80C453F275F6DAA7",\n          "predicateText": "({Customer Age} (ID) Between 36 and 50)",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "36.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "50.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "2B2F2875BE784572814E4900A1741C5C",\n      "name": "51-60",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) Between 51 and 60)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "2B2F2875BE784572814E4900A1741C5C",\n          "predicateText": "({Customer Age} (ID) Between 51 and 60)",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "51.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "60.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "955BBAC569C741F2913143BE6D03EA4A",\n      "name": "> 60",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) > 60)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "955BBAC569C741F2913143BE6D03EA4A",\n          "predicateText": "({Customer Age} (ID) > 60)",\n          "predicateTree": {\n            "function": "greater",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "60.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Response Code: 200 (The custom group's definition is returned successfully.)"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);