---
title: Update a partition mapping table's definition
sidebar_label: Update a partition mapping table's definition
description: This workflow sample demonstrates how to update an existing partition mapping table through the Modeling service.
---

<Available since="2021 Update 9" />

:::tip

You can try this workflow with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-43769ee1-7480-4413-990a-13b50119b384).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an existing partition mapping table object through the Modeling service. Both warehouse partition mapping (WHPM) and metadata partition mapping (MDPM) are supported. Refer to [Retrieve a partition mapping table's definition](./retrieve-a-partition-mapping-tables-definition.md) for a brief introduction of partition mapping.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](<https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin>.

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Update a WHPM table

Updating a WHPM table is the same as updating a normal table, you cannot update partition tables. Refer to [Update a table's definition](./update-a-tables-definition.md) for details.

## Update a MDPM table

For a metadata partition mapping tables, you can update the logical table name in the information field, logicalSize, isLogicalSizeLocked, and partition base tables. You can also update their partition filters in partitionTables field. Desitination folder can also be updated.

Update an MDPM table with [PATCH /api/model/tables/{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body:

```json
{
  "partitionTables": [
    {
      "information": {
        "objectId": "29FD5283476B99E55016208A088328C6",
        "subType": "logical_table",
        "name": "pbt1"
      },
      "partitionFilter": {
        "qualification": {
          "text": "IsNotNull(Customer (ID))",
          "tree": {
            "type": "predicate_form_qualification",
            "predicateId": "5EF6F6AF16844F2AA2B8966C0A3882CE",
            "predicateText": "IsNotNull(Customer (ID))",
            "predicateTree": {
              "function": "is_not_null",
              "parameters": [],
              "attribute": {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              },
              "form": {
                "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                "subType": "attribute_form_system",
                "name": "ID"
              },
              "dataLocale": ""
            }
          }
        }
      }
    },
    {
      "information": {
        "objectId": "061F17C1443E1D56F3F0C4BC33CA54A7",
        "subType": "logical_table",
        "name": "pbt2"
      },
      "partitionFilter": {
        "qualification": {
          "text": "IsNotNull({Call Center} (ID))",
          "tree": {
            "type": "predicate_form_qualification",
            "predicateId": "BFBFE373FF7C4C07877F446647EC5919",
            "predicateText": "IsNotNull({Call Center} (ID))",
            "predicateTree": {
              "function": "is_not_null",
              "parameters": [],
              "attribute": {
                "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Call Center"
              },
              "form": {
                "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                "subType": "attribute_form_system",
                "name": "ID"
              },
              "dataLocale": ""
            }
          }
        }
      }
    }
  ]
}
```

Sample Curl:

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" --data-raw "{ \"partitionTables\": [ { \"information\": { \"objectId\": \"29FD5283476B99E55016208A088328C6\", \"subType\": \"logical_table\", \"name\": \"pbt1\" }, \"partitionFilter\": { \"qualification\": { \"text\": \"IsNotNull(Customer (ID))\", \"tree\": { \"type\": \"predicate_form_qualification\", \"predicateId\": \"5EF6F6AF16844F2AA2B8966C0A3882CE\", \"predicateText\": \"IsNotNull(Customer (ID))\", \"predicateTree\": { \"function\": \"is_not_null\", \"parameters\": [], \"attribute\": { \"objectId\": \"8D679D3C11D3E4981000E787EC6DE8A4\", \"subType\": \"attribute\", \"name\": \"Customer\" }, \"form\": { \"objectId\": \"45C11FA478E745FEA08D781CEA190FE5\", \"subType\": \"attribute_form_system\", \"name\": \"ID\" }, \"dataLocale\": \"\" } } } } }, { \"information\": { \"objectId\": \"061F17C1443E1D56F3F0C4BC33CA54A7\", \"subType\": \"logical_table\", \"name\": \"pbt2\" }, \"partitionFilter\": { \"qualification\": { \"text\": \"IsNotNull({Call Center} (ID))\", \"tree\": { \"type\": \"predicate_form_qualification\", \"predicateId\": \"BFBFE373FF7C4C07877F446647EC5919\", \"predicateText\": \"IsNotNull({Call Center} (ID))\", \"predicateTree\": { \"function\": \"is_not_null\", \"parameters\": [], \"attribute\": { \"objectId\": \"8D679D3511D3E4981000E787EC6DE8A4\", \"subType\": \"attribute\", \"name\": \"Call Center\" }, \"form\": { \"objectId\": \"45C11FA478E745FEA08D781CEA190FE5\", \"subType\": \"attribute_form_system\", \"name\": \"ID\" }, \"dataLocale\": \"\" } } } } } ] }"
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2022-12-20T02:21:00.460Z",
    "dateModified": "2022-12-20T02:21:00.460Z",
    "versionId": "B3613AF745A36461929679A53499B789",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "6CAD01FB2E2841C081AD71418FA6EA48",
    "subType": "table_partition_md",
    "name": "PMT"
  },
  "logicalSize": 10,
  "isLogicalSizeLocked": false,
  "partitionLevel": [
    {
      "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
      "subType": "attribute",
      "name": "Customer"
    },
    {
      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
      "subType": "attribute",
      "name": "Call Center"
    }
  ],
  "partitionTables": [
    {
      "information": {
        "dateCreated": "2022-12-01T06:39:42.000Z",
        "dateModified": "2022-12-20T02:21:00.460Z",
        "versionId": "B3613AF745A36461929679A53499B789",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "29FD5283476B99E55016208A088328C6",
        "subType": "logical_table",
        "name": "pbt1"
      },
      "partitionLevel": [
        {
          "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Customer"
        }
      ],
      "partitionFilter": {
        "qualification": {
          "text": "IsNotNull(Customer (ID))",
          "tree": {
            "type": "predicate_form_qualification",
            "predicateId": "724BE116A01F4A2292D779E1115995F7",
            "predicateText": "IsNotNull(Customer (ID))",
            "predicateTree": {
              "function": "is_not_null",
              "parameters": [],
              "attribute": {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              },
              "form": {
                "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                "subType": "attribute_form_system",
                "name": "ID"
              },
              "dataLocale": ""
            }
          }
        }
      }
    },
    {
      "information": {
        "dateCreated": "2022-12-01T06:47:05.000Z",
        "dateModified": "2022-12-20T02:21:00.460Z",
        "versionId": "B3613AF745A36461929679A53499B789",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "061F17C1443E1D56F3F0C4BC33CA54A7",
        "subType": "logical_table",
        "name": "pbt2"
      },
      "partitionLevel": [
        {
          "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Call Center"
        }
      ],
      "partitionFilter": {
        "qualification": {
          "text": "IsNotNull({Call Center} (ID))",
          "tree": {
            "type": "predicate_form_qualification",
            "predicateId": "34DC6E237A4441379239AFEABC2822A2",
            "predicateText": "IsNotNull({Call Center} (ID))",
            "predicateTree": {
              "function": "is_not_null",
              "parameters": [],
              "attribute": {
                "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Call Center"
              },
              "form": {
                "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                "subType": "attribute_form_system",
                "name": "ID"
              },
              "dataLocale": ""
            }
          }
        }
      }
    }
  ]
}
```

Response Code: 200 (The MDPM table is updated successfully in the changeset.)
