"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2928],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=o,d=p["".concat(s,".").concat(u)]||p[u]||f[u]||a;return r?n.createElement(d,c(c({ref:t},m),{},{components:r})):n.createElement(d,c({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76452:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var n,o=r(83117),a=r(80102),c=(r(67294),r(3905)),i=["components"],s={title:"Manage fact objects",sidebar_label:"Manage fact objects",description:"You can use REST API requests to retrieve, create and update fact objects through the Modeling service."},l=void 0,m={unversionedId:"common-workflows/modeling/manage-fact-objects/manage-fact-objects",id:"common-workflows/modeling/manage-fact-objects/manage-fact-objects",title:"Manage fact objects",description:"You can use REST API requests to retrieve, create and update fact objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-fact-objects/manage-fact-objects.md",sourceDirName:"common-workflows/modeling/manage-fact-objects",slug:"/common-workflows/modeling/manage-fact-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-fact-objects/manage-fact-objects.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1685725225,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Manage fact objects",sidebar_label:"Manage fact objects",description:"You can use REST API requests to retrieve, create and update fact objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a list of objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/retrieve-a-list-of-objects"},next:{title:"Retrieve a fact's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition"}},f={},p=[],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),d={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(u,{since:"2021 Update 1",mdxType:"Available"}),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,c.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d9b59a86-7b75-4cea-be1c-941dae6f4b08?ctx=documentation"},"REST API Playground"),"."),(0,c.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,c.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,c.kt)("p",null,"You can use REST API requests to retrieve, create and update fact objects through the Modeling service:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition"},"Retrieve a fact's definition")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition-within-a-changeset"},"Retrieve a fact's definition within a changeset")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/create-a-fact-object"},"Create a fact object")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/update-a-fact-object"},"Update a fact object"))),(0,c.kt)("p",null,"For more information about the Modeling service, see ",(0,c.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}g.isMDXComponent=!0}}]);