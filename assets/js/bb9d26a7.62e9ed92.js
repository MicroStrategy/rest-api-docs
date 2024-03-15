"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4324],{68021:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=s(74848),n=s(28453);const o={title:"Supported features and considerations",description:"The JSON Data API supports the following features - Reports and published cubes as data sources, Attributes on rows and Metrics on columns."},i=void 0,a={id:"common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations",title:"Supported features and considerations",description:"The JSON Data API supports the following features - Reports and published cubes as data sources, Attributes on rows and Metrics on columns.",source:"@site/docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations.md",sourceDirName:"common-workflows/analytics/retrieve-data-from-the-intelligence-server",slug:"/common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Supported features and considerations",description:"The JSON Data API supports the following features - Reports and published cubes as data sources, Attributes on rows and Metrics on columns."},sidebar:"tutorialSidebar",previous:{title:"Retrieve data from the Intelligence Server",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/workflow-retrieve-data-from-the-intelligence-server"},next:{title:"Asynchronous execution of reports and cubes",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/asynchronous-execution-of-reports-and-cubes"}},c={},d=[{value:"Considerations",id:"considerations",level:2},{value:"Non-supported features",id:"non-supported-features",level:2}];function l(e){const t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The JSON Data API supports the following features:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Reports and published cubes as data sources"}),"\n",(0,r.jsx)(t.li,{children:"Attributes on rows"}),"\n",(0,r.jsx)(t.li,{children:"Metrics on columns"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"considerations",children:"Considerations"}),"\n",(0,r.jsxs)(t.p,{children:["If you request that all report data be returned (that is, you set ",(0,r.jsx)(t.code,{children:"limit"})," to ",(0,r.jsx)(t.code,{children:'"\\-1"'})," in the request), you need to compare the values for ",(0,r.jsx)(t.code,{children:"current"})," and ",(0,r.jsx)(t.code,{children:"total"})," in the results. If the value of current is less than the value of ",(0,r.jsx)(t.code,{children:"total"}),", you need to send a subsequent request with the value of ",(0,r.jsx)(t.code,{children:"offset"})," equal to the value of ",(0,r.jsx)(t.code,{children:"current"})," to get the next set of data."]}),"\n",(0,r.jsx)(t.h2,{id:"non-supported-features",children:"Non-supported features"}),"\n",(0,r.jsx)(t.p,{children:"The JSON Data API does not currently support:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Incremental refresh reports"}),"\n",(0,r.jsx)(t.li,{children:"Reports with the following definitions: dimensions, subtotals, prompts, consolidations, custom groups, compound attributes, and hierarchies"}),"\n",(0,r.jsx)(t.li,{children:"Reports that include a running sum metric and a break-by unit and at least one break-by unit that is not in the view template"}),"\n",(0,r.jsx)(t.li,{children:"Page by information in the JSON output"}),"\n",(0,r.jsx)(t.li,{children:"Direct Data Access cubes as data sources"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var r=s(96540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);