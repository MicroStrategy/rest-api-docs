"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[712],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],i={title:"Workflow Sample - Update a Fact Object",sidebar_label:"Update a Fact Object",description:"The workflow to update a fact object."},c=void 0,l={unversionedId:"common-workflows/manage-fact-objects/update-a-fact-object",id:"common-workflows/manage-fact-objects/update-a-fact-object",title:"Workflow Sample - Update a Fact Object",description:"The workflow to update a fact object.",source:"@site/docs/common-workflows/manage-fact-objects/update-a-fact-object.md",sourceDirName:"common-workflows/manage-fact-objects",slug:"/common-workflows/manage-fact-objects/update-a-fact-object",permalink:"/rest-api-docs/common-workflows/manage-fact-objects/update-a-fact-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-fact-objects/update-a-fact-object.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Update a Fact Object",sidebar_label:"Update a Fact Object",description:"The workflow to update a fact object."},sidebar:"tutorialSidebar",previous:{title:"Create a Fact Object",permalink:"/rest-api-docs/common-workflows/manage-fact-objects/create-a-fact-object"},next:{title:"Manage User and Workload Fences",permalink:"/rest-api-docs/common-workflows/manage-fences/"}},p={},d=[{value:"Create a changeset",id:"create-a-changeset",level:2},{value:"Update the fact&#39;s definition",id:"update-the-facts-definition",level:2},{value:"Commit a changeset",id:"commit-a-changeset",level:2},{value:"Delete the changeset",id:"delete-the-changeset",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-11d116e7-cf31-451a-848e-0d2be6fa3041?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-changeset"},"Create a changeset.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#update-the-facts-definition"},"Update a fact's definition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#commit-a-changeset"},"Commit the changeset.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#delete-the-changeset"},"Delete the changeset."))),(0,r.kt)("p",null,'You want to update the "Profit" fact object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ',(0,r.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'"schemaEdit"')," is required to be ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this changeset ID is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions).")),(0,r.kt)("h2",{id:"create-a-changeset"},"Create a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "t1ldkqth8vt0k64vkoajmoqrs4"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "F768352DC66E40F2BCD9A3F050ECDE9B",\n  "dateCreated": "2021-03-22T20:29:39.253573Z",\n  "dateModified": "2021-03-22T20:29:39.253608Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MSTR User"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,r.kt)("h2",{id:"update-the-facts-definition"},"Update the fact's definition"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts/ms-putFact"},"PUT /api/model/facts/{factId}")),(0,r.kt)("p",null,'You want to update the definition of the "Profit" fact so that it contains one expression ',(0,r.kt)("inlineCode",{parentName:"p"},"ORDER_AMT - ORDER_COST")," used in table ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER_FACT"),"."),(0,r.kt)("p",null,'To update a fact, in the request body, "expressions" contains a list of fact expressions. Each fact contains "expression" and "tables".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"expression": Must be in either "tree" or "tokens" format.'),(0,r.kt)("p",{parentName:"li"},'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"tables": A list of tables that the "expression" applies to.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"dataType" is optional. If omitted, it calculates based on the first fact expression.'))),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "t1ldkqth8vt0k64vkoajmoqrs4"\n"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,r.kt)("p",null,"Construct the expression."),(0,r.kt)("p",null,"Make a copy of the following ",(0,r.kt)("inlineCode",{parentName:"p"},'"tokens"')," format template and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},'"fact_expression"')," to construct an expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"expression":{\n  "tokens":[\n    {\n      "value":"<fact_expression>"\n    }\n  ]\n}\n\nSample Request Body:\n\n{\n  "information":{\n      "name":"Profit"\n  },\n  "expressions":[\n      {\n        "expression":{\n            "tokens":[\n              {\n                  "value":"ORDER_AMT - ORDER_COST"\n              }\n            ]\n        },\n        "tables":[\n            {\n              "objectId":"8D6793D411D3E4981000E787EC6DE8A4",\n              "subType":"logical_table",\n              "name":"ORDER_FACT"\n            }\n        ]\n      }\n  ]\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("p",null,"In this sample workflow, you want to return the newly created fact with its expression in all formats. Therefore, you should set ",(0,r.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"showExpressionsAs=tokens"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/facts/FDD652E7444ADD7AB6B25F9C1FA15F92?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d "{\\\\"information\\\\":{\\\\"name\\\\":\\\\"Profit\\\\"},\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"ORDER_AMT - ORDER_COST\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"8D6793D411D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"ORDER_FACT\\\\"}]}]}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the fact's new definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-03-22T18:05:47.821Z",\n    "dateModified": "2021-03-22T18:05:47.821Z",\n    "versionId": "3FF0319C5B496906BE3EF5A0F825CE77",\n    "primaryLocale": "en-US",\n    "objectId": "FDD652E7444ADD7AB6B25F9C1FA15F92",\n    "subType": "fact",\n    "name": "Profit"\n  },\n  "dataType": {\n    "type": "float",\n    "precision": 53,\n    "scale": 0\n  },\n  "expressions": [\n    {\n      "expressionId": "9511B92C84AE4B40A27269FC201A7EB6",\n      "expression": {\n        "text": "ORDER_AMT - ORDER_COST",\n        "tree": {\n          "function": "minus",\n          "children": [\n            {\n              "type": "column_reference",\n              "columnName": "ORDER_AMT",\n              "objectId": "8D6792BC11D3E4981000E787EC6DE8A4"\n            },\n            {\n              "type": "column_reference",\n              "columnName": "ORDER_COST",\n              "objectId": "F30CAFB211D5AC5FC000D98A4CC5F24F"\n            }\n          ],\n          "type": "operator"\n        },\n        "tokens": [\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "ORDER_AMT",\n            "type": "column_reference",\n            "target": {\n              "dateCreated": "2001-01-02T20:48:36.000Z",\n              "dateModified": "2016-08-18T19:33:57.000Z",\n              "versionId": "B491FFF611E6657A0B440080EF557A15",\n              "primaryLocale": "en-US",\n              "objectId": "8D6792BC11D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "ORDER_AMT"\n            }\n          },\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "-",\n            "type": "character",\n            "target": {\n              "dateCreated": "2001-01-02T20:47:41.000Z",\n              "dateModified": "2021-03-09T15:22:04.454Z",\n              "versionId": "3417594811EB80EB25D80080EF25AB1A",\n              "primaryLocale": "en-US",\n              "objectId": "8107C311DD9911D3B98100C04F2233EA",\n              "subType": "function",\n              "name": "-",\n              "description": "Returns the difference between two values."\n            }\n          },\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "ORDER_COST",\n            "type": "column_reference",\n            "target": {\n              "dateCreated": "2001-09-18T18:09:48.000Z",\n              "dateModified": "2016-08-18T19:33:57.000Z",\n              "versionId": "B491FFF611E6657A0B440080EF557A15",\n              "primaryLocale": "en-US",\n              "objectId": "F30CAFB211D5AC5FC000D98A4CC5F24F",\n              "subType": "column",\n              "name": "ORDER_COST"\n            }\n          },\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "",\n            "type": "end_of_text"\n          }\n        ]\n      },\n      "tables": [\n        {\n          "objectId": "8D6793D411D3E4981000E787EC6DE8A4",\n          "subType": "logical_table",\n          "name": "ORDER_FACT"\n        }\n      ]\n    }\n  ],\n  "entryLevel": []\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (The fact's definition is updated successfully in the changeset.)"),(0,r.kt)("h2",{id:"commit-a-changeset"},"Commit a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "t1ldkqth8vt0k64vkoajmoqrs4"\n"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/F768352DC66E40F2BCD9A3F050ECDE9B/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "F768352DC66E40F2BCD9A3F050ECDE9B",\n  "dateCreated": "2021-03-22T20:29:39.253573Z",\n  "dateModified": "2021-03-22T20:41:38.286927Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MSTR User"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,r.kt)("h2",{id:"delete-the-changeset"},"Delete the changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4"\n"X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/F768352DC66E40F2BCD9A3F050ECDE9B" -H "accept: \\*/\\*" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"))}u.isMDXComponent=!0}}]);