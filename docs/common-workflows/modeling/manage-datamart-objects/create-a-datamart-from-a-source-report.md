---
title: Create a datamart from a source report
description: This workflow sample demonstrates how to create a new Datamart object from a source report through the Modeling service.
---

<Available since="2021 Update 7" />

This workflow sample demonstrates how to create a new datamart object from a source report through the Modeling service.

You want to create a datamart from a source report with the object ID of 0D0E80754CC1987C52F9BCB317E6941D and put the newly created datamart into the destination folder of 8A1831FF494F528D02A4A8BF5FB73459. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a new datamart

Endpoint: [POST /api/model/datamarts](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/post_api_model_datamarts)

The response can change based on the request parameters provided by the caller. Use the following parameters:

| Location | Name                   | Description                                                                                                                                                                                                  |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken       | The authorization token.                                                                                                                                                                                     |
| header   | X-MSTR-ProjectID       | The project ID.                                                                                                                                                                                              |
| params   | sourceReportId         | The ID of the source report that you want to create datamart from.                                                                                                                                           |
| params   | showFilterTokens       | Specify whether the Datamart’s "filter" is returned in "tokens" format, along with "text" and "tree" formats.                                                                                                |
| params   | showExpressionAs       | Specify the format in which the expressions are returned in response, applied to the expressions in a fact or attribute and custom expressions used in a filter, prompt, security filter, custom group, etc. |
| params   | showAdvancedProperties | Specify whether the datamart’s definition is returned with advanced properties.                                                                                                                              |

To create the new datamart from existing report , you need to submit the request body with the correct information. Other fields except `information` and `datamartOptions` would be ignored even if they’re provided.

