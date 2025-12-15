---
title: Create and update a data model
description: This workflow demonstrates how to create and update a data model using REST API.
---

<Available since="Strategy ONE (October 2025)" />

This workflow sample demonstrates how to create and update a data model using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a data model

You can create a new data model based on the definition provided in the request body. The definition of the newly created data model is returned in response. When creating a new data model, a schema folder is created. Other data model objects are stored in this schema folder by default.

Endpoint: [POST /api/model/dataModels](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/postDataModel)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 7h79kekgo882nfivb9s4qspdvf'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 889D6EF5F47541309FC97BAA41F944D5'
```

- Curl

```bash
curl -L -X POST 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels' \
-H 'X-MSTR-MS-Changeset: 889D6EF5F47541309FC97BAA41F944D5' \
-H 'X-MSTR-AuthToken: 7h79kekgo882nfivb9s4qspdvf' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "name": "new data model",
        "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
    },
    "dataServeMode": "in_memory"
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "B9278F7EE823414DA74DA8707D46F62B",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "9718C21C5FB74088BB40DB77F4B6DF42",
    "subType": "report_emma_cube",
    "name": "new data model",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "dataServeMode": "in_memory",
  "schemaFolderId": "3EACC14E167946418833FDCEA7EC37D5",
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
  "autoJoin": true
}
```

- Response Code: 201 (Success: Created)

## Update a data model

You can update the following fields in a data model: `name`, `destinationFolderId`, `enableWrangleRecommendations`, `enableAutoHierarchyRelationships`, `sampling`, `partition`, `dataServeMode`, and `autoJoin`.

Endpoint: [PATCH /api/model/dataModels/\{dataModelId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/updateDataModel)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 889D6EF5F47541309FC97BAA41F944D5'
```

- Curl

```bash
curl -L -X PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/9718C21C5FB74088BB40DB77F4B6DF42' \
-H 'X-MSTR-MS-Changeset: 889D6EF5F47541309FC97BAA41F944D5' \
-H 'X-MSTR-AuthToken: p8ffoq0alma3a1lp0rmju36dhp' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
      "name": "renamed data model"
    },
    "sampling": {
        "type": "random",
        "rowCount": 2000
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "A9416196A3EF4F318E85A62C45C57D8B",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "9718C21C5FB74088BB40DB77F4B6DF42",
    "subType": "report_emma_cube",
    "name": "renamed data model",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "dataServeMode": "in_memory",
  "schemaFolderId": "1B88F9499B234A2FA11CB3473CA27530",
  "enableWrangleRecommendations": true,
  "enableAutoHierarchyRelationships": true,
  "sampling": {
    "type": "random",
    "rowCount": 2000
  },
  "partition": {
    "mode": "automatic",
    "number": 4
  },
  "autoJoin": true
}
```

- Response Code: 200 (Success: OK)
