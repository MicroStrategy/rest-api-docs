"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5332],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,f=d["".concat(l,".").concat(c)]||d[c]||p[c]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r,i=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],l={title:"Retrieve a runtime definition",sidebar_label:"Retrieve a runtime definition",description:"This workflow sample demonstrates how to retrieve an existing runtime object through the REST API."},m=void 0,u={unversionedId:"common-workflows/administration/manage-runtime-objects/retrieve-a-runtime-definition",id:"common-workflows/administration/manage-runtime-objects/retrieve-a-runtime-definition",title:"Retrieve a runtime definition",description:"This workflow sample demonstrates how to retrieve an existing runtime object through the REST API.",source:"@site/docs/common-workflows/administration/manage-runtime-objects/retrieve-a-runtime-definition.md",sourceDirName:"common-workflows/administration/manage-runtime-objects",slug:"/common-workflows/administration/manage-runtime-objects/retrieve-a-runtime-definition",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/retrieve-a-runtime-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-runtime-objects/retrieve-a-runtime-definition.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Retrieve a runtime definition",sidebar_label:"Retrieve a runtime definition",description:"This workflow sample demonstrates how to retrieve an existing runtime object through the REST API."},sidebar:"tutorialSidebar",previous:{title:"Retrieve all runtimes",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/retrieve-all-runtimes"},next:{title:"Create a runtime",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/create-a-runtime"}},p={},d=[{value:"Retrieve a runtime definition",id:"retrieve-a-runtime-definition",level:2},{value:"Sample request header",id:"sample-request-header",level:3},{value:"Sample request body",id:"sample-request-body",level:3},{value:"Sample curl",id:"sample-curl",level:3},{value:"Sample response body",id:"sample-response-body",level:3},{value:"Response code",id:"response-code",level:3}],c=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),f={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{since:"2021 Update 7",mdxType:"Available"}),(0,a.kt)("p",null,"You can use REST APIs to retrieve the definition of a runtime object."),(0,a.kt)("h2",{id:"retrieve-a-runtime-definition"},"Retrieve a runtime definition"),(0,a.kt)("p",null,"You want to get the definition of a runtime object. The object ID of the runtime is ",(0,a.kt)("inlineCode",{parentName:"p"},"E6C5BF4C483FF06313BEE19EAD39978B"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,a.kt)("p",null,"Retrieve the runtime\u2019s definition using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes/getScriptRuntime"},"GET /api/runtimes/{id}"),"."),(0,a.kt)("h3",{id:"sample-request-header"},"Sample request header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,a.kt)("h3",{id:"sample-request-body"},"Sample request body"),(0,a.kt)("p",null,"Empty"),(0,a.kt)("h3",{id:"sample-curl"},"Sample curl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/runtimes/E6C5BF4C483FF06313BEE19EAD39978B' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch'\n")),(0,a.kt)("h3",{id:"sample-response-body"},"Sample response body"),(0,a.kt)("p",null,"You can view the runtime definition in the body of the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test Runtime Modified",\n  "id": "E6C5BF4C483FF06313BEE19EAD39978B",\n  "type": 80,\n  "description": "string",\n  "subtype": 20480,\n  "dateCreated": "2022-08-31T07:29:53.000+0000",\n  "dateModified": "2022-09-01T03:53:14.000+0000",\n  "version": "F52B174548E08F9C0474F3BB727AA629",\n  "acg": 255,\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  },\n  "acl": [\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "54F3D26011D2896560009A8E67019608",\n      "trusteeName": "Administrator",\n      "trusteeType": 34,\n      "trusteeSubtype": 8704,\n      "inheritable": false\n    }\n  ],\n  "whitelist": ["10.10.10.0/24"],\n  "packages": [\n    {\n      "name": "string",\n      "version": "",\n      "description": "string",\n      "status": "not_installed",\n      "message": "Return code: 1."\n    }\n  ],\n  "resource": {\n    "cpu": "0.2",\n    "mem": 512\n  },\n  "runtimeVersion": "3.10.5",\n  "execTimeout": 600,\n  "others": "string",\n  "status": "error",\n  "minCachedInstances": 2,\n  "maxCachedInstances": 5\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Most of the fields in the response body are the definition of the runtime object. The only exception is the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," field, there are two ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," fields in the response body."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The top-level ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," in the response body indicates the overall status of the runtime, the possible values are ",(0,a.kt)("inlineCode",{parentName:"li"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ready"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"busy"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"packages[i].field")," means whether the package is installed in the remote server, the possible values are ",(0,a.kt)("inlineCode",{parentName:"li"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"installing"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"installed"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"not_installed"),"."))),(0,a.kt)("h3",{id:"response-code"},"Response code"),(0,a.kt)("p",null,"200 (The runtime definition is returned successfully.)"))}h.isMDXComponent=!0}}]);