"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7912],{82962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(74848),r=n(28453);const o={title:"Create a datamart from a source report",description:"This workflow sample demonstrates how to create a new Datamart object from a source report through the Modeling service."},i=void 0,s={id:"common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-a-source-report",title:"Create a datamart from a source report",description:"This workflow sample demonstrates how to create a new Datamart object from a source report through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-a-source-report.md",sourceDirName:"common-workflows/modeling/manage-datamart-objects",slug:"/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-a-source-report",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-a-source-report",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-a-source-report.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Create a datamart from a source report",description:"This workflow sample demonstrates how to create a new Datamart object from a source report through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a datamart definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/retrieve-a-datamart-definition"},next:{title:"Create a datamart from scratch",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-scratch"}},d={},c=[{value:"Create a new datamart",id:"create-a-new-datamart",level:2},{value:"The model for the definition of the datamart",id:"the-model-for-the-definition-of-the-datamart",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{since:"2021 Update 7"}),"\n",(0,a.jsx)(t.p,{children:"This workflow sample demonstrates how to create a new datamart object from a source report through the Modeling service."}),"\n",(0,a.jsx)(t.p,{children:"You want to create a datamart from a source report with the object ID of 0D0E80754CC1987C52F9BCB317E6941D and put the newly created datamart into the destination folder of 8A1831FF494F528D02A4A8BF5FB73459. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754."}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."}),(0,a.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(t.p,{children:["Get the project ID from ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-new-datamart",children:"Create a new datamart"}),"\n",(0,a.jsxs)(t.p,{children:["Endpoint: ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-createDatamart",children:"POST /api/model/datamarts"})]}),"\n",(0,a.jsx)(t.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Location"}),(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"header"}),(0,a.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,a.jsx)(t.td,{children:"The authorization token."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"header"}),(0,a.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,a.jsx)(t.td,{children:"The project ID."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"params"}),(0,a.jsx)(t.td,{children:"sourceReportId"}),(0,a.jsx)(t.td,{children:"The ID of the source report that you want to create datamart from."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"params"}),(0,a.jsx)(t.td,{children:"showFilterTokens"}),(0,a.jsx)(t.td,{children:'Specify whether the Datamart\u2019s "filter" is returned in "tokens" format, along with "text" and "tree" formats.'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"params"}),(0,a.jsx)(t.td,{children:"showExpressionAs"}),(0,a.jsx)(t.td,{children:"Specify the format in which the expressions are returned in response, applied to the expressions in a fact or attribute and custom expressions used in a filter, prompt, security filter, custom group, etc."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"params"}),(0,a.jsx)(t.td,{children:"showAdvancedProperties"}),(0,a.jsx)(t.td,{children:"Specify whether the datamart\u2019s definition is returned with advanced properties."})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["To create the new datamart from existing report , you need to submit the request body with the correct information. Other fields except ",(0,a.jsx)(t.code,{children:"information"})," and ",(0,a.jsx)(t.code,{children:"datamartOptions"})," would be ignored even if they\u2019re provided."]}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.code,{children:"information"}),", you need to provide name, destinationFolderID for the datamart you want to create."]}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "name": "demo datamart"\n  },\n  "datamartOptions": {\n    "append": true,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "MD_TEST",\n    "placeholderIncluded": true,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Execution Time]": {\n        "name": "Maximum Execution Time",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Rows]": {\n        "name": "Maximum Rows",\n        "value": "65536",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Pre SQLs]": {\n        "name": "Pre SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Descriptor]": {\n        "name": "Table Descriptor",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts?sourceReportId=0D0E80754CC1987C52F9BCB317E6941D\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: 20tpft1324b71ubo9emqesv5u7\' \\\n  -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "information":{\n        "destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459",\n        "name": "demo datamart"\n    },\n    "datamartOptions": {\n        "append": true,\n        "targetSource": {\n            "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n            "subType": "db_role",\n            "name": "Statistics"\n        },\n        "tableName": "MD_TEST",\n        "placeholderIncluded": true,\n        "datamartProperties": {\n            "[DatamartProperties].[Create Table Post String]": {\n                "name": "Create Table Post String",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Insert SQLs]": {\n                "name": "Insert SQLs",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Maximum Execution Time]": {\n                "name": "Maximum Execution Time",\n                "value": "0",\n                "type": "int32",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Maximum Rows]": {\n                "name": "Maximum Rows",\n                "value": "65536",\n                "type": "int32",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Post SQLs]": {\n                "name": "Post SQLs",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Pre SQLs]": {\n                "name": "Pre SQLs",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Table Descriptor]": {\n                "name": "Table Descriptor",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            }\n        }\n    }\n}\'\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(t.p,{children:"You can view the new datamart definition in the body of the response."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-09-08T08:23:53.645Z",\n    "dateModified": "2022-09-08T08:23:53.645Z",\n    "versionId": "D71F41E547AE966037017D97FFA04CA9",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "93C339024786A4EA0A7B0CADDFFD7BC1",\n    "subType": "report_datamart",\n    "name": "demo datamart"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3811D3E4981000E787EC6DE8A4",\n          "name": "Country",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D3611D3E4981000E787EC6DE8A4",\n          "name": "Catalog",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D3511D3E4981000E787EC6DE8A4",\n          "name": "Call Center",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D5211D3E4981000E787EC6DE8A4",\n          "name": "Distribution Center",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n          "name": "Subcategory",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n              "name": "Cost",\n              "subType": "metric"\n            },\n            {\n              "id": "D823D64B48A0104B01135587BA87A2BD",\n              "name": "Cost Growth",\n              "subType": "metric"\n            },\n            {\n              "id": "381980B211D40BC8C000C8906B98494F",\n              "name": "Discount",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {}\n  },\n  "datamartOptions": {\n    "append": true,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "MD_TEST",\n    "placeholderIncluded": true,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Execution Time]": {\n        "name": "Maximum Execution Time",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Rows]": {\n        "name": "Maximum Rows",\n        "value": "65536",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Pre SQLs]": {\n        "name": "Pre SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Descriptor]": {\n        "name": "Table Descriptor",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Option]": {\n        "name": "Table Option",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Prefix]": {\n        "name": "Table Prefix",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Qualifier]": {\n        "name": "Table Qualifier",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Space]": {\n        "name": "Table Space",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Type]": {\n        "name": "Table Type",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Response Code: 201 (A datamart is created successfully.)"}),"\n",(0,a.jsx)(t.h2,{id:"the-model-for-the-definition-of-the-datamart",children:"The model for the definition of the datamart"}),"\n",(0,a.jsx)(t.p,{children:"The model for the definition of a datamart can be represented with the following fields."}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"objectId"}),", ",(0,a.jsx)(t.code,{children:"dateCreated"}),", ",(0,a.jsx)(t.code,{children:"dateModified"}),", and ",(0,a.jsx)(t.code,{children:"versionId"})," are generated automatically. Currently only ",(0,a.jsx)(t.code,{children:"en-US"})," is available for ",(0,a.jsx)(t.code,{children:"primaryLocale"}),"."]})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["(Required) ",(0,a.jsx)(t.code,{children:"information"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["(Required) ",(0,a.jsx)(t.code,{children:"name"})," (",(0,a.jsx)(t.code,{children:"String"}),") - Name of the datamart. This is the most user-friendly value that can be used to identify the datamart."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"subType"})," (",(0,a.jsx)(t.code,{children:"String"}),") - The subType of datamart, which should be ",(0,a.jsx)(t.code,{children:"report_datamart"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["(Required) ",(0,a.jsx)(t.code,{children:"destinationFolderId"})," (",(0,a.jsx)(t.code,{children:"String"}),") - Folder Id where the new datamart is saved."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["(Required) ",(0,a.jsx)(t.code,{children:"datamartOptions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"append"})," (",(0,a.jsx)(t.code,{children:"Boolean"}),") - This flag indicate whether to create a new table or append to the existing table every time report runs."]}),"\n",(0,a.jsxs)(t.li,{children:["(Required) ",(0,a.jsx)(t.code,{children:"targetSource"})," - The database instance instance where the table will be placed in."]}),"\n",(0,a.jsxs)(t.li,{children:["(Required) ",(0,a.jsx)(t.code,{children:"tableName"})," (",(0,a.jsx)(t.code,{children:"String"}),") - The name of the inserted table."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"placeholderIncluded"})," (",(0,a.jsx)(t.code,{children:"Boolean"}),") - The placeholders we support on table name. Details can be referred ",(0,a.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"datamartProperties"})," - The datamart properties that are used to configure the table in warehouse."]}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);