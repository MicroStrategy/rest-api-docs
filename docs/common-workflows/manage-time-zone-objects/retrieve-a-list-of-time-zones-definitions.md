---
title: Retrieve a list of time zones' definitions
description: You can use REST APIs to retrieve definitions for a list of available time zones through the Modeling service. This topic includes the following workflows.
---

:::tip

You can try out these workflows at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-8f48dce2-e826-4f45-98fb-c3ceed64b670?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to retrieve definitions for a list of available time zones through the Modeling service. This topic includes the following workflows.

## Retrieve a list of all time zones' definitions

You want to get the definitions of all available time zones in the configuration project.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since timezone objects are configuration objects, you must set the project ID as an empty string.

:::

Get the time zones' definitions within a changeset using [GET /api/model/timezones](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"
"X-MSTR-ProjectID": ""
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: "
```

Sample Response Body:

You can view the time zones' definitions in the body of the response. In this sample, three system time zones and two custom time zones are returned.

```json
{
  "timezones": [
    {
      "information": {
        "dateCreated": "2021-10-21T08:41:51.349Z",
        "dateModified": "2021-12-13T11:30:02.340Z",
        "versionId": "2D54462A4BC579B910BC59A10F60354C",
        "primaryLocale": "en-US",
        "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",
        "subType": "timezone_system",
        "name": "America New York time",
        "description": "The state of New York uses the Eastern Timezone (UTC-05:00) with daylight saving time (UTC-04:00)."
      },
      "currentOffset": -18000
    },
    {
      "information": {
        "dateCreated": "2021-10-21T08:41:51.349Z",
        "dateModified": "2021-10-21T08:41:51.349Z",
        "versionId": "803B4C3C48005A45B57E969A6CF511E8",
        "primaryLocale": "en-US",
        "objectId": "0D11814645CE423141648EA55CC1305E",
        "subType": "timezone_system",
        "name": "Etc UTC time",
        "description": "Coordinated Universal Time or UTC is the primary time standard by which the world regulates clocks and time."
      },
      "currentOffset": 0
    },
    {
      "information": {
        "dateCreated": "2021-09-17T03:11:12.043Z",
        "dateModified": "2021-09-17T03:11:12.043Z",
        "versionId": "5D354734492D6A127607CCAA60C1289C",
        "primaryLocale": "en-US",
        "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",
        "subType": "timezone_system",
        "name": "Asia Shanghai time",
        "description": "The time in China follows a single standard time offset of UTC+08:00, even though China spans five geographical time zones."
      },
      "currentOffset": 28800
    },
    {
      "information": {
        "dateCreated": "2021-12-08T08:54:07.114Z",
        "dateModified": "2021-12-08T08:54:07.114Z",
        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",
        "primaryLocale": "en-US",
        "objectId": "E99B4F7692564D36A5B324A7956CB84F",
        "subType": "timezone_custom",
        "name": "Asia Shanghai time"
      },
      "baseTimezone": {
        "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",
        "subType": "timezone_system",
        "name": "Asia Shanghai time"
      },
      "currentOffset": 28800
    },
    {
      "information": {
        "dateCreated": "2021-12-08T08:54:07.114Z",
        "dateModified": "2021-12-08T08:54:07.114Z",
        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",
        "primaryLocale": "en-US",
        "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",
        "subType": "timezone_custom",
        "name": "America New York time"
      },
      "baseTimezone": {
        "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",
        "subType": "timezone_system",
        "name": "America New York time"
      },
      "currentOffset": -18000
    }
  ]
}
```

Response Code: 200 (time zones' definitions are returned successfully.)

## Retrieve a list of all available timezones' definitions within a changeset

You want the definitions of all available time zones in the configuration project.

:::info

Obtain the authorization token needed to execute the request using `[POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)`.

Since timezone objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of `GET /api/model/timezones` to create a new timezone or update the time zones' definitions, it is recommended to associate all requests to one changeset.

:::

1. Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset).

   Sample Request Header:

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
   "X-MSTR-ProjectID": ""
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
   curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: "
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
     "mstrProjectId": "38A062302D4411D28E71006008960167",
     "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
     "userDateNumberLocale": "en-US",
     "userMetadataLocale": "en-US",
     "userWarehouseLocale": "en-US"
   }
   ```

   Sample Response Code: 201 (A new changeset is created successfully.)

