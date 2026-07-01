---
title: Retrieve all relationships stored in the system hierarchy
description: This workflow demonstrates how to retrieve all the relationships stored in the system hierarchy using REST API.
---

<Available since="Strategy (November 2025)" />

This workflow sample demonstrates how to retrieve all relationships stored in the system hierarchy using the REST API with and without a changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can retrieve all relationships stored in the system hierarchy using the following endpoint: [GET /api/model/systemHierarchy](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Hierarchy/getSystemHierarchy)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/systemHierarchy' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/systemHierarchy' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response Body:

```json
{
  "relationships": [
    {
      "parent": {
        "objectId": "8D679D3411D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Employee Birth Date"
      },
      "child": {
        "objectId": "8D679D3F11D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Employee"
      },
      "relationshipTable": {
        "objectId": "8D67936811D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_EMPLOYEE"
      },
      "relationshipType": "one_to_many"
    },
    {
      "parent": {
        "objectId": "6E069EA411D3E4E41000E887EC6DE8A4",
        "subType": "attribute",
        "name": "Employee Age"
      },
      "child": {
        "objectId": "8D679D3411D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Employee Birth Date"
      },
      "relationshipTable": {
        "objectId": "8D67936811D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_EMPLOYEE"
      },
      "relationshipType": "one_to_many"
    },
    {
      "parent": {
        "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Call Center"
      },
      "child": {
        "objectId": "8D679D3F11D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Employee"
      },
      "relationshipTable": {
        "objectId": "8D67936811D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_EMPLOYEE"
      },
      "relationshipType": "one_to_many"
    }
  ],
  "isolatedAttributes": [
    {
      "objectId": "3F58258B437F5CE376CB658F89ADB3AB",
      "subType": "attribute",
      "name": "Days to Ship"
    },
    {
      "objectId": "17C9B85E186D4C30BDF5F24810D0EDD4",
      "subType": "attribute",
      "name": "non-agg Attribute 0513"
    },
    {
      "objectId": "E3BCF37F86D94A00B473D2AC2EA39AE3",
      "subType": "attribute",
      "name": "Name35"
    }
  ]
}
```

Response Code: 200 (The relationships stored in the system hierarchy are returned successfully.)
