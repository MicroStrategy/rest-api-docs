---
title: Manage content group packages
description: How to manage content group packages in different cases.
---

## Migrate content group objects, recipient list, and content

See [Create and Import Migration Packages](../create-and-import-migration-packages/create-and-import-migration-packages.md) to manage object migration.

Create a content group package using REST APIs:

1. In the source metadata, create a configuration package where the input is the content group object. This package includes the content group object and recipient list.
1. In the source metadata, create a project package, where the input is the content group object, for each project. This project package includes the configuration content bundle object as well as its contents (dossiers, documents, and reports that are included in the content group in this project).
1. In the destination metadata, first import the configuration package and then the project package, one by one.
1. In MicroStrategy Workstation, enable the content bundle feature. If the user in the destination metadata has the same GUID with the source metadata, then the recipient (user or user group) link will migrate over. However, if the user has the same name with a different GUID, then the recipient link will not migrate anymore.

## Object package requirements

The number of required object packages that need to be created for a content group varies based on requirements. The following are examples of different cases.

### Case 1: You want to migrate the content group object and its recipients, but not content

In this case, you need to create one configuration package with the content group as the input.

Sample request:

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
      "name": "admin_group",
      "type": 77,
      "action": "replace",
      "includeDependents": true
    }
  ]
}
```

### Case 2: You want to migrate the content group object, its recipient, and all content and dependencies in project A

In this case, you need to create one configuration package with all the dependencies, and one project package for Project A with the content group as the input. This will package the content and dependencies into the project package.

Sample request of the configuration package:

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
      "name": "admin_group",
      "type": 77,
      "action": "replace",
      "includeDependents": true
    }
  ]
}
```

Sample request of the project package:

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
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "admin_group",
      "type": 77,
      "action": "replace",
      "includeDependents": true
    }
  ]
}
```

### Case 3: You want to migrate the content group object, its recipient, and all content and dependencies in all the projects

In this case, you need to create one configuration package with all the dependencies and project packages, which is the same number as projects - one project package for each project.

Sample request of the configuration package:

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
      "name": "admin_group",
      "type": 77,
      "action": "replace",
      "includeDependents": true
    }
  ]
}
```

Sample request of the project package:

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
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "admin_group",
      "type": 77,
      "action": "replace",
      "includeDependents": true
    }
  ]
}
```
