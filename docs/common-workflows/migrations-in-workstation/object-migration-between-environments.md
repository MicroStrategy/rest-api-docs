---
title: Object Migration Between Environments
description: You can move packages of objects between environments within Workstation.
---

Starting in MicroStrategy 2021 Update 6, you can move packages of objects between environments within Workstation. These packages are all maintained by the [MicroStrategy Storage Service](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service.htm), instead of you having to manage the packages yourself.

You must [configure the package storage location in Workstation](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm) to use this feature.

## APIs

- [POST /api/migrations](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/createMigration)
- [PUT /api/migrations/{migrationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/triggerImport)
- [PATCH /api/migrations/{migrationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/updateMigration)
- [GET /api/migrations/{migrationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/getMigration)
- [GET /api/migrations](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/getMigrationList)
- [DELETE /api/migrations?packageId={{packageId}}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/deletePackage)

## Privileges and Authorization

You need the following privileges for both the source and target environments:

- Bypass all objects security check
- Create package
- Apply package

To execute the API, you must get the authorization token by executing the `POST /api/auth/login` request, and get a token as `"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"` in the response body. Keep the token value. It is required to execute the REST API. See [Workflow Sample: Authentication](../authentication.md) for more information.

## Use Scenario

The best practice scenario is when Workstation uses one Library server as a source and another Library server as a target. The source and target environments can be the same.

## Create Migration

### Step 1: Use the `POST /api/migrations` API call to the source Library

This call triggers the package creation. Package settings and content are defined in `packageInfo` > `tocView`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F" // required for creating project package
```

There are two types of supported migration packages: `project package` and `configuration package`. For `project package`, the related `X-MSTR-ProjectID` project ID is required in the request header of each endpoint. For `configuration package`, the project ID should not be used in the request header.

Provide the correct `environment` and `project` information in the request body.

Sample Request Body:

```json
{
  "packageInfo": {
    "type": "project",
    "name": "ProjectMigration_success",
    "environment": {
      "id": "Source Environment URL",
      "name": "environment name"
    },
    "tocView": {
      "settings": {
        "updateSchema": ["recal_table_logical_size"],
        "aclOnReplacingObjects": "replace",
        "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
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
    },
    "treeView": {}
  },
  "importInfo": {
    "environment": {
      "id": "Target Environment URL",
      "name": "environment name"
    },
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial"
    }
  }
}
```

Sample Response Body:

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "status": "creating",
    "progress": 0
  },
  "importInfo": {
    "id": "B71E7ECF60104A62BA15625C444A623F",
    "status": "pending",
    "importRequestStatus": "pending",
    "undoRequestStatus": "pending",
    "progress": 0
  }
}
```

### Step 2: Use the `GET /api/migrations/{migrationId}` API call to the source Library

Since the package creation is asynchronously processing, this call checks the creation status, which is `usually creating`, created, or `create_failed`.

Repeat this step until you get `packageInfo` as `"status": "created"`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

Sample Response Body:

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "replicated": false,
    "type": "project",
    "name": "ProjectMigration_success",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2022-03-16T07:38:40.125+0000",
    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",
    "environment": {
      "id": "Environment URL",
      "name": "environment name"
    },
    "storage": {
      "size": 1421139,
      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"
    },
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial"
    },
    "status": "created",
    "message": "",
    "progress": 100,
    "deleted": false,
    "existing": true
  },
  "importInfo": {
    "id": "B71E7ECF60104A62BA15625C444A623F",
    "creator": {},
    "creationDate": "2022-03-16T07:38:40.126+0000",
    "lastUpdatedDate": "2022-03-16T07:38:40.126+0000",
    "environment": {
      "id": "Environment URL",
      "name": "environment name"
    },
    "status": "pending",
    "importRequestStatus": "pending",
    "undoRequestStatus": "pending",
    "progress": 0,
    "message": "",
    "undoStorage": {},
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial"
    },
    "deleted": false
  },
  "version": "1"
}
```

### Step 3: Use the `PATCH /api/migrations/{migrationId}` API call to the source Library

This call requests and approves the import migration.

First, change the import request status to `requested`, then change it to `approved`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

Sample Request Body:

```json
{
  "importInfo": {
    "importRequestStatus": "requested"
  }
}
```

Sample Response Body:

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "status": "created",
    "progress": 100
  },
  "importInfo": {
    "id": "B71E7ECF60104A62BA15625C444A623F",
    "status": "pending",
    "importRequestStatus": "requested",
    "undoRequestStatus": "pending",
    "progress": 0
  }
}
```

