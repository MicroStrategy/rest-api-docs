---
sidebar_label: Get a chat bot's question list
title: Get a bot's question list
description: This workflow sample demonstrates how to get a chat bot's question list.
---

<Available since="MicroStrategy ONE (March 2024)" />

This workflow sample demonstrates how to get a chat bot's question list.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get a chat bot's question list

Endpoint: [GET /api/bots/\{botId}/questions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/queryMessages)

:::note
Replace `{botId}` in `GET /api/bots/{botId}/questions` with the chatbot ID in your environment.
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
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/questions' \
-H 'accept: */*' \
-H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response:

| Response Code | Status                                      |
| ------------- | ------------------------------------------- |
| 200           | Successfully return the bot's question list |
| 400           | Error in getting the bot's question list    |
| 401           | Authorization failed                        |
| 404           | The bot does not exist                      |

Sample Response Body on success:

The response is the question list in a chat bot. See [Get a question in chat bot](./get-a-bot-question.md) for more details about a bot question's fields.

```json
{
  "questions": [
    {
      "id": "5B1EB48585F04384A97F3D831D7C7416",
      "text": "Analyze the distribution of cooking times for recipes",
      "answers": [
        {
          "text": "The distribution of cooking times for recipes is as follows:\n- The shortest cooking time is -1 minute.\n- The majority of recipes have cooking times ranging from 2 to 60 minutes.\n- There are a few recipes with longer cooking times, such as 75, 90, 120, and 720 minutes.\n- The exact distribution of cooking times can be seen in the visualization result.",
          "type": "visualization",
          "data": {
            "id": "583793FBA2394DD4A3154F2177982F9F"
          }
        }
      ],
      "creationDate": "2024-03-08T09:01:43.154+0000"
    }
  ]
}
```
