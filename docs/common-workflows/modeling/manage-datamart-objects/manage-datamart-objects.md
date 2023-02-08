---
title: Manage datamart objects
description: You can use REST API requests retrieve, create, and update the datamart objects through the Modeling Service
---

<Available since="2021 Update 7" />

:::tip

You can try out these workflows at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-1f302e4e-e863-4247-a360-802794a8d8a5?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Starting in MicroStrategy 2021 Update 7, you can use REST API requests retrieve, create, and update the datamart objects through the Modeling service.

- [Retrieve a datamart definition](retrieve-a-datamart-definition.md)
- [Create a datamart from a source report](create-a-datamart-from-a-source-report.md)
- [Create a datamart from scratch](create-a-datamart-from-scratch.md)
- [Update a datamart definition](update-a-datamart-definition.md)

## Important fields

This section outlines the important fields in the API response body defined for an Incremental Refresh Report.

### `information`

Stores the basic information for the datamart including, `dateCreated`, `dateModified`, `versionId`, `primaryLocale`, `objectId`, `subType`, `name`, and `destinationFolder`.

For datamart, the `subType` is `report_datamart`.

### `sourceType`

Stores the report type for the source report that datamart is created on top of. It could be `normal` or `custom_sql_free_form`.

### `dataSource`

Specifies the design of datamart, including the units on `dataTemplate`, `filter`, and `table` (only if `sourceType` is `custom_sql_free_form`).

### `datamartOptions`

Contains all the configuration settings of datamart, including:

- `append`: Indicates whether to create a new table or append to the existing table every time report runs

- `targetSource`: The db instance where the table will be placed into.

- `tableName`: The name of the inserting table.

- `placeholderIncluded`: The supported placeholders on table name. Details can be referred [here](https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm).

- `datamartProperties`: The properties that are used to configure the table in warehouse, like advanced settings of datamart and SQL statement related configurations.

### `timezone`

Stores the information for timezone that’s applied on the source report.

### `advancedProperties`

Store the information of all the available advanced properties for the datamart.

## Out of scope for 11.3.7

User can’t create datamart on top of Query builder report or get/update datamart based on query build/mdx type, since this type of report is not supported in Modeling service yet.

The normal report of MDX type is not supported to create datamart as this type of normal report is not supported in Modeling service yet.

For more information about the Modeling service, see [Configuring the Modeling Service](https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm).
