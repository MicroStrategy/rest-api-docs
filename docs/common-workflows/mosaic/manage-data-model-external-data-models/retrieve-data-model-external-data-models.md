---
title: Retrieve data model external data models
description: This workflow demonstrates how to retrieve data model external data models using REST API.
---

<Available since="Strategy (January 2026)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve the data model external data models through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can retrieve the external data models in a data model using the following endpoint: [GET /api/model/dataModels/\{dataModelId}/externalDataModels](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getExternalDataModels).
You can use a boolean parameter `showDefinition` to indicate whether to show the definition of each external data model's object in the response.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Curl

```bash
curl -L -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/externalDataModels' \
-H 'X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa' \
-H 'X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD'
```

Sample Response Body:

```json
{
  "externalDataModels": [
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
    },
    {
      "id": "067D10AA8EA14687AA838743E3EDD13D",
      "baseDataModel": {
        "objectId": "F51CA1AEDBAF4C0BB237B145021B4A55",
        "subType": "report_emma_cube",
        "name": "data model 2"
      },
      "alias": "external data model 2",
      "objects": [
        {
          "objectId": "E6A260E49B7B4A69870BED15A867E631",
          "subType": "attribute",
          "name": "First Order Date",
          "hidden": false,
          "alias": ""
        },
        {
          "objectId": "B21D835C2CBF4C82AF99F6DCD0AD5790",
          "subType": "attribute",
          "name": "Last Order Date",
          "hidden": false,
          "alias": ""
        },
        {
          "objectId": "B066F441206C44FCB3601DFB45E8D5F0",
          "subType": "attribute",
          "name": "Customer",
          "hidden": false,
          "alias": "Customer (1)"
        }
      ]
    }
  ]
}
```

Response Code: 200 (All external data models in data model are returned successfully.)
