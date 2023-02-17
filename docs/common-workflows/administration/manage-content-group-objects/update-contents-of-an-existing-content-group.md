---
title: Update contents of a content group
description: You can use REST APIs to update contents of a content group.
---

<Available since="2021 Update 4" />

You can use REST APIs to update contents of a content group by id.

In this sample workflow, we want to add a dossier as the contents to an existing content group with id `D35FC0B04BD79E95612DDB907C4CCDF6`. The dossier id is `1182F0264D49467A43D9198D6E1331F2`, and it's in the project `235853DC4B79DABCE8C6FFB26B7D8DC3`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Endpoint: [PATCH /api/contentGroups/{id}/contents](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/updateContentGroupContent)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
```

Sample Request Body:

```json
{
  "operationList": [
    {
      "op": "add",
      "path": "/235853DC4B79DABCE8C6FFB26B7D8DC3",
      "value": [
        {
          "id": "1182F0264D49467A43D9198D6E1331F2",
          "type": 55
        }
      ],
      "id": 1
    }
  ]
}
```

Sample Curl:

```bash
curl -X 'PATCH' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6/contents' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: q9j2dck33c53s7g98go6iig876' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationList": [{
        "op": "add",
        "path": "/235853DC4B79DABCE8C6FFB26B7D8DC3",
        "value": [{
            "id": "1182F0264D49467A43D9198D6E1331F2",
            "type": 55
        }],
        "id": 1
    }]
}'
```

Sample Response Body: N/A

Sample Response Code: 204 (The contents are added to the content group successfully.)
