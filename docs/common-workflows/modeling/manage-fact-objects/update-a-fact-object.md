---
title: Update a fact object
sidebar_label: Update a fact object
description: The workflow to update a fact object.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-11d116e7-cf31-451a-848e-0d2be6fa3041?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

1. Create a changeset.
1. [Update a fact's definition.](#update-the-facts-definition)
1. Commit the changeset.
1. Delete the changeset.

You want to update the "Profit" fact object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Update the fact's definition

Use [PUT /api/model/facts/{factId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts/ms-putFact)

You want to update the definition of the "Profit" fact so that it contains one expression `ORDER_AMT - ORDER_COST` used in table `ORDER_FACT`.

To update a fact, in the request body, "expressions" contains a list of fact expressions. Each fact contains "expression" and "tables".

- "expression": Must be in either "tree" or "tokens" format.

  Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let’s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).

- "tables": A list of tables that the "expression" applies to.
- "dataType" is optional. If omitted, it calculates based on the first fact expression.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "t1ldkqth8vt0k64vkoajmoqrs4"
"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"
```

Construct the expression.

Make a copy of the following `"tokens"` format template and modify the `"fact_expression"` to construct an expression.

```json
"expression":{
  "tokens":[
    {
      "value":"<fact_expression>"
    }
  ]
}

Sample Request Body:

{
  "information":{
      "name":"Profit"
  },
  "expressions":[
      {
        "expression":{
            "tokens":[
              {
                  "value":"ORDER_AMT - ORDER_COST"
              }
            ]
        },
        "tables":[
            {
              "objectId":"8D6793D411D3E4981000E787EC6DE8A4",
              "subType":"logical_table",
              "name":"ORDER_FACT"
            }
        ]
      }
  ]
}
```

Sample Curl:

In this sample workflow, you want to return the newly created fact with its expression in all formats. Therefore, you should set `showExpressionAs=tree` and `showExpressionsAs=tokens`.

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/facts/FDD652E7444ADD7AB6B25F9C1FA15F92?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d "{\\"information\\":{\\"name\\":\\"Profit\\"},\\"expressions\\":[{\\"expression\\":{\\"tokens\\":[{\\"value\\":\\"ORDER_AMT - ORDER_COST\\"}]},\\"tables\\":[{\\"objectId\\":\\"8D6793D411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"ORDER_FACT\\"}]}]}"
```

Sample Response Body:

You can view the fact's new definition in the body of the response.

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
      "expressionId": "9511B92C84AE4B40A27269FC201A7EB6",
      "expression": {
        "text": "ORDER_AMT - ORDER_COST",
        "tree": {
          "function": "minus",
          "children": [
            {
              "type": "column_reference",
              "columnName": "ORDER_AMT",
              "objectId": "8D6792BC11D3E4981000E787EC6DE8A4"
            },
            {
              "type": "column_reference",
              "columnName": "ORDER_COST",
              "objectId": "F30CAFB211D5AC5FC000D98A4CC5F24F"
            }
          ],
          "type": "operator"
        },
        "tokens": [
          {
            "level": "resolved",
            "state": "initial",
            "value": "ORDER_AMT",
            "type": "column_reference",
            "target": {
              "dateCreated": "2001-01-02T20:48:36.000Z",
              "dateModified": "2016-08-18T19:33:57.000Z",
              "versionId": "B491FFF611E6657A0B440080EF557A15",
              "primaryLocale": "en-US",
              "objectId": "8D6792BC11D3E4981000E787EC6DE8A4",
              "subType": "column",
              "name": "ORDER_AMT"
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
            "value": "ORDER_COST",
            "type": "column_reference",
            "target": {
              "dateCreated": "2001-09-18T18:09:48.000Z",
              "dateModified": "2016-08-18T19:33:57.000Z",
              "versionId": "B491FFF611E6657A0B440080EF557A15",
              "primaryLocale": "en-US",
              "objectId": "F30CAFB211D5AC5FC000D98A4CC5F24F",
              "subType": "column",
              "name": "ORDER_COST"
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
          "objectId": "8D6793D411D3E4981000E787EC6DE8A4",
          "subType": "logical_table",
          "name": "ORDER_FACT"
        }
      ]
    }
  ],
  "entryLevel": []
}
```

Response Code: 200 (The fact's definition is updated successfully in the changeset.)
