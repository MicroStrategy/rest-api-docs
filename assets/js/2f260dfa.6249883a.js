"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7783],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=m(n),u=o,d=f["".concat(c,".").concat(u)]||f[u]||p[u]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var r,o=n(83117),a=n(80102),i=(n(67294),n(3905)),s=["components"],c={title:"Manage transformation objects",description:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service."},m=void 0,l={unversionedId:"common-workflows/modeling/manage-transformation-objects/manage-transformation-objects",id:"common-workflows/modeling/manage-transformation-objects/manage-transformation-objects",title:"Manage transformation objects",description:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-transformation-objects/manage-transformation-objects.md",sourceDirName:"common-workflows/modeling/manage-transformation-objects",slug:"/common-workflows/modeling/manage-transformation-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-transformation-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-transformation-objects/manage-transformation-objects.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1685725225,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Manage transformation objects",description:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update a partition mapping table's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-partition-mapping-tables-definition"},next:{title:"Retrieve a transformation's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-transformation-objects/retrieve-a-transformations-definition"}},p={},f=[],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),d={toc:f};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 5",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-f3672b04-f9fa-4eab-8077-903d754d1797?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"You can use REST API requests to retrieve, create, and update table objects through the Modeling service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-transformation-objects/retrieve-a-transformations-definition"},"Retrieve a transformation's definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-transformation-objects/create-a-transformation-object"},"Create a transformation object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-transformation-objects/update-a-transformations-definition"},"Update a transformation's definition"))),(0,i.kt)("p",null,"For more information about the Modeling service, see ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}g.isMDXComponent=!0}}]);