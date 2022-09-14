---
title: Update specific fence
description: This workflow sample demonstrates how to update a specific fence.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b48c198-0938-4578-ae8c-9ab957f046f2?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You want to update the `nodes` reserved by `administrator_user_fence` user fence, which is configured for `Administrator` user/usergroups.

The updated node is `296739laio3use1`.

[DssXmlPrivilegesConfigureServerBasic](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic) and [DssXmlPrivilegesUseClusterMonitor](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor) privileges are required to update an existing user fence.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Update a specific fence

Endpoint: [PATCH /api/iserver/fences/{name}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/updateFence).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"
```

Sample Request Body:

:::info

A patch that tries to pass an empty user and usergroup for a user fence, or a patch with an empty node list for either fence types, will not be allowed.

- **User Fence**

Valid Paths:  /nodes, /users, /usergroups, /rank, /projects.

Valid Operations: replace

- **Workload Fence**

Valid Paths:  /nodes, /rank, /projects.

Valid Operations: replace

:::

```json
{
  "operationList": [
    {
      "op": "replace",
      "path": "/nodes",
      "value": ["env-296739laio3use1"]
    }
  ]
}
```

Sample Curl:

```bash
curl -X PATCH \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences/administrator_user_fence' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu' \
-H 'Content-Type: application/json' \
-d '{
   "operationList": [
     {
      "op": "replace",
       "path": "/nodes",
       "value": ["env-296739laio3use1"]
     }
   ]
}'
```

Sample Response Body:

:::info

`users` and `usergroups` can be configured only for user fence, therefore the response body for workload fence should contain empty `users` and `usergroups` fields.

:::

You can view the detailed information of updated `administrator_user_fence` user fence in the body of the response. The detailed information includes `rank`, `name`, `type`, reserved `nodes`, configured `users`, `usergroups` and `projects`.

```json
{
  "rank": 1,
  "name": "administrator_user_fence",
  "type": "user_fence",
  "nodes": ["296739laio3use1"],
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
      "name": "MicroStrategy Tutorials"
    }
  ]
}
```

Response Code: 200 (The given fence is updated successfully.)
