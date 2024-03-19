---
sidebar_label: Ask a bot instance for suggested questions
title: Ask a bot instance for suggested questions
description: This workflow sample demonstrates how to ask a bot instance for suggested questions
---

<Available since="MicroStrategy ONE (March 2024)" />

This workflow sample demonstrates how to ask a bot instance for suggested questions.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Ask a bot instance for suggested questions

Endpoint: [POST /api/bots/\{botId}/instances/\{instanceId}/suggestions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/createSuggestions)

:::note
Replace `{botId}` in `POST /api/bots/{botId}/instances/{instanceId}/suggestions` with the chatbot ID and `{instanceId}` with your bot instance ID created with `POST /api/bots/{botId}/instances` in your environment.
:::

Sample Request Body:

```json
{
  "count": 1
}
```

Sample Curl:

```bash
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/instances/5B1EB48585F04384A97F3D831D7C7416/suggestions' \
-X 'POST'
--header 'X-MSTR-AuthToken: t40ltbk411923ipk85r8r0tace' \
--header 'X-MSTR-ProjectID: FCC1924411EAABC39C6C0080EFA54501' \
--header 'Content-Type: application/json' \
--data '{
    "count": 4
}'
```

Sample Response:

| Response Code | Status                                                     |
| ------------- | ---------------------------------------------------------- |
| 200           | Successfully return the bot instance's suggested questions |
| 400           | Error in generating the bot instance's suggested questions |
| 401           | Authorization failed                                       |
| 404           | Bot or bot instance does not exist                         |

Sample Response Body on success:

```json
{
  "suggestions": [
    {
      "text": "What is the revenue for year 2023"
    }
  ]
}
```
