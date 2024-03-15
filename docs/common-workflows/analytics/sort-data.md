---
title: Sort data
description: When you use a REST API request to create a cube or report, you can sort the data that is returned. This is particularly helpful when you are using incremental fetch. You define the kind of sorting to apply in the body parameter of the request. You can apply sorting on all rows, columns, and pages.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-f01c3304-fd56-48bf-a13a-cae926afb2a5?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

When you use a REST API request to create a cube or report, you can sort the data that is returned. This is particularly helpful when you are using incremental fetch. You define the kind of sorting to apply in the body parameter of the request. You can apply sorting on all rows, columns, and pages.

You can sort the results of the following requests:

- `POST /api/v2/reports/{reportId}/instances`
- `PUT /api/v2/reports/{reportId}/instances/{instanceId}`
- `POST /api/v2/cubes/{cubeId}/instances`
- `PUT /api/v2/cubes/{reportId}/instances/{instanceId}`

The requests do the same thing. They create a report instance (based on either a cube or a report), get the instance information, and return the results of the first paging. All endpoints support simple sorting and nested (or hierarchical) sorting. Simple sorting has only one sorting criteria; nested sorting has multiple sorting criteria, which are applied in the order in which they are listed. When sorting criteria are applied to the results of either request, it works the same for reports and cubes.

You can sort the results for reports that have attributes on rows and metrics on columns or even cross-tab reports. You can use derived elements in the sorting definition for both reports and cubes. Moreover, you can now set the subtotal positions on every sorting level.

You can sort the results for reports that have attributes on rows and metrics on columns or even cross-tab reports. You can also use derived elements in the sorting definition for both reports and cubes. Moreover, you can now set the subtotal positions on every sorting level.

