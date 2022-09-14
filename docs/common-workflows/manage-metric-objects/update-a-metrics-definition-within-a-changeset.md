---
title: Workflow Sample - Update a Metric's Definition within a Changeset
sidebar_label: Update a Metric's Definition within a Changeset
description: This workflow sample demonstrates how to update a base formula's definition through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cd346c9a-019b-401a-9470-6097a5d9b24a?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a base formula's definition through the Modeling service.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

You want to update the definition of the `"base_sum(Cost)"` base formula with object ID `1116B53103FC4A72BBACBAED388243D6` to achieve the below changes:

- Modify the expression to `“sum(Profit)-sum(Cost)“`
- Move it to another objects folder with the ID of `8AF48B3D4685C1717B3BDA9804CD1036`
- Rename the base formula to `"Revenue"`

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [`GET /api/projects`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

## 1. Create a changeset using [`POST /api/model/changesets`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "2A131744C91B4915B54A61FFDC528F62",
  "dateCreated": "2021-06-15T03:04:56.613866Z",
  "dateModified": "2021-06-15T03:04:56.613916Z",
  "status": "Ready",
  "schemaEdit": false,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "4bb7n1dhjo860e7tlpchg57hl",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "Administrator"
}
```

Sample Response Code: 200 (A new changeset is created successfully.)

## 2. Update the metric's definition using [`PUT /api/model/metrics/{metricId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Metrics/ms-putMetric)

