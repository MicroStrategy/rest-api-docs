---
title: Modify a security filter's member in data model
sidebar_label: Modify a security filter's member in data model
description: This workflow sample demonstrates how to modify the users and user groups that a specified security filter in data model is applied to.
---

<Available since="Strategy (August 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to modify the users and user groups that a specified security filter in data model is applied to. The data model ID is `7F071F619BE244C7B6CDC2626EBB1C6C`. The object ID of the security filter is `8981A1EB828F4888959C0C0A435870CC`.

1. [Remove the users and user groups using `PATCH /api/dataModels/{dataModelId}/securityFilters/{id}/members`](#1-remove-the-users-and-user-groups-using-patch-apidatamodelsdatamodelidsecurityfiltersidmembers)
1. [Add the users and user groups using `PATCH /api/dataModels/{dataModelId}/securityFilters/{id}/members`](#2-add-the-users-and-user-groups-using-patch-apidatamodelsdatamodelidsecurityfiltersidmembers)

:::info

To get the authorization token needed to execute the request, use [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## 1. Remove the users and user groups using [PATCH /api/dataModels/\{dataModelId}/securityFilters/\{id}/members](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/updatePartialSecurityFilter)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pamr302kmu0q1l0c22jeb13s2q"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "operationList": [
    {
      "op": "removeElements",
      "path": "/members",
      "value": ["D09773F94699124B4D75B48F1B358327", "54F3D26011D2896560009A8E67019608"]
    }
  ]
}
```

Sample Curl:

```bash
curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters/8981A1EB828F4888959C0C0A435870CC/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d '{"operationList":[{"op":"removeElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}'
```

Sample Response Body: Empty

Response Code: 204 (The security filter's member is modified successfully.)

## 2. Add the users and user groups using [PATCH /api/dataModels/\{dataModelId}/securityFilters/\{id}/members](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/updatePartialSecurityFilter)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pamr302kmu0q1l0c22jeb13s2q"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "operationList": [
    {
      "op": "addElements",
      "path": "/members",
      "value": ["D09773F94699124B4D75B48F1B358327", "54F3D26011D2896560009A8E67019608"]
    }
  ]
}
```

Sample Curl:

```bash
curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters/8981A1EB828F4888959C0C0A435870CC/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d '{"operationList":[{"op":"addElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}'
```

Sample Response Body: Empty

Response Code: 200 (The security filter's member is modified successfully.)
