---
title: Upload and download migration packages
description: You can upload and download migration packages in Workstation.
---

Starting in MicroStrategy 2021 Update 7, you can upload and download migration packages in Workstation. These packages are all maintained by the [MicroStrategy Storage Service](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service.htm), users can download these packages from one storage service and then upload to another the storage service.

This feature is usually used in the following two scenarios:

1. Objects need to be migrated between the two environments which cannot be configured with the same storage service. With this feature, the user who has the privileges of both environments can download the package from the source environment and then upload and import it to the target environments.
1. Objects need to be migrated between the two environments, but no user has the privileges of both environments. With this feature, one user who has the privilege of the source environment can download the package from the source environment and then another user who has the privilege of the target environment can upload and import it to the target environments.

In other cases, you should prefer the normal migration feature.

You must [configure the package storage location in Workstation](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm) to use this feature.

## APIs

- [POST /api/mstrServices/library/storage/sharedFileStore/files](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/createSharedFileMeta)
- [PUT /api/mstrServices/library/storage/sharedFileStore/files/{fileId}/binary](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/uploadSharedFileBinary)
- [POST /api/migrations](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/createMigration)
- [GET /api/migrations/{migrationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/getMigration)
- [GET /api/migrations/packages/{packageId}/binary](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/downloadPackageBinary)
- [GET /api/mstrServices/library/storage/sharedFileStore/files/{fileId}/binary](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/downloadSharedFileBinary)
- [GET /api/mstrServices/library/storage/sharedFileStore/files?type=migrations.packages&&offset={offset}&&limit={limit}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/getMigrationList_1)
- [DELETE /api/mstrServices/library/storage/sharedFileStore/files/{fileId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/deleteSharedFile)
- [DELETE /api/migrations?packageId={packageId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/deletePackage_1)

## Privileges and authorization

You need the following privileges for the environments where you download migration packages from:

- Manage Migration Packages

You need the following privileges for the environments where you upload migration packages to:

- Manage Migration Packages
- Environment Administrator

You need the following privileges for the environments where you migrate migration packages to:

- Manage Migration Packages
- Create Package
- Bypass all objects security check

To execute the API, you must get the authorization token by executing the `POST /api/auth/login` request, and get a token as `"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"` in the response header. Keep the token value. It is required when executing the REST API. See [Workflow sample: Authentication](../authentication.md) for more information.

## Use scenario

The best practice scenario is when users are working on movement between different environments, an admin of old environments maybe has not been given access to the new platform, to which they want to move objects to. They can download the packages from the old environment and let another user, who has privilege on the new environment, to upload the packages.

## Upload and import migration package

### Step 1: Use the `GET /api/migrations/packages/{packageId}/binary` API call to the source Library

This call can download the `Object Migration` and `Project Merge` package file from the storage service.

Sample Request Header:

```http
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
```

The response body is the binary data of the migration package.

If you want to download the uploaded migration package, you should use the `GET /api/mstrServices/library/storage/sharedFileStore/files/{fileId}/binary` API. It has the same header and response formats as the `GET /api/migrations/packages/{packageId}/binary` API does.

### Step 2: Use the `POST /api/mstrServices/library/storage/sharedFileStore/files` API call to the target Library

This call will create a package metadata file on the storage service.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
```

The `type` of uploaded file should be `migrations.packages` and the `extension` of this file should be `mmp` in this feature. The `size` of the file should be equal to or less than 2GB.

Provide the correct file information in the request body, e.g., `name` and `sha256`. The package information, namely `packageType` and `packagePurpose`, are defined in `extraInfo`. The `packageType` can be `project`, `project_security` or `configuration`. The `packagePurpose` can be `object_migration` or `project_merge`.

Sample Request Body:

```json
{
  "name": "ProjectMigration_success_upload",
  "type": "migrations.packages",
  "size": 600,
  "sha256": "f392221a7d188949c19a9c8a8b5c991135ea31269658d946ebc424c74a3b5dc6",
  "extension": "mmp",
  "environment": {
    "id": "Source environment URL",
    "name": "Source environment name"
  },
  "extraInfo": {
    "packageType": "project",
    "packagePurpose": "object_migration"
  }
}
```

Sample Response Body:

```json
{
  "id": "bWlncmF0aW9ucy5wYWNrYWdlczpDNEVGOEQyMjk0ODA0NzI1OUYyRkQzQkMzNTE2RkI2RA==",
  "type": "migrations.packages",
  "name": "ProjectMigration_success_upload",
  "path": "mstr/shared/migrations/packages/2022-09-07/C4EF8D22948047259F2FD3BC3516FB6D.mmp",
  "sha256": "f392221a7d188949c19a9c8a8b5c991135ea31269658d946ebc424c74a3b5dc6",
  "existing": false,
  "size": 600,
  "extension": "mmp",
  "creator": {
    "id": "54F3D26011D2896560009A8E67019608",
    "name": "Administrator"
  },
  "environment": {
    "id": "Source environment URL",
    "name": "Source environment name"
  },
  "creationDate": "2022-09-07T06:30:01.537+0000",
  "lastUpdatedDate": "2022-09-07T06:30:01.537+0000",
  "extraInfo": {
    "packageId": "C337C6D1FAC94E1998DB162B20D6B95E",
    "packageType": "project",
    "packagePurpose": "object_migration"
  }
}
```

### Step 3: Use the `PUT /api/mstrServices/library/storage/sharedFileStore/files/{fileId}/binary` API call to the target Library

Since the migration package file metadata is created successfully, thie call will upload the package file to the storage service.

Sample Request Header:

```http
"Content-Type": "multipart/form-data"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
```

The request body contains the binary data of the package file with key `file`.

Sample Response Body:

```json
{
  "id": "bWlncmF0aW9ucy5wYWNrYWdlczpDNEVGOEQyMjk0ODA0NzI1OUYyRkQzQkMzNTE2RkI2RA==",
  "type": "migrations.packages",
  "name": "ProjectMigration_success_upload",
  "path": "mstr/shared/migrations/packages/2022-09-07/C4EF8D22948047259F2FD3BC3516FB6D.mmp",
  "sha256": "f392221a7d188949c19a9c8a8b5c991135ea31269658d946ebc424c74a3b5dc6",
  "existing": true,
  "size": 600,
  "extension": "mmp",
  "creator": {
    "id": "54F3D26011D2896560009A8E67019608",
    "name": "Administrator"
  },
  "environment": {
    "id": "Source environment URL",
    "name": "Source environment name"
  },
  "creationDate": "2022-09-07T06:30:01.537+0000",
  "lastUpdatedDate": "2022-09-07T07:33:03.652+0000",
  "extraInfo": {
    "packageId": "C337C6D1FAC94E1998DB162B20D6B95E",
    "packageType": "project",
    "packagePurpose": "object_migration"
  }
}
```

### Step 4: Use the `POST /api/migrations` API call to the target Library

This call will trigger the uploaded package migration. Package File id is defined in `packageInfo` > `storage` > `sharedFileStore` > `file`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

There are two types of supported migration packages: `project package` and `configuration package`. For `project package`, the related `X-MSTR-ProjectID` project ID is required in the request header of each endpoint. For `configuration package`, the project ID should not be used in the request header.

Provide the correct `environment` and `project` information in the request body.

Sample Request Body:

```json
{
  "packageInfo": {
    "storage": {
      "sharedFileStore": {
        "files": {
          "id": "{{fileId}}"
        }
      }
    },
    "purpose": "migration_from_shared_file_store"
  },
  "importInfo": {
    "environment": {
      "id": "https://env-295736.customer.cloud.microstrategy.com/consume-upload-delta-fix/",
      "name": "upload-aws"
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
  "id": "C337C6D1FAC94E1998DB162B20D6B95E:C5B8D2D7B76641E1817496B1D77EE09A",
  "packageInfo": {
    "id": "C337C6D1FAC94E1998DB162B20D6B95E",
    "status": "locked",
    "progress": 100.0
  },
  "importInfo": {
    "id": "C5B8D2D7B76641E1817496B1D77EE09A",
    "status": "importing",
    "importRequestStatus": "approved",
    "undoRequestStatus": "pending",
    "progress": 0.0
  }
}
```

### Step 5: Use the `GET /api/migrations/{migrationid}` API call to the target Library

Since the package migration is asynchronously processing, this call checks the migration status, which is usually `importing`, `imported`, or `import_failed`.

Repeat this step until you get `importInfo` as `"status": "imported"`.

Sample Request Header:

```http
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
```

Sample Response Body:

```json
{
  "id": "C337C6D1FAC94E1998DB162B20D6B95E:C5B8D2D7B76641E1817496B1D77EE09A",
  "packageInfo": {
    "id": "C337C6D1FAC94E1998DB162B20D6B95E",
    "name": "ProjectMigration_success_upload",
    "replicated": true,
    "purpose": "migration_from_shared_file_store",
    "type": "project",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2022-09-07T06:30:01.537+0000",
    "lastUpdatedDate": "2022-09-07T07:33:03.652+0000",
    "storage": {
      "size": 600,
      "path": "mstr/shared/migrations/packages/2022-09-07/C4EF8D22948047259F2FD3BC3516FB6D.mmp"
    },
    "status": "locked",
    "message": "",
    "progress": 100.0,
    "deleted": false,
    "existing": true
  },
  "importInfo": {
    "id": "C5B8D2D7B76641E1817496B1D77EE09A",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2022-09-07T08:03:04.130+0000",
    "lastUpdatedDate": "2022-09-07T08:03:23.745+0000",
    "environment": {
      "id": "https://env-295736.customer.cloud.microstrategy.com/consume-upload-delta-fix/",
      "name": "upload-aws"
    },
    "status": "imported",
    "importRequestStatus": "approved",
    "undoRequestStatus": "pending",
    "progress": 100.0,
    "message": "",
    "undoStorage": {
      "size": 15622,
      "path": "mstr/shared/migrations/undo/C337C6D1FAC94E1998DB162B20D6B95E/C5B8D2D7B76641E1817496B1D77EE09A.mmp"
    },
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial"
    },
    "deleted": false
  },
  "version": "2"
}
```

## Delete uploaded migration package

Make sure to delete uploaded package metadata first then delete the migration import record in the target environment.

### Step 1: Use the `DELETE /api/mstrServices/library/storage/sharedFileStore/files/{fileId}` API call to the source Library

This call deletes the metadata and binary file of the uploaded package.

Sample Request Header

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
```

### Step 2: Use the `DELETE /api/migrations?packageId={packageId}` API call to the target Library

This call deletes the uploaded package migration record in the target environment.

Sample Request Header

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
```

## Performance

For performance concerns, the number of uploaded packages should less than 1000, which can be configured in the `configOverride.properties` with the field `storage.sharedFileStore.migrations.packages.maxNumber`. Of course, the best practice is actively deleting unused objects.

## Compatibility

A package created in an earlier platform version can be downloaded, uploaded and imported to a newer platform version, but can not be validated.

## Suggestions

- The user should have admin privileges in target environments.
- Due to databases being distributed across environments, make sure both target and source environments are connected during the import or deletion of packages and when viewing migration status.
- Environment and project information should be provided in the request body when starting the migrations.
- Use the unique `environment URL` as the unique environment ID. Make sure that you use the same environment ID when connecting to it in Workstation.
- The maximum size of the package is 2 GB. If it is larger, the uploading fails.

## Troubleshooting

- If the Library Server cannot connect to the database, you may receive the following error responses:
  - The API requires MicroStrategy Storage Service. Please contact your administrator.
  - This can occur due to the following reasons:
    - Database version is lower than required
    - Database configuration is missing or invalid in `configOverride.properties` file
- If your storage location is not configured property, you may receive the following message:

  - The Storage Service is not configured properly, please contact your administrator to configure Storage Service
  - See [Configure the Storage Service via Workstation](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm) for more information.

- If the undo package is not generated while the import finishes successfully in the target environment, check if you set any of the conflict rules as `keep_both` in the source environment. The undo functionality is not supported if you use `keep_both` in any conflict rules. To ensure that the undo package can be generated and used to roll back the project merge, you need to ensure that no `keep_both` rule is used in the package settings of the source environment.
