"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9617],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r,a=n(83117),i=n(80102),o=(n(67294),n(3905)),l=["components"],p={title:"Create an incremental refresh report with advanced properties",sidebar_label:"Create an IRR with advanced properties",description:"This topic covers several workflows for creating a new Incremental Refresh Report with advanced properties through the Modeling service."},s=void 0,c={unversionedId:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr-with-advanced-properties",id:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr-with-advanced-properties",title:"Create an incremental refresh report with advanced properties",description:"This topic covers several workflows for creating a new Incremental Refresh Report with advanced properties through the Modeling service.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr-with-advanced-properties.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report",slug:"/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr-with-advanced-properties",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr-with-advanced-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr-with-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Create an incremental refresh report with advanced properties",sidebar_label:"Create an IRR with advanced properties",description:"This topic covers several workflows for creating a new Incremental Refresh Report with advanced properties through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an IRR definition with advanced properties",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties"},next:{title:"Update IRR advanced properties",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-irr-advanced-properties"}},d={},m=[],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 6",mdxType:"Available"}),(0,o.kt)("p",null,"This topic covers several workflows for creating a new Incremental Refresh Report with advanced properties through the Modeling service."),(0,o.kt)("p",null,'You want to create a new Incremental Refresh Report and name it \u201cOriginal Test" in the destination folder of ',(0,o.kt)("inlineCode",{parentName:"p"},"8A1831FF494F528D02A4A8BF5FB73459"),". The target cube of the Incremental Refresh Report is called ",(0,o.kt)("inlineCode",{parentName:"p"},"IC01")," with the object ID of ",(0,o.kt)("inlineCode",{parentName:"p"},"946C0C0142C5210D01FEA1AA6B83F202"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("p",null,"You also want to set some advanced properties to a specific value instead of the default value."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Metric Level Determination under Analytical Engine to the option of ",(0,o.kt)("strong",{parentName:"li"},"Include higher-level related attributes in metric level (Deprecated)"),"."),(0,o.kt)("li",{parentName:"ul"},"Null Checking for Analytical Engine under Analytical to the option of ",(0,o.kt)("strong",{parentName:"li"},"Scalar and aggregation calculations treat NULL as zero (Deprecated)"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."),(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Create a new Incremental Refresh Report using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createIncrementalRefreshReport"},"POST /api/model/incrementalRefresh"),"."),(0,o.kt)("p",null,"To create the new Incremental Refresh Report, you must submit the request body with the correct information."),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Header: ",(0,o.kt)("inlineCode",{parentName:"li"},"X-MSTR-authToken")," - The authorization token"),(0,o.kt)("li",{parentName:"ul"},"Header: ",(0,o.kt)("inlineCode",{parentName:"li"},"X-MSTR-ProjectID")," - The ID of the project"),(0,o.kt)("li",{parentName:"ul"},"Parameter: ",(0,o.kt)("inlineCode",{parentName:"li"},"showFilterTokens"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specify whether the Incremental Refresh Report ",(0,o.kt)("inlineCode",{parentName:"li"},"filter")," is returned in ",(0,o.kt)("inlineCode",{parentName:"li"},"tokens")," format, along with ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tree")," formats."),(0,o.kt)("li",{parentName:"ul"},"If omitted or ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", only ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tree")," formats are returned."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", all ",(0,o.kt)("inlineCode",{parentName:"li"},"text"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"tree"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"tokens")," formats are returned.")))),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "report_increment_refresh",\n    "name": "Original Test"\n  },\n  "targetCube": {\n    "objectId": "946C0C0142C5210D01FEA1AA6B83F202",\n    "subType": "report_cube",\n    "name": "IC01"\n  },\n  "incrementType": "filter",\n  "refreshType": "update",\n  "filter": {\n    "text": "Year = 2016, 2017, 2015",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "C131BAB2177044AF85E52C40F75F0A35",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2016",\n            "elementId": "h2016"\n          },\n          {\n            "display": "2017",\n            "elementId": "h2017"\n          },\n          {\n            "display": "2015",\n            "elementId": "h2015"\n          }\n        ],\n        "function": "in"\n      }\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[MetricLevelDetermination]": {\n        "name": "MetricLevelDetermination",\n        "value": "true",\n        "type": "boolean",\n        "resolvedLocation": "report"\n      },\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "value": "2",\n        "type": "int32",\n        "resolvedLocation": "report"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: qfjlu36r0cjpnhadp2kj0ud45s" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \\\n-H "Content-Type: application/json" \\\n-d \'{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","subType":"report_increment_refresh","name":"Original Test"},"targetCube":{"objectId":"946C0C0142C5210D01FEA1AA6B83F202","subType":"report_cube","name":"IC01"},"incrementType":"filter","refreshType":"update","filter":{"text":"Year = 2016, 2017, 2015","tree":{"type":"predicate_element_list","predicateId":"C131BAB2177044AF85E52C40F75F0A35","predicateTree":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"elements":[{"display":"2016","elementId":"h2016"},{"display":"2017","elementId":"h2017"},{"display":"2015","elementId":"h2015"}],"function":"in"}}},"advancedProperties":{"vldbProperties":{"[AnalyticalEngineProperties].[MetricLevelDetermination]":{"name":"MetricLevelDetermination","value":"true","type":"boolean","resolvedLocation":"report"},"[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]":{"name":"NullCheckingForAnalyticalEngine","value":"2","type":"int32","resolvedLocation":"report"}}}}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the Incremental Refresh Report definition in the body of the response. Below is an example of filter in ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tree")," formats."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-06-10T07:17:20.563Z",\n    "dateModified": "2022-06-10T07:17:20.563Z",\n    "versionId": "3E14625B45C27EF65DDF5AA3A2087788",\n    "primaryLocale": "en-US",\n    "objectId": "BC95299E4447D23A6EA4E9B1049F4221",\n    "subType": "report_increment_refresh",\n    "name": "Original Test"\n  },\n  "targetCube": {\n    "objectId": "946C0C0142C5210D01FEA1AA6B83F202",\n    "subType": "report_cube",\n    "name": "IC01"\n  },\n  "incrementType": "filter",\n  "refreshType": "update",\n  "filter": {\n    "text": "Year = 2016, 2017, 2015",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "86827BEDB1EB4B6BB2BF1141A10E2ED5",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2016",\n            "elementId": "h2016"\n          },\n          {\n            "display": "2017",\n            "elementId": "h2017"\n          },\n          {\n            "display": "2015",\n            "elementId": "h2015"\n          }\n        ],\n        "function": "in"\n      }\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {\n        "name": "ConsolidationSubtotal",\n        "value": "true",\n        "type": "boolean",\n        "resolvedLocation": "default"\n      },\n      "[MDX Syntax].[MDX Add Fake Measure]": {\n        "name": "MDX Add Fake Measure",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    },\n    "metricJoinTypes": {\n      "7FD5B69611D5AC76C000D98A4CC5F24F": {\n        "metric": {\n          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "subType": "metric",\n          "name": "Cost"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      },\n      "4C051DB611D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C051DB611D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Profit"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D5111D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      },\n      "8D679D3711D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Incremental Refresh Report's definition is returned successfully.)"))}h.isMDXComponent=!0}}]);