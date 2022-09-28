---
title: Workflow samples - Retrieve an attribute's definition
sidebar_label: Retrieve an attribute's definition
description: This workflow sample demonstrates how to retrieve the definition of an attribute through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-9a89680f-6695-47d0-b939-4cb8dee003dd?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

## Retrieve an attribute's definition

This workflow sample demonstrates how to retrieve the definition of an attribute through the Modeling service.

You want to get the definition of the `"Subcategory"` attribute object. The object ID of the attribute is `E8C034036E4EE6404513A6B12FAE9481` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the attribute's definition using [GET /api/model/attributes/{attributeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-getAttributeDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "73a5d2gggbqgftu9objmup6868"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/E8C034036E4EE6404513A6B12FAE9481" -H "accept: application/json" -H "X-MSTR-AuthToken: 73a5d2gggbqgftu9objmup6868" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
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

Response Code: 200 (The attribute's definition was returned successfully.)

## Retrieve an attribute's definition with expressions in tree and tokens formats

In this workflow sample, you want to get the definition of the "`Subcategory`“ attribute object, with the expression returned in tree and tokens formats. The object ID of the attribute is `E8C034036E4EE6404513A6B12FAE9481` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

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

This workflow sample is similar to [Retrieve an Attribute's Definition](#retrieve-an-attributes-definition), except with `showExpressionAs=tree` and `showExpressionAs=tokens`.

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/E8C034036E4EE6404513A6B12FAE9481?showExpressionAs=tree&showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken: 73a5d2gggbqgftu9objmup6868" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the attribute’s definition in the body of the response. Notice that, each attribute form's expression contains the fields “tree“ and “tokens“, representing the customer expression in `tree` and `tokens` format respectively.

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
          "expressionId": "8D679F71E49811D387E70010A4E86DEC",
          "expression": {
            "text": "SUBCAT_DESC",
            "tree": {
              "type": "column_reference",
              "dependenceType": "independent",
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
