---
title: Reload the schema asynchronously
description: This workflow sample demonstrates how to reload (update) the schema asynchronously.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-edc29ca6-4db8-4a8b-988e-11d9583ed993?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to reload (update) the schema asynchronously.

1. [Reload (update) the schema asynchronously.](#reload-update-the-schema-asynchronously)
1. [Check the status of the schema reload (update).](#check-the-status-of-the-schema-reload-update)

You want to reload (update) the schema asynchronously in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

## Reload (update) the schema asynchronously

Use [POST /api/model/schema/reload](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-schemaReload)

Sample Request Header:

Set `Prefer` to `respond-async` to execute this API asynchronously. Use GET Tasks APIs to check the status of the task.

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754
"Prefer": "respond-async"
```

Sample Request Body

- `updateTypes` is required in the request body. This field can be empty, contain any of the following options, or all of them:
  - `table_key`: Use this option if you changed the key structure of a table.
  - `entry_level`: Use this option if you changed the level at which a fact is stored.
  - `logical_size`: Use this option to recalculate logical table sizes and override any modifications you made to logical table sizes.

```json
{
  "updateTypes": ["table_key", "entry_level", "logical_size"]
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/reload" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" \
-H "Prefer: respond-async" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
-H "Content-Type: application/json" \
-d '{"updateTypes":["table_key","entry_level","logical_size"]}'
```

Sample Response Body:

```json
{
  "id": "907CAAF6F0644A8DA2CBF9D3C4C1B12E",
  "task": "reloadSchema",
  "startTime": "2021-03-24T02:05:14.236396Z",
  "status": "running"
}
```

Response Code: 202 (The schema reload (asynchronous) request is accepted.)

## Check the status of the schema reload (update)

Use [GET /api/model/tasks/{taskId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-getTask)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754
"taskId": "907CAAF6F0644A8DA2CBF9D3C4C1B12E"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tasks/907CAAF6F0644A8DA2CBF9D3C4C1B12E" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "907CAAF6F0644A8DA2CBF9D3C4C1B12E",
  "task": "reloadSchema",
  "startTime": "2021-03-24T02:05:14.236396Z",
  "endTime": "2021-03-24T02:05:15.740630Z",
  "status": "completed"
}
```

Response Code: 200 (The task execution has completed or failed.)
