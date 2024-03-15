"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4980],{82167:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(74848),n=r(28453);const o={title:"Workflow sample - Retrieve a driver's definition",sidebar_label:"Retrieve a driver's definition",description:"This workflow sample demonstrates how to retrieve a driver's definition in metadata."},a=void 0,s={id:"common-workflows/administration/manage-drivers/retrieve-a-driver-definition",title:"Workflow sample - Retrieve a driver's definition",description:"This workflow sample demonstrates how to retrieve a driver's definition in metadata.",source:"@site/docs/common-workflows/administration/manage-drivers/retrieve-a-driver-definition.md",sourceDirName:"common-workflows/administration/manage-drivers",slug:"/common-workflows/administration/manage-drivers/retrieve-a-driver-definition",permalink:"/rest-api-docs/common-workflows/administration/manage-drivers/retrieve-a-driver-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-drivers/retrieve-a-driver-definition.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Workflow sample - Retrieve a driver's definition",sidebar_label:"Retrieve a driver's definition",description:"This workflow sample demonstrates how to retrieve a driver's definition in metadata."},sidebar:"tutorialSidebar",previous:{title:"Retrieve all drivers' definitions",permalink:"/rest-api-docs/common-workflows/administration/manage-drivers/retrieve-drivers"},next:{title:"Update a driver's definition",permalink:"/rest-api-docs/common-workflows/administration/manage-drivers/update-a-driver-definition"}},d={},c=[{value:"Retrieve a driver&#39;s definition GET /api/drivers/{id}",id:"retrieve-a-drivers-definition-get-apidriversid",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Available:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{since:"2021 Update 9"}),"\n",(0,t.jsx)(i.p,{children:"This workflow sample demonstrates how to retrieve a driver's definition in metadata."}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsxs)(i.p,{children:["Obtain the authorization token needed to execute the request using ",(0,t.jsx)(i.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,t.jsxs)(i.p,{children:["Obtain the driver's ID needed to execute the request using ",(0,t.jsx)(i.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/getDrivers_1",children:"GET /api/drivers"}),"."]})]}),"\n",(0,t.jsxs)(i.h2,{id:"retrieve-a-drivers-definition-get-apidriversid",children:["Retrieve a driver's definition ",(0,t.jsx)(i.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/getDriverById",children:"GET /api/drivers/{id}"})]}),"\n",(0,t.jsx)(i.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n'})}),"\n",(0,t.jsx)(i.p,{children:"Sample Request Body: Empty"}),"\n",(0,t.jsx)(i.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'curl -X "GET" \\\n  "http://demo.microstrategy.com/MicroStrategyLibrary/api/drivers/7358B0B8264A4B6198520B2BC0B6248B" \\\n  -H "accept: application/json" \\\n  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"\n'})}),"\n",(0,t.jsx)(i.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(i.p,{children:"You can get a driver's definition in the body of the response."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "enabled": true,\n  "id": "7358B0B8264A4B6198520B2BC0B6248B",\n  "isODBC": false,\n  "name": "com.microstrategy.jdbc.db2.TestDriver"\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"Sample Response Code: 200"})]})}function m(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>a,x:()=>s});var t=r(96540);const n={},o=t.createContext(n);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);