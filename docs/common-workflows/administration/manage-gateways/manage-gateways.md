---
title: Manage gateways
description: Gateways are DBMS objects which are certified as gateways. This page contains a summary of REST APIs of "gateways" endpoint. You can use REST API requests to retrieve the definition a gateway or a list of gateways.
---

<Available since="2021 Update 9" />

:::info

The feature flag "Disable or enable gateways and drivers" should be turned on. This requires a full metadata update.

:::

Gateways are DBMS objects which are certified as gateways. By setting ACL rules on a gateway, customer can control whether to block usage of a gateway or not for specific MSTR users/groups. Take gateway "Box" for example, if deny 'execute' right is set for MSTR group A, MSTR users in MSTR group A can't fetch data from 'Box'.

You can use REST API requests to retrieve the definition a gateway or a list of gateways.

- [List all gateways.](./retrieve-gateways.md)
- [Retrieve a gateway's definition.](./retrieve-a-gateway-definition.md)
