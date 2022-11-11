---
title: Workflow samples - Retrieve a security filter definition
sidebar_label: Retrieve a security filter definition
description: This topic covers several workflows for retrieving a security filter's definition through the Modeling service.
---

This topic covers several workflows for retrieving a security filter's definition through the Modeling service:

- [Retrieve a security filter's definition](#retrieve-a-security-filters-definition)
- [Retrieve a security filter's definition within a changeset](#retrieve-a-security-filters-definition-within-a-changeset)
- [Retrieve a security filter's definition in tokens format](#retrieve-a-security-filters-definition-in-tokens-format)
- [Retrieve a security filter's definition with custom expressions in tree and tokens formats](#retrieve-a-security-filters-definition-with-custom-expressions-in-tree-and-tokens-formats)
- [Retrieve a filter's definition that contains inline custom expressions, with the expression in tree and tokens formats](#retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats)

## Retrieve a security filter's definition

In this workflow sample, you want to get the definition of the "Year > 2015" security filter object. The object ID of the security filter is `8018C24FEBC4406CB9E36838C01C82D1` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the security filter definition using [api/model/securityFilters/{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/getSecurityFilterDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the security filter's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2020-11-17T16:42:39.776Z",
    "dateModified": "2020-11-17T16:42:57.268Z",
    "versionId": "F253FD1211EB28F32AE10080EFC56102",
    "primaryLocale": "en-US",
    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",
    "subType": "md_security_filter",
    "name": "Year > 2015"
  },
  "qualification": {
    "text": "Year (ID) > 2015",
    "tree": {
      "type": "predicate_form_qualification",
      "predicateId": "62EE53C755F64508BAEE99989E9EACCC",
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

Response Code: 200 (The security filter's definition was returned successfully.)

## Retrieve a security filter's definition within a changeset

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md). If you plan to use the response of `GET /api/model/securityFilters/{securityFilterId}` to create a new security filter or update the security filter's definition, it is recommended to associate all requests to one changeset.

:::

In this workflow sample, you want to get the definition of the "Year > 2015" security filter object. The object ID of the security filter is `8018C24FEBC4406CB9E36838C01C82D1` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

### Create a changeset

Use [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
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
  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",
  "dateCreated": "2020-11-17T16:38:09.825650Z",
  "dateModified": "2020-11-17T16:38:09.825665Z",
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

Sample Response Code: 200 (A new changeset is created successfully.)

### Get the security filter's definition within a changeset

Use [GET /api/model/securityFilters/{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-getFilterDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

You can view the security filter's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2020-11-17T16:42:39.776Z",
    "dateModified": "2020-11-17T16:42:57.268Z",
    "versionId": "F253FD1211EB28F32AE10080EFC56102",
    "primaryLocale": "en-US",
    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",
    "subType": "md_security_filter",
    "name": "Year > 2015"
  },
  "qualification": {
    "text": "Year (ID) > 2015",
    "tree": {
      "type": "predicate_form_qualification",
      "predicateId": "62EE53C755F64508BAEE99989E9EACCC",
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

Response Code: 200 (The security filter's definition is returned successfully.)

### Delete a changeset

Use [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/changesets/0E9F01172ECF4BA2BB510F7B9FB4F6E8" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully)

## Retrieve a security filter's definition in tokens format

In this workflow sample, you want to get the definition of the "Year > 2015" security filter object. The object ID of the security filter is `8018C24FEBC4406CB9E36838C01C82D1` in the MicroStrategy Tutorial project. This procedure is similar to [Retrieve a security filter's definition](#retrieve-a-security-filters-definition), except you want to enable the `showFilterTokens` parameter to retrieve the security filter's definition in tokens format.

:::tip

Security filter tokens are used the same manner as filter tokens. Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let's say a security filter expression is "Revenue > Cost". When the security filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).<br/><br/>A security filter's "qualification" is presented in the following formats:

- "text": A human-readable, but non-parsable text, describing a filter's qualification.
- "tree": A tree data structure fully defining the filter's qualification.
- "tokens": A list of parsed tokens that define a filter's qualification. Be aware that generating tokens requires additional time.

If `showFilterTokens` is omitted or `false`, only "text" and "tree" formats are returned.<br/>If `showFilterTokens` is `true`, all "text", "tree" and "tokens" formats are returned.

:::

Get the security filter's definition in tokens format using [GET /api/model/securityFilters/{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/getSecurityFilterDetails) with `showFilterTokens=true`.

Sample Curl:

```bash
curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/5B64A6A6E5B1466497D9D4D35328D91B?showFilterTokens=true" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the security filter's definition in the body of the response. Notice that, compared to [Retrieve a security filter's definition](#retrieve-a-security-filters-definition), "qualification"`has an extra`"tokens"` field.

```json
{
  "information": {
    "dateCreated": "2020-11-30T12:56:01.400Z",
    "dateModified": "2020-11-30T12:56:01.400Z",
    "versionId": "6602277211EB330B01430080EF051B59",
    "primaryLocale": "en-US",
    "objectId": "5B64A6A6E5B1466497D9D4D35328D91B",
    "subType": "md_security_filter",
    "name": "Year > 2015"
  },
  "qualification": {
    "text": "Year (ID) > 2015",
    "tree": {
      "type": "predicate_form_qualification",
      "predicateId": "A0D326D440304DC4B07F12DA6631447F",
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
        "value": ">",
        "type": "character",
        "target": {
          "dateCreated": "2001-01-02T20:47:41.000Z",
          "dateModified": "2018-01-29T21:13:06.000Z",
          "versionId": "332E00E411E8053925F00080EF7500C5",
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
  "topLevel": [],
  "bottomLevel": []
}
```

## Retrieve a security filter's definition with custom expressions in tree and tokens formats

In this workflow sample, you want to get the definition of a security filter that contains a "Year@ID < 2015" custom expression. The object ID of the security filter is `B4B9AE1411EB3309268D0080EFE5DA56`.

:::tip

If custom expressions are used in a security filter, this parameter specifies the format in which they are returned in the response.

Custom expressions are presented in the following formats:

- "text": A human-readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.
- "tree": A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.
- "tokens": A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Be aware that generating tokens requires additional time.

  Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let's say a security filter expression is "Revenue > Cost". When the security filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).

If omitted, the custom expression is returned in "text" format.

If `tree`, the custom expression is returned in "text" and "tree" format.

If `tokens`, the custom expression is returned in "text" and "tokens" format.

:::

Get the security filter's definition in tokens format using [GET /api/model/securityFilters/{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/getSecurityFilterDetails) with `showExpressionAs=tree` and `showExpressionAs=tokens`.

Sample Curl:

```bash
curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/B4B9AE1411EB3309268D0080EFE5DA56?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the security filter's definition in the body of the response. Notice that `['qualification']['tree']['PredicateTree']['expression']` contains `"tree"` and `"token"` fields, which represent the custom expression in tree and tokens format respectively.

```json
{
  "information": {
    "dateCreated": "2020-11-30T12:56:18.228Z",
    "dateModified": "2020-11-30T19:36:32.103Z",
    "versionId": "596C793011EB334357FA0080EF7579B5",
    "primaryLocale": "en-US",
    "objectId": "B4B9AE1411EB3309268D0080EFE5DA56",
    "subType": "md_security_filter",
    "name": "Year@ID > 2015"
  },
  "qualification": {
    "text": "Year (ID) > 2015",
    "tree": {
      "type": "predicate_custom",
      "predicateId": "A6CBA8F104FD4194B4727AE74DE8F721",
      "predicateText": "Year (ID) > 2015",
      "predicateTree": {
        "expression": {
          "text": "Year (ID) > 2015",
          "tree": {
            "function": "greater",
            "children": [
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
              },
              {
                "type": "constant",
                "variant": {
                  "type": "int32",
                  "value": "2015"
                }
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
              "value": ">",
              "type": "character",
              "target": {
                "dateCreated": "2001-01-02T20:47:41.000Z",
                "dateModified": "2018-01-29T21:13:06.000Z",
                "versionId": "332E00E411E8053925F00080EF7500C5",
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
              "value": "2015",
              "type": "integer"
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
    }
  },
  "topLevel": [],
  "bottomLevel": []
}
```

Sample Response Code: 200 (The security filter's definition is returned successfully.)

## Retrieve a filter's definition that contains inline custom expressions, with the expression in tree and tokens formats

In this workflow sample, you want to get the definition of a security filter that contains an inline custom expression. The object ID of the security filter is `B488A1B711EB330926FF0080EFB57956`.

Get the security filter's definition with its inline custom expression in tree and tokens format using [GET /api/model/securityFilters/{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/getSecurityFilterDetails) with `showExpressionAs=tree` and `showExpressionAs=tokens`.

Sample Curl:

```bash
curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/B488A1B711EB330926FF0080EFB57956?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the security filter's definition in the body of the response. Notice that `['qualification']['tree']['PredicateTree']['expression']` contains `"tree"` and `"tokens"` fields, representing the inline custom expression in tree and tokens format respectively.

```json
{
  "information": {
    "dateCreated": "2020-11-30T12:56:40.479Z",
    "dateModified": "2020-11-30T19:36:49.829Z",
    "versionId": "63FD317811EB334357BA0080EF5539B5",
    "primaryLocale": "en-US",
    "objectId": "B488A1B711EB330926FF0080EFB57956",
    "subType": "md_security_filter",
    "name": "Year > Current Year - 5"
  },
  "qualification": {
    "text": "Year (ID) > (Year(CurrentDate) - 5)",
    "tree": {
      "type": "predicate_form_qualification",
      "predicateId": "C7ACD6179CC44F219A663E95D236583F",
      "predicateText": "Year (ID) > (Year(CurrentDate) - 5)",
      "predicateTree": {
        "function": "greater",
        "parameters": [
          {
            "parameterType": "expression",
            "expression": {
              "text": "(Year(CurrentDate) - 5)",
              "tree": {
                "function": "minus",
                "children": [
                  {
                    "function": "year",
                    "children": [
                      {
                        "function": "current_date",
                        "type": "operator"
                      }
                    ],
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
                "type": "operator"
              },
              "tokens": [
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
                }
              ]
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
