"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9895],{28753:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=i(74848),r=i(28453);const s={title:"Return the attribute-based view filter criteria applied prior to aggregation",description:"A view filter specifies a set of attribute or metric-based filtering criteria. In dashboards, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."},n=void 0,l={id:"common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters",title:"Return the attribute-based view filter criteria applied prior to aggregation",description:"A view filter specifies a set of attribute or metric-based filtering criteria. In dashboards, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.",source:"@site/docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters.md",sourceDirName:"common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization",slug:"/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Return the attribute-based view filter criteria applied prior to aggregation",description:"A view filter specifies a set of attribute or metric-based filtering criteria. In dashboards, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."},sidebar:"tutorialSidebar",previous:{title:"Return the metric-based view filter criteria applied prior to aggregation",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters"},next:{title:"Return the template limit criteria applied prior to aggregation",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria"}},o={},d=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"A view filter specifies a set of attribute or metric-based filtering criteria. In dashboards, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."}),"\n",(0,a.jsxs)(t.p,{children:["You create an attribute-based view filter by selecting the attributes that you want to use as filters in the Filter Editor. Attribute-based view filters are one of three kinds of filters that can be applied to visualizations before metrics are aggregated; the other two are ",(0,a.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters",children:"metric-based view filters"})," and ",(0,a.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",children:"template limits"}),". There is one kind of filter that can be applied after metrics are aggregated\u2014",(0,a.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria",children:"metric limits"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Drilling is treated as a view filter. If you set drilling, you will get the drill content in the view filter summary."})}),"\n",(0,a.jsx)(t.p,{children:"You use the following REST API endpoint to return information about the view filters that were applied before metric aggregation."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"An example of the JSON data that is returned for view filters is shown below. If you applied multiple view filters, all of the filter criteria is combined, using the logical operators that you specified when you created the filters."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "key": "W110",\n  "name": "Visualization 1",\n  "result": {\n    "definition": {\n      // view filter definition\n      "viewFilterSummary": "(Category = Books, Electronics) And (Profit > 11111)"\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Attribute-based view filters can be applied in a number of ways. For example, they can be applied in Workstation as follows:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Choose ",(0,a.jsx)(t.strong,{children:"Edit Filter"})," from the dropdown in the top right corner of the visualization panel."]}),"\n",(0,a.jsxs)(t.li,{children:["On the Advanced Filter Editor dialog, click",(0,a.jsx)(t.strong,{children:"Add New Qualification"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["On the New Qualification dialog:","\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"In Based On, choose one or more attribute."}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.strong,{children:"OK"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Refer to the MicroStrategy product manuals for a detailed explanation of attribute-based view filters and how they can be applied."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>l});var a=i(96540);const r={},s=a.createContext(r);function n(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);