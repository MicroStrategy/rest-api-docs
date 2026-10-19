---
title: Create a data model parameter
description: This workflow demonstrates how to create a data model parameter using REST API.
---

<Available since="Strategy (May 2026)" />

This workflow sample demonstrates how to create a parameter (value prompt) owned by a data model using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

Endpoint: [POST /api/model/dataModels/\{dataModelId}/parameters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/createDataModelParameter)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Request Body

The example below creates a value parameter (a value prompt) of type `prompt_double`, with a default answer and a numeric range restriction.

```json
{
  "information": {
    "subType": "prompt_double",
    "name": "Region Range Prompt",
    "description": "Enter a region."
  },
  "defaultAnswer": {
    "value": 202005
  },
  "restriction": {
    "allowedValueType": "range",
    "min": 202001,
    "max": 202512,
    "interval": 1
  }
}
```

- Curl

```bash
curl -L -X POST 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/parameters' \
-H 'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B' \
-H 'Content-Type: application/json' \
-d '{
  "information": {
    "subType": "prompt_double",
    "name": "Region Range Prompt",
    "description": "Enter a region."
  },
  "defaultAnswer": {
    "value": 202005
  },
  "restriction": {
    "allowedValueType": "range",
    "min": 202001,
    "max": 202512,
    "interval": 1
  }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "941BA80ADC7347E3B2E4923BB3486F62",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "E6CD1AA47E5A4DB7B23EDAA6FBC07578",
    "subType": "prompt_double",
    "name": "Region Range Prompt",
    "destinationFolderId": "FB63EDEB81474D2DB675CA7E865F814E"
  },
  "defaultAnswer": {
    "value": 202005.0
  },
  "restriction": {
    "min": 202001.0,
    "max": 202512.0,
    "interval": 1.0,
    "allowedValueType": "range"
  }
}
```

- Response Code: 201 (Created)
