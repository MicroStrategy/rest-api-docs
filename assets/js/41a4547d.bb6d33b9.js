"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1944],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3708:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],s={title:"Manage users",sidebar_label:"Manage users",description:"A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates."},p=void 0,l={unversionedId:"common-workflows/administration/user-management/manage-users",id:"common-workflows/administration/user-management/manage-users",title:"Manage users",description:"A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates.",source:"@site/docs/common-workflows/administration/user-management/manage-users.md",sourceDirName:"common-workflows/administration/user-management",slug:"/common-workflows/administration/user-management/manage-users",permalink:"/rest-api-docs/common-workflows/administration/user-management/manage-users",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/user-management/manage-users.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1676668503,formattedLastUpdatedAt:"Feb 17, 2023",frontMatter:{title:"Manage users",sidebar_label:"Manage users",description:"A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates."},sidebar:"tutorialSidebar",previous:{title:"Create new users",permalink:"/rest-api-docs/common-workflows/administration/user-management/create-new-users"},next:{title:"Create security roles",permalink:"/rest-api-docs/common-workflows/administration/user-management/create-security-roles"}},u={},m=[{value:"Log in",id:"log-in",level:2},{value:"Search for a user",id:"search-for-a-user",level:2},{value:"Update a user",id:"update-a-user",level:2},{value:"Get information about a user",id:"get-information-about-a-user",level:2},{value:"Log out",id:"log-out",level:2}],d={toc:m};function c(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-be8db67e-6743-49ef-beb5-9efb96e01e4b?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#log-in"},"Log in")," Admin user calls ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")," to authenticate into the environment."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#search-for-a-user"},"Search for a user")," Admin user calls ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/users")," to search for a specific user."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#update-a-user"},"Update a user")," Admin user calls ",(0,i.kt)("inlineCode",{parentName:"li"},"PATCH /api/users/{id}")," to update information for a specific user."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#get-information-about-a-user"},"Get information about a user")," Admin user calls ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/users/{id}")," to view information for a user, including changes made to the user."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#log-out"},"Log out")," Admin user calls ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/logout")," to close the session.")),(0,i.kt)("p",null,"To make it easy for you to test this workflow in your environment, ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/downloads/RESTSDK/PostmanScripts/ManagingUsers_postman_collection.zip"},"download the zipped Postman script")," provided for you, extract the JSON file, and configure it to point to your Web server."),(0,i.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,i.kt)("h2",{id:"log-in"},"Log in"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")),(0,i.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"loginMode")," (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns a status code 204 and a response header containing ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", the authorization token that will be used by subsequent requests."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"swagger_POST_auth_login",src:a(9566).Z,width:"1276",height:"648"})),(0,i.kt)("p",null,"REST API Explorer: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin")),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Header"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\n  "loginMode":1, \\\n  "username": "administrator", \\\n  "password": "" \\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Header"),(0,i.kt)("p",{parentName:"li"},'The authorization token "x-mstr-authtoken" is returned in the response header. It is used by other endpoints to authenticate the user.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 22 Aug 2018 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body: Empty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 204 (Success: No Content)"))),(0,i.kt)("h2",{id:"search-for-a-user"},"Search for a user"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/users")),(0,i.kt)("p",null,"This endpoint allows the caller to get information for a specific set of users. You obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You identify the set of users to be returned with query parameters in the URL that specify the characters that the user name or abbreviation must begin with. You can use other query parameters to limit the results that are returned by specifying a starting point within the results and the maximum number of results that should be returned."),(0,i.kt)("p",null,'In this example, you are going to search for the user "John Smith". To do this, you use the query parameter ',(0,i.kt)("inlineCode",{parentName:"p"},"nameBegins"),' and set it to "John". If there are multiple users whose first name is John, you choose "John Smith" and get his user ID.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"swagger_GET_users",src:a(9846).Z,width:"996",height:"885"})),(0,i.kt)("p",null,"REST API Explorer: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createUserGroup"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers")),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Parameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),", required to authenticate caller")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"nameBegins")," Characters that the user name must begin with.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"abbreviationBegins")," Characters that the user abbreviation must begin with.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"offset")," Starting point within the collection of returned search results.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"limit")," Maximum number of items returned for a single search request.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' -d\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameegins=John&offset=0&amp;limit=-1\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("p",{parentName:"li"},"The response body contains information about the user that was created, including the user ID that will be used by later endpoints to identify the user."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "John Smith",\n    "id": "8D0C05F2456F52E4AA737891B4659201",\n    "abbreviation": "jsmith",\n    "description": "Senior Software Engineer",\n    "type": 34,\n    "subtype": 8704,\n    "extType": 0,\n    "dateCreated": "2019-03-04T17:55:07.000+0000",\n    "dateModified": "2019-03-04T18:08:38.000+0000",\n    "version": "D5C5F280432238D70EE14F839E136711",\n    "acg": 255,\n    "iconPath": "",\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "initials": "JS"\n  }\n]\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 200 (Success: OK)"))),(0,i.kt)("h2",{id:"update-a-user"},"Update a user"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH /api/users/{id}")),(0,i.kt)("p",null,"This endpoint allows the caller to update specific information for a specific user. You obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; you obtain the user ID using ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/users")," (as you did in a previous step). You specify the type of update operation (add, replace or remove), provide the value to be used in the update operation, and specify the path to the target where the update operation will be performed, in the body parameter of the request."),(0,i.kt)("p",null,'In this example, you are going to update the description for the user "John Smith". He received a promotion and is now Principal Software Engineer, instead of Senior Software Engineer.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"swagger_PATCH_users_id",src:a(9163).Z,width:"996",height:"865"})),(0,i.kt)("p",null,"REST API Explorer: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updateUserGroup"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updatePartialUser")),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Parameters"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," ID of the user to be updated. This ID was generated when the user was created and can be retrieved using ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/users")," with query parameters to search for hte user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"body"),' Information used to perform the update, including the user to be updated, the update operation to be performed ("add", "replace", or "remove"), and the value to be used in the update operation.'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Accept": "application/json",\n  "X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": "Principal Software Engineer"\n    }\n  ]\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' -d \'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": "Principal Software Engineer"\n    }\n  ]\n} \'https://demo.microstrategy.com/MicroStrategyLibrary/api/users/8D0C05F2456F52E4AA737891B4659201\'\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("p",{parentName:"li"},"The REST server returns a JSON object containing the updated user information."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "John Smith",\n  "id": "8D0C05F2456F52E4AA737891B4659201",\n  "abbreviation": "jsmith",\n  "description": "Principal Software Engineer",\n  "type": 34,\n  "subtype": 8704,\n  "extType": 0,\n  "dateCreated": "2019-03-04T17:55:07.000+0000",\n  "dateModified": "2019-03-04T18:57:57.000+0000",\n  "version": "D5C5F280432238D70EE14F839E136711",\n  "acg": 255,\n  "iconPath": "",\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 200 (Success: OK)"))),(0,i.kt)("h2",{id:"get-information-about-a-user"},"Get information about a user"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/users/{id}")),(0,i.kt)("p",null,"This endpoint allows the caller to get information for a specific user. You obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; you obtain the user ID using ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/users")," (as you did in a previous step)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"swagger_GET_users_id",src:a(3963).Z,width:"1280",height:"765"})),(0,i.kt)("p",null,"REST API Explorer: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUserGroups"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers")),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Parameters"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login"),".",(0,i.kt)("strong",{parentName:"li"},"offset")," Location in the list of users to begin returning results."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," ID of the user to be updated. This ID was generated when the user was created and can be retrieved using ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/users")," with query parameters to search for the user."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Header"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "Accept": "application/json",\n  "X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameBegins=Neel&offset=0&limit=-1'\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("p",{parentName:"li"},'In this example, the REST server returns information about the user "John Smith". Yuu can verify that the description was changed to "Principal Software Engineer".'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "John Smith",\n  "id": "8D0C05F2456F52E4AA737891B4659201",\n  "abbreviation": "jsmith",\n  "description": "Principal Software Engineer",\n  "type": 34,\n  "subtype": 8704,\n  "extType": 0,\n  "dateCreated": "2019-03-04T17:55:07.000+0000",\n  "dateModified": "2019-03-04T18:57:57.000+0000",\n  "version": "D5C5F280432238D70EE14F839E136711",\n  "acg": 255,\n  "iconPath": "",\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 200(Success: OK)"))),(0,i.kt)("h2",{id:"log-out"},"Log out"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/logout")),(0,i.kt)("p",null,"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"swagger_POST_auth_logout",src:a(1280).Z,width:"1275",height:"283"})),(0,i.kt)("p",null,"REST API Explorer: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout")),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Header"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response code: 204")))}c.isMDXComponent=!0},9846:function(e,t,a){t.Z=a.p+"assets/images/swagger_GET_users-389b30a43a6ef49495d235d7364609b7.png"},3963:function(e,t,a){t.Z=a.p+"assets/images/swagger_GET_users_id-2126798cc1662d88d1973e89404ccfa1.png"},9163:function(e,t,a){t.Z=a.p+"assets/images/swagger_PATCH_users_id-2644f17bd4e9289a79d061897ee4c8e4.png"},9566:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_auth_login-2be51e6b11363604a15e87b5c142688e.png"},1280:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_auth_logout-8df2db0375b9c25a2d75451ebff23993.png"}}]);