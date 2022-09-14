---
title: Workflow Sample - Retrieve the Incremental Refresh Report Definition With Advanced Properties
sidebar_label: Retrieve an IRR Definition with Advanced Properties
description: This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value.
---

This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value.

The object ID of the Incremental Refresh Report is  `B17F066940FA684A00C1D9AC5FC95754` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Get the definition of the specified Incremental Refresh Report with advanced properties using [GET /api/model/incrementalRefresh/{incrementalRefreshReportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/get_api_model_incrementalRefresh__incrementalRefreshReportId_)

The response can change based on the request parameters provided by the caller. Use the following parameters:

- Header: `X-MSTR-authToken` - The authorization token
- Header: `X-MSTR-ProjectID` - The ID of the project
- Parameter: `showFilterTokens`
  - Specify whether the Incremental Refresh Report `filter` is returned in `tokens` format, along with `text` and `tree` formats.
  - If omitted or `false`, only `text` and `tree` formats are returned.
  - If `true`, all `text`, `tree`, and `tokens` formats are returned.

Sample Curl:

```bash
curl -X GET "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh/B17F066940FA684A00C1D9AC5FC95754?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: fg8fimprk63ige5d83054oopkd" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the Incremental Refresh Report definition in the body of the response. Below is an example of a filter in `“text“` and `“tree“` formats.

```json
{
  "information": {
    "dateCreated": "2022-06-10T03:39:43.694Z",
    "dateModified": "2022-06-10T03:39:43.694Z",
    "versionId": "D67D158B457FA8563B4EF9AC9DE3F859",
    "primaryLocale": "en-US",
    "objectId": "B17F066940FA684A00C1D9AC5FC95754",
    "subType": "report_increment_refresh",
    "name": "IRR_IC01_report"
  },
  "targetCube": {
    "objectId": "9878A08A41A93506FCBA9B91B2665D88",
    "subType": "report_cube",
    "name": "IC01_VLDB_all_4_change"
  },
  "incrementType": "report",
  "refreshType": "update",
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
    "text": "Year = 2016, 2017",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "C3CD0B2575C24F639C4E9DCD16722B70",
      "predicateTree": {
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "elements": [
          {
            "display": "2016",
            "elementId": "h2016"
          },
          {
            "display": "2017",
            "elementId": "h2017"
          }
        ],
        "function": "in"
      }
    }
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {
        "name": "ConsolidationSubtotal",
        "value": "true",
        "type": "boolean",
        "resolvedLocation": "default"
      },
      "[MDX Syntax].[MDX Add Fake Measure]": {
        "name": "MDX Add Fake Measure",
        "value": "1",
        "type": "int32",
        "resolvedLocation": "default"
      }
    },
    "metricJoinTypes": {
      "7FD5B69611D5AC76C000D98A4CC5F24F": {
        "metric": {
          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
          "subType": "metric",
          "name": "Cost"
        },
        "joinType": "inner",
        "resolvedLocation": "report_target"
      },
      "4C051DB611D3E877C000B3B2D86C964F": {
        "metric": {
          "objectId": "4C051DB611D3E877C000B3B2D86C964F",
          "subType": "metric",
          "name": "Profit"
        },
        "joinType": "inner",
        "resolvedLocation": "default"
      }
    },
    "attributeJoinTypes": {
      "8D679D5111D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "noParticipationInPreserveRow": true,
        "resolvedLocation": "report_target"
      },
      "8D679D3711D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Category"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      }
    }
  }
}
```

Response Code: 200 (Incremental Refresh Report's definition is returned successfully.)
