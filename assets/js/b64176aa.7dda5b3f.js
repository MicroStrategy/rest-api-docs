"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5175],{79156:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(74848),r=i(28453);const a={title:'Retrieve a drill map definition"',sidebar_label:"Retrieve a drill map definition",description:"You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service."},l=void 0,o={id:"common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition",title:'Retrieve a drill map definition"',description:"You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition.md",sourceDirName:"common-workflows/modeling/manage-drill-maps",slug:"/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:'Retrieve a drill map definition"',sidebar_label:"Retrieve a drill map definition",description:"You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage drill maps",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/"},next:{title:"Create a drill map",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/create-a-drill-map"}},s={},d=[{value:"Retrieve a drill map definition",id:"retrieve-a-drill-map-definition",level:2},{value:"Sample request header",id:"sample-request-header",level:3},{value:"Sample request body",id:"sample-request-body",level:3},{value:"Sample curl",id:"sample-curl",level:3},{value:"Sample response body",id:"sample-response-body",level:3},{value:"Response code",id:"response-code",level:3},{value:"Retrieve a drill map definition within a changeset",id:"retrieve-a-drill-map-definition-within-a-changeset",level:2},{value:"Get the drill map definition within the changeset using GET /api/model/drillMaps/{drillMapId}",id:"get-the-drill-map-definition-within-the-changeset-using-get-apimodeldrillmapsdrillmapid",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Available:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{since:"2021 Update 6"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You can try out this workflow at ",(0,n.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b7a0f0c-2172-418a-93ec-e0f0a13fa741?ctx=documentation",children:"REST API Playground"}),"."]}),(0,n.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,n.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,n.jsx)(t.p,{children:"You can use REST APIs to retrieve the definition of a drill map through the Modeling service. This workflow includes the following REST API requests."}),"\n",(0,n.jsx)(t.h2,{id:"retrieve-a-drill-map-definition",children:"Retrieve a drill map definition"}),"\n",(0,n.jsxs)(t.p,{children:["You want to get the definition of a drill map object. The object ID of the drill map is ",(0,n.jsx)(t.code,{children:"CC2E6AA3421EFF5C41C2D0939750BB24"})," in the MicroStrategy Tutorial project. The project ID is ",(0,n.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,n.jsxs)(t.p,{children:["Get the project ID from ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,n.jsxs)(t.p,{children:["Retrieve the drill map\u2019s definition using ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drill%20Maps/ms-getDrillMap",children:"GET /api/model/drillMaps/{drillMapId}"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"sample-request-header",children:"Sample request header"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"sample-request-body",children:"Sample request body"}),"\n",(0,n.jsx)(t.p,{children:"Empty"}),"\n",(0,n.jsx)(t.h3,{id:"sample-curl",children:"Sample curl"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMaps/CC2E6AA3421EFF5C41C2D0939750BB24" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"sample-response-body",children:"Sample response body"}),"\n",(0,n.jsx)(t.p,{children:"You can view the drill map definition in the body of the response."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-01-24T10:42:27.000Z",\n    "dateModified": "2022-02-14T04:29:54.000Z",\n    "versionId": "BA73E0DF421BB0A7C726C090F38AC5AE",\n    "primaryLocale": "en-US",\n    "objectId": "CC2E6AA3421EFF5C41C2D0939750BB24",\n    "subType": "drill_map",\n    "name": "Sample Drill Map"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Call Center Analysis",\n      "type": "template",\n      "target": {\n        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",\n        "subType": "template",\n        "name": "Call Center Analysis"\n      },\n      "priority": "medium",\n      "options": {\n        "setName": "Test SetName 1",\n        "inheritVLDB": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default",\n        "displayMode": "default"\n      }\n    },\n    {\n      "displayName": "Year",\n      "type": "across",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "high",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    },\n    {\n      "displayName": "Age Groups",\n      "type": "up",\n      "target": {\n        "objectId": "085CBF314703A71E926EA187C2002969",\n        "subType": "custom_group",\n        "name": "Age Groups"\n      },\n      "priority": "medium",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default"\n      }\n    },\n    {\n      "displayName": "Customer Geography",\n      "type": "down",\n      "target": {\n        "objectId": "B9E7FD5911D3E936C000B3B2D86C964F",\n        "subType": "consolidation",\n        "name": "Customer Geography"\n      },\n      "priority": "medium",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default"\n      }\n    },\n    {\n      "displayName": "Products",\n      "type": "down",\n      "target": {\n        "objectId": "B793B56811D3E4E51000E887EC6DE8A4",\n        "subType": "dimension_user",\n        "name": "Products"\n      },\n      "priority": "medium"\n    },\n    {\n      "type": "across",\n      "target": {\n        "objectId": "B793B55011D3E4E51000E887EC6DE8A4",\n        "subType": "dimension_user",\n        "name": "Geography"\n      },\n      "priority": "medium"\n    },\n    {\n      "type": "drill_map",\n      "target": {\n        "objectId": "A3EEC92948DB0216FA585D83F2633A2B",\n        "subType": "drill_map",\n        "name": "Status Drill Map"\n      },\n      "priority": "medium"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"response-code",children:"Response code"}),"\n",(0,n.jsx)(t.p,{children:"200 (The drill map definition is returned successfully.)"}),"\n",(0,n.jsx)(t.h2,{id:"retrieve-a-drill-map-definition-within-a-changeset",children:"Retrieve a drill map definition within a changeset"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),". If you plan to use the response of ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList",children:"GET /api/model/drillMaps/{drillMapId}"})," to create a new drill map or update a drill map definition, you should associate all requests with one changeset."]})}),"\n",(0,n.jsxs)(t.p,{children:["You want to get the definition of the Sample Drill Map drill map object. The object ID of this drill map is ",(0,n.jsx)(t.code,{children:"CC2E6AA3421EFF5C41C2D0939750BB24"})," in the MicroStrategy Tutorial project. The project ID is ",(0,n.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,n.jsxs)(t.p,{children:["Get the project ID from ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,n.jsxs)(t.h3,{id:"get-the-drill-map-definition-within-the-changeset-using-get-apimodeldrillmapsdrillmapid",children:["Get the drill map definition within the changeset using ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drill%20Maps/ms-getDrillMap",children:"GET /api/model/drillMaps/{drillMapId}"})]}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMpas/CC2E6AA3421EFF5C41C2D0939750BB24" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" \\\n-H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"#sample-response-body",children:"Sample Response Body"})}),"\n",(0,n.jsx)(t.p,{children:"Response Code: 200"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>o});var n=i(96540);const r={},a=n.createContext(r);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);