---
title: Update the definition of an existing report
description: You can use REST APIs to update an existing report object through Modeling service.
---

<Available since="2021 Update 7" />

You can use REST APIs to update an existing report object through Modeling service.

## Update the definition of an existing report

In this sample workflow, we want to update an existing report object "New Normal Report" (report ID: `FB7816D149C8AC0573CC55829E56F217`) in project "Microstrategy Tutorial" (project ID: `B19DEDCC11D4E0EFC000EB9495D0F44F`), we have just created it in Workflow Sample: Create a New Report.

:::info

Obtain the authorization token needed to execute the request using POST `/api/auth/login`.

Obtain the project ID from GET `/api/projects`.

:::

### 1. Create a report instance

:::info

A report instance is required for getting, creating, updating the report as well as report’s derived elements. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.

:::

Endpoint: [POST /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FB7816D149C8AC0573CC55829E56F217/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'X-MSTR-ProjectId: B19DEDCC11D4E0EFC000EB9495D0F44F'
```

Sample Response Body:

We can get the report instance ID named "X-MSTR-MS-Instance" from the response header, which is `25114D344481A2EA0400A1AD21450BED`, the same as the "id" field in the response body. The report instance ID will be used in the next few steps to hold the report changes and save them into the metadata.

```json
{
  "id": "25114D344481A2EA0400A1AD21450BED"
}
```

Sample Response Code: 201 (A new report instance is created successfully)

### 2. Update an existing report

User can provide "information", "sourceType", "dataSource", "grid", "timezone" and "advancedProperties" in the request body, for the fields not given, they will not be updated. For detailed explanations of each fields, please refer Workflow Sample: Create a New Report .

For the report existed in the metadata, the information field can only change description part. The sourceType cannot be updated to another type.

Endpoint: [POST /api/model/reports/{reportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-putReport)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
"X-MSTR-MS-Instance": "25114D344481A2EA0400A1AD21450BED"
```

Sample Request Body:

```json
{
  "information": {
    "description": "Here is an example description."
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
            "subType": "metric",
            "limit": {
              "text": "{Count of Customers} > 1",
              "tree": {
                "type": "predicate_metric_qualification",
                "predicateText": "{Count of Customers} > 1",
                "predicateTree": {
                  "function": "greater",
                  "parameters": [
                    {
                      "parameterType": "constant",
                      "constant": {
                        "type": "double",
                        "value": "1.0"
                      }
                    }
                  ],
                  "levelType": "none",
                  "metric": {
                    "objectId": "82156AB211D40978C000C7906B98494F",
                    "subType": "metric",
                    "name": "Count of Customers"
                  },
                  "metricFunction": "value",
                  "isIndependent": 0,
                  "nullInclude": 0
                }
              }
            }
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

To return the updated report’s definition with its filters in all formats and its updated advanced properties, we need to set showExpressionAs = tokens, showFilterTokens = true and showAdvancedProperties = true. Here we only use showExpressionAs = tree and showAdvancedProperties = true, you can chose other combinations of these settings to get defferent representations of the response body.

```bash
curl -X PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FB7816D149C8AC0573CC55829E56F217?showExpressionAs=tree&showAdvancedProperties=true' -H 'X-MSTR-MS-Instance: 25114D344481A2EA0400A1AD21450BED' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'Content-Type: application/json' -H 'Cookie: JSESSIONID=C34C4207807E82796747870E681790B3; iSession=vslb4k2o4api370rf2jq2htbm2' -d '{
  "information": {
    "description": "Here is an example description."
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
            "subType": "metric",
            "limit": {
              "text": "{Count of Customers} > 1",
              "tree": {
                "type": "predicate_metric_qualification",
                "predicateText": "{Count of Customers} > 1",
                "predicateTree": {
                  "function": "greater",
                  "parameters": [
                    {
                      "parameterType": "constant",
                      "constant": {
                        "type": "double",
                        "value": "1.0"
                      }
                    }
                  ],
                  "levelType": "none",
                  "metric": {
                    "objectId": "82156AB211D40978C000C7906B98494F",
                    "subType": "metric",
                    "name": "Count of Customers"
                  },
                  "metricFunction": "value",
                  "isIndependent": 0,
                  "nullInclude": 0
                }
              }
            }
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
    "dateCreated": "2022-09-06T06:07:05.653Z",
    "dateModified": "2022-09-06T06:55:15.499Z",
    "versionId": "6750B9B640E9A66EAE06E3A00D98F731",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "FB7816D149C8AC0573CC55829E56F217",
    "subType": "report_grid",
    "name": "New Normal Report",
    "description": "Here is an example description.",
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
              "predicateId": "924CBF662E2A4BF3A569121A13978F22",
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
        "predicateId": "6032EE9672464ADAA22968244C085F15",
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
                        "predicateId": "79FAD72556CF41D3B880E0E2BB855EC6",
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
            "subType": "metric",
            "limit": {
              "text": "{Count of Customers} > 1",
              "tree": {
                "type": "predicate_metric_qualification",
                "predicateId": "F70D258F89D5470899B894914510800A",
                "predicateText": "{Count of Customers} > 1",
                "predicateTree": {
                  "function": "greater",
                  "parameters": [
                    {
                      "parameterType": "constant",
                      "constant": {
                        "type": "double",
                        "value": "1.0"
                      }
                    }
                  ],
                  "levelType": "none",
                  "metric": {
                    "objectId": "82156AB211D40978C000C7906B98494F",
                    "subType": "metric",
                    "name": "Count of Customers"
                  },
                  "metricFunction": "value",
                  "isIndependent": 0,
                  "nullInclude": 0
                }
              }
            }
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
        "predicateId": "B30A6EAF46034369857B4DBC91AB2400",
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

Sample Response Code: 200 (The report’s definition is updated successfully in the report instance)

### 3. Save the report instance

Endpoint: [POST /api/model/reports/{reportId}/instances/save](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/post_api_model_reports__reportId__instances_save)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
"X-MSTR-MS-Instance": "25114D344481A2EA0400A1AD21450BED"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FB7816D149C8AC0573CC55829E56F217/instances/save' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'X-MSTR-MS-Instance: 25114D344481A2EA0400A1AD21450BED' -H 'Cookie: JSESSIONID=29CD542A175EC6F49A76524E80965F2E; iSession=vslb4k2o4api370rf2jq2htbm2'
```

Sample Response Body:

```json
{
  "objectId": "FB7816D149C8AC0573CC55829E56F217"
}
```

Sample Response Code: 200 (The changes are saved in metadata successfully.)

### 4. Delete the report instance

Endpoint: [DELETE /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
"X-MSTR-MS-Instance": "25114D344481A2EA0400A1AD21450BED"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FB7816D149C8AC0573CC55829E56F217/instances' -H 'X-MSTR-MS-Instance: 25114D344481A2EA0400A1AD21450BED' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'Cookie: JSESSIONID=DFCB945B0A0DD959D26BA05F9AE20B3B; iSession=vslb4k2o4api370rf2jq2htbm2'
```

Sample Response Body: Empty

Sample Response Code: 204 (The report instance has been deleted successfully.)
