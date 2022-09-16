"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9564],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return f}});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(i),f=r,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||n;return i?a.createElement(m,o(o({ref:t},d),{},{components:i})):a.createElement(m,o({ref:t},d))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<n;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},6648:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=i(3117),r=i(102),n=(i(7294),i(3905)),o=["components"],l={title:"Retrieve Filters Applied to a Visualization",description:"You can use the following REST API endpoint to return information about the individual filters that have been applied to the dataset available to a visualization in a dossier, called the visualization-level dataset. The filtering information that is returned can be used by other REST API endpoints."},s=void 0,p={unversionedId:"common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/retrieve-filters-applied-to-a-visualization",id:"common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/retrieve-filters-applied-to-a-visualization",title:"Retrieve Filters Applied to a Visualization",description:"You can use the following REST API endpoint to return information about the individual filters that have been applied to the dataset available to a visualization in a dossier, called the visualization-level dataset. The filtering information that is returned can be used by other REST API endpoints.",source:"@site/docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/retrieve-filters-applied-to-a-visualization.md",sourceDirName:"common-workflows/filter-data/retrieve-filters-applied-to-a-visualization",slug:"/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/",permalink:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/retrieve-filters-applied-to-a-visualization.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1663337315,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{title:"Retrieve Filters Applied to a Visualization",description:"You can use the following REST API endpoint to return information about the individual filters that have been applied to the dataset available to a visualization in a dossier, called the visualization-level dataset. The filtering information that is returned can be used by other REST API endpoints."},sidebar:"tutorialSidebar",previous:{title:"Retrieve Filters Applied to Dossier Chapters",permalink:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-dossier-chapters"},next:{title:"Return the Metric-Based View Filter Criteria Applied Prior to Aggregation",permalink:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters"}},d={},u=[],c={toc:u};function f(e){var t=e.components,i=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,n.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-9468e98f-f4e6-4dcd-b63e-17cb724fa3be?ctx=documentation"},"REST API Playground"),"."),(0,n.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,n.kt)("p",null,"You can use the following REST API endpoint to return information about the individual filters that have been applied to the dataset available to a visualization in a dossier, called the visualization-level dataset. The filtering information that is returned can be used by other REST API endpoints."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}"))),(0,n.kt)("p",null,"The dataset available to a visualization in a dossier is a subset of the data in the original data source, which has been filtered and refined at different levels."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First, when the data is initially extracted, it can be refined using a report filter, a report limit, prompts, and so on."),(0,n.kt)("li",{parentName:"ol"},"The resulting dossier dataset can be further refined using the filter panel for the dossier to produce the specific dataset available for each chapter in the dossier."),(0,n.kt)("li",{parentName:"ol"},"Finally, the dataset available to visualizations on the pages of each chapter\u2014referred to here as the visualization-level dataset\u2014can be filtered, both before and after metrics are aggregated.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"One visualization can be used as a selector that targets another visualization, providing an ad-hoc filter between visualizations. The visualizations can be on the same page or different pages.")),(0,n.kt)("p",null,"The resulting data, after all these filters have been applied, is the data that is displayed in the visualizations on the pages of each chapter in the dossier. You can return the individual filter criteria for each of the filters applied to the visualization-level dataset."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The following filters are applied to the visualization-level dataset before data is aggregated.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters"},"View filter (using a dataset-level metric)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters"},"View filter (using an attribute)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria"},"Template limit"))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Since there are multiple filters applied at the same level, there must be logical operators that determine how the filter conditions are applied. The two view filter conditions are combined using either AND or OR, as specified by the developer. The template limit is always applied using AND.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The following filter is applied to the visualization-level dataset after data is aggregated.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria"},"Metric limit (using a visualization-level metric)"))))),(0,n.kt)("p",null,"The JSON data that is returned provides the filtering criteria applied for each separate kind of filter, as shown in the bold code below."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"There are four filters, but only three filter conditions are returned. This is because the two view filter conditions are merged using the logical operator that was specified by the developer.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n  "key": "W110",\n\n  "name": "Visualization 1",\n\n  "result": {\n\n    "definition": {\n\n      "attributes": [],\n\n      "metrics": [],\n\n      "thresholds": [],\n\n      "sorting": [],\n\n      "metricLimitSummary": "Profit > 99999", // metric limit filter definition\n\n      // template limit definition\n      "templateLimitSummary": "((Category = Electronics) Or (Category = Books))",\n\n      // view filter definition\n      "viewFilterSummary": "(Category = Books, Electronics) And (Profit > 11111)",\n\n    },\n\n    "data": {\n\n      ...\n')))}f.isMDXComponent=!0}}]);