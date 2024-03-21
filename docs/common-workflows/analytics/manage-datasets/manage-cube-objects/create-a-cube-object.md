---
title: Create a cube object and publish it
sidebar_label: Create a cube object
description: This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ef6003b3-abe9-40ee-abf7-ff72de088f22?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server.

You want to create a new `Year, Category Analysis` cube object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a cube object

### Create a cube object using [POST /api/model/cubes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createCube)

<Available since="2021 Update 5" />

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "report_cube",
    "name": "Year, Category Analysis",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "template": {
    "rows": [
      {
        "id": "8D679D5111D3E4981000E787EC6DE8A4",
        "name": "Year",
        "type": "attribute"
      },
      {
        "id": "8D679D3711D3E4981000E787EC6DE8A4",
        "name": "Category",
        "type": "attribute"
      }
    ],
    "columns": [
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
    ],
    "pageBy": []
  },
  "filter": {
    "text": "(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)",
    "tree": {
      "function": "and",
      "children": [
        {
          "type": "predicate_element_list",
          "predicateId": "34BD0D556AC6423CB8061BB90A0C1AB2",
          "predicateTree": {
            "attribute": {
              "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",
              "subType": "attribute",
              "name": "Subcategory"
            },
            "elements": [
              {
                "display": "Art & Architecture",
                "elementId": "h11"
              },
              {
                "display": "Business",
                "elementId": "h12"
              },
              {
                "display": "Computers",
                "elementId": "h23"
              },
              {
                "display": "Electronics - Miscellaneous",
                "elementId": "h24"
              }
            ],
            "function": "in"
          }
        },
        {
          "type": "predicate_metric_qualification",
          "predicateId": "EF616BAECDED4AE0A91C6A4A5092ED92",
          "predicateText": "(Revenue > 100000)",
          "predicateTree": {
            "function": "greater",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "100000.0"
                }
              }
            ],
            "levelType": "none",
            "metric": {
              "objectId": "4C05177011D3E877C000B3B2D86C964F",
              "subType": "metric",
              "name": "Revenue"
            },
            "metricFunction": "value",
            "isIndependent": 0,
            "nullInclude": 0
          }
        }
      ],
      "type": "operator"
    }
  },
  "options": {
    "dataLanguages": {
      "dataLanguageType": "project_default"
    },
    "dataRefresh": "replace",
    "dataPartition": {
      "partitionAttribute": {},
      "numberOfPartitions": 0,
      "fetchDataSlicesInParallel": false
    }
  }
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
-H "Content-Type: application/json" \
-d '{"information":{"subType":"report_cube","name":"Year, Category Analysis2","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"template":{"rows":[{"id":"8D679D5111D3E4981000E787EC6DE8A4","name":"Year","type":"attribute"},{"id":"8D679D3711D3E4981000E787EC6DE8A4","name":"Category","type":"attribute"}],"columns":[{"type":"metrics","elements":[{"id":"7FD5B69611D5AC76C000D98A4CC5F24F","name":"Cost","subType":"metric"},{"id":"4C051DB611D3E877C000B3B2D86C964F","name":"Profit","subType":"metric"}]}],"pageBy":[]},"filter":{"text":"(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)","tree":{"function":"and","children":[{"type":"predicate_element_list","predicateId":"34BD0D556AC6423CB8061BB90A0C1AB2","predicateTree":{"attribute":{"objectId":"8D679D4F11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Subcategory"},"elements":[{"display":"Art & Architecture","elementId":"h11"},{"display":"Business","elementId":"h12"},{"display":"Computers","elementId":"h23"},{"display":"Electronics - Miscellaneous","elementId":"h24"}],"function":"in"}},{"type":"predicate_metric_qualification","predicateId":"EF616BAECDED4AE0A91C6A4A5092ED92","predicateText":"(Revenue > 100000)","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"100000.0"}}],"levelType":"none","metric":{"objectId":"4C05177011D3E877C000B3B2D86C964F","subType":"metric","name":"Revenue"},"metricFunction":"value","isIndependent":0,"nullInclude":0}}],"type":"operator"}},"options":{"dataLanguages":{"dataLanguageType":"project_default"},"dataRefresh":"replace","dataPartition":{"partitionAttribute":{},"numberOfPartitions":0,"fetchDataSlicesInParallel":false}}}'
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2022-03-18T20:52:06.593Z",
    "dateModified": "2022-03-18T20:52:06.593Z",
    "versionId": "F77DA8EB194CD4784D38A684CAD2F852",
    "primaryLocale": "en-US",
    "objectId": "2F15C95D934175CBC9B915915D485B0E",
    "subType": "report_cube",
    "name": "Year, Category Analysis2"
  },
  "template": {
    "rows": [
      {
        "id": "8D679D5111D3E4981000E787EC6DE8A4",
        "name": "Year",
        "type": "attribute"
      },
      {
        "id": "8D679D3711D3E4981000E787EC6DE8A4",
        "name": "Category",
        "type": "attribute"
      }
    ],
    "columns": [
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
    ],
    "pageBy": []
  },
  "filter": {
    "text": "(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)",
    "tree": {
      "function": "and",
      "children": [
        {
          "type": "predicate_element_list",
          "predicateId": "973167FF74AD4B42ABB86382A8397655",
          "predicateTree": {
            "attribute": {
              "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",
              "subType": "attribute",
              "name": "Subcategory"
            },
            "elements": [
              {
                "display": "Art & Architecture",
                "elementId": "h11"
              },
              {
                "display": "Business",
                "elementId": "h12"
              },
              {
                "display": "Computers",
                "elementId": "h23"
              },
              {
                "display": "Electronics - Miscellaneous",
                "elementId": "h24"
              }
            ],
            "function": "in"
          }
        },
        {
          "type": "predicate_metric_qualification",
          "predicateId": "BAB9A5D62B7A4A9692041F2451EBD1E3",
          "predicateText": "(Revenue > 100000)",
          "predicateTree": {
            "function": "greater",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "100000.0"
                }
              }
            ],
            "levelType": "none",
            "metric": {
              "objectId": "4C05177011D3E877C000B3B2D86C964F",
              "subType": "metric",
              "name": "Revenue"
            },
            "metricFunction": "value",
            "isIndependent": 0,
            "nullInclude": 0
          }
        }
      ],
      "type": "operator"
    }
  },
  "options": {
    "dataLanguages": {
      "dataLanguageType": "project_default"
    },
    "dataRefresh": "replace",
    "dataPartition": {
      "partitionAttribute": {},
      "numberOfPartitions": 0,
      "fetchDataSlicesInParallel": false
    }
  }
}
```

Sample Response Code: 201 (A cube is created successfully.)

### Create a cube object using [POST /api/model/cubes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createCube) using `showAdvancedProperties=true`

<Available since="2021 Update 6" />

You want to create a new `Actual vs Forecast Performance Cube` cube object under the `Public Objects` folder in the `MicroStrategy Tutorial` project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

Sample Curl:

```bash
curl -X POST "http://10.23.33.10:8080/MicroStrategyLibrary/api/model/cubes?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: ll16k38bt7e6i9f0pb2p7mcs85" \
-H "X-MSTR-ProjectID: 6F2026DB4172DC4B219ADC914FF944BB" \
-H "Content-Type: application/json" \
-d '{"information":{"subType":"report_cube","name":"Actual vs Forecast Performance Cube","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"template":{},"filter":{},"options":{"dataLanguages":{"dataLanguageType":"all_project_data_language"},"dataRefresh":"replace","dataPartition":{"partitionAttribute":{},"numberOfPartitions":0,"fetchDataSlicesInParallel":false}},"advancedProperties":{"vldbProperties":{"[AnalyticalEngineProperties].[EvaluationOrdering]":{"name":"EvaluationOrdering","value":"1","type":"int32","resolvedLocation":"default"},"[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]":{"name":"NullCheckingForAnalyticalEngine","value":"1","type":"int32","resolvedLocation":"default"}},"metricJoinTypes":{"4C051DB611D3E877C000B3B2D86C964F":{"metric":{"objectId":"4C051DB611D3E877C000B3B2D86C964F","subType":"metric","name":"Profit"},"joinType":"inner","resolvedLocation":"default"},"4C05177011D3E877C000B3B2D86C964F":{"metric":{"objectId":"4C05177011D3E877C000B3B2D86C964F","subType":"metric","name":"Revenue"},"joinType":"inner","resolvedLocation":"default"},"8D7D59C144AB891C57FEFA873ABE1C92":{"metric":{"objectId":"8D7D59C144AB891C57FEFA873ABE1C92","subType":"metric","name":"Revenue Forecast"},"joinType":"inner","resolvedLocation":"default"},"1FAF96994873E7CEFC71BDB269522636":{"metric":{"objectId":"1FAF96994873E7CEFC71BDB269522636","subType":"metric","name":"Profit Forecast"},"joinType":"inner","resolvedLocation":"default"},"381980B211D40BC8C000C8906B98494F":{"metric":{"objectId":"381980B211D40BC8C000C8906B98494F","subType":"metric","name":"Discount"},"joinType":"inner","resolvedLocation":"default"},"2680DF9E11D5C3FEC0000B881FDA1A4F":{"metric":{"objectId":"2680DF9E11D5C3FEC0000B881FDA1A4F","subType":"metric","name":"Profit Margin"},"joinType":"inner","resolvedLocation":"default"},"89219DD247681F5E87BDE69E4C6E871E":{"metric":{"objectId":"89219DD247681F5E87BDE69E4C6E871E","subType":"metric","name":"Discount Growth"},"joinType":"inner","resolvedLocation":"default"}},"attributeJoinTypes":{"8D679D4411D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D4411D3E4981000E787EC6DE8A4","subType":"attribute","name":"Month"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D5111D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D3511D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D3511D3E4981000E787EC6DE8A4","subType":"attribute","name":"Call Center"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D4B11D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D4B11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Region"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D3711D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D3711D3E4981000E787EC6DE8A4","subType":"attribute","name":"Category"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D4F11D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D4F11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Subcategory"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"}}}}'
```

Sample Request Body:

```json
{
  "information": {
    "subType": "report_cube",
    "name": "Actual vs Forecast Performance Cube",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "template": {},
  "filter": {},
  "options": {
    "dataLanguages": {
      "dataLanguageType": "all_project_data_language"
    },
    "dataRefresh": "replace",
    "dataPartition": {
      "partitionAttribute": {},
      "numberOfPartitions": 0,
      "fetchDataSlicesInParallel": false
    }
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[EvaluationOrdering]": {
        "name": "EvaluationOrdering",
        "value": "1",
        "type": "int32",
        "resolvedLocation": "default"
      },
      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {
        "name": "NullCheckingForAnalyticalEngine",
        "value": "1",
        "type": "int32",
        "resolvedLocation": "default"
      }
    },
    "metricJoinTypes": {
      "4C051DB611D3E877C000B3B2D86C964F": {
        "metric": {
          "objectId": "4C051DB611D3E877C000B3B2D86C964F",
          "subType": "metric",
          "name": "Profit"
        },
        "joinType": "inner",
        "resolvedLocation": "default"
      },
      "4C05177011D3E877C000B3B2D86C964F": {
        "metric": {
          "objectId": "4C05177011D3E877C000B3B2D86C964F",
          "subType": "metric",
          "name": "Revenue"
        },
        "joinType": "inner",
        "resolvedLocation": "default"
      }
    },
    "attributeJoinTypes": {
      "8D679D4411D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D4411D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Month"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      },
      "8D679D5111D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      }
    }
  }
}
```

Sample Response:

```json
{
  "information": {
    "dateCreated": "2022-06-15T10:44:23.465Z",
    "dateModified": "2022-06-15T10:44:23.465Z",
    "versionId": "CE4F514D41AA77B5A6C883BCA4F688E2",
    "primaryLocale": "en-US",
    "objectId": "3A5363B04D61B77515B3D48D53671CEC",
    "subType": "report_cube",
    "name": "Actual vs Forecast Performance Cube"
  },
  "template": {
    "rows": [],
    "columns": [],
    "pageBy": []
  },
  "filter": {},
  "options": {
    "dataLanguages": {
      "dataLanguageType": "all_project_data_language"
    },
    "dataRefresh": "replace",
    "dataPartition": {
      "partitionAttribute": {},
      "numberOfPartitions": 0,
      "fetchDataSlicesInParallel": false
    }
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[EvaluationOrdering]": {
        "name": "EvaluationOrdering",
        "value": "1",
        "type": "int32",
        "resolvedLocation": "report"
      },
      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {
        "name": "NullCheckingForAnalyticalEngine",
        "value": "1",
        "type": "int32",
        "resolvedLocation": "report"
      }
    }
  }
}
```

Sample Response Code: 201 (A cube is created successfully.)

### Create a FFSQL cube object using [POST /api/model/cubes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createCube)

We also support creating a FFSQL cube, which is a cube that is based on a custom SQL query, and map the columns to attributes and metrics. Compared to normal cubes, `filter` field is not applicable, and we have an extra `table` field. The attributes and metrics on the table should be put on the cube template. If we don't provide the template in the request body, the will be generated automatically based on the table.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4jegqhpiulqarq0js6b0gt9lon"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "information": {
    "name": "Year, Category Analysis",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "sourceType": "custom_sql_free_form",
  "table": {
    "physicalTable": {
      "columns": [
        {
          "name": "ffsqlIdV1",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "name": "ffsqlNameV1",
          "dataType": {
            "type": "fixed_length_string",
            "precision": 255,
            "scale": 0
          }
        },
        {
          "name": "ffsqlAgeV1",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "name": "ffsqlScoreV1",
          "dataType": {
            "type": "integer",
            "precision": 4,
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
                "value": "SELECT id, name, age, score FROM hackathon.mytest;"
              }
            }
          ],
          "type": "operator"
        }
      }
    },
    "attributes": [
      {
        "name": "ffsqlIdV1",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "name": "ffsqlIdV1"
              }
            }
          }
        ]
      },
      {
        "name": "ffsqlNameV1",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "text",
            "expression": {
              "tree": {
                "type": "column_reference",
                "name": "ffsqlNameV1"
              }
            }
          }
        ]
      }
    ],
    "metrics": [
      {
        "name": "ffsqlAgeV1",
        "dataType": {
          "type": "numeric",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "name": "ffsqlAgeV1"
          }
        }
      },
      {
        "name": "ffsqlScoreV1",
        "dataType": {
          "type": "numeric",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "name": "ffsqlScoreV1"
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
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes' \
--header 'X-MSTR-AuthToken: 4jegqhpiulqarq0js6b0gt9lon' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=9F0BCEF1DC1DC915565555F36AC0DEFA; iSession=4jegqhpiulqarq0js6b0gt9lon' \
--data '{
    "information": {
        "name": "Year, Category Analysis",
        "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
    },
    "sourceType": "custom_sql_free_form",
    "table": {
        "physicalTable": {
            "columns": [
                {
                    "name": "ffsqlIdV1",
                    "dataType": {
                        "type": "integer",
                        "precision": 4,
                        "scale": 0
                    }
                },
                {
                    "name": "ffsqlNameV1",
                    "dataType": {
                        "type": "fixed_length_string",
                        "precision": 255,
                        "scale": 0
                    }
                },
                {
                    "name": "ffsqlAgeV1",
                    "dataType": {
                        "type": "integer",
                        "precision": 4,
                        "scale": 0
                    }
                },
                {
                    "name": "ffsqlScoreV1",
                    "dataType": {
                        "type": "integer",
                        "precision": 4,
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
                                "value": "SELECT id, name, age, score FROM hackathon.mytest;"
                            }
                        }
                    ],
                    "type": "operator"
                }
            }
        },
        "attributes": [
            {
                "name": "ffsqlIdV1",
                "forms": [
                    {
                        "id": "45C11FA478E745FEA08D781CEA190FE5",
                        "category": "ID",
                        "type": "system",
                        "displayFormat": "number",
                        "expression": {
                            "tree": {
                                "type": "column_reference",
                                "name": "ffsqlIdV1"
                            }
                        }
                    }
                ]
            },
            {
                "name": "ffsqlNameV1",
                "forms": [
                    {
                        "id": "45C11FA478E745FEA08D781CEA190FE5",
                        "category": "ID",
                        "type": "system",
                        "displayFormat": "text",
                        "expression": {
                            "tree": {
                                "type": "column_reference",
                                "name": "ffsqlNameV1"
                            }
                        }
                    }
                ]
            }
        ],
        "metrics": [
            {
                "name": "ffsqlAgeV1",
                "dataType": {
                    "type": "numeric",
                    "precision": 0,
                    "scale": 0
                },
                "expression": {
                    "tree": {
                        "type": "column_reference",
                        "name": "ffsqlAgeV1"
                    }
                }
            },
            {
                "name": "ffsqlScoreV1",
                "dataType": {
                    "type": "numeric",
                    "precision": 0,
                    "scale": 0
                },
                "expression": {
                    "tree": {
                        "type": "column_reference",
                        "name": "ffsqlScoreV1"
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

```json
{
  "information": {
    "dateCreated": "2024-01-24T06:48:55.213Z",
    "dateModified": "2024-01-24T06:48:55.213Z",
    "versionId": "8669F17C45F02D454A409EA9FF77B9A4",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "E2AD7C9E4954660D5A5BDBBFD751F6CC",
    "subType": "report_cube",
    "name": "Year, Category Analysis"
  },
  "template": {
    "rows": [
      {
        "id": "FF816775FB784C75B3BA2B63BAECDE96",
        "name": "ffsqlIdV1",
        "type": "attribute",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID"
          }
        ]
      },
      {
        "id": "FB045BB2C57D45488879EC303B76C129",
        "name": "ffsqlNameV1",
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
            "id": "FA1A75DDC3BF4864932E8C20BF17801D",
            "name": "ffsqlAgeV1",
            "subType": "metric"
          },
          {
            "id": "398954E92D7D4395894DAC4B18E7B453",
            "name": "ffsqlScoreV1",
            "subType": "metric"
          }
        ]
      }
    ],
    "pageBy": []
  },
  "options": {
    "dataRefresh": "replace",
    "dataPartition": {
      "partitionAttribute": {},
      "numberOfPartitions": 0,
      "fetchDataSlicesInParallel": false
    }
  },
  "timeBased": {
    "timezone": null,
    "calendar": null,
    "enableTimezoneAndCalendarReporting": true
  },
  "sourceType": "custom_sql_free_form",
  "table": {
    "physicalTable": {
      "columns": [
        {
          "id": "186F0F9D63C94E12A129296F94970A7E",
          "name": "ffsqlIdV1",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "id": "E8F67F57C68B463390209166D5679F79",
          "name": "ffsqlNameV1",
          "dataType": {
            "type": "fixed_length_string",
            "precision": 255,
            "scale": 0
          }
        },
        {
          "id": "D7A48B699698415E9D9E816B7C8C9ABC",
          "name": "ffsqlAgeV1",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "id": "6E3B8DBA172E4943BA1614ABB2AC5AC4",
          "name": "ffsqlScoreV1",
          "dataType": {
            "type": "integer",
            "precision": 4,
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
                "value": "SELECT id, name, age, score FROM hackathon.mytest;"
              }
            }
          ],
          "type": "operator"
        }
      }
    },
    "attributes": [
      {
        "id": "FF816775FB784C75B3BA2B63BAECDE96",
        "name": "ffsqlIdV1",
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
                "objectId": "186F0F9D63C94E12A129296F94970A7E",
                "name": "ffsqlIdV1"
              }
            }
          }
        ]
      },
      {
        "id": "FB045BB2C57D45488879EC303B76C129",
        "name": "ffsqlNameV1",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID",
            "category": "ID",
            "type": "system",
            "displayFormat": "text",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "E8F67F57C68B463390209166D5679F79",
                "name": "ffsqlNameV1"
              }
            }
          }
        ]
      }
    ],
    "metrics": [
      {
        "id": "FA1A75DDC3BF4864932E8C20BF17801D",
        "name": "ffsqlAgeV1",
        "dataType": {
          "type": "numeric",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "D7A48B699698415E9D9E816B7C8C9ABC",
            "name": "ffsqlAgeV1"
          }
        }
      },
      {
        "id": "398954E92D7D4395894DAC4B18E7B453",
        "name": "ffsqlScoreV1",
        "dataType": {
          "type": "numeric",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "6E3B8DBA172E4943BA1614ABB2AC5AC4",
            "name": "ffsqlScoreV1"
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

Sample Response Code: 201 (A cube is created successfully.)

## Publish the cube

### Publish the cube using [POST /api/v2/cubes/\{cubeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/publishCube_2)

<Available since="2021 Update 5" />

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/2F15C95D934175CBC9B915915D485B0E" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "478:RU5WLTI4MjA0MExBSU9VU0Ux",
  "jobId": 478
}
```

Sample Response Code: 202 (Request accepted for processing.)
