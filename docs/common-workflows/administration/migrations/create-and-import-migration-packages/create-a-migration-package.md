---
title: Create a migration package
sidebar_label: Create a migration package
description: This workflow sample demonstrates how to create a migration package using REST APIs.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c4f8860a-cb20-4e14-a7c8-16d450c167c5?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a migration package using REST APIs.

- [Creating a project package](#creating-a-project-package)
- [More examples](#more-examples)
  - [Create a project package](#create-a-project-package)
  - [Create a configuration package](#create-a-configuration-package)
  - [Create a project security package](#create-a-project-security-package)

## Creating a project package

In this workflow sample, you want to create a project package that contains a `"Year"` object with an attribute object ID of `8D679D5111D3E4981000E787EC6DE8A4` and all its dependents in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`. Use `"replace"` as a conflict rule for all these objects.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

You must have the Create Package privilege.

:::

### Create an empty package

Use [POST /api/packages](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/createEmptyPackage) to create an empty package.

An empty package is required for creating or importing packages through REST APIs. An empty package holds all content and its status in memory. For performance reasons, you can only create one package instance in each user session. Make sure to delete the package when it is no longer used. Otherwise, it lives along with the user session.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages"\
-H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",
  "status": "EMPTY"
}
```

Sample Response Code: 201 (A new empty package is created successfully.)

### Update the package definition

Use [PUT /api/packages/{packageId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/updatePackagePerSpec) to update the package definition. You want to create a `"project"` migration package type.

:::tip

There are three types of supported migration packages. This includes `"project package"`, `"configuration package"`, and `"project security package"`.

- For `"project package"` and `"project security package"`, the related project ID is required in the request header of each endpoint. For `"configuration package"`, the project ID should _not_ be used in request header.
- Only objects at the project level can be passed in the request body when creating a `"project package"`. Only objects at the configuration level can be passed in the request body when creating a `"configuration package"`. Only objects of user/user group types can be passed in the request body when creating a `"project security package"`.
- `'settings.updateSchema'` is only supported for project packages.
- `'settings.aclOnReplacingObjects'` is not supported for project security packages.

:::

Sample Request Header:

```http
"Content-Type": "application/json"
"Prefer": "respond-async"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "type": "project",
  "settings": {
    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],
    "aclOnReplacingObjects": "use_existing",
    "aclOnNewObjects": ["keep_acl_as_source_object"],
    "defaultAction": "replace"
  },
  "content": [
    {
      "id": "8D679D5111D3E4981000E787EC6DE8A4",
      "name": "Year",
      "type": 12,
      "action": "replace",
      "includeDependents": true
    }
  ]
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RjBBMzVBNUM0MjRBNUQ0MjdEMjc3N0EzNENFNDcwRTY="\
-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\
-H 'X-MSTR-AuthToken: 16pm8vao8e6ltq6cu73htrkl8o' -H 'Prefer: respond-async'\
--data-raw '{
    "type": "project",
    "settings": {
        "updateSchema": [
            "recal_table_logical_size",
            "recal_table_keys_fact_entry_level"
        ],
        "aclOnReplacingObjects": "use_existing",
        "aclOnNewObjects": ["keep_acl_as_source_object"],
        "defaultAction": "replace"
    },
    "content": [
        {
            "id": "8D679D5111D3E4981000E787EC6DE8A4",
            "name": "Year",
            "type": 12,
            "action": "replace",
            "includeDependents": true
        }
    ]
}'
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzI3MkU4NzU2RTQ3MzA2Q0QyMTRDOEIwNkFFOUU4N0M=",
  "status": "PROCESSING"
}
```

Sample Response Code: 202 (The package is being created.)

### Get the package definition

Use [GET /api/packages/{packageId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/get) to get the package definition.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "http://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=?showContent=true"\
-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\
-H 'X-MSTR-AuthToken: 657im8d8ol5hbn6q42ddgobg01'
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",
  "status": "READY",
  "settings": {
    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],
    "aclOnReplacingObjects": "use_existing",
    "aclOnNewObjects": ["keep_acl_as_source_object"],
    "defaultAction": "replace"
  },
  "content": [
    {
      "id": "8D679D5111D3E4981000E787EC6DE8A4",
      "name": "Year",
      "version": "2215B50211EB7C9D8F150080EF651EEA",
      "type": 12,
      "owner": {
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "dateCreated": "2001-01-02T20:48:10.000+0000",
      "dateModified": "2021-03-04T03:53:09.000+0000",
      "action": "replace",
      "includeDependents": true,
      "explicitIncluded": true,
      "level": "project_object"
    }
  ]
}
```

Sample Response Code: 200 (The full definition of the package was retrieved successfully.)

### Download the package and save it as a binary file

Use [GET /api/packages/{packageId}/binary](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/downloadPackageBinary_1) to download the package and save it as a binary file.

Sample Request Header:

```http
"Content-Type": "application/json"
"Accept": "application/octet-stream"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6OTIyRUI1QzMyRDQ3QTAyMUVCQURGNDgzQkVEMjg5NjY=/binary"\
-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\
-H 'X-MSTR-AuthToken: g90v2lm2185h52sis09n1kkq0i' -H 'Accept: application/octet-stream'
```

Sample Response Code: 200 (The packaged binary file was retrieved successfully.)

### Delete the package

Use [DELETE /api/packages/{packageId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/deletePackageAsync) to delete the package.

Sample Request Header:

```http
"Content-Type": "application/json"
"Prefer": "respond-async"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk="\
-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\
-H 'X-MSTR-AuthToken: jmm09h37g6fot3oeqncj20s1nk' -H 'Prefer: respond-async'
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=",
  "status": "DELETING"
}
```

Sample Response Code: 202 (The package is being deleted.)

## More examples

Three types of migration package are supported. The only difference between the three is the definition of the package type when using the PUT API. The examples below provide sample request body JSON to create packages of each type.

### Create a project package

Create a project package that contains the `"Year"` object, with an attribute object ID of `8D679D5111D3E4981000E787EC6DE8A4`, and its dependents. Make sure the request header contains a project ID.

Sample Request Body:

```json
{
  "type": "project",
  "settings": {
    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],
    "aclOnReplacingObjects": "use_existing",
    "aclOnNewObjects": ["keep_acl_as_source_object"],
    "defaultAction": "replace"
  },
  "content": [
    {
      "id": "8D679D5111D3E4981000E787EC6DE8A4",
      "name": "Year",
      "type": 12,
      "action": "replace",
      "includeDependents": true
    }
  ]
}
```

### Create a configuration package

Create a configuration package that contains the `"Administrator"` object, with a user object ID of `54F3D26011D2896560009A8E67019608`, and its dependents. Make sure that the request header does _not_ contain a project ID.

Sample Request Body:

```json
{
  "type": "configuration",
  "settings": {
    "updateSchema": null,
    "aclOnReplacingObjects": "use_existing",
    "aclOnNewObjects": ["keep_acl_as_source_object"],
    "defaultAction": "replace"
  },
  "content": [
    {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator",
      "type": 34,
      "action": "replace",
      "includeDependents": true
    }
  ]
}
```

### Create a project security package

A project security package includes links to security roles, security filters, connection mappings, profile folder links, and personal preferences that are related to the selected user and/or user group objects. Security roles and security filters objects are _not_ included. Only links are included.

Create a project security package that contains the `"Administrator"` object, with a user object ID of `54F3D26011D2896560009A8E67019608`, and its dependents. Make sure the request header contains a project ID.

Sample Request Body:

```json
{
  "type": "project_security",
  "settings": {
    "updateSchema": null,
    "aclOnReplacingObjects": null,
    "aclOnNewObjects": ["keep_acl_as_source_object"],
    "defaultAction": "replace"
  },
  "content": [
    {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator",
      "type": 34,
      "action": "replace",
      "includeDependents": false
    }
  ]
}
```
