---
title: Save a data model as a new data model
description: This workflow demonstrates how to save a data model as a new data model using REST API.
---

<Available since="Strategy (May 2026)" />

This workflow sample demonstrates how to save an existing data model as a new data model using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

This API creates a copy of an existing data model with a new name in a destination folder. The copied model includes objects such as tables, attributes, metrics, facts, hierarchy, security filters, and folders. New unique IDs are generated for all copied objects.

**Prerequisites:**

- You must have **Read** access to the source data model and all its objects.
- If the source data model contains security filters, you must have **Control** access to the source data model.
- You must have **Write** access to the destination folder.

**Behavior:** If a data model with the same name already exists in the destination folder, the API returns an error.

Endpoint: [POST /api/model/dataModels/\{dataModelId}/saveAs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/saveAsDataModel)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 7h79kekgo882nfivb9s4qspdvf'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Request Body

```json
{
  "name": "Save as a new data model for testing",
  "destinationFolderId": "A78E4C4C2F7D4B6A9C9E3A2A4E7F89BD",
  "changeJournal": {
    "userComments": "Save as a new data model for testing"
  }
}
```

- Curl

```bash
curl -L -X POST 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/DBA262A6244347409B8A99FD76147008/saveAs' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'X-MSTR-AuthToken: 7h79kekgo882nfivb9s4qspdvf' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B' \
-d '{
  "name": "Save as a new data model for testing",
  "destinationFolderId": "A78E4C4C2F7D4B6A9C9E3A2A4E7F89BD",
  "changeJournal": {
    "userComments": "Save as a new data model for testing"
  }
}'
```

Sample Response

- Response Body

```json
{
  "objectId": "A1B2C3D4E5F6789012345678ABCDEF12"
}
```

- Response Code: 200 (Success: OK)
