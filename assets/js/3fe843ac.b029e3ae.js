"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8724],{22886:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=s(74848),i=s(28453);const n={sidebar_label:"Create reports on the fly",title:"REST API sample - Create reports on the fly",description:"This interactive REST API sample highlights the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch."},a=void 0,o={id:"microstrategy-rest-api-samples/create-reports-on-the-fly",title:"REST API sample - Create reports on the fly",description:"This interactive REST API sample highlights the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch.",source:"@site/docs/microstrategy-rest-api-samples/create-reports-on-the-fly.md",sourceDirName:"microstrategy-rest-api-samples",slug:"/microstrategy-rest-api-samples/create-reports-on-the-fly",permalink:"/rest-api-docs/microstrategy-rest-api-samples/create-reports-on-the-fly",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/microstrategy-rest-api-samples/create-reports-on-the-fly.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{sidebar_label:"Create reports on the fly",title:"REST API sample - Create reports on the fly",description:"This interactive REST API sample highlights the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch."},sidebar:"tutorialSidebar",previous:{title:"MicroStrategy REST API samples",permalink:"/rest-api-docs/microstrategy-rest-api-samples/"},next:{title:"React user manager sample",permalink:"/rest-api-docs/microstrategy-rest-api-samples/react-user-manage-sample"}},l={},c=[{value:"Understand the REST API workflow in the sample",id:"understand-the-rest-api-workflow-in-the-sample",level:2},{value:"Set up the sample",id:"set-up-the-sample",level:2},{value:"Configure the sample",id:"configure-the-sample",level:2},{value:"Use the sample",id:"use-the-sample",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This interactive REST API sample highlights the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch."}),"\n",(0,r.jsx)(t.p,{children:"This sample gets data from an Intelligent cube or a report. It uses the attributes and metrics from the report definition to populate two list boxes. When a user selects attributes and metrics from the list boxes, an ad-hoc report is run on the cube and the results are displayed. A specified number of rows are returned, with additional rows displayed each time the user clicks the forward and backward arrows. Two types of view filters allow the user to narrow the results that are displayed. An auto-load button lets a user decide whether to automatically apply changes as they are made."}),"\n",(0,r.jsxs)(t.p,{children:["You can ",(0,r.jsx)(t.a,{href:"https://microstrategy.github.io/data-api-demo/site/",children:"view a live demo"})," of the sample. You can also ",(0,r.jsx)(t.a,{href:"https://github.com/microstrategy/data-api-demo/",children:"download the code"})," for this sample to help you understand and use MicroStrategy REST APIs in your application."]}),"\n",(0,r.jsx)(t.h2,{id:"understand-the-rest-api-workflow-in-the-sample",children:"Understand the REST API workflow in the sample"}),"\n",(0,r.jsx)(t.p,{children:"This sample uses REST APIs to authenticate the user, get a list of reports and cubes, get definitions for the reports and cubes, and then run the reports and cubes with selected attributes and metrics, using defined view filters."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"1."})," ",(0,r.jsx)(t.code,{children:"POST /api/auth/login"})]}),"\n",(0,r.jsx)(t.p,{children:"This REST API authenticates a user. It creates a MicroStrategy session using credentials for the user and a specified authentication mode. It returns an authorization token, which is used by subsequent REST API calls. In this sample, the API is used to create a configuration session."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"2."})," ",(0,r.jsx)(t.code,{children:"GET /api/searches/results"})]}),"\n",(0,r.jsx)(t.p,{children:"This REST API uses quick search functionality to search objects using specified search criteria. In this sample, the API is used to search cubes or reports in a specified project."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"3."})," ",(0,r.jsx)(t.code,{children:"GET /api/reports/{reportId}"})]}),"\n",(0,r.jsx)(t.p,{children:"This REST API returns the definition for a specified report in a specified project, including available attributes and metrics."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"4."})," ",(0,r.jsx)(t.code,{children:"GET /api/cubes/{cubeId}"})]}),"\n",(0,r.jsx)(t.p,{children:"This REST API returns the definition for a specified cube in a specified project, including available attributes and metrics."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"5."})," ",(0,r.jsx)(t.code,{children:"POST /api/reports/{reportId}/instances"})]}),"\n",(0,r.jsx)(t.p,{children:"This REST API creates an instance of a specified report in a specified project. It replaces the objects in the view template with the requested attributes or metrics, applies the view filters to the report, executes the report, and returns the final data."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"6."})," ",(0,r.jsx)(t.code,{children:"POST /api/cubes/{cubeId}/instances"})]}),"\n",(0,r.jsx)(t.p,{children:"This REST API creates a report instance based on a specified cube in a specified project. It adds the requested attributes or metrics to the view template, applies the view filters to the report, executes the report, and returns the final data,."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"7."})," ",(0,r.jsx)(t.code,{children:"GET /api/reports/{reportId}/instances/{instanceId}"})]}),"\n",(0,r.jsx)(t.p,{children:"This REST API returns the results of a specific report instance in a specified project. It supports fetching the results of the report instance incrementally,"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"8."})," ",(0,r.jsx)(t.code,{children:"GET /api/cubes/{cubeId}/instances/{instanceId}"})]}),"\n",(0,r.jsx)(t.p,{children:"This REST API returns the results of a specific report instance based on a specified cube in a specified project. It supports fetching the results of the report instance incrementally,"}),"\n",(0,r.jsx)(t.h2,{id:"set-up-the-sample",children:"Set up the sample"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to setup the sample, you can ",(0,r.jsx)(t.a,{href:"https://github.com/microstrategy/data-api-demo/",children:"download the source code from GitHub"}),". Follow the instruct to build and deploy the project. It is a React App."]}),"\n",(0,r.jsx)(t.h2,{id:"configure-the-sample",children:"Configure the sample"}),"\n",(0,r.jsx)(t.p,{children:"The config.js file is used to configure the sample for your environment. Set values for the following variables to configure the Intelligence Server, project, folder, user credentials, and number of documents to display on the page."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Variable name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Variable description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"restServerURL"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Base URL of the REST API. For example, ",(0,r.jsx)(t.code,{children:"http://localhost:8080/MicroStrategyLibrary/api"}),". The REST API endpoints will be appended to this base URL."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"projectId"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'ID of the MicroStrategy project that will be used by the REST API endpoints. For example, "B19DEDCC11D4E0EFC000EB9495D0F44F".'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"username"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'Username that will be authenticated. The default value is "administrator".'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"password"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Password for username that will be authenticated."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"cubes"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Array of cube IDs. These cubes are listed in the Datasets panel on the left of the sample, under Cubes. Be sure to use valid cube IDs."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"reports"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Array of report IDs. These reports are listed in the Datasets panel on the left of the sample, under Reports. Be sure to use valid report IDs."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"datasets"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Array of reports or cubes to be shown by default."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"use-the-sample",children:"Use the sample"}),"\n",(0,r.jsx)(t.p,{children:"Initially, the demo displays a list of cubes and reports in the panel on the left, including the name of the cube or report and the number of attributes and metrics; users can also see the JSON representation of the cube or report definition from the log view at the bottom."}),"\n",(0,r.jsx)(t.p,{children:"Users select a cube or report from the list. Once users have made a selection, the attributes and metrics for the selected cube or report are displayed in the panel on the left, with a data table on the right. By default, all the attributes and metrics are shown initially, but users can select specific attributes or metrics then apply the change to the data table."}),"\n",(0,r.jsxs)(t.p,{children:["Below the attributes, users are given the option to apply view filters. This demo supports two kinds of view filters: element filter and attribute form filter. Users define a filter, click ",(0,r.jsx)(t.strong,{children:"Add"}),", and then click Apply. The data displayed is filtered by the view filter."]}),"\n",(0,r.jsx)(t.p,{children:"Users can also see the detailed information of all the requests made in the log view below the data table."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"JsonDemoJS",src:s(91177).A+"",width:"1422",height:"975"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"If the grid does not populate, use the browser\u2019s developer tools to investigate potential causes. It is possible that incorrect connectivity information caused the demo to fail."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},91177:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/JsonDemoJS-9ef9ec8239b05dc5a4cdbc4a17d0311a.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var r=s(96540);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);