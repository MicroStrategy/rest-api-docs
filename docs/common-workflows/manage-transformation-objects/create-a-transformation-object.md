---
title: Workflow Sample - Create a Transformation Object
sidebar_label: Create a Transformation Object
description: The workflow to create a transformation object.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ad947705-6f6c-433c-ae10-cfe90ba9a364?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

## Create a Transformation Object

In this workflow sample, you want to create a `"Last year’s"` transformation object under the My Personal Objects/My Objects (MSTR User/My Objects) folder in the MicroStrategy Tutorial project. The folder object ID is `9B25D45A4834A213A70C10B1703D4A77`. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

### 1. Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset), along with `schemaEdit=true` to commit a changeset with schema manipulations

Sample Request Header:

```http
 "accept": "application/json"
 "X-MSTR-AuthToken": "u8pcsrhnuluouca9q7cfhsnonb"
 "X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
 curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: u8pcsrhnuluouca9q7cfhsnonb" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

```json
{
  "id": "7D530B05774048C2A8F0ADA91C54914A",
  "type": "metadata",
  "dateCreated": "2022-03-07T05:49:14.619478900Z",
  "dateModified": "2022-03-07T05:49:14.619478900Z",
  "status": "Ready",
  "schemaEdit": true,
  "userName": "MSTR User",
  "mstrUserId": "668B60B14EE194EDD56CD6BF374E1F8D",
  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
  "userWarehouseLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userDateNumberLocale": "en-US"
}
```

Sample Response Code 201: 201 (A new changeset is created successfully.)

### 2. Create a transformation object using [POST /api/model/transformations](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transformations/ms-createTransformation)

You want to create a `"Last year’s"` transformation object with a transformation attribute based on a normal `"Year"` attribute. This transformation attribute has a form with a `"YEAR_ID - 1"` expression in “tokens” format and a `"LU_YEAR"` lookup table. The transformation’s mapping type is `"one_to_one"`. You must define the `"destinationFolderId"` as `9B25D45A4834A213A70C10B1703D4A77` to save this transformation in the desired folder when you commit the changeset later.

To create a transformation, in the request body, `"attributes"` contains a list of transformation attributes. Each transformation attribute contains `"baseAttribute"` and `"forms"`.

`"baseAttribute"`: Refers to the normal attribute the transformation attribute is based on.

`"forms"`: A list of transformation attribute forms, which are generated according to the base attribute key form. Each transformation attribute form contains a `"lookupTable"` and `"expression"`. The `"expression"` needs to be in either `"tree"` or `"tokens"` format.

Tokens are a semi-structured representation of a MicroStrategy expression text including object references. For example, let’s say a filter expression is `"Revenue > Cost"`. When represented as tokens, the text is broken down into pieces (tokens) with information of what these parts represent in the metadata: (`"Revenue"`, `Revenue_ID`), (`">"`, `GreaterThan_ID`), (`"Cost"`, `Cost_ID`)

`"mappingType"`: Defines a mapping relationship. This can be either `“one_to_one”` or `“many_to_many”`.

Sample Request Header:

```http
 "accept": "application/json"
 "X-MSTR-AuthToken": "u8pcsrhnuluouca9q7cfhsnonb"
 "X-MSTR-MS-Changeset": "7D530B05774048C2A8F0ADA91C54914A"
```

Construct the transformation attribute form's expression.

Make a copy of the following `"tokens`" format template and modify the `"form_expression"` to construct an expression.

```json
{
  "expression": {
    "tokens": [
      {
        "value": "<form_expression>"
      }
    ]
  }
}
```

Sample Request Body:

```json
{
  "information": {
    "name": "Last year's",
    "destinationFolderId": "9B25D45A4834A213A70C10B1703D4A77"
  },
  "attributes": [
    {
      "baseAttribute": { "objectId": "8D679D5111D3E4981000E787EC6DE8A4" },
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "lookupTable": { "objectId": "8D6793C211D3E4981000E787EC6DE8A4" },
          "expression": { "tokens": [{ "value": "YEAR_ID - 1" }] }
        }
      ]
    }
  ],
  "mappingType": "one_to_one"
}
```

Sample Curl:

In this sample workflow, you want to return the newly created transformation with its attribute form expression in all formats. Therefore, you should set `showExpressionAs=tree` and `showExpressionAs=tokens`.

```bash
 curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations?showExpressionAs=tokens&showExpressionAs=tree" -H "X-MSTR-MS-Changeset: 7D530B05774048C2A8F0ADA91C54914A" -H "X-MSTR-AuthToken: u8pcsrhnuluouca9q7cfhsnonb" -H "Content-Type: application/json" -H "accept: application/json" -d "{\"information\": {\"name\": \"Last year's\",\"destinationFolderId\": \"9B25D45A4834A213A70C10B1703D4A77\"},\"attributes\": [{\"baseAttribute\": {\"objectId\": \"8D679D5111D3E4981000E787EC6DE8A4\"},\"forms\": [{\"id\": \"45C11FA478E745FEA08D781CEA190FE5\",\"lookupTable\": {\"objectId\": \"8D6793C211D3E4981000E787EC6DE8A4\"},\"expression\": {\"tokens\": [{\"value\": \"YEAR_ID - 1\"}]}}]}],\"mappingType\": \"one_to_one\"}"
```

Sample Response Body:

You can view the new transformation’s definition in the body of the response.