You must successfully PATCH the `"importRequestStatus": "requested"`. Then make another PATCH call of `"importRequestStatus": "approved"`.

Sample Request Body:

```json
{
  "importInfo": {
    "importRequestStatus": "approved"
  }
}
```

Sample Response Body:

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "status": "locked",
    "progress": 100
  },
  "importInfo": {
    "id": "B71E7ECF60104A62BA15625C444A623F",
    "status": "pending",
    "importRequestStatus": "approved",
    "undoRequestStatus": "pending",
    "progress": 0
  }
}
```

### Step 4: Use the `GET /api/migrations/{migrationId}?showContent=all` API call to the source Library

This call gets the full content of the migration to prepare the import call.

This is similar to step 2, but with the `showContent=all` query parameter , save the response body and use it for the next step.

Sample Response Body:

:::note

`packageInfo.replicated` field will be changed to `true` in next step PUT call.

:::

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "replicated": false,
    "type": "project",
    "name": "ProjectMigration_success",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2022-03-16T07:38:40.125+0000",
    "lastUpdatedDate": "2022-03-16T08:23:01.763+0000",
    "environment": {
      "id": "Environment URL",
      "name": "environment name"
    },
    "storage": {
      "size": 1421139,
      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"
    },
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial"
    },
    "status": "locked",
    "message": "",
    "progress": 100,
    "deleted": false,
    "existing": true,
    "tocView": {}
  }
}
```

### Step 5: Use the `PUT /api/migrations/{migrationId}` API call to the target Library

This call triggers the package import.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F" // required for creating project package
```

Sample Request Body:

Copy the response body from step 4 and change `"replicated": false`, to `true`.

:::note

`packageInfo.replicated` field has changed to `true`.

:::

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "replicated": true, // Changed to true
    "type": "project",
    "name": "ProjectMigration_success",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2022-03-16T07:38:40.125+0000",
    "lastUpdatedDate": "2022-03-16T08:23:01.763+0000",
    "environment": {
      "id": "Environment URL",
      "name": "environment name"
    },
    "storage": {
      "size": 1421139,
      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"
    },
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial"
    },
    "status": "locked",
    "message": "",
    "progress": 100,
    "deleted": false,
    "existing": true,
    "tocView": {}
  }
}
```

Sample Response Body:

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "status": "locked",
    "progress": 100
  },
  "importInfo": {
    "id": "B71E7ECF60104A62BA15625C444A623F",
    "status": "importing",
    "importRequestStatus": "approved",
    "undoRequestStatus": "pending",
    "progress": 0
  }
}
```

### Step 6 (Optional): Use the `GET /api/migrations/{migrationId}` API call to the target Library

Since the package import is asynchronously processing, this call checks the import status. It is usually `importing`, `imported`, or `import_failed`.

```json
{
  "importInfo": {
    "id": "B71E7ECF60104A62BA15625C444A623F",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2022-03-16T08:50:13.150+0000",
    "lastUpdatedDate": "2022-03-16T08:50:28.666+0000",
    "environment": {
      "id": "Environment URL",
      "name": "environment name"
    },
    "status": "imported",
    "importRequestStatus": "approved",
    "undoRequestStatus": "pending",
    "progress": 100,
    "message": "",
    "undoStorage": {
      "size": 205,
      "path": "mstr/shared/migrations/undo/35958BEB7C56491C9A43F7661501E177/B71E7ECF60104A62BA15625C444A623F.mmp"
    },
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial"
    },
    "deleted": false
  }
}
```

## Undo Migration

### Step 1: Use the `PATCH /api/migrations/{migrationId}` API call to the target Library

This call requests a package undo.

Patch the `"undoRequestStatus": "requested"`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

Sample Request Body:

```json
{
  "importInfo": {
    "undoRequestStatus": "requested"
  }
}
```

Sample Response Body:

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "status": "locked",
    "progress": 100
  },
  "importInfo": {
    "id": "B71E7ECF60104A62BA15625C444A623F",
    "status": "imported",
    "importRequestStatus": "approved",
    "undoRequestStatus": "requested",
    "progress": 100
  }
}
```

