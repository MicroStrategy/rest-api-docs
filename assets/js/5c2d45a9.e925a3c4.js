"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3893],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,D=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(D,i(i({ref:n},m),{},{components:t})):a.createElement(D,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8325:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),i=["components"],s={title:"Workflow Sample - Update a Table's Definition",sidebar_label:"Update a Table's Definition",description:"This workflow sample demonstrates how to update an existing table through the Modeling service."},p=void 0,l={unversionedId:"common-workflows/manage-table-objects/update-a-tables-definition",id:"common-workflows/manage-table-objects/update-a-tables-definition",title:"Workflow Sample - Update a Table's Definition",description:"This workflow sample demonstrates how to update an existing table through the Modeling service.",source:"@site/docs/common-workflows/manage-table-objects/update-a-tables-definition.md",sourceDirName:"common-workflows/manage-table-objects",slug:"/common-workflows/manage-table-objects/update-a-tables-definition",permalink:"/rest-api-docs/common-workflows/manage-table-objects/update-a-tables-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-table-objects/update-a-tables-definition.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1663944405,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Workflow Sample - Update a Table's Definition",sidebar_label:"Update a Table's Definition",description:"This workflow sample demonstrates how to update an existing table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a New Table Object",permalink:"/rest-api-docs/common-workflows/manage-table-objects/create-a-new-table-object"},next:{title:"Retrieve a Prompt of an SAP HANA Table",permalink:"/rest-api-docs/common-workflows/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table"}},m={},c=[],d={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-95d4124f-c4e5-48ce-986e-a05c6d47069f?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to update an existing table through the Modeling service."),(0,o.kt)("p",null,"In this workflow sample, you update an existing ",(0,o.kt)("inlineCode",{parentName:"p"},'"CITY_CTR_SLS"')," table object in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets"),", along with ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaEdit=true")," to commit a changeset with schema manipulations."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:36:31.187294Z",\n  "dateModified": "2020-11-17T17:36:31.187308Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "userName": "MSTR User",\n  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Code: 201 (A new changeset is created successfully.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},'"CITY_CTR_SLS"')," table, as well as its name and prefix using [PATCH /api/model/tables/",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails"},"tableId}"),". The object ID of the table is ",(0,o.kt)("inlineCode",{parentName:"p"},"862780DC499A14D74FEC7EB2EF317DA2"),"."),(0,o.kt)("p",{parentName:"li"},"Here are the fields that should be updated for normal versus freeform SQL tables:"),(0,o.kt)("p",{parentName:"li"},"For a normal table, you can update the logical table name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"information")," field, ",(0,o.kt)("inlineCode",{parentName:"p"},"isTrueKey"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"logicalSize"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isLogicalSizeLocked"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryDatasource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"secondaryDatasource")," field, physical table object name, physical table name, and table prefix in ",(0,o.kt)("inlineCode",{parentName:"p"},"physicalTable")," field. When the ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryDatasource")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"secondaryDatasource")," of this logical table is updated, the related ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryDatasource")," or secondaryDatasource of all other logical tables that share the same physical table with this logical table are also updated."),(0,o.kt)("p",{parentName:"li"},"For a freeform sql table, you can update the logical table name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"information")," field, ",(0,o.kt)("inlineCode",{parentName:"p"},"isTrueKey"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"logicalSize"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isLogicalSizeLocked"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryDatasource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"encloseSqlInParentheses")," field, physical table object name, ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlStatement"),", and columns in ",(0,o.kt)("inlineCode",{parentName:"p"},"physicalTable")," field. The ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryDatasource")," change does not affect other logical tables that share the same physical table with this logical table."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "newTableName"\n  },\n  "physicalTable": {\n    "tablePrefix": "newTablePrefix."\n  }\n}\n')),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"information\\":{\\"name\\":\\"newTableName\\"},\\"physicalTable\\":{\\"tablePrefix\\":\\"newTablePrefix\\"}}"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,o.kt)("p",{parentName:"li"},"You can view the new table's definition in the body of the response."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2002-02-14T23:06:02.000Z",\n    "dateModified": "2012-06-06T12:12:35.000Z",\n    "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n    "primaryLocale": "en-US",\n    "objectId": "862780DC499A14D74FEC7EB2EF317DA2",\n    "subType": "logical_table",\n    "name": "newTableName"\n  },\n  "physicalTable": {\n    "information": {\n      "dateCreated": "2002-02-14T23:04:18.000Z",\n      "dateModified": "2012-06-06T12:12:35.000Z",\n      "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n      "primaryLocale": "en-US",\n      "objectId": "E278D17342991E49710D6F90E2A7BF2C",\n      "subType": "physical_table",\n      "name": "CITY_CTR_SLS"\n    },\n    "tableName": "CITY_CTR_SLS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:32.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CALL_CTR_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CALL_CTR_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:35.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_DOLLAR_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_DOLLAR_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:34.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_UNIT_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_UNIT_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_COST"\n      },\n      {\n        "information": {\n          "dateCreated": "2007-01-08T12:22:02.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",\n          "subType": "column",\n          "name": "New GROSS_DOLLAR_SALES (2)"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "GROSS_DOLLAR_SALES"\n      }\n    ],\n    "namespace": "",\n    "tablePrefix": "newTablePrefix.",\n    "type": "normal"\n  },\n  "logicalSize": 15,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "tableKey": [\n    {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    },\n    {\n      "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Customer City"\n    }\n  ],\n  "attributes": [\n    {\n      "information": {\n        "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Call Center"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CALL_CTR_ID"\n          }\n        },\n        {\n          "formCategory": {\n            "objectId": "035E890A4157E9828414E8A0E13E2998",\n            "subType": "attribute_form_custom",\n            "name": "Call Center None"\n          },\n          "name": "Hyperlink",\n          "dataFormat": "number",\n          "expression": {\n            "text": "ApplySimple(\\"\'<a href=Main.aspx?evt=4001&src=Main.aspx.4001&reportID=B4DEFC04457E9CBE0CA79FB692BE0C5E&elementsPromptAnswers=8D679D3511D3E4981000E787EC6DE8A4;8D679D3511D3E4981000E787EC6DE8A4%3A\'&#0&\' target=_blank>Details</a>\'\\",CALL_CTR_ID)"\n          }\n        }\n      ]\n    },\n    {\n      "information": {\n        "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Customer City"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CUST_CITY_ID"\n          }\n        }\n      ]\n    }\n  ],\n  "facts": [\n    {\n      "information": {\n        "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n        "subType": "fact",\n        "name": "Cost"\n      },\n      "expression": {\n        "text": "TOT_COST"\n      }\n    },\n    {\n      "information": {\n        "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n        "subType": "fact",\n        "name": "Profit"\n      },\n      "expression": {\n        "text": "TOT_DOLLAR_SALES - TOT_COST"\n      }\n    },\n    {\n      "information": {\n        "objectId": "8D67958411D3E4981000E787EC6DE8A4",\n        "subType": "fact",\n        "name": "Revenue"\n      },\n      "expression": {\n        "text": "TOT_DOLLAR_SALES"\n      }\n    },\n    {\n      "information": {\n        "objectId": "8D67958511D3E4981000E787EC6DE8A4",\n        "subType": "fact",\n        "name": "Units Sold"\n      },\n      "expression": {\n        "text": "TOT_UNIT_SALES"\n      }\n    },\n    {\n      "information": {\n        "objectId": "6EA98A164E62D247C14B3EBFA4866411",\n        "subType": "fact",\n        "name": "Gross Revenue"\n      },\n      "expression": {\n        "text": "GROSS_DOLLAR_SALES"\n      }\n    }\n  ],\n  "primaryDataSource": {\n    "objectId": "37BE16AB11D3E48C1000E787EC6DE8A4",\n    "subType": "db_role",\n    "name": "Tutorial Data"\n  },\n  "secondaryDataSources": [\n    {\n      "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",\n      "subType": "db_role",\n      "name": "MTDIWHSQL1"\n    }\n  ]\n}\n')),(0,o.kt)("p",{parentName:"li"},"Response Code: 201 (A new table is created successfully in the changeset.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commit a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{ChangesetId}/commit"),"."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:42:13.312629Z",\n  "dateModified": "2020-11-17T17:44:30.814816Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "userName": "MSTR User",\n  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Code: 201 (The changeset is committed successfully.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/tables/ms-deleteChangeset"},"DELETE /api/model/changesets/{ChangesetId}"),"."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Response Code: 204 (The changeset has been deleted successfully.)"))))}u.isMDXComponent=!0}}]);