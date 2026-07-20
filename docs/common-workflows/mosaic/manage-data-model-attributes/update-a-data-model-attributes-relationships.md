---
title: Update a data model attribute's relationships
sidebar_label: Update a data model attribute's relationships
description: This workflow sample demonstrates how to update a data model attribute's relationships through the Modeling service.
---

<Available since="Strategy (October 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a data model attribute's relationships through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can update a data model attribute's relationships using the following endpoint: [PUT /api/model/dataModels/\{dataModelId}/attributes/\{attributeId}/relationships](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/putDataModelAttributeRelationships).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"
```

Sample Request Body:

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
    }
  ]
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/attributes/5D6C76C3A3F548A0B9ADE5F9D2AA65C6/relationships" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d '{"relationships": [{"parent": {"objectId": "EE709099BFB74E3A879A1F5B5ABBB037","subType": "attribute","name": "Year"},"child": {"objectId": "10DF161DF9C74FAEBA32795E7EE40E36","subType": "attribute","name": "Year Date"},"relationshipTable": {"objectId": "EE3E012AE58943B9B4AF84C3BC08888F","subType": "logical_table","name": "lu_year"},"relationshipType": "one_to_many"},{"parent": {"objectId": "ACAB111A1C5E46539D672CA380729B90","subType": "attribute","name": "Previous Year"},"child": {"objectId": "EE709099BFB74E3A879A1F5B5ABBB037","subType": "attribute","name": "Year"},"relationshipTable": {"objectId": "EE3E012AE58943B9B4AF84C3BC08888F","subType": "logical_table","name": "lu_year"},"relationshipType": "one_to_many"}]}'
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
    }
  ]
}
```

Response Code: 200 (The data model attribute's relationships are updated successfully in the changeset.)
