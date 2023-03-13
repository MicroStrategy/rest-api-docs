---
title: Create an incremental refresh report with advanced properties
sidebar_label: Create an IRR with advanced properties
description: This topic covers several workflows for creating a new Incremental Refresh Report with advanced properties through the Modeling service.
---

<Available since="2021 Update 6" />

This topic covers several workflows for creating a new Incremental Refresh Report with advanced properties through the Modeling service.

You want to create a new Incremental Refresh Report and name it “Original Test" in the destination folder of `8A1831FF494F528D02A4A8BF5FB73459`. The target cube of the Incremental Refresh Report is called `IC01` with the object ID of `946C0C0142C5210D01FEA1AA6B83F202`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

You also want to set some advanced properties to a specific value instead of the default value.

- Metric Level Determination under Analytical Engine to the option of **Include higher-level related attributes in metric level (Deprecated)**.
- Null Checking for Analytical Engine under Analytical to the option of **Scalar and aggregation calculations treat NULL as zero (Deprecated)**.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Create a new Incremental Refresh Report using [POST /api/model/incrementalRefresh](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createIncrementalRefreshReport).

To create the new Incremental Refresh Report, you must submit the request body with the correct information.

The response can change based on the request parameters provided by the caller. Use the following parameters:

- Header: `X-MSTR-authToken` - The authorization token
- Header: `X-MSTR-ProjectID` - The ID of the project
- Parameter: `showFilterTokens`
  - Specify whether the Incremental Refresh Report `filter` is returned in `tokens` format, along with `text` and `tree` formats.
  - If omitted or `false`, only `text` and `tree` formats are returned.
  - If `true`, all `text`, `tree`, and `tokens` formats are returned.

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "report_increment_refresh",
    "name": "Original Test"
  },
  "targetCube": {
    "objectId": "946C0C0142C5210D01FEA1AA6B83F202",
    "subType": "report_cube",
    "name": "IC01"
  },
  "incrementType": "filter",
  "refreshType": "update",
  "filter": {
    "text": "Year = 2016, 2017, 2015",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "C131BAB2177044AF85E52C40F75F0A35",
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
          },
          {
            "display": "2015",
            "elementId": "h2015"
          }
        ],
        "function": "in"
      }
    }
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[MetricLevelDetermination]": {
        "name": "MetricLevelDetermination",
        "value": "true",
        "type": "boolean",
        "resolvedLocation": "report"
      },
      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {
        "name": "NullCheckingForAnalyticalEngine",
        "value": "2",
        "type": "int32",
        "resolvedLocation": "report"
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X POST "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: qfjlu36r0cjpnhadp2kj0ud45s" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
-H "Content-Type: application/json" \
-d '{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","subType":"report_increment_refresh","name":"Original Test"},"targetCube":{"objectId":"946C0C0142C5210D01FEA1AA6B83F202","subType":"report_cube","name":"IC01"},"incrementType":"filter","refreshType":"update","filter":{"text":"Year = 2016, 2017, 2015","tree":{"type":"predicate_element_list","predicateId":"C131BAB2177044AF85E52C40F75F0A35","predicateTree":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"elements":[{"display":"2016","elementId":"h2016"},{"display":"2017","elementId":"h2017"},{"display":"2015","elementId":"h2015"}],"function":"in"}}},"advancedProperties":{"vldbProperties":{"[AnalyticalEngineProperties].[MetricLevelDetermination]":{"name":"MetricLevelDetermination","value":"true","type":"boolean","resolvedLocation":"report"},"[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]":{"name":"NullCheckingForAnalyticalEngine","value":"2","type":"int32","resolvedLocation":"report"}}}}'
```

Sample Response Body:

You can view the Incremental Refresh Report definition in the body of the response. Below is an example of filter in `text` and `tree` formats.

```json
{
  "information": {
    "dateCreated": "2022-06-10T07:17:20.563Z",
    "dateModified": "2022-06-10T07:17:20.563Z",
    "versionId": "3E14625B45C27EF65DDF5AA3A2087788",
    "primaryLocale": "en-US",
    "objectId": "BC95299E4447D23A6EA4E9B1049F4221",
    "subType": "report_increment_refresh",
    "name": "Original Test"
  },
  "targetCube": {
    "objectId": "946C0C0142C5210D01FEA1AA6B83F202",
    "subType": "report_cube",
    "name": "IC01"
  },
  "incrementType": "filter",
  "refreshType": "update",
  "filter": {
    "text": "Year = 2016, 2017, 2015",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "86827BEDB1EB4B6BB2BF1141A10E2ED5",
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
          },
          {
            "display": "2015",
            "elementId": "h2015"
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
        "resolvedLocation": "default"
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
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
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
