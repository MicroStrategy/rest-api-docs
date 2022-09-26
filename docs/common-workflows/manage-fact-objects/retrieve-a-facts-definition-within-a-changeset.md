---
title: Workflow Sample - Retrieve a Fact's Definition within a Changeset
sidebar_label: Retrieve a Fact's Definition within a Changeset
description: This workflow sample demonstrates how to retrieve a fact's definition within a changeset.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-440d539e-15d7-4709-94a5-9c74eecc03db?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a fact's definition within a changeset.

:::tip

A changeset maintains an indivisible group of creations or modifications on modeling objects.

:::

1. [Create a changeset.](#create-a-changeset)
1. [Get a fact's definition within a changeset.](#get-a-facts-definition-within-a-changeset)
1. [Delete the changeset.](#delete-a-changeset)

You want to get the definition of the "Profit" fact object. The object ID of the fact is `FDD652E7444ADD7AB6B25F9C1FA15F92` in the "MicroStrategy Tutorial" project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a changeset

Endpoint: [POST /api/model/changesets.](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "FA282B2D8EFD4327A652FE09B32A439D",
  "dateCreated": "2021-03-22T18:25:05.441946Z",
  "dateModified": "2021-03-22T18:25:05.441995Z",
  "status": "Ready",
  "schemaEdit": false,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "MSTR User"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

## Get a fact's definition within a changeset

Endpoint: [GET /api/model/facts/{factId}.](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts/ms-getFactDetails)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-MS-Changeset": "FA282B2D8EFD4327A652FE09B32A439D"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/facts/FDD652E7444ADD7AB6B25F9C1FA15F92" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-MS-Changeset: FA282B2D8EFD4327A652FE09B32A439D"
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

Response Code: 200 (The fact's definition is returned successfully.)

## Delete a changeset

Endpoint: [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-MS-Changeset": "FA282B2D8EFD4327A652FE09B32A439D"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/changesets/FA282B2D8EFD4327A652FE09B32A439D" -H "accept: \*/\*" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-MS-Changeset: FA282B2D8EFD4327A652FE09B32A439D"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset is deleted successfully.)
