---
title: General guidelines for using requestedObjects
description: The general guidelines for using requestedObjects.
---

When you use `requestedObjects` to limit the data returned in a report or cube instance, the following rules are applied when adding attributes and metrics to the template of the cube or report instance:

- If the body specifies valid attributes and metrics, they are returned and they are aggregated.
- If the body is null or {}, all attributes and metrics are added to the template.
- If the body is {"requestedObjects":{}}, no attributes or metrics are added to the template.
- If the attributes array is null or empty, no attributes are added.
- If the metrics array is null or empty, no metrics are added.
