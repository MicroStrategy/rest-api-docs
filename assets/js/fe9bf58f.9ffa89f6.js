"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2719],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7512:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],c={title:"Manage filter objects",description:"You can use REST API requests to retrieve, create and update filter objects through the Modeling service."},s=void 0,l={unversionedId:"common-workflows/manage-filter-objects/manage-filter-objects",id:"common-workflows/manage-filter-objects/manage-filter-objects",title:"Manage filter objects",description:"You can use REST API requests to retrieve, create and update filter objects through the Modeling service.",source:"@site/docs/common-workflows/manage-filter-objects/manage-filter-objects.md",sourceDirName:"common-workflows/manage-filter-objects",slug:"/common-workflows/manage-filter-objects/",permalink:"/rest-api-docs/common-workflows/manage-filter-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-filter-objects/manage-filter-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1669135808,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"Manage filter objects",description:"You can use REST API requests to retrieve, create and update filter objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Delete a specific fence",permalink:"/rest-api-docs/common-workflows/manage-fences/delete-specific-fence"},next:{title:"Retrieve a filter's definition",permalink:"/rest-api-docs/common-workflows/manage-filter-objects/retrieve-a-filters-definition"}},f={},p=[],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c51122ec-725f-4841-aa4f-1ba8f88249ff?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"You can use REST API requests to retrieve, create and update filter objects through the Modeling service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-filter-objects/retrieve-a-filters-definition"},"Retrieve a filter's definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset"},"Retrieve a filter's definition within a changeset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-filter-objects/create-a-filter-object"},"Create a filter object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-filter-objects/create-a-filter-object-with-a-custom-expression"},"Create a filter object with a custom expression")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-filter-objects/update-a-filters-definition"},"Update a filter's definition"))),(0,a.kt)("p",null,"For more information about the Modeling service, see ",(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}m.isMDXComponent=!0}}]);