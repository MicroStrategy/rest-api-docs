---
title: Manage datamart objects
description: You can use REST API requests to retrieve, create, and update datamart objects through the Modeling Service
---

<Available since="2021 Update 7" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-1f302e4e-e863-4247-a360-802794a8d8a5?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Starting in MicroStrategy 2021 Update 7, you can use REST API requests retrieve, create, and update datamart objects through the Modeling service.

- [Retrieve a datamart definition](retrieve-a-datamart-definition.md)
- [Create a datamart from a source report](create-a-datamart-from-a-source-report.md)
- [Create a datamart from scratch](create-a-datamart-from-scratch.md)
- [Update a datamart definition](update-a-datamart-definition.md)
- [Execute a datamart](execute-a-datamart.md) <Available since="2021 Update 9" inline />

## Important fields

This section outlines the important fields in the API response body defined for an Incremental Refresh Report.

### `information`

Stores the basic information for the datamart including, `dateCreated`, `dateModified`, `versionId`, `primaryLocale`, `objectId`, `subType`, `name`, and `destinationFolder`.

For datamart, the `subType` is `report_datamart`.

### `sourceType`

Stores the report type for the source report that datamart is created on top of. The report type is `normal` or `custom_sql_free_form`.

### `dataSource`

Specifies the design of datamart, including the units on `dataTemplate`, `filter`, and `table` (only if `sourceType` is `custom_sql_free_form`).

### `datamartOptions`

Contains all the configuration settings of datamart, including:

- `append`: Indicates whether to create a new table or append to the existing table every time a report runs

- `targetSource`: The db instance where the table is placed.

- `tableName`: The name of the table.

- `placeholderIncluded`: The supported placeholders in the table name. You can see more information [here](https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm).

- `datamartProperties`: The properties that are used to configure the table in warehouse. For example, datamart advanced settings and SQL statement related configurations.

### `timezone`

Stores the information for the timezone applied to the source report.

### `advancedProperties`

Stores the information of all available advanced properties for the datamart.

## Out of scope for 11.3.7

Users can’t create a datamart on top of a Query builder report or get/update a datamart based on query build/mdx type. These report types are not yet supported by the Modeling service.

The normal report of MDX type is not supported to create datamart. This normal report type is not yet supported by the Modeling service.

For more information about the Modeling service, see [Configuring the Modeling Service](https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm).
