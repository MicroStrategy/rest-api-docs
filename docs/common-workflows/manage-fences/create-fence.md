---
title: Create a new fence
description: This workflow sample demonstrates how to create a new user or workload fence.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5aef5846-6a6a-4d65-a91d-b3ebf5d96520?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You want to create an `administrator_user_fence` user fence which reserves `env-296739laio1use1` node and configured for `Administrator` user/usergroups.

The user ID is `54F3D26011D2896560009A8E67019608`. The usergroup ID is `E96685CD4E60068559F7DFAC7C2AA851`.

[DssXmlPrivilegesConfigureServerBasic](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic) and [DssXmlPrivilegesUseClusterMonitor](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor) privileges are required to create a new user fence.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Create a new fence

Endpoint: [POST /api/iserver/fences](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/createFence).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"
```

Sample Request Body:

:::info

The `name`, `rank` and `nodes` are mandatory fields for both types of fences. The `user` or `usergroup` information is mandatory for the user fence only.

:::

```json
{
  "rank": 1,
  "name": "administrator_user_fence",
  "type": "user_fence",
  "nodes": ["env-296739laio1use1"],
  "users": [
    {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    }
  ],
  "usergroups": [
    {
      "id": "E96685CD4E60068559F7DFAC7C2AA851",
      "name": "Administrator"
    }
  ],
  "projects": [
    {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "name": "MicroStrategy Tutorial"
    }
  ]
}
```

Sample Curl:

```bash
curl -X POST \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu' \
-H 'Content-Type: application/json' \
-d '{
  "rank": 1,
  "name": "administrator_user_fence",
  "type": "user_fence",
  "nodes": ["env-296739laio1use1"],
  "users": [
    {
     "id": "54F3D26011D2896560009A8E67019608",
     "name": "Administrator"
    }
  ],
  "usergroups": [
    {
     "id": "E96685CD4E60068559F7DFAC7C2AA851",
     "name": "Administrator"
    }
  ],
  "projects": [
    {
     "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
     "name": "MicroStrategy Tutorial"
    }
  ]
}'
```

Sample Response Body:

:::info

`users` and `usergroups` can be configured only for user fence, therefore the response body for workload fence should contain empty `users` and `usergroups` fields.

:::

You can view the detailed information of new created `administrator_user_fence` user fence in the body of the response. The detailed information includes `rank`, `name`, `type`, reserved `nodes`, configured `users`, `usergroups` and `projects`.

```json
{
  "rank": 1,
  "name": "administrator_user_fence",
  "type": "user_fence",
  "nodes": ["env-296739laio1use1"],
  "users": [
    {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    }
  ],
  "usergroups": [
    {
      "id": "E96685CD4E60068559F7DFAC7C2AA851",
      "name": "Administrator"
    }
  ],
  "projects": [
    {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "name": "MicroStrategy Tutorial"
    }
  ]
}
```

Response Code: 201 (The new user fence is created successfully.)
