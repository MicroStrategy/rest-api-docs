---
title: Get applicable properties for an attribute
sidebar_label: Get applicable properties for an attribute
description: Get applicable properties for an attribute.
---

<Available since="2021 Update 9" />

:::tip

You can try this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-df3dd3da-b225-4637-93dd-c41579ce1074?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve the applicable properties of an attribute using the Modeling service. Applicable properties returns the list of VLDB Properties based on attribute "type" which means that the result should be the same for all the attribute objects.

To get the applicable properties of the `Age Range` attribute, the object ID is `5603951E4FE1BC04A44E44B85BBB8ED2`.

:::info

Get the authorization token to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID with [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the applicable properties with `GET /api/model/attributes/{attributeId}/applicableAdvancedProperties`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "hs8n6ji36i18oo77g92mc24j2k"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/5603951E4FE1BC04A44E44B85BBB8ED2/applicableAdvancedProperties" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: hs8n6ji36i18oo77g92mc24j2k" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the applicable properties in the body of the response.

```json
{
  "propertyCount": 4,
  "applicableProperties": {
    "[VLDB Select].[Incomplete Lookup Table]": {
      "name": "Incomplete Lookup Table",
      "groupId": 1,
      "groupName": "Joins",
      "maxValue": 3,
      "displayType": "options",
      "displayName": "Preserve all final pass result elements",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Preserve common elements of final pass result table and lookup/relationship table.",
          "sqlPreview": "\n                \n                    create table ZZT18010069SP00 as\n                    select a21.STORE_NBR STORE_NBR,\n                    sum(a21.COST_AMT) METRIQUE14\n                    from COST_CLASS_STORE a21,\n                    DSSADMIN.LOOKUP_STORE a22\n                    where a21.STORE_NBR = a22.STORE_NBR\n                \n                \n                    select a21.STORE_NBR STORE_NBR,\n                    a25.STORE_DESC STORE_DESC,\n                    a25.STATE_NBR STATE_NBR,\n                    a26.STATE_DESC STATE_DESC,\n                    a22.METRIQUE14 WJXBFS1\n                    from ZZT18010069OJ03 a21,\n                    ZZT18010069SP00 a22,\n                    DSSADMIN.LOOKUP_STORE a25,\n                    DSSADMIN.LOOKUP_STATE a26\n                    where a21.STORE_NBR = a22.STORE_NBR (+) and\n                    a21.STORE_NBR = a25.STORE_NBR and\n                    a25.STATE_NBR = a26.STATE_NBR\n                \n            "
        },
        {
          "value": "Preserve all final result pass elements.",
          "sqlPreview": "\n                \n                    create table ZZT18010069SP00 as\n                    select a21.STORE_NBR STORE_NBR,\n                    sum(a21.COST_AMT) METRIQUE14\n                    from COST_CLASS_STORE a21,\n                    DSSADMIN.LOOKUP_STORE a22\n                    where a21.STORE_NBR = a22.STORE_NBR (+)\n                \n                \n                    select a21.STORE_NBR STORE_NBR,\n                    a25.STORE_DESC STORE_DESC,\n                    a25.STATE_NBR STATE_NBR,\n                    a26.STATE_DESC STATE_DESC,\n                    a22.METRIQUE14 WJXBFS1\n                    from ZZT18010069OJ03 a21,\n                    ZZT18010069SP00 a22,\n                    DSSADMIN.LOOKUP_STORE a25,\n                    DSSADMIN.LOOKUP_STATE a26\n                    where a21.STORE_NBR = a22.STORE_NBR (+) and\n                    a21.STORE_NBR = a25.STORE_NBR (+) and\n                    a25.STATE_NBR = a26.STATE_NBR (+)\n                \n            "
        },
        {
          "value": "Preserve all elements of final pass result table with respect to lookup table but not relationship table.",
          "sqlPreview": "\n                \n                    create table ZZT18010069SP00 as\n                    select a21.STORE_NBR STORE_NBR,\n                    sum(a21.COST_AMT) METRIQUE14\n                    from COST_CLASS_STORE a21,\n                    DSSADMIN.LOOKUP_STORE a22\n                    where a21.STORE_NBR = a22.STORE_NBR\n                \n                \n                    select a21.STORE_NBR STORE_NBR,\n                    a25.STORE_DESC STORE_DESC,\n                    a25.STATE_NBR STATE_NBR,\n                    a26.STATE_DESC STATE_DESC,\n                    a22.METRIQUE14 WJXBFS1\n                    from ZZT18010069OJ03 a21,\n                    ZZT18010069SP00 a22,\n                    DSSADMIN.LOOKUP_STORE a25,\n                    DSSADMIN.LOOKUP_STATE a26\n                    where a21.STORE_NBR = a22.STORE_NBR (+) and\n                    a21.STORE_NBR = a25.STORE_NBR (+) and\n                    a25.STATE_NBR = a26.STATE_NBR (+)\n                \n            "
        },
        {
          "value": "Do not listen to per report level setting, preserve elements of final pass according to the setting at attribute level. If this choice is selected at attribute level, it will be treated as preserve common elements (i.e. choice 1).",
          "sqlPreview": "\n            "
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Create].[Attribute ID Constraint]": {
      "name": "Attribute ID Constraint",
      "groupId": 5,
      "groupName": "Tables",
      "displayType": "one_line_text_box",
      "displayName": "Attribute ID Constraint",
      "showSqlPreview": true,
      "options": [
        {
          "value": "",
          "sqlPreview": "SQL BLOCK"
        }
      ],
      "type": "string",
      "defaultValue": ""
    },
    "[VLDB Select].[Do Case Insensitive Comparison for Strings in Filters]": {
      "name": "Do Case Insensitive Comparison for Strings in Filters",
      "groupId": 11,
      "groupName": "Dynamic Sourcing",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "String Comparison Behavior",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Use case insensitive string comparison with Dynamic Sourcing",
          "sqlPreview": ""
        },
        {
          "value": "Do not allow any string comparison with Dynamic Sourcing",
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[No Nulls All In Lookup In Attribute For Cube Reuse]": {
      "name": "No Nulls All In Lookup In Attribute For Cube Reuse",
      "groupId": 11,
      "groupName": "Dynamic Sourcing",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Attribute Validation",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Attribute columns in fact tables and lookup/relationship tables do not contain NULLs and all attribute elements in fact tables are present in lookup/relationship tables",
          "sqlPreview": ""
        },
        {
          "value": "Attribute columns in fact tables or lookup/relationship tables may contain NULLs and/or some attribute elements in fact tables are not present in lookup/relationship tables",
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 0
    }
  },
  "sqlDynamicPreview": "[VLDB Report].[Session Based PreStatement]\n[VLDB Report].[Report PreStatement 1]\n[VLDB Report].[Report PreStatement 2]\n[VLDB Report].[Report PreStatement 3]\n[VLDB Report].[Report PreStatement 4]\n[VLDB Report].[Report PreStatement 5]\n\n[VLDB Create].[Table PreStatement 1]\n[VLDB Create].[Table PreStatement 2]\n[VLDB Create].[Table PreStatement 3]\n[VLDB Create].[Table PreStatement 4]\n[VLDB Create].[Table PreStatement 5]\n\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\nFLOAT) [VLDB Create].[Table Space]\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\n\n[VLDB Insert].[Insert PreStatement 1]\n[VLDB Insert].[Insert PreStatement 2]\n[VLDB Insert].[Insert PreStatement 3]\n[VLDB Insert].[Insert PreStatement 4]\n[VLDB Insert].[Insert PreStatement 5]\n\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\nString]\n\n[VLDB Insert].[Insert MidStatement 1]\n[VLDB Insert].[Insert MidStatement 2]\n[VLDB Insert].[Insert MidStatement 3]\n[VLDB Insert].[Insert MidStatement 4]\n[VLDB Insert].[Insert MidStatement 5]\n\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\nString]\n\n[VLDB Insert].[Insert PostStatement 1]\n[VLDB Insert].[Insert PostStatement 2]\n[VLDB Insert].[Insert PostStatement 3]\n[VLDB Insert].[Insert PostStatement 4]\n[VLDB Insert].[Insert PostStatement 5]\n\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\n\n[VLDB Create].[Table PostStatement 1]\n[VLDB Create].[Table PostStatement 2]\n[VLDB Create].[Table PostStatement 3]\n[VLDB Create].[Table PostStatement 4]\n[VLDB Create].[Table PostStatement 5]\n\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\n\n[VLDB Report].[Report PostStatement 1]\n[VLDB Report].[Report PostStatement 2]\n[VLDB Report].[Report PostStatement 3]\n[VLDB Report].[Report PostStatement 4]\n[VLDB Report].[Report PostStatement 5]\n[Drop Table PreStatement 1]\n\ndrop table TABLENAME\n\n[Drop Table PostStatement 1]\n[VLDB Drop].[Post Cleanup Statement 1]\n[VLDB Drop].[Post Cleanup Statement 2]\n[VLDB Drop].[Post Cleanup Statement 3]\n[VLDB Drop].[Post Cleanup Statement 4]\n[VLDB Drop].[Post Cleanup Statement 5]\n[VLDB Report].[Session Based PostStatement]"
}
```

Response Code: 200 (The applicable properties of an attribute were returned successfully.)
