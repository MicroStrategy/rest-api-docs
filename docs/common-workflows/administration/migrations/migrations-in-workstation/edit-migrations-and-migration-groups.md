---
title: Edit migrations and migration groups
description: You can edit migration and migration group before importing.
---

<Available since="2021 Update 9" />

Starting in MicroStrategy 2021 Update 9, you can edit migrations and migration groups before importing. You can edit the names of migrations or migration groups and the objects within them, but not their type or purpose. You can edit migrations and migration groups for all types and purposes, except for uploaded migrations. However, you must pay attention to a migration's package and import statuses. You cannot edit migrations with a package status of 'creating' or 'locked'. You also cannot edit migrations with an import status of 'approved' or 'requested'. As expected, a migration group containing such a migration also cannot be edited.

## APIs

- [PUT /api/migrations/{migrationId}/packageInfo](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/editMigration)
- [PUT /api/migrationGroups/{migrationGroupId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migration%20Groups/triggerImport)

## Privileges and authorization

Only Architect users can validate migrations. An Architect must have the following privileges:

- Create package

To execute the API, you must get the authorization token by executing the `POST /api/auth/login request`, and get a `"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"` token in the response body. Keep the token value. See [Authentication](/docs/getting-started/authentication.md) for more information.

## Use scenarios

The best practice scenario is when Workstation uses one Library server as a source and another Library server as a target. The source and target environments can be the same.

You can only edit the package before it is migrated. This means the package status must be `created` or `created_failed` and the import status of the migration must be `pending` or `rejected`. You must edit the migration in the source environment.

## Edit Migrations

### 1. Get the full content of the migration

Endpoint: [`GET /api/migrations/{migrationId}?showContent=all`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/getMigrationList)

This call gets the full content of the migration to prepare it for editing. Use the `showContent=all` query parameter, to can get `tocView` and `treeView`. Save `packageInfo` in the response body and use it for the next step.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.
```

Sample Response Body:

```json
{
  "id": "09ADA2DD251F4927A442451C0100EA16:EA55B5338588411689E838FEC3A8EAA3",
  "packageInfo": {
    "id": "09ADA2DD251F4927A442451C0100EA16",
    "name": "object_migration_test",
    "replicated": false,
    "type": "project",
    "lastUpdatedDate": "2023-03-07T08:50:59.527+0000",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2023-03-07T08:50:33.267+0000",
    "environment": {
      "id": "sss_project_package_id",
      "name": "sss project package name"
    },
    "storage": {
      "size": 703230,
      "path": "mstr/shared/migrations/packages/2023-03-07/9DDDCDEF8A334FBAA98E47E0E8300CF9.mmp"
    },
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial"
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
          "dateModified": "2021-03-04T03:53:04.000+0000",
          "action": "force_replace",
          "includeDependents": false,
          "explicitIncluded": true,
          "level": "project_object"
        },
        {
          "id": "8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Category",
          "version": "21D7619E11EB7C9D8F150080EF753EEA",
          "type": 12,
          "owner": {
            "id": "54F3D26011D2896560009A8E67019608"
          },
          "dateCreated": "2001-01-02T20:48:11.000+0000",
          "dateModified": "2021-03-04T03:53:08.000+0000",
          "action": "use_newer",
          "includeDependents": false,
          "explicitIncluded": true,
          "level": "project_object"
        },
        {
          "id": "D8EE8AEC11E794390FF00080EF053519",
          "name": "DossierTest",
          "version": "62D8E88A11EB7CA13A550080EFC5563B",
          "type": 55,
          "owner": {
            "id": "54F3D26011D2896560009A8E67019608"
          },
          "dateCreated": "2017-09-08T02:03:03.000+0000",
          "dateModified": "2021-03-04T04:23:35.000+0000",
          "action": "use_existing",
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
        },
        {
          "id": "811B7AEB11EB53EF4E920080EFE51106",
          "name": "ReportDataSource",
          "version": "2CE7AC0F11EB7CA92C0E0080EF455F4D",
          "type": 3,
          "owner": {
            "id": "54F3D26011D2896560009A8E67019608"
          },
          "dateCreated": "2021-01-11T09:29:29.000+0000",
          "dateModified": "2021-03-04T05:19:21.000+0000",
          "action": "replace",
          "includeDependents": false,
          "explicitIncluded": true,
          "level": "project_object"
        },
        {
          "id": "8BC2E91D4AA8E9A14E7FBAB740B5B932",
          "name": "MD partition",
          "version": "22C4810411EB7C9D8F150080EF753EEA",
          "type": 15,
          "owner": {
            "id": "54F3D26011D2896560009A8E67019608"
          },
          "dateCreated": "2012-12-26T03:44:12.000+0000",
          "dateModified": "2021-03-04T03:53:10.000+0000",
          "action": "use_existing",
          "includeDependents": false,
          "explicitIncluded": true,
          "level": "project_object"
        },
        {
          "id": "F0B5CE694B42895AC7EE4C81433BD6D3",
          "name": "Cost Target",
          "version": "230C4E6C11EB7C9D8F150080EF651EEA",
          "type": 13,
          "owner": {
            "id": "54F3D26011D2896560009A8E67019608"
          },
          "dateCreated": "2009-02-16T10:17:19.000+0000",
          "dateModified": "2021-03-04T03:53:10.000+0000",
          "action": "use_older",
          "includeDependents": false,
          "explicitIncluded": true,
          "level": "project_object"
        },
        {
          "id": "0451E0F3418DEDB7468C7F94D59E231D",
          "name": "Choose Custom Group",
          "version": "C38F6AE011EB7CA2A3000080EF9572D2",
          "type": 10,
          "owner": {
            "id": "54F3D26011D2896560009A8E67019608"
          },
          "dateCreated": "2006-06-30T11:42:27.000+0000",
          "dateModified": "2021-03-04T04:33:27.000+0000",
          "action": "delete",
          "includeDependents": false,
          "explicitIncluded": true,
          "level": "project_object"
        }
      ]
    },
    "purpose": "object_migration",
    "treeView": "{\"treeViewType\":\"project\",\"treeViewSettings\":{\"updateSchema\":[],\"aclOnReplacingObjects\":\"use_existing\",\"aclOnNewObjects\":[\"keep_acl_as_source_object\"],\"defaultAction\":\"force_replace\"},\"treeViewContent\":[{\"id\":\"D8EE8AEC11E794390FF00080EF053519\",\"type\":55,\"action\":\"use_existing\",\"includeDependents\":null},{\"id\":\"811B7AEB11EB53EF4E920080EFE51106\",\"name\":null,\"type\":3,\"action\":\"replace\"}]}"
  },
  "importInfo": {
    "id": "EA55B5338588411689E838FEC3A8EAA3",
    "creator": {},
    "creationDate": "2023-03-07T08:50:33.268+0000",
    "lastUpdatedDate": "2023-03-07T08:50:33.268+0000",
    "environment": {
      "id": "sss_project_package_id",
      "name": "sss_project_import_name"
    },
    "status": "pending",
    "importRequestStatus": "pending",
    "undoRequestStatus": "pending",
    "progress": 0.0,
    "message": "",
    "undoStorage": {},
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "name"
    },
    "deleted": false
  },
  "version": "2"
}
```

### Step 2: Edit the migration package info

Endpoint: [PUT /api/migrations/{migrationId}/packageInfo](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/editMigration)

This call triggers migration editing in Library. This API can only be called by an Architect user when the package status of the migration is `created` or `created_failed` and the import status of the migration is `pending` or `rejected`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.
"prefer": "respond-async"
```

