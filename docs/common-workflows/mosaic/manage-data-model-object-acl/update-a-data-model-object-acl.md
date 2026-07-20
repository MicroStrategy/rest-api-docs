---
title: Update acl of an object inside a data model
description: You can use REST API requests to update acl of an object inside a data model.
---

<Available since="Strategy (August 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to update the acl of an object inside a data model through the Modeling service.

## Update acl of a metric inside a data model

There is a "Customer Statistics" data model with an "A44F79895E9247719292556AA14373F5" ID. This data model contains a "Sales" metric with an "B9E7FD5911D3E936C000B3B2D86C964F" ID.
You want to update the acl of the "Sales" metric.

:::info

To get the authorization token needed to execute the request, use `POST /api/auth/login`.

Get the project ID from `GET /api/projects`.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

To update the acl of the object in your data model, use [PATCH /api/model/dataModels/\{dataModelId}/objects/\{objectId}/acl](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/updateDataModelObjectAcl).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body:

```json
{
  "acl": {
    "294DEDC011D2F1D56000D98E67019608": {
      "granted": 255,
      "denied": 0,
      "inheritable": false,
      "name": "Public / Guest",
      "subType": "user_group"
    },
    "C82C6B1011D2894CC0009D9F29718E4F": {
      "granted": 45,
      "denied": 16,
      "inheritable": false,
      "name": "Everyone",
      "subType": "user_group"
    },
    "D5ABCBF54937420EC3377FA23857A4DC": {
      "granted": 255,
      "denied": 0,
      "inheritable": false,
      "name": "F40308_automodel",
      "subType": "user"
    }
  }
}
```

Sample Curl:

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/A44F79895E9247719292556AA14373F5/objects/B9E7FD5911D3E936C000B3B2D86C964F/acl?subType=metric" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8" -d '{"acl":{"294DEDC011D2F1D56000D98E67019608":{"granted":255,"denied":0,"inheritable":false,"name":"Public / Guest","subType":"user_group"},"C82C6B1011D2894CC0009D9F29718E4F":{"granted":45,"denied":16,"inheritable":false,"name":"Everyone","subType":"user_group"},"D5ABCBF54937420EC3377FA23857A4DC":{"granted":255,"denied":0,"inheritable":false,"name":"F40308_automodel","subType":"user"}}}'
```

Sample Response Body:

```json
{
  "acl": {
    "294DEDC011D2F1D56000D98E67019608": {
      "granted": 255,
      "denied": 0,
      "inheritable": false,
      "name": "Public / Guest",
      "subType": "user_group"
    },
    "C82C6B1011D2894CC0009D9F29718E4F": {
      "granted": 45,
      "denied": 16,
      "inheritable": false,
      "name": "Everyone",
      "subType": "user_group"
    },
    "D5ABCBF54937420EC3377FA23857A4DC": {
      "granted": 255,
      "denied": 0,
      "inheritable": false,
      "name": "F40308_automodel",
      "subType": "user"
    }
  }
}
```

Response Code: 200
