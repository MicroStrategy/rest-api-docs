---
title: Return the Metric-Based View Filter Criteria Applied Prior to Aggregation
description: A view filter specifies a set of attribute or metric-based filtering criteria. In dossiers, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.
---

A view filter specifies a set of attribute or metric-based filtering criteria. In dossiers, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.

You create a metric-based view filter by defining the metric expression that you want to apply in the Filter Editor and specifying that you want to apply it at the dataset level. Metric-based view filters are one of three kinds of filters that can be applied to visualizations before metrics are aggregated; the other two are [attribute-based view filters](./return-attribute-based-view-filters.md) and [template limits](./return-template-limit-criteria.md). There is one kind of filter that can be applied after metrics are aggregated—[metric limit](./return-metric-limit-criteria.md).

:::tip

Drilling is treated as a view filter. If you set drilling, you will get the drill content in the view filter summary.

:::

You use the following REST API endpoint to return information about view filters that were applied before metric aggregation.

- `GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}`

An example of the JSON data that is returned for view filters is shown below. If you applied multiple view filters, all of the filter criteria is combined, using the logical operators that you specified when you created the filters.

```json
{
  "key": "W110",
  "name": "Visualization 1",
  "result": {
    "definition": {
      // ...
      "viewFilterSummary": "(Category = Books, Electronics) And (Profit > 11111)" // view filter definition
      // ...
    }
  }
}
```

Metric-based view filters can be applied in a number of ways. For example, they can be applied in Workstation as follows::

1. Choose **Edit Filter** from the dropdown in the top right corner of the visualization panel.
1. On the Advanced Filter Editor dialog, click **Add New Qualification**.
1. On the New Qualification dialog, do the following:
   1. In Based On, choose a metric and add an expression (i.e., choose an operator and a value).
   1. In Output Level, select **Dataset-level**.
   1. Click **OK**.
   1. Click **Save**.

Refer to the MicroStrategy product manuals for a detailed explanation of metric-based view filters and how they can be applied.
