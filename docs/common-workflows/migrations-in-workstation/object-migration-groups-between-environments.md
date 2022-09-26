---
title: Object Migration Groups Between Environments
description: You can move a group of object packages between environments within Workstation.
---

Starting in MicroStrategy 2021 Update 7, you can move a group of object packages between environments within Workstation. These groups of packages are all maintained by the [MicroStrategy Storage Service](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service.htm), instead of you having to manage the packages yourself.

You must [configure the package storage location in Workstation](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm) to use this feature.

## APIs

- [POST api/migrationGroups](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/MigrationGroups/createMigrationGroup)
- [PUT api/migrationGroups/{migrationGroupId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/MigrationGroups/triggerImport)
- [PATCH /api/migrationGroups/{migrationGroupId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/MigrationGroups/updateMigration)
- [GET /api/migrationGroups/{migrationGroupId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/MigrationGroups/getMigrationGroup)
- [GET /api/migrationGroups](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/MigrationGroups/getMigrationGroupList)
- [DELETE /api/migrationGroups?packageGroupId={{packageGroupId}}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/MigrationGroups/deletePackage)

## Privileges and Authorization

You need the following privileges for both the source and target environments:

- Bypass all objects security check
- Create group of packages
- Apply group of packages

:::tip

To execute the API, you must get the authorization token by executing the `POST /api/auth/login` request, and get a token as `"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"` in the response body. Keep the token value. It is required to execute the REST API. See [Workflow Sample: Authentication](../authentication.md) for more information.

:::

## Use Scenario

The best practice scenario is when Workstation uses one Library server as a source and another Library server as a target. The source and target environments can be the same.

## Create & Import Migration Group

### Step 1: Use the `POST /api/migrationGroups` API call to the source Library

This call triggers the packages group creation. Package settings and content are defined in `packageInfo` > `tocView`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

There are two types of supported migration packages: `project package` and `configuration package`. For `project package`, the related project ID is required in the request body of each packages. For `configuration package`, the project ID should not be used in the request body.

Provide the correct `environment` and `project` information in the request body.

Sample Request Body:

```json
{
  "name": "test_migrationGroup",
  "sourceEnvironment": {
    "id": "environment_url_src",
    "name": "environment_src"
  },
  "targetEnvironment": {
    "id": "environment_url_tar",
    "name": "environment_tar"
  },
  "treeView": {},
  "migrations": [
    {
      "packageInfo": {
        "type": "configuration",
        "tocView": {
          "settings": {
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "989875724CB91A7EC2E365BD0228EB50",
              "type": 34,
              "action": "use_existing",
              "includeDependents": false,
              "level": "project_object"
            }
          ]
        }
      },
      "importInfo": {}
    },
    {
      "packageInfo": {
        "type": "project",
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "Category"
        },
        "tocView": {
          "settings": {
            "updateSchema": ["recal_table_logical_size"],
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "0DFE6FB4356F4FA2A0C1C10D0B415355",
              "name": "Add",
              "version": "1F348F3E11EB7C9D8F150080EF651EEA",
              "type": 11,
              "action": "force_replace",
              "includeDependents": false,
              "level": "project_object"
            },
            {
              "id": "1334ECBB11E78F4D109F0080EFD55D0D",
              "name": "SaveAsDocumentTest",
              "version": "6283BF7211EB7CA13A950080EFE5963B",
              "type": 55,
              "action": "use_existing",
              "includeDependents": false,
              "level": "project_object"
            }
          ]
        }
      },
      "importInfo": {
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "name"
        }
      }
    }
  ],
  "version": "2"
}
```

Sample Response Body:

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "importRequestStatus": "pending",
  "undoRequestStatus": "pending",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "creating",
        "progress": 0.0
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "pending",
        "progress": 0.0
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "empty",
        "progress": 0.0
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "pending",
        "progress": 0.0
      }
    }
  ]
}
```

### Step 2: Use the `GET /api/migrationGroups/{migrationGroupId}` API call to the source Library

Since the package group creation is an asynchronous process, this call checks the creation status, which is usually `empty`, `locked`, `creating`, `created`, or `create_failed`. Apply 'fail fast' strategy in handling the package group creation which means that if one of the packages creation fails, the whole package group creation fails.

Repeat this step until you get `migrations[*].packageInfo.status` as `created` for all migration of packages.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

Sample Response Body:

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "sourceEnvironment": {
    "id": "environment_url_src",
    "name": "environment_src"
  },
  "targetEnvironment": {
    "id": "environment_url_tar",
    "name": "environment_tar"
  },
  "treeView": "{}",
  "importRequestStatus": "pending",
  "undoRequestStatus": "pending",
  "creationDate": "2022-09-08T06:47:19.599+0000",
  "lastUpdatedDate": "2022-09-08T06:47:41.426+0000",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "name": "test_migrationGroup",
        "replicated": false,
        "purpose": "migration_group",
        "type": "configuration",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:47:28.144+0000",
        "storage": {
          "size": 3006,
          "path": "mstr/shared/migrations/packages/2022-09-08/5C3AEA3CFBF349559C25C41903F36048.mmp"
        },
        "project": {},
        "status": "created",
        "message": "",
        "progress": 100.0,
        "deleted": false,
        "existing": true,
        "tocView": {
          "settings": {
            "updateSchema": [],
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "989875724CB91A7EC2E365BD0228EB50",
              "name": "User_Korean",
              "version": "385DE21942CBD4AD3BFED28070A54C7E",
              "type": 34,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2008-12-23T09:17:03.000+0000",
              "dateModified": "2017-04-11T20:16:37.000+0000",
              "action": "use_existing",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "configuration_object"
            }
          ]
        }
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "creator": {},
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:47:19.599+0000",
        "status": "pending",
        "progress": 0.0,
        "message": "",
        "undoStorage": {},
        "project": {},
        "deleted": false
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "name": "test_migrationGroup",
        "replicated": false,
        "purpose": "migration_group_child",
        "type": "project",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:47:41.426+0000",
        "storage": {
          "size": 130139,
          "path": "mstr/shared/migrations/packages/2022-09-08/B0D001993B754E569C9E4FE6C3879EA3.mmp"
        },
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "Category"
        },
        "status": "created",
        "message": "",
        "progress": 100.0,
        "deleted": false,
        "existing": true,
        "tocView": {
          "settings": {
            "updateSchema": ["recal_table_logical_size"],
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "0DFE6FB4356F4FA2A0C1C10D0B415355",
              "name": "Add",
              "version": "1F348F3E11EB7C9D8F150080EF651EEA",
              "type": 11,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2008-12-22T14:51:20.000+0000",
              "dateModified": "2022-09-05T04:36:32.000+0000",
              "action": "force_replace",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "project_object"
            },
            {
              "id": "1334ECBB11E78F4D109F0080EFD55D0D",
              "name": "SaveAsDocumentTest",
              "version": "6283BF7211EB7CA13A950080EFE5963B",
              "type": 55,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2017-09-01T19:38:06.000+0000",
              "dateModified": "2021-03-04T04:23:35.000+0000",
              "action": "use_existing",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "project_object"
            }
          ]
        }
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "creator": {},
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:47:19.599+0000",
        "status": "pending",
        "progress": 0.0,
        "message": "",
        "undoStorage": {},
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "name"
        },
        "deleted": false
      }
    }
  ],
  "version": "1"
}
```

