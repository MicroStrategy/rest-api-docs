"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9730],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Workflow Sample - Update a Subtotal within a Changeset",sidebar_label:"Update a Subtotal within a Changeset",description:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service."},s=void 0,p={unversionedId:"common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset",id:"common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset",title:"Workflow Sample - Update a Subtotal within a Changeset",description:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service.",source:"@site/docs/common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset.md",sourceDirName:"common-workflows/manage-subtotal-objects",slug:"/common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Update a Subtotal within a Changeset",sidebar_label:"Update a Subtotal within a Changeset",description:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a Subtotal within a Changeset",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/create-a-subtotal-within-a-changeset"},next:{title:"Manage Selectors",permalink:"/rest-api-docs/common-workflows/manage-selectors/"}},d={},u=[{value:"1. Create a changeset using POST /api/model/changesets",id:"1-create-a-changeset-using-post-apimodelchangesets",level:2},{value:"2. Update the metric&#39;s definition using PUT /api/model/subtotals/{subtotalId}",id:"2-update-the-metrics-definition-using-put-apimodelsubtotalssubtotalid",level:2},{value:"3. Commit a changeset using POST /api/model/changesets/{changesetId}/commit",id:"3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit",level:2},{value:"4. Delete a changeset using DELETE /api/model/changesets/{changesetId}",id:"4-delete-a-changeset-using-delete-apimodelchangesetschangesetid",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0054ca44-40a6-4387-b766-35fc5f00e428?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("p",null,"You want to update the definition of the max subtotal with object ID ",(0,o.kt)("inlineCode",{parentName:"p"},"77C1228E42FCD8EF5CA7779988763A35")," to achieve the below changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a calculated level of \u201cCustomer Region\u201c"),(0,o.kt)("li",{parentName:"ul"},"Move it to another objects folder with the ID of ",(0,o.kt)("inlineCode",{parentName:"li"},"8A1831FF494F528D02A4A8BF5FB73459")),(0,o.kt)("li",{parentName:"ul"},"Rename the subtotal to ",(0,o.kt)("inlineCode",{parentName:"li"},'"Average at Customer Region"'))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,o.kt)("h2",{id:"1-create-a-changeset-using-post-apimodelchangesets"},"1. Create a changeset using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2A131744C91B4915B54A61FFDC528F62",\n  "dateCreated": "2021-06-15T03:04:56.613866Z",\n  "dateModified": "2021-06-15T03:04:56.613916Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "54F3D26011D2896560009A8E67019608",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "Administrator"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (A new changeset is created successfully.)"),(0,o.kt)("h2",{id:"2-update-the-metrics-definition-using-put-apimodelsubtotalssubtotalid"},"2. Update the metric's definition using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subtotals/ms-putSubtotal"},"PUT /api/model/subtotals/{subtotalId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "metric_subtotal",\n    "name": "Average at Customer Region"\n  },\n  "expression": {\n    "text": "Revenue",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Revenue",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:42:52.000Z",\n          "dateModified": "2007-03-04T16:43:12.000Z",\n          "versionId": "CBFF0429433BF148C21DEF8E9BCB851F",\n          "primaryLocale": "en-US",\n          "objectId": "4C05176211D3E877C000B3B2D86C964F",\n          "subType": "agg_metric",\n          "name": "Revenue"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "{",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "@",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ",",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "[Customer Region]",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:07.000Z",\n          "dateModified": "2021-02-26T03:18:48.000Z",\n          "versionId": "989B300749981E32FFC00886259028BC",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "+",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "}",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  },\n  "dimty": {\n    "dimtyUnits": [\n      { "dimtyUnitType": "report_level", "relativePosition": 0 },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/77C1228E42FCD8EF5CA7779988763A35?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mtl3j38atj8tmrfip3vofrjes6" -H "X-MSTR-MS-Changeset: 038AB22B5A8D4E5A9749D74B77712C50 " -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"8A1831FF494F528D02A4A8BF5FB73459\\",\\"subType\\":\\"metric_subtotal\\",\\"name\\":\\"Average at Customer Region\\"},\\"expression\\":{\\"text\\":\\"Avg(Revenue)\\",\\"tree\\":{\\"type\\":\\"object_reference\\",\\"target\\":{\\"objectId\\":\\"EE5BF65E4E565AE84587468203AF8237\\",\\"subType\\":\\"agg_metric\\",\\"isEmbedded\\":true},\\"isIndependent\\":0}},\\"dimty\\":{\\"dimtyUnits\\":[{\\"dimtyUnitType\\":\\"report_level\\",\\"relativePosition\\":0},{\\"dimtyUnitType\\":\\"attribute\\",\\"target\\":{\\"objectId\\":\\"8D679D3B11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Region\\"}}]}}"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the updated subtotal's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-10T09:00:50.991Z",\n    "dateModified": "2022-03-10T09:01:55.226Z",\n    "versionId": "2BCB1BC246EDA06088DC7E92C4794DF4",\n    "primaryLocale": "en-US",\n    "objectId": "77C1228E42FCD8EF5CA7779988763A35",\n    "subType": "metric_subtotal",\n    "name": "Average at Customer Region"\n  },\n  "expression": {\n    "text": "Avg(Revenue)",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "EE5BF65E4E565AE84587468203AF8237",\n        "subType": "agg_metric",\n        "isEmbedded": true\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [\n      { "dimtyUnitType": "report_level", "relativePosition": 0 },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The subtotal's definition is updated successfully in the changeset.)"),(0,o.kt)("h2",{id:"3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit"},"3. Commit a changeset using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4E830DF576A24E4B9120455EE576EB51",\n  "dateCreated": "2021-02-23T10:51:04.336913300Z",\n  "dateModified": "2021-02-23T10:51:18.780285700Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "CFC4E856492FEF1A2BB6F1BC37ABFD06",\n  "userMetadataLocale": "en-US",\n  "userDateNumberLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MS"\n}\n')),(0,o.kt)("p",null,"Sample Response: 201 (The changeset is committed successfully.)"),(0,o.kt)("h2",{id:"4-delete-a-changeset-using-delete-apimodelchangesetschangesetid"},"4. Delete a changeset using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,o.kt)("p",null,"Sample Response Body: Empty"),(0,o.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"),(0,o.kt)("p",null,"The model for the definition of a subtotal can be updated with the following fields:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Fields"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"information"),(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the subtotal. This is the most user-friendly value that can be used to identify the subtotal."),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"subtype"),(0,o.kt)("td",{parentName:"tr",align:null},"For the subtotal, ",(0,o.kt)("inlineCode",{parentName:"td"},"subType")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"metric_subtotal"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,o.kt)("td",{parentName:"tr",align:null},"Folder ID where the new metric is saved."),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expression"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},"A human readable, but non-parsable text, describing the expression."),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"tree"),(0,o.kt)("td",{parentName:"tr",align:null},"A tree data structure fully defining the expression."),(0,o.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"tokens"),(0,o.kt)("td",{parentName:"tr",align:null},"A list of parsed tokens."),(0,o.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dimty"),(0,o.kt)("td",{parentName:"tr",align:null},"dimtyUnits"),(0,o.kt)("td",{parentName:"tr",align:null},"Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated."),(0,o.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"allowAddingUnit"),(0,o.kt)("td",{parentName:"tr",align:null},"This setting allows other users to add extra units to this definition."),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))))}m.isMDXComponent=!0}}]);