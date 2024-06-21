---
sidebar_label: Get a question with bot routing
title: Get a question with bot routing
description: This workflow sample demonstrates how to get a question with bot routing.
---

<Available since="MicroStrategy ONE (June 2024)" />

This workflow sample demonstrates how to get a question with bot routing.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get a question with bot routing

Endpoint: [GET /api/questions/\{questionId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/queryMessage_1)

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

| Response Code | Status                                                                         |
| ------------- | ------------------------------------------------------------------------------ |
| 200           | Successfully returned the question from the bot that has been answered         |
| 202           | Successfully returned the question from the bot which is still being processed |
| 400           | Error in getting the question from the bot                                     |
| 401           | Authorization failed                                                           |
| 404           | Question does not exist                                                        |

## Response Body on Success

The response is the question from the bot in the application.

### Response when the question is still being processed

If the response code is 202, indicating that the question is still being processed, continue calling this API to check the status of the question.

If the question is being processed, the response is:

```json
{
  "id": "9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890",
  "text": "Analyze the distribution of cooking times for recipes",
  "answers": [],
  "creationDate": "2024-03-08T09:01:43.154+0000"
}
```

If the answer is ready, but the image is not, the response is:

```json
{
  "id": "9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890",
  "text": "Analyze the distribution of cooking times for recipes",
  "answers": [
    {
      "bot": { "id": "68696ADB633946B4B430ABD959433B3B" },
      "text": "The distribution of cooking times for recipes is as follows:\n- The shortest cooking time is -1 minute.\n- The majority of recipes have cooking times ranging from 2 to 60 minutes.\n- There are a few recipes with longer cooking times, such as 75, 90, 120, and 720 minutes.\n- The exact distribution of cooking times can be seen in the visualization result.",
      "type": "visualization",
      "data": {
        "id": "23C84B94AA29486D9F503D1A4B2AC53B"
      }
    }
  ],
  "creationDate": "2024-03-08T09:01:43.154+0000"
}
```

### Response when all data is ready

If the status code is 200, indicating that the question has been answered, the response varies depending on the type of answer.

Text answer:

```json
{
  "id": "9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890",
  "text": "Analyze the distribution of cooking times for recipes",
  "answers": [
    {
      "bot": { "id": "68696ADB633946B4B430ABD959433B3B" },
      "text": "The distribution of cooking times for recipes is as follows:\n- The shortest cooking time is -1 minute.\n- The majority of recipes have cooking times ranging from 2 to 60 minutes.\n- There are a few recipes with longer cooking times, such as 75, 90, 120, and 720 minutes.\n- The exact distribution of cooking times can be seen in the visualization result.",
      "type": "text"
    }
  ],
  "creationDate": "2024-03-08T09:01:43.154+0000"
}
```

Markdown answer:

```json
{
  "id": "9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890",
  "text": "Analyze the distribution of cooking times for recipes",
  "answers": [
    {
      "bot": { "id": "68696ADB633946B4B430ABD959433B3B" },
      "text": "#Title 1\nThe distribution of cooking times for recipes is as follows:\n- The shortest cooking time is -1 minute.\n- The majority of recipes have cooking times ranging from 2 to 60 minutes.\n- There are a few recipes with longer cooking times, such as 75, 90, 120, and 720 minutes.\n- The exact distribution of cooking times can be seen in the visualization result.",
      "type": "markdown"
    }
  ],
  "creationDate": "2024-03-08T09:01:43.154+0000"
}
```

Answer with visualization:

```json
{
  "id": "9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890",
  "text": "Analyze the distribution of cooking times for recipes",
  "answers": [
    {
      "bot": { "id": "68696ADB633946B4B430ABD959433B3B" },
      "text": "The distribution of cooking times for recipes is as follows:\n- The shortest cooking time is -1 minute.\n- The majority of recipes have cooking times ranging from 2 to 60 minutes.\n- There are a few recipes with longer cooking times, such as 75, 90, 120, and 720 minutes.\n- The exact distribution of cooking times can be seen in the visualization result.",
      "type": "visualization",
      "data": {
        "id": "23C84B94AA29486D9F503D1A4B2AC53B"
      },
      "images": [{ "id": "79FD176AEAD9446395B083B5931E9EC7", "width": 800, "height": 600 }]
    }
  ],
  "creationDate": "Date string"
}
```

To obtain the image for this type of answer, make a `GET` request to `api/questions/{questionId}/answers/images/{imageId}`. The image is only generated if the request asks for an image.
