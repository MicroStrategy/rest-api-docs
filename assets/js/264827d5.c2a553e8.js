"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5987],{25147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=t(74848),o=t(28453);const r={title:"Add and remove datasource from project",description:"This workflow sample demonstrates how to add a datasource to a project."},s=void 0,d={id:"common-workflows/administration/datasource-management/add-and-remove-datasource-from-project",title:"Add and remove datasource from project",description:"This workflow sample demonstrates how to add a datasource to a project.",source:"@site/docs/common-workflows/administration/datasource-management/add-and-remove-datasource-from-project.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/add-and-remove-datasource-from-project",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/add-and-remove-datasource-from-project",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/add-and-remove-datasource-from-project.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Add and remove datasource from project",description:"This workflow sample demonstrates how to add a datasource to a project."},sidebar:"tutorialSidebar",previous:{title:"Update a datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/update-a-datasource"},next:{title:"Update job priorities for datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/update-job-priorities-for-datasource"}},i={},c=[{value:"Get list of datasources based on project",id:"get-list-of-datasources-based-on-project",level:2},{value:"Add datasource to project",id:"add-datasource-to-project",level:2},{value:"Remove datasource to project",id:"remove-datasource-to-project",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This workflow sample demonstrates how to add a datasource to a project. To see how to remove a project please click ",(0,a.jsx)(n.a,{href:"#remove-datasource-to-project",children:"here"}),"."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#get-list-of-datasources-based-on-project",children:"Get list of datasources based on project."})," ",(0,a.jsx)(n.code,{children:"GET /api/projects/{projectId}/datasources"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#add-datasource-to-project",children:"Add a datasource to a project."})," ",(0,a.jsx)(n.code,{children:"PATCH /api/projects/{projectId}/datasources"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["A detailed description of each step of this request is listed down below. For this sample we are using the MicroStrategy Tutorial project with project ID B7CA92F04B9FAE8D941C3E9B7E0CD754. You can obtain the project ID from ",(0,a.jsx)(n.code,{children:"GET /api/projects"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"get-list-of-datasources-based-on-project",children:"Get list of datasources based on project"}),"\n",(0,a.jsxs)(n.p,{children:["Endpoint: ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/getProjectDatasources",children:"GET /api/projects/{projectId}/datasources"})]}),"\n",(0,a.jsxs)(n.p,{children:["This endpoint allows the caller to get the datasources associated with a specific project with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,a.jsx)(n.code,{children:"X-MSTR-AuthToken"}),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing the datasources for a project."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Request Headers"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Curl"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl --location -g --request GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/{{projectId}}/datasources' \\\n--header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Sample Response"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Response Body"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "datasources": [\n    {\n      "id": "A23BBC514D336D5B4FCE919FE19661A3",\n      "name": "Tutorial Postgres",\n      "description": "",\n      "dateCreated": "2015-06-15T17:44:06.000+0000",\n      "dateModified": "2021-07-28T16:53:43.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "postgre_sql",\n        "version": "postgre_sql_90",\n        "connection": {\n          "name": "TutorialWHLinux",\n          "id": "A7543BCC4AC0AE818ED0F4B4357D2A61",\n          "isEmbedded": false\n        }\n      },\n      "tablePrefix": "public.",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "PostgreSQL",\n        "id": "702780F3E3594D95AD4C85CE8F803306"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": false\n    },\n    {\n      "id": "BCB3836D4C70EDF53CB706ABA556B44B",\n      "name": "Operational Datamart",\n      "description": "Operational Datamart",\n      "dateCreated": "2006-08-10T14:37:07.000+0000",\n      "dateModified": "2021-07-28T16:53:44.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "postgre_sql",\n        "version": "postgre_sql_90",\n        "connection": {\n          "name": "OpWHLinux",\n          "id": "2D95429243FACC237B23A9AD06417E77",\n          "isEmbedded": false\n        }\n      },\n      "tablePrefix": "public.",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "PostgreSQL",\n        "id": "702780F3E3594D95AD4C85CE8F803306"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": false\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 200 (Get list of datasources.)"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"add-datasource-to-project",children:"Add datasource to project"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can try out this workflow at ",(0,a.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2d0b3eac-9704-42a7-9481-fec12557b752?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["Endpoint: ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/updateProjectDatasources",children:"PATCH /api/projects/{projectId}/datasources"})]}),"\n",(0,a.jsxs)(n.p,{children:["This endpoint allows the caller to add and remove a datasource to a specific project with the MicroStrategy REST Server. In this request we will add a datasource. You use the authorization token returned during login as the value for ",(0,a.jsx)(n.code,{children:"X-MSTR-AuthToken"}),". For this sample we will be adding the Act! Essentials datasource to the MicroStrategy Tutorial project. You can find the datasourceId using the endpoint ",(0,a.jsx)(n.code,{children:"GET /api/datasources"})," and the projectId using ",(0,a.jsx)(n.code,{children:"GET /api/projects"}),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a list of the project's datasources."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Request Headers"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Request Body"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "operationList": [\n    {\n      "op": "add",\n      "path": "/id",\n      "value": "FE0D1FDD7EA146DB954056FD72F04310"\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Curl"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/{{projectId}}/datasources\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "add",\n            "path": "/id",\n            "value": "FE0D1FDD7EA146DB954056FD72F04310"\n        }\n    ]\n}\'\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Sample Response"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Response Body:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "datasources": [\n    {\n      "id": "A23BBC514D336D5B4FCE919FE19661A3",\n      "name": "Tutorial Postgres",\n      "description": "",\n      "dateCreated": "2015-06-15T17:44:06.000+0000",\n      "dateModified": "2021-07-28T16:53:43.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "postgre_sql",\n        "version": "postgre_sql_90",\n        "connection": {\n          "name": "TutorialWHLinux",\n          "id": "A7543BCC4AC0AE818ED0F4B4357D2A61",\n          "isEmbedded": false\n        }\n      },\n      "tablePrefix": "public.",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "PostgreSQL",\n        "id": "702780F3E3594D95AD4C85CE8F803306"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": false\n    },\n    {\n      "id": "FE0D1FDD7EA146DB954056FD72F04310",\n      "name": "Act! Essentials",\n      "description": "actessentialsoauth",\n      "dateCreated": "2018-08-16T20:34:43.000+0000",\n      "dateModified": "2021-07-28T16:53:40.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "cloud_element",\n        "version": "default",\n        "connection": {\n          "name": "",\n          "id": "E1A9CB3D246441B4A6BD9B78B4BF022A",\n          "isEmbedded": true\n        }\n      },\n      "tablePrefix": "",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "CloudElement",\n        "id": "AD3FCA53A5B84DD49542BF2E1AE4847C"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": true\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 200 (Add datasource to project.)"}),"\n",(0,a.jsx)(n.h2,{id:"remove-datasource-to-project",children:"Remove datasource to project"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can try out this workflow at ",(0,a.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-577baae8-f1b6-4ed2-8819-bc3aed5ec5c7?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["Endpoint: ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/updateProjectDatasources",children:"PATCH /api/projects/{projectId}/datasources"})]}),"\n",(0,a.jsxs)(n.p,{children:["This endpoint allows the caller to add and remove a datasource to a specific project with the MicroStrategy REST Server. In this request we will remove a datasource. You use the authorization token returned during login as the value for ",(0,a.jsx)(n.code,{children:"X-MSTR-AuthToken"}),". For this sample we will be removing the Act! Essentials datasource from the MicroStrategy Tutorial project. You can find the datasourceId using the endpoint ",(0,a.jsx)(n.code,{children:"GET /api/datasources"})," and the projectId using ",(0,a.jsx)(n.code,{children:"GET /api/projects"}),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a list of the project's datasources."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Request Headers"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Request Body"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "operationList": [\n    {\n      "op": "remove",\n      "path": "/id",\n      "value": "FE0D1FDD7EA146DB954056FD72F04310"\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Curl"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/{{projectId}}/datasources\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "remove",\n            "path": "/id",\n            "value": "FE0D1FDD7EA146DB954056FD72F04310"\n        }\n    ]\n}\'\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Sample Response"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Response Body:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "datasources": [\n    {\n      "id": "A23BBC514D336D5B4FCE919FE19661A3",\n      "name": "Tutorial Postgres",\n      "description": "",\n      "dateCreated": "2015-06-15T17:44:06.000+0000",\n      "dateModified": "2021-07-28T16:53:43.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "postgre_sql",\n        "version": "postgre_sql_90",\n        "connection": {\n          "name": "TutorialWHLinux",\n          "id": "A7543BCC4AC0AE818ED0F4B4357D2A61",\n          "isEmbedded": false\n        }\n      },\n      "tablePrefix": "public.",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "PostgreSQL",\n        "id": "702780F3E3594D95AD4C85CE8F803306"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": false\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 200 (Remove datasource from project.)"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var a=t(96540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);