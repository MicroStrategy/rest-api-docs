---
title: Workflow sample - Update a driver's definition
sidebar_label: Update a driver's definition
description: This workflow sample demonstrates how to update a driver's definition
---

<Available since="2021 Update 9" />

This workflow sample demonstrates how to update a driver's definition.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the driver's ID needed to execute the request using [GET /api/drivers](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/getDrivers_1).

:::

:::info

To use this API, the user should have the privilege of "Create configuration objects" and "Configure gateways and drivers".

Currently, we only support updating a driver's "enabled" status.

:::

## Update a driver's definition [PATCH /api/drivers/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/patchDriverById)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body:

```json
{
  "operationList": [
    {
      "op": "replace",
      "path": "/enabled",
      "value": true
    }
  ]
}
```

Sample Curl:

```bash
  curl -X 'PATCH' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/drivers/7358B0B8264A4B6198520B2BC0B6248B' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch ' \
  -H 'Content-Type: application/json' \
  -d '{
  "operationList": [
    {
      "op": "replace",
      "path": "/enabled",
      "value": false
    }
  ]
}'
```

Sample Response Body:

You can get the updated driver's definition.

```json
{
  "enabled": false,
  "id": "7358B0B8264A4B6198520B2BC0B6248B",
  "isODBC": false,
  "name": "com.microstrategy.jdbc.db2.TestDriver"
}
```

Sample Response Code: 200