"subType" cannot be modified through REST API .

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
    "allowAddingUnit": true,
    "subtotalFromBase": true
  },
  "dataType": { "type": "double", "precision": 0, "scale": 0 }
}
```

Sample Curl:

```bash
curl -X PUT "http://demo.microstrategy.com/MicroStrategyLibrary/api//model/metrics/A349A2D143F64F5ED6654696A31FAC63" -H "accept: application/json" -H "X-MSTR-AuthToken: vou86a0sjelh4abm2oh274ghos" -H "X-MSTR-MS-Changeset: E839A2FE06AF4BCB947B678A6E8E6EAA" -H "Content-Type: application/json" -d "{\"information\":{\"name\":\"Cost\"},\"dimty\":{\"dimtyUnits\":[{\"dimtyUnitType\":\"report_base_level\",\"aggregation\":\"normal\",\"filtering\":\"apply\",\"groupBy\":true}],\"excludeAttribute\":false,\"allowAddingUnit\":true},\"dataType\":{\"type\":\"double\",\"precision\":0,\"scale\":0}}"
```

Sample Response Body:

You can view the updated metric's definition in the body of the response.

```json
{  "information": {    "dateCreated": "2022-03-17T09:03:23.096Z",    "dateModified": "2022-03-17T09:03:23.096Z",    "versionId": "C009C064453C6AAD2E12F79861D69A9B",    "primaryLocale": "en-US",    "objectId": "A349A2D143F64F5ED6654696A31FAC63",    "subType": "metric",    "name": "Cost"  },  "expression": {    "text": "Sum(Cost)"  },  "dimty": {    "dimtyUnits": [      {        "dimtyUnitType": "report_base_level",        "aggregation": "normal",        "filtering": "apply",        "groupBy": true      }    ],    "excludeAttribute": false,    "allowAddingUnit": true  },  "conditionality": {    "filter": {      "objectId": "E638359211D5C49EC0000C881FDA1A4F",      "subType": "filter",      "name": "Select a Quarter"    },    "embedMethod": "metric_into_report_filter",    "removeElements": true  },  "metricSubtotals": [    {      "definition": {        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",        "subType": "system_subtotal",        "name": "Total"      },      "implementation": {        "objectId": "B328C60462634223B2387D4ADABEEB53",        "subType": "system_subtotal",        "name": "Average"      }    },    {      "definition": {        "objectId": "078C50834B484EE29948FA9DD5300ADF",        "subType": "system_subtotal",        "name": "Count"      }    },    {      "definition": {        "objectId": "B328C60462634223B2387D4ADABEEB53",        "subType": "system_subtotal",        "name": "Average"      }    },    {      "definition": {        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",        "subType": "system_subtotal",        "name": "Minimum"      }    },    {      "definition": {        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",        "subType": "system_subtotal",        "name": "Maximum"      }    },    {      "definition": {        "objectId": "F225147A4CA0BB97368A5689D9675E73",        "subType": "system_subtotal",        "name": "Aggregation"      },      "implementation": {        "objectId": "078C50834B484EE29948FA9DD5300ADF",        "subType": "system_subtotal",        "name": "Count"      }    }  ],  "aggregateFromBase": false,  "formulaJoinType": "inner",  "smartTotal": "decomposable_false",  "dataType": {    "type": "double",    "precision": 0,    "scale": 0  },  "format": {    "header": [      {        "type": "number_category",        "value": "0"      },      {        "type": "number_decimal_places",        "value": "2"      },      {        "type": "number_thousand_separator",        "value": "true"      },      {        "type": "number_currency_symbol",        "value": "$"      },      {        "type": "number_currency_position",        "value": "0"      },      {        "type": "number_format",        "value": "#,##0.00;(#,##0.00)"      },      {        "type": "number_negative_numbers",        "value": "3"      },      {        "type": "background_fill_color",        "value": "3355443"      },      {        "type": "background_pattern_style",        "value": "1"      },      {        "type": "background_fill_style",        "value": "0"      },      {        "type": "background_gradient_angle",        "value": "0"      },      {        "type": "background_gradient_x_offset",        "value": "0"      },      {        "type": "series_fill_style",        "value": "0"      },      {        "type": "series_fill_color",        "value": "8388608"      },      {        "type": "series_gradient_angle",        "value": "0"      },      {        "type": "series_gradient_x_offset",        "value": "0"      }    ],    "values": [      {        "type": "number_category",        "value": "0"      },      {        "type": "number_decimal_places",        "value": "0"      },      {        "type": "number_format",        "value": "#,##0;(#,##0)"      }    ]  },  "subtotalFromBase": true,  "columnNameAlias": "test",  "metricFormatType": "reserved",  "thresholds": []}Response headers
```

Response Code: 200 (The Metric's definition is updated successfully in the changeset.)

## 3. Commit a changeset using [`POST /api/model/changesets/{ChangesetId}/commit`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"
```

Sample Response Body:

```json
{
  "id": "4E830DF576A24E4B9120455EE576EB51",
  "dateCreated": "2021-02-23T10:51:04.336913300Z",
  "dateModified": "2021-02-23T10:51:18.780285700Z",
  "status": "Ready",
  "schemaEdit": false,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "CFC4E856492FEF1A2BB6F1BC37ABFD06",
  "userMetadataLocale": "en-US",
  "userDateNumberLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "MS"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

## 4. Delete a changeset using [`DELETE /api/model/changesets/{ChangesetId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)

The model for the definition of a metric can be updated with the following fields:

| Fields              | Name                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                       | Data Type                       | Required?                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------- |
| information         | name                                                                                                                                                                                                                                                                                                                                                                                                         | Name of the metric. This is the most user-friendly value that can be used to identify the metric. | String                          | Yes                                   |
| destinationFolderId | Folder ID where the new metric is saved.                                                                                                                                                                                                                                                                                                                                                                     | String                                                                                            | Yes                             |
| expression          | text                                                                                                                                                                                                                                                                                                                                                                                                         | A human readable, but non-parsable text, describing the expression.                               | String                          | No                                    |
| tree                | A tree data structure fully defining the expression.                                                                                                                                                                                                                                                                                                                                                         | List&lt;ObjectInfoReference&gt;                                                                   | No                              |
| tokens              | A list of parsed tokens.                                                                                                                                                                                                                                                                                                                                                                                     | List&lt;ObjectInfoReference&gt;                                                                   | No                              |
| dimty               | dimtyUnits                                                                                                                                                                                                                                                                                                                                                                                                   | Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated.  | List&lt;ObjectInfoReference&gt; | No                                    |
| excludeAttribute    | If true, exclude attributes absent in report or level. If false, do not exclude.                                                                                                                                                                                                                                                                                                                             | Boolean                                                                                           | No                              |
| allowAddingUnit     | This setting allows other users to add extra units to this definition.                                                                                                                                                                                                                                                                                                                                       | Boolean                                                                                           | No                              |
| prompt              | This points to the level prompt.                                                                                                                                                                                                                                                                                                                                                                             | ObjectInfoReference                                                                               | No                              |
| conditionality      | filter                                                                                                                                                                                                                                                                                                                                                                                                       | The reference to a filter.                                                                        | ObjectInfoReference             | No                                    |
| prompt              | The reference to an object prompt.                                                                                                                                                                                                                                                                                                                                                                           | ObjectInfoReference                                                                               | No                              |
| embedMethod         | Indicates the embedding method for the filter with report filter.                                                                                                                                                                                                                                                                                                                                            | EnumDSSEmbedMethod                                                                                | No                              |
| removeElements      | Indicates whether to remove related report filter elements. True to remove.                                                                                                                                                                                                                                                                                                                                  | Boolean                                                                                           | No                              |
| metricSubtotals     | definition                                                                                                                                                                                                                                                                                                                                                                                                   | An object reference which reference to the subtotal object.                                       | ObjectInfoReference             | Yes, if metricSubtotals is provided . |
| implementation      | When the total subtotal function is set to one object, this field will reference to that object only when the definition field references to Total.<br/><br/>When the dynamic aggregation function is set to one object, this field will reference to that object only when the definition field references to Aggregation.<br/><br/>For subtotals except Total and Aggregation, this field should be empty. | ObjectInfoReference                                                                               | No                              |
| aggregateFromBase   | aggregateFromBase                                                                                                                                                                                                                                                                                                                                                                                            | Indicates the aggregation type. True to aggregate from base.                                      | Boolean                         | No                                    |
| FormulaJoinType     | formulaJoinType                                                                                                                                                                                                                                                                                                                                                                                              | Indicates formula join type with three options: Default, Inner, or Outer                          | String                          | No                                    |
| data type           | type                                                                                                                                                                                                                                                                                                                                                                                                         | Indicates the data type.                                                                          | String                          | No                                    |
| precision           | Indicates the precision.                                                                                                                                                                                                                                                                                                                                                                                     | Integer                                                                                           | No                              |
| scale               | Indicates the scale.                                                                                                                                                                                                                                                                                                                                                                                         | Integer                                                                                           | No                              |
| smartTotal          | smartTotal                                                                                                                                                                                                                                                                                                                                                                                                   | Indicates the calculation type of total.                                                          | String                          | No                                    |
| format              | format                                                                                                                                                                                                                                                                                                                                                                                                       | Contains the header format and value format.                                                      | Format                          | No                                    |
| subtotalFromBase    | subtotalFromBase                                                                                                                                                                                                                                                                                                                                                                                             | Indicates the subtotal type. True to subtotal from base.                                          | Boolean                         | No                                    |
| columnNameAlias     | columnNameAlias                                                                                                                                                                                                                                                                                                                                                                                              | This name is used in SQL generation.                                                              | String                          | No                                    |
| metricFormatType    | metricFormatType                                                                                                                                                                                                                                                                                                                                                                                             | Indicates the metric format type.                                                                 | String                          | No                                    |
| thresholds          | format                                                                                                                                                                                                                                                                                                                                                                                                       | A list of FormatProperty that defines the format.                                                 | List&lt;FormatProperty&gt;      | No                                    |
| condition           | The filter expression for the threshold.                                                                                                                                                                                                                                                                                                                                                                     | Expression                                                                                        | Yes, if thresholds is provided. |
| name                | The name of the threshold.                                                                                                                                                                                                                                                                                                                                                                                   | String                                                                                            | No                              |
| replaceText         | The text used to replace the metric value.                                                                                                                                                                                                                                                                                                                                                                   | String                                                                                            | No                              |
| semantics           | Indicates the semantics used by the threshold.                                                                                                                                                                                                                                                                                                                                                               | EnumDSSBaseFormType                                                                               | No                              |
| scope               | Indicates the scope applied by the threshold.                                                                                                                                                                                                                                                                                                                                                                | EnumDSSBaseFormType                                                                               | No                              |
| enable              | A boolean value that indicates whether this threshold is enabled.                                                                                                                                                                                                                                                                                                                                            | Boolean                                                                                           | No                              |
