---
title: Update a content group
description: You can use REST APIs to update a content group.
---

<Available since="2021 Update 4" />

You can use REST APIs to update a content group definition by id.

In this sample workflow, we want to update an existing content group with id `D35FC0B04BD79E95612DDB907C4CCDF6`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

:::info

The [DssXmlPrivilegesManageContentBundle](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesManageContentBundle) privilege is required to update a content group.

:::

Endpoint: [PATCH /api/contentGroups/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/updateContentGroup)

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
      "op": "replace",
      "path": "/name",
      "value": "Finance-2",
      "id": 1
    },
    {
      "op": "replace",
      "path": "/color",
      "value": 10327726,
      "id": 2
    },
    {
      "op": "replace",
      "path": "/opacity",
      "value": 80,
      "id": 3
    }
  ]
}
```

Sample Curl:

```bash
curl -X 'PATCH' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationList": [
        {
            "op": "replace",
            "path": "/name",
            "value": "Finance-2",
            "id": 1
        },
        {
            "op": "replace",
            "path": "/color",
            "value": 10327726,
            "id": 2
        },
        {
            "op": "replace",
            "path": "/opacity",
            "value": 80,
            "id": 3
        }
    ]
}'
```

Sample Response Body:

```json
{
  "operations": [
    {
      "id": 3,
      "status": 204
    },
    {
      "id": 2,
      "status": 204
    },
    {
      "id": 1,
      "status": 204
    }
  ]
}
```

Sample Response Code: 200 (All the operations have been done successfully.)
