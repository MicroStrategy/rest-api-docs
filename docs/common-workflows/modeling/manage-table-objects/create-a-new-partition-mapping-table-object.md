---
title: Create a new partition mapping table object
sidebar_label: Create a new partition mapping table object
description: This workflow sample demonstrates how to create a new partition mapping table object through the Modeling service.
---

<Available since="2021 Update 9" />

:::tip

You can try this workflow with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-43769ee1-7480-4413-990a-13b50119b384).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new partition mapping table object through the Modeling service. Both the warehouse partition mapping (WHPM) and metadata partition mapping (MDPM) are supported. Refer to [Retrieve a partition mapping table's definition](./retrieve-a-partition-mapping-tables-definition.md) for a brief introduction on partition mapping.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](<https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin>.

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a WHPM table

To use this workflow sample, create a new WHPM table called "my_pmta". The physical table of the partition mapping table (PMT) is called "pmt_inventory_01" from the public namespace of the data source (ID: F0C9E02B4C56D68F9D8176A7FBADCFF3).

For WHPM, the physical table of the partition mapping table that contains partition base table (PBT) information, must already exist . Refer to [Warehouse partition mapping](https://www2.microstrategy.com/producthelp/Current/ProjectDesignGuide/WebHelp/Lang_1033/Content/Warehouse_partition_mapping.htm) for details if you are not familiar with warehouse partitioning.

Create a new table with [POST /api/model/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-addTable).

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
    "name": "my_pmta"
  },
  "primaryDataSource": {
    "objectId": "F0C9E02B4C56D68F9D8176A7FBADCFF3"
  },
  "physicalTable": {
    "tableName": "pmt_inventory_01",
    "namespace": "public"
  }
}
```

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables' -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" --data-raw '{
    "information": {
        "name": "my_pmta"
    },
    "primaryDataSource": {
        "objectId": "F0C9E02B4C56D68F9D8176A7FBADCFF3"
    },
    "physicalTable": {
        "tableName": "pmt_inventory_01",
        "namespace": "public"
    }
}'
```

Sample Response Body:

```json
{
  "information": {
    "versionId": "CB30C734A3DD4D48A96EB7F38D0C409B",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "A9217F1666554F7BBD47568A62ECFD97",
    "subType": "table_partition_wh",
    "name": "my_pmta",
    "destinationFolderId": "CC582EC35C0C481E826E6D6B40BE4905"
  },
  "physicalTable": {
    "information": {
      "versionId": "54C7EBCEFBFB42DBAC3270A9299F5ECB",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "47EA98B51AF64DF3BECF81238DC79C79",
      "subType": "db_table_pmt",
      "name": "pmt_inventory_01",
      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"
    },
    "tableName": "pmt_inventory_01",
    "columns": [
      {
        "information": {
          "dateCreated": "2001-01-02T20:48:29.000Z",
          "dateModified": "2023-01-06T06:52:49.000Z",
          "versionId": "55732C70425DE154CBD33A83492636A0",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "8D67914311D3E4981000E787EC6DE8A4",
          "subType": "column",
          "name": "PBTNAME"
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
          "dateModified": "2023-01-06T06:52:49.000Z",
          "versionId": "2A34D0E7430F27EC7184449598773E0B",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "8D67914211D3E4981000E787EC6DE8A4",
          "subType": "column",
          "name": "QUARTER_ID"
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
        "versionId": "C2DD7F50D74B4D21BAC2A864FDE33B1B",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "7E43C57150404C10B1370D3AD2A46246",
        "subType": "logical_table",
        "name": "pmt_inventory_01_FactTable",
        "destinationFolderId": "A23B009F4F4E40039B13F0B0FACC4FF5"
      },
      "physicalTable": {
        "information": {
          "versionId": "DEA39D43397C409CBE90465D4CE46189",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "9A85406A7B1F4964A67CBED56443A9D4",
          "subType": "physical_table",
          "name": "pmt_inventory_01_FactTable",
          "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"
        },
        "tableName": "pmt_inventory_01_FactTable",
        "columns": [
          {
            "information": {
              "dateCreated": "2020-11-03T06:42:39.000Z",
              "dateModified": "2023-01-06T06:52:49.000Z",
              "versionId": "437073A34CE825C5B836899D64A2B02F",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "6C276C1B41242E3CED503FB7E51693BE",
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
              "dateCreated": "2001-01-02T20:48:32.000Z",
              "dateModified": "2019-10-15T19:48:11.000Z",
              "versionId": "B7B62B9811E9EF8470330080EF753340",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "8D67916111D3E4981000E787EC6DE8A4",
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
              "dateModified": "2023-01-06T06:52:49.000Z",
              "versionId": "FEC6ABCF4BD19F3B9A3D2193A84B88A4",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "8D67915C11D3E4981000E787EC6DE8A4",
              "subType": "column",
              "name": "ITEM_ID"
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
              "dateModified": "2023-01-06T06:52:49.000Z",
              "versionId": "A6C281D84C434795C03F0E80EDEDD9E2",
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

Response Code: 201 (A new WHPM table is created successfully in the changeset.)

## Create a MDPM table

In this workflow sample, create a new MDPM table called "my_pmt" and add two PBTs. Their IDs are 16F7047017563FD9541179744D001250 and 16F7047017563FD957E139264D1C2686. For the former PBT, qualify on the ID form of the "Country" attribute. For the latter PBT, qualify on the ID form of the "Category" attribute.

For MDPM, you can use any logical table as one of the PBTs, and any standalone attribute to construct your partition filter. You can only use attribute form qualifications and element list qualifications with the partition filter. Refer to [Metadata partition mapping](https://www2.microstrategy.com/producthelp/Current/ProjectDesignGuide/WebHelp/Lang_1033/Content/Metadata_partition_mapping.htm) for details if you are not familiar with metadata partitioning.

Create the new table with [POST /api/model/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-addTable).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "table_partition_md",
    "name": "my_pmt"
  },
  "partitionTables": [
    {
      "information": {
        "objectId": "16F7047017563FD9541179744D001250"
      },
      "partitionFilter": {
        "qualification": {
          "tree": {
            "type": "predicate_form_qualification",
            "predicateTree": {
              "function": "is_not_null",
              "parameters": [],
              "attribute": {
                "objectId": "8D679D3811D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Country"
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
        "objectId": "16F7047017563FD957E139264D1C2686"
      },
      "partitionFilter": {
        "qualification": {
          "tree": {
            "type": "predicate_form_qualification",
            "predicateTree": {
              "function": "is_not_null",
              "parameters": [],
              "attribute": {
                "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Category"
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
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables' -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" --data-raw '{ "information": { "subType": "table_partition_md", "name": "my_pmt" }, "partitionTables": [ { "information": { "objectId": "16F7047017563FD9541179744D001250" }, "partitionFilter": { "qualification": { "tree": { "type": "predicate_form_qualification", "predicateTree": { "function": "is_not_null", "parameters": [], "attribute": { "objectId": "8D679D3811D3E4981000E787EC6DE8A4", "subType": "attribute", "name": "Country" }, "form": { "objectId": "45C11FA478E745FEA08D781CEA190FE5", "subType": "attribute_form_system", "name": "ID" }, "dataLocale": "" } } } } }, { "information": { "objectId": "16F7047017563FD957E139264D1C2686" }, "partitionFilter": { "qualification": { "tree": { "type": "predicate_form_qualification", "predicateTree": { "function": "is_not_null", "parameters": [], "attribute": { "objectId": "8D679D3711D3E4981000E787EC6DE8A4", "subType": "attribute", "name": "Category" }, "form": { "objectId": "45C11FA478E745FEA08D781CEA190FE5", "subType": "attribute_form_system", "name": "ID" }, "dataLocale": "" } } } } } ] }'
```

