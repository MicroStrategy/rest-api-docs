---
title: Code Sample - Filter Reports and Cubes Using requestedObjects
description: The code sample for filter reports and cubes using requestedObjects.
---

The `requestedObjects` parameter can include both attributes and metrics. You specify the name and ID of each attribute and metric to include in the report or cube instance.

```json
{
  "requestedObjects": {
    "attributes": [
      {
        "id": "string",

        "name": "string"
      }
    ],

    "metrics": [
      {
        "id": "string",

        "name": "string"
      }
    ]
  }
}
```
