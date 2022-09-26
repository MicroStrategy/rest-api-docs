---
title: Retrieve a Calendar's Definition
description: You can use REST APIs to retrieve the definition for a calendar through the Modeling service. This topic includes the following workflows.
---

You can use REST APIs to retrieve the definition for a calendar through the Modeling service. This topic includes the following workflows.

## 1.Retrieve a Calendar's Definition

You want to view the definition of a specific custom calendar with the ObjectId of 015FB8D4CF30413DAF120DCDE4C2F85C.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since calendar objects are configuration objects, you must set the project ID as an empty string.

:::

Get the calendar's definition using [`GET /api/model/calendars/{calendarId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4lk1khfj9efv7bhav0q68ucn8c"
"X-MSTR-ProjectID": ""
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X 'GET' \
  'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars/015FB8D4CF30413DAF120DCDE4C2F85C' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: 4lk1khfj9efv7bhav0q68ucn8c'
```

Sample Response Body:

You can view the calendar's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-07-22T04:44:03.000Z",
    "dateModified": "2022-08-03T06:46:42.019Z",
    "versionId": "0CA4BAE39B44F1212BD6F8B843E736B6",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "015FB8D4CF30413DAF120DCDE4C2F85C",
    "subType": "calendar_custom",
    "name": "new calendar_tjin",
    "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",
    "description": "custom calendar",
    "destinationFolderId": "636200232691438EA7CA6CB26CCDB4EF"
  },
  "baseCalendar": {
    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",
    "subType": "calendar_system",
    "name": "Gregorian Calendar"
  },
  "tablePrefix": "MSTR_",
  "calendarBegin": {
    "staticYear": "2022"
  },
  "calendarEnd": {
    "dynamicYearOffset": 5
  },
  "weekStartDay": "Saturday"
}
```

Response Code: 200 (Upon success, the API returns a full definition of the specified calendar.)

## 2.Retrieve a Calendar's Definition within a Changset

You want to view the definition of a specific custom calendar with the ObjectId of 015FB8D4CF30413DAF120DCDE4C2F85C.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since calendar objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of GET /api/model/calendars to create a new calendar or update the custom calendar's definitions, it is recommended to associate all requests to one changeset.

:::

### 1. Create a changeset

Endpoint: [`POST /api/model/changesets`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4lk1khfj9efv7bhav0q68ucn8c"
"X-MSTR-ProjectID": ""
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X 'POST' \
'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=false' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: 4lk1khfj9efv7bhav0q68ucn8c' \
-H 'X-MSTR-ProjectID:  ' \
```

Sample Response Body:

```json
{
  "id": "2A131744C91B4915B54A61FFDC528F62",
  "dateCreated": "2021-06-15T03:04:56.613866Z",
  "dateModified": "2021-06-15T03:04:56.613916Z",
  "status": "Ready",
  "schemaEdit": false,
  "mstrUserId": "4lk1khfj9efv7bhav0q68ucn8c",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "Administrator",
  "mstrProjectId": "38A062302D4411D28E71006008960167"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

### 2. Get the calendar's definition within a changeset

Endpoint: [`GET /api/model/calendars/{calendarId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars)

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4lk1khfj9efv7bhav0q68ucn8c"
"X-MSTR-MS-Changeset": "A3F2C7EC43FB44C0BEDEDF63DA039D52"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X 'GET' \
'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars/015FB8D4CF30413DAF120DCDE4C2F85C' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: 4lk1khfj9efv7bhav0q68ucn8c' \
-H 'X-MSTR-MS-Changeset: A3F2C7EC43FB44C0BEDEDF63DA039D52'
```

Sample Response Body:

You can view the calendar's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-07-22T04:44:03.000Z",
    "dateModified": "2022-08-03T06:46:42.019Z",
    "versionId": "0CA4BAE39B44F1212BD6F8B843E736B6",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "015FB8D4CF30413DAF120DCDE4C2F85C",
    "subType": "calendar_custom",
    "name": "new calendar_tjin",
    "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",
    "description": "custom calendar",
    "destinationFolderId": "636200232691438EA7CA6CB26CCDB4EF"
  },
  "baseCalendar": {
    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",
    "subType": "calendar_system",
    "name": "Gregorian Calendar"
  },
  "tablePrefix": "MSTR_",
  "calendarBegin": {
    "staticYear": "2022"
  },
  "calendarEnd": {
    "dynamicYearOffset": 5
  },
  "weekStartDay": "Saturday"
}
```

Response Code: 200 (Upon success, the API returns a full definition of the specified calendar.)

### 3. Delete a changeset

Endpoint: [`DELETE /api/model/changesets/{ChangesetId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4lk1khfj9efv7bhav0q68ucn8c"
"X-MSTR-MS-Changeset": "A3F2C7EC43FB44C0BEDEDF63DA039D52"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/A3F2C7EC43FB44C0BEDEDF63DA039D52" -H "accept: */*" -H "X-MSTR-AuthToken: 4lk1khfj9efv7bhav0q68ucn8c" -H "X-MSTR-MS-Changeset: A3F2C7EC43FB44C0BEDEDF63DA039D52"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)
