---
title: Create, update, and delete a folder
description: This workflow demonstrates how to create, update, and delete a data model folder using REST API.
---

<Available since="Strategy ONE (October 2025)" />

This workflow sample demonstrates how to create, update, and delete a data model folder using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a folder

You can create a new folder in the data model. Only `name` and `destinationFolderId` in the request body will be used to create the folder. The default destination folder is the data model schema folder.

Endpoint: [POST /model/dataModels/\{dataModelId}/folders](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/createDataModelFolder)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: cskp6hr15bale6u82v5f3trckl'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 9A272BF06D9C4A78871E993C9A86A971'
```

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/C9A69CBD16684E49AAB965F7F86CDB18/folders' \
-H 'X-MSTR-MS-Changeset: 9A272BF06D9C4A78871E993C9A86A971' \
-H 'X-MSTR-AuthToken: cskp6hr15bale6u82v5f3trckl' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "name": "Data Model SubFolder"
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "436982146B6B4FFFAC171091B6D6D437",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "DD627D5A5D4241EB96C448E8D10F2835",
    "subType": "folder",
    "name": "Data Model SubFolder",
    "destinationFolderId": "5A62B0376E3B46D882DFC9901FDBE72E"
  },
  "contents": []
}
```

- Response Code: 201 (Success: Created)

## Update a folder

You can only update the folder's name and destination folder ID.

Endpoint: [PATCH /model/dataModels/\{dataModelId}/folders/\{folderId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/updateDataModelFolder)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: cskp6hr15bale6u82v5f3trckl'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 9A272BF06D9C4A78871E993C9A86A971'
```

- Curl

```bash
curl -L -X PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/C9A69CBD16684E49AAB965F7F86CDB18/folders/DD627D5A5D4241EB96C448E8D10F2835' \
-H 'X-MSTR-MS-Changeset: 9A272BF06D9C4A78871E993C9A86A971' \
-H 'X-MSTR-AuthToken: cskp6hr15bale6u82v5f3trckl' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "name": "renamed folder",
        "destinationFolderId": "5A62B0376E3B46D882DFC9901FDBE72E"
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "436982146B6B4FFFAC171091B6D6D437",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "DD627D5A5D4241EB96C448E8D10F2835",
    "subType": "folder",
    "name": "renamed folder",
    "destinationFolderId": "5A62B0376E3B46D882DFC9901FDBE72E"
  },
  "contents": []
}
```

- Response Code: 201 (Success: Created)

## Delete a folder

You can delete a folder from the data model. After you delete a folder, objects in the folder move to the parent folder.

Endpoint: [DELETE /model/dataModels/\{dataModelId}/folders/\{folderId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/deleteDataModelFolder)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: cskp6hr15bale6u82v5f3trckl'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 9A272BF06D9C4A78871E993C9A86A971'
```

- Curl

```bash
curl -L -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/C9A69CBD16684E49AAB965F7F86CDB18/folders/DD627D5A5D4241EB96C448E8D10F2835' \
-H 'X-MSTR-MS-Changeset: 9A272BF06D9C4A78871E993C9A86A971' \
-H 'X-MSTR-AuthToken: cskp6hr15bale6u82v5f3trckl'
```

Sample Response

- Response Body: Empty

- Response Code: 204 (Success: No Content)
