---
title: Delete a datasource
description: The workflow for deleting and cleaning up a datasource includes the following sequence of REST API requests.
---

The workflow for deleting and cleaning up a datasource includes the following sequence of REST API requests.

1. [Delete a datasource](#delete-a-datasource) `DELETE /api/datasources/{datasourceId}`
1. [Delete a datasource connection](#delete-a-datasource-connection) `DELETE /api/datasources/connections/{connectionId}`
1. [Delete a datasource login](#delete-a-datasource-login) `DELETE /api/datasources/logins/{loginId}`

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2da893be-a6e9-449a-95ae-749b5906bb27?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

## Delete a datasource

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

You can obtain the datasource ID from searching for the datasource by name with the endpoint `GET /api/datasources`.

:::

End Point: `DELETE /api/datasources/{datasourceId}`

Sample Request Header:

```http
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl --location -g --request DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/604F7EB2AF4E8CCB93F0C48071A3F466' \
--header 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch'
```

Sample Response Body: Empty

Sample Response Code: 204 (A database source is deleted successfully.)

## Delete a datasource connection

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

You can obtain the connection ID from searching for datasource connections with the endpoint `GET /api/datasources/connections`.

:::

End Point: `DELETE /api/datasources/connections/{connectionId}`

Sample Request Header:

```http
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl --location -g --request DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/connections/CDCBE48C1342CBC68FCE4393AF33A1CC' \
--header 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' \
```

Sample Response Body: Empty

Sample Response Code: 204 (Datasource connection is deleted successfully.)

## Delete a datasource login

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

You can obtain the login ID from viewing datasource logins with the endpoint `GET /api/datasources/logins`.

:::

End Point: `DELETE /api/datasources/{datasourceId}`

Sample Request Header:

```http
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl --location -g --request DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/logins/34B407AA6B43C17B8286A3AEEA775DB3' \
--header 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' \
```

Sample Response Body: Empty

Sample Response Code: 204 (Datasource login is deleted successfully.)
