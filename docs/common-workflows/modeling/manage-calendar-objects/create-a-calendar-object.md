---
title: Create a custom calendar object
sidebar_label: Create a custom calendar object
description: This workflow demonstrates how to create a new custom calendar object through the Modeling service.
---

<Available since="2021 Update 7" />

This workflow sample demonstrates how to create a new Custom Calendar object through the Modeling service.

You want to create a new Custom Calendar called "European Calendar" based on system calendar of Gregorian Calendar with Object ID 2AD679C54C569506AADE6596A1A479ED. You want to set Sunday as the week start day. The Calendar would start from Year 2022 and end after 5 years.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since Calendar objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a new custom calendar

Endpoint: [`POST /api/model/calendars`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars/ms-createCalendar)

To create the new custome calendar , you can submit the request body with the correct information.

In `information`, you need to provide `name`, `subType` for the calendar you want to create. In `baseCalendar`, you need to provide the information for the base calendar that the custom calendar is built on.

:::tip

For custom calendar, the `subType` should be `calendar_custom`. User can't set destination folder for configuration object.

:::

Sample Request Header:

```http
"accept": "application/json""X-MSTR-AuthToken": "qr56qbrjb59oq5m193v8avjsdv""X-MSTR-MS-Changeset": "46FB9631EB134C9F992BC2F9E92DDC50"
```

Sample Request Body:

```json
{
  "information": {
    "name": "European Calendar",
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
    "dynamicYearOffset": 5
  },
  "weekStartDay": "Sunday"
}
```

Sample Curl:

```bash
curl -X 'POST' \
  'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: qr56qbrjb59oq5m193v8avjsdv' \
  -H 'X-MSTR-MS-Changeset: 46FB9631EB134C9F992BC2F9E92DDC50' \
  -H 'Content-Type: application/json' \
  -d '{
  "information": {
    "name": "European Calendar",
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
    "dynamicYearOffset": 5
  },
  "weekStartDay": "Sunday"
}'
```

Sample Response Body:

You can view the new calendar's full definition in the body of the response.

```json
{
  "information": {
    "versionId": "5A09AB76ECA742D8889AE035A66F711F",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "66FBD8D81F254B63B3C74B599EC7BB47",
    "subType": "calendar_custom",
    "name": "European Calendar",
    "ownerId": "54F3D26011D2896560009A8E67019608",
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
  "weekStartDay": "Sunday"
}
```

Response Code: 201 (A new calendar is created successfully in the changeset.)

The model for the definition of a custom calendar can be represented with the following fields:

| Fields                            | Description                                                                                                                                        | Required? |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `information.name`                | String. Name of the custom calendar. This is the most user-friendly value that can be used to identify the custom calendar.                        | ✔         |
| `information.subType`             | String. For custom calendar, subType is calendar_custom.                                                                                           |           |
| `information.destinationFolderId` | String. Folder Id where the new custom calendar is saved which couldn’t be modified by user.                                                       |           |
| `baseCalendar.objectId`           | String. The object ID of the base calendar that the custom calendar is built on.                                                                   | ✔         |
| `baseCalendar.subType`            | String. The subtype of the base calendar should be calendar_system.                                                                                |           |
| `baseCalendar.name`               | String. The name of the base calendar.                                                                                                             |           |
| `tablePrefix`                     | String. It specifies the warehouse table prefix, which is used to create time tables for reporting.                                                | ✔         |
| `calendarBegin`                   | The year that this custom calendar begins. Only one of dynamicYearOffset and staticYear can be valid.                                              | ✔         |
| `calendarEnd`                     | The year that this custom calendar ends. Only one of dynamicYearOffset and staticYear can be valid.                                                | ✔         |
| `weekStartDay`                    | String. The Day that a week starts for this custom calendar. It can only be of (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday or Saturday). | ✔         |
