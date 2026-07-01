---
title: Retrieve acl of an object inside a data model
description: You can use REST API requests to retrieve acl of an object inside a data model.
---

<Available since="Strategy (August 2025)" />

This workflow sample demonstrates how to retrieve the object ACL inside a data model, using the REST API with and without a changeset.

:::info

To get the authorization token needed to execute the request, use `POST /api/auth/login`.

Get the project ID from `GET /api/projects`.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Retrieve acl of an attribute inside a data model

There is a "Customer Statistics" data model with an "A44F79895E9247719292556AA14373F5" ID. This data model contains a "Customer" attribute with an "B9E7FD5911D3E936C000B3B2D86C964F" ID.
You want to get the acl of the "Customer" attribute.

To get the object ACL in your data model, use [GET /api/model/dataModels/\{dataModelId}/objects/\{objectId}/acl](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/getDataModelObjectAcl).

Sample Request Without Changeset

- Request Headers

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

- Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/A44F79895E9247719292556AA14373F5/objects/B9E7FD5911D3E936C000B3B2D86C964F/acl?subType=attribute" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request With Changeset

- Request Headers

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

- Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/A44F79895E9247719292556AA14373F5/objects/B9E7FD5911D3E936C000B3B2D86C964F/acl?subType=attribute" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
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
