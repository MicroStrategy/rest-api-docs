---
title: Workflow sample - Retrieve a driver's definition
sidebar_label: Retrieve a driver's definition
description: This workflow sample demonstrates how to retrieve a driver's definition in metadata.
---

<Available since="2021 Update 9" />

This workflow sample demonstrates how to retrieve a driver's definition in metadata.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the driver's ID needed to execute the request using [GET /api/drivers](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/getDrivers_1).

:::

## Retrieve a driver's definition [GET /api/drivers/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/getDriverById)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X "GET" \
  "http://demo.microstrategy.com/MicroStrategyLibrary/api/drivers/7358B0B8264A4B6198520B2BC0B6248B" \
  -H "accept: application/json" \
  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"
```

Sample Response Body:

You can get a driver's definition in the body of the response.

```json
{
  "enabled": true,
  "id": "7358B0B8264A4B6198520B2BC0B6248B",
  "isODBC": false,
  "name": "com.microstrategy.jdbc.db2.TestDriver"
}
```

Sample Response Code: 200
