"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3192],{30950:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(74848),i=s(28453);const r={title:"Create subscription with prompted content",description:"This workflow sample demonstrates how to create a prompted subscription."},o=void 0,a={id:"common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-with-prompted-content",title:"Create subscription with prompted content",description:"This workflow sample demonstrates how to create a prompted subscription.",source:"@site/docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-with-prompted-content.md",sourceDirName:"common-workflows/administration/distribution-services/manage-subscriptions",slug:"/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-with-prompted-content",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-with-prompted-content",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-with-prompted-content.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Create subscription with prompted content",description:"This workflow sample demonstrates how to create a prompted subscription."},sidebar:"tutorialSidebar",previous:{title:"Create subscription for multi content",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-for-multi-content"},next:{title:"Datasource management",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/"}},c={},d=[{value:"Log in",id:"log-in",level:2},{value:"Get a list of available projects",id:"get-a-list-of-available-projects",level:2},{value:"Create a report instance and answer its prompts",id:"create-a-report-instance-and-answer-its-prompts",level:2},{value:"Get info for user",id:"get-info-for-user",level:2},{value:"Create a user email address",id:"create-a-user-email-address",level:2},{value:"Create a new subscription",id:"create-a-new-subscription",level:2},{value:"Send the specified subscription immediately",id:"send-the-specified-subscription-immediately",level:2},{value:"Delete the subscription",id:"delete-the-subscription",level:2},{value:"Delete the user address",id:"delete-the-user-address",level:2},{value:"Close existing session and logout",id:"close-existing-session-and-logout",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can try out this workflow at ",(0,t.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-4fce986e-f37b-4fb8-94ff-b0978d1ef849?ctx=documentation",children:"REST API Playground"}),"."]}),(0,t.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,t.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"This workflow sample demonstrates how to create a prompted subscription."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#log-in",children:"Log in."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#get-a-list-of-available-projects",children:"Get projects."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#create-a-report-instance-and-answer-its-prompts",children:"Create a report instance and answer prompts."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#get-info-for-user",children:"Get user's ID."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#create-a-user-email-address",children:"Create user's email."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#create-a-new-subscription",children:"Create subscription."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#send-the-specified-subscription-immediately",children:"Send subscription now."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#delete-the-subscription",children:"Delete the subscription."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#delete-the-user-address",children:"Delete the email."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#close-existing-session-and-logout",children:"Logout."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A detailed description of each step of this workflow is listed down below."}),"\n",(0,t.jsx)(n.h2,{id:"log-in",children:"Log in"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing ",(0,t.jsx)(n.code,{children:"X-MSTR-AuthToken"}),", the authorization token that will be used in subsequent requests."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Request Headers"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Content-Type: application/json'\n'Accept: application/json'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Request Body"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Curl"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -i -c ~/cookie-jar.txt --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\\\n"loginMode":1, \\\\\n"username": "administrator", \\\\\n"password": "" \\\\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Response Headers"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "{AuthToken}",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 16 Aug 2017 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:['The authorization token "',(0,t.jsx)(n.code,{children:"x-mstr-authtoken"}),'" is returned in the response header. It is used in other endpoints to authenticate the user.']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Code: 204 (Success: No Content)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-a-list-of-available-projects",children:"Get a list of available projects"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to get the list of projects with the MicroStrategy REST Server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned during login as the value for ",(0,t.jsx)(n.code,{children:"X-MSTR-AuthToken"}),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: {AuthToken}'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: {AuthToken}'  https://demo.microstrategy.com/MicroStrategyLibrary/api/projects\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    "name": "MicroStrategy Tutorial",\n    "alias": "",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",\n    "status": 0\n  },\n  {\n    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",\n    "name": "Human Resources Analysis Module",\n    "alias": "",\n    "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",\n    "status": 0\n  }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"The response body contains information for each project that is returned, including the project ID that you will use in later endpoints."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-report-instance-and-answer-its-prompts",children:"Create a report instance and answer its prompts"}),"\n",(0,t.jsxs)(n.p,{children:["This workflow is covered in detail under /Common-Workflows/Manage-Prompt-Objects/Prompt-Types/. We will find a prompted report, instantiate it, and answer its prompts for use in a subscription. We use the Auth Token, obtained from ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"})," along with the project id of the tutorial project obtained from ",(0,t.jsx)(n.code,{children:"GET /api/projects"})," to search for a report."]}),"\n",(0,t.jsxs)(n.p,{children:["Find a report: ",(0,t.jsx)(n.code,{children:"GET /api/searches/results?name=Actual%20vs.%20Forecast&type=3"})," Create report instance: ",(0,t.jsx)(n.code,{children:"POST /api/reports/{reportId}/instances"})," Get prompts associated with report instance: ",(0,t.jsx)(n.code,{children:"GET /api/reports/{reportId}/instances/{instanceId}/prompts"})," Get available answers for first prompt: ",(0,t.jsx)(n.code,{children:"GET /api/reports/{reportId}/instances/{instanceId}/prompts/{promptKey}/elements"})," Get available answers for second prompt: ",(0,t.jsx)(n.code,{children:"GET /api/reports/{reportId}/instances/{instanceId}/prompts/{promptKey}/elements"})," Answer the prompts: ",(0,t.jsx)(n.code,{children:"PUT /api/reports/{reportId}/instances/{instanceId}/prompts/answers"})]}),"\n",(0,t.jsx)(n.p,{children:"Save the report id and instance id for use with the subscription."}),"\n",(0,t.jsx)(n.h2,{id:"get-info-for-user",children:"Get info for user"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers",children:"GET /api/users"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows you to retrieve information for a specific set of users. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you pass the authorization token in the request header. You identify the set of users to be returned with query parameters that specify the characters that the user name or abbreviation must begin with. You can use other query parameters to limit the results that are returned by specifying a starting point within the results and the maximum number of results that should be returned. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all users that meet the query parameters."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: {AuthToken}'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json'\n--header 'X-MSTR-AuthToken: {AuthToken}' https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameBegins=MicroStrategy Web User&fields=name,id\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": "",\n    "name": "MicroStrategy Web User"\n  }\n]\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-user-email-address",children:"Create a user email address"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createNewAddress",children:"POST /api/users/{id}/addresses"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows you to create a new address for a specific user. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request. You provide the information used to create the new user address in the body parameter of the request - including the name and actual value for the address, whether it is the default address, and the type of delivery and content style. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the newly created address."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: {AuthToken}'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "default_email",\n  "deliveryMode": "EMAIL",\n  "device": "GENERIC_EMAIL",\n  "value": "user@test.email.com",\n  "isDefault": true\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -i -t ~/cookie-jar.txt \'https://demo.microstrategy.com/MicroStrategyLibrary/api/users/{userId}/addresses\' \\ --header \'X-MSTR-AuthToken: {AuthToken}\' \\ --header \'Content-Type: application/json\' \\ --data-raw \'{ "name": "default_email", "deliveryMode": "EMAIL", "device": "GENERIC_EMAIL", "value": "user@test.email.com", "isDefault": true }\'\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "addresses": [\n    {\n      "id": "DE83FC6FBA49338EDF075DA65B46A5A5",\n      "name": "default_email",\n      "deliveryMode": "EMAIL",\n      "deviceId": "1D2E6D168A7711D4BE8100B0D04B6F0B",\n      "value": "user@test.email.com",\n      "isDefault": true\n    },\n    {\n      "id": "DAB285532C1D4659B89C9E224CA8E8E2",\n      "name": "Office Address",\n      "deliveryMode": "EMAIL",\n      "deviceId": "719D165ADFFE4A4D804E93D7A0C6CDE7",\n      "value": "user@yourorganization.com",\n      "isDefault": false\n    },\n    {\n      "id": "593571F4551E437A8D8A9358AB5CD7C4",\n      "name": "Shared Drive",\n      "deliveryMode": "EMAIL",\n      "deviceId": "18F9613B681E4E4FA671D1AED6B7B375",\n      "value": "C:\\\\Program Files\\\\MicroStrategy\\\\Analytics Modules",\n      "isDefault": true\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-new-subscription",children:"Create a new subscription"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/createSubscription",children:"POST /api/subscriptions"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows you to create a new subscription for a given project. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you obtain the project ID using ",(0,t.jsx)(n.code,{children:"GET /api/projects"}),". You provide the information used to create a subscription in the body parameter of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 201 and a response body containing all the information on the newly created subscription."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: {AuthToken}'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Prompt Example Subscription",\n  "editable": true,\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA"\n    }\n  ],\n  "contents": [\n    {\n      "id": "{{reportId}}",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML",\n        "prompt": {\n          "enabled": true,\n          "instanceId": "{{instanceId}}"\n        }\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "type": "user",\n      "includeType": "TO"\n    }\n  ],\n  "delivery": {\n    "mode": "EMAIL",\n    "contactSecurity": false,\n    "email": {\n      "subject": "Actual vs. Forecast Performance",\n      "filename": "Actual vs. Forecast Performance",\n      "sendContentAs": "data",\n      "overwriteOlderVersion": false\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -i -t ~/cookie-jar.txt \'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions\' \\\n    --header \'X-MSTR-AuthToken: {AuthToken}\' \\\n    --header \'Content-Type: application/json\' \\\n    --data-raw \'{ "name": "Prompt Example Subscription", "editable": true,\n    "allowDeliveryChanges": false, "allowPersonalizationChanges": false,\n    "allowUnsubscribe": false, "schedules": [ { "id":\n    "3450AE6F4E29E9A6E1075DA93B7062AA" } ], "contents": [ { "id": "{{reportId}}",\n    "type": "report", "personalization": { "compressed": false, "formatMode":\n    "CURRENT_PAGE", "viewMode": "BOTH", "formatType": "HTML", "prompt": {\n    "enabled": true, "instanceId": "{{instanceId}}" } }\n\n        }\n    ],\n    "recipients": [\n        {\n            "id": "54F3D26011D2896560009A8E67019608",\n            "type": "user",\n            "includeType":"TO"\n\n        }\n    ],\n    "delivery": {\n        "mode": "EMAIL",\n        "contactSecurity": false,\n        "email": {\n            "subject": "Actual vs. Forecast Performance",\n            "filename": "Actual vs. Forecast Performance",\n            "sendContentAs": "data",\n            "overwriteOlderVersion": false\n        }\n    }\n    }\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "06BB2E9E8E4494F124253AA377AECC1E",\n  "multipleContents": false,\n  "name": "Prompt Example Subscription",\n  "editable": true,\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "dateCreated": "2021-08-03T20:37:31+0000",\n  "dateModified": "2021-08-03T20:37:31+0000",\n  "owner": {\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233",\n    "name": "MSTR User"\n  },\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA",\n      "name": "Books Closed",\n      "type": "event_based",\n      "expired": false\n    }\n  ],\n  "contents": [\n    {\n      "id": "9B5802154BB9F7E388B04480F882F6CF",\n      "name": "Actual vs. Forecast Performance",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML",\n        "prompt": {\n          "enabled": true\n        }\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "isGroup": false,\n      "type": "user",\n      "includeType": "TO",\n      "childSubscriptionId": "8C1F55751145A6DEBC36ECA879025BC5"\n    }\n  ],\n  "delivery": {\n    "mode": "EMAIL",\n    "contactSecurity": false,\n    "email": {\n      "subject": "Actual vs. Forecast Performance",\n      "filename": "Actual vs. Forecast Performance",\n      "sendContentAs": "data",\n      "overwriteOlderVersion": false\n    }\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"send-the-specified-subscription-immediately",children:"Send the specified subscription immediately"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/sendSubscription",children:"POST /api/subscriptions/{id}/send"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint sends the specified subscription immediately. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you obtain the project ID using ",(0,t.jsx)(n.code,{children:"GET /api/projects"}),". You identify the subscription by specifying the subscription ID in the request, you provide the information to send the subscription ID in the path parameter of the request. If the content is prompted and the user wants to update the answers, the user can answer the prompts and then provide content id and instance id as the request body of the call. If the call is successful, the resulting HTTP response returns an HTTP status code of 202 and an empty response body."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'X-MSTR-AuthToken: {AuthToken}'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n'Content-Type: application/json'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "contentId": "{reportId}",\n  "instanceId": "{instanceId}"\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X POST -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/{subId}/send' \\ --header 'X-MSTR-AuthToken: {AuthToken}' \\ --header 'Content-Type: application/json' \\ --data-raw ' { \"contentId\": \"{reportId}\", \"instanceId\": \"{instanceId}\" }'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "06BB2E9E8E4494F124253AA377AECC1E",\n  "multipleContents": false,\n  "name": "Prompt Example Subscription",\n  "editable": true,\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "dateCreated": "2021-08-03T20:37:31+0000",\n  "dateModified": "2021-08-03T20:37:31+0000",\n  "owner": {\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233",\n    "name": "MSTR User"\n  },\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA",\n      "name": "Books Closed",\n      "type": "event_based",\n      "expired": false\n    }\n  ],\n  "contents": [\n    {\n      "id": "9B5802154BB9F7E388B04480F882F6CF",\n      "name": "Actual vs. Forecast Performance",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML",\n        "prompt": {\n          "enabled": true\n        }\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "isGroup": false,\n      "type": "user",\n      "includeType": "TO",\n      "childSubscriptionId": "8C1F55751145A6DEBC36ECA879025BC5"\n    }\n  ],\n  "delivery": {\n    "mode": "EMAIL",\n    "contactSecurity": false,\n    "email": {\n      "subject": "Actual vs. Forecast Performance",\n      "filename": "Actual vs. Forecast Performance",\n      "sendContentAs": "data",\n      "overwriteOlderVersion": false\n    }\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"delete-the-subscription",children:"Delete the subscription"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/removeSubscription",children:"DELETE /api/subscriptions/{id}"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows you to delete/unsubscribe from the specified subscription. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you obtain the project ID using ",(0,t.jsx)(n.code,{children:"GET /api/projects"}),". You delete the subscription by specifying the subscription ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'X-MSTR-AuthToken: {AuthToken}'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n'Accept: application/json'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"  No content\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X DELETE -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/{subId}' \\ --header 'X-MSTR-AuthToken: {AuthToken}' \\ --header 'Accept: application/json'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"  No content\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"delete-the-user-address",children:"Delete the user address"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/deleteUserAddress",children:"DELETE /api/users/{userID}/addresses/{addressID}"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows you to delete the specified user address. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you obtain the project ID using ",(0,t.jsx)(n.code,{children:"GET /api/projects"}),". You delete the address by specifying the user ID and address ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'X-MSTR-AuthToken: {AuthToken}'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n'Accept: application/json'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"  No content\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X DELETE -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/users/{userId}/addresses/{addressId}' \\ --header 'X-MSTR-AuthToken: {AuthToken}' \\ --header 'Accept: application/json'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"  No content\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"close-existing-session-and-logout",children:"Close existing session and logout"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout",children:"POST /api/auth/logout"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint closes all existing sessions for the authenticated user and logs them out. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you pass the authorization token in the request header. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body and the authorization token is no longer valid."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'X-MSTR-AuthToken: {AuthToken}'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body"}),"\n",(0,t.jsx)(n.p,{children:"No content"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl --location --request POST 'https://env-260240.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/auth/logout' \\ --header 'Content-Type: application/json' \\ --header 'X-MSTR-AuthToken: {AuthToken}'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.p,{children:"No content"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);