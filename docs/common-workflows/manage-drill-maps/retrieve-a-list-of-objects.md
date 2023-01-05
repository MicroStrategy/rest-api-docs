---
title: Workflow sample - Retrieve a list of objects associated with a drill map
sidebar_label: Retrieve a list of objects
description: This workflow sample demonstrates how to get the list of objects associated with a specific drill map.
---

<Available since="2021 Update 6" />

This workflow sample demonstrates how to get the list of objects associated with a specific drill map.

You want to get the list of objects associated with the `Drill Map for Demo` drill map object in the MicroStrategy Tutorial project. The project ID is `091B51154B22036C53CFBB9958B2E8FC`. The drill map ID is `CC2E6AA3421EFF5C41C2D0939750BB24`.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Workflow

### Step 1: Create a search using [POST /api/metadataSearches/result](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing/createSearch)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "091B51154B22036C53CFBB9958B2E8FC"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/metadataSearches/results?usesObject=CC2E6AA3421EFF5C41C2D0939750BB24;56&type=2&type=47&type=257&type=3072&type=3078&type=3" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: agei7vi3q4nn0i6r547r495vaf" \
-H "X-MSTR-ProjectID: 091B51154B22036C53CFBB9958B2E8FC"
```

Sample Response Body:

You can get the search ID in the body of the response.

```json
{
  "id": "29A63ACA49DDAB5A886AD4B7BB51AF3C",
  "totalItems": 8
}
```

Sample Response Code: 200 (A search job is triggered successfully.)

### Step 2: Get search results using [GET /api/metadataSearches/results](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing/searchObjectList)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "091B51154B22036C53CFBB9958B2E8FC"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/metadataSearches/results?searchId=29A63ACA49DDAB5A886AD4B7BB51AF3C" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: agei7vi3q4nn0i6r547r495vaf" \
-H "X-MSTR-ProjectID: 091B51154B22036C53CFBB9958B2E8FC"
```

Sample Response Body:

You can get the list of objects associated with the specific drill map in the body of the response.

```json
[
  {
    "name": "Employee",
    "id": "8D679D3F11D3E4981000E787EC6DE8A4",
    "type": 12,
    "subtype": 3072,
    "dateCreated": "2001-01-02T20:48:03.000+0000",
    "dateModified": "2022-02-24T09:53:15.000+0000",
    "version": "60C4656C4932BF664B144C86D7095DA3",
    "acg": 255,
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    },
    "acl": [
      {
        "deny": true,
        "type": 1,
        "rights": 251,
        "trusteeId": "0B8000CD44ED1451162C9D9EF842AAED",
        "trusteeName": "Fei Liang",
        "trusteeType": 34,
        "trusteeSubtype": 8704,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 4,
        "trusteeId": "0B8000CD44ED1451162C9D9EF842AAED",
        "trusteeName": "Fei Liang",
        "trusteeType": 34,
        "trusteeSubtype": 8704,
        "inheritable": false
      }
    ],
    "extType": 0
  },
  {
    "name": "OLAP Cube",
    "id": "0659B5D64E993AA473FA0688E8D9D1CD",
    "type": 3,
    "subtype": 776,
    "dateCreated": "2022-01-26T10:31:48.000+0000",
    "dateModified": "2022-02-24T09:53:15.000+0000",
    "version": "60C4656C4932BF664B144C86D7095DA3",
    "acg": 255,
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    },
    "acl": [
      {
        "deny": false,
        "type": 1,
        "rights": 199,
        "trusteeId": "294DEDC011D2F1D56000D98E67019608",
        "trusteeName": "Public / Guest",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 255,
        "trusteeId": "C1E1419F11D603A2100086B3A5E8F8A4",
        "trusteeName": "Developers",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      }
    ],
    "extType": 1,
    "viewMedia": 134217728,
    "certifiedInfo": {
      "certified": false
    }
  }
]
```

Sample Response Code: 200 (The objects associated with the drill map are returned successfully.)
