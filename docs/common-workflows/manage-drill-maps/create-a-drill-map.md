---
title: Workflow Sample - Create a Drill Map
sidebar_label: Create a Drill Map
description: This workflow sample demonstrates how to create a new drill map object through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b7a0f0c-2172-418a-93ec-e0f0a13fa741?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new drill map object through the Modeling service.

The drill map is under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `091B51154B22036C53CFBB9958B2E8FC`.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::info

A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

## Workflow

### Step 1: Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "091B51154B22036C53CFBB9958B2E8FC"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=false" -H "accept: application/json" -H "X-MSTR-AuthToken: agei7vi3q4nn0i6r547r495vaf" -H "X-MSTR-ProjectID: 091B51154B22036C53CFBB9958B2E8FC"
```

Sample Response Body:

```json
{
  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",
  "dateCreated": "2020-11-17T16:38:09.825650Z",
  "dateModified": "2020-11-17T16:38:09.825665Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "091B51154B22036C53CFBB9958B2E8FC",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

### Step 2: Create a new drill map using [POST /api/model/drillMaps](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/DrillMaps/ms-postDrillMap)

In this step, you are creating a new drill map with a drill path based on the `Year` attribute in the `Up` field and setting the drill path to a `high` priority, along with some other properties. You can find more examples in the following sections on this page. You can find [More Examples](#more-examples) at the bottom of this page.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body:

```json
{
  "information": {
    "name": "Drill Map for Demo",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "drillPaths": [
    {
      "displayName": "Year's Display Name",
      "type": "up",
      "target": {
        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Year"
      },
      "priority": "high",
      "options": {
        "keepParent": false,
        "keepThresholds": false,
        "keepPageBy": false,
        "keepBaseTemplate": false,
        "applyUserFilter": false,
        "applyReportFilter": true
      }
    }
  ]
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMaps" \
-H "accept: application/json" -H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" \
-H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" \
-H "Content-Type: application/json" -d "{ 'information ':{ 'name ': 'Drill Map for Demo ', 'destinationFolderId ': '98FE182C2A10427EACE0CD30B6768258 '}, 'drillPaths ':[{ 'displayName ': 'Year's Display Name ', 'type ': 'up ', 'target ':{ 'objectId ': '8D679D5111D3E4981000E787EC6DE8A4 ', 'subType ': 'attribute ', 'name ': 'Year '}, 'priority ': 'high ', 'options ':{ 'keepParent ':false, 'keepThresholds ':false, 'keepPageBy ':false, 'keepBaseTemplate ':false, 'applyUserFilter ':false, 'applyReportFilter ':true}}]}"
```

Sample Response Body:

You can view the new drill map definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-01-24T10:42:27.000Z",
    "dateModified": "2022-01-30T12:32:52.961Z",
    "versionId": "DAC1E08E49F511D58A0D678D2ACD1BF9",
    "primaryLocale": "en-US",
    "objectId": "CC2E6AA3421EFF5C41C2D0939750BB24",
    "subType": "drill_map",
    "name": "Drill Map for Demo",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "drillPaths": [
    {
      "displayName": "Year's Display Name",
      "type": "up",
      "target": {
        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Year"
      },
      "priority": "high",
      "options": {
        "keepParent": false,
        "keepThresholds": false,
        "keepPageBy": false,
        "keepBaseTemplate": false,
        "applyUserFilter": false,
        "applyReportFilter": true
      }
    }
  ]
}
```

Sample Response Code: 201 (A new drill map is created successfully in the changeset.)

### Step 3: Commit a changeset using [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" \
-H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

```json
{
  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",
  "dateCreated": "2020-11-17T17:42:13.312629Z",
  "dateModified": "2020-11-17T17:44:30.814816Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "091B51154B22036C53CFBB9958B2E8FC",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

### Step 4: Delete the changeset using [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" \
-H "accept: */*" \
-H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" \
-H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset is deleted successfully.)

## More Examples

In the above example, the drill map has only one drill path. However, a drill map can have multiple drill paths.

You want to create a drill map with the following drill paths:

- Add a `Call Center Analysis` template to the `Template` field with a `medium` priority.
- Add a `Year` attribute to the `Across` field with a `high` priority.
- Add an `Age Groups` custom group to the `Up` field with a `medium` priority.
- Add a `Customer Geography` consolidation to the `Down` field with a `low` priority
- Add a `Products` hierarchy to the `Down` field with a `medium` priority.
- Add a `Status Drill Map` drill map to the `Drill Map` field with a `medium` priority.

Sample Response Body:

```json
{
  "information": {
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258",
    "name": "Create Consolidation"
  },
  "drillPaths": [
    {
      "displayName": "Call Center Analysis",
      "type": "template",
      "target": {
        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",
        "subType": "template",
        "name": "Call Center Analysis"
      },
      "priority": "medium",
      "options": {
        "setName": "Test SetName 1",
        "inheritVLDB": false,
        "keepPageBy": false,
        "keepBaseTemplate": false,
        "applyUserFilter": true,
        "applyReportFilter": true,
        "includeOtherFilter": "default",
        "displayMode": "default"
      }
    },
    {
      "displayName": "Year",
      "type": "across",
      "target": {
        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Year"
      },
      "priority": "high",
      "options": {
        "keepParent": false,
        "keepThresholds": false,
        "keepPageBy": false,
        "keepBaseTemplate": false,
        "applyUserFilter": false,
        "applyReportFilter": true
      }
    },
    {
      "displayName": "Age Groups",
      "type": "up",
      "target": {
        "objectId": "085CBF314703A71E926EA187C2002969",
        "subType": "custom_group",
        "name": "Age Groups"
      },
      "priority": "medium",
      "options": {
        "keepParent": false,
        "keepThresholds": false,
        "keepPageBy": false,
        "keepBaseTemplate": false,
        "applyUserFilter": true,
        "applyReportFilter": true,
        "includeOtherFilter": "default"
      }
    },
    {
      "displayName": "Customer Geography",
      "type": "down",
      "target": {
        "objectId": "B9E7FD5911D3E936C000B3B2D86C964F",
        "subType": "consolidation",
        "name": "Customer Geography"
      },
      "priority": "low",
      "options": {
        "keepParent": false,
        "keepThresholds": false,
        "keepPageBy": false,
        "keepBaseTemplate": false,
        "applyUserFilter": true,
        "applyReportFilter": true,
        "includeOtherFilter": "default"
      }
    },
    {
      "displayName": "Products",
      "type": "down",
      "target": {
        "objectId": "B793B56811D3E4E51000E887EC6DE8A4",
        "subType": "dimension_user",
        "name": "Products"
      },
      "priority": "medium"
    },
    {
      "type": "drill_map",
      "target": {
        "objectId": "A3EEC92948DB0216FA585D83F2633A2B",
        "subType": "drill_map",
        "name": "Status Drill Map"
      },
      "priority": "medium"
    }
  ]
}
```
