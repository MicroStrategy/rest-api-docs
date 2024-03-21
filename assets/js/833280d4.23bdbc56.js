"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8455],{94791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(74848),r=t(28453);const o={title:"Create a custom group object with filter elements using custom expressions",sidebar_label:"Create a custom group object with filter elements using custom expressions",description:"This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service."},i=void 0,s={id:"common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions",title:"Create a custom group object with filter elements using custom expressions",description:"This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions.md",sourceDirName:"common-workflows/modeling/manage-custom-group-objects",slug:"/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Create a custom group object with filter elements using custom expressions",sidebar_label:"Create a custom group object with filter elements using custom expressions",description:"This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a custom group object",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object"},next:{title:"Update a custom group's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition"}},l={},c=[{value:"Create a new custom group",id:"create-a-new-custom-group",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 2"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can try out this workflow at ",(0,a.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-595a6492-e685-41a9-bdc2-5c0b9c571315?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:"This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service."}),"\n",(0,a.jsxs)(n.p,{children:["You want to create a new ",(0,a.jsx)(n.code,{children:'"Last 10 year"'})," custom group object with 2 filter elements:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'last 5 year: "(Year(CurrentDate()) - 5)<= Year@ID"'}),"\n",(0,a.jsx)(n.li,{children:'last 10-5 years: "((Year(CurrentDate()) - 10)<= Year@ID)AND((Year(CurrentDate()) - 5)>Year@ID)"'}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You want to save the object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,a.jsx)(n.code,{children:"98FE182C2A10427EACE0CD30B6768258"}),". The project ID is ",(0,a.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(n.p,{children:["Get the project ID from ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,a.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"create-a-new-custom-group",children:"Create a new custom group"}),"\n",(0,a.jsxs)(n.p,{children:["Endpoint: ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-postCustomGroup",children:"POST /api/model/customGroup"})," with each filter element in a custom expression."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "bkf2bee310a9olr23h68dhgsvb"\n"X-MSTR-MS-Changeset": "072C7C776DB0495E818531B2A748BC53"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Construct the Request Body:"}),"\n",(0,a.jsx)(n.p,{children:"Make a copy of the input template and construct the request body. Update <custom_group_name> and <destination_folder_id> for the new custom group object. Update <custom_group_element_name> and <custom_expression> for each element. Update options and displayOptions, respectively. The template looks like the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "custom_group",\n    "name": "<custom_group_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "<custom_group_element_name>",\n      "displayOption": "element",\n      "qualification": {\n        "tokens": [\n          {\n            "value": "%",\n            "type": "character"\n          },\n          {\n            "value": "<custom_expression>"\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "custom_group",\n    "name": "Last 10 Years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "Last 5 Year",\n      "displayOption": "element",\n      "qualification": {\n        "tokens": [\n          {\n            "value": "%",\n            "type": "character"\n          },\n          {\n            "value": "(Year(CurrentDate()) - 5)<= Year@ID"\n          }\n        ]\n      }\n    },\n    {\n      "name": "Last 10-5 Years",\n      "displayOption": "element",\n      "qualification": {\n        "tokens": [\n          {\n            "value": "%",\n            "type": "character"\n          },\n          {\n            "value": "((Year(CurrentDate()) - 10)<= Year@ID)AND((Year(CurrentDate()) - 5)>Year@ID)"\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsxs)(n.p,{children:["In this sample workflow, you want to return the newly created custom group filter elements' custom expression in all formats. Thus, you should set ",(0,a.jsx)(n.code,{children:"showExpressionAs=tree"})," and ",(0,a.jsx)(n.code,{children:"showExpressionAs=tokens"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: bkf2bee310a9olr23h68dhgsvb" -H "X-MSTR-MS-Changeset: 072C7C776DB0495E818531B2A748BC53" -H "Content-Type: application/json" -d "{\\"information\\":{\\"subType\\":\\"custom_group\\",\\"name\\":\\"Last 10 Years\\",\\"destinationFolderId\\":\\"98FE182C2A10427EACE0CD30B6768258\\"},\\"options\\":{\\"hierarchyDisplay\\":true,\\"subtotalsDisplay\\":false,\\"elementHeaderAboveChild\\":true},\\"elements\\":[{\\"name\\":\\"Last 5 Year\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"tokens\\":[{\\"value\\":\\"%\\",\\"type\\":\\"character\\"},{\\"value\\":\\"(Year(CurrentDate()) - 5)<= Year@ID\\"}]}},{\\"name\\":\\"Last 10-5 Years\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"tokens\\":[{\\"value\\":\\"%\\",\\"type\\":\\"character\\"},{\\"value\\":\\"((Year(CurrentDate()) - 10)<= Year@ID)AND((Year(CurrentDate()) - 5)>Year@ID)\\"}]}}]}"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.p,{children:"You can view the new custom group's definition in the body of the response."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "versionId": "6ACA8172401F460AA5C0AAFD6DF8E89F",\n    "primaryLocale": "en-US",\n    "objectId": "2EA993D43FF94ED4A75119FD206FBB2D",\n    "subType": "custom_group",\n    "name": "Last 10 Years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "id": "B108CD5FB1984E7A9499119070E00AA2",\n      "name": "Last 5 Year",\n      "displayOption": "element",\n      "qualification": {\n        "text": "((Year(CurrentDate) - 5) <= Year (ID))",\n        "tree": {\n          "type": "predicate_custom",\n          "predicateId": "B108CD5FB1984E7A9499119070E00AA2",\n          "predicateText": "((Year(CurrentDate) - 5) <= Year (ID))",\n          "predicateTree": {\n            "expression": {\n              "text": "((Year(CurrentDate) - 5) <= Year (ID))",\n              "tree": {\n                "function": "less_equal",\n                "children": [\n                  {\n                    "function": "minus",\n                    "children": [\n                      {\n                        "function": "year",\n                        "children": [\n                          {\n                            "function": "current_date",\n                            "levelType": "metric_level",\n                            "type": "operator"\n                          }\n                        ],\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      },\n                      {\n                        "type": "constant",\n                        "variant": {\n                          "type": "int32",\n                          "value": "5"\n                        }\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  {\n                    "attribute": {\n                      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                      "subType": "attribute",\n                      "name": "Year"\n                    },\n                    "form": {\n                      "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                      "subType": "attribute_form_system",\n                      "name": "ID"\n                    },\n                    "type": "form_shortcut"\n                  }\n                ],\n                "levelType": "metric_level",\n                "type": "operator"\n              },\n              "tokens": [\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "%",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "Year",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:55.000Z",\n                    "dateModified": "2021-03-09T15:22:01.113Z",\n                    "versionId": "3219936911EB80EB24E70080EF25AB1A",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "Year",\n                    "description": "Returns the year of the input date."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "CurrentDate",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:54.000Z",\n                    "dateModified": "2021-03-09T15:22:00.813Z",\n                    "versionId": "31EBC57811EB80EB00000080EF25AB1A",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "CurrentDate",\n                    "description": "Returns the current date based on the database timer. This function takes no input parameters."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "-",\n                  "type": "character",\n                  "target": {\n                    "dateCreated": "2001-01-02T20:47:41.000Z",\n                    "dateModified": "2021-03-09T15:22:04.454Z",\n                    "versionId": "3417594811EB80EB25D80080EF25AB1A",\n                    "primaryLocale": "en-US",\n                    "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                    "subType": "function",\n                    "name": "-",\n                    "description": "Returns the difference between two values."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "5",\n                  "type": "integer"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "<=",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-01-02T20:47:38.000Z",\n                    "dateModified": "2021-03-09T15:22:04.735Z",\n                    "versionId": "34421F3F11EB80EB21B50080EF25AB1A",\n                    "primaryLocale": "en-US",\n                    "objectId": "8107C31ADD9911D3B98100C04F2233EA",\n                    "subType": "function",\n                    "name": "<=",\n                    "description": "Returns TRUE if the first value is lesser than or equal to the second value."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "Year@ID",\n                  "type": "object_at_form",\n                  "target": {\n                    "dateCreated": "2001-01-02T20:48:10.000Z",\n                    "dateModified": "2012-01-27T12:00:32.000Z",\n                    "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                    "primaryLocale": "en-US",\n                    "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Year"\n                  },\n                  "attributeForm": {\n                    "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "",\n                  "type": "end_of_text"\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "FAFDB89060A04BBBB754A1139E89F5A7",\n      "name": "Last 10-5 Years",\n      "displayOption": "element",\n      "qualification": {\n        "text": "(((Year(CurrentDate) - 10) <= Year (ID)) And ((Year(CurrentDate) - 5) > Year (ID)))",\n        "tree": {\n          "function": "and",\n          "children": [\n            {\n              "type": "predicate_custom",\n              "predicateId": "74D60C907623483D987EE6193E1FB73C",\n              "predicateText": "((Year(CurrentDate) - 10) <= Year (ID))",\n              "predicateTree": {\n                "expression": {\n                  "text": "((Year(CurrentDate) - 10) <= Year (ID))",\n                  "tree": {\n                    "function": "less_equal",\n                    "children": [\n                      {\n                        "function": "minus",\n                        "children": [\n                          {\n                            "function": "year",\n                            "children": [\n                              {\n                                "function": "current_date",\n                                "levelType": "metric_level",\n                                "type": "operator"\n                              }\n                            ],\n                            "levelType": "metric_level",\n                            "type": "operator"\n                          },\n                          {\n                            "type": "constant",\n                            "variant": {\n                              "type": "int32",\n                              "value": "10"\n                            }\n                          }\n                        ],\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      },\n                      {\n                        "attribute": {\n                          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                          "subType": "attribute",\n                          "name": "Year"\n                        },\n                        "form": {\n                          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                          "subType": "attribute_form_system",\n                          "name": "ID"\n                        },\n                        "type": "form_shortcut"\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  "tokens": [\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "%",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "Year",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-11-09T15:47:55.000Z",\n                        "dateModified": "2021-03-09T15:22:01.113Z",\n                        "versionId": "3219936911EB80EB24E70080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                        "subType": "function",\n                        "name": "Year",\n                        "description": "Returns the year of the input date."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "CurrentDate",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-11-09T15:47:54.000Z",\n                        "dateModified": "2021-03-09T15:22:00.813Z",\n                        "versionId": "31EBC57811EB80EB00000080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                        "subType": "function",\n                        "name": "CurrentDate",\n                        "description": "Returns the current date based on the database timer. This function takes no input parameters."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "-",\n                      "type": "character",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:47:41.000Z",\n                        "dateModified": "2021-03-09T15:22:04.454Z",\n                        "versionId": "3417594811EB80EB25D80080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                        "subType": "function",\n                        "name": "-",\n                        "description": "Returns the difference between two values."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "10",\n                      "type": "integer"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "<=",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:47:38.000Z",\n                        "dateModified": "2021-03-09T15:22:04.735Z",\n                        "versionId": "34421F3F11EB80EB21B50080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "8107C31ADD9911D3B98100C04F2233EA",\n                        "subType": "function",\n                        "name": "<=",\n                        "description": "Returns TRUE if the first value is lesser than or equal to the second value."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "Year@ID",\n                      "type": "object_at_form",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:48:10.000Z",\n                        "dateModified": "2012-01-27T12:00:32.000Z",\n                        "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                        "primaryLocale": "en-US",\n                        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                        "subType": "attribute",\n                        "name": "Year"\n                      },\n                      "attributeForm": {\n                        "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "",\n                      "type": "end_of_text"\n                    }\n                  ]\n                }\n              }\n            },\n            {\n              "type": "predicate_custom",\n              "predicateId": "5006DEDD07144D40B7A77FC63DAE508D",\n              "predicateText": "((Year(CurrentDate) - 5) > Year (ID))",\n              "predicateTree": {\n                "expression": {\n                  "text": "((Year(CurrentDate) - 5) > Year (ID))",\n                  "tree": {\n                    "function": "greater",\n                    "children": [\n                      {\n                        "function": "minus",\n                        "children": [\n                          {\n                            "function": "year",\n                            "children": [\n                              {\n                                "function": "current_date",\n                                "levelType": "metric_level",\n                                "type": "operator"\n                              }\n                            ],\n                            "levelType": "metric_level",\n                            "type": "operator"\n                          },\n                          {\n                            "type": "constant",\n                            "variant": {\n                              "type": "int32",\n                              "value": "5"\n                            }\n                          }\n                        ],\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      },\n                      {\n                        "attribute": {\n                          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                          "subType": "attribute",\n                          "name": "Year"\n                        },\n                        "form": {\n                          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                          "subType": "attribute_form_system",\n                          "name": "ID"\n                        },\n                        "type": "form_shortcut"\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  "tokens": [\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "%",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "Year",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-11-09T15:47:55.000Z",\n                        "dateModified": "2021-03-09T15:22:01.113Z",\n                        "versionId": "3219936911EB80EB24E70080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                        "subType": "function",\n                        "name": "Year",\n                        "description": "Returns the year of the input date."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "CurrentDate",\n                      "type": "function",\n                      "target": {\n                        "dateCreated": "2001-11-09T15:47:54.000Z",\n                        "dateModified": "2021-03-09T15:22:00.813Z",\n                        "versionId": "31EBC57811EB80EB00000080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                        "subType": "function",\n                        "name": "CurrentDate",\n                        "description": "Returns the current date based on the database timer. This function takes no input parameters."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "(",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "-",\n                      "type": "character",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:47:41.000Z",\n                        "dateModified": "2021-03-09T15:22:04.454Z",\n                        "versionId": "3417594811EB80EB25D80080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                        "subType": "function",\n                        "name": "-",\n                        "description": "Returns the difference between two values."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "5",\n                      "type": "integer"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ")",\n                      "type": "character"\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": ">",\n                      "type": "character",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:47:41.000Z",\n                        "dateModified": "2021-03-09T15:22:04.644Z",\n                        "versionId": "34345F9911EB80EB21B50080EF25AB1A",\n                        "primaryLocale": "en-US",\n                        "objectId": "8107C317DD9911D3B98100C04F2233EA",\n                        "subType": "function",\n                        "name": ">",\n                        "description": "Returns TRUE if the first value is greater than the second value."\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "Year@ID",\n                      "type": "object_at_form",\n                      "target": {\n                        "dateCreated": "2001-01-02T20:48:10.000Z",\n                        "dateModified": "2012-01-27T12:00:32.000Z",\n                        "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                        "primaryLocale": "en-US",\n                        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                        "subType": "attribute",\n                        "name": "Year"\n                      },\n                      "attributeForm": {\n                        "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n                      }\n                    },\n                    {\n                      "level": "resolved",\n                      "state": "initial",\n                      "value": "",\n                      "type": "end_of_text"\n                    }\n                  ]\n                }\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Response Code: 201 (A new filter is created successfully in the changeset.)"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);