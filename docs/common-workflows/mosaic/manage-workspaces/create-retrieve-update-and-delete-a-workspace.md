---
title: Create, retrieve, update, and delete a workspace
description: This workflow demonstrates how to create, retrieve, update, and delete a workspace using REST API.
---

<Available since="Strategy (October 2025)" />

This workflow sample demonstrates how to create, retrieve, update, and delete a workspace using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

Workspace is the place where you can create and manage your pipelines.

## Create an empty workspace

You can create an empty workspace with default settings. After you create the workspace, you can update it to add pipelines and other configurations.

Endpoint: [POST /api/dataServer/workspaces](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/postWorkspace)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces' \
-H 'X-MSTR-AuthToken: 1maet46058o01842068n55llko' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{}'
```

Sample Response

- Response Body:

```json
{
  "id": "6E2C7441461F43D09B23B917E5EA6BBB",
  "sampling": {
    "type": "first",
    "rowCount": 1000
  },
  "dateCreated": "2025-09-25T02:11:58.483310709Z",
  "dateModified": "2025-09-25T02:11:58.483314791Z",
  "datasetServeMode": "in_memory",
  "dssHost": "",
  "dssPort": 0,
  "pipelines": []
}
```

- Response Code: 201 (Success: Created)

## Retrieve a workspace

Endpoint: [GET /api/dataServer/workspaces/\{workspaceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/getWorkspace)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/6E2C7441461F43D09B23B917E5EA6BBB' \
-H 'X-MSTR-AuthToken: 1maet46058o01842068n55llko' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "id": "6E2C7441461F43D09B23B917E5EA6BBB",
  "sampling": {
    "type": "first",
    "rowCount": 1000
  },
  "dateCreated": "2025-09-25T02:11:58.483310709Z",
  "dateModified": "2025-09-25T02:12:03.002933925Z",
  "datasetServeMode": "in_memory",
  "dssHost": "",
  "dssPort": 0,
  "pipelines": []
}
```

- Response Code: 200 (Success: OK)

## Update a workspace

Endpoint: [PATCH /api/dataServer/workspaces/\{workspaceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/patchWorkspace)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/6E2C7441461F43D09B23B917E5EA6BBB' \
-H 'X-MSTR-AuthToken: 1maet46058o01842068n55llko' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{
    "name": "updated workspace",
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
  "id": "6E2C7441461F43D09B23B917E5EA6BBB",
  "name": "updated workspace",
  "sampling": {
    "type": "random",
    "rowCount": 2000
  },
  "dateCreated": "2025-09-25T02:11:58.483310709Z",
  "dateModified": "2025-09-25T02:12:36.456595572Z",
  "datasetServeMode": "in_memory",
  "dssHost": "",
  "dssPort": 0,
  "pipelines": []
}
```

- Response Code: 200 (Success: OK)

## Delete a workspace

Endpoint: [DELETE /api/dataServer/workspaces/\{workspaceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/deleteWorkspace)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/6E2C7441461F43D09B23B917E5EA6BBB' \
-H 'X-MSTR-AuthToken: 1maet46058o01842068n55llko' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body: (empty)

- Response Code: 204 (Success: No Content)
