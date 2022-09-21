---
title: Workflow Sample - Create a Security Filter Object
sidebar_label: Create a Security Filter Object
description: This workflow sample demonstrates how to create a new security filter object through the Modeling service.
---

::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bcd7feb9-e96b-45db-aa51-a206d7842524?ctx=documentation).

:::

This workflow sample demonstrates how to create a new security filter object through the Modeling service.

1. [Create a changeset.](#create-a-changeset)
1. [Create a security filter.](#create-a-security-filter)
1. [Commit a changeset.](#commit-a-changeset)
1. [Delete the changeset.](#delete-the-changeset)

Additional samples are provided in [More Samples](#more-samples).

In this workflow sample, you want to create a "Year > 2015" security filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder ID is `98FE182C2A10427EACE0CD30B6768258`. The MicroStrategy Tutorial project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [`GET /api/projects`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

## Create a changeset

Use [`POST /api/model/changesets`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

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

{ "id": "8DF1659E9D74484D9D47B9478D4C7D00", "dateCreated": "2020-11-17T17:36:31.187294Z", "dateModified": "2020-11-17T17:36:31.187308Z", "status": "Ready", "schemaEdit": false, "userName": "MSTR User", "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754", "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233", "userDateNumberLocale": "en-US", "userMetadataLocale": "en-US", "userWarehouseLocale": "en-US" }

Sample Response Code: 201 (A new changeset is created successfully.)

## Create a security filter

Use [`POST /api/model/securityFilters`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/postSecurityFilter) with `"tree"` format for the `"qualifications"`. [More examples](#more-samples) of creating a new security filter are listed further below

To create a security filter, in the request body, the security filter’s "qualification" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.

When creating an attribute element list qualification, only the “tree“ format is supported.

When creating a qualification with inline custom expressions, only the "tree" format is supported.

Any embedded objects (`"isEmbedded":true"`) cannot be used to create a new security filter.

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
    "subType": "md_security_filter",
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
  },
  "topLevel": [],
  "bottomLevel": []
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d '{"information":{"subType":"filter","name":"Year > 2015","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"2015.0"}}],"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"form":{"objectId":"45C11FA478E745FEA08D781CEA190FE5","subType":"attribute_form_system","name":"ID"}}}}}'
```

Sample Response Body:

You can view the new filter's definition in the body of the response.

```json
{
  "information": {
    "versionId": "88DF4A68957941EBBBC69B975B2D011F",
    "primaryLocale": "en-US",
    "objectId": "A3EFA30AFC6D4A6C89D0D1F967BD505D",
    "subType": "md_security_filter",
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
  },
  "topLevel": [],
  "bottomLevel": []
}
```

Response Code: 201 (A new security filter is created successfully in the changeset.)

## Commit a changeset

Use [`POST /api/model/changesets/{ChangesetId}/commit`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

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

Use [`DELETE /api/model/changesets/{ChangesetId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)

## More Samples

A security filter takes the form of an expression tree over data structures known as predicates. Each predicate represents a single restriction on the available data. The security filter expression tree combines predicates together using logical operators.

In this section we provide sample request body JSON for creating security filters of each predicate type. Security filters combine predicates using logic operators.

- [1. Create a changeset using `POST /api/model/changesets`](#create-a-changeset)
- [2. Create a security filter using `POST /api/model/securityFilters` with `"tree"` format for the `"qualifications"`.](#create-a-security-filter)
- [3. Commit a changeset using `POST /api/model/changesets/{ChangesetId}/commit`](#commit-a-changeset)
- [4. Delete the changeset using `DELETE /api/model/changesets/{ChangesetId}`](#delete-the-changeset)
- More Samples
  - [Attribute Form Qualification](#attribute-form-qualification)
  - [Attribute Element List Qualification](#attribute-element-list-qualification)
  - [Shortcut-to-a-Filter Qualification](#shortcut-to-a-filter-qualification)
  - [Attribute Join Element List Qualification](#attribute-join-element-list-qualification)
  - [Custom Expression Qualification](#custom-expression-qualification)
  - [Logic Operators](#logic-operators)
  - [Attribute Form Qualification with Top/Bottom Level](#attribute-form-qualification-with-topbottom-level)

### Attribute Form Qualification

You can create a security filter based on attribute forms using `"type": "predicate_form_qualification"`.

The following example demonstrates creating a new security filter where Year@ID > 2015.

```json
{
  "information": {
    "subType": "md_security_filter",
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
  },
  "topLevel": [],
  "bottomLevel": []
}
```

The following example demonstrates creating a new security filter where Year@ID is one of the items in the [2015, 2017] list.

```json
{
  "information": {
    "subType": "md_security_filter",
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
  },
  "topLevel": [],
  "bottomLevel": []
}
```

### Attribute Element List Qualification

You can create a security filter based on attribute elements using `"type": "predicate_element_list"`.

The following example demonstrates creating a new security filter with Category in Books and Electronics.

```json
{
  "information": {
    "subType": "md_security_filter",
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
  },
  "topLevel": [],
  "bottomLevel": []
}
```

### Shortcut-to-a-Filter Qualification

You can create a security filter based on an existing filter using `"type": "predicate_filter_qualification"`.

The following example demonstrates creating a new security filter using an existing filter as a qualification.

```json
{
  "information": {
    "subType": "md_security_filter",
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
  },
  "topLevel": [],
  "bottomLevel": []
}
```

### Attribute Join Element List Qualification

You can create a security filter based on attribute elements from different attributes using `"type": "predicate_joint_element_list"`.

The following example demonstrates creating a new security filter that returns the data for Books in the Northeast and Electronics in the Southwest.

```json
{
  "information": {
    "subType": "md_security_filter",
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
  },
  "topLevel": [],
  "bottomLevel": []
}
```

### Custom Expression Qualification

You can create a security filter based on a custom expression using `"type": "predicate_custom"`. See [Workflow Sample: Create a Security Filter Object Using a Custom Expression](./create-a-security-filter-object-using-a-custom-expression.md) for more information.

### Logic Operators

You can create a security filter using logic operators to combine multiple predicates.

The following example demonstrates creating a new security filter that returns the data for all females and males between the ages of 25-35.

```json
{
  "information": {
    "subType": "md_security_filter",
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

### Attribute Form Qualification with Top/Bottom Level

Top and bottom range attributes place aggregation ceilings and floors on metrics used on a report. If neither a top nor a bottom range attribute is specified, the security filter is applied to every level of analysis.

The following example demonstrates creating a new security filter that includes all years greater than 2015.

```json
{
  "information": {
    "subType": "md_security_filter",
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
  },
  "topLevel": [
    {
      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
      "subType": "attribute",
      "name": "Year"
    }
  ],
  "bottomLevel": []
}
```
