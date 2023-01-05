---
title: Create a new report
description: You can use REST APIs to create a new report through Modeling service.
---

<Available since="2021 Update 7" />

You can use REST APIs to create a new report through Modeling service. There are mainly three kinds of reports we can create: normal report, FFSQL (Free Form SQL) report, and subset report. We will provide detailed steps for creating a normal report first, so if you need to create an FFSQL report or a subset report, please refer to "more examples".

## Create a new normal report within an instance

In this sample workflow, we want to create a new normal report under the Public Objects/Report folder in the MicroStrategy Tutorial" project. The folder object ID is `D3C7D461F69C4610AA6BAA5EF51F4125`. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

### 1. Create a new normal report within an instance

To create a normal report, we need to set "sourceType" to "normal" in the report’s definition first. Then we set a few attributes, metrics, filters and drillmaps into both report’s dataTemplate and viewTemplate. The attribute "Region" has a derived element named "Regions". In report’s dataTemplate, a report limit was added. In report’s viewTemplate, we specified how data is sorted (by "sorts" field) and aggregated (by "pageBy" and "subtotals" fields). We also set a metric limit on "Count of Customers" metric, as well as a threshold on "Avg Revenue per Customer" metric which based on "Customer" attribute. Timezone information and some advanced properties are also set in the body.

:::tip

A report instance is required for getting, creating, updating, deleting derived elements in report. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.

:::

Endpoint: [POST /api/model/reports](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-postReport)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body:

```json
{
  "information": {
    "name": "New Report",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3C11D3E4981000E787EC6DE8A4",
          "name": "Customer",
          "type": "attribute"
        },
        {
          "id": "6E069E4C11D3E4E41000E887EC6DE8A4",
          "name": "Customer Age",
          "type": "attribute"
        },
        {
          "id": "8D679D4B11D3E4981000E787EC6DE8A4",
          "name": "Region",
          "type": "attribute",
          "limit": {
            "text": "{Regions}",
            "tree": {
              "type": "reference",
              "target": {
                "objectId": "1DAD64C6445BCD938F11FFAEC3A4A980",
                "subType": "consolidation_element",
                "name": "Regions"
              }
            }
          }
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "82156AB211D40978C000C7906B98494F",
              "name": "Count of Customers",
              "subType": "metric"
            },
            {
              "id": "4C05177F11D3E877C000B3B2D86C964F",
              "name": "Avg Revenue per Customer",
              "subType": "metric"
            }
          ],
          "limit": {
            "text": "Cost > 1000",
            "tree": {
              "type": "predicate_metric_qualification",
              "predicateText": "Cost > 1000",
              "predicateTree": {
                "function": "greater",
                "parameters": [
                  {
                    "parameterType": "constant",
                    "constant": {
                      "type": "double",
                      "value": "1000.0"
                    }
                  }
                ],
                "levelType": "none",
                "metric": {
                  "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
                  "subType": "metric",
                  "name": "Cost"
                },
                "metricFunction": "value",
                "isIndependent": 0,
                "nullInclude": 0
              }
            }
          }
        }
      ],
      "drillMap": {
        "objectId": "B793B57511D3E4E51000E887EC6DE8A4",
        "subType": "drill_map",
        "name": "Tutorial Standard Drill Map"
      }
    },
    "filter": {
      "text": "{Age Range} = 24 and under, 25 to 34, 35 to 44",
      "tree": {
        "type": "predicate_element_list",
        "predicateTree": {
          "attribute": {
            "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
            "subType": "attribute",
            "name": "Age Range"
          },
          "elements": [
            {
              "display": "24 and under",
              "elementId": "h1"
            },
            {
              "display": "25 to 34",
              "elementId": "h2"
            },
            {
              "display": "35 to 44",
              "elementId": "h3"
            }
          ],
          "function": "in"
        }
      }
    }
  },
  "grid": {
    "viewTemplate": {
      "rows": {
        "units": [
          {
            "id": "8D679D3C11D3E4981000E787EC6DE8A4",
            "name": "Customer",
            "type": "attribute"
          }
        ],
        "sorts": [
          {
            "target": {
              "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
              "subType": "attribute",
              "name": "Customer"
            },
            "form": {
              "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",
              "subType": "attribute_form_system",
              "name": "Customer DESC 1"
            },
            "order": "ascending",
            "type": "attribute_form",
            "subtotalsPosition": "inherit"
          }
        ]
      },
      "columns": {
        "units": [
          {
            "type": "metrics",
            "elements": [
              {
                "id": "4C05177F11D3E877C000B3B2D86C964F",
                "name": "Avg Revenue per Customer",
                "subType": "metric",
                "thresholds": [
                  {
                    "format": [],
                    "condition": {
                      "text": "Customer = Aaby:Alen",
                      "tree": {
                        "type": "predicate_element_list",
                        "predicateTree": {
                          "attribute": {
                            "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                            "subType": "attribute",
                            "name": "Customer"
                          },
                          "elements": [
                            {
                              "display": "Aaby:Alen",
                              "elementId": "h7796"
                            }
                          ],
                          "function": "in"
                        }
                      }
                    },
                    "name": "New Threshold",
                    "replaceText": "",
                    "semantics": "number",
                    "scope": "metric_only",
                    "enable": true
                  }
                ]
              }
            ]
          }
        ],
        "sorts": [
          {
            "target": {
              "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
              "subType": "attribute",
              "name": "Customer"
            },
            "form": {
              "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",
              "subType": "attribute_form_system",
              "name": "Customer DESC 1"
            },
            "order": "ascending",
            "type": "attribute_form",
            "subtotalsPosition": "inherit"
          }
        ]
      },
      "pageBy": {
        "units": [
          {
            "id": "8D679D4B11D3E4981000E787EC6DE8A4",
            "name": "Region",
            "type": "attribute"
          }
        ],
        "sorts": []
      },
      "subtotals": [
        {
          "name": "Total",
          "type": "subtotal_definition",
          "appliedLevel": {
            "type": "by_position",
            "rows": "all_subtotals",
            "columns": "all_subtotals",
            "pageBy": "grand_total"
          },
          "subtotal": {
            "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
            "subType": "system_subtotal",
            "name": "Total"
          }
        }
      ],
      "drillMap": {
        "objectId": "B793B57511D3E4E51000E887EC6DE8A4",
        "subType": "drill_map",
        "name": "Tutorial Standard Drill Map"
      }
    },
    "viewFilter": {
      "text": "Region = Canada, Central, England",
      "tree": {
        "type": "predicate_element_list",
        "predicateTree": {
          "attribute": {
            "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Region"
          },
          "elements": [
            {
              "display": "Canada",
              "elementId": "h11"
            },
            {
              "display": "Central",
              "elementId": "h4"
            },
            {
              "display": "England",
              "elementId": "h8"
            }
          ],
          "function": "in"
        }
      }
    }
  },
  "timezone": {
    "objectId": "7E514996278648AB8F2B5D6DA2ED87AB",
    "subType": "timezone_custom",
    "name": "Custom TZ2"
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[DisplayNullOnTop]": {
        "name": "DisplayNullOnTop",
        "value": "true",
        "type": "boolean",
        "resolvedLocation": "default"
      }
    }
  }
}
```

