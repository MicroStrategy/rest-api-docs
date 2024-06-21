---
sidebar_label: Get an image of an answer related to a question with bot routing
title: Get an image of an answer related to a question with bot routing
description: This workflow sample demonstrates how to get an image of an answer related to a question with bot routing.
---

<Available since="MicroStrategy ONE (June 2024)" />

This workflow sample demonstrates how to get an image of an answer related to a question with bot routing.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get an image of an answer related to a question with bot routing

Endpoint: [GET /api/questions/\{questionsId}/answers/images/\{imageId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/getMessageImage)

:::note
Replace `{questionsId}` in `GET /api/questions/{questionsId}/answers/images/{imageId}` with the question ID from `POST /api/questions` and `{imageId}` with your image ID from `GET /api/questions/{questionId}`.
:::

Sample Curl:

```bash
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/questions/862D61DE2EDD4937B31139B7F574E8EE/answers/images/32A0F79BB4374D4792253B38C1177A6D' \
-H 'accept: image/png' \
-H 'X-MSTR-AuthToken: t40ltbk411923ipk85r8r0tace' \
```

Sample Response:

| Response Code | Status                          |
| ------------- | ------------------------------- |
| 200           | Successfully returned the image |
| 400           | Error in getting the image      |
| 401           | Authorization failed            |
| 403           | Forbidden                       |
| 404           | Image not found                 |
