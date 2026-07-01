---
title: Retrieve the data model SQL view
description: This workflow demonstrates how to retrieve the data model SQL view.
---

<Available since="Strategy (December 2025)" />

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

This workflow sample demonstrates how to retrieve the data model SQL view using the REST API.

Endpoint: [GET /api/v2/cubes/\{dataModelId}/sqlView](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Cubes/getCubeSqlView)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/CDCB6AB0A14E466FA66B571B8B0CDB38/sqlView' \
--header 'X-MSTR-AuthToken: l0abia567pgqfuk8fbg5f0ao25' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "sqlStatement": "[DB Instance: xilin1713246093]\n\nselect\t\"abc\".\"ELM_ID\" AS \"ELM_ID\",\n\t\"abc\".\"ELM_NAME\" AS \"ELM_NAME\",\n\t\"abc\".\"F_ID\" AS \"F_ID\",\n\t\"abc\".\"F_NAME\" AS \"F_NAME\",\n\t\"abc\".\"test\" AS \"test\",\n\t\"abc\".\"test2\" AS \"test2\"\nfrom\t\"public\".\"abc\"\t AS \"abc\"\n\n[DB Instance: Connection to Strategy Data Server]\nselect\t`a11`.`test`  `test`,\n\t`a11`.`test2`  `test2`,\n\t`a11`.`ELM_ID`  `ELM_ID`,\n\t`a11`.`ELM_NAME`  `ELM_NAME`,\n\t`a11`.`F_ID`  `F_ID`,\n\t`a11`.`F_NAME`  `F_NAME`\nfrom\t`##spark_table_name_placeholder##`\t`a11`\n\n[DB Instance: Connection to Strategy Data Server]\n[Analytical engine calculation steps:\n]\n"
}
```

- Response Code: 200 (Success: OK)
