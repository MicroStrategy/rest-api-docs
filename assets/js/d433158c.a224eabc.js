"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6096],{39565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(74848),a=t(28453);const o={title:"Retrieve a partition mapping table's definition",sidebar_label:"Retrieve a partition mapping table's definition",description:"You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service."},r=void 0,s={id:"common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition",title:"Retrieve a partition mapping table's definition",description:"You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve a partition mapping table's definition",sidebar_label:"Retrieve a partition mapping table's definition",description:"You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update SAP HANA parameters",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters"},next:{title:"Create a new partition mapping table object",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/create-a-new-partition-mapping-table-object"}},l={},d=[{value:"Retrieve a WHPM table&#39;s definition",id:"retrieve-a-whpm-tables-definition",level:2},{value:"Retrieve a MDPM table&#39;s definition",id:"retrieve-a-mdpm-tables-definition",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{since:"2021 Update 9"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can try this workflow with ",(0,i.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-43769ee1-7480-4413-990a-13b50119b384",children:"REST API Playground"}),"."]}),(0,i.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service. A brief introduction of partition mapping is provided in this documentation. To learn more about partition mapping, refer to ",(0,i.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/ProjectDesignGuide/WebHelp/Lang_1033/Content/Dividing_tables_to_increase_performance__Partition.htm",children:"Microstrategy Community"}),"."]}),"\n",(0,i.jsx)(n.p,{children:'The partitioning feature improves query performance when working with large data volumes. Partitioning "breaks" the data into different (ideally balanced) portions, and each portion is called a partition base table (PBT), or a partition table. In other words, a partition table is a warehouse table that contains one part of a larger set of data. To manage which partition table to use for a given query, partition mapping is introduced by MicroStrategy to identify and keep track of the partitioned base tables as part of a logical whole. MicroStrategy supports two types of partition mapping:'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warehouse partition mapping (WHPM)"}),": uses a specialized warehouse table (WHPM table) to determine which table to access"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Metadata partition mapping (MDPM)"}),": stores the mapping information in the project metadata as a MDPM table"]}),"\n",(0,i.jsxs)(n.p,{children:["Workflows for retrieving the WHPM and MDPM tables are provided so you can see the slight differences between partition mapping tables and other tables. Workflows for retrieving a partition mapping table's definition within a changeset or with specific fields is the same as ",(0,i.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition",children:"Retrieve a table's definition"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(n.p,{children:["Get the project ID from ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-a-whpm-tables-definition",children:"Retrieve a WHPM table's definition"}),"\n",(0,i.jsxs)(n.p,{children:["Use this workflow sample to get the definition of a WHPM table. The object ID of the table is ",(0,i.jsx)(n.code,{children:"569A89E78FA1455687F4E327B259B3FB"}),". The table is in the MicroStrategy Tutorial project and its project ID is ",(0,i.jsx)(n.code,{children:"B19DEDCC11D4E0EFC000EB9495D0F44F"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Get the table's definition with ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails",children:"GET /api/model/tables/{TableId}"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://10.23.33.32:8080/MicroStrategyLibrary/api/model/tables/569A89E78FA1455687F4E327B259B3FB" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.p,{children:'You can view the WHPM table\'s definition in the body of the response. The subtype is "table_partition_wh", the subtype of the physical table is "db_table_pmt", and the "partitionTables" field contains PBTs.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "versionId": "87C72A1A8E1947888C469E21F6C5969F",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "569A89E78FA1455687F4E327B259B3FB",\n    "subType": "table_partition_wh",\n    "name": "my_pmta",\n    "destinationFolderId": "CC582EC35C0C481E826E6D6B40BE4905"\n  },\n  "physicalTable": {\n    "information": {\n      "versionId": "C45CBE94B36049BEB279347EB36315DE",\n      "acg": 255,\n      "primaryLocale": "en-US",\n      "objectId": "A7FEA781BA6946719FDBA42EB5F26C4A",\n      "subType": "db_table_pmt",\n      "name": "pmt_inventory_01",\n      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n    },\n    "tableName": "pmt_inventory_01",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:29.000Z",\n          "dateModified": "2020-08-25T02:49:02.000Z",\n          "versionId": "B3ADE0394CE4ABBA8853069EA98EDC86",\n          "acg": 255,\n          "primaryLocale": "en-US",\n          "objectId": "8D67914311D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "pbtname"\n        },\n        "dataType": {\n          "type": "fixed_length_string",\n          "precision": 50,\n          "scale": -2147483648\n        },\n        "columnName": "pbtname"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:31.000Z",\n          "dateModified": "2020-08-25T02:49:03.000Z",\n          "versionId": "762834024049247CC40B2B99E1538DBC",\n          "acg": 255,\n          "primaryLocale": "en-US",\n          "objectId": "8D67914211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "quarter_id"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "quarter_id"\n      }\n    ],\n    "namespace": "public",\n    "tablePrefix": "",\n    "type": "warehouse_partition"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "partitionTables": [\n    {\n      "information": {\n        "versionId": "6DD8D51A96B04897AD945947674AC3C4",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "0772760204B146D1BB02CC594C67F282",\n        "subType": "logical_table",\n        "name": "pmt_inventory_01_FactTable",\n        "destinationFolderId": "A23B009F4F4E40039B13F0B0FACC4FF5"\n      },\n      "physicalTable": {\n        "information": {\n          "versionId": "223A6960730C4534BBB3C1F468A2275F",\n          "acg": 255,\n          "primaryLocale": "en-US",\n          "objectId": "75469C9FEE934E02B893B72DE28E1A9E",\n          "subType": "physical_table",\n          "name": "pmt_inventory_01_FactTable",\n          "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n        },\n        "tableName": "pmt_inventory_01_FactTable",\n        "columns": [\n          {\n            "information": {\n              "dateCreated": "2001-01-02T20:48:31.000Z",\n              "dateModified": "2019-10-15T19:47:55.000Z",\n              "versionId": "ADF938E811E9EF8470330080EF45D340",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "8D67916011D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "boh_qty"\n            },\n            "dataType": {\n              "type": "decimal",\n              "precision": 0,\n              "scale": -2147483648\n            },\n            "columnName": "boh_qty"\n          },\n          {\n            "information": {\n              "dateCreated": "2020-07-17T05:59:22.000Z",\n              "dateModified": "2020-08-24T03:29:35.000Z",\n              "versionId": "B60210AE4910694BD8A502982FE9DA1B",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "FA1618C246B3DEAEB6E930A449E8147E",\n              "subType": "column",\n              "name": "eoh_qty"\n            },\n            "dataType": {\n              "type": "decimal",\n              "precision": 0,\n              "scale": -2147483648\n            },\n            "columnName": "eoh_qty"\n          },\n          {\n            "information": {\n              "dateCreated": "2001-01-02T20:48:29.000Z",\n              "dateModified": "2020-08-25T02:49:04.000Z",\n              "versionId": "C40D4D87495D26CE5EF913960AC781DE",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "8D67915C11D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "item_id"\n            },\n            "dataType": {\n              "type": "integer",\n              "precision": 2,\n              "scale": -2147483648\n            },\n            "columnName": "item_id"\n          },\n          {\n            "information": {\n              "dateCreated": "2001-01-02T20:48:44.000Z",\n              "dateModified": "2019-10-15T19:47:55.000Z",\n              "versionId": "AE0645BA11E9EF8400400080EF75B4B2",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "8D6791E011D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "month_id"\n            },\n            "dataType": {\n              "type": "integer",\n              "precision": 4,\n              "scale": -2147483648\n            },\n            "columnName": "month_id"\n          }\n        ],\n        "namespace": "",\n        "tablePrefix": "",\n        "type": "normal"\n      },\n      "logicalSize": 0,\n      "isLogicalSizeLocked": false,\n      "isTrueKey": true,\n      "isPartOfPartition": true\n    }\n  ],\n  "primaryDataSource": {\n    "objectId": "F0C9E02B4C56D68F9D8176A7FBADCFF3",\n    "subType": "db_role_import",\n    "name": "WH_partition"\n  },\n  "secondaryDataSources": []\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 200 (The WHPM table's definition is returned successfully.)"}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-a-mdpm-tables-definition",children:"Retrieve a MDPM table's definition"}),"\n",(0,i.jsxs)(n.p,{children:["Use this workflow sample to get the definition of an MDPM table. The object ID of the table is ",(0,i.jsx)(n.code,{children:"473718A30DA84A9A814424537879778F"}),". The table is in the MicroStrategy Tutorial project and its project ID is ",(0,i.jsx)(n.code,{children:"B19DEDCC11D4E0EFC000EB9495D0F44F"}),'. The API usage is the same as retrieving a WHPM table. Unlike all other tables, you can use "showExpressionAs" and "showFilterTokens" to customize partition filter representation.']}),"\n",(0,i.jsxs)(n.p,{children:["Get the table's definition with ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails",children:"GET /api/model/tables/{TableId}"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET \'10.23.33.32:8080/MicroStrategyLibrary/api/model/tables/473718A30DA84A9A814424537879778F?showExpressionAs=tree&showFilterTokens=false\' -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.p,{children:'You can view the MDPM table\'s definition in the body of the response. The subtype is "table_partition_md". It does not have a "physicalTable" field. It has a "partitionTables" field that contains PBTs and each PBT has a partition filter.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-12-26T09:33:01.000Z",\n    "dateModified": "2022-12-26T09:33:01.000Z",\n    "versionId": "5438A6604932356237C080B8B9F80F01",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "473718A30DA84A9A814424537879778F",\n    "subType": "table_partition_md",\n    "name": "PMT"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "partitionLevel": [\n    {\n      "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Customer"\n    },\n    {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    }\n  ],\n  "partitionTables": [\n    {\n      "information": {\n        "dateCreated": "2022-12-01T06:39:42.000Z",\n        "dateModified": "2022-12-27T08:55:22.000Z",\n        "versionId": "C254AFDE488EF05AB0AA5F9E2CFCCA09",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "29FD5283476B99E55016208A088328C6",\n        "subType": "logical_table",\n        "name": "pbt1"\n      },\n      "partitionLevel": [\n        {\n          "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer"\n        }\n      ],\n      "partitionFilter": {\n        "qualification": {\n          "text": "IsNotNull(Customer (ID))",\n          "tree": {\n            "type": "predicate_form_qualification",\n            "predicateId": "DFDAE37911944DC38E317627B867CCE9",\n            "predicateText": "IsNotNull(Customer (ID))",\n            "predicateTree": {\n              "function": "is_not_null",\n              "parameters": [],\n              "attribute": {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              },\n              "form": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                "subType": "attribute_form_system",\n                "name": "ID"\n              },\n              "dataLocale": ""\n            }\n          }\n        }\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2022-12-01T06:47:05.000Z",\n        "dateModified": "2022-12-27T08:55:14.000Z",\n        "versionId": "BB4D26894541764295BF52B97AAB4425",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "061F17C1443E1D56F3F0C4BC33CA54A7",\n        "subType": "logical_table",\n        "name": "pbt2"\n      },\n      "partitionLevel": [\n        {\n          "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Call Center"\n        }\n      ],\n      "partitionFilter": {\n        "qualification": {\n          "text": "IsNotNull({Call Center} (ID))",\n          "tree": {\n            "type": "predicate_form_qualification",\n            "predicateId": "CEAEF3F3DB6C40A38FC14418F93C957A",\n            "predicateText": "IsNotNull({Call Center} (ID))",\n            "predicateTree": {\n              "function": "is_not_null",\n              "parameters": [],\n              "attribute": {\n                "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Call Center"\n              },\n              "form": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                "subType": "attribute_form_system",\n                "name": "ID"\n              },\n              "dataLocale": ""\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 200 (The MDPM table's definition is returned successfully.)"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);