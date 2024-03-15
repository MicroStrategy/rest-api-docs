"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3032],{79935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(74848),r=t(28453);const a={title:"Create a content group",description:"You can use REST APIs to create a new content group."},i=void 0,c={id:"common-workflows/administration/manage-content-group-objects/create-a-content-group",title:"Create a content group",description:"You can use REST APIs to create a new content group.",source:"@site/docs/common-workflows/administration/manage-content-group-objects/create-a-content-group.md",sourceDirName:"common-workflows/administration/manage-content-group-objects",slug:"/common-workflows/administration/manage-content-group-objects/create-a-content-group",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/create-a-content-group",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-content-group-objects/create-a-content-group.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Create a content group",description:"You can use REST APIs to create a new content group."},sidebar:"tutorialSidebar",previous:{title:"Retrieve all content groups",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/retrieve-all-content-groups"},next:{title:"Update a content group",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/update-a-content-group"}},s={},p=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{since:"2021 Update 4"}),"\n",(0,o.jsx)(n.p,{children:"You can use REST APIs to create a new content group which includes name, color, opacity, emailEnabled, recipients."}),"\n",(0,o.jsxs)(n.p,{children:['In this sample workflow, we want to create a new content group object with the name "Finance", the color black, the opacity 50, enabled email, and the recipient with id ',(0,o.jsx)(n.code,{children:"54F3D26011D2896560009A8E67019608"})," ."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesManageContentBundle",children:"DssXmlPrivilegesManageContentBundle"})," privilege is required to create a content group."]})}),"\n",(0,o.jsxs)(n.p,{children:["Endpoint: ",(0,o.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/createContentGroup",children:"POST /api/contentGroups"})]}),"\n",(0,o.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Finance",\n  "color": 0,\n  "opacity": 50,\n  "emailEnabled": true,\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: idlrja15f7gue2n4esiv7mbn7v\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "name": "Finance",\n  "color": 0,\n  "opacity": 50,\n  "emailEnabled": true,\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  ]\n}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "id": "D35FC0B04BD79E95612DDB907C4CCDF6",\n  "name": "Finance",\n  "color": 0,\n  "opacity": 50,\n  "emailEnabled": true,\n  "dateCreated": "2022-10-25T10:10:57.446+0000",\n  "dateModified": "2022-10-25T10:10:57.446+0000",\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  },\n  "type": 77,\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "abbreviation": "Administrator",\n      "group": false\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Sample Response Code: 201 (A new content group is created successfully.)"})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);