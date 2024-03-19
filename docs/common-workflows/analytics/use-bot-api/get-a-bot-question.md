---
sidebar_label: Get a chat bot's question
title: Get a bot's question
description: This workflow sample demonstrates how to get a chat bot's question.
---

<Available since="MicroStrategy ONE (March 2024)" />

This workflow sample demonstrates how to get a chat bot's question.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get a chat bot's question

Endpoint: [GET /api/bots/\{botId}/questions/\{questionId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/queryMessage)

:::note
Replace `{botId}` in `GET /api/bots/{botId}/questions/{questionId}` with the chatbot ID and `{questionId}` with your question ID in your environment.
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
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/questions/5B1EB48585F04384A97F3D831D7C7416' \
-H 'accept: */*' \
-H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response:

| Response Code | Status                                                             |
| ------------- | ------------------------------------------------------------------ |
| 200           | Successfully return the bot question that has been answered        |
| 202           | Successfully return the bot question this is still being processed |
| 400           | Error in getting the bot question                                  |
| 401           | Authorization failed                                               |
| 404           | Bot or bot question does not exist                                 |

Sample Response Body on success:

The response is the question in a chat bot.

If the question is being processed, the answers list is empty and the HTTP response status is 202 Accepted. Keep calling this API to check the status of the question.

```json
{
  "id": "5B1EB48585F04384A97F3D831D7C7416",
  "text": "Analyze the distribution of cooking times for recipes",
  "answers": [],
  "creationDate": "2024-03-08T09:01:43.154+0000"
}
```

If the question's answer is successfully generated, the response is:

```json
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
```

If the question encounters an error when generating the answer, the answer is:

```json
{
  "id": "5B1EB48585F04384A97F3D831D7C7416",
  "text": "Analyze the distribution of cooking times for recipes",
  "answers": [
    {
      "text": "Something is wrong. Please try again.",
      "detailError": "Something is wrong. Please try again.",
      "type": "error"
    }
  ],
  "creationDate": "2024-03-08T09:01:43.154+0000"
}
```
