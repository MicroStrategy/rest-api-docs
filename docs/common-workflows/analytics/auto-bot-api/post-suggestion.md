---
sidebar_label: Get suggested questions from a specific bot
title: Get suggested questions from a specific bot
description: This workflow sample demonstrates how to get suggested questions from a specific bot.
---

<Available since="Strategy ONE (June 2024)" />

This workflow sample demonstrates how to get suggested questions from a specific bot.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Ask suggested questions with bot routing

Endpoint: [POST /api/questions/suggestions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Next-Gen%20AI/createSuggestions_1)

Sample Request Header:

| Header Name      | Required | Description                                              |
| ---------------- | -------- | -------------------------------------------------------- |
| X-MSTR-AuthToken | Yes      | Authorization token obtained from `POST /api/auth/login` |
| Content-Type     | Yes      | The body request type, which must be `application/json`  |

Sample Request Body:

| Field   | Required | Description                                                                                                                                     | Sample Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| count   | Yes      | The count of suggestions you want to get, Supports up to 5.                                                                                     | 5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| bots    | Yes      | The bot to which the question is directed. Only one bot is supported.                                                                           | [\{"id": "065B007500614D158B41B0D020C96966", "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\}]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| history | No       | Optional. Previous questions and answers. Supports up to 5 entries.                                                                             | [\{"id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:E41CC2178F6042BCAAD72E322E802A90", "question": "show the monthly percentage development of the revenue in euros compared to the previous month for branch a013.. today's date is 04-march-2025. make sure to do correct datetime based calculation.", "text": "The monthly percentage development of revenue in euros for branch A013 shows fluctuations over the observed period. Starting in September 2024, there was an 8% decrease in revenue compared to the previous month. This was followed by a smaller decline of 3% in October 2024. November 2024 saw a slight increase of 1%, while December 2024 experienced a significant rise of 42%. However, in January 2025, there was a notable decrease of 19% in revenue compared to December 2024." \}, \{"id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:5720DC60EBB648FFAFCDE05A7363395B", "question": "what was the revenue in euros for branch a013 in december 2024?", "text": "The revenue in euros for branch A013 in December 2024 was €4,519,521." \}] |
| route   | No       | Route information for the answer to the last question. Retrieve it from the `route` field in the response of GET /api/questions/\{questionId\}. | sql                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

:::note
Get the history questions by `GET /api/questions?botId={botId}`.
:::

```json
{
  "count": 3,
  "bots": [
    {
      "id": "065B007500614D158B41B0D020C96966",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
    }
  ],
  "history": [
    {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:75262B7346CC469EA7B874E49888040E",
      "question": "what was the umsatz in euro in kristallhöhle during october 2024?",
      "text": "Der Gesamtumsatz in Euro (Umsatz in Euro) für die Region 'kristallhöhle' im Oktober 2024 betrug €92.541.045."
    }
  ],
  "route": "sql"
}
```

Sample Curl:

```bash
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/questions/suggestions' \
-X 'POST' \
--header 'X-MSTR-AuthToken: t40ltbk411923ipk85r8r0tace' \
--header 'Content-Type: application/json' \
--data '{
    "count": 3,
    "bots": [
        {
            "id": "065B007500614D158B41B0D020C96966",
            "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
        }
    ],
    "history": [
        {
            "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:75262B7346CC469EA7B874E49888040E",
            "question": "what was the umsatz in euro in kristallhöhle during october 2024?",
            "text": "Der Gesamtumsatz in Euro (Umsatz in Euro) für die Region 'kristallhöhle' im Oktober 2024 betrug €92.541.045."
        }
    ],
    "route": "sql"
}'
```

Sample Response:

| Response Code | Status                                        |
| ------------- | --------------------------------------------- |
| 200           | Successfully returned the suggested questions |
| 400           | Error in generating the suggested questions   |
| 401           | Authorization failed                          |
| 404           | No bot or bot instance found                  |

Sample Response Body on Success:

```json
{
  "suggestions": [
    {
      "bot": {
        "id": "065B007500614D158B41B0D020C96966"
      },
      "project": {
        "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
      },
      "text": "What is the Umsatz in Euro for the Duft Warensortiment in the Kristallhöhle region during November 2024?"
    },
    {
      "bot": {
        "id": "065B007500614D158B41B0D020C96966"
      },
      "project": {
        "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
      },
      "text": "How much Menge was sold for the Ernährung Warensortiment in the Zauberwald region in September 2024?"
    },
    {
      "bot": {
        "id": "065B007500614D158B41B0D020C96966"
      },
      "project": {
        "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
      },
      "text": "What was the Umsatz in Euro for Haar Warensortiment in Zauberwald during December 2024?"
    }
  ]
}
```
