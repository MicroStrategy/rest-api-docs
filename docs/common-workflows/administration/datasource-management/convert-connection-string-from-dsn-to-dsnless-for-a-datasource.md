---
title: Convert connection string from data source name(DSN) to DSN-less for a datasource
description: This workflow sample demonstrates how to convert connection string from DSN to DSN-less for a database source, or a datasource connection.
---

<Available since="2021 Update 8" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-737e03ad-a41a-46d5-bf7a-00e68963b08b?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to convert connection string from DSN to DSN-less for a database source, or a datasource connection.

A detailed description of each step is listed down below.

## Convert for a database source

Endpoint: [POST /api/datasources/\{datasourceId}/conversion](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/datasourceConversion)

This endpoint allows the caller to convert for a database source with a embedded database connection. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. You can find the `datasourceId` using the endpoint `GET /api/datasources`. If the call is successful, the resulting HTTP response returns an HTTP status code 204.

### Step 1: Use the `GET /api/datasources/{datasourceId}` API call to get the datasource definition

If the value for `database/connection/isEmbedded` is true, you should be able to see the definition of the embedded connection(`database/embeddedConnection`). If it's false, please use [Convert for a datasource connection](#convert-for-a-datasource-connection) for the standalone datasource connection.

Then you can check the connection string(`database/embeddedConnection/connectionString`) of the embedded connection you want to convert to see the DSN inside this database source before conversion.

```json
"connectionString": "DSN=postgres_win;"
```

Sample Request

- Request Headers

  ```http
  "Accept: application/json"
  "X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"
  ```

Sample Response

- Response Body

  ```json
  {
    "id": "683E35DC47E33C3086A0EEB8F0C3F1E5",
    "name": "postgres_dsn",
    "description": "",
    "dateCreated": "2022-11-10T10:35:20.000+0000",
    "dateModified": "2022-11-24T07:39:35.000+0000",
    "acg": 255,
    "datasourceType": "data_import",
    "database": {
      "type": "postgre_sql",
      "version": "postgre_sql_90",
      "connection": {
        "name": "postgres_dsn.conn",
        "id": "C329607743675E3DE8785F917C8B0EBB",
        "isEmbedded": true
      },
      "embeddedConnection": {
        "name": "postgres_dsn.conn",
        "id": "C329607743675E3DE8785F917C8B0EBB",
        "description": "",
        "acg": 0,
        "executionMode": "synchronous",
        "maxCancelAttemptTime": 60,
        "maxQueryExeTime": -1,
        "maxConnectionAttemptTime": 60,
        "connectionLifetime": 36000,
        "connectionIdleTimeout": 60,
        "charEncodingWindows": "multibyte",
        "charEncodingUnix": "utf8",
        "tablePrefix": "",
        "connectionString": "DSN=postgres_win;",
        "parameterizedQueries": false,
        "extendedFetch": false,
        "login": {
          "name": "postgres_dsn.login",
          "id": "B6FD3ADA4867346E60EE5FAAB15B8471",
          "isEmbedded": true
        },
        "embeddedLogin": {
          "name": "postgres_dsn.login",
          "id": "B6FD3ADA4867346E60EE5FAAB15B8471",
          "description": "",
          "dateCreated": "1970-01-01T00:00:00.000+0000",
          "dateModified": "1970-01-01T00:00:00.000+0000",
          "acg": 0,
          "username": "abc"
        },
        "driverType": "odbc",
        "oauthParameter": "",
        "walletInfo": "",
        "iam": {},
        "resource": "",
        "scope": "",
        "enableSso": false
      }
    },
    "tablePrefix": "",
    "odbcVersion": "version3x",
    "intermediateStoreDbName": "",
    "intermediateStoreTableSpaceName": "",
    "dbms": {
      "name": "PostgreSQL",
      "id": "702780F3E3594D95AD4C85CE8F803306"
    },
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    },
    "hidden": false
  }
  ```

### Step 2: Use the `POST /api/datasources/{datasourceId}/conversion` API call to convert

This call will convert the DSN in the connection string(`database/embeddedConnection/connectionString`) to DSN-less format connection string.

Sample Request

- Request Header:

  ```http
  "Accept: application/json"
  "X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"
  ```

Sample Response

- Response Code: 204

### Step 3: Use the GET `/api/datasources/{datasourceId}` API call to get the datasource definition again

After conversion, you should be able to see the DSN-less format connection string in the response by calling the API to get the datasource definition.

