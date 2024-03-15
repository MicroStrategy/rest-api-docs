"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[335],{97910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=r(74848),i=r(28453);const n={title:"Error messages for view filters",description:"The error messages for view filters."},o=void 0,a={id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/error-messages",title:"Error messages for view filters",description:"The error messages for view filters.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/error-messages.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/error-messages",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/error-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/error-messages.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Error messages for view filters",description:"The error messages for view filters."},sidebar:"tutorialSidebar",previous:{title:"Code sample - Filter reports and cubes using view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample"},next:{title:"Filter report and cube instances using metric limits",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/"}},d={},c=[];function l(e){const t={p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"When you use a view filter to refine the data in a report or cube instance, you may receive HTTP 400 response code and the following error messages:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Invalid input"}),(0,s.jsx)(t.th,{children:"Error message"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute ID is invalid"}),(0,s.jsx)(t.td,{children:"Invalid attribute id - {attribute ID}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"eEement ID is invalid"}),(0,s.jsx)(t.td,{children:"Invalid element id - {element ID}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Metric ID is invalid"}),(0,s.jsx)(t.td,{children:"Invalid metric id - {metric ID}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute form ID is invalid"}),(0,s.jsx)(t.td,{children:"Invalid attribute form id - {attribute form ID}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute ID and form ID do not match"}),(0,s.jsx)(t.td,{children:"Index out of range"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Operator is wrong"}),(0,s.jsxs)(t.td,{children:["Invalid operator - ",'(through reference chain: com.microstrategy.rest.model.report.RequestConfig["viewFilter"])']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Operands's count does not match corresponding operator"}),(0,s.jsx)(t.td,{children:"There should be {operands's count} operands for operator - {operator}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Operand's type is invalid"}),(0,s.jsx)(t.td,{children:"Jackson validation error such as: Could not resolve type id 'attribute2' as a subtype of [simple type, class com.microstrategy.rest.model.filter.viewfilter.Node]: known type ids = [attribute, constant, constants, elements, form, metric] (for POJO property 'operands') at [Source: (org.glassfish.jersey.message.internal.ReaderInterceptorExecutor$UnCloseableInputStream); line: 6, column: 17] (through reference chain: com.microstrategy.rest.model.report.RequestConfig[\"viewFilter\"]->com.microstrategy.rest.model.filter.viewfilter.LeafExpression[\"operands\"]\u2192java.util.ArrayList[index])"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Operator does not support operand's type"}),(0,s.jsx)(t.td,{children:"The operands type combination of {operands' types} is not supported for operator - {input operator}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data type for metric is invalid"}),(0,s.jsx)(t.td,{children:"Invalid constant data type for metric qualification - {dataType}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data type for constant in attribute form qualification is invalid"}),(0,s.jsx)(t.td,{children:"Invalid constant data type for attribute form qualification - {dataType}"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Metric ID does not belong to current report or cube"}),(0,s.jsx)(t.td,{children:"Failed to find the metric {id} in the report or cube."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute ID does not belong to current report or cube."}),(0,s.jsx)(t.td,{children:"Failed to find the attribute {id} in the report or cube."})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);