"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8433],{38341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(74848),s=n(28453);const i={title:"Delete a specific fence",description:"This workflow sample demonstrates how to delete a specific user or workload fence."},o=void 0,a={id:"common-workflows/administration/server-management/manage-fences/delete-specific-fence",title:"Delete a specific fence",description:"This workflow sample demonstrates how to delete a specific user or workload fence.",source:"@site/docs/common-workflows/administration/server-management/manage-fences/delete-specific-fence.md",sourceDirName:"common-workflows/administration/server-management/manage-fences",slug:"/common-workflows/administration/server-management/manage-fences/delete-specific-fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/delete-specific-fence",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/server-management/manage-fences/delete-specific-fence.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Delete a specific fence",description:"This workflow sample demonstrates how to delete a specific user or workload fence."},sidebar:"tutorialSidebar",previous:{title:"Update specific fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/update-specific-fence"},next:{title:"Manage language objects",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-languages"}},c={},d=[{value:"Delete an existing fence",id:"delete-an-existing-fence",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{since:"2021 Update 6"}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["You can try out this workflow at ",(0,r.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-977138df-2f06-40ae-87f3-8af880b7a336?ctx=documentation",children:"REST API Playground"}),"."]}),(0,r.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,r.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,r.jsxs)(t.p,{children:["You want to delete the user fence ",(0,r.jsx)(t.code,{children:"administrator_user_fence"})," having id YWRtaW5pc3RyYXRvcl91c2VyX2ZlbmNl, which reserves ",(0,r.jsx)(t.code,{children:"env-296739laio1use1"})," node and configured for ",(0,r.jsx)(t.code,{children:"Administrator"})," user/usergroups."]}),"\n",(0,r.jsxs)(t.p,{children:["The user ID is ",(0,r.jsx)(t.code,{children:"54F3D26011D2896560009A8E67019608"}),". The usergroup ID is ",(0,r.jsx)(t.code,{children:"E96685CD4E60068559F7DFAC7C2AA851"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic",children:"DssXmlPrivilegesConfigureServerBasic"})," and ",(0,r.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor",children:"DssXmlPrivilegesUseClusterMonitor"})," privileges are required to delete an existing fence."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Obtain the authorization token needed to execute the request using ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST\xa0/api/auth/login"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"delete-an-existing-fence",children:"Delete an existing fence"}),"\n",(0,r.jsxs)(t.p,{children:["Endpoint: ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/deleteFence_1",children:"DELETE /api/v2/iserver/fences/{id}"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"\n'})}),"\n",(0,r.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,r.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -X DELETE \\\n'demo.microstrategy.com/MicroStrategyLibrary/api/v2/iserver/fences/YWRtaW5pc3RyYXRvcl91c2VyX2ZlbmNl' \\\n-H 'accept: */*' \\\n-H 'X-MSTR-AuthToken: 27tm0ok3pno1qb9nd4opt7qq07'\n"})}),"\n",(0,r.jsx)(t.p,{children:"Sample Response Body: Empty"}),"\n",(0,r.jsx)(t.p,{children:"Response Code: 204 (User fence is deleted successfully.)"})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);