---
title: License audit and compliance
sidebar_label: License audit and compliance check
description: This workflow sample demonstrates how to perform compliance check and license audit. You can also check privileges to a license product for a user.
---

<Available since="2021 Update 10"/>

## Perform license compliance check

Endpoint: [POST /api/license/iServer/compliance](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/checkLicenseCompliance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location --request POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/compliance' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'
```

Sample Response Body:

```json
{
  "link": {
    "href": "/queues/6C3033424C805FDA1F2743AFC1063B9B",
    "type": "GET"
  }
}
```

Sample Response Code: 201

## Get license compliance check result

Endpoint: [GET /api/license/iServer/compliance/result](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/checkComplianceResult)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/compliance/result' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'
```

Sample Response Body:

```json
{
  "complianceTime": "2023-05-04T10:46:38.979Z",
  "complianceType": 2,
  "inCompliance": true,
  "complianceResult": [
    {
      "currentUsage": 0,
      "inCompliance": true,
      "maxUsage": -1,
      "name": "Desktop",
      "type": 41
    },
    {
      "currentUsage": 0,
      "details": {
        "ReporterWeb": 0,
        "Web": 0
      },
      "inCompliance": true,
      "maxUsage": -1,
      "name": "ReporterWeb",
      "type": 1
    },
    {
      "currentUsage": 0,
      "inCompliance": true,
      "maxUsage": -1,
      "name": "EMMBlackberry",
      "type": 19
    }
  ]
}
```

Sample Response Code: 200

## Perform license audit

Endpoint: [POST /api/license/iServer/audit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/checkLicenseAudit)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location --request POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/audit' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'
```

Sample Response Body:

```json
{
  "link": {
    "href": "/queues/3702AE1E4672C3CBDEFA1F844AB94B6B",
    "type": "GET"
  }
}
```

Sample Response Code: 201

## Get license audit info

Endpoint: [GET /api/license/iServer/audit/result](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/checkLicenseAuditResult)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/audit/result' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'
```

Sample Response Body:

```json
{
  "auditTime": "2023-05-04T10:47:46.766Z",
  "contactLicenses": [],
  "userGroups": [
    ["3D0F5EF8978D4AE086012C196BF01EBA", "MicroStrategy Groups"],
    ["5F3FAFE011D2D8CC6000CC8E67019608", "System Monitors"],
    ["5F3FAFE111D2D8CC6000CC8E67019608", "System Administrators"],
    ["C82C6B1011D2894CC0009D9F29718E4F", "Everyone"],
    ["5B6C1434431D99F9A8230191FE5F6849", "MicroStrategy Service Accounts"],
    ["FB5CDCCE4D0E70EDE48110A0FDCFD370", "Platform Support Administrators"]
  ],
  "userLicenses": [
    {
      "creationTime": "2020-12-03T04:49:51.000Z",
      "enabled": true,
      "id": "54F3D26011D2896560009A8E67019608",
      "licenseTypes": [],
      "modificationTime": "2023-04-24T05:14:35.454Z",
      "name": "Administrator",
      "userGroupsIndex": [0, 1, 2, 3],
      "LDAPUser": false
    },
    {
      "creationTime": "2023-04-24T05:11:17.000Z",
      "enabled": true,
      "id": "407B14FB42F2A3FB012ACDAFBD5475F7",
      "licenseTypes": [],
      "modificationTime": "2023-04-24T05:14:49.231Z",
      "name": "Insights Service Account",
      "userGroupsIndex": [4],
      "LDAPUser": false
    },
    {
      "creationTime": "2021-05-10T04:35:53.000Z",
      "enabled": false,
      "id": "22BBFC764F017F94E98C6AA91134B880",
      "licenseTypes": [7, 5, 8, 10, 12, 14, 15],
      "modificationTime": "2021-05-10T04:35:53.000Z",
      "name": "Platform Support Administrator",
      "userGroupsIndex": [0, 1, 3, 5],
      "LDAPUser": false
    }
  ],
  "includeLDAP": false
}
```

Sample Response Code: 200

## Get info about compliance check status

Endpoint: [GET /api/license/iServer/compliance/status](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/checkLicenseComplianceStatus)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/compliance/status' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'
```

Sample Response Body:

```json
{
  "jobRunning": false
}
```

Sample Response Code: 200

## Get info about license privileges granted to a specific user

Endpoint: [GET /api/license/privileges/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/getLicenseAuditPrivileges)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Query param:

- required: licenseProduct

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/privileges/54F3D26011D2896560009A8E67019608?licenseProduct=CLIENT_APPLICATION' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'
```

Sample Response Body:

```json
{
  "licenseName": "client_application",
  "pws": [
    {
      "privilege": {
        "id": "266",
        "name": "Use Application",
        "description": "Provide the ability for organizations to connect to the MicroStrategy Intelligence Server through custom applications.",
        "level": "project"
      },
      "sources": [
        {
          "direct": true
        },
        {
          "direct": false,
          "group": {
            "name": "System Administrators",
            "id": "5F3FAFE111D2D8CC6000CC8E67019608"
          }
        }
      ]
    }
  ]
}
```

Sample Response Code: 200
