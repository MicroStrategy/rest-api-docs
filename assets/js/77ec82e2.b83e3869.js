"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7714],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16668:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var n,r=a(83117),i=a(80102),l=(a(67294),a(3905)),o=["components"],p={title:"Update a drill map",sidebar_label:"Update a drill map",description:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service."},s=void 0,d={unversionedId:"common-workflows/modeling/manage-drill-maps/update-a-drill-map",id:"common-workflows/modeling/manage-drill-maps/update-a-drill-map",title:"Update a drill map",description:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-drill-maps/update-a-drill-map.md",sourceDirName:"common-workflows/modeling/manage-drill-maps",slug:"/common-workflows/modeling/manage-drill-maps/update-a-drill-map",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/update-a-drill-map",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-drill-maps/update-a-drill-map.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1685725225,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Update a drill map",sidebar_label:"Update a drill map",description:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a drill map",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/create-a-drill-map"},next:{title:"Retrieve a list of objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/retrieve-a-list-of-objects"}},m={},c=[{value:"Workflow",id:"workflow",level:2},{value:"Update an existing drill map using <code>PUT /api/model/drillMaps/{drillMapId}</code>",id:"update-an-existing-drill-map-using-put-apimodeldrillmapsdrillmapid",level:3}],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),f={toc:c};function y(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(u,{since:"2021 Update 6",mdxType:"Available"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b7a0f0c-2172-418a-93ec-e0f0a13fa741?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"This workflow sample demonstrates how to update an existing drill map object through the Modeling service."),(0,l.kt)("p",null,"You want to update the existing ",(0,l.kt)("inlineCode",{parentName:"p"},"Drill Map for Demo")," drill map object in the MicroStrategy Tutorial project. The project ID is ",(0,l.kt)("inlineCode",{parentName:"p"},"091B51154B22036C53CFBB9958B2E8FC"),"). The drill map ID is ",(0,l.kt)("inlineCode",{parentName:"p"},"CC2E6AA3421EFF5C41C2D0939750BB24"),"."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,l.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,l.kt)("h2",{id:"workflow"},"Workflow"),(0,l.kt)("h3",{id:"update-an-existing-drill-map-using-put-apimodeldrillmapsdrillmapid"},"Update an existing drill map using ",(0,l.kt)("inlineCode",{parentName:"h3"},"PUT /api/model/drillMaps/{drillMapId}")),(0,l.kt)("p",null,"In this step, you are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Modifying the existing drill path\u2019s priority to ",(0,l.kt)("inlineCode",{parentName:"p"},"low"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Adding a new drill path based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Call Center Analysis")," template in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Template")," field and setting the drill path to ",(0,l.kt)("inlineCode",{parentName:"p"},"high")," priority, along with an additional filter and other properties."),(0,l.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",{parentName:"li"},"Sample Request Body:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Drill Map for Demo",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Year\'s Display Name",\n      "type": "up",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "low",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    },\n    {\n      "displayName": "Call Center Analysis",\n      "type": "template",\n      "target": {\n        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",\n        "subType": "template",\n        "name": "Call Center Analysis"\n      },\n      "priority": "high",\n      "options": {\n        "setName": "Test SetName 1",\n        "inheritVLDB": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default",\n        "displayMode": "default",\n        "additionalFilter": {\n          "objectId": "8827905B11D3EB22C000B4B2D86C964F",\n          "subType": "filter",\n          "name": "by age"\n        }\n      }\n    }\n  ]\n}\n')),(0,l.kt)("p",{parentName:"li"},"Sample Curl:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMaps/CC2E6AA3421EFF5C41C2D0939750BB24" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" \\\n-H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" \\\n-H "Content-Type: application/json" \\\n-d \'{"information":{"name":"Drill Map for Demo","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"drillPaths":[{"displayName":"Year"s Display Name","type":"up","target":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"priority":"low","options":{"keepParent":false,"keepThresholds":false,"keepPageBy":false,"keepBaseTemplate":false,"applyUserFilter":false,"applyReportFilter":true}},{"displayName":"Call Center Analysis","type":"template","target":{"objectId":"D4C7C978490A443715E6ECB689F9CEAF","subType":"template","name":"Call Center Analysis"},"priority":"high","options":{"setName":"Test Set Name 1","inheritVLDB":false,"keepPageBy":false,"keepBaseTemplate":false,"applyUserFilter":true,"applyReportFilter":true,"includeOtherFilter":"default","displayMode":"default","additionalFilter":{"objectId":"8827905B11D3EB22C000B4B2D86C964F","subType":"filter","name":"by age"}}}]}\'\n')),(0,l.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,l.kt)("p",{parentName:"li"},"You can view the updated drill map definition in the body of the response."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-01-24T10:42:27.000Z",\n    "dateModified": "2022-01-30T12:32:52.961Z",\n    "versionId": "DAC1E08E49F511D58A0D678D2ACD1BF9",\n    "primaryLocale": "en-US",\n    "objectId": "CC2E6AA3421EFF5C41C2D0939750BB24",\n    "subType": "drill_map",\n    "name": "Drill Map for Demo",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Year\'s Display Name",\n      "type": "up",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "low",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    },\n    {\n      "displayName": "Call Center Analysis",\n      "type": "template",\n      "target": {\n        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",\n        "subType": "template",\n        "name": "Call Center Analysis"\n      },\n      "priority": "high",\n      "options": {\n        "setName": "Test SetName 1",\n        "inheritVLDB": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default",\n        "displayMode": "default",\n        "additionalFilter": {\n          "objectId": "8827905B11D3EB22C000B4B2D86C964F",\n          "subType": "filter",\n          "name": "by age"\n        }\n      }\n    }\n  ]\n}\n')),(0,l.kt)("p",{parentName:"li"},"Sample Response Code: 200 (The ",(0,l.kt)("inlineCode",{parentName:"p"},"Drill Map for Demo")," drill map object is updated successfully in the changeset.)"))))}y.isMDXComponent=!0}}]);