---
title: Workflow sample - Create a custom group object
sidebar_label: Create a custom group object
description: This workflow sample demonstrates how to create a new custom group object through the Modeling service.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3c57732e-0689-406a-a6ad-c73ece5960c2?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new custom group object through the Modeling service.

You want to create a new `“Age Group“` custom group object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md).

:::

1. Create a custom group object using [POST /api/model/customGroups](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-postCustomGroup)

   You want to create the custom group with filter elements using the `“tree”` format for the `"qualifications”`. More examples of creating a custom group are listed below.

:::tip

To create a custom group with filter elements, in the request body, the filter elements' "qualification" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.

When creating an attribute element list qualification, only the “tree“ format is supported.

When creating a metric qualification with output level, only the “tree“ format is supported.

:::

:::tip

If the 'tree' format is used, the custom expressions, "expression", needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.

When creating a qualification with inline custom expressions, only the "tree" format is supported.

:::

:::tip

If you are constructing the POST custom group request body based on the response of the GET custom group call of an existing custom group, note that any embedded objects (`"isEmbedded":true"`) cannot be used to create a new custom group, as the embedded objects are only “local“ to its owner (the existing custom group).

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "2pe4p1s51uihq7p9fa5svblv59"
"X-MSTR-MS-Changeset": "56E9618A3D954783A2ABDE6E7F4ED4EC"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "custom_group",
    "name": "Age Groups",
    "description": "Custom group defined with attribute qualification on Customer Age.",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "name": "< 25",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) < 25)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateText": "({Customer Age} (ID) < 25)",
          "predicateTree": {
            "function": "less",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "25.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "name": "25-35",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) Between 25 and 35)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateText": "({Customer Age} (ID) Between 25 and 35)",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "25.0"
                }
              },
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "35.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "name": "36-50",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) Between 36 and 50)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateText": "({Customer Age} (ID) Between 36 and 50)",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "36.0"
                }
              },
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "50.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "name": "51-60",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) Between 51 and 60)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateText": "({Customer Age} (ID) Between 51 and 60)",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "51.0"
                }
              },
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "60.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "name": "> 60",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) > 60)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateText": "({Customer Age} (ID) > 60)",
          "predicateTree": {
            "function": "greater",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "60.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    }
  ]
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups" -H "accept: application/json" -H "X-MSTR-AuthToken: 2pe4p1s51uihq7p9fa5svblv59" -H "X-MSTR-MS-Changeset: 56E9618A3D954783A2ABDE6E7F4ED4EC" -H "Content-Type: application/json" -d "{\"information\":{\"subType\":\"custom_group\",\"name\":\"Age Groups\",\"description\":\"Custom group defined with attribute qualification on Customer Age.\",\"destinationFolderId\":\"98FE182C2A10427EACE0CD30B6768258\"},\"options\":{\"hierarchyDisplay\":true,\"subtotalsDisplay\":false,\"elementHeaderAboveChild\":true},\"elements\":[{\"name\":\"< 25\",\"displayOption\":\"element\",\"qualification\":{\"text\":\"({Customer Age} (ID) < 25)\",\"tree\":{\"type\":\"predicate_form_qualification\",\"predicateText\":\"({Customer Age} (ID) < 25)\",\"predicateTree\":{\"function\":\"less\",\"parameters\":[{\"parameterType\":\"constant\",\"constant\":{\"type\":\"double\",\"value\":\"25.0\"}}],\"attribute\":{\"objectId\":\"6E069E4C11D3E4E41000E887EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer Age\"},\"form\":{\"objectId\":\"45C11FA478E745FEA08D781CEA190FE5\",\"subType\":\"attribute_form_system\",\"name\":\"ID\"}}}}},{\"name\":\"25-35\",\"displayOption\":\"element\",\"qualification\":{\"text\":\"({Customer Age} (ID) Between 25 and 35)\",\"tree\":{\"type\":\"predicate_form_qualification\",\"predicateText\":\"({Customer Age} (ID) Between 25 and 35)\",\"predicateTree\":{\"function\":\"between\",\"parameters\":[{\"parameterType\":\"constant\",\"constant\":{\"type\":\"double\",\"value\":\"25.0\"}},{\"parameterType\":\"constant\",\"constant\":{\"type\":\"double\",\"value\":\"35.0\"}}],\"attribute\":{\"objectId\":\"6E069E4C11D3E4E41000E887EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer Age\"},\"form\":{\"objectId\":\"45C11FA478E745FEA08D781CEA190FE5\",\"subType\":\"attribute_form_system\",\"name\":\"ID\"}}}}},{\"name\":\"36-50\",\"displayOption\":\"element\",\"qualification\":{\"text\":\"({Customer Age} (ID) Between 36 and 50)\",\"tree\":{\"type\":\"predicate_form_qualification\",\"predicateText\":\"({Customer Age} (ID) Between 36 and 50)\",\"predicateTree\":{\"function\":\"between\",\"parameters\":[{\"parameterType\":\"constant\",\"constant\":{\"type\":\"double\",\"value\":\"36.0\"}},{\"parameterType\":\"constant\",\"constant\":{\"type\":\"double\",\"value\":\"50.0\"}}],\"attribute\":{\"objectId\":\"6E069E4C11D3E4E41000E887EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer Age\"},\"form\":{\"objectId\":\"45C11FA478E745FEA08D781CEA190FE5\",\"subType\":\"attribute_form_system\",\"name\":\"ID\"}}}}},{\"name\":\"51-60\",\"displayOption\":\"element\",\"qualification\":{\"text\":\"({Customer Age} (ID) Between 51 and 60)\",\"tree\":{\"type\":\"predicate_form_qualification\",\"predicateText\":\"({Customer Age} (ID) Between 51 and 60)\",\"predicateTree\":{\"function\":\"between\",\"parameters\":[{\"parameterType\":\"constant\",\"constant\":{\"type\":\"double\",\"value\":\"51.0\"}},{\"parameterType\":\"constant\",\"constant\":{\"type\":\"double\",\"value\":\"60.0\"}}],\"attribute\":{\"objectId\":\"6E069E4C11D3E4E41000E887EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer Age\"},\"form\":{\"objectId\":\"45C11FA478E745FEA08D781CEA190FE5\",\"subType\":\"attribute_form_system\",\"name\":\"ID\"}}}}},{\"name\":\"> 60\",\"displayOption\":\"element\",\"qualification\":{\"text\":\"({Customer Age} (ID) > 60)\",\"tree\":{\"type\":\"predicate_form_qualification\",\"predicateText\":\"({Customer Age} (ID) > 60)\",\"predicateTree\":{\"function\":\"greater\",\"parameters\":[{\"parameterType\":\"constant\",\"constant\":{\"type\":\"double\",\"value\":\"60.0\"}}],\"attribute\":{\"objectId\":\"6E069E4C11D3E4E41000E887EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer Age\"},\"form\":{\"objectId\":\"45C11FA478E745FEA08D781CEA190FE5\",\"subType\":\"attribute_form_system\",\"name\":\"ID\"}}}}}]}"
```

Sample Response Body:

You can view the new custom group's definition in the body of the response.

```json
{
  "information": {
    "versionId": "BA3053F1F7C948E087E1CB19173BB3C9",
    "primaryLocale": "en-US",
    "objectId": "B805ADAFF8394F35BB41DDC270B5B33E",
    "subType": "custom_group",
    "name": "Age Groups",
    "description": "Custom group defined with attribute qualification on Customer Age.",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "id": "484A215D285348739BD509BE49FCEDD7",
      "name": "< 25",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) < 25)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "484A215D285348739BD509BE49FCEDD7",
          "predicateText": "({Customer Age} (ID) < 25)",
          "predicateTree": {
            "function": "less",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "25.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "id": "F8778C92067447698C9C30A5C9ED2D31",
      "name": "25-35",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) Between 25 and 35)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "F8778C92067447698C9C30A5C9ED2D31",
          "predicateText": "({Customer Age} (ID) Between 25 and 35)",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "25.0"
                }
              },
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "35.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "id": "B43DA5CE369648CAAC84586079F0BC6D",
      "name": "36-50",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) Between 36 and 50)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "B43DA5CE369648CAAC84586079F0BC6D",
          "predicateText": "({Customer Age} (ID) Between 36 and 50)",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "36.0"
                }
              },
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "50.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "id": "68B1A3FA73FC4DE6BAEB197888AB6E40",
      "name": "51-60",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) Between 51 and 60)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "68B1A3FA73FC4DE6BAEB197888AB6E40",
          "predicateText": "({Customer Age} (ID) Between 51 and 60)",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "51.0"
                }
              },
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "60.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "id": "730CFDA3004A42AFA16D0359C78D2968",
      "name": "> 60",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) > 60)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "730CFDA3004A42AFA16D0359C78D2968",
          "predicateText": "({Customer Age} (ID) > 60)",
          "predicateTree": {
            "function": "greater",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "60.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    }
  ]
}
```

Response Code: 201 (A new custom group is created successfully in the changeset.)

## More samples

The following are additional examples for creating a custom group object.

Creating a custom group filter element is similar to creating a filter. The sample JSON can be found in [Workflow sample: Create a filter object](../manage-filter-objects/create-a-filter-object.md). The following are sample JSONs for creating a custom group with banding elements.

:::tip

Each custom group element can contain either one or more filter qualification predicates, or one banding predicate.

For custom group filter elements, an output level is required for a metric qualification.

:::

### Custom group with band count

Create a custom group with a band count element.

`"type"`: `"predicate_banding_count"`

In this sample, you want to create a custom group with a band element that slices metric `“Running Revenue Contribution to All Customers Abs.“` values into 5 equal bands for the range of [0,1] and appear as rows on a report. You define the range by setting the start at and stop at values. You also set the band count, which is the number of bands to use.

Sample Request Body:

```json
{
  "information": {
    "subType": "custom_group",
    "name": "Customers Value Band Count",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "name": "All Customers",
      "displayOption": "element",
      "qualification": {
        "text": "Set of  Customer where BandingC({Running Revenue Contribution to All Customers Abs.},0,1,5)",
        "tree": {
          "type": "predicate_banding_count",
          "predicateText": "Set of  Customer where BandingC({Running Revenue Contribution to All Customers Abs.},0,1,5)",
          "predicateTree": {
            "level": [
              {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              }
            ],
            "metric": {
              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",
              "subType": "metric",
              "name": "Running Revenue Contribution to All Customers Abs."
            },
            "bandMetricFunction": "value",
            "bandNames": [
              "Top Quintile",
              "Second Quintile",
              "Third Quintile",
              "Fourth Quintile",
              "Bottom Quintile"
            ],
            "start": {
              "type": "double",
              "value": "0.0"
            },
            "stop": {
              "type": "double",
              "value": "1.0"
            },
            "count": {
              "type": "double",
              "value": "5.0"
            }
          }
        }
      }
    }
  ]
}
```

### Custom group with band size

Create a custom group with a band size element.

`"type"`: `"predicate_banding_size"`

In this sample, you want to create a custom group with a band element that slices a range of metric `“Running Revenue Contribution to All Customers Abs.“` values into a number of bands that appear as rows on a report. You define the range by setting the start at and stop at values. You also set the step size, which is the size of each band.

Sample Request Body:

```json
{
  "information": {
    "subType": "custom_group",
    "name": "Customers Value Band Size",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "name": "All Customers",
      "displayOption": "element",
      "qualification": {
        "text": "Set of  Customer where Banding({Running Revenue Contribution to All Customers Abs.},0,1,0.2)",
        "tree": {
          "type": "predicate_banding_size",
          "predicateText": "Set of  Customer where Banding({Running Revenue Contribution to All Customers Abs.},0,1,0.2)",
          "predicateTree": {
            "level": [
              {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              }
            ],
            "metric": {
              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",
              "subType": "metric",
              "name": "Running Revenue Contribution to All Customers Abs."
            },
            "bandMetricFunction": "value",
            "bandNames": [
              "Top Quintile",
              "Second Quintile",
              "Third Quintile",
              "Fourth Quintile",
              "Bottom Quintile"
            ],
            "start": {
              "type": "double",
              "value": "0.0"
            },
            "stop": {
              "type": "double",
              "value": "1.0"
            },
            "size": {
              "type": "double",
              "value": "0.2"
            }
          }
        }
      }
    }
  ]
}
```

### Custom group with banding points

Create a custom group with a banding points element.

`"type"`: `"predicate_banding_points"` In this sample, you want to create a custom group with a band element that slices a range of metric `“Running Revenue Contribution to All Customers Abs.“` values into a number of bands that appear as rows on a report. You manually define each band, which allows you to produce bands of varying sizes.

```json
{
  "information": {
    "subType": "custom_group",
    "name": "Customers Value Points Banding",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "name": "All Customers",
      "displayOption": "element",
      "qualification": {
        "text": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",
        "tree": {
          "type": "predicate_banding_points",
          "predicateText": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",
          "predicateTree": {
            "level": [
              {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              }
            ],
            "metric": {
              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",
              "subType": "metric",
              "name": "Running Revenue Contribution to All Customers Abs."
            },
            "bandMetricFunction": "value",
            "bandNames": ["bottom 20%", "20%-40%", "40%-60%", "60%-80%", "Top 20%"],
            "points": [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        }
      }
    }
  ]
}
```

### Custom group with metric value banding

Create a custom group with a metric value banding element.

`"type"`: `"predicate_banding_distinct"`

In this sample, you want to create a custom group with a band element that creates a separate band for each metric `“Running Revenue Contribution to All Customers Abs.“` value. The bands appear as rows on a report.

Sample Request Body:

```json
{
  "information": {
    "subType": "custom_group",
    "name": "Customers Value Metric Value Banding",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "name": "All customer",
      "displayOption": "element",
      "qualification": {
        "text": "Set of  Customer where BandingM({Running Revenue Contribution to All Customers Abs.})",
        "tree": {
          "type": "predicate_banding_distinct",
          "predicateText": "Set of  Customer where BandingM({Running Revenue Contribution to All Customers Abs.})",
          "predicateTree": {
            "level": [
              {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              }
            ],
            "metric": {
              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",
              "subType": "metric",
              "name": "Running Revenue Contribution to All Customers Abs."
            },
            "bandMetricFunction": "value"
          }
        }
      }
    }
  ]
}
```
