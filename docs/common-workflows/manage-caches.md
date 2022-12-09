---
title: Purge object and element caches
description: This workflow sample demonstrates how to purge object or element cache for a particular project.
sidebar_label: Purge object and element caches
---

When a user works with MicroStrategy, cache data is created. The data stored in the cache allows to increase system performance and improve user’s experience. Instead of loading the data required by system from some database, i.e., meta-data database, the data is retrieved from a cache memory. However, Platform Administrator or Analytics Architect may decide to purge the caches periodically. Currently, the REST API allows to delete cache data for objects and elements using a following endpoint:

- `DELETE /api/monitors/projects/{projectId}/cache/{cacheType}`

## API

The sections below present Cache Management REST API usage.

### Header

- `X-MSTR-AuthToken`
  - (Required) MicroStrategy authorization token.
  - Data Type: `string`
  - Allowable Values: valid authorization token.

### Path parameters

- `projectId`
  - (Required) Unique project identifier.
  - Data Type: `string`
  - Allowable Values: project identifier (GUID)
- `cacheType`
  - (Required) Determines whether object or element cache data is deleted.
  - Data Type: `string`
  - Allowable Values: "element" or "object"

## Workflow

There are two steps which you need to take to delete cache for objects and elements. The steps are described in this section.

### Step 1 – Getting project id

The purpose of the first step is to determine project `id`. The `id` identifies the project for which we want to clear the cache. We can use a following endpoint to list all loaded projects with their ids.

`GET /projects`

You can call the endpoint using for example curl command:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: m0pjr6ec9lemv0m8782hd8hg48'

```

The X-MSTR-AuthToken is an authentication token which you receive during authentication process. The correct response of the endpoint should look like:

```json
[
  {
    "acg": 255,
    "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
    "name": "MicroStrategy Tutorial",
    "status": 0,
    "alias": "",
    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform's rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",
    "dateCreated": "2015-06-30T21:55:35.000+0000",
    "dateModified": "2022-06-25T12:48:15.000+0000",
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    }
  },
  {
    "acg": 255,
    "id": "CE52831411E696C8BD2F0080EFD5AF44",
    "name": "Consolidated Education Project",
    "status": 0,
    "alias": "",
    "description": "",
    "dateCreated": "2016-11-20T16:39:48.000+0000",
    "dateModified": "2022-06-25T12:46:22.000+0000",
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    }
  }
  ...
]
```

Please find the `id` for the desired project. For example, `id` of the project: “MicroStrategy Tutorial” is `B7CA92F04B9FAE8D941C3E9B7E0CD75`. We will use it in the next step.

### Step 2 – Deleting the cache

You need to invoke a following endpoint to delete the cache:

`DELETE api/monitors/projects/{projectId}/cache/{cacheType}`

The endpoint path consists of `projectId` parameter, so you need to replace the placeholder by the `id` value. The last placeholder determines cache type which will be purged. The allowable values are following `element` or `cache`. The example below demonstrates how to call the end point using curl command:

```bash
curl -X 'DELETE' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/monitors/projects/B7CA92F04B9FAE8D941C3E9B7E0CD754/cache/element' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: m0pjr6ec9lemv0m8782hd8hg48'
```

The endpoint should return: `204 No Content`.

## Responses

The default response is `204 No Content` which notifies that the cache purge was triggered. The endpoint can also return another response codes. The codes are listed below.

| Invalid Input / Error | Description                                     | HTTP Response Code |
| --------------------- | ----------------------------------------------- | ------------------ |
| Unauthorized access   | Invalid Access Token                            | 401                |
| Invalid projectId     | The given Project ID (projectId) does not exist | 400                |
| Invalid cache type    | The cache type has to be element or object      | 400                |
| Internal Server Error | Internal Server Error Cause                     | 500                |
