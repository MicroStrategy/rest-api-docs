"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1178],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={title:"Workflow Sample - Delete a Runtime",sidebar_label:"Delete a Runtime",description:"This workflow sample demonstrates how to delete an existing runtime object through the REST API."},u=void 0,m={unversionedId:"common-workflows/manage-runtime-objects/delete-a-runtime",id:"common-workflows/manage-runtime-objects/delete-a-runtime",title:"Workflow Sample - Delete a Runtime",description:"This workflow sample demonstrates how to delete an existing runtime object through the REST API.",source:"@site/docs/common-workflows/manage-runtime-objects/delete-a-runtime.md",sourceDirName:"common-workflows/manage-runtime-objects",slug:"/common-workflows/manage-runtime-objects/delete-a-runtime",permalink:"/rest-api-docs/common-workflows/manage-runtime-objects/delete-a-runtime",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-runtime-objects/delete-a-runtime.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Delete a Runtime",sidebar_label:"Delete a Runtime",description:"This workflow sample demonstrates how to delete an existing runtime object through the REST API."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a Runtime Definition",permalink:"/rest-api-docs/common-workflows/manage-runtime-objects/retrieve-a-runtime-definition"},next:{title:"Retrieve all Runtimes",permalink:"/rest-api-docs/common-workflows/manage-runtime-objects/retrieve-all-runtimes"}},s={},c=[{value:"Workflow",id:"workflow",level:2},{value:"Delete an existing runtime using DELETE /api/runtimes/{id}",id:"delete-an-existing-runtime-using-delete-apiruntimesid",level:3}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to delete an existing runtime object through the REST API."),(0,i.kt)("p",null,"You want to delete the runtime with ID ",(0,i.kt)("inlineCode",{parentName:"p"},"E6C5BF4C483FF06313BEE19EAD39978B"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("h3",{id:"delete-an-existing-runtime-using-delete-apiruntimesid"},"Delete an existing runtime using ",(0,i.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes/deleteScriptRuntime"},"DELETE /api/runtimes/{id}")),(0,i.kt)("p",null,"In this step, you are deleting the runtime with ID ",(0,i.kt)("inlineCode",{parentName:"p"},"E6C5BF4C483FF06313BEE19EAD39978B"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,i.kt)("p",null,"Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  curl -X 'DELETE' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/runtimes/E6C5BF4C483FF06313BEE19EAD39978B' \\\n  -H 'accept: */*' \\\n  -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch'\n")),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Sample Response Code: 204"))}d.isMDXComponent=!0}}]);