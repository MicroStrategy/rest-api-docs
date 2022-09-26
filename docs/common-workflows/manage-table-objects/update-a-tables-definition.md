---
title: Workflow Sample - Update a Table's Definition
sidebar_label: Update a Table's Definition
description: This workflow sample demonstrates how to update an existing table through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-95d4124f-c4e5-48ce-986e-a05c6d47069f?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an existing table through the Modeling service.

In this workflow sample, you update an existing `"CITY_CTR_SLS"` table object in the MicroStrategy Tutorial project. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

1. Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset), along with `schemaEdit=true` to commit a changeset with schema manipulations.

   Sample Request Header

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
   "X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
   curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
   ```

   Sample Response Body:

   ```json
   {
     "id": "8DF1659E9D74484D9D47B9478D4C7D00",
     "dateCreated": "2020-11-17T17:36:31.187294Z",
     "dateModified": "2020-11-17T17:36:31.187308Z",
     "status": "Ready",
     "schemaEdit": true,
     "userName": "MSTR User",
     "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
     "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
     "userDateNumberLocale": "en-US",
     "userMetadataLocale": "en-US",
     "userWarehouseLocale": "en-US"
   }
   ```

   Sample Response Code: 201 (A new changeset is created successfully.)

1. Update the `"CITY_CTR_SLS"` table, as well as its name and prefix using [PATCH /api/model/tables/[tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails). The object ID of the table is `862780DC499A14D74FEC7EB2EF317DA2`.

   Here are the fields that should be updated for normal versus freeform SQL tables:

   For a normal table, you can update the logical table name in the `information` field, `isTrueKey`, `logicalSize`, `isLogicalSizeLocked`, `primaryDatasource`, `secondaryDatasource` field, physical table object name, physical table name, and table prefix in `physicalTable` field. When the `primaryDatasource` or `secondaryDatasource` of this logical table is updated, the related `primaryDatasource` or secondaryDatasource of all other logical tables that share the same physical table with this logical table are also updated.

   For a freeform sql table, you can update the logical table name in the `information` field, `isTrueKey`, `logicalSize`, `isLogicalSizeLocked`, `primaryDatasource`, `encloseSqlInParentheses` field, physical table object name, `sqlStatement`, and columns in `physicalTable` field. The `primaryDatasource` change does not affect other logical tables that share the same physical table with this logical table.

   Sample Request Header:

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
   "X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
   ```

   Sample Request Body:

   ```json
   {
     "information": {
       "name": "newTableName"
     },
     "physicalTable": {
       "tablePrefix": "newTablePrefix."
     }
   }
   ```

   Sample Curl:

   ```bash
   curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\"information\":{\"name\":\"newTableName\"},\"physicalTable\":{\"tablePrefix\":\"newTablePrefix\"}}"
   ```

   Sample Response Body:

   You can view the new table's definition in the body of the response.

   ```json
   {
     "information": {
       "dateCreated": "2002-02-14T23:06:02.000Z",
       "dateModified": "2012-06-06T12:12:35.000Z",
       "versionId": "215230EB4F7089CD0261C1AD12D621AD",
       "primaryLocale": "en-US",
       "objectId": "862780DC499A14D74FEC7EB2EF317DA2",
       "subType": "logical_table",
       "name": "newTableName"
     },
     "physicalTable": {
       "information": {
         "dateCreated": "2002-02-14T23:04:18.000Z",
         "dateModified": "2012-06-06T12:12:35.000Z",
         "versionId": "215230EB4F7089CD0261C1AD12D621AD",
         "primaryLocale": "en-US",
         "objectId": "E278D17342991E49710D6F90E2A7BF2C",
         "subType": "physical_table",
         "name": "CITY_CTR_SLS"
       },
       "tableName": "CITY_CTR_SLS",
       "columns": [
         {
           "information": {
             "dateCreated": "2001-01-02T20:48:30.000Z",
             "dateModified": "2012-06-06T12:12:35.000Z",
             "versionId": "215230EB4F7089CD0261C1AD12D621AD",
             "primaryLocale": "en-US",
             "objectId": "8D6791B211D3E4981000E787EC6DE8A4",
             "subType": "column",
             "name": "CUST_CITY_ID"
           },
           "dataType": {
             "type": "integer",
             "precision": 2,
             "scale": -2147483648
           },
           "columnName": "CUST_CITY_ID"
         },
         {
           "information": {
             "dateCreated": "2001-01-02T20:48:32.000Z",
             "dateModified": "2012-06-06T12:12:35.000Z",
             "versionId": "215230EB4F7089CD0261C1AD12D621AD",
             "primaryLocale": "en-US",
             "objectId": "8D67917E11D3E4981000E787EC6DE8A4",
             "subType": "column",
             "name": "CALL_CTR_ID"
           },
           "dataType": {
             "type": "integer",
             "precision": 2,
             "scale": -2147483648
           },
           "columnName": "CALL_CTR_ID"
         },
         {
           "information": {
             "dateCreated": "2001-01-02T20:48:35.000Z",
             "dateModified": "2012-06-06T12:13:04.000Z",
             "versionId": "256D148442065F43BDC42FBB79438A3F",
             "primaryLocale": "en-US",
             "objectId": "8D6792A011D3E4981000E787EC6DE8A4",
             "subType": "column",
             "name": "TOT_DOLLAR_SALES"
           },
           "dataType": {
             "type": "double",
             "precision": 0,
             "scale": -2147483648
           },
           "columnName": "TOT_DOLLAR_SALES"
         },
         {
           "information": {
             "dateCreated": "2001-01-02T20:48:34.000Z",
             "dateModified": "2012-06-06T12:13:04.000Z",
             "versionId": "256D148442065F43BDC42FBB79438A3F",
             "primaryLocale": "en-US",
             "objectId": "8D67929F11D3E4981000E787EC6DE8A4",
             "subType": "column",
             "name": "TOT_UNIT_SALES"
           },
           "dataType": {
             "type": "double",
             "precision": 0,
             "scale": -2147483648
           },
           "columnName": "TOT_UNIT_SALES"
         },
         {
           "information": {
             "dateCreated": "2001-09-18T19:59:30.000Z",
             "dateModified": "2012-06-06T12:13:04.000Z",
             "versionId": "256D148442065F43BDC42FBB79438A3F",
             "primaryLocale": "en-US",
             "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",
             "subType": "column",
             "name": "TOT_COST"
           },
           "dataType": {
             "type": "double",
             "precision": 0,
             "scale": -2147483648
           },
           "columnName": "TOT_COST"
         },
         {
           "information": {
             "dateCreated": "2007-01-08T12:22:02.000Z",
             "dateModified": "2012-06-06T12:12:35.000Z",
             "versionId": "215230EB4F7089CD0261C1AD12D621AD",
             "primaryLocale": "en-US",
             "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",
             "subType": "column",
             "name": "New GROSS_DOLLAR_SALES (2)"
           },
           "dataType": {
             "type": "double",
             "precision": 0,
             "scale": -2147483648
           },
           "columnName": "GROSS_DOLLAR_SALES"
         }
       ],
       "namespace": "",
       "tablePrefix": "newTablePrefix.",
       "type": "normal"
     },
     "logicalSize": 15,
     "isLogicalSizeLocked": false,
     "isTrueKey": true,
     "isPartOfPartition": false,
     "tableKey": [
       {
         "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
         "subType": "attribute",
         "name": "Call Center"
       },
       {
         "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",
         "subType": "attribute",
         "name": "Customer City"
       }
     ],
     "attributes": [
       {
         "information": {
           "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
           "subType": "attribute",
           "name": "Call Center"
         },
         "forms": [
           {
             "formCategory": {
               "objectId": "45C11FA478E745FEA08D781CEA190FE5",
               "subType": "attribute_form_system",
               "name": "ID"
             },
             "name": "ID",
             "dataFormat": "number",
             "expression": {
               "text": "CALL_CTR_ID"
             }
           },
           {
             "formCategory": {
               "objectId": "035E890A4157E9828414E8A0E13E2998",
               "subType": "attribute_form_custom",
               "name": "Call Center None"
             },
             "name": "Hyperlink",
             "dataFormat": "number",
             "expression": {
               "text": "ApplySimple(\"'<a href=Main.aspx?evt=4001&src=Main.aspx.4001&reportID=B4DEFC04457E9CBE0CA79FB692BE0C5E&elementsPromptAnswers=8D679D3511D3E4981000E787EC6DE8A4;8D679D3511D3E4981000E787EC6DE8A4%3A'&#0&' target=_blank>Details</a>'\",CALL_CTR_ID)"
             }
           }
         ]
       },
       {
         "information": {
           "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",
           "subType": "attribute",
           "name": "Customer City"
         },
         "forms": [
           {
             "formCategory": {
               "objectId": "45C11FA478E745FEA08D781CEA190FE5",
               "subType": "attribute_form_system",
               "name": "ID"
             },
             "name": "ID",
             "dataFormat": "number",
             "expression": {
               "text": "CUST_CITY_ID"
             }
           }
         ]
       }
     ],
     "facts": [
       {
         "information": {
           "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",
           "subType": "fact",
           "name": "Cost"
         },
         "expression": {
           "text": "TOT_COST"
         }
       },
       {
         "information": {
           "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",
           "subType": "fact",
           "name": "Profit"
         },
         "expression": {
           "text": "TOT_DOLLAR_SALES - TOT_COST"
         }
       },
       {
         "information": {
           "objectId": "8D67958411D3E4981000E787EC6DE8A4",
           "subType": "fact",
           "name": "Revenue"
         },
         "expression": {
           "text": "TOT_DOLLAR_SALES"
         }
       },
       {
         "information": {
           "objectId": "8D67958511D3E4981000E787EC6DE8A4",
           "subType": "fact",
           "name": "Units Sold"
         },
         "expression": {
           "text": "TOT_UNIT_SALES"
         }
       },
       {
         "information": {
           "objectId": "6EA98A164E62D247C14B3EBFA4866411",
           "subType": "fact",
           "name": "Gross Revenue"
         },
         "expression": {
           "text": "GROSS_DOLLAR_SALES"
         }
       }
     ],
     "primaryDataSource": {
       "objectId": "37BE16AB11D3E48C1000E787EC6DE8A4",
       "subType": "db_role",
       "name": "Tutorial Data"
     },
     "secondaryDataSources": [
       {
         "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",
         "subType": "db_role",
         "name": "MTDIWHSQL1"
       }
     ]
   }
   ```

   Response Code: 201 (A new table is created successfully in the changeset.)

1. Commit a changeset using [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset).

   Sample Request Header:

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"
   "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
   ```

   Sample Curl:

   ```bash
   curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
   ```

   Sample Response Body:

   ```json
   {
     "id": "8DF1659E9D74484D9D47B9478D4C7D00",
     "dateCreated": "2020-11-17T17:42:13.312629Z",
     "dateModified": "2020-11-17T17:44:30.814816Z",
     "status": "Ready",
     "schemaEdit": true,
     "userName": "MSTR User",
     "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
     "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
     "userDateNumberLocale": "en-US",
     "userMetadataLocale": "en-US",
     "userWarehouseLocale": "en-US"
   }
   ```

   Sample Response Code: 201 (The changeset is committed successfully.)

1. Delete a changeset using [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/tables/ms-deleteChangeset).

   Sample Request Header:

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"
   "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
   curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
   ```

   Sample Response Body: Empty

   Sample Response Code: 204 (The changeset has been deleted successfully.)