In `information`, you need to provide name, destinationFolderID for the datamart you want to create.

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "name": "demo datamart"
  },
  "datamartOptions": {
    "append": true,
    "targetSource": {
      "objectId": "05AC49F849389A20A6C9C19A3105A69B",
      "subType": "db_role",
      "name": "Statistics"
    },
    "tableName": "MD_TEST",
    "placeholderIncluded": true,
    "datamartProperties": {
      "[DatamartProperties].[Create Table Post String]": {
        "name": "Create Table Post String",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Insert SQLs]": {
        "name": "Insert SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Execution Time]": {
        "name": "Maximum Execution Time",
        "value": "0",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Rows]": {
        "name": "Maximum Rows",
        "value": "65536",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Post SQLs]": {
        "name": "Post SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Pre SQLs]": {
        "name": "Pre SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Descriptor]": {
        "name": "Table Descriptor",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X 'POST' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts?sourceReportId=0D0E80754CC1987C52F9BCB317E6941D' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: 20tpft1324b71ubo9emqesv5u7' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
  -H 'Content-Type: application/json' \
  -d '{
    "information":{
        "destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459",
        "name": "demo datamart"
    },
    "datamartOptions": {
        "append": true,
        "targetSource": {
            "objectId": "05AC49F849389A20A6C9C19A3105A69B",
            "subType": "db_role",
            "name": "Statistics"
        },
        "tableName": "MD_TEST",
        "placeholderIncluded": true,
        "datamartProperties": {
            "[DatamartProperties].[Create Table Post String]": {
                "name": "Create Table Post String",
                "value": "",
                "type": "string",
                "resolvedLocation": "object"
            },
            "[DatamartProperties].[Insert SQLs]": {
                "name": "Insert SQLs",
                "value": "",
                "type": "string",
                "resolvedLocation": "object"
            },
            "[DatamartProperties].[Maximum Execution Time]": {
                "name": "Maximum Execution Time",
                "value": "0",
                "type": "int32",
                "resolvedLocation": "object"
            },
            "[DatamartProperties].[Maximum Rows]": {
                "name": "Maximum Rows",
                "value": "65536",
                "type": "int32",
                "resolvedLocation": "object"
            },
            "[DatamartProperties].[Post SQLs]": {
                "name": "Post SQLs",
                "value": "",
                "type": "string",
                "resolvedLocation": "object"
            },
            "[DatamartProperties].[Pre SQLs]": {
                "name": "Pre SQLs",
                "value": "",
                "type": "string",
                "resolvedLocation": "object"
            },
            "[DatamartProperties].[Table Descriptor]": {
                "name": "Table Descriptor",
                "value": "",
                "type": "string",
                "resolvedLocation": "object"
            }
        }
    }
}'
```

Sample Response Body:

You can view the new datamart definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-09-08T08:23:53.645Z",
    "dateModified": "2022-09-08T08:23:53.645Z",
    "versionId": "D71F41E547AE966037017D97FFA04CA9",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "93C339024786A4EA0A7B0CADDFFD7BC1",
    "subType": "report_datamart",
    "name": "demo datamart"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3811D3E4981000E787EC6DE8A4",
          "name": "Country",
          "type": "attribute"
        },
        {
          "id": "8D679D3611D3E4981000E787EC6DE8A4",
          "name": "Catalog",
          "type": "attribute"
        },
        {
          "id": "8D679D3511D3E4981000E787EC6DE8A4",
          "name": "Call Center",
          "type": "attribute"
        },
        {
          "id": "8D679D5211D3E4981000E787EC6DE8A4",
          "name": "Distribution Center",
          "type": "attribute"
        },
        {
          "id": "8D679D4F11D3E4981000E787EC6DE8A4",
          "name": "Subcategory",
          "type": "attribute"
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
              "name": "Cost",
              "subType": "metric"
            },
            {
              "id": "D823D64B48A0104B01135587BA87A2BD",
              "name": "Cost Growth",
              "subType": "metric"
            },
            {
              "id": "381980B211D40BC8C000C8906B98494F",
              "name": "Discount",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {}
  },
  "datamartOptions": {
    "append": true,
    "targetSource": {
      "objectId": "05AC49F849389A20A6C9C19A3105A69B",
      "subType": "db_role",
      "name": "Statistics"
    },
    "tableName": "MD_TEST",
    "placeholderIncluded": true,
    "datamartProperties": {
      "[DatamartProperties].[Create Table Post String]": {
        "name": "Create Table Post String",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Insert SQLs]": {
        "name": "Insert SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Execution Time]": {
        "name": "Maximum Execution Time",
        "value": "0",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Rows]": {
        "name": "Maximum Rows",
        "value": "65536",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Post SQLs]": {
        "name": "Post SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Pre SQLs]": {
        "name": "Pre SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Descriptor]": {
        "name": "Table Descriptor",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Option]": {
        "name": "Table Option",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Prefix]": {
        "name": "Table Prefix",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Qualifier]": {
        "name": "Table Qualifier",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Space]": {
        "name": "Table Space",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Type]": {
        "name": "Table Type",
        "value": "0",
        "type": "int32",
        "resolvedLocation": "default"
      }
    }
  }
}
```

Response Code: 201 (A datamart is created successfully.)

## The model for the definition of the datamart

The model for the definition of a datamart can be represented with the following fields.

:::info

`objectId`, `dateCreated`, `dateModified`, and `versionId` are generated automatically. Currently only `en-US` is available for `primaryLocale`.

:::

- (Required) `information`
  - (Required) `name` (`String`) - Name of the datamart. This is the most user-friendly value that can be used to identify the datamart.
  - `subType` (`String`) - The subType of datamart, which should be `report_datamart`.
  - (Required) `destinationFolderId` (`String`) - Folder Id where the new datamart is saved.
- (Required) `datamartOptions`
  - `append` (`Boolean`) - This flag indicate whether to create a new table or append to the existing table every time report runs.
  - (Required) `targetSource` - The database instance instance where the table will be placed in.
  - (Required) `tableName` (`String`) - The name of the inserted table.
  - `placeholderIncluded` (`Boolean`) - The placeholders we support on table name. Details can be referred [here](https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm).
  - `datamartProperties` - The datamart properties that are used to configure the table in warehouse.
