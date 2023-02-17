---
title: Manage base formula objects
description: Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics. You can use REST API requests to retrieve, create, and update the base formula objects through the Modeling service.
---

<Available since="2021 Update 5" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cf953972-3d9d-4347-b253-5d89e40c088c?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics.

You can use REST API requests to retrieve, create, and update the base formula objects through the Modeling service:

- [Retrieve a base formula's definition](retrieve-a-base-formulas-definition.md)
- [Retrieve a base formula's definition within a changeset](retrieve-a-base-formulas-definition-within-a-changeset.md)
- [Create a base formula's definition within a changeset](create-a-base-formulas-definition-within-a-changeset.md)
- [Update a base formula's definition within a changeset](update-a-base-formulas-definition-within-a-changeset.md)

There are two important fields in the API response body defined for a base formula:

- **information**: Stores the basic information of a base formula's information including `dateCreated`, `dateModified`, `versionId`, `primaryLocale`, `objectId`, `subType`, and `name`.

  For a base formula, `subType` is `agg_metric`.

- **expression**: Stored as simple base formulas without any dimensionality, conditionality, or subtotals. They can be reused to create any number of simple or complex metrics.

  :::tip

  :information_source: **Info**

  Tokens are a semi-structured representation of a MicroStrategy expression text that includes object references. When the base formula’s expression is represented as tokens, the text is broken down into pieces, or tokens, with information about what these pieces represent in the metadata.

  :::

  A base formula's “expression" is presented in the following formats:

  - "text": A human-readable, but non-parsable text, describing a base formula's expression.
  - "tree": A tree data structure fully defining the base formula's expression.
  - "tokens": A list of parsed tokens that define a base formula's expression. Generating tokens requires additional time.

  If `showExpressionAs` is omitted, only "text" formats are returned.

  If `showExpressionAs` is `tree`, "text" and "tree" formats are returned.

  If `showExpressionAs` is `tokens`, "text" and "tokens" formats are returned.

For more information about the Modeling service, see [Configuring the Modeling Service](https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm).
