"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1045],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a,r=n(83117),i=n(80102),l=(n(67294),n(3905)),o=["components"],s={title:"Update a base formula's definition within a changeset",sidebar_label:"Update a base formula's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},d=void 0,u={unversionedId:"common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",id:"common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",title:"Update a base formula's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-base-formula-objects",slug:"/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Update a base formula's definition within a changeset",sidebar_label:"Update a base formula's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a base formula's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset"},next:{title:"Manage calendar objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/"}},p={},c=[{value:"Update the base formula&#39;s definition using PUT /api/model/formulas/{formulaId}",id:"update-the-base-formulas-definition-using-put-apimodelformulasformulaid",level:2}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),f={toc:c};function v(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(m,{since:"2021 Update 5",mdxType:"Available"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bfe3c7f0-372a-44ef-a687-0f694deda59b?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,l.kt)("p",null,"You want to update the definition of the ",(0,l.kt)("inlineCode",{parentName:"p"},'"base_sum(Cost)"')," base formula with object ID ",(0,l.kt)("inlineCode",{parentName:"p"},"1116B53103FC4A72BBACBAED388243D6")," to achieve the below changes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modify the expression to ",(0,l.kt)("inlineCode",{parentName:"li"},"\u201csum(Profit)-sum(Cost)\u201c")),(0,l.kt)("li",{parentName:"ul"},"Move it to another objects folder with the ID of ",(0,l.kt)("inlineCode",{parentName:"li"},"8AF48B3D4685C1717B3BDA9804CD1036")),(0,l.kt)("li",{parentName:"ul"},"Rename the base formula to ",(0,l.kt)("inlineCode",{parentName:"li"},'"Revenue"'))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,l.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,l.kt)("h2",{id:"update-the-base-formulas-definition-using-put-apimodelformulasformulaid"},"Update the base formula's definition using ",(0,l.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Base%20Formulas/ms-putFormula"},"PUT /api/model/formulas/{formulaId}")),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Location"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,l.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the changeset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,l.kt)("td",{parentName:"tr",align:null},"Omitted, tree, or tokens:",(0,l.kt)("br",null),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,l.kt)("br",null),"- If ",(0,l.kt)("inlineCode",{parentName:"td"},"tree"),', the expression is returned in "text" and "tree" formats.',(0,l.kt)("br",null),"- If ",(0,l.kt)("inlineCode",{parentName:"td"},"tokens"),', the expression is returned in "text" and "tokens" formats.')))),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8AF48B3D4685C1717B3BDA9804CD1036",\n    "subType": "agg_metric",\n    "name": "Revenue"\n  },\n  "expression": {\n    "text": "Sum(Profit) - Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Profit",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T19:50:09.000Z",\n          "dateModified": "2022-02-17T03:47:14.966Z",\n          "versionId": "1F04706E441FF9C3C69DF5AC3C118FC3",\n          "primaryLocale": "en-US",\n          "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Profit"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2021-02-26T03:18:34.045Z",\n          "versionId": "21E9227B421DBAD67EA60A929E595E67",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2022-02-17T05:04:23.255Z",\n          "versionId": "DE098494437C76DA4BBDA688812CDFB2",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/1116B53103FC4A72BBACBAED388243D6" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: EB3A4F66E6A8413E9C36633533D0BA31" -H "Content-Type: application/json" -d "{\\"information\\":{\\"versionId\\":\\"F8748568ACD64683A888E928B0E3A3BC\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"1116B53103FC4A72BBACBAED388243D6\\",\\"subType\\":\\"agg_metric\\",\\"name\\":\\"Revenue\\",\\"destinationFolderId\\":\\"8AF48B3D4685C1717B3BDA9804CD1036\\"},\\"expression\\":{\\"text\\":\\"Sum(Profit) - Sum(Cost)\\",\\"tokens\\":[{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Sum\\",\\"type\\":\\"function\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:35.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:39.843Z\\",\\"versionId\\":\\"93B1FFD040F7CBECF3C3378D5391AA35\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C31BDD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"Sum\\",\\"description\\":\\"Returns the sum of all values in the ValueList. This is a group-value function.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"<\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"UseLookupForAttributes\\",\\"type\\":\\"identifier\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"=\\",\\"type\\":\\"function\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"False\\",\\"type\\":\\"boolean\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\">\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"(\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Profit\\",\\"type\\":\\"object_reference\\",\\"target\\":{\\"dateCreated\\":\\"2001-09-18T19:50:09.000Z\\",\\"dateModified\\":\\"2022-02-17T03:47:14.966Z\\",\\"versionId\\":\\"1F04706E441FF9C3C69DF5AC3C118FC3\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"F30CB66411D5AC5FC000D98A4CC5F24F\\",\\"subType\\":\\"fact\\",\\"name\\":\\"Profit\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\")\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"-\\",\\"type\\":\\"character\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:41.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:34.045Z\\",\\"versionId\\":\\"21E9227B421DBAD67EA60A929E595E67\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C311DD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"-\\",\\"description\\":\\"Returns the difference between two values.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Sum\\",\\"type\\":\\"function\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:35.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:39.843Z\\",\\"versionId\\":\\"93B1FFD040F7CBECF3C3378D5391AA35\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C31BDD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"Sum\\",\\"description\\":\\"Returns the sum of all values in the ValueList. This is a group-value function.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"<\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"UseLookupForAttributes\\",\\"type\\":\\"identifier\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"=\\",\\"type\\":\\"function\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"False\\",\\"type\\":\\"boolean\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\">\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"(\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Cost\\",\\"type\\":\\"object_reference\\",\\"target\\":{\\"dateCreated\\":\\"2001-09-18T20:21:56.000Z\\",\\"dateModified\\":\\"2022-02-17T05:04:23.255Z\\",\\"versionId\\":\\"DE098494437C76DA4BBDA688812CDFB2\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"7A4ABE9111D5AC6FC000D98A4CC5F24F\\",\\"subType\\":\\"fact\\",\\"name\\":\\"Cost\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\")\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"\\",\\"type\\":\\"end_of_text\\"}]}}"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("p",null,"You can view the updated base formula's definition in the body of the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "F8748568ACD64683A888E928B0E3A3BC",\n    "primaryLocale": "en-US",\n    "objectId": "1116B53103FC4A72BBACBAED388243D6",\n    "subType": "agg_metric",\n    "name": "Revenue",\n    "destinationFolderId": "8AF48B3D4685C1717B3BDA9804CD1036"\n  },\n  "expression": {\n    "text": "Sum(Profit) - Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Profit",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T19:50:09.000Z",\n          "dateModified": "2022-02-17T03:47:14.966Z",\n          "versionId": "1F04706E441FF9C3C69DF5AC3C118FC3",\n          "primaryLocale": "en-US",\n          "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Profit"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2021-02-26T03:18:34.045Z",\n          "versionId": "21E9227B421DBAD67EA60A929E595E67",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2022-02-17T05:04:23.255Z",\n          "versionId": "DE098494437C76DA4BBDA688812CDFB2",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"Response Code: 200 (The Base Formula's definition is updated successfully in the changeset.)"),(0,l.kt)("p",null,"The model for the definition of a base formula can be represented with the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"objectID"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the base formula you want to edit."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"Folder ID where you want to move the base formula."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the base formula you want to edit."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expression"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"The text you want to modify."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"tree"),(0,l.kt)("td",{parentName:"tr",align:null},"The tree structure you want to modify."),(0,l.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"tokens"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of parsed tokens you want to modify."),(0,l.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))))}v.isMDXComponent=!0}}]);