"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9842],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"Workflow Sample - Create a Derived Element",sidebar_label:"Create a Derived Element",description:"This workflow sample demonstrates how to create a new derived element object through Modeling service."},s=void 0,d={unversionedId:"common-workflows/manage-derived-element-objects/create-a-derived-element",id:"common-workflows/manage-derived-element-objects/create-a-derived-element",title:"Workflow Sample - Create a Derived Element",description:"This workflow sample demonstrates how to create a new derived element object through Modeling service.",source:"@site/docs/common-workflows/manage-derived-element-objects/create-a-derived-element.md",sourceDirName:"common-workflows/manage-derived-element-objects",slug:"/common-workflows/manage-derived-element-objects/create-a-derived-element",permalink:"/rest-api-docs/common-workflows/manage-derived-element-objects/create-a-derived-element",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-derived-element-objects/create-a-derived-element.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Create a Derived Element",sidebar_label:"Create a Derived Element",description:"This workflow sample demonstrates how to create a new derived element object through Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a Derived Element's Definition",permalink:"/rest-api-docs/common-workflows/manage-derived-element-objects/retrieve-a-derived-elements-definition"},next:{title:"Replace an Existing Derived Element",permalink:"/rest-api-docs/common-workflows/manage-derived-element-objects/replace-an-existing-element"}},m={},p=[{value:"Create a Derived Element Using a List Element",id:"create-a-derived-element-using-a-list-element",level:2},{value:"Create a changeset",id:"create-a-changeset",level:3},{value:"Create a new derived element",id:"create-a-new-derived-element",level:3},{value:"Commit the changeset",id:"commit-the-changeset",level:3},{value:"Delete the changeset",id:"delete-the-changeset",level:3},{value:"More Examples",id:"more-examples",level:2},{value:"Create a Derived Element Using a Filter Element",id:"create-a-derived-element-using-a-filter-element",level:3},{value:"Create a Derived Element Using a Calculation Element",id:"create-a-derived-element-using-a-calculation-element",level:3}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d4a5b7c7-3dba-46fc-acce-0683a23bb1fe?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"This workflow sample demonstrates how to create a new derived element object through Modeling service."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-a-derived-element-using-a-list-element"},"Create a Derived Element Using a List Element"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#create-a-changeset"},"Create a changeset")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#create-a-new-derived-element"},"Create a derived element")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#commit-the-changeset"},"Commit the changeset")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#delete-the-changeset"},"Delete the changeset")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#more-examples"},"More Examples"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-a-derived-element-using-a-filter-element"},"Create a Derived Element Using a Filter Element")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-a-derived-element-using-a-filter-element"},"Create a Derived Element Using a Calculation Element"))))),(0,l.kt)("h2",{id:"create-a-derived-element-using-a-list-element"},"Create a Derived Element Using a List Element"),(0,l.kt)("p",null,"You want to create a new ",(0,l.kt)("inlineCode",{parentName:"p"},'"{Age Range} = 25 to 34, Under 24"')," derived element object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,l.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,l.kt)("inlineCode",{parentName:"p"},"091B51154B22036C53CFBB9958B2E8FC"),"."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,l.kt)("p",null,"Obtain the project ID from ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,l.kt)("h3",{id:"create-a-changeset"},"Create a changeset"),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,l.kt)("p",null,"Sample Request Header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "091B51154B22036C53CFBB9958B2E8FC"\n')),(0,l.kt)("p",null,"Sample Request Body: Empty"),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://10.23.10.77:8443/MicroStrategyLibrary/api/model/changesets?schemaEdit=false" -H "accept: application/json" -H "X-MSTR-AuthToken: agei7vi3q4nn0i6r547r495vaf" -H "X-MSTR-ProjectID: 091B51154B22036C53CFBB9958B2E8FC"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T16:38:09.825650Z",\n  "dateModified": "2020-11-17T16:38:09.825665Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "091B51154B22036C53CFBB9958B2E8FC",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,l.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,l.kt)("h3",{id:"create-a-new-derived-element"},"Create a new derived element"),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Derived%20Elements/ms-postDerivedElement"},"POST /api/model/derivedElements"),"."),(0,l.kt)("p",null,"The embedded elements in a derived element can be ",(0,l.kt)("inlineCode",{parentName:"p"},'"list"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"filter"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"calculation"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'"all_other"'),". In this example, you are creating a derived element that has an embedded ",(0,l.kt)("inlineCode",{parentName:"p"},'"list"')," element. To create a derived element with a ",(0,l.kt)("inlineCode",{parentName:"p"},'"filter"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'"calculation"')," element, see ",(0,l.kt)("a",{parentName:"p",href:"#more-examples"},"More Examples"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Each derived element must have exactly one ",(0,l.kt)("inlineCode",{parentName:"p"},'"all_other"')," element.")),(0,l.kt)("p",null,"Sample Request Header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"For more details on how to set format properties, see ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-derived-element-objects/format-samples"},"Format Samples for Derived Elements"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "list derived element",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "attribute": {\n    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n    "name": "Age Range"\n  },\n  "elements": [\n    {\n      "name": "Age under 34",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "individual_items",\n        "includeIndividual": true\n      },\n      "text": "Under 24, 25 to 34",\n      "elements": [\n        {\n          "display": "Under 24",\n          "elementId": "h1"\n        },\n        {\n          "display": "25 to 34",\n          "elementId": "h2"\n        }\n      ]\n    },\n    {\n      "name": "All Other",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "disable"\n      }\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://10.23.10.77:8443/MicroStrategyLibrary/api/model/derivedElements" -H "accept: application/json" -H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" -H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" -H "Content-Type: application/json" -d "{\\"information\\":{\\"subType\\":\\"consolidation_element\\",\\"name\\":\\"list derived element\\",\\"destinationFolderId\\":\\"98FE182C2A10427EACE0CD30B6768258\\"},\\"attribute\\":{\\"objectId\\":\\"5603951E4FE1BC04A44E44B85BBB8ED2\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Age Range\\"},\\"elements\\":[{\\"name\\":\\"Age under 34\\",\\"type\\":\\"list\\",\\"format\\":{\\"header\\":[],\\"values\\":[]},\\"options\\":{\\"display\\":\\"individual_items\\",\\"subtotal\\":\\"individual_items\\",\\"includeIndividual\\":true},\\"text\\":\\"Under 24, 25 to 34\\",\\"elements\\":[{\\"display\\":\\"Under 24\\",\\"elementId\\":\\"h1\\"},{\\"display\\":\\"25 to 34\\",\\"elementId\\":\\"h2\\"}]},{\\"id\\":\\"087A10774C48EA58DEBDEB8C79C7AD53\\",\\"name\\":\\"All Other\\",\\"type\\":\\"all_other\\",\\"format\\":{\\"header\\":[],\\"values\\":[]},\\"options\\":{\\"display\\":\\"this_element\\",\\"subtotal\\":\\"disable\\"}}]}"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("p",null,"You can view the new derived element's definition in the body of the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "A990C4E70AD0423FAF537A1727029F14",\n    "primaryLocale": "en-US",\n    "objectId": "5ED9E1F465664B7191D186515960E008",\n    "subType": "consolidation_element",\n    "name": "list derived element",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "attribute": {\n    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n    "subType": "attribute",\n    "name": "Age Range"\n  },\n  "elements": [\n    {\n      "id": "772CE3142D5D40B38BFC57BC26664143",\n      "name": "Age under 34",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "individual_items",\n        "includeIndividual": true\n      },\n      "text": "Under 24, 25 to 34",\n      "elements": [\n        {\n          "display": "Under 24",\n          "elementId": "h1"\n        },\n        {\n          "display": "25 to 34",\n          "elementId": "h2"\n        }\n      ]\n    },\n    {\n      "id": "B9A54B5DE9FB4D4E8FCEEBFECB1A1808",\n      "name": "All Other",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "disable"\n      }\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Sample Response Code: 201 (A new derived element is created successfully in the changeset.)"),(0,l.kt)("h3",{id:"commit-the-changeset"},"Commit the changeset"),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit"),"."),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://10.23.10.77:8443/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T17:42:13.312629Z",\n  "dateModified": "2020-11-17T17:44:30.814816Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "091B51154B22036C53CFBB9958B2E8FC",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,l.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,l.kt)("h3",{id:"delete-the-changeset"},"Delete the changeset"),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}")),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://10.23.10.77:8443/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Response Body: Empty"),(0,l.kt)("p",null,"Sample Response Code: 204 (The changeset is deleted successfully.)"),(0,l.kt)("h2",{id:"more-examples"},"More Examples"),(0,l.kt)("p",null,"In the above workflow, you created a derived element with ",(0,l.kt)("inlineCode",{parentName:"p"},'"list"')," element. This section contains more examples of how to create a derived element with a ",(0,l.kt)("inlineCode",{parentName:"p"},'"filter"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'"calculation"')," element."),(0,l.kt)("h3",{id:"create-a-derived-element-using-a-filter-element"},"Create a Derived Element Using a Filter Element"),(0,l.kt)("p",null,"In a derived element, only ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-filter-objects/create-a-filter-object#attribute-form-qualifications"},"attribute form qualifications")," and ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-filter-objects/create-a-filter-object#attribute-element-list-qualification"},"attribute element list qualifications")," are supported for filters. See those pages for more samples."),(0,l.kt)("p",null,"Create an ",(0,l.kt)("inlineCode",{parentName:"p"},"{Age Range} = 25 to 34, Under 24")," derived element with a filter element."),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "filter derived element",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "attribute": {\n    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n    "name": "Age Range"\n  },\n  "elements": [\n    {\n      "name": "FilterElementList",\n      "type": "filter",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "qualification": {\n        "text": "{Age Range} = 25 to 34, Under 24",\n        "tree": {\n          "type": "predicate_element_list",\n          "predicateId": "2BD916DF10BA4B5CB8CFFF0A3E1F9729",\n          "predicateTree": {\n            "attribute": {\n              "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n              "subType": "attribute",\n              "name": "Age Range"\n            },\n            "elements": [\n              {\n                "display": "25 to 34",\n                "elementId": "h2"\n              },\n              {\n                "display": "Under 24",\n                "elementId": "h1"\n              }\n            ],\n            "function": "in"\n          }\n        }\n      }\n    },\n    {\n      "id": "087A10774C48EA58DEBDEB8C79C7AD53",\n      "name": "All Other",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "disable"\n      }\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"create-a-derived-element-using-a-calculation-element"},"Create a Derived Element Using a Calculation Element"),(0,l.kt)("p",null,"Create an ",(0,l.kt)("inlineCode",{parentName:"p"},"Average({Age Range=Under 24}, 4.0, 5.0)")," derived element with a calculation element."),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "calculation derived element",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "attribute": {\n    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n    "name": "Age Range"\n  },\n  "elements": [\n    {\n      "name": "New Calculation 1",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "expression": {\n        "text": "Average(Under 24,4,5)",\n        "tree": {\n          "function": "average",\n          "children": [\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Under 24",\n                  "elementId": "h1",\n                  "attribute": {\n                    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n                    "subType": "attribute",\n                    "name": "Age Range"\n                  }\n                }\n              ]\n            },\n            {\n              "type": "constant",\n              "variant": {\n                "type": "double",\n                "value": "4.0"\n              }\n            },\n            {\n              "type": "constant",\n              "variant": {\n                "type": "double",\n                "value": "5.0"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "name": "All Other",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element"\n      }\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);