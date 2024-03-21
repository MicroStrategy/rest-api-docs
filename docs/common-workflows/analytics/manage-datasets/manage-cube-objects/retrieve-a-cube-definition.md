---
title: Retrieve a cube's definition
sidebar_label: Retrieve a cube's definition
description: This topic cover several workflows for retrieving a cube's definition. Retrieve a Cube's Definition, Retrieve a Cube Definition with a Filter in Tokens Format, Retrieve a Cube Definition with a Filter Custom Expression in Tree and Tokens Formats, Retrieve a Cube Definition with a Filter that Contains Inline Custom Expressions Returned in Tree and Tokens Formats, Retrieve a Cube Definition with Advanced Properties and Retrieve Applicable Properties of a Cube.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-585d42d1-fbdc-4d1d-afbb-c4e872753709?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This topic cover several workflows for retrieving a cube's definition.

## Retrieve a cube's definition

<Available since="2021 Update 5" />

This workflow sample demonstrates how to retrieve the definition of a cube through the Modeling service.

You want to get the definition of the `Year, Category Analysis` cube object. The object ID of the cube is `A7D792D54B58C6CB68F192A4A73E317F` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the cube’s definition using `GET /api/model/cubes/{cubeId}`.

Sample Request Header:

```http
    "accept": "application/json"
    "X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"
    "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes/A7D792D54B58C6CB68F192A4A73E317F" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the cube’s definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-03-17T22:47:26.514Z",
    "dateModified": "2022-03-18T20:13:47.091Z",
    "versionId": "59EB912782474BDB5706F8A1E70480D5",
    "primaryLocale": "en-US",
    "objectId": "A7D792D54B58C6CB68F192A4A73E317F",
    "subType": "report_cube",
    "name": "Year, Category Analysis"
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
          "predicateId": "19A2594915FA46F0A895F8DF7EA7E28E",
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
          "predicateId": "0DEC3B93550343109F25D5D322591806",
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
}
```

Response Code: 200 (The cube’s definition was returned successfully.)

## Retrieve a FFSQL cube's definition

This workflow sample demonstrates how to retrieve the definition of a FFSQL cube through the Modeling service.

You want to get the definition of the `Year, Category Analysis` cube object. The object ID of the cube is `A7D792D54B58C6CB68F192A4A73E317F` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the FFSQL cube’s definition using `GET /api/model/cubes/{cubeId}`.

Sample Request Header:

