"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5485],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,b=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a,r=n(3117),o=n(102),i=(n(7294),n(3905)),l=["components"],s={title:"Create a datamart from scratch",description:"This workflow sample demonstrates how to create a new Datamart object from scratch through the Modeling service."},m=void 0,p={unversionedId:"common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-scratch",id:"common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-scratch",title:"Create a datamart from scratch",description:"This workflow sample demonstrates how to create a new Datamart object from scratch through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-scratch.md",sourceDirName:"common-workflows/modeling/manage-datamart-objects",slug:"/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-scratch",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-scratch",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-scratch.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Create a datamart from scratch",description:"This workflow sample demonstrates how to create a new Datamart object from scratch through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a datamart from a source report",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-a-source-report"},next:{title:"Update the datamart definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/update-a-datamart-definition"}},d={},c=[{value:"Create a new datamart",id:"create-a-new-datamart",level:2},{value:"Create a datamart from scratch with advanced properties",id:"create-a-datamart-from-scratch-with-advanced-properties",level:2},{value:"The model for the definition of the datamart",id:"the-model-for-the-definition-of-the-datamart",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),b={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to create a new datamart object through the Modeling service."),(0,i.kt)("p",null,'You want to create a new datamart and name it as \u201cCustomer in Region Northeast" in the destination folder of 8A1831FF494F528D02A4A8BF5FB73459. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the project.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null},"showFilterTokens"),(0,i.kt)("td",{parentName:"tr",align:null},'Specify whether the Datamart\u2019s "filter" is returned in "tokens" format, along with "text" and "tree" formats.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the format in which the expressions are returned in response, applied to the expressions in a fact or attribute and custom expressions used in a filter, prompt, security filter, custom group, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null},"showAdvancedProperties"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify whether the datamart\u2019s definition is returned with advanced properties.")))),(0,i.kt)("h2",{id:"create-a-new-datamart"},"Create a new datamart"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/post_api_model_datamarts"},"POST /api/model/datamarts")),(0,i.kt)("p",null,"To create the new datamart , you need to submit the request body with the correct information for each field."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"information"),", you need to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationFolderId")," for the datamart you want to create."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "name": "datamart"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n          "name": "Subcategory",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4B11D3E4981000E787EC6DE8A4",\n          "name": "Region",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4A11D3E4981000E787EC6DE8A4",\n          "name": "Quarter",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4211D3E4981000E787EC6DE8A4",\n          "name": "Item",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "1FAF96994873E7CEFC71BDB269522636",\n              "name": "Profit Forecast",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    }\n  },\n  "datamartOptions": {\n    "append": true,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "MD_TEST",\n    "placeholderIncluded": true,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Execution Time]": {\n        "name": "Maximum Execution Time",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Rows]": {\n        "name": "Maximum Rows",\n        "value": "65536",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Pre SQLs]": {\n        "name": "Pre SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Descriptor]": {\n        "name": "Table Descriptor",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'POST\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: 7k87j4b9q8mu22ve2tp5lophq7\' \\\n  -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "information":{\n        "destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459",\n        "name": "datamart"\n    },\n    "sourceType": "normal",\n    "dataSource": {\n        "dataTemplate": {\n            "units": [\n                {\n                    "id": "8D679D3711D3E4981000E787EC6DE8A4",\n                    "name": "Category",\n                    "type": "attribute"\n                },\n                {\n                    "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n                    "name": "Subcategory",\n                    "type": "attribute"\n                },\n                {\n                    "id": "8D679D4B11D3E4981000E787EC6DE8A4",\n                    "name": "Region",\n                    "type": "attribute"\n                },\n                {\n                    "id": "8D679D4A11D3E4981000E787EC6DE8A4",\n                    "name": "Quarter",\n                    "type": "attribute"\n                },\n                {\n                    "id": "8D679D4211D3E4981000E787EC6DE8A4",\n                    "name": "Item",\n                    "type": "attribute"\n                },\n                {\n                    "type": "metrics",\n                    "elements": [\n                        {\n                            "id": "1FAF96994873E7CEFC71BDB269522636",\n                            "name": "Profit Forecast",\n                            "subType": "metric"\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    "datamartOptions": {\n        "append": true,\n        "targetSource": {\n            "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n            "subType": "db_role",\n            "name": "Statistics"\n        },\n        "tableName": "MD_TEST",\n        "placeholderIncluded": true,\n        "datamartProperties": {\n            "[DatamartProperties].[Create Table Post String]": {\n                "name": "Create Table Post String",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Insert SQLs]": {\n                "name": "Insert SQLs",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Maximum Execution Time]": {\n                "name": "Maximum Execution Time",\n                "value": "0",\n                "type": "int32",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Maximum Rows]": {\n                "name": "Maximum Rows",\n                "value": "65536",\n                "type": "int32",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Post SQLs]": {\n                "name": "Post SQLs",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Pre SQLs]": {\n                "name": "Pre SQLs",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Table Descriptor]": {\n                "name": "Table Descriptor",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            }\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the new datamart definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-09-08T09:23:37.702Z",\n    "dateModified": "2022-09-08T09:23:37.702Z",\n    "versionId": "1F5FC3144405A696E70DAE9606A20062",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "D9DD010946CAFA3B1E2F6684F2D940B1",\n    "subType": "report_datamart",\n    "name": "datamart"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n          "name": "Subcategory",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4B11D3E4981000E787EC6DE8A4",\n          "name": "Region",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4A11D3E4981000E787EC6DE8A4",\n          "name": "Quarter",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4211D3E4981000E787EC6DE8A4",\n          "name": "Item",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "1FAF96994873E7CEFC71BDB269522636",\n              "name": "Profit Forecast",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {}\n  },\n  "datamartOptions": {\n    "append": true,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "MD_TEST",\n    "placeholderIncluded": true,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Execution Time]": {\n        "name": "Maximum Execution Time",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Rows]": {\n        "name": "Maximum Rows",\n        "value": "65536",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Pre SQLs]": {\n        "name": "Pre SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Descriptor]": {\n        "name": "Table Descriptor",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Option]": {\n        "name": "Table Option",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Prefix]": {\n        "name": "Table Prefix",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Qualifier]": {\n        "name": "Table Qualifier",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Space]": {\n        "name": "Table Space",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Type]": {\n        "name": "Table Type",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A datamart is created successfully.)"),(0,i.kt)("h2",{id:"create-a-datamart-from-scratch-with-advanced-properties"},"Create a datamart from scratch with advanced properties"),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve the definition of a datamart with advanced properties through the Modeling service."),(0,i.kt)("p",null,"This workflow is the same as using POST /api/model/datamarts."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showAdvancedProperties")," is omitted or false, the advanced properties are not returned."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showAdvancedProperties")," is true, the advanced properties are are returned."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "name": "DMR advanced properties"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n          "name": "Subcategory",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "1FAF96994873E7CEFC71BDB269522636",\n              "name": "Profit Forecast",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    }\n  },\n  "datamartOptions": {\n    "append": true,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "MD_TEST",\n    "placeholderIncluded": true,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      }\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "2",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    },\n    "useDefaultEvaluationOrder": true\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'POST\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts?showAdvancedProperties=true\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: 4va2i187soo1gbjvbiuk90na6v\' \\\n  -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "information":{\n        "destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459",\n        "name": "DMR advanced properties"\n    },\n    "sourceType": "normal",\n    "dataSource": {\n        "dataTemplate": {\n            "units": [\n                {\n                    "id": "8D679D3711D3E4981000E787EC6DE8A4",\n                    "name": "Category",\n                    "type": "attribute"\n                },\n                {\n                    "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n                    "name": "Subcategory",\n                    "type": "attribute"\n                },\n                {\n                    "type": "metrics",\n                    "elements": [\n                        {\n                            "id": "1FAF96994873E7CEFC71BDB269522636",\n                            "name": "Profit Forecast",\n                            "subType": "metric"\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    "datamartOptions": {\n        "append": true,\n        "targetSource": {\n            "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n            "subType": "db_role",\n            "name": "Statistics"\n        },\n        "tableName": "MD_TEST",\n        "placeholderIncluded": true,\n        "datamartProperties": {\n            "[DatamartProperties].[Create Table Post String]": {\n                "name": "Create Table Post String",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            }\n        }\n    },\n    "advancedProperties": {\n        "vldbProperties": {\n            "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n                "name": "EvaluationOrdering",\n                "value": "2",\n                "type": "int32",\n                "resolvedLocation": "default"\n            }\n        },\n        "useDefaultEvaluationOrder": true\n    }\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-09-08T10:03:46.524Z",\n    "dateModified": "2022-09-08T10:03:46.524Z",\n    "versionId": "53A787E94D62295045F546A0F9F3A8DE",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "E552D3CE48D2FE0ECC1D42BB71B3BD76",\n    "subType": "report_datamart",\n    "name": "DMR advanced properties"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n          "name": "Subcategory",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "1FAF96994873E7CEFC71BDB269522636",\n              "name": "Profit Forecast",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {}\n  },\n  "datamartOptions": {\n    "append": true,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "MD_TEST",\n    "placeholderIncluded": true,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Maximum Execution Time]": {\n        "name": "Maximum Execution Time",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Maximum Rows]": {\n        "name": "Maximum Rows",\n        "value": "65536",\n        "type": "int32",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Pre SQLs]": {\n        "name": "Pre SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Descriptor]": {\n        "name": "Table Descriptor",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Option]": {\n        "name": "Table Option",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Prefix]": {\n        "name": "Table Prefix",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Qualifier]": {\n        "name": "Table Qualifier",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Space]": {\n        "name": "Table Space",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Type]": {\n        "name": "Table Type",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "2",\n        "type": "int32",\n        "resolvedLocation": "report"\n      },\n      "[AnalyticalEngineProperties].[MetricLevelDetermination]": {\n        "name": "MetricLevelDetermination",\n        "value": "false",\n        "type": "boolean",\n        "resolvedLocation": "default"\n      }\n    },\n    "metricJoinTypes": {\n      "1FAF96994873E7CEFC71BDB269522636": {\n        "metric": {\n          "objectId": "1FAF96994873E7CEFC71BDB269522636",\n          "subType": "metric",\n          "name": "Profit Forecast"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D3711D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      },\n      "8D679D4F11D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Subcategory"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      }\n    },\n    "useDefaultEvaluationOrder": true\n  }\n}\n')),(0,i.kt)("h2",{id:"the-model-for-the-definition-of-the-datamart"},"The model for the definition of the datamart"),(0,i.kt)("p",null,"The model for the definition of a datamart can be represented with the following fields."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateModified"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"versionId")," are generated automatically. Currently only ",(0,i.kt)("inlineCode",{parentName:"p"},"en-US")," is available for ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryLocale"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"information"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - Name of the datamart. This is the most user-friendly value that can be used to identify the datamart."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subType")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The subType of datamart, which should be ",(0,i.kt)("inlineCode",{parentName:"li"},"report_datamart"),"."),(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"destinationFolderId")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - Folder Id where the new datamart is saved."))),(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"sourceType")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),') - The type of source reports. We support two types: "normal" and "custom_sql_free_form".'),(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"dataSource"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"dataTemplate")," - The data template of the datamart."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter")," - The filter definition of the datamart."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," - The table is only required and used when the ",(0,i.kt)("inlineCode",{parentName:"li"},"sourceType"),' is "custom_sql_free_form".'))),(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"datamartOptions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"append")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),") - This flag indicate whether to create a new table or append to the existing table every time report runs."),(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"targetSource")," - The database instance instance where the table will be placed in."),(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"tableName")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The name of the inserted table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"placeholderIncluded")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),") - The placeholders we support on table name. Details can be referred ",(0,i.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"datamartProperties")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The datamart properties that are used to configure the table in warehouse."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timezone"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"objectId")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The timezone ID applied on the datamart."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The name of timezone object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subType")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),') - The sub type of timezone. The available values are "timezone_custom" and "timezone_system".'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"advancedProperties"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vldbProperties")," - The VLDB Properties that are applicable to datamart and their values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metricJoinType")," - The metric join type that are applicable to datamart and their values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attributeJoinType")," - The attribute join type that are applicable to datamart and their values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useDefaultEvaluationOrder")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),") - This flag indicates whether to use the default evaluation order for datamart.")))))}h.isMDXComponent=!0}}]);