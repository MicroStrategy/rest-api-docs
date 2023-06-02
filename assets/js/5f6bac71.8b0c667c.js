"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3022],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),s=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(m,".").concat(d)]||u[d]||p[d]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2271:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"Manage timezone objects",description:"You can use REST API requests to retrieve, create, and replace timezone objects through the Modeling service."},m=void 0,s={unversionedId:"common-workflows/modeling/manage-time-zone-objects/manage-time-zone-objects",id:"common-workflows/modeling/manage-time-zone-objects/manage-time-zone-objects",title:"Manage timezone objects",description:"You can use REST API requests to retrieve, create, and replace timezone objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-time-zone-objects/manage-time-zone-objects.md",sourceDirName:"common-workflows/modeling/manage-time-zone-objects",slug:"/common-workflows/modeling/manage-time-zone-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-time-zone-objects/manage-time-zone-objects.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1685725225,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Manage timezone objects",description:"You can use REST API requests to retrieve, create, and replace timezone objects through the Modeling service."}},l={},p=[],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-dcd45e43-c8f8-4198-9fa6-c0e3a22c0aaf?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"You can use REST API requests to retrieve, create, and replace timezone objects through the Modeling service."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/retrieve-a-list-of-time-zones-definitions"},"Retrieve a list of all available time zones' definitions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/retrieve-a-time-zones-definition"},"Retrieve a timezone's definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object"},"Create a timezone object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/update-a-time-zone-object"},"Update a timezone object"))),(0,a.kt)("p",null,"For more information about the Modeling service, see ",(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}d.isMDXComponent=!0}}]);