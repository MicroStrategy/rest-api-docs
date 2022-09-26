"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9361],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5314:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],c={title:"Workflow Sample - Create a Cube Object and Publish it",sidebar_label:"Create a Cube Object",description:"This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server."},l=void 0,s={unversionedId:"common-workflows/manage-cube-objects/create-a-cube-object",id:"common-workflows/manage-cube-objects/create-a-cube-object",title:"Workflow Sample - Create a Cube Object and Publish it",description:"This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server.",source:"@site/docs/common-workflows/manage-cube-objects/create-a-cube-object.md",sourceDirName:"common-workflows/manage-cube-objects",slug:"/common-workflows/manage-cube-objects/create-a-cube-object",permalink:"/rest-api-docs/common-workflows/manage-cube-objects/create-a-cube-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-cube-objects/create-a-cube-object.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Create a Cube Object and Publish it",sidebar_label:"Create a Cube Object",description:"This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a Cube's Definition",permalink:"/rest-api-docs/common-workflows/manage-cube-objects/retrieve-a-cube-definition"},next:{title:"Update a Cube Definition",permalink:"/rest-api-docs/common-workflows/manage-cube-objects/update-a-cube-definition"}},u={},p=[{value:"Create a Cube Object",id:"create-a-cube-object",level:2},{value:"Create a cube object using POST /api/model/cubes (New in 2021 Update 4)",id:"create-a-cube-object-using-post-apimodelcubes-new-in-2021-update-4",level:3},{value:"Create a cube object using POST /api/model/cubes using <code>showAdvancedProperties=true</code> (New in 2021 Update 6)",id:"create-a-cube-object-using-post-apimodelcubes-using-showadvancedpropertiestrue-new-in-2021-update-6",level:3},{value:"Publish the Cube",id:"publish-the-cube",level:2},{value:"Publish the cube using POST /api/v2/cubes/{cubeId} (New in 2021 Update 4)",id:"publish-the-cube-using-post-apiv2cubescubeid-new-in-2021-update-4",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ef6003b3-abe9-40ee-abf7-ff72de088f22?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server."),(0,o.kt)("p",null,"You want to create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Year, Category Analysis")," cube object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h2",{id:"create-a-cube-object"},"Create a Cube Object"),(0,o.kt)("h3",{id:"create-a-cube-object-using-post-apimodelcubes-new-in-2021-update-4"},"Create a cube object using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createCube"},"POST /api/model/cubes")," (New in 2021 Update 4)"),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "report_cube",\n    "name": "Year, Category Analysis",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "template": {\n    "rows": [\n      {\n        "id": "8D679D5111D3E4981000E787EC6DE8A4",\n        "name": "Year",\n        "type": "attribute"\n      },\n      {\n        "id": "8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Category",\n        "type": "attribute"\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost",\n            "subType": "metric"\n          },\n          {\n            "id": "4C051DB611D3E877C000B3B2D86C964F",\n            "name": "Profit",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "filter": {\n    "text": "(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)",\n    "tree": {\n      "function": "and",\n      "children": [\n        {\n          "type": "predicate_element_list",\n          "predicateId": "34BD0D556AC6423CB8061BB90A0C1AB2",\n          "predicateTree": {\n            "attribute": {\n              "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",\n              "subType": "attribute",\n              "name": "Subcategory"\n            },\n            "elements": [\n              {\n                "display": "Art & Architecture",\n                "elementId": "h11"\n              },\n              {\n                "display": "Business",\n                "elementId": "h12"\n              },\n              {\n                "display": "Computers",\n                "elementId": "h23"\n              },\n              {\n                "display": "Electronics - Miscellaneous",\n                "elementId": "h24"\n              }\n            ],\n            "function": "in"\n          }\n        },\n        {\n          "type": "predicate_metric_qualification",\n          "predicateId": "EF616BAECDED4AE0A91C6A4A5092ED92",\n          "predicateText": "(Revenue > 100000)",\n          "predicateTree": {\n            "function": "greater",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "100000.0"\n                }\n              }\n            ],\n            "levelType": "none",\n            "metric": {\n              "objectId": "4C05177011D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Revenue"\n            },\n            "metricFunction": "value",\n            "isIndependent": 0,\n            "nullInclude": 0\n          }\n        }\n      ],\n      "type": "operator"\n    }\n  },\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "project_default"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \\\n-H "Content-Type: application/json" \\\n-d \'{"information":{"subType":"report_cube","name":"Year, Category Analysis2","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"template":{"rows":[{"id":"8D679D5111D3E4981000E787EC6DE8A4","name":"Year","type":"attribute"},{"id":"8D679D3711D3E4981000E787EC6DE8A4","name":"Category","type":"attribute"}],"columns":[{"type":"metrics","elements":[{"id":"7FD5B69611D5AC76C000D98A4CC5F24F","name":"Cost","subType":"metric"},{"id":"4C051DB611D3E877C000B3B2D86C964F","name":"Profit","subType":"metric"}]}],"pageBy":[]},"filter":{"text":"(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)","tree":{"function":"and","children":[{"type":"predicate_element_list","predicateId":"34BD0D556AC6423CB8061BB90A0C1AB2","predicateTree":{"attribute":{"objectId":"8D679D4F11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Subcategory"},"elements":[{"display":"Art & Architecture","elementId":"h11"},{"display":"Business","elementId":"h12"},{"display":"Computers","elementId":"h23"},{"display":"Electronics - Miscellaneous","elementId":"h24"}],"function":"in"}},{"type":"predicate_metric_qualification","predicateId":"EF616BAECDED4AE0A91C6A4A5092ED92","predicateText":"(Revenue > 100000)","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"100000.0"}}],"levelType":"none","metric":{"objectId":"4C05177011D3E877C000B3B2D86C964F","subType":"metric","name":"Revenue"},"metricFunction":"value","isIndependent":0,"nullInclude":0}}],"type":"operator"}},"options":{"dataLanguages":{"dataLanguageType":"project_default"},"dataRefresh":"replace","dataPartition":{"partitionAttribute":{},"numberOfPartitions":0,"fetchDataSlicesInParallel":false}}}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-18T20:52:06.593Z",\n    "dateModified": "2022-03-18T20:52:06.593Z",\n    "versionId": "F77DA8EB194CD4784D38A684CAD2F852",\n    "primaryLocale": "en-US",\n    "objectId": "2F15C95D934175CBC9B915915D485B0E",\n    "subType": "report_cube",\n    "name": "Year, Category Analysis2"\n  },\n  "template": {\n    "rows": [\n      {\n        "id": "8D679D5111D3E4981000E787EC6DE8A4",\n        "name": "Year",\n        "type": "attribute"\n      },\n      {\n        "id": "8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Category",\n        "type": "attribute"\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost",\n            "subType": "metric"\n          },\n          {\n            "id": "4C051DB611D3E877C000B3B2D86C964F",\n            "name": "Profit",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "filter": {\n    "text": "(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)",\n    "tree": {\n      "function": "and",\n      "children": [\n        {\n          "type": "predicate_element_list",\n          "predicateId": "973167FF74AD4B42ABB86382A8397655",\n          "predicateTree": {\n            "attribute": {\n              "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",\n              "subType": "attribute",\n              "name": "Subcategory"\n            },\n            "elements": [\n              {\n                "display": "Art & Architecture",\n                "elementId": "h11"\n              },\n              {\n                "display": "Business",\n                "elementId": "h12"\n              },\n              {\n                "display": "Computers",\n                "elementId": "h23"\n              },\n              {\n                "display": "Electronics - Miscellaneous",\n                "elementId": "h24"\n              }\n            ],\n            "function": "in"\n          }\n        },\n        {\n          "type": "predicate_metric_qualification",\n          "predicateId": "BAB9A5D62B7A4A9692041F2451EBD1E3",\n          "predicateText": "(Revenue > 100000)",\n          "predicateTree": {\n            "function": "greater",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "100000.0"\n                }\n              }\n            ],\n            "levelType": "none",\n            "metric": {\n              "objectId": "4C05177011D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Revenue"\n            },\n            "metricFunction": "value",\n            "isIndependent": 0,\n            "nullInclude": 0\n          }\n        }\n      ],\n      "type": "operator"\n    }\n  },\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "project_default"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (A cube is created successfully.)"),(0,o.kt)("h3",{id:"create-a-cube-object-using-post-apimodelcubes-using-showadvancedpropertiestrue-new-in-2021-update-6"},"Create a cube object using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createCube"},"POST /api/model/cubes")," using ",(0,o.kt)("inlineCode",{parentName:"h3"},"showAdvancedProperties=true")," (New in 2021 Update 6)"),(0,o.kt)("p",null,"You want to create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Actual vs Forecast Performance Cube")," cube object under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Public Objects")," folder in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MicroStrategy Tutorial")," project. The folder object ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://10.23.33.10:8080/MicroStrategyLibrary/api/model/cubes?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: ll16k38bt7e6i9f0pb2p7mcs85" \\\n-H "X-MSTR-ProjectID: 6F2026DB4172DC4B219ADC914FF944BB" \\\n-H "Content-Type: application/json" \\\n-d \'{"information":{"subType":"report_cube","name":"Actual vs Forecast Performance Cube","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"template":{},"filter":{},"options":{"dataLanguages":{"dataLanguageType":"all_project_data_language"},"dataRefresh":"replace","dataPartition":{"partitionAttribute":{},"numberOfPartitions":0,"fetchDataSlicesInParallel":false}},"advancedProperties":{"vldbProperties":{"[AnalyticalEngineProperties].[EvaluationOrdering]":{"name":"EvaluationOrdering","value":"1","type":"int32","resolvedLocation":"default"},"[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]":{"name":"NullCheckingForAnalyticalEngine","value":"1","type":"int32","resolvedLocation":"default"}},"metricJoinTypes":{"4C051DB611D3E877C000B3B2D86C964F":{"metric":{"objectId":"4C051DB611D3E877C000B3B2D86C964F","subType":"metric","name":"Profit"},"joinType":"inner","resolvedLocation":"default"},"4C05177011D3E877C000B3B2D86C964F":{"metric":{"objectId":"4C05177011D3E877C000B3B2D86C964F","subType":"metric","name":"Revenue"},"joinType":"inner","resolvedLocation":"default"},"8D7D59C144AB891C57FEFA873ABE1C92":{"metric":{"objectId":"8D7D59C144AB891C57FEFA873ABE1C92","subType":"metric","name":"Revenue Forecast"},"joinType":"inner","resolvedLocation":"default"},"1FAF96994873E7CEFC71BDB269522636":{"metric":{"objectId":"1FAF96994873E7CEFC71BDB269522636","subType":"metric","name":"Profit Forecast"},"joinType":"inner","resolvedLocation":"default"},"381980B211D40BC8C000C8906B98494F":{"metric":{"objectId":"381980B211D40BC8C000C8906B98494F","subType":"metric","name":"Discount"},"joinType":"inner","resolvedLocation":"default"},"2680DF9E11D5C3FEC0000B881FDA1A4F":{"metric":{"objectId":"2680DF9E11D5C3FEC0000B881FDA1A4F","subType":"metric","name":"Profit Margin"},"joinType":"inner","resolvedLocation":"default"},"89219DD247681F5E87BDE69E4C6E871E":{"metric":{"objectId":"89219DD247681F5E87BDE69E4C6E871E","subType":"metric","name":"Discount Growth"},"joinType":"inner","resolvedLocation":"default"}},"attributeJoinTypes":{"8D679D4411D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D4411D3E4981000E787EC6DE8A4","subType":"attribute","name":"Month"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D5111D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D3511D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D3511D3E4981000E787EC6DE8A4","subType":"attribute","name":"Call Center"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D4B11D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D4B11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Region"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D3711D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D3711D3E4981000E787EC6DE8A4","subType":"attribute","name":"Category"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D4F11D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D4F11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Subcategory"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"}}}}\'\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "report_cube",\n    "name": "Actual vs Forecast Performance Cube",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "template": {},\n  "filter": {},\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "all_project_data_language"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "default"\n      },\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    },\n    "metricJoinTypes": {\n      "4C051DB611D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C051DB611D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Profit"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      },\n      "4C05177011D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C05177011D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Revenue"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D4411D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Month"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      },\n      "8D679D5111D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-06-15T10:44:23.465Z",\n    "dateModified": "2022-06-15T10:44:23.465Z",\n    "versionId": "CE4F514D41AA77B5A6C883BCA4F688E2",\n    "primaryLocale": "en-US",\n    "objectId": "3A5363B04D61B77515B3D48D53671CEC",\n    "subType": "report_cube",\n    "name": "Actual vs Forecast Performance Cube"\n  },\n  "template": {\n    "rows": [],\n    "columns": [],\n    "pageBy": []\n  },\n  "filter": {},\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "all_project_data_language"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "report"\n      },\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "report"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (A cube is created successfully.)"),(0,o.kt)("h2",{id:"publish-the-cube"},"Publish the Cube"),(0,o.kt)("h3",{id:"publish-the-cube-using-post-apiv2cubescubeid-new-in-2021-update-4"},"Publish the cube using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/publishCube_2"},"POST /api/v2/cubes/{cubeId}")," (New in 2021 Update 4)"),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/2F15C95D934175CBC9B915915D485B0E" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "478:RU5WLTI4MjA0MExBSU9VU0Ux",\n  "jobId": 478\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 202 (Request accepted for processing.)"))}m.isMDXComponent=!0}}]);