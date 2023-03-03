---
title: Workflow sample - Retrieve all drivers' definitions
sidebar_label: Retrieve all drivers' definitions
description: This workflow sample demonstrates how to list all drivers' definitions in metadata.
---

<Available since="2021 Update 9" />

This workflow sample demonstrates how to list all drivers' definitions in metadata.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Retrieve all drivers' definitions [GET /api/drivers](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/getDrivers_1)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X "GET" \
  "http://demo.microstrategy.com/MicroStrategyLibrary/api/drivers" \
  -H "accept: application/json" \
  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"
```

Sample Response Body:

You can get all the driver objects in the body of the response.

```json
{
  "drivers": {
    "39A3AC385545FE26E6DA33E3636B162D": {
      "enabled": true,
      "id": "39A3AC385545FE26E6DA33E3636B162D",
      "isODBC": false,
      "name": "com.microstrategy.jdbc.db2.DB2Driver"
    },
    "43A37DAC2A79A629643FBF30636B162D": {
      "enabled": true,
      "id": "43A37DAC2A79A629643FBF30636B162D",
      "isODBC": true,
      "name": "Teradata Database ODBC Driver 17.20"
    },
    "43A6758EF9CE9BBB12AD13C2636B162D": {
      "enabled": true,
      "id": "43A6758EF9CE9BBB12AD13C2636B162D",
      "isODBC": true,
      "name": "MicroStrategy ODBC Driver for SQL Server Wire Protocol"
    }
  }
}
```

Sample Response Code: 200
