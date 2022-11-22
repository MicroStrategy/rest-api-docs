---
sidebar_label: Changesets
title: Changesets
description: The REST API provides a way to create and modify modeling objects through changesets. It is involved in most modeling APIs.
---

A changeset maintains an indivisible group of creations or modifications on modeling objects. They allow you to manipulate objects via modeling APIs (i.e. filters, facts, attributes, etc.) and validate the changes before committing the changes to metadata. All the changes in the changeset should be committed as one transaction or abandoned altogether.

:::info

If the changeset is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions). The `"schemaEdit"` query is required to be `true` during the creation of the changeset through the API. After committing the schema changes, you should also call [POST /api/model/schema/reload](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-schemaReload) to reload the schema.

Some modeling APIs requires either a `X-MSTR-ProjectID` (project ID) or `X-MSTR-MS-Changeset` (changeset ID) in the header. The project ID is required to return an object's definition in the metadata. The changeset ID is required to return an objects's definition within a specific changeset. To execute the request, either the project ID or changeset ID needs to be provided. If both are provided, only the changeset ID is used.

:::

## General Workflow

The general workflow for using [changesets APIs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets) involves:

1. [Creating a changeset](#create-a-changeset)
1. [Making the modeling APIs call to get, create, or modify objects (i.e. filters, facts, attributes, etc.)](#make-a-modeling-api-call)
1. [Committing the changeset](#commit-a-changeset)
1. [Reload the schema](#reload-the-schema). This is needed only when `"schemaEdit"` is `true`.
1. [Deleting the changeset](#delete-the-changeset)

### Create a changeset

Use [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset).

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

### Make a modeling API call

In this example, we will create an attribute.

Use [POST /api/model/attributes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-createAttribute).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

```json
{
  "expression": {
    "tokens": [
      {
        "value": "<attribute_form_expression>"
      }
    ]
  }
}
```

Sample Request Body:

```json
{
  "information": {
    "subType": "attribute",
    "name": "Subcategory",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "forms": [
    {
      "name": "ID",
      "description": "Subcategory ID",
      "category": "ID",
      "displayFormat": "number",
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "SUBCAT_ID"
              }
            ]
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
      "name": "DESC",
      "description": "Subcategory Name",
      "category": "DESC",
      "isMultilingual": true,
      "displayFormat": "text",
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "SUBCAT_DESC"
              }
            ]
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
    "name": "ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "name": "DESC"
      }
    ],
    "browseDisplays": [
      {
        "name": "DESC"
      }
    ]
  },
  "sorts": {
    "reportSorts": [
      {
        "form": {
          "name": "DESC"
        },
        "ascending": true
      }
    ],
    "browseSorts": [
      {
        "form": {
          "name": "DESC"
        },
        "ascending": true
      }
    ]
  }
}
```

Sample Curl:

In this sample workflow, you want to return the newly created attribute with its expression in all formats. Therefore, you should set `showExpressionAs=tree` and `showExpressionsAs=tokens`.

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d {\\"information\\":{\\"subType\\":\\"attribute\\",\\"name\\":\\"Subcategory\\",\\"destinationFolderId\\":\\"98FE182C2A10427EACE0CD30B6768258\\"},\\"forms\\":[{\\"name\\":\\"ID\\",\\"description\\":\\"Subcategory ID\\",\\"category\\":\\"ID\\",\\"displayFormat\\":\\"number\\",\\"expressions\\":[{\\"expression\\":{\\"tokens\\":[{\\"value\\":\\"SUBCAT_ID\\"}]},\\"tables\\":[{\\"objectId\\":\\"76C6FEAB49D08F57BC6FC9B644743EEF\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"CITY_SUBCATEG_SLS\\"},{\\"objectId\\":\\"8D67937411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_ITEM\\"},{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"}]}],\\"alias\\":\\"SUBCAT_ID\\",\\"lookupTable\\":{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"}},{\\"name\\":\\"DESC\\",\\"description\\":\\"Subcategory Name\\",\\"category\\":\\"DESC\\",\\"isMultilingual\\":true,\\"displayFormat\\":\\"text\\",\\"expressions\\":[{\\"expression\\":{\\"tokens\\":[{\\"value\\":\\"SUBCAT_DESC\\"}]},\\"tables\\":[{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"}]}],\\"alias\\":\\"SUBCAT_DESC\\",\\"lookupTable\\":{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"}}],\\"attributeLookupTable\\":{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"},\\"keyForm\\":{\\"name\\":\\"ID\\"},\\"displays\\":{\\"reportDisplays\\":[{\\"name\\":\\"DESC\\"}],\\"browseDisplays\\":[{\\"name\\":\\"DESC\\"}]},\\"sorts\\":{\\"reportSorts\\":[{\\"form\\":{\\"name\\":\\"DESC\\"},\\"ascending\\":true}],\\"browseSorts\\":[{\\"form\\":{\\"name\\":\\"DESC\\"},\\"ascending\\":true}]}}"
```

Sample Response Body:

You can view the new attribute's definition in the body of the response.

```json
{
  "information": {
    "versionId": "45E696C357BC4BE882ED945E3EEDFE09",
    "primaryLocale": "en-US",
    "objectId": "27DA76BDDD8B4EEEA890B76F9BC77C9D",
    "subType": "attribute",
    "name": "Subcategory",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
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
          "expressionId": "B8AAB62201C44E349D3CE80CEC36200E",
          "expression": {
            "text": "SUBCAT_ID",
            "tree": {
              "type": "column_reference",
              "columnName": "SUBCAT_ID",
              "objectId": "8D67921711D3E4981000E787EC6DE8A4"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "SUBCAT_ID",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2001-01-02T20:48:47.000Z",
                  "dateModified": "2012-06-06T12:13:04.000Z",
                  "versionId": "256D148442065F43BDC42FBB79438A3F",
                  "primaryLocale": "en-US",
                  "objectId": "8D67921711D3E4981000E787EC6DE8A4",
                  "subType": "column",
                  "name": "SUBCAT_ID"
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
          "expressionId": "41C08B7CE11440569CA7AE54A28DCC55",
          "expression": {
            "text": "SUBCAT_DESC",
            "tree": {
              "type": "column_reference",
              "columnName": "SUBCAT_DESC",
              "objectId": "8D67928711D3E4981000E787EC6DE8A4"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "SUBCAT_DESC",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2001-01-02T20:48:34.000Z",
                  "dateModified": "2012-06-06T12:13:04.000Z",
                  "versionId": "256D148442065F43BDC42FBB79438A3F",
                  "primaryLocale": "en-US",
                  "objectId": "8D67928711D3E4981000E787EC6DE8A4",
                  "subType": "column",
                  "name": "SUBCAT_DESC"
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
  "sorts": {
    "reportSorts": [
      {
        "form": {
          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
          "name": "DESC"
        },
        "ascending": true
      }
    ],
    "browseSorts": [
      {
        "form": {
          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
          "name": "DESC"
        },
        "ascending": true
      }
    ]
  },
  "relationships": []
}
```

Response Code: 201 (A new attribute is created successfully in the changeset.)

### Commit a changeset

Use [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Sample Request Body: Empty

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

### Reload the schema

Use [POST /api/model/schema/reload](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-schemaReload).

This is needed only when `"schemaEdit"` is `true`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "updateTypes": ["table_key", "entry_level", "logical_size", "clear_element_cache"]
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/reload" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d '{"updateTypes": ["table_key","entry_level,"logical_size","clear_element_cache"]}'
```

Sample Response Body:

```json
{}
```

Sample Response Code: 200 (The schema reload (synchronous call) executes successfully.)

### Delete the changeset

Use [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset).

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
