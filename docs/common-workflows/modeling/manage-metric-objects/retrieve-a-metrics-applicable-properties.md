---
title: Retrieve applicable properties of a metric
sidebar_label: Retrieve a metric's applicable properties
description: This topic covers the workflow for retrieving a metric's applicable properties.
---

<Available since="2021 Update 9" />

:::tip

You can try this workflow with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c9639bc3-853f-4746-94b6-528b5aed21a5?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This topic covers the workflow to retrieve a metric's applicable properties.

Get the applicable properties of the `“Cost Comparison"` metric object. The object ID of the metric is `28F95FDC4EF1CA5746F8E6971A144BED` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the applicable properties of the specified metric within a changeset with `GET /api/model/metrics/{metricId}/applicableAdvancedProperties`.

The response can change based on the request parameters provided by the caller. Use the following parameters:

| Location | Name                | Description                                                                                                            |
| -------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| header   | X-MSTR-authToken    | The authorization token.                                                                                               |
| header   | X-MSTR-ProjectID    | The project ID.                                                                                                        |
| header   | X-MSTR-MS-Changeset | The changeset ID.                                                                                                      |
| params   | showSqlPreview      | A boolean value used to determine whether to show dynamic SQL preview or not. The parameter is set to true by default. |

## Retrieve a metric's applicable properties

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/metrics/28F95FDC4EF1CA5746F8E6971A144BED/applicableAdvancedProperties" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"
```

Sample Response Body:

```json
{
  "propertyCount": 11,
  "applicableProperties": {
    "[VLDB Function].[Null Check]": {
      "name": "Null Check",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 2,
      "displayType": "options",
      "displayName": "Null Check",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Do nothing",
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.STORE_NBR STORE_NBR,\n                    (sum(a21.REG_SLS_DLR) + sum(a21.PML_SLS_DLR)) TOT_SLS,\n                    sum(a21.PML_SLS_DLR) PRM_DLR\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    create table TEMP2 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    a21.TOT_SLS TOT_SLS,\n                    (a23.REG_SLS_DLR + a21. PRM_DLR) TOT_CALC\n                    from TEMP1 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP2 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        },
        {
          "value": "Check for NULL in all queries",
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.STORE_NBR STORE_NBR,\n                    (VALUE(sum(a21.REG_SLS_DLR), 0) + VALUE(sum(a21.PML_SLS_DLR), 0)) TOT_SLS_DLR,\n                    sum(a21.PML_SLS_DLR) PRM_DLR\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    create table TEMP2 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    a21.WJXBFS1 WJXBFS1,\n                    (VALUE(a23.REG_SLS_DLR, 0) + VALUE(a21.PRM_DLR, 0)) TOT_CALC\n                    from TEMP1 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP2 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        },
        {
          "value": "Check for NULL in temp table join only",
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.STORE_NBR STORE_NBR,\n                    (sum(a21.REG_SLS_DLR) + sum(a21.PML_SLS_DLR)) TOT_SLS_DLR,\n                    sum(a21.PML_SLS_DLR) PRM_DLR\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    create table as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    a21.WJXBFS1 WJXBFS1,\n                    (VALUE(a23.REG_SLS_DLR, 0) + VALUE(a21.PRM_DLR, 0)) TOT_CALC\n                    from TEMP1 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP2 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        }
      ],
      "type": "int32",
      "defaultValue": 2
    },
    "[VLDB Function].[Zero Check]": {
      "name": "Zero Check",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 2,
      "displayType": "options",
      "displayName": "Zero Check",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Do nothing",
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    create table TEMP2 as\n                    select a21.STORE_NBR STORE_NBR,\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\n                    (sum(a21.REG_SLS_DLR) / sum(a21.PML_SLS_DLR)) PCT_CONT\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    (a23.REG_SLS_DLR / a21.PML_SLS_DLR) DIV_METRIC,\n                    a21.PCT_CONT PCT_CONT\n                    from TEMP2 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP1 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        },
        {
          "value": "Check for zero in all queries",
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    create table TEMP2 as\n                    select a21.STORE_NBR STORE_NBR,\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\n                    (sum(a21.REG_SLS_DLR) / (CASE\n                    sum(a21.PML_SLS_DLR) WHEN 0 THEN NULL ELSE sum(a21.PML_SLS_DLR) END)) PCT_CONT\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    VALUE((a23. REG_SLS_DLR 1 / (CASE a21.PML_SLS_DLR, WHEN 0 THEN NULL ELSE a21.PML_SLS_DLR,)), 0) DIV_METRIC,\n                    a21.PCT_CONT PCT_CONT\n                    from TEMP2 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP1 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        },
        {
          "value": "Check for zero in temp table join only",
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    create table TEMP2 as\n                    select a21.STORE_NBR STORE_NBR,\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\n                    (sum(a21.REG_SLS_DLR) / sum(a21.PML_SLS_DLR)) PCT_CONT\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    VALUE((a23.REG_SLS_DLR / (CASE a21.PML_SLS_DLR,WHEN 0 THEN NULL ELSE a21.PML_SLS_DLR,END)), 0) DIV_METRIC,\n                    a21.PCT_CONT PCT_CONT\n                    from TEMP2 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP1 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        }
      ],
      "type": "int32",
      "defaultValue": 1
    },
    "[VLDB Select].[Integer Constant In Metric]": {
      "name": "Integer Constant In Metric",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Integer Constant In Metric",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Add '.0' to integer constants in metric expressions.",
          "sqlPreview": ""
        },
        {
          "value": "Do not add '.0' to integer constants in metric expressions.",
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Metric Join Type]": {
      "name": "Metric Join Type",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Metric Join Type",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Inner Join",
          "sqlPreview": "All metrics are created with an inner join by default."
        },
        {
          "value": "Outer Join",
          "sqlPreview": "All metrics are created with an outer by default."
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Smart Metric Transformation]": {
      "name": "Smart Metric Transformation",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Smart Metric Transformation",
      "showSqlPreview": true,
      "options": [
        {
          "value": "False",
          "sqlPreview": "\n                \n                    False means Difference/Percentage will be evaluated firstly:\n                    Smart Metric M3 = Greatest(Metric1, Metric2)\n                    1. Transform(M3) = Greatest(Last Year's Metric1, Last Year's Metric2)\n                    2. Difference(M3) = Greatest((Metric1 - LY's Metric1), (Metric2 - LY's Metric2))\n                    3. Variance Percentage(M3) = Greatest((Metric1 - LY's Metric1)/LY's Metric1, (Metric2 - LY's Metric2)/LY's Metric2)\n                \n            "
        },
        {
          "value": "True",
          "sqlPreview": "\n                \n                    True means smart metric will be evaluated firstly:\n                    Smart Metric M3 = Greatest(Metric1, Metric2)\n                    1. Transform(M3) = Greatest(Last Year's Metric1, Last Year's Metric2)\n                    2. Difference(M3) = M3 - Transform(M3)\n                    3. Variance Percentage(M3) = (M3 - Transform(M3)) / Transform(M3)\n                \n            "
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Transformable AggMetric]": {
      "name": "Transformable AggMetric",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Transformable AggMetric",
      "showSqlPreview": false,
      "options": [
        {
          "value": "False",
          "sqlPreview": "SQL BLOCK"
        },
        {
          "value": "True",
          "sqlPreview": "SQL BLOCK"
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Use Subtotal Dimty for Dynamic Aggregation]": {
      "name": "Use Subtotal Dimty for Dynamic Aggregation",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 3,
      "displayType": "options",
      "displayName": "Subtotal Dimensionality Use",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Use only the grouping property of a level metric for dynamic aggregation ",
          "sqlPreview": "SQL BLOCK"
        },
        {
          "value": "Use only the grouping property of a level subtotal for dynamic aggregation",
          "sqlPreview": "SQL BLOCK"
        },
        {
          "value": "Use both the grouping and filtering property of a level metric for dynamic aggregation",
          "sqlPreview": "SQL BLOCK"
        },
        {
          "value": "Use both the grouping and filtering property of a level subtotal for dynamic aggregation",
          "sqlPreview": "SQL BLOCK"
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Report].[Count Distinct with Partitions]": {
      "name": "Count Distinct with Partitions",
      "groupId": 4,
      "groupName": "Query Optimizations",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Count distinct elements from each partition",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Disable",
          "sqlPreview": ""
        },
        {
          "value": "Enable",
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {
      "name": "NullCheckingForAnalyticalEngine",
      "groupId": 9,
      "groupName": "Analytical Engine",
      "maxValue": 2,
      "displayType": "options",
      "displayName": "Null checking for Analytical Engine",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Scalar calculations return NULL if any operand is NULL; aggregation calculations ignore NULLs.",
          "sqlPreview": ""
        },
        {
          "value": "Scalar and aggregation calculations treat NULLs as zero (Deprecated)",
          "sqlPreview": ""
        },
        {
          "value": "Scalar calculations treat NULLs as zero; aggregation calculations ignore NULLs (metadata upgrade required for this to take effect for versions 10.7 or later).",
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 2
    },
    "[AnalyticalEngineProperties].[SubtotalDimensionalityAware]": {
      "name": "SubtotalDimensionalityAware",
      "groupId": 9,
      "groupName": "Analytical Engine",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Subtotal Dimensionality Aware",
      "showSqlPreview": false,
      "options": [
        {
          "value": "False",
          "sqlPreview": ""
        },
        {
          "value": "True",
          "sqlPreview": ""
        }
      ],
      "type": "boolean",
      "defaultValue": true
    },
    "[VLDB Select].[No Nulls In Metric For Cube Reuse]": {
      "name": "No Nulls In Metric For Cube Reuse",
      "groupId": 11,
      "groupName": "Dynamic Sourcing",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Metric Validation",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Enable dynamic sourcing for metric",
          "sqlPreview": ""
        },
        {
          "value": "Disable dynamic sourcing for metric",
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

Sample Response Code: 200 (The list of applicable properties for given metric is returned successfully.)
