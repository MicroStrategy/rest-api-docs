---
title: Retrieve applicable properties of a datamart
description: This workflow sample demonstrates how to retrieve applicable properties of a datamart using REST APIs.
---

You can use REST APIs to retrieve all the applicable properties of a datamart through the Modeling service. The workflow includes the following REST APIs requests.

The datamart object ID is 0DC7208C43B65E0DA10B26A6273F5067. The datamart is in the project "MicroStrategy Tutorial", and the project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

The response can change based on the request parameters provided by the caller. Use the following parameters:

| Location | Name             | Description              |
| -------- | ---------------- | ------------------------ |
| header   | X-MSTR-authToken | The authorization token. |
| header   | X-MSTR-ProjectID | The project ID.          |

## Retrieve applicable properties of a datamart

Endpoint: [GET /api/model/datamarts/{datamartId}/applicableVldbProperties](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-getDatamartVldbProperties)

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/0DC7208C43B65E0DA10B26A6273F5067/applicableVldbProperties' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: l9vig1id3rh2q42g0452pf1jiu' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Body:

```json
{
  "propertyCount": 175,
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
          "sqlPreview": "<font face=\"Times Roman\" size=\"3\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\"  target=\"_blank\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option disallows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \"Cartesian Join Warning\" VLDB setting.</dt></font>"
        },
        {
          "value": "Execute cartesian join for SQL, MDX, In-Memory queries.",
          "sqlPreview": "<font face=\"Times Roman\" size=\"3\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\"  target=\"_blank\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option allows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \"Cartesian Join Warning\" VLDB setting.</dt></font>"
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Base Table Join for Template]": {
      "name": "Base Table Join for Template",
      "groupId": 1,
      "groupName": "Joins",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Base Table Join for Template",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Temp table join",
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\n                    a21.MARKET_NBR MARKET_NBR,\n                    sum(a21.COST_AMT) WJXBFS1\n                    from COST_MARKET_DEP a21\n                    join LOOKUP_DAY a22\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\n                    where a22.MONTH_ID = 199411\n                    group by a21.DEPARTMENT_NBR, a21.MARKET_NBR\n                    \n                    create table TEMP2 as\n                    select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\n                    a21.MARKET_NBR MARKET_NBR,\n                    sum(a21.TOT_SLS_DLR) WJXBFS1,\n                    sum(a21.TOT_SLS_DLR) WJXBFS2\n                    from MARKET_DEPARTMENT a21\n                    join LOOKUP_DAY a22\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\n                    where a22.MONTH_ID = 199411\n                    group by a21.DEPARTMENT_NBR,\n                    a21.MARKET_NBR\n                    \n                    select a21.MARKET_NBR MARKET_NBR,\n                    a21.DEPARTMENT_NBR DEPARTMENT_NBR,\n                    ((a22.WJXBFS1 - a21.WJXBFS1) / a22.WJXBFS2) WJXBFS1\n                    from TEMP1 a21\n                    join TEMP2 a22\n                    on (a21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\n                    a21.MARKET_NBR = a22.MARKET_NBR)\n                \n            "
        },
        {
          "value": "Fact table join",
          "sqlPreview": "\n                \n                    select a21.MARKET_NBR MARKET_NBR,\n                    a21.DEPARTMENT_NBR DEPARTMENT_NBR,\n                    ((sum(a22.TOT_SLS_DLR) - sum(a21.COST_AMT)) / sum(a22.TOT_SLS_DLR)) WJXBFS1\n                    from COST_MARKET_DEP a21\n                    join MARKET_DEPARTMENT a22\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT and\n                    a21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\n                    a21.MARKET_NBR = a22.MARKET_NBR)\n                    join LOOKUP_DAY a23\n                    on (a21.CUR_TRN_DT = a23.CUR_TRN_DT)\n                    where a23.MONTH_ID = 199411\n                    group by a21.MARKET_NBR,\n                    a21.DEPARTMENT_NBR\n                \n            "
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Cross Join Order]": {
      "name": "Cross Join Order",
      "groupId": 1,
      "groupName": "Joins",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Cartesian Join Evaluation",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Do not reevaluate cartesian joins.",
          "sqlPreview": "\n                \n                    select a12.ATTR1_ID ATTR1_ID,\n                    max(a12.ATTR1_DESC) ATTR1_DESC,\n                    a13.ATTR2_ID ATTR2_ID,\n                    max(a13.ATTR2_DESC) ATTR2_DESC,\n                    count(a11.FACT_ID) METRIC\n                    from FACTTABLE a11\n                    cross join LU_TABLE1 a12\n                    join LU_TABLE2 a13\n                    on (a11.ATTR3_ID = a13.ATTR3_ID and\n                    a12.ATTR1_ID = a13.ATTR1_CD)\n                    group by a12.ATTR1_ID,\n                    a13.ATTR2_ID\n                \n            "
        },
        {
          "value": "Reevaluate cartesian joins.",
          "sqlPreview": "\n                \n                    select a12.ATTR1_ID ATTR1_ID,\n                    max(a12.ATTR1_DESC) ATTR1_DESC,\n                    a13.ATTR2_ID ATTR2_ID,\n                    max(a13.ATTR2_DESC) ATTR2_DESC,\n                    count(a11.FACT_ID) METRIC\n                    from FACTTABLE a11\n                    join LU_TABLE2 a13\n                    on (a11.ATTR3_ID = a13.ATTR3_ID)\n                    join LU_TABLE1 a12\n                    on (a12.ATTR1_ID = a13.ATTR1_CD)\n                    group by a12.ATTR1_ID,\n                    a13.ATTR2_ID\n                \n            "
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    // Here we omit some applicableProperties to shorten the response body
    // You can send the request in practice to get a full list of the applicableProperties
    "[VLDB Function].[Missing Display]": {
      "name": "Missing Display",
      "groupId": 15,
      "groupName": "Null Display",
      "displayType": "one_line_text_box",
      "displayName": "Missing object null display",
      "showSqlPreview": false,
      "options": [],
      "type": "string",
      "defaultValue": ""
    },
    "[VLDB Function].[Null Display]": {
      "name": "Null Display",
      "groupId": 15,
      "groupName": "Null Display",
      "displayType": "n_text_box",
      "displayName": "Null Display for Warehouse, Cross-tabulation",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Null Display for Warehouse",
          "sqlPreview": ""
        },
        {
          "value": "Null Display for Cross-tabulation",
          "sqlPreview": ""
        }
      ],
      "type": "string",
      "defaultValue": "",
      "valueSeparator": ","
    }
  },
  "sqlDynamicPreview": "[VLDB Report].[Report PreStatement 1]\n[VLDB Report].[Report PreStatement 2]\n[VLDB Report].[Report PreStatement 3]\n[VLDB Report].[Report PreStatement 4]\n[VLDB Report].[Report PreStatement 5]\n\n[VLDB Create].[Table PreStatement 1]\n[VLDB Create].[Table PreStatement 2]\n[VLDB Create].[Table PreStatement 3]\n[VLDB Create].[Table PreStatement 4]\n[VLDB Create].[Table PreStatement 5]\n\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\nFLOAT) [VLDB Create].[Table Space]\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\n\n[VLDB Insert].[Insert PreStatement 1]\n[VLDB Insert].[Insert PreStatement 2]\n[VLDB Insert].[Insert PreStatement 3]\n[VLDB Insert].[Insert PreStatement 4]\n[VLDB Insert].[Insert PreStatement 5]\n\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\nString]\n\n[VLDB Insert].[Insert MidStatement 1]\n[VLDB Insert].[Insert MidStatement 2]\n[VLDB Insert].[Insert MidStatement 3]\n[VLDB Insert].[Insert MidStatement 4]\n[VLDB Insert].[Insert MidStatement 5]\n\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\nString]\n\n[VLDB Insert].[Insert PostStatement 1]\n[VLDB Insert].[Insert PostStatement 2]\n[VLDB Insert].[Insert PostStatement 3]\n[VLDB Insert].[Insert PostStatement 4]\n[VLDB Insert].[Insert PostStatement 5]\n\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\n\n[VLDB Create].[Table PostStatement 1]\n[VLDB Create].[Table PostStatement 2]\n[VLDB Create].[Table PostStatement 3]\n[VLDB Create].[Table PostStatement 4]\n[VLDB Create].[Table PostStatement 5]\n\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\n\n[VLDB Report].[Report PostStatement 1]\n[VLDB Report].[Report PostStatement 2]\n[VLDB Report].[Report PostStatement 3]\n[VLDB Report].[Report PostStatement 4]\n[VLDB Report].[Report PostStatement 5]\n[Drop Table PreStatement 1]\n\ndrop table TABLENAME\n\n[Drop Table PostStatement 1]\n[VLDB Drop].[Post Cleanup Statement 1]\n[VLDB Drop].[Post Cleanup Statement 2]\n[VLDB Drop].[Post Cleanup Statement 3]\n[VLDB Drop].[Post Cleanup Statement 4]\n[VLDB Drop].[Post Cleanup Statement 5]"
}
```

Sample Response Code: 200 (The list of applicable properties for the given datamart is returned successfully.)
