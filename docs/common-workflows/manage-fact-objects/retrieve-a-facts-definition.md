---
title: Workflow samples - Retrieve a fact's definition
sidebar_label: Retrieve a fact's definition
description: This topic covers two workflows for retrieving a fact’s definition.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3b137a26-4cf4-4902-8f11-9d7a7cffc5f0?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This topic covers two workflows for retrieving a fact’s definition:

- [Retrieve a fact's definition](#retrieve-a-facts-definition)
- [Retrieve a fact's definition with expressions in tree and tokens formats](#retrieve-a-facts-definition-with-expressions-in-tree-and-tokens-formats)

## Retrieve a fact's definition

This workflow sample demonstrates how to retrieve the definition of a fact through the Modeling service.

You want to get the definition of the "Profit" fact object. The object ID of the fact is `FDD652E7444ADD7AB6B25F9C1FA15F92` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the fact's definition using [GET /api/model/facts/{factId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts/ms-getFactDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/facts/FDD652E7444ADD7AB6B25F9C1FA15F92" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the fact's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-03-22T18:05:47.821Z",
    "dateModified": "2021-03-22T18:05:47.821Z",
    "versionId": "3FF0319C5B496906BE3EF5A0F825CE77",
    "primaryLocale": "en-US",
    "objectId": "FDD652E7444ADD7AB6B25F9C1FA15F92",
    "subType": "fact",
    "name": "Profit"
  },
  "dataType": {
    "type": "float",
    "precision": 53,
    "scale": 0
  },
  "expressions": [
    {
      "expressionId": "7A4ABE8CAC6F11D58AD900C04FF2C54C",
      "expression": {
        "text": "TOT_DOLLAR_SALES - TOT_COST"
      },
      "tables": [
        {
          "objectId": "9A28CFCC42DB8E9627D547975958C138",
          "subType": "logical_table",
          "name": "CITY_MNTH_SLS"
        },
        {
          "objectId": "54D82D5B4BD115DA313C03A5742900AE",
          "subType": "logical_table",
          "name": "CUSTOMER_SLS"
        }
      ]
    }
  ],
  "entryLevel": []
}
```

Response Code: 200 (The fact's definition was returned successfully.)

## Retrieve a fact's definition with expressions in tree and tokens formats

In this sample workflow, you want to get the definition of the "Profit" fact object, with its expressions returned in tree and tokens formats. The object ID of the fact is `FDD652E7444ADD7AB6B25F9C1FA15F92` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

Expressions are presented in the following formats:

- "text": A human-readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.
- "tree": A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.
- "tokens": A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Be aware that generating tokens requires additional time.

Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let’s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).

If `showExpressionAs` is omitted, the expression is returned in "text" format.

If `showExpressionAs` is `tree`, the expression is returned in "text" and "tree" formats.

If `showExpressionAs` is `tokens`, the expression is returned in "text" and "tokens" formats.

:::

This workflow sample is similar to [Retrieve a fact's definition](#retrieve-a-facts-definition), except with `showExpressionAs=tree` and `showExpressionAs=tokens`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/facts/FDD652E7444ADD7AB6B25F9C1FA15F92?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the fact’s definition in the body of the response. Notice that, each fact expression contains the fields "tree" and "tokens", representing the expression in `tree` and `tokens` format respectively.

```json
{
  "information": {
    "dateCreated": "2021-03-22T18:05:47.821Z",
    "dateModified": "2021-03-22T18:05:47.821Z",
    "versionId": "3FF0319C5B496906BE3EF5A0F825CE77",
    "primaryLocale": "en-US",
    "objectId": "FDD652E7444ADD7AB6B25F9C1FA15F92",
    "subType": "fact",
    "name": "Profit"
  },
  "dataType": {
    "type": "float",
    "precision": 53,
    "scale": 0
  },
  "expressions": [
    {
      "expressionId": "7A4ABE8CAC6F11D58AD900C04FF2C54C",
      "expression": {
        "text": "TOT_DOLLAR_SALES - TOT_COST",
        "tree": {
          "function": "minus",
          "children": [
            {
              "type": "column_reference",
              "columnName": "TOT_DOLLAR_SALES",
              "objectId": "8D6792A011D3E4981000E787EC6DE8A4"
            },
            {
              "type": "column_reference",
              "columnName": "TOT_COST",
              "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F"
            }
          ],
          "type": "operator"
        },
        "tokens": [
          {
            "level": "resolved",
            "state": "initial",
            "value": "TOT_DOLLAR_SALES",
            "type": "column_reference",
            "target": {
              "dateCreated": "2001-01-02T20:48:35.000Z",
              "dateModified": "2016-08-18T19:20:24.000Z",
              "versionId": "CFE0642A11E66578144C0080EF557A15",
              "primaryLocale": "en-US",
              "objectId": "8D6792A011D3E4981000E787EC6DE8A4",
              "subType": "column",
              "name": "TOT_DOLLAR_SALES"
            }
          },
          {
            "level": "resolved",
            "state": "initial",
            "value": "-",
            "type": "character",
            "target": {
              "dateCreated": "2001-01-02T20:47:41.000Z",
              "dateModified": "2021-03-09T15:22:04.454Z",
              "versionId": "3417594811EB80EB25D80080EF25AB1A",
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
            "value": "TOT_COST",
            "type": "column_reference",
            "target": {
              "dateCreated": "2001-09-18T19:59:30.000Z",
              "dateModified": "2016-08-18T19:20:24.000Z",
              "versionId": "CFE0642A11E66578144C0080EF557A15",
              "primaryLocale": "en-US",
              "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",
              "subType": "column",
              "name": "TOT_COST"
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
      "tables": [
        {
          "objectId": "9A28CFCC42DB8E9627D547975958C138",
          "subType": "logical_table",
          "name": "CITY_MNTH_SLS"
        },
        {
          "objectId": "54D82D5B4BD115DA313C03A5742900AE",
          "subType": "logical_table",
          "name": "CUSTOMER_SLS"
        }
      ]
    }
  ],
  "entryLevel": []
}
```