Sample Curl:

To return the newly created report’s definition with its filters in all formats and its advanced properties, we need to set showExpressionAs = tokens, showFilterTokens = true and showAdvancedProperties = true. Here we only use showExpressionAs = tree and showAdvancedProperties = true, you can chose other combinations of these settings to get defferent representations of the response body.

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports?showExpressionAs=tree&showAdvancedProperties=true' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Content-Type: application/json' -H 'Cookie: JSESSIONID=D45974FE0F66B7FE6CF5FF2E6172CA13; iSession=bo9jn505137gm6urmq4im0ents' -d '{
    "information": {
        "name": "New Report",
        "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
    },
    "sourceType": "normal",
    "dataSource": {
        "dataTemplate": {
            "units": [
                {
                    "id": "8D679D3C11D3E4981000E787EC6DE8A4",
                    "name": "Customer",
                    "type": "attribute"
                },
                {
                    "id": "6E069E4C11D3E4E41000E887EC6DE8A4",
                    "name": "Customer Age",
                    "type": "attribute"
                },
                {
                    "id": "8D679D4B11D3E4981000E787EC6DE8A4",
                    "name": "Region",
                    "type": "attribute",
                    "limit": {
                        "text": "{Regions}",
                        "tree": {
                            "type": "reference",
                            "target": {
                                "objectId": "1DAD64C6445BCD938F11FFAEC3A4A980",
                                "subType": "consolidation_element",
                                "name": "Regions"
                            }
                        }
                    }
                },
                {
                    "type": "metrics",
                    "elements": [
                        {
                            "id": "82156AB211D40978C000C7906B98494F",
                            "name": "Count of Customers",
                            "subType": "metric"
                        },
                        {
                            "id": "4C05177F11D3E877C000B3B2D86C964F",
                            "name": "Avg Revenue per Customer",
                            "subType": "metric"
                        }
                    ],
                    "limit": {
                        "text": "Cost > 1000",
                        "tree": {
                            "type": "predicate_metric_qualification",
                            "predicateText": "Cost > 1000",
                            "predicateTree": {
                                "function": "greater",
                                "parameters": [
                                    {
                                        "parameterType": "constant",
                                        "constant": {
                                            "type": "double",
                                            "value": "1000.0"
                                        }
                                    }
                                ],
                                "levelType": "none",
                                "metric": {
                                    "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
                                    "subType": "metric",
                                    "name": "Cost"
                                },
                                "metricFunction": "value",
                                "isIndependent": 0,
                                "nullInclude": 0
                            }
                        }
                    }
                }
            ],
            "drillMap": {
                "objectId": "B793B57511D3E4E51000E887EC6DE8A4",
                "subType": "drill_map",
                "name": "Tutorial Standard Drill Map"
            }
        },
        "filter": {
            "text": "{Age Range} = 24 and under, 25 to 34, 35 to 44",
            "tree": {
                "type": "predicate_element_list",
                "predicateTree": {
                    "attribute": {
                        "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
                        "subType": "attribute",
                        "name": "Age Range"
                    },
                    "elements": [
                        {
                            "display": "24 and under",
                            "elementId": "h1"
                        },
                        {
                            "display": "25 to 34",
                            "elementId": "h2"
                        },
                        {
                            "display": "35 to 44",
                            "elementId": "h3"
                        }
                    ],
                    "function": "in"
                }
            }
        }
    },
    "grid": {
        "viewTemplate": {
            "rows": {
                "units": [
                    {
                        "id": "8D679D3C11D3E4981000E787EC6DE8A4",
                        "name": "Customer",
                        "type": "attribute"
                    }
                ],
                "sorts": [
                    {
                        "target": {
                            "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                            "subType": "attribute",
                            "name": "Customer"
                        },
                        "form": {
                            "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",
                            "subType": "attribute_form_system",
                            "name": "Customer DESC 1"
                        },
                        "order": "ascending",
                        "type": "attribute_form",
                        "subtotalsPosition": "inherit"
                    }
                ]
            },
            "columns": {
                "units": [
                    {
                        "type": "metrics",
                        "elements": [
                            {
                                "id": "4C05177F11D3E877C000B3B2D86C964F",
                                "name": "Avg Revenue per Customer",
                                "subType": "metric",
                                "thresholds": [
                                    {
                                        "format": [],
                                        "condition": {
                                            "text": "Customer = Aaby:Alen",
                                            "tree": {
                                                "type": "predicate_element_list",
                                                "predicateTree": {
                                                    "attribute": {
                                                        "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                                                        "subType": "attribute",
                                                        "name": "Customer"
                                                    },
                                                    "elements": [
                                                        {
                                                            "display": "Aaby:Alen",
                                                            "elementId": "h7796"
                                                        }
                                                    ],
                                                    "function": "in"
                                                }
                                            }
                                        },
                                        "name": "New Threshold",
                                        "replaceText": "",
                                        "semantics": "number",
                                        "scope": "metric_only",
                                        "enable": true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "sorts": [
                    {
                        "target": {
                            "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                            "subType": "attribute",
                            "name": "Customer"
                        },
                        "form": {
                            "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",
                            "subType": "attribute_form_system",
                            "name": "Customer DESC 1"
                        },
                        "order": "ascending",
                        "type": "attribute_form",
                        "subtotalsPosition": "inherit"
                    }
                ]
            },
            "pageBy": {
                "units": [
                    {
                        "id": "8D679D4B11D3E4981000E787EC6DE8A4",
                        "name": "Region",
                        "type": "attribute"
                    }
                ],
                "sorts": []
            },
            "subtotals": [
                {
                    "name": "Total",
                    "type": "subtotal_definition",
                    "appliedLevel": {
                        "type": "by_position",
                        "rows": "all_subtotals",
                        "columns": "all_subtotals",
                        "pageBy": "grand_total"
                    },
                    "subtotal": {
                        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
                        "subType": "system_subtotal",
                        "name": "Total"
                    }
                }
            ],
            "drillMap": {
                "objectId": "B793B57511D3E4E51000E887EC6DE8A4",
                "subType": "drill_map",
                "name": "Tutorial Standard Drill Map"
            }
        },
        "viewFilter": {
            "text": "Region = Canada, Central, England",
            "tree": {
                "type": "predicate_element_list",
                "predicateTree": {
                    "attribute": {
                        "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
                        "subType": "attribute",
                        "name": "Region"
                    },
                    "elements": [
                        {
                            "display": "Canada",
                            "elementId": "h11"
                        },
                        {
                            "display": "Central",
                            "elementId": "h4"
                        },
                        {
                            "display": "England",
                            "elementId": "h8"
                        }
                    ],
                    "function": "in"
                }
            }
        }
    },
    "timezone": {
        "objectId": "7E514996278648AB8F2B5D6DA2ED87AB",
        "subType": "timezone_custom",
        "name": "Custom TZ2"
    },
    "advancedProperties": {
        "vldbProperties": {
            "[AnalyticalEngineProperties].[DisplayNullOnTop]": {
                "name": "DisplayNullOnTop",
                "value": "true",
                "type": "boolean",
                "resolvedLocation": "default"
            }
        }
    }
}'
```

Sample Response Body:

```json
{
  "information": {
    "versionId": "00000000000000000000000000000000",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "FB7816D149C8AC0573CC55829E56F217",
    "subType": "report_grid",
    "name": "New Report",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3C11D3E4981000E787EC6DE8A4",
          "name": "Customer",
          "type": "attribute"
        },
        {
          "id": "6E069E4C11D3E4E41000E887EC6DE8A4",
          "name": "Customer Age",
          "type": "attribute"
        },
        {
          "id": "8D679D4B11D3E4981000E787EC6DE8A4",
          "name": "Region",
          "type": "attribute",
          "limit": {
            "text": "{Regions}",
            "tree": {
              "type": "reference",
              "target": {
                "objectId": "1DAD64C6445BCD938F11FFAEC3A4A980",
                "subType": "consolidation_element",
                "name": "Regions"
              }
            }
          }
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "82156AB211D40978C000C7906B98494F",
              "name": "Count of Customers",
              "subType": "metric"
            },
            {
              "id": "4C05177F11D3E877C000B3B2D86C964F",
              "name": "Avg Revenue per Customer",
              "subType": "metric"
            }
          ],
          "limit": {
            "text": "Cost > 1000",
            "tree": {
              "type": "predicate_metric_qualification",
              "predicateId": "AB9AD6103AEF42E9B8894541527E74B2",
              "predicateText": "Cost > 1000",
              "predicateTree": {
                "function": "greater",
                "parameters": [
                  {
                    "parameterType": "constant",
                    "constant": {
                      "type": "double",
                      "value": "1000.0"
                    }
                  }
                ],
                "levelType": "none",
                "metric": {
                  "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
                  "subType": "metric",
                  "name": "Cost"
                },
                "metricFunction": "value",
                "isIndependent": 0,
                "nullInclude": 0
              }
            }
          }
        }
      ],
      "drillMap": {
        "objectId": "B793B57511D3E4E51000E887EC6DE8A4",
        "subType": "drill_map",
        "name": "Tutorial Standard Drill Map"
      }
    },
    "filter": {
      "text": "{Age Range} = 24 and under, 25 to 34, 35 to 44",
      "tree": {
        "type": "predicate_element_list",
        "predicateId": "F619623819724963ABEB08A40429B352",
        "predicateTree": {
          "attribute": {
            "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
            "subType": "attribute",
            "name": "Age Range"
          },
          "elements": [
            {
              "display": "24 and under",
              "elementId": "h1"
            },
            {
              "display": "25 to 34",
              "elementId": "h2"
            },
            {
              "display": "35 to 44",
              "elementId": "h3"
            }
          ],
          "function": "in"
        }
      }
    }
  },
  "grid": {
    "viewTemplate": {
      "rows": {
        "units": [
          {
            "id": "8D679D3C11D3E4981000E787EC6DE8A4",
            "name": "Customer",
            "type": "attribute"
          }
        ],
        "sorts": [
          {
            "target": {
              "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
              "subType": "attribute",
              "name": "Customer"
            },
            "form": {
              "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",
              "subType": "attribute_form_system",
              "name": "Customer DESC 1"
            },
            "order": "ascending",
            "type": "attribute_form",
            "subtotalsPosition": "inherit"
          }
        ],
        "hiddenUnits": [
          {
            "id": "6E069E4C11D3E4E41000E887EC6DE8A4",
            "name": "Customer Age",
            "type": "attribute"
          }
        ]
      },
      "columns": {
        "units": [
          {
            "type": "metrics",
            "elements": [
              {
                "id": "4C05177F11D3E877C000B3B2D86C964F",
                "name": "Avg Revenue per Customer",
                "subType": "metric",
                "thresholds": [
                  {
                    "format": [],
                    "condition": {
                      "text": "Customer = Aaby:Alen",
                      "tree": {
                        "type": "predicate_element_list",
                        "predicateId": "6B59B92713244E688315D2B76E10169F",
                        "predicateTree": {
                          "attribute": {
                            "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                            "subType": "attribute",
                            "name": "Customer"
                          },
                          "elements": [
                            {
                              "display": "Aaby:Alen",
                              "elementId": "h7796"
                            }
                          ],
                          "function": "in"
                        }
                      }
                    },
                    "name": "New Threshold",
                    "replaceText": "",
                    "semantics": "number",
                    "scope": "metric_only",
                    "enable": true
                  }
                ]
              }
            ]
          }
        ],
        "sorts": [
          {
            "target": {
              "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
              "subType": "attribute",
              "name": "Customer"
            },
            "form": {
              "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",
              "subType": "attribute_form_system",
              "name": "Customer DESC 1"
            },
            "order": "ascending",
            "type": "attribute_form",
            "subtotalsPosition": "inherit"
          }
        ],
        "hiddenMetrics": [
          {
            "id": "82156AB211D40978C000C7906B98494F",
            "name": "Count of Customers",
            "subType": "metric"
          }
        ]
      },
      "pageBy": {
        "units": [
          {
            "id": "8D679D4B11D3E4981000E787EC6DE8A4",
            "name": "Region",
            "type": "attribute"
          }
        ],
        "sorts": []
      },
      "drillMap": {
        "objectId": "B793B57511D3E4E51000E887EC6DE8A4",
        "subType": "drill_map",
        "name": "Tutorial Standard Drill Map"
      },
      "subtotals": [
        {
          "name": "Total",
          "type": "subtotal_definition",
          "appliedLevel": {
            "type": "by_position",
            "rows": "all_subtotals",
            "columns": "all_subtotals",
            "pageBy": "grand_total"
          },
          "subtotal": {
            "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
            "subType": "system_subtotal",
            "name": "Total"
          }
        }
      ]
    },
    "viewFilter": {
      "text": "Region = Canada, Central, England",
      "tree": {
        "type": "predicate_element_list",
        "predicateId": "4C4C4F13D2F54BCD87BDCF60479BCEFE",
        "predicateTree": {
          "attribute": {
            "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Region"
          },
          "elements": [
            {
              "display": "Canada",
              "elementId": "h11"
            },
            {
              "display": "Central",
              "elementId": "h4"
            },
            {
              "display": "England",
              "elementId": "h8"
            }
          ],
          "function": "in"
        }
      }
    }
  },
  "timezone": {
    "objectId": "7E514996278648AB8F2B5D6DA2ED87AB",
    "subType": "timezone_custom",
    "name": "Custom TZ2"
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {
        "name": "ConsolidationSubtotal",
        "value": "true",
        "type": "boolean",
        "resolvedLocation": "default"
      },
      // Here we omit some vldbProperties to shorten the response body
      // You can send the request in practice to get a full list of the vldbProperties
      "[VLDB Syntax].[Max Columns in Wildcard]": {
        "name": "Max Columns in Wildcard",
        "value": "0",
        "type": "int32",
        "resolvedLocation": "default"
      }
    },
    "metricJoinTypes": {
      "82156AB211D40978C000C7906B98494F": {
        "metric": {
          "objectId": "82156AB211D40978C000C7906B98494F",
          "subType": "metric",
          "name": "Count of Customers"
        },
        "joinType": "inner",
        "resolvedLocation": "default"
      },
      "4C05177F11D3E877C000B3B2D86C964F": {
        "metric": {
          "objectId": "4C05177F11D3E877C000B3B2D86C964F",
          "subType": "metric",
          "name": "Avg Revenue per Customer"
        },
        "joinType": "inner",
        "resolvedLocation": "default"
      }
    },
    "attributeJoinTypes": {
      "8D679D3C11D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Customer"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      },
      "6E069E4C11D3E4E41000E887EC6DE8A4": {
        "attribute": {
          "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
          "subType": "attribute",
          "name": "Customer Age"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      },
      "8D679D4B11D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Region"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      }
    },
    "drillOptions": {
      "drillingEnableReportDrilling": {
        "value": true,
        "resolvedLocation": "default"
      },
      // Here we omit some drillOptions to shorten the response body
      // You can send the request in practice to get a full list of the drillOptions
      "drillingFilterOption": {
        "value": 0,
        "resolvedLocation": "default"
      }
    },
    "useDefaultEvaluationOrder": true,
    "promptOrdering": []
  }
}
```

Sample Response Code: 201 (A new normal report is created within an instance successfully.)

### 2. Save the report instance to the metadata

By finishing step 1, we can get the object ID of the new report from the information field of the response body, which is `FB7816D149C8AC0573CC55829E56F217`. We can also get the report instance ID named "X-MSTR-MS-Instance" from the response header, which is `E3420B88420E0A58606C268776553815`. Now we can save the report maintained by the report instance. There are two APIs that you can use to save the report instance to the metadata:

#### Endpoint: [POST /api/model/reports/{reportId}/instance/save](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/post_api_model_reports__reportId__instances_save)

You may customize the report-saving process by setting "promptOptions". This field is optional, it can be set to control if filters and template of the report will be prompted next time you open the report, and if current answers to the prompts will be set as the default ones. The sample body of it is like:

```json
{
  "promptOptions": {
    "saveAsWithAnswers": true,
    "saveAsFilterWithPrompts": true,
    "saveAsTemplateWithPrompts": true
  }
}
```

:::tip

- "saveAsWithAnswers" controls whether current answers to the prompts will be set as the default ones next time you open the report.
- "saveAsFilterWithPrompts" controls whether filters will be prompted next time you open the report "saveAsTemplateWithPrompts" controls whether template will be prompted next time you open the report

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
"X-MSTR-MS-Instance": "E3420B88420E0A58606C268776553815"
```

