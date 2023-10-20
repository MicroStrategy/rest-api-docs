"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2355],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53922:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a,r=t(83117),o=t(80102),i=(t(67294),t(3905)),s=["components"],l={title:"Create a filter object with a custom expression",sidebar_label:"Create a filter object with a custom expression",description:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service."},p=void 0,c={unversionedId:"common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression",id:"common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression",title:"Create a filter object with a custom expression",description:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression.md",sourceDirName:"common-workflows/modeling/manage-filter-objects",slug:"/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Create a filter object with a custom expression",sidebar_label:"Create a filter object with a custom expression",description:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a filter object",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object"},next:{title:"Update a filter's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/update-a-filters-definition"}},u={},d=[{value:"Create a new filter using a custom expression with POST /api/model/filters.",id:"create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Escape sequences for full paths",id:"escape-sequences-for-full-paths",level:3},{value:"Escape sequences for double quotes",id:"escape-sequences-for-double-quotes",level:3},{value:"Escape sequences for the <code>ApplyComparison</code> function",id:"escape-sequences-for-the-applycomparison-function",level:3}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b6421792-16ec-4d68-9af9-8fc38eb35b7e?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a changeset using ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters"},"Create a new filter using a custom expression with ",(0,i.kt)("inlineCode",{parentName:"a"},"POST /api/model/filters"),".")),(0,i.kt)("li",{parentName:"ol"},"Commit the changeset using ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets/{changesetId}/commit")),(0,i.kt)("li",{parentName:"ol"},"Delete the changeset using ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE /api/model/changesets/{changesetId}"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#more-samples"},"More samples")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#escape-sequences-for-full-paths"},"Escape sequences for full paths")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#escape-sequences-for-double-quotes"},"Escape sequences for double quotes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#escape-sequences-for-the-applycomparison-function"},"Escape sequences for the applycomparison function"))),(0,i.kt)("p",null,"Additional samples are provided in ",(0,i.kt)("a",{parentName:"p",href:"#more-samples"},"More samples"),"."),(0,i.kt)("p",null,'You want to create a new "(Year(CurrentDate()) - 5)< Year@ID" filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ',(0,i.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),"."),(0,i.kt)("h2",{id:"create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters"},"Create a new filter using a custom expression with ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-postFilter"},"POST /api/model/filters.")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,i.kt)("p",null,"Construct the Request Body:"),(0,i.kt)("p",null,"Make a copy of the input template and modify ",(0,i.kt)("inlineCode",{parentName:"p"},"<filter_name>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<destination_folder_id>"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"<custom_expression>")," accordingly to construct the request body. The template looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "<custom_expression>"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "filter_for_last_5_years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "(Year(CurrentDate()) - 5)< Year@ID"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("p",null,"In this sample workflow, you want to return the newly created filter and its custom expression in all formats. Thus, you should set ",(0,i.kt)("inlineCode",{parentName:"p"},"showFilterTokens=true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/filters?showFilterTokens=true&showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d \'{"information":{"subType":"filter","name":"filter_for_last_5_years","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tokens":[{"value":"%","type":"character"},{"value":"(Year(CurrentDate()) - 5)< Year@ID"}]}}\'\n')),(0,i.kt)("p",null,"Sample Response Body: You can view the new filter's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "C181D36B086346A885CD2C7F77A06BFA",\n    "primaryLocale": "en-US",\n    "objectId": "F31F4B055D7C408EA7847FF5728EE767",\n    "subType": "filter",\n    "name": "filter_for_last_5_years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "text": "(Year(CurrentDate) - 5) < Year (ID)",\n    "tree": {\n      "type": "predicate_custom",\n      "predicateId": "2A2870D13AE04C21A7CE053453BF7A38",\n      "predicateText": "(Year(CurrentDate) - 5) < Year (ID)",\n      "predicateTree": {\n        "expression": {\n          "text": "(Year(CurrentDate) - 5) < Year (ID)",\n          "tree": {\n            "function": "less",\n            "children": [\n              {\n                "function": "minus",\n                "children": [\n                  {\n                    "function": "year",\n                    "children": [\n                      {\n                        "function": "current_date",\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  {\n                    "type": "constant",\n                    "variant": {\n                      "type": "int32",\n                      "value": "5"\n                    }\n                  }\n                ],\n                "levelType": "metric_level",\n                "type": "operator"\n              },\n              {\n                "attribute": {\n                  "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Year"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                },\n                "type": "form_shortcut"\n              }\n            ],\n            "levelType": "metric_level",\n            "type": "operator"\n          },\n          "tokens": [\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "%",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year",\n              "type": "function",\n              "target": {\n                "dateCreated": "2001-11-09T15:47:55.000Z",\n                "dateModified": "2018-01-29T21:13:05.000Z",\n                "versionId": "32737F3011E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                "subType": "function",\n                "name": "Year",\n                "description": "Returns the year of the input date."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "CurrentDate",\n              "type": "function",\n              "target": {\n                "dateCreated": "2001-11-09T15:47:54.000Z",\n                "dateModified": "2018-01-29T21:13:05.000Z",\n                "versionId": "32363DBE11E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                "subType": "function",\n                "name": "CurrentDate",\n                "description": "Returns the current date based on the database timer. This function takes no input parameters."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "-",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:41.000Z",\n                "dateModified": "2018-01-29T21:13:06.000Z",\n                "versionId": "330711DC11E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": "-",\n                "description": "Returns the difference between two values."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "5",\n              "type": "integer"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "<",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:39.000Z",\n                "dateModified": "2018-01-29T21:13:07.000Z",\n                "versionId": "3333B30411E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C318DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": "<",\n                "description": "Returns TRUE if the first value is lesser than the second value."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year@ID",\n              "type": "object_at_form",\n              "target": {\n                "dateCreated": "2001-01-02T20:48:10.000Z",\n                "dateModified": "2012-01-27T12:00:32.000Z",\n                "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                "primaryLocale": "en-US",\n                "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Year"\n              },\n              "attributeForm": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "",\n              "type": "end_of_text"\n            }\n          ]\n        }\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-11-09T15:47:55.000Z",\n          "dateModified": "2018-01-29T21:13:05.000Z",\n          "versionId": "32737F3011E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n          "subType": "function",\n          "name": "Year",\n          "description": "Returns the year of the input date."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "CurrentDate",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-11-09T15:47:54.000Z",\n          "dateModified": "2018-01-29T21:13:05.000Z",\n          "versionId": "32363DBE11E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n          "subType": "function",\n          "name": "CurrentDate",\n          "description": "Returns the current date based on the database timer. This function takes no input parameters."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2018-01-29T21:13:06.000Z",\n          "versionId": "330711DC11E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "5",\n        "type": "integer"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:39.000Z",\n          "dateModified": "2018-01-29T21:13:07.000Z",\n          "versionId": "3333B30411E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C318DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "<",\n          "description": "Returns TRUE if the first value is lesser than the second value."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year@ID",\n        "type": "object_at_form",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2012-01-27T12:00:32.000Z",\n          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "attributeForm": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new filter is created successfully in the changeset.)"),(0,i.kt)("h2",{id:"more-samples"},"More samples"),(0,i.kt)("p",null,"The following are additional examples to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<custom expression>")," from the input template."),(0,i.kt)("h3",{id:"escape-sequences-for-full-paths"},"Escape sequences for full paths"),(0,i.kt)("p",null,"Use full paths to the object to avoid ambiguity. Make sure to use escape sequences for any backslashes in the expression."),(0,i.kt)("p",null,"The sample request body shown below contains escape sequences for the backslashes in the following expression:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\\Schema Objects\\Attributes\\Geography\\Region]@ID=1")),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "[\\\\Schema Objects\\\\Attributes\\\\Geography\\\\Region]@ID=1"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"escape-sequences-for-double-quotes"},"Escape sequences for double quotes"),(0,i.kt)("p",null,"Make sure to use escape sequences for any double quotes in the expression."),(0,i.kt)("p",null,"The sample request body shown below contains escape sequences for double quotes in the following expression:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'Promotion@DESC in ("Valentine\'s Day", "Summer Fun")')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "Promotion@DESC in (\\"Valentine\'s Day\\", \\"Summer Fun\\")"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"escape-sequences-for-the-applycomparison-function"},"Escape sequences for the ",(0,i.kt)("inlineCode",{parentName:"h3"},"ApplyComparison")," function"),(0,i.kt)("p",null,"If you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplyComparison")," function in an expression, make sure to use escape sequences for the double quotes."),(0,i.kt)("p",null,"The sample request body shown below contains escape sequences for double quotes within the following ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplyComparison")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'ApplyComparison (\\"#0 between #1 and #2\\",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "ApplyComparison (\\"#0 between #1 and #2\\",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)"\n      }\n    ]\n  }\n}\n')))}h.isMDXComponent=!0}}]);