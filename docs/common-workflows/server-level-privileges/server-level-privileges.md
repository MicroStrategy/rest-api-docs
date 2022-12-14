---
title: Server-level privileges
description: Privileges are assigned to users and user groups to authorize what functionality they can use. Some privileges are at the project or server level. Project-level privileges can be directly assigned to a user or through security roles assigned to users or user groups. Server-level privileges can only be assigned to users or user groups.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-27dd7275-e91a-4fe8-900b-0590e0de37b6?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Privileges are assigned to users and user groups to authorize what functionality they can use. Some privileges are at the project or server level. Project-level privileges can be directly assigned to a user or through security roles assigned to users or user groups. Server-level privileges can only be assigned to users or user groups.

To avoid security vulnerabilities, administrative users must have a clear understanding of system administration privileges and the security requirements of their system before assigning privileges that provide access to application functionality.

An administrative user that manages access to application functionality should have the following privileges:

- Create and edit user This privilege is necessary for server-level privilege management
- Grant and revoke privileges This privilege is necessary to grant and revoke privileges
