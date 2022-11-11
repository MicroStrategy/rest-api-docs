---
title: Retrieve a list of calendars' definitions
description: You can use REST APIs to retrieve definitions for a list of available calendars through the Modeling service. This topic includes the following workflows.
---

You can use REST APIs to retrieve definitions for a list of available calendars through the Modeling service. This topic includes the following workflows.

## 1. Retrieve a list of calendars' definitions

You want to get the definitions of all available calendars in the configuration project.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since calendar objects are configuration objects, you must set the project ID as an empty string.

:::

Get the calendars' definitions within a changeset using [`GET /api/model/calendars`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars).

The response can change based on the request parameters provided by the caller. Use the following request parameters:

| Name                  | Description                                                                                                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `information.subType` | The subType of calendars If it is `calendar_custom`, it would return the list of all the custom calendars. If it is `calendar_system`, it would return the list of all the system calendars. |
| `limit`               | The maximum number of objects that can be returned by this method. If this property is not provided, all available objects are returned.                                                     |
| `offset`              | Use this parameter to page through large result lists. Setting it to 0 (or not providing the parameter) starts at the beginning of the object list.                                          |
| `fields`              | A whitelist of top-level fields separated by commas. This parameter allows the client to selectively retrieve fields in the response                                                         |

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "p1r57o8160jqo6f9pgbbkblh0i"
"X-MSTR-ProjectID": ""
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X 'GET' \
  'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars?limit=2&offset=1' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: p1r57o8160jqo6f9pgbbkblh0i'
```

Sample Response Body:

You can view the calendars' definitions in the body of the response. In this sample, two system calendars are returned.

```json
{
  "offset": 1,
  "limit": 2,
  "total": 1457,
  "calendars": [
    {
      "information": {
        "dateCreated": "2022-07-15T10:58:05.000Z",
        "dateModified": "2022-07-15T10:58:05.000Z",
        "versionId": "10D9CB67416792BDF417079964A3F582",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "2AD679C54C569506AADE6596A1A479ED",
        "subType": "calendar_system",
        "name": "system-calendar-3",
        "ownerId": "54F3D26011D2896560009A8E67019608",
        "description": "Gregorian Calendar"
      },
      "tablePrefix": "",
      "calendarBegin": {
        "staticYear": "1899"
      },
      "calendarEnd": {
        "staticYear": "1899"
      },
      "weekStartDay": "Sunday"
    },
    {
      "information": {
        "dateCreated": "2022-07-15T10:58:05.000Z",
        "dateModified": "2022-07-15T10:58:05.000Z",
        "versionId": "10D9CB67416792BDF417079964A3F582",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "60982033470322BFF023B188C7DE4E30",
        "subType": "calendar_system",
        "name": "system-calendar-2",
        "ownerId": "54F3D26011D2896560009A8E67019608",
        "description": "Gregorian Calendar"
      },
      "tablePrefix": "",
      "calendarBegin": {
        "staticYear": "1899"
      },
      "calendarEnd": {
        "staticYear": "1899"
      },
      "weekStartDay": "Sunday"
    }
  ]
}
```

Response Code: 200 (calendars' definitions are returned successfully.)

## 2. Retrieve a list of calendars' definitions within a changeset

You want the definitions of all available calendars in the configuration project.

:::info

Obtain the authorization token needed to execute the request using [`POST /api/auth/login`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since calendar objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md). If you plan to use the response of GET /api/model/calendars to create a new calendar or update the calendars' definitions, it is recommended to associate all requests to one changeset.

:::

### Get the calendars' definitions within a changeset

Endpoint: [`GET /api/model/calendars`](https://demo.microstrategy.com/MicroStrategyLibrary/api/model/calendars)

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X 'GET' \
'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars?limit=3' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl' \
-H 'X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62'
```

Sample Response Body:

You can view the calendars' definitions in the body of the response. In this sample, three system calendars are returned.

