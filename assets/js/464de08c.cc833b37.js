"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3201],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),d=a,f=l["".concat(m,".").concat(d)]||l[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},74357:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return l}});var r,a=n(83117),o=n(80102),i=(n(67294),n(3905)),u=["components"],m={title:"Update a runtime",sidebar_label:"Update a runtime",description:"This workflow sample demonstrates how to update an existing runtime object through the REST API."},s=void 0,p={unversionedId:"common-workflows/administration/manage-runtime-objects/update-a-runtime",id:"common-workflows/administration/manage-runtime-objects/update-a-runtime",title:"Update a runtime",description:"This workflow sample demonstrates how to update an existing runtime object through the REST API.",source:"@site/docs/common-workflows/administration/manage-runtime-objects/update-a-runtime.md",sourceDirName:"common-workflows/administration/manage-runtime-objects",slug:"/common-workflows/administration/manage-runtime-objects/update-a-runtime",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/update-a-runtime",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-runtime-objects/update-a-runtime.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Update a runtime",sidebar_label:"Update a runtime",description:"This workflow sample demonstrates how to update an existing runtime object through the REST API."},sidebar:"tutorialSidebar",previous:{title:"Create a runtime",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/create-a-runtime"},next:{title:"Delete a runtime",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/delete-a-runtime"}},c={},l=[{value:"Workflow",id:"workflow",level:2},{value:"Update an existing runtime using PATCH /api/runtimes/{id}",id:"update-an-existing-runtime-using-patch-apiruntimesid",level:3}],d=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:l};function g(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021 Update 7",mdxType:"Available"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to update an existing runtime object through the REST API."),(0,i.kt)("p",null,"You want to update the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Runtime")," runtime object. The runtime ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"E6C5BF4C483FF06313BEE19EAD39978B"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("h3",{id:"update-an-existing-runtime-using-patch-apiruntimesid"},"Update an existing runtime using ",(0,i.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes/modifyScriptRuntime"},"PATCH /api/runtimes/{id}")),(0,i.kt)("p",null,"In this step, you are modifying the existing runtime's name to ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Runtime Modified")," and modifying the runtime's minCachedInstances to ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test Runtime Modified",\n  "minCachedInstances": 2\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  curl -X "PATCH" \\\n  "https://demo.microstrategy.com/MicroStrategyLibrary/api/runtimes/E6C5BF4C483FF06313BEE19EAD39978B" \\\n  -H "accept: */*" \\\n  -H "X-MSTR-AuthToken: 20r2v7vsnod056umhgh74ltu8m " \\\n  -H "Content-Type: application/json" \\\n  -d "{\n    \'name\': \'Test Runtime Modified\',\n    \'minCachedInstances\': 2\n  }"\n')),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Sample Response Code: 204"))}g.isMDXComponent=!0}}]);