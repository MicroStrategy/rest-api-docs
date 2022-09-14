---
title: Return the Metric Limit Criteria Applied Prior to Aggregation
description: A metric limit specifies a set of metric-based filtering criteria. In dossiers, a metric limit is applied to a visualization-level dataset after all pre-aggregation filters have first been applied and then metrics have been aggregated. Because metric limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.
---

A metric limit specifies a set of metric-based filtering criteria. In dossiers, a metric limit is applied to a visualization-level dataset after all pre-aggregation filters have first been applied and then metrics have been aggregated. Because metric limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.

You create a metric limit by defining the metric expression that you want to apply in the Filter Editor and specifying that you want to apply it at the visualization level. Metric limits are applied to a visualization-level dataset that has already been refined by applying all the pre-aggregation filters—[attribute-based view filters](./return-attribute-based-view-filters.md), [metric-based view filters](./return-metric-based-view-filters.md), and [template limits](./return-template-limit-criteria.md).

You use the following REST API endpoint to return information about the metric limit that was applied after aggregation.

- `GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}`

An example of the JSON data that is returned for the metric limit is shown below.

```json
{
  "key": "W110",
  "name": "Visualization 1",
  "result": {
    "definition": {
      // ...
      "metricLimitSummary": "Profit > 99999" // metric limit filter definition
      // ...
    }
  }
}
```

Metric limits can be applied in a number of ways. For example, they can be applied in Workstation as follows:

1. Choose **Edit Filter** from the dropdown in the top right corner of the visualization panel.
1. On the Advanced Filter Editor dialog, click **Add New Qualification**.
1. In Based On, choose a metric and add an expression (choose an operator and a value).
1. In Output Level, select **Visualization-level**.
1. Click **OK**.
1. Click **Save**.

Refer to the MicroStrategy product manuals for a detailed explanation of metric limits and how they can be applied.
