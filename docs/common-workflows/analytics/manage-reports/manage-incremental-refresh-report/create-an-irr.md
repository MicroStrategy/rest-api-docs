---
title: "Sample workflow: Create an incremental refresh report"
sidebar_label: Create an IRR
description: This workflow sample demonstrates how to create a new Incremental Refresh Report object through the Modeling service.
---

<Available since="2021 Update 6" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-54f5b582-05ac-4f2d-88f9-98f36dd8373c?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new Incremental Refresh Report object through the Modeling service.

You want to create a new Incremental Refresh Report as defined in the below screenshot and name it `“YearInList_Insert` in the destination folder of `31727EF14E35DAA437B716BA56466585`. The target cube of the Incremental Refresh Report is called `Year_Country_Category_3` with the object ID of `F71F4C0E4B8F73B143B0DD83EEB47F43`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

![IRR Report Editor 2](../../../../images/irr_report_editor2.png)

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a new incremental refresh report using [POST /api/model/incrementalRefresh](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/post_api_model_incrementalRefresh)

To create the new Incremental Refresh Report, you must submit the request body with the correct information.

In `information`, you must provide the `name`, `subtype`, and `destinationFolderID` for the Incremental Refresh Report you want to create. In `targetCube`, you must provide the information for the base cube that the Incremental Refresh Report is built on.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "DD7E4D4346866BFBBFA5078DACD21A36",
    "subType": "report_increment_refresh",
    "name": "YearInList_Insert"
  },
  "targetCube": {
    "objectId": "F71F4C0E4B8F73B143B0DD83EEB47F43",
    "subType": "report_cube"
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

Sample Curl:

```bash
curl -X POST "http://10.23.33.151:8080/MicroStrategyLibrary/api/model/incrementalRefresh" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: 7frmogrqns31jsc9l5gvd6qj6f" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
-H "Content-Type: application/json" \
-d '{"information":{"destinationFolderId":"DD7E4D4346866BFBBFA5078DACD21A36","subType":"report_increment_refresh","name":"YearInList_Insert"},"targetCube":{"objectId":"F71F4C0E4B8F73B143B0DD83EEB47F43","subType":"report_cube"},"incrementType":"filter","refreshType":"insert","filter":{"text":"Year <> 2014, 2015","tree":{"type":"predicate_element_list","predicateId":"3CFB65D310F44BF0ADDB37E5F5005CF9","predicateTree":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"elements":[{"display":"2014","elementId":"h2014"},{"display":"2015","elementId":"h2015"}],"function":"not_in"}}}}'
```

Sample Response Body:

You can view the new Incremental Refresh Report definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-05-27T08:05:11.098Z",
    "dateModified": "2022-05-27T08:05:11.098Z",
    "versionId": "63B0740B4174A00676908F9BBAC1471A",
    "primaryLocale": "en-US",
    "objectId": "9597ED4646F66780A6AA059CE1159D7F",
    "subType": "report_increment_refresh",
    "name": "YearInList_Insert"
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
      "predicateId": "BC02C58528CA46338014CA9BDD5F780A",
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

Response Code: 201 (An Incremental Refresh Report is created successfully.)

## The model for the definition of the incremental refresh report

The model for the definition of the Incremental Refresh Report can be represented with the following fields.

:::info

`objectID`, `dateCreated`, `dateModified`, and `versionId` are generated automatically. As of MicroStrategy 2021 Update 6, only `en-US` is available for `primaryLocale`.

:::

- (Required) `information`
  - (Required) `name` (`String`) - Name of the IRR. This is the most user-friendly value that can be used to identify the IRR.
  - (Required) `subtype` (`String`) - For IRR, `subType` is `report_increment_refresh`.
  - (Required) `destinationFolderId` (`String`) - Folder ID where the new IRR is saved.
- (Required) `targetCube`
  - (Required) `objectID` (`String`) - The object ID of the target cube that the IRR is built on.
  - (Required) `subtype` (`String`) - The `subtype` of the target cube must be `report_cube`.
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
