---
title: Retrieve an attribute's elements in data model
sidebar_label: Retrieve an attribute's elements in data model
description: This workflow sample demonstrates how to retrieve an attribute's elements in data model.
---

<Available since="Strategy ONE (August 2025)" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve an attribute's elements in data model.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the attribute's elements using `GET /api/dataModels/{dataModelId}/attributes/{id}/elements`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/attributes/8D679D5111D3E4981000E787EC6DE8A4/elements" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the data model's attribute's elements in the response body.

```json
[
  {
    "name": "2015",
    "id": "h2015;;2015"
  },
  {
    "name": "2016",
    "id": "h2016;;2016"
  },
  {
    "name": "2017",
    "id": "h2017;;2017"
  },
  {
    "name": "2018",
    "id": "h2018;;2018"
  }
]
```

Response Code 200: (The attribute's elements is returned successfully.)
