"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6931],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),u=l(r),p=a,f=u["".concat(s,".").concat(p)]||u[p]||h[p]||o;return r?n.createElement(f,c(c({ref:t},i),{},{components:r})):n.createElement(f,c({ref:t},i))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,c[1]=m;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6879:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return h}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),c=["components"],m={title:"Manage the Schema",description:"You can use REST API requests to retrieve the schema lock, lock and unlock the schema, and reload (update) the schema."},s=void 0,l={unversionedId:"common-workflows/manage-the-schema/manage-the-schema",id:"common-workflows/manage-the-schema/manage-the-schema",title:"Manage the Schema",description:"You can use REST API requests to retrieve the schema lock, lock and unlock the schema, and reload (update) the schema.",source:"@site/docs/common-workflows/manage-the-schema/manage-the-schema.md",sourceDirName:"common-workflows/manage-the-schema",slug:"/common-workflows/manage-the-schema/",permalink:"/common-workflows/manage-the-schema/",draft:!1,editUrl:"https://undefined/undefined/restapi-docs/tree/main/docs/common-workflows/manage-the-schema/manage-the-schema.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663186539,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Manage the Schema",description:"You can use REST API requests to retrieve the schema lock, lock and unlock the schema, and reload (update) the schema."},sidebar:"tutorialSidebar",previous:{title:"Export to PDF",permalink:"/common-workflows/export-to-pdf"},next:{title:"Retrieve the Schema Lock",permalink:"/common-workflows/manage-the-schema/retrieve-the-schema-lock"}},i={},h=[],u={toc:h};function p(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-8f48dce2-e826-4f45-98fb-c3ceed64b670?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"You can use REST API requests to retrieve the schema lock, lock and unlock the schema, and reload (update) the schema."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/common-workflows/manage-the-schema/retrieve-the-schema-lock"},"Retrieve the Schema Lock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/common-workflows/manage-the-schema/lock-the-schema"},"Lock the Schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/common-workflows/manage-the-schema/unlock-the-schema"},"Unlock the Schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/common-workflows/manage-the-schema/reload-the-schema-synchronously"},"Reload the Schema Synchronously")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/common-workflows/manage-the-schema/reload-the-schema-asynchronously"},"Reload the Schema Asynchronously"))))}p.isMDXComponent=!0}}]);