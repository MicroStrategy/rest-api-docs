"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4071],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return T}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),T=a,d=u["".concat(s,".").concat(T)]||u[T]||m[T]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function T(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3901:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return D},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r,a=n(3117),o=n(102),i=(n(7294),n(3905)),p=["components"],s={title:"Retrieve applicable properties of a report",description:"This workflow sample demonstrates how to retrieve applicable properties of a report using REST APIs."},l=void 0,c={unversionedId:"common-workflows/analytics/manage-reports/manage-report-objects/retrieve-applicable-properties-of-a-report",id:"common-workflows/analytics/manage-reports/manage-report-objects/retrieve-applicable-properties-of-a-report",title:"Retrieve applicable properties of a report",description:"This workflow sample demonstrates how to retrieve applicable properties of a report using REST APIs.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-applicable-properties-of-a-report.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-applicable-properties-of-a-report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-applicable-properties-of-a-report",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-applicable-properties-of-a-report.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Retrieve applicable properties of a report",description:"This workflow sample demonstrates how to retrieve applicable properties of a report using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Put a derived element in report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/put-a-derived-element-in-report"},next:{title:"Manage page-by information",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-page-by-information"}},m={},u=[{value:"Retrieve applicable properties of a report directly",id:"retrieve-applicable-properties-of-a-report-directly",level:2},{value:"Retrieve applicable properties of a report within report instance",id:"retrieve-applicable-properties-of-a-report-within-report-instance",level:2},{value:"1. Create a report instance",id:"1-create-a-report-instance",level:3},{value:"2. Get applicable properties",id:"2-get-applicable-properties",level:3},{value:"3. Delete the report instance",id:"3-delete-the-report-instance",level:3}],T=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),d={toc:u};function D(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(T,{since:"2021 Update 7",mdxType:"Available"}),(0,i.kt)("p",null,"You can use REST\xa0APIs to retrieve all the applicable properties of a report through the Modeling service. The workflow includes the following REST APIs requests."),(0,i.kt)("p",null,"The report object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"E472644E4239AD7EFDBD869600C93E4D"),'. The report is in the project "MicroStrategy Tutorial", and the project ID is ',(0,i.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,i.kt)("h2",{id:"retrieve-applicable-properties-of-a-report-directly"},"Retrieve applicable properties of a report directly"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/get_api_model_reports__reportId__applicableVldbProperties"},"GET/api/model/reports/{reportId}/applicableVldbProperties")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,i.kt)("p",null,"Sample Request Body:\xa0Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/applicableVldbProperties' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "propertyCount": 175,\n  "applicableProperties": {\n    "[VLDB Select].[Allow Cartesian Join]": {\n      "name": "Allow Cartesian Join",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Cartesian Join Governing",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Choosing this option keeps the backward compatibility with MicroStrategy 2019 where SQL queries are governed by \\"Cartesian Join Warning\\" VLDB setting.",\n          "sqlPreview": "OBSOLETE - Keep backward compatibility with MicroStrategy 2019."\n        },\n        {\n          "value": "Cancel execution of cartesian join for SQL, MDX, In-Memory queries.",\n          "sqlPreview": "<font face=\\"Times Roman\\" size=\\"3\\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\\"  target=\\"_blank\\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option disallows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \\"Cartesian Join Warning\\" VLDB setting.</dt></font>"\n        },\n        {\n          "value": "Execute cartesian join for SQL, MDX, In-Memory queries.",\n          "sqlPreview": "<font face=\\"Times Roman\\" size=\\"3\\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\\"  target=\\"_blank\\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option allows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \\"Cartesian Join Warning\\" VLDB setting.</dt></font>"\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Base Table Join for Template]": {\n      "name": "Base Table Join for Template",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Base Table Join for Template",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Temp table join",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    a21.MARKET_NBR MARKET_NBR,\\n                    sum(a21.COST_AMT) WJXBFS1\\n                    from COST_MARKET_DEP a21\\n                    join LOOKUP_DAY a22\\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\\n                    where a22.MONTH_ID = 199411\\n                    group by a21.DEPARTMENT_NBR, a21.MARKET_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    a21.MARKET_NBR MARKET_NBR,\\n                    sum(a21.TOT_SLS_DLR) WJXBFS1,\\n                    sum(a21.TOT_SLS_DLR) WJXBFS2\\n                    from MARKET_DEPARTMENT a21\\n                    join LOOKUP_DAY a22\\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\\n                    where a22.MONTH_ID = 199411\\n                    group by a21.DEPARTMENT_NBR,\\n                    a21.MARKET_NBR\\n                    \\n                    select a21.MARKET_NBR MARKET_NBR,\\n                    a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    ((a22.WJXBFS1 - a21.WJXBFS1) / a22.WJXBFS2) WJXBFS1\\n                    from TEMP1 a21\\n                    join TEMP2 a22\\n                    on (a21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\\n                    a21.MARKET_NBR = a22.MARKET_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Fact table join",\n          "sqlPreview": "\\n                \\n                    select a21.MARKET_NBR MARKET_NBR,\\n                    a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    ((sum(a22.TOT_SLS_DLR) - sum(a21.COST_AMT)) / sum(a22.TOT_SLS_DLR)) WJXBFS1\\n                    from COST_MARKET_DEP a21\\n                    join MARKET_DEPARTMENT a22\\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT and\\n                    a21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\\n                    a21.MARKET_NBR = a22.MARKET_NBR)\\n                    join LOOKUP_DAY a23\\n                    on (a21.CUR_TRN_DT = a23.CUR_TRN_DT)\\n                    where a23.MONTH_ID = 199411\\n                    group by a21.MARKET_NBR,\\n                    a21.DEPARTMENT_NBR\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Cross Join Order]": {\n      "name": "Cross Join Order",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Cartesian Join Evaluation",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Do not reevaluate cartesian joins.",\n          "sqlPreview": "\\n                \\n                    select a12.ATTR1_ID ATTR1_ID,\\n                    max(a12.ATTR1_DESC) ATTR1_DESC,\\n                    a13.ATTR2_ID ATTR2_ID,\\n                    max(a13.ATTR2_DESC) ATTR2_DESC,\\n                    count(a11.FACT_ID) METRIC\\n                    from FACTTABLE a11\\n                    cross join LU_TABLE1 a12\\n                    join LU_TABLE2 a13\\n                    on (a11.ATTR3_ID = a13.ATTR3_ID and\\n                    a12.ATTR1_ID = a13.ATTR1_CD)\\n                    group by a12.ATTR1_ID,\\n                    a13.ATTR2_ID\\n                \\n            "\n        },\n        {\n          "value": "Reevaluate cartesian joins.",\n          "sqlPreview": "\\n                \\n                    select a12.ATTR1_ID ATTR1_ID,\\n                    max(a12.ATTR1_DESC) ATTR1_DESC,\\n                    a13.ATTR2_ID ATTR2_ID,\\n                    max(a13.ATTR2_DESC) ATTR2_DESC,\\n                    count(a11.FACT_ID) METRIC\\n                    from FACTTABLE a11\\n                    join LU_TABLE2 a13\\n                    on (a11.ATTR3_ID = a13.ATTR3_ID)\\n                    join LU_TABLE1 a12\\n                    on (a12.ATTR1_ID = a13.ATTR1_CD)\\n                    group by a12.ATTR1_ID,\\n                    a13.ATTR2_ID\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    // Here we omit some applicableProperties to shorten the response body\n    // You can send the request in practice to get a full list of the applicableProperties\n    "[VLDB Function].[Missing Display]": {\n      "name": "Missing Display",\n      "groupId": 15,\n      "groupName": "Null Display",\n      "displayType": "one_line_text_box",\n      "displayName": "Missing object null display",\n      "showSqlPreview": false,\n      "options": [],\n      "type": "string",\n      "defaultValue": ""\n    },\n    "[VLDB Function].[Null Display]": {\n      "name": "Null Display",\n      "groupId": 15,\n      "groupName": "Null Display",\n      "displayType": "n_text_box",\n      "displayName": "Null Display for Warehouse, Cross-tabulation",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Null Display for Warehouse",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Null Display for Cross-tabulation",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "string",\n      "defaultValue": "",\n      "valueSeparator": ","\n    }\n  },\n  "sqlDynamicPreview": "[VLDB Report].[Report PreStatement 1]\\n[VLDB Report].[Report PreStatement 2]\\n[VLDB Report].[Report PreStatement 3]\\n[VLDB Report].[Report PreStatement 4]\\n[VLDB Report].[Report PreStatement 5]\\n\\n[VLDB Create].[Table PreStatement 1]\\n[VLDB Create].[Table PreStatement 2]\\n[VLDB Create].[Table PreStatement 3]\\n[VLDB Create].[Table PreStatement 4]\\n[VLDB Create].[Table PreStatement 5]\\n\\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\\nFLOAT) [VLDB Create].[Table Space]\\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\\n\\n[VLDB Insert].[Insert PreStatement 1]\\n[VLDB Insert].[Insert PreStatement 2]\\n[VLDB Insert].[Insert PreStatement 3]\\n[VLDB Insert].[Insert PreStatement 4]\\n[VLDB Insert].[Insert PreStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert MidStatement 1]\\n[VLDB Insert].[Insert MidStatement 2]\\n[VLDB Insert].[Insert MidStatement 3]\\n[VLDB Insert].[Insert MidStatement 4]\\n[VLDB Insert].[Insert MidStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert PostStatement 1]\\n[VLDB Insert].[Insert PostStatement 2]\\n[VLDB Insert].[Insert PostStatement 3]\\n[VLDB Insert].[Insert PostStatement 4]\\n[VLDB Insert].[Insert PostStatement 5]\\n\\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\\n\\n[VLDB Create].[Table PostStatement 1]\\n[VLDB Create].[Table PostStatement 2]\\n[VLDB Create].[Table PostStatement 3]\\n[VLDB Create].[Table PostStatement 4]\\n[VLDB Create].[Table PostStatement 5]\\n\\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\\n\\n[VLDB Report].[Report PostStatement 1]\\n[VLDB Report].[Report PostStatement 2]\\n[VLDB Report].[Report PostStatement 3]\\n[VLDB Report].[Report PostStatement 4]\\n[VLDB Report].[Report PostStatement 5]\\n[Drop Table PreStatement 1]\\n\\ndrop table TABLENAME\\n\\n[Drop Table PostStatement 1]\\n[VLDB Drop].[Post Cleanup Statement 1]\\n[VLDB Drop].[Post Cleanup Statement 2]\\n[VLDB Drop].[Post Cleanup Statement 3]\\n[VLDB Drop].[Post Cleanup Statement 4]\\n[VLDB Drop].[Post Cleanup Statement 5]"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 200 (The list of applicable properties for the given report is returned successfully.)"),(0,i.kt)("h2",{id:"retrieve-applicable-properties-of-a-report-within-report-instance"},"Retrieve applicable properties of a report within report instance"),(0,i.kt)("h3",{id:"1-create-a-report-instance"},"1. Create a report instance"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance"},"POST /api/model/reports/{reportId}/instances")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,i.kt)("p",null,"Sample Request Body:\xa0Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 201 (A new report instance is created successfully.)"),(0,i.kt)("h3",{id:"2-get-applicable-properties"},"2. Get applicable properties"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/get_api_model_reports__reportId__applicableVldbProperties"},"Get /api/model/reports/{reportId}/applicableVldbProperties")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/applicableVldbProperties' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,i.kt)("p",null,"Sample Response Body: See Workflow 1"),(0,i.kt)("p",null,"Response Code: 200 (The list of applicable properties for the given report is returned successfully.)"),(0,i.kt)("h3",{id:"3-delete-the-report-instance"},"3. Delete the report instance"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance"},"DELETE /api/model/reports/{reportId}/instances")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,i.kt)("p",null,"Sample Request Body:\xa0Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Sample Response Code: 204 (The report instance has been deleted successfully.)"))}D.isMDXComponent=!0}}]);