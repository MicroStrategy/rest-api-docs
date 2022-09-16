"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7633],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(r),f=n,d=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return r?o.createElement(d,i(i({ref:t},l),{},{components:r})):o.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3918:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var o=r(3117),n=r(102),a=(r(7294),r(3905)),i=["components"],c={title:"Manage Time Zone Objects",description:"You can use REST API requests to retrieve, create, and replace time zone objects through the Modeling service."},s=void 0,m={unversionedId:"common-workflows/manage-time-zone-objects/manage-time-zone-objects",id:"common-workflows/manage-time-zone-objects/manage-time-zone-objects",title:"Manage Time Zone Objects",description:"You can use REST API requests to retrieve, create, and replace time zone objects through the Modeling service.",source:"@site/docs/common-workflows/manage-time-zone-objects/manage-time-zone-objects.md",sourceDirName:"common-workflows/manage-time-zone-objects",slug:"/common-workflows/manage-time-zone-objects/",permalink:"/rest-api-docs/common-workflows/manage-time-zone-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-time-zone-objects/manage-time-zone-objects.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1663337315,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{title:"Manage Time Zone Objects",description:"You can use REST API requests to retrieve, create, and replace time zone objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"User Hierarchy Import Parameters",permalink:"/rest-api-docs/common-workflows/manage-user-hierarchy-objects/user-hierarchy-import-parameters"},next:{title:"Retrieve a List of Time Zones' Definitions",permalink:"/rest-api-docs/common-workflows/manage-time-zone-objects/retrieve-a-list-of-time-zones-definitions"}},l={},p=[],u={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-dcd45e43-c8f8-4198-9fa6-c0e3a22c0aaf?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"You can use REST API requests to retrieve, create, and replace time zone objects through the Modeling service."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-time-zone-objects/retrieve-a-list-of-time-zones-definitions"},"Retrieve a List of All Available Time Zones' Definitions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-time-zone-objects/retrieve-a-time-zones-definition"},"Retrieve a Time Zone's Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-time-zone-objects/create-a-time-zone-object"},"Create a Time Zone Object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-time-zone-objects/update-a-time-zone-object"},"Update a Time Zone Object"))),(0,a.kt)("p",null,"For more information about the Modeling service, see ",(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}f.isMDXComponent=!0}}]);