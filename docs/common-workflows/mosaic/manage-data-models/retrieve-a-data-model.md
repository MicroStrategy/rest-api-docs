---
title: Retrieve a data model
description: This workflow demonstrates how to retrieve a data model using REST API.
---

<Available since="Strategy ONE (September 2025)" />

This workflow sample demonstrates how to retrieve a data model either with or without the changeset using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can retrieve a data model to view basic information like the data model's name, schema folder ID, and serve mode. Some additional details like enable wrangle recommendations and sampling configuration are also included.

Endpoint: [GET /api/model/dataModels/\{dataModelId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModel)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C' \
-H 'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B' \
-H 'X-MSTR-AuthToken: 4u8sbmsmegdpr246a1iqr3jahq'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "dateCreated": "2025-08-20T06:04:55.303Z",
    "dateModified": "2025-08-20T08:14:31.882Z",
    "versionId": "5A5B4B744AACDDD2F9E1FEA73CAEE06F",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "3A82F20B2CC849B0970B289C86D8C83C",
    "subType": "report_emma_cube",
    "name": "City and Call Center Sales Analysis",
    "description": "Analyze sales performance by city and call center over time."
  },
  "dataServeMode": "in_memory",
  "schemaFolderId": "3567B6C7338D4CFFB2F03879C4CB831D",
  "enableWrangleRecommendations": true,
  "enableAutoHierarchyRelationships": true,
  "sampling": {
    "type": "first",
    "rowCount": 1000
  },
  "partition": {
    "mode": "automatic",
    "number": 4
  },
  "autoJoin": true,
  "readOnly": false
}
```

- Response Code: 200 (Success: OK)
