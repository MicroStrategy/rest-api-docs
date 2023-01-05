---
title: Retrieve the schema lock
description: This workflow sample demonstrates how to retrieve the schema lock.
---

<Available since="2021 Update 1" />

This workflow sample demonstrates how to retrieve the schema lock.

You want to get the schema lock status of the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

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

Retrieve the schema lock using [GET /api/model/schema/lock](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-getLock).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/lock" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "lockType": "exclusive_constituent",
  "dateCreated": "2021-03-24T01:39:04",
  "comment": "<COMMENTS><PRODUCT>MicroStrategy Modeling Service</PRODUCT><COMPONENT>MicroStrategy Modeling Service</COMPONENT><LOCKID>E723124CEE0E481FBC8AC539D89C6A67</LOCKID></COMMENTS>",
  "machineName": "env-247993laiouse1",
  "ownerName": "MSTR User",
  "ownerId": "7FC05A65473CE2FD845CE6A1D3F13233"
}
```

Response Code: 200 (The lock status of the schema is returned successfully.)
