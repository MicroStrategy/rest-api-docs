"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3671],{97174:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>i,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(74848),n=t(28453);const a={title:"Reload the schema asynchronously",description:"This workflow sample demonstrates how to reload (update) the schema asynchronously."},c=void 0,r={id:"common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-asynchronously",title:"Reload the schema asynchronously",description:"This workflow sample demonstrates how to reload (update) the schema asynchronously.",source:"@site/docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-asynchronously.md",sourceDirName:"common-workflows/modeling/common-object-management/manage-the-schema",slug:"/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-asynchronously",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-asynchronously",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-asynchronously.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Reload the schema asynchronously",description:"This workflow sample demonstrates how to reload (update) the schema asynchronously."},sidebar:"tutorialSidebar",previous:{title:"Reload the schema synchronously",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-synchronously"},next:{title:"Changesets",permalink:"/rest-api-docs/common-workflows/modeling/changesets"}},d={},l=[{value:"Reload (update) the schema asynchronously",id:"reload-update-the-schema-asynchronously",level:2},{value:"Check the status of the schema reload (update)",id:"check-the-status-of-the-schema-reload-update",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Available:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{since:"2021 Update 1"}),"\n",(0,s.jsxs)(o.admonition,{type:"tip",children:[(0,s.jsxs)(o.p,{children:["You can try out this workflow at ",(0,s.jsx)(o.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-edc29ca6-4db8-4a8b-988e-11d9583ed993?ctx=documentation",children:"REST API Playground"}),"."]}),(0,s.jsxs)(o.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,s.jsx)(o.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,s.jsx)(o.p,{children:"This workflow sample demonstrates how to reload (update) the schema asynchronously."}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"#reload-update-the-schema-asynchronously",children:"Reload (update) the schema asynchronously."})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"#check-the-status-of-the-schema-reload-update",children:"Check the status of the schema reload (update)."})}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["You want to reload (update) the schema asynchronously in the MicroStrategy Tutorial project. The project ID is ",(0,s.jsx)(o.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Get the authorization token needed to execute the request with ",(0,s.jsx)(o.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Get the project ID from ",(0,s.jsx)(o.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"reload-update-the-schema-asynchronously",children:"Reload (update) the schema asynchronously"}),"\n",(0,s.jsxs)(o.p,{children:["Use ",(0,s.jsx)(o.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-schemaReload",children:"POST /api/model/schema/reload"})]}),"\n",(0,s.jsx)(o.p,{children:"Sample Request Header:"}),"\n",(0,s.jsxs)(o.p,{children:["Set ",(0,s.jsx)(o.code,{children:"Prefer"})," to ",(0,s.jsx)(o.code,{children:"respond-async"})," to execute this API asynchronously. Use GET Tasks APIs to check the status of the task."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754\n"Prefer": "respond-async"\n'})}),"\n",(0,s.jsx)(o.p,{children:"Sample Request Body"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"updateTypes"})," is required in the request body. This field can be empty, contain any of the following options, or all of them:","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"table_key"}),": Use this option if you changed the key structure of a table."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"entry_level"}),": Use this option if you changed the level at which a fact is stored."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"logical_size"}),": Use this option to recalculate logical table sizes and override any modifications you made to logical table sizes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "updateTypes": ["table_key", "entry_level", "logical_size"]\n}\n'})}),"\n",(0,s.jsx)(o.p,{children:"Sample Curl:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/reload" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" \\\n-H "Prefer: respond-async" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \\\n-H "Content-Type: application/json" \\\n-d \'{"updateTypes":["table_key","entry_level","logical_size"]}\'\n'})}),"\n",(0,s.jsx)(o.p,{children:"Sample Response Body:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "id": "907CAAF6F0644A8DA2CBF9D3C4C1B12E",\n  "task": "reloadSchema",\n  "startTime": "2021-03-24T02:05:14.236396Z",\n  "status": "running"\n}\n'})}),"\n",(0,s.jsx)(o.p,{children:"Response Code: 202 (The schema reload (asynchronous) request is accepted.)"}),"\n",(0,s.jsx)(o.h2,{id:"check-the-status-of-the-schema-reload-update",children:"Check the status of the schema reload (update)"}),"\n",(0,s.jsxs)(o.p,{children:["Use ",(0,s.jsx)(o.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-getTask",children:"GET /api/model/tasks/{taskId}"})]}),"\n",(0,s.jsx)(o.p,{children:"Sample Request Header:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754\n"taskId": "907CAAF6F0644A8DA2CBF9D3C4C1B12E"\n'})}),"\n",(0,s.jsx)(o.p,{children:"Sample Request Body: Empty"}),"\n",(0,s.jsx)(o.p,{children:"Sample Curl:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tasks/907CAAF6F0644A8DA2CBF9D3C4C1B12E" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,s.jsx)(o.p,{children:"Sample Response Body:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "id": "907CAAF6F0644A8DA2CBF9D3C4C1B12E",\n  "task": "reloadSchema",\n  "startTime": "2021-03-24T02:05:14.236396Z",\n  "endTime": "2021-03-24T02:05:15.740630Z",\n  "status": "completed"\n}\n'})}),"\n",(0,s.jsx)(o.p,{children:"Response Code: 200 (The task execution has completed or failed.)"})]})}function i(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>c,x:()=>r});var s=t(96540);const n={},a=s.createContext(n);function c(e){const o=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);