```json
{
  "offset": 0,
  "limit": 3,
  "total": 1457,
  "calendars": [
    {
      "information": {
        "dateCreated": "2022-07-15T10:58:05.000Z",
        "dateModified": "2022-07-15T10:58:05.000Z",
        "versionId": "10D9CB67416792BDF417079964A3F582",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "1414DF67F20B4E4F910E418C8DCE7274",
        "subType": "calendar_system",
        "name": "Gregorian Calendar",
        "ownerId": "54F3D26011D2896560009A8E67019608",
        "description": "Gregorian Calendar"
      },
      "tablePrefix": "",
      "calendarBegin": {
        "staticYear": "1899"
      },
      "calendarEnd": {
        "staticYear": "1899"
      },
      "weekStartDay": "Sunday"
    },
    {
      "information": {
        "dateCreated": "2022-07-15T10:58:05.000Z",
        "dateModified": "2022-07-15T10:58:05.000Z",
        "versionId": "10D9CB67416792BDF417079964A3F582",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "2AD679C54C569506AADE6596A1A479ED",
        "subType": "calendar_system",
        "name": "system-calendar-3",
        "ownerId": "54F3D26011D2896560009A8E67019608",
        "description": "Gregorian Calendar"
      },
      "tablePrefix": "",
      "calendarBegin": {
        "staticYear": "1899"
      },
      "calendarEnd": {
        "staticYear": "1899"
      },
      "weekStartDay": "Sunday"
    },
    {
      "information": {
        "dateCreated": "2022-07-15T10:58:05.000Z",
        "dateModified": "2022-07-15T10:58:05.000Z",
        "versionId": "10D9CB67416792BDF417079964A3F582",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "60982033470322BFF023B188C7DE4E30",
        "subType": "calendar_system",
        "name": "system-calendar-2",
        "ownerId": "54F3D26011D2896560009A8E67019608",
        "description": "Gregorian Calendar"
      },
      "tablePrefix": "",
      "calendarBegin": {
        "staticYear": "1899"
      },
      "calendarEnd": {
        "staticYear": "1899"
      },
      "weekStartDay": "Sunday"
    }
  ]
}
```

Response Code: 200 (calendars' definitions are returned successfully)

## 3. Retrieve a list of calendars' definitions with a specified SubType

You want to enable the `information.subType` parameter to retrieve only system calendars or custom calendars.

If the `information.subType` parameter is not specified, the API will return all available calendars.

Get the calendars' definitions using `information.subType=calendar_custom`.

Sample Curl:

```bash
curl -X 'GET' \
  'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars?information.subType=calendar_custom&limit=3' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl'
```

Sample Response Body:

Three custom calendars are returned.

```json
{
  "offset": 0,
  "limit": 3,
  "total": 1453,
  "calendars": [
    {
      "information": {
        "dateCreated": "2022-07-22T02:21:04.000Z",
        "dateModified": "2022-07-27T01:52:18.000Z",
        "versionId": "8D045DA17F44C5F21C096F9C3F59AA86",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "0006DE423B014DD58EF78FC8A4B29AF6",
        "subType": "calendar_custom",
        "name": "be7a4691-0d4e-11ed-9c0e-005056980365",
        "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",
        "description": "custom calendar"
      },
      "baseCalendar": {
        "objectId": "65FEF83B427D10404A6549B313619557",
        "subType": "calendar_system",
        "name": "system-calendar-1"
      },
      "tablePrefix": "be7a4692-0d4e-11ed-9c90-005056980365",
      "calendarBegin": {
        "staticYear": "26476"
      },
      "calendarEnd": {
        "staticYear": "58649"
      },
      "weekStartDay": "Friday"
    },
    {
      "information": {
        "dateCreated": "2022-07-21T17:43:31.000Z",
        "dateModified": "2022-07-26T14:26:49.000Z",
        "versionId": "2ABA084BAB4CAB168AD587BB3AD3212D",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "00080C7766F549409A2CC8C413EE29E2",
        "subType": "calendar_custom",
        "name": "fc021949-0cee-11ed-872f-005056980365",
        "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",
        "description": "custom calendar"
      },
      "baseCalendar": {
        "objectId": "2AD679C54C569506AADE6596A1A479ED",
        "subType": "calendar_system",
        "name": "system-calendar-3"
      },
      "tablePrefix": "fc02194a-0cee-11ed-81fa-005056980365",
      "calendarBegin": {
        "staticYear": "16446"
      },
      "calendarEnd": {
        "staticYear": "45925"
      },
      "weekStartDay": "Monday"
    },
    {
      "information": {
        "dateCreated": "2022-07-21T09:00:54.000Z",
        "dateModified": "2022-07-27T01:50:17.000Z",
        "versionId": "B7E60128654AA6C3539E1198FCF1B085",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "000C965A2ED4419986F2C59F456122CE",
        "subType": "calendar_custom",
        "name": "7652a9bd-0d4e-11ed-94ae-005056980365",
        "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",
        "description": "custom calendar"
      },
      "baseCalendar": {
        "objectId": "1414DF67F20B4E4F910E418C8DCE7274",
        "subType": "calendar_system",
        "name": "Gregorian Calendar"
      },
      "tablePrefix": "7652a9be-0d4e-11ed-ae09-005056980365",
      "calendarBegin": {
        "dynamicYearOffset": 456
      },
      "calendarEnd": {
        "dynamicYearOffset": 602
      },
      "weekStartDay": "Thursday"
    }
  ]
}
```

Sample Response Code: 200 (calendars' definitions are returned successfully.)
