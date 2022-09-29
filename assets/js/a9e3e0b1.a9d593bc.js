"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3348],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7251:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],c={title:"REST API architecture",description:"The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol."},s=void 0,l={unversionedId:"getting-started/rest-api-architecture",id:"getting-started/rest-api-architecture",title:"REST API architecture",description:"The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol.",source:"@site/docs/getting-started/rest-api-architecture.md",sourceDirName:"getting-started",slug:"/getting-started/rest-api-architecture",permalink:"/rest-api-docs/getting-started/rest-api-architecture",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/getting-started/rest-api-architecture.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664482211,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"REST API architecture",description:"The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol."},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/rest-api-docs/getting-started/"},next:{title:"Configure clustered environments",permalink:"/rest-api-docs/getting-started/configure-clustered-environments"}},u={},p=[],f={toc:p};function m(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol. You can use the REST framework to perform actions such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/authentication"},"Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/retrieve-data-from-the-intelligence-server/"},"Retrieve data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/configure-clustered-environments"},"Configuring a clustered environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../common-workflows/manage-user-and-user-groups/"},"User management"))),(0,i.kt)("p",null,"The REST framework is scalable, allowing you to configure a clustered environment that supports multiple instances of REST servers communicating with an Intelligence Server cluster."),(0,i.kt)("p",null,"The REST Framework layer is built on top of the existing WebObjects and XML API layers. It provides a comprehensive set of APIs that allow developers to quickly and easily customize MicroStrategy BI functionality."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"REST Architecture",src:r(194).Z,width:"624",height:"426"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"REST Framework Layer: The REST Framework Layer exposes an interface to fetch and manipulate data using HTTP requests such as GET, POST, DELETE, and so on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/WebSDK/Content/topics/webarch/Web_Objects_Layer.htm"},"WebObjects Layer"),": The BI function layer that contains the Java classes that interpret and initiate distinct units of BI functionality (such as pivot, sort, subtotal, drill, and so on). This layer also constructs the aggregated XML API calls to the XML API layer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/WebSDK/Content/topics/webarch/XML_API_Layer.htm"},"XML API Layer"),": The communication objects layer that manages the high-throughput XML communication that accesses Intelligence Server methods.")))}m.isMDXComponent=!0},194:function(e,t,r){t.Z=r.p+"assets/images/REST_architecture-1745a74162be1800bc29753d9fea066b.png"}}]);