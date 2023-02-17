---
title: Retrieve a content group
description: You can use REST APIs to retrieve a content group.
---

<Available since="2021 Update 4" />

You can use REST APIs to retrieve a content group definition by id.

In this sample workflow, we want to retrieve an existing content group with id `D35FC0B04BD79E95612DDB907C4CCDF6`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Endpoint: [GET /api/contentGroups/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/getContentGroup)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
```

Sample Request Body: N/A

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7'
```

Sample Response Body:

```json
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
      "name": "Administrator",
      "abbreviation": "Administrator",
      "group": false
    }
  ]
}
```

Sample Response Code: 200 (The content group is returned successfully.)
