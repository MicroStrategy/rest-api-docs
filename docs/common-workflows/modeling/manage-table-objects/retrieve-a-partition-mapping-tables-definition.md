---
title: Retrieve a partition mapping table's definition
sidebar_label: Retrieve a partition mapping table's definition
description: You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service.
---

<Available since="2021 Update 9" />

:::tip

You can try this workflow with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-43769ee1-7480-4413-990a-13b50119b384).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service. A brief introduction of partition mapping is provided in this documentation. To learn more about partition mapping, refer to [Microstrategy Community](https://www2.microstrategy.com/producthelp/Current/ProjectDesignGuide/WebHelp/Lang_1033/Content/Dividing_tables_to_increase_performance__Partition.htm).

The partitioning feature improves query performance when working with large data volumes. Partitioning "breaks" the data into different (ideally balanced) portions, and each portion is called a partition base table (PBT), or a partition table. In other words, a partition table is a warehouse table that contains one part of a larger set of data. To manage which partition table to use for a given query, partition mapping is introduced by MicroStrategy to identify and keep track of the partitioned base tables as part of a logical whole. MicroStrategy supports two types of partition mapping:

**Warehouse partition mapping (WHPM)**: uses a specialized warehouse table (WHPM table) to determine which table to access

**Metadata partition mapping (MDPM)**: stores the mapping information in the project metadata as a MDPM table

Workflows for retrieving the WHPM and MDPM tables are provided so you can see the slight differences between partition mapping tables and other tables. Workflows for retrieving a partition mapping table's definition within a changeset or with specific fields is the same as [Retrieve a table's definition](./retrieve-a-tables-definition.md).

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Retrieve a WHPM table's definition

Use this workflow sample to get the definition of a WHPM table. The object ID of the table is `569A89E78FA1455687F4E327B259B3FB`. The table is in the MicroStrategy Tutorial project and its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

Get the table's definition with [GET /api/model/tables/\{TableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://10.23.33.32:8080/MicroStrategyLibrary/api/model/tables/569A89E78FA1455687F4E327B259B3FB" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the WHPM table's definition in the body of the response. The subtype is "table_partition_wh", the subtype of the physical table is "db_table_pmt", and the "partitionTables" field contains PBTs.

