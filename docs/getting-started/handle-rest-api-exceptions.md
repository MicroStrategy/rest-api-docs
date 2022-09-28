---
title: Handle REST API errors
description: This page provides a guidance on designing exception workflows when using MicroStrategy REST API.
---

When developers use MicroStrategy REST APIs to build dynamic applications, they need to add code to handle error conditions. The instructions below are designed to provide a guidance on designing exception workflows when using MicroStrategy REST API.

## 1. Understand the status code

Determine whether the REST API request succeeded or failed, based on the HTTP status response code returned.

The HTTP status response code returned by the REST API call indicates whether the request succeeded or failed.

| HTTP status response code | Description                                                                                     |
| :------------------------ | :---------------------------------------------------------------------------------------------- |
| 2xx (Successful)          | The request was successfully received, understood, and accepted                                 |
| 3xx (Redirection)         | Further action needs to be taken in order to complete the request                               |
| 4xx (Client error)        | The request contains bad syntax or cannot be fulfilled (bad request, authorization issue, etc.) |
| 5xx (Server error)        | The server failed to fulfill an apparently valid request                                        |

We follow RFC standards to define our HTTP status codes. You can refer to [HTTP response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) to understand the meaning of each status code.

## 2. Look for more information in payload

If the REST API request failed and the response is `application/json`, there is more information in the response body in JSON format.

## 3. Error code in the response body

Look for the error code in response body to determine if it provides insight into what caused the exception and use that insight to create meaningful text for the error message.

When you encounter REST API error, you may receive an error message that looks like the sample code below:

```json
{
  "code": "ERR001",
  "message": "MicroStrategy Intelligence Server is not configured to support LDAP authentication.",
  "iServerCode": -214720549
}
```

The value of `code` is a MicroStrategy REST API Server code. The table below provides a general description of each error code. Use the error code to create meaningful text for the error message that will help users when they encounter errors.

| Error code | Description                     |
| :--------- | :------------------------------ |
| ERR001     | General application issue       |
| ERR002     | IServer error                   |
| ERR003     | Authentication error            |
| ERR004     | Resource not found              |
| ERR005     | Missing required information    |
| ERR006     | Invalid input                   |
| ERR007     | Missing required field          |
| ERR008     | Inbox message not ready         |
| ERR009     | Session invalid or timeout      |
| ERR0010    | Not supported                   |
| ERR0013    | IServer unreachable             |
| ERR0014    | Insufficient privileges         |
| ERR0015    | Object already exists           |
| ERR0016    | Service not available           |
| ERR0017    | Insufficient permission         |
| ERR0020    | Dashboard prompt not supported  |
| ERR0021    | Invalid configuration property  |
| ERR0R22    | Service TLS validation issue    |
| ERR0023    | Secret Key configuration issue  |
| ERR0024    | Trust store configuration issue |

## 4. IServer error code

The MicroStrategy error message may also contain an integer value for `iServerCode`. This integer value maps to a constant value in the [WebAPIErrorCodes](https://www2.microstrategy.com/producthelp/Current/ReferenceFiles/reference/com/microstrategy/utils/localization/WebAPIErrorCodes.html) class. There are many error codes in this class. You should look at the `iServerCode` error and decide if you think it provides meaningful context. If so, you may want to handle it in your code.

If needed, you can also find more information in the Library Sever's error log, such as stack traces.

## Status code explained

### 200 level status code

#### 200 OK

A 200 status code means the request is succeeded. The response body varies based on the request. Please see the [REST API docs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html) for examples.

#### 201 Created

A 201 status code means a new resource was created as a result. You typically can find the resource ID in the response body or the response headers. The response body varies based on the request.

#### 202 Accepted

A 202 status code means the request has been received but not yet acted upon. It is used for asynchronous execution requests. You typically will get an ID that you can use a different API to fetch the result or check the status of the execution. We only support asynchronous execution on requests that might take a long time to execute. When it is supported, a request header "Prefer" with the value "respond-async" can be used. Please check the [REST API docs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html) for examples.

- For creating an instance of report, document, cube, and dossier, you can use the instance ID to fetch the status and get the result.
- For reloading schema, you will get a task ID.
- For exporting to PDF, you will get a result ID.

#### 204 No Content

A 204 status code means the request is succeeded, but there is no data in the response body.

### 400 level status code

#### 400 Bad Request

A 400 error means the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).

Example:

```json
{
  "code": "ERR006",
  "message": "Invalid JSON",
  "ticketId": "b722e689f6104202972f7675563b9f97"
}
```

#### 401 Unauthorized

A 401 error means you don't have a valid session state in the request or the session state has expired.

Example:

```json
{
  "code": "ERR003",
  "message": "Login failed",
  "ticketId": "07c12ef604c54902a5f03d66a75992f4"
}
```

#### 403 Forbidden

A 403 error means you have a valid auth token, but you don't have sufficient permissions to perform the action.

Example:

```json
{
  "code": "ERR017",
  "iServerCode": -2147214568,
  "message": "(User 'Guest' does not have Read and Write access to the User object 'Public / Guest' in Project 'Configuration' with ID '38A062302D4411D28E71006008960167'.)",
  "ticketId": "6c37df9f617d4cb9a7c50ce9138331c8"
}
```

#### 404 Not Found

A 404 error means the requested endpoint doesn't exist, or the endpoint is valid but the resource does not exist. You might not always get a response JSON for this status code depending on your URL. MicroStrategy REST API also uses this status code for not supported HTTP methods.

Example:

```json
{
  "code": "ERR004",
  "message": "HTTP 404 Not Found",
  "ticketId": "1cc703db10a34141b60209827e988676"
}
```

### 500 level status code

If you receive 500 level status code, you may not receive a JSON response body.

#### 500 Internal Server Error

With a 500 error code, you will get a JSON in the response body. You can check REST API Server or Intelligence Server error log for more information.

#### 501 Not Implemented

A 501 error means the request method is not supported by the server and cannot be handled.

#### 502 Bad Gateway

A 502 error means the client is having difficulty connecting to the server. Your cloud infrastructure might not be working correctly.

#### 503 Service Unavailable

A 503 error means your server is down or overloaded. Your cloud infrastructure might not be working correctly.
