"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8930],{47555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(74848),i=r(28453);const s={title:"Filter report and cube instances",description:"You can filter data that is returned by the following REST API requests when you create an instance of a report or cube. You can also define how the results will be filtered in the body parameter of the request."},a=void 0,o={id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances",title:"Filter report and cube instances",description:"You can filter data that is returned by the following REST API requests when you create an instance of a report or cube. You can also define how the results will be filtered in the body parameter of the request.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Filter report and cube instances",description:"You can filter data that is returned by the following REST API requests when you create an instance of a report or cube. You can also define how the results will be filtered in the body parameter of the request."},sidebar:"tutorialSidebar",previous:{title:"Filter data",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/"},next:{title:"Filter report and cube instances using view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You can try these workflows with ",(0,n.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-aba744e4-751e-410a-b5c1-4ad7d0db7b67?ctx=documentation",children:"REST API Playground"}),"."]}),(0,n.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,n.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,n.jsx)(t.p,{children:"You can filter data that is returned by the following REST API requests when you create an instance of a report or cube:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"POST /api/reports/{reportId}/instances"})}),"\n",(0,n.jsx)(t.p,{children:"Reports must have attributes on rows and metrics on columns. Otherwise, filtering is not applied."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"POST /api/cubes/{cubeId}/instances"})}),"\n",(0,n.jsx)(t.p,{children:"You can filter all types of cubes \u2014 normal cubes, DDA cubes, and MDX cubes."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You define how the results will be filtered in the body parameter of the request."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/",children:"Using view filters"})}),"\n",(0,n.jsx)(t.p,{children:"With view filters, you can apply both attribute and metric filtering criteria. View filters are applied before data aggregation."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/",children:"Using metric limits"})}),"\n",(0,n.jsx)(t.p,{children:"With metric limits, you can apply only metric filtering criteria. Metric limits are applied after data aggregation."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/",children:["Using ",(0,n.jsx)(t.code,{children:"requestedObjects"})]})}),"\n",(0,n.jsx)(t.p,{children:"With requestedObjects, you specify exactly which attributes and metrics you want to include in the report or cube instance."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);