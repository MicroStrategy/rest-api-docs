---
title: Create an external data model in a data model
sidebar_label: Create an external data model in a data model
description: This workflow sample demonstrates how to create an external data model in a data model through the Modeling service.
---

<Available since="Strategy (January 2026)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create an external data model in a data model through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can create an external data model in a data model using the following endpoint: [POST /api/model/dataModels/\{dataModelId}/externalDataModels](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/postExternalDataModel).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Sample Request Body:

```json
{
  "baseDataModel": {
    "objectId": "FF2970B298464D88806CCD39F1BA1919",
    "subType": "report_emma_cube",
    "name": "data model 1"
  },
  "alias": "external data model 1"
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/externalDataModels" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD" -H "Content-Type: application/json" -d '{"baseDataModel":{"objectId":"FF2970B298464D88806CCD39F1BA1919","subType":"report_emma_cube","name":"data model 1"},"alias":"external data model 1"}'
```

Sample Response Body:

```json
{
  "id": "AE2FC8E446B14162BF2BCAC64981D5A2",
  "baseDataModel": {
    "objectId": "FF2970B298464D88806CCD39F1BA1919",
    "subType": "report_emma_cube",
    "name": "data model 1"
  },
  "alias": "external data model 1",
  "objects": [
    {
      "objectId": "2877DDA7059B4FFE9DE2711F4D7CD29A",
      "subType": "attribute",
      "name": "Customer",
      "hidden": false,
      "alias": "Customer (2)"
    },
    {
      "objectId": "B44A2F49F6B6441796FCA511F1BBFDA5",
      "subType": "attribute",
      "name": "Churn",
      "hidden": false,
      "alias": ""
    },
    {
      "objectId": "3FDFCCEFB640428E9341D45B68073601",
      "subType": "attribute",
      "name": "Lifetime Value Score",
      "hidden": false,
      "alias": ""
    }
  ]
}
```

Response Code: 201 (A new external data model is created successfully in the changeset.)