```json
{
  "information": {
    "versionId": "87C72A1A8E1947888C469E21F6C5969F",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "569A89E78FA1455687F4E327B259B3FB",
    "subType": "table_partition_wh",
    "name": "my_pmta",
    "destinationFolderId": "CC582EC35C0C481E826E6D6B40BE4905"
  },
  "physicalTable": {
    "information": {
      "versionId": "C45CBE94B36049BEB279347EB36315DE",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "A7FEA781BA6946719FDBA42EB5F26C4A",
      "subType": "db_table_pmt",
      "name": "pmt_inventory_01",
      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"
    },
    "tableName": "pmt_inventory_01",
    "columns": [
      {
        "information": {
          "dateCreated": "2001-01-02T20:48:29.000Z",
          "dateModified": "2020-08-25T02:49:02.000Z",
          "versionId": "B3ADE0394CE4ABBA8853069EA98EDC86",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "8D67914311D3E4981000E787EC6DE8A4",
          "subType": "column",
          "name": "pbtname"
        },
        "dataType": {
          "type": "fixed_length_string",
          "precision": 50,
          "scale": -2147483648
        },
        "columnName": "pbtname"
      },
      {
        "information": {
          "dateCreated": "2001-01-02T20:48:31.000Z",
          "dateModified": "2020-08-25T02:49:03.000Z",
          "versionId": "762834024049247CC40B2B99E1538DBC",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "8D67914211D3E4981000E787EC6DE8A4",
          "subType": "column",
          "name": "quarter_id"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": -2147483648
        },
        "columnName": "quarter_id"
      }
    ],
    "namespace": "public",
    "tablePrefix": "",
    "type": "warehouse_partition"
  },
  "logicalSize": 0,
  "isLogicalSizeLocked": false,
  "isTrueKey": true,
  "isPartOfPartition": false,
  "partitionTables": [
    {
      "information": {
        "versionId": "6DD8D51A96B04897AD945947674AC3C4",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "0772760204B146D1BB02CC594C67F282",
        "subType": "logical_table",
        "name": "pmt_inventory_01_FactTable",
        "destinationFolderId": "A23B009F4F4E40039B13F0B0FACC4FF5"
      },
      "physicalTable": {
        "information": {
          "versionId": "223A6960730C4534BBB3C1F468A2275F",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "75469C9FEE934E02B893B72DE28E1A9E",
          "subType": "physical_table",
          "name": "pmt_inventory_01_FactTable",
          "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"
        },
        "tableName": "pmt_inventory_01_FactTable",
        "columns": [
          {
            "information": {
              "dateCreated": "2001-01-02T20:48:31.000Z",
              "dateModified": "2019-10-15T19:47:55.000Z",
              "versionId": "ADF938E811E9EF8470330080EF45D340",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "8D67916011D3E4981000E787EC6DE8A4",
              "subType": "column",
              "name": "boh_qty"
            },
            "dataType": {
              "type": "decimal",
              "precision": 0,
              "scale": -2147483648
            },
            "columnName": "boh_qty"
          },
          {
            "information": {
              "dateCreated": "2020-07-17T05:59:22.000Z",
              "dateModified": "2020-08-24T03:29:35.000Z",
              "versionId": "B60210AE4910694BD8A502982FE9DA1B",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "FA1618C246B3DEAEB6E930A449E8147E",
              "subType": "column",
              "name": "eoh_qty"
            },
            "dataType": {
              "type": "decimal",
              "precision": 0,
              "scale": -2147483648
            },
            "columnName": "eoh_qty"
          },
          {
            "information": {
              "dateCreated": "2001-01-02T20:48:29.000Z",
              "dateModified": "2020-08-25T02:49:04.000Z",
              "versionId": "C40D4D87495D26CE5EF913960AC781DE",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "8D67915C11D3E4981000E787EC6DE8A4",
              "subType": "column",
              "name": "item_id"
            },
            "dataType": {
              "type": "integer",
              "precision": 2,
              "scale": -2147483648
            },
            "columnName": "item_id"
          },
          {
            "information": {
              "dateCreated": "2001-01-02T20:48:44.000Z",
              "dateModified": "2019-10-15T19:47:55.000Z",
              "versionId": "AE0645BA11E9EF8400400080EF75B4B2",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "8D6791E011D3E4981000E787EC6DE8A4",
              "subType": "column",
              "name": "month_id"
            },
            "dataType": {
              "type": "integer",
              "precision": 4,
              "scale": -2147483648
            },
            "columnName": "month_id"
          }
        ],
        "namespace": "",
        "tablePrefix": "",
        "type": "normal"
      },
      "logicalSize": 0,
      "isLogicalSizeLocked": false,
      "isTrueKey": true,
      "isPartOfPartition": true
    }
  ],
  "primaryDataSource": {
    "objectId": "F0C9E02B4C56D68F9D8176A7FBADCFF3",
    "subType": "db_role_import",
    "name": "WH_partition"
  },
  "secondaryDataSources": []
}
```

Response Code: 200 (The WHPM table's definition is returned successfully.)

## Retrieve a MDPM table's definition

Use this workflow sample to get the definition of an MDPM table. The object ID of the table is `473718A30DA84A9A814424537879778F`. The table is in the MicroStrategy Tutorial project and its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`. The API usage is the same as retrieving a WHPM table. Unlike all other tables, you can use "showExpressionAs" and "showFilterTokens" to customize partition filter representation.

Get the table's definition with [GET /api/model/tables/\{TableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET '10.23.33.32:8080/MicroStrategyLibrary/api/model/tables/473718A30DA84A9A814424537879778F?showExpressionAs=tree&showFilterTokens=false' -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the MDPM table's definition in the body of the response. The subtype is "table_partition_md". It does not have a "physicalTable" field. It has a "partitionTables" field that contains PBTs and each PBT has a partition filter.

```json
{
  "information": {
    "dateCreated": "2022-12-26T09:33:01.000Z",
    "dateModified": "2022-12-26T09:33:01.000Z",
    "versionId": "5438A6604932356237C080B8B9F80F01",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "473718A30DA84A9A814424537879778F",
    "subType": "table_partition_md",
    "name": "PMT"
  },
  "logicalSize": 0,
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
        "dateModified": "2022-12-27T08:55:22.000Z",
        "versionId": "C254AFDE488EF05AB0AA5F9E2CFCCA09",
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
            "predicateId": "DFDAE37911944DC38E317627B867CCE9",
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
        "dateModified": "2022-12-27T08:55:14.000Z",
        "versionId": "BB4D26894541764295BF52B97AAB4425",
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
            "predicateId": "CEAEF3F3DB6C40A38FC14418F93C957A",
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

Response Code: 200 (The MDPM table's definition is returned successfully.)
