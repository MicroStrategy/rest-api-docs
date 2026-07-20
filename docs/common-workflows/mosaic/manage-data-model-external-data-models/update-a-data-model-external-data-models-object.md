---
title: Update a data model external data model's object
sidebar_label: Update a data model external data model's object
description: This workflow sample demonstrates how to update a data model external data model's object through the Modeling service.
---

<Available since="Strategy (January 2026)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an external data model's object through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can update an external data model's object in a data model using the following endpoint: [PATCH /api/model/dataModels/\{dataModelId}/externalDataModels/\{externalDataModelId}/objects/\{objectId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/patchExternalDataModelObject).
Only "hidden" and "alias" fields can be modified by this API.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Sample Request Body:

```json
{
  "hidden": true,
  "alias": "Churn Alias"
}
```

Sample Curl:

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/externalDataModels/AE2FC8E446B14162BF2BCAC64981D5A2/objects/B44A2F49F6B6441796FCA511F1BBFDA5" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD" -H "Content-Type: application/json" -d '{"hidden":true,"alias":"Churn Alias"}'
```

Sample Response Body:

```json
{
  "objectId": "B44A2F49F6B6441796FCA511F1BBFDA5",
  "subType": "attribute",
  "name": "Churn",
  "hidden": true,
  "alias": "Churn Alias"
}
```

Response Code: 200 (External data model's object is updated successfully in the changeset.)
