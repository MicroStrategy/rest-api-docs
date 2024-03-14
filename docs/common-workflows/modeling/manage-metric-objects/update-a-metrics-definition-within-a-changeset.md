---
title: Update a metric's definition within a changeset
sidebar_label: Update a metric's definition within a changeset
description: This workflow sample demonstrates how to update a metric's definition through the Modeling service.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cd346c9a-019b-401a-9470-6097a5d9b24a?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a metric's definition through the Modeling service.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

You want to update the definition of the `"Cost Comparison"` metric with object ID `28F95FDC4EF1CA5746F8E6971A144BED` to achieve the below changes:

- Remove the dimty level other than the report level
- Update the `datatype` to `double`
- Update `subtotalFromBase` to `true`
- Rename the Metric to `"Cost"`
- Set the `[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]` VLDB property to `2`

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Update the metric's definition using [PUT /api/model/metrics/\{metricId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Metrics/ms-putMetric)

| Location | Name                   | Description                                                                                                                                                                                                                                            |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken       | The authorization token.                                                                                                                                                                                                                               |
| header   | X-MSTR-ProjectID       | The ID of the project.                                                                                                                                                                                                                                 |
| header   | X-MSTR-MS-Changeset    | The ID of the changeset.                                                                                                                                                                                                                               |
| params   | showFilterTokens       | Specify whether the "filter" in Metric is returned in "tokens", "text", and "tree" formats.                                                                                                                                                            |
| params   | showExpressionAs       | Omitted, tree, or tokens:<br/>- If omitted, the expression is returned in only “text“ formats.<br/>- If `tree`, the expression is returned in "text" and "tree" formats.<br/>- If `tokens`, the expression is returned in "text" and "tokens" formats. |
| params   | showAdvancedProperties | Specify whether the metric’s definition is returned with advanced properties.<br/>- If omitted or false, the advanced properties are not returned.<br/>- If true, the advanced properties are are returned.                                            |

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": { "name": "Cost" },
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
  "subtotalFromBase": true,
  "dataType": { "type": "double", "precision": 0, "scale": 0 },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {
        "name": "NullCheckingForAnalyticalEngine",
        "type": "int32",
        "value": "2",
        "resolvedLocation": "default",
        "isInherited": true
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X PUT \
  'http://demo.microstrategy.com/MicroStrategyLibrary/api//model/metrics/28F95FDC4EF1CA5746F8E6971A144BED?showAdvancedProperties=true' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: vou86a0sjelh4abm2oh274ghos' \
  -H 'X-MSTR-MS-Changeset: E839A2FE06AF4BCB947B678A6E8E6EAA' \
  -H 'Content-Type: application/json' \
  -d '{
    "information": {
        "name": "Cost"
    },
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
    "dataType": {
        "type": "double",
        "precision": 0,
        "scale": 0
    },
    "advancedProperties": {
        "vldbProperties": {
            "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {
                "name": "NullCheckingForAnalyticalEngine",
                "type": "int32",
                "value": "2",
                "resolvedLocation": "default",
                "isInherited": true
            }
        }
    }
}'
```

Sample Response Body:

You can view the updated metric's definition in the body of the response.

```json
{
  "information": {
    "versionId": "ABF987FAB5E543E48C18F0501B51BE1C",
    "primaryLocale": "en-US",
    "objectId": "28F95FDC4EF1CA5746F8E6971A144BED",
    "subType": "metric",
    "name": "Cost",
    "destinationFolderId": "1031D6F04D13AE5E24EF08944D5745AD"
  },
  "expression": {
    "text": "Sum(Cost)",
    "tree": {
      "type": "object_reference",
      "target": {
        "objectId": "B9E3AEAA4D9DF42F6683EB8D7185825C",
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
  "dataType": { "type": "double", "precision": 0, "scale": 0 },
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
  "subtotalFromBase": true,
  "columnNameAlias": "test",
  "metricFormatType": "reserved",
  "thresholds": [],
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {
        "name": "NullCheckingForAnalyticalEngine",
        "type": "int32",
        "value": "2",
        "resolvedLocation": "object",
        "isInherited": false,
        "nextValue": "2",
        "nextResolvedLocation": "default"
      },
      "[AnalyticalEngineProperties].[SubtotalDimensionalityAware]": {
        "name": "SubtotalDimensionalityAware",
        "type": "boolean",
        "value": "true",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Function].[Null Check]": {
        "name": "Null Check",
        "type": "int32",
        "value": "2",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Function].[Zero Check]": {
        "name": "Zero Check",
        "type": "int32",
        "value": "1",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Report].[Count Distinct with Partitions]": {
        "name": "Count Distinct with Partitions",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Select].[Integer Constant In Metric]": {
        "name": "Integer Constant In Metric",
        "type": "int32",
        "value": "1",
        "resolvedLocation": "dbms",
        "isInherited": true,
        "nextValue": "0",
        "nextResolvedLocation": "default"
      },
      "[VLDB Select].[Metric Join Type]": {
        "name": "Metric Join Type",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Select].[No Nulls In Metric For Cube Reuse]": {
        "name": "No Nulls In Metric For Cube Reuse",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Select].[Smart Metric Transformation]": {
        "name": "Smart Metric Transformation",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Select].[Transformable AggMetric]": {
        "name": "Transformable AggMetric",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Select].[Use Subtotal Dimty for Dynamic Aggregation]": {
        "name": "Use Subtotal Dimty for Dynamic Aggregation",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      }
    }
  }
}
```

Response Code: 200 (The Metric's definition is updated successfully in the changeset.)

The model for the definition of a metric can be updated with the following fields:

| Fields              | Name                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                       | Data Type                                 | Required?                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------- |
| information         | name                                                                                                                                                                                                                                                                                                                                                                                                         | Name of the metric. This is the most user-friendly value that can be used to identify the metric. | String                                    | Yes                                   |
| destinationFolderId | Folder ID where the new metric is saved.                                                                                                                                                                                                                                                                                                                                                                     | String                                                                                            | Yes                                       |
| expression          | text                                                                                                                                                                                                                                                                                                                                                                                                         | A human readable that describes the expression.                                                   | String                                    | No                                    |
| tree                | A tree data structure fully defining the expression.                                                                                                                                                                                                                                                                                                                                                         | List&lt;ObjectInfoReference&gt;                                                                   | No                                        |
| tokens              | A list of parsed tokens.                                                                                                                                                                                                                                                                                                                                                                                     | List&lt;ObjectInfoReference&gt;                                                                   | No                                        |
| dimty               | dimtyUnits                                                                                                                                                                                                                                                                                                                                                                                                   | Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated.  | List&lt;ObjectInfoReference&gt;           | No                                    |
| excludeAttribute    | If true, exclude attributes absent in report or level. If false, do not exclude.                                                                                                                                                                                                                                                                                                                             | Boolean                                                                                           | No                                        |
| allowAddingUnit     | This setting allows other users to add extra units to this definition.                                                                                                                                                                                                                                                                                                                                       | Boolean                                                                                           | No                                        |
| prompt              | This points to the level prompt.                                                                                                                                                                                                                                                                                                                                                                             | ObjectInfoReference                                                                               | No                                        |
| conditionality      | filter                                                                                                                                                                                                                                                                                                                                                                                                       | The reference to a filter.                                                                        | ObjectInfoReference                       | No                                    |
| prompt              | The reference to an object prompt.                                                                                                                                                                                                                                                                                                                                                                           | ObjectInfoReference                                                                               | No                                        |
| embedMethod         | Indicates the embedding method for the filter with report filter.                                                                                                                                                                                                                                                                                                                                            | EnumDSSEmbedMethod                                                                                | No                                        |
| removeElements      | Indicates whether to remove related report filter elements. True to remove.                                                                                                                                                                                                                                                                                                                                  | Boolean                                                                                           | No                                        |
| metricSubtotals     | definition                                                                                                                                                                                                                                                                                                                                                                                                   | An object reference that reference to the subtotal object.                                        | ObjectInfoReference                       | Yes, if metricSubtotals is provided . |
| implementation      | When the total subtotal function is set to one object, this field will reference to that object only when the definition field references to Total.<br/><br/>When the dynamic aggregation function is set to one object, this field will reference to that object only when the definition field references to Aggregation.<br/><br/>For subtotals except Total and Aggregation, this field should be empty. | ObjectInfoReference                                                                               | No                                        |
| aggregateFromBase   | aggregateFromBase                                                                                                                                                                                                                                                                                                                                                                                            | Indicates the aggregation type. True to aggregate from base.                                      | Boolean                                   | No                                    |
| FormulaJoinType     | formulaJoinType                                                                                                                                                                                                                                                                                                                                                                                              | Indicates formula join type with three options: Default, Inner, or Outer                          | String                                    | No                                    |
| data type           | type                                                                                                                                                                                                                                                                                                                                                                                                         | Indicates the data type.                                                                          | String                                    | No                                    |
| precision           | Indicates the precision.                                                                                                                                                                                                                                                                                                                                                                                     | Integer                                                                                           | No                                        |
| scale               | Indicates the scale.                                                                                                                                                                                                                                                                                                                                                                                         | Integer                                                                                           | No                                        |
| smartTotal          | smartTotal                                                                                                                                                                                                                                                                                                                                                                                                   | Indicates the calculation type of total.                                                          | String                                    | No                                    |
| format              | format                                                                                                                                                                                                                                                                                                                                                                                                       | Contains the header format and value format.                                                      | Format                                    | No                                    |
| subtotalFromBase    | subtotalFromBase                                                                                                                                                                                                                                                                                                                                                                                             | Indicates the subtotal type. True to subtotal from base.                                          | Boolean                                   | No                                    |
| columnNameAlias     | columnNameAlias                                                                                                                                                                                                                                                                                                                                                                                              | This name is used in SQL generation.                                                              | String                                    | No                                    |
| metricFormatType    | metricFormatType                                                                                                                                                                                                                                                                                                                                                                                             | Indicates the metric format type.                                                                 | String                                    | No                                    |
| thresholds          | format                                                                                                                                                                                                                                                                                                                                                                                                       | A list of FormatProperty that defines the format.                                                 | List&lt;FormatProperty&gt;                | No                                    |
| condition           | The filter expression for the threshold.                                                                                                                                                                                                                                                                                                                                                                     | Expression                                                                                        | Yes, if thresholds is provided.           |
| name                | The name of the threshold.                                                                                                                                                                                                                                                                                                                                                                                   | String                                                                                            | No                                        |
| replaceText         | The text used to replace the metric value.                                                                                                                                                                                                                                                                                                                                                                   | String                                                                                            | No                                        |
| semantics           | Indicates the semantics used by the threshold.                                                                                                                                                                                                                                                                                                                                                               | EnumDSSBaseFormType                                                                               | No                                        |
| scope               | Indicates the scope applied by the threshold.                                                                                                                                                                                                                                                                                                                                                                | EnumDSSBaseFormType                                                                               | No                                        |
| enable              | A boolean value that indicates whether this threshold is enabled.                                                                                                                                                                                                                                                                                                                                            | Boolean                                                                                           | No                                        |
| advancedProperties  | vldbProperties                                                                                                                                                                                                                                                                                                                                                                                               | The VLDB Properties that are applicable to metric and their values.                               | LinkedHashMap\<String, PropertyWithValue> | No                                    |

:::info

"subType" cannot be modified through REST API.

:::
