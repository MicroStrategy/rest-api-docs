---
title: Retrieve the list of fences
description: This workflow sample demonstrates how to retrieve the list of all existing user and workload fences.
---

<Available since="2021 Update 6" />

You want to get the details of all existing user and workload fences.

[DssXmlPrivilegesConfigureServerBasic](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic) and [DssXmlPrivilegesUseClusterMonitor](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor) privileges are required to retrieve the list of all existing fences.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get information of all existing user and workload fences

Endpoint: [GET /api/v2/iserver/fences](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getFences_1).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/iserver/fences' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu'
```

Sample Response Body: You can view the details of all existing user and workload fences in the body of the response. The detailed information includes `rank`, `name`, `type` and reserved `nodes`.

```json
{
  "fences": [
    {
      "rank": "1",
      "name": "administrator_user_fence",
      "type": "user_fence",
      "nodes": ["env-296739laio1use1"],
      "id": "YWRtaW5pc3RyYXRvcl91c2VyX2ZlbmNl"
    },
    {
      "rank": "2",
      "name": "subscription_workload_fence",
      "type": "workload_fence",
      "nodes": ["296739laio2use1"],
      "id": "c3Vic2NyaXB0aW9uX3dvcmtsb2FkX2ZlbmNl"
    }
  ]
}
```

Response Code: 200 (Details of all existing user and workload fences are returned successfully.)
