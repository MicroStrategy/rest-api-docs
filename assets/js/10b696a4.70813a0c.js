"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6714],{25659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>S,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(74848),r=n(28453);const o={title:"Get applicable properties for an attribute",sidebar_label:"Get applicable properties for an attribute",description:"Get applicable properties for an attribute."},s=void 0,i={id:"common-workflows/modeling/manage-attribute-objects/get-attribute-applicable-advanced-properties",title:"Get applicable properties for an attribute",description:"Get applicable properties for an attribute.",source:"@site/docs/common-workflows/modeling/manage-attribute-objects/get-attribute-applicable-advanced-properties.md",sourceDirName:"common-workflows/modeling/manage-attribute-objects",slug:"/common-workflows/modeling/manage-attribute-objects/get-attribute-applicable-advanced-properties",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/get-attribute-applicable-advanced-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-objects/get-attribute-applicable-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Get applicable properties for an attribute",sidebar_label:"Get applicable properties for an attribute",description:"Get applicable properties for an attribute."},sidebar:"tutorialSidebar",previous:{title:"Update an attribute's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/update-an-attributes-definition"},next:{title:"Get attribute definition and advanced properties",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties"}},l={},p=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{since:"2021 Update 9"}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["You can try this workflow at ",(0,a.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-df3dd3da-b225-4637-93dd-c41579ce1074?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(t.p,{children:'This workflow sample demonstrates how to retrieve the applicable properties of an attribute using the Modeling service. Applicable properties returns the list of VLDB Properties based on attribute "type" which means that the result should be the same for all the attribute objects.'}),"\n",(0,a.jsxs)(t.p,{children:["To get the applicable properties of the ",(0,a.jsx)(t.code,{children:"Age Range"})," attribute, the object ID is ",(0,a.jsx)(t.code,{children:"5603951E4FE1BC04A44E44B85BBB8ED2"}),"."]}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.p,{children:["Get the authorization token to execute the request with ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(t.p,{children:["Get the project ID with ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsxs)(t.p,{children:["Retrieve the applicable properties with ",(0,a.jsx)(t.code,{children:"GET /api/model/attributes/{attributeId}/applicableAdvancedProperties"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "hs8n6ji36i18oo77g92mc24j2k"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,a.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/5603951E4FE1BC04A44E44B85BBB8ED2/applicableAdvancedProperties" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: hs8n6ji36i18oo77g92mc24j2k" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(t.p,{children:"You can view the applicable properties in the body of the response."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "propertyCount": 4,\n  "applicableProperties": {\n    "[VLDB Select].[Incomplete Lookup Table]": {\n      "name": "Incomplete Lookup Table",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 3,\n      "displayType": "options",\n      "displayName": "Preserve all final pass result elements",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Preserve common elements of final pass result table and lookup/relationship table.",\n          "sqlPreview": "\\n                \\n                    create table ZZT18010069SP00 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    sum(a21.COST_AMT) METRIQUE14\\n                    from COST_CLASS_STORE a21,\\n                    DSSADMIN.LOOKUP_STORE a22\\n                    where a21.STORE_NBR = a22.STORE_NBR\\n                \\n                \\n                    select a21.STORE_NBR STORE_NBR,\\n                    a25.STORE_DESC STORE_DESC,\\n                    a25.STATE_NBR STATE_NBR,\\n                    a26.STATE_DESC STATE_DESC,\\n                    a22.METRIQUE14 WJXBFS1\\n                    from ZZT18010069OJ03 a21,\\n                    ZZT18010069SP00 a22,\\n                    DSSADMIN.LOOKUP_STORE a25,\\n                    DSSADMIN.LOOKUP_STATE a26\\n                    where a21.STORE_NBR = a22.STORE_NBR (+) and\\n                    a21.STORE_NBR = a25.STORE_NBR and\\n                    a25.STATE_NBR = a26.STATE_NBR\\n                \\n            "\n        },\n        {\n          "value": "Preserve all final result pass elements.",\n          "sqlPreview": "\\n                \\n                    create table ZZT18010069SP00 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    sum(a21.COST_AMT) METRIQUE14\\n                    from COST_CLASS_STORE a21,\\n                    DSSADMIN.LOOKUP_STORE a22\\n                    where a21.STORE_NBR = a22.STORE_NBR (+)\\n                \\n                \\n                    select a21.STORE_NBR STORE_NBR,\\n                    a25.STORE_DESC STORE_DESC,\\n                    a25.STATE_NBR STATE_NBR,\\n                    a26.STATE_DESC STATE_DESC,\\n                    a22.METRIQUE14 WJXBFS1\\n                    from ZZT18010069OJ03 a21,\\n                    ZZT18010069SP00 a22,\\n                    DSSADMIN.LOOKUP_STORE a25,\\n                    DSSADMIN.LOOKUP_STATE a26\\n                    where a21.STORE_NBR = a22.STORE_NBR (+) and\\n                    a21.STORE_NBR = a25.STORE_NBR (+) and\\n                    a25.STATE_NBR = a26.STATE_NBR (+)\\n                \\n            "\n        },\n        {\n          "value": "Preserve all elements of final pass result table with respect to lookup table but not relationship table.",\n          "sqlPreview": "\\n                \\n                    create table ZZT18010069SP00 as\\n                    select a21.STORE_NBR STORE_NBR,\\n                    sum(a21.COST_AMT) METRIQUE14\\n                    from COST_CLASS_STORE a21,\\n                    DSSADMIN.LOOKUP_STORE a22\\n                    where a21.STORE_NBR = a22.STORE_NBR\\n                \\n                \\n                    select a21.STORE_NBR STORE_NBR,\\n                    a25.STORE_DESC STORE_DESC,\\n                    a25.STATE_NBR STATE_NBR,\\n                    a26.STATE_DESC STATE_DESC,\\n                    a22.METRIQUE14 WJXBFS1\\n                    from ZZT18010069OJ03 a21,\\n                    ZZT18010069SP00 a22,\\n                    DSSADMIN.LOOKUP_STORE a25,\\n                    DSSADMIN.LOOKUP_STATE a26\\n                    where a21.STORE_NBR = a22.STORE_NBR (+) and\\n                    a21.STORE_NBR = a25.STORE_NBR (+) and\\n                    a25.STATE_NBR = a26.STATE_NBR (+)\\n                \\n            "\n        },\n        {\n          "value": "Do not listen to per report level setting, preserve elements of final pass according to the setting at attribute level. If this choice is selected at attribute level, it will be treated as preserve common elements (i.e. choice 1).",\n          "sqlPreview": "\\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Create].[Attribute ID Constraint]": {\n      "name": "Attribute ID Constraint",\n      "groupId": 5,\n      "groupName": "Tables",\n      "displayType": "one_line_text_box",\n      "displayName": "Attribute ID Constraint",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "",\n          "sqlPreview": "SQL BLOCK"\n        }\n      ],\n      "type": "string",\n      "defaultValue": ""\n    },\n    "[VLDB Select].[Do Case Insensitive Comparison for Strings in Filters]": {\n      "name": "Do Case Insensitive Comparison for Strings in Filters",\n      "groupId": 11,\n      "groupName": "Dynamic Sourcing",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "String Comparison Behavior",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Use case insensitive string comparison with Dynamic Sourcing",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Do not allow any string comparison with Dynamic Sourcing",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[No Nulls All In Lookup In Attribute For Cube Reuse]": {\n      "name": "No Nulls All In Lookup In Attribute For Cube Reuse",\n      "groupId": 11,\n      "groupName": "Dynamic Sourcing",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Attribute Validation",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Attribute columns in fact tables and lookup/relationship tables do not contain NULLs and all attribute elements in fact tables are present in lookup/relationship tables",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Attribute columns in fact tables or lookup/relationship tables may contain NULLs and/or some attribute elements in fact tables are not present in lookup/relationship tables",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    }\n  },\n  "sqlDynamicPreview": "[VLDB Report].[Session Based PreStatement]\\n[VLDB Report].[Report PreStatement 1]\\n[VLDB Report].[Report PreStatement 2]\\n[VLDB Report].[Report PreStatement 3]\\n[VLDB Report].[Report PreStatement 4]\\n[VLDB Report].[Report PreStatement 5]\\n\\n[VLDB Create].[Table PreStatement 1]\\n[VLDB Create].[Table PreStatement 2]\\n[VLDB Create].[Table PreStatement 3]\\n[VLDB Create].[Table PreStatement 4]\\n[VLDB Create].[Table PreStatement 5]\\n\\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\\nFLOAT) [VLDB Create].[Table Space]\\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\\n\\n[VLDB Insert].[Insert PreStatement 1]\\n[VLDB Insert].[Insert PreStatement 2]\\n[VLDB Insert].[Insert PreStatement 3]\\n[VLDB Insert].[Insert PreStatement 4]\\n[VLDB Insert].[Insert PreStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert MidStatement 1]\\n[VLDB Insert].[Insert MidStatement 2]\\n[VLDB Insert].[Insert MidStatement 3]\\n[VLDB Insert].[Insert MidStatement 4]\\n[VLDB Insert].[Insert MidStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert PostStatement 1]\\n[VLDB Insert].[Insert PostStatement 2]\\n[VLDB Insert].[Insert PostStatement 3]\\n[VLDB Insert].[Insert PostStatement 4]\\n[VLDB Insert].[Insert PostStatement 5]\\n\\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\\n\\n[VLDB Create].[Table PostStatement 1]\\n[VLDB Create].[Table PostStatement 2]\\n[VLDB Create].[Table PostStatement 3]\\n[VLDB Create].[Table PostStatement 4]\\n[VLDB Create].[Table PostStatement 5]\\n\\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\\n\\n[VLDB Report].[Report PostStatement 1]\\n[VLDB Report].[Report PostStatement 2]\\n[VLDB Report].[Report PostStatement 3]\\n[VLDB Report].[Report PostStatement 4]\\n[VLDB Report].[Report PostStatement 5]\\n[Drop Table PreStatement 1]\\n\\ndrop table TABLENAME\\n\\n[Drop Table PostStatement 1]\\n[VLDB Drop].[Post Cleanup Statement 1]\\n[VLDB Drop].[Post Cleanup Statement 2]\\n[VLDB Drop].[Post Cleanup Statement 3]\\n[VLDB Drop].[Post Cleanup Statement 4]\\n[VLDB Drop].[Post Cleanup Statement 5]\\n[VLDB Report].[Session Based PostStatement]"\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Response Code: 200 (The applicable properties of an attribute were returned successfully.)"})]})}function S(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);