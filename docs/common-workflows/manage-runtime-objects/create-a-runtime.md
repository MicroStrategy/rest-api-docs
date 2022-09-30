---
title: Workflow sample - Create a runtime
sidebar_label: Create a runtime
description: This workflow sample demonstrates how to create a new runtime object through the REST API.
---

This workflow sample demonstrates how to create a new runtime object through the REST API.

The runtime is a configuration level object.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Workflow

### Create a new runtime using [POST /api/runtimes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes/createScriptRuntime)

In this step, you are creating a new runtime with name `Test Runtime`, whitelist `10.10.10.0/24`, and package `mstrio-py`, along with some other properties.

:::tip

- `whitelist` decides the reachable destination of this runtime, its format should follow CIDR (Classless Inter-Domain Routing).
- `packages` indicates the preinstalled packages for this runtime, if the scripts require some special packages, it could be defined here.
- `execTimeout` means the scripts using this runtime could NOT be executed more than this time. If the script execution is time-consuming, the user needs to enlarge this timeout value.
- `resource` is used to control the maximum resource that could be allocated for this runtime. The unit for **mem** field is MB, so 512 means the maximum memory allocated for this runtime is 512MB, otherwise, it would be out of memory. The **cpu** resource is measured in _cpu_ units. 1 CPU unit is equivalent to 1 physical CPU core, or 1 virtual core, depending on whether it runs in a physical host or a virtual machine running inside a physical machine. 0.2 means requesting 20% as much CPU time compared to if you asked for 1.0 CPU.
- `runtimeVersion` is for the Python version, usually, we would support the latest stable version.
- `minCachedInstances` and `maxCachedInstances` are used to adjust the minimum and maximum cached instance number for the runtime pool, which is usually used for performance tuning.
- `others` is a reserved field, and isn't used for now.

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body:

```json
{
  "name": "Test Runtime",
  "description": "This is a test runtime",
  "whitelist": ["10.10.10.0/24"],
  "packages": [
    {
      "name": "mstrio-py",
      "version": "",
      "description": ""
    }
  ],
  "resource": {
    "cpu": "0.2",
    "mem": 512
  },
  "execTimeout": 600,
  "minCachedInstances": 0,
  "maxCachedInstances": 5,
  "runtimeVersion": "3.10.5",
  "others": ""
}
```

Sample Curl:

```bash
curl -X "POST" \
  "https://demo.microstrategy.com/MicroStrategyLibrary/api/runtimes" \
  -H "accept: application/json" \
  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" \
  -H "Content-Type: application/json" \
  -d "{
  'name': 'Test Runtime',
  'description': 'This is a test runtime',
  'whitelist': [
    '10.10.10.0/24'
  ],
  'packages': [
    {
      'name': 'mstrio-py',
      'version': '',
      'description': ''
    }
  ],
  'resource': {
    'cpu': '0.2',
    'mem': 512
  },
  'execTimeout': 600,
  'minCachedInstances': 0,
  'maxCachedInstances': 5,
  'runtimeVersion': '3.10.5',
  'others': ''
}"
```

Sample Response Body:

You can view the new runtime id in the body of the response.

```json
{
  "id": "E6C5BF4C483FF06313BEE19EAD39978B"
}
```
