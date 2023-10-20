"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9777],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88642:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a,r=n(83117),o=n(80102),i=(n(67294),n(3905)),l=["components"],s={title:"Create a base formula's definition within a changeset",sidebar_label:"Create a base formula's definition within a changeset",description:"This workflow sample demonstrates how to create an attribute object through the Modeling service."},d=void 0,p={unversionedId:"common-workflows/modeling/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset",id:"common-workflows/modeling/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset",title:"Create a base formula's definition within a changeset",description:"This workflow sample demonstrates how to create an attribute object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-base-formula-objects",slug:"/common-workflows/modeling/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Create a base formula's definition within a changeset",sidebar_label:"Create a base formula's definition within a changeset",description:"This workflow sample demonstrates how to create an attribute object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a base formula's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset"},next:{title:"Update a base formula's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset"}},c={},u=[{value:"Create a new base formula using POST /api/model/formulas",id:"create-a-new-base-formula-using-post-apimodelformulas",level:2}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 5",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bfe3c7f0-372a-44ef-a687-0f694deda59b?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to create an attribute object through the Modeling service."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,i.kt)("p",null,"You want to create a new base formula object, which is defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201dSum(Cost)\u201d")," and named as ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cbase_sum(Cost)\u201c"),". The destination folder ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"31727EF14E35DAA437B716BA56466585")," \u202fin the MicroStrategy Tutorial project. The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,i.kt)("h2",{id:"create-a-new-base-formula-using-post-apimodelformulas"},"Create a new base formula using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Base%20Formulas/ms-postFormula"},"POST /api/model/formulas")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},'"Information"'),", you must provide ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationFolderID")," for the base formula you want to create."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n"Content-Type": "application/json"\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,i.kt)("td",{parentName:"tr",align:null},"The project ID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,i.kt)("td",{parentName:"tr",align:null},"The changeset ID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,i.kt)("td",{parentName:"tr",align:null},"Omitted, tree, or tokens:",(0,i.kt)("br",null),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tree"),', the expression is returned in "text" and "tree" formats.',(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tokens"),', the expression is returned in "text" and "tokens" formats.')))),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"objectID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateModified"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"versionId")," are generated automatically. Currently, only ",(0,i.kt)("inlineCode",{parentName:"p"},"en-US")," is available for ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryLocale"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "31727EF14E35DAA437B716BA56466585",\n    "subType": "agg_metric",\n    "name": "sum(Cost)"\n  },\n  "expression": {\n    "text": "Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2021-02-26T03:18:52.304Z",\n          "versionId": "66BBCD784D52223085BBC2BC81EB8F16",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas?showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51" -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"{{destinationFolder}}\\",\\"subType\\":\\"agg_metric\\",\\"name\\":\\"sum(Cost)\\"},\\"expression\\":{\\"text\\":\\"Sum(Cost)\\",\\"tokens\\":[{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Sum\\",\\"type\\":\\"function\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:35.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:39.843Z\\",\\"versionId\\":\\"93B1FFD040F7CBECF3C3378D5391AA35\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C31BDD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"Sum\\",\\"description\\":\\"Returns the sum of all values in the ValueList. This is a group-value function.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"<\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"UseLookupForAttributes\\",\\"type\\":\\"identifier\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"=\\",\\"type\\":\\"function\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"False\\",\\"type\\":\\"boolean\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\">\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"(\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Cost\\",\\"type\\":\\"object_reference\\",\\"target\\":{\\"dateCreated\\":\\"2001-09-18T20:21:56.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:52.304Z\\",\\"versionId\\":\\"66BBCD784D52223085BBC2BC81EB8F16\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"7A4ABE9111D5AC6FC000D98A4CC5F24F\\",\\"subType\\":\\"fact\\",\\"name\\":\\"Cost\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\")\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"\\",\\"type\\":\\"end_of_text\\"}]}}"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the new base formula's definition in the body of the response."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"objectID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateModified"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"versionId")," are generated automatically. Currently, only ",(0,i.kt)("inlineCode",{parentName:"p"},"en-US")," is available for ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryLocale"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "698642F6B82249FDA9927616C557F8FB",\n    "primaryLocale": "en-US",\n    "objectId": "72E1149476D94F789280A9E8AA9F7B63",\n    "subType": "agg_metric",\n    "name": "sum(Cost)",\n    "destinationFolderId": "31727EF14E35DAA437B716BA56466585"\n  },\n  "expression": {\n    "text": "Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2022-02-17T05:04:23.255Z",\n          "versionId": "DE098494437C76DA4BBDA688812CDFB2",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new Base Formula is created successfully in the changeset.)"))}h.isMDXComponent=!0}}]);