---
title: Modify value of an advanced property
description: The workflow involves modifying project's advanced properties values
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ef4e5e88-1bc6-4c9a-a15a-6fef6d399bb8?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

## Update project's advanced property value

This workflow sample demonstrates how to update project's advanced property value

You want to get update an advanced property of the `MicroStrategy Tutorial` Project object. The object ID is `6851110C470AF40EB46B559D5098F309`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Update a property using `PUT /api/model/projects/{projectId}?showAdvancedProperties=true`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {
        "value": false
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/projects/6851110C470AF40EB46B559D5098F309?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view list of advanced properties including updated property in the response.

```json
{
  "information": {
    "dateCreated": "2021-05-27T01:59:49.000Z",
    "dateModified": "2022-11-15T13:36:45.627Z",
    "versionId": "08725E361F499117604F26BA8230223C",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "6851110C470AF40EB46B559D5098F309",
    "subType": "project",
    "name": "MicroStrategy Tutorial",
    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform's rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed."
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {
        "name": "ConsolidationSubtotal",
        "type": "boolean",
        "value": "false",
        "resolvedLocation": "project",
        "isInherited": false,
        "nextValue": true,
        "nextResolvedLocation": "default"
      },
      "[AnalyticalEngineProperties].[CustomGroupDisplayForJointElments]": {
        "name": "CustomGroupDisplayForJointElments",
        "type": "boolean",
        "value": "false",
        "resolvedLocation": "default",
        "isInherited": true
      }
    }
  }
}
```

Response Code: 200 (The project's definition and its advanced properties were updated successfully.)

### Set property value back to default

This is an example to reset the property value to default.

:::

Update a property using `PUT /api/model/projects/{projectId}?showAdvancedProperties=true`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {
        "value": null
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/projects/6851110C470AF40EB46B559D5098F309?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view list of advanced properties including updated property in the response.

```json
{
  "information": {
    "dateCreated": "2021-05-27T01:59:49.000Z",
    "dateModified": "2022-11-15T13:36:45.627Z",
    "versionId": "08725E361F499117604F26BA8230223C",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "6851110C470AF40EB46B559D5098F309",
    "subType": "project",
    "name": "MicroStrategy Tutorial",
    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform's rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed."
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {
        "name": "ConsolidationSubtotal",
        "type": "boolean",
        "value": true,
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[AnalyticalEngineProperties].[CustomGroupDisplayForJointElments]": {
        "name": "CustomGroupDisplayForJointElments",
        "type": "boolean",
        "value": "false",
        "resolvedLocation": "default",
        "isInherited": true
      }
    }
  }
}
```

Response Code: 200 (The project's definition and its advanced properties were updated successfully.)
