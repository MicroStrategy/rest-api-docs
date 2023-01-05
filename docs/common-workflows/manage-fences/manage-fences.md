---
title: Manage user and workload fences
description: Within a cluster, fences allows an administrator or a user with DssXmlPrivilegesConfigureServerBasic and DssXmlPrivilegesUseClusterMonitor privileges to reserve specific nodes for use by certain users or certain workloads during normal operations.
---

<Available since="2021 Update 6" />

:::tip

You can try out these workflows at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2564e447-4b77-42c9-99a4-97d7979b348c?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Within a cluster, fences allows an administrator or a user with [DssXmlPrivilegesConfigureServerBasic](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic) and [DssXmlPrivilegesUseClusterMonitor](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor) privileges to reserve specific nodes for use by certain users or certain workloads during normal operations. There are two types of fences:

- **User Fence**: Used to process requests from a list of specified Users or User Groups. User fences can be further limited by specifying applicable projects.

- **Workload Fence**: Used to run subscriptions triggered by an event or time-based schedules for specified projects. On-demand event subscriptions such as run immediately, preview, or personal view are not included.

A user fence could be configured for users who require more processing power or high availability. Conversely, a workload fence could be configured to limit the resources for lower-priority subscriptions.

The majority of the nodes in a cluster will not be part of a fence, making them available for general use. All configured fences are defined in a single list ordered by precedence. When a request is received, the ordered list of all fences and their configurations are assessed to determine if the request matches any fence configuration. A request will be processed by the first fence found with an available node in the ordered list where the request matches the fence criteria.

When all nodes in the cluster are part of the fence list, the request will be sent to a node in the last fence in the ordered list

:::tip

Manage User and Workload Fences REST APIs were released in 2021 Update 6

:::

You can use REST API requests to retrieve, create, update, and delete the user and workload fences with [DssXmlPrivilegesConfigureServerBasic](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic) and [DssXmlPrivilegesUseClusterMonitor](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor) privileges across all nodes without restarting the clustered MicroStrategy Intelligence Servers.

- [Create a new fence](./create-fence.md)
- [Retrieve the list of fences](./retrieve-list-of-fences.md)
- [Retrieve a specific fence](./retrieve-specific-fence.md)
- [Update a specific fence](./update-specific-fence.md)
- [Delete a specific fence](./delete-specific-fence.md)

For more information about fences, see [Reserving Nodes with Work Fences](https://www2.microstrategy.com/producthelp/Current/SystemAdmin/WebHelp/Lang_1033/Content/Work_Fences.htm).