All required fields are in `packageInfo`, which is in the response body that you saved in step 1. You cannot modify the values ​​of `type` and `purpose`, but you can modify `name`, and the content of `tocView` and `treeView` as needed.

Sample Request Body:

```json
{
  "type": "project",
  "name": "Object_Migration_edit",
  "tocView": {
    "settings": {
      "updateSchema": ["recal_table_logical_size"],
      "aclOnReplacingObjects": "replace",
      "aclOnNewObjects": ["inherit_acl_as_dest_folder"],
      "defaultAction": "keep_both"
    },
    "content": [
      {
        "id": "1334ECBB11E78F4D109F0080EFD55D0D",
        "name": "SaveAsDocumentTest",
        "type": 55,
        "action": "use_existing",
        "includeDependents": false
      },
      {
        "id": "8D679D3711D3E4981000E787EC6DE8A4",
        "name": "Category",
        "type": 12,
        "action": "use_newer",
        "includeDependents": false
      },
      {
        "id": "F0B5CE694B42895AC7EE4C81433BD6D3",
        "name": "Cost Target",
        "type": 13,
        "action": "use_older",
        "includeDependents": false
      },
      {
        "id": "0DFE6FB4356F4FA2A0C1C10D0B415355",
        "name": "Add",
        "type": 11,
        "action": "force_replace",
        "includeDependents": false
      },
      {
        "id": "0451E0F3418DEDB7468C7F94D59E231D",
        "name": "Choose Custom Group",
        "type": 10,
        "action": "delete",
        "includeDependents": false
      },
      {
        "id": "8BC2E91D4AA8E9A14E7FBAB740B5B932",
        "name": "MD partition",
        "type": 15,
        "action": "use_existing",
        "includeDependents": false
      }
    ]
  },
  "treeView": {
    "treeViewType": "project",
    "treeViewSettings": {
      "updateSchema": [],
      "aclOnReplacingObjects": "use_existing",
      "aclOnNewObjects": ["keep_acl_as_source_object"],
      "defaultAction": "force_replace"
    },
    "treeViewContent": [
      {
        "id": "D8EE8AEC11E794390FF00080EF053519",
        "type": 55,
        "action": "use_existing",
        "includeDependents": null
      },
      {
        "id": "811B7AEB11EB53EF4E920080EFE51106",
        "name": null,
        "type": 3,
        "action": "replace"
      }
    ]
  }
}
```

