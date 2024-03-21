---
title: Update the incremental refresh report definition
sidebar_label: Update an IRR definition
description: This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service.
---

<Available since="2021 Update 6" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-54f5b582-05ac-4f2d-88f9-98f36dd8373c?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service.

You want to update the definition of the `YearInList_Insert` Incremental Refresh Report with the changes listed below. The object ID is `5A7282CC41E6C9B5DE2772A16B073B21`.

- Modify the destination folder to another one.
- Change the target cube to another one.
- Modify the element list of the filter.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Update the incremental refresh report using [PUT /api/model/incrementalRefresh/\{incrementalRefreshReportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-putIncrementalRefreshReport)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "name": "YearInList_Insert"
  },
  "targetCube": {
    "objectId": "1154C0014435FB4E3C69ABA7BDC8E8D8",
    "subType": "report_cube",
    "name": "IC02_Year+Country+Category+3Metrics"
  },
  "filter": {
    "text": "Year <> 2014",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "DFADE548DBD144079C2F3AFE7CDE3AE1",
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
          }
        ],
        "function": "not_in"
      }
    },
    "tokens": [
      {
        "level": "resolved",
        "state": "initial",
        "value": "%",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "Year",
        "type": "object_reference",
        "target": {
          "dateCreated": "2001-01-02T20:48:10.000Z",
          "dateModified": "2022-05-09T09:37:11.000Z",
          "versionId": "05BB3D284698B0542866C6A5DBA355BC",
          "primaryLocale": "en-US",
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "[Not In]",
        "type": "function",
        "target": {
          "dateCreated": "1900-01-01T00:00:00.000Z",
          "dateModified": "2021-02-26T03:18:34.000Z",
          "versionId": "A3808F5B4E6620E24102E48D99550BB2",
          "primaryLocale": "en-US",
          "objectId": "8107C348DD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": "Not In",
          "description": "Returns TRUE if Arg1 is not in Arg2."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "{Year=2014}",
        "type": "elements"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "",
        "type": "end_of_text"
      }
    ]
  }
}
```

Sample Curl:

```bash
curl -X PUT "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh/5A7282CC41E6C9B5DE2772A16B073B21" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: k2o767js136lqdr8fm6j6kbm9o" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -\
H "Content-Type: application/json" \
-d '{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","name":"YearInList_Insert_test"},"targetCube":{"objectId":"1154C0014435FB4E3C69ABA7BDC8E8D8","subType":"report_cube","name":"Copy of IC01_Year+Country+Category+3Metrics"},"filter":{"text":"Year <> 2014","tree":{"type":"predicate_element_list","predicateId":"DFADE548DBD144079C2F3AFE7CDE3AE1","predicateTree":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"elements":[{"display":"2014","elementId":"h2014"}],"function":"not_in"}},"tokens":[{"level":"resolved","state":"initial","value":"%","type":"character"},{"level":"resolved","state":"initial","value":"Year","type":"object_reference","target":{"dateCreated":"2001-01-02T20:48:10.000Z","dateModified":"2022-05-09T09:37:11.000Z","versionId":"05BB3D284698B0542866C6A5DBA355BC","primaryLocale":"en-US","objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"}},{"level":"resolved","state":"initial","value":"[Not In]","type":"function","target":{"dateCreated":"1900-01-01T00:00:00.000Z","dateModified":"2021-02-26T03:18:34.000Z","versionId":"A3808F5B4E6620E24102E48D99550BB2","primaryLocale":"en-US","objectId":"8107C348DD9911D3B98100C04F2233EA","subType":"function","name":"Not In","description":"Returns TRUE if Arg1 is not in Arg2."}},{"level":"resolved","state":"initial","value":"{Year=2014}","type":"elements"},{"level":"resolved","state":"initial","value":"","type":"end_of_text"}]}}'
```

Sample Response Body:

You can view the updated Incremental Refresh Report definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-06-08T07:41:37.939Z",
    "dateModified": "2022-06-08T08:12:30.611Z",
    "versionId": "50C2A0804F78CA721EA8A7B408C36FEA",
    "primaryLocale": "en-US",
    "objectId": "5A7282CC41E6C9B5DE2772A16B073B21",
    "subType": "report_increment_refresh",
    "name": "YearInList_Insert_test",
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"
  },
  "targetCube": {
    "objectId": "1154C0014435FB4E3C69ABA7BDC8E8D8",
    "subType": "report_cube",
    "name": "Copy of IC01_Year+Country+Category+3Metrics"
  },
  "incrementType": "filter",
  "refreshType": "insert",
  "filter": {
    "text": "Year <> 2014",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "99D9C22039A54FA787791A297AB4B534",
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
          }
        ],
        "function": "not_in"
      }
    }
  }
}
```

