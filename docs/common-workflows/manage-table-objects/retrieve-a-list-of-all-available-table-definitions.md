---
title: Workflow Sample - Retrieve a List of All Available Table Definitions
sidebar_label: Retrieve a List of All Available Table Definitions
description: You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service.
---

You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service.

## Retrieve a List of All Available Tables' Definitions

In this workflow sample, you want to get the definitions of all available tables in the project schema. Use the MicroStrategy Tutorial project. Its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve a list of all available tables' definitions using [GET /api/model/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the tables' definitions in the body of the response.

```json
{
  "offset": 0,
  "limit": -1,
  "total": 73,
  "tables": [
    {
      "information": {
        "dateCreated": "2001-01-02T20:47:18.000Z",
        "dateModified": "2012-06-06T12:13:04.000Z",
        "versionId": "256D148442065F43BDC42FBB79438A3F",
        "primaryLocale": "en-US",
        "objectId": "8D67932011D3E4981000E787EC6DE8A4",
        "subType": "table_partition_wh",
        "name": "PMT_INVENTORY"
      }
    },
    {
      "information": {
        "dateCreated": "2001-01-02T20:47:10.000Z",
        "dateModified": "2012-06-06T12:12:35.000Z",
        "versionId": "215230EB4F7089CD0261C1AD12D621AD",
        "primaryLocale": "en-US",
        "objectId": "8D67932C11D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "INVENTORY_ORDERS"
      }
    },
    {
      "information": {
        "dateCreated": "2001-01-02T20:47:09.000Z",
        "dateModified": "2012-06-06T12:12:35.000Z",
        "versionId": "215230EB4F7089CD0261C1AD12D621AD",
        "primaryLocale": "en-US",
        "objectId": "8D67933211D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CALL_CTR"
      }
    }
  ]
}
```

Response Code: 200 (The tables' definitions are returned successfully.)

### Retrieve a List of Available Tables' Definitions within a Changeset

In this workflow sample, you want to get the definitions of all available tables in the project schema. Use the MicroStrategy Tutorial project. Its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::tip

A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of [GET /api/model/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList) to create a new table or update a specific table's definitions, you should associate all requests with one changeset.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

1. Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset).

   Sample Request Header:

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
   "X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
   curl -X POST "https://10.23.9.111:8080/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
   ```

   Sample Response Body

   ```json
   {
     "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",
     "dateCreated": "2020-11-17T16:38:09.825650Z",
     "dateModified": "2020-11-17T16:38:09.825665Z",
     "status": "Ready",
     "schemaEdit": false,
     "userName": "MSTR User",
     "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
     "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
     "userDateNumberLocale": "en-US",
     "userMetadataLocale": "en-US",
     "userWarehouseLocale": "en-US"
   }
   ```

   Sample Response Code: 201 (A new changeset is created successfully.)

1. Get the tables' definitions within a changeset using [GET /api/model/tables/{TableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails).

   Sample Request Header

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
   "X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
   curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
   ```

   Sample Response Body:

   You can view the tables' definitions in the body of the response.

   ```json
   {
     "offset": 0,
     "limit": -1,
     "total": 73,
     "tables": [
       {
         "information": {
           "dateCreated": "2001-01-02T20:47:18.000Z",
           "dateModified": "2012-06-06T12:13:04.000Z",
           "versionId": "256D148442065F43BDC42FBB79438A3F",
           "primaryLocale": "en-US",
           "objectId": "8D67932011D3E4981000E787EC6DE8A4",
           "subType": "table_partition_wh",
           "name": "PMT_INVENTORY"
         }
       },
       {
         "information": {
           "dateCreated": "2001-01-02T20:47:10.000Z",
           "dateModified": "2012-06-06T12:12:35.000Z",
           "versionId": "215230EB4F7089CD0261C1AD12D621AD",
           "primaryLocale": "en-US",
           "objectId": "8D67932C11D3E4981000E787EC6DE8A4",
           "subType": "logical_table",
           "name": "INVENTORY_ORDERS"
         }
       },
       {
         "information": {
           "dateCreated": "2001-01-02T20:47:09.000Z",
           "dateModified": "2012-06-06T12:12:35.000Z",
           "versionId": "215230EB4F7089CD0261C1AD12D621AD",
           "primaryLocale": "en-US",
           "objectId": "8D67933211D3E4981000E787EC6DE8A4",
           "subType": "logical_table",
           "name": "LU_CALL_CTR"
         }
       }
     ]
   }
   ```

   Response Code: 200 (The tables' definitions are returned successfully.)

1. Delete a changeset using [DELETE /api/model/changesets/{ChangesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset).

   Sample Request Header:

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
   "X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
   curl -X DELETE "https://10.23.9.111:8080/MicroStrategyLibrary/api/model/changesets/0E9F01172ECF4BA2BB510F7B9FB4F6E8" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
   ```

   Sample Response Body: Empty

   Sample Response Code: 204 (The changeset has been deleted successfully.)

### Retrieve a Table's Definition with Only Specified Fields

In this workflow sample, you use the `fields` parameter to retrieve specific fields. If the `fields` parameter is not specified, the API only returns the `"information"` field by default.

:::tip

Multiple field values are separated by a comma.

:::

Retrieve the tables' definitions using [GET /api/model/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList), along with `fields=physicalTable`.

Sample Curl:

```bash
curl -X GET "https://10.23.9.111:8080/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2?fields=physicalTable" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the returned tables' definitions in the body of the response. Notice that only the `"physicalTable"` field is returned.

```json
{
  "offset": 0,
  "limit": -1,
  "total": 73,
  "tables": [
    {
      "physicalTable": {
        "information": {
          "dateCreated": "2001-01-02T20:48:54.000Z",
          "dateModified": "2012-06-06T12:12:35.000Z",
          "versionId": "215230EB4F7089CD0261C1AD12D621AD",
          "primaryLocale": "en-US",
          "objectId": "8D6790F811D3E4981000E787EC6DE8A4",
          "subType": "physical_table",
          "name": "INVENTORY_ORDERS"
        },
        "tableName": "INVENTORY_ORDERS",
        "namespace": "",
        "tablePrefix": "",
        "type": "normal"
      }
    }
  ]
}
```

Sample Response Code: 200 (The tables' definitions are returned successfully.)

### Retrieve a Sliced Array of Tables' Definitions

In this workflow sample, you retrieve a sliced array of the tables' definitions using the following parameters:

- `limit` indicates the maximum number of objects that can be returned by this method.
- `offset` indicates the number of leading objects to omit from the response to this method.

Retrieve the tables' definitions using [GET /api/model/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList), along with `limit=1&offset=10`.

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables?limit=1&offset=10" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the returned tables' definitions in the body of the response. By default, only the `"information"` field is returned.

```json
{
  "offset": 10,
  "limit": 1,
  "total": 73,
  "tables": [
    {
      "information": {
        "dateCreated": "2001-01-02T20:47:07.000Z",
        "dateModified": "2012-06-06T12:12:35.000Z",
        "versionId": "215230EB4F7089CD0261C1AD12D621AD",
        "primaryLocale": "en-US",
        "objectId": "8D67936811D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_EMPLOYEE"
      }
    }
  ]
}
```

Sample Response Code: 200 (The tables' definitions are returned successfully.)
