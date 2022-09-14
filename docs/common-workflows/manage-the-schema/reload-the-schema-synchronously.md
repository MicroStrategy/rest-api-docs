---
title: Reload the Schema Synchronously
description: This workflow sample demonstrates how to reload (update) the schema synchronously.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b58bf430-4495-4904-8a1c-929a126be1f0?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to reload (update) the schema synchronously.

You want to reload (update) the schema synchronously in the MicroStrategy Tutorial project . The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Reload (update) the schema synchronously using [POST /api/model/schema/reload](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-schemaReload).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754
```

Sample Request Body

`"updateTypes"` is required in the request body. This field can be empty, contain any of the following options, or all of them:

- `"table_key"`: Use this option if you changed the key structure of a table.
- `"entry_level"`: Use this option if you changed the level at which a fact is stored.
- `"logical_size"`: Use this option to recalculate logical table sizes and override any modifications you made to logical table sizes.

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
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
-H "Content-Type: application/json" \
-d '{"updateTypes":["table_key, entry_level, logical_size"]}'
```

Sample Response Body: Empty

Response Code: 201 (The schema reload synchronous call executes successfully.)
