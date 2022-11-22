"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6362],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},268:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={title:"Manage attribute relationships",description:"You can use REST API requests to retrieve, create and update an attribute's relationship through the Modeling service."},u=void 0,p={unversionedId:"common-workflows/manage-attribute-relationships/manage-attribute-relationships",id:"common-workflows/manage-attribute-relationships/manage-attribute-relationships",title:"Manage attribute relationships",description:"You can use REST API requests to retrieve, create and update an attribute's relationship through the Modeling service.",source:"@site/docs/common-workflows/manage-attribute-relationships/manage-attribute-relationships.md",sourceDirName:"common-workflows/manage-attribute-relationships",slug:"/common-workflows/manage-attribute-relationships/",permalink:"/rest-api-docs/common-workflows/manage-attribute-relationships/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-attribute-relationships/manage-attribute-relationships.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1669135808,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"Manage attribute relationships",description:"You can use REST API requests to retrieve, create and update an attribute's relationship through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update an attribute's definition",permalink:"/rest-api-docs/common-workflows/manage-attribute-objects/update-an-attributes-definition"},next:{title:"Retrieve an attribute's relationships",permalink:"/rest-api-docs/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships"}},c={},l=[],m={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-697327d8-4eaa-48ef-9e75-3daa23d4860f?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"You can use REST API requests to retrieve, create and update an attribute's relationship through the Modeling service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships"},"Retrieve an attribute's relationships")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset"},"Retrieve an attribute's relationships within a changeset")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-attribute-relationships/update-an-attributes-relationships"},"Update an attribute's relationships"))),(0,o.kt)("p",null,"For more information about the Modeling service, see ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}d.isMDXComponent=!0}}]);