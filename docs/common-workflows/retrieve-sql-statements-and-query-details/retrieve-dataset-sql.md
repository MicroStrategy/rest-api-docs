---
title: Workflow sample - Retrieve the SQL statement of datasets in a document or dossier instance
sidebar_label: Retrieve the SQL statement of datasets in a document or dossier instance
description: You can retrieve the SQL statements of all datasets in a document or dossier instance. In this workflow sample, a dossier instance is used. However, the same workflow applies to a document instance.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5d5e523d-6a02-45a1-9537-bc0d37f9c10c).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can retrieve the SQL statements of all datasets in a document or dossier instance. In this workflow sample, a dossier instance is used. However, the same workflow applies to a document instance.

You want to view the SQL statement of every dataset in the Cost Analysis Dossier in the MicroStrategy Tutorial project. The object ID of the dossier is `D14F30994A4B97AD8EF6AEA5F589E30B`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a dossier instance

Use [POST /api/dossiers/{id}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_1).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Code: 201 (A new dossier instance is created successfully.)

Sample Response Body:

```json
{
  "mid": "50454FC6DA48C798E8EDA28C46726F5B",
  "status": 1
}
```

## Get the SQL statements of datasets in document or dossier instances using `GET /api/dossiers/{id}/instances/{instanceId}/datasets/sqlView`

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances/50454FC6DA48C798E8EDA28C46726F5B/datasets/sqlView" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the SQL statement of every dataset in the body of the response.

```json
{
  "datasets": [
    {
      "name": "New Dataset 1",
      "id": "53789FDF1C4378D8EBDAD8AF41E0C95F",
      "sqlStatement": "select\tdistinct `pa11`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\n\t`a14`.`MONTH_OF_YEAR_NAME`  `MONTH_OF_YEAR_NAME0`,\n\t`pa11`.`Quarter_ID`  `Quarter_ID`,\n\t`a13`.`QUARTER_DESC`  `QUARTER_DESC0`,\n\t`a13`.`Year_ID`  `Year_ID`,\n\t`pa11`.`WJXBFS1`  `WJXBFS1`,\n\t`pa11`.`WJXBFS2`  `WJXBFS2`,\n\t`pa12`.`WJXBFS1`  `WJXBFS3`\nfrom\t(select\t`a12`.`Quarter_ID`  `Quarter_ID`,\n\t\t`a13`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\n\t\tsum((`a11`.`QTY_SOLD` * `a11`.`UNIT_COST`))  `WJXBFS1`,\n\t\tsum((`a11`.`QTY_SOLD` * `a11`.`DISCOUNT`))  `WJXBFS2`\n\tfrom\t`ORDER_DETAIL`\t`a11`\n\t\tjoin\t`LU_DAY`\t`a12`\n\t\t  on \t(`a11`.`ORDER_DATE` = `a12`.`DAY_DATE`)\n\t\tjoin\t`LU_MONTH`\t`a13`\n\t\t  on \t(`a12`.`MONTH_ID` = `a13`.`MONTH_ID`)\n\tgroup by\t`a12`.`Quarter_ID`,\n\t\t`a13`.`MONTH_OF_YEAR`\n\t)\t`pa11`\n\tjoin\t(select\t`a13`.`Quarter_ID`  `Quarter_ID`,\n\t\t`a12`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\n\t\tsum(`a11`.`TOT_COST`)  `WJXBFS1`\n\tfrom\t`STATE_SUBCATEG_MNTH_SLS`\t`a11`\n\t\tjoin\t`LU_MONTH`\t`a12`\n\t\t  on \t(`a11`.`MONTH_ID` = `a12`.`MONTH_ID`)\n\t\tjoin\t`LU_QUARTER`\t`a13`\n\t\t  on \t(`a12`.`Quarter_ID` = `a13`.`LY_QUARTER_ID`)\n\tgroup by\t`a13`.`Quarter_ID`,\n\t\t`a12`.`MONTH_OF_YEAR`\n\t)\t`pa12`\n\t  on \t(`pa11`.`MONTH_OF_YEAR` = `pa12`.`MONTH_OF_YEAR` and \n\t`pa11`.`Quarter_ID` = `pa12`.`Quarter_ID`)\n\tjoin\t`LU_QUARTER`\t`a13`\n\t  on \t(`pa11`.`Quarter_ID` = `a13`.`Quarter_ID`)\n\tjoin\t`LU_MONTH_OF_YEAR`\t`a14`\n\t  on \t(`pa11`.`MONTH_OF_YEAR` = `a14`.`MONTH_OF_YEAR`)\n\n[Analytical engine calculation steps:\n\t1.  Calculate metric: <Cost Growth>\n\t2.  Perform cross-tabbing\n]\n"
    },
    {
      "name": "New Dataset 1",
      "id": "C50B684A7D4C9FA8D30F50B6BFCBA7EA",
      "sqlStatement": "select\tdistinct `pa12`.`CALL_CTR_ID`  `CALL_CTR_ID`,\n\t`a13`.`CENTER_NAME`  `CENTER_NAME`,\n\t`a13`.`COUNTRY_ID`  `COUNTRY_ID`,\n\t`a15`.`COUNTRY_NAME`  `COUNTRY_NAME0`,\n\t`a13`.`REGION_ID`  `REGION_ID`,\n\t`a14`.`REGION_NAME`  `REGION_NAME`,\n\t`pa12`.`WJXBFS1`  `WJXBFS1`\n\t`pa12`.`Revenue`  `Revenue`\nfrom\t(select\t`a12`.`CALL_CTR_ID`  `CALL_CTR_ID`,\n\t\tsum((`a11`.`TOT_DOLLAR_SALES` - `a11`.`TOT_COST`))  `WJXBFS1`,\n\t\tsum(`a11`.`TOT_DOLLAR_SALES`)  `Revenue`\n\tfrom\t`ITEM_EMP_SLS`\t`a11`\n\t\tjoin\t`LU_EMPLOYEE`\t`a12`\n\t\t  on \t(`a11`.`EMP_ID` = `a12`.`EMP_ID`)\n\tgroup by\t`a12`.`CALL_CTR_ID`\n\t)\t`pa12`\n\tjoin\t`LU_CALL_CTR`\t`a13`\n\t  on \t(`pa12`.`CALL_CTR_ID` = `a13`.`CALL_CTR_ID`)\n\tjoin\t`LU_REGION`\t`a14`\n\t  on \t(`a13`.`COUNTRY_ID` = `a14`.`COUNTRY_ID` and \n\t`a13`.`REGION_ID` = `a14`.`REGION_ID`)\n\tjoin\t`LU_COUNTRY`\t`a15`\n\t  on \t(`a13`.`COUNTRY_ID` = `a15`.`COUNTRY_ID`)\n\n[Analytical engine calculation steps:\n\t1.  Calculate metric: <Profit Margin>\n\t2.  Calculate metric: <Profit Percent Growth>\n\t3.  Perform cross-tabbing\n]\n"
    }
  ]
}
```

Response Code: 200 (The SQL statement of the dossier instance's dataset is returned successfully.)
