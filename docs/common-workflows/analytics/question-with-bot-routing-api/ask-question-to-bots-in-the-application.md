---
sidebar_label: Ask a question with bot routing
title: Ask a question with bot routing
description: This workflow sample demonstrates how to ask a question with bot routing.
---

<Available since="MicroStrategy ONE (June 2024)" />

Use this API to identify the most suitable bot to answer your question based on the application, content group, and specific bots.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Ask a question with bot routing

Endpoint: [POST /api/questions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/createQuestion)

Sample Request Headers:

| Header           | Required | Description                                     | Sample Value               |
| ---------------- | -------- | ----------------------------------------------- | -------------------------- |
| X-MSTR-AuthToken | Yes      | Authorization Token                             | t40ltbk411923ipk85r8r0tace |
| Prefer           | Yes      | The response mode, which must be respond-async. | respond-async              |
| Content-Type     | Yes      | Type of content being sent                      | application/json           |

Sample Request Query Strings:

| Query String    | Required | Description                                            | Sample Value                                                      |
| --------------- | -------- | ------------------------------------------------------ | ----------------------------------------------------------------- |
| applicationId   | No       | Application ID. If not specified, the default is used. | CDC07694B5F844EC0DA0073EAD71928E                                  |
| botIds          | No       | Bot IDs, split by commas                               | FF50752ED8CA586C641492F29DF4D6E7,075D0CD44EEB6B82B3B9EF03F6ED705B |
| contentGroupIds | No       | Content Group IDs, split by commas                     | 820E261D28705ED6494D200D98457626,0791486376B37445DEB502AF6951072B |
| useHistory      | No       | Use history or start a new chat                        | false                                                             |

Sample Request Body:

| Field          | Required | Description                                                                 | Sample Value                            |
| -------------- | -------- | --------------------------------------------------------------------------- | --------------------------------------- |
| text           | Yes      | The question text                                                           | Which customer has the highest revenue? |
| answers.images | No       | Optional. If not specified, the image is not generated. Supports one image. | [\{"width": 200, "height": 300\}]       |

```json
{
  "text": "Which customer has the highest revenue?",
  "answers.images": [
    {
      "width": 720,
      "height": 405
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
    "text": "Which customer has the highest revenue?",
    "answers.images": [
        {
            "width": 720,
            "height": 405
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
| 404           | No bot found                       |

Sample Response Body on success:

```json
{
  "id": "9161386651E84054A6230796C84E12C5:68696ADB633946B4B430ABD959433B3B:FCC1C28296014AB19ABD877E60590890"
}
```
