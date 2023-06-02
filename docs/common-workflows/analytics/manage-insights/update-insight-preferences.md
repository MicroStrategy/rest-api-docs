---
title: Update insight preferences
description: You can use REST APIs to update insight preferences.
---

<Available since="2021 Update 10" />

You can use REST APIs to update user insight preferences.

This workflow sample updates insight preferences for the current user to enable the insight email notifications.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Endpoint: [PUT /api/insight/preferences](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20UserPreferences/modifyPreferences)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "5f8qohkckd5d4tm18c9etbe0vd"
```

Sample Request Body:

```json
{
  "emailEnabled": true
}
```

Sample Curl:

```bash
curl -X 'PUT' \
  'https://mci-v8fb5-dev.hypernow.microstrategy.com/MicroStrategyLibrary/api/insight/preferences' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd' \
  -H 'Content-Type: application/json' \
  -d '{
  "emailEnabled": true
}'
```

Sample Response Body: N/A

Sample Response Code: 204 (The insight preferences are updated successfully.)
