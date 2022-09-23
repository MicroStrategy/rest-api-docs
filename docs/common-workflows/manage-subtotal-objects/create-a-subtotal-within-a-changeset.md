---
title: Workflow Sample - Create a Subtotal within a Changeset
sidebar_label: Create a Subtotal within a Changeset
description: This workflow sample demonstrates how to create a subtotal object through the Modeling service.
---

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

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [`GET /api/projects`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

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
  "mstrUserId": "54F3D26011D2896560009A8E67019608",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "Administrator"
}
```

Sample Response Code: 200 (A new changeset is created successfully.)

## 2. Create a new subtotal using [`POST /api/model/subtotals`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Subtotals/ms-postSubtotal)

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

Sample Response: 201 (The changeset is committed successfully.)

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
