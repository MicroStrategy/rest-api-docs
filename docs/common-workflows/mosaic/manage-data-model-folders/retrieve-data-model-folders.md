---
title: Retrieve data model folders
description: This workflow demonstrates how to retrieve data model folders using REST API.
---

<Available since="Strategy (September 2025)" />

This workflow sample demonstrates how to retrieve one or more data model folders using the REST API with and without a changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

- [Retrieve a data model folder](#retrieve-a-data-model-folder)
- [Retrieve data model folders](#retrieve-data-model-folders)

A detailed description of each step of this workflow is listed below.

## Retrieve a data model folder

You can retrieve a specific data model folder including a data model schema or a custom folder. In the response, you can view basic information of the folder and its contents, such as attributes and metrics.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/folders/\{folderId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelFolder)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/folders/06E86BB031E443889CCABC6896D39829' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/folders/06E86BB031E443889CCABC6896D39829' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "dateCreated": "2025-08-20T06:12:34.264Z",
    "dateModified": "2025-08-20T06:51:43.639Z",
    "versionId": "52B000BE44ECFCF688581096E3745FD6",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "06E86BB031E443889CCABC6896D39829",
    "subType": "folder",
    "name": "attributes",
    "destinationFolderId": "3567B6C7338D4CFFB2F03879C4CB831D"
  },
  "contents": [
    {
      "dateCreated": "2025-08-20T06:04:55.303Z",
      "dateModified": "2025-08-20T06:12:34.264Z",
      "versionId": "6324AEB64689D526B216A08F92B96019",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "FF23DFFA45224C3DA18FA1A46672CCCD",
      "subType": "attribute",
      "name": "Month",
      "description": "Represents the year and month (YYYYMM) for tracking sales trends over time."
    },
    {
      "dateCreated": "2025-08-20T06:04:55.303Z",
      "dateModified": "2025-08-20T06:12:34.264Z",
      "versionId": "6324AEB64689D526B216A08F92B96019",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "FFA2DF297AAC4EDA9F8DA28A9EC8FBBF",
      "subType": "attribute",
      "name": "Call Center",
      "description": "Unique identifier for the call center, linking sales data to specific call center operations."
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Retrieve data model folders

You can also retrieve data model folders. Parameters include pagination options such as `limit` and `offset`.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/folders](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelFolders)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/folders?limit=1&offset=2' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/folders?limit=1&offset=2' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response

- Response Body:

```json
{
  "offset": 2,
  "limit": 1,
  "total": 4,
  "folders": [
    {
      "information": {
        "dateCreated": "2025-08-20T06:12:34.264Z",
        "dateModified": "2025-08-20T06:12:34.264Z",
        "versionId": "6324AEB64689D526B216A08F92B96019",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "CFD4ECBE2F594F349FE8664283CAA14C",
        "subType": "folder",
        "name": "base metrics",
        "destinationFolderId": "3567B6C7338D4CFFB2F03879C4CB831D"
      },
      "contents": [
        {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:12:34.264Z",
          "versionId": "6324AEB64689D526B216A08F92B96019",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "43965A41AA8A466C9EE5F3730A2A8692",
          "subType": "fact_metric",
          "name": "Gross Dollar Sales",
          "description": "Gross revenue from sales before deductions, useful for assessing overall sales performance."
        },
        {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:12:34.264Z",
          "versionId": "6324AEB64689D526B216A08F92B96019",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "95D2176A21A44948B54907B9EC9CE01B",
          "subType": "fact_metric",
          "name": "Total Cost",
          "description": "Total cost incurred for the sales, used to calculate profitability and cost management."
        },
        {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:12:34.264Z",
          "versionId": "6324AEB64689D526B216A08F92B96019",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "A11F0A2B932641F684A66FB72F947C98",
          "subType": "fact_metric",
          "name": "Total Unit Sales",
          "description": "Total number of units sold, indicating sales volume for performance tracking."
        },
        {
          "dateCreated": "2025-08-20T06:04:55.303Z",
          "dateModified": "2025-08-20T06:12:34.264Z",
          "versionId": "6324AEB64689D526B216A08F92B96019",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "DD7F2A07957144E689F7EB40C7DDE381",
          "subType": "fact_metric",
          "name": "Total Dollar Sales",
          "description": "Total revenue generated from sales in dollars, useful for financial performance analysis."
        }
      ]
    }
  ]
}
```

- Response Code: 200 (Success: OK)
