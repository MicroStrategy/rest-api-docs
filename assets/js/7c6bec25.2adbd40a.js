"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7390],{10363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(74848),r=n(28453);const i={title:"Retrieve a content group",description:"You can use REST APIs to retrieve a content group."},a=void 0,c={id:"common-workflows/administration/manage-content-group-objects/retrieve-a-content-group",title:"Retrieve a content group",description:"You can use REST APIs to retrieve a content group.",source:"@site/docs/common-workflows/administration/manage-content-group-objects/retrieve-a-content-group.md",sourceDirName:"common-workflows/administration/manage-content-group-objects",slug:"/common-workflows/administration/manage-content-group-objects/retrieve-a-content-group",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/retrieve-a-content-group",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-content-group-objects/retrieve-a-content-group.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Retrieve a content group",description:"You can use REST APIs to retrieve a content group."},sidebar:"tutorialSidebar",previous:{title:"Manage content group objects",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/"},next:{title:"Retrieve all content groups",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/retrieve-all-content-groups"}},s={},p=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{since:"2021 Update 4"}),"\n",(0,o.jsx)(t.p,{children:"You can use REST APIs to retrieve a content group definition by id."}),"\n",(0,o.jsxs)(t.p,{children:["In this sample workflow, we want to retrieve an existing content group with id ",(0,o.jsx)(t.code,{children:"D35FC0B04BD79E95612DDB907C4CCDF6"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["Endpoint: ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/getContentGroup",children:"GET /api/contentGroups/{id}"})]}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Body: N/A"}),"\n",(0,o.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7'\n"})}),"\n",(0,o.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "id": "D35FC0B04BD79E95612DDB907C4CCDF6",\n  "name": "Finance",\n  "color": 0,\n  "opacity": 50,\n  "emailEnabled": true,\n  "dateCreated": "2022-10-25T10:10:57.446+0000",\n  "dateModified": "2022-10-25T10:10:57.446+0000",\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  },\n  "type": 77,\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "abbreviation": "Administrator",\n      "group": false\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Response Code: 200 (The content group is returned successfully.)"})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(96540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);