---
title: Workflow Sample - Retrieve all Runtimes
sidebar_label: Retrieve all Runtimes
description: This workflow sample demonstrates how to list all the runtime objects.
---

This workflow sample demonstrates how to list all the runtime objects.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Workflow

### Retrieve all runtimes [GET /api/runtimes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes/listRuntimes)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X "GET" \
  "http://demo.microstrategy.com/MicroStrategyLibrary/api/runtimes" \
  -H "accept: application/json" \
  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"
```

Sample Response Body:

You can get al the runtime objects in the body of the response.

```json
{
  "runtimes": [
    {
      "name": "(Default) MicroStrategy",
      "id": "0F35652CA7D041978BF0CBCB67531203",
      "type": 80,
      "description": "A default server configuration used to execute Python scripts on IServer. It includes the latest versions of both Python and mstrio packages, as well as a default network access configuration. Allows for network access customization.",
      "subtype": 20480,
      "dateCreated": "2022-05-26T03:16:00.000+0000",
      "dateModified": "2022-08-22T11:03:56.000+0000",
      "version": "1E1F3F6849AE565A366A678882ED2F37",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "acl": [
        {
          "deny": false,
          "type": 1,
          "rights": 1,
          "trusteeId": "294DEDC011D2F1D56000D98E67019608",
          "trusteeName": "Public / Guest",
          "trusteeType": 34,
          "trusteeSubtype": 8705,
          "inheritable": false
        },
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
      "packages": [
        {
          "name": "mstrio-py",
          "version": "11.3.6.103",
          "description": "",
          "status": "installed"
        }
      ],
      "runtimeVersion": "3.10.5",
      "execTimeout": 600,
      "others": "",
      "status": "ready",
      "minCachedInstances": 1,
      "maxCachedInstances": 2
    }
  ]
}
```

Sample Response Code: 200
