---
title: Create a datamart from scratch
description: This workflow sample demonstrates how to create a new Datamart object from scratch through the Modeling service.
---

This workflow sample demonstrates how to create a new datamart object through the Modeling service.

You want to create a new datamart and name it as “Customer in Region Northeast" in the destination folder of 8A1831FF494F528D02A4A8BF5FB73459. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client.

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

The response can change based on the request parameters provided by the caller. Use the following parameters:

| Location | Name                   | Description                                                                                                                                                                                                  |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken       | The authorization token.                                                                                                                                                                                     |
| header   | X-MSTR-ProjectID       | The ID of the project.                                                                                                                                                                                       |
| params   | showFilterTokens       | Specify whether the Datamart’s "filter" is returned in "tokens" format, along with "text" and "tree" formats.                                                                                                |
| params   | showExpressionAs       | Specify the format in which the expressions are returned in response, applied to the expressions in a fact or attribute and custom expressions used in a filter, prompt, security filter, custom group, etc. |
| params   | showAdvancedProperties | Specify whether the datamart’s definition is returned with advanced properties.                                                                                                                              |

## Create a new datamart

Endpoint: [POST /api/model/datamarts](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/post_api_model_datamarts)

To create the new datamart , you need to submit the request body with the correct information for each field.

In `information`, you need to provide `name`, `destinationFolderId` for the datamart you want to create.

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "name": "datamart"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Category",
          "type": "attribute"
        },
        {
          "id": "8D679D4F11D3E4981000E787EC6DE8A4",
          "name": "Subcategory",
          "type": "attribute"
        },
        {
          "id": "8D679D4B11D3E4981000E787EC6DE8A4",
          "name": "Region",
          "type": "attribute"
        },
        {
          "id": "8D679D4A11D3E4981000E787EC6DE8A4",
          "name": "Quarter",
          "type": "attribute"
        },
        {
          "id": "8D679D4211D3E4981000E787EC6DE8A4",
          "name": "Item",
          "type": "attribute"
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "1FAF96994873E7CEFC71BDB269522636",
              "name": "Profit Forecast",
              "subType": "metric"
            }
          ]
        }
      ]
    }
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
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: 7k87j4b9q8mu22ve2tp5lophq7' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
  -H 'Content-Type: application/json' \
  -d '{
    "information":{
        "destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459",
        "name": "datamart"
    },
    "sourceType": "normal",
    "dataSource": {
        "dataTemplate": {
            "units": [
                {
                    "id": "8D679D3711D3E4981000E787EC6DE8A4",
                    "name": "Category",
                    "type": "attribute"
                },
                {
                    "id": "8D679D4F11D3E4981000E787EC6DE8A4",
                    "name": "Subcategory",
                    "type": "attribute"
                },
                {
                    "id": "8D679D4B11D3E4981000E787EC6DE8A4",
                    "name": "Region",
                    "type": "attribute"
                },
                {
                    "id": "8D679D4A11D3E4981000E787EC6DE8A4",
                    "name": "Quarter",
                    "type": "attribute"
                },
                {
                    "id": "8D679D4211D3E4981000E787EC6DE8A4",
                    "name": "Item",
                    "type": "attribute"
                },
                {
                    "type": "metrics",
                    "elements": [
                        {
                            "id": "1FAF96994873E7CEFC71BDB269522636",
                            "name": "Profit Forecast",
                            "subType": "metric"
                        }
                    ]
                }
            ]
        }
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
    "dateCreated": "2022-09-08T09:23:37.702Z",
    "dateModified": "2022-09-08T09:23:37.702Z",
    "versionId": "1F5FC3144405A696E70DAE9606A20062",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "D9DD010946CAFA3B1E2F6684F2D940B1",
    "subType": "report_datamart",
    "name": "datamart"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Category",
          "type": "attribute"
        },
        {
          "id": "8D679D4F11D3E4981000E787EC6DE8A4",
          "name": "Subcategory",
          "type": "attribute"
        },
        {
          "id": "8D679D4B11D3E4981000E787EC6DE8A4",
          "name": "Region",
          "type": "attribute"
        },
        {
          "id": "8D679D4A11D3E4981000E787EC6DE8A4",
          "name": "Quarter",
          "type": "attribute"
        },
        {
          "id": "8D679D4211D3E4981000E787EC6DE8A4",
          "name": "Item",
          "type": "attribute"
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "1FAF96994873E7CEFC71BDB269522636",
              "name": "Profit Forecast",
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

## Create a datamart from scratch with advanced properties

This workflow sample demonstrates how to retrieve the definition of a datamart with advanced properties through the Modeling service.

This workflow is the same as using POST /api/model/datamarts.

If `showAdvancedProperties` is omitted or false, the advanced properties are not returned.

If `showAdvancedProperties` is true, the advanced properties are are returned.

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "name": "DMR advanced properties"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Category",
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
              "id": "1FAF96994873E7CEFC71BDB269522636",
              "name": "Profit Forecast",
              "subType": "metric"
            }
          ]
        }
      ]
    }
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
      }
    }
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[EvaluationOrdering]": {
        "name": "EvaluationOrdering",
        "value": "2",
        "type": "int32",
        "resolvedLocation": "default"
      }
    },
    "useDefaultEvaluationOrder": true
  }
}
```

Sample Curl:

```bash
curl -X 'POST' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts?showAdvancedProperties=true' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: 4va2i187soo1gbjvbiuk90na6v' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
  -H 'Content-Type: application/json' \
  -d '{
    "information":{
        "destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459",
        "name": "DMR advanced properties"
    },
    "sourceType": "normal",
    "dataSource": {
        "dataTemplate": {
            "units": [
                {
                    "id": "8D679D3711D3E4981000E787EC6DE8A4",
                    "name": "Category",
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
                            "id": "1FAF96994873E7CEFC71BDB269522636",
                            "name": "Profit Forecast",
                            "subType": "metric"
                        }
                    ]
                }
            ]
        }
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
            }
        }
    },
    "advancedProperties": {
        "vldbProperties": {
            "[AnalyticalEngineProperties].[EvaluationOrdering]": {
                "name": "EvaluationOrdering",
                "value": "2",
                "type": "int32",
                "resolvedLocation": "default"
            }
        },
        "useDefaultEvaluationOrder": true
    }
}'
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2022-09-08T10:03:46.524Z",
    "dateModified": "2022-09-08T10:03:46.524Z",
    "versionId": "53A787E94D62295045F546A0F9F3A8DE",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "E552D3CE48D2FE0ECC1D42BB71B3BD76",
    "subType": "report_datamart",
    "name": "DMR advanced properties"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Category",
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
              "id": "1FAF96994873E7CEFC71BDB269522636",
              "name": "Profit Forecast",
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
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Maximum Execution Time]": {
        "name": "Maximum Execution Time",
        "value": "0",
        "type": "int32",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Maximum Rows]": {
        "name": "Maximum Rows",
        "value": "65536",
        "type": "int32",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Post SQLs]": {
        "name": "Post SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Pre SQLs]": {
        "name": "Pre SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Descriptor]": {
        "name": "Table Descriptor",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
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
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[EvaluationOrdering]": {
        "name": "EvaluationOrdering",
        "value": "2",
        "type": "int32",
        "resolvedLocation": "report"
      },
      "[AnalyticalEngineProperties].[MetricLevelDetermination]": {
        "name": "MetricLevelDetermination",
        "value": "false",
        "type": "boolean",
        "resolvedLocation": "default"
      }
    },
    "metricJoinTypes": {
      "1FAF96994873E7CEFC71BDB269522636": {
        "metric": {
          "objectId": "1FAF96994873E7CEFC71BDB269522636",
          "subType": "metric",
          "name": "Profit Forecast"
        },
        "joinType": "inner",
        "resolvedLocation": "default"
      }
    },
    "attributeJoinTypes": {
      "8D679D3711D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Category"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      },
      "8D679D4F11D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Subcategory"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      }
    },
    "useDefaultEvaluationOrder": true
  }
}
```

## The model for the definition of the datamart

The model for the definition of a datamart can be represented with the following fields.

:::info

`objectId`, `dateCreated`, `dateModified`, and `versionId` are generated automatically. Currently only `en-US` is available for `primaryLocale`.

:::

- (Required) `information`
  - (Required) `name` (`String`) - Name of the datamart. This is the most user-friendly value that can be used to identify the datamart.
  - `subType` (`String`) - The subType of datamart, which should be `report_datamart`.
  - (Required) `destinationFolderId` (`String`) - Folder Id where the new datamart is saved.
- (Required) `sourceType` (`String`) - The type of source reports. We support two types: "normal" and "custom_sql_free_form".
- (Required) `dataSource`
  - (Required) `dataTemplate` - The data template of the datamart.
  - `filter` - The filter definition of the datamart.
  - `table` - The table is only required and used when the `sourceType` is "custom_sql_free_form".
- (Required) `datamartOptions`
  - `append` (`Boolean`) - This flag indicate whether to create a new table or append to the existing table every time report runs.
  - (Required) `targetSource` - The database instance instance where the table will be placed in.
  - (Required) `tableName` (`String`) - The name of the inserted table.
  - `placeholderIncluded` (`Boolean`) - The placeholders we support on table name. Details can be referred [here](https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm).
  - `datamartProperties` (`String`) - The datamart properties that are used to configure the table in warehouse.
- `timezone`
  - `objectId` (`String`) - The timezone ID applied on the datamart.
  - `name` (`String`) - The name of timezone object.
  - `subType` (`String`) - The sub type of timezone. The available values are "timezone_custom" and "timezone_system".
- `advancedProperties`
  - `vldbProperties` - The VLDB Properties that are applicable to datamart and their values.
  - `metricJoinType` - The metric join type that are applicable to datamart and their values.
  - `attributeJoinType` - The attribute join type that are applicable to datamart and their values.
  - `useDefaultEvaluationOrder` (`Boolean`) - This flag indicates whether to use the default evaluation order for datamart.
