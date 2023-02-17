---
title: Retrieve contents of a content group
description: You can use REST APIs to retrieve contents of a content group.
---

<Available since="2021 Update 4" />

You can use REST APIs to retrieve contents of a content group by id.

In this sample workflow, we want to retrieve contents in two projects of an existing content group. The content group id is `D35FC0B04BD79E95612DDB907C4CCDF6`, and two project ids are `D9FC7C9240F680D0CCDD92945440138B`, `235853DC4B79DABCE8C6FFB26B7D8DC3`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Endpoint: [GET /api/contentGroups/{id}/contents](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/getContentGroupContent)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
```

Sample Request Body: N/A

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6/contents?projectId=235853DC4B79DABCE8C6FFB26B7D8DC3&projectId=D9FC7C9240F680D0CCDD92945440138B' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: q9j2dck33c53s7g98go6iig876'
```

Sample Response Body:

```json
{
  "D9FC7C9240F680D0CCDD92945440138B": [],
  "235853DC4B79DABCE8C6FFB26B7D8DC3": [
    {
      "id": "1182F0264D49467A43D9198D6E1331F2",
      "projectId": "235853DC4B79DABCE8C6FFB26B7D8DC3",
      "type": 55,
      "dateModified": "2021-10-22T07:36:43.981+0000",
      "name": "Call Center Management",
      "viewMedia": 1879072805,
      "acg": 255,
      "isCertified": false,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      }
    }
  ]
}
```

Sample Response Code: 200 (The contents of the content group are returned successfully.)
