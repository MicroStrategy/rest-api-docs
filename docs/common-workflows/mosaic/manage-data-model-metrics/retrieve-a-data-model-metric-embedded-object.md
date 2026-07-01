---
title: Retrieve a data model metric embedded object
description: This workflow demonstrates how to retrieve a data model metric embedded object using REST API.
---

<Available since="Strategy (September 2025)" />

This workflow sample demonstrates how to retrieve a data model metric embedded object using the REST API with and without a changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can retrieve a specific data model metric embedded object.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/metrics/\{metricId}/embeddedObjects/\{embeddedObjectId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelMetricEmbeddedObject)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: q6pgktbh4160lt38v4dhfsc7po'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/metrics/D0D7ED4D7CCB4535AA7609B24FE2B7FC/embeddedObjects/D5CAE2E2487E529A01E48AB5F8166AAE' \
-H 'X-MSTR-AuthToken: q6pgktbh4160lt38v4dhfsc7po' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: q6pgktbh4160lt38v4dhfsc7po'
'X-MSTR-MS-Changeset: DD281585D761452188599CC882A67417'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/metrics/D0D7ED4D7CCB4535AA7609B24FE2B7FC/embeddedObjects/D5CAE2E2487E529A01E48AB5F8166AAE' \
-H 'X-MSTR-AuthToken: q6pgktbh4160lt38v4dhfsc7po' \
-H 'X-MSTR-MS-Changeset: DD281585D761452188599CC882A67417'
```

Sample Response

- Response Body:

```json
{
  "id": "D5CAE2E2487E529A01E48AB5F8166AAE",
  "subType": "agg_metric",
  "expression": {
    "text": "Count({Call Center})"
  }
}
```

- Response Code: 200 (Success: OK)
