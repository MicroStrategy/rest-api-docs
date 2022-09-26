---
title: Workflow Sample - Create a User Hierarchy
sidebar_label: Create a User Hierarchy
description: This workflow sample demonstrates how to create a user hierarchy object through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c257416e-ee2c-46fc-9a71-f2ea390c8452?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a user hierarchy object through the Modeling service.

You want to create a Time user hierarchy object, in the MicroStrategy Tutorial project, which contains the relationship between the Year, Month of Year, Quarter, Month, and Day attributes. The folder object ID is `8A1831FF494F528D02A4A8BF5FB73459`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

## Create a changeset

Endpoint: [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset).

## Create a user hierarchy

Endpoint: [POST /api/model/hierarchies](<https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User> Hierarchies/ms-createHierarchy). You must enter the required fields with the correct information.

The response can change based on the request parameters provided by the caller. Use the following parameters.

| Location | Name                | Description             |
| -------- | ------------------- | ----------------------- |
| header   | X-MSTR-authToken    | The authorization token |
| header   | X-MSTR-ProjectID    | The ID of the project   |
| header   | X-MSTR-MS-Changeset | The ID of the changeset |

To create a time user hierarchy with specific attributes and relationships, submit the request body with the correct information. In `"information"`, provide the `name` and `destinationFolderID` for the user hierarchy you want to create. The model for the definition of a user hierarchy is represented with the following fields:

| Fields              | Name                 | Description                                                                                                       | Data Type                   | Required |
| ------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------- | -------- |
| information         | name                 | The name of the user hierarchy. This should be a user-friendly name for identifying the user hierarchy.           | string                      | yes      |
| information         | subType              | The type of user hierarchy. The "subType" is ignored if it conflicts with the "useAsDrillHierarchy" field.        | string                      |          |
| information         | destinationFolderId  | The folder ID where the new user hierarchy is saved.                                                              | string                      | yes      |
| useAsDrillHierarchy |                      | Indicates the user hierarchy subtype                                                                              | Boolean                     | yes      |
| attributes          | objectId             | The ID of the attribute in the user hierarchy.                                                                    | string                      | yes      |
| attributes          | name                 | The name of the attribute.                                                                                        | string                      |          |
| attributes          | entryPoint           | Indicates whether the current attribute is a single entry point attribute.                                        | Boolean                     | yes      |
| attributes          | elementDisplayOption | Indicates the element display type of the specified attribute.                                                    | string                      | yes      |
| attributes          | filter               | A list of standalone filter objects with "objectId", "subType", and "name" that apply to the specified attribute. | List`<ObjectInfoReference>` |          |
| attributes          | limit                | The number of elements to display. Required for limited_elements with a range of [1, 1000000].                    | integer                     |          |
| relationships       | parent               | The parent attribute of the relationship.                                                                         | ObjectInfoReference         | yes      |
| relationships       | child                | The child attribute of the relationship.                                                                          | ObjectInfoReference         | yes      |
|                     |                      |                                                                                                                   |                             |          |

:::tip

`objectID`, `dateCreated`, `dateModified` and `versionId` are generated automatically. Currently only `en-US` is available for `primaryLocale`.

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "dimension_user",
    "name": "Time_New"
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

Sample Curl:

```bash
curl -X POST "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51" -H "Content-Type: application/json" -d "{\"information\":{\"destinationFolderId\":\"8A1831FF494F528D02A4A8BF5FB73459\",\"subType\":\"dimension_user\",\"name\":\"Time_New\"},\"useAsDrillHierarchy\":true,\"attributes\":[{\"objectId\":\"8D679D4411D3E4981000E787EC6DE8A4\",\"name\":\"Month\",\"entryPoint\":true,\"elementDisplayOption\":\"all_elements\"},{\"objectId\":\"8D679D4511D3E4981000E787EC6DE8A4\",\"name\":\"Month of Year\",\"entryPoint\":true,\"elementDisplayOption\":\"all_elements\"},{\"objectId\":\"8D679D4A11D3E4981000E787EC6DE8A4\",\"name\":\"Quarter\",\"entryPoint\":true,\"elementDisplayOption\":\"all_elements\"},{\"objectId\":\"8D679D5111D3E4981000E787EC6DE8A4\",\"name\":\"Year\",\"entryPoint\":true,\"elementDisplayOption\":\"all_elements\"},{\"objectId\":\"96ED3EC811D5B117C000E78A4CC5F24F\",\"name\":\"Day\",\"entryPoint\":true,\"elementDisplayOption\":\"limited_elements\",\"limit\":50}],\"relationships\":[{\"parent\":{\"objectId\":\"8D679D4411D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Month\"},\"child\":{\"objectId\":\"96ED3EC811D5B117C000E78A4CC5F24F\",\"subType\":\"attribute\",\"name\":\"Day\"}},{\"parent\":{\"objectId\":\"8D679D4511D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Month of Year\"},\"child\":{\"objectId\":\"8D679D4411D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Month\"}},{\"parent\":{\"objectId\":\"8D679D4A11D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Quarter\"},\"child\":{\"objectId\":\"8D679D4411D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Month\"}},{\"parent\":{\"objectId\":\"8D679D5111D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Year\"},\"child\":{\"objectId\":\"8D679D4411D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Month\"}},{\"parent\":{\"objectId\":\"8D679D5111D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Year\"},\"child\":{\"objectId\":\"8D679D4A11D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Quarter\"}}]}"
```

Sample Response Body: You can view the user hierarchy's definition in the body of the response. See [User Hierarchy Import Parameters](./user-hierarchy-import-parameters.md) for more information about the import parameters that define the user hierarchy.

```json
{
  "information": {
    "versionId": "00F6F79E85044441BDE5025B8EC39B34",
    "primaryLocale": "en-US",
    "objectId": "86907CCB32ED4B629541116C7F912963",
    "subType": "dimension_user",
    "name": "Time_New",
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

Response Code: 201 (A new user hierarchy is created successfully in the changeset.)

## Commit the changeset

Endpoint: [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"
```

Sample Response Body:

```json
{
  "id": "4E830DF576A24E4B9120455EE576EB51",
  "dateCreated": "2021-02-23T10:51:04.336913300Z",
  "dateModified": "2021-02-23T10:51:18.780285700Z",
  "status": "Ready",
  "schemaEdit": false,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "CFC4E856492FEF1A2BB6F1BC37ABFD06",
  "userMetadataLocale": "en-US",
  "userDateNumberLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "MS"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

## Delete the changeset

Endpoint: [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)
