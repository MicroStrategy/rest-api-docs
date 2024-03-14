---
title: Workflow sample - Retrieve a gateway's definition
sidebar_label: Retrieve a gateway's definition
description: This workflow sample demonstrates how to retrieve a gateway's definition.
---

<Available since="2021 Update 9" />

This workflow sample demonstrates how to retrieve a gateway's definition.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the gateway ID needed to execute the request using [GET /api/gateways](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Gateways/getGateways).

:::

## Retrieve a gateway's definition [GET /api/gateways/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Gateways/getGatewayById)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X "GET" \
  "http://demo.microstrategy.com/MicroStrategyLibrary/api/gateways/EAD0E3D84E8B47D1A1A860CEF66FE602" \
  -H "accept: application/json" \
  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"
```

Sample Response Body:

You can get the gateway's definition in the body of the response.

```json
{
  "name": "Microsoft SQL Server 2012",
  "id": "EAD0E3D84E8B47D1A1A860CEF66FE602",
  "type": "Relational",
  "certifiedAsGateway": true,
  "dbType": "sql_server"
}
```

Sample Response Code: 200
