---
title: Project administration
description: The workflow below allows an administrator to manage project distribution and configuration.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b8adf359-7841-499a-8197-bcbe15c06add?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

:::info

The [DssXmlPrivilegesUseClusterMonitor](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor) privilege is required to fetch information about nodes in the connected Intelligence Server cluster.

:::

The following sequence of REST API requests allows an administrator to manage project distribution and configuration:

## Log in

Endpoint: [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)

This endpoint allows the caller to authenticate with the MicroStrategy REST Server. Provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting response returns a status code of 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used by subsequent requests.

### Sample request

- Request body:

  ```json
  {
    "username": "administrator",
    "password": "yourPassword",
    "loginMode": 1
  }
  ```

- Curl:

  ```bash
  curl -X POST "https:// demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{\\"username\\":\\"administrator\\",\\"password\\":\\"yourPassword\\",\\"loginMode\\":1}"
  ```

- Response header:

  ```http
  cache-control: no-cache, no-store, max-age=0, must-revalidate
  date: Mon, 28 Oct 2019 17:38:15 GMT
  expires: 0
  pragma: no-cache
  x-mstr-authtoken: f34qc7evsntsks0qe6hfcgt0ur
  ```

- Response code: 204 (Success: No Content)

## Get information about nodes and projects with current status

Endpoint: [GET /api/monitors/iServer/nodes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/getClusterNodes)

