"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8654],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=s(r),u=a,f=l["".concat(i,".").concat(u)]||l[u]||d[u]||o;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=l;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},60473:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return l}});var n,a=r(83117),o=r(80102),c=(r(67294),r(3905)),p=["components"],i={title:"Manage project advanced properties",description:"You can use REST API requests to manage project."},s=void 0,m={unversionedId:"common-workflows/analytics/project-management/project-advanced-properties-management/project-advanced-properties-management",id:"common-workflows/analytics/project-management/project-advanced-properties-management/project-advanced-properties-management",title:"Manage project advanced properties",description:"You can use REST API requests to manage project.",source:"@site/docs/common-workflows/analytics/project-management/project-advanced-properties-management/project-advanced-properties-management.md",sourceDirName:"common-workflows/analytics/project-management/project-advanced-properties-management",slug:"/common-workflows/analytics/project-management/project-advanced-properties-management/",permalink:"/rest-api-docs/common-workflows/analytics/project-management/project-advanced-properties-management/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/project-management/project-advanced-properties-management/project-advanced-properties-management.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Manage project advanced properties",description:"You can use REST API requests to manage project."},sidebar:"tutorialSidebar",previous:{title:"Manage project settings",permalink:"/rest-api-docs/common-workflows/analytics/project-management/manage-project-settings"},next:{title:"Get applicable properties for a project",permalink:"/rest-api-docs/common-workflows/analytics/project-management/project-advanced-properties-management/get-project-applicable-advanced-properties"}},d={},l=[],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),f={toc:l};function g(e){var t=e.components,r=(0,o.Z)(e,p);return(0,c.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(u,{since:"2021 Update 8",mdxType:"Available"}),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,c.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d30bab86-7c75-4b05-88d2-35ca2091e983?ctx=documentation"},"REST API Playground"),"."),(0,c.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,c.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,c.kt)("p",null,"You can use REST API requests to manage project."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/project-management/project-advanced-properties-management/get-project-applicable-advanced-properties"},"Get project's applicable advanced properties")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/project-management/project-advanced-properties-management/get-project-with-advanced-properties"},"Get project's definition and advanced properties")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/project-management/project-advanced-properties-management/update-project-advanced-property"},"Update project's advanced property"))))}g.isMDXComponent=!0}}]);