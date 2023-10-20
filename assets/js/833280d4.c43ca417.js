"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3629],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92753:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r,a=t(83117),o=t(80102),i=(t(67294),t(3905)),s=["components"],l={title:"Create a custom group object with filter elements using custom expressions",sidebar_label:"Create a custom group object with filter elements using custom expressions",description:"This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service."},c=void 0,u={unversionedId:"common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions",id:"common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions",title:"Create a custom group object with filter elements using custom expressions",description:"This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions.md",sourceDirName:"common-workflows/modeling/manage-custom-group-objects",slug:"/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Create a custom group object with filter elements using custom expressions",sidebar_label:"Create a custom group object with filter elements using custom expressions",description:"This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a custom group object",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object"},next:{title:"Update a custom group's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition"}},p={},d=[{value:"Create a new custom group",id:"create-a-new-custom-group",level:2}],m=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),v={toc:d};function y(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 2",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-595a6492-e685-41a9-bdc2-5c0b9c571315?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service."),(0,i.kt)("p",null,"You want to create a new ",(0,i.kt)("inlineCode",{parentName:"p"},'"Last 10 year"')," custom group object with 2 filter elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'last 5 year: "(Year(CurrentDate()) - 5)<= Year@ID"'),(0,i.kt)("li",{parentName:"ul"},'last 10-5 years: "((Year(CurrentDate()) - 10)<= Year@ID)AND((Year(CurrentDate()) - 5)>Year@ID)"')),(0,i.kt)("p",null,"You want to save the object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,i.kt)("h2",{id:"create-a-new-custom-group"},"Create a new custom group"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-postCustomGroup"},"POST /api/model/customGroup")," with each filter element in a custom expression."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bkf2bee310a9olr23h68dhgsvb"\n"X-MSTR-MS-Changeset": "072C7C776DB0495E818531B2A748BC53"\n')),(0,i.kt)("p",null,"Construct the Request Body:"),(0,i.kt)("p",null,"Make a copy of the input template and construct the request body. Update <custom_group_name> and <destination_folder_id> for the new custom group object. Update <custom_group_element_name> and <custom_expression> for each element. Update options and displayOptions, respectively. The template looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "custom_group",\n    "name": "<custom_group_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "<custom_group_element_name>",\n      "displayOption": "element",\n      "qualification": {\n        "tokens": [\n          {\n            "value": "%",\n            "type": "character"\n          },\n          {\n            "value": "<custom_expression>"\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "custom_group",\n    "name": "Last 10 Years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "Last 5 Year",\n      "displayOption": "element",\n      "qualification": {\n        "tokens": [\n          {\n            "value": "%",\n            "type": "character"\n          },\n          {\n            "value": "(Year(CurrentDate()) - 5)<= Year@ID"\n          }\n        ]\n      }\n    },\n    {\n      "name": "Last 10-5 Years",\n      "displayOption": "element",\n      "qualification": {\n        "tokens": [\n          {\n            "value": "%",\n            "type": "character"\n          },\n          {\n            "value": "((Year(CurrentDate()) - 10)<= Year@ID)AND((Year(CurrentDate()) - 5)>Year@ID)"\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("p",null,"In this sample workflow, you want to return the newly created custom group filter elements' custom expression in all formats. Thus, you should set ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: bkf2bee310a9olr23h68dhgsvb" -H "X-MSTR-MS-Changeset: 072C7C776DB0495E818531B2A748BC53" -H "Content-Type: application/json" -d "{\\"information\\":{\\"subType\\":\\"custom_group\\",\\"name\\":\\"Last 10 Years\\",\\"destinationFolderId\\":\\"98FE182C2A10427EACE0CD30B6768258\\"},\\"options\\":{\\"hierarchyDisplay\\":true,\\"subtotalsDisplay\\":false,\\"elementHeaderAboveChild\\":true},\\"elements\\":[{\\"name\\":\\"Last 5 Year\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"tokens\\":[{\\"value\\":\\"%\\",\\"type\\":\\"character\\"},{\\"value\\":\\"(Year(CurrentDate()) - 5)<= Year@ID\\"}]}},{\\"name\\":\\"Last 10-5 Years\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"tokens\\":[{\\"value\\":\\"%\\",\\"type\\":\\"character\\"},{\\"value\\":\\"((Year(CurrentDate()) - 10)<= Year@ID)AND((Year(CurrentDate()) - 5)>Year@ID)\\"}]}}]}"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the new custom group's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "6ACA8172401F460AA5C0AAFD6DF8E89F",\n    "primaryLocale": "en-US",\n    "objectId": "2EA993D43FF94ED4A75119FD206FBB2D",\n    "subType": "custom_group",\n    "name": "Last 10 Years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "id": "B108CD5FB1984E7A9499119070E00AA2",\n      "name": "Last 5 Year",\n      "displayOption": "element",\n      "qualification": {\n        "text": "((Year(CurrentDate) - 5) <= Year (ID))",\n        "tree": {\n          "type": "predicate_custom",\n          "predicateId": "B108CD5FB1984E7A9499119070E00AA2",\n          "predicateText": "((Year(CurrentDate) - 5) <= Year (ID))",\n          "predicateTree": {\n            "expression": {\n              "text": "((Year(CurrentDate) - 5) <= Year (ID))",\n              "tree": {\n                "function": "less_equal",\n                "children": [\n                  {\n                    "function": "minus",\n                    "children": [\n                      {\n                        "function": "year",\n                        "children": [\n                          {\n                            "function": "current_date",\n                            "levelType": "metric_level",\n                            "type": "operator"\n                          }\n                        ],\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      },\n                      {\n                        "type": "constant",\n                        "variant": {\n                          "type": "int32",\n                          "value": "5"\n                        }\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  {\n                    "attribute": {\n                      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                      "subType": "attribute",\n                      "name": "Year"\n                    },\n                    "form": {\n                      "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                      "subType": "attribute_form_system",\n                      "name": "ID"\n                    },\n                    "type": "form_shortcut"\n                  }\n                ],\n                "levelType": "metric_level",\n                "type": "operator"\n              },\n              "tokens": [\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "%",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "Year",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:55.000Z",\n                    "dateModified": "2021-03-09T15:22:01.113Z",\n                    "versionId": "3219936911EB80EB24E70080EF25AB1A",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "Year",\n                    "description": "Returns the year of the input date."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "CurrentDate",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:54.000Z",\n                    "dateModified": "2021-03-09T15:22:00.813Z",\n                    "versionId": "31EBC57811EB80EB00000080EF25AB1A",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "CurrentDate",\n                    "description": "Returns the current date based on the database timer. This function takes no input parameters."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "-",\n                  "type": "character",\n                  "target": {\n                    "dateCreated": "2001-01-02T20:47:41.000Z",\n                    "dateModified": "2021-03-09T15:22:04.454Z",\n                    "versionId": "3417594811EB80EB25D80080EF25AB1A",\n                    "primaryLocale": "en-US",\n                    "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                    "subType": "function",\n                    "name": "-",\n                    "description": "Returns the difference between two values."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "5",\n                  "type": "integer"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "<=",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-01-02T20:47:38.000Z",\n                    "dateModified": "2021-03-09T15:22:04.735Z",\n                    "versionId": "34421F3F11EB80EB21B50080EF25AB1A",\n                    "primaryLocale": "en-US",\n                    "objectId": "8107C31ADD9911D3B98100C04F2233EA",\n                    "subType": "function",\n                    "name": "<=",\n                    "description": "Returns TRUE if the first value is lesser than or equal to the second value."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "Year@ID",\n                  "type": "object_at_form",\n                  "target": {\n                    "dateCreated": "2001-01-02T20:48:10.000Z",\n                    "dateModified": "2012-01-27T12:00:32.000Z",\n                    "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                    "primaryLocale": "en-US",\n                    "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Year"\n                  },\n                  "attributeForm": {\n                    "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "",\n                  "type": "end_of_text"\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "FAFDB89060A04BBBB754A1139E89F5A7",\n      "name": "Last 10-5 Years",\n      "displayOption": "element",\n      "qualification": {\n        "text": "(((Year(CurrentDate) - 10) <= Year (ID)) And ((Year(CurrentDate) - 5) > Year (ID)))",\n        "tree": {\n          "function": "and",\n          "children": [\n            {\n              "type": "predicate_custom",\n              "predicateId": "74D60C907623483D987EE6193E1FB73C",\n              "predicateText": "((Year(CurrentDate) - 10) <= Year (ID))",\n              "predicateTree": {\n                "expression": {\n                  "text": "((Year(CurrentDate) - 10) <= Year (ID))",\n                  "tree": {\n                    "function": "less_equal",\n                    "children": [\n                      {\n                        "function": "minus",\n                        "children": [\n                          {\n                            "function": "year",\n                            "children": [\n                              {\n                                "function": "current_date",\n                                "levelType": "metric_level",\n                                "type": "operator"\n                              }\n                            ],\n                            "levelType": "metric_level",\n                            "type": "operator"\n                          },\n                          {\n                            "type": "constant",\n                            "variant": {\n                              "type": "int32",\n                              "value": "10"\n                            }\n                          }\n                        ],\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      },\n                      {\n                        "attribute": {\n                          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                          "subType": "attribute",\n                          "name": "Year"\n                        },\n                        "form": {\n                          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                          "subType": "attribute_form_system",\n                          "name": "ID"\n                        },\n                        "type": "form_shortcut"\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  "tokens": [\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "%",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "Year",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-11-09T15:47:55.000Z",\n                        "dateModified": "2021-03-09T15:22:01.113Z",\n                        "versionId": "3219936911EB80EB24E70080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                        "subType": "function",\n                        "name": "Year",\n                        "description": "Returns the year of the input date."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "CurrentDate",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-11-09T15:47:54.000Z",\n                        "dateModified": "2021-03-09T15:22:00.813Z",\n                        "versionId": "31EBC57811EB80EB00000080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                        "subType": "function",\n                        "name": "CurrentDate",\n                        "description": "Returns the current date based on the database timer. This function takes no input parameters."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "-",\n                      "type": "character",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:47:41.000Z",\n                        "dateModified": "2021-03-09T15:22:04.454Z",\n                        "versionId": "3417594811EB80EB25D80080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                        "subType": "function",\n                        "name": "-",\n                        "description": "Returns the difference between two values."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "10",\n                      "type": "integer"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "<=",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:47:38.000Z",\n                        "dateModified": "2021-03-09T15:22:04.735Z",\n                        "versionId": "34421F3F11EB80EB21B50080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "8107C31ADD9911D3B98100C04F2233EA",\n                        "subType": "function",\n                        "name": "<=",\n                        "description": "Returns TRUE if the first value is lesser than or equal to the second value."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "Year@ID",\n                      "type": "object_at_form",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:48:10.000Z",\n                        "dateModified": "2012-01-27T12:00:32.000Z",\n                        "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                        "primaryLocale": "en-US",\n                        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                        "subType": "attribute",\n                        "name": "Year"\n                      },\n                      "attributeForm": {\n                        "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "",\n                      "type": "end_of_text"\n                    }\n                  ]\n                }\n              }\n            },\n            {\n              "type": "predicate_custom",\n              "predicateId": "5006DEDD07144D40B7A77FC63DAE508D",\n              "predicateText": "((Year(CurrentDate) - 5) > Year (ID))",\n              "predicateTree": {\n                "expression": {\n                  "text": "((Year(CurrentDate) - 5) > Year (ID))",\n                  "tree": {\n                    "function": "greater",\n                    "children": [\n                      {\n                        "function": "minus",\n                        "children": [\n                          {\n                            "function": "year",\n                            "children": [\n                              {\n                                "function": "current_date",\n                                "levelType": "metric_level",\n                                "type": "operator"\n                              }\n                            ],\n                            "levelType": "metric_level",\n                            "type": "operator"\n                          },\n                          {\n                            "type": "constant",\n                            "variant": {\n                              "type": "int32",\n                              "value": "5"\n                            }\n                          }\n                        ],\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      },\n                      {\n                        "attribute": {\n                          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                          "subType": "attribute",\n                          "name": "Year"\n                        },\n                        "form": {\n                          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                          "subType": "attribute_form_system",\n                          "name": "ID"\n                        },\n                        "type": "form_shortcut"\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  "tokens": [\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "%",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "Year",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-11-09T15:47:55.000Z",\n                        "dateModified": "2021-03-09T15:22:01.113Z",\n                        "versionId": "3219936911EB80EB24E70080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                        "subType": "function",\n                        "name": "Year",\n                        "description": "Returns the year of the input date."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "CurrentDate",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-11-09T15:47:54.000Z",\n                        "dateModified": "2021-03-09T15:22:00.813Z",\n                        "versionId": "31EBC57811EB80EB00000080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                        "subType": "function",\n                        "name": "CurrentDate",\n                        "description": "Returns the current date based on the database timer. This function takes no input parameters."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "-",\n                      "type": "character",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:47:41.000Z",\n                        "dateModified": "2021-03-09T15:22:04.454Z",\n                        "versionId": "3417594811EB80EB25D80080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                        "subType": "function",\n                        "name": "-",\n                        "description": "Returns the difference between two values."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "5",\n                      "type": "integer"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ">",\n                      "type": "character",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:47:41.000Z",\n                        "dateModified": "2021-03-09T15:22:04.644Z",\n                        "versionId": "34345F9911EB80EB21B50080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "8107C317DD9911D3B98100C04F2233EA",\n                        "subType": "function",\n                        "name": ">",\n                        "description": "Returns TRUE if the first value is greater than the second value."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "Year@ID",\n                      "type": "object_at_form",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:48:10.000Z",\n                        "dateModified": "2012-01-27T12:00:32.000Z",\n                        "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                        "primaryLocale": "en-US",\n                        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                        "subType": "attribute",\n                        "name": "Year"\n                      },\n                      "attributeForm": {\n                        "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "",\n                      "type": "end_of_text"\n                    }\n                  ]\n                }\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new filter is created successfully in the changeset.)"))}y.isMDXComponent=!0}}]);