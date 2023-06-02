---
title: Delete a KPI object
description: This workflow sample demonstrates how to delete a KPI object owned by a user.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to delete a KPI object owned by a user.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## 1. Get KPI id and project id

Refer to [Get KPIs for user](./get-kpi.md#get-all-kpis) to get all KPIs that belong to a user.

From the response body, get the KPI ID and project ID of the KPI object that you want to delete.

## 2. Delete KPI

Endpoint: [DELETE /api/insight/KPIs/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/deleteKPI)

Sample Request Header:

```http
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: N/A

Sample Curl:
:::note
Replace `{id}` in `DELETE /api/insight/KPIs/{id}` with the KPI ID from `step 1`.
:::

```bash
curl -X 'DELETE' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/KPIs/BB3FD5B6AC410B389F2AEDB379856BED' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response:

| Response Code | Status                                                   |
| ------------- | -------------------------------------------------------- |
| 204           | KPI deleted successfully.                                |
| 404           | Cannot find the KPI object with given id and project id. |

No response body if delete is successful.

Sample Response Body on Error:

```json
{
  "code": "-2147216373",
  "message": "(Object with ID 'BB3FD5B6AC410B389F2AEDB379856BED' and type 83 (KPI) is not found in metadata. It may have been deleted.)"
}
```
