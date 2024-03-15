"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7415],{38674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=a(74848),s=a(28453);const r={title:"Create and modify a dataset with one request",sidebar_label:"Create and modify a dataset with one request",description:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request."},i=void 0,d={id:"common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",title:"Create and modify a dataset with one request",description:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request.",source:"@site/docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request.md",sourceDirName:"common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-with-one-request",slug:"/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Create and modify a dataset with one request",sidebar_label:"Create and modify a dataset with one request",description:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request."},sidebar:"tutorialSidebar",previous:{title:"Make external data available using the Push Data API",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/"},next:{title:"Create a dataset incrementally with multiple requests",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/"}},o={},l=[{value:"Workflow",id:"workflow",level:2},{value:"Log in",id:"log-in",level:2},{value:"Create a dataset",id:"create-a-dataset",level:2},{value:"Tables",id:"tables",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Update a dataset",id:"update-a-dataset",level:2},{value:"Log out",id:"log-out",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You can try out this workflow at ",(0,n.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-eccc2471-3af4-44c0-b4aa-9c98a1443823?ctx=documentation",children:"REST API Playground"}),"."]}),(0,n.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,n.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,n.jsx)(t.h2,{id:"workflow",children:"Workflow"}),"\n",(0,n.jsx)(t.p,{children:"You can use a single REST API to create a dataset using external data you upload directly to the Intelligence Server. If you have a small amount of data and need only one table in your dataset, this request workflow is the easiest to use. You simply define a single-table dataset and upload data to it using one Push Data API request."}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["If you have a large amount of data, the recommendation is to use the ",(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/",children:"incremental approach to uploading data to the Intelligence Server"}),"."]}),(0,n.jsxs)(t.p,{children:["Datasets created using ",(0,n.jsx)(t.code,{children:"POST /api/datasets/models"})," cannot be modified with ",(0,n.jsx)(t.code,{children:"PATCH /api/datasets/{datasetId}/tables/{tableId}"}),". They are updated using the same ",(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally",children:"upload session workflow"})," used to create the dataset; datasets created using ",(0,n.jsx)(t.code,{children:"POST /api/datasets"})," can also be updated using the upload session workflow."]})]}),"\n",(0,n.jsx)(t.p,{children:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#log-in",children:"Log in"}),". User authenticates into the environment with ",(0,n.jsx)(t.code,{children:"POST /api/auth/login"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#create-a-dataset",children:"Create a dataset"}),". User calls ",(0,n.jsx)(t.code,{children:"POST /api/datasets"})," to create a dataset"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#update-a-dataset",children:"Update a dataset"}),". User calls ",(0,n.jsx)(t.code,{children:"PATCH /api/datasets/{datasetId}/tables/{tableId}"})," to update the dataset"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#log-out",children:"Log out"}),". User calls ",(0,n.jsx)(t.code,{children:"POST /api/logout"})," to close the session."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A detailed explanation of each step is provided below."}),"\n",(0,n.jsx)(t.h2,{id:"log-in",children:"Log in"}),"\n",(0,n.jsxs)(t.p,{children:["Endpoint: ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"})]}),"\n",(0,n.jsx)(t.p,{children:"This endpoint allows the caller to authenticate with the MicroStrategy REST server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used in subsequent requests."}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:"'Content-Type: application/json'\n'Accept: application/json'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X POST -i -c ~/cookie-jar.txt --header \'Content-Type: application/json\'\\\n--header \'Accept: application/json\' -d \'{ \\\n"loginMode":1, \\\n"username": "administrator", \\\n"password": "" \\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "rllckqkm598s8vm9h3mgvfqhus",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 16 Aug 2017 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The authorization token ",(0,n.jsx)(t.code,{children:"\u201cx-mstr-authtoken\u201d"})," is returned in the response header. It is used in other endpoints to authenticate the user."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"swaggerLogin_response",src:a(29128).A+"",width:"624",height:"219"})}),"\n",(0,n.jsx)(t.p,{children:"Response Body: Empty"}),"\n",(0,n.jsx)(t.h2,{id:"create-a-dataset",children:"Create a dataset"}),"\n",(0,n.jsxs)(t.p,{children:["Endpoint: ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasets/createDICube",children:"POST /api/datasets"})]}),"\n",(0,n.jsxs)(t.p,{children:["This endpoint allows the caller to create a dataset with the MicroStrategy REST server. You use the authorization token returned in step 1 as the value for ",(0,n.jsx)(t.code,{children:"X-MSTR-AuthToken"})," and a project ID for ",(0,n.jsx)(t.code,{children:"X-MSTR-ProjectID"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The dataset is created from the data in the ",(0,n.jsx)(t.code,{children:"body"})," parameter of the request. The ",(0,n.jsx)(t.code,{children:"body"})," parameter defines the data you want to upload to the Intelligence Server."]}),"\n",(0,n.jsx)(t.p,{children:"The model for this parameter has the following fields:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"name"})," : Name of the dataset to be created from the external data"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tables"})," : Tables to be created in the dataset"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"attributes"}),": Attributes to be included in the dataset"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"metrics"}),": Metrics to be included in the dataset"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The details of each field is explained below, with the JSON examples at the end."}),"\n",(0,n.jsx)(t.h3,{id:"tables",children:"Tables"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"tables"})," field is an array of tables. Here are the fields for each table."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Name of the table"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"columnHeaders"})}),(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{children:"An array of column headers for the table"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"data"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Data in the table. It is a Base64 encoded string of JSON."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"For each column header:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Name of the column header"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"dataType"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Data type for the values in the column, with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"dateFormat"})}),(0,n.jsx)(t.td,{children:"string (optional)"}),(0,n.jsx)(t.td,{children:"Date format for DATETME values in the column, with default format of YYYY-MM-DD[(T)hh:mm:[ss]]"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"attributes"})," field is an array of attributes in the table. Here are the fields for each attribute."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Name of the attribute"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"attributeForms"})}),(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{children:"An array of attribute forms"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"For each attribute form:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"category"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Category of the attribute form, with values such as ID or DESC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"expressions"})}),(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{children:"An array of expressions that link the attribute form to a column header in the table"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"dataType"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Data type for the values in the column, with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME'"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"For each expression:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"formula"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Expression that links a metric or attribute form in the dataset to a column header in the table, in the format table_name.column_name"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Name of the metric"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"dataType"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Data type for the values in the column, with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"expressions"})}),(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{children:"An array of expressions that link the metric to a column header in the table"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,n.jsx)(t.p,{children:"Request Parameters:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"CreateDataset_ReqParams",src:a(82112).A+"",width:"675",height:"279"})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Headers:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "name": "SALES_TABLE",\n  "tables": [\n    {\n      "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjoyLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0IjozMDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOCwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjQwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjUwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n      "name": "SALES_TABLE",\n      "columnHeaders": [\n        {\n          "name": "Year",\n          "dataType": "INTEGER"\n        },\n        {\n          "name": "Category_ID",\n          "dataType": "INTEGER"\n        },\n        {\n          "name": "Category_DESC",\n          "dataType": "string"\n        },\n        {\n          "name": "Cost",\n          "dataType": "DOUBLE"\n        },\n        {\n          "name": "Profit",\n          "dataType": "DOUBLE"\n        }\n      ]\n    }\n  ],\n  "metrics": [\n    {\n      "name": "Cost",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Cost"\n        }\n      ]\n    },\n    {\n      "name": "Profit",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Profit"\n        }\n      ]\n    }\n  ],\n  "attributes": [\n    {\n      "name": "Year",\n      "attributeForms": [\n        {\n          "category": "ID",\n          "expressions": [{ "formula": "SALES_TABLE.Year" }],\n          "dataType": "INTEGER"\n        }\n      ]\n    },\n    {\n      "name": "category",\n      "attributeForms": [\n        {\n          "category": "ID",\n          "expressions": [{ "formula": "SALES_TABLE.Category_ID" }],\n          "dataType": "INTEGER"\n        },\n        {\n          "category": "DESC",\n          "expressions": [{ "formula": "SALES_TABLE.Category_DESC" }],\n          "dataType": "string"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X POST -i -c ~/cookie-jar.txt --header \'Content-Type: application/json\'\\\n--header \'Accept: application/json\' --header \'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs\'\\\n--header \'X-MSTR-ProjectID: A773B25B4E505595455EF5B11D90049B\' -d \'{\n  "name": "SALES_TABLE",\n  "tables":[\n    {\n      "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjoyLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0IjozMDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOCwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjQwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjUwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n      "name":"SALES_TABLE",\n          "columnHeaders": [\n            {\n              "name" : "Year",\n              "dataType" : "INTEGER"\n            },\n            {\n              "name" : "Category_ID",\n              "dataType" : "INTEGER"\n            },\n            {\n              "name" : "Category_DESC",\n              "dataType" : "string"\n            },\n            {\n              "name" : "Cost",\n              "dataType" : "DOUBLE"\n            },\n            {\n              "name" : "Profit",\n              "dataType" : "DOUBLE"\n            }\n          ]\n    }\n  ],\n  "metrics" : [\n    {\n      "name": "Cost",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Cost"\n        }\n      ]\n    },\n    {\n      "name": "Profit",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Profit"\n        }\n      ]\n    }\n  ],\n  "attributes" : [\n    {\n      "name":"Year",\n      "attributeForms":[\n        {\n          "category" : "ID",\n          "expressions" : [{"formula" : "SALES_TABLE.Year"}],\n          "dataType": "INTEGER"\n        }\n      ]\n    },\n    {\n      "name":"category",\n      "attributeForms":[\n        {\n          "category" : "ID",\n          "expressions" : [{"formula" : "SALES_TABLE.Category_ID"}],\n          "dataType": "INTEGER"\n        },\n        {\n          "category" : "DESC",\n          "expressions" : [{"formula" : "SALES_TABLE.Category_DESC"}],\n          "dataType": "string"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,n.jsx)(t.p,{children:"The resulting HTTP response returns an HTTP status 200 and a response body containing the name and ID of the dataset and the ID of the table containing the data."}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "datasetId": "105E10C94CF881BE3DDBA6B97E61FBC5",\n  "name": "SALES_TABLE",\n  "tables": [\n    {\n      "id": "67DD8A4015E4C176A2517420A3D14666",\n      "name": "SALES_TABLE"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["A dataset named SALES_TABLE is created under the My Reports folder. The dataset ID and the table ID, returned in the response body, are used in other endpoints, such as ",(0,n.jsx)(t.code,{children:"PATCH /api/datasets/{datasetId}/tables/{tableId}"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"update-a-dataset",children:"Update a dataset"}),"\n",(0,n.jsxs)(t.p,{children:["Endpoint: ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasets/updateDICube",children:"PATCH /api/datasets/{datasetId}/tables/{tableId}"})]}),"\n",(0,n.jsxs)(t.p,{children:["This endpoint allows the caller to update and republish a dataset that was created by the MicroStrategy REST server (using ",(0,n.jsx)(t.code,{children:"POST /api/datasets"}),"). To update and republish a specific dataset, you provide the authorization token, ",(0,n.jsx)(t.code,{children:"X-MSTR-AuthToken"}),", generated in step 1, the dataset ID and table ID to identify the dataset to be updated, the type of update action that should be performed, and the data to be applied. If successful, the resulting HTTP response returns an HTTP status 200."]}),"\n",(0,n.jsx)(t.p,{children:"Request Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"UpdateDataset_ReqParams",src:a(96597).A+"",width:"677",height:"361"})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjo1LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0Ijo2MDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOSwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjYwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjYwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n  "name": "SALES_TABLE",\n  "columnHeaders": [\n    {\n      "name": "Year",\n      "dataType": "INTEGER"\n    },\n    {\n      "name": "Category_ID",\n      "dataType": "INTEGER"\n    },\n    {\n      "name": "Category_DESC",\n      "dataType": "string"\n    },\n    {\n      "name": "Cost",\n      "dataType": "DOUBLE"\n    },\n    {\n      "name": "Profit",\n      "dataType": "DOUBLE"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X PATCH -b ~/cookie-jar.txt \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasets/105E10C94CF881BE3DDBA6B97E61FBC5/tables/67DD8A4015E4C176A2517420A3D14666\'\\\n--header \'Content-Type: application/json\'\\\n--header \'Accept: application/json\' --header \'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs\'\\\n--header \'X-MSTR-ProjectID: A773B25B4E505595455EF5B11D90049B\'\\\n--header \'updatePolicy: Replace\' -d \'       {\n  "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjo1LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0Ijo2MDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOSwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjYwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjYwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n  "name":"SALES_TABLE",\n  "columnHeaders": [\n    {\n      "name" : "Year",\n      "dataType" : "INTEGER"\n    },\n    {\n      "name" : "Category_ID",\n      "dataType" : "INTEGER"\n    },\n    {\n      "name" : "Category_DESC",\n      "dataType" : "string"\n    },\n    {\n      "name" : "Cost",\n      "dataType" : "DOUBLE"\n    },\n    {\n      "name" : "Profit",\n      "dataType" : "DOUBLE"\n    }\n  ]\n}\'\n'})}),"\n",(0,n.jsx)(t.p,{children:"Response Body: Empty"}),"\n",(0,n.jsx)(t.p,{children:"Response Code: 204"}),"\n",(0,n.jsx)(t.p,{children:"The dataset named SALES_TABLE, under the My Reports folder, is updated and republished using the specified type of update action and data. In this example, the update action is to replace the existing data with new data."}),"\n",(0,n.jsx)(t.h2,{id:"log-out",children:"Log out"}),"\n",(0,n.jsxs)(t.p,{children:["Endpoint: ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout",children:"POST /api/auth/logout"})]}),"\n",(0,n.jsx)(t.p,{children:"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST server. In this example, you close the active user session by providing the authorization token, X-MSTR-AuthToken, generated in step 1. If the call is successful, the resulting HTTP response returns an HTTP status code 204."}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Request Body: Empty"}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json'\\\n--header 'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Response Code: 204"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},82112:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/CreateDataset_ReqParams-947a424cafa4f1dc214d3c27d3fdb10f.png"},96597:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/UpdateDataset_ReqParams-7eb7765de6e5b44330fffe92d9b3f7d6.png"},29128:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/swaggerLogin_response-77d8e10a34b2765db036f4cd3ac8c6b9.png"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>d});var n=a(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);