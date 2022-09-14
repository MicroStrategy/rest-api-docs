"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2719],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),m=s(r),p=o,d=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7512:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],c={title:"Manage Filter Objects",description:"You can use REST API requests to retrieve, create and update filter objects through the Modeling service."},l=void 0,s={unversionedId:"common-workflows/manage-filter-objects/manage-filter-objects",id:"common-workflows/manage-filter-objects/manage-filter-objects",title:"Manage Filter Objects",description:"You can use REST API requests to retrieve, create and update filter objects through the Modeling service.",source:"@site/docs/common-workflows/manage-filter-objects/manage-filter-objects.md",sourceDirName:"common-workflows/manage-filter-objects",slug:"/common-workflows/manage-filter-objects/",permalink:"/common-workflows/manage-filter-objects/",draft:!1,editUrl:"https://undefined/undefined/restapi-docs/tree/main/docs/common-workflows/manage-filter-objects/manage-filter-objects.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663186539,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Manage Filter Objects",description:"You can use REST API requests to retrieve, create and update filter objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Delete a specific fence",permalink:"/common-workflows/manage-fences/delete-specific-fence"},next:{title:"Retrieve a Filter's Definition",permalink:"/common-workflows/manage-filter-objects/retrieve-a-filters-definition"}},f={},u=[],m={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c51122ec-725f-4841-aa4f-1ba8f88249ff?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"You can use REST API requests to retrieve, create and update filter objects through the Modeling service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/common-workflows/manage-filter-objects/retrieve-a-filters-definition"},"Retrieve a Filter's Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/common-workflows/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset"},"Retrieve a Filter's Definition within a Changeset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/common-workflows/manage-filter-objects/create-a-filter-object"},"Create a Filter Object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/common-workflows/manage-filter-objects/create-a-filter-object-with-a-custom-expression"},"Create a Filter Object with a Custom Expression")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/common-workflows/manage-filter-objects/update-a-filters-definition"},"Update a Filter's Definition"))),(0,a.kt)("p",null,"For more information about the Modeling service, see ",(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}p.isMDXComponent=!0}}]);