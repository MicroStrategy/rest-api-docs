---
title: Workflow Sample - Create a Fact Object
sidebar_label: Create a Fact Object
description: This workflow sample demonstrates how to create a fact object through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-11d116e7-cf31-451a-848e-0d2be6fa3041?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a fact object through the Modeling service.

1. [Create a changeset](#create-a-changeset)
1. [Create a fact object](#create-a-fact-object)
1. [Commit the changeset](#commit-a-changeset)
1. [Delete the changeset](#delete-the-changeset)

You want to create a "Profit" fact object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [`GET /api/projects`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

`"schemaEdit"` is required to be `true` if this changeset ID is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions).

:::

## Create a changeset

Endpoint: [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "805C5F3FB78A436FAE37C943471C24AD",
  "dateCreated": "2021-03-22T18:39:47.790690Z",
  "dateModified": "2021-03-22T18:39:47.790723Z",
  "status": "Ready",
  "schemaEdit": true,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "MSTR User"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

## Create a fact object

Endpoint: [`POST /api/model/facts`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts/ms-postFact)

You want to create a fact named "Profit" with one expression `"TOT_DOLLAR_SALES - TOT_COST"` in "tokens" format. This expression will be used in the two tables `"CITY_MNTH_SLS"` and `"CUSTOMER_SLS"`. More examples of creating a new fact are listed below.

To create a fact, in the request body, "expressions" contains a list of fact expressions. Each fact contains "expression" and "tables".

- "expression": Must be in either "tree" or "tokens" format.

  Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let’s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).

- "tables": A list of tables that the "expression" applies to.

  "dataType" is optional. If omitted, it calculates based on the first fact expression.

  Sample Request Header:

  ```http
  "accept": "application/json"
  "X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
  "X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
  ```

  Construct the expression.

  Make a copy of the following "tokens" format template and modify the `"fact_expression"` to construct an expression.

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
        "subType":"fact",
        "name":"Profit",
        "destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"
     },
     "expressions":[
        {
           "expression":{
              "tokens":[
                 {
                    "value":"TOT_DOLLAR_SALES - TOT_COST"
                 }
              ]
           },
           "tables":[
              {
                 "objectId":"9A28CFCC42DB8E9627D547975958C138",
                 "subType":"logical_table",
                 "name":"CITY_MNTH_SLS"
              },
              {
                 "objectId":"54D82D5B4BD115DA313C03A5742900AE",
                 "subType":"logical_table",
                 "name":"CUSTOMER_SLS"
              }
           ]
        }
     ],
     "entryLevel":[
     ]
  }
  ```

  Sample Curl:

  In this sample workflow, you want to return the newly created fact with its expression in all formats. Therefore, you should set `showExpressionAs=tree` and `showExpressionsAs=tokens`.

  ```bash
  curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/facts?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD" -H "Content-Type: application/json" -d "{\\"information\\":{\\"subType\\":\\"fact\\",\\"name\\":\\"Profit_tree\\",\\"destinationFolderId\\":\\"A0DC38971F48DFD941780DBE549A1F28\\"},\\"expressions\\":[{\\"expression\\":{\\"tree\\":{\\"function\\":\\"minus\\",\\"children\\":[{\\"type\\":\\"column_reference\\",\\"columnName\\":\\"TOT_DOLLAR_SALES\\",\\"objectId\\":\\"8D6792A011D3E4981000E787EC6DE8A4\\"},{\\"type\\":\\"column_reference\\",\\"columnName\\":\\"TOT_COST\\",\\"objectId\\":\\"7A4ABDFD11D5AC6FC000D98A4CC5F24F\\"}],\\"type\\":\\"operator\\"}},\\"tables\\":[{\\"objectId\\":\\"9A28CFCC42DB8E9627D547975958C138\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"CITY_MNTH_SLS\\"},{\\"objectId\\":\\"54D82D5B4BD115DA313C03A5742900AE\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"CUSTOMER_SLS\\"}]}],\\"entryLevel\\":[]}"
  ```

  Sample Response Body:

  You can view the new fact's definition in the body of the response.

  ```json
  {
    "information": {
      "versionId": "F897A7472295406C922304B760691DCE",
      "primaryLocale": "en-US",
      "objectId": "504800FA17A743E48855A603D64E9077",
      "subType": "fact",
      "name": "Profit",
      "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
    },
    "dataType": {
      "type": "double",
      "precision": 0,
      "scale": -1
    },
    "expressions": [
      {
        "expressionId": "5640F70F676B4279A12E754F9EFE88F3",
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

  Response Code: 201 (A new fact is created successfully in the changeset.)

## Commit a changeset

Endpoint: [`POST /api/model/changesets/:changesetId/commit`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/805C5F3FB78A436FAE37C943471C24AD/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD"
```

Sample Response Body:

```json
{
  "id": "805C5F3FB78A436FAE37C943471C24AD",
  "dateCreated": "2021-03-22T18:39:47.790690Z",
  "dateModified": "2021-03-22T19:03:34.704176Z",
  "status": "Ready",
  "schemaEdit": true,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "MSTR User"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

## Delete the changeset

Endpoint: [`DELETE /api/model/changesets/:changesetId`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/805C5F3FB78A436FAE37C943471C24AD" -H "accept: \*/\*" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset is deleted successfully.)

## More Samples

The following are additional examples for creating a fact object.

### Multiple expressions

You can create a fact object with multiple expressions.

In this sample, you want to create a fact named "Profit" with two expressions: 1) `"TOT_DOLLAR_SALES - TOT_COST"` used in the tables `"CITY_MNTH_SLS"` and `"CUSTOMER_SLS"`, and 2) `"ORDER_AMT - ORDER_COST"` used in the table `"ORDER_FACT"`.

Sample Request Body:

```json
{
  "information": {
    "subType": "fact",
    "name": "Profit",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "expressions": [
    {
      "expression": {
        "tokens": [
          {
            "value": "ORDER_AMT - ORDER_COST"
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
    },
    {
      "expression": {
        "tokens": [
          {
            "value": "TOT_DOLLAR_SALES - TOT_COST"
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
  ]
}
```

### Expressions in "tree" format

In this sample, you want to create a fact named "Profit" with one expression `"TOT_DOLLAR_SLS - TOT-COST"` in "tree" format. This expression will be used in the two tables `"CITY_MNTH_SLS"` and `"CUSTOMER_SLS"`.

Sample Request Body:

```json
{
  "information": {
    "subType": "fact",
    "name": "Profit",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "expressions": [
    {
      "expression": {
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
        }
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
  ]
}
```
