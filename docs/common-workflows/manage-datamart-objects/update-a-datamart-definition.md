---
title: Workflow sample - Update the datamart definition
sidebar_label: Update a datamart definition
description: This workflow sample demonstrates how to update a Datamart definition through the Modeling service.
---

This workflow sample demonstrates how to update a datamart definition through the Modeling service.

You want to update the definition of the "Customer in Region Northeast" datamart with following changes:

- Modify the filter to Region in "Northwest"
- Add metric "Profit" to the template
- Change the datamart database instance to "Statistics"
- Change the table name to "!p_demo"

The target datamart ID is D9DD010946CAFA3B1E2F6684F2D940B1 in the project of B7CA92F04B9FAE8D941C3E9B7E0CD754. 308B250B44F3FB3180634EAE6A1A14AA

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

The response can change based on the request parameters provided by the caller. Use the following parameters:

| Location | Name                   | Description                                                                                                                                                                                                  |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken       | The authorization token.                                                                                                                                                                                     |
| header   | X-MSTR-ProjectID       | The ID of the project.                                                                                                                                                                                       |
| params   | datamartId             | The object ID of target datamart that you want to modify.                                                                                                                                                    |
| params   | showFilterTokens       | Specify whether the Datamart’s "filter" is returned in "tokens" format, along with "text" and "tree" formats.                                                                                                |
| params   | showExpressionAs       | Specify the format in which the expressions are returned in response, applied to the expressions in a fact or attribute and custom expressions used in a filter, prompt, security filter, custom group, etc. |
| params   | showAdvancedProperties | Specify whether the datamart’s definition is returned with advanced properties.                                                                                                                              |

## Update the datamart

