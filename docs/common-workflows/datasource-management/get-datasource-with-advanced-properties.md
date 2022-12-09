---
title: Get datasource definition and advanced properties
description: The workflow involves getting datasource definition along with its advanced properties
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ef4e5e88-1bc6-4c9a-a15a-6fef6d399bb8?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve datasource's definition and its advanced properties.

You want to get the applicable properties of the `Amazon Athena` datasource object. The object ID is `31B4EC39D7F94875AB4E2785C8BBA26E`. :::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the advanced properties using `GET /api/model/datasources/{datasourceId}?showAdvancedProperties=true`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datasources/31B4EC39D7F94875AB4E2785C8BBA26E?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view datasource's definition and its advanced properties in the response.

```json
{
  "information": {
    "dateCreated": "2007-11-01T18:59:13.000Z",
    "dateModified": "2022-02-10T13:24:12.000Z",
    "versionId": "440000474A61382839A0829F1E0FD189",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "31B4EC39D7F94875AB4E2785C8BBA26E",
    "subType": "db_role",
    "name": "Amazon Athena"
  },
  "advancedProperties": {
    "vldbProperties": {
      "[DatamartProperties].[Insert SQLs]": {
        "name": "Insert SQLs",
        "type": "string",
        "value": "",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[DatamartProperties].[Post SQLs]": {
        "name": "Post SQLs",
        "type": "string",
        "value": "",
        "resolvedLocation": "default",
        "isInherited": true
      }
    }
  }
}
```

Response Code: 200 (The datasource's definition and its advanced properties were returned successfully.)
