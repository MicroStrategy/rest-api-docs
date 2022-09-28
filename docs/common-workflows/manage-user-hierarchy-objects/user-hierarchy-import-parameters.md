---
title: User hierarchy import parameters
description: The following import parameters in the API response body define a user hierarchy.
---

The following import parameters in the API response body define a user hierarchy:

## Information

`Information` stores the basic user hierarchy information including:

- `dateCreated`
- `dateModified`
- `versionId`
- `primaryLocale`
- `objectId`
- `subType`
- `name`

User hierarchies have different subtypes. Currently, we support the following two subtypes:

- `dimension_user` This user hierarchy is for drilling.
- `dimension_user_hierarchy` This user hierarchy is for browsing.

## UseAsDrillHierarchy

`UseAsDrillHierarchy`: This Boolean field indicates the user hierarchy subtype. `False` means the subtype is `dimension_user_hierarchy`; otherwise, it is `dimension_user`.

## Attributes

`Attributes`: Stores the hierarchy attributes for the user hierarchy in a list, which is required. Each hierarchy attribute contains following properties:

- `objectId`
- `name`
- `entryPoint`
- `filters`
- `elementDisplayOption`
- `limit`

## ElementDisplayOption

`ElementDisplayOption` contains the following values:

- `all_elements` This attribute shows all elements when browsing.
- `no_elements` This attribute does not show any elements when browsing.
- `limited_elements` This attribute shows limited elements when browsing, within a defined limit. The limit field is only required for `limited_elements`.

Each user hierarchy should have at least one entry point.

## Relationships

`Relationships`: Stores the hierarchy relationships for the user hierarchy in a list. The relationship is not required. You can create a hierarchy with no relationship.

Each hierarchy relationship contains a parent and child. Both parent and child contain `objectId`, `subType`, and `name`. `subType` must be an attribute.