### Step 3: Use the `PATCH /api/migrationGroups/{migrationGroupId}` API call to the source Library

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
  "importRequestStatus": "requested"
}
```

Sample Response Body:

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "importRequestStatus": "requested",
  "undoRequestStatus": "pending",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "created",
        "progress": 100.0
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "pending",
        "progress": 0.0
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "created",
        "progress": 100.0
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "pending",
        "progress": 0.0
      }
    }
  ]
}
```

You must successfully PATCH the `"importRequestStatus": "requested"`. Then make another PATCH call of `"importRequestStatus": "approved"`.

Sample Request Body:

```json
{
  "importRequestStatus": "approved"
}
```

Sample Response Body:

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "importRequestStatus": "approved",
  "undoRequestStatus": "pending",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "locked",
        "progress": 100.0
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "pending",
        "progress": 0.0
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "locked",
        "progress": 100.0
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "pending",
        "progress": 0.0
      }
    }
  ]
}
```

### Step 4: Use the `GET /api/migrationGroups/{{migrationGroupId}}?showContent=all` API call to the source Library

This call gets the full content of the migration groups to prepare the import call.

This is similar to step 2, but with the `showContent=all` query parameter, save the response body and use it for the next step.

Sample Response Body:

:::note

`packageInfo.replicated` field will be changed to `true` in next step PUT call.

:::

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "sourceEnvironment": {
    "id": "environment_url_src",
    "name": "environment_src"
  },
  "targetEnvironment": {
    "id": "environment_url_tar",
    "name": "environment_tar"
  },
  "treeView": "{}",
  "importRequestStatus": "approved",
  "undoRequestStatus": "pending",
  "creationDate": "2022-09-08T06:47:19.599+0000",
  "lastUpdatedDate": "2022-09-08T06:50:56.718+0000",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "name": "test_migrationGroup",
        "replicated": false,
        "purpose": "migration_group",
        "type": "configuration",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.716+0000",
        "storage": {
          "size": 3006,
          "path": "mstr/shared/migrations/packages/2022-09-08/5C3AEA3CFBF349559C25C41903F36048.mmp"
        },
        "project": {},
        "status": "locked",
        "message": "",
        "progress": 100.0,
        "deleted": false,
        "existing": true,
        "tocView": {
          "settings": {
            "updateSchema": [],
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "989875724CB91A7EC2E365BD0228EB50",
              "name": "User_Korean",
              "version": "385DE21942CBD4AD3BFED28070A54C7E",
              "type": 34,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2008-12-23T09:17:03.000+0000",
              "dateModified": "2017-04-11T20:16:37.000+0000",
              "action": "use_existing",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "configuration_object"
            }
          ]
        }
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "creator": {},
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.717+0000",
        "status": "pending",
        "progress": 0.0,
        "message": "",
        "undoStorage": {},
        "project": {},
        "deleted": false
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "name": "test_migrationGroup",
        "replicated": false,
        "purpose": "migration_group_child",
        "type": "project",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.717+0000",
        "storage": {
          "size": 130139,
          "path": "mstr/shared/migrations/packages/2022-09-08/B0D001993B754E569C9E4FE6C3879EA3.mmp"
        },
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "Category"
        },
        "status": "locked",
        "message": "",
        "progress": 100.0,
        "deleted": false,
        "existing": true,
        "tocView": {
          "settings": {
            "updateSchema": ["recal_table_logical_size"],
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "0DFE6FB4356F4FA2A0C1C10D0B415355",
              "name": "Add",
              "version": "1F348F3E11EB7C9D8F150080EF651EEA",
              "type": 11,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2008-12-22T14:51:20.000+0000",
              "dateModified": "2022-09-05T04:36:32.000+0000",
              "action": "force_replace",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "project_object"
            },
            {
              "id": "1334ECBB11E78F4D109F0080EFD55D0D",
              "name": "SaveAsDocumentTest",
              "version": "6283BF7211EB7CA13A950080EFE5963B",
              "type": 55,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2017-09-01T19:38:06.000+0000",
              "dateModified": "2021-03-04T04:23:35.000+0000",
              "action": "use_existing",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "project_object"
            }
          ]
        }
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "creator": {},
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.718+0000",
        "status": "pending",
        "progress": 0.0,
        "message": "",
        "undoStorage": {},
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "name"
        },
        "deleted": false
      }
    }
  ],
  "version": "1"
}
```

