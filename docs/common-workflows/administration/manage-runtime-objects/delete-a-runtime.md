---
title: Delete a runtime
sidebar_label: Delete a runtime
description: This workflow sample demonstrates how to delete an existing runtime object through the REST API.
---

<Available since="2021 Update 7" />

This workflow sample demonstrates how to delete an existing runtime object through the REST API.

You want to delete the runtime with ID `E6C5BF4C483FF06313BEE19EAD39978B`.

:::tip

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Workflow

### Delete an existing runtime using [DELETE /api/runtimes/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes/deleteScriptRuntime)

In this step, you are deleting the runtime with ID `E6C5BF4C483FF06313BEE19EAD39978B`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Request Body: Empty

Sample Curl:

```bash
  curl -X 'DELETE' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/runtimes/E6C5BF4C483FF06313BEE19EAD39978B' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch'
```

Sample Response Body: Empty

Sample Response Code: 204