Sample Request Body:

```json
{
  "promptOptions": {
    "saveAsWithAnswers": true,
    "saveAsFilterWithPrompts": true,
    "saveAsTemplateWithPrompts": true
  }
}
```

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FB7816D149C8AC0573CC55829E56F217/instances/save' -H 'X-MSTR-MS-Instance: E3420B88420E0A58606C268776553815' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'Content-Type: application/json' -H 'Cookie: JSESSIONID=7D3DFD0831B0768A1AEB0A16D87980E2; iSession=nhjtt29mf7lubg776oe4f8psbq' -d '{
    "promptOptions": {
        "saveAsWithAnswers": true,
        "saveAsFilterWithPrompts": true,
        "saveAsTemplateWithPrompts": true
    }
}'
```

Sample Response Body: you can view the object ID of the newly created normal report

```json
{
  "objectId": "FBB2156F4B969E2E03B1E4B733A422C3"
}
```

Sample Response Code: 200 (The new normal report is saved successfully.)

#### Endpoint: [POST /api/model/reports/{reportId}/instance/saveAs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/post_api_model_reports__reportId__instances_saveAs)

By using the saveAs API, you can not only set "promptOptions", but also customize "overwrite", "name", and "destinationFolderId":

:::tip

- "overwrite" parameter is optional. If it is set to "true", any existing report with the same name under the same path will be overwritten. Be careful if it is set to false or omitted, because you will not be able to save the report if there is an existing report with the same name under the same path.
- "name" and "destinationFolderId" are required parameters. The former represents the name of the new report, while the latter represents the destination folder where the new report will locate. If you use the saveAs API, the report name and destination folder you set when creating the report will be forfeited.

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
"X-MSTR-MS-Instance": "E3420B88420E0A58606C268776553815"
```

