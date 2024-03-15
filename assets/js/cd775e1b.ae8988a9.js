"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3951],{62827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(74848),o=t(28453);const r={title:"Update SAP HANA parameters for an SAP HANA table with input parameters",sidebar_label:"Update SAP HANA parameters",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},i=void 0,s={id:"common-workflows/modeling/manage-table-objects/update-sap-hana-parameters",title:"Update SAP HANA parameters for an SAP HANA table with input parameters",description:"You can use REST APIs to update a prompt of a table through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Update SAP HANA parameters for an SAP HANA table with input parameters",sidebar_label:"Update SAP HANA parameters",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update a prompt of an SAP HANA table",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table"},next:{title:"Retrieve a partition mapping table's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition"}},l={},p=[{value:"Workflow",id:"workflow",level:2},{value:"Update an existing table using PATCH /api/model/tables/{tableId}",id:"update-an-existing-table-using-patch-apimodeltablestableid",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 6"}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table",children:"Update a prompt of an SAP HANA table with input parameters"}),", you can use REST APIs to update the table definition through the Modeling service starting in MicroStrategy 2021 Update 6."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["SAP HANA tables may have input parameters and one input parameter corresponds to one prompt. Thus, if you have an SAP HANA table with input parameters, you can follow this workflow to update the ",(0,a.jsx)(n.code,{children:"sapHanaParameters"})," field to replace the current prompts of the input parameters. For more information, see ",(0,a.jsx)(n.a,{href:"https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US",children:"KB48437: Support for SAP HANA calculation views with input parameters"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"workflow",children:"Workflow"}),"\n",(0,a.jsxs)(n.h3,{id:"update-an-existing-table-using-patch-apimodeltablestableid",children:["Update an existing table using ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails",children:"PATCH /api/model/tables/{tableId}"})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["The format of the list of SAP HANA parameters to update is shown below. The parameters' number and names must strictly tally the existing ones. Use ",(0,a.jsx)(n.code,{children:"GET /api/model/tables/{tableId}"})," and check the ",(0,a.jsx)(n.code,{children:"sapHanaParameters"})," field to view the list of existing prompts."]}),(0,a.jsx)(n.p,{children:"There are three types of update operations for you to choose:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Keep the current prompt by using the original prompt ID"}),"\n",(0,a.jsx)(n.li,{children:"Replace the current prompt with a standalone prompt by using the ID of a standalone prompt. The same prompt can be used by different SAP HANA parameters."}),"\n",(0,a.jsxs)(n.li,{children:["Reset the current prompt by using ",(0,a.jsx)(n.code,{children:'""'})," or null on the ",(0,a.jsx)(n.code,{children:"objectId"})," field"]}),"\n"]}),(0,a.jsx)(n.p,{children:"To replace the current prompt with a standalone prompt, the prompt must either be a value prompt or an attribute element prompt."})]}),"\n",(0,a.jsxs)(n.p,{children:["The object ID of the table is ",(0,a.jsx)(n.code,{children:"84AF2517E662417D9924FD678B44591A"}),". The table is in the MicroStrategy Tutorial Advanced project and its ID is ",(0,a.jsx)(n.code,{children:"6AB8DFFE4B99B7F6FB0E94AD176C4A28"}),". Different operations on different SAP HANA parameters are done:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Keep ",(0,a.jsx)(n.code,{children:"IP_Column_Hier_Value_Help"})," the same"]}),"\n",(0,a.jsxs)(n.li,{children:["Reset ",(0,a.jsx)(n.code,{children:"IP_Static_List"})]}),"\n",(0,a.jsxs)(n.li,{children:["Replace the current prompt of ",(0,a.jsx)(n.code,{children:"IP_Derived_From_Table"})," with a value prompt, ",(0,a.jsx)(n.code,{children:"B0489F7947A71A18EEAE03A65EE33137"})]}),"\n",(0,a.jsxs)(n.li,{children:["Replace current prompts of ",(0,a.jsx)(n.code,{children:"IP_Derived_From_Function"})," and ",(0,a.jsx)(n.code,{children:"IP_Using_Conversion_Function"})," with an attribute element prompt, ",(0,a.jsx)(n.code,{children:"38FB260A4099305D4220B485B927D84E"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "ffj9a71c85rrejbbakmvqrqn6d"\n"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "sapHanaParameters": [\n    {\n      "name": "IP_Column_Hier_Value_Help",\n      "prompt": {\n        "objectId": "AA1E3898B82D47329BC6BFB44379362D"\n      }\n    },\n    {\n      "name": "IP_Static_List",\n      "prompt": {\n        "objectId": ""\n      }\n    },\n    {\n      "name": "IP_Derived_From_Table",\n      "prompt": {\n        "objectId": "B0489F7947A71A18EEAE03A65EE33137"\n      }\n    },\n    {\n      "name": "IP_Derived_From_Function",\n      "prompt": {\n        "objectId": "38FB260A4099305D4220B485B927D84E"\n      }\n    },\n    {\n      "name": "IP_Using_Conversion_Function",\n      "prompt": {\n        "objectId": "38FB260A4099305D4220B485B927D84E"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH \'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A\' \\\n-H \'X-MSTR-MS-Changeset: E04BCEDD47BC4BBC95B7E95197D18A9D\' \\\n-H \'Content-Type: application/json\' \\\n-H \'X-MSTR-AuthToken: ffj9a71c85rrejbbakmvqrqn6d\' \\\n-H \'Cookie: JSESSIONID=FDC0FB1DA99E49C87345CBFD5548E54B; iSession=ffj9a71c85rrejbbakmvqrqn6d\' --\\\ndata-raw \'{"sapHanaParameters": [{"name": "IP_Column_Hier_Value_Help", "prompt": {"objectId": "AA1E3898B82D47329BC6BFB44379362D"}}, {"name": "IP_Static_List", "prompt": {"objectId": ""}}, {"name": "IP_Derived_From_Table", "prompt": {"objectId": "B0489F7947A71A18EEAE03A65EE33137"}}, {"name": "IP_Derived_From_Function", "prompt": {"objectId": "38FB260A4099305D4220B485B927D84E"}}, {"name": "IP_Using_Conversion_Function", "prompt": {"objectId": "38FB260A4099305D4220B485B927D84E"}}]}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.p,{children:"You can view the new table definition in the body of the response."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-04-19T06:25:44.000Z",\n    "dateModified": "2022-05-11T08:29:50.000Z",\n    "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n    "primaryLocale": "en-US",\n    "objectId": "84AF2517E662417D9924FD678B44591A",\n    "subType": "logical_table",\n    "name": "BI.certification::INPUTPARAMETERS"\n  },\n  "physicalTable": {\n    "information": {\n      "dateCreated": "2022-04-19T06:25:44.000Z",\n      "dateModified": "2022-05-11T08:29:50.000Z",\n      "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n      "primaryLocale": "en-US",\n      "objectId": "8E6C19512C6A4FB1A5A8ADBE5F237D82",\n      "subType": "physical_table",\n      "name": "BI.certification::INPUTPARAMETERS"\n    },\n    "tableName": "BI.certification::INPUTPARAMETERS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2022-04-19T06:25:44.000Z",\n          "dateModified": "2022-05-11T08:29:50.000Z",\n          "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n          "primaryLocale": "en-US",\n          "objectId": "4F98B51974684640867FBD998701828B",\n          "subType": "column",\n          "name": "BillingStatus"\n        },\n        "dataType": {\n          "type": "n_var_char",\n          "precision": 1,\n          "scale": -2147483648\n        },\n        "columnName": "BillingStatus"\n      },\n      {\n        "information": {\n          "dateCreated": "2022-04-19T06:25:44.000Z",\n          "dateModified": "2022-05-11T08:29:50.000Z",\n          "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n          "primaryLocale": "en-US",\n          "objectId": "D85782A680F84521893EC4EB16E4EB82",\n          "subType": "column",\n          "name": "City"\n        },\n        "dataType": {\n          "type": "n_var_char",\n          "precision": 40,\n          "scale": -2147483648\n        },\n        "columnName": "City"\n      }\n    ],\n    "namespace": "BICERT_MSTR",\n    "tablePrefix": "",\n    "type": "normal",\n    "sapHanaVariables": [\n      {\n        "variableName": "IP_Column_Hier_Value_Help",\n        "columnSqlType": "NVARCHAR(10)",\n        "valueType": "attribute_value",\n        "valueAttribute": "ProductId",\n        "selectionType": "default",\n        "multiline": false,\n        "mandatory": true,\n        "modelElementName": "",\n        "placeholderName": "$$IP_Column_Hier_Value_Help$$",\n        "defaultValue": "",\n        "description": "hierarchical value help",\n        "columnDataType": "n_var_char"\n      },\n      {\n        "variableName": "IP_Static_List",\n        "columnSqlType": "VARCHAR(13)",\n        "valueType": "static_list",\n        "valueAttribute": "",\n        "selectionType": "default",\n        "multiline": true,\n        "mandatory": true,\n        "modelElementName": "",\n        "placeholderName": "$$IP_Static_List$$",\n        "defaultValue": "1500211138,1501014825",\n        "description": "a static list",\n        "columnDataType": "fixed_length_string"\n      }\n    ],\n    "sapHanaTableType": "sap_hana_calculation"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "sapHanaParameters": [\n    {\n      "name": "IP_Column_Hier_Value_Help",\n      "prompt": {\n        "objectId": "AA1E3898B82D47329BC6BFB44379362D",\n        "subType": "prompt_string",\n        "name": "IP_Column_Hier_Value_Help"\n      }\n    },\n    {\n      "name": "IP_Static_List",\n      "prompt": {\n        "objectId": "B8E99D1CDC754E01B4C3304415E72CBC",\n        "subType": "prompt_string",\n        "name": "IP_Static_List"\n      }\n    }\n  ],\n  "primaryDataSource": {\n    "objectId": "C384DC324EE9450D049410B3A7BCB35E",\n    "subType": "db_role_import",\n    "name": "SAPXSA2"\n  },\n  "secondaryDataSources": []\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 201 (SAP HANA parameters are updated successfully in the changeset.)"})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);