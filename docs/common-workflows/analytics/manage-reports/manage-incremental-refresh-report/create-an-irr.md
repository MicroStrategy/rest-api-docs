---
title: "Sample workflow: Create an incremental refresh report"
sidebar_label: Create an IRR
description: This workflow sample demonstrates how to create a new Incremental Refresh Report object through the Modeling service.
---

<Available since="2021 Update 6" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-54f5b582-05ac-4f2d-88f9-98f36dd8373c?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new Incremental Refresh Report object through the Modeling service.

You want to create a new Incremental Refresh Report as defined in the below screenshot and name it `“YearInList_Insert` in the destination folder of `31727EF14E35DAA437B716BA56466585`. The target cube of the Incremental Refresh Report is called `Year_Country_Category_3` with the object ID of `F71F4C0E4B8F73B143B0DD83EEB47F43`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

![IRR Report Editor 2](../../../../images/irr_report_editor2.png)

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a new incremental refresh report using [POST /api/model/incrementalRefresh](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createIncrementalRefreshReport)

To create the new Incremental Refresh Report, you must submit the request body with the correct information.

In `information`, you must provide the `name`, `subtype`, and `destinationFolderID` for the Incremental Refresh Report you want to create. In `targetCube`, you must provide the information for the base cube that the Incremental Refresh Report is built on.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "DD7E4D4346866BFBBFA5078DACD21A36",
    "subType": "report_increment_refresh",
    "name": "YearInList_Insert"
  },
  "targetCube": {
    "objectId": "F71F4C0E4B8F73B143B0DD83EEB47F43",
    "subType": "report_cube"
  },
  "incrementType": "filter",
  "refreshType": "insert",
  "filter": {
    "text": "Year <> 2014, 2015",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "3CFB65D310F44BF0ADDB37E5F5005CF9",
      "predicateTree": {
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "elements": [
          {
            "display": "2014",
            "elementId": "h2014"
          },
          {
            "display": "2015",
            "elementId": "h2015"
          }
        ],
        "function": "not_in"
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X POST "http://10.23.33.151:8080/MicroStrategyLibrary/api/model/incrementalRefresh" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: 7frmogrqns31jsc9l5gvd6qj6f" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
-H "Content-Type: application/json" \
-d '{"information":{"destinationFolderId":"DD7E4D4346866BFBBFA5078DACD21A36","subType":"report_increment_refresh","name":"YearInList_Insert"},"targetCube":{"objectId":"F71F4C0E4B8F73B143B0DD83EEB47F43","subType":"report_cube"},"incrementType":"filter","refreshType":"insert","filter":{"text":"Year <> 2014, 2015","tree":{"type":"predicate_element_list","predicateId":"3CFB65D310F44BF0ADDB37E5F5005CF9","predicateTree":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"elements":[{"display":"2014","elementId":"h2014"},{"display":"2015","elementId":"h2015"}],"function":"not_in"}}}}'
```

Sample Response Body:

You can view the new Incremental Refresh Report definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-05-27T08:05:11.098Z",
    "dateModified": "2022-05-27T08:05:11.098Z",
    "versionId": "63B0740B4174A00676908F9BBAC1471A",
    "primaryLocale": "en-US",
    "objectId": "9597ED4646F66780A6AA059CE1159D7F",
    "subType": "report_increment_refresh",
    "name": "YearInList_Insert"
  },
  "targetCube": {
    "objectId": "F71F4C0E4B8F73B143B0DD83EEB47F43",
    "subType": "report_cube",
    "name": "IC01_Year+Country+Category+3Metrics"
  },
  "incrementType": "filter",
  "refreshType": "insert",
  "filter": {
    "text": "Year <> 2014, 2015",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "BC02C58528CA46338014CA9BDD5F780A",
      "predicateTree": {
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "elements": [
          {
            "display": "2014",
            "elementId": "h2014"
          },
          {
            "display": "2015",
            "elementId": "h2015"
          }
        ],
        "function": "not_in"
      }
    }
  }
}
```

Response Code: 201 (An Incremental Refresh Report is created successfully.)

## Create a new FFSQL incremental refresh report using [POST /api/model/incrementalRefresh](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createIncrementalRefreshReport)

To create a new FFSQL Incremental Refresh Report, you must submit the request body with the correct information.

In `information`, you must provide the `name`, `subtype`, and `destinationFolderID` for the Incremental Refresh Report you want to create. In `targetCube`, you must provide the information for the base FFSQL cube that the Incremental Refresh Report is built on. You may also provide `table` and `template` information. Attributes and metrics on the template should be the same as the `table`. `filter` is not applicable for FFSQL Incremental Refresh Report.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "report_increment_refresh",
    "name": "ffsql_irr_06"
  },
  "targetCube": {
    "objectId": "1B1CD04E4494F4FD9711FC8E162FE574",
    "subType": "report_cube",
    "name": "ffsql"
  },
  "incrementType": "report",
  "refreshType": "update",
  "table": {
    "physicalTable": {
      "columns": [
        {
          "name": "aaa",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "name": "bbb",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "name": "ccc",
          "dataType": {
            "type": "double",
            "precision": 18,
            "scale": 0
          }
        }
      ],
      "sqlExpression": {
        "tree": {
          "function": "concat_no_blank",
          "children": [
            {
              "type": "constant",
              "variant": {
                "type": "string",
                "value": "SELECT cust_city_id, call_ctr_id, tot_cost FROM tutorial.city_ctr_sls WHERE gross_dollar_sales > 0;"
              }
            }
          ],
          "type": "operator"
        }
      }
    },
    "attributes": [
      {
        "name": "my_cust_city",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "name": "ccc"
              }
            }
          }
        ]
      },
      {
        "name": "my_call_ctr",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "name": "bbb"
              }
            }
          }
        ]
      }
    ],
    "metrics": [
      {
        "name": "my_tot_cost",
        "dataType": {
          "type": "numeric",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "name": "aaa"
          }
        }
      }
    ],
    "dataSource": {
      "objectId": "A528E3A1436D9C08318735BC915FCF13",
      "subType": "db_role_import",
      "name": "tutorial_wh"
    }
  }
}
```

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/incrementalRefresh' \
--header 'X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=F7A455DE2F7CB7F1F8C7D377B7CFBE1D; iSession=56l4jqkr73dlj7o27n5uvlbd5b' \
--data '{
  "information": {
    "subType": "report_increment_refresh",
    "name": "ffsql_irr_06",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "targetCube": {
    "objectId": "1B1CD04E4494F4FD9711FC8E162FE574",
    "subType": "report_cube",
    "name": "ffsql"
  },
  "incrementType": "report",
  "refreshType": "update",
  "table": {
    "physicalTable": {
      "columns": [
        {
          "name": "aaa",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "name": "bbb",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "name": "ccc",
          "dataType": {
            "type": "double",
            "precision": 18,
            "scale": 0
          }
        }
      ],
      "sqlExpression": {
        "tree": {
          "function": "concat_no_blank",
          "children": [
            {
              "type": "constant",
              "variant": {
                "type": "string",
                "value": "SELECT cust_city_id, call_ctr_id, tot_cost FROM tutorial.city_ctr_sls WHERE gross_dollar_sales > 0;"
              }
            }
          ],
          "type": "operator"
        }
      }
    },
    "attributes": [
      {
        "name": "my_cust_city",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "name": "ccc"
              }
            }
          }
        ]
      },
      {
        "name": "my_call_ctr",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "name": "bbb"
              }
            }
          }
        ]
      }
    ],
    "metrics": [
      {
        "name": "my_tot_cost",
        "dataType": {
          "type": "numeric",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "name": "aaa"
          }
        }
      }
    ],
    "dataSource": {
      "objectId": "A528E3A1436D9C08318735BC915FCF13",
      "subType": "db_role_import",
      "name": "tutorial_wh"
    }
  }
}'
```

