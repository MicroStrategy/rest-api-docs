---
title: Manage incremental refresh reports
description: You can use REST API requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service.
---

<Available since="2021 Update 6" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bc4cbadd-29e6-4426-85ff-30bcc0f20d60?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Starting in MicroStrategy 2021 Update 6, you can use REST API requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service.

- [Retrieve an IRR definition](retrieve-an-irr-definition.md)
- [Create an IRR](create-an-irr.md)
- [Update an IRR definition](update-an-irr-definition.md)
- [Retrieve an IRR definition with advanced properties](retrieve-an-irr-definition-with-advanced-properties.md)
- [Create an IRR with advanced properties](create-an-irr-with-advanced-properties.md)
- [Update IRR advanced properties](update-irr-advanced-properties.md)
- [Retrieve an IRR's applicable properties](retrieve-applicable-properties-of-an-incremental-refresh-report.md)

## Important fields

This section outlines the important fields in the API response body defined for an Incremental Refresh Report.

### `information`

Stores the basic information for the Incremental Refresh Report including `dateCreated`, `dateModified`, `versionId`, `primaryLocale`, `objectId`, `subType`, and `name`.

For Incremental Refresh Report, `subType` is `report_increment_refresh`.

### `targetCube`

Stores the `objectId`, `subType`, and `name` for the target cube that the Incremental Refresh Report is built on. This is required when creating a new Incremental Refresh Report.

For target cube, `subType` is `report_cube`.

### `incrementType`

Specifies the incremental type for an Incremental Refresh Report, which can only be `filter` and `report`.

### `refreshType`

Specifies the refresh type for an Incremental Refresh Report, which can only be `update`, `insert`, `delete`, `update_only`, and `replace`.

The replace `refreshType` is only supported for the `incrementType` filter of the Incremental Refresh Report.

### `filter`

Stores the information for the filter used in the Incremental Refresh Report, which has the same structure as a filter object.

An Incremental Refresh Report filter is presented in the following formats:

- `text`: A human readable, but non-parsable text, describing a filter's qualification.
- `tree`: A tree data structure fully defining the filter's qualification.
- `tokens`: A list of parsed tokens that define a filter's qualification. Note that generating tokens requires additional time.

If `showFilterTokens` is omitted or `false`, only `text` and `tree` formats are returned.

If `showFilterTokens` is `true`, all `text`, `tree`, and `tokens` formats are returned.

### `template`

Stores the information of the template used in the Incremental Refresh Report, which includes rows, columns and pageBy.

If the `incrementType` of the Incremental Refresh Report is `filter`, it’s not allowed to modify the template.

### `table`

This field is only available when the target cube is a FFSQL cube. It stores the information for the table used in the target cube.

For more information about the Modeling service, see [Configuring the Modeling Service](https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm).
