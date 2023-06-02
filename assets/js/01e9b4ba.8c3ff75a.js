"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4956],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return d}});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(i),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return i?a.createElement(f,l(l({ref:t},c),{},{components:i})):a.createElement(f,l({ref:t},c))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,l=new Array(n);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<n;p++)l[p]=i[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},96282:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=i(83117),r=i(80102),n=(i(67294),i(3905)),l=["components"],o={title:"Return the template limit criteria applied prior to aggregation",description:"A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."},s=void 0,p={unversionedId:"common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",id:"common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",title:"Return the template limit criteria applied prior to aggregation",description:"A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.",source:"@site/docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria.md",sourceDirName:"common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization",slug:"/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Return the template limit criteria applied prior to aggregation",description:"A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."},sidebar:"tutorialSidebar",previous:{title:"Return the attribute-based view filter criteria applied prior to aggregation",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters"},next:{title:"Return the metric limit criteria applied prior to aggregation",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria"}},c={},u=[],m={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."),(0,n.kt)("p",null,"You create a template limit by specifying the attributes or metrics that you want to keep or exclude. If you specify an attribute, you exclude or keep only that attribute element; if you specify a metric, you exclude or keep all of the conditions around that metric. Template limits are one of three kinds of filters that can be applied to visualizations before metrics are aggregated; the other two are ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters"},"attribute-based view filters")," and ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters"},"metric-based view filters"),". There is one kind of filter that can be applied after metrics are aggregated\u2014",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria"},"metric limits"),"."),(0,n.kt)("p",null,"You use the following REST API endpoint to return information about the template limit that was applied before metric aggregation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}"))),(0,n.kt)("p",null,"Template limits correspond to Keep Only and Exclude filters in MicroStrategy Web. They can include multiple criteria, joined by the AND and OR operators. Complex template limit filtering criteria might look like this:"),(0,n.kt)("p",null,"AND ","[((Accounts = Property, Plant, Equipment) Or (Accounts = Construction In Progress) Or (Accounts = Leasehold Improvements) Or (Accounts = Office Furniture & Equipment) Or (Accounts = Machinery & Equipment) Or (Accounts = Buildings & Improvements) Or (Accounts = Land & Improvements)) And (Departments = Sales and Marketing)]"),(0,n.kt)("p",null,"An example of the JSON data that is returned for a simple template limit is shown below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W110",\n  "name": "Visualization 1",\n  "result": {\n    "definition": {\n      // template limit definition\n      "templateLimitSummary": "((Category = Electronics) Or (Category = Books))"\n    }\n  }\n}\n')),(0,n.kt)("p",null,"Template limits can be applied in a number of ways. For example, they can be applied in Workstation as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Right-click an attribute or metric in the visualization."),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"Keep Only")," or Exclude from the drop-down menu.")),(0,n.kt)("p",null,"Refer to the MicroStrategy product manuals for a detailed explanation of template limits and how they can be applied."))}d.isMDXComponent=!0}}]);