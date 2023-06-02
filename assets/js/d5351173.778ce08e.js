"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8523],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var r,o=n(83117),a=n(80102),i=(n(67294),n(3905)),s=["components"],l={title:"Retrieve all runtimes",sidebar_label:"Retrieve all runtimes",description:"This workflow sample demonstrates how to list all the runtime objects."},u=void 0,m={unversionedId:"common-workflows/administration/manage-runtime-objects/retrieve-all-runtimes",id:"common-workflows/administration/manage-runtime-objects/retrieve-all-runtimes",title:"Retrieve all runtimes",description:"This workflow sample demonstrates how to list all the runtime objects.",source:"@site/docs/common-workflows/administration/manage-runtime-objects/retrieve-all-runtimes.md",sourceDirName:"common-workflows/administration/manage-runtime-objects",slug:"/common-workflows/administration/manage-runtime-objects/retrieve-all-runtimes",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/retrieve-all-runtimes",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-runtime-objects/retrieve-all-runtimes.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1685725225,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Retrieve all runtimes",sidebar_label:"Retrieve all runtimes",description:"This workflow sample demonstrates how to list all the runtime objects."},sidebar:"tutorialSidebar",previous:{title:"Manage runtimes",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/manage-runtimes"},next:{title:"Retrieve a runtime definition",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/retrieve-a-runtime-definition"}},c={},p=[{value:"Workflow",id:"workflow",level:2},{value:"Retrieve all runtimes GET /api/runtimes",id:"retrieve-all-runtimes-get-apiruntimes",level:3}],d=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:p};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021 Update 7",mdxType:"Available"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to list all the runtime objects."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("h3",{id:"retrieve-all-runtimes-get-apiruntimes"},"Retrieve all runtimes ",(0,i.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes/listRuntimes"},"GET /api/runtimes")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X "GET" \\\n  "http://demo.microstrategy.com/MicroStrategyLibrary/api/runtimes" \\\n  -H "accept: application/json" \\\n  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can get al the runtime objects in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "runtimes": [\n    {\n      "name": "(Default) MicroStrategy",\n      "id": "0F35652CA7D041978BF0CBCB67531203",\n      "type": 80,\n      "description": "A default server configuration used to execute Python scripts on IServer. It includes the latest versions of both Python and mstrio packages, as well as a default network access configuration. Allows for network access customization.",\n      "subtype": 20480,\n      "dateCreated": "2022-05-26T03:16:00.000+0000",\n      "dateModified": "2022-08-22T11:03:56.000+0000",\n      "version": "1E1F3F6849AE565A366A678882ED2F37",\n      "acg": 255,\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "acl": [\n        {\n          "deny": false,\n          "type": 1,\n          "rights": 1,\n          "trusteeId": "294DEDC011D2F1D56000D98E67019608",\n          "trusteeName": "Public / Guest",\n          "trusteeType": 34,\n          "trusteeSubtype": 8705,\n          "inheritable": false\n        },\n        {\n          "deny": false,\n          "type": 1,\n          "rights": 255,\n          "trusteeId": "54F3D26011D2896560009A8E67019608",\n          "trusteeName": "Administrator",\n          "trusteeType": 34,\n          "trusteeSubtype": 8704,\n          "inheritable": false\n        }\n      ],\n      "packages": [\n        {\n          "name": "mstrio-py",\n          "version": "11.3.6.103",\n          "description": "",\n          "status": "installed"\n        }\n      ],\n      "runtimeVersion": "3.10.5",\n      "execTimeout": 600,\n      "others": "",\n      "status": "ready",\n      "minCachedInstances": 1,\n      "maxCachedInstances": 2\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 200"))}y.isMDXComponent=!0}}]);