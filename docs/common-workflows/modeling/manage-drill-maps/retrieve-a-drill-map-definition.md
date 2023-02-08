---
title: Retrieve a drill map definition"
sidebar_label: Retrieve a drill map definition
description: You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service.
---

<Available since="2021 Update 6" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b7a0f0c-2172-418a-93ec-e0f0a13fa741?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to retrieve the definition of a drill map through the Modeling service. This workflow includes the following REST API requests.

## Retrieve a drill map definition

You want to get the definition of a drill map object. The object ID of the drill map is `CC2E6AA3421EFF5C41C2D0939750BB24` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the drill map’s definition using [GET /api/model/drillMaps/{drillMapId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/DrillMaps/ms-getDrillMap).

### Sample request header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

### Sample request body

Empty

### Sample curl

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMaps/CC2E6AA3421EFF5C41C2D0939750BB24" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

### Sample response body

You can view the drill map definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-01-24T10:42:27.000Z",
    "dateModified": "2022-02-14T04:29:54.000Z",
    "versionId": "BA73E0DF421BB0A7C726C090F38AC5AE",
    "primaryLocale": "en-US",
    "objectId": "CC2E6AA3421EFF5C41C2D0939750BB24",
    "subType": "drill_map",
    "name": "Sample Drill Map"
  },
  "drillPaths": [
    {
      "displayName": "Call Center Analysis",
      "type": "template",
      "target": {
        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",
        "subType": "template",
        "name": "Call Center Analysis"
      },
      "priority": "medium",
      "options": {
        "setName": "Test SetName 1",
        "inheritVLDB": false,
        "keepPageBy": false,
        "keepBaseTemplate": false,
        "applyUserFilter": true,
        "applyReportFilter": true,
        "includeOtherFilter": "default",
        "displayMode": "default"
      }
    },
    {
      "displayName": "Year",
      "type": "across",
      "target": {
        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Year"
      },
      "priority": "high",
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
      "displayName": "Age Groups",
      "type": "up",
      "target": {
        "objectId": "085CBF314703A71E926EA187C2002969",
        "subType": "custom_group",
        "name": "Age Groups"
      },
      "priority": "medium",
      "options": {
        "keepParent": false,
        "keepThresholds": false,
        "keepPageBy": false,
        "keepBaseTemplate": false,
        "applyUserFilter": true,
        "applyReportFilter": true,
        "includeOtherFilter": "default"
      }
    },
    {
      "displayName": "Customer Geography",
      "type": "down",
      "target": {
        "objectId": "B9E7FD5911D3E936C000B3B2D86C964F",
        "subType": "consolidation",
        "name": "Customer Geography"
      },
      "priority": "medium",
      "options": {
        "keepParent": false,
        "keepThresholds": false,
        "keepPageBy": false,
        "keepBaseTemplate": false,
        "applyUserFilter": true,
        "applyReportFilter": true,
        "includeOtherFilter": "default"
      }
    },
    {
      "displayName": "Products",
      "type": "down",
      "target": {
        "objectId": "B793B56811D3E4E51000E887EC6DE8A4",
        "subType": "dimension_user",
        "name": "Products"
      },
      "priority": "medium"
    },
    {
      "type": "across",
      "target": {
        "objectId": "B793B55011D3E4E51000E887EC6DE8A4",
        "subType": "dimension_user",
        "name": "Geography"
      },
      "priority": "medium"
    },
    {
      "type": "drill_map",
      "target": {
        "objectId": "A3EEC92948DB0216FA585D83F2633A2B",
        "subType": "drill_map",
        "name": "Status Drill Map"
      },
      "priority": "medium"
    }
  ]
}
```

### Response code

200 (The drill map definition is returned successfully.)

## Retrieve a drill map definition within a changeset

:::info

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md). If you plan to use the response of [GET /api/model/drillMaps/{drillMapId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList) to create a new drill map or update a drill map definition, you should associate all requests with one changeset.

:::

You want to get the definition of the Sample Drill Map drill map object. The object ID of this drill map is `CC2E6AA3421EFF5C41C2D0939750BB24` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

### Get the drill map definition within the changeset using [GET /api/model/drillMaps/{drillMapId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/DrillMaps/ms-getDrillMap)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMpas/CC2E6AA3421EFF5C41C2D0939750BB24" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" \
-H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

[Sample Response Body](#sample-response-body)

Response Code: 200
