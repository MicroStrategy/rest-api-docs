"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6908],{90713:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>S,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(74848),r=t(28453);const i={title:"Retrieve applicable properties of a metric",sidebar_label:"Retrieve a metric's applicable properties",description:"This topic covers the workflow for retrieving a metric's applicable properties."},o=void 0,s={id:"common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties",title:"Retrieve applicable properties of a metric",description:"This topic covers the workflow for retrieving a metric's applicable properties.",source:"@site/docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties.md",sourceDirName:"common-workflows/modeling/manage-metric-objects",slug:"/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Retrieve applicable properties of a metric",sidebar_label:"Retrieve a metric's applicable properties",description:"This topic covers the workflow for retrieving a metric's applicable properties."},sidebar:"tutorialSidebar",previous:{title:"Update a metric's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset"},next:{title:"Manage prompt objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/"}},l={},c=[{value:"Retrieve a metric&#39;s applicable properties",id:"retrieve-a-metrics-applicable-properties",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 9"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can try this workflow with ",(0,a.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c9639bc3-853f-4746-94b6-528b5aed21a5?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:"This topic covers the workflow to retrieve a metric's applicable properties."}),"\n",(0,a.jsxs)(n.p,{children:["Get the applicable properties of the ",(0,a.jsx)(n.code,{children:'\u201cCost Comparison"'})," metric object. The object ID of the metric is ",(0,a.jsx)(n.code,{children:"28F95FDC4EF1CA5746F8E6971A144BED"}),"\u202fin the MicroStrategy Tutorial project. The project ID is ",(0,a.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(n.p,{children:["Get the project ID from ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["Retrieve the applicable properties of the specified metric within a changeset with ",(0,a.jsx)(n.code,{children:"GET /api/model/metrics/{metricId}/applicableAdvancedProperties"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Location"}),(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"header"}),(0,a.jsx)(n.td,{children:"X-MSTR-authToken"}),(0,a.jsx)(n.td,{children:"The authorization token."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"header"}),(0,a.jsx)(n.td,{children:"X-MSTR-ProjectID"}),(0,a.jsx)(n.td,{children:"The project ID."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"header"}),(0,a.jsx)(n.td,{children:"X-MSTR-MS-Changeset"}),(0,a.jsx)(n.td,{children:"The changeset ID."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"params"}),(0,a.jsx)(n.td,{children:"showSqlPreview"}),(0,a.jsx)(n.td,{children:"A boolean value used to determine whether to show dynamic SQL preview or not. The parameter is set to true by default."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"retrieve-a-metrics-applicable-properties",children:"Retrieve a metric's applicable properties"}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/metrics/28F95FDC4EF1CA5746F8E6971A144BED/applicableAdvancedProperties" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "propertyCount": 11,\n  "applicableProperties": {\n    "[VLDB Function].[Null Check]": {\n      "name": "Null Check",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Null Check",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Do nothing",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    (sum(a21.REG_SLS_DLR) + sum(a21.PML_SLS_DLR)) TOT_SLS,\\n                    sum(a21.PML_SLS_DLR) PRM_DLR\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    a21.TOT_SLS TOT_SLS,\\n                    (a23.REG_SLS_DLR + a21. PRM_DLR) TOT_CALC\\n                    from TEMP1 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP2 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Check for NULL in all queries",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    (VALUE(sum(a21.REG_SLS_DLR), 0) + VALUE(sum(a21.PML_SLS_DLR), 0)) TOT_SLS_DLR,\\n                    sum(a21.PML_SLS_DLR) PRM_DLR\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    a21.WJXBFS1 WJXBFS1,\\n                    (VALUE(a23.REG_SLS_DLR, 0) + VALUE(a21.PRM_DLR, 0)) TOT_CALC\\n                    from TEMP1 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP2 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Check for NULL in temp table join only",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    (sum(a21.REG_SLS_DLR) + sum(a21.PML_SLS_DLR)) TOT_SLS_DLR,\\n                    sum(a21.PML_SLS_DLR) PRM_DLR\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    create table as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    a21.WJXBFS1 WJXBFS1,\\n                    (VALUE(a23.REG_SLS_DLR, 0) + VALUE(a21.PRM_DLR, 0)) TOT_CALC\\n                    from TEMP1 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP2 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 2\n    },\n    "[VLDB Function].[Zero Check]": {\n      "name": "Zero Check",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Zero Check",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Do nothing",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\\n                    (sum(a21.REG_SLS_DLR) / sum(a21.PML_SLS_DLR)) PCT_CONT\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    (a23.REG_SLS_DLR / a21.PML_SLS_DLR) DIV_METRIC,\\n                    a21.PCT_CONT PCT_CONT\\n                    from TEMP2 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP1 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Check for zero in all queries",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\\n                    (sum(a21.REG_SLS_DLR) / (CASE\\n                    sum(a21.PML_SLS_DLR) WHEN 0 THEN NULL ELSE sum(a21.PML_SLS_DLR) END)) PCT_CONT\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    VALUE((a23. REG_SLS_DLR 1 / (CASE a21.PML_SLS_DLR, WHEN 0 THEN NULL ELSE a21.PML_SLS_DLR,)), 0) DIV_METRIC,\\n                    a21.PCT_CONT PCT_CONT\\n                    from TEMP2 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP1 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Check for zero in temp table join only",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\\n                    (sum(a21.REG_SLS_DLR) / sum(a21.PML_SLS_DLR)) PCT_CONT\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    VALUE((a23.REG_SLS_DLR / (CASE a21.PML_SLS_DLR,WHEN 0 THEN NULL ELSE a21.PML_SLS_DLR,END)), 0) DIV_METRIC,\\n                    a21.PCT_CONT PCT_CONT\\n                    from TEMP2 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP1 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 1\n    },\n    "[VLDB Select].[Integer Constant In Metric]": {\n      "name": "Integer Constant In Metric",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Integer Constant In Metric",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Add \'.0\' to integer constants in metric expressions.",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Do not add \'.0\' to integer constants in metric expressions.",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Metric Join Type]": {\n      "name": "Metric Join Type",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Metric Join Type",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Inner Join",\n          "sqlPreview": "All metrics are created with an inner join by default."\n        },\n        {\n          "value": "Outer Join",\n          "sqlPreview": "All metrics are created with an outer by default."\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Smart Metric Transformation]": {\n      "name": "Smart Metric Transformation",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Smart Metric Transformation",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "False",\n          "sqlPreview": "\\n                \\n                    False means Difference/Percentage will be evaluated firstly:\\n                    Smart Metric M3 = Greatest(Metric1, Metric2)\\n                    1. Transform(M3) = Greatest(Last Year\'s Metric1, Last Year\'s Metric2)\\n                    2. Difference(M3) = Greatest((Metric1 - LY\'s Metric1), (Metric2 - LY\'s Metric2))\\n                    3. Variance Percentage(M3) = Greatest((Metric1 - LY\'s Metric1)/LY\'s Metric1, (Metric2 - LY\'s Metric2)/LY\'s Metric2)\\n                \\n            "\n        },\n        {\n          "value": "True",\n          "sqlPreview": "\\n                \\n                    True means smart metric will be evaluated firstly:\\n                    Smart Metric M3 = Greatest(Metric1, Metric2)\\n                    1. Transform(M3) = Greatest(Last Year\'s Metric1, Last Year\'s Metric2)\\n                    2. Difference(M3) = M3 - Transform(M3)\\n                    3. Variance Percentage(M3) = (M3 - Transform(M3)) / Transform(M3)\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Transformable AggMetric]": {\n      "name": "Transformable AggMetric",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Transformable AggMetric",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "False",\n          "sqlPreview": "SQL BLOCK"\n        },\n        {\n          "value": "True",\n          "sqlPreview": "SQL BLOCK"\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Use Subtotal Dimty for Dynamic Aggregation]": {\n      "name": "Use Subtotal Dimty for Dynamic Aggregation",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 3,\n      "displayType": "options",\n      "displayName": "Subtotal Dimensionality Use",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Use only the grouping property of a level metric for dynamic aggregation ",\n          "sqlPreview": "SQL BLOCK"\n        },\n        {\n          "value": "Use only the grouping property of a level subtotal for dynamic aggregation",\n          "sqlPreview": "SQL BLOCK"\n        },\n        {\n          "value": "Use both the grouping and filtering property of a level metric for dynamic aggregation",\n          "sqlPreview": "SQL BLOCK"\n        },\n        {\n          "value": "Use both the grouping and filtering property of a level subtotal for dynamic aggregation",\n          "sqlPreview": "SQL BLOCK"\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Report].[Count Distinct with Partitions]": {\n      "name": "Count Distinct with Partitions",\n      "groupId": 4,\n      "groupName": "Query Optimizations",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Count distinct elements from each partition",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Disable",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Enable",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n      "name": "NullCheckingForAnalyticalEngine",\n      "groupId": 9,\n      "groupName": "Analytical Engine",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Null checking for Analytical Engine",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Scalar calculations return NULL if any operand is NULL; aggregation calculations ignore NULLs.",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Scalar and aggregation calculations treat NULLs as zero (Deprecated)",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Scalar calculations treat NULLs as zero; aggregation calculations ignore NULLs (metadata upgrade required for this to take effect for versions 10.7 or later).",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 2\n    },\n    "[AnalyticalEngineProperties].[SubtotalDimensionalityAware]": {\n      "name": "SubtotalDimensionalityAware",\n      "groupId": 9,\n      "groupName": "Analytical Engine",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Subtotal Dimensionality Aware",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "False",\n          "sqlPreview": ""\n        },\n        {\n          "value": "True",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "boolean",\n      "defaultValue": true\n    },\n    "[VLDB Select].[No Nulls In Metric For Cube Reuse]": {\n      "name": "No Nulls In Metric For Cube Reuse",\n      "groupId": 11,\n      "groupName": "Dynamic Sourcing",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Metric Validation",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Enable dynamic sourcing for metric",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Disable dynamic sourcing for metric",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    }\n  },\n  "sqlDynamicPreview": "[VLDB Report].[Session Based PreStatement]\\n[VLDB Report].[Report PreStatement 1]\\n[VLDB Report].[Report PreStatement 2]\\n[VLDB Report].[Report PreStatement 3]\\n[VLDB Report].[Report PreStatement 4]\\n[VLDB Report].[Report PreStatement 5]\\n\\n[VLDB Create].[Table PreStatement 1]\\n[VLDB Create].[Table PreStatement 2]\\n[VLDB Create].[Table PreStatement 3]\\n[VLDB Create].[Table PreStatement 4]\\n[VLDB Create].[Table PreStatement 5]\\n\\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\\nFLOAT) [VLDB Create].[Table Space]\\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\\n\\n[VLDB Insert].[Insert PreStatement 1]\\n[VLDB Insert].[Insert PreStatement 2]\\n[VLDB Insert].[Insert PreStatement 3]\\n[VLDB Insert].[Insert PreStatement 4]\\n[VLDB Insert].[Insert PreStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert MidStatement 1]\\n[VLDB Insert].[Insert MidStatement 2]\\n[VLDB Insert].[Insert MidStatement 3]\\n[VLDB Insert].[Insert MidStatement 4]\\n[VLDB Insert].[Insert MidStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert PostStatement 1]\\n[VLDB Insert].[Insert PostStatement 2]\\n[VLDB Insert].[Insert PostStatement 3]\\n[VLDB Insert].[Insert PostStatement 4]\\n[VLDB Insert].[Insert PostStatement 5]\\n\\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\\n\\n[VLDB Create].[Table PostStatement 1]\\n[VLDB Create].[Table PostStatement 2]\\n[VLDB Create].[Table PostStatement 3]\\n[VLDB Create].[Table PostStatement 4]\\n[VLDB Create].[Table PostStatement 5]\\n\\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\\n\\n[VLDB Report].[Report PostStatement 1]\\n[VLDB Report].[Report PostStatement 2]\\n[VLDB Report].[Report PostStatement 3]\\n[VLDB Report].[Report PostStatement 4]\\n[VLDB Report].[Report PostStatement 5]\\n[Drop Table PreStatement 1]\\n\\ndrop table TABLENAME\\n\\n[Drop Table PostStatement 1]\\n[VLDB Drop].[Post Cleanup Statement 1]\\n[VLDB Drop].[Post Cleanup Statement 2]\\n[VLDB Drop].[Post Cleanup Statement 3]\\n[VLDB Drop].[Post Cleanup Statement 4]\\n[VLDB Drop].[Post Cleanup Statement 5]\\n[VLDB Report].[Session Based PostStatement]"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 200 (The list of applicable properties for given metric is returned successfully.)"})]})}function S(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);