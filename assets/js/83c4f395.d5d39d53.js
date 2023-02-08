"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1794],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(m,".").concat(u)]||d[u]||c[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2368:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return d}});var n,a=r(3117),o=r(102),i=(r(7294),r(3905)),l=["components"],m={title:"Manage drill maps",description:"You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service."},s=void 0,p={unversionedId:"common-workflows/modeling/manage-drill-maps/manage-drill-maps",id:"common-workflows/modeling/manage-drill-maps/manage-drill-maps",title:"Manage drill maps",description:"You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-drill-maps/manage-drill-maps.md",sourceDirName:"common-workflows/modeling/manage-drill-maps",slug:"/common-workflows/modeling/manage-drill-maps/",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-drill-maps/manage-drill-maps.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Manage drill maps",description:"You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Format samples for derived elements",permalink:"/rest-api-docs/common-workflows/modeling/manage-derived-element-objects/format-samples"},next:{title:"Retrieve a drill map definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition"}},c={},d=[],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:d};function g(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 6",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-675653f8-369b-425d-b730-a43e11b584bb?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"Starting in MicroStrategy 2021 Update 6, you can use REST API requests to retrieve, create, and update drill map objects through the Modeling service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition"},"Retrieve a drill map definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/create-a-drill-map"},"Create a drill map")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/update-a-drill-map"},"Update a drill map")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/retrieve-a-list-of-objects"},"Retrieve a list of objects"))),(0,i.kt)("p",null,"For more information about the Modeling service, see ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}g.isMDXComponent=!0}}]);