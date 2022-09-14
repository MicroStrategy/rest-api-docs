---
title: Configure Clustered Environments
description: This page provides information for clustered environment configuration.
---

The MicroStrategy REST platform provides a highly scalable solution to meet your performance needs by installing multiple instances of REST servers that can communicate with an Intelligence Server cluster.

![REST Configuration](../images/REST_Configuration.png)

:::tip

Load balancing must be configured to maintain session stickiness.

:::

You must configure certain properties for horizontal scaling of REST Servers.

- Configuration files

  The following configuration files should be kept in sync between all REST Server nodes within a clustered environment.

  - /WEB-INF/classes/config/\*
  - /WEB-INF/classes/auth/\*

- The MicroStrategyLibrary REST Server provides an admin page to modify some of the configuration settings.

  The MicroStrategy REST Server contains default values for configuration in …/config/configDefaults.properties. The configDefaults.properties file contains key-value pairs of configuration options. To specify a configuration option, the desired key can be copied from the configDefaults.properties file, and saved into configOverride.properties with a different value.

  However, if you use this method to make configuration changes and your REST Server is running in a clustered environment, only one of the nodes in the cluster is modified. To resolve this problem, you can use a shared drive across all nodes via Mount or Symbolic links. If you use Symbolic links, you need to enable the Tomcat property allowLinking. Refer to the Apache Tomcat Configuration Reference.

  | Attribute    | Description                                                                                                                                                                                                                                |
  | :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | allowLinking | If the value of this flag is set to "true", symlinks is allowed inside the web application, pointing to resources outside the web application base path. If the value of this flag is not specified, the default value of "false" is used. |

  :::tip

  This flag MUST NOT be set to "true" on the Windows platform (or any other operating system that does not have a case-sensitive file system). This will disable case sensitivity checks, allowing JSP source code disclosure, among other security problems.

  :::
