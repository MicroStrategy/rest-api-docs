---
title: Workflow Sample - Update a User Hierarchy's Definition
sidebar_label: Update a User Hierarchy's Definition
description: This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c257416e-ee2c-46fc-9a71-f2ea390c8452?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service.

You want to update the definition of the Time user hierarchy with following changes:

- Remove the Day attribute and its relationship.
- Move it to an object folder with an ID of `8A1831FF494F528D02A4A8BF5FB73459`.
- Rename the user hierarchy to TimeToMonth.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

Obtain the user hierarchy ID from [GET /api/model/hierarchies](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-getHierarchies).

:::

:::tip

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

## [Create a changeset](./retrieve-a-user-hierarchys-definition.md)

Endpoint: [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

## Update the user hierarchy's definition

Endpoint: [PATCH /api/model/hierarchies/{hierarchyId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-updateHiearchy).

1. Provide the following headers in the request.

| Location | Name                | Description             |
| -------- | ------------------- | ----------------------- |
| header   | X-MSTR-authToken    | The authorization token |
| header   | X-MSTR-ProjectID    | The ID of the project   |
| header   | X-MSTR-MS-Changeset | The ID of the changeset |

1. Provide the ID of the user hierarchy you want to update.
1. You can modify the fields shown below. The "subType" field is not included since it cannot be modified through this REST API.

| Fields              | Name                 | Description                                                                                                       | Data Type                   |
| ------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------- |
| information         | name                 | The name of the user hierarchy. This should be a user-friendly name for identifying the user hierarchy.           | string                      |
| information         | destinationFolderId  | The folder ID where the new user hierarchy is saved.                                                              | string                      |
| useAsDrillHierarchy |                      | Indicates the user hierarchy subtype                                                                              | Boolean                     |
| attributes          | objectId             | The ID of the attribute in the user hierarchy.                                                                    | string                      |
| attributes          | name                 | The name of the attribute.                                                                                        | string                      |
| attributes          | entryPoint           | Indicates whether the current attribute is a single entry point attribute.                                        | Boolean                     |
| attributes          | elementDisplayOption | Indicates the element display type of the specified attribute.                                                    | string                      |
| attributes          | filter               | A list of standalone filter objects with "objectId", "subType", and "name" that apply to the specified attribute. | List`<ObjectInfoReference>` |
| attributes          | limit                | The number of elements to display. Required for limited_elements with a range of [1, 1000000].                    | integer                     |
| relationships       | parent               | The parent attribute of the relationship.                                                                         | ObjectInfoReference         |
| relationships       | child                | The child attribute of the relationship.                                                                          | ObjectInfoReference         |

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "dimension_user",
    "name": "TimeToMonth"
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
    }
  ],
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

Sample Curl:

```bash
curl -X PUT "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies/B793B55C11D3E4E51000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: EB3A4F66E6A8413E9C36633533D0BA31" -H "Content-Type: application/json" -d "{\"information\":{\"destinationFolderId\":\"8A1831FF494F528D02A4A8BF5FB73459\",\"subType\":\"dimension_user\",\"name\":\"TimeToMonth\"},\"useAsDrillHierarchy\":true,\"attributes\":[{\"objectId\":\"8D679D4411D3E4981000E787EC6DE8A4\",\"name\":\"Month\",\"entryPoint\":true,\"elementDisplayOption\":\"all_elements\"},{\"objectId\":\"8D679D4511D3E4981000E787EC6DE8A4\",\"name\":\"Month of Year\",\"entryPoint\":true,\"elementDisplayOption\":\"all_elements\"},{\"objectId\":\"8D679D4A11D3E4981000E787EC6DE8A4\",\"name\":\"Quarter\",\"entryPoint\":true,\"elementDisplayOption\":\"all_elements\"},{\"objectId\":\"8D679D5111D3E4981000E787EC6DE8A4\",\"name\":\"Year\",\"entryPoint\":true,\"elementDisplayOption\":\"all_elements\"}],\"relationships\":[{\"parent\":{\"objectId\":\"8D679D4511D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Month of Year\"},\"child\":{\"objectId\":\"8D679D4411D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Month\"}},{\"parent\":{\"objectId\":\"8D679D4A11D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Quarter\"},\"child\":{\"objectId\":\"8D679D4411D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Month\"}},{\"parent\":{\"objectId\":\"8D679D5111D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Year\"},\"child\":{\"objectId\":\"8D679D4411D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Month\"}},{\"parent\":{\"objectId\":\"8D679D5111D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Year\"},\"child\":{\"objectId\":\"8D679D4A11D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Quarter\"}}]}"
```

Sample Response Body: You can view the updated user hierarchy's definition in the body of the response. See [User Hierarchy Import Parameters](./user-hierarchy-import-parameters.md) for more information about the import parameters that define the user hierarchy.

```json
{
  "information": {
    "dateCreated": "2001-01-02T20:47:24.000Z",
    "dateModified": "2009-06-12T18:43:44.000Z",
    "versionId": "8951A91F41520C9A19E23CB22CF594B4",
    "primaryLocale": "en-US",
    "objectId": "B793B55C11D3E4E51000E887EC6DE8A4",
    "subType": "dimension_user",
    "name": "TimeToMonth",
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"
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
    }
  ],
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

Response Code: 200 (The user hierarchy's definition is updated successfully in the changeset.)

## Commit the changeset

Endpoint: [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset).

## Delete the changeset

EndPoint: [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)
