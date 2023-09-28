---
title: Update a table's physical table structure
sidebar_label: Update a table's physical table structure
description: This workflow sample demonstrates how to update a table's physical table structure through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground].

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an existing table's physical table structure through the Modeling service.

In this workflow sample, you update an existing `"CITY_CTR_SLS"` table's physical table structure in the MicroStrategy Tutorial project. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

Update the `"CITY_CTR_SLS"` table's physical table structure using [POST /api/model/tables/{tableId}/physicalTable/refresh](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-refreshPhysicalTable). The object ID of the table is `862780DC499A14D74FEC7EB2EF317DA2`.

If table is missing, table cannot be updated. If the physical table is a free form sql table，it will do nothing. If column is changed, consider following 3 cases.

- Normal table that does not have secondary DBRole.

  - New columns: Add new columns to DbTable according to column merge option.

  - Column missing: If the missing column is used by any fact or attribute in the table, column will not be removed. If it is not mapped to attribute or fact, remove column reference from table. If the column is not used by other table, delete the column.

  - Column data type change: Change column data type according to new data type.

- Table that has secondary DBRole case: Need to check each warehouse table’s schema for both primary DBRole and secondary DBRole list.

  - If the new table structure does not meet secondary DBRole condition (column missing, data type incompatible), update will be rejected.

  - If column data type is changed and still compatible, adjust to maximum denominator data type.

- Warehouse partition case: Need to check top level PMT table and lower level partition table schema.

  - Top level PMT table: If column `“PBTNAME”` is missing, update will be rejected. For other columns, the rules are same with normal table.

  - Partition table: Only check the first table in `“PBTNAME“` and update structure as normal table.

  - If top level PMT table has secondary DBRole, need to check the secondary DBRole table schema.

The `columnMergeOption` query parameter is used to define column merge options. For example, a project includes a table named Table1 with a C1 column and a char(1) data type. When you add a new table named Table2 with a C1 column and char(4) data type, the column data types are modified in the following ways for consistency.

- `reuse_any`: Updates the column data type to use the most recent column definition. In the example above, the column data type for C1 is updated to char(4) because Table2 was added after Table1.

- `reuse_compatible_data_type`: Updates the column data type to use the data type with the largest precision or scale. In the example above, the column data type for C1 is updated to char(4), as defined in Table2.

- `reuse_matched_data_type`: Renames the column in the newly added table to allow it to have different data types. In the example above, column C1 uses char(1) for Table1. Column C1 in Table2 is defined as a separate copy of C1 and uses char(4). This option can cause unwanted schema changes and should only be used when necessary. If this value is not set, use the option that is applied on the warehouse catalog setting.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2/physicalTable/refresh" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json"}"
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2002-02-14T23:06:02.000Z",
    "dateModified": "2012-06-06T12:12:35.000Z",
    "versionId": "215230EB4F7089CD0261C1AD12D621AD",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "862780DC499A14D74FEC7EB2EF317DA2",
    "subType": "logical_table",
    "name": "CITY_CTR_SLS"
  },
  "physicalTable": {
    "information": {
      "dateCreated": "2002-02-14T23:04:18.000Z",
      "dateModified": "2012-06-06T12:12:35.000Z",
      "versionId": "215230EB4F7089CD0261C1AD12D621AD",
      "acg": 255,
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
          "acg": 255,
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
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",
          "subType": "column",
          "name": "CALL_CTR_ID"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "CALL_CTR_ID"
      },
      {
        "information": {
          "dateCreated": "2001-01-02T20:48:35.000Z",
          "dateModified": "2012-06-06T12:13:04.000Z",
          "versionId": "256D148442065F43BDC42FBB79438A3F",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",
          "subType": "column",
          "name": "TOT_DOLLAR_SALES"
        },
        "dataType": {
          "type": "double",
          "precision": 8,
          "scale": 0
        },
        "columnName": "TOT_DOLLAR_SALES"
      },
      {
        "information": {
          "dateCreated": "2001-01-02T20:48:34.000Z",
          "dateModified": "2012-06-06T12:13:04.000Z",
          "versionId": "256D148442065F43BDC42FBB79438A3F",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",
          "subType": "column",
          "name": "TOT_UNIT_SALES"
        },
        "dataType": {
          "type": "double",
          "precision": 8,
          "scale": 0
        },
        "columnName": "TOT_UNIT_SALES"
      },
      {
        "information": {
          "dateCreated": "2001-09-18T19:59:30.000Z",
          "dateModified": "2012-06-06T12:13:04.000Z",
          "versionId": "256D148442065F43BDC42FBB79438A3F",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",
          "subType": "column",
          "name": "TOT_COST"
        },
        "dataType": {
          "type": "double",
          "precision": 8,
          "scale": 0
        },
        "columnName": "TOT_COST"
      },
      {
        "information": {
          "dateCreated": "2007-01-08T12:22:02.000Z",
          "dateModified": "2012-06-06T12:12:35.000Z",
          "versionId": "215230EB4F7089CD0261C1AD12D621AD",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",
          "subType": "column",
          "name": "New GROSS_DOLLAR_SALES (2)"
        },
        "dataType": {
          "type": "double",
          "precision": 8,
          "scale": 0
        },
        "columnName": "GROSS_DOLLAR_SALES"
      }
    ],
    "namespace": "",
    "tablePrefix": "",
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
          "isKeyForm": true,
          "lookupTable": {
            "objectId": "8D67933211D3E4981000E787EC6DE8A4",
            "subType": "logical_table",
            "name": "LU_CALL_CTR"
          },
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
          "isKeyForm": false,
          "lookupTable": {
            "objectId": "8D67933211D3E4981000E787EC6DE8A4",
            "subType": "logical_table",
            "name": "LU_CALL_CTR"
          },
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
          "isKeyForm": true,
          "lookupTable": {
            "objectId": "8D67934A11D3E4981000E787EC6DE8A4",
            "subType": "logical_table",
            "name": "LU_CUST_CITY"
          },
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
  "secondaryDataSources": []
}
```

Response Code: 200 (On success, the API returns a list of logical tables and their specific field information.)
