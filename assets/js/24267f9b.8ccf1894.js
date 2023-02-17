"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2932],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var o,a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],l={title:"Retrieve a subtotal's definition",sidebar_label:"Retrieve a subtotal's definition",description:"This topic covers several workflows for retrieving a metric's definition."},p=void 0,d={unversionedId:"common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition",id:"common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition",title:"Retrieve a subtotal's definition",description:"This topic covers several workflows for retrieving a metric's definition.",source:"@site/docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition.md",sourceDirName:"common-workflows/modeling/manage-subtotal-objects",slug:"/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1676668503,formattedLastUpdatedAt:"Feb 17, 2023",frontMatter:{title:"Retrieve a subtotal's definition",sidebar_label:"Retrieve a subtotal's definition",description:"This topic covers several workflows for retrieving a metric's definition."},sidebar:"tutorialSidebar",previous:{title:"Manage subtotal objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/"},next:{title:"Retrieve a subtotal's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset"}},c={},u=[{value:"Retrieve a subtotal&#39;s definition",id:"retrieve-a-subtotals-definition",level:2},{value:"Retrieve a subtotal&#39;s definition in tree format",id:"retrieve-a-subtotals-definition-in-tree-format",level:2},{value:"Retrieve a subtotal&#39;s definition in tokens format",id:"retrieve-a-subtotals-definition-in-tokens-format",level:2}],m=(o="Available",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 5",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d1504a52-db9a-4d71-99d2-0ffbd82ee91a?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This topic covers several workflows for retrieving a metric's definition:"),(0,i.kt)("p",null,"You want to get the definition of an object with the ID of ",(0,i.kt)("inlineCode",{parentName:"p"},"514C2064DF754990AF60432A1C1E4A77")," in the MicroStrategy Tutorial project. The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"Retrieve the definition of the specified metric within a changeset using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subtotals/ms-getSubtotalDetails"},"GET /api/model/Subtotals/{SubtotalId}"),"."),(0,i.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,i.kt)("td",{parentName:"tr",align:null},"Omitted, tree, or tokens:",(0,i.kt)("br",null),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tree"),', the expression is returned in "text" and "tree" formats.',(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tokens"),', the expression is returned in "text" and "tokens" formats.')))),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("h2",{id:"retrieve-a-subtotals-definition"},"Retrieve a subtotal's definition"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,'You can view the subtotal\'s definition in the body of the response. The following is an example of an expression in "text" formats.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-08T03:36:01.097Z",\n    "dateModified": "2022-03-08T03:36:01.097Z",\n    "versionId": "C8F384E54BD9E1A415260B9F4A63B643",\n    "primaryLocale": "en-US",\n    "objectId": "514C2064DF754990AF60432A1C1E4A77",\n    "subType": "metric_subtotal",\n    "name": "Custom_Max"\n  },\n  "expression": { "text": "Revenue" },\n  "dimty": {\n    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Subtotal's definition is returned successfully.)"),(0,i.kt)("h2",{id:"retrieve-a-subtotals-definition-in-tree-format"},"Retrieve a subtotal's definition in tree format"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,'You can view the subtotal\'s definition in the body of the response, including the information and expression of the specified subtotal. The following is an example of the expression in "text" and "tree" formats.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-08T03:36:01.097Z",\n    "dateModified": "2022-03-08T03:36:01.097Z",\n    "versionId": "C8F384E54BD9E1A415260B9F4A63B643",\n    "primaryLocale": "en-US",\n    "objectId": "514C2064DF754990AF60432A1C1E4A77",\n    "subType": "metric_subtotal",\n    "name": "Custom_Max"\n  },\n  "expression": {\n    "text": "Revenue",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "1116B53103FC4A72BBACBAED388243D6",\n        "subType": "agg_metric",\n        "name": "Revenue"\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Subtotal's definition is returned successfully.)"),(0,i.kt)("h2",{id:"retrieve-a-subtotals-definition-in-tokens-format"},"Retrieve a subtotal's definition in tokens format"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77?showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,'The following is an example of the expression in "text" and "tokens" formats.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-08T03:36:01.097Z",\n    "dateModified": "2022-03-08T03:36:01.097Z",\n    "versionId": "C8F384E54BD9E1A415260B9F4A63B643",\n    "primaryLocale": "en-US",\n    "objectId": "514C2064DF754990AF60432A1C1E4A77",\n    "subType": "metric_subtotal",\n    "name": "Custom_Max"\n  },\n  "expression": {\n    "text": "Revenue",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Revenue",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2022-03-07T09:12:09.283Z",\n          "dateModified": "2022-03-07T09:12:09.283Z",\n          "versionId": "D62E22D14A34757568AEF480BF7D96AE",\n          "primaryLocale": "en-US",\n          "objectId": "1116B53103FC4A72BBACBAED388243D6",\n          "subType": "agg_metric",\n          "name": "Revenue"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "{",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "@",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "}",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  },\n  "dimty": {\n    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Subtotal's definition is returned successfully.)"))}b.isMDXComponent=!0}}]);