---
title: Update a runtime
sidebar_label: Update a runtime
description: This workflow sample demonstrates how to update an existing runtime object through the REST API.
---

<Available since="2021 Update 7" />

This workflow sample demonstrates how to update an existing runtime object through the REST API.

You want to update the existing `Test Runtime` runtime object. The runtime ID is `E6C5BF4C483FF06313BEE19EAD39978B`.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Workflow

### Update an existing runtime using [PATCH /api/runtimes/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes/modifyScriptRuntime)

In this step, you are modifying the existing runtime's name to `Test Runtime Modified` and modifying the runtime's minCachedInstances to `2`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body:

```json
{
  "name": "Test Runtime Modified",
  "minCachedInstances": 2
}
```

Sample Curl:

```bash
  curl -X "PATCH" \
  "https://demo.microstrategy.com/MicroStrategyLibrary/api/runtimes/E6C5BF4C483FF06313BEE19EAD39978B" \
  -H "accept: */*" \
  -H "X-MSTR-AuthToken: 20r2v7vsnod056umhgh74ltu8m " \
  -H "Content-Type: application/json" \
  -d "{
    'name': 'Test Runtime Modified',
    'minCachedInstances': 2
  }"
```

Sample Response Body: Empty

Sample Response Code: 204
