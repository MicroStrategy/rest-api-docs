"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9846],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},S=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),S=p(t),u=r,R=S["".concat(l,".").concat(u)]||S[u]||m[u]||i;return t?a.createElement(R,o(o({ref:n},c),{},{components:t})):a.createElement(R,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=S;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}S.displayName="MDXCreateElement"},2175:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return L},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return S}});var a,r=t(83117),i=t(80102),o=(t(67294),t(3905)),s=["components"],l={title:"Retrieve applicable properties of a metric",sidebar_label:"Retrieve a metric's applicable properties",description:"This topic covers the workflow for retrieving a metric's applicable properties."},p=void 0,c={unversionedId:"common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties",id:"common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties",title:"Retrieve applicable properties of a metric",description:"This topic covers the workflow for retrieving a metric's applicable properties.",source:"@site/docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties.md",sourceDirName:"common-workflows/modeling/manage-metric-objects",slug:"/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Retrieve applicable properties of a metric",sidebar_label:"Retrieve a metric's applicable properties",description:"This topic covers the workflow for retrieving a metric's applicable properties."},sidebar:"tutorialSidebar",previous:{title:"Update a metric's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset"},next:{title:"Manage prompt objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/"}},m={},S=[{value:"Retrieve a metric&#39;s applicable properties",id:"retrieve-a-metrics-applicable-properties",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),R={toc:S};function L(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},R,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 9",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try this workflow with ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c9639bc3-853f-4746-94b6-528b5aed21a5?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This topic covers the workflow to retrieve a metric's applicable properties."),(0,o.kt)("p",null,"Get the applicable properties of the ",(0,o.kt)("inlineCode",{parentName:"p"},'\u201cCost Comparison"')," metric object. The object ID of the metric is ",(0,o.kt)("inlineCode",{parentName:"p"},"28F95FDC4EF1CA5746F8E6971A144BED"),"\u202fin the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Retrieve the applicable properties of the specified metric within a changeset with ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/model/metrics/{metricId}/applicableAdvancedProperties"),"."),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,o.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,o.kt)("td",{parentName:"tr",align:null},"The project ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,o.kt)("td",{parentName:"tr",align:null},"The changeset ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"showSqlPreview"),(0,o.kt)("td",{parentName:"tr",align:null},"A boolean value used to determine whether to show dynamic SQL preview or not. The parameter is set to true by default.")))),(0,o.kt)("h2",{id:"retrieve-a-metrics-applicable-properties"},"Retrieve a metric's applicable properties"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/metrics/28F95FDC4EF1CA5746F8E6971A144BED/applicableAdvancedProperties" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "propertyCount": 11,\n  "applicableProperties": {\n    "[VLDB Function].[Null Check]": {\n      "name": "Null Check",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Null Check",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Do nothing",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    (sum(a21.REG_SLS_DLR) + sum(a21.PML_SLS_DLR)) TOT_SLS,\\n                    sum(a21.PML_SLS_DLR) PRM_DLR\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    a21.TOT_SLS TOT_SLS,\\n                    (a23.REG_SLS_DLR + a21. PRM_DLR) TOT_CALC\\n                    from TEMP1 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP2 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Check for NULL in all queries",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    (VALUE(sum(a21.REG_SLS_DLR), 0) + VALUE(sum(a21.PML_SLS_DLR), 0)) TOT_SLS_DLR,\\n                    sum(a21.PML_SLS_DLR) PRM_DLR\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    a21.WJXBFS1 WJXBFS1,\\n                    (VALUE(a23.REG_SLS_DLR, 0) + VALUE(a21.PRM_DLR, 0)) TOT_CALC\\n                    from TEMP1 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP2 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Check for NULL in temp table join only",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    (sum(a21.REG_SLS_DLR) + sum(a21.PML_SLS_DLR)) TOT_SLS_DLR,\\n                    sum(a21.PML_SLS_DLR) PRM_DLR\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    create table as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    a21.WJXBFS1 WJXBFS1,\\n                    (VALUE(a23.REG_SLS_DLR, 0) + VALUE(a21.PRM_DLR, 0)) TOT_CALC\\n                    from TEMP1 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP2 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 2\n    },\n    "[VLDB Function].[Zero Check]": {\n      "name": "Zero Check",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Zero Check",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Do nothing",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\\n                    (sum(a21.REG_SLS_DLR) / sum(a21.PML_SLS_DLR)) PCT_CONT\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    (a23.REG_SLS_DLR / a21.PML_SLS_DLR) DIV_METRIC,\\n                    a21.PCT_CONT PCT_CONT\\n                    from TEMP2 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP1 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Check for zero in all queries",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\\n                    (sum(a21.REG_SLS_DLR) / (CASE\\n                    sum(a21.PML_SLS_DLR) WHEN 0 THEN NULL ELSE sum(a21.PML_SLS_DLR) END)) PCT_CONT\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    VALUE((a23. REG_SLS_DLR 1 / (CASE a21.PML_SLS_DLR, WHEN 0 THEN NULL ELSE a21.PML_SLS_DLR,)), 0) DIV_METRIC,\\n                    a21.PCT_CONT PCT_CONT\\n                    from TEMP2 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP1 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Check for zero in temp table join only",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.REGION_NBR REGION_NBR,\\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\\n                    from REGION_DIVISION a21\\n                    group by a21.REGION_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\\n                    (sum(a21.REG_SLS_DLR) / sum(a21.PML_SLS_DLR)) PCT_CONT\\n                    from STORE_DIVISION a21\\n                    group by a21.STORE_NBR\\n                    \\n                    select distinct a22.STORE_NBR STORE_NBR,\\n                    a22.STORE_DESC STORE_DESC,\\n                    VALUE((a23.REG_SLS_DLR / (CASE a21.PML_SLS_DLR,WHEN 0 THEN NULL ELSE a21.PML_SLS_DLR,END)), 0) DIV_METRIC,\\n                    a21.PCT_CONT PCT_CONT\\n                    from TEMP2 a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    join TEMP1 a23\\n                    on (a22.REGION_NBR = a23.REGION_NBR)\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 1\n    },\n    "[VLDB Select].[Integer Constant In Metric]": {\n      "name": "Integer Constant In Metric",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Integer Constant In Metric",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Add \'.0\' to integer constants in metric expressions.",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Do not add \'.0\' to integer constants in metric expressions.",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Metric Join Type]": {\n      "name": "Metric Join Type",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Metric Join Type",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Inner Join",\n          "sqlPreview": "All metrics are created with an inner join by default."\n        },\n        {\n          "value": "Outer Join",\n          "sqlPreview": "All metrics are created with an outer by default."\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Smart Metric Transformation]": {\n      "name": "Smart Metric Transformation",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Smart Metric Transformation",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "False",\n          "sqlPreview": "\\n                \\n                    False means Difference/Percentage will be evaluated firstly:\\n                    Smart Metric M3 = Greatest(Metric1, Metric2)\\n                    1. Transform(M3) = Greatest(Last Year\'s Metric1, Last Year\'s Metric2)\\n                    2. Difference(M3) = Greatest((Metric1 - LY\'s Metric1), (Metric2 - LY\'s Metric2))\\n                    3. Variance Percentage(M3) = Greatest((Metric1 - LY\'s Metric1)/LY\'s Metric1, (Metric2 - LY\'s Metric2)/LY\'s Metric2)\\n                \\n            "\n        },\n        {\n          "value": "True",\n          "sqlPreview": "\\n                \\n                    True means smart metric will be evaluated firstly:\\n                    Smart Metric M3 = Greatest(Metric1, Metric2)\\n                    1. Transform(M3) = Greatest(Last Year\'s Metric1, Last Year\'s Metric2)\\n                    2. Difference(M3) = M3 - Transform(M3)\\n                    3. Variance Percentage(M3) = (M3 - Transform(M3)) / Transform(M3)\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Transformable AggMetric]": {\n      "name": "Transformable AggMetric",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Transformable AggMetric",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "False",\n          "sqlPreview": "SQL BLOCK"\n        },\n        {\n          "value": "True",\n          "sqlPreview": "SQL BLOCK"\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Use Subtotal Dimty for Dynamic Aggregation]": {\n      "name": "Use Subtotal Dimty for Dynamic Aggregation",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 3,\n      "displayType": "options",\n      "displayName": "Subtotal Dimensionality Use",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Use only the grouping property of a level metric for dynamic aggregation ",\n          "sqlPreview": "SQL BLOCK"\n        },\n        {\n          "value": "Use only the grouping property of a level subtotal for dynamic aggregation",\n          "sqlPreview": "SQL BLOCK"\n        },\n        {\n          "value": "Use both the grouping and filtering property of a level metric for dynamic aggregation",\n          "sqlPreview": "SQL BLOCK"\n        },\n        {\n          "value": "Use both the grouping and filtering property of a level subtotal for dynamic aggregation",\n          "sqlPreview": "SQL BLOCK"\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Report].[Count Distinct with Partitions]": {\n      "name": "Count Distinct with Partitions",\n      "groupId": 4,\n      "groupName": "Query Optimizations",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Count distinct elements from each partition",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Disable",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Enable",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n      "name": "NullCheckingForAnalyticalEngine",\n      "groupId": 9,\n      "groupName": "Analytical Engine",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Null checking for Analytical Engine",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Scalar calculations return NULL if any operand is NULL; aggregation calculations ignore NULLs.",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Scalar and aggregation calculations treat NULLs as zero (Deprecated)",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Scalar calculations treat NULLs as zero; aggregation calculations ignore NULLs (metadata upgrade required for this to take effect for versions 10.7 or later).",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 2\n    },\n    "[AnalyticalEngineProperties].[SubtotalDimensionalityAware]": {\n      "name": "SubtotalDimensionalityAware",\n      "groupId": 9,\n      "groupName": "Analytical Engine",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Subtotal Dimensionality Aware",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "False",\n          "sqlPreview": ""\n        },\n        {\n          "value": "True",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "boolean",\n      "defaultValue": true\n    },\n    "[VLDB Select].[No Nulls In Metric For Cube Reuse]": {\n      "name": "No Nulls In Metric For Cube Reuse",\n      "groupId": 11,\n      "groupName": "Dynamic Sourcing",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Metric Validation",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Enable dynamic sourcing for metric",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Disable dynamic sourcing for metric",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    }\n  },\n  "sqlDynamicPreview": "[VLDB Report].[Session Based PreStatement]\\n[VLDB Report].[Report PreStatement 1]\\n[VLDB Report].[Report PreStatement 2]\\n[VLDB Report].[Report PreStatement 3]\\n[VLDB Report].[Report PreStatement 4]\\n[VLDB Report].[Report PreStatement 5]\\n\\n[VLDB Create].[Table PreStatement 1]\\n[VLDB Create].[Table PreStatement 2]\\n[VLDB Create].[Table PreStatement 3]\\n[VLDB Create].[Table PreStatement 4]\\n[VLDB Create].[Table PreStatement 5]\\n\\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\\nFLOAT) [VLDB Create].[Table Space]\\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\\n\\n[VLDB Insert].[Insert PreStatement 1]\\n[VLDB Insert].[Insert PreStatement 2]\\n[VLDB Insert].[Insert PreStatement 3]\\n[VLDB Insert].[Insert PreStatement 4]\\n[VLDB Insert].[Insert PreStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert MidStatement 1]\\n[VLDB Insert].[Insert MidStatement 2]\\n[VLDB Insert].[Insert MidStatement 3]\\n[VLDB Insert].[Insert MidStatement 4]\\n[VLDB Insert].[Insert MidStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert PostStatement 1]\\n[VLDB Insert].[Insert PostStatement 2]\\n[VLDB Insert].[Insert PostStatement 3]\\n[VLDB Insert].[Insert PostStatement 4]\\n[VLDB Insert].[Insert PostStatement 5]\\n\\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\\n\\n[VLDB Create].[Table PostStatement 1]\\n[VLDB Create].[Table PostStatement 2]\\n[VLDB Create].[Table PostStatement 3]\\n[VLDB Create].[Table PostStatement 4]\\n[VLDB Create].[Table PostStatement 5]\\n\\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\\n\\n[VLDB Report].[Report PostStatement 1]\\n[VLDB Report].[Report PostStatement 2]\\n[VLDB Report].[Report PostStatement 3]\\n[VLDB Report].[Report PostStatement 4]\\n[VLDB Report].[Report PostStatement 5]\\n[Drop Table PreStatement 1]\\n\\ndrop table TABLENAME\\n\\n[Drop Table PostStatement 1]\\n[VLDB Drop].[Post Cleanup Statement 1]\\n[VLDB Drop].[Post Cleanup Statement 2]\\n[VLDB Drop].[Post Cleanup Statement 3]\\n[VLDB Drop].[Post Cleanup Statement 4]\\n[VLDB Drop].[Post Cleanup Statement 5]\\n[VLDB Report].[Session Based PostStatement]"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (The list of applicable properties for given metric is returned successfully.)"))}L.isMDXComponent=!0}}]);