---
title: Retrieve a calendar's definition
description: You can use REST APIs to retrieve the definition for a calendar through the Modeling service. This topic includes the following workflows.
---

<Available since="2021 Update 7" />

You can use REST APIs to retrieve the definition for a calendar through the Modeling service. This topic includes the following workflows.

## Retrieve a calendar's definition

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

## Retrieve a calendar's definition within a changset

You want to view the definition of a specific custom calendar with the ObjectId of 015FB8D4CF30413DAF120DCDE4C2F85C.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since calendar objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md). If you plan to use the response of GET /api/model/calendars to create a new calendar or update the custom calendar's definitions, it is recommended to associate all requests to one changeset.

:::

### Get the calendar's definition within a changeset

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
