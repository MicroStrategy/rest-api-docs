---
sidebar_label: Get chat history from a specific agent
title: Get chat history from a specific agent
description: This workflow sample demonstrates how to get the historical chat messages from a specific agent.
---

<Available since="Strategy (March 2025)" />

This API is used to get the historical questions from a specific agent for the current user, which can be used as the `history` parameter in the `Ask a question to a specific agent` API.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get Questions by Agent

Endpoint: [GET /api/questions/](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Next-Gen%20AI/getChats_1)

Sample Request Headers:

| Header           | Required | Description                | Sample Value                     |
| ---------------- | -------- | -------------------------- | -------------------------------- |
| X-MSTR-AuthToken | Yes      | Authorization Token        | t40ltbk411923ipk85r8r0tace       |
| X-MSTR-ProjectID | Yes      | Project ID                 | B7CA92F04B9FAE8D941C3E9B7E0CD754 |
| Content-Type     | Yes      | Type of content being sent | application/json                 |

Sample Request Query Strings:

| Query String | Required | Description                                                  | Sample Value                     |
| ------------ | -------- | ------------------------------------------------------------ | -------------------------------- |
| botId        | Yes      | The ID of the agent whose chat history you want to retrieve. | 065B007500614D158B41B0D020C96966 |

Sample Curl:

```bash
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/questions?botId=065B007500614D158B41B0D020C96966' \
-H 'accept: */*' \
-H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
```

Sample Response Code:

| Response Code | Status                                             |
| ------------- | -------------------------------------------------- |
| 200           | Successfully returned the questions from the agent |
| 400           | Error getting questions from the agent             |
| 401           | Authorization failed                               |
| 404           | Agent does not exist                               |

## Response Body on Success

The response is a list of questions and answers from the specific agent.

### Sample Response

```json
{
  "questions": [
    {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:1BA14D43628D40ABA5DF6616843C611F",
      "text": "Show the revenue in euros per month of the highest-grossing branch in Germany in 2024 in a gid.",
      "answers": [
        {
          "bot": {
            "id": "065B007500614D158B41B0D020C96966",
            "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
          },
          "text": "The highest-grossing branch in Germany in 2024 generated the following revenue in euros per month:\n- August: €11,327,719\n- September: €10,847,290\n- October: €12,609,864\n- November: €13,793,524\n- December: €12,002,767",
          "route": "sql"
        }
      ],
      "creationDate": "2025-03-06T06:07:47.272+0000",
      "snapshot": false,
      "type": "snapshots"
    },
    {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:75262B7346CC469EA7B874E49888040E",
      "text": "What was the Umsatz in Euro in Kristallhöhle during 2024/10 Okt?",
      "answers": [
        {
          "bot": {
            "id": "065B007500614D158B41B0D020C96966",
            "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
          },
          "text": "Der Gesamtumsatz in Euro (Umsatz in Euro) für die Region 'kristallhöhle' im Oktober 2024 betrug €92.541.045.",
          "route": "sql"
        }
      ],
      "creationDate": "2025-03-07T02:56:53.708+0000",
      "snapshot": false,
      "type": "history"
    }
  ]
}
```

:::note
Questions with `type` as `snapshots` should not be used as history in the `Ask a Specific Bot a Question` API.
:::
