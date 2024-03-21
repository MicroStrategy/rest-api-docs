"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1194],{45564:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(74848),o=t(28453);const s={title:"Create an attribute object",sidebar_label:"Create an attribute object",description:"This workflow sample demonstrates how to create an attribute object through the Modeling service."},r=void 0,i={id:"common-workflows/modeling/manage-attribute-objects/create-an-attribute-object",title:"Create an attribute object",description:"This workflow sample demonstrates how to create an attribute object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object.md",sourceDirName:"common-workflows/modeling/manage-attribute-objects",slug:"/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Create an attribute object",sidebar_label:"Create an attribute object",description:"This workflow sample demonstrates how to create an attribute object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an attribute's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset"},next:{title:"Update an attribute's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/update-an-attributes-definition"}},l={},c=[{value:"Create an attribute object",id:"create-an-attribute-object",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Attribute form mapped to multiple expressions",id:"attribute-form-mapped-to-multiple-expressions",level:3},{value:"Attribute with a form group",id:"attribute-with-a-form-group",level:3},{value:"Compound attribute",id:"compound-attribute",level:3},{value:"Expressions in &quot;tree&quot; format",id:"expressions-in-tree-format",level:3},{value:"Use warehouse partition mapping tables or metadata partition base tables in expressions",id:"use-warehouse-partition-mapping-tables-or-metadata-partition-base-tables-in-expressions",level:3}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components},{Available:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 1"}),"\n",(0,a.jsxs)(e.admonition,{type:"tip",children:[(0,a.jsxs)(e.p,{children:["You can try out this workflow at ",(0,a.jsx)(e.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-fc30f1d1-7f8e-4bbb-8f27-7b66c67e6db6?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(e.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(e.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(e.p,{children:"This workflow sample demonstrates how to create an attribute object through the Modeling service."}),"\n",(0,a.jsxs)(e.p,{children:['You want to create a "Subcategory" attribute object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID of the attribute is ',(0,a.jsx)(e.code,{children:"98FE182C2A10427EACE0CD30B6768258"})," in the MicroStrategy Tutorial project. The project ID is ",(0,a.jsx)(e.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,a.jsxs)(e.admonition,{type:"info",children:[(0,a.jsxs)(e.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(e.p,{children:["Get the project ID from ",(0,a.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,a.jsx)(e.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,a.jsx)(e.h2,{id:"create-an-attribute-object",children:"Create an attribute object"}),"\n",(0,a.jsxs)(e.p,{children:["Use ",(0,a.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-createAttribute",children:"POST /api/model/attributes"}),"."]}),"\n",(0,a.jsx)(e.p,{children:'You want to create a "Subcategory" attribute object with ID form and DESC form.'}),"\n",(0,a.jsx)(e.p,{children:'To create an attribute, in the request body, "forms" contains the detailed definition of a list of attribute forms. Each attribute contains one or more attribute forms. Each attribute form contains:'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:'"expressions": A list of attribute form expressions. An attribute form contains one or more attribute form expressions. Each attribute form expression contains "expression" and "tables".'}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:'"expression": Must be in either "tree" or "tokens" format.'}),"\n",(0,a.jsx)(e.p,{children:'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).'}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:'"tables": A list of tables that the "expression" applies to. Warehouse partition base tables and metadata partition mapping tables are not allowed here.'}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:'"dataType" and "alias" are optional. If omitted, they can be calculated based on the first attribute form expression.'}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:'"childForms" is specific to a form group, which contains the reference for child forms.'}),"\n",(0,a.jsx)(e.p,{children:'Provide a lookup table on either the attribute level or attribute form level, as it is required for the object to be committed to the metadata. A lookup table can be defined on the attribute level using "attributeLookupTable", or the attribute form level using "lookupTable". If "LookupTable" is defined at the attribute form level, it is used, or it falls back to "attributeLookupTable". Warehouse partition base tables and metadata partition mapping tables are not allowed to use in the lookup table.'}),"\n",(0,a.jsx)(e.p,{children:'Provide "keyForm" and "displays", as they are required for the attribute to be committed to the metadata.'}),"\n",(0,a.jsx)(e.p,{children:'Provide "destinationFolderId" in "information", as it is required for the attribute to be committed to the metadata.'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"\n'})}),"\n",(0,a.jsx)(e.p,{children:"Construct the expression."}),"\n",(0,a.jsxs)(e.p,{children:['Make a copy of the following "tokens" format template and modify the ',(0,a.jsx)(e.code,{children:'"attribute_form_expression"'})," to construct an expression."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "expression": {\n    "tokens": [\n      {\n        "value": "<attribute_form_expression>"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "attribute",\n    "name": "Subcategory",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "SUBCAT_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "SUBCAT_DESC"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"Sample Curl:"}),"\n",(0,a.jsxs)(e.p,{children:["In this sample workflow, you want to return the newly created attribute with its expression in all formats. Therefore, you should set ",(0,a.jsx)(e.code,{children:"showExpressionAs=tree"})," and ",(0,a.jsx)(e.code,{children:"showExpressionsAs=tokens"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d "{\\\\"information\\\\":{\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Subcategory\\\\",\\\\"destinationFolderId\\\\":\\\\"98FE182C2A10427EACE0CD30B6768258\\\\"},\\\\"forms\\\\":[{\\\\"name\\\\":\\\\"ID\\\\",\\\\"description\\\\":\\\\"Subcategory ID\\\\",\\\\"category\\\\":\\\\"ID\\\\",\\\\"displayFormat\\\\":\\\\"number\\\\",\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"SUBCAT_ID\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"76C6FEAB49D08F57BC6FC9B644743EEF\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"CITY_SUBCATEG_SLS\\\\"},{\\\\"objectId\\\\":\\\\"8D67937411D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_ITEM\\\\"},{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}]}],\\\\"alias\\\\":\\\\"SUBCAT_ID\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}},{\\\\"name\\\\":\\\\"DESC\\\\",\\\\"description\\\\":\\\\"Subcategory Name\\\\",\\\\"category\\\\":\\\\"DESC\\\\",\\\\"isMultilingual\\\\":true,\\\\"displayFormat\\\\":\\\\"text\\\\",\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"SUBCAT_DESC\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}]}],\\\\"alias\\\\":\\\\"SUBCAT_DESC\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}}],\\\\"attributeLookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"},\\\\"keyForm\\\\":{\\\\"name\\\\":\\\\"ID\\\\"},\\\\"displays\\\\":{\\\\"reportDisplays\\\\":[{\\\\"name\\\\":\\\\"DESC\\\\"}],\\\\"browseDisplays\\\\":[{\\\\"name\\\\":\\\\"DESC\\\\"}]},\\\\"sorts\\\\":{\\\\"reportSorts\\\\":[{\\\\"form\\\\":{\\\\"name\\\\":\\\\"DESC\\\\"},\\\\"ascending\\\\":true}],\\\\"browseSorts\\\\":[{\\\\"form\\\\":{\\\\"name\\\\":\\\\"DESC\\\\"},\\\\"ascending\\\\":true}]}}"\n'})}),"\n",(0,a.jsx)(e.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(e.p,{children:"You can view the new attribute's definition in the body of the response."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "information": {\n    "versionId": "45E696C357BC4BE882ED945E3EEDFE09",\n    "primaryLocale": "en-US",\n    "objectId": "27DA76BDDD8B4EEEA890B76F9BC77C9D",\n    "subType": "attribute",\n    "name": "Subcategory",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "id": "45C11FA478E745FEA08D781CEA190FE5",\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "type": "system",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 2,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "B8AAB62201C44E349D3CE80CEC36200E",\n          "expression": {\n            "text": "SUBCAT_ID",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_ID",\n              "objectId": "8D67921711D3E4981000E787EC6DE8A4"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "SUBCAT_ID",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-01-02T20:48:47.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8D67921711D3E4981000E787EC6DE8A4",\n                  "subType": "column",\n                  "name": "SUBCAT_ID"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "type": "system",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 50,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "41C08B7CE11440569CA7AE54A28DCC55",\n          "expression": {\n            "text": "SUBCAT_DESC",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_DESC",\n              "objectId": "8D67928711D3E4981000E787EC6DE8A4"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "SUBCAT_DESC",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-01-02T20:48:34.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8D67928711D3E4981000E787EC6DE8A4",\n                  "subType": "column",\n                  "name": "SUBCAT_DESC"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "id": "45C11FA478E745FEA08D781CEA190FE5",\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ]\n  },\n  "relationships": []\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"Response Code: 201 (A new attribute is created successfully in the changeset.)"}),"\n",(0,a.jsx)(e.h2,{id:"more-samples",children:"More samples"}),"\n",(0,a.jsx)(e.p,{children:"The following are additional examples for creating an attribute object."}),"\n",(0,a.jsx)(e.h3,{id:"attribute-form-mapped-to-multiple-expressions",children:"Attribute form mapped to multiple expressions"}),"\n",(0,a.jsxs)(e.p,{children:['You can create an attribute with attribute forms mapped to multiple expressions. In this sample, you want to create an attribute named "Day" with ID form maps to two expressions: 1) ',(0,a.jsx)(e.code,{children:'"DAY_DATE"'})," used in the tables ",(0,a.jsx)(e.code,{children:'"DAY_CTR_SLS"'})," and ",(0,a.jsx)(e.code,{children:'"LU_DAY"'})," and 2) ",(0,a.jsx)(e.code,{children:'"ORDER_DATE"'})," used in the table ",(0,a.jsx)(e.code,{children:'"ORDER_FACT"'}),"."]}),"\n",(0,a.jsx)(e.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "attribute",\n    "name": "Day",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "category": "ID",\n      "displayFormat": "date",\n      "dataType": {\n        "type": "time_stamp",\n        "precision": 0,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "DAY_DATE"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "6F4FF0C84F271FC9851E9F8F502FF1C0",\n              "subType": "logical_table",\n              "name": "DAY_CTR_SLS"\n            },\n            {\n              "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n              "subType": "logical_table",\n              "name": "LU_DAY"\n            }\n          ]\n        },\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "ORDER_DATE"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D6793D411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "ORDER_FACT"\n            }\n          ]\n        }\n      ],\n      "alias": "DAY_DATE",\n      "lookupTable": {\n        "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n        "subType": "logical_table",\n        "name": "LU_DAY"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n    "subType": "logical_table",\n    "name": "LU_DAY"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "ID"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "ID"\n      }\n    ]\n  },\n  "sorts": {}\n}\n'})}),"\n",(0,a.jsx)(e.h3,{id:"attribute-with-a-form-group",children:"Attribute with a form group"}),"\n",(0,a.jsxs)(e.p,{children:["You can create an attribute with a form group. In this sample, you want to create an attribute named ",(0,a.jsx)(e.code,{children:'"Customer"'}),' that contains the form group "Name" with "First Name" and "Last Name".']}),"\n",(0,a.jsx)(e.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "attribute",\n    "name": "Customer",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Customer ID",\n      "category": "ID",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "CUSTOMER_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUSTOMER_ID",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "name": "Name",\n      "description": "Customer Full Name",\n      "category": "DESC",\n      "isFormGroup": true,\n      "childForms": [\n        {\n          "name": "Last Name"\n        },\n        {\n          "name": "First Name"\n        }\n      ]\n    },\n    {\n      "name": "Last Name",\n      "description": "Customer Last Name",\n      "category": "Customer DESC (1)",\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "CUST_LAST_NAME"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUST_LAST_NAME",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "name": "First Name",\n      "description": "Customer First Name",\n      "category": "Customer DESC (2)",\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "CUST_FIRST_NAME"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUST_FIRST_NAME",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_CUSTOMER"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "Last Name"\n      },\n      {\n        "name": "First Name"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "Last Name"\n      },\n      {\n        "name": "First Name"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "name": "Last Name"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "name": "Last Name"\n        },\n        "ascending": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(e.h3,{id:"compound-attribute",children:"Compound attribute"}),"\n",(0,a.jsx)(e.p,{children:'You can create a compound attribute. In this sample, you want to create an attribute named "Distribution Center" that contains the compound keys "COUNTRY_ID" and "DIST_CTR_ID".'}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "attribute",\n    "name": "Distribution Center",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Distribution Center Compound ID",\n      "category": "ID",\n      "isFormGroup": true,\n      "childForms": [\n        {\n          "name": "ID (1)"\n        },\n        {\n          "name": "ID (2)"\n        }\n      ]\n    },\n    {\n      "name": "ID (1)",\n      "description": "Distribution Center ID1",\n      "category": "Distribution Center ID_1",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "COUNTRY_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67933211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CALL_CTR"\n            },\n            {\n              "objectId": "8D67934411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_COUNTRY"\n            },\n            {\n              "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_DIST_CTR"\n            }\n          ]\n        }\n      ],\n      "alias": "COUNTRY_ID",\n      "lookupTable": {\n        "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_DIST_CTR"\n      }\n    },\n    {\n      "name": "ID (2)",\n      "description": "Distribution Center ID2",\n      "category": "Distribution Center ID_2",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expressionId": "8D679FA4E49811D387E70010A4E86DEC",\n          "expression": {\n            "tokens": [\n              {\n                "value": "DIST_CTR_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67933211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CALL_CTR"\n            },\n            {\n              "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_DIST_CTR"\n            }\n          ]\n        }\n      ],\n      "alias": "DIST_CTR_ID",\n      "lookupTable": {\n        "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_DIST_CTR"\n      }\n    },\n    {\n      "name": "DESC",\n      "description": "Distribution Center Name",\n      "category": "DESC",\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 50,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "DIST_CTR_NAME"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_DIST_CTR"\n            }\n          ]\n        }\n      ],\n      "alias": "DIST_CTR_NAME",\n      "lookupTable": {\n        "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_DIST_CTR"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_DIST_CTR"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {}\n}\n'})}),"\n",(0,a.jsx)(e.h3,{id:"expressions-in-tree-format",children:'Expressions in "tree" format'}),"\n",(0,a.jsx)(e.p,{children:'You can create an attribute with expressions in "tree" format.'}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "attribute",\n    "name": "Subcategory_tree",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_ID",\n              "objectId": "8D67921711D3E4981000E787EC6DE8A4"\n            }\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_DESC",\n              "objectId": "8D67928711D3E4981000E787EC6DE8A4"\n            }\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(e.h3,{id:"use-warehouse-partition-mapping-tables-or-metadata-partition-base-tables-in-expressions",children:"Use warehouse partition mapping tables or metadata partition base tables in expressions"}),"\n",(0,a.jsxs)(e.p,{children:["In this sample, you want to create an attribute named ",(0,a.jsx)(e.code,{children:'"Item"'})," that references ",(0,a.jsx)(e.code,{children:'"item_id"'})," column of the warehouse partition mapping table ",(0,a.jsx)(e.code,{children:'"whpmt"'}),", and ",(0,a.jsx)(e.code,{children:'"year_id"'})," column of the metadata partition base table ",(0,a.jsx)(e.code,{children:'"LU_MONTH"'}),"."]}),"\n",(0,a.jsx)(e.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "information": {\n    "name": "Item"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Item",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 2,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expression": {\n            "text": "item_id",\n            "tree": {\n              "type": "column_reference",\n              "dependenceType": "default",\n              "columnName": "item_id",\n              "objectId": "8D67915C11D3E4981000E787EC6DE8A4"\n            }\n          },\n          "tables": [\n            {\n              "objectId": "A05E98A407DD407DAA076FC06C6E464F",\n              "subType": "table_partition_wh",\n              "name": "whpmt"\n            }\n          ]\n        },\n        {\n          "expression": {\n            "text": "year_id",\n            "tree": {\n              "type": "column_reference",\n              "dependenceType": "default",\n              "columnName": "year_id",\n              "objectId": "8D6791E111D3E4981000E787EC6DE8A4"\n            }\n          },\n          "tables": [\n            {\n              "objectId": "8D67938011D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_MONTH"\n            }\n          ]\n        }\n      ],\n      "alias": "item_id",\n      "lookupTable": {\n        "objectId": "A05E98A407DD407DAA076FC06C6E464F",\n        "subType": "table_partition_wh",\n        "name": "pmt_tc86967_01"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "A05E98A407DD407DAA076FC06C6E464F",\n    "subType": "table_partition_wh",\n    "name": "pmt_tc86967_01"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "ID"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "ID"\n      }\n    ]\n  }\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>i});var a=t(96540);const o={},s=a.createContext(o);function r(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);