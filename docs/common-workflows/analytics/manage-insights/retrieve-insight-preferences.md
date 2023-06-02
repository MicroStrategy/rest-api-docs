---
title: Retrieve insight preferences
description: You can use REST APIs to retrieve insight preferences.
---

<Available since="2021 Update 10" />

You can use REST APIs to retrieve user insight preferences.

This workflow sample retrieves insight preferences for the current user.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Endpoint: [GET /api/insight/preferences](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20UserPreferences/getPreferences)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "5f8qohkckd5d4tm18c9etbe0vd"
```

Sample Request Body: N/A

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/preferences' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd'
```

Sample Response Body:

```json
{
  "emailEnabled": false
}
```

Sample Response Code: 200 (The insight preferences are returned successfully.)