Sample Request Body:

```json
{
  "overwrite": true,
  "name": "New Report",
  "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
}
```

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FB7816D149C8AC0573CC55829E56F217/instances/saveAs' -H 'X-MSTR-MS-Instance: E3420B88420E0A58606C268776553815' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Content-Type: application/json' -H 'Cookie: JSESSIONID=8675111815BAE910B01E563E274C3FCE; iSession=u7jvh2q4fl3kismf41nulb6gvj' -d'{
    "overwrite": true,
    "name": "New Report",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
}'
```

Sample Response Body: you can view the object ID of the newly created normal report

```json
{
  "objectId": "FBB2156F4B969E2E03B1E4B733A422C3"
}
```

Sample Response Code: 200 (The new normal report is saved successfully.)

## More examples

Here comes examples of creating FFSQL report and subset report. The save processes of them are the same as the normal report, so only the request and response are shown.

:::info

FFSQL report and subset report don’t have data source filter and report limit.

:::

### Example 1: Create a new FFSQL report

To create a FFSQL report, first we need to set "sourceType" to "custom_sql_free_form" in report’s definition.

We want to create an FFSQL report with an attribute "Month_ID" and a metric "Cost". The attribute has a system form "ID". In the report’s physical table, it defines two new columns, these two columns are mapped to the attribute’s form and the metric by their expression. There is also a "sqlExpression" field in the report’s physical table, which specifies how SQL query retrieves raw data from the data warehouse. The data warehouse is referred to in "dataSource" field.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body:

```json
{
  "information": {
    "name": "New FFSQL Report",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "sourceType": "custom_sql_free_form",
  "dataSource": {
    "table": {
      "physicalTable": {
        "columns": [
          {
            "name": "Month_ID (ID)",
            "dataType": {
              "type": "integer",
              "precision": 4,
              "scale": 0
            }
          },
          {
            "name": "Cost",
            "dataType": {
              "type": "double",
              "precision": 18,
              "scale": 0
            }
          }
        ],
        "sqlExpression": {
          "tree": {
            "function": "concat_no_blank",
            "children": [
              {
                "type": "constant",
                "variant": {
                  "type": "string",
                  "value": "select month_id,tot_cost from city_mnth_sls "
                }
              }
            ],
            "type": "operator"
          }
        }
      },
      "attributes": [
        {
          "id": "C4E347CF456CAA9DB04FBFBC1419CB87",
          "name": "Month_ID",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "category": "ID",
              "type": "system",
              "displayFormat": "number",
              "expression": {
                "tree": {
                  "type": "column_reference",
                  "name": "Month_ID (ID)"
                }
              }
            }
          ]
        }
      ],
      "metrics": [
        {
          "id": "70F30EAF437B6694D7B0749975671B69",
          "name": "Cost",
          "dataType": {
            "type": "numeric",
            "precision": 0,
            "scale": 0
          },
          "expression": {
            "tree": {
              "type": "column_reference",
              "name": "Cost"
            }
          }
        }
      ],
      "dataSource": {
        "objectId": "A528E3A1436D9C08318735BC915FCF13",
        "subType": "db_role_import",
        "name": "tutorial_wh"
      }
    }
  },
  "grid": {
    "viewTemplate": {
      "rows": {
        "units": [
          {
            "id": "C4E347CF456CAA9DB04FBFBC1419CB87",
            "name": "Month_ID",
            "type": "attribute",
            "forms": [
              {
                "id": "45C11FA478E745FEA08D781CEA190FE5"
              }
            ]
          }
        ],
        "sorts": []
      },
      "columns": {
        "units": [
          {
            "type": "metrics",
            "elements": [
              {
                "id": "70F30EAF437B6694D7B0749975671B69",
                "name": "Cost",
                "subType": "metric"
              }
            ]
          }
        ],
        "sorts": []
      },
      "pageBy": {}
    },
    "viewFilter": {}
  },
  "timezone": {}
}
```

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports' -H 'X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Content-Type: application/json' -H 'Cookie: JSESSIONID=480FFA288707400F78B1FF8B9BD10B55; iSession=te28rj6a3b1kofv7t2jg29imuv' -d '{
  "information": {
      "name": "New FFSQL Report",
      "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "sourceType": "custom_sql_free_form",
  "dataSource": {
    "table": {
      "physicalTable": {
        "columns": [
          {
            "name": "Month_ID (ID)",
            "dataType": {
              "type": "integer",
              "precision": 4,
              "scale": 0
            }
          },
          {
            "name": "Cost",
            "dataType": {
              "type": "double",
              "precision": 18,
              "scale": 0
            }
          }
        ],
        "sqlExpression": {
          "tree": {
            "function": "concat_no_blank",
            "children": [
              {
                "type": "constant",
                "variant": {
                  "type": "string",
                  "value": "select month_id,tot_cost from city_mnth_sls "
                }
              }
            ],
            "type": "operator"
          }
        }
      },
      "attributes": [
        {
          "id": "C4E347CF456CAA9DB04FBFBC1419CB87",
          "name": "Month_ID",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "category": "ID",
              "type": "system",
              "displayFormat": "number",
              "expression": {
                "tree": {
                  "type": "column_reference",
                  "name": "Month_ID (ID)"
                }
              }
            }
          ]
        }
      ],
      "metrics": [
        {
          "id": "70F30EAF437B6694D7B0749975671B69",
          "name": "Cost",
          "dataType": {
            "type": "numeric",
            "precision": 0,
            "scale": 0
          },
          "expression": {
            "tree": {
              "type": "column_reference",
              "name": "Cost"
            }
          }
        }
      ],
      "dataSource": {
        "objectId": "A528E3A1436D9C08318735BC915FCF13",
        "subType": "db_role_import",
        "name": "tutorial_wh"
      }
    }
  },
  "grid": {
    "viewTemplate": {
      "rows": {
        "units": [
          {
            "id": "C4E347CF456CAA9DB04FBFBC1419CB87",
            "name": "Month_ID",
            "type": "attribute",
            "forms": [
              {
                "id": "45C11FA478E745FEA08D781CEA190FE5"
              }
            ]
          }
        ],
        "sorts": []
      },
      "columns": {
        "units": [
          {
            "type": "metrics",
            "elements": [
              {
                "id": "70F30EAF437B6694D7B0749975671B69",
                "name": "Cost",
                "subType": "metric"
              }
            ]
          }
        ],
        "sorts": []
      },
      "pageBy": {}
    },
    "viewFilter": {}
  },
  "timezone": {}
}'
```

