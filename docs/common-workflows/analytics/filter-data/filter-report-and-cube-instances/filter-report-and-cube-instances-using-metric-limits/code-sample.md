---
title: Code sample - Filter reports and cubes using metric limits
description: The code sample for filter reports and cubes using metric limits.
---

The `metricLimits` parameter can include multiple metric filters. Each filter includes the ID of the metric and the filter expression for that metric. The filter expression is made up a [supported operator](supported-operators.md) and two operands.

```json
{
  "metricLimits": {
    "metricId1": {
      // expression1
    },

    "metricId2": {
      // expression2
    },
    // ...
    "metricIdN": {
      // expressionN
    }
  }
}
```

The code sample below illustrates sample `body` parameter input for metric limits. It assumes that you are using a report or cube that has Cost and Profit metrics. The filter criteria are "Cost < 300000" and "Profit < 160000 or Profit > 200000".

```json
{
  "requestedObjects": {
    // ...
  },
  "viewFilter": {
    // ...
  },
  "metricLimits": {
    // Here are the metric limits: Cost < 300000, Profit < 160000 or Profit > 200000
    "7FD5B69611D5AC76C000D98A4CC5F24F": {
      "operator": "<",
      "operands": [
        {
          "type": "metric",
          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
          "name": "Cost"
        },
        {
          "type": "constant",
          "value": "300000",
          "dataType": "Real"
        }
      ]
    },
    "4C051DB611D3E877C000B3B2D86C964F": {
      "operator": "|",
      "operands": [
        {
          "operator": "<",
          "operands": [
            {
              "type": "metric",
              "id": "4C051DB611D3E877C000B3B2D86C964F",
              "name": "Profit"
            },
            {
              "type": "constant",
              "value": "160000",
              "dataType": "Real"
            }
          ]
        },
        {
          "operator": ">",
          "operands": [
            {
              "type": "metric",
              "id": "4C051DB611D3E877C000B3B2D86C964F",
              "name": "Profit"
            },
            {
              "type": "constant",
              "value": "200000",
              "dataType": "Real"
            }
          ]
        }
      ]
    }
  },
  "sorting": [
    // ...
  ]
}
```
