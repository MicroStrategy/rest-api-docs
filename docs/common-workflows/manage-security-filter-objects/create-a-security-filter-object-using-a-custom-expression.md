---
title: Workflow Sample - Create a Security Filter Object Using a Custom Expression
sidebar_label: Create a Security Filter Object Using a Custom Expression
description: This workflow sample demonstrates how to create a security filter definition through the Modeling service using a custom expression.
---

This workflow sample demonstrates how to create a security filter definition through the Modeling service using a custom expression.

- [1. Create a changeset using `POST /api/model/changesets`](#1-create-a-changeset-using-post-apimodelchangesets)
- [2. Create a security filter using a custom expression with `POST /api/model/securityFilters`](#2-create-a-security-filter-using-a-custom-expression-with-post-apimodelsecurityfilters)
- [3. Commit the changeset using `POST /api/model/changesets/{ChangesetId}/commit`](#3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit)
- [4. Delete the changeset using `DELETE /api/model/changesets/{ChangesetId}`](#4-delete-the-changeset-using-delete-apimodelchangesetschangesetid)
- [More Samples](#more-samples)
  - [Escape Sequences for Full Paths](#escape-sequences-for-full-paths)
  - [Escape Sequences for Double Quotes](#escape-sequences-for-double-quotes)
  - [Escape Sequences for the ApplyComparison Function](#escape-sequences-for-the-applycomparison-function)
  - [Parsed Tokens](#parsed-tokens)

Additional examples are provided in [More Samples](#more-samples).

In this workflow sample, you want to create a new security filter object to qualification for the last five years. The custom expression is `“(Year(CurrentDate()) - 5)< Year@ID”`. Save the security filter under the Public Objects folder in the MicroStrategy Tutorial project. The folder ID is `98FE182C2A10427EACE0CD30B6768258`. The MicroStrategy Tutorial project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [`GET /api/projects`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## 1. Create a changeset using [`POST /api/model/changesets`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

## 2. Create a security filter using a custom expression with [`POST /api/model/securityFilters`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/postSecurityFilter)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Construct the Request Body:

Make a copy of the template below and modify the `<filter_name>`, `<destination_folder_id>`, and `<custom_expression>` to construct the request body.

<a name="template_file"></a>

```json
{
  "information": {
    "subType": "md_security_filter",
    "name": "<filter_name>",
    "destinationFolderId": "<destination_folder_id>"
  },
  "qualification": {
    "tokens": [
      {
        "value": "%",
        "type": "character"
      },
      {
        "value": "<custom_expression>"
      }
    ]
  }
}
```

Sample Request Body:

```json
{
  "information": {
    "subType": "md_security_filter",
    "name": "filter_for_last_5_years",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tokens": [
      {
        "value": "%",
        "type": "character"
      },
      {
        "value": "(Year(CurrentDate()) - 5)< Year@ID"
      }
    ]
  }
}
```

Sample Curl:

In this workflow sample, you want to return the newly created security filter and its custom expression in all formats. Therefore, you set `showFilterTokens=true`, `showExpressionAs=tree`, and `showExpressionAs=tokens`.

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters?showFilterTokens=true&showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d '{"information":{"subType":"filter","name":"last_5_years_3","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tokens":[{"value":"%","type":"character"},{"value":"(Year(CurrentDate()) - 5)< Year@ID"}]}}'
```

Sample Response Body:

You can view the new security filter's definition in the body of the response.

```json
{
  "information": {
    "versionId": "C181D36B086346A885CD2C7F77A06BFA",
    "primaryLocale": "en-US",
    "objectId": "F31F4B055D7C408EA7847FF5728EE767",
    "subType": "md_security_filter",
    "name": "filter_for_last_5_years",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "text": "(Year(CurrentDate) - 5) < Year (ID)",
    "tree": {
      "type": "predicate_custom",
      "predicateId": "2A2870D13AE04C21A7CE053453BF7A38",
      "predicateText": "(Year(CurrentDate) - 5) < Year (ID)",
      "predicateTree": {
        "expression": {
          "text": "(Year(CurrentDate) - 5) < Year (ID)",
          "tree": {
            "function": "less",
            "children": [
              {
                "function": "minus",
                "children": [
                  {
                    "function": "year",
                    "children": [
                      {
                        "function": "current_date",
                        "levelType": "metric_level",
                        "type": "operator"
                      }
                    ],
                    "levelType": "metric_level",
                    "type": "operator"
                  },
                  {
                    "type": "constant",
                    "variant": {
                      "type": "int32",
                      "value": "5"
                    }
                  }
                ],
                "levelType": "metric_level",
                "type": "operator"
              },
              {
                "attribute": {
                  "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
                  "subType": "attribute",
                  "name": "Year"
                },
                "form": {
                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                  "subType": "attribute_form_system",
                  "name": "ID"
                },
                "type": "form_shortcut"
              }
            ],
            "levelType": "metric_level",
            "type": "operator"
          },
          "tokens": [
            {
              "level": "resolved",
              "state": "initial",
              "value": "%",
              "type": "character"
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "(",
              "type": "character"
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "Year",
              "type": "function",
              "target": {
                "dateCreated": "2001-11-09T15:47:55.000Z",
                "dateModified": "2018-01-29T21:13:05.000Z",
                "versionId": "32737F3011E8053925F00080EF7500C5",
                "primaryLocale": "en-US",
                "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",
                "subType": "function",
                "name": "Year",
                "description": "Returns the year of the input date."
              }
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "(",
              "type": "character"
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "CurrentDate",
              "type": "function",
              "target": {
                "dateCreated": "2001-11-09T15:47:54.000Z",
                "dateModified": "2018-01-29T21:13:05.000Z",
                "versionId": "32363DBE11E8053925F00080EF7500C5",
                "primaryLocale": "en-US",
                "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",
                "subType": "function",
                "name": "CurrentDate",
                "description": "Returns the current date based on the database timer. This function takes no input parameters."
              }
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "(",
              "type": "character"
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": ")",
              "type": "character"
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": ")",
              "type": "character"
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "-",
              "type": "character",
              "target": {
                "dateCreated": "2001-01-02T20:47:41.000Z",
                "dateModified": "2018-01-29T21:13:06.000Z",
                "versionId": "330711DC11E8053925F00080EF7500C5",
                "primaryLocale": "en-US",
                "objectId": "8107C311DD9911D3B98100C04F2233EA",
                "subType": "function",
                "name": "-",
                "description": "Returns the difference between two values."
              }
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "5",
              "type": "integer"
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": ")",
              "type": "character"
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "<",
              "type": "character",
              "target": {
                "dateCreated": "2001-01-02T20:47:39.000Z",
                "dateModified": "2018-01-29T21:13:07.000Z",
                "versionId": "3333B30411E8053925F00080EF7500C5",
                "primaryLocale": "en-US",
                "objectId": "8107C318DD9911D3B98100C04F2233EA",
                "subType": "function",
                "name": "<",
                "description": "Returns TRUE if the first value is lesser than the second value."
              }
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "Year@ID",
              "type": "object_at_form",
              "target": {
                "dateCreated": "2001-01-02T20:48:10.000Z",
                "dateModified": "2012-01-27T12:00:32.000Z",
                "versionId": "24CEEC7044C6C7008EE0DF96565E9459",
                "primaryLocale": "en-US",
                "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Year"
              },
              "attributeForm": {
                "objectId": "45C11FA478E745FEA08D781CEA190FE5"
              }
            },
            {
              "level": "resolved",
              "state": "initial",
              "value": "",
              "type": "end_of_text"
            }
          ]
        }
      }
    },
    "tokens": [
      {
        "level": "resolved",
        "state": "initial",
        "value": "%",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "(",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "Year",
        "type": "function",
        "target": {
          "dateCreated": "2001-11-09T15:47:55.000Z",
          "dateModified": "2018-01-29T21:13:05.000Z",
          "versionId": "32737F3011E8053925F00080EF7500C5",
          "primaryLocale": "en-US",
          "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",
          "subType": "function",
          "name": "Year",
          "description": "Returns the year of the input date."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "(",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "CurrentDate",
        "type": "function",
        "target": {
          "dateCreated": "2001-11-09T15:47:54.000Z",
          "dateModified": "2018-01-29T21:13:05.000Z",
          "versionId": "32363DBE11E8053925F00080EF7500C5",
          "primaryLocale": "en-US",
          "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",
          "subType": "function",
          "name": "CurrentDate",
          "description": "Returns the current date based on the database timer. This function takes no input parameters."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "(",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": ")",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": ")",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "-",
        "type": "character",
        "target": {
          "dateCreated": "2001-01-02T20:47:41.000Z",
          "dateModified": "2018-01-29T21:13:06.000Z",
          "versionId": "330711DC11E8053925F00080EF7500C5",
          "primaryLocale": "en-US",
          "objectId": "8107C311DD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": "-",
          "description": "Returns the difference between two values."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "5",
        "type": "integer"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": ")",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "<",
        "type": "character",
        "target": {
          "dateCreated": "2001-01-02T20:47:39.000Z",
          "dateModified": "2018-01-29T21:13:07.000Z",
          "versionId": "3333B30411E8053925F00080EF7500C5",
          "primaryLocale": "en-US",
          "objectId": "8107C318DD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": "<",
          "description": "Returns TRUE if the first value is lesser than the second value."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "Year@ID",
        "type": "object_at_form",
        "target": {
          "dateCreated": "2001-01-02T20:48:10.000Z",
          "dateModified": "2012-01-27T12:00:32.000Z",
          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",
          "primaryLocale": "en-US",
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "attributeForm": {
          "objectId": "45C11FA478E745FEA08D781CEA190FE5"
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "",
        "type": "end_of_text"
      }
    ]
  },
  "topLevel": [],
  "bottomLevel": []
}
```

Response Code: 201 (A new security filter is created successfully in the changeset.)

## 3. Commit the changeset using [`POST /api/model/changesets/{ChangesetId}/commit`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

## 4. Delete the changeset using [`DELETE /api/model/changesets/{ChangesetId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

## More Samples

Here are more samples you can use to replace `<custom expression>` in the [template file](#template_file).

### Escape Sequences for Full Paths

Use full paths to the object to avoid ambiguity. Make sure to use escape sequences for any backslashes in the expression.

The sample request body shown below contains escape sequences for the backslashes in the following expression:

`\Schema Objects\Attributes\Geography\Region]@ID=1`

Sample Request Body:

```json
{
  "information": {
    "subType": "md_security_filter",
    "name": "<filter_name>",
    "destinationFolderId": "<destination_folder_id>"
  },
  "qualification": {
    "tokens": [
      {
        "value": "%",
        "type": "character"
      },
      {
        "value": "\\Schema Objects\\Attributes\\Geography\\Region]@ID=1"
      }
    ]
  }
}
```

### Escape Sequences for Double Quotes

Make sure to use escape sequences for any double quotes in the expression.

The sample request body shown below contains escape sequences for double quotes in the following expression:

`Promotion@DESC in ("Valentine's Day", "Summer Fun")`

Sample Request Body:

```json
{
  "information": {
    "subType": "md_security_filter",
    "name": "<filter_name>",
    "destinationFolderId": "<destination_folder_id>"
  },
  "qualification": {
    "tokens": [
      {
        "value": "%",
        "type": "character"
      },
      {
        "value": "Promotion@DESC in (\"Valentine's Day\", \"Summer Fun\")"
      }
    ]
  }
}
```

### Escape Sequences for the ApplyComparison Function

If you use the `ApplyComparison` function in an expression, make sure to use escape sequences for the double quotes.

The sample request body shown below contains escape sequences for double quotes within the following `ApplyComparison` function:

```http
ApplyComparison ("#0 between #1 and #2",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)
```

Sample Request Body:

```json
{
  "information": {
    "subType": "md_security_filter",
    "name": "<filter_name>",
    "destinationFolderId": "<destination_folder_id>"
  },
  "qualification": {
    "tokens": [
      {
        "value": "%",
        "type": "character"
      },
      {
        "value": "ApplyComparison (\"#0 between #1 and #2\",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)"
      }
    ]
  }
}
```

### Parsed Tokens

Use a full format of tokens (a parsed token) to retrieve data using the GET method or construct them yourself.

The sample request body shown below uses the following expression:

`Year@ID > 2015`

Sample Request Body:

```json
{
  "information": {
    "subType": "md_security_filter",
    "name": "Year > 2015",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "qualification": {
    "tokens": [
      {
        "level": "resolved",
        "state": "initial",
        "value": "%",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "Year@ID",
        "type": "object_at_form",
        "target": {
          "dateCreated": "2001-01-02T20:48:10.000Z",
          "dateModified": "2020-03-05T01:54:23.000Z",
          "versionId": "3C99BB6811EA5E8412670080EF556E6D",
          "primaryLocale": "en-US",
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "attributeForm": {
          "objectId": "45C11FA478E745FEA08D781CEA190FE5"
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": ">",
        "type": "character",
        "target": {
          "dateCreated": "2001-01-02T20:47:41.000Z",
          "dateModified": "2017-09-05T16:03:39.000Z",
          "versionId": "9670ED6241357E96A07331A963928C53",
          "primaryLocale": "en-US",
          "objectId": "8107C317DD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": ">",
          "description": "Returns TRUE if the first value is greater than the second value."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "2015.0",
        "type": "integer"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "",
        "type": "end_of_text"
      }
    ]
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
