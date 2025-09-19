---
sidebar_label: Ask the agent a question
title: Ask the agent a question
description: Submit a question to the agent and receive a question ID.
---

<Available since="Strategy ONE (June 2025)" />

Use this API to submit a question to the agent and receive an question ID.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Ask the Agent a Question

Endpoint: [POST /api/questions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Next-Gen%20AI/createQuestion)

Sample Request Headers:

| Header           | Required | Description                                     | Sample Value               |
| ---------------- | -------- | ----------------------------------------------- | -------------------------- |
| X-MSTR-AuthToken | Yes      | Authorization Token                             | t40ltbk411923ipk85r8r0tace |
| Prefer           | Yes      | The response mode, which must be respond-async. | respond-async              |
| Content-Type     | Yes      | Type of content being sent                      | application/json           |

Sample Request Body:

| Field          | Required | Description                                                                                                                           | Sample Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| question       | Yes      | The question text                                                                                                                     | Which customer has the highest revenue?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| bots           | No       | The agent to which the question is directed. Only one agent is supported. If not specified, the best suitable agent will be selected. | [\{"id": "065B007500614D158B41B0D020C96966", "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\}]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| answers.images | No       | Optional. If not specified, the image is not generated. Supports one image.                                                           | [\{"width": 800, "height": 600\}]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| history        | No       | Optional. Previous questions and answers. Supports up to 5 entries.                                                                   | [\{"id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:E41CC2178F6042BCAAD72E322E802A90", "question": "show the monthly percentage development of the revenue in euros compared to the previous month for branch a013.. today's date is 04-march-2025. make sure to do correct datetime based calculation.", "text": "The monthly percentage development of revenue in euros for branch A013 shows fluctuations over the observed period. Starting in September 2024, there was an 8% decrease in revenue compared to the previous month. This was followed by a smaller decline of 3% in October 2024. November 2024 saw a slight increase of 1%, while December 2024 experienced a significant rise of 42%. However, in January 2025, there was a notable decrease of 19% in revenue compared to December 2024." \}, \{"id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:5720DC60EBB648FFAFCDE05A7363395B", "question": "what was the revenue in euros for branch a013 in december 2024?", "text": "The revenue in euros for branch A013 in December 2024 was €4,519,521." \}] |

:::note
Get the history questions by `GET /api/questions?botId={agentId}`.
:::

```json
{
  "question": "What was the Umsatz in Euro in Kristallhöhle during 2024/10 Okt?",
  "bots": [
    {
      "id": "065B007500614D158B41B0D020C96966",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
    }
  ],
  "answers": {
    "images": [
      {
        "width": 800,
        "height": 600
      }
    ]
  },
  "history": [
    {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:E41CC2178F6042BCAAD72E322E802A90",
      "question": "show the monthly percentage development of the revenue in euros compared to the previous month for branch a013.. today's date is 04-march-2025. make sure to do correct datetime based calculation.",
      "text": "The monthly percentage development of revenue in euros for branch A013 shows fluctuations over the observed period. Starting in September 2024, there was an 8% decrease in revenue compared to the previous month. This was followed by a smaller decline of 3% in October 2024. November 2024 saw a slight increase of 1%, while December 2024 experienced a significant rise of 42%. However, in January 2025, there was a notable decrease of 19% in revenue compared to December 2024."
    },
    {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:5720DC60EBB648FFAFCDE05A7363395B",
      "question": "what was the revenue in euros for branch a013 in december 2024?",
      "text": "The revenue in euros for branch A013 in December 2024 was €4,519,521."
    }
  ]
}
```

Sample Curl:

```bash
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/questions' \
-X 'POST' \
--header 'X-MSTR-AuthToken: t40ltbk411923ipk85r8r0tace' \
--header 'X-MSTR-ProjectID: FCC1924411EAABC39C6C0080EFA54501' \
--header 'Prefer: respond-async' \
--header 'Content-Type: application/json' \
--data '{
    "question": "What was the Umsatz in Euro in Kristallhöhle during 2024/10 Okt?",
    "bots": [
        {
            "id": "065B007500614D158B41B0D020C96966",
            "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
        }
    ],
    "answers": {
      "images": [
        {
          "width": 800,
          "height": 600
        }
      ]
    },
    "history": [
        {
          "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:E41CC2178F6042BCAAD72E322E802A90",
          "question": "show the monthly percentage development of the revenue in euros compared to the previous month for branch a013.. today's date is 04-march-2025. make sure to do correct datetime based calculation.",
          "text": "The monthly percentage development of revenue in euros for branch A013 shows fluctuations over the observed period. Starting in September 2024, there was an 8% decrease in revenue compared to the previous month. This was followed by a smaller decline of 3% in October 2024. November 2024 saw a slight increase of 1%, while December 2024 experienced a significant rise of 42%. However, in January 2025, there was a notable decrease of 19% in revenue compared to December 2024."
        },
        {
          "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754:065B007500614D158B41B0D020C96966:5720DC60EBB648FFAFCDE05A7363395B",
          "question": "what was the revenue in euros for branch a013 in december 2024?",
          "text": "The revenue in euros for branch A013 in December 2024 was €4,519,521."
        }
    ]
}'
```

Sample Response:

| Response Code | Status                             |
| ------------- | ---------------------------------- |
| 202           | Successfully accepted the question |
| 400           | Error in accepting the question    |
| 401           | Authorization failed               |
| 404           | No agent found                     |

Sample Response Body on success:

```json
{
  "id": "9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890"
}
```
