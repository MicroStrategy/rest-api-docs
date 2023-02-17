---
title: Create a consolidation
sidebar_label: Create a consolidation
description: This workflow sample demonstrates how to create a new consolidation object through the Modeling service.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cd93cd32-2391-4f2f-9308-9f47783540bf?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new consolidation object through the Modeling service.

1. Create a changeset.
1. [Create a new consolidation.](#create-a-new-consolidation)
1. Commit a changeset.
1. Delete a changeset.

[More Example: Create a consolidation with two elements.](#example-create-a-consolidation-with-two-elements)

You want to create a new consolidation with the expression "({Customer Age=20 AND Customer=Aaby:Alen} + {Customer City=Addison})" under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is 98FE182C2A10427EACE0CD30B6768258. The project ID is 091B51154B22036C53CFBB9958B2E8FC.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).<br/> Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a new consolidation

Use `POST /api/model/consolidation`

The type of elements inside the consolidation must be "calculation". An [example](#example-create-a-consolidation-with-two-elements) for creating a new consolidation with two elements is described below.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body:

:::tip

For more details on setting format properties, please refer to [Format samples](../manage-derived-element-objects/format-samples.md). The format for consolidations is the same as derived elements.

:::

```json
{
  "information": {
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258",
    "name": "Create Consolidation"
  },
  "elements": [
    {
      "name": "Example",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "tree": {
          "function": "plus",
          "children": [
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "20",
                  "elementId": "h20",
                  "attribute": {
                    "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer Age"
                  }
                },
                {
                  "display": "Aaby:Alen",
                  "elementId": "h7796",
                  "attribute": {
                    "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer"
                  }
                }
              ]
            },
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Addison",
                  "elementId": "h1",
                  "attribute": {
                    "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer City"
                  }
                }
              ]
            }
          ],
          "type": "operator"
        }
      }
    }
  ],
  "subtotal": "disable"
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/consolidations" -H "accept: application/json" -H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" -H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" -H "Content-Type: application/json" -d "{\"information\":{\"destinationFolderId\":\"98FE182C2A10427EACE0CD30B6768258\",\"name\":\"Create Consolidation\"},\"elements\":[{\"id\":\"6A4A4FAF4A9D868F53754FB3417A3CC1\",\"name\":\"Example\",\"type\":\"calculation\",\"format\":{\"header\":[],\"values\":[]},\"expression\":{\"text\":\"20, Aaby:Alen + Addison\",\"tree\":{\"function\":\"plus\",\"children\":[{\"type\":\"elements_object\",\"elements\":[{\"display\":\"20\",\"elementId\":\"h20\",\"attribute\":{\"objectId\":\"6E069E4C11D3E4E41000E887EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer Age\"}},{\"display\":\"Aaby:Alen\",\"elementId\":\"h7796\",\"attribute\":{\"objectId\":\"8D679D3C11D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer\"}}]},{\"type\":\"elements_object\",\"elements\":[{\"display\":\"Addison\",\"elementId\":\"h1\",\"attribute\":{\"objectId\":\"8D679D3A11D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer City\"}}]}],\"type\":\"operator\"}}}],\"subtotal\":\"disable\"}"
```

Sample Response Body:

You can view the new consolidation's definition in the body of the response.

```json
{
  "information": {
    "versionId": "9E355E1F98C74D47B7EA30C4160FD625",
    "primaryLocale": "en-US",
    "objectId": "BE0FAD624A1A48BC9EFCE80F23C2D6C3",
    "subType": "consolidation",
    "name": "Create Consolidation",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "elements": [
    {
      "id": "9360AEF0C38341E1ADA498692C4257C8",
      "name": "Example",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "20, Aaby:Alen + Addison",
        "tree": {
          "function": "plus",
          "children": [
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "20",
                  "elementId": "h20",
                  "attribute": {
                    "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer Age"
                  }
                },
                {
                  "display": "Aaby:Alen",
                  "elementId": "h7796",
                  "attribute": {
                    "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer"
                  }
                }
              ]
            },
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Addison",
                  "elementId": "h1",
                  "attribute": {
                    "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer City"
                  }
                }
              ]
            }
          ],
          "type": "operator"
        }
      }
    }
  ],
  "subtotal": "disable"
}
```

Response Code: 201 (A new consolidation is created successfully in the changeset.)

## Example: Create a consolidation with two elements

In the above example, the consolidation has only one element. However, it can have multiple elements, and an element can be referred by other elements.

In this example, you want to create a consolidation with two elements. The expression of element_a is `({Customer Age=20 AND Customer=Aaby:Alen} + {Customer City=Addison})` and the expression of element_b is `element_a + 1`.

Sample Response Body:

```json
{
  "information": {
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258",
    "name": "Create Consolidation"
  },
  "elements": [
    {
      "name": "element_a",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "tree": {
          "function": "plus",
          "children": [
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "20",
                  "elementId": "h20",
                  "attribute": {
                    "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer Age"
                  }
                },
                {
                  "display": "Aaby:Alen",
                  "elementId": "h7796",
                  "attribute": {
                    "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer"
                  }
                }
              ]
            },
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Addison",
                  "elementId": "h1",
                  "attribute": {
                    "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer City"
                  }
                }
              ]
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "name": "element_b",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "tree": {
          "function": "plus",
          "children": [
            {
              "type": "object_reference",
              "target": {
                "name": "element_a"
              },
              "isIndependent": 0
            },
            {
              "type": "constant",
              "variant": {
                "type": "double",
                "value": "1.0"
              }
            }
          ],
          "type": "operator"
        }
      }
    }
  ],
  "subtotal": "disable"
}
```
