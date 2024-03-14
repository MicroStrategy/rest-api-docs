---
title: Retrieve filters applied to a visualization
description: You can use the following REST API endpoint to return information about the individual filters that have been applied to the dataset available to a visualization in a dashboard, called the visualization-level dataset. The filtering information that is returned can be used by other REST API endpoints.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-9468e98f-f4e6-4dcd-b63e-17cb724fa3be?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use the following REST API endpoint to return information about the individual filters that have been applied to the dataset available to a visualization in a dashboard, called the visualization-level dataset. The filtering information that is returned can be used by other REST API endpoints.

- `GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}`

The dataset available to a visualization in a dashboard is a subset of the data in the original data source, which has been filtered and refined at different levels.

1. First, when the data is initially extracted, it can be refined using a report filter, a report limit, prompts, and so on.
1. The resulting dashboard dataset can be further refined using the filter panel for the dashboard to produce the specific dataset available for each chapter in the dashboard.
1. Finally, the dataset available to visualizations on the pages of each chapter—referred to here as the visualization-level dataset—can be filtered, both before and after metrics are aggregated.

:::tip

One visualization can be used as a selector that targets another visualization, providing an ad-hoc filter between visualizations. The visualizations can be on the same page or different pages.

:::

The resulting data, after all these filters have been applied, is the data that is displayed in the visualizations on the pages of each chapter in the dashboard. You can return the individual filter criteria for each of the filters applied to the visualization-level dataset.

- The following filters are applied to the visualization-level dataset before data is aggregated.
  - [View filter (using a dataset-level metric)](return-metric-based-view-filters.md)
  - [View filter (using an attribute)](return-attribute-based-view-filters.md)
  - [Template limit](return-template-limit-criteria.md)

:::tip

Since there are multiple filters applied at the same level, there must be logical operators that determine how the filter conditions are applied. The two view filter conditions are combined using either AND or OR, as specified by the developer. The template limit is always applied using AND.

:::

- The following filter is applied to the visualization-level dataset after data is aggregated.
  - [Metric limit (using a visualization-level metric)](return-metric-limit-criteria.md)

The JSON data that is returned provides the filtering criteria applied for each separate kind of filter, as shown in the bold code below.

:::tip

There are four filters, but only three filter conditions are returned. This is because the two view filter conditions are merged using the logical operator that was specified by the developer.

:::

```json
{
  "key": "W110",
  "name": "Visualization 1",
  "result": {
    "definition": {
      "attributes": [],
      "metrics": [],
      "thresholds": [],
      "sorting": [],
      "metricLimitSummary": "Profit > 99999", // metric limit filter definition
      // template limit definition
      "templateLimitSummary": "((Category = Electronics) Or (Category = Books))",
      // view filter definition
      "viewFilterSummary": "(Category = Books, Electronics) And (Profit > 11111)"
    },
    "data": {
      // ...
    }
  }
}
```
