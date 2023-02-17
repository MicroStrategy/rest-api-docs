---
title: Get applicable properties for a project
sidebar_label: Get applicable properties for a project
description: Get applicable properties for a project.
---

<Available since="2021 Update 8" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-585d42d1-fbdc-4d1d-afbb-c4e872753709?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve the applicable properties of a project through Modeling Service.

You want to get the applicable properties of the `MicroStrategy Tutorial` Project object. The object ID is `6851110C470AF40EB46B559D5098F309`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the applicable properties using `GET /api/model/projects/{projectId}/applicableAdvancedProperties`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/projects/B7CA92F04B9FAE8D941C3E9B7E0CD754/applicableAdvancedProperties" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the applicable properties of a project in the body of the response.

```json
{
  "propertyCount": 2,
  "applicableProperties": {
    "[VLDB Select].[Allow Cartesian Join]": {
      "name": "Allow Cartesian Join",
      "groupId": 1,
      "groupName": "Joins",
      "maxValue": 2,
      "displayType": "options",
      "displayName": "Cartesian Join Governing",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Choosing this option keeps the backward compatibility with MicroStrategy 2019 where SQL queries are governed by \"Cartesian Join Warning\" VLDB setting.",
          "sqlPreview": "OBSOLETE - Keep backward compatibility with MicroStrategy 2019."
        },
        {
          "value": "Cancel execution of cartesian join for SQL, MDX, In-Memory queries.",
          "sqlPreview": "This VLDB setting only works for Data Engine Version 2020 or above. Choosing this option disallows cross join execution for SQL, MDX and In-Memory queries."
        },
        {
          "value": "Execute cartesian join for SQL, MDX, In-Memory queries.",
          "sqlPreview": "This VLDB setting only works for Data Engine Version 2020 or above. Choosing this option allows cross join execution for SQL, MDX and In-Memory queries."
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Join Across Datasets]": {
      "name": "Join Across Datasets",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Join Across Datasets",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Disallow joins based on unrelated common attributes",
          "sqlPreview": "Metrics"
        },
        {
          "value": "Allow joins based on unrelated common attributes",
          "sqlPreview": "Metrics"
        }
      ],
      "type": "int32",
      "defaultValue": 0
    }
  },
  "sqlDynamicPreview": "[VLDB Report].[Report PreStatement 1]\n[VLDB Report].[Report PreStatement 2]\n[VLDB Report].[Report PreStatement 3]\n[VLDB Report].[Report PreStatement 4]\n[VLDB Report].[Report PreStatement 5]\n\n[VLDB Create].[Table PreStatement 1]\n[VLDB Create].[Table PreStatement 2]\n[VLDB Create].[Table PreStatement 3]\n[VLDB Create].[Table PreStatement 4]\n[VLDB Create].[Table PreStatement 5]\n\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\nFLOAT) [VLDB Create].[Table Space]\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\n\n[VLDB Insert].[Insert PreStatement 1]\n[VLDB Insert].[Insert PreStatement 2]\n[VLDB Insert].[Insert PreStatement 3]\n[VLDB Insert].[Insert PreStatement 4]\n[VLDB Insert].[Insert PreStatement 5]\n\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\nString]\n\n[VLDB Insert].[Insert MidStatement 1]\n[VLDB Insert].[Insert MidStatement 2]\n[VLDB Insert].[Insert MidStatement 3]\n[VLDB Insert].[Insert MidStatement 4]\n[VLDB Insert].[Insert MidStatement 5]\n\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\nString]\n\n[VLDB Insert].[Insert PostStatement 1]\n[VLDB Insert].[Insert PostStatement 2]\n[VLDB Insert].[Insert PostStatement 3]\n[VLDB Insert].[Insert PostStatement 4]\n[VLDB Insert].[Insert PostStatement 5]\n\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\n\n[VLDB Create].[Table PostStatement 1]\n[VLDB Create].[Table PostStatement 2]\n[VLDB Create].[Table PostStatement 3]\n[VLDB Create].[Table PostStatement 4]\n[VLDB Create].[Table PostStatement 5]\n\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\n\n[VLDB Report].[Report PostStatement 1]\n[VLDB Report].[Report PostStatement 2]\n[VLDB Report].[Report PostStatement 3]\n[VLDB Report].[Report PostStatement 4]\n[VLDB Report].[Report PostStatement 5]\n[Drop Table PreStatement 1]\n\ndrop table TABLENAME\n\n[Drop Table PostStatement 1]\n[VLDB Drop].[Post Cleanup Statement 1]\n[VLDB Drop].[Post Cleanup Statement 2]\n[VLDB Drop].[Post Cleanup Statement 3]\n[VLDB Drop].[Post Cleanup Statement 4]\n[VLDB Drop].[Post Cleanup Statement 5]"
}
```

Response Code: 200 (The applicable properties of a project were returned successfully.)
