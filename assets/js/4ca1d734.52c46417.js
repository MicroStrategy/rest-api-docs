"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8708],{52534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(74848),a=t(28453);const r={title:"Create a filter object with a custom expression",sidebar_label:"Create a filter object with a custom expression",description:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service."},i=void 0,o={id:"common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression",title:"Create a filter object with a custom expression",description:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression.md",sourceDirName:"common-workflows/modeling/manage-filter-objects",slug:"/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Create a filter object with a custom expression",sidebar_label:"Create a filter object with a custom expression",description:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a filter object",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object"},next:{title:"Update a filter's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/update-a-filters-definition"}},l={},c=[{value:"Create a new filter using a custom expression with POST /api/model/filters.",id:"create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Escape sequences for full paths",id:"escape-sequences-for-full-paths",level:3},{value:"Escape sequences for double quotes",id:"escape-sequences-for-double-quotes",level:3},{value:"Escape sequences for the <code>ApplyComparison</code> function",id:"escape-sequences-for-the-applycomparison-function",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{since:"2021"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can try out this workflow at ",(0,s.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b6421792-16ec-4d68-9af9-8fc38eb35b7e?ctx=documentation",children:"REST API Playground"}),"."]}),(0,s.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,s.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,s.jsx)(n.p,{children:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a changeset using ",(0,s.jsx)(n.code,{children:"POST /api/model/changesets"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters",children:["Create a new filter using a custom expression with ",(0,s.jsx)(n.code,{children:"POST /api/model/filters"}),"."]})}),"\n",(0,s.jsxs)(n.li,{children:["Commit the changeset using ",(0,s.jsx)(n.code,{children:"POST /api/model/changesets/{changesetId}/commit"})]}),"\n",(0,s.jsxs)(n.li,{children:["Delete the changeset using ",(0,s.jsx)(n.code,{children:"DELETE /api/model/changesets/{changesetId}"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"#more-samples",children:"More samples"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#escape-sequences-for-full-paths",children:"Escape sequences for full paths"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#escape-sequences-for-double-quotes",children:"Escape sequences for double quotes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#escape-sequences-for-the-applycomparison-function",children:"Escape sequences for the applycomparison function"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Additional samples are provided in ",(0,s.jsx)(n.a,{href:"#more-samples",children:"More samples"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:['You want to create a new "(Year(CurrentDate()) - 5)< Year@ID" filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ',(0,s.jsx)(n.code,{children:"98FE182C2A10427EACE0CD30B6768258"}),". The project ID is ",(0,s.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,s.jsxs)(n.p,{children:["Get the project ID from ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,s.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters",children:["Create a new filter using a custom expression with ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-postFilter",children:"POST /api/model/filters."})]}),"\n",(0,s.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Construct the Request Body:"}),"\n",(0,s.jsxs)(n.p,{children:["Make a copy of the input template and modify ",(0,s.jsx)(n.code,{children:"<filter_name>"}),", ",(0,s.jsx)(n.code,{children:"<destination_folder_id>"}),", and ",(0,s.jsx)(n.code,{children:"<custom_expression>"})," accordingly to construct the request body. The template looks like the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "<custom_expression>"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "filter_for_last_5_years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "(Year(CurrentDate()) - 5)< Year@ID"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,s.jsxs)(n.p,{children:["In this sample workflow, you want to return the newly created filter and its custom expression in all formats. Thus, you should set ",(0,s.jsx)(n.code,{children:"showFilterTokens=true"}),", ",(0,s.jsx)(n.code,{children:"showExpressionAs=tree"}),", and ",(0,s.jsx)(n.code,{children:"showExpressionAs=tokens"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/filters?showFilterTokens=true&showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d \'{"information":{"subType":"filter","name":"filter_for_last_5_years","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tokens":[{"value":"%","type":"character"},{"value":"(Year(CurrentDate()) - 5)< Year@ID"}]}}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sample Response Body: You can view the new filter's definition in the body of the response."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "versionId": "C181D36B086346A885CD2C7F77A06BFA",\n    "primaryLocale": "en-US",\n    "objectId": "F31F4B055D7C408EA7847FF5728EE767",\n    "subType": "filter",\n    "name": "filter_for_last_5_years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "text": "(Year(CurrentDate) - 5) < Year (ID)",\n    "tree": {\n      "type": "predicate_custom",\n      "predicateId": "2A2870D13AE04C21A7CE053453BF7A38",\n      "predicateText": "(Year(CurrentDate) - 5) < Year (ID)",\n      "predicateTree": {\n        "expression": {\n          "text": "(Year(CurrentDate) - 5) < Year (ID)",\n          "tree": {\n            "function": "less",\n            "children": [\n              {\n                "function": "minus",\n                "children": [\n                  {\n                    "function": "year",\n                    "children": [\n                      {\n                        "function": "current_date",\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  {\n                    "type": "constant",\n                    "variant": {\n                      "type": "int32",\n                      "value": "5"\n                    }\n                  }\n                ],\n                "levelType": "metric_level",\n                "type": "operator"\n              },\n              {\n                "attribute": {\n                  "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Year"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                },\n                "type": "form_shortcut"\n              }\n            ],\n            "levelType": "metric_level",\n            "type": "operator"\n          },\n          "tokens": [\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "%",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year",\n              "type": "function",\n              "target": {\n                "dateCreated": "2001-11-09T15:47:55.000Z",\n                "dateModified": "2018-01-29T21:13:05.000Z",\n                "versionId": "32737F3011E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                "subType": "function",\n                "name": "Year",\n                "description": "Returns the year of the input date."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "CurrentDate",\n              "type": "function",\n              "target": {\n                "dateCreated": "2001-11-09T15:47:54.000Z",\n                "dateModified": "2018-01-29T21:13:05.000Z",\n                "versionId": "32363DBE11E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                "subType": "function",\n                "name": "CurrentDate",\n                "description": "Returns the current date based on the database timer. This function takes no input parameters."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "-",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:41.000Z",\n                "dateModified": "2018-01-29T21:13:06.000Z",\n                "versionId": "330711DC11E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": "-",\n                "description": "Returns the difference between two values."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "5",\n              "type": "integer"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "<",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:39.000Z",\n                "dateModified": "2018-01-29T21:13:07.000Z",\n                "versionId": "3333B30411E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C318DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": "<",\n                "description": "Returns TRUE if the first value is lesser than the second value."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year@ID",\n              "type": "object_at_form",\n              "target": {\n                "dateCreated": "2001-01-02T20:48:10.000Z",\n                "dateModified": "2012-01-27T12:00:32.000Z",\n                "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                "primaryLocale": "en-US",\n                "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Year"\n              },\n              "attributeForm": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "",\n              "type": "end_of_text"\n            }\n          ]\n        }\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-11-09T15:47:55.000Z",\n          "dateModified": "2018-01-29T21:13:05.000Z",\n          "versionId": "32737F3011E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n          "subType": "function",\n          "name": "Year",\n          "description": "Returns the year of the input date."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "CurrentDate",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-11-09T15:47:54.000Z",\n          "dateModified": "2018-01-29T21:13:05.000Z",\n          "versionId": "32363DBE11E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n          "subType": "function",\n          "name": "CurrentDate",\n          "description": "Returns the current date based on the database timer. This function takes no input parameters."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2018-01-29T21:13:06.000Z",\n          "versionId": "330711DC11E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "5",\n        "type": "integer"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:39.000Z",\n          "dateModified": "2018-01-29T21:13:07.000Z",\n          "versionId": "3333B30411E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C318DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "<",\n          "description": "Returns TRUE if the first value is lesser than the second value."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year@ID",\n        "type": "object_at_form",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2012-01-27T12:00:32.000Z",\n          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "attributeForm": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response Code: 201 (A new filter is created successfully in the changeset.)"}),"\n",(0,s.jsx)(n.h2,{id:"more-samples",children:"More samples"}),"\n",(0,s.jsxs)(n.p,{children:["The following are additional examples to replace ",(0,s.jsx)(n.code,{children:"<custom expression>"})," from the input template."]}),"\n",(0,s.jsx)(n.h3,{id:"escape-sequences-for-full-paths",children:"Escape sequences for full paths"}),"\n",(0,s.jsx)(n.p,{children:"Use full paths to the object to avoid ambiguity. Make sure to use escape sequences for any backslashes in the expression."}),"\n",(0,s.jsx)(n.p,{children:"The sample request body shown below contains escape sequences for the backslashes in the following expression:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"\\Schema Objects\\Attributes\\Geography\\Region]@ID=1"})}),"\n",(0,s.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "[\\\\Schema Objects\\\\Attributes\\\\Geography\\\\Region]@ID=1"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"escape-sequences-for-double-quotes",children:"Escape sequences for double quotes"}),"\n",(0,s.jsx)(n.p,{children:"Make sure to use escape sequences for any double quotes in the expression."}),"\n",(0,s.jsx)(n.p,{children:"The sample request body shown below contains escape sequences for double quotes in the following expression:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'Promotion@DESC in ("Valentine\'s Day", "Summer Fun")'})}),"\n",(0,s.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "Promotion@DESC in (\\"Valentine\'s Day\\", \\"Summer Fun\\")"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"escape-sequences-for-the-applycomparison-function",children:["Escape sequences for the ",(0,s.jsx)(n.code,{children:"ApplyComparison"})," function"]}),"\n",(0,s.jsxs)(n.p,{children:["If you use the ",(0,s.jsx)(n.code,{children:"ApplyComparison"})," function in an expression, make sure to use escape sequences for the double quotes."]}),"\n",(0,s.jsxs)(n.p,{children:["The sample request body shown below contains escape sequences for double quotes within the following ",(0,s.jsx)(n.code,{children:"ApplyComparison"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:'ApplyComparison (\\"#0 between #1 and #2\\",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "ApplyComparison (\\"#0 between #1 and #2\\",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)"\n      }\n    ]\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);