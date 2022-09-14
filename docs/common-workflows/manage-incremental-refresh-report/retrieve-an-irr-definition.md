---
title: Workflow Sample - Retrieve an Incremental Refresh Report Definition
sidebar_label: Retrieve an IRR Definition
description: This topic covers several workflows to retrieve an Incremental Refresh Report definition.
---

This topic covers several workflows to retrieve an Incremental Refresh Report definition.

You want to get the definition of the `YearInList_Insert` Incremental Refresh Report object as shown in the below screenshot. The object ID of the Incremental Refresh Report is  `B5905F5C4565159A5AEAF78E71DC8BF6` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

![IRR Report Editor](../../images/IRR_report_editor.png)

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

The response can change based on the request parameters provided by the caller. Use the following parameters:

- Header: `X-MSTR-authToken` - The authorization token
- Header: `X-MSTR-ProjectID` - The ID of the project
- Parameter: `showFilterTokens`
  - Specify whether the Incremental Refresh Report `filter` is returned in `tokens` format, along with `text` and `tree` formats.
  - If omitted or `false`, only `text` and `tree` formats are returned.
  - If `true`, all `text`, `tree`, and `tokens` formats are returned.

## Retrieve an Incremental Refresh Report Definition

Retrieve the Incremental Refresh Report definition using [GET /api/model/incrementalRefresh/{incrementalRefreshReportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/get_api_model_incrementalRefresh__incrementalRefreshReportId_).

Sample Curl:

```bash
curl -X GET "http://10.23.33.151:8080/MicroStrategyLibrary/api/model/incrementalRefresh/B5905F5C4565159A5AEAF78E71DC8BF6" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: 1etbm9r9i7ngvcbudaarg13m93" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the Incremental Refresh Report definition in the body of the response. Below is an example of the filter in `text` and `tree` formats.

```json
{
  "information": {
    "dateCreated": "2022-04-13T09:42:20.000Z",
    "dateModified": "2022-04-13T09:45:58.000Z",
    "versionId": "41241D044FD62C905E9AA69D9149B863",
    "primaryLocale": "en-US",
    "objectId": "B5905F5C4565159A5AEAF78E71DC8BF6",
    "subType": "report_increment_refresh",
    "name": "YearInList_Insert"
  },
  "targetCube": {
    "objectId": "F71F4C0E4B8F73B143B0DD83EEB47F43",
    "subType": "report_cube",
    "name": "Year_Country_Category_3Metrics"
  },
  "incrementType": "filter",
  "refreshType": "insert",
  "filter": {
    "text": "Year <> 2014, 2015",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "3CFB65D310F44BF0ADDB37E5F5005CF9",
      "predicateTree": {
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "elements": [
          {
            "display": "2014",
            "elementId": "h2014"
          },
          {
            "display": "2015",
            "elementId": "h2015"
          }
        ],
        "function": "not_in"
      }
    }
  }
}
```

Response Code: 200 (Incremental Refresh Report's definition is returned successfully.)

## Retrieve an Incremental Refresh Report Definition With Filter Using Tokens

Retrieve the Incremental Refresh Report definition using [GET /api/model/incrementalRefresh/{incrementalRefreshReportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/get_api_model_incrementalRefresh__incrementalRefreshReportId_).

Sample Curl:

```bash
curl -X GET "http://10.23.33.151:8080/MicroStrategyLibrary/api/model/incrementalRefresh/B5905F5C4565159A5AEAF78E71DC8BF6?showFilterTokens=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: onlh5h70iu6evblgafkpb5ve3e" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the Incremental Refresh Report definition in the body of the response in `text`, `tree`, and `tokens` formats.

```json
{
  "information": {
    "dateCreated": "2022-04-13T09:42:20.000Z",
    "dateModified": "2022-04-13T09:45:58.000Z",
    "versionId": "41241D044FD62C905E9AA69D9149B863",
    "primaryLocale": "en-US",
    "objectId": "B5905F5C4565159A5AEAF78E71DC8BF6",
    "subType": "report_increment_refresh",
    "name": "IYearInList_Insert"
  },
  "targetCube": {
    "objectId": "F71F4C0E4B8F73B143B0DD83EEB47F43",
    "subType": "report_cube",
    "name": "IC01_Year+Country+Category+3Metrics"
  },
  "incrementType": "filter",
  "refreshType": "insert",
  "filter": {
    "text": "Year <> 2014, 2015",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "15841CA2D9754625A49B45CC5E6A57FD",
      "predicateTree": {
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "elements": [
          {
            "display": "2014",
            "elementId": "h2014"
          },
          {
            "display": "2015",
            "elementId": "h2015"
          }
        ],
        "function": "not_in"
      }
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
        "value": "Year",
        "type": "object_reference",
        "target": {
          "dateCreated": "2001-01-02T20:48:10.000Z",
          "dateModified": "2022-05-09T09:37:11.000Z",
          "versionId": "05BB3D284698B0542866C6A5DBA355BC",
          "primaryLocale": "en-US",
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        }
      }
    ]
  }
}
```

Response Code: 200 (Incremental Refresh Report's definition is returned successfully.)
