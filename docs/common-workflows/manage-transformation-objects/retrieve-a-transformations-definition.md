---
title: Workflow Sample - Retrieve a Transformation's Definition
sidebar_label: Retrieve a Transformation's Definition
description: This topic covers the following workflows for retrieving an transformation’s definition.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3fa0dd24-d717-46ba-831c-29cbfe75c3ba?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This topic covers the following workflows for retrieving an transformation’s definition.

## Retrieve a Transformation's Definition

In this workflow sample, you want to get the definition of the `"2 Weeks Ago"` transformation object. The object ID of the transformation is `6CB9ABB711D3E4F11000E887EC6DE8A4`. The transformation is in the MicroStrategy Tutorial project and its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the transformation’s definition using [GET /api/model/transformations/{transformationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transformations/ms-getTransformation).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "1gnndh2h7su0lsapta8ru4h4ul"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations/6CB9ABB711D3E4F11000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken: 1gnndh2h7su0lsapta8ru4h4ul" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the transformation's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2001-01-02T20:47:18.000Z",
    "dateModified": "2022-02-16T08:18:55.645Z",
    "versionId": "C6C93EDF42867E98F22182BF251F1259",
    "primaryLocale": "en-US",
    "objectId": "6CB9ABB711D3E4F11000E887EC6DE8A4",
    "subType": "role_transformation",
    "name": "2 Weeks Ago",
    "description": "Transforms Day to 2 Weeks Ago Day"
  },
  "attributes": [
    {
      "id": "96ED42A511D5B117C000E78A4CC5F24F",
      "baseAttribute": {
        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",
        "subType": "attribute",
        "name": "Day"
      },
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "name": "ID",
          "lookupTable": {
            "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",
            "subType": "logical_table",
            "name": "LU_DAY"
          },
          "expression": { "text": "ApplySimple(\"#0-14\",DAY_DATE)" }
        }
      ]
    }
  ],
  "mappingType": "one_to_one"
}
```

Response Code: 200 (The transformation's definition is returned successfully.)

## Retrieve a Transformation's Definition within a Changeset

In this workflow sample, you want to get the definition of the same transformation object mentioned in [Retrieve a Transformation's Definition](#retrieve-a-transformations-definition), while within a changeset. The object ID of the transformation is `6CB9ABB711D3E4F11000E887EC6DE8A4`. The transformation is in the MicroStrategy Tutorial project and its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of `GET /api/model/transformations/{transformationId}` to create a new table or update a specific table's definitions, you should associate all requests with one changeset.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

1. Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset).

   Sample Request Header:

   ```http
    "accept": "application/json"
    "X-MSTR-AuthToken": "9mh6k91u1mdfe710ppbd78apof"
    "X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
    curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: 9mh6k91u1mdfe710ppbd78apof" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
   ```

   Sample Response Body:

   ```json
   {
     "id": "9B7550F181D0463CAF8DA70408E88363",
     "type": "metadata",
     "dateCreated": "2022-03-04T06:22:10.626286100Z",
     "dateModified": "2022-03-04T06:22:10.626286100Z",
     "status": "Ready",
     "schemaEdit": false,
     "userDateNumberLocale": "en-US",
     "userMetadataLocale": "en-US",
     "userWarehouseLocale": "en-US",
     "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
     "mstrUserId": "668B60B14EE194EDD56CD6BF374E1F8D",
     "userName": "MSTR User"
   }
   ```

   Sample Response Code: 201 (A new changeset is created successfully.)

1. Get a transformation’s definition within a changeset using [GET /api/model/transformations/{transformationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transformations/ms-getTransformation).

   Sample Request Header:

   ```http
    "accept": "application/json"
    "X-MSTR-AuthToken": "9mh6k91u1mdfe710ppbd78apof"
    "X-MSTR-MS-Changeset": 9B7550F181D0463CAF8DA70408E88363`
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
    curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations/6CB9ABB711D3E4F11000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken: 9mh6k91u1mdfe710ppbd78apof" -H "X-MSTR-MS-Changeset: 9B7550F181D0463CAF8DA70408E88363"
   ```

   Sample Response Body:

   You can view the transformation's definition in the body of the response.

   ```json
   {
     "information": {
       "dateCreated": "2001-01-02T20:47:18.000Z",
       "dateModified": "2022-02-16T08:18:55.645Z",
       "versionId": "C6C93EDF42867E98F22182BF251F1259",
       "primaryLocale": "en-US",
       "objectId": "6CB9ABB711D3E4F11000E887EC6DE8A4",
       "subType": "role_transformation",
       "name": "2 Weeks Ago",
       "description": "Transforms Day to 2 Weeks Ago Day"
     },
     "attributes": [
       {
         "id": "96ED42A511D5B117C000E78A4CC5F24F",
         "baseAttribute": {
           "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",
           "subType": "attribute",
           "name": "Day"
         },
         "forms": [
           {
             "id": "45C11FA478E745FEA08D781CEA190FE5",
             "name": "ID",
             "lookupTable": {
               "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",
               "subType": "logical_table",
               "name": "LU_DAY"
             },
             "expression": { "text": "ApplySimple(\"#0-14\",DAY_DATE)" }
           }
         ]
       }
     ],
     "mappingType": "one_to_one"
   }
   ```

   Sample Response Code: 200 (The transformation's definition is returned successfully.)

1. Delete a changeset using [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset).

   Sample Request Header:

   ```http
    "accept": "application/json"
    "X-MSTR-AuthToken": "9mh6k91u1mdfe710ppbd78apof"
    "X-MSTR-MS-Changeset": 9B7550F181D0463CAF8DA70408E88363
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
    curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/9B7550F181D0463CAF8DA70408E88363" -H "accept: */*" -H "X-MSTR-AuthToken: 9mh6k91u1mdfe710ppbd78apof" -H "X-MSTR-MS-Changeset: 9B7550F181D0463CAF8DA70408E88363"
   ```

   Sample Response Body: Empty

   Sample Response Code: 204 (The changeset is deleted successfully.)

## Retrieve a Transformation's Definition with Transformation Attribute Form Expressions in Tree and Tokens Formats

In this sample workflow, you want to get the definition of the `"2 Weeks Ago"` transformation object, with its transformation attribute form expressions returned in tree and tokens formats. The object ID of the transformation is `6CB9ABB711D3E4F11000E887EC6DE8A4`. The transformation is in the MicroStrategy Tutorial project and its project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

Expressions are presented in the following formats:

- "text": A human-readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.
- "tree": A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.
- "tokens": A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Be aware that generating tokens requires additional time. Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let’s say a filter expression is "Revenue > Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", `(">"`, `GreaterThan_ID`), (`"Cost"`, `Cost_ID`).

