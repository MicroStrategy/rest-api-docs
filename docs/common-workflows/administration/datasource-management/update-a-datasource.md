---
title: Update a datasource
description: This workflow sample demonstrates how to update a database source, datasource connection, and datasource login.
---

This workflow sample demonstrates how to update a database source, datasource connection, and datasource login.

1. [Update database source.](#update-a-database-source) `PATCH /api/datasources/{datasourceId}`
1. [Update datasource connection.](#update-a-datasource-connection) `PATCH /api/datasources/connections/{connectionId}`
1. [Update datasource login.](#update-a-datasource-login) `PATCH /api/datasources/connections/{loginId}`

A detailed description of each step of this request is listed down below.

## Update a database source

End Point: `PATCH /api/datasources/{datasourceId}`

This endpoint allows the caller to update a database source with the MicroStrategy REST Server. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. You can find the datasourceId using the endpoint `GET /api/datasources`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a info for the updated database source.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body:

  ```json
  {
    "operationList": [
      {
        "op": "replace",
        "path": "/description",
        "value": "Test snowflake database source"
      }
    ]
  }
  ```

- Curl

  ```bash
  curl --location -g --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/{{datasourceId}}' \
  --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "operationList": [
          {
              "op": "replace",
              "path": "/description",
              "value": "Test snowflake database source"
          }
      ]
  }'
  ```

Sample Response

- Response Body

  ```json
  {
    "id": "D6C2B40858421FAF457501A620908C00",
    "name": "Test_Snow_Source",
    "description": "Test snowflake database source",
    "dateCreated": "2021-08-03T20:04:56.000+0000",
    "dateModified": "2021-08-03T20:05:15.000+0000",
    "acg": 255,
    "datasourceType": "normal",
    "database": {
      "type": "snow_flake",
      "version": "snowflake_1x",
      "connection": {
        "name": "Test_Snow_Connection",
        "id": "00FBD7497E42AB6BCDDDD8A986BFBFF2",
        "isEmbedded": false
      }
    },
    "tablePrefix": "",
    "odbcVersion": "version3x",
    "intermediateStoreDbName": "",
    "intermediateStoreTableSpaceName": "",
    "dbms": {
      "name": "Snowflake",
      "id": "86AC7FD44D2B4B0FB65AE948EF19BDD0"
    },
    "owner": {
      "name": "MSTR User",
      "id": "7FC05A65473CE2FD845CE6A1D3F13233"
    }
  }
  ```

  Sample Response Code: 200 (Update database source.)

## Update a datasource connection

End Point: `PATCH /api/datasources/connections/{connectionId}`

This endpoint allows the caller to update a datasource connection with the MicroStrategy REST Server. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. You can find the connectionId using the endpoint `GET /api/datasources/connections`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing info for the updated datasource connection.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body:

  ```json
  {
    "operationList": [
      {
        "op": "replace",
        "path": "/description",
        "value": "Test Snowflake Connection"
      }
    ]
  }
  ```

- Curl

  ```bash
  curl --location -g --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/connections/{{connectionId}}' \
  --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "operationList": [
          {
              "op": "replace",
              "path": "/description",
              "value": "Test Snowflake Connection"
          }
      ]
  }'
  ```

Sample Response

- Response Body

  ```json
  {
    "name": "Test_Snow_Connection",
    "id": "00FBD7497E42AB6BCDDDD8A986BFBFF2",
    "description": "Test Snowflake Connection",
    "acg": 255,
    "executionMode": "synchronous",
    "maxCancelAttemptTime": 60,
    "maxQueryExeTime": 0,
    "maxConnectionAttemptTime": 60,
    "connectionLifetime": 36000,
    "connectionIdleTimeout": 60000,
    "charEncodingWindows": "multibyte",
    "charEncodingUnix": "utf8",
    "tablePrefix": "",
    "connectionString": "DSN=SNOWFLAKE_DSN",
    "parameterizedQueries": true,
    "extendedFetch": false,
    "database": {
      "login": {
        "id": "E0A644366147B08B570B6DB4E15119EF",
        "name": "Test_Snow_Login"
      },
      "type": "snow_flake",
      "version": "snowflake_1x"
    },
    "driverType": "odbc",
    "oauthParameter": ""
  }
  ```

  Sample Response Code: 200 (Update datasource connection.)

## Update a datasource login

End Point: `PATCH /api/datasources/connections/{loginId}`

This endpoint allows the caller to update a datasource login with the MicroStrategy REST Server. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. You can find the loginId using the endpoint `GET /api/datasources/logins`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing info for the updated datasource login.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body:

  ```json
  {
    "operationList": [
      {
        "op": "replace",
        "path": "/username",
        "value": "USERNAME_NEW"
      }
    ]
  }
  ```

- Curl

  ```bash
  curl --location -g --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/logins/{{loginId}}' \
  --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "operationList": [
          {
              "op": "replace",
              "path": "/username",
              "value": "USERNAME_NEW"
          }
      ]
  }'
  ```

Sample Response

- Response Body

  ```json
  {
    "name": "Test_Snow_Login",
    "id": "E0A644366147B08B570B6DB4E15119EF",
    "description": "",
    "dateCreated": "2021-08-03T20:03:33.000+0000",
    "dateModified": "2021-08-03T20:03:33.000+0000",
    "acg": 255,
    "username": "USERNAME_NEW"
  }
  ```

  Sample Response Code: 200 (Update datasource login.)
