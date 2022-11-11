---
title: Workflow sample - Retrieve a table's definition
sidebar_label: Retrieve a table's definition
description: You can use REST APIs to retrieve the definition for a table through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-95d4124f-c4e5-48ce-986e-a05c6d47069f?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to retrieve the definition for a table through the Modeling service.

## Retrieve a table's definition

In this workflow sample, you want to get the definition of a table that is defined by a normal warehouse table. The object ID of the table is `862780DC499A14D74FEC7EB2EF317DA2`. The table is in the MicroStrategy Tutorial project and its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the table's definition using [GET /api/model/tables/{TableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the table's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2002-02-14T23:06:02.000Z",
    "dateModified": "2012-06-06T12:12:35.000Z",
    "versionId": "215230EB4F7089CD0261C1AD12D621AD",
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
    "namespace": "dbo",
    "tablePrefix": "dbo.",
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

Response Code: 200 (The table's definition is returned successfully.)

## Retrieve a table's definition within a changeset

In this workflow sample, you want to get the definition of the same table object mentioned in [Retrieve a table's definition](#retrieve-a-tables-definition), while within a changeset. The object ID of the table is `862780DC499A14D74FEC7EB2EF317DA2`. The table is in the MicroStrategy Tutorial project and its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md). If you plan to use the response of [GET /api/model/tables/{TableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails) to create a new table or update the table’s definition, it is recommended to associate all requests to one changeset.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Get a table's definition within a changeset using [GET /api/model/tables/{TableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

You can view the table's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2002-02-14T23:06:02.000Z",
    "dateModified": "2012-06-06T12:12:35.000Z",
    "versionId": "215230EB4F7089CD0261C1AD12D621AD",
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
  "secondaryDataSources": []
}
```

Response Code: 200 (The table's definition is returned successfully.)

## Retrieve a table's definition with specific fields

In this workflow sample, you get the definition of the `"CITY_CTR_SLS"` table object using its object ID of `862780DC499A14D74FEC7EB2EF317DA2`. You also use the `fields` parameter to retrieve specific fields. If the `fields` parameter is not specified, the API returns all fields by default as shown in [Retrieve a table's definition](#retrieve-a-tables-definition)

:::tip

Multiple field values are separated by a comma.

:::

Retrieve the table's definition using [GET /api/model/tables/{TableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails), along with `fields=information,physicalTable,attributes,facts`.

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2?fields=information,physicalTable,attributes,facts" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the returned table's definition in the body of the response. Notice that only the specified fields are returned.

```json
{
  "information": {
    "dateCreated": "2002-02-14T23:06:02.000Z",
    "dateModified": "2012-06-06T12:12:35.000Z",
    "versionId": "215230EB4F7089CD0261C1AD12D621AD",
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
  ]
}
```

Sample Response Code: 200 (The table's definition is returned successfully.)
