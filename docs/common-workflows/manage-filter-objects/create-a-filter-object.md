---
title: Workflow sample - Create a filter object
sidebar_label: Create a filter object
description: This workflow sample demonstrates how to create a new filter object through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5bb60de6-52e2-43c4-87bc-b404125f96ad?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new filter object through the Modeling service.

1. [Create a changeset](#create-a-changeset)
1. [Create a filter definition](#create-a-new-filter)
1. [Commit the changeset](#commit-the-changeset)
1. [Delete the changeset](#delete-the-changeset)

You want to create a new “Year>2015“ filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

## Create a changeset

Endpoint: [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "8DF1659E9D74484D9D47B9478D4C7D00",
  "dateCreated": "2020-11-17T17:36:31.187294Z",
  "dateModified": "2020-11-17T17:36:31.187308Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

## Create a new filter

Endpoint: [POST /api/model/filters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-ms-postFilter).

You want to create the filter using the “tree” format for the "qualifications”. More examples of creating a new filter are listed below.

To create a filter, in the request body, the filter’s "qualification" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.

When creating an attribute element list qualification, only the “tree“ format is supported.

If the 'tree' format is used, the custom expressions, "expression" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.

When creating a qualification with inline custom expressions, only the "tree" format is supported.

If you are constructing the POST filter request body based on the response of the GET filter call of an existing filter, be aware that any embedded objects (`"isEmbedded":true"`) cannot be used to create a new filter, as the embedded objects are only “local“ to its owner (the existing filter).

Sample Request Header:

```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
   "X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Year > 2015",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_form_qualification",
      "predicateTree": {
        "function": "greater",
        "parameters": [
          {
            "parameterType": "constant",
            "constant": {
              "type": "double",
              "value": "2015.0"
            }
          }
        ],
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
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
```

Sample Curl:

```bash
curl -djectId\\":\\"45C11FA478E745FEA08D781CEA190FE5\\",\\"subType\\":\\"attribute_form_system\\",\\"name\\":\\"ID\\"}}}}}"
```

Sample Response Body: You can view the new filter's definition in the body of the response.

```json
{
  "information": {
    "versionId": "88DF4A68957941EBBBC69B975B2D011F",
    "primaryLocale": "en-US",
    "objectId": "A3EFA30AFC6D4A6C89D0D1F967BD505D",
    "subType": "filter",
    "name": "Year > 2015",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "text": "Year (ID) > 2015",
    "tree": {
      "type": "predicate_form_qualification",
      "predicateId": "43F6594B23BF4510A090F5AB3C44358F",
      "predicateText": "Year (ID) > 2015",
      "predicateTree": {
        "function": "greater",
        "parameters": [
          {
            "parameterType": "constant",
            "constant": {
              "type": "double",
              "value": "2015.0"
            }
          }
        ],
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
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
```

Response Code: 201 (A new filter is created successfully in the changeset.)

## Commit the changeset

Endpoint: [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset).`

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Response Body:

```json
{
  "id": "8DF1659E9D74484D9D47B9478D4C7D00",
  "dateCreated": "2020-11-17T17:42:13.312629Z",
  "dateModified": "2020-11-17T17:44:30.814816Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

## Delete the changeset

Endpoint: [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: \*/\*" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset is deleted successfully.)

## More samples

A filter takes the form of an expression tree over data structures known as predicates. Each predicate represents a single restriction on the available data. The filter expression tree combines predicates together using logical operators.

The following are sample JSON request bodies for creating filters of each type of predicates, and filters combining predicates using logic operators.

- [Create a changeset](#create-a-changeset)
- [Create a new filter](#create-a-new-filter)
- [Commit the changeset](#commit-the-changeset)
- [Delete the changeset](#delete-the-changeset)
- [More Samples](#more-samples)
  - [Attribute form qualifications](#attribute-form-qualifications)
  - [Attribute element list qualification](#attribute-element-list-qualification)
  - [Metric set qualification](#metric-set-qualification)
  - [Relationship set qualification](#relationship-set-qualification)
  - [Shortcut-to-a-report qualification](#shortcut-to-a-report-qualification)
  - [Shortcut-to-a-filter qualification](#shortcut-to-a-filter-qualification)
  - [Shortcut-to-a-prompt qualification](#shortcut-to-a-prompt-qualification)
  - [Attribute joint element list qualification](#attribute-joint-element-list-qualification)
  - [Custom expression qualification](#custom-expression-qualification)
  - [Logic operators](#logic-operators)

### Attribute form qualifications

Create a filter based on attribute forms.

`"type"`: `"predicate_form_qualification"`

Example 1: You want to create a new "Year@ID>2015" filter.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Year > 2015",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_form_qualification",
      "predicateTree": {
        "function": "greater",
        "parameters": [
          {
            "parameterType": "constant",
            "constant": {
              "type": "double",
              "value": "2015.0"
            }
          }
        ],
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
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
```

Example 2: You want to create a new filter, "Year@ID in list (2015, 2017)", with Year@ID in the list of (2015, 2017).

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Year@ID in list (2015, 2017)",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_form_qualification",
      "predicateTree": {
        "function": "in",
        "parameters": [
          {
            "parameterType": "array",
            "constantsType": "double",
            "constants": ["2015.0", "2017.0"]
          }
        ],
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
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
```

### Attribute element list qualification

Create a filter based on attribute elements.

`"type"`: `"predicate_element_list"`

Example: You want to create a new filter with Category in Books and Electronics.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Category in Books and Electronics",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_element_list",
      "predicateTree": {
        "attribute": {
          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Category"
        },
        "elements": [
          {
            "display": "Electronics",
            "elementId": "h2"
          },
          {
            "display": "Books",
            "elementId": "h1"
          }
        ],
        "function": "in"
      }
    }
  }
}
```

### Metric set qualification

Create a filter based on a metric value or rank.

`"type"`: `"predicate_metric_qualification"`

Example 1: You want to create a new "Cost>1K" filter, with Cost larger than 1000.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Cost > 1K",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
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
        "isIndependent": 1,
        "nullInclude": 0
      }
    }
  }
}
```

Example 2: You want to create a new filter that returns the top 5 Revenue.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Revenue Top 5",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_metric_qualification",
      "predicateTree": {
        "function": "less_equal",
        "parameters": [
          {
            "parameterType": "constant",
            "constant": {
              "type": "int32",
              "value": "5"
            }
          }
        ],
        "levelType": "none",
        "metric": {
          "objectId": "4C05177011D3E877C000B3B2D86C964F",
          "subType": "metric",
          "name": "Revenue"
        },
        "metricFunction": "rank_descend",
        "isIndependent": 1,
        "nullInclude": 0
      }
    }
  }
}
```

### Relationship set qualification

Create a filter based on relationships between attributes.

`"type"`: `"predicate_relationship"`

Example: You want to create a new filter to return Customers with Age between 25 and 35.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Customer between 25-35",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_relationship",
      "predicateTree": {
        "level": [
          {
            "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Customer"
          }
        ],
        "guide": null,
        "isIndependent": 1
      },
      "children": [
        {
          "type": "predicate_form_qualification",
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
      ]
    }
  }
}
```

### Shortcut-to-a-report qualification

Create a filter based on the results of an existing report.

`"type"`: `"predicate_report_qualification"`

Example: You want to create a new filter using an existing report as a qualification.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Shortcut to a report",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_report_qualification",
      "predicateTree": {
        "report": {
          "objectId": "62C8D5494DC4CDBE7C24568D4B687C31",
          "subType": "report_grid",
          "name": "Report Object"
        }
      }
    }
  }
}
```

### Shortcut-to-a-filter qualification

Create a filter based on an existing filter.

`"type"`: `"predicate_filter_qualification"`

Example: You want to create a new filter using an existing filter as a qualification.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Shortcut To Filter",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_filter_qualification",
      "predicateTree": {
        "filter": {
          "objectId": "320081BF47ECD3DEB07529B1BEF4271B",
          "subType": "filter",
          "name": "Filter Object"
        },
        "isIndependent": 1
      }
    }
  }
}
```

### Shortcut-to-a-prompt qualification

Create a filter based on an existing qualification prompt.

`"type"`: `"predicate_prompt_qualification"`

Example: You want to create a new filter using an existing qualification prompt.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Shortcut To Prompt",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_prompt_qualification",
      "predicateTree": {
        "prompt": {
          "objectId": "BC56872248A40C03B020C8B847537C6F",
          "subType": "prompt_expression",
          "name": "Prompt Qualification on Customer Age"
        }
      }
    }
  }
}
```

### Attribute joint element list qualification

Create a filter based on attribute elements from different attributes.

`"type"`: `"predicate_joint_element_list"`

Example: You want to create a new filter that returns the data for Books in the Northeast, and Electronics in the Southwest.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Category & Region",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "type": "predicate_joint_element_list",
      "predicateTree": {
        "level": [
          {
            "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Category"
          },
          {
            "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Region"
          }
        ],
        "tuples": [
          [
            {
              "display": "Books",
              "elementId": "h1"
            },
            {
              "display": "Northeast",
              "elementId": "h1"
            }
          ],
          [
            {
              "display": "Electronics",
              "elementId": "h2"
            },
            {
              "display": "Southwest",
              "elementId": "h7"
            }
          ]
        ]
      }
    }
  }
}
```

### Custom expression qualification

Create a filter based on a custom expression.

`"type"`: `"predicate_custom"`

Please refer to [Workflow Sample: Create a New Filter Object using a Custom Expression](./create-a-filter-object-with-a-custom-expression.md).

### Logic operators

Create a filter using logic operators to combine multiple predicates.

Example: You want to create a new filter that returns the data for female customers of all ages, and males between the ages of 25 and 35.

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
    "name": "Females & Males(25-35)",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tree": {
      "function": "or",
      "children": [
        {
          "type": "predicate_form_qualification",
          "predicateTree": {
            "function": "equals",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "string",
                  "value": "Female"
                }
              }
            ],
            "attribute": {
              "objectId": "4151F1304F00A51EB13BCF84283396BE",
              "subType": "attribute",
              "name": "Customer Gender"
            },
            "form": {
              "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "subType": "attribute_form_system",
              "name": "DESC"
            },
            "dataLocale": "en-US"
          }
        },
        {
          "function": "and",
          "children": [
            {
              "type": "predicate_form_qualification",
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
            },
            {
              "type": "predicate_form_qualification",
              "predicateTree": {
                "function": "equals",
                "parameters": [
                  {
                    "parameterType": "constant",
                    "constant": {
                      "type": "string",
                      "value": "Male"
                    }
                  }
                ],
                "attribute": {
                  "objectId": "4151F1304F00A51EB13BCF84283396BE",
                  "subType": "attribute",
                  "name": "Customer Gender"
                },
                "form": {
                  "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",
                  "subType": "attribute_form_system",
                  "name": "DESC"
                },
                "dataLocale": "en-US"
              }
            }
          ],
          "type": "operator"
        }
      ],
      "type": "operator"
    }
  }
}
```
