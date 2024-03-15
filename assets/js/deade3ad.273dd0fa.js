"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6350],{85521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(74848),i=t(28453);const o={title:"Retrieve a table's definition",sidebar_label:"Retrieve a table's definition",description:"You can use REST APIs to retrieve the definition for a table through the Modeling service."},r=void 0,s={id:"common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition",title:"Retrieve a table's definition",description:"You can use REST APIs to retrieve the definition for a table through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Retrieve a table's definition",sidebar_label:"Retrieve a table's definition",description:"You can use REST APIs to retrieve the definition for a table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a list of all available table definitions",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-list-of-all-available-table-definitions"},next:{title:"Create a new table object",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/create-a-new-table-object"}},d={},l=[{value:"Retrieve a table&#39;s definition",id:"retrieve-a-tables-definition",level:2},{value:"Retrieve a table&#39;s definition within a changeset",id:"retrieve-a-tables-definition-within-a-changeset",level:2},{value:"Retrieve a table&#39;s definition with specific fields",id:"retrieve-a-tables-definition-with-specific-fields",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 1"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can try out this workflow at ",(0,a.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-95d4124f-c4e5-48ce-986e-a05c6d47069f?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:"You can use REST APIs to retrieve the definition for a table through the Modeling service."}),"\n",(0,a.jsx)(n.h2,{id:"retrieve-a-tables-definition",children:"Retrieve a table's definition"}),"\n",(0,a.jsxs)(n.p,{children:["In this workflow sample, you want to get the definition of a table that is defined by a normal warehouse table. The object ID of the table is ",(0,a.jsx)(n.code,{children:"862780DC499A14D74FEC7EB2EF317DA2"}),". The table is in the MicroStrategy Tutorial project and its project ID is ",(0,a.jsx)(n.code,{children:"B19DEDCC11D4E0EFC000EB9495D0F44F"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(n.p,{children:["Get the project ID from ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["Retrieve the table's definition using ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails",children:"GET /api/model/tables/{TableId}"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.p,{children:"You can view the table's definition in the body of the response."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2002-02-14T23:06:02.000Z",\n    "dateModified": "2012-06-06T12:12:35.000Z",\n    "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n    "primaryLocale": "en-US",\n    "objectId": "862780DC499A14D74FEC7EB2EF317DA2",\n    "subType": "logical_table",\n    "name": "CITY_CTR_SLS"\n  },\n  "physicalTable": {\n    "information": {\n      "dateCreated": "2002-02-14T23:04:18.000Z",\n      "dateModified": "2012-06-06T12:12:35.000Z",\n      "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n      "primaryLocale": "en-US",\n      "objectId": "E278D17342991E49710D6F90E2A7BF2C",\n      "subType": "physical_table",\n      "name": "CITY_CTR_SLS"\n    },\n    "tableName": "CITY_CTR_SLS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:32.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CALL_CTR_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CALL_CTR_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:35.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_DOLLAR_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_DOLLAR_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:34.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_UNIT_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_UNIT_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_COST"\n      },\n      {\n        "information": {\n          "dateCreated": "2007-01-08T12:22:02.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",\n          "subType": "column",\n          "name": "New GROSS_DOLLAR_SALES (2)"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "GROSS_DOLLAR_SALES"\n      }\n    ],\n    "namespace": "dbo",\n    "tablePrefix": "dbo.",\n    "type": "normal"\n  },\n  "logicalSize": 15,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "tableKey": [\n    {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    },\n    {\n      "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Customer City"\n    }\n  ],\n  "attributes": [\n    {\n      "information": {\n        "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Call Center"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CALL_CTR_ID"\n          }\n        },\n        {\n          "formCategory": {\n            "objectId": "035E890A4157E9828414E8A0E13E2998",\n            "subType": "attribute_form_custom",\n            "name": "Call Center None"\n          },\n          "name": "Hyperlink",\n          "dataFormat": "number",\n          "expression": {\n            "text": "ApplySimple(\\"\'<a href=Main.aspx?evt=4001&src=Main.aspx.4001&reportID=B4DEFC04457E9CBE0CA79FB692BE0C5E&elementsPromptAnswers=8D679D3511D3E4981000E787EC6DE8A4;8D679D3511D3E4981000E787EC6DE8A4%3A\'&#0&\' target=_blank>Details</a>\'\\",CALL_CTR_ID)"\n          }\n        }\n      ]\n    },\n    {\n      "information": {\n        "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Customer City"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CUST_CITY_ID"\n          }\n        }\n      ]\n    }\n  ],\n  "facts": [\n    {\n      "information": {\n        "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n        "subType": "fact",\n        "name": "Cost"\n      },\n      "expression": {\n        "text": "TOT_COST"\n      }\n    },\n    {\n      "information": {\n        "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n        "subType": "fact",\n        "name": "Profit"\n      },\n      "expression": {\n        "text": "TOT_DOLLAR_SALES - TOT_COST"\n      }\n    },\n    {\n      "information": {\n        "objectId": "8D67958411D3E4981000E787EC6DE8A4",\n        "subType": "fact",\n        "name": "Revenue"\n      },\n      "expression": {\n        "text": "TOT_DOLLAR_SALES"\n      }\n    },\n    {\n      "information": {\n        "objectId": "8D67958511D3E4981000E787EC6DE8A4",\n        "subType": "fact",\n        "name": "Units Sold"\n      },\n      "expression": {\n        "text": "TOT_UNIT_SALES"\n      }\n    },\n    {\n      "information": {\n        "objectId": "6EA98A164E62D247C14B3EBFA4866411",\n        "subType": "fact",\n        "name": "Gross Revenue"\n      },\n      "expression": {\n        "text": "GROSS_DOLLAR_SALES"\n      }\n    }\n  ],\n  "primaryDataSource": {\n    "objectId": "37BE16AB11D3E48C1000E787EC6DE8A4",\n    "subType": "db_role",\n    "name": "Tutorial Data"\n  },\n  "secondaryDataSources": [\n    {\n      "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",\n      "subType": "db_role",\n      "name": "MTDIWHSQL1"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Response Code: 200 (The table's definition is returned successfully.)"}),"\n",(0,a.jsx)(n.h2,{id:"retrieve-a-tables-definition-within-a-changeset",children:"Retrieve a table's definition within a changeset"}),"\n",(0,a.jsxs)(n.p,{children:["In this workflow sample, you want to get the definition of the same table object mentioned in ",(0,a.jsx)(n.a,{href:"#retrieve-a-tables-definition",children:"Retrieve a table's definition"}),", while within a changeset. The object ID of the table is ",(0,a.jsx)(n.code,{children:"862780DC499A14D74FEC7EB2EF317DA2"}),". The table is in the MicroStrategy Tutorial project and its project ID is ",(0,a.jsx)(n.code,{children:"B19DEDCC11D4E0EFC000EB9495D0F44F"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,a.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),". If you plan to use the response of ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails",children:"GET /api/model/tables/{TableId}"})," to create a new table or update the table\u2019s definition, it is recommended to associate all requests to one changeset."]})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(n.p,{children:["Get the project ID from ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["Get a table's definition within a changeset using ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails",children:"GET /api/model/tables/{TableId}"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.p,{children:"You can view the table's definition in the body of the response."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2002-02-14T23:06:02.000Z",\n    "dateModified": "2012-06-06T12:12:35.000Z",\n    "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n    "primaryLocale": "en-US",\n    "objectId": "862780DC499A14D74FEC7EB2EF317DA2",\n    "subType": "logical_table",\n    "name": "CITY_CTR_SLS"\n  },\n  "physicalTable": {\n    "information": {\n      "dateCreated": "2002-02-14T23:04:18.000Z",\n      "dateModified": "2012-06-06T12:12:35.000Z",\n      "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n      "primaryLocale": "en-US",\n      "objectId": "E278D17342991E49710D6F90E2A7BF2C",\n      "subType": "physical_table",\n      "name": "CITY_CTR_SLS"\n    },\n    "tableName": "CITY_CTR_SLS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:32.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CALL_CTR_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CALL_CTR_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:35.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_DOLLAR_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_DOLLAR_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:34.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_UNIT_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_UNIT_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_COST"\n      },\n      {\n        "information": {\n          "dateCreated": "2007-01-08T12:22:02.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",\n          "subType": "column",\n          "name": "New GROSS_DOLLAR_SALES (2)"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "GROSS_DOLLAR_SALES"\n      }\n    ],\n    "namespace": "",\n    "tablePrefix": "",\n    "type": "normal"\n  },\n  "logicalSize": 15,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "tableKey": [\n    {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    },\n    {\n      "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Customer City"\n    }\n  ],\n  "attributes": [\n    {\n      "information": {\n        "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Call Center"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CALL_CTR_ID"\n          }\n        },\n        {\n          "formCategory": {\n            "objectId": "035E890A4157E9828414E8A0E13E2998",\n            "subType": "attribute_form_custom",\n            "name": "Call Center None"\n          },\n          "name": "Hyperlink",\n          "dataFormat": "number",\n          "expression": {\n            "text": "ApplySimple(\\"\'<a href=Main.aspx?evt=4001&src=Main.aspx.4001&reportID=B4DEFC04457E9CBE0CA79FB692BE0C5E&elementsPromptAnswers=8D679D3511D3E4981000E787EC6DE8A4;8D679D3511D3E4981000E787EC6DE8A4%3A\'&#0&\' target=_blank>Details</a>\'\\",CALL_CTR_ID)"\n          }\n        }\n      ]\n    },\n    {\n      "information": {\n        "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Customer City"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CUST_CITY_ID"\n          }\n        }\n      ]\n    }\n  ],\n  "facts": [\n    {\n      "information": {\n        "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n        "subType": "fact",\n        "name": "Cost"\n      },\n      "expression": {\n        "text": "TOT_COST"\n      }\n    },\n    {\n      "information": {\n        "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n        "subType": "fact",\n        "name": "Profit"\n      },\n      "expression": {\n        "text": "TOT_DOLLAR_SALES - TOT_COST"\n      }\n    },\n    {\n      "information": {\n        "objectId": "8D67958411D3E4981000E787EC6DE8A4",\n        "subType": "fact",\n        "name": "Revenue"\n      },\n      "expression": {\n        "text": "TOT_DOLLAR_SALES"\n      }\n    },\n    {\n      "information": {\n        "objectId": "8D67958511D3E4981000E787EC6DE8A4",\n        "subType": "fact",\n        "name": "Units Sold"\n      },\n      "expression": {\n        "text": "TOT_UNIT_SALES"\n      }\n    },\n    {\n      "information": {\n        "objectId": "6EA98A164E62D247C14B3EBFA4866411",\n        "subType": "fact",\n        "name": "Gross Revenue"\n      },\n      "expression": {\n        "text": "GROSS_DOLLAR_SALES"\n      }\n    }\n  ],\n  "primaryDataSource": {\n    "objectId": "37BE16AB11D3E48C1000E787EC6DE8A4",\n    "subType": "db_role",\n    "name": "Tutorial Data"\n  },\n  "secondaryDataSources": []\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Response Code: 200 (The table's definition is returned successfully.)"}),"\n",(0,a.jsx)(n.h2,{id:"retrieve-a-tables-definition-with-specific-fields",children:"Retrieve a table's definition with specific fields"}),"\n",(0,a.jsxs)(n.p,{children:["In this workflow sample, you get the definition of the ",(0,a.jsx)(n.code,{children:'"CITY_CTR_SLS"'})," table object using its object ID of ",(0,a.jsx)(n.code,{children:"862780DC499A14D74FEC7EB2EF317DA2"}),". You also use the ",(0,a.jsx)(n.code,{children:"fields"})," parameter to retrieve specific fields. If the ",(0,a.jsx)(n.code,{children:"fields"})," parameter is not specified, the API returns all fields by default as shown in ",(0,a.jsx)(n.a,{href:"#retrieve-a-tables-definition",children:"Retrieve a table's definition"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Multiple field values are separated by a comma."})}),"\n",(0,a.jsxs)(n.p,{children:["Retrieve the table's definition using ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails",children:"GET /api/model/tables/{TableId}"}),", along with ",(0,a.jsx)(n.code,{children:"fields=information,physicalTable,attributes,facts"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2?fields=information,physicalTable,attributes,facts" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.p,{children:"You can view the returned table's definition in the body of the response. Notice that only the specified fields are returned."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2002-02-14T23:06:02.000Z",\n    "dateModified": "2012-06-06T12:12:35.000Z",\n    "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n    "primaryLocale": "en-US",\n    "objectId": "862780DC499A14D74FEC7EB2EF317DA2",\n    "subType": "logical_table",\n    "name": "CITY_CTR_SLS"\n  },\n  "physicalTable": {\n    "information": {\n      "dateCreated": "2002-02-14T23:04:18.000Z",\n      "dateModified": "2012-06-06T12:12:35.000Z",\n      "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n      "primaryLocale": "en-US",\n      "objectId": "E278D17342991E49710D6F90E2A7BF2C",\n      "subType": "physical_table",\n      "name": "CITY_CTR_SLS"\n    },\n    "tableName": "CITY_CTR_SLS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:32.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CALL_CTR_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CALL_CTR_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:35.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_DOLLAR_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_DOLLAR_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:34.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_UNIT_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_UNIT_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_COST"\n      },\n      {\n        "information": {\n          "dateCreated": "2007-01-08T12:22:02.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",\n          "subType": "column",\n          "name": "New GROSS_DOLLAR_SALES (2)"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "GROSS_DOLLAR_SALES"\n      }\n    ],\n    "namespace": "",\n    "tablePrefix": "",\n    "type": "normal"\n  },\n  "attributes": [\n    {\n      "information": {\n        "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Call Center"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CALL_CTR_ID"\n          }\n        },\n        {\n          "formCategory": {\n            "objectId": "035E890A4157E9828414E8A0E13E2998",\n            "subType": "attribute_form_custom",\n            "name": "Call Center None"\n          },\n          "name": "Hyperlink",\n          "dataFormat": "number",\n          "expression": {\n            "text": "ApplySimple(\\"\'<a href=Main.aspx?evt=4001&src=Main.aspx.4001&reportID=B4DEFC04457E9CBE0CA79FB692BE0C5E&elementsPromptAnswers=8D679D3511D3E4981000E787EC6DE8A4;8D679D3511D3E4981000E787EC6DE8A4%3A\'&#0&\' target=_blank>Details</a>\'\\",CALL_CTR_ID)"\n          }\n        }\n      ]\n    },\n    {\n      "information": {\n        "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Customer City"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CUST_CITY_ID"\n          }\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 200 (The table's definition is returned successfully.)"})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(96540);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);