Sample Response Body:

You can view the new Incremental Refresh Report definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2024-01-24T07:54:29.220Z",
    "dateModified": "2024-01-24T07:54:29.220Z",
    "versionId": "B2952C4248A99A4346B8CBBC4B2D4A71",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "68FE304442768565D587EFA6C7F96DDA",
    "subType": "report_increment_refresh",
    "name": "ffsql_irr_06"
  },
  "targetCube": {
    "objectId": "1B1CD04E4494F4FD9711FC8E162FE574",
    "subType": "report_cube",
    "name": "ffsql_cube"
  },
  "incrementType": "report",
  "refreshType": "update",
  "template": {
    "rows": [
      {
        "id": "15FDC75E15FC48CFA0EE53D5E4F36742",
        "name": "my_cust_city",
        "type": "attribute",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID"
          }
        ]
      },
      {
        "id": "0D7A725ACF3B41F8B6ACF0FFB5D29376",
        "name": "my_call_ctr",
        "type": "attribute",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID"
          }
        ]
      }
    ],
    "columns": [
      {
        "type": "metrics",
        "elements": [
          {
            "id": "59E6325B33BB4A5FAD057A8EB99A7CDB",
            "name": "my_tot_cost",
            "subType": "metric"
          }
        ]
      }
    ],
    "pageBy": []
  },
  "table": {
    "physicalTable": {
      "columns": [
        {
          "id": "A30930BF8DB541F49384E3F9E40ACEC0",
          "name": "aaa",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "id": "C85295213D7D43B5A6067BA4B14E3BE2",
          "name": "bbb",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "id": "635EFD0ED49A4260880FB357812A24DB",
          "name": "ccc",
          "dataType": {
            "type": "double",
            "precision": 18,
            "scale": 0
          }
        }
      ],
      "sqlExpression": {
        "tree": {
          "function": "concat_no_blank",
          "children": [
            {
              "type": "constant",
              "variant": {
                "type": "string",
                "value": "SELECT cust_city_id, call_ctr_id, tot_cost FROM tutorial.city_ctr_sls WHERE gross_dollar_sales > 0;"
              }
            }
          ],
          "type": "operator"
        }
      }
    },
    "attributes": [
      {
        "id": "15FDC75E15FC48CFA0EE53D5E4F36742",
        "name": "my_cust_city",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "635EFD0ED49A4260880FB357812A24DB",
                "name": "ccc"
              }
            }
          }
        ]
      },
      {
        "id": "0D7A725ACF3B41F8B6ACF0FFB5D29376",
        "name": "my_call_ctr",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "C85295213D7D43B5A6067BA4B14E3BE2",
                "name": "bbb"
              }
            }
          }
        ]
      }
    ],
    "metrics": [
      {
        "id": "59E6325B33BB4A5FAD057A8EB99A7CDB",
        "name": "my_tot_cost",
        "dataType": {
          "type": "numeric",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "A30930BF8DB541F49384E3F9E40ACEC0",
            "name": "aaa"
          }
        }
      }
    ],
    "dataSource": {
      "objectId": "A528E3A1436D9C08318735BC915FCF13",
      "subType": "db_role_import",
      "name": "tutorial_wh"
    }
  }
}
```

Response Code: 201 (An Incremental Refresh Report is created successfully.)

## The model for the definition of the incremental refresh report

The model for the definition of the Incremental Refresh Report can be represented with the following fields.

:::info

`objectID`, `dateCreated`, `dateModified`, and `versionId` are generated automatically. As of MicroStrategy 2021 Update 6, only `en-US` is available for `primaryLocale`.

:::

- (Required) `information`
  - (Required) `name` (`String`) - Name of the IRR. This is the most user-friendly value that can be used to identify the IRR.
  - (Required) `subtype` (`String`) - For IRR, `subType` is `report_increment_refresh`.
  - (Required) `destinationFolderId` (`String`) - Folder ID where the new IRR is saved.
- (Required) `targetCube`
  - (Required) `objectID` (`String`) - The object ID of the target cube that the IRR is built on.
  - (Required) `subtype` (`String`) - The `subtype` of the target cube must be `report_cube`.
  - `name` (`String`) - The name of the target cube.
- `incrementType` (`String`) - The incremental type for IRR, which can only be a filter and report.
- `refreshType` (`String`) - The refresh type for IRR, which can only be `update`, `insert`, `delete`, `update_only`, and `replace`.
- `filter` (Not applicable when the target cube is a FFSQL cube)
  - `text` (`String`) - The text of the filter name.
  - `tree` (`ExpressionNode`) - A tree data structure fully defining the filter.
  - `tokens` (`List<ExpressionToken>`) - A list of parsed tokens for the filter.
- `template`
  - `rows` (`List<Objects>`) - A list of objects on the row of IRR template.
  - `columns` (`List<Objects>`) - A list of objects on the column of IRR template.
  - `pageby` (`List<Objects>`) - A list of objects on the pageby of IRR template.
- `table` (Only applicable when the target cube is a FFSQL cube)
  - `physicalTable` (`Object`) - The physical table containing the columns information and FFSQL expression.
  - `attributes` (`List<Objects>`) - The list of attributes of the table.
  - `metrics` (`List<Objects>`) - The list of metrics of the table.
  - `dataSource` (`ObjectInfoRefrence`) - The data source of the table.
