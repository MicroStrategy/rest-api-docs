---
title: Filter report and cube instances
description: You can filter data that is returned by the following REST API requests when you create an instance of a report or cube. You can also define how the results will be filtered in the body parameter of the request.
---

:::tip

You can try out these workflows at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-aba744e4-751e-410a-b5c1-4ad7d0db7b67?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can filter data that is returned by the following REST API requests when you create an instance of a report or cube:

- `POST /api/reports/{reportId}/instances`

  Reports must have attributes on rows and metrics on columns. Otherwise, filtering is not applied.

- `POST /api/cubes/{cubeId}/instances`

  You can filter all types of cubes — normal cubes, DDA cubes, and MDX cubes.

You define how the results will be filtered in the body parameter of the request.

- [Using view filters](./filter-report-and-cube-instances-using-view-filters/filter-report-and-cube-instances-using-view-filters.md)

  With view filters, you can apply both attribute and metric filtering criteria. View filters are applied before data aggregation.

- [Using metric limits](./filter-report-and-cube-instances-using-metric-limits/filter-report-and-cube-instances-using-metric-limits.md)

  With metric limits, you can apply only metric filtering criteria. Metric limits are applied after data aggregation.

- [Using `requestedObjects`](./filter-report-and-cube-instances-using-requested-objects/filter-report-and-cube-instances-using-requested-objects.md)

  With requestedObjects, you specify exactly which attributes and metrics you want to include in the report or cube instance.
