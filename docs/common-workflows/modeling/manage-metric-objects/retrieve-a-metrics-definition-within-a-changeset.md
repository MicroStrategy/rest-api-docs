---
title: Retrieve a metric's definition within a changeset
sidebar_label: Retrieve a metric's definition within a changeset
description: This workflow sample demonstrates how to retrieve a metric's definition within a changeset.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c9639bc3-853f-4746-94b6-528b5aed21a5?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a metric's definition within a changeset.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

Get the definition of the `“Cost Comparison”` metric object. The object ID of the metric is `28F95FDC4EF1CA5746F8E6971A144BED` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

For different formats of metric expressions, see [Retrieve a metric's definition](../manage-metric-objects/retrieve-a-metrics-definition.md).

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

## Get the definition of the specified metric ID within a changeset using [GET /api/model/metrics/{metricId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Metrics/ms-getMetricDetails)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

| Location | Name                | Description                                                                                                                                                                                                                                            |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken    | The authorization token                                                                                                                                                                                                                                |
| header   | X-MSTR-MS-Changeset | The changeset ID.                                                                                                                                                                                                                                      |
| params   | showExpressionAs    | Omitted, tree, or tokens:<br/>- If omitted, the expression is returned in only “text“ formats.<br/>- If `tree`, the expression is returned in "text" and "tree" formats.<br/>- If `tokens`, the expression is returned in "text" and "tokens" formats. |

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/metrics/28F95FDC4EF1CA5746F8E6971A144BED" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2022-03-08T10:37:03.000Z",
    "dateModified": "2022-03-15T15:59:50.000Z",
    "versionId": "5FE091CE4842941170D5F6AC998DEB3E",
    "primaryLocale": "en-US",
    "objectId": "28F95FDC4EF1CA5746F8E6971A144BED",
    "subType": "metric",
    "name": "Cost Comparison"
  },
  "expression": {
    "text": "Sum(Cost)",
    "tree": {
      "type": "object_reference",
      "target": {
        "objectId": "2D69DE1D4767A591B82D79B7B996F346",
        "subType": "agg_metric",
        "isEmbedded": true
      },
      "isIndependent": 0
    }
  },
  "dimty": {
    "dimtyUnits": [
      {
        "dimtyUnitType": "report_base_level",
        "aggregation": "normal",
        "filtering": "apply",
        "groupBy": true
      },
      {
        "dimtyUnitType": "attribute",
        "target": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "aggregation": "first_in_fact",
        "filtering": "absolute",
        "groupBy": true
      },
      {
        "dimtyUnitType": "role",
        "target": {
          "objectId": "2437C03311D5BD85C000F98A4CC5F24F",
          "subType": "role_transformation",
          "name": "Last Quarter's"
        }
      }
    ],
    "excludeAttribute": false,
    "allowAddingUnit": true
  },
  "conditionality": {
    "filter": {
      "objectId": "E638359211D5C49EC0000C881FDA1A4F",
      "subType": "filter",
      "name": "Select a Quarter"
    },
    "embedMethod": "metric_into_report_filter",
    "removeElements": true
  },
  "metricSubtotals": [
    {
      "definition": {
        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
        "subType": "system_subtotal",
        "name": "Total"
      },
      "implementation": {
        "objectId": "B328C60462634223B2387D4ADABEEB53",
        "subType": "system_subtotal",
        "name": "Average"
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
        "objectId": "F225147A4CA0BB97368A5689D9675E73",
        "subType": "system_subtotal",
        "name": "Aggregation"
      },
      "implementation": {
        "objectId": "078C50834B484EE29948FA9DD5300ADF",
        "subType": "system_subtotal",
        "name": "Count"
      }
    }
  ],
  "aggregateFromBase": false,
  "formulaJoinType": "inner",
  "smartTotal": "decomposable_false",
  "dataType": { "type": "int64", "precision": 0, "scale": 0 },
  "format": {
    "header": [
      { "type": "number_category", "value": "0" },
      { "type": "number_decimal_places", "value": "2" },
      { "type": "number_thousand_separator", "value": "true" },
      { "type": "number_currency_symbol", "value": "$" },
      { "type": "number_currency_position", "value": "0" },
      { "type": "number_format", "value": "#,##0.00;(#,##0.00)" },
      { "type": "number_negative_numbers", "value": "3" },
      { "type": "background_fill_color", "value": "3355443" },
      { "type": "background_pattern_style", "value": "1" },
      { "type": "background_fill_style", "value": "0" },
      { "type": "background_gradient_angle", "value": "0" },
      { "type": "background_gradient_x_offset", "value": "0" },
      { "type": "series_fill_style", "value": "0" },
      { "type": "series_fill_color", "value": "8388608" },
      { "type": "series_gradient_angle", "value": "0" },
      { "type": "series_gradient_x_offset", "value": "0" }
    ],
    "values": [
      { "type": "number_category", "value": "0" },
      { "type": "number_decimal_places", "value": "0" },
      { "type": "number_format", "value": "#,##0;(#,##0)" }
    ]
  },
  "subtotalFromBase": false,
  "columnNameAlias": "test",
  "metricFormatType": "reserved",
  "thresholds": []
}
```

Response Code: 200 (Metric's definition is returned successfully.)
