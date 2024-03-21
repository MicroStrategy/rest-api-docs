"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8227],{10772:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(74848),r=s(28453);const i={title:"Manage users",sidebar_label:"Manage users",description:"A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates."},a=void 0,o={id:"common-workflows/administration/user-management/manage-users",title:"Manage users",description:"A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates.",source:"@site/docs/common-workflows/administration/user-management/manage-users.md",sourceDirName:"common-workflows/administration/user-management",slug:"/common-workflows/administration/user-management/manage-users",permalink:"/rest-api-docs/common-workflows/administration/user-management/manage-users",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/user-management/manage-users.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Manage users",sidebar_label:"Manage users",description:"A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates."},sidebar:"tutorialSidebar",previous:{title:"Create new users",permalink:"/rest-api-docs/common-workflows/administration/user-management/create-new-users"},next:{title:"Create security roles",permalink:"/rest-api-docs/common-workflows/administration/user-management/create-security-roles"}},d={},c=[{value:"Log in",id:"log-in",level:2},{value:"Search for a user",id:"search-for-a-user",level:2},{value:"Update a user",id:"update-a-user",level:2},{value:"Get information about a user",id:"get-information-about-a-user",level:2},{value:"Log out",id:"log-out",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can try out this workflow at ",(0,t.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-be8db67e-6743-49ef-beb5-9efb96e01e4b?ctx=documentation",children:"REST API Playground"}),"."]}),(0,t.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,t.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#log-in",children:"Log in"})," Admin user calls ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"})," to authenticate into the environment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#search-for-a-user",children:"Search for a user"})," Admin user calls ",(0,t.jsx)(n.code,{children:"GET /api/users"})," to search for a specific user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#update-a-user",children:"Update a user"})," Admin user calls ",(0,t.jsx)(n.code,{children:"PATCH /api/users/{id}"})," to update information for a specific user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#get-information-about-a-user",children:"Get information about a user"})," Admin user calls ",(0,t.jsx)(n.code,{children:"GET /api/users/{id}"})," to view information for a user, including changes made to the user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#log-out",children:"Log out"})," Admin user calls ",(0,t.jsx)(n.code,{children:"POST /api/logout"})," to close the session."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To make it easy for you to test this workflow in your environment, ",(0,t.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/2021/downloads/RESTSDK/PostmanScripts/ManagingUsers_postman_collection.zip",children:"download the zipped Postman script"})," provided for you, extract the JSON file, and configure it to point to your Web server."]}),"\n",(0,t.jsx)(n.p,{children:"A detailed explanation of each step is provided below:"}),"\n",(0,t.jsx)(n.h2,{id:"log-in",children:"Log in"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide ",(0,t.jsx)(n.code,{children:"username"}),", ",(0,t.jsx)(n.code,{children:"password"}),", and ",(0,t.jsx)(n.code,{children:"loginMode"})," (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns a status code 204 and a response header containing ",(0,t.jsx)(n.code,{children:"X-MSTR-AuthToken"}),", the authorization token that will be used by subsequent requests."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_POST_auth_login",src:s(23235).A+"",width:"1276",height:"648"})}),"\n",(0,t.jsxs)(n.p,{children:["REST API Explorer: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Content-Type: application/json'\n'Accept: application/json'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -i -c --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\n  "loginMode":1, \\\n  "username": "administrator", \\\n  "password": "" \\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Header"}),"\n",(0,t.jsx)(n.p,{children:'The authorization token "x-mstr-authtoken" is returned in the response header. It is used by other endpoints to authenticate the user.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 22 Aug 2018 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Code: 204 (Success: No Content)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"search-for-a-user",children:"Search for a user"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers",children:"GET /api/users"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to get information for a specific set of users. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you pass the authorization token in the request header. You identify the set of users to be returned with query parameters in the URL that specify the characters that the user name or abbreviation must begin with. You can use other query parameters to limit the results that are returned by specifying a starting point within the results and the maximum number of results that should be returned."]}),"\n",(0,t.jsxs)(n.p,{children:['In this example, you are going to search for the user "John Smith". To do this, you use the query parameter ',(0,t.jsx)(n.code,{children:"nameBegins"}),' and set it to "John". If there are multiple users whose first name is John, you choose "John Smith" and get his user ID.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_GET_users",src:s(77539).A+"",width:"996",height:"885"})}),"\n",(0,t.jsxs)(n.p,{children:["REST API Explorer: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createUserGroup",children:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Parameters"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"})," Authorization token generated by ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),", required to authenticate caller"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"nameBegins"})," Characters that the user name must begin with."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"abbreviationBegins"})," Characters that the user abbreviation must begin with."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"offset"})," Starting point within the collection of returned search results."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"limit"})," Maximum number of items returned for a single search request."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' -d\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameegins=John&offset=0&amp;limit=-1\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.p,{children:"The response body contains information about the user that was created, including the user ID that will be used by later endpoints to identify the user."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "name": "John Smith",\n    "id": "8D0C05F2456F52E4AA737891B4659201",\n    "abbreviation": "jsmith",\n    "description": "Senior Software Engineer",\n    "type": 34,\n    "subtype": 8704,\n    "extType": 0,\n    "dateCreated": "2019-03-04T17:55:07.000+0000",\n    "dateModified": "2019-03-04T18:08:38.000+0000",\n    "version": "D5C5F280432238D70EE14F839E136711",\n    "acg": 255,\n    "iconPath": "",\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "initials": "JS"\n  }\n]\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Code: 200 (Success: OK)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"update-a-user",children:"Update a user"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updatePartialUser",children:"PATCH /api/users/{id}"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to update specific information for a specific user. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; you obtain the user ID using ",(0,t.jsx)(n.code,{children:"GET /api/users"})," (as you did in a previous step). You specify the type of update operation (add, replace or remove), provide the value to be used in the update operation, and specify the path to the target where the update operation will be performed, in the body parameter of the request."]}),"\n",(0,t.jsx)(n.p,{children:'In this example, you are going to update the description for the user "John Smith". He received a promotion and is now Principal Software Engineer, instead of Senior Software Engineer.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_PATCH_users_id",src:s(48709).A+"",width:"996",height:"865"})}),"\n",(0,t.jsxs)(n.p,{children:["REST API Explorer: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updateUserGroup",children:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updatePartialUser"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"})," Authorization token generated by ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"id"})," ID of the user to be updated. This ID was generated when the user was created and can be retrieved using ",(0,t.jsx)(n.code,{children:"GET /api/users"})," with query parameters to search for hte user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"body"}),' Information used to perform the update, including the user to be updated, the update operation to be performed ("add", "replace", or "remove"), and the value to be used in the update operation.']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Headers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "Accept": "application/json",\n  "X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": "Principal Software Engineer"\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' -d \'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": "Principal Software Engineer"\n    }\n  ]\n} \'https://demo.microstrategy.com/MicroStrategyLibrary/api/users/8D0C05F2456F52E4AA737891B4659201\'\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.p,{children:"The REST server returns a JSON object containing the updated user information."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "John Smith",\n  "id": "8D0C05F2456F52E4AA737891B4659201",\n  "abbreviation": "jsmith",\n  "description": "Principal Software Engineer",\n  "type": 34,\n  "subtype": 8704,\n  "extType": 0,\n  "dateCreated": "2019-03-04T17:55:07.000+0000",\n  "dateModified": "2019-03-04T18:57:57.000+0000",\n  "version": "D5C5F280432238D70EE14F839E136711",\n  "acg": 255,\n  "iconPath": "",\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Code: 200 (Success: OK)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-information-about-a-user",children:"Get information about a user"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUser",children:"GET /api/users/{id}"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to get information for a specific user. You obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),"; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; you obtain the user ID using ",(0,t.jsx)(n.code,{children:"GET /api/users"})," (as you did in a previous step)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_GET_users_id",src:s(14835).A+"",width:"1280",height:"765"})}),"\n",(0,t.jsxs)(n.p,{children:["REST API Explorer: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUserGroups",children:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"X-MSTR-AuthToken"})," Authorization token generated by ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),".",(0,t.jsx)(n.strong,{children:"offset"})," Location in the list of users to begin returning results."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"id"})," ID of the user to be updated. This ID was generated when the user was created and can be retrieved using ",(0,t.jsx)(n.code,{children:"GET /api/users"})," with query parameters to search for the user."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Accept": "application/json",\n  "X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameBegins=Neel&offset=0&limit=-1'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Body"}),"\n",(0,t.jsx)(n.p,{children:'In this example, the REST server returns information about the user "John Smith". Yuu can verify that the description was changed to "Principal Software Engineer".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "John Smith",\n  "id": "8D0C05F2456F52E4AA737891B4659201",\n  "abbreviation": "jsmith",\n  "description": "Principal Software Engineer",\n  "type": 34,\n  "subtype": 8704,\n  "extType": 0,\n  "dateCreated": "2019-03-04T17:55:07.000+0000",\n  "dateModified": "2019-03-04T18:57:57.000+0000",\n  "version": "D5C5F280432238D70EE14F839E136711",\n  "acg": 255,\n  "iconPath": "",\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Code: 200(Success: OK)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"log-out",children:"Log out"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout",children:"POST /api/auth/logout"})]}),"\n",(0,t.jsxs)(n.p,{children:["This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, ",(0,t.jsx)(n.code,{children:"X-MSTR-AuthToken"}),", generated by ",(0,t.jsx)(n.code,{children:"POST /api/auth/login"}),". If the call is successful, the resulting HTTP response returns an HTTP status code 204."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"swagger_POST_auth_logout",src:s(34668).A+"",width:"1275",height:"283"})}),"\n",(0,t.jsxs)(n.p,{children:["REST API Explorer: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout",children:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request Body: Empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sample Response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Response code: 204"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},77539:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_GET_users-389b30a43a6ef49495d235d7364609b7.png"},14835:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_GET_users_id-2126798cc1662d88d1973e89404ccfa1.png"},48709:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_PATCH_users_id-2644f17bd4e9289a79d061897ee4c8e4.png"},23235:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_POST_auth_login-2be51e6b11363604a15e87b5c142688e.png"},34668:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/swagger_POST_auth_logout-8df2db0375b9c25a2d75451ebff23993.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);