This endpoint includes basic information, run time state, and information for the projects on each node. You specify an authorization token in the request header which you will get from `POST /api/auth/login` used during [Log in](#log-in).

You can also use filter option either on project id or node name or both to get specific information in response. This filed is optional.

You can expect the following statuses of the project to be returned with respect to the nodes: unloaded, loaded, exec_idle, request_idle, full_idle, wh_exec_idle, partial_idle, unloaded_pending, loaded_pending.

:::tip

This operation requires the "Monitor cluster" privilege.

:::

- Request Parameter:

  - `X-MSTR-AuthToken`: Authorization Token
  - `projects.id`: Project Id (optional)
  - `Name`: Node Name (optional)

- Curl:

  ```bash
  curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/monitors/iServer/nodes" -H "accept: application/json" -H "X-MSTR-AuthToken: s664q0cqjergslaj4vfpnneb3m"
  ```

- Response body:

  ```json
  {
    "nodes": [
      {
        "name": "env-160560laio1use1",
        "port": 34952,
        "status": "running",
        "load": 1,
        "projects": [
          {
            "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
            "name": "MicroStrategy Tutorial",
            "status": "unloaded"
          },
          {
            "id": "B3FEE61A11E696C8BD0F0080EFC58F44",
            "name": "Hierarchies Project",
            "status": "loaded"
          }
        ],
        "default": true
      },
      {
        "name": "env-160560laio2use1",
        "port": 34952,
        "status": "running",
        "load": 0,
        "projects": [
          {
            "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
            "name": "MicroStrategy Tutorial",
            "status": "loaded"
          },
          {
            "id": "B3FEE61A11E696C8BD0F0080EFC58F44",
            "name": "Hierarchies Project",
            "status": "unloaded"
          }
        ]
      }
    ]
  }
  ```

- Response code: 200 (Success: OK)

To apply a filter on project id and node name, you can use the filter option of this api.

- Curl:

  ```bash
  curl -X GET "https:// demo.microstrategy.com/MicroStrategyLibrary/api/monitors/iServer/nodes?projects.id=B7CA92F04B9FAE8D941C3E9B7E0CD754&name=env-160560laio1use1" -H "accept: application/json" -H "X-MSTR-AuthToken: 8jf3gkobqcdsljm8i3kio7nqc3"
  ```

- Response body:

  ```json
  {
    "nodes": [
      {
        "name": "env-160560laio1use1",
        "port": 34952,
        "status": "running",
        "load": 1,
        "projects": [
          {
            "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
            "name": "MicroStrategy Tutorial",
            "status": "unloaded"
          }
        ],
        "default": true
      }
    ]
  }
  ```

## Update properties for a specific project

Endpoint: [PATCH /api/monitors/iServer/nodes/\{nodeName}/projects/\{projectId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/updateProjectStatus)

:::info

You obtain the authorization token from `POST /api/auth/login`. You pass the authorization token in the request header. You obtain cluster node name and project id from `GET /api/monitors/iServer/nodes`.

:::

Currently, we accept the following project status values for status path and replace operations: loaded, unloaded, request_idle, exec_idle, wh_exec_idle, partial_idle, full_idle.

This API will accept the request and start processing to execute based on the request submitted.

This operation requires the "Load and Unload project" and "Idle and Resume project" privileges.

- Request parameters:

  - `X-MSTR- AuthToken`: Authorization Token
  - `nodeName`: Node Name
  - `projectId`: Project Id

- Request body:

  ```json
  {
    "operationList": [
      {
        "op": "replace",
        "path": "/status",
        "value": "loaded"
      }
    ]
  }
  ```

- Curl:

  ```bash
  curl -X PATCH " https:// demo.microstrategy.com/MicroStrategyLibrary/api/monitors/iServer/nodes/env-160560laio1use1/projects/B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "accept: application/json" -H "X-MSTR-AuthToken: jal5uua4uo6gfag1vivmadag17" -H "Content-Type: application/json" -d "{\\"operationList\\":[{\\"op\\":\\"replace\\",\\"path\\":\\"/status\\",\\"value\\":\\"loaded\\"}]}"
  ```

- Response body:

  ```json
  {
    "project": {
      "name": "MicroStrategy Tutorial",
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "status": "pending"
    }
  }
  ```

- Response code: 202 (Accepted)
- Error Handling:

  1. Invalid operation name

     ```json
     {
       "code": "ERR006",
       "message": "Invalid JSON body. Cannot construct instance of `com.microstrategy.rest.model.iserver.PatchOperator`, problem: Invalid patch operations",
       "ticketId": "8ba0b99f09b14440b0b31a066cdb2678"
     }
     ```

  1. Valid operation name but not valid for status path. To change the project status, the "replace" operation is allowed.

     ```json
     {
      "code": "ERR006",
      "message": "Please validate operation type or value. Input value can not be
     'add' as the Status in the given project.",
      "ticketId": "c1e816c9d2f44b13818319a7f4547bbe"
     }
     ```

  1. No privileges

     - If the user does not have load and unload project privilege:

       ```json
       {
         "code": "ERR014",
         "IserverCode": -2147213784,
         "message": "You do not have Load and unload project privilege(s) to perform the task.",
         "ticketId": "8ba0b99f09b14440b0b31a066cdb2678"
       }
       ```

     - If the user does not have Idle and resume Project privilege:

       ```json
       {
         "code": "ERR014",
         "IserverCode": -2147213784,
         "message": "You do not have Load and unload project privilege(s) to perform the task.",
         "ticketId": "8ba0b99f09b14440b0b31a066cdb2678"
       }
       ```

  1. Invalid operation name

     ```json
     {
       "code": "ERR006",
       "message": "xyz is not valid value to change project status. Valid values are loaded, unloaded, request_idle, exec_idle, partial_idle, wh_exec_idle, full_idle",
       "ticketId": "c98e0e6208a74dfda8cedee74925bfbb"
     }
     ```

## Get update information about projects for a node

Endpoint: [GET /api/monitors/iServer/nodes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/getClusterNodes)

In the example above, the project status of `"MicroStrategy Tutorial"` was changed from unloaded to loaded on the cluster node named env-160560laio1use1. You can view the updated status through this API. Here, you can use the filter option on project id "B7CA92F04B9FAE8D941C3E9B7E0CD754" and/or on node name `"env-160560laio1use1"` to get information about the node.

- Curl:

  ```bash
  curl -X GET "https:// demo.microstrategy.com/MicroStrategyLibrary/api/monitors/iServer/nodes?projects.id=B7CA92F04B9FAE8D941C3E9B7E0CD754&name=env-160560laio1use1" -H "accept: application/json" -H "X-MSTR-AuthToken: jal5uua4uo6gfag1vivmadag17"
  ```

- Request body:

  ```json
  {
    "nodes": [
      {
        "name": "env-160560laio1use1",
        "port": 34952,
        "status": "running",
        "load": 1,
        "projects": [
          {
            "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
            "name": "MicroStrategy Tutorial",
            "status": "loaded"
          }
        ],
        "default": true
      }
    ]
  }
  ```

## Delete project

<Available since="2021 Update 8" />

There are several use cases in which it is required to delete a project from an environment. A dedicated endpoint `DELETE /api/projects/{projectId}` was implemented to address these use cases. The endpoint call requires to provide an identifier of the project in the path and `X-MSTR-AuthToken` in the header. The exemplary call is listed below:

```bash
curl -X 'DELETE' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/A435ED1A4CF916B9A0A0729F9C93C9B9' -H 'accept: */*' -H 'X-MSTR-AuthToken: tp43crmdrkf54avoo9jbgj4a3q'
```

The response code is either `202 Accepted` or `204 No Content`. The code depends on the deletion execution status. If the endpoint manages to delete the project in a given timeout, it sends `204` code. If the deletion takes longer than the timeout, the endpoint sends `202` code. The status of the operation can be checked using `GET /api/monitors/iServer/nodes` endpoint. If the deletion is successful, the endpoint stops reporting the project. The endpoint will delete a project only if the project has unloaded status on every node. If the project is not unloaded a following error will be provided to a client.

```json
{
  "code": "ERR006",
  "message": "The project is not unloaded on at least one node",
  "ticketId": "8cf89ac213e34db596c1cbb58b28bbe3"
}
```

The project status can be changed using the `PATCH /api/monitors/iServer/nodes/{nodeName}/projects/{projectId}` endpoint. The client can delete the project if it is administrator or owner of the project.

## Log out

Endpoint: [POST /api/auth/logout](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout)

This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, X-MSTR-AuthToken, generated by `POST /api/auth/login`. If the call is successful, the resulting response returns the status code 204.

- Curl:

  ```bash
  curl -X POST "https:// demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout" -H "accept: application/json" -H "X-MSTR-AuthToken: c8afkjurl1r9qk2k7puj2hs9cu"
  ```

- Response Code: 204 (Accepted)
