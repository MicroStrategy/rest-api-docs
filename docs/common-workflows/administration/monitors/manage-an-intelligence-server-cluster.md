---
title: Manage an Intelligence Server cluster
description: Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-7f67e2a1-9eb5-45b1-8e4c-4fcec18a998a?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment. MicroStrategy REST exposes a set of APIs for viewing and editing members of connected Intelligence Server cluster:

- View member nodes and projects of the connected cluster
- Adding a node to the connected cluster
- Removing a node from the connected cluster

## Prerequisites

- Intelligence Server clustering requirements need to be met for using these APIs. It's recommended that you have understanding about how clustering works and how to manage cluster through Developer or Command Manager. For details, please refer to the [System Administration Help](https://www2.microstrategy.com/producthelp/2021/SystemAdmin/WebHelp/Lang_1033/index.htm).
- If you have clustered multiple Library Server nodes in your deployment, make sure they all connect to the same Intelligence Server name from Library Administration page. Also see the _Load Balancer and Clustering Considerations for Library & Collaboration Server_ in the [Installation and Configuration Help](https://www2.microstrategy.com/producthelp/2021/InstallConfig/index.htm).
- For adding/removing nodes, it's recommended to:

  - Make sure no other user is connected to Library Server and Intelligence Server nodes. Editing cluster membership is an administrative action and should be performed exclusively.
  - Make sure all Intelligence Server nodes are running during the life-time of Library Server. If some Intelligence Server nodes are/were down, you can start them first and then restart Library Server. This ensures changes are synchronized in a timely manner.

## List nodes

Endpoint: [GET /api/monitors/iServer/nodes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/getClusterNodes)

Get information about nodes in the connected Intelligence Server cluster, including:

- Basic information
- Runtime state
- Information for the projects on each node

:::tip

See [Project administration](project-administration.md) for more information.

:::

This operation requires the "Monitor cluster" privilege.

| Parameter        | Description         | Parameter Type | Data Type | Required |
| ---------------- | ------------------- | -------------- | --------- | -------- |
| X-MSTR-AuthToken | Authorization token | Header         | String    | Yes      |

- Response: 200 (Success : OK)

### Sample request

```json
{
  "nodes": [
    {
      "name": "foo", // Canonical Intelligence Server node name
      "port": 34952,
      "status": "running", // running|stopped|unknown
      "load": "2",
      "projects": [
        {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "MicroStrategy Tutorial",
          "status": "loaded"
        }
      ],
      "default": true // whether it's the connected node in Library Admin page
    }
  ]
}
```

## Add a node

Endpoint: [PUT /api/monitors/iServer/nodes/{name}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/addServerClusterMember)

Add a node to the connected Intelligence Server cluster.

- The node must meet Intelligence Server clustering requirements.
- If the node is part of a multi-node cluster, all the nodes in that cluster will be added.
- If the node is already in the cluster, the operation succeeds without making any change.

This operation requires the "Monitor cluster" and "Administer cluster" privileges.

| Parameter        | Description                    | Parameter Type | Data Type | Required |
| ---------------- | ------------------------------ | -------------- | --------- | -------- |
| X-MSTR-AuthToken | Authorization token            | Header         | String    | Yes      |
| name             | Intelligence Server node name. | Path           | String    | Yes      |

:::tip

In case of complicated network configuration, it's recommended to provide a hostname accessible from both the Library Server and Intelligence Server.

:::

- Response:
  - **Success**: 200 OK
  - **Timeout, still in-progress**: 202 Accepted
  - **Node unreachable**: 404 Not Found

## Remove a node

Endpoint: [DELETE /api/monitors/iServer/nodes/{name}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/removeServerClusterMember)

Remove a node from the connected Intelligence Server cluster.

- It's recommended to use the exact name returned in Viewing
- After a successful removal, some existing authorization tokens may become invalidated and in this case re-login is needed.
- You cannot remove a node if it's the configured default node of Library Server, or there is only one node in the cluster.

This operation requires the "Monitor cluster" and "Administer cluster" privileges.

| Parameter        | Description                    | Parameter Type | Data Type | Required |
| ---------------- | ------------------------------ | -------------- | --------- | -------- |
| X-MSTR-AuthToken | Authorization token            | Header         | String    | Yes      |
| name             | Intelligence Server node name. | Path           | String    | Yes      |

:::tip

Use the exact name returned by `GET /api/monitors/iServer/nodes`

:::

- Response:
  - **Success**: 204 No Content
  - **Timeout, still in-progress**: 202 Accepted
  - **Node not a member**: 404 Not Found