### Step 5: Use the `PUT /api/migrationGroups/{{migrationGroupId}}` API call to the target Library

This call triggers the package group import.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
"prefer": "respond-async"
"generateUndo": "true" (by default)
```

Sample Request Body:

Copy the response body from step 4 and change `"replicated": false`, to `true` for all packages in the migration group.

:::note

`packageInfo.replicated` field has changed to `true`.

:::

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "sourceEnvironment": {
    "id": "environment_url_src",
    "name": "environment_src"
  },
  "targetEnvironment": {
    "id": "environment_url_tar",
    "name": "environment_tar"
  },
  "treeView": "{}",
  "importRequestStatus": "approved",
  "undoRequestStatus": "pending",
  "creationDate": "2022-09-08T06:47:19.599+0000",
  "lastUpdatedDate": "2022-09-08T06:50:56.718+0000",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "name": "test_migrationGroup",
        "replicated": true,
        "purpose": "migration_group",
        "type": "configuration",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.716+0000",
        "storage": {
          "size": 3006,
          "path": "mstr/shared/migrations/packages/2022-09-08/5C3AEA3CFBF349559C25C41903F36048.mmp"
        },
        "project": {},
        "status": "locked",
        "message": "",
        "progress": 100.0,
        "deleted": false,
        "existing": true,
        "tocView": {
          "settings": {
            "updateSchema": [],
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "989875724CB91A7EC2E365BD0228EB50",
              "name": "User_Korean",
              "version": "385DE21942CBD4AD3BFED28070A54C7E",
              "type": 34,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2008-12-23T09:17:03.000+0000",
              "dateModified": "2017-04-11T20:16:37.000+0000",
              "action": "use_existing",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "configuration_object"
            }
          ]
        }
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "creator": {},
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.717+0000",
        "status": "pending",
        "progress": 0.0,
        "message": "",
        "undoStorage": {},
        "project": {},
        "deleted": false
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "name": "test_migrationGroup",
        "replicated": true,
        "purpose": "migration_group_child",
        "type": "project",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.717+0000",
        "storage": {
          "size": 130139,
          "path": "mstr/shared/migrations/packages/2022-09-08/B0D001993B754E569C9E4FE6C3879EA3.mmp"
        },
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "Category"
        },
        "status": "locked",
        "message": "",
        "progress": 100.0,
        "deleted": false,
        "existing": true,
        "tocView": {
          "settings": {
            "updateSchema": ["recal_table_logical_size"],
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "0DFE6FB4356F4FA2A0C1C10D0B415355",
              "name": "Add",
              "version": "1F348F3E11EB7C9D8F150080EF651EEA",
              "type": 11,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2008-12-22T14:51:20.000+0000",
              "dateModified": "2022-09-05T04:36:32.000+0000",
              "action": "force_replace",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "project_object"
            },
            {
              "id": "1334ECBB11E78F4D109F0080EFD55D0D",
              "name": "SaveAsDocumentTest",
              "version": "6283BF7211EB7CA13A950080EFE5963B",
              "type": 55,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2017-09-01T19:38:06.000+0000",
              "dateModified": "2021-03-04T04:23:35.000+0000",
              "action": "use_existing",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "project_object"
            }
          ]
        }
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "creator": {},
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.718+0000",
        "status": "pending",
        "progress": 0.0,
        "message": "",
        "undoStorage": {},
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "name"
        },
        "deleted": false
      }
    }
  ],
  "version": "1"
}
```

