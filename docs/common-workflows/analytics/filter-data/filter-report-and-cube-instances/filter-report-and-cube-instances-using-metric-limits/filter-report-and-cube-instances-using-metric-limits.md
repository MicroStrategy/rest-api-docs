---
title: Filter report and cube instances using metric limits
description: How to filter report and cube instances using metric limits.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-621fc29f-e7e3-4065-9084-5bbdb0d81267?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

When you create a MicroStrategy report or cube instance using the following REST API endpoints, you can use a parameter called `metricLimits` in the body parameter of the request to filter the data that is returned:

- `POST /api/cubes/{cubeId}/instances`
- `POST /api/reports/{reportId}/instances`

Metric limits are applied only to metrics, and they are applied after data is aggregated. You can use metric limits with most types of cubes; one exception is MDX cubes with recursive attributes. You must use an Intelligence Server with a version greater than 10.11.

The following topics are designed to help you understand and use metric limits.

- [Supported operators](supported-operators.md)
- [Code samples](code-sample.md)
- [Error messages](error-messages.md)