```http
    "accept": "application/json"
    "X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"
    "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes/A7D792D54B58C6CB68F192A4A73E317F" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the cube’s definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-03-17T22:47:26.514Z",
    "dateModified": "2022-03-18T20:13:47.091Z",
    "versionId": "59EB912782474BDB5706F8A1E70480D5",
    "primaryLocale": "en-US",
    "objectId": "A7D792D54B58C6CB68F192A4A73E317F",
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

Response Code: 200 (The cube’s definition was returned successfully.)

## Retrieve a cube’s definition with filter in tokens format

<Available since="2021 Update 5" />

This workflow sample demonstrates how to retrieve the definition of a cube with its filter in tokens format through the Modeling service. Unlike the first workflow, you want to enable the `showFilterTokens` parameter to retrieve the filter's definition in tokens format as well.

Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let’s say a filter expression is `Revenue > Cost`. When the filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: `("Revenue", Revenue_ID)`, `(">", GreaterThan_ID)`, `("Cost", Cost_ID)`.

A filter's "qualification" is presented in the following formats:

- `text`: A human-readable, but non-parsable text, describing a filter's qualification.
- `tree`: A tree data structure fully defining the filter's qualification.
- `tokens`: A list of parsed tokens that define a filter's qualification. Note that generating tokens requires additional time.

If `showFilterTokens` is omitted or false, only `text` and `tree` formats are returned.

If `showFilterTokens` is true, all `text`, `tree`, and `tokens` formats are returned.

This workflow sample is similar to [Retrieve a cube’s definition](#retrieve-a-cubes-definition), except with `showFilterTokens=true`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "8g9lfiranuc09js0imambijoi0"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes/A7D792D54B58C6CB68F192A4A73E317F?showFilterTokens=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the cube’s definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-03-17T22:47:26.514Z",
    "dateModified": "2022-03-18T20:13:47.091Z",
    "versionId": "59EB912782474BDB5706F8A1E70480D5",
    "primaryLocale": "en-US",
    "objectId": "A7D792D54B58C6CB68F192A4A73E317F",
    "subType": "report_cube",
    "name": "Year, Category Analysis"
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
          "predicateId": "D14A8E5D30FB4AB7913C7B115F1B50C6",
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
          "predicateId": "D4235D1D5A4440B7A8A356E571D15995",
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
        "value": "Subcategory",
        "type": "object_reference",
        "target": {
          "dateCreated": "2001-01-02T20:48:12.000Z",
          "dateModified": "2009-02-16T09:58:35.000Z",
          "versionId": "83FCDB024C4A412A07A3049EC19AE9EC",
          "primaryLocale": "en-US",
          "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Subcategory"
        }
      }
    ]
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

Response Code: 200 (The cube’s definition was returned successfully.)

## Retrieve a cube’s definition with filter’s custom expressions in tree and tokens formats

<Available since="2021 Update 5" />

In this workflow sample, you want to get the definition cube when its filter contains the custom expression, `Year, Category Analysis with Custom Expression in Filter`, with the expression returned in tree and tokens formats. The object ID of the cube is `864F3B2D40D0C83EB229D8AA7005CE93`.

If custom expressions are used in a filter, this parameter specifies the format in the which they are returned in the response.

Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let’s say a filter expression is `Revenue > Cost`. When the filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: `("Revenue", Revenue_ID)`, `(">", GreaterThan_ID)`, `("Cost", Cost_ID)`.

A filter's "qualification" is presented in the following formats:

- `text`: A human-readable, but non-parsable text, describing a filter's qualification.
- `tree`: A tree data structure fully defining the filter's qualification.
- `tokens`: A list of parsed tokens that define a filter's qualification. Note that generating tokens requires additional time.

If `showFilterTokens` is omitted or false, only `text` and `tree` formats are returned.

If `showFilterTokens` is true, all `text`, `tree`, and `tokens` formats are returned.

This workflow is similar to [Retrieve a cube's definition](#retrieve-a-cubes-definition), except with `showExpressionAs=tree` and `showExpressionAs=tokens`.

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes/864F3B2D40D0C83EB229D8AA7005CE93?showExpressionAs=tokens&showExpressionAs=tree" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the cube’s definition in the body of the response. Notice that`['filter']['tree']['PredicateTree']['expression']` contains the fields `tree` and `tokens`, representing the custom expression in tree and tokens format respectively.

```json
{
  "information": {
    "dateCreated": "2022-03-18T20:16:02.510Z",
    "dateModified": "2022-03-18T20:38:30.538Z",
    "versionId": "09702E942147C3639602AC86D7C86E74",
    "primaryLocale": "en-US",
    "objectId": "864F3B2D40D0C83EB229D8AA7005CE93",
    "subType": "report_cube",
    "name": "Year, Category Analysis with Custom Expression in Filter",
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
    "text": "Cost + 100000 < Revenue",
    "tree": {
      "type": "predicate_custom",
      "predicateId": "7A9C192438CE4C0E83B6298B66437E84",
      "predicateText": "Cost + 100000 < Revenue",
      "predicateTree": {
        "expression": {
          "text": "Cost + 100000 < Revenue",
          "tree": {
            "function": "less",
            "children": [
              {
                "type": "object_reference",
                "target": {
                  "objectId": "C742CD9C47AD2991817736AA6E64C291",
                  "subType": "metric",
                  "isEmbedded": true
                },
                "isIndependent": 0
              },
              {
                "type": "object_reference",
                "target": {
                  "objectId": "4C05177011D3E877C000B3B2D86C964F",
                  "subType": "metric",
                  "name": "Revenue"
                },
                "isIndependent": 0
              }
            ],
            "levelType": "none",
            "type": "operator"
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
              "value": "Cost",
              "type": "object_reference",
              "target": {
                "dateCreated": "2001-09-18T20:56:27.000Z",
                "dateModified": "2007-03-04T16:43:16.000Z",
                "versionId": "1348125140FDF506BD88169D6DBD5271",
                "primaryLocale": "en-US",
                "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
                "subType": "metric",
                "name": "Cost"
              }
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "+",
              "type": "character",
              "target": {
                "dateCreated": "2001-01-02T20:47:41.000Z",
                "dateModified": "2021-12-13T04:50:02.461Z",
                "versionId": "02478D385645D9DE352583B51632FF82",
                "primaryLocale": "en-US",
                "objectId": "8107C310DD9911D3B98100C04F2233EA",
                "subType": "function",
                "name": "+",
                "description": "Returns the sum of two values."
              }
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "100000",
              "type": "integer"
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "<",
              "type": "character",
              "target": {
                "dateCreated": "2001-01-02T20:47:39.000Z",
                "dateModified": "2021-12-13T04:50:03.084Z",
                "versionId": "6934C90E5F46789ACBCE8F87AFA03219",
                "primaryLocale": "en-US",
                "objectId": "8107C318DD9911D3B98100C04F2233EA",
                "subType": "function",
                "name": "<",
                "description": "Returns TRUE if the first value is lesser than the second value."
              }
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "Revenue",
              "type": "object_reference",
              "target": {
                "dateCreated": "2001-01-02T20:42:51.000Z",
                "dateModified": "2012-05-17T09:01:07.000Z",
                "versionId": "A1815D9C4F95013B56FD2C8EDD6CB110",
                "primaryLocale": "en-US",
                "objectId": "4C05177011D3E877C000B3B2D86C964F",
                "subType": "metric",
                "name": "Revenue"
              }
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

Sample Response Code: 200 (Cube’s definition is returned successfully.)

## Retrieve a cube’s definition with filter that contains inline custom expressions returned in tree and tokens formats

<Available since="2021 Update 5" />

In this workflow sample, you want to get the cube's definition when its filter contains an inline custom expression, `Year, Category Analysis with Inline Custom Expression in Filter`, with the expression returned in tree and tokens formats. The object ID of the cube is `57EB0BAB4BC2C8ACB91F0C9845ECF431`.

Get the cube filter’s definition with its inline custom expression in tree and tokens format.

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes/57EB0BAB4BC2C8ACB91F0C9845ECF431?showExpressionAs=tokens&showExpressionAs=tree" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the cube’s definition in the body of the response. Notice that `['filter']['tree']['PredicateTree']['expression']` contains the fields `tree` and `tokens`, representing the custom expression in tree and tokens format respectively.

```json
{
  "information": {
    "dateCreated": "2022-03-18T20:13:54.571Z",
    "dateModified": "2022-03-18T20:45:19.160Z",
    "versionId": "6998FB78DF457EA8BE2AC891AF70BBAF",
    "primaryLocale": "en-US",
    "objectId": "57EB0BAB4BC2C8ACB91F0C9845ECF431",
    "subType": "report_cube",
    "name": "02_Year, Category Analysis",
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
    "text": "Revenue > Cost + 100000",
    "tree": {
      "type": "predicate_metric_qualification",
      "predicateId": "3C77F7E14B124765A1991C190AFBB9AE",
      "predicateText": "Revenue > Cost + 100000",
      "predicateTree": {
        "function": "greater",
        "parameters": [
          {
            "parameterType": "expression",
            "expression": {
              "text": "Cost + 100000",
              "tree": {
                "type": "object_reference",
                "target": {
                  "objectId": "7A850AAE42844F20703D778B74557561",
                  "subType": "metric",
                  "isEmbedded": true
                },
                "isIndependent": 0
              },
              "tokens": [
                {
                  "level": "resolved",
                  "state": "initial",
                  "value": "Cost",
                  "type": "object_reference",
                  "target": {
                    "dateCreated": "2001-09-18T20:56:27.000Z",
                    "dateModified": "2007-03-04T16:43:16.000Z",
                    "versionId": "1348125140FDF506BD88169D6DBD5271",
                    "primaryLocale": "en-US",
                    "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
                    "subType": "metric",
                    "name": "Cost"
                  }
                },
                {
                  "level": "resolved",
                  "state": "initial",
                  "value": "+",
                  "type": "character",
                  "target": {
                    "dateCreated": "2001-01-02T20:47:41.000Z",
                    "dateModified": "2021-12-13T04:50:02.461Z",
                    "versionId": "02478D385645D9DE352583B51632FF82",
                    "primaryLocale": "en-US",
                    "objectId": "8107C310DD9911D3B98100C04F2233EA",
                    "subType": "function",
                    "name": "+",
                    "description": "Returns the sum of two values."
                  }
                },
                {
                  "level": "resolved",
                  "state": "initial",
                  "value": "100000",
                  "type": "integer"
                }
              ]
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

Sample Response Code: 200 (Cube’s definition is returned successfully.)

## Retrieve a cube definition with advanced properties

<Available since="2021 Update 6" />

This workflow sample demonstrates how to retrieve the definition of a cube with advanced properties through the Modeling service.

You want to get the definition of the Actual vs Forecast Performance Cube cube object. The object ID of the cube is `CC02C5C24AE2803ABF14EDA5038159D4` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

This workflow is similar to [Retrieve a cube definition](#retrieve-a-cubes-definition), except with `showAdvancedProperties=true`.

Retrieve a cube’s definition using [GET /api/model/cubes/\{cubeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-getCube) with `showAdvancedProperties=true`.

Sample Curl:

```bash
curl -X GET "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/cubes/CC02C5C24AE2803ABF14EDA5038159D4?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: fg8fimprk63ige5d83054oopkd" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the cube definition in the body of the response. The example below contains VLDB properties, an attribute join type, and a metric join type property.

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
        "value": "2",
        "type": "int32",
        "resolvedLocation": "default"
      },
      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {
        "name": "NullCheckingForAnalyticalEngine",
        "value": "2",
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

Response Code: 200 (The cube definition is returned successfully.)

## Retrieve applicable properties of a cube

<Available since="2021 Update 6" />

This workflow sample demonstrates how to retrieve all the applicable properties of a cube through the Modeling service.

You want to get the applicable properties of the Actual vs Forecast Performance Cube cube object. The object ID of the cube is `CC02C5C24AE2803ABF14EDA5038159D4` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD75`4.

Retrieve the applicable properties of a cube using [GET /api/model/cubes/\{cubeId}/applicableVldbProperties](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-getCubeApplicableVldbProperties).

Sample Curl:

```bash
curl -X GET "http://10.23.33.10:8080/MicroStrategyLibrary/api/model/cubes/CC02C5C24AE2803ABF14EDA5038159D4/applicableVldbProperties" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: j1h84f3jj21u26m8jb700qn82g" \
-H "X-MSTR-ProjectID: 6F2026DB4172DC4B219ADC914FF944BB"
```

Sample Response Body:

You can view the cube definition in the body of the response. The example below contains VLDB properties, an attribute join type, and a metric join type property.

```json
{
  "propertyCount": 156,
  "applicableProperties": {
    "[VLDB Select].[Allow Cartesian Join]": {
      "name": "Allow Cartesian Join",
      "groupId": 1,
      "groupName": "Joins",
      "maxValue": 2,
      "displayType": "options",
      "displayName": "Cartesian Join Governing",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Choosing this option keeps the backward compatibility with MicroStrategy 2019 where SQL queries are governed by \"Cartesian Join Warning\" VLDB setting.",
          "sqlPreview": "OBSOLETE - Keep backward compatibility with MicroStrategy 2019."
        },
        {
          "value": "Cancel execution of cartesian join for SQL, MDX, In-Memory queries.",
          "sqlPreview": "<font face=\"Times Roman\" size=\"3\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\"  target=\"_blank\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option disallows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \"Cartesian Join Warning\" VLDB setting.</dt></font>"
        },
        {
          "value": "Execute cartesian join for SQL, MDX, In-Memory queries.",
          "sqlPreview": "<font face=\"Times Roman\" size=\"3\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\"  target=\"_blank\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option allows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \"Cartesian Join Warning\" VLDB setting.</dt></font>"
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Base Table Join for Template]": {
      "name": "Base Table Join for Template",
      "groupId": 1,
      "groupName": "Joins",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Base Table Join for Template",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Temp table join",
          "sqlPreview": "\n      \n        create table TEMP1 as\n        select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\n        \ta21.MARKET_NBR MARKET_NBR,\n         \tsum(a21.COST_AMT) WJXBFS1\n        from COST_MARKET_DEP a21\n         \tjoin LOOKUP_DAY a22\n         \ton (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\n        where a22.MONTH_ID = 199411\n        group by a21.DEPARTMENT_NBR, a21.MARKET_NBR\n          \n        create table TEMP2 as\n        select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\n         \ta21.MARKET_NBR MARKET_NBR,\n         \tsum(a21.TOT_SLS_DLR) WJXBFS1,\n         \tsum(a21.TOT_SLS_DLR) WJXBFS2\n        from MARKET_DEPARTMENT a21\n         \tjoin LOOKUP_DAY a22\n         \ton (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\n        where a22.MONTH_ID = 199411\n        group by a21.DEPARTMENT_NBR,\n         \ta21.MARKET_NBR\n          \n        select a21.MARKET_NBR MARKET_NBR,\n         \ta21.DEPARTMENT_NBR DEPARTMENT_NBR,\n         \t((a22.WJXBFS1 - a21.WJXBFS1) / a22.WJXBFS2) WJXBFS1\n        from TEMP1 a21\n         \tjoin TEMP2 a22\n         \ton (a21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\n         \t    a21.MARKET_NBR = a22.MARKET_NBR)\n      \n    "
        },
        {
          "value": "Fact table join",
          "sqlPreview": "\n      \n        select a21.MARKET_NBR MARKET_NBR, \n         \ta21.DEPARTMENT_NBR DEPARTMENT_NBR, \n         \t((sum(a22.TOT_SLS_DLR) - sum(a21.COST_AMT)) / sum(a22.TOT_SLS_DLR)) WJXBFS1\n        from COST_MARKET_DEP a21\n         \tjoin MARKET_DEPARTMENT a22\n         \ton (a21.CUR_TRN_DT = a22.CUR_TRN_DT and\n         \t\ta21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\n         \t\ta21.MARKET_NBR = a22.MARKET_NBR)\n         \tjoin LOOKUP_DAY  a23\n         \ton (a21.CUR_TRN_DT = a23.CUR_TRN_DT)\n        where a23.MONTH_ID = 199411\n        group by a21.MARKET_NBR,\n         \ta21.DEPARTMENT_NBR \n      \n    "
        }
      ],
      "type": "int32",
      "defaultValue": 0
    }
  },
  "sqlDynamicPreview": "[VLDB Report].[Report PreStatement 1]\n[VLDB Report].[Report PreStatement 2]\n[VLDB Report].[Report PreStatement 3]\n[VLDB Report].[Report PreStatement 4]\n[VLDB Report].[Report PreStatement 5]\n\n[VLDB Create].[Table PreStatement 1]\n[VLDB Create].[Table PreStatement 2]\n[VLDB Create].[Table PreStatement 3]\n[VLDB Create].[Table PreStatement 4]\n[VLDB Create].[Table PreStatement 5]\n\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table Option] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3 FLOAT) [VLDB Create].[Table Space]\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\n\n[VLDB Insert].[Insert PreStatement 1]\n[VLDB Insert].[Insert PreStatement 2]\n[VLDB Insert].[Insert PreStatement 3]\n[VLDB Insert].[Insert PreStatement 4]\n[VLDB Insert].[Insert PreStatement 5]\n\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert String]\n\n[VLDB Insert].[Insert MidStatement 1]\n[VLDB Insert].[Insert MidStatement 2]\n[VLDB Insert].[Insert MidStatement 3]\n[VLDB Insert].[Insert MidStatement 4]\n[VLDB Insert].[Insert MidStatement 5]\n\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert String]\n\n[VLDB Insert].[Insert PostStatement 1]\n[VLDB Insert].[Insert PostStatement 2]\n[VLDB Insert].[Insert PostStatement 3]\n[VLDB Insert].[Insert PostStatement 4]\n[VLDB Insert].[Insert PostStatement 5]\n\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\n\n[VLDB Create].[Table PostStatement 1]\n[VLDB Create].[Table PostStatement 2]\n[VLDB Create].[Table PostStatement 3]\n[VLDB Create].[Table PostStatement 4]\n[VLDB Create].[Table PostStatement 5]\n\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name Alias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\n\n[VLDB Report].[Report PostStatement 1]\n[VLDB Report].[Report PostStatement 2]\n[VLDB Report].[Report PostStatement 3]\n[VLDB Report].[Report PostStatement 4]\n[VLDB Report].[Report PostStatement 5]\n[Drop Table PreStatement 1]\n\ndrop table TABLENAME\n\n[Drop Table PostStatement 1]\n[VLDB Drop].[Post Cleanup Statement 1]\n[VLDB Drop].[Post Cleanup Statement 2]\n[VLDB Drop].[Post Cleanup Statement 3]\n[VLDB Drop].[Post Cleanup Statement 4]\n[VLDB Drop].[Post Cleanup Statement 5]"
}
```

Response Code: 200 (The list of applicable properties for a given object is returned successfully.)
