---
title: Manage language objects
description: This section covers creating, updating and deleting language objects
---

<Available since="2021 Update 7" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d97007d2-a5be-4748-913d-c243b1b21663?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

:::info

The [DssXmlPrivilegesCreateConfigObj](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesCreateConfigObj) privilege is required to create a new language object.

:::

## 1. Get server supported langauges

Endpoint: [GET /api/iserver/baseLanguages](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Languages/getSupportedLanguages)

This call is necessary to obtain a list of base languages supported by the server. You will need the LCID of a base language to proceed with creating a language object.

Header parameters:

```http
"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"
```

Curl Request:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/baseLanguages' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'
```

Request URL:

```url
https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/baseLanguages
```

Response Body:

```json
{
  "baseLocales": [
    {
      "languageGroup": "English",
      "lcid": 1033,
      "name": "English (United States)"
    },
    {
      "languageGroup": "German",
      "lcid": 1031,
      "name": "German (Germany)"
    },
    {
      "languageGroup": "Italian",
      "lcid": 1040,
      "name": "Italian (Italy)"
    },
    {
      "languageGroup": "Portuguese",
      "lcid": 1046,
      "name": "Portuguese (Brazil)"
    }
  ]
}
```

Response Code: 200

## 2. Get a list of existing language objects

Endpoint: [GET /api/languages](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Languages/getAvailableLanguages)

This call allows you to check existing language objects. Make sure you don't already have an existing object you are planning to create.

Header parameters:

```http
"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"
```

Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'
```

Request URL:

```url
https://demo.microstrategy.com/MicroStrategyLibrary/api/languages
```

Response Body:

```json
{
  "languages": [
    {
      "name": "Chinese (Simplified)",
      "id": "000008044F95EF3956E52781700C1E7A",
      "baseLangLcid": 0,
      "lcid": 2052,
      "owner": {
        "id": "54F3D26011D2896560009A8E67019608",
        "name": "Administrator"
      },
      "lastModified": "2021-12-13T04:46:25+0000",
      "acg": 255
    },
    {
      "name": "Spanish (Spain)",
      "id": "00000C0A4F95EF3956E52781700C1E7A",
      "baseLangLcid": 0,
      "lcid": 3082,
      "owner": {
        "id": "54F3D26011D2896560009A8E67019608",
        "name": "Administrator"
      },
      "lastModified": "2021-12-13T04:46:25+0000",
      "acg": 255
    }
  ]
}
```

Response code: 200

## 3. Create language object

Endpoint: [POST /api/languages](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Languages/createLanguage)

This call allows you to create new language based on existing one. Call `GET /api/languages` for languages' LCIDs.

Header parameters:

```http
"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"
```

Request Body:

```json
{ "name": "New Language Object Name", "baseLanguageLcid": 1033 }
```

Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages' \
    -H 'accept:application/json' \
    -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j' \
    -H 'Content-Type: application/json' \
    -d '{ "name": "New Language Object Name", "baseLanguageLcid": 1033 }'
```

Request URL:

```url
https://demo.microstrategy.com/MicroStrategyLibrary/api/languages
```

Response Body:

```json
{
  "name": "New Language Object Name",
  "id": "003004094F95EF3956E52781700C1E7A",
  "baseLangLcid": 1033,
  "lcid": 3146761,
  "owner": {
    "id": "54F3D26011D2896560009A8E67019608",
    "name": "Administrator"
  },
  "lastModified": "2022-09-23T11:55:28+0200",
  "acg": 255
}
```

Response Code: 200

## 4. Delete language object

Endpoint: [DELETE /api/objects/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Object%20Management/deleteObject)

This call allows you to delete an object. Object type for language is 45. Call `GET /api/languages` for languages' IDs.

Header parameters:

```http
"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"
```

Path parameters:

```http
"id": "001008044F95EF3956E52781700C1E7A"
```

Query parameters:

```http
"type": 45
```

Curl:

```bash
curl -X 'DELETE' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/001008044F95EF3956E52781700C1E7A?type=45' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'
```

Request URL:

```url
https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/001008044F95EF3956E52781700C1E7A?type=45
```

Response Code: 204 (No Content)

## 5. Get language object

Endpoint: [GET /api/languages/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Languages/getLanguageDetails)

This call allows you to get information about language object. Call `GET /api/languages` for languages' IDs.

Header parameters:

```http
"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"
```

Path parameters:

```http
"id": "00000C0A4F95EF3956E52781700C1E7A"
```

Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'
```

Response:

```json
{
  "name": "Spanish (Spain)",
  "id": "00000C0A4F95EF3956E52781700C1E7A",
  "baseLangLcid": 0,
  "lcid": 3082,
  "owner": {
    "id": "54F3D26011D2896560009A8E67019608",
    "name": "Administrator"
  },
  "lastModified": "2022-10-25T13:15:19+0000",
  "acg": 255
}
```

