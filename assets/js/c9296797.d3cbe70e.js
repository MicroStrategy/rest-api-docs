"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2703],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=m(r),p=o,d=l["".concat(c,".").concat(p)]||l[p]||f[p]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},3782:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return f}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={title:"Manage Transformation Objects",description:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service."},c=void 0,m={unversionedId:"common-workflows/manage-transformation-objects/manage-transformation-objects",id:"common-workflows/manage-transformation-objects/manage-transformation-objects",title:"Manage Transformation Objects",description:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service.",source:"@site/docs/common-workflows/manage-transformation-objects/manage-transformation-objects.md",sourceDirName:"common-workflows/manage-transformation-objects",slug:"/common-workflows/manage-transformation-objects/",permalink:"/common-workflows/manage-transformation-objects/",draft:!1,editUrl:"https://undefined/undefined/restapi-docs/tree/main/docs/common-workflows/manage-transformation-objects/manage-transformation-objects.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663186539,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Manage Transformation Objects",description:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update an Attribute's Relationships",permalink:"/common-workflows/manage-attribute-relationships/update-an-attributes-relationships"},next:{title:"Retrieve a Transformation's Definition",permalink:"/common-workflows/manage-transformation-objects/retrieve-a-transformations-definition"}},u={},f=[],l={toc:f};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-f3672b04-f9fa-4eab-8077-903d754d1797?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"You can use REST API requests to retrieve, create, and update table objects through the Modeling service."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/common-workflows/manage-transformation-objects/retrieve-a-transformations-definition"},"Retrieve a Transformation's Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/common-workflows/manage-transformation-objects/create-a-transformation-object"},"Create a Transformation Object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/common-workflows/manage-transformation-objects/update-a-transformations-definition"},"Update a Transformation's Definition"))),(0,a.kt)("p",null,"For more information about the Modeling service, see ",(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}p.isMDXComponent=!0}}]);