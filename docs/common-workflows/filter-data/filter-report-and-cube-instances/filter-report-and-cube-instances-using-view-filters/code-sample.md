---
title: Code sample - Filter reports and cubes using view filters
description: The code sample for filter reports and cubes using view filters.
---

The `viewLimits` parameter can include multiple filters, with both metric and attribute qualifications, and these filters can be nested to support more complex filtering logic. Each filter includes a [supported operator](./supported-operators.md) and two operands. The first operand specifies the attribute element, attribute form, or metric that will be evaluated, and the second operand specifies the attribute element, metric or constant that it will be qualified against.

```json
"viewFilter": {
  "operator": "string",
  "operands": [
    {
      "operator": "string",
      "operands": []
    },
    {
    "operator": "string",
    "operands": []
    }
  ]
}
```

Code samples are provided for the following view filter scenarios:

- [Filter on attribute elements](#filter-on-attribute-elements)
- [Filter on attribute forms](#filter-on-attribute-forms)
- [Multiple filters on attribute forms](#multiple-filters-on-attribute-forms)
- [Filter on metrics](#filter-on-metrics)

There are several code samples for metric filtering, using different operators. There is also a code sample for [combining filters](#combine-filters).

Each code sample assumes that you are using a report or cube with the following data:

Attributes

- Category
- Item
- Region
- Year
- Quarter

Metrics

- Units Sold
- Cost
- Revenue
- Profit

Each code sample returns only the subset of data defined by the specific view filter for that sample.

## Filter on attribute elements

Requested data: Get all report or cube data for Electronics

Filter definition: **Category in Electronics**

Operator used: **In**

```json
{
  "viewFilter": {
    "operator": "In",
    "operands": [
      {
        "type": "attribute",
        "id": "8D679D3711D3E4981000E787EC6DE8A4",
        "name": "Category"
      },
      {
        "type": "elements",
        "elements": [
          {
            "id": "8D679D3711D3E4981000E787EC6DE8A4:2",
            "name": "Electronics"
          }
        ]
      }
    ]
  }
}
```

## Filter on attribute forms

Requested data: Get all report or cube data where the ID form of Category is between 1 and 3

Filter definition: **Category@ID between 1 and 3**

Operator used: **Between**

```json
{
  "viewFilter": {
    "operator": "Between",
    "operands": [
      {
        "type": "form",
        "attribute": {
          "id": "8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Category"
        },
        "form": {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "name": "ID"
        }
      },
      {
        "type": "constant",
        "dataType": "Real",

        "value": "1"
      },
      {
        "type": "constant",
        "dataType": "Real",
        "value": "3"
      }
    ]
  }
}
```

## Multiple filters on attribute forms

Requested data: Get all report or cube data where the value of items are The Painted Word and Hirschfeld on Line.

Filter definition: **DESC@ID of The Painted Word and Hirschfeld on Line**

Operator used: **In**

```json
{
  "viewFilter": {
    "operator": "In",
    "operands": [
      {
        "type": "form",
        "attribute": {
          "id": "8D679D4211D3E4981000E787EC6DE8A4"
        },
        "form": {
          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
          "name": "DESC"
        }
      },
      {
        "type": "constants",
        "dataType": "Char",
        "values": ["The Painted Word", "Hirschfeld on Line"]
      }
    ]
  }
}
```

## Filter on metrics

Requested data: Get report or cube data with revenue less than cost (i.e., cost greater than revenue)

Filter definition: **Cost > Revenue**

Operator used: **Greater**

```json
{
  "viewFilter": {
    "operator": "Greater",
    "operands": [
      {
        "type": "metric",
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "name": "Cost"
      },
      {
        "type": "metric",
        "id": "4C05177011D3E877C000B3B2D86C964F",
        "name": "Revenue"
      }
    ]
  }
}
```

Requested data: Get report or cube data with cost between $200,000 and $400,000

Filter definition: **200000 < Cost < 400000**

Operator used: **Between**

```json
{
  "viewFilter": {
    "operator": "Between",
    "operands": [
      {
        "type": "metric",
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "name": "Cost"
      },
      {
        "type": "constant",
        "dataType": "Real",
        "value": "200000"
      },
      {
        "type": "constant",
        "dataType": "Real",
        "value": "400000"
      }
    ]
  }
}
```

Requested data: Get report or cube data with cost greater than or equal to $500,000

Filter : **Cost >= 500000**

Operator used: **GreaterEqual**

```json
{
  "viewFilter": {
    "operator": "GreaterEqual",
    "operands": [
      {
        "type": "metric",
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "name": "Cost"
      },
      {
        "type": "constant",
        "dataType": "Real",
        "value": "500000"
      }
    ]
  }
}
```

Requested data: Get report or cube data with the top 20% of Cost

Filter definition: **Top 20 percent (Cost)**

Operator used: **Percent.Top**

```json
{
  "viewFilter": {
    "operator": "Percent.Top",
    "operands": [
      {
        "type": "metric",
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "name": "Cost"
      },
      {
        "type": "constant",
        "dataType": "Real",
        "value": "20%"
      }
    ]
  }
}
```

Requested data: Get report or cube data with the top three Cost values

Filter definition: **Top 3 (Cost)**

Operator used: **Rank.Top**

```json
{
  "viewFilter": {
    "operator": "Rank.Top",

    "operands": [
      {
        "type": "metric",
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "name": "Cost"
      },
      {
        "type": "constant",
        "dataType": "Real",
        "value": "3"
      }
    ]
  }
}
```

Requested data: Get report or cube data with Revenue percentage rank equal to 50%

Filter definition: **Revenue percentage rank equal to 50 percent**

Operator used: **Percent.Equals**

```json
{
  "viewFilter": {
    "operator": "Percent.Equals",
    "operands": [
      {
        "type": "metric",
        "id": "2FBA0F9B416EFE38DCF22F8CFE4AA75C",
        "name": "Revenue"
      },
      {
        "type": "constant",
        "dataType": "Real",
        "value": "0.5"
      }
    ]
  }
}
```

## Combine filters

Requested data: Get Cost and Revenue for Electronics for the Northeast and Northwest

Filter definition: **(Region in Northeast, Northwest) and (Category in Electronics)**

Operators: **And**,**In**

```json
{
  "viewFilter": {
    "operator": "And",
    "operands": [
      {
        "operator": "In",
        "operands": [
          {
            "type": "attribute",
            "id": "8D679D4B11D3E4981000E787EC6DE8A4",
            "name": "Region"
          },
          {
            "type": "elements",
            "elements": [
              {
                "id": "h1;8D679D4B11D3E4981000E787EC6DE8A4",
                "name": "Northeast"
              },
              {
                "id": "h6;8D679D4B11D3E4981000E787EC6DE8A4",
                "name": "Northwest"
              }
            ]
          }
        ]
      },
      {
        "operator": "In",
        "operands": [
          {
            "type": "attribute",
            "id": "8D679D3711D3E4981000E787EC6DE8A4",
            "name": "Category"
          },
          {
            "type": "elements",
            "elements": [
              {
                "id": "8D679D3711D3E4981000E787EC6DE8A4:2",
                "name": "Electronics"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

Requested data: Get all report or cube data for the Northeast and Northwest or with cost greater than or equal to $500,

Filter definition: **(Region in Northeast, Northwest) or (Cost >= $500,000)**

Operators: **Or**, **In**, **GreaterEqual**

```json
{
  "viewFilter": {
    "operator": "Or",
    "operands": [
      {
        "operator": "In",
        "operands": [
          {
            "type": "attribute",
            "id": "8D679D4B11D3E4981000E787EC6DE8A4",
            "name": "Region"
          },
          {
            "type": "elements",
            "elements": [
              {
                "id": "h1;8D679D4B11D3E4981000E787EC6DE8A4",
                "name": "Northeast"
              },
              {
                "id": "h6;8D679D4B11D3E4981000E787EC6DE8A4",
                "name": "Northwest"
              }
            ]
          }
        ]
      },
      {
        "operator": "GreaterEqual",
        "operands": [
          {
            "type": "metric",
            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
            "name": "Cost"
          },
          {
            "type": "constant",
            "dataType": "Real",
            "value": "500000"
          }
        ]
      }
    ]
  }
}
```

Requested data: Get all report or cube data with cost not between $200,000 and $400,

Filter definition: **Not 200000 < Cost < 400000**

Operators: **Not, Between**

```json
{
  "viewFilter": {
    "operator": "Not",
    "operands": [
      {
        "operator": "Between",
        "operands": [
          {
            "type": "metric",
            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
            "name": "Cost"
          },
          {
            "type": "constant",
            "dataType": "Real",
            "value": "200000"
          },
          {
            "type": "constant",
            "dataType": "Real",
            "value": "400000"
          }
        ]
      }
    ]
  }
}
```
