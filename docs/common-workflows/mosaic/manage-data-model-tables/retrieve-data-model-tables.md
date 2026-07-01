---
title: Retrieve data model tables
description: This workflow demonstrates how to retrieve data model tables using REST API.
---

<Available since="Strategy (September 2025)" />

This workflow sample demonstrates how to retrieve one or more data model tables using the REST API with and without a changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

- [Retrieve a data model table](#retrieve-a-data-model-table)
- [Retrieve data model tables](#retrieve-data-model-tables)

A detailed description of each step of this workflow is listed below.

## Retrieve a data model table

You can retrieve a specific data model table directly.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/tables/\{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModeltable)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 6bgkcjj4qerlk2v4q153tf4mso'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/tables/EC92E1F465A14840A235C2910B0F9946' \
-H 'X-MSTR-AuthToken: 6bgkcjj4qerlk2v4q153tf4mso' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 6bgkcjj4qerlk2v4q153tf4mso'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/tables/EC92E1F465A14840A235C2910B0F9946' \
-H 'X-MSTR-AuthToken: 6bgkcjj4qerlk2v4q153tf4mso' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "dateCreated": "2025-08-20T06:04:55.303Z",
    "dateModified": "2025-08-20T06:04:55.303Z",
    "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "EC92E1F465A14840A235C2910B0F9946",
    "subType": "logical_table",
    "name": "city_ctr_sls"
  },
  "physicalTable": {
    "information": {
      "dateCreated": "2025-08-20T06:04:55.303Z",
      "dateModified": "2025-08-20T06:04:55.303Z",
      "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "5CA24D7B68DE4840906F76D5DDDF7BD7",
      "subType": "physical_table",
      "name": "New DB Table"
    },
    "columns": [
      {
        "information": {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:04:55.303Z",
          "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "7C82A85A72654CC39E0BDA54FC730531",
          "subType": "column",
          "name": "cust_city_id"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "cust_city_id"
      },
      {
        "information": {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:04:55.303Z",
          "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "0C32634BB0844BE190C8F78644273366",
          "subType": "column",
          "name": "call_ctr_id"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "call_ctr_id"
      },
      {
        "information": {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:04:55.303Z",
          "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "F6F3CF0818F94582986A0BBE89BEF268",
          "subType": "column",
          "name": "tot_dollar_sales"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "tot_dollar_sales"
      },
      {
        "information": {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:04:55.303Z",
          "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "17E8155FD5B64273ABAACD777C27BF13",
          "subType": "column",
          "name": "tot_unit_sales"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "tot_unit_sales"
      },
      {
        "information": {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:04:55.303Z",
          "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "3661F3DF126147D9A2504573A4A6F790",
          "subType": "column",
          "name": "tot_cost"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "tot_cost"
      },
      {
        "information": {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:04:55.303Z",
          "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "7E68647E94B24AF78E84DAA94208C985",
          "subType": "column",
          "name": "gross_dollar_sales"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "gross_dollar_sales"
      }
    ],
    "type": "pipeline",
    "pipeline": "{\"id\":\"4E88D3BBA1054BBF9A2C2CE4AB2E8929\",\"rootTable\":{\"id\":\"AB8BE9F5B93E476498342ED25A40AC83\",\"type\":\"root\",\"children\":[{\"columns\":[{\"id\":\"A9DA53AAFD2C4C6093C094FAA20BD686\",\"name\":\"cust_city_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"65FBE44CEBD94CA9962AB893BD1587C7\",\"name\":\"call_ctr_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"CB7551952BED4E5F8240493187CF5573\",\"name\":\"tot_dollar_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"577EF28D6B3949F2A1CE496FA6A88518\",\"name\":\"tot_unit_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"BA6E8EF95CAB4C0BB4B8CEE8104C6681\",\"name\":\"tot_cost\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"B38C5BE9A7CB4DB69A4B00051440E27E\",\"name\":\"gross_dollar_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"E93B0C144F9EAF781E3993B5C439220D\",\"namespace\":\"public\",\"tableName\":\"city_ctr_sls\",\"sql\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"cust_city_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"cust_city_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"call_ctr_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"call_ctr_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"tot_dollar_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_dollar_sales\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"tot_unit_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_unit_sales\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"tot_cost\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_cost\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"gross_dollar_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"gross_dollar_sales\\\",\\\"scale\\\":998}}]}\",\"id\":\"1AE7EAA7B6234415888CEA6FE71AEEB5\",\"name\":\"city_ctr_sls\",\"type\":\"source\"}]}}"
  },
  "attributes": [
    {
      "information": {
        "objectId": "FFA2DF297AAC4EDA9F8DA28A9EC8FBBF",
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
          "name": "Call Center ID",
          "dataFormat": "number",
          "isKeyForm": true,
          "lookupTable": {
            "objectId": "EC92E1F465A14840A235C2910B0F9946",
            "subType": "logical_table",
            "name": "city_ctr_sls"
          },
          "expression": {
            "text": "call_ctr_id"
          }
        }
      ],
      "nonAggregatable": false
    },
    {
      "information": {
        "objectId": "DBCA666BB6F54CF38276BA34FB16E54C",
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
          "name": "Customer City ID",
          "dataFormat": "number",
          "isKeyForm": true,
          "lookupTable": {
            "objectId": "EC92E1F465A14840A235C2910B0F9946",
            "subType": "logical_table",
            "name": "city_ctr_sls"
          },
          "expression": {
            "text": "cust_city_id"
          }
        }
      ],
      "nonAggregatable": false
    }
  ],
  "factMetrics": [
    {
      "information": {
        "objectId": "DD7F2A07957144E689F7EB40C7DDE381",
        "subType": "fact_metric",
        "name": "Total Dollar Sales"
      },
      "expression": {
        "text": "tot_dollar_sales"
      },
      "semanticRole": "fixed"
    },
    {
      "information": {
        "objectId": "A11F0A2B932641F684A66FB72F947C98",
        "subType": "fact_metric",
        "name": "Total Unit Sales"
      },
      "expression": {
        "text": "tot_unit_sales"
      },
      "semanticRole": "fixed"
    },
    {
      "information": {
        "objectId": "95D2176A21A44948B54907B9EC9CE01B",
        "subType": "fact_metric",
        "name": "Total Cost"
      },
      "expression": {
        "text": "tot_cost"
      },
      "semanticRole": "fixed"
    },
    {
      "information": {
        "objectId": "43965A41AA8A466C9EE5F3730A2A8692",
        "subType": "fact_metric",
        "name": "Gross Dollar Sales"
      },
      "expression": {
        "text": "gross_dollar_sales"
      },
      "semanticRole": "fixed"
    }
  ],
  "refreshPolicy": "replace"
}
```

- Response Code: 200 (Success: OK)

## Retrieve data model tables

You can also retrieve data model tables. Parameters include pagination options such as `limit` and `offset`.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelTables)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: l4l41h5dsvcaekn2gbb3h0ke5p'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/tables?offset=0&limit=-1' \
-H 'X-MSTR-AuthToken: l4l41h5dsvcaekn2gbb3h0ke5p' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/tables?offset=0&limit=-1' \
-H 'X-MSTR-AuthToken: l4l41h5dsvcaekn2gbb3h0ke5p' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response

- Response Body:

```json
{
  "offset": 0,
  "limit": -1,
  "total": 2,
  "tables": [
    {
      "information": {
        "dateCreated": "2025-08-20T06:04:55.303Z",
        "dateModified": "2025-08-20T06:04:55.303Z",
        "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "EC92E1F465A14840A235C2910B0F9946",
        "subType": "logical_table",
        "name": "city_ctr_sls"
      }
    },
    {
      "information": {
        "dateCreated": "2025-08-20T06:04:55.303Z",
        "dateModified": "2025-08-20T06:04:55.303Z",
        "versionId": "0C1EBE8E493E0D1CDDD1398B4FDCC44D",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "D17C13555A77481C8980AF866678855F",
        "subType": "logical_table",
        "name": "city_mnth_sls"
      }
    }
  ]
}
```

- Response Code: 200 (Success: OK)
