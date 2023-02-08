---
title: Create a datasource
description: The workflow for creating a datasource includes the following sequence of REST API requests.
---

The workflow for creating a datasource includes the following sequence of REST API requests.

1. [Create a datasource login](#create-datasource-login) `POST /api/datasources/logins`
1. [Create a datasource connection](#create-a-datasource-connection) `POST /api/datasources/connections`
1. [Create a database source](#create-a-database-source) `POST /api/datasources`

A detailed description of each step of this request is listed down below.

## Create datasource login

End Point: [POST /api/datasources/logins](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/createDatasourceLogin)

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body:

```json
{
  "name": "Test_Snow_Login",
  "password": "mstr",
  "username": "mstr",
  "description": ""
}
```

Sample Curl:

```bash
curl --location --request POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/logins' \
--header 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Test_Snow_Login",
    "password": "mstr",
    "username": "mstr",
    "description": ""
}'
```

Sample Response Body:

```json
{
  "name": "Test_Snow_Login",
  "id": "34B407AA6B43C17B8286A3AEEA775DB3",
  "description": "",
  "dateCreated": "2021-08-04T15:44:35.000+0000",
  "dateModified": "2021-08-04T15:44:35.000+0000",
  "acg": 255,
  "username": "mstr"
}
```

Sample Response Code: 201 (Datasource login is created successfully.)

## Create a datasource connection

End Point: [POST /api/datasources/connections](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Datasource%20Management/createDatabaseConnection)

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the datasource login id from the response body of the previous call. From our example, it is `"34B407AA6B43C17B8286A3AEEA775DB3"`

:::

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body:

```json
{
  "name": "Test_Snow_Connection",
  "description": "",
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
      "id": "{datasource_login_id}",
      "name": "Test_snow_login"
    },
    "type": "snow_flake",
    "version": "snowflake_1x"
  },
  "driverType": "odbc",
  "oauthParameter": ""
}
```

Sample Curl:

```bash
curl --location --request POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/connections' \
--header 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Test_Snow_Connection",
    "description": "",
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
            "id": "34B407AA6B43C17B8286A3AEEA775DB3",
            "name": "Test_snow_login"
        },
        "type": "snow_flake",
        "version": "snowflake_1x"

    },
    "driverType": "odbc",
    "oauthParameter": ""
}'
```

Sample Response Body:

```json
{
  "name": "Test_Snow_Connection",
  "id": "CDCBE48C1342CBC68FCE4393AF33A1CC",
  "description": "",
  "acg": 0,
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
      "id": "34B407AA6B43C17B8286A3AEEA775DB3",
      "name": "Test_Snow_Login"
    },
    "type": "snow_flake",
    "version": "snowflake_1x"
  },
  "driverType": "odbc",
  "oauthParameter": ""
}
```

Sample Response Code: 201 (Datasource connection is created successfully.)

## Create a database source

End Point: [POST /api/datasources](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Datasource%20Management/createDatasource)

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the datasource connection id from the response body of the previous call. From our example, it is `"CDCBE48C1342CBC68FCE4393AF33A1CC"`

:::

End Point: `POST /api/datasources`

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body:

```json
{
  "name": "Test_Snow_Source",
  "description": "",
  "datasourceType": "normal",
  "database": {
    "connection": {
      "id": "{connectionId}"
    }
  },
  "tablePrefix": "",
  "odbcVersion": "version3x",
  "intermediateStoreDbName": "",
  "intermediateStoreTableSpaceName": "",
  "dbms": {
    "id": "86AC7FD44D2B4B0FB65AE948EF19BDD0"
  }
}
```

Sample Curl:

```bash
curl --location --request POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources' \
--header 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Test_Snow_Source",
    "description": "",
    "datasourceType": "normal",
    "database": {
        "connection": {
            "id": "{{connectionId}}"
        }
    },
    "tablePrefix": "",
    "odbcVersion": "version3x",
    "intermediateStoreDbName": "",
    "intermediateStoreTableSpaceName": "",
    "dbms": {
        "id": "86AC7FD44D2B4B0FB65AE948EF19BDD0"
    }
}'
```

Sample Response Body:

```json
{
  "id": "604F7EB2AF4E8CCB93F0C48071A3F466",
  "name": "Test_Snow_Source",
  "description": "",
  "dateCreated": "2021-08-03T20:58:56.000+0000",
  "dateModified": "2021-08-03T20:58:56.000+0000",
  "acg": 255,
  "datasourceType": "normal",
  "database": {
    "type": "snow_flake",
    "version": "snowflake_1x",
    "connection": {
      "name": "Test_Snow_Connection",
      "id": "1E6897CFC14887C5A1B7D19E0D023DDF",
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

Sample Response Code: 201 (A new database source is created successfully.)
