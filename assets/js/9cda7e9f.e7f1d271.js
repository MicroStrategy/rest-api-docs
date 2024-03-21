"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5439],{86074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(74848),s=n(28453);const i={title:"Create a custom timezone object",sidebar_label:"Create a custom timezone object",description:"This workflow demonstrates how to create a new custom object through the Modeling service."},a=void 0,r={id:"common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object",title:"Create a custom timezone object",description:"This workflow demonstrates how to create a new custom object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object.md",sourceDirName:"common-workflows/modeling/manage-time-zone-objects",slug:"/common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Create a custom timezone object",sidebar_label:"Create a custom timezone object",description:"This workflow demonstrates how to create a new custom object through the Modeling service."}},c={},d=[{value:"Create a new custom timezone using POST /api/model/timezones",id:"create-a-new-custom-timezone-using-post-apimodeltimezones",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.p,{children:["You can try out this workflow at ",(0,o.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0bea31ca-d010-4214-8ad6-19c1906fbd5a?ctx=documentation",children:"REST API Playground"}),"."]}),(0,o.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,o.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,o.jsx)(t.p,{children:"This workflow demonstrates how to create a new custom object through the Modeling service."}),"\n",(0,o.jsxs)(t.p,{children:["You want to create a new custom timezone named ",(0,o.jsx)(t.code,{children:'"New York"'})," under the ",(0,o.jsx)(t.code,{children:"Custom Timezones"})," folder in the configuration."]}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,o.jsx)(t.p,{children:"Since timezone objects are configuration objects, you must set the project ID as an empty string."})]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,o.jsxs)(t.h2,{id:"create-a-new-custom-timezone-using-post-apimodeltimezones",children:["Create a new custom timezone using ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones/ms-postTimezone",children:"POST /api/model/timezones"})]}),"\n",(0,o.jsx)(t.p,{children:"You want to create the timezone by providing its name and base timezone."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["'name' is not required to create a new timezone. If 'name' is not provided, the new timezone will be named using the base timezone's name. If the base timezone's name already exists in the folder, the suffix like ",(0,o.jsx)(t.code,{children:"(1)"}),", ",(0,o.jsx)(t.code,{children:"(2)"}),", and so on will be appended."]})}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",children:'"accept": "application/json""X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9""X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "information": { "name": "New York" },\n  "baseTimezone": { "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8" }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"information\\": {\\"name\\": \\"New York\\"},\\"baseTimezone\\": {\\"objectId\\": \\"1D18D39B4594CFAF60A6C1B2F48164E8\\"}}"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,o.jsx)(t.p,{children:"You can view the new timezone's definition in the body of the response."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2021-12-08T08:54:07.114Z",\n    "dateModified": "2021-12-08T08:54:07.114Z",\n    "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n    "primaryLocale": "en-US",\n    "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",\n    "subType": "timezone_custom",\n    "name": "New York"\n  },\n  "baseTimezone": {\n    "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n    "subType": "timezone_system",\n    "name": "America New York time"\n  },\n  "currentOffset": -18000\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Response Code: 201 (A new timezone is created successfully in the changeset.)"})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(96540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);