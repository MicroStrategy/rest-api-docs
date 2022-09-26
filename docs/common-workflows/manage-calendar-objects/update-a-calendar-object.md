---
title: Update a Custom Calendar Object
sidebar_label: Update a Custom Calendar Object
description: This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service.
---

This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service.

You want to update the existing Custom Calendar with object ID 66FBD8D81F254B63B3C74B599EC7BB47 with the following changes:

- Modify the weekStartDay to Monday
- Rename the calendar to "Chinese Calendar"
- Modify the calendarEnd to 20

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since calendar objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

`schemaEdit` must be `true` if you are committing a changeset that contains schema manipulations.

## 1. Create a changeset

Endpoint: [`POST /api/model/changesets`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset) with `schemaEdit=false`

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "qr56qbrjb59oq5m193v8avjsdv"
"X-MSTR-ProjectID": ""
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=false" -H "accept: application/json" -H "X-MSTR-AuthToken: qr56qbrjb59oq5m193v8avjsdv" -H "X-MSTR-ProjectID:"
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

## 2. Update an existing custom calendar

Endpoint: [`PUT /api/model/calendars/{calendarId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars)

System calendars cannot be updated through API.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "qr56qbrjb59oq5m193v8avjsdv"
"X-MSTR-MS-Changeset": "46FB9631EB134C9F992BC2F9E92DDC50"
```

Sample Request Body:

```json
{
  "information": {
    "name": "Chinese Calendar",
    "subType": "calendar_custom"
  },
  "baseCalendar": {
    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",
    "subType": "calendar_system"
  },
  "tablePrefix": "MSTR_",
  "calendarBegin": {
    "staticYear": "2022"
  },
  "calendarEnd": {
    "dynamicYearOffset": 20
  },
  "weekStartDay": "Monday"
}
```

Sample Curl:

```bash
curl -X 'PUT' \
  'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars/015FB8D4CF30413DAF120DCDE4C2F85C' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: qr56qbrjb59oq5m193v8avjsdv' \
  -H 'X-MSTR-MS-Changeset: 46FB9631EB134C9F992BC2F9E92DDC50' \
  -H 'Content-Type: application/json' \
  -d '{
  "information": {
    "name": "Chinese Calendar",
    "subType": "calendar_custom"
  },
  "baseCalendar": {
    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",
    "subType": "calendar_system"
  },
  "tablePrefix": "MSTR_",
  "calendarBegin": {
    "staticYear": "2022"
  },
  "calendarEnd": {
    "dynamicYearOffset": 20
  },
  "weekStartDay": "Monday"
}'
```

Sample Response Body:

You can view the new calendar's definition in the body of the response.

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
    "name": "Chinese Calendar",
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
    "dynamicYearOffset": 20
  },
  "weekStartDay": "Monday"
}
```

Response Code: 200 (Calendar is successfully updated in the changeset.)

The following fields of a custom calendar could be updated using PUT API.

- `information.name`
- `baseCalendar.objectId`
- `tablePrefix`
- `calendarBegin`
- `calendarEnd`
- `weekStartDay`

## 3. Commit the changeset

Endpoint: [`POST /api/model/changesets/{ChangesetId}/commit`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "qr56qbrjb59oq5m193v8avjsdv"
"X-MSTR-MS-Changeset": "46FB9631EB134C9F992BC2F9E92DDC50"
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/46FB9631EB134C9F992BC2F9E92DDC50/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: qr56qbrjb59oq5m193v8avjsdv" -H "X-MSTR-MS-Changeset: 46FB9631EB134C9F992BC2F9E92DDC50"
```

Sample Response Body:

```json
{
  "id": "46FB9631EB134C9F992BC2F9E92DDC50",
  "dateCreated": "2020-11-17T17:42:13.312629Z",
  "dateModified": "2020-11-17T17:44:30.814816Z",
  "status": "Ready",
  "schemaEdit": true,
  "userName": "MSTR User",
  "mstrProjectId": "38A062302D4411D28E71006008960167",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 200 (The changeset is committed successfully.)

## 4. Delete the changeset

Endpoint: [`DELETE /api/model/changesets/{ChangesetId}`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken: qr56qbrjb59oq5m193v8avjsdv"
"X-MSTR-MS-Changeset: 46FB9631EB134C9F992BC2F9E92DDC50"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/46FB9631EB134C9F992BC2F9E92DDC50" -H "accept: */*" -H "X-MSTR-AuthToken: qr56qbrjb59oq5m193v8avjsdv" -H "X-MSTR-MS-Changeset: 46FB9631EB134C9F992BC2F9E92DDC50"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)
