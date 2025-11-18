---
title: Retrieve a scope filter's definition within a changeset
sidebar_label: Retrieve a scope filter's definition within a changeset
description: This workflow sample demonstrates how to retrieve a scope filter's definition within a changeset.
---

<Available since="Strategy ONE (November 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a scope filter's definition within a changeset.

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md). If you plan to use the response of `GET /api/model/scopeFilters/{scopeFilterId}` to create a new filter or update the filter's definition, Strategy recommends to associate all requests to one changeset.

1. Create a changeset.
1. [Get the scope filter's definition within a changeset.](#get-a-scope-filter-definition-within-a-changeset)
1. Delete the changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Get a scope filter definition within a changeset

You want to get the definition of the scope filter with a "Customer last name equals Smith" qualification. The scope filter ID is `639FF974194E4469896352772CB0B379`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

Endpoint: [GET /api/model/scopeFilters/\{scopeFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Scope%20Filters/getScopeFilter)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/scopeFilters/639FF974194E4469896352772CB0B379" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

You can view the scope filter's definition in the response body.

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
    "name": "new scope filter"
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

Response Code: 200 (The scope filter's definition is returned successfully.)
