---
sidebar_label: Get a chat bot's configuration
title: Get a chat bot's configuration
description: This workflow sample demonstrates how to get a chat bot's configuration.
---

<Available since="MicroStrategy ONE (March 2024)" />

This workflow sample demonstrates how to get a chat bot's configuration.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get a chat bot's configuration

Endpoint: [GET /api/bots/\{botId}/configuration](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/getConfiguration)

:::note
Replace `{botId}` in `GET /api/bots/{botId}/configuration` with the chatbot ID and `{questionId}` with your question ID in your environment.
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
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/configuration' \
-H 'accept: */*' \
-H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response:

| Response Code | Status                                    |
| ------------- | ----------------------------------------- |
| 200           | Successfully return the bot configuration |
| 400           | Error in getting the bot configuration    |
| 401           | Authorization failed                      |
| 404           | Bot does not exist                        |

Sample Response Body on success:

```json
{
  "name": "New Bot",
  "greeting": "Hello! I'm New Bot, your virtual assistant. How can I guide you today?",
  "hint": "Ask me a question.",
  "externalLinks": [
    {
      "id": "FAF1E6E1CE68484BAD9A993E4B02706E",
      "icon": "url",
      "url": "https://microstrategy.com"
    }
  ]
}
```
