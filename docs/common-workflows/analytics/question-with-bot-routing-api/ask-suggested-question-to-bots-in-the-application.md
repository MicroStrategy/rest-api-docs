---
sidebar_label: Ask suggested questions with bot routing
title: Ask suggested questions with bot routing
description: This workflow sample demonstrates how to ask suggested questions with bot routing.
---

<Available since="MicroStrategy ONE (June 2024)" />

This workflow sample demonstrates how to ask suggested questions with bot routing.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Ask suggested questions with bot routing

Endpoint: [POST /api/question/suggestions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Question%20Suggestions/createSuggestions_1)

Sample Request Header:

| Header Name      | Required | Description                                              |
| ---------------- | -------- | -------------------------------------------------------- |
| X-MSTR-AuthToken | Yes      | Authorization token obtained from `POST /api/auth/login` |
| Content-Type     | Yes      | The body request type, which must be `application/json`  |

Sample Request Query String:

| Query Parameter | Required | Description                                            |
| --------------- | -------- | ------------------------------------------------------ |
| applicationId   | No       | Application ID. If not specified, the default is used. |
| botIds          | No       | Bots IDs, split by commas (`,`)                        |
| contentGroupIds | No       | Content Group IDs, split by commas (`,`)               |
| useHistory      | No       | Use history or start a new chat                        |

Sample Request Body:

```json
{
  "count": 5 // Number of suggested questions to return (1 to 5)
}
```

Sample Curl:

```bash
curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/question/suggestions' \
-X 'POST' \
--header 'X-MSTR-AuthToken: t40ltbk411923ipk85r8r0tace' \
--header 'X-MSTR-ProjectID: FCC1924411EAABC39C6C0080EFA54501' \
--header 'Content-Type: application/json' \
--data '{
  "count": 5
}' \
--get \
--data-urlencode 'applicationId=CDC07694B5F844EC0DA0073EAD71928E' \
--data-urlencode 'botIds=FF50752ED8CA586C641492F29DF4D6E7,075D0CD44EEB6B82B3B9EF03F6ED705B' \
--data-urlencode 'contentGroupIds=820E261D28705ED6494D200D98457626,0791486376B37445DEB502AF6951072B' \
--data-urlencode 'useHistory=false'
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
        "id": "05C0E560558D4EBF83E60875EA2D2A15"
      },
      "project": {
        "id": "F821C717E9E843728867BF79DE441DC3"
      },
      "text": "Which income bracket contributes to most revenue?"
    },
    {
      "bot": {
        "id": "05C0E560558D4EBF83E60875EA2D2A15"
      },
      "project": {
        "id": "F821C717E9E843728867BF79DE441DC3"
      },
      "text": "Show me the elements of Customer Age."
    },
    {
      "bot": {
        "id": "05C0E560558D4EBF83E60875EA2D2A15"
      },
      "project": {
        "id": "F821C717E9E843728867BF79DE441DC3"
      },
      "text": "What is the total USS_Revenue for each month?"
    }
  ]
}
```
