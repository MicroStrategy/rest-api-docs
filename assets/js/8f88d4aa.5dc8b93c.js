"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[599],{65937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(74848),s=t(28453);const a={title:"Update a fact object",sidebar_label:"Update a fact object",description:"The workflow to update a fact object."},i=void 0,r={id:"common-workflows/modeling/manage-fact-objects/update-a-fact-object",title:"Update a fact object",description:"The workflow to update a fact object.",source:"@site/docs/common-workflows/modeling/manage-fact-objects/update-a-fact-object.md",sourceDirName:"common-workflows/modeling/manage-fact-objects",slug:"/common-workflows/modeling/manage-fact-objects/update-a-fact-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/update-a-fact-object",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-fact-objects/update-a-fact-object.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Update a fact object",sidebar_label:"Update a fact object",description:"The workflow to update a fact object."},sidebar:"tutorialSidebar",previous:{title:"Create a fact object",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/create-a-fact-object"},next:{title:"Manage filter objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/"}},c={},d=[{value:"Update the fact&#39;s definition",id:"update-the-facts-definition",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{since:"2021 Update 1"}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["You can try out this workflow at ",(0,o.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-11d116e7-cf31-451a-848e-0d2be6fa3041?ctx=documentation",children:"REST API Playground"}),"."]}),(0,o.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,o.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Create a changeset."}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#update-the-facts-definition",children:"Update a fact's definition."})}),"\n",(0,o.jsx)(n.li,{children:"Commit the changeset."}),"\n",(0,o.jsx)(n.li,{children:"Delete the changeset."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:['You want to update the "Profit" fact object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ',(0,o.jsx)(n.code,{children:"98FE182C2A10427EACE0CD30B6768258"}),". The project ID is ",(0,o.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,o.jsxs)(n.p,{children:["Get the project ID from ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"update-the-facts-definition",children:"Update the fact's definition"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts/ms-putFact",children:"PUT /api/model/facts/{factId}"})]}),"\n",(0,o.jsxs)(n.p,{children:['You want to update the definition of the "Profit" fact so that it contains one expression ',(0,o.jsx)(n.code,{children:"ORDER_AMT - ORDER_COST"})," used in table ",(0,o.jsx)(n.code,{children:"ORDER_FACT"}),"."]}),"\n",(0,o.jsx)(n.p,{children:'To update a fact, in the request body, "expressions" contains a list of fact expressions. Each fact contains "expression" and "tables".'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'"expression": Must be in either "tree" or "tokens" format.'}),"\n",(0,o.jsx)(n.p,{children:'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'"tables": A list of tables that the "expression" applies to. Warehouse partition base tables and metadata partition mapping tables are not allowed here.'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'"dataType" is optional. If omitted, it calculates based on the first fact expression.'}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "t1ldkqth8vt0k64vkoajmoqrs4"\n"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Construct the expression."}),"\n",(0,o.jsxs)(n.p,{children:["Make a copy of the following ",(0,o.jsx)(n.code,{children:'"tokens"'})," format template and modify the ",(0,o.jsx)(n.code,{children:'"fact_expression"'})," to construct an expression."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"expression":{\n  "tokens":[\n    {\n      "value":"<fact_expression>"\n    }\n  ]\n}\n\nSample Request Body:\n\n{\n  "information":{\n      "name":"Profit"\n  },\n  "expressions":[\n      {\n        "expression":{\n            "tokens":[\n              {\n                  "value":"ORDER_AMT - ORDER_COST"\n              }\n            ]\n        },\n        "tables":[\n            {\n              "objectId":"8D6793D411D3E4981000E787EC6DE8A4",\n              "subType":"logical_table",\n              "name":"ORDER_FACT"\n            }\n        ]\n      }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,o.jsxs)(n.p,{children:["In this sample workflow, you want to return the newly created fact with its expression in all formats. Therefore, you should set ",(0,o.jsx)(n.code,{children:"showExpressionAs=tree"})," and ",(0,o.jsx)(n.code,{children:"showExpressionsAs=tokens"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/facts/FDD652E7444ADD7AB6B25F9C1FA15F92?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d "{\\\\"information\\\\":{\\\\"name\\\\":\\\\"Profit\\\\"},\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"ORDER_AMT - ORDER_COST\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"8D6793D411D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"ORDER_FACT\\\\"}]}]}"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,o.jsx)(n.p,{children:"You can view the fact's new definition in the body of the response."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2021-03-22T18:05:47.821Z",\n    "dateModified": "2021-03-22T18:05:47.821Z",\n    "versionId": "3FF0319C5B496906BE3EF5A0F825CE77",\n    "primaryLocale": "en-US",\n    "objectId": "FDD652E7444ADD7AB6B25F9C1FA15F92",\n    "subType": "fact",\n    "name": "Profit"\n  },\n  "dataType": {\n    "type": "float",\n    "precision": 53,\n    "scale": 0\n  },\n  "expressions": [\n    {\n      "expressionId": "9511B92C84AE4B40A27269FC201A7EB6",\n      "expression": {\n        "text": "ORDER_AMT - ORDER_COST",\n        "tree": {\n          "function": "minus",\n          "children": [\n            {\n              "type": "column_reference",\n              "columnName": "ORDER_AMT",\n              "objectId": "8D6792BC11D3E4981000E787EC6DE8A4"\n            },\n            {\n              "type": "column_reference",\n              "columnName": "ORDER_COST",\n              "objectId": "F30CAFB211D5AC5FC000D98A4CC5F24F"\n            }\n          ],\n          "type": "operator"\n        },\n        "tokens": [\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "ORDER_AMT",\n            "type": "column_reference",\n            "target": {\n              "dateCreated": "2001-01-02T20:48:36.000Z",\n              "dateModified": "2016-08-18T19:33:57.000Z",\n              "versionId": "B491FFF611E6657A0B440080EF557A15",\n              "primaryLocale": "en-US",\n              "objectId": "8D6792BC11D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "ORDER_AMT"\n            }\n          },\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "-",\n            "type": "character",\n            "target": {\n              "dateCreated": "2001-01-02T20:47:41.000Z",\n              "dateModified": "2021-03-09T15:22:04.454Z",\n              "versionId": "3417594811EB80EB25D80080EF25AB1A",\n              "primaryLocale": "en-US",\n              "objectId": "8107C311DD9911D3B98100C04F2233EA",\n              "subType": "function",\n              "name": "-",\n              "description": "Returns the difference between two values."\n            }\n          },\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "ORDER_COST",\n            "type": "column_reference",\n            "target": {\n              "dateCreated": "2001-09-18T18:09:48.000Z",\n              "dateModified": "2016-08-18T19:33:57.000Z",\n              "versionId": "B491FFF611E6657A0B440080EF557A15",\n              "primaryLocale": "en-US",\n              "objectId": "F30CAFB211D5AC5FC000D98A4CC5F24F",\n              "subType": "column",\n              "name": "ORDER_COST"\n            }\n          },\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "",\n            "type": "end_of_text"\n          }\n        ]\n      },\n      "tables": [\n        {\n          "objectId": "8D6793D411D3E4981000E787EC6DE8A4",\n          "subType": "logical_table",\n          "name": "ORDER_FACT"\n        }\n      ]\n    }\n  ],\n  "entryLevel": []\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Response Code: 200 (The fact's definition is updated successfully in the changeset.)"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(96540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);