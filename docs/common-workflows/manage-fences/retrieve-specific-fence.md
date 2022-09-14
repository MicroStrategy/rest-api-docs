---
title: Retrieve a specific fence
description: This workflow sample demonstrates how to retrieve a specific user or workload fence.
---

You want to get the detailed information of `administrator_user_fence` user fence based on the fence name, which reserves `env-296739laio1use1` node and configured for `Administrator` user/usergroups.

The user ID is `54F3D26011D2896560009A8E67019608`. The usergroup ID is `E96685CD4E60068559F7DFAC7C2AA851`.

[DssXmlPrivilegesConfigureServerBasic](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic) and [DssXmlPrivilegesUseClusterMonitor](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor) privileges are required to retrieve a specific user fence.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get the detailed information of a specific fence

Endpoint: [GET /api/iserver/fences/{name}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getFence).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences/administrator_user_fence' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu'
```

Sample Response Body:

:::info

`users` and `usergroups` can be configured only for user fence, therefore the response body for workload fence should contain empty `users` and `usergroups` fields.

:::

You can view the detailed information of `administrator_user_fence` user fence in the body of the response. The detailed information includes `rank`, `name`, `type`, reserved `nodes`, configured `users`, `usergroups` and `projects`.

```json
{
  "rank": 1,
  "name": "administrator_user_fence",
  "type": "user_fence",
  "nodes": ["env-295232laiouse1"],
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

Response Code: 200 (The detailed information of a given fence is returned successfully.)
