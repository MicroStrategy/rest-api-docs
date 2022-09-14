"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9782],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||n;return r?i.createElement(m,o(o({ref:t},d),{},{components:r})):i.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6895:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=r(3117),a=r(102),n=(r(7294),r(3905)),o=["components"],l={title:"Filter Data",description:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied."},s=void 0,p={unversionedId:"common-workflows/filter-data/filter-data",id:"common-workflows/filter-data/filter-data",title:"Filter Data",description:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied.",source:"@site/docs/common-workflows/filter-data/filter-data.md",sourceDirName:"common-workflows/filter-data",slug:"/common-workflows/filter-data/",permalink:"/common-workflows/filter-data/",draft:!1,editUrl:"https://undefined/undefined/restapi-docs/tree/main/docs/common-workflows/filter-data/filter-data.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663186539,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Filter Data",description:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied."},sidebar:"tutorialSidebar",previous:{title:"Sort Data",permalink:"/common-workflows/sort-data"},next:{title:"Filter Report and Cube Instances",permalink:"/common-workflows/filter-data/filter-report-and-cube-instances/"}},d={},u=[{value:"Filter Report and Cube Instances",id:"filter-report-and-cube-instances",level:2},{value:"Filter Dossier Instances",id:"filter-dossier-instances",level:3},{value:"Retrieve Filters Applied in Dossier Chapters",id:"retrieve-filters-applied-in-dossier-chapters",level:3},{value:"Retrieve Filters Applied to a Visualization in a Dossier",id:"retrieve-filters-applied-to-a-visualization-in-a-dossier",level:3}],c={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,n.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b0a16367-8997-447d-8731-2d6281d4f9bc?ctx=documentation"},"REST API Playground"),"."),(0,n.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/playground"},"here"),".")),(0,n.kt)("p",null,"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied:"),(0,n.kt)("h2",{id:"filter-report-and-cube-instances"},"Filter Report and Cube Instances"),(0,n.kt)("p",null,"You can use the following REST APIs to filter the data that is returned when you ",(0,n.kt)("a",{parentName:"p",href:"/common-workflows/filter-data/filter-report-and-cube-instances/"},"create an instance of a report or cube"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/reports/{reportId}/instances")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/cubes/{cubeId}/instances"))),(0,n.kt)("p",null,"Because these filters are applied to instances, they are not persisted."),(0,n.kt)("p",null,"You define how the data should be filtered in the body parameter of the request. You can filter the data that is returned in the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},"Using view filters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/"},"Using metric limits")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/"},"Using requested objects"))),(0,n.kt)("p",null,"If you use both a viewFilter and a ",(0,n.kt)("inlineCode",{parentName:"p"},"requestedObjects")," parameter in the HTTP request, the view filter will be applied first. The requested objects definition will then be applied to the filtered results (a subset of the cube data), rather than to the cube data itself."),(0,n.kt)("h3",{id:"filter-dossier-instances"},"Filter Dossier Instances"),(0,n.kt)("p",null,"You can use the following REST APIs to ",(0,n.kt)("a",{parentName:"p",href:"/common-workflows/filter-data/filter-dossier-instances/"},"filter the data that is returned when you create or update an instance of a dossier"),", including clearing the filter selections."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/dossiers/{dossierId}/instances")," Create an instance of a specific dossier with the existing filter applied, including clearing all of the current filter selections."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters")," Execute an existing dossier instance with new filter selections, including clearing all of the current filter selections.")),(0,n.kt)("p",null,"We have provided a ",(0,n.kt)("a",{parentName:"p",href:"/common-workflows/filter-data/filter-dossier-instances/workflow-sample"},"workflow sample")," that illustrates how to create an instance of a dossier with an existing filter applied, and then re-execute the same dossier instance with updated selections for the same filter."),(0,n.kt)("p",null,"For detailed information about filtering data in dossiers, see the ",(0,n.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/MSTRWeb/WebHelp/Lang_1033/Content/filter_data.htm"},"MicroStrategy product help"),"."),(0,n.kt)("h3",{id:"retrieve-filters-applied-in-dossier-chapters"},"Retrieve Filters Applied in Dossier Chapters"),(0,n.kt)("p",null,"You can use the following REST API to get information about the ",(0,n.kt)("a",{parentName:"p",href:"/common-workflows/filter-data/retrieve-filters-applied-to-dossier-chapters"},"filter applied in each chapter in a specific dossier"),", including the key and name of the filter, a text summary of the filter expression, and information for the filter source."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers/{dossierId}/definition"))),(0,n.kt)("h3",{id:"retrieve-filters-applied-to-a-visualization-in-a-dossier"},"Retrieve Filters Applied to a Visualization in a Dossier"),(0,n.kt)("p",null,"You can use the following REST API request to return information about the ",(0,n.kt)("a",{parentName:"p",href:"/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/"},"filters that were applied to a visualization in a dossier"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}")),(0,n.kt)("p",null,"The following types of filters are applied at specific points in the data aggregation process."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters"},"Metric-based view filter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters"},"Attribute-based view filter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria"},"Template limit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria"},"Metric limit"))))}f.isMDXComponent=!0}}]);