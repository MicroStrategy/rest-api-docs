---
title: View content from a newly created package
sidebar_label: View content from a newly created package
description: This workflow sample demonstrates how to view a newly created migration package using REST APIs.
---

<Available since="2021 Update 3" />

This workflow sample demonstrates how to view a newly created migration package using REST APIs.

1. [Create an empty package](#create-an-empty-package)
1. [Update the package definition](#update-the-package-definition)
1. [Get the package definition](#get-the-package-definition)
1. [Get the package detailed definition](#get-the-package-detailed-definition)
1. [Download the package and save it as a binary file](#download-the-package-and-save-it-as-a-binary-file)
1. [Delete the package](#delete-the-package)

In this workflow sample, you want to create a project package that contains a `"Year"` object with an attribute object ID of `8D679D5111D3E4981000E787EC6DE8A4` and all its dependents in the MicroStrategy Tutorial project. You also want to view the detailed definition of the `"Year"` object. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`. Use `"replace"` as a conflict rule for all these objects.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

You must have the Create Package privilege.

:::

## Create an empty package

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
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages"  -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",
  "status": "EMPTY"
}
```

Sample Response Code: 201 (A new empty package is created successfully.)

## Update the package definition

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
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RjBBMzVBNUM0MjRBNUQ0MjdEMjc3N0EzNENFNDcwRTY=" -H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'X-MSTR-AuthToken: 16pm8vao8e6ltq6cu73htrkl8o' -H 'Prefer: respond-async' --data-raw '{
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

## Get the package definition

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
curl -X GET "http://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=?showContent=true" -H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'X-MSTR-AuthToken: 657im8d8ol5hbn6q42ddgobg01'
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

## Get the package detailed definition

Use [GET /api/packages/{packageId}/objects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/getPackageObjectDetail) to get the objects' detailed definition in a package.

:::tip

In MicroStrategy 2021 Update 3, we only support four types of objects, it is "Attribute(12)", "Fact(13)", "Hierarchy(14)", and "Table(15)" in project package. Configuration package is not supported for now.

:::

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "http://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=/objects?id=8D679D5111D3E4981000E787EC6DE8A4" -H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'X-MSTR-AuthToken: 657im8d8ol5hbn6q42ddgobg01'
```

Sample Response Body:

```json
{
  "objects": [
    {
      "id": "8D679D5111D3E4981000E787EC6DE8A4",
      "type": 12,
      "definition": {
        "information": {
          "dateCreated": "2001-01-02T20:48:10.000Z",
          "dateModified": "2012-01-27T12:00:32.000Z",
          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",
          "primaryLocale": "en-US",
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID",
            "description": "Year ID",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "dataType": {
              "type": "integer",
              "precision": 2,
              "scale": -2147483648
            },
            "alias": "YEAR_ID",
            "lookupTable": {
              "objectId": "8D6793C211D3E4981000E787EC6DE8A4"
            }
          },
          {
            "id": "4B97DFC611D5AEDAC000E38A4CC5F24F",
            "name": "DATE",
            "description": "Year Start Date",
            "category": "DATE",
            "type": "system",
            "displayFormat": "date",
            "dataType": {
              "type": "time_stamp",
              "precision": 0,
              "scale": -2147483648
            },
            "alias": "YEAR_DATE",
            "lookupTable": {
              "objectId": "8D6793C211D3E4981000E787EC6DE8A4"
            }
          }
        ],
        "attributeLookupTable": {
          "objectId": "8D6793C211D3E4981000E787EC6DE8A4"
        },
        "keyForm": {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "name": "ID"
        },
        "sorts": {}
      }
    }
  ],
  "versions": {
    "webVersion": "11.3.0300.10300J",
    "modelingVersion": "11.3.0300.5996",
    "iServerVersion": "11.3.0300.10924"
  }
}
```

Sample Response Code: 200 (The detailed readable definition of the objects was retrieved successfully.)

## Download the package and save it as a binary file

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
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6OTIyRUI1QzMyRDQ3QTAyMUVCQURGNDgzQkVEMjg5NjY=/binary" -H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'X-MSTR-AuthToken: g90v2lm2185h52sis09n1kkq0i' -H 'Accept: application/octet-stream'
```

Sample Response Code: 200 (The packaged binary file was retrieved successfully.)

## Delete the package

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
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=" -H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'X-MSTR-AuthToken: jmm09h37g6fot3oeqncj20s1nk' -H 'Prefer: respond-async'
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=",
  "status": "DELETING"
}
```

Sample Response Code: 202 (The package is being deleted.)