If `showExpressionAs` is omitted, the expression is returned in "text" format.

If `showExpressionAs` is `tree`, the expression is returned in "text" and "tree" formats.

If `showExpressionAs` is `tokens`, the expression is returned in "text" and "tokens" formats.

The workflow sample is similar to [Retrieve a Transformation's Definition](#retrieve-a-transformations-definition), except with `showExpressionAs=tree` and `showExpressionAs=tokens`.

Sample Request Header:

```http
 "accept": "application/json"
 "X-MSTR-AuthToken": "ino4r9h9nvjv2beivbj99n0ia3"
 "X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations/6CB9ABB711D3E4F11000E887EC6DE8A4?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: ino4r9h9nvjv2beivbj99n0ia3" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the transformation's definition in the body of the response. Notice that, each transformation attribute form expression contains the "tree" and "tokens" fields, representing the expression in `tree` and `tokens` format respectively.

```json
{
  "information": {
    "dateCreated": "2001-01-02T20:47:18.000Z",
    "dateModified": "2022-02-16T08:18:55.645Z",
    "versionId": "C6C93EDF42867E98F22182BF251F1259",
    "primaryLocale": "en-US",
    "objectId": "6CB9ABB711D3E4F11000E887EC6DE8A4",
    "subType": "role_transformation",
    "name": "2 Weeks Ago",
    "description": "Transforms Day to 2 Weeks Ago Day"
  },
  "attributes": [
    {
      "id": "96ED42A511D5B117C000E78A4CC5F24F",
      "baseAttribute": {
        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",
        "subType": "attribute",
        "name": "Day"
      },
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "name": "ID",
          "lookupTable": {
            "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",
            "subType": "logical_table",
            "name": "LU_DAY"
          },
          "expression": {
            "text": "ApplySimple(\"#0-14\",DAY_DATE)",
            "tree": {
              "function": "apply_simple",
              "children": [
                {
                  "type": "constant",
                  "variant": { "type": "string", "value": "#0-14" }
                },
                {
                  "type": "column_reference",
                  "columnName": "DAY_DATE",
                  "objectId": "24C30A7F11D5AEC9C000E38A4CC5F24F"
                }
              ],
              "type": "operator"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "ApplySimple",
                "type": "function",
                "target": {
                  "dateCreated": "1900-01-01T00:00:00.000Z",
                  "dateModified": "2015-03-16T02:50:54.000Z",
                  "versionId": "E18028324AB1D44D3F82EF839D51B22D",
                  "primaryLocale": "en-US",
                  "objectId": "8107C340DD9911D3B98100C04F2233EA",
                  "subType": "function",
                  "name": "ApplySimple",
                  "description": "ApplySimple is a \"pass-through\" function that builds a SQL expression based on the input string of database-specific SQL syntax.  Arguments may be substituted into the specified SQL pattern. This is a single-value function."
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
                "value": "\"#0-14\"",
                "type": "string_literal"
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": ",",
                "type": "character"
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "DAY_DATE",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2001-09-21T20:21:51.000Z",
                  "dateModified": "2022-02-09T03:43:09.000Z",
                  "versionId": "BAEE731B446EC1A133A480B6E064A25C",
                  "primaryLocale": "en-US",
                  "objectId": "24C30A7F11D5AEC9C000E38A4CC5F24F",
                  "subType": "column",
                  "name": "DAY_DATE"
                }
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
                "value": "",
                "type": "end_of_text"
              }
            ]
          }
        }
      ]
    }
  ],
  "mappingType": "one_to_one"
}
```

Sample Response Code: 200 (The transformation's definition is returned successfully.)
