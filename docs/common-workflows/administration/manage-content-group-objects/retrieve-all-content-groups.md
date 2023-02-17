---
title: Retrieve all content groups
description: You can use REST APIs to retrieve all content groups.
---

<Available since="2021 Update 4" />

You can use REST APIs to retrieve all content groups.

In this sample workflow, we want to retrieve all existing content groups.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Endpoint: [GET /api/contentGroups](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/getContentGroups)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
```

Sample Request Body: N/A

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7'
```

Sample Response Body:

```json
{
  "contentGroups": [
    {
      "id": "074971034653A49B435436A01BE0391B",
      "name": "HR",
      "color": 10327726,
      "opacity": 50,
      "emailEnabled": true,
      "dateCreated": "2021-11-13T08:07:20.593+0000",
      "dateModified": "2022-06-15T09:03:37.497+0000",
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "type": 77,
      "recipients": [
        {
          "id": "54F3D26011D2896560009A8E67019608",
          "group": false
        }
      ]
    },
    {
      "id": "D35FC0B04BD79E95612DDB907C4CCDF6",
      "name": "Finance",
      "color": 0,
      "opacity": 50,
      "emailEnabled": true,
      "dateCreated": "2022-10-25T10:10:57.446+0000",
      "dateModified": "2022-10-25T10:10:57.446+0000",
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "type": 77,
      "recipients": [
        {
          "id": "54F3D26011D2896560009A8E67019608",
          "group": false
        }
      ]
    }
  ]
}
```

Sample Response Code: 200 (All content groups are returned successfully.)
