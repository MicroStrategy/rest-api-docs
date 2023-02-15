---
title: Create a custom timezone object
sidebar_label: Create a custom timezone object
description: This workflow demonstrates how to create a new custom object through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0bea31ca-d010-4214-8ad6-19c1906fbd5a?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow demonstrates how to create a new custom object through the Modeling service.

You want to create a new custom timezone named `"New York"` under the `Custom Timezones` folder in the configuration.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since timezone objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a new custom timezone using [POST /api/model/timezones](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones/ms-postTimezone)

You want to create the timezone by providing its name and base timezone.

:::tip

'name' is not required to create a new timezone. If 'name' is not provided, the new timezone will be named using the base timezone's name. If the base timezone's name already exists in the folder, the suffix like `(1)`, `(2)`, and so on will be appended.

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

You can view the new timezone's definition in the body of the response.

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

Response Code: 201 (A new timezone is created successfully in the changeset.)
