---
title: Create a new table object
sidebar_label: Create a new table object
description: This workflow sample demonstrates how to create a new table object through the Modeling service.
---

<Available since="2021 Update 1" />

:::tip

You can try this workflow with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-69df2b48-9b7c-4f35-9b80-15c9066d48b0?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new table object through the Modeling service.

## Create a new table object

In this workflow sample, you create a new `"CITY_CTR_SLS"` table object in the MicroStrategy Tutorial project. Table name should be unique within the project. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`. All schema tables are created under the objects/tables folder schema.

Get the authorization token needed to execute the request with [POST /api/auth/login]([https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

Create a new table by defining its physical table with a normal warehouse table using [POST /api/model/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-addTable).

The following are alternate methods to create a table:

- You can create a table by defining the physical table with either a normal warehouse table or freeform SQL statement and columns information. The former is called a normal table, while the latter is called a freeform SQL table. When [creating a freeform SQL table](#create-a-freeform-sql-table), the type in the `physicalTable` field must be specified as `'sql'`.
- If the `checkSecondaryDataSourceTable` query parameter is set to `true`, the API finds compatible tables in the project. If a compatible table is found, the compatible table object information is returned. Use [PATCH /api/model/tables/\{tableID}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails) to set the `secondaryDatasource` to the compatible table. If no compatible table is found, a new table is created.

If this parameter is set to `"false"`, a new table is created.

This parameter has no effect on creating a freeform SQL table.

- The `columnMergeOption` query parameter is used to define column merge options. For example, a project includes a table named Table1 with a C1 column and a char(1) data type. When you add a new table named Table2 with a C1 column and char(4) data type, the column data types are modified in the following ways for consistency:

- `reuse_any`: Updates the column data type to use the most recent column definition. In the example above, the column data type for C1 is updated to char(4) because Table2 was added after Table1.

- `reuse_compatible_data_type`: Updates the column data type to use the data type with the largest precision or scale. In the example above, the column data type for C1 is updated to char(4), as defined in Table2.

- `reuse_matched_data_type`: Renames the column in the newly added table to allow it to have different data types. In the example above, column C1 uses char(1) for Table1. Column C1 in Table2 is defined as a separate copy of C1 and uses char(4). This option can cause unwanted schema changes and should only be used when necessary. If this value is not set, use the option that is applied on the warehouse catalog setting.

- The `tablePrefixOption` query parameter defines the table prefix. This parameter has no effect on a freeform SQL table. Otherwise, use one of the following options:

- `none`: Does not set the table prefix.

- `add_default_prefix`: Applies the default prefix setting on the warehouse catalog.

- `add_namespace`: Creates a prefix that is the same as the namespace.

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
    "name": "new Table"
  },
  "primaryDataSource": {
    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8"
  },
  "physicalTable": {
    "tableName": "CITY_CTR_SLS",
    "namespace": "dbo"
  }
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\"information\": {\"name\": \"new Table\"},\"primaryDataSource\": {\"objectId\": \"8FB036244C375FC9CE3FCABF45ECC5A8\"},\"physicalTable\": {\"tableName\": \"CITY_CTR_SLS\",\"namespace\": \"dbo\"}}"
```

Sample Response Body:

You can view the new table's definition in the body of the response.

```json
{
  "information": {
    "versionId": "EF55258A468A4D05A22BA61E62AD795C",
    "primaryLocale": "en-US",
    "objectId": "0D8C36BB48E0462DB6EFE4CE9313072E",
    "subType": "logical_table",
    "name": "new Table",
    "destinationFolderId": "F37EE9EF6BC24D67BA7A001CDBC501E3"
  },
  "physicalTable": {
    "information": {
      "versionId": "5D19EFC6137B45E39E4FC97E4D271CD7",
      "primaryLocale": "en-US",
      "objectId": "162A8096CF344F6CB8D03F72049F2882",
      "subType": "physical_table",
      "name": "CITY_CTR_SLS",
      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"
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
          "type": "unsigned",
          "precision": 1,
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
          "type": "real",
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
          "type": "real",
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
          "type": "real",
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
          "type": "float",
          "precision": 53,
          "scale": -1
        },
        "columnName": "GROSS_DOLLAR_SALES"
      }
    ],
    "namespace": "dbo",
    "tablePrefix": "",
    "type": "normal"
  },
  "logicalSize": 0,
  "isLogicalSizeLocked": false,
  "isTrueKey": true,
  "isPartOfPartition": false,
  "primaryDataSource": {
    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",
    "subType": "db_role_import",
    "name": "MTDIWHSQL1"
  },
  "secondaryDataSources": []
}
```

