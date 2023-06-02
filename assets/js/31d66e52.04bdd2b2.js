"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[284],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6414:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a,r=n(83117),i=n(80102),o=(n(67294),n(3905)),l=["components"],p={title:"Update the datamart definition",description:"This workflow sample demonstrates how to update a Datamart definition through the Modeling service."},d=void 0,s={unversionedId:"common-workflows/modeling/manage-datamart-objects/update-a-datamart-definition",id:"common-workflows/modeling/manage-datamart-objects/update-a-datamart-definition",title:"Update the datamart definition",description:"This workflow sample demonstrates how to update a Datamart definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-datamart-objects/update-a-datamart-definition.md",sourceDirName:"common-workflows/modeling/manage-datamart-objects",slug:"/common-workflows/modeling/manage-datamart-objects/update-a-datamart-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/update-a-datamart-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-datamart-objects/update-a-datamart-definition.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1685725225,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Update the datamart definition",description:"This workflow sample demonstrates how to update a Datamart definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a datamart from scratch",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-scratch"},next:{title:"Retrieve applicable properties of a datamart",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart"}},m={},u=[{value:"Update the datamart",id:"update-the-datamart",level:2},{value:"Update a datamart\u2019s advanced properties",id:"update-a-datamarts-advanced-properties",level:2}],c=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{since:"2021 Update 7",mdxType:"Available"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to update a datamart definition through the Modeling service."),(0,o.kt)("p",null,'You want to update the definition of the "Customer in Region Northeast" datamart with following changes:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Modify the filter to Region in "Northwest"'),(0,o.kt)("li",{parentName:"ul"},'Add metric "Profit" to the template'),(0,o.kt)("li",{parentName:"ul"},'Change the datamart database instance to "Statistics"'),(0,o.kt)("li",{parentName:"ul"},'Change the table name to "!p_demo"')),(0,o.kt)("p",null,"The target datamart ID is D9DD010946CAFA3B1E2F6684F2D940B1 in the project of B7CA92F04B9FAE8D941C3E9B7E0CD754. 308B250B44F3FB3180634EAE6A1A14AA"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."),(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,o.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,o.kt)("td",{parentName:"tr",align:null},"The project ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"datamartId"),(0,o.kt)("td",{parentName:"tr",align:null},"The object ID of target datamart that you want to modify.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"showFilterTokens"),(0,o.kt)("td",{parentName:"tr",align:null},'Specify whether the Datamart\u2019s "filter" is returned in "tokens" format, along with "text" and "tree" formats.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the format in which the expressions are returned in response, applied to the expressions in a fact or attribute and custom expressions used in a filter, prompt, security filter, custom group, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"showAdvancedProperties"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify whether the datamart\u2019s definition is returned with advanced properties.")))),(0,o.kt)("h2",{id:"update-the-datamart"},"Update the datamart"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-putDatamart"},"PUT /api/model/datamarts/{datamartId}")),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "name": "Customer Region",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D3C11D3E4981000E787EC6DE8A4",\n          "name": "Customer",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n              "name": "Cost",\n              "subType": "metric"\n            },\n            {\n              "id": "4C051DB611D3E877C000B3B2D86C964F",\n              "name": "Profit",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {\n      "text": "{Customer Region} = Northwest",\n      "tree": {\n        "type": "predicate_element_list",\n        "predicateId": "AA66A742542347B3A016BA31FF28F2C4",\n        "predicateTree": {\n          "attribute": {\n            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Customer Region"\n          },\n          "elements": [\n            {\n              "display": "Northwest",\n              "elementId": "h6"\n            }\n          ],\n          "function": "in"\n        }\n      }\n    }\n  },\n  "datamartOptions": {\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "!p_demo"\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PUT\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/D9DD010946CAFA3B1E2F6684F2D940B1\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: a513l5d5dmoi3q73ebdif6bm8n\' \\\n  -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "name": "Customer Region",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D3C11D3E4981000E787EC6DE8A4",\n          "name": "Customer",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n              "name": "Cost",\n              "subType": "metric"\n            },\n            {\n              "id": "4C051DB611D3E877C000B3B2D86C964F",\n              "name": "Profit",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {\n      "text": "{Customer Region} = Northwest",\n      "tree": {\n        "type": "predicate_element_list",\n        "predicateId": "AA66A742542347B3A016BA31FF28F2C4",\n        "predicateTree": {\n          "attribute": {\n            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Customer Region"\n          },\n          "elements": [\n            {\n              "display": "Northwest",\n              "elementId": "h6"\n            }\n          ],\n          "function": "in"\n        }\n      }\n    }\n  },\n  "datamartOptions": {\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "!p_demo"\n  }\n}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the updated datamart definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-09-08T09:23:38.000Z",\n    "dateModified": "2022-09-09T04:09:38.520Z",\n    "versionId": "D02FE20949FEF4307334BAB99B318FD0",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "D9DD010946CAFA3B1E2F6684F2D940B1",\n    "subType": "report_datamart",\n    "name": "datamart"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "name": "Customer Region",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D3C11D3E4981000E787EC6DE8A4",\n          "name": "Customer",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n              "name": "Cost",\n              "subType": "metric"\n            },\n            {\n              "id": "4C051DB611D3E877C000B3B2D86C964F",\n              "name": "Profit",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {\n      "text": "{Customer Region} = Northwest",\n      "tree": {\n        "type": "predicate_element_list",\n        "predicateId": "F82721C949B74F4BAC76070E8F8970A4",\n        "predicateTree": {\n          "attribute": {\n            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Customer Region"\n          },\n          "elements": [\n            {\n              "display": "Northwest",\n              "elementId": "h6"\n            }\n          ],\n          "function": "in"\n        }\n      }\n    }\n  },\n  "datamartOptions": {\n    "append": false,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "!p_demo",\n    "placeholderIncluded": false,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Execution Time]": {\n        "name": "Maximum Execution Time",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Rows]": {\n        "name": "Maximum Rows",\n        "value": "65536",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Pre SQLs]": {\n        "name": "Pre SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Descriptor]": {\n        "name": "Table Descriptor",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Option]": {\n        "name": "Table Option",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Prefix]": {\n        "name": "Table Prefix",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Qualifier]": {\n        "name": "Table Qualifier",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Space]": {\n        "name": "Table Space",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Type]": {\n        "name": "Table Type",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The datamart definition is updated successfully.)"),(0,o.kt)("h2",{id:"update-a-datamarts-advanced-properties"},"Update a datamart\u2019s advanced properties"),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve the definition of a datamart with advanced properties through the Modeling service."),(0,o.kt)("p",null,"This workflow is the same as Update the datamart using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-putDatamart"},"PUT /api/model/datamarts/{datamartId}")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showAdvancedProperties")," is omitted or false, the advanced properties are not returned."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showAdvancedProperties")," is true, the advanced properties are returned."),(0,o.kt)("p",null,"You put the modified AdvancedProperties in the request body."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "2",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    },\n    "useDefaultEvaluationOrder": true\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PUT\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/D9DD010946CAFA3B1E2F6684F2D940B1?showAdvancedProperties=true\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: a513l5d5dmoi3q73ebdif6bm8n\' \\\n  -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "advancedProperties": {\n        "vldbProperties": {\n            "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n                "name": "EvaluationOrdering",\n                "value": "2",\n                "type": "int32",\n                "resolvedLocation": "default"\n            }\n        },\n        "useDefaultEvaluationOrder": true\n    }\n}\'\n')),(0,o.kt)("p",null,"Sample Response Body: You can view the updated datamart's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-09-08T09:23:38.000Z",\n    "dateModified": "2022-09-09T04:15:44.093Z",\n    "versionId": "C64B140C467EF65AD3CA5F9E321CE0C3",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "D9DD010946CAFA3B1E2F6684F2D940B1",\n    "subType": "report_datamart",\n    "name": "datamart",\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "name": "Customer Region",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D3C11D3E4981000E787EC6DE8A4",\n          "name": "Customer",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n              "name": "Cost",\n              "subType": "metric"\n            },\n            {\n              "id": "4C051DB611D3E877C000B3B2D86C964F",\n              "name": "Profit",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {\n      "text": "{Customer Region} = Northwest",\n      "tree": {\n        "type": "predicate_element_list",\n        "predicateId": "4CD5247CE99A4174A84909AAAF944CA7",\n        "predicateTree": {\n          "attribute": {\n            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Customer Region"\n          },\n          "elements": [\n            {\n              "display": "Northwest",\n              "elementId": "h6"\n            }\n          ],\n          "function": "in"\n        }\n      }\n    }\n  },\n  "datamartOptions": {\n    "append": false,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "!p_demo",\n    "placeholderIncluded": false,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Execution Time]": {\n        "name": "Maximum Execution Time",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Rows]": {\n        "name": "Maximum Rows",\n        "value": "65536",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Pre SQLs]": {\n        "name": "Pre SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Descriptor]": {\n        "name": "Table Descriptor",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Option]": {\n        "name": "Table Option",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Prefix]": {\n        "name": "Table Prefix",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Qualifier]": {\n        "name": "Table Qualifier",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Space]": {\n        "name": "Table Space",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Type]": {\n        "name": "Table Type",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "2",\n        "type": "int32",\n        "resolvedLocation": "report"\n      },\n      "[AnalyticalEngineProperties].[MetricLevelDetermination]": {\n        "name": "MetricLevelDetermination",\n        "value": "false",\n        "type": "boolean",\n        "resolvedLocation": "default"\n      }\n    },\n    "metricJoinTypes": {\n      "7FD5B69611D5AC76C000D98A4CC5F24F": {\n        "metric": {\n          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "subType": "metric",\n          "name": "Cost"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      },\n      "4C051DB611D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C051DB611D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Profit"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D3B11D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      },\n      "8D679D3C11D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      }\n    },\n    "drillOptions": {\n      "drillingEnableReportDrilling": {\n        "value": true,\n        "resolvedLocation": "default"\n      },\n      "useDefaultEvaluationOrder": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The datamart definition is updated successfully.)"),(0,o.kt)("p",null,"The model for the definition of a datamart can be updated with the following fields:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"subType")," cannot be modified through REST API.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"information"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description")," (",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - The description that helps user to understand the definition"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dataSource"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dataTemplate")," - The data template of the datamart."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filter")," - The filter definition of the datamart."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"table")," - The table is only required and used when the ",(0,o.kt)("inlineCode",{parentName:"li"},"sourceType"),' is "custom_sql_free_form".'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"datamartOptions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"append")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - This flag indicate whether to create a new table or append to the existing table every time report runs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"targetSource")," - The database instance where the table will be placed in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tableName")," (",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - The name of the inserted table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"placeholderIncluded")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - The placeholders we support on table name. The details can be referred ",(0,o.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"datamartProperties")," - The datamart properties that are used to configure the table in warehouse."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timezone"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"objectId")," (",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - The timezone ID applied on the datamart."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - The name of timezone object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subType")," (",(0,o.kt)("inlineCode",{parentName:"li"},"String"),') - The sub type of timezone. The available values are "timezone_custom" and "timezone_system".'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"advancedProperties"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vldbProperties")," - The VLDB Properties that are applicable to datamart and their values."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metricJoinType")," - The metric join type that are applicable to datamart and their values."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"attributeJoinType")," - The attribute join type that are applicable to datamart and their values."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useDefaultEvaluationOrder")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - This flag indicates whether to use the default evaluation order for datamart.")))))}f.isMDXComponent=!0}}]);