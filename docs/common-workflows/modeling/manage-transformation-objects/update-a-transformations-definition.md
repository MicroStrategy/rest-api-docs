---
title: Update a transformation's definition
sidebar_label: Update a transformation's definition
description: This workflow sample demonstrates how to update an existing transformation through the Modeling service.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ad947705-6f6c-433c-ae10-cfe90ba9a364?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an existing transformation through the Modeling service.

In this workflow sample, you update an existing `"Last year’s"` transformation object under the My Personal Objects/My Objects (MSTR User/My Objects) folder in the MicroStrategy Tutorial project. The folder object ID is `9B25D45A4834A213A70C10B1703D4A77`. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

## Update the transformation’s definition using [PATCH /api/model/transformations/{transformationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transformations/ms-updateTransformation)

You want to update the definition of the `"Last year’s"` transformation so that its attribute has a new `"PREV_YEAR_ID"` form expression. The transformation object ID is `49713ED26BC94DB3A68964A5A085E2FC`.

To update a transformation, in the request body, the supported property changes are the same as those used when creating a transformation using `POST /api/model/transformations`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "6n2qjpmf1hqm31mvqqvqo7ccj8"
"X-MSTR-MS-Changeset": "10C098B3394941A39E66856DE614834A"
```

Construct the transformation attribute form's expression.

Make a copy of the following `"tokens"` format template and modify the `"form_expression"` to construct an expression.

```json
{ "expression": { "tokens": [{ "value": "<form_expression>" }] } }
```

Sample Request Body:

```json
{
  "information": { "name": "Last year's" },
  "attributes": [
    {
      "id": "61DF5BACFEAF4245A3C7BD667A0D44F1",
      "baseAttribute": { "objectId": "8D679D5111D3E4981000E787EC6DE8A4" },
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "lookupTable": { "objectId": "8D6793C211D3E4981000E787EC6DE8A4" },
          "expression": { "tokens": [{ "value": "PREV_YEAR_ID" }] }
        }
      ]
    }
  ],
  "mappingType": "one_to_one"
}
```

Sample Curl:

In this sample workflow, you want to return the updated transformation with its attribute form expression in all formats. Therefore, you should set `showExpressionAs=tree` and `showExpressionAs=tokens`.

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations/49713ED26BC94DB3A68964A5A085E2FC?showExpressionAs=tree&showExpressionAs=tokens" -H "X-MSTR-MS-Changeset: 10C098B3394941A39E66856DE614834A" -H "X-MSTR-AuthToken: 6n2qjpmf1hqm31mvqqvqo7ccj8" -H "Content-Type: application/json" -H "accept: application/json" -d "{\"information\": {\"name\": \"Last year's\"},\"attributes\": [{\"id\": \"61DF5BACFEAF4245A3C7BD667A0D44F1\",\"baseAttribute\": {\"objectId\": \"8D679D5111D3E4981000E787EC6DE8A4\"},\"forms\": [{\"id\": \"45C11FA478E745FEA08D781CEA190FE5\",\"lookupTable\": {\"objectId\": \"8D6793C211D3E4981000E787EC6DE8A4\"},\"expression\": {\"tokens\": [{\"value\": \"PREV_YEAR_ID\"}]}}]}],\"mappingType\": \"one_to_one\"}"
```

Sample Response Body:

You can view the transformation’s new definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-03-07T10:28:53.040Z",
    "dateModified": "2022-03-07T10:28:53.040Z",
    "versionId": "09C7D4466B4C414FBE929551B7F76B64",
    "primaryLocale": "en-US",
    "objectId": "49713ED26BC94DB3A68964A5A085E2FC",
    "subType": "role_transformation",
    "name": "Last year's"
  },
  "attributes": [
    {
      "id": "61DF5BACFEAF4245A3C7BD667A0D44F1",
      "baseAttribute": {
        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Year"
      },
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "name": "ID",
          "lookupTable": {
            "objectId": "8D6793C211D3E4981000E787EC6DE8A4",
            "subType": "logical_table",
            "name": "LU_YEAR"
          },
          "expression": {
            "text": "PREV_YEAR_ID",
            "tree": {
              "type": "column_reference",
              "columnName": "PREV_YEAR_ID",
              "objectId": "8EDB6B2411D5AEC0C000E38A4CC5F24F"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "PREV_YEAR_ID",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2001-09-21T19:03:05.000Z",
                  "dateModified": "2012-06-06T12:13:04.000Z",
                  "versionId": "256D148442065F43BDC42FBB79438A3F",
                  "primaryLocale": "en-US",
                  "objectId": "8EDB6B2411D5AEC0C000E38A4CC5F24F",
                  "subType": "column",
                  "name": "PREV_YEAR_ID"
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
      ]
    }
  ],
  "mappingType": "one_to_one"
}
```

Response Code: 200 (The transformation’s definition is updated successfully in the changeset.)
