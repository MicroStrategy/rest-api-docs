"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8521],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9308:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={title:"Create new users",sidebar_label:"Create new users",description:"A workflow sample for creating a new user, a process often called onboarding, is provided below. The following sequence of REST API requests allows an administrative user to create a new user, update the user information, create an email address for the user, and send the new user a welcome email."},l=void 0,p={unversionedId:"common-workflows/administration/user-management/create-new-users",id:"common-workflows/administration/user-management/create-new-users",title:"Create new users",description:"A workflow sample for creating a new user, a process often called onboarding, is provided below. The following sequence of REST API requests allows an administrative user to create a new user, update the user information, create an email address for the user, and send the new user a welcome email.",source:"@site/docs/common-workflows/administration/user-management/create-new-users.md",sourceDirName:"common-workflows/administration/user-management",slug:"/common-workflows/administration/user-management/create-new-users",permalink:"/rest-api-docs/common-workflows/administration/user-management/create-new-users",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/user-management/create-new-users.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1676668503,formattedLastUpdatedAt:"Feb 17, 2023",frontMatter:{title:"Create new users",sidebar_label:"Create new users",description:"A workflow sample for creating a new user, a process often called onboarding, is provided below. The following sequence of REST API requests allows an administrative user to create a new user, update the user information, create an email address for the user, and send the new user a welcome email."},sidebar:"tutorialSidebar",previous:{title:"Create and update user groups",permalink:"/rest-api-docs/common-workflows/administration/user-management/create-and-update-user-groups"},next:{title:"Manage users",permalink:"/rest-api-docs/common-workflows/administration/user-management/manage-users"}},u={},m=[{value:"Log in",id:"log-in",level:2},{value:"Create a new user",id:"create-a-new-user",level:2},{value:"Assign the user to a user group",id:"assign-the-user-to-a-user-group",level:2},{value:"Create an email address for the new user",id:"create-an-email-address-for-the-new-user",level:2},{value:"Send a welcome email to the new user",id:"send-a-welcome-email-to-the-new-user",level:2},{value:"Log out",id:"log-out",level:2}],d={toc:m};function c(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-be8db67e-6743-49ef-beb5-9efb96e01e4b?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"A workflow sample for creating a new user, a process often called onboarding, is provided below. The following sequence of REST API requests allows an administrative user to create a new user, update the user information, create an email address for the user, and send the new user a welcome email."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#log-in"},"Log in")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")," to authenticate into the environment."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-user"},"Create a new user")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/users")," to create a new user."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#assign-the-user-to-a-user-group"},"Assign the user to a user group")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"PATCH /api/users/{id}")," to update information for the new user."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-an-email-address-for-the-new-user"},"Create an email address for the new user")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/users/{id}/addresses")," to create an email address for the new user."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#send-a-welcome-email-to-the-new-user"},"Send a welcome email to the new user")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/emails")," to send a welcome email to the new user."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#log-out"},"Log out")," Admin user calls ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/logout")," to close the session.")),(0,o.kt)("p",null,"To make it easy for you to test this workflow in your environment, ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/downloads/RESTSDK/PostmanScripts/OnboardingUsers_postman_collection.zip"},"download the zipped Postman script")," provided for you, extract the JSON file, and configure it to point to your Web server."),(0,o.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,o.kt)("h2",{id:"log-in"},"Log in"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")),(0,o.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns a status code 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used by subsequent requests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_auth_login_1003x508",src:a(1541).Z,width:"1003",height:"508"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\n  "loginMode":1, \\\n  "username": "administrator", \\\n  "password": "" \\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Headers"),(0,o.kt)("p",{parentName:"li"},"The authorization token ",(0,o.kt)("inlineCode",{parentName:"p"},'"x-mstr-authtoken"')," is returned in the response header. It is used by other endpoints to authenticate the caller."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 22 Aug 2018 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 204 (Success: No Content)"))))),(0,o.kt)("h2",{id:"create-a-new-user"},"Create a new user"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/users")),(0,o.kt)("p",null,"This endpoint allows the caller to create a new user. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),'; you pass the authorization token in the request header. You provide the information to create the user in the body parameter of the request. The response includes the user ID, which other endpoints use as a request parameter to specify which user to perform an action on. In this example, you create a new user called "John Smith", who is automatically a member of the "Everyone" user group. Initially, you do not assign the new user to any other user group.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_users",src:a(755).Z,width:"996",height:"853"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createUser"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createUser")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Parameters"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login"),", required to authenticate caller"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"body")," Information used to create the user, including the ",(0,o.kt)("inlineCode",{parentName:"li"},"username"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"fullname"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," of the user, password and authentication information, and the IDs of the user groups the user belongs to (",(0,o.kt)("inlineCode",{parentName:"li"},"memberships"),")."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "Jsmith",\n  "fullName": "John Smith",\n  "description": "Senior Software Engineer",\n  "password": "J$mith!23",\n  "enabled": "true",\n  "passwordModifiable": "true",\n  "requireNewPassword": "true",\n  "standardAuth": "true"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' -d \'{\n  "username":"Jsmith",\n  "fullName":"John Smith",\n  "description: "Senior Software Engineer",\n  "password: "J$mith!23",\n  "enabled: "true",\n  "passwordModifiable: "true",\n  "requireNewPassword: "true",\n  "standardAuth: "true"\n}\' \'http://localhost:8282/consume-dev/api/users\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("p",{parentName:"li"},"The response body contains information about the user that was created, including the user ID that will be used by later endpoints to identify the user."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "John Smith",\n  "id": "8D0C05F2456F52E4AA737891B4659201",\n  "type": "34",\n  "abbreviation": "Jsmith",\n  "description": "Senior Software Engineer",\n  "subtype": 8704,\n  "extType": 0,\n  "dateCreated": "2018-08-22T19:53:01.000+0000",\n  "dateModified": "2018-08-22T19:53:02.000+0000",\n  "version": "A1C05E854CDF709E247799A9CFEF2635",\n  "acg": "255",\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  },\n  "ancestors": [\n    {\n      "name": "CASTOR_SERVER_CONFIGURATION",\n      "id": "3A22AF3611E8A63CFA170080EF35139A",\n      "level": 2\n    }\n  ],\n  "acl": [],\n  "username": "Jsmith",\n  "fullName": "John Smith",\n  "enabled": "true",\n  "passwordModifiable": "true",\n  "requireNewPassword": "true",\n  "standardAuth": "true",\n  "memberships": [\n    {\n      "id": "C82C6B1011D2894CC0009D9F29718E4F",\n      "name": "Everyone"\n    }\n  ],\n  "initials": "JS"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 201 (Created Successfully)"))),(0,o.kt)("h2",{id:"assign-the-user-to-a-user-group"},"Assign the user to a user group"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /api/users/{id}")),(0,o.kt)("p",null,"This endpoint allows the caller to update specific information for a specific user. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; you obtain the user ID while creating a new user using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/users")," (as you did in the previous step) or using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/users")," for previously created users. You specify the type of update operation (add, replace or remove), provide the value to be used in the update operation, and specify the path to the target where the update operation will be performed, in the body parameter of the request."),(0,o.kt)("p",null,'In this example, you make the new user a member of an additional user group called "Developers". To do this, you need to provide the ID of the user group as part of the update parameters in the request body. You can get a list of user groups using ',(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/usergroups"),". The response to this endpoint includes the names and IDs of all available user groups. You find the name of the user group that you want to add the user to, and use the ID of that user group in the body of this request."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_PATCH_users",src:a(8304).Z,width:"996",height:"868"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updateUserGroup"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updatePartialUser")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Parameters"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"id")," ID of the user to be updated. You generated this ID when you created the new user in an earlier step using ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/users"),". In this example, it is 8D0C05F2456F52E4AA737891B4659201."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"body"),' Information used to perform the update, including the user to be updated, the update operation to be performed ("add", "replace", or "remove", and the value to be used in the update operation.'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Accept": "application/json",\n"X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "ADD",\n      "path": "/memberships",\n      "value": ["C1E1419F11D603A2100086B3A5E8F8A4"]\n    }\n  ]\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' -d \'{\n  "operationList": [\n    {\n      "op": "ADD",\n      "path": "/memberships",\n      "value": "C1E1419F11D603A2100086B3A5E8F8A4"]\n    }\n  ]\n}\' \'http://localhost:8282/consume-dev/api/users/8D0C05F2456F52E4AA737891B4659201\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("p",{parentName:"li"},"The REST server returns a JSON object containing the updated user information."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "John Smith",\n  "id": "8D0C05F2456F52E4AA737891B4659201",\n  "username": "Jsmith",\n  "fullName": "John Smith",\n  "enabled": "true",\n  "passwordModifiable": "true",\n  "requireNewPassword": "true",\n  "standardAuth": "true",\n  "memberships": [\n    {\n      "id": "C1E1419F11D603A2100086B3A5E8F8A4",\n      "name": "Developers"\n    },\n    {\n      "id": "C82C6B1011D2894CC0009D9F29718E4F",\n      "name": "Everyone"\n    }\n  ],\n  "initials": "JS"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 200 (Success: OK)"))),(0,o.kt)("h2",{id:"create-an-email-address-for-the-new-user"},"Create an email address for the new user"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/users/{id}/addresses")),(0,o.kt)("p",null,"This endpoint allows the caller to create an email address for a user. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; you obtain the user ID while creating a new user using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/users")," (as you did in a previous step) or using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/users")," for previously created users. You provide the information used to create an email address for the new user in the body parameter of the request\u2014including the email address, the user-specified name for the address, the type of email, and whether this is the default email address for the user."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_users_addresses",src:a(2330).Z,width:"996",height:"828"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createNewAddress"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createNewAddress")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Parameters"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"id")," ID of the user whose email address is being created. You generated this ID when you created the new user in an earlier step using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/users"),". In this example, it is 8D0C05F2456F52E4AA737891B4659201.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"body")," Information used to add the user email address, including the email address, the user-specified name for the address, the type of email, and whether this is the default email address for the user.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Accept": "application/json",\n"X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Work",\n  "deliveryMode": "EMAIL",\n  "device": "GENERIC_EMAIL",\n  "value": "jsmith@bigcompany.com",\n  "isDefault": true\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' -d \'{\n  "name": "Work",\n  "deliveryMode": "EMAIL",\n  "device": "GENERIC_EMAIL",\n  "value": "jsmith@bigcompany.com",\n  "isDefault": true\n}\' \'http://localhost:8282/consume-dev/api/users/8D0C05F2456F52E4AA737891B4659201\'\n\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addresses": {\n    "id": "CD2BDCCB433300556DF9C19F255D09DD",\n    "name": "Work",\n    "deliveryMode": "EMAIL",\n    "deviceId": "1D2E6D168A7711D4BE8100B0D04B6F0B",\n    "value": "jsmith@bigcompany.com",\n    "isDefault": true\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 200 (OK)"))),(0,o.kt)("h2",{id:"send-a-welcome-email-to-the-new-user"},"Send a welcome email to the new user"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/emails")),(0,o.kt)("p",null,"This endpoint allows the caller to send an email to specified recipients. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. In the body parameter of the request, you specify the recipients of the email, the content of the subject line, the content of the message body, whether the content is HTML, and any extra properties. In this example, you will send a welcome email to the new user you created. You will use the email address you created in the previous step."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_emails_1002x486",src:a(7753).Z,width:"1002",height:"486"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Emails/sendEmails"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Emails/sendEmails")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Parameters"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"body")," Information used to send the email, including the recipients of the email, the content of the subject line, the content of the message body, whether the content is HTML, and any extra properties.r."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Accept": "application/json",\n  "X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "notificationType": "USER_CREATION",\n  "userids": [\n    "8D0C05F2456F52E4AA737891B4659201"\n  ]\n  "subject": "Welcome to the Developer Team",\n  "content": "<html xmlns=\\"http:\\\\www.w3.org\\\\1999\\\\xhtml\\"><body align=\\"center\\" style=\\"margin:0;padding:0;font-family:\'Helvetica\';font-size:14px;\\"><div>Hello and welcome to the Developer Team at Big Company</div><div>John Smith</div>Jsmith<div></div></body></html>",\n  "isHTML": true\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' -d \'{\n  "notificationType": "USER_CREATION",\n  "userids": [\n    "8D0C05F2456F52E4AA737891B4659201"\n  ]\n  "subject": "Welcome to the Developer Team",\n  "content": "<html xmlns=\\"http:\\\\www.w3.org\\\\1999\\\\xhtml\\"><body align=\\"center\\" style=\\"margin:0;padding:0;font-family:\'Helvetica\';font-size:14px;\\"><div>Hello and welcome to the Developer Team at Big Company</div><div>John Smith</div>Jsmith<div></div></body></html>",\n  "isHTML": true\n}\' \'http://localhost:8282/consume-dev/api/emails\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 204 (Success: No Content)"))),(0,o.kt)("h2",{id:"log-out"},"Log out"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/logout")),(0,o.kt)("p",null,"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_auth_logout_1010x223",src:a(936).Z,width:"1010",height:"223"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' -d '{\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Response Body: Empty"),(0,o.kt)("li",{parentName:"ul"},"Response code: 204 (Success: No Content)")))}c.isMDXComponent=!0},8304:function(e,t,a){t.Z=a.p+"assets/images/swagger_PATCH_users-6bed39a05af668511086af4f3a79ba4b.png"},1541:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_auth_login_1003x508-e433e3a5557d39f02584e223d3165b7d.png"},936:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_auth_logout_1010x223-ec769573c5695174c8f30a6c8a5a5a7e.png"},7753:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_emails_1002x486-111f262db8fee3546081dba687e1f83a.png"},755:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_users-3cea92a660567945a88c80905b267487.png"},2330:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_users_addresses-370539e6bc51b1e32d4fb85f8003d2c1.png"}}]);