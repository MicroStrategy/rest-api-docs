---
title: Update a drill map
sidebar_label: Update a drill map
description: This workflow sample demonstrates how to update an existing drill map object through the Modeling service.
---

<Available since="2021 Update 6" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b7a0f0c-2172-418a-93ec-e0f0a13fa741?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an existing drill map object through the Modeling service.

You want to update the existing `Drill Map for Demo` drill map object in the MicroStrategy Tutorial project. The project ID is `091B51154B22036C53CFBB9958B2E8FC`). The drill map ID is `CC2E6AA3421EFF5C41C2D0939750BB24`.

:::info

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Workflow

### Update an existing drill map using `PUT /api/model/drillMaps/{drillMapId}`

In this step, you are:

- Modifying the existing drill path’s priority to `low`.

- Adding a new drill path based on the `Call Center Analysis` template in the `Template` field and setting the drill path to `high` priority, along with an additional filter and other properties.

  Sample Request Header:

  ```http
  "accept": "application/json"
  "X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
  "X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
  ```

  Sample Request Body:

  ```json
  {
    "information": {
      "name": "Drill Map for Demo",
      "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
    },
    "drillPaths": [
      {
        "displayName": "Year's Display Name",
        "type": "up",
        "target": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "priority": "low",
        "options": {
          "keepParent": false,
          "keepThresholds": false,
          "keepPageBy": false,
          "keepBaseTemplate": false,
          "applyUserFilter": false,
          "applyReportFilter": true
        }
      },
      {
        "displayName": "Call Center Analysis",
        "type": "template",
        "target": {
          "objectId": "D4C7C978490A443715E6ECB689F9CEAF",
          "subType": "template",
          "name": "Call Center Analysis"
        },
        "priority": "high",
        "options": {
          "setName": "Test SetName 1",
          "inheritVLDB": false,
          "keepPageBy": false,
          "keepBaseTemplate": false,
          "applyUserFilter": true,
          "applyReportFilter": true,
          "includeOtherFilter": "default",
          "displayMode": "default",
          "additionalFilter": {
            "objectId": "8827905B11D3EB22C000B4B2D86C964F",
            "subType": "filter",
            "name": "by age"
          }
        }
      }
    ]
  }
  ```

  Sample Curl:

  ```bash
  curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMaps/CC2E6AA3421EFF5C41C2D0939750BB24" \
  -H "accept: application/json" \
  -H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" \
  -H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" \
  -H "Content-Type: application/json" \
  -d '{"information":{"name":"Drill Map for Demo","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"drillPaths":[{"displayName":"Year"s Display Name","type":"up","target":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"priority":"low","options":{"keepParent":false,"keepThresholds":false,"keepPageBy":false,"keepBaseTemplate":false,"applyUserFilter":false,"applyReportFilter":true}},{"displayName":"Call Center Analysis","type":"template","target":{"objectId":"D4C7C978490A443715E6ECB689F9CEAF","subType":"template","name":"Call Center Analysis"},"priority":"high","options":{"setName":"Test Set Name 1","inheritVLDB":false,"keepPageBy":false,"keepBaseTemplate":false,"applyUserFilter":true,"applyReportFilter":true,"includeOtherFilter":"default","displayMode":"default","additionalFilter":{"objectId":"8827905B11D3EB22C000B4B2D86C964F","subType":"filter","name":"by age"}}}]}'
  ```

  Sample Response Body:

  You can view the updated drill map definition in the body of the response.

  ```json
  {
    "information": {
      "dateCreated": "2022-01-24T10:42:27.000Z",
      "dateModified": "2022-01-30T12:32:52.961Z",
      "versionId": "DAC1E08E49F511D58A0D678D2ACD1BF9",
      "primaryLocale": "en-US",
      "objectId": "CC2E6AA3421EFF5C41C2D0939750BB24",
      "subType": "drill_map",
      "name": "Drill Map for Demo",
      "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
    },
    "drillPaths": [
      {
        "displayName": "Year's Display Name",
        "type": "up",
        "target": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "priority": "low",
        "options": {
          "keepParent": false,
          "keepThresholds": false,
          "keepPageBy": false,
          "keepBaseTemplate": false,
          "applyUserFilter": false,
          "applyReportFilter": true
        }
      },
      {
        "displayName": "Call Center Analysis",
        "type": "template",
        "target": {
          "objectId": "D4C7C978490A443715E6ECB689F9CEAF",
          "subType": "template",
          "name": "Call Center Analysis"
        },
        "priority": "high",
        "options": {
          "setName": "Test SetName 1",
          "inheritVLDB": false,
          "keepPageBy": false,
          "keepBaseTemplate": false,
          "applyUserFilter": true,
          "applyReportFilter": true,
          "includeOtherFilter": "default",
          "displayMode": "default",
          "additionalFilter": {
            "objectId": "8827905B11D3EB22C000B4B2D86C964F",
            "subType": "filter",
            "name": "by age"
          }
        }
      }
    ]
  }
  ```

  Sample Response Code: 200 (The `Drill Map for Demo` drill map object is updated successfully in the changeset.)