Response Code: 200

## 6. Update language object

This call allows you to update information about language object. Call `GET /api/languages` for languages' IDs.

Endpoint: [PATCH /api/languages/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Languages/updateLanguage)

Header parameters:

```http
"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"
```

Path parameters:

```http
"id": "00000C0A4F95EF3956E52781700C1E7A"
```

Curl:

```bash
curl -X 'PATCH' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j' \
  -H 'Content-Type: application/json' \
  -d '{
  "operationList": [
    {
      "op": "replace",
      "path": "/name",
      "value": "Spanish v2"
    }
  ]
}'
```

Response:

```json
{
  "name": "Spanish v2",
  "id": "00000C0A4F95EF3956E52781700C1E7A",
  "baseLangLcid": 0,
  "lcid": 3082,
  "owner": {
    "id": "54F3D26011D2896560009A8E67019608",
    "name": "Administrator"
  },
  "lastModified": "2022-10-25T13:15:19+0000",
  "acg": 255
}
```

Response Code: 200

## 7. Get language formatting settings

Endpoint: [GET /api/languages/{id}/formattingSettings](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Languages/getFormattingSettings)

This call allows you to get information about formatting settings for language object. Call `GET /api/languages` for languages' IDs.

Header parameters:

```http
"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"
```

Path parameters:

```http
"id": "00000C0A4F95EF3956E52781700C1E7A"
```

Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A/formattingSettings' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'
```

Request URL:

```url
https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A/formattingSettings
```

Response:

```json
{
  "formattingSettings": {
    "timeInterval": {
      "minutes15": "H:mm",
      "minutes30": "H:mm",
      "hour": "H:mm",
      "day": "dd/MM",
      "week": "dd/MM",
      "hourOfDay": "H:mm",
      "month": "MMM",
      "quarter": "qqq",
      "year": "yyyy"
    }
  }
}
```

Response Code: 200

## 8. Update language's formatting settings

Endpoint: [PATCH /api/languages/{id}/formattingSettings](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Languages/updateFormattingSettings)

This call allows you to update information about formatting settings for language object. Call `GET /api/languages` for languages' IDs.

Header parameters:

```http
"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"
```

Path parameters:

```http
"id": "00000C0A4F95EF3956E52781700C1E7A"
```

Request body:

```json
{
  "operationList": [
    {
      "op": "replace",
      "path": "/formattingSettings/timeInterval/hour",
      "value": "H"
    }
  ]
}
```

Curl:

```bash
 curl -X 'PATCH' \
   'https://env-301206.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A/formattingSettings' \
   -H 'accept: application/json' \
   -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j' \
   -H 'Content-Type: application/json' \
   -d '{
   "operationList": [
     {
       "op": "replace",
       "path": "/formattingSettings/timeInterval/hour",
       "value": "H"
     }
   ]
 }'
```

Request URL:

```url
https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A/formattingSettings
```

Response:

```json
{
  "formattingSettings": {
    "timeInterval": {
      "minutes15": "H:mm",
      "minutes30": "H:mm",
      "hour": "H",
      "day": "dd/MM",
      "week": "dd/MM",
      "hourOfDay": "H:mm",
      "month": "MMM",
      "quarter": "qqq",
      "year": "yyyy"
    }
  }
}
```

Response Code: 200

## 9. Get base locale default formatting settings

Endpoint: [GET /api/baseLocaleDefaultFormats/{lcid}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Languages/getBaseLocaleDefaultFormats)

This call allows you to get default information about formatting settings for language object. Call `GET /api/languages` for languages' LCIDs.

Header parameters:

```http
"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"
```

Path parameters:

```http
"lcid": 1033
```

Curl:

```bash
 curl -X 'GET' \
   'https://env-301206.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/languages/baseLocaleDefaultFormats/1033' \
   -H 'accept: application/json' \
   -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'
```

Request URL:

```url
https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/baseLocaleDefaultFormats/1033
```

Response:

```json
{
  "smartAttributeDefaultFormats": [
    {
      "smartAttributeType": 1,
      "defaultFormats": [
        {
          "format": "h:mm AM/PM",
          "example": "9:44 AM"
        },
        {
          "format": "hh:mm AM/PM",
          "example": "09:44 AM"
        }
      ]
    },
    {
      "smartAttributeType": 2,
      "defaultFormats": [
        {
          "format": "h:mm AM/PM",
          "example": "9:44 AM"
        },
        {
          "format": "hh:mm AM/PM",
          "example": "09:44 AM"
        }
      ]
    }
  ]
}
```

Response Code: 200
