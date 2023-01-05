---
title: Workflow sample - Modify a security filter's member
sidebar_label: Modify a security filter's member
description: This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b39c86ac-1a16-4100-a96d-b1a6d2f74b9c?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to. The object ID of the security filter is `8018C24FEBC4406CB9E36838C01C82D1`.

- [1. Remove the users and user groups using `PATCH /api/securityFilters/{id}/members`](#1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers)
- [2. Add the users and user groups using `PATCH /api/securityFilters/{id}/members`](#2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers)

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## 1. Remove the users and user groups using [PATCH /api/securityFilters/{id}/members](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/updatePartialSecurityFilter)

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
curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/06648A0711D50131C00051916B98494F/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d '{"operationList":[{"op":"removeElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}'
```

Sample Response Body: Empty

Response Code: 204 (The security filter's member is modified successfully.)

## 2. Add the users and user groups using [PATCH /api/securityFilters/{id}/members](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/updatePartialSecurityFilter)

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
curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/06648A0711D50131C00051916B98494F/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d '{"operationList":[{"op":"addElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}'
```

Sample Response Body: Empty

Response Code: 200 (The security filter's member is modified successfully.)
