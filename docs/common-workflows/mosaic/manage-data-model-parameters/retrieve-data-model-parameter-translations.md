---
title: Retrieve data model parameter translations
description: This workflow demonstrates how to retrieve data model parameter translations using REST API.
---

<Available since="Strategy (May 2026)" />

This workflow sample demonstrates how to retrieve the translations of the parameters that belong to a data model using the REST API. This is a read-only operation that works against the committed data model and does not require a changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Endpoint: [GET /api/model/dataModels/\{dataModelId}/parameters/translations](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelParametersTranslations)

You can use the optional `limit` and `offset` query parameters for pagination.

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/parameters/translations?limit=2&offset=0' \
-H 'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "offset": 0,
  "limit": 2,
  "total": 1,
  "parameterTranslations": [
    {
      "id": "4737A7E131FC4B77898DE3BD55CC4379",
      "name": {
        "targetName": "Object Name",
        "translationValues": {
          "1033": {
            "translation": "Date Range Prompt"
          },
          "1031": {
            "translation": "Datumsbereichsaufforderung"
          }
        }
      },
      "description": {
        "targetName": "Object Description",
        "translationValues": {}
      }
    }
  ]
}
```

- Response Code: 200 (Success: OK)
