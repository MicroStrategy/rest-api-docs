---
title: Workflow sample - Retrieve a list of all available table definitions
sidebar_label: Retrieve a list of all available table definitions
description: You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service.
---

<Available since="2021 Update 1" />

You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service.

## Retrieve a list of all available tables' definitions

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

### Retrieve a list of available tables' definitions within a changeset

In this workflow sample, you want to get the definitions of all available tables in the project schema. Use the MicroStrategy Tutorial project. Its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md). If you plan to use the response of [GET /api/model/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList) to create a new table or update a specific table's definitions, you should associate all requests with one changeset.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Get the tables' definitions within a changeset using [GET /api/model/tables/{TableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails).

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

### Retrieve a table's definition with only specified fields

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

### Retrieve a sliced array of tables' definitions

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
