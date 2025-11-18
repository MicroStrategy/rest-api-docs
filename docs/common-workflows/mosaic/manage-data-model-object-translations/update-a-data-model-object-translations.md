---
title: Update object translations inside a data model
description: You can use REST API requests to update object translations inside a data model.
---

<Available since="Strategy ONE (October 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to update the object translations inside a data model through the Modeling service.

## Update translations of a metric inside a data model

There is a "Customer Statistics" data model with an "A44F79895E9247719292556AA14373F5" ID. This data model contains a "Sales" metric with an "B9E7FD5911D3E936C000B3B2D86C964F" ID.
You want to update the translations of the "Sales" metric.

:::info

To get the authorization token needed to execute the request, use `POST /api/auth/login`.

Get the project ID from `GET /api/projects`.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

To update the object translations in your data model, use [PATCH /api/model/dataModels/\{dataModelId}/objects/\{objectId}/translations](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/updateDataModelObjectTranslations).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body:

```json
{
  "name": {
    "targetName": "Object Name",
    "translationValues": {
      "1036": {
        "translation": "Sales in French"
      }
    }
  },
  "description": {
    "targetName": "Object Description",
    "translationValues": {
      "1036": {
        "translation": "Description of sales in French"
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/A44F79895E9247719292556AA14373F5/objects/B9E7FD5911D3E936C000B3B2D86C964F/translations?subType=metric" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8" -d '{"name":{"targetName":"Object Name","translationValues":{"1036":{"translation":"Sales in French"}}},"description":{"targetName":"Object Description","translationValues":{"1036":{"translation":"Description of sales in French"}}}}'
```

Sample Response Body:

```json
{
  "name": {
    "targetName": "Object Name",
    "translationValues": {
      "1033": {
        "translation": "Sales"
      },
      "1036": {
        "translation": "Sales in French"
      }
    }
  },
  "description": {
    "targetName": "Object Description",
    "translationValues": {
      "1033": {
        "translation": "Description of sales"
      },
      "1036": {
        "translation": "Description of sales in French"
      }
    }
  }
}
```

Response Code: 200
