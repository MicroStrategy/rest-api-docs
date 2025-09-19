---
title: Retrieve data model attributes
description: This workflow demonstrates how to retrieve data model attributes using REST API.
---

<Available since="Strategy ONE (September 2025)" />

This workflow sample demonstrates how to retrieve one or more data model attributes using the REST API with and without a changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

- [Retrieve a data model attribute](#retrieve-a-data-model-attribute)
- [Retrieve data model attributes](#retrieve-data-model-attributes)

A detailed description of each step of this workflow is listed below.

## Retrieve a data model attribute

You can retrieve an attribute definition in a data model using the following endpoint: [GET /api/model/dataModels/\{dataModelId}/attributes/\{attributeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelAttribute)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/attributes/EE709099BFB74E3A879A1F5B5ABBB037' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/attributes/EE709099BFB74E3A879A1F5B5ABBB037' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2025-08-27T08:45:26.816Z",
    "dateModified": "2025-08-27T08:45:26.816Z",
    "versionId": "1538F211514F0DAA243EA09477A0BF3F",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "EE709099BFB74E3A879A1F5B5ABBB037",
    "subType": "attribute",
    "name": "Year",
    "description": "Unique identifier for each year, used for data tracking and analysis.",
    "destinationFolderId": "73F519E9FCA5413586F3F8C706E1F2EA"
  },
  "forms": [
    {
      "id": "45C11FA478E745FEA08D781CEA190FE5",
      "name": "Year ID",
      "description": "Unique identifier for each year, used for data tracking and analysis.",
      "category": "ID",
      "type": "system",
      "displayFormat": "number",
      "dataType": {
        "type": "integer",
        "precision": 2,
        "scale": 0
      },
      "expressions": [
        {
          "expressionId": "AD0EE30238364DD1AF66ABE703CBD60D",
          "expression": {
            "text": "year_id"
          },
          "tables": [
            {
              "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
              "subType": "logical_table",
              "name": "lu_year"
            }
          ]
        },
        {
          "expressionId": "195B57DCC4544C92BE9AEF6063D09FE3",
          "expression": {
            "text": "year_id"
          },
          "tables": [
            {
              "objectId": "2249F3085D67417E904FBF789EBAFDC8",
              "subType": "logical_table",
              "name": "lu_quarter"
            }
          ]
        }
      ],
      "alias": "year_id",
      "lookupTable": {
        "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
        "subType": "logical_table",
        "name": "lu_year"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
    "subType": "logical_table",
    "name": "lu_year"
  },
  "keyForm": {
    "id": "45C11FA478E745FEA08D781CEA190FE5",
    "name": "Year ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "id": "45C11FA478E745FEA08D781CEA190FE5",
        "name": "Year ID"
      }
    ],
    "browseDisplays": [
      {
        "id": "45C11FA478E745FEA08D781CEA190FE5",
        "name": "Year ID"
      }
    ]
  },
  "sorts": {},
  "relationships": [],
  "nonAggregatable": false,
  "autoDetectLookupTable": true
}
```

Response Code: 200 (The attribute's definition is returned successfully.)

## Retrieve data model attributes

You can also retrieve data model attributes. Parameters include pagination options such as `limit` and `offset`.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/attributes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelAttributes)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/attributes' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/attributes' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response Body:

```json
{
  "offset": 0,
  "limit": -1,
  "total": 1,
  "attributes": [
    {
      "information": {
        "dateCreated": "2025-08-27T08:45:26.816Z",
        "dateModified": "2025-08-27T08:45:26.816Z",
        "versionId": "1538F211514F0DAA243EA09477A0BF3F",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "EE709099BFB74E3A879A1F5B5ABBB037",
        "subType": "attribute",
        "name": "Year",
        "description": "Unique identifier for each year, used for data tracking and analysis.",
        "destinationFolderId": "73F519E9FCA5413586F3F8C706E1F2EA"
      },
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "name": "Year ID",
          "description": "Unique identifier for each year, used for data tracking and analysis.",
          "category": "ID",
          "type": "system",
          "displayFormat": "number",
          "dataType": {
            "type": "integer",
            "precision": 2,
            "scale": 0
          },
          "expressions": [
            {
              "expressionId": "AD0EE30238364DD1AF66ABE703CBD60D",
              "expression": {
                "text": "year_id"
              },
              "tables": [
                {
                  "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
                  "subType": "logical_table",
                  "name": "lu_year"
                }
              ]
            },
            {
              "expressionId": "195B57DCC4544C92BE9AEF6063D09FE3",
              "expression": {
                "text": "year_id"
              },
              "tables": [
                {
                  "objectId": "2249F3085D67417E904FBF789EBAFDC8",
                  "subType": "logical_table",
                  "name": "lu_quarter"
                }
              ]
            }
          ],
          "alias": "year_id",
          "lookupTable": {
            "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
            "subType": "logical_table",
            "name": "lu_year"
          }
        }
      ],
      "attributeLookupTable": {
        "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
        "subType": "logical_table",
        "name": "lu_year"
      },
      "keyForm": {
        "id": "45C11FA478E745FEA08D781CEA190FE5",
        "name": "Year ID"
      },
      "displays": {
        "reportDisplays": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "Year ID"
          }
        ],
        "browseDisplays": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "Year ID"
          }
        ]
      },
      "sorts": {},
      "relationships": [],
      "nonAggregatable": false,
      "autoDetectLookupTable": true
    }
  ]
}
```

Response Code: 200 (All attributes in data model were returned successfully.)