Sample Response Body:

You can view the new report's definition in the body of the response.

```json
{
  "information": {
    "versionId": "00000000000000000000000000000000",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "99A8422E4E3FA4B8249868ABD4B492EB",
    "subType": "report_grid",
    "name": "New FFSQL Report",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "sourceType": "custom_sql_free_form",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "C4E347CF456CAA9DB04FBFBC1419CB87",
          "name": "Month_ID",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5"
            }
          ]
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "70F30EAF437B6694D7B0749975671B69",
              "name": "Cost",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "table": {
      "physicalTable": {
        "columns": [
          {
            "id": "A463D3D4905F4D41A0F5942E8215DEED",
            "name": "Month_ID (ID)",
            "dataType": {
              "type": "integer",
              "precision": 4,
              "scale": 0
            }
          },
          {
            "id": "A709FB8A4E30454B9CFA74E8ED36A140",
            "name": "Cost",
            "dataType": {
              "type": "double",
              "precision": 18,
              "scale": 0
            }
          }
        ],
        "sqlExpression": {
          "tree": {
            "function": "concat_no_blank",
            "children": [
              {
                "type": "constant",
                "variant": {
                  "type": "string",
                  "value": "select month_id,tot_cost from city_mnth_sls "
                }
              }
            ],
            "type": "operator"
          }
        }
      },
      "attributes": [
        {
          "id": "C4E347CF456CAA9DB04FBFBC1419CB87",
          "name": "Month_ID",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "category": "ID",
              "type": "system",
              "displayFormat": "number",
              "expression": {
                "tree": {
                  "type": "column_reference",
                  "objectId": "A463D3D4905F4D41A0F5942E8215DEED",
                  "name": "Month_ID (ID)"
                }
              }
            }
          ]
        }
      ],
      "metrics": [
        {
          "id": "70F30EAF437B6694D7B0749975671B69",
          "name": "Cost",
          "dataType": {
            "type": "numeric",
            "precision": 0,
            "scale": 0
          },
          "expression": {
            "tree": {
              "type": "column_reference",
              "objectId": "A709FB8A4E30454B9CFA74E8ED36A140",
              "name": "Cost"
            }
          }
        }
      ],
      "dataSource": {
        "objectId": "A528E3A1436D9C08318735BC915FCF13",
        "subType": "db_role_import",
        "name": "tutorial_wh"
      }
    }
  },
  "grid": {
    "viewTemplate": {
      "rows": {
        "units": [
          {
            "id": "C4E347CF456CAA9DB04FBFBC1419CB87",
            "name": "Month_ID",
            "type": "attribute",
            "forms": [
              {
                "id": "45C11FA478E745FEA08D781CEA190FE5"
              }
            ]
          }
        ],
        "sorts": []
      },
      "columns": {
        "units": [
          {
            "type": "metrics",
            "elements": [
              {
                "id": "70F30EAF437B6694D7B0749975671B69",
                "name": "Cost",
                "subType": "metric"
              }
            ]
          }
        ],
        "sorts": []
      },
      "pageBy": {
        "units": [],
        "sorts": []
      }
    },
    "viewFilter": {}
  }
}
```

