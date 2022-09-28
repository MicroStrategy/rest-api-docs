---
title: Filter data
description: You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied.
---

:::tip

You can try out these workflows at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b0a16367-8997-447d-8731-2d6281d4f9bc?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied:

## Filter report and cube instances

You can use the following REST APIs to filter the data that is returned when you [create an instance of a report or cube](./filter-report-and-cube-instances/filter-report-and-cube-instances.md):

- `POST /api/reports/{reportId}/instances`
- `POST /api/cubes/{cubeId}/instances`

Because these filters are applied to instances, they are not persisted.

You define how the data should be filtered in the body parameter of the request. You can filter the data that is returned in the following ways:

- [Using view filters](./filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/filter-report-and-cube-instances-using-view-filters.md)
- [Using metric limits](./filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/filter-report-and-cube-instances-using-metric-limits.md)
- [Using requested objects](./filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/filter-report-and-cube-instances-using-requested-objects.md)

If you use both a viewFilter and a `requestedObjects` parameter in the HTTP request, the view filter will be applied first. The requested objects definition will then be applied to the filtered results (a subset of the cube data), rather than to the cube data itself.

### Filter dossier instances

You can use the following REST APIs to [filter the data that is returned when you create or update an instance of a dossier](./filter-dossier-instances/filter-dossier-instances.md), including clearing the filter selections.

- `POST /api/dossiers/{dossierId}/instances` Create an instance of a specific dossier with the existing filter applied, including clearing all of the current filter selections.
- `PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters` Execute an existing dossier instance with new filter selections, including clearing all of the current filter selections.

We have provided a [workflow sample](./filter-dossier-instances/workflow-sample.md) that illustrates how to create an instance of a dossier with an existing filter applied, and then re-execute the same dossier instance with updated selections for the same filter.

For detailed information about filtering data in dossiers, see the [MicroStrategy product help](https://www2.microstrategy.com/producthelp/Current/MSTRWeb/WebHelp/Lang_1033/Content/filter_data.htm).

### Retrieve filters applied in dossier chapters

You can use the following REST API to get information about the [filter applied in each chapter in a specific dossier](./retrieve-filters-applied-to-dossier-chapters.md), including the key and name of the filter, a text summary of the filter expression, and information for the filter source.

- `GET /api/dossiers/{dossierId}/definition`

### Retrieve filters applied to a visualization in a dossier

You can use the following REST API request to return information about the [filters that were applied to a visualization in a dossier](./retrieve-filters-applied-to-a-visualization/retrieve-filters-applied-to-a-visualization.md):

- `GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}`

The following types of filters are applied at specific points in the data aggregation process.

- [Metric-based view filter](./retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters.md)
- [Attribute-based view filter](./retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters.md)
- [Template limit](./retrieve-filters-applied-to-a-visualization/return-template-limit-criteria.md)
- [Metric limit](./retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria.md)