1. Get the time zones' definitions within a changeset using [GET /api/model/timezones](https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones).

   Sample Request Header

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
   "X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
   curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
   ```

   Sample Response Body:

   You can view the time zones' definitions in the body of the response. In this sample, three system time zones and two custom time zones are returned.

   ```json
   {
     "timezones": [
       {
         "information": {
           "dateCreated": "2021-10-21T08:41:51.349Z",
           "dateModified": "2021-12-13T11:30:02.340Z",
           "versionId": "2D54462A4BC579B910BC59A10F60354C",
           "primaryLocale": "en-US",
           "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",
           "subType": "timezone_system",
           "name": "America New York time",
           "description": "The state of New York uses the Eastern Timezone (UTC-05:00) with daylight saving time (UTC-04:00)."
         },
         "currentOffset": -18000
       },
       {
         "information": {
           "dateCreated": "2021-10-21T08:41:51.349Z",
           "dateModified": "2021-10-21T08:41:51.349Z",
           "versionId": "803B4C3C48005A45B57E969A6CF511E8",
           "primaryLocale": "en-US",
           "objectId": "0D11814645CE423141648EA55CC1305E",
           "subType": "timezone_system",
           "name": "Etc UTC time",
           "description": "Coordinated Universal Time or UTC is the primary time standard by which the world regulates clocks and time."
         },
         "currentOffset": 0
       },
       {
         "information": {
           "dateCreated": "2021-09-17T03:11:12.043Z",
           "dateModified": "2021-09-17T03:11:12.043Z",
           "versionId": "5D354734492D6A127607CCAA60C1289C",
           "primaryLocale": "en-US",
           "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",
           "subType": "timezone_system",
           "name": "Asia Shanghai time",
           "description": "The time in China follows a single standard time offset of UTC+08:00, even though China spans five geographical time zones."
         },
         "currentOffset": 28800
       },
       {
         "information": {
           "dateCreated": "2021-12-08T08:54:07.114Z",
           "dateModified": "2021-12-08T08:54:07.114Z",
           "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",
           "primaryLocale": "en-US",
           "objectId": "E99B4F7692564D36A5B324A7956CB84F",
           "subType": "timezone_custom",
           "name": "Asia Shanghai time"
         },
         "baseTimezone": {
           "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",
           "subType": "timezone_system",
           "name": "Asia Shanghai time"
         },
         "currentOffset": 28800
       },
       {
         "information": {
           "dateCreated": "2021-12-08T08:54:07.114Z",
           "dateModified": "2021-12-08T08:54:07.114Z",
           "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",
           "primaryLocale": "en-US",
           "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",
           "subType": "timezone_custom",
           "name": "America New York time"
         },
         "baseTimezone": {
           "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",
           "subType": "timezone_system",
           "name": "America New York time"
         },
         "currentOffset": -18000
       }
     ]
   }
   ```

   Response Code: 200 (time zones' definitions are returned successfully)

1. Delete a changeset using [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#//Changesets/ms-deleteChangeset).

   Sample Request Header:

   ```http
   "accept": "application/json"
   "X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
   "X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
   curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/0E9F01172ECF4BA2BB510F7B9FB4F6E8" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
   ```

   Sample Response Body: Empty

   Sample Response Code: 204 (The changeset has been deleted successfully.)

## Retrieve a list of time zones' definitions with a specified `subType`

You want to enable the `subType` parameter to retrieve only system time zones or custom time zones.

If the `subType` parameter is not specified, the API will return all available time zones.

Get the time zones' definitions using `subType=timezone_custom`.

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones?subtype=timezone_custom" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID:"
```

Sample Response Body:

All custom time zones are returned.

```json
{
  "timezones": [
    {
      "information": {
        "dateCreated": "2021-12-08T08:54:07.114Z",
        "dateModified": "2021-12-08T08:54:07.114Z",
        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",
        "primaryLocale": "en-US",
        "objectId": "E99B4F7692564D36A5B324A7956CB84F",
        "subType": "timezone_custom",
        "name": "Asia Shanghai time"
      },
      "baseTimezone": {
        "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",
        "subType": "timezone_system",
        "name": "Asia Shanghai time"
      },
      "currentOffset": 28800
    },
    {
      "information": {
        "dateCreated": "2021-12-08T08:54:07.114Z",
        "dateModified": "2021-12-08T08:54:07.114Z",
        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",
        "primaryLocale": "en-US",
        "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",
        "subType": "timezone_custom",
        "name": "America New York time"
      },
      "baseTimezone": {
        "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",
        "subType": "timezone_system",
        "name": "America New York time"
      },
      "currentOffset": -18000
    }
  ]
}
```

Sample Response Code: 200 (timezones' definitions are returned successfully.)
