---
title: Lock the Schema
description: This workflow sample demonstrates how to lock the schema.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c3ac84b3-bce5-495d-94d5-941305fc1def?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to lock the schema.

You want to lock the schema in the MicroStrategy Tutorial project with an `“absolute_individual“` lock. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

In the response, the `"lockType"` can be:

- `"absolute_individual"`: Place using the POST schema lock API. When placed, no one, including the administrator, can perform changes on the schema objects. The purpose of this lock is to prevent accidental modifications to the schema in a project.
- `"exclusive_constituent"`: When the changeset is created with `"schemaEdit" = true`, an `"exclusive_constituent"` lock is placed on the schema. It is a lock exclusive to the changeset holding the lock; only that changeset can change the schema or its constituents (tables, attributes, etc.).
- `"absolute_constituent"`: Not in use.

:::

Lock the schema using [POST /api/model/schema/lock](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-postLock).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754
```

Sample Request Body:

```json
{
  "lockType": "absolute_individual"
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/lock" \
-H "accept: */*" \
-H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
-H "Content-Type: application/json"
-d '{"lockType":"absolute_individual"}'
```

Sample Response Body: Empty

Response Code 201 (The schema is locked successfully.)
