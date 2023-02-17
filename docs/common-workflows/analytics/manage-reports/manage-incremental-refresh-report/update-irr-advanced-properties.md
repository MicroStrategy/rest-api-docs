---
title: Update and incremental refresh report advanced properties
sidebar_label: Update IRR advanced properties
description: This topic covers several workflows for updating an Incremental Refresh Report advanced properties through the Modeling service.
---

<Available since="2021 Update 6" />

This topic covers several workflows for updating an Incremental Refresh Report advanced properties through the Modeling service.

You want to create a new Incremental Refresh Report and name it `YearInList_Insert` in the destination folder of `8A1831FF494F528D02A4A8BF5FB73459`. The target cube of Incremental Refresh Report is called `Year_Country_Category_3` with the object ID of `F71F4C0E4B8F73B143B0DD83EEB47F43`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`. You also want to set some advanced properties of **Metric Join Type** and **Attribute Join Type**.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Update the incremental refresh report using [PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/put_api_model_incrementalRefresh__incrementalRefreshReportId_)

To update the Incremental Refresh Report, you must submit the request body with the correct information.

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
  "advancedProperties": {
    "metricJoinTypes": {
      "7FD5B69611D5AC76C000D98A4CC5F24F": {
        "metric": {
          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
          "subType": "metric",
          "name": "Cost"
        },
        "joinType": "inner",
        "resolvedLocation": "report_target"
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
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X PUT "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh/BC95299E4447D23A6EA4E9B1049F4221?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: nmrptgf9iuto1akvjv6vujs6g4" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
-H "Content-Type: application/json" \
-d '{"advancedProperties":{"metricJoinTypes":{"7FD5B69611D5AC76C000D98A4CC5F24F":{"metric":{"objectId":"7FD5B69611D5AC76C000D98A4CC5F24F","subType":"metric","name":"Cost"},"joinType":"inner","resolvedLocation":"report_target"}},"attributeJoinTypes":{"8D679D5111D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"noParticipationInPreserveRow":true,"resolvedLocation":"report_target"}}}}'
```

Sample Response Body:

You can view the Incremental Refresh Report definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-06-10T07:17:20.563Z",
    "dateModified": "2022-06-10T07:41:09.509Z",
    "versionId": "96287309412CD7FA1BB89C993CF028D3",
    "primaryLocale": "en-US",
    "objectId": "BC95299E4447D23A6EA4E9B1049F4221",
    "subType": "report_increment_refresh",
    "name": "Original Test",
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"
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
      "predicateId": "0B3E24AD3F0B47FAAD99CC1DE696ED03",
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
