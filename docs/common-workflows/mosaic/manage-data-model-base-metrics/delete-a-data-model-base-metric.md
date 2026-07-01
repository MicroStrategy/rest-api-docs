---
title: Delete a data model base metric
sidebar_label: Delete a data model base metric
description: This workflow sample demonstrates how to delete a data model base metric through the Modeling service.
---

<Available since="Strategy (October 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to delete a data model base metric through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can delete an base metric from a data model using the following endpoint: [DELETE /api/model/dataModels/\{dataModelId}/factMetrics/\{factMetricId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/deleteDataModelFactMetric).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/factMetrics/EF4EABDA0D2C4FBEA1D65D05EC34C1CB" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"
```

Sample Response Body: Empty

Sample Response Code: 204 (The base metric has been deleted successfully from the data model.)
