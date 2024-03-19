---
sidebar_label: Delete a bot instance
title: Delete a bot instance
description: This workflow sample demonstrates how to delete a bot instance
---

<Available since="MicroStrategy ONE (March 2024)" />

This workflow sample demonstrates how to delete a bot instance.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Delete a bot instance

Endpoint: [DELETE /api/bots/\{botId}/instances/\{instanceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/deleteInstance)

:::note
Replace `{botId}` in `DELETE /api/bots/{botId}/instances/{instanceId}` with the chatbot ID and `{instanceId}` with your bot instance ID created with `POST /api/bots/{botId}/instances` in your environment.
:::

Sample Request Header:

```http
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:
No request body.

Sample Curl:

```bash
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/instances/5B1EB48585F04384A97F3D831D7C7416' \
-X 'DELETE'
-H 'accept: */*' \
-H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response:

| Response Code | Status                               |
| ------------- | ------------------------------------ |
| 200           | Successfully delete the bot instance |
| 400           | Error in deleting the bot isntance   |
| 401           | Authorization failed                 |
| 404           | Bot or bot instance does not exist   |

Sample Response Body on success:
No response body
