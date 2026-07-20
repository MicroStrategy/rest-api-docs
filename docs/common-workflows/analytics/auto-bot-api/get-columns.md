---
title: Get attributes forms and metrics from a specific agent
description: This page describes how to fetch the column information (attributes and metrics) from a specific agent.
---

<Available since="Strategy (July 2025)" />

This API is used to get column information (attributes forms and metrics) from a specific agent. This information is essential to understand what data elements the agent can access and use in its answers. The column information can be used to provide auto-complete functionality for user inputs, helping users formulate more accurate questions by suggesting relevant data elements as they type.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get attributes forms and metrics from a specific agent

Endpoint: [GET /api/v2/bots/\{botId}/columns](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Next-Gen%20AI/getBotColumns)

Request Parameters:

| Name             | Located in | Description          | Required | Type   |
| ---------------- | ---------- | -------------------- | -------- | ------ |
| botId            | path       | ID of the agent      | Yes      | string |
| X-MSTR-AuthToken | header     | Authentication token | Yes      | string |
| X-MSTR-ProjectID | header     | Project ID           | Yes      | string |

Sample Curl:

```bash
# Replace with your actual values
curl 'GET https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/bots/4B7EF8B549D2D32E941C3E9B7E0CD754/columns' \
-H 'X-MSTR-AuthToken: pqu5mkrcbv4461hh5qprr9j5ve' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json'
```

Sample Response:

```json
{
  "id": "8D679D4B11D3E4981000E787EC6DE8A4",
  "columns": ["Customer(ID)", "Customer(Name)", "Revenue"]
}
```

Notes:

- This API is useful for understanding the data elements that a agent has access to.
- Column information is essential for developers who want to build integrations that utilize specific data from agents.

## Use Cases

Auto-Complete Functionality:

One of the main purposes of this API is to enable auto-complete functionality for user input:

1. When a user starts typing a question to the agent, your application can retrieve column information to suggest relevant attributes and metrics.
1. As the user types, match their input against column names and descriptions to provide real-time suggestions.
1. This improves user experience by helping users formulate better questions and increases the accuracy of agent responses by ensuring users reference valid data elements.

Example implementation:

- Cache the column information at application startup or when an agent is selected
- Implement a suggestion engine that matches partial user input against attribute and metric names
- Display matching columns as suggestions, possibly with their descriptions for additional context
