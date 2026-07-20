---
title: Refresh data model external data models
description: This workflow demonstrates how to refresh data model external data models using REST API.
---

<Available since="Strategy (January 2026)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to refresh external data models through the Modeling service. If the base models of external data models are updated, you must use this API to sync the changes to the current data model.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can retrieve the refresh data models in a data model using the following endpoint: [POST /api/model/dataModels/\{dataModelId}/externalDataModels/refresh](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/refreshExternalDataModels).

In the following example, for the external data model "SF test external", one attribute ("New Attribute") is added, while two attributes ("Call Center" and "Customer City") are removed. As a result, the JSON response from the refresh API includes both the newObjects and deletedObjects fields for this external data model.

In the current data model, a security filter is defined on the "Call Center" attribute, and a metric is defined on the "Customer City" attribute. Because these attributes are deleted, the corresponding security filter and metric become invalid and are therefore removed. These removed objects are listed in the invalidObjects field.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/externalDataModels/refresh' \
-H 'X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa' \
-H 'X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD'
```

Sample Response Body:

```json
{
  "externalDataModels": [
    {
      "id": "72009D4BDD3D4BEDA2242F2D5A38258C",
      "baseDataModel": {
        "objectId": "275C1A8671594B958E248EA9A2C1989C",
        "subType": "report_emma_cube",
        "name": "SF test external"
      },
      "alias": "SF test external",
      "newObjects": [
        {
          "objectId": "7937B61165D84D69BA30F88842083179",
          "subType": "attribute",
          "name": "New Attribute"
        }
      ],
      "deletedObjects": [
        {
          "objectId": "6C131EE33F634ACF9CD12B450698A203",
          "subType": "attribute",
          "name": "Call Center"
        },
        {
          "objectId": "62D6035D11D84244B483992288987E1A",
          "subType": "attribute",
          "name": "Customer City"
        }
      ]
    }
  ],
  "invalidLinks": [],
  "invalidObjects": [
    {
      "id": "A4B42668D4C041139A8E25A98C9EB89D",
      "subType": "md_security_filter",
      "error": "Object(id: 92F32157BBA34D6BAAC792E7AAFE22B9, name: Call Center) is missing."
    },
    {
      "id": "DDF643B015D64DD2A844473C22C0F906",
      "subType": "metric",
      "error": "Object(id: 62D6035D11D84244B483992288987E1A, name: Customer City) is missing."
    }
  ]
}
```

Response Code: 200 (The external models are refreshed.)