Sample Response Body:

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "importRequestStatus": "approved",
  "undoRequestStatus": "pending",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "locked",
        "progress": 100.0
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "importing",
        "progress": 0.0
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "locked",
        "progress": 100.0
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "pending",
        "progress": 0.0
      }
    }
  ]
}
```

### Step 6 (Optional): Use the `GET /api/migrationGroups/{{migrationGroupId}}` API call to the Library

Since the package group import is an asynchronous process, this call checks the `migrations[*].importInfo.status`. It is usually `pending`, `importing`, `imported`, or `import_failed`. Need to query the status of all package imports in the group. Apply 'fail fast' strategy in handling the package group import which means that if one of the packages import fails, the whole package group import fails.

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "sourceEnvironment": {
    "id": "environment_url_src",
    "name": "environment_src"
  },
  "targetEnvironment": {
    "id": "environment_url_tar",
    "name": "environment_tar"
  },
  "treeView": "{}",
  "importRequestStatus": "approved",
  "undoRequestStatus": "pending",
  "creationDate": "2022-09-08T06:47:19.599+0000",
  "lastUpdatedDate": "2022-09-08T06:55:05.596+0000",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "name": "test_migrationGroup",
        "replicated": false,
        "purpose": "migration_group",
        "type": "configuration",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.716+0000",
        "storage": {
          "size": 3006,
          "path": "mstr/shared/migrations/packages/2022-09-08/5C3AEA3CFBF349559C25C41903F36048.mmp"
        },
        "project": {},
        "status": "locked",
        "message": "",
        "progress": 100.0,
        "deleted": false,
        "existing": true,
        "tocView": {
          "settings": {
            "updateSchema": [],
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "989875724CB91A7EC2E365BD0228EB50",
              "name": "User_Korean",
              "version": "385DE21942CBD4AD3BFED28070A54C7E",
              "type": 34,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2008-12-23T09:17:03.000+0000",
              "dateModified": "2017-04-11T20:16:37.000+0000",
              "action": "use_existing",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "configuration_object"
            }
          ]
        }
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:54:54.216+0000",
        "status": "imported",
        "progress": 100.0,
        "message": "",
        "undoStorage": {
          "size": 182,
          "path": "mstr/shared/migrations/undo/ACEE65A19AD34FA38200A3D59BA879A9/0AE4FFDD4289481084005D39EF516FB4.mmp"
        },
        "project": {},
        "deleted": false
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "name": "test_migrationGroup",
        "replicated": false,
        "purpose": "migration_group_child",
        "type": "project",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:50:56.717+0000",
        "storage": {
          "size": 130139,
          "path": "mstr/shared/migrations/packages/2022-09-08/B0D001993B754E569C9E4FE6C3879EA3.mmp"
        },
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "Category"
        },
        "status": "locked",
        "message": "",
        "progress": 100.0,
        "deleted": false,
        "existing": true,
        "tocView": {
          "settings": {
            "updateSchema": ["recal_table_logical_size"],
            "aclOnReplacingObjects": "replace",
            "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
            "defaultAction": "keep_both"
          },
          "content": [
            {
              "id": "0DFE6FB4356F4FA2A0C1C10D0B415355",
              "name": "Add",
              "version": "1F348F3E11EB7C9D8F150080EF651EEA",
              "type": 11,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2008-12-22T14:51:20.000+0000",
              "dateModified": "2022-09-05T04:36:32.000+0000",
              "action": "force_replace",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "project_object"
            },
            {
              "id": "1334ECBB11E78F4D109F0080EFD55D0D",
              "name": "SaveAsDocumentTest",
              "version": "6283BF7211EB7CA13A950080EFE5963B",
              "type": 55,
              "owner": {
                "id": "54F3D26011D2896560009A8E67019608"
              },
              "dateCreated": "2017-09-01T19:38:06.000+0000",
              "dateModified": "2021-03-04T04:23:35.000+0000",
              "action": "use_existing",
              "includeDependents": false,
              "explicitIncluded": true,
              "level": "project_object"
            }
          ]
        }
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "creator": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "creationDate": "2022-09-08T06:47:19.599+0000",
        "lastUpdatedDate": "2022-09-08T06:55:05.596+0000",
        "status": "imported",
        "progress": 100.0,
        "message": "",
        "undoStorage": {
          "size": 11496,
          "path": "mstr/shared/migrations/undo/61794A98597D45B684BB9C711295BB9B/597576B451BB46CFBDD29FB71EC5CC98.mmp"
        },
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "name"
        },
        "deleted": false
      }
    }
  ],
  "version": "1"
}
```

