---
sidebar_label: Get answer by the question ID
title: Get answer by the question ID
description: This workflow sample demonstrates how to get a question's answer by the question ID.
---

<Available since="Strategy ONE (March 2025)" />

This workflow sample demonstrates how to get a question's answer by the question ID.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get a question with question ID

Endpoint: [GET /api/questions/\{questionId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Next-Gen%20AI/queryMessage_1)

:::note
Replace `{questionId}` in `GET /api/questions/{questionId}` with your question ID from `POST /api/questions`.
:::

Sample Request Body:
No request body.

Sample Curl:

```bash
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/questions/9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890' \
-H 'accept: */*' \
-H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
```

Sample Response Code:

| Response Code | Status                                                                            |
| ------------- | --------------------------------------------------------------------------------- |
| 200           | Successfully returned the answered question from the agent                        |
| 202           | Successfully returned the question from the agent, which is still being processed |
| 400           | Error getting the question from the agent                                         |
| 401           | Authorization failed                                                              |
| 404           | Question does not exist                                                           |

## Response Body on Success

The response is the question and answer with the specific ID.

### Response when the question is still being processed

If the response code is 202, indicating that the question is still being processed, continue calling this API to check the status of the question.

If the question is being processed, the response is:

```json
{
  "id": "9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890",
  "text": "What was the Number of Flights for AirTran Airways Corporation in July 2010?",
  "answers": [],
  "creationDate": "2024-03-08T09:01:43.154+0000"
}
```

### Response when all data is ready

If the status code is 200, indicating that the question has been answered.

```json
{
  "id": "9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890",
  "text": "What was the Number of Flights for AirTran Airways Corporation in July 2010?",
  "answers": [
    {
      "bot": { "id": "68696ADB633946B4B430ABD959433B3B" },
      "text": "**The Number of Flights for AirTran Airways Corporation in July 2010 was 2260.**",
      "insights": "- \uD83D\uDE0A **July is often a peak travel month, so seeing a high number of flights is typical for airlines during this period.**\n- ✈️ **A total of 2260 flights in one month indicates strong operational capacity and demand for AirTran Airways Corporation at that time.**\n- \uD83D\uDCC8 **Tracking monthly flight numbers can help identify seasonal trends and inform future scheduling or marketing strategies.**",
      "images": [{ "id": "79FD176AEAD9446395B083B5931E9EC7", "width": 800, "height": 600 }],
      "route": "sql"
    }
  ],
  "creationDate": "2024-03-08T09:01:43.154+0000"
}
```
