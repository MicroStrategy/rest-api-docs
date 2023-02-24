"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1294],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3737:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n,a=r(3117),o=r(102),c=(r(7294),r(3905)),i=["components"],l={title:"Manage calendar objects",description:"You can use REST API requests to retrieve, create, and replace calendar objects through the Modeling service."},s=void 0,d={unversionedId:"common-workflows/modeling/manage-calendar-objects/manage-calendar-objects",id:"common-workflows/modeling/manage-calendar-objects/manage-calendar-objects",title:"Manage calendar objects",description:"You can use REST API requests to retrieve, create, and replace calendar objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-calendar-objects/manage-calendar-objects.md",sourceDirName:"common-workflows/modeling/manage-calendar-objects",slug:"/common-workflows/modeling/manage-calendar-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-calendar-objects/manage-calendar-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Manage calendar objects",description:"You can use REST API requests to retrieve, create, and replace calendar objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update a base formula's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset"},next:{title:"Retrieve a list of calendars' definitions",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-list-of-calendars-definitions"}},m={},p=[],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),f={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,c.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b40233c5-3269-43b2-bc9e-e44f6ad8d432?ctx=documentation"},"REST API Playground"),"."),(0,c.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,c.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,c.kt)("p",null,"You can use REST API requests to retrieve, create, and replace calendar objects through the Modeling service."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-list-of-calendars-definitions"},"Retrieve a list of calendars' definitions")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-calendar-definition"},"Retrieve a calendar's definition")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/create-a-calendar-object"},"Create a calendar object")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object"},"Update a calendar object"))),(0,c.kt)("p",null,"For more information about the Modeling service, see ",(0,c.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}g.isMDXComponent=!0}}]);