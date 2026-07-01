---
title: Create a data model base metric
sidebar_label: Create a data model base metric
description: This workflow sample demonstrates how to create a data model base metric through the Modeling service.
---

<Available since="Strategy (October 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a data model base metric through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can create a base metric in a data model using the following endpoint: [POST /api/model/dataModels/\{dataModelId}/factMetrics](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/postDataModelFactMetric).

To create a data model base metric, in the request body, each "expression" of "fact.expressions" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Sample Request Body:

```json
{
  "information": {
    "name": "Year Duration",
    "subType": "fact_metric",
    "description": "Number of days in each year, accounting for leap years."
  },
  "fact": {
    "expressions": [
      {
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "8D64FCB9859B468CAD1EE94C140C2E7F"
          }
        },
        "tables": [
          {
            "objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA",
            "subType": "logical_table"
          }
        ]
      }
    ]
  },
  "format": {
    "header": [],
    "values": [
      {
        "type": "number_category",
        "value": "0"
      },
      {
        "type": "number_decimal_places",
        "value": "0"
      },
      {
        "type": "number_thousand_separator",
        "value": "false"
      },
      {
        "type": "number_currency_symbol",
        "value": ""
      },
      {
        "type": "number_currency_position",
        "value": "0"
      },
      {
        "type": "number_negative_numbers",
        "value": "1"
      }
    ]
  },
  "semanticRole": "fixed"
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/factMetrics?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d '{"information": {"name": "Year Duration", "subType": "fact_metric", "description": "Number of days in each year, accounting for leap years."}, "fact": {"expressions": [{"expression": {"tree": {"type": "column_reference", "objectId": "8D64FCB9859B468CAD1EE94C140C2E7F"}}, "tables": [{"objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA","subType": "logical_table"}]}]}, "format": {"header": [], "values": [{"type": "number_category", "value": "0"},{"type": "number_decimal_places", "value": "0"},{"type": "number_thousand_separator", "value": "false"},{"type": "number_currency_symbol", "value": ""},{"type": "number_currency_position", "value": "0"},{"type": "number_negative_numbers", "value": "1"}]}, "semanticRole": "fixed"}'
```

Sample Response Body:

```json
{
  "information": {
    "versionId": "B1F1B5D0A6554DC5AF49C739419534A3",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "EF4EABDA0D2C4FBEA1D65D05EC34C1CB",
    "subType": "fact_metric",
    "name": "Year Duration",
    "description": "Number of days in each year, accounting for leap years.",
    "destinationFolderId": "61348EAB766B4763A6A6723CF08F8990"
  },
  "fact": {
    "dataType": {
      "type": "integer",
      "precision": 2,
      "scale": 0
    },
    "expressions": [
      {
        "expressionId": "609F7CF0746A4094A0333A1C4D399DDD",
        "expression": {
          "text": "year_duration",
          "tree": {
            "type": "column_reference",
            "columnName": "year_duration",
            "objectId": "8D64FCB9859B468CAD1EE94C140C2E7F"
          },
          "tokens": [
            {
              "level": "resolved",
              "state": "initial",
              "value": "year_duration",
              "type": "column_reference",
              "target": {
                "versionId": "7110E5FF510B4A2C8EBA6C7E2340F076",
                "acg": 255,
                "primaryLocale": "en-US",
                "objectId": "8D64FCB9859B468CAD1EE94C140C2E7F",
                "subType": "column",
                "name": "year_duration",
                "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
              }
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "",
              "type": "end_of_text"
            }
          ]
        },
        "tables": [
          {
            "objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA",
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

Response Code: 201 (A new data model base metric is created successfully in the changeset.)
