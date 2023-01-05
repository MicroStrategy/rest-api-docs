---
title: Workflow sample - Create a subtotal within a changeset
sidebar_label: Create a subtotal within a changeset
description: This workflow sample demonstrates how to create a subtotal object through the Modeling service.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0054ca44-40a6-4387-b766-35fc5f00e428?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a subtotal object through the Modeling service.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

You want to create a new "Max" subtotal object in the destination folder of `31727EF14E35DAA437B716BA56466585`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md).

:::

## Create a new subtotal using [POST /api/model/subtotals](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subtotals/ms-postSubtotal)

In `"Information"`, you must provide `name` and `destinationFolderID` for the metric you want to create.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "31727EF14E35DAA437B716BA56466585",
    "subType": "metric_subtotal",
    "name": "Custom_Max"
  },
  "expression": {
    "text": "Revenue",
    "tokens": [
      {
        "level": "resolved",
        "state": "initial",
        "value": "Revenue",
        "type": "object_reference",
        "target": {
          "dateCreated": "2022-03-07T09:12:09.283Z",
          "dateModified": "2022-03-07T09:12:09.283Z",
          "versionId": "D62E22D14A34757568AEF480BF7D96AE",
          "primaryLocale": "en-US",
          "objectId": "1116B53103FC4A72BBACBAED388243D6",
          "subType": "agg_metric",
          "name": "Revenue"
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "{",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "@",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "}",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "",
        "type": "end_of_text"
      }
    ]
  },
  "dimty": {
    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]
  }
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51" -H "Content-Type: application/json" -d "{\"information\":{\"destinationFolderId\":\"31727EF14E35DAA437B716BA56466585\",\"subType\":\"metric_subtotal\",\"name\":\"Custom_Max\"},\"expression\":{\"text\":\"Revenue\",\"tree\":{\"type\":\"object_reference\",\"target\":{\"objectId\":\"1116B53103FC4A72BBACBAED388243D6\",\"subType\":\"agg_metric\",\"name\":\"Revenue\"},\"isIndependent\":0}},\"dimty\":{\"dimtyUnits\":[{\"dimtyUnitType\":\"report_level\",\"relativePosition\":0}]}}"
```

Sample Response Body:

You can view the new subtotal's definition in the body of the response.

`objectID`, `dateCreated`, `dateModified`, and `versionId` are generated automatically. Currently, only `en-US` is available for `primaryLocale`.

```json
{
  "information": {
    "versionId": "45873EBD4D284B0AB11D8319AA1E199C",
    "primaryLocale": "en-US",
    "objectId": "4EACBD0A675444F486D6E8B15D780553",
    "subType": "metric_subtotal",
    "name": "Custom_Max",
    "destinationFolderId": "31727EF14E35DAA437B716BA56466585"
  },
  "expression": {
    "text": "Revenue",
    "tree": {
      "type": "object_reference",
      "target": {
        "objectId": "1116B53103FC4A72BBACBAED388243D6",
        "subType": "agg_metric",
        "name": "Revenue"
      },
      "isIndependent": 0
    }
  },
  "dimty": {
    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]
  }
}
```

Response Code: 201 (A new subtotal is created successfully in the changeset.)

The model for the definition of a subtotal can be updated with the following fields:

| Fields      | Name                | Description                                                                                           | Data Type                       | Required? |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------- | --------- |
| information | name                | Name of the subtotal. This is the most user-friendly value that can be used to identify the subtotal. | String                          | Yes       |
|             | subtype             | For the subtotal, `subType` is `metric_subtotal`.                                                     | String                          | Yes       |
|             | destinationFolderId | Folder ID where the new metric is saved.                                                              | String                          | Yes       |
| expression  | text                | A human readable, but non-parsable text, describing the expression.                                   | String                          | No        |
|             | tree                | A tree data structure fully defining the expression.                                                  | List&lt;ObjectInfoReference&gt; | No        |
|             | tokens              | A list of parsed tokens.                                                                              | List&lt;ObjectInfoReference&gt; | No        |
| dimty       | dimtyUnits          | Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated.      | List&lt;ObjectInfoReference&gt; | No        |
|             | allowAddingUnit     | This setting allows other users to add extra units to this definition.                                | Boolean                         | No        |
