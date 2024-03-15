"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1483],{35062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(74848),r=n(28453);const i={title:"Retrieve contents of a content group",description:"You can use REST APIs to retrieve contents of a content group."},c=void 0,s={id:"common-workflows/administration/manage-content-group-objects/retrieve-contents-of-an-existing-content-group",title:"Retrieve contents of a content group",description:"You can use REST APIs to retrieve contents of a content group.",source:"@site/docs/common-workflows/administration/manage-content-group-objects/retrieve-contents-of-an-existing-content-group.md",sourceDirName:"common-workflows/administration/manage-content-group-objects",slug:"/common-workflows/administration/manage-content-group-objects/retrieve-contents-of-an-existing-content-group",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/retrieve-contents-of-an-existing-content-group",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-content-group-objects/retrieve-contents-of-an-existing-content-group.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Retrieve contents of a content group",description:"You can use REST APIs to retrieve contents of a content group."},sidebar:"tutorialSidebar",previous:{title:"Update a content group",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/update-a-content-group"},next:{title:"Update contents of a content group",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/update-contents-of-an-existing-content-group"}},a={},p=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{since:"2021 Update 4"}),"\n",(0,o.jsx)(t.p,{children:"You can use REST APIs to retrieve contents of a content group by id."}),"\n",(0,o.jsxs)(t.p,{children:["In this sample workflow, we want to retrieve contents in two projects of an existing content group. The content group id is ",(0,o.jsx)(t.code,{children:"D35FC0B04BD79E95612DDB907C4CCDF6"}),", and two project ids are ",(0,o.jsx)(t.code,{children:"D9FC7C9240F680D0CCDD92945440138B"}),", ",(0,o.jsx)(t.code,{children:"235853DC4B79DABCE8C6FFB26B7D8DC3"}),"."]}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,o.jsxs)(t.p,{children:["Get the project ID from ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,o.jsxs)(t.p,{children:["Endpoint: ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/getContentGroupContent",children:"GET /api/contentGroups/{id}/contents"})]}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Body: N/A"}),"\n",(0,o.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6/contents?projectId=235853DC4B79DABCE8C6FFB26B7D8DC3&projectId=D9FC7C9240F680D0CCDD92945440138B' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: q9j2dck33c53s7g98go6iig876'\n"})}),"\n",(0,o.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "D9FC7C9240F680D0CCDD92945440138B": [],\n  "235853DC4B79DABCE8C6FFB26B7D8DC3": [\n    {\n      "id": "1182F0264D49467A43D9198D6E1331F2",\n      "projectId": "235853DC4B79DABCE8C6FFB26B7D8DC3",\n      "type": 55,\n      "dateModified": "2021-10-22T07:36:43.981+0000",\n      "name": "Call Center Management",\n      "viewMedia": 1879072805,\n      "acg": 255,\n      "isCertified": false,\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Response Code: 200 (The contents of the content group are returned successfully.)"})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);