```json
"connectionString": "DRIVER={MicroStrategy ODBC Driver for PostgreSQL Wire Protocol};APPLICATIONUSINGTHREADS=1;DATABASE=test;DEFAULTLONGDATABUFFLEN=1024;DESCRIPTION=MicroStrategy ODBC Driver for PostgreSQL Wire Protocol;ENABLEDESCRIBEPARAM=1;ENCRYPTIONMETHOD=1;FETCHTSWTZASTIMESTAMP=1;FETCHTWFSASTIME=1;HOSTNAME=xx.xx.xx.xx;HOSTNAMEINCERTIFICATE=xx.xx.xx.xx;PORTNUMBER=5432;TRANSACTIONERRORBEHAVIOR=0;UID=uid;VALIDATESERVERCERTIFICATE=1;XMLDESCRIBETYPE=-10;"
```

Sample Request

- Request Headers

  ```http
  "Accept: application/json"
  "X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"
  ```

Sample Response

- Response Body

  ```json
  {
    "id": "683E35DC47E33C3086A0EEB8F0C3F1E5",
    "name": "postgres_dsn",
    "description": "",
    "dateCreated": "2022-11-10T10:35:20.000+0000",
    "dateModified": "2022-11-24T07:39:35.000+0000",
    "acg": 255,
    "datasourceType": "data_import",
    "database": {
      "type": "postgre_sql",
      "version": "postgre_sql_90",
      "connection": {
        "name": "postgres_dsn.conn",
        "id": "C329607743675E3DE8785F917C8B0EBB",
        "isEmbedded": true
      },
      "embeddedConnection": {
        "name": "postgres_dsn.conn",
        "id": "C329607743675E3DE8785F917C8B0EBB",
        "description": "",
        "acg": 0,
        "executionMode": "synchronous",
        "maxCancelAttemptTime": 60,
        "maxQueryExeTime": -1,
        "maxConnectionAttemptTime": 60,
        "connectionLifetime": 36000,
        "connectionIdleTimeout": 60,
        "charEncodingWindows": "multibyte",
        "charEncodingUnix": "utf8",
        "tablePrefix": "",
        "connectionString": "DRIVER={MicroStrategy ODBC Driver for PostgreSQL Wire Protocol};APPLICATIONUSINGTHREADS=1;DATABASE=test;DEFAULTLONGDATABUFFLEN=1024;DESCRIPTION=MicroStrategy ODBC Driver for PostgreSQL Wire Protocol;ENABLEDESCRIBEPARAM=1;ENCRYPTIONMETHOD=1;FETCHTSWTZASTIMESTAMP=1;FETCHTWFSASTIME=1;HOSTNAME=xx.xx.xx.xx;HOSTNAMEINCERTIFICATE=xx.xx.xx.xx;PORTNUMBER=5432;TRANSACTIONERRORBEHAVIOR=0;UID=uid;VALIDATESERVERCERTIFICATE=1;XMLDESCRIBETYPE=-10;",
        "parameterizedQueries": false,
        "extendedFetch": false,
        "login": {
          "name": "postgres_dsn.login",
          "id": "B6FD3ADA4867346E60EE5FAAB15B8471",
          "isEmbedded": true
        },
        "embeddedLogin": {
          "name": "postgres_dsn.login",
          "id": "B6FD3ADA4867346E60EE5FAAB15B8471",
          "description": "",
          "dateCreated": "1970-01-01T00:00:00.000+0000",
          "dateModified": "1970-01-01T00:00:00.000+0000",
          "acg": 0,
          "username": "abc"
        },
        "driverType": "odbc",
        "oauthParameter": "",
        "walletInfo": "",
        "iam": {},
        "resource": "",
        "scope": "",
        "enableSso": false
      }
    },
    "tablePrefix": "",
    "odbcVersion": "version3x",
    "intermediateStoreDbName": "",
    "intermediateStoreTableSpaceName": "",
    "dbms": {
      "name": "PostgreSQL",
      "id": "702780F3E3594D95AD4C85CE8F803306"
    },
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    },
    "hidden": false
  }
  ```

## Convert for a datasource connection

Endpoint: [POST /api/datasources/connections/\{connectionId}/conversion](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/datasourceConnectionConversion)

This endpoint allows the caller to convert for a standalone datasource connection. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. You can find the `connectionId` using the endpoint `GET /api/datasources/connections`. If the call is successful, the resulting HTTP response returns an HTTP status code 204.

### Step 1: Use the `GET /api/datasources/connections/{connectionId}` API call to get the datasource connection definition

You can check the connection string(`connectionString`) of the embedded datasource connection you want to convert to see the DSN inside this datasource connection before conversion.

```json
"connectionString": "DSN=sqlserver_win;"
```