- [Sorting criteria that can be applied](#sorting-criteria-that-can-be-applied)
  - [Sample body parameter](#sample-body-parameter)
  - [Sample JSON output](#sample-json-output)
  - [Possible sorting errors](#possible-sorting-errors)

Describes the three ways that report results can be sorted—by attribute form, by metric, and using the default attribute sort.

- [Sample body parameter](#sample-body-parameter)

Provides the model for the body parameter of the request (with code for sorting shown in bold) and two versions of a sample body parameter with actual data.

- [Sample JSON output](#sample-json-output)

Provides sample JSON output for the request (with code for the sorting definition shown in bold).

- [Possible sorting errors](#possible-sorting-errors)

Provides possible errors that can be returned when sorting fails.

## Sorting criteria that can be applied

There are four kinds of sorting, which can be applied in either ascending or descending order:

- Sorting by subtotals position

This is a special kind of sorting that can be used to manipulate the subtotals' position on every axis. You can only apply subtotals position sorting as the first criteria on every axis. You specify a subtotals position whose value will be used to place the subtotals on the topmost level.

- Sorting by attribute form

You specify an attribute form whose value will be used to sort the report contents; you provide the ID of the attribute and the ID of the attribute form. You also specify the order in which the contents will be sorted and the subtotals position in which subtotals will be placed in this sorting level.

- Sorting by metric

You specify a metric whose value is used to sort the report contents. You also provide the ID of the metric. If the report is a cross-tabbed, you also need to provide the elements of the attributes on the opposite axis. Nevertheless, metric sort is not allowed on pages axis. You also specify the order in which the contents are sorted and the subtotals position in which subtotals are placed in this sorting level.

- Sorting using the default attribute sort

In MicroStrategy Developer, you can set a default attribute sort property, which is saved in the metadata. To set this property, you specify an attribute form whose value will be used to sort the contents of any report that includes the attribute; you also specify whether the sort order will be ascending or descending. This default attribute sort property is automatically applied whenever the attribute is used in a report.

- If you are creating a report instance that includes an attribute whose form has the default attribute sort property set and it is the only sorting criteria that will be used in the report, you do not have to specify the sort. This is because the default attribute sort is automatically applied whenever the attribute is used in a report.

- If you are creating a report instance that includes an attribute whose form has the default attribute sort property set and it is one of the multiple sorting criteria that is used in the report, you must specify the sort in the hierarchical order where it should be applied. You provide the ID of the attribute. You do not have to specify the attribute form to use or the sort order because they are part of the default attribute sort property.

You cannot set the default attribute sort property in MicroStrategy Web. It can only be set in MicroStrategy Developer.

### Sample body parameter

You define the sorting criteria to apply in the body parameter of the request, together with other values that determine the data included in the report instance—such as attribute values, metric values, and view filters. You can use derived elements in the sorting definition for both reports and cubes.

The model for the request body parameter is provided below, along with the code for sorting.

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
  },
  "viewFilter": {
    "operator": "string"
  },
  "sorting": {
    "rows": [
      {
        "type": "subtotalsPosition",
        "subtotalsPosition": "string" // possible values: "first", "last", "inherit", default: "inherit"
      },
      {
        "type": "attribute", // type is not required
        "attribute": {
          "id": "string",
          "name": "string" // name is not required
        } // no "order" and "subtotalsPosition"
      },
      {
        "type": "form", // type is not required
        "attribute": {
          "id": "string",
          "name": "string" // name is not required
        },
        "form": {
          "id": "string",
          "name": "string" // name is not required
        },
        "subtotalsPosition": "string", // possible values: "first", "last", "inherit", default: "inherit"
        "order": "ascending"
      },
      {
        "type": "metric", // type is not required
        "metric": {
          "id": "string",
          "name": "string" // name is not required
        },
        "elements": [
          // this field is optional depending on report is cross-tab or not
          {
            "formValues": [
              // formValues is not required
              "string"
            ],
            "id": "string" // attribute element id
          }
        ],
        "subtotalsPosition": "string", // possible values: "first", "last", "mixed", "inherit", default: "inherit"
        "order": "ascending"
      }
    ],
    "columns": [
      // the same as rows
    ],
    "pageBy": [
      // sorting on page-by axis. for this axis, metric sort is not allowed
      // the same as rows, except that metric sort is not allowed in this axis
    ]
  }
}
```

The sorting code for a sample body parameter with actual data is shown below. This code includes all the properties for each kind of sorting.

```json
{
  "sorting": {
    "rows": [
      {
        "type": "attribute",
        "attribute": {
          "id": "8D679D4B11D3E4981000E787EC6DE8A4",
          "name": "Region"
        }
      },
      {
        "type": "metric",
        "metric": {
          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
          "name": "Cost"
        },
        "elements": [
          {
            "formValues": ["2014"],
            "id": "h2014;8D679D5111D3E4981000E787EC6DE8A4" // 2014 element of Year
          }
        ],
        "subtotalsPosition": "mixed",
        "order": "descending"
      }
    ],
    "columns": [
      {
        "type": "subtotalsPosition",
        "subtotalsPosition": "last"
      },
      {
        "type": "attribute",
        "attribute": {
          "id": "8D679D5111D3E4981000E787EC6DE8A4",
          "name": "Year"
        }
      }
    ],
    "pageBy": [
      {
        "type": "attribute",
        "attribute": {
          "id": "8D679D3811D3E4981000E787EC6DE8A4",
          "name": "Country"
        }
      }
    ]
  }
}
```

Here is slightly different sorting code that produces the same results. This code does not include properties that are not required, such as type and name, but it produces the same JSON output as the previous code.

```json
{
  "sorting": {
    "rows": [
      {
        "attribute": {
          "id": "8D679D4B11D3E4981000E787EC6DE8A4"
        }
      },
      {
        "metric": {
          "id": "7FD5B69611D5AC76C000D98A4CC5F24F"
        },
        "elements": [
          {
            "id": "h2014;8D679D5111D3E4981000E787EC6DE8A4"
          }
        ],
        "subtotalsPosition": "mixed",
        "order": "descending"
      }
    ],
    "columns": [
      {
        "subtotalsPosition": "last"
      },
      {
        "attribute": {
          "id": "8D679D5111D3E4981000E787EC6DE8A4"
        }
      }
    ],
    "pageBy": [
      {
        "attribute": {
          "id": "8D679D3811D3E4981000E787EC6DE8A4"
        }
      }
    ]
  }
}
```

### Sample JSON output

When you use the sorting parameter in the request body, the output of the endpoint includes the sorting definition, which is shown in the JSON output shown below.

```json
{
  "name": "Demo Report",
  "id": "D380293E4CC8AE5AACAC66B75F9C7999",
  "instanceId": "F48AF33E11EB297ED2F20080EF05A058",
  "status": 1,
  "definition": {
    "grid": {
      "crossTab": true,
      "metricsPosition": {
        "axis": "columns",
        "index": 2
      },
      "rows": [
        // ...
      ],
      "columns": [
        // ...
      ],
      "pageBy": [
        // ...
      ],
      "subtotals": {
        // ...
      },
      "sorting": {
        "rows": [
          {
            "type": "form",
            "attribute": {
              "id": "8D679D5111D3E4981000E787EC6DE8A4",
              "name": "Year"
            },
            "form": {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID"
            },
            "subtotalsPosition": "first",
            "order": "descending"
          },
          {
            "type": "metric",
            "metric": {
              "id": "4C051DB611D3E877C000B3B2D86C964F",
              "name": "Profit"
            },
            "elements": [
              {
                "formValues": ["USA"],
                "id": "h1;8D679D3811D3E4981000E787EC6DE8A4"
              },
              {
                "formValues": ["Central"],
                "id": "h4;8D679D4B11D3E4981000E787EC6DE8A4"
              }
            ],
            "subtotalsPosition": "mixed",
            "order": "ascending"
          }
        ],
        "columns": [
          {
            "type": "subtotalsPosition",
            "subtotalsPosition": "first",
            "order": "ascending"
          }
        ],
        "pageBy": [
          {
            "type": "form",
            "attribute": {
              "id": "8D679D3711D3E4981000E787EC6DE8A4",
              "name": "Category"
            },
            "form": {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC"
            },
            "subtotalsPosition": "inherit",
            "order": "ascending"
          }
        ]
      },
      "thresholds": []
    }
  },
  "data": {
    // ...
  }
}
```

### Possible sorting errors

| Invalid input                                                                             | Error message                                                                                                                            | HTTP response code |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Metric ID is null or empty                                                                | Metric ID should not be null or empty in the sorting array[i]                                                                            | 400                |
| Metric ID does not belong to the current cube                                             | Failed to find the metric \{metric id} in the template                                                                                   | 400                |
| Attribute ID is null or empty                                                             | Attribute ID should not be null or empty in the sorting array[i]                                                                         | 400                |
| Attribute ID does not belong to the current cube                                          | Failed to find the attribute \{attribute id} in the template                                                                             | 400                |
| Attribute form ID is null or empty                                                        | Attribute form ID should not be null or empty in the sorting array[i]                                                                    | 400                |
| Attribute form ID does not belong to the current cube                                     | Failed to find the attribute form \{attribute form id} in the template                                                                   | 400                |
| Node type is incorrect                                                                    | Incorrect node type. Supported node types are 'metric', 'form', 'attribute' and 'subtotalsPosition' currently.                           | 400                |
| Order or subtotals position cannot be set for attribute default sort                      | It is forbidden to set 'order' and 'subtotalsPosition' for attribute default sort.                                                       | 400                |
| Subtotals position sort can only be applied as the first sorting on axis                  | Subtotals position sort can be only applied as the first sorting in the axis, but found in index \{0} of axis \{1}                       | 400                |
| The elements of metric sort do not match the elements of attributes in the opposite axis. | The elements of metric sort for metric id \{metric id} in axis \{axis name} does not match the attributes in axis \{opposite axis name}. | 400                |
| Metric sort cannot be applied in page-by.                                                 | Metric sort cannot be applied in page-by.                                                                                                | 400                |
| Subtotals position 'mixed' can only be applied in metric sort.                            | Subtotals position 'mixed' cannot be applied for sort of type \{sort type}.                                                              | 400                |
| Invalid subtotals position value.                                                         | Unknown subtotals position value {0}.                                                                                                    | 400                |
