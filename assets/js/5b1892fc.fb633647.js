"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8806],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(g,i(i({ref:t},l),{},{components:a})):n.createElement(g,i({ref:t},l))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4857:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],p={title:"Workflow Sample - Create and Update User Groups",sidebar_label:"Create and Update User Groups",description:"A workflow sample for managing user groups in the metadata is provided below. The following sequence of REST API requests allows an administrative user to create and update a user group, and optionally get information about the user group to confirm the creation and updates."},s=void 0,u={unversionedId:"common-workflows/manage-user-and-user-groups/create-and-update-user-groups",id:"common-workflows/manage-user-and-user-groups/create-and-update-user-groups",title:"Workflow Sample - Create and Update User Groups",description:"A workflow sample for managing user groups in the metadata is provided below. The following sequence of REST API requests allows an administrative user to create and update a user group, and optionally get information about the user group to confirm the creation and updates.",source:"@site/docs/common-workflows/manage-user-and-user-groups/create-and-update-user-groups.md",sourceDirName:"common-workflows/manage-user-and-user-groups",slug:"/common-workflows/manage-user-and-user-groups/create-and-update-user-groups",permalink:"/common-workflows/manage-user-and-user-groups/create-and-update-user-groups",draft:!1,editUrl:"https://undefined/undefined/restapi-docs/tree/main/docs/common-workflows/manage-user-and-user-groups/create-and-update-user-groups.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663186539,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Create and Update User Groups",sidebar_label:"Create and Update User Groups",description:"A workflow sample for managing user groups in the metadata is provided below. The following sequence of REST API requests allows an administrative user to create and update a user group, and optionally get information about the user group to confirm the creation and updates."},sidebar:"tutorialSidebar",previous:{title:"Manage Users and User Groups",permalink:"/common-workflows/manage-user-and-user-groups/"},next:{title:"Create New Users",permalink:"/common-workflows/manage-user-and-user-groups/create-new-users"}},l={},d=[{value:"Log in",id:"log-in",level:2},{value:"Create a user group",id:"create-a-user-group",level:2},{value:"Update a user group",id:"update-a-user-group",level:2},{value:"Get information about a user group",id:"get-information-about-a-user-group",level:2},{value:"Log out",id:"log-out",level:2}],m={toc:d};function c(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-19b75da6-a5cf-47a0-a202-a4248e893d7c?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"A workflow sample for managing user groups in the metadata is provided below. The following sequence of REST API requests allows an administrative user to create and update a user group, and optionally get information about the user group to confirm the creation and updates."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#log-in"},"Log in")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")," to authenticate into the environment."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-user-group"},"Create a user group")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/usergroups")," to create a new user group."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#update-a-user-group"},"Update a user group")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"PATCH /api/usergroups/{id}")," to update information for the new user group."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#get-information-about-a-user-group"},"Optionally, get information about a user group")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/usergroups/{id}")," to view information about a user group, including changes made to the user group."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#log-out"},"Log out")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/logout")," to close the session.")),(0,o.kt)("p",null,"To make it easy for you to test this workflow in your environment, ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/downloads/RESTSDK/PostmanScripts/ManagingUserGroups_postman_collection.zip"},"download the zipped Postman script")," provided for you, extract the JSON file, and configure it to point to your Web server."),(0,o.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,o.kt)("h2",{id:"log-in"},"Log in"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")),(0,o.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide ",(0,o.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"password"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"loginMode")," (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns a status code 204 and a response header containing ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", the authorization token that will be used by subsequent requests."),(0,o.kt)("p",null,'In this example, you will use Standard authentication and log in as "administrator" with no password.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_auth_login_938x476",src:a(5327).Z,width:"938",height:"476"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request Headers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type: application/json"\n"Accept: application/json"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("p",{parentName:"li"},'When loginMode is set to "1", Standard authentication is used.'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\n  "loginMode":1, \\\n  "username": "administrator", \\\n  "password": "" \\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Headers"),(0,o.kt)("p",{parentName:"li"},"The authorization token ",(0,o.kt)("inlineCode",{parentName:"p"},'"x-mstr-authtoken"')," is returned in the response header. It is used by other endpoints to authenticate the user."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 22 Aug 2018 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 204 (Success: No Content)"))),(0,o.kt)("h2",{id:"create-a-user-group"},"Create a user group"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/usergroups")),(0,o.kt)("p",null,"This endpoint allows a caller with administrative rights to create a new user group. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You provide the information to create the user group in the body parameter of the request."),(0,o.kt)("p",null,'In this example, you create a new user group called "Developers". You make it a member of a parent user group called "Technology", and you add a child user group called "Testers". You need to provide the IDs of the parent and child user groups as part of the user group creation information in the request body. To get these IDs, you first get a list of user groups using GET /api/usergroups. The response to this endpoint includes the names and IDs of all available user groups. You then find the names and IDs of the user groups that you want to use when you create the user group.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_UserGroups",src:a(2315).Z,width:"950",height:"800"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/User_Management/createUserGroup"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/User_Management/createUserGroup")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Parameters"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login"),", required to authenticate caller"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"body")," Information used to create the user group, including the name and description of the user group, and the IDs of the parent user group (memberships) and child users/user groups (members)."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers ",(0,o.kt)("inlineCode",{parentName:"p"},"'Accept: application/json' 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Developers",\n  "description": "Software Engineers (SEs)",\n  "memberships": ["3A22AF3611E8A63CFA170080EF35139A"],\n  "members": ["5F90C74FB2944D70930B9BDDA6D2FBF1"]\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' -d \'{\n  "name": "Developers",\n  "description": "Software Developers",\n  "memberships": [\n    "3A22AF3611E8A63CFA170080EF35139A",\n  ]\n  "members": [\n    "5F90C74FB2944D70930B9BDDA6D2FBF1"\n  ]\n} \'https://demo.microstrategy.com/MicroStrategyLibrary/api/usergroups\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("p",{parentName:"li"},"The response body contains information about the user group that was created, including the user group ID that will be used by later endpoints to identify the user group."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Developers",\n  "id": "F9A9F96011E8A644E5FF0080EF25F39A",\n  "type": "34",\n  "abbreviation": "SEs",\n  "description": "Software Developers",\n  "subtype": 8705,\n  "extType": 0,\n  "dateCreated": "2018-08-22T19:53:01.000+0000",\n  "dateModified": "2018-08-22T19:53:02.000+0000",\n\n  "membership": [\n    {\n      "id": "3A22AF3611E8A63CFA170080EF35139A"\n    }\n  ],\n  "members": [\n    {\n      "id": "5F90C74FB2944D70930B9BDDA6D2FBF1"\n    }\n  ]\n}\n')))),(0,o.kt)("h2",{id:"update-a-user-group"},"Update a user group"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /usergroups/{id}")),(0,o.kt)("p",null,"This endpoint allows a caller with administrative rights to update specific information for a specific user group, including the name, description, parent user group, and child users or user groups. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /auth/login"),"; you pass the authorization token in the request header. You identify the user group by specifying the usergroup ID in the path of the request, as the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"{id}"),"; you obtain the usergroup ID using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /usergroups"),". You specify the type of update operation (add, replace or remove), provide the value to be used in the update operation, and specify the path to the target where the update operation will be performed, in the body parameter of the request."),(0,o.kt)("p",null,'In this example, you update the new user group called "Developers". You change the description from "Software Developers" to "Software Engineers", remove the child user group called "Testers", and add a new child user group called "SDK Developers". You need to provide the ID of the new child user group as part of the user group update information in the request body. To get this ID, you first get a list of user groups using ',(0,o.kt)("inlineCode",{parentName:"p"},"GET /usergroups"),". The response to this endpoint includes the names and IDs of all available user groups. You then find the name and ID of the user group that you want to use when you update the user group."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_PATCH_UserGroups",src:a(9651).Z,width:"950",height:"830"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/User_Management/updateUserGroup"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/User_Management/updatePartialUser")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Parameters"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /auth/login"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"id")," ID of the user group to be updated. You generated this ID when you created the new user group in the previous step using ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /usergroups"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"body"),' Information used to perform the update, the update operation to be performed ("add", "replace", or "remove"), the property to be updated, and the value to be used in the update operation. You can perform one or more update operations.'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json",\n"Accept": "application/json",\n"X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Parameters"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c",\n"id": "F9A9F96011E8A644E5FF0080EF25F39A"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": "Software Engineers"\n    },\n    {\n      "op": "remove",\n      "path": "/members",\n      "value": "5F90C74FB2944D70930B9BDDA6D2FBF1"\n    },\n    {\n      "op": "add",\n      "path": "/members",\n      "value": ["C82C6B1011D2894CC0009D9F29718E4F"]\n    }\n  ]\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' -d \'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": [\n            "Software Engineers"\n      ]\n    },\n    {\n      "op": "remove",\n      "path": "/members",\n      "value": [\n            "5F90C74FB2944D70930B9BDDA6D2FBF1"\n      ]\n    },\n    {\n      "op": "add",\n      "path": "/members",\n      "value": [\n            "C82C6B1011D2894CC0009D9F29718E4F"\n      ]\n    }\n  ]\n} \'https://demo.microstrategy.com/MicroStrategyLibrary/api/usergroups/F9A9\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("p",{parentName:"li"},"The REST server returns a JSON object containing the updated information for the user group."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Developers",\n  "id": "F9A9F96011E8A644E5FF0080EF25F39A",\n  "type": "34",\n  "abbreviation": "SEs",\n  "description": "Software Engineers",\n  "membership": [\n    {\n      "id": "3A22AF3611E8A63CFA170080EF35139A"\n    }\n  ],\n  "members": [\n    {\n      "id": "5F90C74FB2944D70930B9BDDA6D2FBF1"\n    }\n  ]\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 200 (Success: OK)"))),(0,o.kt)("h2",{id:"get-information-about-a-user-group"},"Get information about a user group"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/usergroups/{id}")),(0,o.kt)("p",null,"This endpoint allows a caller with administrative rights to get information for a specific user group. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You identify the user group by specifying the usergroup ID in the path of the request, as the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"{id}"),"; you obtain the usergroup ID using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/usergroups"),"."),(0,o.kt)("p",null,'In this example, you get information for the user group you created and updated, called "Developers". You confirm that the description is now "Software Engineers" and that there is only one child user group called "SDK Developers". The child user group is defined by its ID instead of its name, so you need to confirm that the value for id under members is the ID for "SDK Developers". This is the ID you provided when you performed the update. You got the ID for that request by first getting a list of user groups using ',(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/usergroups")," and then looking at the response which includes the names and IDs of all available user groups."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_GET_UserGroups_id_940x590",src:a(1855).Z,width:"940",height:"590"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/User_Management/getUserGroups"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/User_Management/getUserGroups")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Parameters"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"id")," ID of the user group to be updated. You generated this ID when you created the new user group in a previous step using ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/usergroups"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'{\n  "Accept": "application/json",\n  "X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/usergroups/F9A9F96011E8A644E5FF0080EF25F\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("p",{parentName:"li"},'The REST server returns a JSON object containing all of the information for the specified user group\u2014in this example, "Developers"; this includes the name, ID, description, and many other pieces of information. You can find the detailed parameter definitions in the Response Body on the Swagger page under ',(0,o.kt)("strong",{parentName:"p"},"Response Class")," > ",(0,o.kt)("strong",{parentName:"p"},"Model"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Developers",\n  "id": "F9A9F96011E8A644E5FF0080EF25F39A",\n  "type": "34",\n  "abbreviation": "SEs",\n  "description": "Software Engineers",\n  "subtype": 8705,\n  "extType": 0,\n  "dateCreated": "2018-08-22T19:53:01.000+0000",\n  "dateModified": "2018-08-22T19:53:02.000+0000",\n  "membership": [\n    {\n      "id": "3A22AF3611E8A63CFA170080EF35139A"\n    }\n  ],\n  "members": [\n    {\n      "id": "C82C6B1011D2894CC0009D9F29718E4F"\n    }\n  ]\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 200 (OK)"))),(0,o.kt)("h2",{id:"log-out"},"Log out"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/logout")),(0,o.kt)("p",null,"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_auth_logout_940x208",src:a(6945).Z,width:"940",height:"208"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Header"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Accept": "application/json"\n"X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Response code: 204")))}c.isMDXComponent=!0},1855:function(e,t,a){t.Z=a.p+"assets/images/swagger_GET_UserGroups_id_940x590-433ea7d8dfaeee167e4a0323694e9ab3.png"},9651:function(e,t,a){t.Z=a.p+"assets/images/swagger_PATCH_UserGroups-de340eb9d9f644ae23303602037211ca.jpg"},2315:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_UserGroups-d195fd8ffd2e1a4f7f59f2650c17e67f.jpg"},5327:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_auth_login_938x476-d5209f2d7a15b90a70c32040a3e28389.png"},6945:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_auth_logout_940x208-1621d0c593ded13663bda58e532842ac.png"}}]);