Sample Response Body:

```json
{
  "information": {
    "versionId": "44E1EFD369464F1EB2EFEB518DBD5C70",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "2033B6ED1CA642E6A55CB377B3DFC2B4",
    "subType": "table_partition_md",
    "name": "my_pmt"
  },
  "logicalSize": 0,
  "isLogicalSizeLocked": false,
  "partitionLevel": [
    {
      "objectId": "8D679D3811D3E4981000E787EC6DE8A4",
      "subType": "attribute",
      "name": "Country"
    },
    {
      "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
      "subType": "attribute",
      "name": "Category"
    }
  ],
  "partitionTables": [
    {
      "information": {
        "dateCreated": "2020-10-26T08:19:54.000Z",
        "dateModified": "2023-01-11T10:55:49.000Z",
        "versionId": "7726D623454692EAB0028BBC97E0F17F",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "16F7047017563FD9541179744D001250",
        "subType": "logical_table",
        "name": "inventory_q1_2012"
      },
      "partitionLevel": [
        {
          "objectId": "8D679D3811D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Country"
        }
      ],
      "partitionFilter": {
        "qualification": {
          "text": "IsNotNull(Country (ID))",
          "tree": {
            "type": "predicate_form_qualification",
            "predicateId": "94185280E89C4AE3B40964B8CA0044EE",
            "predicateText": "IsNotNull(Country (ID))",
            "predicateTree": {
              "function": "is_not_null",
              "parameters": [],
              "attribute": {
                "objectId": "8D679D3811D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Country"
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
        "dateCreated": "2020-10-26T08:19:54.000Z",
        "dateModified": "2023-01-11T10:56:41.000Z",
        "versionId": "EAAD29F3484FBF55459DF294C85C19F4",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "16F7047017563FD957E139264D1C2686",
        "subType": "logical_table",
        "name": "inventory_q3_2012"
      },
      "partitionLevel": [
        {
          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Category"
        }
      ],
      "partitionFilter": {
        "qualification": {
          "text": "IsNotNull(Category (ID))",
          "tree": {
            "type": "predicate_form_qualification",
            "predicateId": "B4B8523258BA44C6A40641CAE8CB607E",
            "predicateText": "IsNotNull(Category (ID))",
            "predicateTree": {
              "function": "is_not_null",
              "parameters": [],
              "attribute": {
                "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Category"
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

Response Code: 201 (A new MDPM table is created successfully in the changeset.)
