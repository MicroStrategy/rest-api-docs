---
sidebar_label: Ask the bot instance a question
title: Ask the bot instance a question
description: This workflow sample demonstrates how to ask the bot instance a question.
---

<Available since="MicroStrategy ONE (March 2024)" />

This workflow sample demonstrates how to ask the bot instance a question.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Ask the bot instance a question

Endpoint: [POST /api/bots/\{botId}/instances/\{instanceId}/questions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/postQuestion)

:::note
Replace `{botId}` in `POST /api/bots/{botId}/instances/{instanceId}/questions` with the chatbot ID and `{instanceId}` with your bot instance ID created with `POST /api/bots/{botId}/instances` in your environment.
:::

Sample Request Body:

```json
{
  "text": "What is the average revenue for year 2023"
}
```

Sample Curl:

```bash
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/instances/5B1EB48585F04384A97F3D831D7C7416/questions' \
-X 'POST' \
--header 'X-MSTR-AuthToken: t40ltbk411923ipk85r8r0tace' \
--header 'X-MSTR-ProjectID: FCC1924411EAABC39C6C0080EFA54501' \
--header 'Prefer: respond-async' \
--header 'Content-Type: application/json' \
--data '{
    "text": "What is the average revenue for year 2023"
}'
```

Sample Response:

| Response Code | Status                               |
| ------------- | ------------------------------------ |
| 201           | Successfully accept the bot question |
| 400           | Error in accepting the bot question  |
| 401           | Authorization failed                 |
| 404           | Bot or bot instance does not exist   |

Sample Response Body on success:

```json
{
  "id": "5B1EB48585F04384A97F3D831D7C7416"
}
```
