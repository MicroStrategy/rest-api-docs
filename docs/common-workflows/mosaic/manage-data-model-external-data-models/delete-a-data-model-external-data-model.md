---
title: Delete a data model external data model
sidebar_label: Delete a data model external data model
description: This workflow sample demonstrates how to delete a data model external data model through the Modeling service.
---

<Available since="Strategy ONE (January 2026)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to delete a data model external data model through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can delete an external data model from a data model using the following endpoint: [DELETE /api/model/dataModels/\{dataModelId}/externalDataModels/\{externalDataModelId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/deleteExternalDataModel).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/externalDataModels/AE2FC8E446B14162BF2BCAC64981D5A2" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD"
```

Sample Response Body: Empty

Sample Response Code: 204 (The external data model is deleted successfully in the changeset.)
