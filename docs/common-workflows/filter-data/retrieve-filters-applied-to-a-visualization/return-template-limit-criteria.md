---
title: Return the Template Limit Criteria Applied Prior to Aggregation
description: A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.
---

A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.

You create a template limit by specifying the attributes or metrics that you want to keep or exclude. If you specify an attribute, you exclude or keep only that attribute element; if you specify a metric, you exclude or keep all of the conditions around that metric. Template limits are one of three kinds of filters that can be applied to visualizations before metrics are aggregated; the other two are [attribute-based view filters](./return-attribute-based-view-filters.md) and [metric-based view filters](./return-metric-based-view-filters.md). There is one kind of filter that can be applied after metrics are aggregated—[metric limits](./return-metric-limit-criteria.md).

You use the following REST API endpoint to return information about the template limit that was applied before metric aggregation.

- `GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}`

Template limits correspond to Keep Only and Exclude filters in MicroStrategy Web. They can include multiple criteria, joined by the AND and OR operators. Complex template limit filtering criteria might look like this:

AND [((Accounts = Property, Plant, Equipment) Or (Accounts = Construction In Progress) Or (Accounts = Leasehold Improvements) Or (Accounts = Office Furniture & Equipment) Or (Accounts = Machinery & Equipment) Or (Accounts = Buildings & Improvements) Or (Accounts = Land & Improvements)) And (Departments = Sales and Marketing)]

An example of the JSON data that is returned for a simple template limit is shown below.

```json
{
  "key": "W110",
  "name": "Visualization 1",

  "result": {
    "definition": {
      // template limit definition
      "templateLimitSummary": "((Category = Electronics) Or (Category = Books))"
    }
  }
}
```

Template limits can be applied in a number of ways. For example, they can be applied in Workstation as follows:

1. Right-click an attribute or metric in the visualization.
1. Choose **Keep Only** or Exclude from the drop-down menu.

Refer to the MicroStrategy product manuals for a detailed explanation of template limits and how they can be applied.
