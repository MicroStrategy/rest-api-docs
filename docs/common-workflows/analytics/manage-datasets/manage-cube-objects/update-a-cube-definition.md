---
title: Update a cube's definition and publish it
sidebar_label: Update a cube definition
description: This workflow sample demonstrates how to update a cube’s definition through the Modeling service and Publish it through Library Server.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ef6003b3-abe9-40ee-abf7-ff72de088f22?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a cube’s definition through the Modeling service and Publish it through Library Server.

You want to update the `Year, Category Analysis` cube object definition in the MicroStrategy Tutorial project. The cube ID is `2F15C95D934175CBC9B915915D485B0E`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Update a cube definition

### Update a cube object using [PUT /api/model/cubes/\{cubeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-replaceCube)

<Available since="2021 Update 5" />

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lph8795fem9k70tnp0ftdrnvi2"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "report_cube",
    "name": "Year, Category Analysis3",
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
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes/2F15C95D934175CBC9B915915D485B0E" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: lph8795fem9k70tnp0ftdrnvi2" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
-H "Content-Type: application/json" \
-d '{"information":{"subType":"report_cube","name":"Year, Category Analysis3","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"template":{"rows":[{"id":"8D679D5111D3E4981000E787EC6DE8A4","name":"Year","type":"attribute"},{"id":"8D679D3711D3E4981000E787EC6DE8A4","name":"Category","type":"attribute"}],"columns":[{"type":"metrics","elements":[{"id":"7FD5B69611D5AC76C000D98A4CC5F24F","name":"Cost","subType":"metric"},{"id":"4C051DB611D3E877C000B3B2D86C964F","name":"Profit","subType":"metric"}]}],"pageBy":[]},"filter":{"text":"(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)","tree":{"function":"and","children":[{"type":"predicate_element_list","predicateId":"34BD0D556AC6423CB8061BB90A0C1AB2","predicateTree":{"attribute":{"objectId":"8D679D4F11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Subcategory"},"elements":[{"display":"Art & Architecture","elementId":"h11"},{"display":"Business","elementId":"h12"},{"display":"Computers","elementId":"h23"},{"display":"Electronics - Miscellaneous","elementId":"h24"}],"function":"in"}},{"type":"predicate_metric_qualification","predicateId":"EF616BAECDED4AE0A91C6A4A5092ED92","predicateText":"(Revenue > 100000)","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"100000.0"}}],"levelType":"none","metric":{"objectId":"4C05177011D3E877C000B3B2D86C964F","subType":"metric","name":"Revenue"},"metricFunction":"value","isIndependent":0,"nullInclude":0}}],"type":"operator"}},"options":{"dataLanguages":{"dataLanguageType":"project_default"},"dataRefresh":"replace","dataPartition":{"partitionAttribute":{},"numberOfPartitions":0,"fetchDataSlicesInParallel":false}}}'
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2022-03-18T20:52:06.593Z",
    "dateModified": "2022-03-18T21:31:28.050Z",
    "versionId": "D13B1118594931A7E8D7679B792B3724",
    "primaryLocale": "en-US",
    "objectId": "2F15C95D934175CBC9B915915D485B0E",
    "subType": "report_cube",
    "name": "Year, Category Analysis3",
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
          "predicateId": "FAB934D7BBFB403C9FDFC68575A90249",
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
          "predicateId": "D75DD897784547FE81B63C575A6ADE46",
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

