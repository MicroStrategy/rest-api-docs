---
title: Modify a KPI object
description: This workflow sample demonstrates how to modify a KPI object owned by a user.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to modify a KPI object owned by a user.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## 1. Get KPI id and project id

See [Get KPIs for user](./get-kpi.md#get-all-kpis) to get all KPIs that belong to a user.

From the response body, get the KPI ID and project ID of the KPI object that you want to modify.

## 2. Modify KPI

Endpoint: [PATCH /api/insight/KPIs/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/modifyKPI)

Sample Request Header:

```http
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

This API only supports `name` and `configString` modifications. See [KPI fields explanation](./get-kpi.md#kpi-fields-explanation) for detailed explanations of these two fields.

```json
{
  "name": "New KPI name",
  "configString": "{\"reversedPalette\":false,\"selectedDataCompare\":\"1d\"}"
}
```

Sample Curl:
:::note
Replace `{id}` in `PATCH /api/insight/KPIs/{id}` with the KPI ID from `step 1`.
:::

```bash
curl -X 'PATCH' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/KPIs/BB3FD5B6AC410B389F2AEDB379856BED' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
  -d '{
    "name": "New KPI name",
    "configString": "{\"reversedPalette\":false,\"selectedDataCompare\":\"1d\"}"
}'
```

Sample Response:

| Response Code | Status                                                                          |
| ------------- | ------------------------------------------------------------------------------- |
| 200           | KPI deleted successfully.                                                       |
| 404           | Cannot find the KPI object with given id and project id.                        |
| 400           | Error in modifying KPI, e.g., another KPI object with same name already exists. |

Sample Response Body on success:

```json
{
  "id": "6769BB1E41AEB9B14008B5A0F205E6C2",
  "name": "New KPI name",
  "dateCreated": "2023-02-28T09:03:23.792Z",
  "dateModified": "2023-02-28T09:28:52.865Z",
  "schedule": {
    "id": "CA5683F942AD1F8529627D945B254A4A",
    "name": null,
    "recurrenceIntervalInHour": 1
  },
  "content": {
    "id": "859CD270446ABFB6F7DDC5AD4481EE78",
    "type": 55,
    "name": "Test1"
  },
  "configString": "{\"reversedPalette\":false,\"selectedDataCompare\":\"1d\"}",
  "disabled": false,
  "bookmarkId": "910B225245513DA9617A0A9FFC8E1E0E",
  "subscriptionId": "75D225054A4A9A528D0B2DB98FDE5E85",
  "kpiTarget": {
    "chapterKey": "K36",
    "pageKey": "K53",
    "nodeKey": "K52",
    "kpiObjects": [
      {
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "type": 4,
        "name": "Cost"
      }
    ],
    "elements": []
  },
  "hashInfo": {
    "defn": {
      "id": "f352e1353fc90cc4df89debd4d36c9dee48e7882a650f9b761c921e196a8302f",
      "validUntil": null
    }
  }
}
```

Sample Response Body on Error:

```json
{
  "code": "-2147217373",
  "message": "(An object with name 'New KPI name' and type 'KPI' already exists in the destination folder.)"
}
```