## Undo Migration

### Step 1: Use the `PATCH /api/migrationGroups/{{migrationGroupId}}` API call to the target Library

This call requests a package undo.

Patch the `"undoRequestStatus": "requested"`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
"prefer": "respond-async"
```

Sample Request Body:

```json
{
  "undoRequestStatus": "requested"
}
```

Sample Response Body:

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "importRequestStatus": "approved",
  "undoRequestStatus": "requested",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "locked",
        "progress": 100.0
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "imported",
        "progress": 100.0
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "locked",
        "progress": 100.0
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "imported",
        "progress": 100.0
      }
    }
  ]
}
```

### Step 2: Use the `PATCH /api/migrationGroups/{{migrationGroupId}}` API call to the target Library

This call approves the package undo and triggers the undo process.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
"prefer": "respond-async"
```

Sample Request Body:

```json
{
  "undoRequestStatus": "approved"
}
```

Sample Response Body:

```json
{
  "id": "11C09927B0B748A6970AE958CBD44FCE:FB6A954D2AB14BB09E2F98B72E634224",
  "name": "test_migrationGroup",
  "importRequestStatus": "approved",
  "undoRequestStatus": "approved",
  "migrations": [
    {
      "id": "ACEE65A19AD34FA38200A3D59BA879A9:0AE4FFDD4289481084005D39EF516FB4",
      "packageInfo": {
        "id": "ACEE65A19AD34FA38200A3D59BA879A9",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "locked",
        "progress": 100.0
      },
      "importInfo": {
        "id": "0AE4FFDD4289481084005D39EF516FB4",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "undoing",
        "progress": 100.0
      }
    },
    {
      "id": "61794A98597D45B684BB9C711295BB9B:597576B451BB46CFBDD29FB71EC5CC98",
      "packageInfo": {
        "id": "61794A98597D45B684BB9C711295BB9B",
        "groupId": "11C09927B0B748A6970AE958CBD44FCE",
        "status": "locked",
        "progress": 100.0
      },
      "importInfo": {
        "id": "597576B451BB46CFBDD29FB71EC5CC98",
        "groupId": "FB6A954D2AB14BB09E2F98B72E634224",
        "status": "imported",
        "progress": 100.0
      }
    }
  ]
}
```

### Step 3 (Optional): Use the `GET /api/migrationGroups/{{migrationGroupId}}` API call to the target Library

Since the package group undo is an asynchronous process, this call checks the undo status. Usually it is `undoing`, `undo_success`, or `undo_failed`. If one of the packages undo failed, it does not affect the undo process of the rest packages.

## Delete Package

Make sure to delete migrations from the source and target one by one.

### Step 1: Use the `DELETE /api/migrationGroups?packageGroupId={{packageGroupId}}` API call to the source Library

This call deletes a package group from it.

Sample Request Header

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

### Step 2: Use the `DELETE /api/migrationGroups?packageGroupId={{packageGroupId}}` API call to the target Library

This call deletes a package from it.

Sample Request Header

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

## Performance

For performance concerns, MicroStrategy suggests you create or import one package group per session and time.

## Compatibility

A package group created in an earlier platform version can be imported to a newer platform version, but not vice versa.

## Suggestions

- The user should have admin privileges in both source and target environments.
- Due to databases being distributed across environments, make sure to connect to both the target and source environments during the import or deletion of packages and when viewing migration status.
- Environment and project information should be provided in the request body when starting the package group migrations.
- Use the unique `environment URL` as the environment ID. Make sure to use the same environment ID when you connect to it via Workstation.
- If possible, include all dependencies during the package group creation. If not, there could be small differences between the source and destination environments that cause migration failure
- One project contains at most one package in the migration group.
- When creating/importing packages, configuration package should be placed at FIRST among all packages in the group. Otherewise, it may currupt the MD.
- There are at most 100 packages in one migration group, this can be configured in the configuration file.
- The query result of migration group has an alphabetical order of packages by project name. You can organize the packages in same order when creating migration groups to align with the query result.

- Conflict rules:

  - `use_existing`: No change is made to the destination object group . The source object group is not copied.
  - `replace`: The destination object group is replaced with the source object.
  - `keep_both`: No change is made to the destination object group. The source object group is duplicated if the destination object group does not exist. However, if the destination object group exists with the same ID and version, the source object group is ignored. If the destination object group exists with the same ID and a different version, the source object group is saved as a new object.
  - `use_newer`: If the source object modification time is more recent than the destination object modification time, the Replace action is used. Otherwise, the Use existing action is used.
  - `use_older`: If the source object modification time is more recent than the destination object modification time, the Use existing action is used. Otherwise, the Replace action is used.
  - `force_replace`: Replace the object in the destination project with the version of the object in the update package, even if both versions of the object have the same version ID.
  - `delete`: Delete the object group from the destination project. The version of the object in the update package is not imported into the destination project.

  :::caution

  If the object group in the destination has any used-by dependencies when you import the update package, the import fails.

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

- If the undo package group is not generated when the import finishes successfully in the target environment, check if you set any of the conflict rules as `keep_both` in the source environment. The undo functionality is not supported if you use `keep_both` in any conflict rules. To ensure that the undo package group can be generated and used to roll back the project merge, you need to ensure that no the `keep_both` rule is used in the package settings of the source environment.
