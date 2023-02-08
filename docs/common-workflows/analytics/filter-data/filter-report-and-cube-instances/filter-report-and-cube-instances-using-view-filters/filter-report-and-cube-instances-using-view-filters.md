---
title: Filter report and cube instances using view filters
description: How to filter report and cube instances using view filters.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-eb1fcb00-e3b5-4a0c-bef9-4639e04c675c?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

When you create a MicroStrategy report or cube instance using the following REST API endpoints, you can use a parameter called viewFilter in the body parameter of the request to filter the data that is returned:

- `POST /api/cubes/{cubeId}/instances`
- `POST /api/reports/{reportId}/instances`

:::tip

Because the filter is applied to a report or cube instance, it is not persisted.

:::

View filters can have both metric and attribute qualifications. They are applied before data is aggregated.

The following topics are designed to help you understand and use view filters.

- [General guidelines](general-guidelines.md)
- [Supported operators](supported-operators.md)
- [Supported constant data types](supported-constant-data-types.md)
- [Code samples](code-sample.md)
- [Error messages](error-messages.md)
