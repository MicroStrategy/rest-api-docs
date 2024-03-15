"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8527],{36513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(74848),a=t(28453);const s={title:"Update a base formula's definition within a changeset",sidebar_label:"Update a base formula's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},o=void 0,r={id:"common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",title:"Update a base formula's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-base-formula-objects",slug:"/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Update a base formula's definition within a changeset",sidebar_label:"Update a base formula's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a base formula's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset"},next:{title:"Manage calendar objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/"}},l={},d=[{value:"Update the base formula&#39;s definition using PUT /api/model/formulas/{formulaId}",id:"update-the-base-formulas-definition-using-put-apimodelformulasformulaid",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{since:"2021 Update 5"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can try out this workflow at ",(0,i.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bfe3c7f0-372a-44ef-a687-0f694deda59b?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,i.jsxs)(n.p,{children:["You want to update the definition of the ",(0,i.jsx)(n.code,{children:'"base_sum(Cost)"'})," base formula with object ID ",(0,i.jsx)(n.code,{children:"1116B53103FC4A72BBACBAED388243D6"})," to achieve the below changes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Modify the expression to ",(0,i.jsx)(n.code,{children:"\u201csum(Profit)-sum(Cost)\u201c"})]}),"\n",(0,i.jsxs)(n.li,{children:["Move it to another objects folder with the ID of ",(0,i.jsx)(n.code,{children:"8AF48B3D4685C1717B3BDA9804CD1036"})]}),"\n",(0,i.jsxs)(n.li,{children:["Rename the base formula to ",(0,i.jsx)(n.code,{children:'"Revenue"'})]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(n.p,{children:["Get the project ID from ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,i.jsxs)(n.h2,{id:"update-the-base-formulas-definition-using-put-apimodelformulasformulaid",children:["Update the base formula's definition using ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Base%20Formulas/ms-putFormula",children:"PUT /api/model/formulas/{formulaId}"})]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n'})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Location"}),(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"header"}),(0,i.jsx)(n.td,{children:"X-MSTR-authToken"}),(0,i.jsx)(n.td,{children:"The authorization token"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"header"}),(0,i.jsx)(n.td,{children:"X-MSTR-ProjectID"}),(0,i.jsx)(n.td,{children:"The ID of the project"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"header"}),(0,i.jsx)(n.td,{children:"X-MSTR-MS-Changeset"}),(0,i.jsx)(n.td,{children:"The ID of the changeset"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"params"}),(0,i.jsx)(n.td,{children:"showExpressionAs"}),(0,i.jsxs)(n.td,{children:["Omitted, tree, or tokens:",(0,i.jsx)("br",{}),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,i.jsx)("br",{}),"- If ",(0,i.jsx)(n.code,{children:"tree"}),', the expression is returned in "text" and "tree" formats.',(0,i.jsx)("br",{}),"- If ",(0,i.jsx)(n.code,{children:"tokens"}),', the expression is returned in "text" and "tokens" formats.']})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8AF48B3D4685C1717B3BDA9804CD1036",\n    "subType": "agg_metric",\n    "name": "Revenue"\n  },\n  "expression": {\n    "text": "Sum(Profit) - Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Profit",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T19:50:09.000Z",\n          "dateModified": "2022-02-17T03:47:14.966Z",\n          "versionId": "1F04706E441FF9C3C69DF5AC3C118FC3",\n          "primaryLocale": "en-US",\n          "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Profit"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2021-02-26T03:18:34.045Z",\n          "versionId": "21E9227B421DBAD67EA60A929E595E67",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2022-02-17T05:04:23.255Z",\n          "versionId": "DE098494437C76DA4BBDA688812CDFB2",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/1116B53103FC4A72BBACBAED388243D6" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: EB3A4F66E6A8413E9C36633533D0BA31" -H "Content-Type: application/json" -d "{\\"information\\":{\\"versionId\\":\\"F8748568ACD64683A888E928B0E3A3BC\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"1116B53103FC4A72BBACBAED388243D6\\",\\"subType\\":\\"agg_metric\\",\\"name\\":\\"Revenue\\",\\"destinationFolderId\\":\\"8AF48B3D4685C1717B3BDA9804CD1036\\"},\\"expression\\":{\\"text\\":\\"Sum(Profit) - Sum(Cost)\\",\\"tokens\\":[{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Sum\\",\\"type\\":\\"function\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:35.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:39.843Z\\",\\"versionId\\":\\"93B1FFD040F7CBECF3C3378D5391AA35\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C31BDD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"Sum\\",\\"description\\":\\"Returns the sum of all values in the ValueList. This is a group-value function.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"<\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"UseLookupForAttributes\\",\\"type\\":\\"identifier\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"=\\",\\"type\\":\\"function\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"False\\",\\"type\\":\\"boolean\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\">\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"(\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Profit\\",\\"type\\":\\"object_reference\\",\\"target\\":{\\"dateCreated\\":\\"2001-09-18T19:50:09.000Z\\",\\"dateModified\\":\\"2022-02-17T03:47:14.966Z\\",\\"versionId\\":\\"1F04706E441FF9C3C69DF5AC3C118FC3\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"F30CB66411D5AC5FC000D98A4CC5F24F\\",\\"subType\\":\\"fact\\",\\"name\\":\\"Profit\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\")\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"-\\",\\"type\\":\\"character\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:41.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:34.045Z\\",\\"versionId\\":\\"21E9227B421DBAD67EA60A929E595E67\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C311DD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"-\\",\\"description\\":\\"Returns the difference between two values.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Sum\\",\\"type\\":\\"function\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:35.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:39.843Z\\",\\"versionId\\":\\"93B1FFD040F7CBECF3C3378D5391AA35\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C31BDD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"Sum\\",\\"description\\":\\"Returns the sum of all values in the ValueList. This is a group-value function.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"<\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"UseLookupForAttributes\\",\\"type\\":\\"identifier\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"=\\",\\"type\\":\\"function\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"False\\",\\"type\\":\\"boolean\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\">\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"(\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Cost\\",\\"type\\":\\"object_reference\\",\\"target\\":{\\"dateCreated\\":\\"2001-09-18T20:21:56.000Z\\",\\"dateModified\\":\\"2022-02-17T05:04:23.255Z\\",\\"versionId\\":\\"DE098494437C76DA4BBDA688812CDFB2\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"7A4ABE9111D5AC6FC000D98A4CC5F24F\\",\\"subType\\":\\"fact\\",\\"name\\":\\"Cost\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\")\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"\\",\\"type\\":\\"end_of_text\\"}]}}"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.p,{children:"You can view the updated base formula's definition in the body of the response."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "versionId": "F8748568ACD64683A888E928B0E3A3BC",\n    "primaryLocale": "en-US",\n    "objectId": "1116B53103FC4A72BBACBAED388243D6",\n    "subType": "agg_metric",\n    "name": "Revenue",\n    "destinationFolderId": "8AF48B3D4685C1717B3BDA9804CD1036"\n  },\n  "expression": {\n    "text": "Sum(Profit) - Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Profit",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T19:50:09.000Z",\n          "dateModified": "2022-02-17T03:47:14.966Z",\n          "versionId": "1F04706E441FF9C3C69DF5AC3C118FC3",\n          "primaryLocale": "en-US",\n          "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Profit"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2021-02-26T03:18:34.045Z",\n          "versionId": "21E9227B421DBAD67EA60A929E595E67",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2022-02-17T05:04:23.255Z",\n          "versionId": "DE098494437C76DA4BBDA688812CDFB2",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 200 (The Base Formula's definition is updated successfully in the changeset.)"}),"\n",(0,i.jsx)(n.p,{children:"The model for the definition of a base formula can be represented with the following fields:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Fields"}),(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"}),(0,i.jsx)(n.th,{children:"Required?"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"information"}),(0,i.jsx)(n.td,{children:"objectID"}),(0,i.jsx)(n.td,{children:"ID of the base formula you want to edit."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"destinationFolderId"}),(0,i.jsx)(n.td,{children:"Folder ID where you want to move the base formula."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Name of the base formula you want to edit."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expression"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"The text you want to modify."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"tree"}),(0,i.jsx)(n.td,{children:"The tree structure you want to modify."}),(0,i.jsx)(n.td,{children:"List<ObjectInfoReference>"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"tokens"}),(0,i.jsx)(n.td,{children:"The list of parsed tokens you want to modify."}),(0,i.jsx)(n.td,{children:"List<ObjectInfoReference>"}),(0,i.jsx)(n.td,{children:"No"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);