```json
{
  "information": {
    "versionId": "F80506EC91FC4483B17BC8952BB68D2C",
    "primaryLocale": "en-US",
    "objectId": "49713ED26BC94DB3A68964A5A085E2FC",
    "subType": "role_transformation",
    "name": "Last year's",
    "destinationFolderId": "9B25D45A4834A213A70C10B1703D4A77"
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
            "text": "YEAR_ID - 1",
            "tree": {
              "function": "minus",
              "children": [
                {
                  "type": "column_reference",
                  "columnName": "YEAR_ID",
                  "objectId": "8D6791E111D3E4981000E787EC6DE8A4"
                },
                {
                  "type": "constant",
                  "variant": { "type": "int32", "value": "1" }
                }
              ],
              "type": "operator"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "YEAR_ID",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2001-01-02T20:48:44.000Z",
                  "dateModified": "2012-06-06T12:13:04.000Z",
                  "versionId": "256D148442065F43BDC42FBB79438A3F",
                  "primaryLocale": "en-US",
                  "objectId": "8D6791E111D3E4981000E787EC6DE8A4",
                  "subType": "column",
                  "name": "YEAR_ID"
                }
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "-",
                "type": "character",
                "target": {
                  "dateCreated": "2001-01-02T20:47:41.000Z",
                  "dateModified": "2015-03-16T02:51:18.000Z",
                  "versionId": "B0D63F80427C856DA6A8649CB6E0CF93",
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
                "value": "1",
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
      ]
    }
  ],
  "mappingType": "one_to_one"
}
```

Response Code: 201 (A new transformation is created successfully in the changeset.)

### 3. Commit the changeset using [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
 "accept": "application/json"
 "X-MSTR-AuthToken": "u8pcsrhnuluouca9q7cfhsnonb"
 "X-MSTR-MS-Changeset": "7D530B05774048C2A8F0ADA91C54914A"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/7D530B05774048C2A8F0ADA91C54914A/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: u8pcsrhnuluouca9q7cfhsnonb" -H "X-MSTR-MS-Changeset: 7D530B05774048C2A8F0ADA91C54914A"
```

Sample Response Body:

```json
{
  "id": "7D530B05774048C2A8F0ADA91C54914A",
  "type": "metadata",
  "dateCreated": "2022-03-07T07:18:32.834977600Z",
  "dateModified": "2022-03-07T07:20:08.684406800Z",
  "status": "Ready",
  "schemaEdit": true,
  "userName": "MSTR User",
  "mstrUserId": "668B60B14EE194EDD56CD6BF374E1F8D",
  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
  "userWarehouseLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userDateNumberLocale": "en-US"
}
```

### 4. Delete the changeset using [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
 "accept": "application/json"
 "X-MSTR-AuthToken": "u8pcsrhnuluouca9q7cfhsnonb"
 "X-MSTR-MS-Changeset": "7D530B05774048C2A8F0ADA91C54914A"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/7D530B05774048C2A8F0ADA91C54914A" -H "accept: */*" -H "X-MSTR-AuthToken: u8pcsrhnuluouca9q7cfhsnonb" -H "X-MSTR-MS-Changeset: 7D530B05774048C2A8F0ADA91C54914A"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)

## More Examples

Use the following additional examples for creating a transformation object.

### Multiple Transformation Attributes

You can create a transformation object with multiple attributes.

In this sample, you want to create a `"Last year’s"` transformation with two transformation attributes:

- One based on a normal `"Year"` attribute. This transformation attribute has a form with an `"YEAR_ID - 1"` attribute in `"tokens"` format and a `"LU_YEAR"` lookup table.
- A second based on a normal `“Quarter`” attribute. This transformation attribute has a form with an `“LY_QUARTER_ID"` expression in `“tokens”` format and a `"LU_QUARTER"` lookup table .

Sample Request Body:

```json
{
  "information": {
    "name": "Last year's",
    "destinationFolderId": "9B25D45A4834A213A70C10B1703D4A77"
  },
  "attributes": [
    {
      "baseAttribute": { "objectId": "8D679D5111D3E4981000E787EC6DE8A4" },
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "lookupTable": { "objectId": "8D6793C211D3E4981000E787EC6DE8A4" },
          "expression": { "tokens": [{ "value": "YEAR_ID - 1" }] }
        }
      ]
    },
    {
      "baseAttribute": { "objectId": "8D679D4A11D3E4981000E787EC6DE8A4" },
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "lookupTable": { "objectId": "8D6793A411D3E4981000E787EC6DE8A4" },
          "expression": { "tokens": [{ "value": "LY_QUARTER_ID" }] }
        }
      ]
    }
  ],
  "mappingType": "one_to_one"
}
```

### Transformation Attribute Form’s Expression in “tree” Format

In this example, you want to create a `"Last year’s"` transformation with a transformation attribute based on a normal `"Year"` attribute. This transformation attribute has a form with a `"YEAR_ID - 1"` expression in `"tree"` format and a `"LU_YEAR"` lookup table .

Sample Request Body:

```json
{
  "information": {
    "name": "Last year's",
    "destinationFolderId": "9B25D45A4834A213A70C10B1703D4A77"
  },
  "attributes": [
    {
      "baseAttribute": { "objectId": "8D679D5111D3E4981000E787EC6DE8A4" },
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "lookupTable": { "objectId": "8D6793C211D3E4981000E787EC6DE8A4" },
          "expression": {
            "tree": {
              "function": "minus",
              "children": [
                {
                  "type": "column_reference",
                  "columnName": "YEAR_ID",
                  "objectId": "8D6791E111D3E4981000E787EC6DE8A4"
                },
                {
                  "type": "constant",
                  "variant": { "type": "int32", "value": "1" }
                }
              ],
              "type": "operator"
            }
          }
        }
      ]
    }
  ],
  "mappingType": "one_to_one"
}
```
