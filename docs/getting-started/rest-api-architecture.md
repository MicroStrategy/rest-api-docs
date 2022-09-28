---
title: REST API architecture
description: The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol.
---

The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol. You can use the REST framework to perform actions such as:

- [Authentication](../common-workflows/authentication.md)
- [Retrieve data](../common-workflows/retrieve-data-from-the-intelligence-server/retrieve-data-from-the-intelligence-server.md)
- [Configuring a clustered environment](./configure-clustered-environments.md)
- [User management](../common-workflows/manage-user-and-user-groups/)

The REST framework is scalable, allowing you to configure a clustered environment that supports multiple instances of REST servers communicating with an Intelligence Server cluster.

The REST Framework layer is built on top of the existing WebObjects and XML API layers. It provides a comprehensive set of APIs that allow developers to quickly and easily customize MicroStrategy BI functionality.

![REST Architecture](../images/REST_architecture.png)

- REST Framework Layer: The REST Framework Layer exposes an interface to fetch and manipulate data using HTTP requests such as GET, POST, DELETE, and so on.
- [WebObjects Layer](https://www2.microstrategy.com/producthelp/Current/WebSDK/Content/topics/webarch/Web_Objects_Layer.htm): The BI function layer that contains the Java classes that interpret and initiate distinct units of BI functionality (such as pivot, sort, subtotal, drill, and so on). This layer also constructs the aggregated XML API calls to the XML API layer.
- [XML API Layer](https://www2.microstrategy.com/producthelp/Current/WebSDK/Content/topics/webarch/XML_API_Layer.htm): The communication objects layer that manages the high-throughput XML communication that accesses Intelligence Server methods.