Sample Request

- Request Headers

  ```http
  "Accept: application/json"
  "X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"
  ```

Sample Response

- Response Body

  ```json
  {
    "name": "sqlserver_dsn",
    "id": "6D34D3DE4CDCB0638BE3AF876B8E11DD",
    "description": "",
    "acg": 0,
    "executionMode": "synchronous",
    "maxCancelAttemptTime": 60,
    "maxQueryExeTime": -1,
    "maxConnectionAttemptTime": 6000,
    "connectionLifetime": 36000,
    "connectionIdleTimeout": 60,
    "charEncodingWindows": "multibyte",
    "charEncodingUnix": "utf8",
    "tablePrefix": "",
    "connectionString": "DSN=sqlserver_win;",
    "parameterizedQueries": true,
    "extendedFetch": false,
    "database": {
      "login": {
        "id": "40B2C4E84D717B49FF8A4192493484E7",
        "name": "sqlserver_dsn_login"
      },
      "type": "sql_server",
      "version": "default"
    },
    "driverType": "odbc",
    "oauthParameter": "",
    "walletInfo": "",
    "iam": {},
    "resource": "",
    "scope": "",
    "enableSso": false
  }
  ```

### Step 2: Use the `POST /api/datasources/connections/{connectionId}/conversion` API call to convert

This call will convert the DSN in the connection string(`connectionString`) to DSN-less format connection string.

Sample Request

- Request Header:

  ```http
  "Accept: application/json"
  "X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"
  ```

Sample Response

- Response Code: 204

### Step 3: Use the GET `/api/datasources/connections/{connectionId}` API call to get the datasource connection definition again

After conversion, you should be able to see the DSN-less format connection string in the response by calling the API to get the datasource connection definition.

```json
"connectionString": "DRIVER={MicroStrategy ODBC Driver for SQL Server Wire Protocol};DATABASE=tpch;HOSTNAME=10.27.69.102;KEEPALIVE=0;KEEPCONNECTIONACTIVE=0;LOADBALANCETIMEOUT=0;LOADBALANCING=0;LOGINTIMEOUT=15;MAXPOOLSIZE=100;MINPOOLSIZE=0;MULTISUBNETFAILOVER=0 - FALSE;PORTNUMBER=1433;PROXYMODE=0;QUERYTIMEOUT=0;REPORTCODEPAGECONVERSIONERRORS=0;SNAPSHOTSERIALIZABLE=0;SOCKETIDLETIMECHECKINTERVAL=1500;VALIDATESERVERCERTIFICATE=1;XMLDESCRIBETYPE=-10;"
```

Sample Request

- Request Headers

  ```http
  "Accept: application/json"
  "X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"
  ```

Sample Response

- Response Body

  ```json
  {
    "name": "sqlserver_dsn",
    "id": "6D34D3DE4CDCB0638BE3AF876B8E11DD",
    "description": "",
    "acg": 0,
    "executionMode": "synchronous",
    "maxCancelAttemptTime": 60,
    "maxQueryExeTime": -1,
    "maxConnectionAttemptTime": 6000,
    "connectionLifetime": 36000,
    "connectionIdleTimeout": 60,
    "charEncodingWindows": "multibyte",
    "charEncodingUnix": "utf8",
    "tablePrefix": "",
    "connectionString": "DRIVER={MicroStrategy ODBC Driver for SQL Server Wire Protocol};DATABASE=tpch;HOSTNAME=10.27.69.102;KEEPALIVE=0;KEEPCONNECTIONACTIVE=0;LOADBALANCETIMEOUT=0;LOADBALANCING=0;LOGINTIMEOUT=15;MAXPOOLSIZE=100;MINPOOLSIZE=0;MULTISUBNETFAILOVER=0 - FALSE;PORTNUMBER=1433;PROXYMODE=0;QUERYTIMEOUT=0;REPORTCODEPAGECONVERSIONERRORS=0;SNAPSHOTSERIALIZABLE=0;SOCKETIDLETIMECHECKINTERVAL=1500;VALIDATESERVERCERTIFICATE=1;XMLDESCRIBETYPE=-10;",
    "parameterizedQueries": true,
    "extendedFetch": false,
    "database": {
      "login": {
        "id": "40B2C4E84D717B49FF8A4192493484E7",
        "name": "sqlserver_dsn_login"
      },
      "type": "sql_server",
      "version": "default"
    },
    "driverType": "odbc",
    "oauthParameter": "",
    "walletInfo": "",
    "iam": {},
    "resource": "",
    "scope": "",
    "enableSso": false
  }
  ```