Response Code: 200 (The incremental refresh report's definition is updated successfully.)

The model for the definition of the Incremental Refresh Report can be represented with the following fields.

:::info

`subType` cannot be modified through REST API.

:::

- `information`
  - `name` (`String`) - Name of the IRR. This is the most user-friendly value that can be used to identify the IRR.
  - `destinationFolderId` (`String`) - Folder ID where the new IRR is saved.
- `targetCube`
  - `objectID` (`String`) - The object ID of the target cube that the IRR is built on.
  - `name` (`String`) - The name of the target cube.
- `incrementType` (`String`) - The incremental type for IRR, which can only be a filter and report.
- `refreshType` (`String`) - The refresh type for IRR, which can only be `update`, `insert`, `delete`, `update_only`, and `replace`.
- `filter`
  - `text` (`String`) - The text of the filter name.
  - `tree` (`ExpressionNode`) - A tree data structure fully defining the filter.
  - `tokens` (`List<ExpressionToken>`) - A list of parsed tokens for the filter.
- `template`
  - `rows` (`List<Objects>`) - A list of objects on the row of IRR template.
  - `columns` (`List<Objects>`) - A list of objects on the column of IRR template.
  - `pageby` (`List<Objects>`) - A list of objects on the pageby of IRR template.

## Update the FFSQL incremental refresh report using [PUT /api/model/incrementalRefresh/\{incrementalRefreshReportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-putIncrementalRefreshReport)

For FFSQL incremental refresh report, we can also update the `table` field.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "56l4jqkr73dlj7o27n5uvlbd5b"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
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
curl --location --request PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/incrementalRefresh/CFF589424FD33336512FFD88AE541A93' \
--header 'X-MSTR-AuthToken: 56l4jqkr73dlj7o27n5uvlbd5b' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=F7A455DE2F7CB7F1F8C7D377B7CFBE1D; iSession=56l4jqkr73dlj7o27n5uvlbd5b' \
--data '{
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

You can view the updated FFSQL Incremental Refresh Report definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2024-01-24T08:02:33.015Z",
    "dateModified": "2024-01-24T08:03:33.686Z",
    "versionId": "D6FBFBFA40DC124A4445D5A3147C1505",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "CFF589424FD33336512FFD88AE541A93",
    "subType": "report_increment_refresh",
    "name": "ffsql_irr_test"
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
        "id": "83CE3EF5F7834DA39B2E7CC38A60A2BF",
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
        "id": "BC99738E1DEA43C384E89D836905BE03",
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
            "id": "AD9D7EC2F3ED47ACB08587AF3B1C114E",
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
          "id": "2F386866162B4E2D84457B164EFE18C5",
          "name": "aaa",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "id": "0E7ACDA79FC94A208C0CD94ED1821D3B",
          "name": "bbb",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "id": "3E8E344EC3944D1C87A8B3535250E134",
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
        "id": "83CE3EF5F7834DA39B2E7CC38A60A2BF",
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
                "objectId": "3E8E344EC3944D1C87A8B3535250E134",
                "name": "ccc"
              }
            }
          }
        ]
      },
      {
        "id": "BC99738E1DEA43C384E89D836905BE03",
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
                "objectId": "0E7ACDA79FC94A208C0CD94ED1821D3B",
                "name": "bbb"
              }
            }
          }
        ]
      }
    ],
    "metrics": [
      {
        "id": "AD9D7EC2F3ED47ACB08587AF3B1C114E",
        "name": "my_tot_cost",
        "dataType": {
          "type": "numeric",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "2F386866162B4E2D84457B164EFE18C5",
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

Response Code: 200 (The incremental refresh report's definition is updated successfully.)

The model for the definition of the Incremental Refresh Report can be represented with the following fields.

:::info

`subType` cannot be modified through REST API.

:::

- `information`
  - `name` (`String`) - Name of the IRR. This is the most user-friendly value that can be used to identify the IRR.
  - `destinationFolderId` (`String`) - Folder ID where the new IRR is saved.
- `targetCube`
  - `objectID` (`String`) - The object ID of the target cube that the IRR is built on.
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
