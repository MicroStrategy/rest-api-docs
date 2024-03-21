"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7556],{77762:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=t(74848),o=t(28453);const n={title:"Save dashboard themes",sidebar_label:"Save dashboard themes",description:"A workflow sample for saving a dashboard theme instance to metadata is provided below."},r=void 0,i={id:"common-workflows/modeling/manage-dossier-themes/save-dossier-themes",title:"Save dashboard themes",description:"A workflow sample for saving a dashboard theme instance to metadata is provided below.",source:"@site/docs/common-workflows/modeling/manage-dossier-themes/save-dossier-themes.md",sourceDirName:"common-workflows/modeling/manage-dossier-themes",slug:"/common-workflows/modeling/manage-dossier-themes/save-dossier-themes",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/save-dossier-themes",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-dossier-themes/save-dossier-themes.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Save dashboard themes",sidebar_label:"Save dashboard themes",description:"A workflow sample for saving a dashboard theme instance to metadata is provided below."},sidebar:"tutorialSidebar",previous:{title:"Create a dashboard theme instance",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation"},next:{title:"Get dashboard theme json",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/get-dossier-theme-json"}},d={},c=[{value:"Create a new dashboard theme instance",id:"create-a-new-dashboard-theme-instance",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Available:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 10"}),"\n",(0,a.jsxs)(s.admonition,{type:"tip",children:[(0,a.jsxs)(s.p,{children:["You can try these workflows with ",(0,a.jsx)(s.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder",children:"REST API Playground"}),"."]}),(0,a.jsxs)(s.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(s.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsxs)(s.p,{children:["This workflow sample demonstrates how to save a dashboard theme instance to metadata using ",(0,a.jsx)(s.code,{children:"POST /api/themes/dossiers/{dossierId}/instances/{instanceId}/saveAs"}),"."]}),"\n",(0,a.jsxs)(s.admonition,{type:"tip",children:[(0,a.jsxs)(s.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(s.p,{children:["Get the project ID from ",(0,a.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsx)(s.h2,{id:"create-a-new-dashboard-theme-instance",children:"Create a new dashboard theme instance"}),"\n",(0,a.jsxs)(s.p,{children:["Endpoint: ",(0,a.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Themes/saveThemes",children:"POST /api/themes/dossiers/{dossierId}/instances/{instanceId}/saveAs"})]}),"\n",(0,a.jsxs)(s.p,{children:["In this step, you are saving a dashboard theme instance to metadata as a dashboard object using ",(0,a.jsx)(s.code,{children:"POST /api/themes/dossiers/{dossierId}/instances/{instanceId}/saveAs"}),". Dashboard theme objects are applied to dashboards for their presentation style."]}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["In path parameter, instanceId is ID of dashboard theme instance, which is created with ",(0,a.jsx)(s.code,{children:"POST /api/themes"})]})}),"\n",(0,a.jsx)(s.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,a.jsx)(s.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "name": "theme1",\n  "description": "Theme description",\n  "folderId": "28B6C20543281266286B22B8C117BC45",\n  "overwrite": false\n}\n'})}),"\n",(0,a.jsx)(s.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8282/consume-dev/api/themes/dossiers/3C4526642940B2235E5EDF97EB009661/instances/3C4526642940B2235E5EDF97EB009661/saveAs' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: 7m798e0p471ip49lufeso7d6se' \\\n  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"name\": \"theme1\",\n  \"description\": \"Theme description\",\n  \"folderId\": \"28B6C20543281266286B22B8C117BC45\",\n  \"overwrite\": false\n}'\n"})}),"\n",(0,a.jsx)(s.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(s.p,{children:"You can view the new dashboard theme object ID in the body of the response. The ID provides reference to the theme object, which can be used for further options, such as applying a theme to a dashboard."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "id": "2E7090A9D241F962D6B191B3A1BE02D4"\n}\n'})}),"\n",(0,a.jsx)(s.p,{children:"Sample Response Code: 201 (Dashboard theme instance is saved to metadata.)"})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var a=t(96540);const o={},n=a.createContext(o);function r(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);