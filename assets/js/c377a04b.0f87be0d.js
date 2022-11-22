"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6971],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||n;return r?i.createElement(f,o(o({ref:t},d),{},{components:r})):i.createElement(f,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1269:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=r(3117),a=r(102),n=(r(7294),r(3905)),o=["components"],s={title:"Introduction to REST API",date:"Last Modified",slug:"/",description:"The MicroStrategy REST API is a RESTful application that uses HTTP requests such as POST, DELETE, and GET. It is designed to help developers build data-driven client applications quickly and easily. It does this by providing light-weight JSON data that is easy to consume because it includes raw data without direct formatting. Developers can use the MicroStrategy REST API programmatically in their own code, or in a tool like curl."},l=void 0,c={unversionedId:"index",id:"index",title:"Introduction to REST API",description:"The MicroStrategy REST API is a RESTful application that uses HTTP requests such as POST, DELETE, and GET. It is designed to help developers build data-driven client applications quickly and easily. It does this by providing light-weight JSON data that is easy to consume because it includes raw data without direct formatting. Developers can use the MicroStrategy REST API programmatically in their own code, or in a tool like curl.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/rest-api-docs/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/index.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1669135808,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"Introduction to REST API",date:"Last Modified",slug:"/",description:"The MicroStrategy REST API is a RESTful application that uses HTTP requests such as POST, DELETE, and GET. It is designed to help developers build data-driven client applications quickly and easily. It does this by providing light-weight JSON data that is easy to consume because it includes raw data without direct formatting. Developers can use the MicroStrategy REST API programmatically in their own code, or in a tool like curl."},sidebar:"tutorialSidebar",next:{title:"What's new",permalink:"/rest-api-docs/whats-new"}},d={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"REST API families",id:"rest-api-families",level:2},{value:"Common REST API workflows",id:"common-rest-api-workflows",level:2},{value:"REST API samples",id:"rest-api-samples",level:2}],p={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The MicroStrategy REST API is a RESTful application that uses HTTP requests such as POST, DELETE, and GET. It is designed to help developers build data-driven client applications quickly and easily. It does this by providing light-weight JSON data that is easy to consume because it includes raw data without direct formatting. Developers can use the MicroStrategy REST API programmatically in their own code, or in a tool like curl."),(0,n.kt)("p",null,"The following topics are designed to help you understand and use the MicroStrategy REST API."),(0,n.kt)("h2",{id:"getting-started"},(0,n.kt)("a",{parentName:"h2",href:"/rest-api-docs/getting-started/"},"Getting started")),(0,n.kt)("p",null,"Quick overviews introduce you to the MicroStrategy REST framework, configuring clustered environments, handling exceptions, and the MicroStrategy REST API Explorer, which serves as the REST API reference guide."),(0,n.kt)("h2",{id:"rest-api-families"},(0,n.kt)("a",{parentName:"h2",href:"/rest-api-docs/rest-api-families"},"REST API families")),(0,n.kt)("p",null,"MicroStrategy REST APIs are grouped into API families. These families represent functionality, such as Authentication or Browsing, or categories, such as Cubes or Security Roles."),(0,n.kt)("h2",{id:"common-rest-api-workflows"},(0,n.kt)("a",{parentName:"h2",href:"/rest-api-docs/common-workflows/"},"Common REST API workflows")),(0,n.kt)("p",null,"Descriptions and quick start guides are provided for common MicroStrategy REST API workflows, such as authentication, folder browsing, filtering data, searching, retrieving data from the Intelligence Server (referred to as the JSON Data API), uploading external data (referred to as the Push Data API), and manage attributes, relationships, facts, tables, filters, prompts, derived elements, and security filters through the Modeling service."),(0,n.kt)("h2",{id:"rest-api-samples"},(0,n.kt)("a",{parentName:"h2",href:"/rest-api-docs/microstrategy-rest-api-samples/"},"REST API samples")),(0,n.kt)("p",null,"REST API samples illustrate how REST API calls work with ReactJS, and the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch."))}h.isMDXComponent=!0}}]);