Response Code: 201 (A new table is created successfully in the changeset.)

## More examples

### Create a freeform SQL table

You can also define a physical table field using a freeform SQL statement and column information. This is called a freeform SQL table. The type must be `"type": "sql"` in the `"physicalTable"` field.

Sample Request Body:

```json
{
  "physicalTable": {
    "sqlStatement": "select CUST_CITY_ID, TOT_COST from dbo.CUST_CTR_SLS",
    "columns": [
      {
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "CUST_CITY_ID"
      },
      {
        "dataType": {
          "type": "double",
          "precision": 0,
          "scale": 0
        },
        "columnName": "TOT_COST"
      }
    ],
    "type": "sql"
  },
  "primaryDataSource": {
    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8"
  },
  "encloseSqlInParentheses": false
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\"physicalTable\":{\"sqlStatement\":\"selectCUST_CITY_ID,TOT_COSTfromdbo.CUST_CTR_SLS\",\"columns\":[{\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"columnName\":\"CUST_CITY_ID\"},{\"dataType\":{\"type\":\"double\",\"precision\":0,\"scale\":0},\"columnName\":\"TOT_COST\"}],\"type\":\"sql\"},\"primaryDataSource\":{\"objectId\":\"8FB036244C375FC9CE3FCABF45ECC5A8\"},\"encloseSqlInParentheses\":false}"
```

Sample Response Body:

You can view the new table's definition in the body of the response.

```json
{
  "information": {
    "versionId": "6B9F7B1CED6946C995FF137DD1EFB55B",
    "primaryLocale": "en-US",
    "objectId": "AA18CDDC112C4FEDB9F5E87FC05671FD",
    "subType": "logical_table",
    "name": "New Custom Sql",
    "destinationFolderId": "F37EE9EF6BC24D67BA7A001CDBC501E3"
  },
  "physicalTable": {
    "information": {
      "versionId": "98DA2FCE948B4CF38F680201BDC206E4",
      "primaryLocale": "en-US",
      "objectId": "05FD3124B0D045CF9BC6666084072021",
      "subType": "physical_table",
      "name": "New Custom Sql",
      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"
    },
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
          "scale": 0
        },
        "columnName": "CUST_CITY_ID"
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
          "scale": 0
        },
        "columnName": "TOT_COST"
      }
    ],
    "sqlStatement": "select CUST_CITY_ID, TOT_COST from dbo.CUST_CTR_SLS",
    "type": "sql"
  },
  "logicalSize": 0,
  "isLogicalSizeLocked": false,
  "isTrueKey": true,
  "isPartOfPartition": false,
  "encloseSqlInParentheses": false,
  "primaryDataSource": {
    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",
    "subType": "db_role_import",
    "name": "MTDIWHSQL1"
  }
}
```

### Create a table alias

You can also create a table by reusing an existing physical table. This is called a table alias.

Sample Request Body:

```json
{
  "physicalTable": {
    "information": {
      "objectId": "E278D17342991E49710D6F90E2A7BF2C"
    }
  }
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\"physicalTable\":{\"information\":{\"objectId\":\"E278D17342991E49710D6F90E2A7BF2C\"}}}"
```

Sample Response Body:

You can view the new table's definition in the body of the response.

```json
{
  "information": {
    "versionId": "C2CD11A17FD544C7B98A00B9127D86C1",
    "primaryLocale": "en-US",
    "objectId": "5D1A4D4148DE4A438925620222674136",
    "subType": "logical_table",
    "name": "CITY_CTR_SLS (1)",
    "destinationFolderId": "F37EE9EF6BC24D67BA7A001CDBC501E3"
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
    "tablePrefix": "",
    "type": "normal"
  },
  "logicalSize": 0,
  "isLogicalSizeLocked": false,
  "isTrueKey": true,
  "isPartOfPartition": false,
  "primaryDataSource": {
    "objectId": "37BE16AB11D3E48C1000E787EC6DE8A4",
    "subType": "db_role",
    "name": "Tutorial Data"
  },
  "secondaryDataSources": []
}
```
