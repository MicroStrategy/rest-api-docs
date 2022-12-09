---
title: Workflow sample - Update a custom timezone object
sidebar_label: Update a custom timezone object
description: This workflow sample demonstrates how to update an existing custom timezone object through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-4845cf11-1e66-4530-b33f-730143143498?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an existing custom timezone object through the Modeling service.

You want to update a custom timezone named `"Asian Shanghai Time"`. The timezone object ID is `E99B4F7692564D36A5B324A7956CB84F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since timezone objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md).

:::

## Update an existing timezone using [PATCH /api/model/timezones](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones)

System time zones cannot be updated through API.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body:

```json
{
  "information": {
    "name": "newTimezoneName",
    "description": "This timezone has been updated."
  },
  "baseTimezone": { "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C" }
}
```

Sample Curl:

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/E99B4F7692564D36A5B324A7956CB84F" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\"information\":{\"name\":\"newtimezoneName\", \"description\": \"This timezone has been updated.\"},\"baseTimezone\":{\"objectId\":\"0B4AC9E54E016BF00EAA99929C2B4E5C\"}}"
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
    "objectId": "E99B4F7692564D36A5B324A7956CB84F",
    "subType": "timezone_custom",
    "name": "newtimezoneName",
    "description": "This timezone has been updated."
  },
  "baseTimezone": {
    "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",
    "subType": "timezone_system",
    "name": "Asia Shanghai time"
  },
  "currentOffset": 28800
}
```

Response Code: 200 (Timezone is successfully updated in the changeset.)