### Step 2: Use the `PATCH /api/migrations/{migrationId}` API call to the target Library

This call approves the package undo and triggers the undo process.

When triggering Undo, X-MSTR-ProjectID is required in the header.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F" // Target Project ID
```

Sample Request Body:

```json
{
  "importInfo": {
    "undoRequestStatus": "approved"
  }
}
```

Sample Response Body:

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "status": "locked",
    "progress": 100
  },
  "importInfo": {
    "id": "B71E7ECF60104A62BA15625C444A623F",
    "status": "undoing",
    "importRequestStatus": "approved",
    "undoRequestStatus": "approved",
    "progress": 100
  }
}
```

### Step 3 (Optional): Use the `GET /api/migrations/{migrationId}` API call to the target Library

Since the package undo is asynchronously processing, this call checks the undo status. Usually it is `undoing`, `undo_success`, or `undo_failed`.

## Delete Package

Make sure to delete migrations from the source and target one by one.

### Step 1: Use the `DELETE /api/migrations?packageId={{packageId}}` API call to the source Library

This call deletes a package from it.

Sample Request Header

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

### Step 2: Use the `DELETE /api/migrations?packageId={{packageId}}` API call to the target Library

This call deletes a package from it.

Sample Request Header

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

## Performance

For performance concerns, MicroStrategy suggests you create or import one package per session and time.

## Compatibility

A package created in an earlier platform version can be imported to a newer platform version, but not vice versa.

## Suggestions

- The user should have admin privileges in both source and target environments.
- Due to databases being distributed across environments, make sure to connect to both the target and source environments during the import or deletion of packages and when viewing migration status.
- Environment and project information should be provided in the request body when starting the migrations.
- Use the unique `environment URL` as the unique environment ID. Make sure to use the same environment ID when you connect to it in Workstation.
- If possible, include all dependencies during the package creation. If not, there could be small differences between the source and destination environments that cause migration failure

- Conflict rules:

  - `use_existing`: No change is made to the destination object. The source object is not copied.
  - `replace`: The destination object is replaced with the source object.
  - `keep_both`: No change is made to the destination object. The source object is duplicated if the destination object does not exist. However, if the destination object exists with the same ID and version, the source object is ignored. If the destination object exists with the same ID and a different version, the source object is saved as a new object.
  - `use_newer`: If the source object modification time is more recent than the destination object modification time, the Replace action is used. Otherwise, the Use existing action is used.
  - `use_older`: If the source object modification time is more recent than the destination object modification time, the Use existing action is used. Otherwise, the Replace action is used.
  - `force_replace`: Replace the object in the destination project with the version of the object in the update package, even if both versions of the object have the same version ID.
  - `delete`: Delete the object from the destination project. The version of the object in the update package is not imported into the destination project.

    :::caution

    If the object in the destination has any used-by dependencies when you import the update package, the import fails.

    :::

- Here are some principles for solving conflicts between source and destination environments.

  - If the conflict type is Exists identically except for path, or Exists identically except for Distribution Services objects, the destination object is updated to reflect the path or Distribution Services addresses and contacts of the source object.
  - Replace moves the object into the same parent folder as the source object. If the parent path is the same between source and destination, but the grandparent path is different, Replace may appear to do nothing since the object is put into the same parent path.
  - Non-empty folders in the destination location never have the same version ID and modification time as the source. This is because the folder is copied first and objects are added to it, thus changing the version ID and modification times during the copy process.

- The maximum size of the package is 2 GB. If it is larger, the creation fails.

## Troubleshooting

- If the Library server cannot connect to the database, you may receive the following error response:
  - The API requires MicroStrategy Storage Service. Please contact your administrator.
  - This can occur due to the following reasons:
    - Database not running
    - Database version is lower than required
    - Database configuration is missing or invalid in `configOverride.properties` file
- If your storage location is not configured property, you may receive the following message:

  - The Storage Service is not configured properly, please contact your administrator to configure Storage Service
  - See [Configure the Storage Service via Workstation](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm) for more information.

- If the undo package is not generated when the import finishes successfully in the target environment, check if you set any of the conflict rules as `keep_both` in the source environment. The undo functionality is not supported if you use `keep_both` in any conflict rules. To ensure that the undo package can be generated and used to roll back the project merge, you need to ensure that no the `keep_both` rule is used in the package settings of the source environment.
