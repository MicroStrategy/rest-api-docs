---
title: Retrieve an attribute's definition within a changeset
sidebar_label: Retrieve an attribute's definition within a changeset
description: This workflow sample demonstrates how to retrieve an attribute's definition within a changeset.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5038d0d2-f112-47fc-b602-e01c58fd8aec?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve an attribute's definition within a changeset.

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You want to get the definition of the "Subcategory" attribute object. The object ID of the attribute is `E8C034036E4EE6404513A6B12FAE9481` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Get an attribute's definition within a changeset

Use [GET /api/model/attributes/\{attributeId}.](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-getAttributeDetails)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-MS-Changeset": "FA282B2D8EFD4327A652FE09B32A439D"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/E8C034036E4EE6404513A6B12FAE9481" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-MS-Changeset: FA282B2D8EFD4327A652FE09B32A439D"
```

Sample Response Body:

You can view the attribute's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-03-23T01:17:19.659Z",
    "dateModified": "2021-03-23T01:17:19.659Z",
    "versionId": "8B73775A1C4D575C9761D0B21C4E8269",
    "primaryLocale": "en-US",
    "objectId": "E8C034036E4EE6404513A6B12FAE9481",
    "subType": "attribute",
    "name": "Subcategory"
  },
  "forms": [
    {
      "id": "45C11FA478E745FEA08D781CEA190FE5",
      "name": "ID",
      "description": "Subcategory ID",
      "category": "ID",
      "type": "system",
      "displayFormat": "number",
      "dataType": {
        "type": "integer",
        "precision": 2,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "8D679F6FE49811D387E70010A4E86DEC",
          "expression": {
            "text": "SUBCAT_ID"
          },
          "tables": [
            {
              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",
              "subType": "logical_table",
              "name": "CITY_SUBCATEG_SLS"
            },
            {
              "objectId": "8D67937411D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_ITEM"
            },
            {
              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_SUBCATEG"
            }
          ]
        }
      ],
      "alias": "SUBCAT_ID",
      "lookupTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      }
    },
    {
      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
      "name": "DESC",
      "description": "Subcategory Name",
      "category": "DESC",
      "type": "system",
      "isMultilingual": true,
      "displayFormat": "text",
      "dataType": {
        "type": "n_var_char",
        "precision": 50,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "8D679F71E49811D387E70010A4E86DEC",
          "expression": {
            "text": "SUBCAT_DESC"
          },
          "tables": [
            {
              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_SUBCATEG"
            }
          ]
        }
      ],
      "alias": "SUBCAT_DESC",
      "lookupTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
    "subType": "logical_table",
    "name": "LU_SUBCATEG"
  },
  "keyForm": {
    "id": "45C11FA478E745FEA08D781CEA190FE5",
    "name": "ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
        "name": "DESC"
      }
    ],
    "browseDisplays": [
      {
        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
        "name": "DESC"
      }
    ]
  },
  "sorts": {},
  "relationships": [
    {
      "parent": {
        "objectId": "E8C034036E4EE6404513A6B12FAE9481",
        "subType": "attribute",
        "name": "Subcategory"
      },
      "child": {
        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Item"
      },
      "relationshipTable": {
        "objectId": "8D67937411D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_ITEM"
      },
      "relationshipType": "one_to_many"
    },
    {
      "parent": {
        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Category"
      },
      "child": {
        "objectId": "E8C034036E4EE6404513A6B12FAE9481",
        "subType": "attribute",
        "name": "Subcategory"
      },
      "relationshipTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      },
      "relationshipType": "one_to_many"
    }
  ]
}
```

Response Code: 200 (The attribute's definition is returned successfully.)
