---
title: Workflow Sample - Retrieve Report or Card SQL
sidebar_label: Retrieve Report or Card SQL
description: You can retrieve a report or card instance’s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c962ed90-f4e6-4934-8b65-4480bf45746e?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can retrieve a report or card instance’s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects.

You want to get the definition of the SQL statement from the Cost Analysis Report in the MicroStrategy Tutorial project. The object ID of the report is `CA8E4E2C6F4AC30B0DDE2195998B82DC`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a report instance

Use [POST /api/v2/reports/{id}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/createReportInstance_1)

To retrieve the SQL statement of a report or card, it is _not_ necessary to execute the report to retrieve data. If you don’t want to execute the report, thereby reducing the wait time for report instance creation, pass the `“resolve_prompts”` value for the `“executionStage”` query parameter.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/v2/reports/CA8E4E2C6F4AC30B0DDE2195998B82DC/instances?executionStage=resolve_prompts" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Code: 200 (A new report instance is created successfully.)

Sample Response Body:

```json
{
  "id": "CA8E4E2C6F4AC30B0DDE2195998B82DC",
  "status": 1,
  "instanceId": "DE90B87ED6423AED89CB00A12AE5B203"
}
```

## Get the SQL statement of the report instance using `GET /api/v2/reports/{id}/instances/{instanceId}/sqlView`

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "http://hostname:8080/MicroStrategyLibrary/api/v2/reports/CA8E4E2C6F4AC30B0DDE2195998B82DC/instances/DE90B87ED6423AED89CB00A12AE5B203/sqlView" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the SQL statement in the body of the response.

```json
{
  "sqlStatement": "select\t`a12`.`Year_ID`  `Year_ID`,\n\t`a12`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\n\tmax(`a14`.`MONTH_OF_YEAR_NAME`)  `MONTH_OF_YEAR_NAME0`,\n\t`a13`.`COUNTRY_ID`  `COUNTRY_ID`,\n\tmax(`a16`.`COUNTRY_NAME`)  `COUNTRY_NAME0`,\n\t`a13`.`REGION_ID`  `REGION_ID`,\n\tmax(`a15`.`REGION_NAME`)  `REGION_NAME`,\n\tsum(`a11`.`TOT_DOLLAR_SALES`)  `Revenue`,\n\tsum(`a11`.`TOT_COST`)  `WJXBFS1`\nfrom\t`SUBCATEG_MNTH_CTR_SLS`\t`a11`\n\tjoin\t`LU_MONTH`\t`a12`\n\t  on \t(`a11`.`MONTH_ID` = `a12`.`MONTH_ID`)\n\tjoin\t`LU_CALL_CTR`\t`a13`\n\t  on \t(`a11`.`CALL_CTR_ID` = `a13`.`CALL_CTR_ID`)\n\tjoin\t`LU_MONTH_OF_YEAR`\t`a14`\n\t  on \t(`a12`.`MONTH_OF_YEAR` = `a14`.`MONTH_OF_YEAR`)\n\tjoin\t`LU_REGION`\t`a15`\n\t  on \t(`a13`.`COUNTRY_ID` = `a15`.`COUNTRY_ID` and \n\t`a13`.`REGION_ID` = `a15`.`REGION_ID`)\n\tjoin\t`LU_COUNTRY`\t`a16`\n\t  on \t(`a13`.`COUNTRY_ID` = `a16`.`COUNTRY_ID`)\ngroup by\t`a12`.`Year_ID`,\n\t`a12`.`MONTH_OF_YEAR`,\n\t`a13`.`COUNTRY_ID`,\n\t`a13`.`REGION_ID`\n\n[Analytical engine calculation steps:\n\t1.  Perform cross-tabbing\n]\n"
}
```

Response Code: 200 (The SQL statement of the report instance is returned successfully.)
