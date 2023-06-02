"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1396],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||i;return r?n.createElement(u,o(o({ref:t},c),{},{components:r})):n.createElement(u,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80879:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n,a=r(83117),i=r(80102),o=(r(67294),r(3905)),p=["components"],l={title:"Manage incremental refresh reports",description:"You can use REST\u202fAPI requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service."},s=void 0,c={unversionedId:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report/manage-incremental-refresh-report",id:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report/manage-incremental-refresh-report",title:"Manage incremental refresh reports",description:"You can use REST\u202fAPI requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/manage-incremental-refresh-report.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report",slug:"/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/manage-incremental-refresh-report.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Manage incremental refresh reports",description:"You can use REST\u202fAPI requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update a transaction report's definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/update-transaction-report-definition"},next:{title:"Retrieve an IRR definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition"}},m={},d=[{value:"Important fields",id:"important-fields",level:2},{value:"<code>information</code>",id:"information",level:3},{value:"<code>targetCube</code>",id:"targetcube",level:3},{value:"<code>incrementType</code>",id:"incrementtype",level:3},{value:"<code>refreshType</code>",id:"refreshtype",level:3},{value:"<code>filter</code>",id:"filter",level:3},{value:"<code>template</code>",id:"template",level:3}],f=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),u={toc:d};function h(e){var t=e.components,r=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(f,{since:"2021 Update 6",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bc4cbadd-29e6-4426-85ff-30bcc0f20d60?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"Starting in MicroStrategy 2021 Update 6, you can use REST\u202fAPI requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition"},"Retrieve an IRR definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr"},"Create an IRR")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-an-irr-definition"},"Update an IRR definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties"},"Retrieve an IRR definition with advanced properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr-with-advanced-properties"},"Create an IRR with advanced properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-irr-advanced-properties"},"Update IRR advanced properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-applicable-properties-of-an-incremental-refresh-report"},"Retrieve an IRR's applicable properties"))),(0,o.kt)("h2",{id:"important-fields"},"Important fields"),(0,o.kt)("p",null,"This section outlines the important fields in the API response body defined for an Incremental Refresh Report."),(0,o.kt)("h3",{id:"information"},(0,o.kt)("inlineCode",{parentName:"h3"},"information")),(0,o.kt)("p",null,"Stores the basic information for the Incremental Refresh Report including ",(0,o.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dateModified"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"versionId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryLocale"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subType"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,o.kt)("p",null,"For Incremental Refresh Report, ",(0,o.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"report_increment_refresh"),"."),(0,o.kt)("h3",{id:"targetcube"},(0,o.kt)("inlineCode",{parentName:"h3"},"targetCube")),(0,o.kt)("p",null,"Stores the ",(0,o.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subType"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," for the target cube that the Incremental Refresh Report is built on. This is required when creating a new Incremental Refresh Report."),(0,o.kt)("p",null,"For target cube, ",(0,o.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"report_cube"),"."),(0,o.kt)("h3",{id:"incrementtype"},(0,o.kt)("inlineCode",{parentName:"h3"},"incrementType")),(0,o.kt)("p",null,"Specifies the incremental type for an Incremental Refresh Report, which can only be ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"report"),"."),(0,o.kt)("h3",{id:"refreshtype"},(0,o.kt)("inlineCode",{parentName:"h3"},"refreshType")),(0,o.kt)("p",null,"Specifies the refresh type for an Incremental Refresh Report, which can only be ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update_only"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"replace"),"."),(0,o.kt)("p",null,"The replace ",(0,o.kt)("inlineCode",{parentName:"p"},"refreshType")," is only supported for the ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementType")," filter of the Incremental Refresh Report."),(0,o.kt)("h3",{id:"filter"},(0,o.kt)("inlineCode",{parentName:"h3"},"filter")),(0,o.kt)("p",null,"Stores the information for the filter used in the Incremental Refresh Report, which has the same structure as a filter object."),(0,o.kt)("p",null,"An Incremental Refresh Report filter is presented in the following formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text"),": A human readable, but non-parsable text, describing a filter's qualification."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tree"),": A tree data structure fully defining the filter's qualification."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokens"),": A list of parsed tokens that define a filter's qualification. Note that generating tokens requires additional time.")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showFilterTokens")," is omitted or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", only ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tree")," formats are returned."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showFilterTokens")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", all ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tree"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," formats are returned."),(0,o.kt)("h3",{id:"template"},(0,o.kt)("inlineCode",{parentName:"h3"},"template")),(0,o.kt)("p",null,"Stores the information of the template used in the Incremental Refresh Report, which includes rows, columns and pageBy."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementType")," of the Incremental Refresh Report is ",(0,o.kt)("inlineCode",{parentName:"p"},"filter"),", it\u2019s not allowed to modify the template."),(0,o.kt)("p",null,"For more information about the Modeling service, see ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}h.isMDXComponent=!0}}]);