---
title: Update insight status
description: You can use REST APIs to update insight status.
---

<Available since="2021 Update 10" />

You can use REST APIs to update insight status.

The following sample workflow marks insights with ID `4028f2df86340c5f018634c2f945000e` and `4028f2df86340c5f018634374d24000b` as read.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Endpoint: [PATCH /api/insight/insightCards](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20Insights/patchInsightCards)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "5f8qohkckd5d4tm18c9etbe0vd"
```

Sample Request Body:

```json
{
  "operationList": [
    {
      "id": 1,
      "op": "replace",
      "path": "/4028f2df86340c5f01863a905623005b/read",
      "value": true
    },
    {
      "id": 2,
      "op": "replace",
      "path": "/4028f2df86340c5f018634374d24000b/read",
      "value": true
    }
  ]
}
```

Sample Curl:

```bash
curl -X 'PATCH' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/insightCards' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd' \
  -H 'Content-Type: application/json' \
  -d '{
    "operationList": [{
            "id": 1,
            "op": "replace",
            "path": "/4028f2df86340c5f01863a905623005b/read",
            "value": true
        },
        {
            "id": 2,
            "op": "replace",
            "path": "/4028f2df86340c5f018634374d24000b/read",
            "value": true
        }
    ]
}'
```

Sample Response Body: N/A

Sample Response Code: 204 (The insight statuses are updated successfully.)
