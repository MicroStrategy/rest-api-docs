---
title: Workflow Sample - Update an Attribute's Relationships
sidebar_label: Update an Attribute's Relationships
description: This workflow sample demonstrates how to update an attribute's relationship through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-a1ebd204-40ea-42e0-9ccc-21f391c797fb?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an attribute's relationship through the Modeling service.

1. [Create a changeset.](#create-a-changeset)
1. [Update the attribute's relationship.](#update-the-attributes-relationship)
1. [Commit the changeset.](#commit-a-changeset)
1. [Delete the changeset.](#delete-the-changeset)

You want to update the relationship for the `“Subcategory“` attribute object with ID `E8C034036E4EE6404513A6B12FAE9481` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

`"schemaEdit"` is required to be `true` if this changeset ID is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions).

## Create a changeset

Use [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "F768352DC66E40F2BCD9A3F050ECDE9B",
  "dateCreated": "2021-03-22T20:29:39.253573Z",
  "dateModified": "2021-03-22T20:29:39.253608Z",
  "status": "Ready",
  "schemaEdit": true,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "MSTR User"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

## Update the attribute's relationship

Use [PUT /api/model/systemHierarchy/attributes/{attributeId}/relationships](<https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System> Hierarchy/ms-putAttributeRelationships).

You want to update the relationship of the "Subcategory" attribute object by adding relationships between "Category" and "Subcategory", and "Subcategory" and "Item". The object ID of the "Subcategory" attribute is `E8C034036E4EE6404513A6B12FAE9481` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

The following screenshot shows how these relationships are shown in the editor.

![attribute_relationship_editor](../../images/attribute_relationship_editor.png)

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
        "objectId": "E8C034036E4EE6404513A6B12FAE9481",
        "subType": "attribute",
        "name": "Subcategory"
      },
      "child": {
        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Item"
      },
      "relationshipTable": {
        "objectId": "8D67937411D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_ITEM"
      },
      "relationshipType": "one_to_many"
    },
    {
      "parent": {
        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Category"
      },
      "child": {
        "objectId": "E8C034036E4EE6404513A6B12FAE9481",
        "subType": "attribute",
        "name": "Subcategory"
      },
      "relationshipTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      },
      "relationshipType": "one_to_many"
    }
  ]
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/systemHierarchy/attributes/E8C034036E4EE6404513A6B12FAE9481/relationships" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d "{\\"relationships\\":[{\\"parent\\":{\\"objectId\\":\\"E8C034036E4EE6404513A6B12FAE9481\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Subcategory\\"},\\"child\\":{\\"objectId\\":\\"8D679D4211D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Item\\"},\\"relationshipTable\\":{\\"objectId\\":\\"8D67937411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_ITEM\\"},\\"relationshipType\\":\\"one_to_many\\"},{\\"parent\\":{\\"objectId\\":\\"8D679D3711D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Category\\"},\\"child\\":{\\"objectId\\":\\"E8C034036E4EE6404513A6B12FAE9481\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Subcategory\\"},\\"relationshipTable\\":{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"},\\"relationshipType\\":\\"one_to_many\\"}]}"
```

Sample Response Body:

You can view the new attribute relationships in the body of the response.

```json
{
  "relationships": [
    {
      "parent": {
        "objectId": "E8C034036E4EE6404513A6B12FAE9481",
        "subType": "attribute",
        "name": "Subcategory"
      },
      "child": {
        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Item"
      },
      "relationshipTable": {
        "objectId": "8D67937411D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_ITEM"
      },
      "relationshipType": "one_to_many"
    },
    {
      "parent": {
        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Category"
      },
      "child": {
        "objectId": "E8C034036E4EE6404513A6B12FAE9481",
        "subType": "attribute",
        "name": "Subcategory"
      },
      "relationshipTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      },
      "relationshipType": "one_to_many"
    }
  ]
}
```

Response Code: 200 (The attribute's relationships are updated successfully in the changeset.)

## Commit a changeset

Use [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "t1ldkqth8vt0k64vkoajmoqrs4"
"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"
```

Sample Curl:

```http
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/F768352DC66E40F2BCD9A3F050ECDE9B/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"
```

Sample Response Body:

```json
{
  "id": "F768352DC66E40F2BCD9A3F050ECDE9B",
  "dateCreated": "2021-03-22T20:29:39.253573Z",
  "dateModified": "2021-03-22T20:41:38.286927Z",
  "status": "Ready",
  "schemaEdit": true,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "MSTR User"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

## Delete the changeset

Use [`DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)`

Sample Request Header:

```http
"accept": "applications/json"
"X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4"
"X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/F768352DC66E40F2BCD9A3F050ECDE9B" -H "accept: \*/\*" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"
```

Sample Request Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)

## Example

You want to update the relationship for the "Promotion" attribute object with ID "6E6E867115400A10F71D979E00325F4A" by adding a joint relationship with "Day" and "Item" as the join-child of "Promotion".

The following screenshot shows how this relationship is shown in the editor.

![attribute_relationship_editor_2](../../images/attribute_relationship_editor_2.png)

Sample Request Body:

```json
{
  "relationships": [
    {
      "parent": {
        "objectId": "6E6E867115400A10F71D979E00325F4A",
        "subType": "attribute",
        "name": "Promotion"
      },
      "jointChild": [
        {
          "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",
          "subType": "attribute",
          "name": "Day"
        },
        {
          "objectId": "8D679D4211D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Item"
        }
      ],
      "relationshipTable": {
        "objectId": "8D6793CE11D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "ORDER_DETAIL"
      },
      "relationshipType": "one_to_many"
    }
  ]
}
```
