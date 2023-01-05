---
title: Manage subtotal objects
description: Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation.
---

<Available since="2021 Update 5" />

:::tip

You can try out these workflows at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0e8e2533-03d6-4235-8aa0-6aef1cc2e723?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation.

You can use REST API requests retrieve, create, and update the subtotal objects through the Modeling service:

- [Retrieve a Subtotal's Definition](./retrieve-a-subtotals-definition.md)
- [Retrieve a Subtotal's Definition within a Changeset](./retrieve-a-subtotals-definition-within-a-changeset.md)
- [Create a Subtotal within a Changeset](./create-a-subtotal-within-a-changeset.md)
- [Update a Subtotal within a Changeset](./update-a-subtotal-within-a-changeset.md)

There are three important fields in the API response body defined for a subtotal:

- **information**: Stores the basic subtotal information include `dateCreated`, `dateModified`, `versionId`, `primaryLocale`, `objectId`,`subType`, and `name`.

  For a subtotal, `subType` is `metric_subtotal`.

- **expression**: Stores the aggregation types and targets defined in the subtotal either using single-value functions or group-value functions.

  :::tip

  :information_source: **Info**

  Tokens are a semi-structured representation of a MicroStrategy expression text that includes object references. When the subtotal’s expression is represented as tokens, the text is broken down into pieces, or tokens, with information about what these pieces represent in the metadata.

  :::

  A subtotal's “expression" is presented in the following formats:

  - "text": A human-readable, but non-parsable text, describing a subtotal's expression.
  - "tree": A tree data structure fully defining the subtotal's expression.
  - "tokens": A list of parsed tokens that define a subtotal's expression. Generating tokens requires additional time.

  If `showExpressionAs` is omitted, only "text" formats are returned.

  If `showExpressionAs` is `tree`, "text" and "tree" formats are returned.

  If `showExpressionAs` is `tokens`, "text" and "tokens" formats are returned.

- **dimty**: Contains a list of `DimtyUnit`, which describes the level at which the subtotal can be calculated.

For more information about the Modeling service, see [Configuring the Modeling Service](https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm).
