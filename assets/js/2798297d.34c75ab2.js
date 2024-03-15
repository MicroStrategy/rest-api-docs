"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1915],{50351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=a(74848),s=a(28453);const o={title:"Create a dashboard theme instance",sidebar_label:"Create a dashboard theme instance",description:"Dashboard themes can be used to define dashboard presentation styles. Once a theme is applied to a dashboard, you can then apply that predefined formatting to a target dashboard. To create a dashboard theme, the client must create a theme instance from either the project default theme template, a dashboard instance (with or without specifying which part of the dashboard), or a report instance. In this section, multiple ways of creating dashboard themes are presented and explained."},r=void 0,i={id:"common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation",title:"Create a dashboard theme instance",description:"Dashboard themes can be used to define dashboard presentation styles. Once a theme is applied to a dashboard, you can then apply that predefined formatting to a target dashboard. To create a dashboard theme, the client must create a theme instance from either the project default theme template, a dashboard instance (with or without specifying which part of the dashboard), or a report instance. In this section, multiple ways of creating dashboard themes are presented and explained.",source:"@site/docs/common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation.md",sourceDirName:"common-workflows/modeling/manage-dossier-themes",slug:"/common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Create a dashboard theme instance",sidebar_label:"Create a dashboard theme instance",description:"Dashboard themes can be used to define dashboard presentation styles. Once a theme is applied to a dashboard, you can then apply that predefined formatting to a target dashboard. To create a dashboard theme, the client must create a theme instance from either the project default theme template, a dashboard instance (with or without specifying which part of the dashboard), or a report instance. In this section, multiple ways of creating dashboard themes are presented and explained."},sidebar:"tutorialSidebar",previous:{title:"Manage dashboard themes",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/"},next:{title:"Save dashboard themes",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/save-dossier-themes"}},d={},h=[{value:"Create a dashboard theme instance",id:"create-a-dashboard-theme-instance",level:2},{value:"More examples",id:"more-examples",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Available:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{since:"2021 Update 10"}),"\n",(0,n.jsxs)(t.p,{children:["This workflow sample demonstrates how to create a new dashboard theme instance using ",(0,n.jsx)(t.code,{children:"POST /api/themes"}),"."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,n.jsxs)(t.p,{children:["Get the project ID from ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,n.jsx)(t.h2,{id:"create-a-dashboard-theme-instance",children:"Create a dashboard theme instance"}),"\n",(0,n.jsxs)(t.p,{children:["Endpoint: ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Themes/createThemes",children:"POST /api/themes"})]}),"\n",(0,n.jsx)(t.p,{children:"In this step, you are creating a dashboard theme instance from a project default dashboard theme template. Note that a theme template is also a dashboard theme object. The newly created dashboard theme instance inherits all properties from the template. You can find more examples in the following sections on this page, as well as More examples at the bottom of this page."}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:"{}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8282/consume-dev/api/themes' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: h5oeq515djqbltih6r883sbb90' \\\n  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n}'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsx)(t.p,{children:"You can view the new dashboard theme instance ID in the body of the response. The instance ID provides reference to the instance on the Intelligence Server, which can be used for further options, such as saving to metadata."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "instanceId": "2E7090A9D241F962D6B191B3A1BE02D4"\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Code: 201 (A new dashboard theme instance is created on the Intelligence Server.)"}),"\n",(0,n.jsx)(t.h3,{id:"more-examples",children:"More examples"}),"\n",(0,n.jsx)(t.p,{children:"In the above example, the request body is empty. The newly created dashboard theme instance is just a copy of the project default dashboard theme template. With a properly prepared payload, you can get a dashboard theme that is suited to your specific needs. The following properties can be put in the payload:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "themeId": "E0783EAF44DEF424CA5215A228D33606",\n  "instanceId": "E0783EAF44DEF424CA5215A228D336067",\n  "keys": [\n    {\n      "key": "String",\n      "type": "control_key"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"The following properties are in the request body:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"themeId: Optional theme template ID if use template other than project default."}),"\n",(0,n.jsx)(t.li,{children:"instanceId: Optional Dashboard or report instance ID."}),"\n",(0,n.jsx)(t.li,{children:"keys: Optional, only applicable when instance ID is for a dashboard, indicating the parts of dashboard whose style information to be used in new theme instance."}),"\n",(0,n.jsx)(t.li,{children:"key: id of key in dashboard definition."}),"\n",(0,n.jsx)(t.li,{children:"type: Type of the key with 3 valid inputs: control_key, field, others."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var n=a(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);