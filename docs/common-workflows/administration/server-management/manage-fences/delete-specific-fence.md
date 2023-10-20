---
title: Delete a specific fence
description: This workflow sample demonstrates how to delete a specific user or workload fence.
---

<Available since="2021 Update 6" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-977138df-2f06-40ae-87f3-8af880b7a336?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You want to delete the user fence `administrator_user_fence` having id YWRtaW5pc3RyYXRvcl91c2VyX2ZlbmNl, which reserves `env-296739laio1use1` node and configured for `Administrator` user/usergroups.

The user ID is `54F3D26011D2896560009A8E67019608`. The usergroup ID is `E96685CD4E60068559F7DFAC7C2AA851`.

[DssXmlPrivilegesConfigureServerBasic](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic) and [DssXmlPrivilegesUseClusterMonitor](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor) privileges are required to delete an existing fence.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Delete an existing fence

Endpoint: [DELETE /api/v2/iserver/fences/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/deleteFence_1).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE \
'demo.microstrategy.com/MicroStrategyLibrary/api/v2/iserver/fences/YWRtaW5pc3RyYXRvcl91c2VyX2ZlbmNl' \
-H 'accept: */*' \
-H 'X-MSTR-AuthToken: 27tm0ok3pno1qb9nd4opt7qq07'
```

Sample Response Body: Empty

Response Code: 204 (User fence is deleted successfully.)
