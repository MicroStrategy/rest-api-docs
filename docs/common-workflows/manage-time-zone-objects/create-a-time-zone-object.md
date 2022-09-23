---
title: Workflow Sample - Create a Custom Time Zone Object
sidebar_label: Create a Custom Time Zone Object
description: This workflow demonstrates how to create a new custom object through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0bea31ca-d010-4214-8ad6-19c1906fbd5a?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow demonstrates how to create a new custom object through the Modeling service.

You want to create a new custom time zone named `"New York"` under the `Custom Timezones` folder in the configuration.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since time zone objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

`schemaEdit` must be `true` if you are committing a changeset that contains schema manipulations.

## 1. Create a changeset using [`POST /api/model/changesets`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset) with `schemaEdit=false`

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-ProjectID": ""
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=false" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID:"
```

Sample Response Body:

```json
{
  "id": "8DF1659E9D74484D9D47B9478D4C7D00",
  "dateCreated": "2020-11-17T17:36:31.187294Z",
  "dateModified": "2020-11-17T17:36:31.187308Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "38A062302D4411D28E71006008960167",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

## 2. Create a new custom time zone using [`POST /api/model/timezones`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/timezones)

You want to create the time zone by providing its name and base time zone.

:::tip

'name' is not required to create a new time zone. If 'name' is not provided, the new time zone will be named using the base time zone's name. If the base time zone's name already exists in the folder, the suffix like `(1)`, `(2)`, and so on will be appended.

:::

Sample Request Header:

```http
"accept": "application/json""X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9""X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body:

```json
{
  "information": { "name": "New York" },
  "baseTimezone": { "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8" }
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\"information\": {\"name\": \"New York\"},\"baseTimezone\": {\"objectId\": \"1D18D39B4594CFAF60A6C1B2F48164E8\"}}"
```

Sample Response Body:

You can view the new time zone's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-12-08T08:54:07.114Z",
    "dateModified": "2021-12-08T08:54:07.114Z",
    "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",
    "primaryLocale": "en-US",
    "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",
    "subType": "timezone_custom",
    "name": "New York"
  },
  "baseTimezone": {
    "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",
    "subType": "timezone_system",
    "name": "America New York time"
  },
  "currentOffset": -18000
}
```

Response Code: 201 (A new time zone is created successfully in the changeset.)

## 3. Commit the changeset using [`POST /api/model/changesets/{ChangesetId}/commit`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Response Body:

```json
{
  "id": "8DF1659E9D74484D9D47B9478D4C7D00",
  "dateCreated": "2020-11-17T17:42:13.312629Z",
  "dateModified": "2020-11-17T17:44:30.814816Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "38A062302D4411D28E71006008960167",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

## 4. Delete the changeset using [`DELETE /api/model/changesets/{ChangesetId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset is deleted successfully.)
