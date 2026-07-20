---
title: Retrieve data model base metrics
description: This workflow demonstrates how to retrieve data model base metrics using REST API.
---

<Available since="Strategy (September 2025)" />

This workflow sample demonstrates how to retrieve one or more data model base metrics using the REST API with and without a changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

- [Retrieve a data model base metric](#retrieve-a-data-model-base-metric)
- [Retrieve data model base metrics](#retrieve-data-model-base-metrics)

A detailed description of each step of this workflow is listed below.

## Retrieve a data model base metric

You can retrieve a base metric's definition in a data model using the following endpoint: [GET /api/model/dataModels/\{dataModelId}/factMetrics/\{factMetricId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelFactMetric)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/factMetrics/8545CACCC1DA4D8F9625718E92B777B6' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/factMetrics/8545CACCC1DA4D8F9625718E92B777B6' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2025-08-27T08:45:26.816Z",
    "dateModified": "2025-08-27T08:45:26.816Z",
    "versionId": "1538F211514F0DAA243EA09477A0BF3F",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "8545CACCC1DA4D8F9625718E92B777B6",
    "subType": "fact_metric",
    "name": "Year Duration",
    "description": "Number of days in the year, accounting for leap years.",
    "destinationFolderId": "73F519E9FCA5413586F3F8C706E1F2EA"
  },
  "fact": {
    "dataType": {
      "type": "integer",
      "precision": 2,
      "scale": 0
    },
    "expressions": [
      {
        "expressionId": "7B373D46C174496B8E42B921C6BC29C0",
        "expression": {
          "text": "year_duration"
        },
        "tables": [
          {
            "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
            "subType": "logical_table",
            "name": "lu_year"
          }
        ]
      }
    ],
    "extensions": [],
    "entryLevel": []
  },
  "function": "sum",
  "functionProperties": [
    {
      "name": "UseLookupForAttributes",
      "value": {
        "type": "boolean",
        "value": "false"
      }
    }
  ],
  "dimty": {
    "dimtyUnits": [
      {
        "dimtyUnitType": "report_base_level",
        "aggregation": "normal",
        "filtering": "apply",
        "groupBy": true
      }
    ],
    "excludeAttribute": false,
    "allowAddingUnit": true
  },
  "metricSubtotals": [
    {
      "definition": {
        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
        "subType": "system_subtotal",
        "name": "Total"
      }
    },
    {
      "definition": {
        "objectId": "078C50834B484EE29948FA9DD5300ADF",
        "subType": "system_subtotal",
        "name": "Count"
      }
    },
    {
      "definition": {
        "objectId": "B328C60462634223B2387D4ADABEEB53",
        "subType": "system_subtotal",
        "name": "Average"
      }
    },
    {
      "definition": {
        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",
        "subType": "system_subtotal",
        "name": "Minimum"
      }
    },
    {
      "definition": {
        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",
        "subType": "system_subtotal",
        "name": "Maximum"
      }
    },
    {
      "definition": {
        "objectId": "54E7BFD129514717A92BC44CF1FE5A32",
        "subType": "system_subtotal",
        "name": "Product"
      }
    },
    {
      "definition": {
        "objectId": "83A663067F7E43B2ABF67FD38ECDC7FE",
        "subType": "system_subtotal",
        "name": "Median"
      }
    },
    {
      "definition": {
        "objectId": "36226A4048A546139BE0AF5F24737BA8",
        "subType": "system_subtotal",
        "name": "Mode"
      }
    },
    {
      "definition": {
        "objectId": "7FBA414995194BBAB2CF1BB599209824",
        "subType": "system_subtotal",
        "name": "Standard Deviation"
      }
    },
    {
      "definition": {
        "objectId": "1769DBFCCF2D4392938E40418C6E065E",
        "subType": "system_subtotal",
        "name": "Variance"
      }
    },
    {
      "definition": {
        "objectId": "E1853D5A36C74F59A9F8DEFB3F9527A1",
        "subType": "system_subtotal",
        "name": "Geometric Mean"
      }
    },
    {
      "definition": {
        "objectId": "F225147A4CA0BB97368A5689D9675E73",
        "subType": "system_subtotal",
        "name": "Aggregation"
      },
      "implementation": {
        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
        "subType": "system_subtotal",
        "name": "Total"
      }
    }
  ],
  "format": {
    "header": [],
    "values": [
      {
        "type": "number_category",
        "value": "0"
      },
      {
        "type": "number_format",
        "value": "###0"
      },
      {
        "type": "number_currency_position",
        "value": "0"
      },
      {
        "type": "number_currency_symbol",
        "value": ""
      },
      {
        "type": "number_decimal_places",
        "value": "0"
      },
      {
        "type": "number_negative_numbers",
        "value": "1"
      },
      {
        "type": "number_thousand_separator",
        "value": "false"
      }
    ]
  },
  "metricFormatType": "reserved",
  "semanticRole": "fixed"
}
```

Response Code: 200 (The base metric's definition is returned successfully.)

## Retrieve data model base metrics

You can also retrieve data model base metrics. Parameters include pagination options such as `limit` and `offset`.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/factMetrics](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelFactMetrics)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/factMetrics' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/factMetrics' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response Body:

```json
{
  "offset": 0,
  "limit": -1,
  "total": 2,
  "factMetrics": [
    {
      "information": {
        "dateCreated": "2025-08-27T08:45:26.816Z",
        "dateModified": "2025-08-27T08:45:26.816Z",
        "versionId": "1538F211514F0DAA243EA09477A0BF3F",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "8545CACCC1DA4D8F9625718E92B777B6",
        "subType": "fact_metric",
        "name": "Year Duration",
        "description": "Number of days in the year, accounting for leap years.",
        "destinationFolderId": "73F519E9FCA5413586F3F8C706E1F2EA"
      },
      "fact": {
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "expressions": [
          {
            "expressionId": "7B373D46C174496B8E42B921C6BC29C0",
            "expression": {
              "text": "year_duration"
            },
            "tables": [
              {
                "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
                "subType": "logical_table",
                "name": "lu_year"
              }
            ]
          }
        ],
        "extensions": [],
        "entryLevel": []
      },
      "function": "sum",
      "functionProperties": [
        {
          "name": "UseLookupForAttributes",
          "value": {
            "type": "boolean",
            "value": "false"
          }
        }
      ],
      "dimty": {
        "dimtyUnits": [
          {
            "dimtyUnitType": "report_base_level",
            "aggregation": "normal",
            "filtering": "apply",
            "groupBy": true
          }
        ],
        "excludeAttribute": false,
        "allowAddingUnit": true
      },
      "metricSubtotals": [
        {
          "definition": {
            "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
            "subType": "system_subtotal",
            "name": "Total"
          }
        },
        {
          "definition": {
            "objectId": "078C50834B484EE29948FA9DD5300ADF",
            "subType": "system_subtotal",
            "name": "Count"
          }
        },
        {
          "definition": {
            "objectId": "B328C60462634223B2387D4ADABEEB53",
            "subType": "system_subtotal",
            "name": "Average"
          }
        },
        {
          "definition": {
            "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",
            "subType": "system_subtotal",
            "name": "Minimum"
          }
        },
        {
          "definition": {
            "objectId": "B1F4AA7DE683441BA559AA6453C5113E",
            "subType": "system_subtotal",
            "name": "Maximum"
          }
        },
        {
          "definition": {
            "objectId": "54E7BFD129514717A92BC44CF1FE5A32",
            "subType": "system_subtotal",
            "name": "Product"
          }
        },
        {
          "definition": {
            "objectId": "83A663067F7E43B2ABF67FD38ECDC7FE",
            "subType": "system_subtotal",
            "name": "Median"
          }
        },
        {
          "definition": {
            "objectId": "36226A4048A546139BE0AF5F24737BA8",
            "subType": "system_subtotal",
            "name": "Mode"
          }
        },
        {
          "definition": {
            "objectId": "7FBA414995194BBAB2CF1BB599209824",
            "subType": "system_subtotal",
            "name": "Standard Deviation"
          }
        },
        {
          "definition": {
            "objectId": "1769DBFCCF2D4392938E40418C6E065E",
            "subType": "system_subtotal",
            "name": "Variance"
          }
        },
        {
          "definition": {
            "objectId": "E1853D5A36C74F59A9F8DEFB3F9527A1",
            "subType": "system_subtotal",
            "name": "Geometric Mean"
          }
        },
        {
          "definition": {
            "objectId": "F225147A4CA0BB97368A5689D9675E73",
            "subType": "system_subtotal",
            "name": "Aggregation"
          },
          "implementation": {
            "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
            "subType": "system_subtotal",
            "name": "Total"
          }
        }
      ],
      "format": {
        "header": [],
        "values": [
          {
            "type": "number_category",
            "value": "0"
          },
          {
            "type": "number_format",
            "value": "###0"
          },
          {
            "type": "number_currency_position",
            "value": "0"
          },
          {
            "type": "number_currency_symbol",
            "value": ""
          },
          {
            "type": "number_decimal_places",
            "value": "0"
          },
          {
            "type": "number_negative_numbers",
            "value": "1"
          },
          {
            "type": "number_thousand_separator",
            "value": "false"
          }
        ]
      },
      "metricFormatType": "reserved",
      "semanticRole": "fixed"
    },
    {
      "information": {
        "dateCreated": "2025-08-27T08:45:26.816Z",
        "dateModified": "2025-08-27T08:45:26.816Z",
        "versionId": "1538F211514F0DAA243EA09477A0BF3F",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "7FE315204CDA4D2984B60C58DAAB876C",
        "subType": "fact_metric",
        "name": "Quarter Duration",
        "description": "Number of days in each quarter for scheduling and analysis.",
        "destinationFolderId": "73F519E9FCA5413586F3F8C706E1F2EA"
      },
      "fact": {
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "expressions": [
          {
            "expressionId": "E2EEC10A0F13412B965293C490CC3961",
            "expression": {
              "text": "quarter_duration"
            },
            "tables": [
              {
                "objectId": "2249F3085D67417E904FBF789EBAFDC8",
                "subType": "logical_table",
                "name": "lu_quarter"
              }
            ]
          }
        ],
        "extensions": [],
        "entryLevel": []
      },
      "function": "sum",
      "functionProperties": [
        {
          "name": "UseLookupForAttributes",
          "value": {
            "type": "boolean",
            "value": "false"
          }
        }
      ],
      "dimty": {
        "dimtyUnits": [
          {
            "dimtyUnitType": "report_base_level",
            "aggregation": "normal",
            "filtering": "apply",
            "groupBy": true
          }
        ],
        "excludeAttribute": false,
        "allowAddingUnit": true
      },
      "metricSubtotals": [
        {
          "definition": {
            "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
            "subType": "system_subtotal",
            "name": "Total"
          }
        },
        {
          "definition": {
            "objectId": "078C50834B484EE29948FA9DD5300ADF",
            "subType": "system_subtotal",
            "name": "Count"
          }
        },
        {
          "definition": {
            "objectId": "B328C60462634223B2387D4ADABEEB53",
            "subType": "system_subtotal",
            "name": "Average"
          }
        },
        {
          "definition": {
            "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",
            "subType": "system_subtotal",
            "name": "Minimum"
          }
        },
        {
          "definition": {
            "objectId": "B1F4AA7DE683441BA559AA6453C5113E",
            "subType": "system_subtotal",
            "name": "Maximum"
          }
        },
        {
          "definition": {
            "objectId": "54E7BFD129514717A92BC44CF1FE5A32",
            "subType": "system_subtotal",
            "name": "Product"
          }
        },
        {
          "definition": {
            "objectId": "83A663067F7E43B2ABF67FD38ECDC7FE",
            "subType": "system_subtotal",
            "name": "Median"
          }
        },
        {
          "definition": {
            "objectId": "36226A4048A546139BE0AF5F24737BA8",
            "subType": "system_subtotal",
            "name": "Mode"
          }
        },
        {
          "definition": {
            "objectId": "7FBA414995194BBAB2CF1BB599209824",
            "subType": "system_subtotal",
            "name": "Standard Deviation"
          }
        },
        {
          "definition": {
            "objectId": "1769DBFCCF2D4392938E40418C6E065E",
            "subType": "system_subtotal",
            "name": "Variance"
          }
        },
        {
          "definition": {
            "objectId": "E1853D5A36C74F59A9F8DEFB3F9527A1",
            "subType": "system_subtotal",
            "name": "Geometric Mean"
          }
        },
        {
          "definition": {
            "objectId": "F225147A4CA0BB97368A5689D9675E73",
            "subType": "system_subtotal",
            "name": "Aggregation"
          },
          "implementation": {
            "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
            "subType": "system_subtotal",
            "name": "Total"
          }
        }
      ],
      "format": {
        "header": [],
        "values": [
          {
            "type": "number_category",
            "value": "9"
          },
          {
            "type": "number_format",
            "value": "General"
          },
          {
            "type": "number_currency_position",
            "value": "0"
          },
          {
            "type": "number_currency_symbol",
            "value": ""
          },
          {
            "type": "number_decimal_places",
            "value": "0"
          },
          {
            "type": "number_negative_numbers",
            "value": "1"
          },
          {
            "type": "number_thousand_separator",
            "value": "false"
          }
        ]
      },
      "metricFormatType": "reserved",
      "semanticRole": "automatic"
    }
  ]
}
```

Response Code: 200 (All base metrics in data model were returned successfully.)
