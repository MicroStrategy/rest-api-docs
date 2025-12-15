---
title: Retrieve object translations inside a data model
description: You can use REST API requests to retrieve object translations inside a data model.
---

<Available since="Strategy ONE (October 2025)" />

This workflow sample demonstrates how to retrieve object translations inside a data model, using the REST API with and without a changeset.

:::info

To get the authorization token needed to execute the request, use `POST /api/auth/login`.

Get the project ID from `GET /api/projects`.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Retrieve translations of an attribute inside a data model

There is a "Customer Statistics" data model with an "A44F79895E9247719292556AA14373F5" ID. This data model contains a "Customer City" attribute with an "F8473BF6D3FB4CC9B8C515C55FAD02FC" ID.
You want to get the translations of the "Customer City" attribute.

To get the object translations in your data model, use [GET /api/model/dataModels/\{dataModelId}/objects/\{objectId}/translations](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/getDataModelObjectTranslations).

Sample Request Without Changeset

- Request Headers

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

- Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/A44F79895E9247719292556AA14373F5/objects/F8473BF6D3FB4CC9B8C515C55FAD02FC/translations?subType=attribute" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
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
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/A44F79895E9247719292556AA14373F5/objects/F8473BF6D3FB4CC9B8C515C55FAD02FC/translations?subType=attribute" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

```json
{
  "id": "F8473BF6D3FB4CC9B8C515C55FAD02FC",
  "name": {
    "targetName": "Object Name",
    "translationValues": {
      "1033": {
        "translation": "Customer City"
      },
      "2052": {
        "translation": "Customer City in Chinese"
      }
    }
  },
  "description": {
    "targetName": "Object Description",
    "translationValues": {
      "1033": {
        "translation": "Unique identifier for the customer city"
      },
      "1036": {
        "translation": "Description translation in French"
      }
    }
  },
  "forms": {
    "45C11FA478E745FEA08D781CEA190FE5": {
      "name": {
        "targetName": "Attribute Form Name",
        "translationValues": {
          "1033": {
            "translation": "Customer City ID"
          }
        }
      },
      "description": {
        "targetName": "Attribute Form Description",
        "translationValues": {
          "1033": {
            "translation": "Unique identifier for the customer city"
          }
        }
      }
    }
  }
}
```

Response Code: 200