Endpoint: [PUT /api/model/datamarts/{datamartId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/put_api_model_datamarts__datamartId_)

Sample Request Body:

```json
{
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3B11D3E4981000E787EC6DE8A4",
          "name": "Customer Region",
          "type": "attribute"
        },
        {
          "id": "8D679D3C11D3E4981000E787EC6DE8A4",
          "name": "Customer",
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
              "id": "4C051DB611D3E877C000B3B2D86C964F",
              "name": "Profit",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {
      "text": "{Customer Region} = Northwest",
      "tree": {
        "type": "predicate_element_list",
        "predicateId": "AA66A742542347B3A016BA31FF28F2C4",
        "predicateTree": {
          "attribute": {
            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Customer Region"
          },
          "elements": [
            {
              "display": "Northwest",
              "elementId": "h6"
            }
          ],
          "function": "in"
        }
      }
    }
  },
  "datamartOptions": {
    "targetSource": {
      "objectId": "05AC49F849389A20A6C9C19A3105A69B",
      "subType": "db_role",
      "name": "Statistics"
    },
    "tableName": "!p_demo"
  }
}
```

Sample Curl:

```bash
curl -X 'PUT' \
  'http://10.23.38.199:8080/MicroStrategyLibrary/api/model/datamarts/D9DD010946CAFA3B1E2F6684F2D940B1' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: a513l5d5dmoi3q73ebdif6bm8n' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
  -H 'Content-Type: application/json' \
  -d '{
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3B11D3E4981000E787EC6DE8A4",
          "name": "Customer Region",
          "type": "attribute"
        },
        {
          "id": "8D679D3C11D3E4981000E787EC6DE8A4",
          "name": "Customer",
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
              "id": "4C051DB611D3E877C000B3B2D86C964F",
              "name": "Profit",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {
      "text": "{Customer Region} = Northwest",
      "tree": {
        "type": "predicate_element_list",
        "predicateId": "AA66A742542347B3A016BA31FF28F2C4",
        "predicateTree": {
          "attribute": {
            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Customer Region"
          },
          "elements": [
            {
              "display": "Northwest",
              "elementId": "h6"
            }
          ],
          "function": "in"
        }
      }
    }
  },
  "datamartOptions": {
    "targetSource": {
      "objectId": "05AC49F849389A20A6C9C19A3105A69B",
      "subType": "db_role",
      "name": "Statistics"
    },
    "tableName": "!p_demo"
  }
}'
```

Sample Response Body:

You can view the updated datamart definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-09-08T09:23:38.000Z",
    "dateModified": "2022-09-09T04:09:38.520Z",
    "versionId": "D02FE20949FEF4307334BAB99B318FD0",
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
          "id": "8D679D3B11D3E4981000E787EC6DE8A4",
          "name": "Customer Region",
          "type": "attribute"
        },
        {
          "id": "8D679D3C11D3E4981000E787EC6DE8A4",
          "name": "Customer",
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
              "id": "4C051DB611D3E877C000B3B2D86C964F",
              "name": "Profit",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {
      "text": "{Customer Region} = Northwest",
      "tree": {
        "type": "predicate_element_list",
        "predicateId": "F82721C949B74F4BAC76070E8F8970A4",
        "predicateTree": {
          "attribute": {
            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Customer Region"
          },
          "elements": [
            {
              "display": "Northwest",
              "elementId": "h6"
            }
          ],
          "function": "in"
        }
      }
    }
  },
  "datamartOptions": {
    "append": false,
    "targetSource": {
      "objectId": "05AC49F849389A20A6C9C19A3105A69B",
      "subType": "db_role",
      "name": "Statistics"
    },
    "tableName": "!p_demo",
    "placeholderIncluded": false,
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

Response Code: 200 (The datamart definition is updated successfully.)

## Update a datamart’s advanced properties

This workflow sample demonstrates how to retrieve the definition of a datamart with advanced properties through the Modeling service.

This workflow is the same as Update the datamart using [PUT /api/model/datamarts/{datamartId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/put_api_model_datamarts__datamartId_)

If `showAdvancedProperties` is omitted or false, the advanced properties are not returned.

If `showAdvancedProperties` is true, the advanced properties are returned.

You put the modified AdvancedProperties in the request body.

Sample Request Body:

```json
{
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
curl -X 'PUT' \
  'http://10.23.38.199:8080/MicroStrategyLibrary/api/model/datamarts/D9DD010946CAFA3B1E2F6684F2D940B1?showAdvancedProperties=true' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: a513l5d5dmoi3q73ebdif6bm8n' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
  -H 'Content-Type: application/json' \
  -d '{
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

Sample Response Body: You can view the updated datamart's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-09-08T09:23:38.000Z",
    "dateModified": "2022-09-09T04:15:44.093Z",
    "versionId": "C64B140C467EF65AD3CA5F9E321CE0C3",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "D9DD010946CAFA3B1E2F6684F2D940B1",
    "subType": "report_datamart",
    "name": "datamart",
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3B11D3E4981000E787EC6DE8A4",
          "name": "Customer Region",
          "type": "attribute"
        },
        {
          "id": "8D679D3C11D3E4981000E787EC6DE8A4",
          "name": "Customer",
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
              "id": "4C051DB611D3E877C000B3B2D86C964F",
              "name": "Profit",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {
      "text": "{Customer Region} = Northwest",
      "tree": {
        "type": "predicate_element_list",
        "predicateId": "4CD5247CE99A4174A84909AAAF944CA7",
        "predicateTree": {
          "attribute": {
            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Customer Region"
          },
          "elements": [
            {
              "display": "Northwest",
              "elementId": "h6"
            }
          ],
          "function": "in"
        }
      }
    }
  },
  "datamartOptions": {
    "append": false,
    "targetSource": {
      "objectId": "05AC49F849389A20A6C9C19A3105A69B",
      "subType": "db_role",
      "name": "Statistics"
    },
    "tableName": "!p_demo",
    "placeholderIncluded": false,
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
      "7FD5B69611D5AC76C000D98A4CC5F24F": {
        "metric": {
          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
          "subType": "metric",
          "name": "Cost"
        },
        "joinType": "inner",
        "resolvedLocation": "default"
      },
      "4C051DB611D3E877C000B3B2D86C964F": {
        "metric": {
          "objectId": "4C051DB611D3E877C000B3B2D86C964F",
          "subType": "metric",
          "name": "Profit"
        },
        "joinType": "inner",
        "resolvedLocation": "default"
      }
    },
    "attributeJoinTypes": {
      "8D679D3B11D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Customer Region"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      },
      "8D679D3C11D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Customer"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      }
    },
    "drillOptions": {
      "drillingEnableReportDrilling": {
        "value": true,
        "resolvedLocation": "default"
      },
      "useDefaultEvaluationOrder": true
    }
  }
}
```

Response Code: 200 (The datamart definition is updated successfully.)

The model for the definition of a datamart can be updated with the following fields:

:::info

`subType` cannot be modified through REST API.

:::

- `information`
  - `description` (`String`) - The description that helps user to understand the definition
- `dataSource`
  - `dataTemplate` - The data template of the datamart.
  - `filter` - The filter definition of the datamart.
  - `table` - The table is only required and used when the `sourceType` is "custom_sql_free_form".
- `datamartOptions`
  - `append` (`Boolean`) - This flag indicate whether to create a new table or append to the existing table every time report runs.
  - `targetSource` - The database instance where the table will be placed in.
  - `tableName` (`String`) - The name of the inserted table.
  - `placeholderIncluded` (`Boolean`) - The placeholders we support on table name. The details can be referred [here](https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm).
  - `datamartProperties` - The datamart properties that are used to configure the table in warehouse.
- `timezone`
  - `objectId` (`String`) - The timezone ID applied on the datamart.
  - `name` (`String`) - The name of timezone object.
  - `subType` (`String`) - The sub type of timezone. The available values are "timezone_custom" and "timezone_system".
- `advancedProperties`
  - `vldbProperties` - The VLDB Properties that are applicable to datamart and their values.
  - `metricJoinType` - The metric join type that are applicable to datamart and their values.
  - `attributeJoinType` - The attribute join type that are applicable to datamart and their values.
  - `useDefaultEvaluationOrder` (`Boolean`) - This flag indicates whether to use the default evaluation order for datamart.
