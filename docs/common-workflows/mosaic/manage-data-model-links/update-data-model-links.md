---
title: Update data model links
sidebar_label: Update data model links
description: This workflow sample demonstrates how to update data model links through the Modeling service.
---

<Available since="Strategy (January 2026)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update data model links through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can update links in a data model using the following endpoint: [PUT /api/model/dataModels/\{dataModelId}/links](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/putDataModelLinks).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Sample Request Body:

```json
{
  "links": [
    {
      "id": "597E5B1B23BA406B95FEDAE8894F5FE5",
      "targets": [
        {
          "objectId": "B066F441206C44FCB3601DFB45E8D5F0",
          "name": "Customer",
          "subType": "attribute",
          "externalDataModelId": "067D10AA8EA14687AA838743E3EDD13D"
        },
        {
          "objectId": "2877DDA7059B4FFE9DE2711F4D7CD29A",
          "name": "Customer",
          "subType": "attribute",
          "externalDataModelId": "AE2FC8E446B14162BF2BCAC64981D5A2"
        }
      ],
      "sourceObjectId": "B066F441206C44FCB3601DFB45E8D5F0",
      "alias": "Customer"
    }
  ]
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/links" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD" -H "Content-Type: application/json" -d '{"links":[{"id":"597E5B1B23BA406B95FEDAE8894F5FE5","targets":[{"objectId":"B066F441206C44FCB3601DFB45E8D5F0","name":"Customer","subType":"attribute","externalDataModelId":"067D10AA8EA14687AA838743E3EDD13D"},{"objectId":"2877DDA7059B4FFE9DE2711F4D7CD29A","name":"Customer","subType":"attribute","externalDataModelId":"AE2FC8E446B14162BF2BCAC64981D5A2"}],"sourceObjectId":"B066F441206C44FCB3601DFB45E8D5F0","alias":"Customer"}]}'
```

Sample Response Body:

```json
{
  "links": [
    {
      "id": "597E5B1B23BA406B95FEDAE8894F5FE5",
      "targets": [
        {
          "objectId": "B066F441206C44FCB3601DFB45E8D5F0",
          "name": "Customer",
          "subType": "attribute",
          "externalDataModelId": "067D10AA8EA14687AA838743E3EDD13D"
        },
        {
          "objectId": "2877DDA7059B4FFE9DE2711F4D7CD29A",
          "name": "Customer",
          "subType": "attribute",
          "externalDataModelId": "AE2FC8E446B14162BF2BCAC64981D5A2"
        }
      ],
      "sourceObjectId": "B066F441206C44FCB3601DFB45E8D5F0",
      "alias": "Customer",
      "linkedAttribute": {
        "information": {
          "versionId": "D29EAF55EE744721AB2792F647DE3CC1",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "3512184AEF7A475691D39F47DCD8D1FA",
          "subType": "attribute",
          "name": "Customer",
          "description": "Unique identifier for each customer, used for tracking and managing customer-related data.",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "Customer ID",
            "description": "Unique identifier for each customer, used for tracking and managing customer-related data.",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "dataType": {
              "type": "integer",
              "precision": 4,
              "scale": 0
            },
            "alias": "customer_id"
          }
        ],
        "keyForm": {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "name": "Customer ID"
        },
        "displays": {
          "reportDisplays": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "Customer ID"
            }
          ],
          "browseDisplays": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "Customer ID"
            }
          ]
        },
        "nonAggregatable": false
      }
    }
  ]
}
```

Response Code: 200 (Data model links are updated successfully in the changeset.)
