---
title: Create a scope filter object
sidebar_label: Create a scope filter object
description: This workflow sample demonstrates how to create a new scope filter object using the Modeling service.
---

<Available since="Strategy (November 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new scope filter object using the Modeling service.

1. Create a changeset
1. [Create a scope filter definition](#create-a-new-scope-filter)
1. Commit the changeset
1. Delete the changeset

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

## Create a new scope filter

Endpoint: [POST /api/model/scopeFilters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Scope%20Filters/postScopeFilter).

You want to create a new scope filter with a "Customer last name equals Smith" qualification under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`.

Sample Request Header:

```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
   "X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "global_filter",
    "name": "new scope filter",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "controlType": "view",
  "conditions": [
    {
      "expressionType": "attribute",
      "question": {
        "predefinedObjects": [
          {
            "name": "Customer",
            "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
            "subType": "attribute"
          }
        ]
      },
      "defaultAnswer": {
        "qualification": {
          "tree": {
            "type": "predicate_form_qualification",
            "predicateTree": {
              "attribute": {
                "name": "Customer",
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute"
              },
              "form": {
                "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",
                "subType": "attribute_form_system",
                "name": "Last Name"
              },
              "parameters": [
                {
                  "parameterType": "constant",
                  "constant": {
                    "type": "string",
                    "value": "Smith"
                  }
                }
              ],
              "function": "equals"
            }
          }
        }
      }
    }
  ]
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/scopeFilters/" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -d '{"information":{"subType":"global_filter","name":"new scope filter","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"controlType":"view","conditions":[{"expressionType":"attribute","question":{"predefinedObjects":[{"name":"Customer","objectId":"8D679D3C11D3E4981000E787EC6DE8A4","subType":"attribute"}]},"defaultAnswer":{"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"attribute":{"name":"Customer","objectId":"8D679D3C11D3E4981000E787EC6DE8A4","subType":"attribute"},"form":{"objectId":"8D67A35B11D3E4981000E787EC6DE8A4","subType":"attribute_form_system","name":"Last Name"},"parameters":[{"parameterType":"constant","constant":{"type":"string","value":"Smith"}}],"function":"equals"}}}}}]}'
```

Sample Response Body: You can view the new scope filter's definition in the response body.

```json
{
  "information": {
    "dateCreated": "2025-10-25T05:20:36.565Z",
    "dateModified": "2025-10-25T05:41:55.668Z",
    "versionId": "0884D416481A675FA285D3B8E85FA896",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "639FF974194E4469896352772CB0B379",
    "subType": "global_filter",
    "name": "new scope filter",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "controlType": "view",
  "conditions": [
    {
      "expressionType": "attribute",
      "question": {
        "predefinedObjects": [
          {
            "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Customer"
          }
        ],
        "displayForms": "all_forms"
      },
      "defaultAnswer": {
        "qualification": {
          "text": "Customer ({Last Name}) = \"Smith\"",
          "tree": {
            "type": "predicate_form_qualification",
            "predicateId": "011453986C074889829F6CADA7F7E129",
            "predicateText": "Customer ({Last Name}) = \"Smith\"",
            "predicateTree": {
              "function": "equals",
              "parameters": [
                {
                  "parameterType": "constant",
                  "constant": {
                    "type": "string",
                    "value": "Smith"
                  }
                }
              ],
              "attribute": {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              },
              "form": {
                "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",
                "subType": "attribute_form_system",
                "name": "Last Name"
              },
              "dataLocale": "en-US"
            }
          }
        }
      },
      "restriction": {
        "required": false,
        "allowPersonalAnswers": "none"
      },
      "id": "FD94DF5EFD7743EEAEF0ED32151A14E8"
    }
  ]
}
```

Response Code: 201 (A new scope filter is created successfully in the changeset.)