Sample Response Code: 200 (The cube's definition is updated successfully.)

### Update the cube's advanced properties using [PUT /api/model/cubes/\{cubeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-replaceCube) with `showAdvancedProperties=true`

<Available since="2021 Update 6" />

You want to update the value of advanced properties of the `Actual vs Forecast Performance Cube` cube object. The object ID of the cube is `CC02C5C24AE2803ABF14EDA5038159D4` in the `MicroStrategy Tutorial` project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

Sample Curl:

```bash
curl -X PUT "http://10.23.33.10:8080/MicroStrategyLibrary/api/model/cubes/CC02C5C24AE2803ABF14EDA5038159D4?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: ggolv032n47gtkb0ggdocgfi23" \
-H "X-MSTR-ProjectID: 6F2026DB4172DC4B219ADC914FF944BB" \
-H "Content-Type: application/json" \
-d '{"advancedProperties":{"vldbProperties":{"[AnalyticalEngineProperties].[EvaluationOrdering]":{"name":"EvaluationOrdering","value":"1","type":"int32","resolvedLocation":"default"},"[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]":{"name":"NullCheckingForAnalyticalEngine","value":"2","type":"int32","resolvedLocation":"default"},"[GeneralReportProperties].[LoadIntelligentCubesImmediately]":{"name":"LoadIntelligentCubesImmediately","value":null,"type":"int32","resolvedLocation":"default"}}}}'
```

Sample Request Body:

```json
{
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
        "value": "2",
        "type": "int32",
        "resolvedLocation": "default"
      },
      "[GeneralReportProperties].[LoadIntelligentCubesImmediately]": {
        "name": "LoadIntelligentCubesImmediately",
        "value": null,
        "type": "int32",
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
    "dateCreated": "2009-04-15T20:24:53.000Z",
    "dateModified": "2010-04-14T15:05:00.000Z",
    "versionId": "9C75BDF245B413DAEB7681807F6DEEFC",
    "primaryLocale": "en-US",
    "objectId": "CC02C5C24AE2803ABF14EDA5038159D4",
    "subType": "report_cube",
    "name": "Actual vs Forecast Performance Cube"
  },
  "template": {
    "rows": [
      {
        "id": "8D679D4411D3E4981000E787EC6DE8A4",
        "name": "Month",
        "type": "attribute"
      },
      {
        "id": "8D679D5111D3E4981000E787EC6DE8A4",
        "name": "Year",
        "type": "attribute"
      }
    ],
    "columns": [
      {
        "type": "metrics",
        "elements": [
          {
            "id": "4C051DB611D3E877C000B3B2D86C964F",
            "name": "Profit",
            "subType": "metric"
          },
          {
            "id": "4C05177011D3E877C000B3B2D86C964F",
            "name": "Revenue",
            "subType": "metric"
          }
        ]
      }
    ],
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
        "value": "2",
        "type": "int32",
        "resolvedLocation": "report"
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

Sample Response Code: 200 (The cube definition is updated successfully.)

### Update a FFSQL cube object using [PUT /api/model/cubes/\{cubeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-replaceCube)

Compared to updating a normal table, you can't update the `filter` as it's not applicable to a FFSQL cube, but you can update the `table` field. The attributes and metrics on the template should be updated accordingly, they should be the same as the ones on the table.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lph8795fem9k70tnp0ftdrnvi2"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
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
                "value": "SELECT id, name, score FROM hackathon.mytest;"
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
            "name": "ID",
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
            "name": "ID",
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
curl --location --request PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes/2F15C95D934175CBC9B915915D485B0E' \
--header 'X-MSTR-AuthToken: lph8795fem9k70tnp0ftdrnvi2' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=7EED7FBFE610BBA8BE72948369541879; iSession=blp3a6m0862i0q5khpkfiijtkh' \
--data '{
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
                                "value": "SELECT id, name, score FROM hackathon.mytest;"
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
                        "name": "ID",
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
                        "name": "ID",
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
    "dateModified": "2024-01-24T07:05:42.423Z",
    "versionId": "C7DD1D8F466F6ABB3D47FA9C07A3641C",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "2F15C95D934175CBC9B915915D485B0E",
    "subType": "report_cube",
    "name": "Year, Category Analysis"
  },
  "template": {
    "rows": [
      {
        "id": "BDFBC099564E406EA367CD5E03FE42E2",
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
        "id": "2AF341625F7645BCA28B1F942A05E1F5",
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
            "id": "1543D294E95B43C69C2B24E07F722CE8",
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
          "id": "C9AAB056404C462EA3BB08C1BCF9A3FD",
          "name": "ffsqlIdV1",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          }
        },
        {
          "id": "83FDD28F83D348FE884A2A3D115046C7",
          "name": "ffsqlNameV1",
          "dataType": {
            "type": "fixed_length_string",
            "precision": 255,
            "scale": 0
          }
        },
        {
          "id": "E4965EFE86594021AC98375CB6E62EBC",
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
                "value": "SELECT id, name, score FROM hackathon.mytest;"
              }
            }
          ],
          "type": "operator"
        }
      }
    },
    "attributes": [
      {
        "id": "BDFBC099564E406EA367CD5E03FE42E2",
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
                "objectId": "C9AAB056404C462EA3BB08C1BCF9A3FD",
                "name": "ffsqlIdV1"
              }
            }
          }
        ]
      },
      {
        "id": "2AF341625F7645BCA28B1F942A05E1F5",
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
                "objectId": "83FDD28F83D348FE884A2A3D115046C7",
                "name": "ffsqlNameV1"
              }
            }
          }
        ]
      }
    ],
    "metrics": [
      {
        "id": "1543D294E95B43C69C2B24E07F722CE8",
        "name": "ffsqlScoreV1",
        "dataType": {
          "type": "numeric",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "E4965EFE86594021AC98375CB6E62EBC",
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

Sample Response Code: 200 (The cube's definition is updated successfully.)

## Publish the cube

### Publish the cube using [POST /api/v2/cubes/\{cubeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/publishCube_2)

<Available since="2021 Update 5" />

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lph8795fem9k70tnp0ftdrnvi2"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/2F15C95D934175CBC9B915915D485B0E" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: lph8795fem9k70tnp0ftdrnvi2" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "490:RU5WLTI4MjA0MExBSU9VU0Ux",
  "jobId": 490
}
```

Sample Response Code: 202 (Request accepted for processing.)
