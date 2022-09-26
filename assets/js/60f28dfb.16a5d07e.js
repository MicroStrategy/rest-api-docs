"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5252],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7281:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],s={title:"Workflow Sample - Retrieve a Subtotal's Definition within a Changeset",sidebar_label:"Retrieve a Subtotal's Definition within a Changeset",description:"This workflow sample demonstrates how to retrieve a subtotal's definition\u202fwithin a changeset."},l=void 0,c={unversionedId:"common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",id:"common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",title:"Workflow Sample - Retrieve a Subtotal's Definition within a Changeset",description:"This workflow sample demonstrates how to retrieve a subtotal's definition\u202fwithin a changeset.",source:"@site/docs/common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset.md",sourceDirName:"common-workflows/manage-subtotal-objects",slug:"/common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Retrieve a Subtotal's Definition within a Changeset",sidebar_label:"Retrieve a Subtotal's Definition within a Changeset",description:"This workflow sample demonstrates how to retrieve a subtotal's definition\u202fwithin a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a Subtotal's Definition",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition"},next:{title:"Create a Subtotal within a Changeset",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/create-a-subtotal-within-a-changeset"}},p={},m=[{value:"1. Create a changeset using POST /api/model/changesets.",id:"1-create-a-changeset-using-post-apimodelchangesets",level:2},{value:"2. Get the definition of the specified subtotal ID within a changeset using GET /api/model/subtotals/{subtotalID}",id:"2-get-the-definition-of-the-specified-subtotal-id-within-a-changeset-using-get-apimodelsubtotalssubtotalid",level:2},{value:"3. Commit a changeset using POST /api/model/changesets/{changesetId}/commit",id:"3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit",level:2},{value:"4. Delete a changeset using DELETE /api/model/changesets/{changesetId}",id:"4-delete-a-changeset-using-delete-apimodelchangesetschangesetid",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d1504a52-db9a-4d71-99d2-0ffbd82ee91a?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow sample demonstrates how to retrieve a subtotal's definition\u202fwithin a changeset."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,r.kt)("p",null,"You want to get the definition of an object with the ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"514C2064DF754990AF60432A1C1E4A77")," in the MicroStrategy Tutorial project. The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,r.kt)("p",null,"For different formats of subtotal expressions, see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition"},"Workflow Sample - Retrieve a Subtotal's Definition"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("h2",{id:"1-create-a-changeset-using-post-apimodelchangesets"},"1. Create a changeset using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets.")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2A131744C91B4915B54A61FFDC528F62",\n  "dateCreated": "2021-06-15T03:04:56.613866Z",\n  "dateModified": "2021-06-15T03:04:56.613916Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "54F3D26011D2896560009A8E67019608",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "Administrator"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 200 (A new changeset is created successfully.)"),(0,r.kt)("h2",{id:"2-get-the-definition-of-the-specified-subtotal-id-within-a-changeset-using-get-apimodelsubtotalssubtotalid"},"2. Get the definition of the specified subtotal ID within a changeset using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Subtotals/ms-getSubtotalDetails"},"GET /api/model/subtotals/{subtotalID}")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Location"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,r.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the changeset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,r.kt)("td",{parentName:"tr",align:null},"Omitted, tree, or tokens:",(0,r.kt)("br",null),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,r.kt)("br",null),"- If ",(0,r.kt)("inlineCode",{parentName:"td"},"tree"),', the expression is returned in "text" and "tree" formats.',(0,r.kt)("br",null),"- If ",(0,r.kt)("inlineCode",{parentName:"td"},"tokens"),', the expression is returned in "text" and "tokens" formats.')))),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the subtotal's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-08T03:36:01.097Z",\n    "dateModified": "2022-03-08T03:36:01.097Z",\n    "versionId": "C8F384E54BD9E1A415260B9F4A63B643",\n    "primaryLocale": "en-US",\n    "objectId": "514C2064DF754990AF60432A1C1E4A77",\n    "subType": "metric_subtotal",\n    "name": "Custom_Max"\n  },\n  "expression": {\n    "text": "Revenue",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "1116B53103FC4A72BBACBAED388243D6",\n        "subType": "agg_metric",\n        "name": "Revenue"\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]\n  }\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (Subtotal's definition is returned successfully.)"),(0,r.kt)("h2",{id:"3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit"},"3. Commit a changeset using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4E830DF576A24E4B9120455EE576EB51",\n  "dateCreated": "2021-02-23T10:51:04.336913300Z",\n  "dateModified": "2021-02-23T10:51:18.780285700Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "CFC4E856492FEF1A2BB6F1BC37ABFD06",\n  "userMetadataLocale": "en-US",\n  "userDateNumberLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MS"\n}\n')),(0,r.kt)("p",null,"Sample Response: 201 (The changeset is committed successfully.)"),(0,r.kt)("h2",{id:"4-delete-a-changeset-using-delete-apimodelchangesetschangesetid"},"4. Delete a changeset using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,r.kt)("p",null,"Sample Response Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"))}d.isMDXComponent=!0}}]);