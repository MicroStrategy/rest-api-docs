"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2706],{3905:function(e,t,o){o.d(t,{Zo:function(){return m},kt:function(){return u}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},m=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(o),u=a,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return o?n.createElement(h,c(c({ref:t},m),{},{components:o})):n.createElement(h,c({ref:t},m))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,c=new Array(r);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<r;i++)c[i]=o[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4937:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var n,a=o(3117),r=o(102),c=(o(7294),o(3905)),s=["components"],l={title:"Reload the schema synchronously",description:"This workflow sample demonstrates how to reload (update) the schema synchronously."},i=void 0,m={unversionedId:"common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-synchronously",id:"common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-synchronously",title:"Reload the schema synchronously",description:"This workflow sample demonstrates how to reload (update) the schema synchronously.",source:"@site/docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-synchronously.md",sourceDirName:"common-workflows/modeling/common-object-management/manage-the-schema",slug:"/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-synchronously",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-synchronously",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-synchronously.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Reload the schema synchronously",description:"This workflow sample demonstrates how to reload (update) the schema synchronously."},sidebar:"tutorialSidebar",previous:{title:"Unlock the schema",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/unlock-the-schema"},next:{title:"Reload the schema asynchronously",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-asynchronously"}},p={},d=[],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),h={toc:d};function y(e){var t=e.components,o=(0,r.Z)(e,s);return(0,c.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(u,{since:"2021 Update 1",mdxType:"Available"}),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,c.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b58bf430-4495-4904-8a1c-929a126be1f0?ctx=documentation"},"REST API Playground"),"."),(0,c.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,c.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,c.kt)("p",null,"This workflow sample demonstrates how to reload (update) the schema synchronously."),(0,c.kt)("p",null,"You want to reload (update) the schema synchronously in the MicroStrategy Tutorial project . The project ID is ",(0,c.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,c.kt)("admonition",{type:"info"},(0,c.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,c.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,c.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,c.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,c.kt)("p",null,"Reload (update) the schema synchronously using ",(0,c.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-schemaReload"},"POST /api/model/schema/reload"),"."),(0,c.kt)("p",null,"Sample Request Header:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754\n')),(0,c.kt)("p",null,"Sample Request Body"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},'"updateTypes"')," is required in the request body. This field can be empty, contain any of the following options, or all of them:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},'"table_key"'),": Use this option if you changed the key structure of a table."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},'"entry_level"'),": Use this option if you changed the level at which a fact is stored."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},'"logical_size"'),": Use this option to recalculate logical table sizes and override any modifications you made to logical table sizes.")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "updateTypes": ["table_key", "entry_level", "logical_size"]\n}\n')),(0,c.kt)("p",null,"Sample Curl:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/reload" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \\\n-H "Content-Type: application/json" \\\n-d \'{"updateTypes":["table_key, entry_level, logical_size"]}\'\n')),(0,c.kt)("p",null,"Sample Response Body: Empty"),(0,c.kt)("p",null,"Response Code: 201 (The schema reload synchronous call executes successfully.)"))}y.isMDXComponent=!0}}]);