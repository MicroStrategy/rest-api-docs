---
title: Retrieve an attribute's relationships in a data model
description: This workflow demonstrates how to retrieve an attribute's relationships in a data model using REST API.
---

<Available since="Strategy (September 2025)" />

This workflow sample demonstrates how to retrieve an attribute's relationship in a data model with and without a changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can retrieve an attribute's relationships in a data model using the following endpoint: [GET /api/model/dataModels/\{dataModelId}/attributes/\{attributeId}/relationships](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelAttributeRelationships)

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
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/attributes/EE709099BFB74E3A879A1F5B5ABBB037/relationships' \
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
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/attributes/EE709099BFB74E3A879A1F5B5ABBB037/relationships' \
-H 'X-MSTR-AuthToken: 8cmbn319k4s8fpujoe7lnl3l4q' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response Body:

```json
{
  "relationships": [
    {
      "parent": {
        "objectId": "EE709099BFB74E3A879A1F5B5ABBB037",
        "subType": "attribute",
        "name": "Year"
      },
      "child": {
        "objectId": "10DF161DF9C74FAEBA32795E7EE40E36",
        "subType": "attribute",
        "name": "Year Date"
      },
      "relationshipTable": {
        "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
        "subType": "logical_table",
        "name": "lu_year"
      },
      "relationshipType": "one_to_many"
    },
    {
      "parent": {
        "objectId": "ACAB111A1C5E46539D672CA380729B90",
        "subType": "attribute",
        "name": "Previous Year"
      },
      "child": {
        "objectId": "EE709099BFB74E3A879A1F5B5ABBB037",
        "subType": "attribute",
        "name": "Year"
      },
      "relationshipTable": {
        "objectId": "EE3E012AE58943B9B4AF84C3BC08888F",
        "subType": "logical_table",
        "name": "lu_year"
      },
      "relationshipType": "one_to_many"
    },
    {
      "parent": {
        "objectId": "EE709099BFB74E3A879A1F5B5ABBB037",
        "subType": "attribute",
        "name": "Year"
      },
      "child": {
        "objectId": "F0A2CB8C9DA44CFAAC3F2BD4A0D0DBDD",
        "subType": "attribute",
        "name": "Last Year Quarter"
      },
      "relationshipTable": {
        "objectId": "2249F3085D67417E904FBF789EBAFDC8",
        "subType": "logical_table",
        "name": "lu_quarter"
      },
      "relationshipType": "one_to_many"
    }
  ]
}
```

Response Code: 200 (The attribute's relationships are returned successfully.)
