---
title: Workflow Sample - Create a Filter Object with a Custom Expression
sidebar_label: Create a Filter Object with a Custom Expression
description: This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b6421792-16ec-4d68-9af9-8fc38eb35b7e?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service

- [1. Create a changeset using POST /api/model/changesets](#create-a-changeset-using-post-apimodelchangesets)
- [2. Create a new filter using a custom expression with POST /api/model/filters.](#create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters)
- [3. Commit the changeset using POST /api/model/changesets/{ChangesetId}/commit](#commit-the-changeset-using-post-apimodelchangesetschangesetidcommit)
- [4. Delete the changeset using DELETE /api/model/changesets/{ChangesetId}](#delete-the-changeset-using-delete-apimodelchangesetschangesetid)
- [More Samples](#more-samples)
  - [Escape Sequences for Full Paths](#escape-sequences-for-full-paths)
  - [Escape Sequences for Double Quotes](#escape-sequences-for-double-quotes)
  - [Escape Sequences for the ApplyComparison Function](#escape-sequences-for-the-applycomparison-function)

Additional samples are provided in [More Samples](#more-samples).

You want to create a new "(Year(CurrentDate()) - 5)< Year@ID" filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [`GET /api/projects`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

## Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

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

## Create a new filter using a custom expression with [POST /api/model/filters.](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-ms-postFilter)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Construct the Request Body:

Make a copy of the input template and modify `<filter_name>`, `<destination_folder_id>`, and `<custom_expression>` accordingly to construct the request body. The template looks like the following:

```json
{
  "information": {
    "subType": "filter",
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
    "subType": "filter",
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

In this sample workflow, you want to return the newly created filter and its custom expression in all formats. Thus, you should set `showFilterTokens=true`, `showExpressionAs=tree`, and `showExpressionAs=tokens`.

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/filters?showFilterTokens=true&showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d '{"information":{"subType":"filter","name":"filter_for_last_5_years","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tokens":[{"value":"%","type":"character"},{"value":"(Year(CurrentDate()) - 5)< Year@ID"}]}}'
```

Sample Response Body: You can view the new filter's definition in the body of the response.

```json
{
  "information": {
    "versionId": "C181D36B086346A885CD2C7F77A06BFA",
    "primaryLocale": "en-US",
    "objectId": "F31F4B055D7C408EA7847FF5728EE767",
    "subType": "filter",
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
  }
}
```

Response Code: 201 (A new filter is created successfully in the changeset.)

## Commit the changeset using [POST /api/model/changesets/{ChangesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

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

## Delete the changeset using [DELETE /api/model/changesets/{ChangesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header

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

Sample Response Code: 204 (The changeset is deleted successfully.)

## More Samples

The following are additional examples to replace `<custom expression>` from the input template.

### Escape Sequences for Full Paths

Use full paths to the object to avoid ambiguity. Make sure to use escape sequences for any backslashes in the expression.

The sample request body shown below contains escape sequences for the backslashes in the following expression:

`\Schema Objects\Attributes\Geography\Region]@ID=1`

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
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
        "value": "[\\Schema Objects\\Attributes\\Geography\\Region]@ID=1"
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
    "subType": "filter",
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
ApplyComparison (\"#0 between #1 and #2\",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)
```

Sample Request Body:

```json
{
  "information": {
    "subType": "filter",
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
