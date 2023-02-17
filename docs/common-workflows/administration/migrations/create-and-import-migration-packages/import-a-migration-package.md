---
title: Import a migration package
sidebar_label: Import a migration package
description: This workflow sample demonstrates how to import a migration package using REST APIs.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-7a6ff268-6e87-449b-a51f-30f134ab54d4?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to import a migration package using REST APIs.

1. [Create an empty package.](#create-an-empty-package)
1. [Upload a package binary file.](#upload-a-package-binary-file)
1. [Get the package definition.](#get-the-package-definition)
1. [Create an import process.](#create-an-import-process-to-import-a-package)
1. [Query the import status.](#query-the-import-status)
1. [Download an undo package binary file.](#download-an-undo-package-binary-file)
1. [Delete the import process.](#delete-the-import-process)
1. [Delete the package.](#delete-the-package)

## Import a project package

You want to import a project package that contains a `"Year"` object, with an attribute object ID of `8D679D5111D3E4981000E787EC6DE8A4`, and all its dependents in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`. You are using the `"Demo Project"`, which has a project ID of `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

You must have the Create Package and Import Package privileges.

:::

## Create an empty package

Use [POST /api/packages](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/createEmptyPackage) to create an empty package. The destination project ID is required in the request header.

An empty package is required for creating or importing packages through REST APIs. An empty package holds all content and its status in memory. For performance reasons, you can only create one package instance in each user session. Make sure to delete the package when it is no longer used. Otherwise, it lives along with the user session.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",
  "status": "EMPTY"
}
```

Sample Response Code: 201 (A new empty package is created successfully.)

## Upload a package binary file

Use [PUT /api/packages/{packageId}/binary](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/uploadPackageBinary) to upload a package binary file.

Sample Request Header:

```http
"Content-Type": "multipart/form-data"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RUQ4MTJGNjFDNTQ4RjVDNzRFN0NCMkFDNDYyMUU4RUI=/binary"\
-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\
-H 'X-MSTR-AuthToken: i4heb6cpcskop2dgn518e6ch67' -F 'file=@"/path/to/packageName.mmp"'
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MkJFODMyQjE5NjQxRDREMEYzRUMyN0E2OUQwMzU5NTU=",
  "status": "READY"
}
```

Sample Response Code: 200 (The package is uploaded successfully).

## Get the package definition

Use [GET /api/packages/{packageId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/get) to get the package definition. This call is optional and is used to get the status or full definition of the package.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MDk2NjgxM0VBNzQ5Q0Y3MjZEMzI2NEJEMTg1Qjk4RDM=?showContent=true"\
-H 'Content-Type: application/json'\
-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\
-H 'X-MSTR-AuthToken: k2023jpr443b3hdo1fma1flpr
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MDk2NjgxM0VBNzQ5Q0Y3MjZEMzI2NEJEMTg1Qjk4RDM=",
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
      "level": "project_object"
    }
  ]
}
```

Sample Response Code: 200 (The package definition is uploaded successfully.)

## Create an import process to import a package

Use [POST /api/packages/imports](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/create_2) to create an import process.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports?packageId=QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6NkE1MjRGRUQ0MjRBMkNDNkNEMDZBNTk5QTRDRjZBRTQ=&generateUndo=true"\
-H 'Content-Type: application/json'\
-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\
-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq'\
-H 'Prefer: respond-async'
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=",
  "status": "PROCESSING",
  "undoPackageCreated": false,
  "progress": 0.0
}
```

Sample Response Code: 202 (The package import process is running.)

## Query the import status

Use [GET /api/packages/imports/{importId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/retrieve_2) to query the import status.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI="\
-H 'Content-Type: application/json'\
-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\
-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq'
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=",
  "status": "IMPORTED",
  "undoPackageCreated": true,
  "progress": 100.0
}
```

Sample Response Code: 200 (The import process details were retrieved successfully.)

## Download an undo package binary file

Use [GET /api/packages/imports/{importId}/undoPackage/binary](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/downloadUndoPackageBinary) to download the undo package binary file.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=/undoPackage/binary"\
-H 'Content-Type: application/json'\
-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\
-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq' -F 'file=@"/path/to/file"'
```

Sample Response Body: Binary stream

Sample Response Code: 200 (The undo package was downloaded successfully.)

## Delete the import process

Use [DELETE /api/packages/imports/{importId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/delete) to delete the import process.

Sample Request Header:

```http
"Content-Type": "application/json"
"Prefer": "respond-async"
"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "http://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI="\
-H 'Content-Type: application/json'\
-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\
-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq'\
-H 'Prefer: respond-async'
```

Sample Response Body: Empty

Sample Response Code: 202 (The package is being deleted.)

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
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk="\
-H 'Content-Type: application/json'\
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\
-H 'X-MSTR-AuthToken: jmm09h37g6fot3oeqncj20s1nk'\
-H 'Prefer: respond-async'
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

By default, the package import process automatically generates an undo package. In some cases, such as when the “`KeepBoth“` package is used as conflict rule, the undo package cannot be created. The following sample request imports a package without creating the undo package.

Create the import process using [POST /api/packages/imports](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/create_2) with `generateUndo=false`.

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports?packageId=QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6NkE1MjRGRUQ0MjRBMkNDNkNEMDZBNTk5QTRDRjZBRTQ=&generateUndo=false"\
-H 'Content-Type: application/json'\
-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\
-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq'\
-H 'Prefer: respond-async'
```

Sample Response Body:

```json
{
  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=",
  "status": "PROCESSING",
  "undoPackageCreated": false,
  "progress": 0.0
}
```

Sample Response Code: 202 (The package import process is running.)
