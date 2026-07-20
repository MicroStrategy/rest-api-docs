---
title: Update a scope filter's definition
sidebar_label: Update a scope filter's definition
description: This workflow sample demonstrates how to update a scope filter's definition using the Modeling service.
---

<Available since="Strategy (November 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a scope filter's definition through the using service.

1. Create a changeset
1. [Update a scope filter definition](#update-a-scope-filter)
1. Commit the changeset
1. Delete the changeset

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

## Update a scope filter

Endpoint:[PUT /api/model/scopeFilters/\{scopeFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Scope%20Filters/putScopeFilter)

You want to update the scope filter to have an attribute elements prompt based on the "Customer" attribute. The attribute elements should be in the "Smith:Laurell" and "Smith:Sarah" lists.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset": "C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Request Body:

```json
{
  "information": {
    "name": "new scope filter"
  },
  "controlType": "view",
  "conditions": [
    {
      "question": {
        "attribute": {
          "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Customer"
        },
        "listAllElements": true
      },
      "defaultAnswer": {
        "elements": [
          {
            "display": "Smith:Laurell",
            "elementId": "h564"
          },
          {
            "display": "Smith:Sarah",
            "elementId": "h565"
          }
        ]
      },
      "restriction": {
        "required": false,
        "allowPersonalAnswers": "none",
        "min": 1
      },
      "function": "in",
      "id": "FD94DF5EFD7743EEAEF0ED32151A14E8"
    }
  ]
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/scopeFilters/639FF974194E4469896352772CB0B379" -H "accept: application/json" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1" -d '{"information":{"name":"new scope filter"},"controlType":"view","conditions":[{"question":{"attribute":{"objectId":"8D679D3C11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Customer"},"listAllElements":true},"defaultAnswer":{"elements":[{"display":"Smith:Laurell","elementId":"h564"},{"display":"Smith:Sarah","elementId":"h565"}]},"restriction":{"required":false,"allowPersonalAnswers":"none","min":1},"function":"in","id":"FD94DF5EFD7743EEAEF0ED32151A14E8"}]}'
```

Sample Response Body: You can view the scope filter's new definition in the response body.

```json
{
  "information": {
    "dateCreated": "2025-10-25T05:20:36.565Z",
    "dateModified": "2025-10-25T09:20:22.989Z",
    "versionId": "9E9D1EB3478833521A9B43A9C1A6E159",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "639FF974194E4469896352772CB0B379",
    "subType": "global_filter",
    "name": "new scope filter"
  },
  "controlType": "view",
  "conditions": [
    {
      "question": {
        "attribute": {
          "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Customer"
        },
        "listAllElements": true
      },
      "defaultAnswer": {
        "elements": [
          {
            "display": "Smith:Laurell",
            "elementId": "h564"
          },
          {
            "display": "Smith:Sarah",
            "elementId": "h565"
          }
        ]
      },
      "restriction": {
        "required": false,
        "allowPersonalAnswers": "none",
        "min": 1
      },
      "function": "in",
      "id": "FD94DF5EFD7743EEAEF0ED32151A14E8"
    }
  ]
}
```

Response Code: 200 (The scope filter's definition is updated successfully in the changeset.)
