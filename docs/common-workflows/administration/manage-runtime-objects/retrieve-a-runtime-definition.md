---
title: Retrieve a runtime definition
sidebar_label: Retrieve a runtime definition
description: This workflow sample demonstrates how to retrieve an existing runtime object through the REST API.
---

<Available since="2021 Update 7" />

You can use REST APIs to retrieve the definition of a runtime object.

## Retrieve a runtime definition

You want to get the definition of a runtime object. The object ID of the runtime is `E6C5BF4C483FF06313BEE19EAD39978B`.

:::tip

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Retrieve the runtime’s definition using [GET /api/runtimes/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes/getScriptRuntime).

### Sample request header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

### Sample request body

Empty

### Sample curl

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/runtimes/E6C5BF4C483FF06313BEE19EAD39978B' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch'
```

### Sample response body

You can view the runtime definition in the body of the response.

```json
{
  "name": "Test Runtime Modified",
  "id": "E6C5BF4C483FF06313BEE19EAD39978B",
  "type": 80,
  "description": "string",
  "subtype": 20480,
  "dateCreated": "2022-08-31T07:29:53.000+0000",
  "dateModified": "2022-09-01T03:53:14.000+0000",
  "version": "F52B174548E08F9C0474F3BB727AA629",
  "acg": 255,
  "owner": {
    "name": "Administrator",
    "id": "54F3D26011D2896560009A8E67019608"
  },
  "acl": [
    {
      "deny": false,
      "type": 1,
      "rights": 255,
      "trusteeId": "54F3D26011D2896560009A8E67019608",
      "trusteeName": "Administrator",
      "trusteeType": 34,
      "trusteeSubtype": 8704,
      "inheritable": false
    }
  ],
  "whitelist": ["10.10.10.0/24"],
  "packages": [
    {
      "name": "string",
      "version": "",
      "description": "string",
      "status": "not_installed",
      "message": "Return code: 1."
    }
  ],
  "resource": {
    "cpu": "0.2",
    "mem": 512
  },
  "runtimeVersion": "3.10.5",
  "execTimeout": 600,
  "others": "string",
  "status": "error",
  "minCachedInstances": 2,
  "maxCachedInstances": 5
}
```

:::tip

Most of the fields in the response body are the definition of the runtime object. The only exception is the `status` field, there are two `status` fields in the response body.

- The top-level `status` in the response body indicates the overall status of the runtime, the possible values are `unknown`, `ready`, `busy`, and `error`.
- The `packages[i].field` means whether the package is installed in the remote server, the possible values are `unknown`, `installing`, `installed`, and `not_installed`.

:::

### Response code

200 (The runtime definition is returned successfully.)
