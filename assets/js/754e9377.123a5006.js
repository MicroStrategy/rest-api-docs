"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8496],{79963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(74848),r=n(28453);const a={title:"Retrieve grid or graph query details",sidebar_label:"Retrieve grid or graph query details",description:"This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance."},s=void 0,o={id:"common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details",title:"Retrieve grid or graph query details",description:"This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance.",source:"@site/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details.md",sourceDirName:"common-workflows/analytics/retrieve-sql-statements-and-query-details",slug:"/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Retrieve grid or graph query details",sidebar_label:"Retrieve grid or graph query details",description:"This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance."},sidebar:"tutorialSidebar",previous:{title:"Retrieve visualization query details",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details"},next:{title:"Manage KPI objects and insights",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/manage-kpi-and-insights"}},d={},c=[{value:"Create a document instance using <code>POST /api/documents/{id}/instances</code>",id:"create-a-document-instance-using-post-apidocumentsidinstances",level:2},{value:"Get the query details of grids and graphs in a document instance using <code>GET /api/documents/{id}/instances/{instanceId}/queryDetails</code>",id:"get-the-query-details-of-grids-and-graphs-in-a-document-instance-using-get-apidocumentsidinstancesinstanceidquerydetails",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{since:"2021 Update 2"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["You can try out this workflow at ",(0,i.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b0ee6146-bd68-4aae-adfb-ef186d9e26ee?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance."}),"\n",(0,i.jsxs)(t.p,{children:["You want to view query details of grids and graphs in the Cost Analysis Document in the MicroStrategy Tutorial project. The object ID of the document is ",(0,i.jsx)(t.code,{children:"D14F30994A4B97AD8EF6AEA5F589E30B"}),". The project ID is ",(0,i.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(t.p,{children:["Get the project ID from ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsxs)(t.h2,{id:"create-a-document-instance-using-post-apidocumentsidinstances",children:["Create a document instance using ",(0,i.jsx)(t.code,{children:"POST /api/documents/{id}/instances"})]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/documents/D14F30994A4B97AD8EF6AEA5F589E30B/instances" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Code: 201 (A new document instance is created successfully.)"}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "status": 1,\n  "mid": "F4D88ADA0A4DF7B860BF3DA04418DBEA"\n}\n'})}),"\n",(0,i.jsxs)(t.h2,{id:"get-the-query-details-of-grids-and-graphs-in-a-document-instance-using-get-apidocumentsidinstancesinstanceidquerydetails",children:["Get the query details of grids and graphs in a document instance using ",(0,i.jsx)(t.code,{children:"GET /api/documents/{id}/instances/{instanceId}/queryDetails"})]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/documents/F4D88ADA0A4DF7B860BF3DA04418DBEA/instances/50454FC6DA48C798E8EDA28C46726F5B/queryDetails" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "layouts": [\n    {\n      "key": "K36",\n      "name": "Chapter 1",\n      "gridGraphs": [\n        {\n          "key": "K52",\n          "rawName": "Visualization 1",\n          "name": "Visualization 1",\n          "queryDetails": "\\n*********   Visualization Summary Start  **********\\nTime Spent: 0.008 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nNote: The total \'Time Spent\' above may be greater than the summation of the individual step execution times below.\\nThere are preparation tasks for each step that are not individually measured.\\n*********   Visualization Summary End    **********\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 8\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Quarter]}\\nfrom\\tNew Dataset 1\\nto\\tEx3_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 15\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Profit]\\nfrom\\tNew Dataset 1\\nto\\tEx3_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 120\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex3_tempcube0, \\n\\t           Ex3_tempcube1\\n\\t          )\\nto\\tEx3_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx3_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx3_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 120\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\t[Profit],\\n\\t[Cost]\\nfrom\\tEx3_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx3_tempcube2\\n************   Individual Step End     ************\\n\\n\\n",\n          "sql": "select\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Quarter]}\\nfrom\\tNew Dataset 1\\nto\\tEx3_tempcube0\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Profit]\\nfrom\\tNew Dataset 1\\nto\\tEx3_tempcube1\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex3_tempcube0, \\n\\t           Ex3_tempcube1\\n\\t          )\\nto\\tEx3_tempcube2\\n\\nDrop\\tEx3_tempcube0\\n\\nDrop\\tEx3_tempcube1\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\t[Profit],\\n\\t[Cost]\\nfrom\\tEx3_tempcube2\\n\\nDrop\\tEx3_tempcube2\\n\\n"\n        }\n      ]\n    },\n    {\n      "key": "W62",\n      "name": "Chapter 2",\n      "gridGraphs": [\n        {\n          "key": "K86",\n          "rawName": "Visualization 1",\n          "name": "Visualization 1",\n          "queryDetails": "\\n*********   Visualization Summary Start  **********\\nTime Spent: 0.008 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nNote: The total \'Time Spent\' above may be greater than the summation of the individual step execution times below.\\nThere are preparation tasks for each step that are not individually measured.\\n*********   Visualization Summary End    **********\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 2\\nTime Spent: 0.002 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Year]}\\nfrom\\tNew Dataset 1\\nto\\tEx2_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 8\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\tsum([Revenue])@{[Region]}\\nfrom\\tNew Dataset 1\\nto\\tEx2_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 16\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex2_tempcube0, \\n\\t           Ex2_tempcube1\\n\\t          )\\nto\\tEx2_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx2_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx2_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 16\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\t[Year]@[Year_ID],\\n\\t[Revenue],\\n\\t[Cost]\\nfrom\\tEx2_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx2_tempcube2\\n************   Individual Step End     ************\\n\\n\\n",\n          "sql": "select\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Year]}\\nfrom\\tNew Dataset 1\\nto\\tEx2_tempcube0\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\tsum([Revenue])@{[Region]}\\nfrom\\tNew Dataset 1\\nto\\tEx2_tempcube1\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex2_tempcube0, \\n\\t           Ex2_tempcube1\\n\\t          )\\nto\\tEx2_tempcube2\\n\\nDrop\\tEx2_tempcube0\\n\\nDrop\\tEx2_tempcube1\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\t[Year]@[Year_ID],\\n\\t[Revenue],\\n\\t[Cost]\\nfrom\\tEx2_tempcube2\\n\\nDrop\\tEx2_tempcube2\\n\\n"\n        }\n      ]\n    }\n  ]\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);