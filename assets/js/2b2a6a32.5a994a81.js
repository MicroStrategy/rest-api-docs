"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[984],{76264:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=s(74848),i=s(28453);const a={title:"Apply filters to a dashboard",sidebar_label:"Apply filters to a dashboard",description:"In this workflow, you create an instance of a dashboard using the filter selections originally defined for the dashboard. You then change the values for the filter selections and re-execute the dashboard instance with the new values. As a way to see the results of each filter, you export the dashboard instance to PDF."},r=void 0,o={id:"common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier",title:"Apply filters to a dashboard",description:"In this workflow, you create an instance of a dashboard using the filter selections originally defined for the dashboard. You then change the values for the filter selections and re-execute the dashboard instance with the new values. As a way to see the results of each filter, you export the dashboard instance to PDF.",source:"@site/docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier.md",sourceDirName:"common-workflows/analytics/filter-data/filter-dossier-instances",slug:"/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Apply filters to a dashboard",sidebar_label:"Apply filters to a dashboard",description:"In this workflow, you create an instance of a dashboard using the filter selections originally defined for the dashboard. You then change the values for the filter selections and re-execute the dashboard instance with the new values. As a way to see the results of each filter, you export the dashboard instance to PDF."},sidebar:"tutorialSidebar",previous:{title:"Filter dashboard instances",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/"},next:{title:"Retrieve filters applied to dashboard chapters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters"}},d={},l=[{value:"Log in",id:"log-in",level:2},{value:"Get project list",id:"get-project-list",level:2},{value:"Get a list of dashboards",id:"get-a-list-of-dashboards",level:2},{value:"Get definition of a dashboard, including the filter applied",id:"get-definition-of-a-dashboard-including-the-filter-applied",level:2},{value:"Create a dashboard instance with the existing filter applied",id:"create-a-dashboard-instance-with-the-existing-filter-applied",level:2},{value:"Export the dashboard instance to PDF",id:"export-the-dashboard-instance-to-pdf",level:2},{value:"Update the dashboard instance, with a revised filter definition applied",id:"update-the-dashboard-instance-with-a-revised-filter-definition-applied",level:2},{value:"Update the filter definition",id:"update-the-filter-definition",level:3},{value:"Clear all selections for a filter",id:"clear-all-selections-for-a-filter",level:3},{value:"Export the dashboard instance to PDF again",id:"export-the-dashboard-instance-to-pdf-again",level:2},{value:"Log out",id:"log-out",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can try out this workflow at ",(0,t.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d6462995-9003-4187-b121-47a5fb31436a?ctx=documentation",children:"REST API Playground"}),"."]}),(0,t.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,t.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"Use the following sequence of REST API requests to see the results when you change the values for the filter selections applied to a dashboard instance. In this workflow, you create an instance of a dashboard using the filter selections originally defined for the dashboard. You then change the values for the filter selections and re-execute the dashboard instance with the new values. As a way to see the results of each filter, you export the dashboard instance to PDF."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"In the workflow below, there are both dashboard and document endpoints. A dashboard and a document have the same base object so dashboard actions can be executed with document endpoints. A dashboard is simply a different view of a document."})}),"\n",(0,t.jsx)(n.p,{children:"A detailed explanation of each step is provided below:"}),"\n",(0,t.jsx)(n.h2,{id:"log-in",children:"Log in"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"})," to authenticate into the environment with standard authentication."]}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing ",(0,t.jsx)(n.code,{children:"X-MSTR-AuthToken"}),", the authorization token that will be used in subsequent requests."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Content-Type: application/json'\n'Accept: application/json'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -i -c --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\\\n"loginMode":1, \\\\\n"username": "administrator", \\\\\n"password": "" \\\\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 22 Aug 2018 17:58:29 GMT",\n  "expires": "0",\n  "content-type": null\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The authorization token x-mstr-authtoken is returned in the response header. It is used by the other endpoints in the workflow to authenticate the user."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body: no content"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Code: 204 (Success: No Content)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-project-list",children:"Get project list"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"GET /api/projects"})," to obtain the list of available projects."]}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to get the list of projects that the user session has access to. You use the authorization token returned during login as the value for ",(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"}),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to. The information returned for each project includes the project ID, which will be used by a later endpoint. In this example, you get the list of projects in the MicroStrategy Tutorial metadata."]}),"\n",(0,t.jsx)(n.p,{children:"To execute this API, you need to provide the value for the following parameter in the request header:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"})," Authorization token generated by ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_GET_Projects_Params",src:s(36968).A+"",width:"950",height:"97"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET -b --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/projects'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    "name": "MicroStrategy Tutorial",\n    "alias": "",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",\n    "status": 0\n  },\n  {\n    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",\n    "name": "Human Resources Analysis Module",\n    "alias": "",\n    "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",\n    "status": 0\n  }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"The response body contains information for each project that is returned, including the project ID that is used by other endpoints."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response code: 200 (OK)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-a-list-of-dashboards",children:"Get a list of dashboards"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"GET /api/dossiers"})," to obtain a list of dashboards that meet specific search criteria."]}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/searchForDossiers",children:"GET /api/dossiers"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to get a list of dashboards in a specific project that meet specific search criteria. You use the authorization token returned during login as the value for ",(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"}),". You use a project ID returned by GET /api/projects as the value for ",(0,t.jsx)(n.strong,{children:"X-MSTR-ProjectID"}),". You specify the search criteria using query parameters in the request; criteria can include the root folder ID, a search searchPattern such as Begins With or Exactly, and the certified status of the dashboard."]}),"\n",(0,t.jsx)(n.p,{children:"To execute this API, you need to provide values for the following parameters in the request header:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"})," Authorization token generated by ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-ProjectID"})," Project ID generated by ",(0,t.jsx)(n.code,{children:"GET /api/projects"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_GET_Dossiers_Params",src:s(76432).A+"",width:"950",height:"692"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET -b --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/projects'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": "Dossier ID",\n    "name": "Dossier name",\n    "type": "Dossier type"\n  },\n  {\n    "id": "Dossier ID",\n    "name": "Dossier name",\n    "type": "Dossier type"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"The response body contains information for each dashboard that is returned, including the dashboard ID that is used by later endpoints."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response code: 200 (OK)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-definition-of-a-dashboard-including-the-filter-applied",children:"Get definition of a dashboard, including the filter applied"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"GET /api/dossiers/{dossierId}/definition"})," to obtain the definition of the filter applied to a specific dashboard, including the key and name of the filter."]}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList",children:"GET /api/dossiers/{dossierId}/definition"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to get the definition of the filter applied to a specific dashboard in a specific project. You use the authorization token returned during login as the value for ",(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"}),". You use a project ID returned by ",(0,t.jsx)(n.code,{children:"GET /api/projects"})," as the value for ",(0,t.jsx)(n.strong,{children:"X-MSTR-ProjectID"}),". You use the dashboard ID returned by ",(0,t.jsx)(n.code,{children:"GET /api/dossiers"})," in the path of the request URL. The response contains the hierarchy of the dashboard, which includes the key, name, and summary of the filter applied to the dashboard. This is the filter that is applied to the dashboard when it is executed. It is also the filter that you will update in a later step."]}),"\n",(0,t.jsx)(n.p,{children:"To execute this API, you need to provide values for the following parameters in the request header:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"})," Authorization token generated by ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-ProjectID"})," Project ID generated by ",(0,t.jsx)(n.code,{children:"GET /api/projects"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_GET_Dossiers_Def_Params",src:s(20500).A+"",width:"950",height:"171"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "string",\n  "name": "string",\n  "chapters": [\n    {\n      "key": "string",\n      "name": "string",\n      "pages": [\n        {\n          "key": "string",\n          "name": "string",\n          "visualizations": [\n            {\n              "key": "string",\n              "name": "string",\n              "units": {\n                "attributes": [\n                  {\n                    "id": "string",\n                    "type": 0,\n                    "name": "string"\n                  }\n                ],\n                "metrics": [\n                  {\n                    "id": "string",\n                    "type": 0,\n                    "name": "string"\n                  }\n                ]\n              }\n            }\n          ]\n        }\n      ],\n      "filters": [\n        {\n          "key": "string",\n          "name": "string",\n          "summary": "string",\n          "source": {\n            "id": "string",\n            "type": 0\n          }\n        }\n      ],\n      "filtersPanelStack": {\n        "key": "string"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The response body contains information about the specified dashboard, including the filter ID, name, and definition that is used to update the filter in a later endpoint."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response code: 200 (OK)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-dashboard-instance-with-the-existing-filter-applied",children:"Create a dashboard instance with the existing filter applied"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"POST /api/dossiers/{dossierId}/instances"})," to create an instance of a specific dashboard with the existing filter applied."]}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2",children:"POST /api/dossiers/{dossierId}/instances"})]}),"\n",(0,t.jsx)(n.p,{children:"This endpoint allows the caller to execute a specific dashboard in a specific project and create an instance of that dashboard. The existing filter for the dashboard will be applied when the dashboard instance is created; this is the filter that was returned in the previous step. To execute this API, you need to provide values for the following request parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"})," Authorization token generated by ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-ProjectID"})," Project ID generated by ",(0,t.jsx)(n.code,{children:"GET /api/projects"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"id"})," Dashboard ID generated by ",(0,t.jsx)(n.code,{children:"GET /api/dossiers dossiers/{dossierId}/definition"})," or other endpoints"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"body"})," Filter definition for the filter key/name generated by ",(0,t.jsx)(n.code,{children:"GET /api/dossiers dossiers/{dossierId}/definition"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['In this example, you execute a dashboard called "Filters" (located in MicroStrategy Tutorial>Shared Reports. You use the authorization token returned by ',(0,t.jsx)(n.code,{children:"POST /api/auth/login"})," as the value for X-MSTR-AuthToken, a project ID returned by ",(0,t.jsx)(n.code,{children:"GET /api/projects"}),", a dashboard ID returned by ",(0,t.jsx)(n.code,{children:"GET /api/dossiers"}),', and a filter definition. The request body contains the definition of the existing filter that was created for the dashboard; it is applied when the dashboard is executed. The resulting HTTP response returns an HTTP status 201, indicating that the dashboard instance has been created, and a JSON object containing the instance ID ("mid") of the dashboard.']}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_POST_documents_parameters",src:s(38490).A+"",width:"1280",height:"497"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X POST -i -c --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -d '{}' 'http://demo.microstrategy.com/MicroStrategyLibrary/335FFA9640B5F1C1E0C0F3A469E627A8/instances'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsxs)(n.p,{children:["The REST server returns the instance ID of the dashboard as the value of ",(0,t.jsx)(n.code,{children:'"mid"'}),". This value will be used by a later endpoint when an updated filter definition is applied to the dashboard instance. The HTTP response code 201 indicates that the dashboard instance has been created and is ready for additional actions to be performed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mid": "0ADDDAF34260EBA5D5FB73BFE5852AC3"\n  // ...\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Code: 201 (Success: Created)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"export-the-dashboard-instance-to-pdf",children:"Export the dashboard instance to PDF"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"POST /api/documents/{id}/instances/{instanceId}/pdf"})," to export the dashboard to a PDF file. This allows you to see the results when the existing filter was applied."]}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/exportDashboardToPdf",children:"POST /api/documents/{id}/instances/{instanceId}/pdf"})]}),"\n",(0,t.jsx)(n.p,{children:"This endpoint allows the caller to export a dashboard instance to a PDF file using the instance ID and object ID of the dashboard. In this example, you export the dashboard to a PDF file using the dashboard ID and the instance ID you created in previous steps. You provide the authorization token generated during login and the project ID in the request header, and the dashboard ID and the instance ID in the request path. In the request body, you specify in JSON how to format the PDF file that you are exporting. If the call is successful, the resulting HTTP response returns a response body in either application/json or application/octet-stream format."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"This endpoint is used only to allow you to view the results when the filter was applied. It is used again after an updated filter definition has been applied so that you can compare the two results and confirm that the results are different when the updated filter is applied."})}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_POST_documents_PDF_parameters",src:s(55784).A+"",width:"1280",height:"609"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "pageHeight": 11.69,\n  "pageWidth": 8.27,\n  "orientation": "AUTO",\n  "pageOption": "ALL",\n  "includeOverview": true,\n  "includeDetailedPages": true,\n  "waitingTimeBeforeExport": 0,\n  "includeHeader": true,\n  "includeFooter": true,\n  "filterSummary": "ALL"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"In the request body above, you specify the formatting options. You can change the formatting as desired."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X POST -i -c --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -d '{}' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/documents/335FFA9640B5F1C1E0C0F3A469E627A8/instances/0ADDDAF34260EBA5D5FB73BFE5852AC3/pdf'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsxs)(n.p,{children:['The REST server returns a JSON object containing the "data" property which includes the PDF data in Base64-encoded binary. To see a sample Base64-encoded binary data file or PDF file for the document, refer to the ',(0,t.jsx)(n.a,{href:"/rest-api-docs/common-workflows/analytics/export-to-pdf",children:"Export to PDF"})," topic."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": "JVBERi0xL..."\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Code: 200 (Success: OK)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"update-the-dashboard-instance-with-a-revised-filter-definition-applied",children:"Update the dashboard instance, with a revised filter definition applied"}),"\n",(0,t.jsx)(n.h3,{id:"update-the-filter-definition",children:"Update the filter definition"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters"})," to execute the dashboard instance with a revised definition for the existing filter applied."]}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/setFilters",children:"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters"})]}),"\n",(0,t.jsx)(n.p,{children:"This endpoint allows the caller to execute a specific dashboard instance with an updated filter definition. It updates the instance of the dashboard with the new filter definition applied. To execute this API, you need to provide the following as values for the request parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Authorization token generated by ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"})]}),"\n",(0,t.jsxs)(n.li,{children:["Project ID generated by ",(0,t.jsx)(n.code,{children:"GET /api/projects"})]}),"\n",(0,t.jsxs)(n.li,{children:["Dashboard ID generated by ",(0,t.jsx)(n.code,{children:"GET /api/dossiers dossiers/{dossierId}/definition"})," or other endpoints"]}),"\n",(0,t.jsxs)(n.li,{children:["Dashboard instance ID generated by ",(0,t.jsx)(n.code,{children:"POST /api/dossiers/{dossierId}/instances"})]}),"\n",(0,t.jsx)(n.li,{children:"Filter definition in the body request parameter"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"This has to be the same filter that was originally applied, but with different values."})}),"\n",(0,t.jsxs)(n.p,{children:['In this example, you execute a dashboard called "Filters" (located in MicroStrategy Tutorial>Shared Reports. You use the authorization token returned during login as the value for ',(0,t.jsx)(n.code,{children:"X-MSTR-AuthToken"})," and provide the project ID, dashboard ID, dashboard instance ID, and filter definition. In the request body, you modify the values for the filter to be applied to the dashboard when it is executed. The resulting HTTP response returns an HTTP status 204."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_POST_documents_parameters",src:s(38490).A+"",width:"1280",height:"497"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "key": "WF31A639ECE9E4193AC374F45892DFDB4",\n    "name": "cost",\n    "qualifier": "Between",\n    "constants": ["15000", "20000"],\n    "dataType": "Real"\n  }\n]\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X PUT --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: 70ui9meikiiqgh9u617tnflfcq\' --header \'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F\' -d \'[\n {\n  "key": "WF31A639ECE9E4193AC374F45892DFDB4",\n  "name": "cost",\n  "qualifier": "Between",\n  "constants": ["15000", "20000"],\n  "dataType": "Real"\n }\n]\' \'http://localhost:8282/consume-dev/api/dossiers/D04C958044B392149FCA7C8ECCFB0330/instances/A48B947B40E97E8A5298499CDE6A774A/filters\'\n/335FFA9640B5F1C1E0C0F3A469E627A8/instances\'\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"clear-all-selections-for-a-filter",children:"Clear all selections for a filter"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"POST /api/dossiers/{dossierId}/instances"})," or ",(0,t.jsx)(n.code,{children:"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters"})," to clear all of the current filter selections for an individual filter."]}),"\n",(0,t.jsx)(n.p,{children:"To clear all of the current filter selections for an individual filter, you call one of the following APIs and provide nothing but the filter name or ID:"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2",children:"POST /api/dossiers/{dossierId}/instances"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample code for clearing filter selections using the filter ID:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "filters": [\n    {\n      "key": "WC8587FF21995453CBE5F0B66702BF56F"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample code for clearing filter selections using the filter name:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "filters": [\n    {\n      "name": "Brand"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/setFilters",children:"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample code for clearing filter selections using the filter ID:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "key": "WC8587FF21995453CBE5F0B66702BF56F"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample code for clearing filter selections using the filter name:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "name": "Brand"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"export-the-dashboard-instance-to-pdf-again",children:"Export the dashboard instance to PDF again"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"POST /api/documents/{id}/instances/{instanceId}/pdf"})," again to export the dashboard to a PDF file. This allows you to see the results with a revised definition for the existing filter applied."]}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/exportDashboardToPdf",children:"POST /api/documents/{id}/instances/{instanceId}/pdf"})]}),"\n",(0,t.jsx)(n.p,{children:"Just like step 6, this endpoint allows the caller to export the dashboard instance to a PDF file using the instance ID and object ID of the dashboard. However, the results are now different, based on the new filter definition that was applied when the dashboard instance was executed in the previous step."}),"\n",(0,t.jsx)(n.h2,{id:"log-out",children:"Log out"}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.code,{children:"POST /api/logout"})," to close the session."]}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout",children:"POST /api/auth/logout"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, ",(0,t.jsx)(n.code,{children:"X-MSTR-AuthToken"}),", generated during login. If the call is successful, the resulting HTTP response returns an HTTP status code 204."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X POST -i -c --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Response code: 204 (Success: No Content)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},20500:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_GET_Dossiers_Def_Params-f4d7a4a6b106e699a5bae6d655aa59ce.jpg"},76432:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_GET_Dossiers_Params-7eef4fd62af68e895fe4dad5a7674293.jpg"},36968:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_GET_Projects_Params-446d5ec557e4810c2d2d36cda7feccfd.jpg"},55784:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_POST_documents_PDF_parameters-6c9d486d48aacc4a850b594302df3e3a.png"},38490:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_POST_documents_parameters-99f2507f0c0c42bb865f80b8811ac5f2.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);