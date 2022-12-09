---
title: Workflow sample - Retrieve an attribute's relationships within a changeset
sidebar_label: Retrieve an attribute's relationships within a changeset
description: This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-8b42c446-de96-4899-b3c1-005f25702596?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset.

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md).

:::

1. Create a changeset.
1. [Get an attribute's relationships within a changeset.](#get-an-attributes-relationships-within-a-changeset)
1. Delete the changeset.

You want to get the relationships of the `"Month"` attribute object. The object ID of the attribute is `8D679D4411D3E4981000E787EC6DE8A4` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Get an attribute's relationships within a changeset

Use [GET /api/model/systemHierarchy/attributes/{attributeId}/relationships](<https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System> Hierarchy/ms-getAttributeRelationships).

You want to get the relationship of the `"Month"` attribute object. The object ID of the attribute is `8D679D4411D3E4981000E787EC6DE8A4` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-MS-Changeset": "FA282B2D8EFD4327A652FE09B32A439D"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/systemHierarchy/attributes/8D679D4411D3E4981000E787EC6DE8A4/relationships" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-MS-Changeset: FA282B2D8EFD4327A652FE09B32A439D"
```

Sample Response Body:

You can view the attribute's relationship in the body of the response.

```json
{
  "relationships": [
    {
      "parent": {
        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Month of Year"
      },
      "child": {
        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Month"
      },
      "relationshipTable": {
        "objectId": "8D67938011D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_MONTH"
      },
      "relationshipType": "one_to_many"
    },
    {
      "parent": {
        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Quarter"
      },
      "child": {
        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Month"
      },
      "relationshipTable": {
        "objectId": "8D67938011D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_MONTH"
      },
      "relationshipType": "one_to_many"
    },
    {
      "parent": {
        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Month"
      },
      "child": {
        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",
        "subType": "attribute",
        "name": "Day"
      },
      "relationshipTable": {
        "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",
        "subType": "logical_table",
        "name": "LU_DAY"
      },
      "relationshipType": "one_to_many"
    }
  ]
}
```

Response Code: 200 (The attribute's relationships are returned successfully.)
