---
title: Manage project load settings on Intelligence Server startup
description: A high-level workflow sample for loading project settings at the startup of the Intelligence Server is shown below.
---

<Available since="2021" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-a5485e49-f3a6-4f14-bc79-b5c0d716f6db?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

A high-level workflow sample for loading project settings at the startup of the Intelligence Server is shown below.

- [Log in](#log-in)
  - [Sample request](#sample-request)
  - [Sample response](#sample-response)
- [Get the current project load settings on Intelligence Server startup](#get-the-current-project-load-settings-on-intelligence-server-startup)
  - [Sample request](#sample-request-1)
  - [Sample response](#sample-response-1)
- [Update the project load settings on Intelligence Server startup](#update-the-project-load-settings-on-intelligence-server-startup)
  - [Sample request](#sample-request-2)
  - [Sample response](#sample-response-2)
- [Log out](#log-out)
  - [Sample request](#sample-request-3)
  - [Sample response](#sample-response-3)

A detailed explanation of each step is provided below.

## Log in

Endpoint: [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin)

This endpoint allows the user to authenticate with the MicroStrategy REST Server. You can provide the information used to create the session in the body of the request. In this example, you can use standard authentication, so you need to provide the username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and a response header containing X-MSTR-AuthToken. This authorization token is used by all subsequent requests.

### Sample request

Request Header:

```http
Content-Type: application/json
Accept: application/json
```

Request Body:

```json
{
  "loginMode": 1,
  "username": "rv",
  "password": ""
}
```

Curl:

```bash
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{"loginMode":1, "username": "rv", "password": "" }' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login'
```

### Sample response

Response Header:

```http
pragma: no-cache
x-mstr-authtoken: 6ksnde5dr2mij718ibouu8fgjj
cache-control: no-cache, no-store, max-age=0, must-revalidate
date: Tue22 Sept 2020 17:58:29 GMT
server: MicroStrategy
expires: 0
content-type: null
```

Response Code: 204 (Success)

## Get the current project load settings on Intelligence Server startup

Endpoint: [GET /api/projects/settings/onStartup](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjectLoadSettings)

Get a list of applications along with the nodes on which they would be available when the Intelligence Server starts up. You must specify an authorization token in the request header, which can be obtained from `POST /api/auth/login` during [login](#log-in).

### Sample request

Request Header:

```http
Accept: application/json
X-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj
```

Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/settings/onStartup" -H "accept: application/json" -H "X-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj"
```

### Sample response

Response Body:

This is the response of a clustered Intelligence Server, and thus, contains many values in the node array. For a non-clustered Intelligence Server, the node array would contain at most one value, being the canonical name of the Intelligence Server.

```json
{
  "projects": {
    "B7CA92F04B9FAE8D941C3E9B7E0CD754": {
      "name": "MicroStrategy Tutorial",
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "nodes": ["env-220285laio2use1"]
    },
    "CE52831411E696C8BD2F0080EFD5AF44": {
      "name": "Consolidated Education Project",
      "id": "CE52831411E696C8BD2F0080EFD5AF44",
      "nodes": ["env-220285laio1use1"]
    },
    "B3FEE61A11E696C8BD0F0080EFC58F44": {
      "name": "Hierarchies Project",
      "id": "B3FEE61A11E696C8BD0F0080EFC58F44",
      "nodes": []
    },
    "4BAE16A340B995CAD24193AA3AC15D29": {
      "name": "Human Resources Analysis Module",
      "id": "4BAE16A340B995CAD24193AA3AC15D29",
      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]
    },
    "4C09350211E69712BAEE0080EFB56D41": {
      "name": "Relationships Project",
      "id": "4C09350211E69712BAEE0080EFB56D41",
      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]
    },
    "FD4EC87011EAB3629B7A0080EF35AD22": {
      "name": "Platform Analytics",
      "id": "FD4EC87011EAB3629B7A0080EF35AD22",
      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]
    }
  }
}
```

Response Code: 200 (OK)

## Update the project load settings on Intelligence Server startup

Endpoint: [PATCH /api/projects/settings/onStartup](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/patchProjectLoadSettings)

Update the status of applications on the Intelligence Server nodes at startup. You must specify an authorization token in the request header, which can be obtained from `POST /api/auth/login` during [login](#log-in). You can obtain the existing settings for the applications, along with the list of nodes, using `GET /api/settings/onStartup`. You must provide the request body as a list of replace operations to be performed on the value of array of nodes with the URI path containing the corresponding project ID that needs to be updated.

### Sample request

Request Header:

```http
Accept: application/json
X-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj
```

Request Body:

```json
{
  "operationList": [
    {
      "op": "replace",
      "path": "/projects/B7CA92F04B9FAE8D941C3E9B7E0CD754/nodes",
      "value": ["env-220285laio2use1", "env-220285laio1use1"]
    },
    {
      "op": "replace",
      "path": "/projects/B3FEE61A11E696C8BD0F0080EFC58F44/nodes",
      "value": ["env-220285laio1use1"]
    },
    {
      "op": "replace",
      "path": "/projects/4C09350211E69712BAEE0080EFB56D41/nodes",
      "value": []
    },
    {
      "op": "replace",
      "path": "/projects/FD4EC87011EAB3629B7A0080EF35AD22/nodes",
      "value": ["env-220285laio1use1"]
    }
  ]
}
```

Curl:

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/settings/onStartup" -H "accept: application/json" -H "X-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj" -H "Content-Type: application/json" -d '{ "operationList":[ { "op":"replace", "path":"/projects/B7CA92F04B9FAE8D941C3E9B7E0CD754/nodes", "value": ["env-220285laio2use1","env-220285laio1use1"] }, { "op":"replace", "path":"/projects/B3FEE61A11E696C8BD0F0080EFC58F44/nodes", "value":["env-220285laio1use1"] }, { "op":"replace", "path":"/projects/4C09350211E69712BAEE0080EFB56D41/nodes", "value":[] }, { "op":"replace","path":"/projects/FD4EC87011EAB3629B7A0080EF35AD22/nodes", "value":["env-220285laio1use1"] } ]}'
```

### Sample response

Response Body:

```json
{
  "projects": {
    "B7CA92F04B9FAE8D941C3E9B7E0CD754": {
      "name": "MicroStrategy Tutorial",
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]
    },
    "CE52831411E696C8BD2F0080EFD5AF44": {
      "name": "Consolidated Education Project",
      "id": "CE52831411E696C8BD2F0080EFD5AF44",
      "nodes": ["env-220285laio1use1"]
    },
    "B3FEE61A11E696C8BD0F0080EFC58F44": {
      "name": "Hierarchies Project",
      "id": "B3FEE61A11E696C8BD0F0080EFC58F44",
      "nodes": ["env-220285laio1use1"]
    },
    "4BAE16A340B995CAD24193AA3AC15D29": {
      "name": "Human Resources Analysis Module",
      "id": "4BAE16A340B995CAD24193AA3AC15D29",
      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]
    },
    "4C09350211E69712BAEE0080EFB56D41": {
      "name": "Relationships Project",
      "id": "4C09350211E69712BAEE0080EFB56D41",
      "nodes": []
    },
    "FD4EC87011EAB3629B7A0080EF35AD22": {
      "name": "Platform Analytics",
      "id": "FD4EC87011EAB3629B7A0080EF35AD22",
      "nodes": ["env-220285laio1use1"]
    }
  }
}
```

Response Code: 200 (OK)

## Log out

End Point: [POST /api/auth/logout](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout)

This endpoint allows the caller to log out the authenticated user from the MicroStrategy REST server. In this example, you close the active user session by providing the X-MSTR-AuthToken authorization token, which is generated by `POST /api/auth/login` during [login](#log-in). If the call is successful, the resulting HTTP response returns a HTTP status code of 204.

### Sample request

Request Header:

```http
Accept: application/json
X-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj
```

Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout" -H "accept: application/json" -H "X-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj"
```

### Sample response

Response Header:

```http
cache-control: no-cacheno-storemax-age=0
must-revalidate
date: Tue22 Sep 2020 04:51:11 GMT
expires: 0
pragma: no-cache
server: MicroStrategy
status: 204
```

Response Code: 204 (No Content)
