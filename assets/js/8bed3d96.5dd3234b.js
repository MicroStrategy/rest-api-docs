"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7036],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5451:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],o={title:"Workflow Sample - Update a Drill Map",sidebar_label:"Update a Drill Map",description:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service."},p=void 0,s={unversionedId:"common-workflows/manage-drill-maps/update-a-drill-map",id:"common-workflows/manage-drill-maps/update-a-drill-map",title:"Workflow Sample - Update a Drill Map",description:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service.",source:"@site/docs/common-workflows/manage-drill-maps/update-a-drill-map.md",sourceDirName:"common-workflows/manage-drill-maps",slug:"/common-workflows/manage-drill-maps/update-a-drill-map",permalink:"/rest-api-docs/common-workflows/manage-drill-maps/update-a-drill-map",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-drill-maps/update-a-drill-map.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1663337315,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{title:"Workflow Sample - Update a Drill Map",sidebar_label:"Update a Drill Map",description:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a Drill Map",permalink:"/rest-api-docs/common-workflows/manage-drill-maps/create-a-drill-map"},next:{title:"Retrieve a List of Objects",permalink:"/rest-api-docs/common-workflows/manage-drill-maps/retrieve-a-list-of-objects"}},d={},m=[{value:"Workflow",id:"workflow",level:2},{value:"Step 1: Create a changeset using POST /api/model/changesets",id:"step-1-create-a-changeset-using-post-apimodelchangesets",level:3},{value:"Step 2: Update an existing drill map using <code>PUT /api/model/drillMaps/{drillMapId}</code>",id:"step-2-update-an-existing-drill-map-using-put-apimodeldrillmapsdrillmapid",level:3},{value:"Step 3: Commit the changeset using POST /api/model/changesets/{changesetId}/commit",id:"step-3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit",level:3},{value:"Step 4: Delete the changeset using DELETE /api/model/changesets/{changesetId}",id:"step-4-delete-the-changeset-using-delete-apimodelchangesetschangesetid",level:3}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b7a0f0c-2172-418a-93ec-e0f0a13fa741?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"This workflow sample demonstrates how to update an existing drill map object through the Modeling service."),(0,l.kt)("p",null,"You want to update the existing ",(0,l.kt)("inlineCode",{parentName:"p"},"Drill Map for Demo")," drill map object in the MicroStrategy Tutorial project. The project ID is ",(0,l.kt)("inlineCode",{parentName:"p"},"091B51154B22036C53CFBB9958B2E8FC"),"). The drill map ID is ",(0,l.kt)("inlineCode",{parentName:"p"},"CC2E6AA3421EFF5C41C2D0939750BB24"),"."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,l.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,l.kt)("h2",{id:"workflow"},"Workflow"),(0,l.kt)("h3",{id:"step-1-create-a-changeset-using-post-apimodelchangesets"},"Step 1: Create a changeset using ",(0,l.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "091B51154B22036C53CFBB9958B2E8FC"\n')),(0,l.kt)("p",null,"Sample Request Body: Empty"),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=false" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: agei7vi3q4nn0i6r547r495vaf" \\\n-H "X-MSTR-ProjectID: 091B51154B22036C53CFBB9958B2E8FC"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T16:38:09.825650Z",\n  "dateModified": "2020-11-17T16:38:09.825665Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "091B51154B22036C53CFBB9958B2E8FC",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,l.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,l.kt)("h3",{id:"step-2-update-an-existing-drill-map-using-put-apimodeldrillmapsdrillmapid"},"Step 2: Update an existing drill map using ",(0,l.kt)("inlineCode",{parentName:"h3"},"PUT /api/model/drillMaps/{drillMapId}")),(0,l.kt)("p",null,"In this step, you are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Modifying the existing drill path\u2019s priority to ",(0,l.kt)("inlineCode",{parentName:"p"},"low"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Adding a new drill path based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Call Center Analysis")," template in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Template")," field and setting the drill path to ",(0,l.kt)("inlineCode",{parentName:"p"},"high")," priority, along with an additional filter and other properties."),(0,l.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",{parentName:"li"},"Sample Request Body:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Drill Map for Demo",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Year\'s Display Name",\n      "type": "up",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "low",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    },\n    {\n      "displayName": "Call Center Analysis",\n      "type": "template",\n      "target": {\n        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",\n        "subType": "template",\n        "name": "Call Center Analysis"\n      },\n      "priority": "high",\n      "options": {\n        "setName": "Test SetName 1",\n        "inheritVLDB": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default",\n        "displayMode": "default",\n        "additionalFilter": {\n          "objectId": "8827905B11D3EB22C000B4B2D86C964F",\n          "subType": "filter",\n          "name": "by age"\n        }\n      }\n    }\n  ]\n}\n')),(0,l.kt)("p",{parentName:"li"},"Sample Curl:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMaps/CC2E6AA3421EFF5C41C2D0939750BB24" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" \\\n-H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" \\\n-H "Content-Type: application/json" \\\n-d \'{"information":{"name":"Drill Map for Demo","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"drillPaths":[{"displayName":"Year"s Display Name","type":"up","target":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"priority":"low","options":{"keepParent":false,"keepThresholds":false,"keepPageBy":false,"keepBaseTemplate":false,"applyUserFilter":false,"applyReportFilter":true}},{"displayName":"Call Center Analysis","type":"template","target":{"objectId":"D4C7C978490A443715E6ECB689F9CEAF","subType":"template","name":"Call Center Analysis"},"priority":"high","options":{"setName":"Test Set Name 1","inheritVLDB":false,"keepPageBy":false,"keepBaseTemplate":false,"applyUserFilter":true,"applyReportFilter":true,"includeOtherFilter":"default","displayMode":"default","additionalFilter":{"objectId":"8827905B11D3EB22C000B4B2D86C964F","subType":"filter","name":"by age"}}}]}\'\n')),(0,l.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,l.kt)("p",{parentName:"li"},"You can view the updated drill map definition in the body of the response."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-01-24T10:42:27.000Z",\n    "dateModified": "2022-01-30T12:32:52.961Z",\n    "versionId": "DAC1E08E49F511D58A0D678D2ACD1BF9",\n    "primaryLocale": "en-US",\n    "objectId": "CC2E6AA3421EFF5C41C2D0939750BB24",\n    "subType": "drill_map",\n    "name": "Drill Map for Demo",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Year\'s Display Name",\n      "type": "up",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "low",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    },\n    {\n      "displayName": "Call Center Analysis",\n      "type": "template",\n      "target": {\n        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",\n        "subType": "template",\n        "name": "Call Center Analysis"\n      },\n      "priority": "high",\n      "options": {\n        "setName": "Test SetName 1",\n        "inheritVLDB": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default",\n        "displayMode": "default",\n        "additionalFilter": {\n          "objectId": "8827905B11D3EB22C000B4B2D86C964F",\n          "subType": "filter",\n          "name": "by age"\n        }\n      }\n    }\n  ]\n}\n')),(0,l.kt)("p",{parentName:"li"},"Sample Response Code: 200 (The ",(0,l.kt)("inlineCode",{parentName:"p"},"Drill Map for Demo")," drill map object is updated successfully in the changeset.)"))),(0,l.kt)("h3",{id:"step-3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit"},"Step 3: Commit the changeset using ",(0,l.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit")),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" \\\n-H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T17:42:13.312629Z",\n  "dateModified": "2020-11-17T17:44:30.814816Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "091B51154B22036C53CFBB9958B2E8FC",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,l.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,l.kt)("h3",{id:"step-4-delete-the-changeset-using-delete-apimodelchangesetschangesetid"},"Step 4: Delete the changeset using ",(0,l.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}")),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" \\\n-H "accept: */*" \\\n-H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" \\\n-H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Response Body: Empty"),(0,l.kt)("p",null,"Sample Response Code: 204 (The changeset is deleted successfully.)"))}u.isMDXComponent=!0}}]);