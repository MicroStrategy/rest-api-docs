---
title: Manage drivers
description: Driver is a new object type added since MicroStrategy 2021 Update 8. This page contains a summary of REST APIs of "drivers" endpoint. You can use REST API requests to retrieve a driver's definition or retrieve a list of drivers' definitions or update a driver's definition.
---

<Available since="2021 Update 9" />

:::info

The feature flag "Disable or enable gateways and drivers" should be turned on. This requires a full metadata update.

:::

Driver is a new object type added since MicroStrategy 2021 Update 8. Each driver object is corresponding to a physical driver (used to fetch data from data sources) installed in IServer. By changing the "enabled" status of a driver object, customer can control whehter to block usage of corresponding physical driver or not.

This page contains a summary of REST APIs of "drivers" endpoint. You can use REST API requests to retrieve a driver's definition or retrieve a list of drivers' definitions or update a driver's definition.

- [List all drivers.](./retrieve-drivers.md)
- [Retrieve a driver's definition.](./retrieve-a-driver-definition.md)
- [Update a driver's definition.](./update-a-driver-definition.md)
