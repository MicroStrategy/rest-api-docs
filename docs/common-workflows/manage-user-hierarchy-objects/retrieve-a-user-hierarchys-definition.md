---
title: Workflow sample - Retrieve a user hierarchy's definition
sidebar_label: Retrieve a user hierarchy's definition
description: This workflow sample demonstrates how to retrieve an user hierarchy's definition within a changeset.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-6403c6f8-0173-4b2c-826c-029742877689?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve an user hierarchy's definition within a changeset.

You want to get the definition of the Time user hierarchy object, in the MicroStrategy Tutorial project, which contains the relationship between the Year, Month of Year, Quarter, Month, and Day attributes. The object ID of the user hierarchy is `B793B55C11D3E4E51000E887EC6DE8A4`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md).

:::

## Get the definition of the specified user hierarchy within a changeset

Endpoint: [GET /api/model/hierarchies/{hierarchyId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html/User%20Hierarchies/ms-getHierarchy).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies/B793B55C11D3E4E51000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"
```

Sample Response Body: You can view the user hierarchy's definition in the body of the response. This includes the information, attributes, and relationships of this specified user hierarchy. See [User hierarchy import parameters](./user-hierarchy-import-parameters.md) for more information about the import parameters that define the user hierarchy.

```json
{
  "information": {
    "dateCreated": "2001-01-02T20:47:24.000Z",
    "dateModified": "2009-06-12T18:43:44.000Z",
    "versionId": "8951A91F41520C9A19E23CB22CF594B4",
    "primaryLocale": "en-US",
    "objectId": "B793B55C11D3E4E51000E887EC6DE8A4",
    "subType": "dimension_user",
    "name": "Time"
  },
  "useAsDrillHierarchy": true,
  "attributes": [
    {
      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",
      "name": "Month",
      "entryPoint": true,
      "elementDisplayOption": "all_elements"
    },
    {
      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",
      "name": "Month of Year",
      "entryPoint": true,
      "elementDisplayOption": "all_elements"
    },
    {
      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",
      "name": "Quarter",
      "entryPoint": true,
      "elementDisplayOption": "all_elements"
    },
    {
      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
      "name": "Year",
      "entryPoint": true,
      "elementDisplayOption": "all_elements"
    },
    {
      "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",
      "name": "Day",
      "entryPoint": true,
      "elementDisplayOption": "limited_elements",
      "limit": 50
    }
  ],
  "relationships": [
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
      }
    },
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
      }
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
      }
    },
    {
      "parent": {
        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Year"
      },
      "child": {
        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Month"
      }
    },
    {
      "parent": {
        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Year"
      },
      "child": {
        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Quarter"
      }
    }
  ]
}
```

Response Code: 200 (Hierarchy's definition is returned successfully.)
