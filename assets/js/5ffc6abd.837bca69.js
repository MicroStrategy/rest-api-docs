"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8594],{11794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=r(74848),i=r(28453);const n={title:"Error messages for metric limits",description:"The error messages for metric limits."},o=void 0,a={id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages",title:"Error messages for metric limits",description:"The error messages for metric limits.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Error messages for metric limits",description:"The error messages for metric limits."},sidebar:"tutorialSidebar",previous:{title:"Code sample - Filter reports and cubes using metric limits",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/code-sample"},next:{title:"Filter report and cube instances using requestedObjects",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/"}},c={},d=[];function l(e){const t={p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"When you use a metric limit to filter the data that is returned in a report or cube instance, you may receive HTTP 400 response code and the following error messages:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Invalid Input"}),(0,s.jsx)(t.th,{children:"Error Message"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Metric ID invalid"}),(0,s.jsx)(t.td,{children:"Invalid metric id - {metric ID}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Metric limit's target object is not a metric"}),(0,s.jsx)(t.td,{children:"In metric limits, target object must be metric, please check object in all first operand is metric in the limit expression with corresponding key {0}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Metric limit's target object ID is not the same as the corresponding key"}),(0,s.jsx)(t.td,{children:"In metric limits, the metric id {0} is in a first operand and should be same with corresponding key {1}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Metric limit's target object ID is not in the report or cube"}),(0,s.jsx)(t.td,{children:"Failed to find the metric {0} in the report or cube."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Operator is wrong"}),(0,s.jsx)(t.td,{children:'Invalid operator - {}(through reference chain: com.microstrategy.rest.model.report.RequestConfig["viewFilter"])'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Operands's count does not match corresponding operator"}),(0,s.jsx)(t.td,{children:"There should be {operands's count} operands for operator - {operator}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Operand's type is invalid"}),(0,s.jsx)(t.td,{children:"Jackson validation error such as: Could not resolve type id 'attribute2' as a subtype of [simple type, class com.microstrategy.rest.model.filter.viewfilter.Node]: known type ids = [attribute, constant, constants, elements, form, metric] (for POJO property 'operands') at [Source: (org.glassfish.jersey.message.internal.ReaderInterceptorExecutor$UnCloseableInputStream); line: 6, column: 17] (through reference chain: com.microstrategy.rest.model.report.RequestConfig[\"viewFilter\"]->com.microstrategy.rest.model.filter.viewfilter.LeafExpression[\"operands\"]\u2192java.util.ArrayList[index]) ("})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Operator cannot match the operands"}),(0,s.jsx)(t.td,{children:"The operands type combination of {operands' types} is not supported for operator - {input operator}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Datatype for metric is invalid"}),(0,s.jsx)(t.td,{children:"Invalid constant data type for metric qualification - {dataType}"})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);