Sample Response Body:

```json
{
  "id": "335B6F5DFA7847769F12E88E868EB103",
  "status": "creating",
  "progress": 0.0
}
```

### 3. Get the edit status of the migration

Endpoint: [GET /api/migrations/{migrationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/getMigration)

Since package editing is an asynchronous process, this call checks the creation status, which is usually `creating`, `created`, or `create_failed`.

Repeat this step until you get `packageInfo` as `"status": "created"`.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
```

Sample Response Body:

```json
{
  "id": "652323369FB24BC1BDCEE7DF4F674FA5:E00475B02F6A40ABB135B4A026B9BA75",
  "packageInfo": {
    "id": "652323369FB24BC1BDCEE7DF4F674FA5",
    "name": "Object_Migration_edit",
    "replicated": false,
    "type": "project",
    "lastUpdatedDate": "2023-03-08T09:49:39.893+0000",
    "creator": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "creationDate": "2023-03-08T09:48:50.325+0000",
    "environment": {
      "id": "sss_project_package_id",
      "name": "sss project package name"
    },
    "storage": {},
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial"
    },
    "status": "creating",
    "message": "",
    "progress": 0.0,
    "deleted": false,
    "existing": true,
    "purpose": "object_migration"
  },
  "importInfo": {
    "id": "E00475B02F6A40ABB135B4A026B9BA75",
    "creator": {},
    "creationDate": "2023-03-08T09:48:50.325+0000",
    "lastUpdatedDate": "2023-03-08T09:48:50.325+0000",
    "environment": {
      "id": "sss_project_package_id",
      "name": "sss_project_import_name"
    },
    "status": "pending",
    "importRequestStatus": "pending",
    "undoRequestStatus": "pending",
    "progress": 0.0,
    "message": "",
    "undoStorage": {},
    "project": {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "name"
    },
    "deleted": false
  },
  "version": "2"
}
```

## Edit migration groups

### 1. Get migration group content

Endpoint: [GET /api/migrationGroups/{{migrationGroupId}}?showContent=all](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migration%20Groups/getMigrationGroup)

This call gets the full content of the migration groups to prepare the import call.

Save the response body and use it for the next step.

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

### Step 2: Edit the migration group

Endpoint: [PUT /api/migrationGroups/{{migrationGroupId}}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migration%20Groups/triggerImport)

This call triggers migration group editing in Library.

Sample Request Header:

```http
"Content-Type": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.
"prefer": "respond-async"
```

Sample Request Body:

Use the response body you saved in step 1 and change `name`, `treeView`, and `migrations` as needed.

```json
{
  "name": "MultiPackageMultiProject_edit",
  "treeView": {},
  "migrations": [
    {
      "packageInfo": {
        "type": "project",
        "purpose": "migration_group",
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "MicroStrategy Tutorial"
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
              "id": "D8EE8AEC11E794390FF00080EF053519",
              "type": 55,
              "action": "use_existing",
              "includeDependents": true
            }
          ]
        }
      },
      "importInfo": {
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "MicroStrategy Tutorial"
        }
      }
    },
    {
      "packageInfo": {
        "type": "project",
        "purpose": "migration_group",
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "MicroStrategy Tutorial"
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
              "id": "D8EE8AEC11E794390FF00080EF053519",
              "type": 55,
              "action": "use_existing",
              "includeDependents": true
            }
          ]
        }
      },
      "importInfo": {
        "project": {
          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
          "name": "MicroStrategy Tutorial"
        }
      }
    },
    {
      "packageInfo": {
        "type": "project",
        "purpose": "migration_group",
        "project": {
          "id": "E8D198774597EEDA4848F4962AC42A01",
          "name": "Testing3"
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
              "id": "233AE5EF48F48E84B4626D8E0E8806DE",
              "type": 55,
              "action": "use_existing",
              "includeDependents": false
            }
          ]
        }
      },
      "importInfo": {
        "project": {
          "id": "E8D198774597EEDA4848F4962AC42A01",
          "name": "Testing3"
        }
      }
    }
  ]
}
```

### Step 3: Get the edit status of the migration group

Endpoint: [GET /api/migrationGroups/{{migrationGroupId}}?showContent=all](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migration%20Groups/getMigrationGroup)

Since package group editing is an asynchronous process, this call checks the creation status, which is usually `empty`, `locked`, `creating`, `created`, or `create_failed`. Apply a 'fail fast' strategy in handling package group creation. This means that if the creation of a package fails, the entire package group creation fails.

Repeat this step until you get `migrations[*].packageInfo.status` as `created` for all package migrations.

If you find that the status of one package is `creating` and other packages have a status of `empty` or `created`, the migration group is still being edited, so you can continue to repeat this step. If you find a package with a status of `create_failed`, this means the migration group failed to be edited and you can choose to return to the step 2 and edit the migration group again.

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

## Performance

To improve performance, MicroStrategy suggests you edit one migration or migration group per session and time.

## Compatibility

A migration or migration group created in an earlier platform version can be edited in the newer platform version.

## Suggestions

- The user should have Architect privileges in both source and target environments.
- Due to databases being distributed across environments, make sure to connect to the source environment when viewing migration status.
- Project information must be provided in the request body when editing migrations or migration groups.
- Requests to edit migrations are subject to the restrictions for creating migrations, as are editing migration groups.

## Troubleshooting

- If the Library server cannot connect to the database, you may receive the following error:
  - The API requires MicroStrategy Storage Service. Please contact your administrator.
  - This can occur due to the following reasons:
    - Database is not running
    - Database version is lower than required
    - Database configuration is missing or invalid in `configOverride.properties`
- If your storage location is not configured property, you may receive the following message:

  - The Storage Service is not configured properly, please contact your administrator to configure Storage Service
  - See [Configure the Storage Service via Workstation](https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm) for more information.
