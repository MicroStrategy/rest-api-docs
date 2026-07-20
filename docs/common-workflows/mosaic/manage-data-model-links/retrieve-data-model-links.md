---
title: Retrieve data model links
description: This workflow demonstrates how to retrieve data model links using REST API.
---

<Available since="Strategy (January 2026)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve the data model links through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can retrieve the data model links in a data model using the following endpoint: [GET /api/model/dataModels/\{dataModelId}/links](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelLinks).

Parameters include pagination options such as `limit` and `offset`, and a boolean parameter `showInvalidLinkItems` to indicate whether to include invalid link items in the response.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Curl

```bash
curl -L -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/links' \
-H 'X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa' \
-H 'X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD'
```

Sample Response Body:

```json
{
  "offset": 0,
  "limit": -1,
  "total": 2,
  "links": [
    {
      "id": "01A599D214CD4DAFB2C2461FA16FA8C6",
      "targets": [
        {
          "objectId": "A57ED1A786444607B3D519B9EEFD4D0E",
          "name": "Plan",
          "subType": "attribute",
          "externalDataModelId": "AE2FC8E446B14162BF2BCAC64981D5A2"
        },
        {
          "objectId": "C897597D95EB4D05B99670DCF0BF5999",
          "name": "Plan",
          "subType": "attribute",
          "externalDataModelId": "067D10AA8EA14687AA838743E3EDD13D"
        }
      ],
      "sourceObjectId": "A57ED1A786444607B3D519B9EEFD4D0E",
      "alias": "Plan",
      "linkedAttribute": {
        "information": {
          "dateCreated": "2025-12-30T07:26:33.069Z",
          "dateModified": "2025-12-30T07:26:33.069Z",
          "versionId": "0B435CF87C444635AA4444B2274321B5",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "51BF622FD70D408A8BC760B1806F2B35",
          "subType": "attribute",
          "name": "Plan",
          "description": "Identifier for the customer's subscribed telecom plan, useful for analyzing plan preferences and usage.",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "Plan ID",
            "description": "Identifier for the customer's subscribed telecom plan, useful for analyzing plan preferences and usage.",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "dataType": {
              "type": "integer",
              "precision": 2,
              "scale": 0
            },
            "alias": "plan_id"
          }
        ],
        "keyForm": {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "name": "Plan ID"
        },
        "displays": {
          "reportDisplays": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "Plan ID"
            }
          ],
          "browseDisplays": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "Plan ID"
            }
          ]
        },
        "nonAggregatable": false
      }
    },
    {
      "id": "25211B2B881E4A13AC9ACB8DFE0DE820",
      "targets": [
        {
          "objectId": "2877DDA7059B4FFE9DE2711F4D7CD29A",
          "name": "Customer",
          "subType": "attribute",
          "externalDataModelId": "AE2FC8E446B14162BF2BCAC64981D5A2"
        },
        {
          "objectId": "B066F441206C44FCB3601DFB45E8D5F0",
          "name": "Customer",
          "subType": "attribute",
          "externalDataModelId": "067D10AA8EA14687AA838743E3EDD13D"
        }
      ],
      "sourceObjectId": "2877DDA7059B4FFE9DE2711F4D7CD29A",
      "alias": "Customer",
      "linkedAttribute": {
        "information": {
          "dateCreated": "2025-12-30T07:26:33.069Z",
          "dateModified": "2025-12-30T07:26:33.069Z",
          "versionId": "0B435CF87C444635AA4444B2274321B5",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "1547E1E6332F4D509984CDB7339C2A21",
          "subType": "attribute",
          "name": "Customer",
          "description": "Unique identifier for each customer, used for tracking sales and customer-specific data.",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "Customer ID",
            "description": "Unique identifier for each customer, used for tracking sales and customer-specific data.",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "dataType": {
              "type": "integer",
              "precision": 2,
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

Response Code: 200 (All links in data model are returned successfully.)
