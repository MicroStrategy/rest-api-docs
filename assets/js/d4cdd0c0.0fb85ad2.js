"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7799],{11448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(74848),a=n(28453);const o={title:"Retrieve a fact's definition within a changeset",sidebar_label:"Retrieve a fact's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a fact's definition within a changeset."},s=void 0,r={id:"common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition-within-a-changeset",title:"Retrieve a fact's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a fact's definition within a changeset.",source:"@site/docs/common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-fact-objects",slug:"/common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition-within-a-changeset",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve a fact's definition within a changeset",sidebar_label:"Retrieve a fact's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a fact's definition within a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a fact's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition"},next:{title:"Create a fact object",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/create-a-fact-object"}},c={},d=[{value:"Get a fact&#39;s definition within a changeset",id:"get-a-facts-definition-within-a-changeset",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{since:"2021 Update 1"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["You can try out this workflow at ",(0,i.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-440d539e-15d7-4709-94a5-9c74eecc03db?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"This workflow sample demonstrates how to retrieve a fact's definition within a changeset."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create a changeset."}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#get-a-facts-definition-within-a-changeset",children:"Get a fact's definition within a changeset."})}),"\n",(0,i.jsx)(t.li,{children:"Delete the changeset."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['You want to get the definition of the "Profit" fact object. The object ID of the fact is ',(0,i.jsx)(t.code,{children:"FDD652E7444ADD7AB6B25F9C1FA15F92"}),' in the "MicroStrategy Tutorial" project. The project ID is ',(0,i.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(t.p,{children:["Get the project ID from ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsx)(t.h2,{id:"get-a-facts-definition-within-a-changeset",children:"Get a fact's definition within a changeset"}),"\n",(0,i.jsxs)(t.p,{children:["Endpoint: ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts/ms-getFactDetails",children:"GET /api/model/facts/{factId}."})]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-MS-Changeset": "FA282B2D8EFD4327A652FE09B32A439D"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/facts/FDD652E7444ADD7AB6B25F9C1FA15F92" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-MS-Changeset: FA282B2D8EFD4327A652FE09B32A439D"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:"You can view the fact's definition in the body of the response."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2021-03-22T18:05:47.821Z",\n    "dateModified": "2021-03-22T18:05:47.821Z",\n    "versionId": "3FF0319C5B496906BE3EF5A0F825CE77",\n    "primaryLocale": "en-US",\n    "objectId": "FDD652E7444ADD7AB6B25F9C1FA15F92",\n    "subType": "fact",\n    "name": "Profit"\n  },\n  "dataType": {\n    "type": "float",\n    "precision": 53,\n    "scale": 0\n  },\n  "expressions": [\n    {\n      "expressionId": "7A4ABE8CAC6F11D58AD900C04FF2C54C",\n      "expression": {\n        "text": "TOT_DOLLAR_SALES - TOT_COST"\n      },\n      "tables": [\n        {\n          "objectId": "9A28CFCC42DB8E9627D547975958C138",\n          "subType": "logical_table",\n          "name": "CITY_MNTH_SLS"\n        },\n        {\n          "objectId": "54D82D5B4BD115DA313C03A5742900AE",\n          "subType": "logical_table",\n          "name": "CUSTOMER_SLS"\n        }\n      ]\n    }\n  ],\n  "entryLevel": []\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Response Code: 200 (The fact's definition is returned successfully.)"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);