Sample Response Code: 201 (A new FFSQL report is created successfully.)

### Example 2: Create a new subset report

The sourceType of a subset report is "cube", and the dataSource should refer to a "cube" object as well. We want to create a subset report based on a cube (id: `0D7F983C4D9AA18F36EB68894712F2F1`), with one attribute "Customer" (id: `8D679D3C11D3E4981000E787EC6DE8A4`) and one metric "Count of Customers" (id: `82156AB211D40978C000C7906B98494F`). These attributes should be already included by the cube. Attributes and metrics that are not listed in the requested body will become hiddenUnits and hiddenMetrics.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body:

```json
{
  "information": {
    "name": "New subset Report",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "sourceType": "cube",
  "dataSource": {
    "cube": {
      "objectId": "0D7F983C4D9AA18F36EB68894712F2F1",
      "subType": "report_cube",
      "name": "cube"
    }
  },
  "grid": {
    "viewTemplate": {
      "rows": {
        "units": [
          {
            "id": "8D679D3C11D3E4981000E787EC6DE8A4",
            "name": "Customer",
            "type": "attribute"
          }
        ],
        "sorts": []
      },
      "columns": {
        "units": [
          {
            "type": "metrics",
            "elements": [
              {
                "id": "82156AB211D40978C000C7906B98494F",
                "name": "Count of Customers",
                "subType": "metric"
              }
            ]
          }
        ],
        "sorts": []
      },
      "pageBy": {
        "units": [],
        "sorts": []
      }
    },
    "viewFilter": {}
  }
}
```

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports' -H 'X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Content-Type: application/json' -H 'Cookie: JSESSIONID=480FFA288707400F78B1FF8B9BD10B55; iSession=te28rj6a3b1kofv7t2jg29imuv' -d '{
    "information": {
        "name": "New subset Report",
        "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
    },
    "sourceType": "cube",
    "dataSource": {
        "cube": {
            "objectId": "0D7F983C4D9AA18F36EB68894712F2F1",
            "subType": "report_cube",
            "name": "cube"
        }
    },
    "grid": {
        "viewTemplate": {
            "rows": {
                "units": [
                    {
                        "id": "8D679D3C11D3E4981000E787EC6DE8A4",
                        "name": "Customer",
                        "type": "attribute"
                    }
                ],
                "sorts": []
            },
            "columns": {
                "units": [
                    {
                        "type": "metrics",
                        "elements": [
                            {
                                "id": "82156AB211D40978C000C7906B98494F",
                                "name": "Count of Customers",
                                "subType": "metric"
                            }
                        ]
                    }
                ],
                "sorts": []
            },
            "pageBy": {
                "units": [],
                "sorts": []
            }
        },
        "viewFilter": {}
    }
}'
```

Sample Response Body:

You can view the new report's definition in the body of the response.

```json
{
  "information": {
    "versionId": "00000000000000000000000000000000",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "CCD07F134D1D4FE4BE78639342A5CB86",
    "subType": "report_grid",
    "name": "New subset Report",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "sourceType": "cube",
  "dataSource": {
    "cube": {
      "objectId": "0D7F983C4D9AA18F36EB68894712F2F1",
      "subType": "report_cube",
      "name": "cube"
    }
  },
  "grid": {
    "viewTemplate": {
      "rows": {
        "units": [
          {
            "id": "8D679D3C11D3E4981000E787EC6DE8A4",
            "name": "Customer",
            "type": "attribute"
          }
        ],
        "sorts": []
      },
      "columns": {
        "units": [
          {
            "type": "metrics",
            "elements": [
              {
                "id": "82156AB211D40978C000C7906B98494F",
                "name": "Count of Customers",
                "subType": "metric"
              }
            ]
          }
        ],
        "sorts": [],
        "hiddenMetrics": [
          {
            "id": "4C05175211D3E877C000B3B2D86C964F",
            "name": "Order Count",
            "subType": "metric"
          }
        ]
      },
      "pageBy": {
        "units": [],
        "sorts": []
      }
    },
    "viewFilter": {}
  }
}
```

Sample Response Code: 201 (A new subset report is created successfully.)
