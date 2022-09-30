---
title: Manage runtimes
description: You can use REST API requests to retrieve, create, update, and delete runtime objects through the REST API.
---

Starting in MicroStrategy 2021 Update 7, you can use REST API requests to retrieve, create, update, and delete runtime objects through the REST API.

The runtime object defines the detailed configuration for the virtual runtime, the virtual runtime is used for Python scripts remote execution.

In the Python remote execution workflow, the end user could choose the runtime it depends on, so that when the script is executed, the Intelligence Server would create the runtime instance based on the object definition.

Currently, the Python remote execution is only supported in containerized Intelligence Server.

- [Create a runtime](./create-a-runtime)
- [Update a runtime](./update-a-runtime)
- [Retrieve a runtime definition](./retrieve-a-runtime-definition)
- [Delete a runtime](./delete-a-runtime)
- [Retrieve all runtimes](./retrieve-all-runtimes)
