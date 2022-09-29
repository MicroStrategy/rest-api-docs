"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1576],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Workflow sample - Retrieve a metric's definition within a changeset",sidebar_label:"Retrieve a metric's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a metric's definition\u202fwithin a changeset."},l=void 0,c={unversionedId:"common-workflows/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset",id:"common-workflows/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset",title:"Workflow sample - Retrieve a metric's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a metric's definition\u202fwithin a changeset.",source:"@site/docs/common-workflows/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset.md",sourceDirName:"common-workflows/manage-metric-objects",slug:"/common-workflows/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664482211,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"Workflow sample - Retrieve a metric's definition within a changeset",sidebar_label:"Retrieve a metric's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a metric's definition\u202fwithin a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a metric's definition",permalink:"/rest-api-docs/common-workflows/manage-metric-objects/retrieve-a-metrics-definition"},next:{title:"Create a metric within a changeset",permalink:"/rest-api-docs/common-workflows/manage-metric-objects/create-a-metric-within-a-changeset"}},m={},p=[{value:"1. Create a changeset using POST /api/model/changesets.",id:"1-create-a-changeset-using-post-apimodelchangesets",level:2},{value:"2. Get the definition of the specified metric ID within a changeset using GET /api/model/metrics/{metricId}",id:"2-get-the-definition-of-the-specified-metric-id-within-a-changeset-using-get-apimodelmetricsmetricid",level:2},{value:"3. Commit a changeset using POST /api/model/changesets/{changesetId}/commit",id:"3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit",level:2},{value:"4. Delete a changeset using DELETE /api/model/changesets/{changesetId}",id:"4-delete-a-changeset-using-delete-apimodelchangesetschangesetid",level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c9639bc3-853f-4746-94b6-528b5aed21a5?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve a metric's definition\u202fwithin a changeset."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,i.kt)("p",null,"You want to get the definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cCost Comparison\u201d")," metric object. The object ID of the metric is ",(0,i.kt)("inlineCode",{parentName:"p"},"28F95FDC4EF1CA5746F8E6971A144BED")," in the MicroStrategy Tutorial project. The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("p",null,"For different formats of metric expressions, see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-metric-objects/retrieve-a-metrics-definition"},"Workflow Sample - Retrieve a Metric's Definition"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("h2",{id:"1-create-a-changeset-using-post-apimodelchangesets"},"1. Create a changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets.")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2A131744C91B4915B54A61FFDC528F62",\n  "dateCreated": "2021-06-15T03:04:56.613866Z",\n  "dateModified": "2021-06-15T03:04:56.613916Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "4bb7n1dhjo860e7tlpchg57hl",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "Administrator"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 200 (A new changeset is created successfully.)"),(0,i.kt)("h2",{id:"2-get-the-definition-of-the-specified-metric-id-within-a-changeset-using-get-apimodelmetricsmetricid"},"2. Get the definition of the specified metric ID within a changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Metrics/ms-getMetricDetails"},"GET /api/model/metrics/{metricId}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the changeset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,i.kt)("td",{parentName:"tr",align:null},"Omitted, tree, or tokens:",(0,i.kt)("br",null),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tree"),', the expression is returned in "text" and "tree" formats.',(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tokens"),', the expression is returned in "text" and "tokens" formats.')))),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/metrics/28F95FDC4EF1CA5746F8E6971A144BED" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-08T10:37:03.000Z",\n    "dateModified": "2022-03-15T15:59:50.000Z",\n    "versionId": "5FE091CE4842941170D5F6AC998DEB3E",\n    "primaryLocale": "en-US",\n    "objectId": "28F95FDC4EF1CA5746F8E6971A144BED",\n    "subType": "metric",\n    "name": "Cost Comparison"\n  },\n  "expression": {\n    "text": "Sum(Cost)",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "2D69DE1D4767A591B82D79B7B996F346",\n        "subType": "agg_metric",\n        "isEmbedded": true\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [\n      {\n        "dimtyUnitType": "report_base_level",\n        "aggregation": "normal",\n        "filtering": "apply",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "aggregation": "first_in_fact",\n        "filtering": "absolute",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "role",\n        "target": {\n          "objectId": "2437C03311D5BD85C000F98A4CC5F24F",\n          "subType": "role_transformation",\n          "name": "Last Quarter\'s"\n        }\n      }\n    ],\n    "excludeAttribute": false,\n    "allowAddingUnit": true\n  },\n  "conditionality": {\n    "filter": {\n      "objectId": "E638359211D5C49EC0000C881FDA1A4F",\n      "subType": "filter",\n      "name": "Select a Quarter"\n    },\n    "embedMethod": "metric_into_report_filter",\n    "removeElements": true\n  },\n  "metricSubtotals": [\n    {\n      "definition": {\n        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",\n        "subType": "system_subtotal",\n        "name": "Total"\n      },\n      "implementation": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",\n        "subType": "system_subtotal",\n        "name": "Minimum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",\n        "subType": "system_subtotal",\n        "name": "Maximum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "F225147A4CA0BB97368A5689D9675E73",\n        "subType": "system_subtotal",\n        "name": "Aggregation"\n      },\n      "implementation": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    }\n  ],\n  "aggregateFromBase": false,\n  "formulaJoinType": "inner",\n  "smartTotal": "decomposable_false",\n  "dataType": { "type": "int64", "precision": 0, "scale": 0 },\n  "format": {\n    "header": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "2" },\n      { "type": "number_thousand_separator", "value": "true" },\n      { "type": "number_currency_symbol", "value": "$" },\n      { "type": "number_currency_position", "value": "0" },\n      { "type": "number_format", "value": "#,##0.00;(#,##0.00)" },\n      { "type": "number_negative_numbers", "value": "3" },\n      { "type": "background_fill_color", "value": "3355443" },\n      { "type": "background_pattern_style", "value": "1" },\n      { "type": "background_fill_style", "value": "0" },\n      { "type": "background_gradient_angle", "value": "0" },\n      { "type": "background_gradient_x_offset", "value": "0" },\n      { "type": "series_fill_style", "value": "0" },\n      { "type": "series_fill_color", "value": "8388608" },\n      { "type": "series_gradient_angle", "value": "0" },\n      { "type": "series_gradient_x_offset", "value": "0" }\n    ],\n    "values": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "0" },\n      { "type": "number_format", "value": "#,##0;(#,##0)" }\n    ]\n  },\n  "subtotalFromBase": false,\n  "columnNameAlias": "test",\n  "metricFormatType": "reserved",\n  "thresholds": []\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Metric's definition is returned successfully.)"),(0,i.kt)("h2",{id:"3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit"},"3. Commit a changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4E830DF576A24E4B9120455EE576EB51",\n  "dateCreated": "2021-02-23T10:51:04.336913300Z",\n  "dateModified": "2021-02-23T10:51:18.780285700Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "CFC4E856492FEF1A2BB6F1BC37ABFD06",\n  "userMetadataLocale": "en-US",\n  "userDateNumberLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MS"\n}\n')),(0,i.kt)("p",null,"Sample Response: 201 (The changeset is committed successfully.)"),(0,i.kt)("h2",{id:"4-delete-a-changeset-using-delete-apimodelchangesetschangesetid"},"4. Delete a changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"))}u.isMDXComponent=!0}}]);