---
title: Update the incremental refresh report definition
sidebar_label: Update an IRR definition
description: This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service.
---

<Available since="2021 Update 6" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-54f5b582-05ac-4f2d-88f9-98f36dd8373c?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service.

You want to update the definition of the `YearInList_Insert` Incremental Refresh Report with the changes listed below. The object ID is `5A7282CC41E6C9B5DE2772A16B073B21`.

- Modify the destination folder to another one.
- Change the target cube to another one.
- Modify the element list of the filter.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Update the incremental refresh report using [PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-putIncrementalRefreshReport)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "name": "YearInList_Insert"
  },
  "targetCube": {
    "objectId": "1154C0014435FB4E3C69ABA7BDC8E8D8",
    "subType": "report_cube",
    "name": "IC02_Year+Country+Category+3Metrics"
  },
  "filter": {
    "text": "Year <> 2014",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "DFADE548DBD144079C2F3AFE7CDE3AE1",
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
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "[Not In]",
        "type": "function",
        "target": {
          "dateCreated": "1900-01-01T00:00:00.000Z",
          "dateModified": "2021-02-26T03:18:34.000Z",
          "versionId": "A3808F5B4E6620E24102E48D99550BB2",
          "primaryLocale": "en-US",
          "objectId": "8107C348DD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": "Not In",
          "description": "Returns TRUE if Arg1 is not in Arg2."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "{Year=2014}",
        "type": "elements"
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
```

Sample Curl:

```bash
curl -X PUT "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh/5A7282CC41E6C9B5DE2772A16B073B21" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: k2o767js136lqdr8fm6j6kbm9o" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -\
H "Content-Type: application/json" \
-d '{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","name":"YearInList_Insert_test"},"targetCube":{"objectId":"1154C0014435FB4E3C69ABA7BDC8E8D8","subType":"report_cube","name":"Copy of IC01_Year+Country+Category+3Metrics"},"filter":{"text":"Year <> 2014","tree":{"type":"predicate_element_list","predicateId":"DFADE548DBD144079C2F3AFE7CDE3AE1","predicateTree":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"elements":[{"display":"2014","elementId":"h2014"}],"function":"not_in"}},"tokens":[{"level":"resolved","state":"initial","value":"%","type":"character"},{"level":"resolved","state":"initial","value":"Year","type":"object_reference","target":{"dateCreated":"2001-01-02T20:48:10.000Z","dateModified":"2022-05-09T09:37:11.000Z","versionId":"05BB3D284698B0542866C6A5DBA355BC","primaryLocale":"en-US","objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"}},{"level":"resolved","state":"initial","value":"[Not In]","type":"function","target":{"dateCreated":"1900-01-01T00:00:00.000Z","dateModified":"2021-02-26T03:18:34.000Z","versionId":"A3808F5B4E6620E24102E48D99550BB2","primaryLocale":"en-US","objectId":"8107C348DD9911D3B98100C04F2233EA","subType":"function","name":"Not In","description":"Returns TRUE if Arg1 is not in Arg2."}},{"level":"resolved","state":"initial","value":"{Year=2014}","type":"elements"},{"level":"resolved","state":"initial","value":"","type":"end_of_text"}]}}'
```

Sample Response Body:

You can view the updated Incremental Refresh Report definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-06-08T07:41:37.939Z",
    "dateModified": "2022-06-08T08:12:30.611Z",
    "versionId": "50C2A0804F78CA721EA8A7B408C36FEA",
    "primaryLocale": "en-US",
    "objectId": "5A7282CC41E6C9B5DE2772A16B073B21",
    "subType": "report_increment_refresh",
    "name": "YearInList_Insert_test",
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"
  },
  "targetCube": {
    "objectId": "1154C0014435FB4E3C69ABA7BDC8E8D8",
    "subType": "report_cube",
    "name": "Copy of IC01_Year+Country+Category+3Metrics"
  },
  "incrementType": "filter",
  "refreshType": "insert",
  "filter": {
    "text": "Year <> 2014",
    "tree": {
      "type": "predicate_element_list",
      "predicateId": "99D9C22039A54FA787791A297AB4B534",
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
          }
        ],
        "function": "not_in"
      }
    }
  }
}
```

Response Code: 200 (The incremental refresh report's definition is updated successfully.)

The model for the definition of the Incremental Refresh Report can be represented with the following fields.

:::info

`subType` cannot be modified through REST API.

:::

- `information`
  - `name` (`String`) - Name of the IRR. This is the most user-friendly value that can be used to identify the IRR.
  - `destinationFolderId` (`String`) - Folder ID where the new IRR is saved.
- `targetCube`
  - `objectID` (`String`) - The object ID of the target cube that the IRR is built on.
  - `name` (`String`) - The name of the target cube.
- `incrementType` (`String`) - The incremental type for IRR, which can only be a filter and report.
- `refreshType` (`String`) - The refresh type for IRR, which can only be `update`, `insert`, `delete`, `update_only`, and `replace`.
- `filter`
  - `text` (`String`) - The text of the filter name.
  - `tree` (`ExpressionNode`) - A tree data structure fully defining the filter.
  - `tokens` (`List<ExpressionToken>`) - A list of parsed tokens for the filter.
- `template`
  - `rows` (`List<Objects>`) - A list of objects on the row of IRR template.
  - `columns` (`List<Objects>`) - A list of objects on the column of IRR template.
  - `pageby` (`List<Objects>`) - A list of objects on the pageby of IRR template.
