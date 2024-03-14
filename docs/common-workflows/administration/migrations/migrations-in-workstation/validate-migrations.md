---
title: Validate migrations
description: You can validate migrations between environments within Workstation. When you validate a migration, you are performing all merges without committing any changes to the metadata. If a migration fails to be validated in a target environment, the migration also fails when being migrated to the same target. Administrator users can only validate migrations prior to migration.
---

<Available since="2021 Update 6" />

Starting in MicroStrategy 2021 Update 6, you can validate migrations between environments within Workstation. When you validate a migration, you are performing all merges without committing any changes to the metadata. If a migration fails to be validated in a target environment, the migration also fails when being migrated to the same target. Administrator users can only validate migrations prior to migration.

You must [configure the package storage location in Workstation](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm) to use this feature.

## APIs

- [PATCH /api/migrations/\{migrationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/updateMigration_1)
- [GET /api/migrations/\{migrationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/getMigration)
- [PUT /api/migrations/\{migrationId}/validation](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/triggerValidate)

## Privileges and authorization

Only Administrator users can validate migrations. Administrators must have the following privileges:

- Create package
- Apply package
- Bypass all objects security check

To execute the API, you must get the authorization token by executing the `POST /api/auth/login` request, and get a token as `"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"` in the response body. Keep the token value. It is required to execute the REST API. See [Authentication](/docs/getting-started/authentication.md) for more information.

:::info

The [DssXmlPrivilegesCreatePackage](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesCreatePackage) or [DssXmlPrivilegesApplyPackage](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesApplyPackage) privilege is required
to get the details of a migration record or update a migration.

:::

## Use scenarios

The best practice scenario is when Workstation uses one Library server as a source and another Library server as a target. The source and target environments can be the same.

For migrations, the validation action can only occur after the corresponding package is created and before migrating. This means the package status should be created.

## Validate migration

### Step 1: Use the `PATCH /api/migrations/{migrationId}` API call to the source Library

This call sets the target environment.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.
```

Sample Request Body:

:::note

`importInfo.project` field is optional.

:::

```json
{
  "importInfo": {
    "environment": {
      "id": "sss",
      "name": "sss"
    },
    "project": {
      "id": "id",
      "name": "name"
    }
  }
}
```

Sample Response Body:

```json
{
  "id": "packageId:importId",
  "packageInfo": {
    "id": "packageId",
    "status": "created",
    "progress": 100
  },
  "importInfo": {
    "id": "importId",
    "status": "pending",
    "importRequestStatus": "pending",
    "undoRequestStatus": "pending",
    "progress": 0
  }
}
```

### Step 2: Use the `GET /api/migrations/{migrationId}` API call to the source Library

This call gets the content of the migration to prepare the request body for the validation call.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.
```

Sample Response Body:

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "replicated": false,
    "type": "project",
    "purpose": "object_migration",
    "name": "sample",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2022-03-16T07:38:40.125+0000",
    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",
    "environment": {
      "id": "Source environment URL",
      "name": "Source environment name"
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
      "id": "Target environment URL",
      "name": "Target environment name"
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
  "validation": {
    "status": "validated",
    "progress": 100,
    "creationDate": "2022-03-30T19:54:07.205+0000",
    "lastUpdatedDate": "2022-03-30T19:54:27.205+0000",
    "message": ""
  },
  "version": "1"
}
```

### Step 3: Use the `PUT /api/migrations/{migrationId}/validation` API call to the target Library

This call triggers the migration validation in the target. This API can only be called by an Administrator user when a package is `created`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.
```

Sample Request Body:

:::note

All the fields are required other than `packageInfo.project` and `importInfo.project`, which depends on the package type.

:::

```json
{
  "id": "xxx:xxxxx",
  "packageInfo": {
    "id": "xxxx",
    "type": "project",
    "environment": {
      "id": "sss",
      "name": "sss"
    },
    "storage": {
      "size": 10000,
      "path": "xxxx"
    },
    "project": {
      "id": "id",
      "name": "name"
    },
    "status": "locked"
  },
  "importInfo": {
    "id": "xxxx",
    "environment": {
      "id": "sss",
      "name": "sss"
    },
    "project": {
      "id": "id",
      "name": "name"
    }
  }
}
```

No response body.

### Step 4: Use the `PATCH /api/migrations/{migrationId}` API call to the source Library

This call informs the source library that the validation is beginning in the target. This API can only be called by an Administrator user when the package is `created`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.
```

Sample Request Body:

```json
{
  "validation": {
    "status": "validating"
  }
}
```

Sample Response Body:

```json
{
  "id": "packageId:importId",
  "packageInfo": {
    "id": "packageId",
    "status": "created",
    "progress": 100
  },
  "importInfo": {
    "id": "importId",
    "status": "pending",
    "importRequestStatus": "pending",
    "undoRequestStatus": "pending",
    "progress": 0
  },
  "validation": {
    "status": "validating",
    "progress": 0
  }
}
```

### Step 5: Use the `GET /api/migrations/{migrationId}` API call to the source Library until the validation status becomes `validated` or `validation_failed`

Since the validation is asynchronously processing, this call updates the validation status. It is usually `validating`, `validated`, or `validation_failed`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.
```

Sample Response Body:

```json
{
  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",
  "packageInfo": {
    "id": "35958BEB7C56491C9A43F7661501E177",
    "replicated": false,
    "type": "project",
    "purpose": "object_migration",
    "name": "sample",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2022-03-16T07:38:40.125+0000",
    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",
    "environment": {
      "id": "Source environment URL",
      "name": "Source environment name"
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
      "id": "Target environment URL",
      "name": "Target environment name"
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
  "validation": {
    "status": "validation_failed",
    "progress": 0,
    "creationDate": "2022-03-30T19:54:07.205+0000",
    "lastUpdatedDate": "2022-03-30T19:56:27.205+0000",
    "message": ""
  },
  "version": "1"
}
```

## Performance

For performance concerns, MicroStrategy suggests you validate one package per session and time.

## Compatibility

A package validated in an earlier platform version can be validated to a newer platform version, but not vice versa.However, validation failures are more likely to occur between platforms with different versions.

## Suggestions

- The user should have admin privileges in both source and target environments.
- Due to databases being distributed across environments, make sure to connect to both the target and source environments during the validation.
- Target environment information should be provided in the request body when starting the validation.
- Use the unique `environment URL` as the unique environment ID. Make sure to use the same environment ID when you connect to it in Workstation.

## Troubleshooting

- If the Library Server cannot connect to the database, you may receive the following error response:
  - The API requires MicroStrategy Storage Service. Please contact your administrator.
  - This can occur due to the following reasons:
    - Database not running
    - Database version is lower than required
    - Database configuration is missing or invalid in `configOverride.properties` file
- If your storage location is not configured property, you may receive the following message:
  - The Storage Service is not configured properly, please contact your administrator to configure Storage Service
  - See [Configure the Storage Service via Workstation](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm) for more information.
- The validation is carried out in the target Library, but the validation status is saved to the source Library. This means the validation status is synchronized from target to source and shared files are levered to achieve this. As a result, you may receive the following error messages:

  - Cannot create or modify the shared file. It may be temporarily unavailable for accessing the storage location.
  - The shared file cannot be accessed. It may be deleted or the storage location cannot be accessed.

- MicroStrategy advises setting the **Maximum tolerance for computer clock synchronization** to a value of five minutes. See [Maximum tolerance for computer clock synchronization](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/maximum-tolerance-for-computer-clock-synchronization) on the [Microsoft technical documentation](https://docs.microsoft.com/en-us/) site for more information about modifying this setting. After making this change, if your environment times differ by more than five minutes, you receive the following message:

  The time difference between the source and target environments should be five minutes or less. Please modify the environment system time and try again.
