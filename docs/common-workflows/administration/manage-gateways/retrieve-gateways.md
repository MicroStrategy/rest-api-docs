---
title: Workflow sample - Retrieve all gateways' definitions
sidebar_label: Retrieve all gateways' definitions
description: This workflow sample demonstrates how to list all available gateways.
---

<Available since="2021 Update 9" />

This workflow sample demonstrates how to list all available gateways.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Retrieve all gateways' definitions [GET /api/gateways](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Gateways/getGateways)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X "GET" \
  "http://demo.microstrategy.com/MicroStrategyLibrary/api/gateways" \
  -H "accept: application/json" \
  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"
```

Sample Response Body:

You can get all available gateways' definition in the body of the response.

```json
{
  "gateways": {
    "D649DA37F4514289AA44D93B128F3BD5": {
      "name": "Cloud Gateway ADLS2",
      "id": "D649DA37F4514289AA44D93B128F3BD5",
      "type": "S3",
      "certifiedAsGateway": true,
      "dbType": "cloud_gateway_azure_adls_2"
    },
    "EAD0E3D84E8B47D1A1A860CEF66FE602": {
      "name": "Microsoft SQL Server 2012",
      "id": "EAD0E3D84E8B47D1A1A860CEF66FE602",
      "type": "Relational",
      "certifiedAsGateway": true,
      "dbType": "sql_server"
    }
  }
}
```

Sample Response Code: 200
