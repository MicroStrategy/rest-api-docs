"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7045],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a,o=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],s={title:"Manage project settings",description:"A high-level workflow sample for managing project settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the project settings."},p=void 0,u={unversionedId:"common-workflows/analytics/project-management/manage-project-settings",id:"common-workflows/analytics/project-management/manage-project-settings",title:"Manage project settings",description:"A high-level workflow sample for managing project settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the project settings.",source:"@site/docs/common-workflows/analytics/project-management/manage-project-settings.md",sourceDirName:"common-workflows/analytics/project-management",slug:"/common-workflows/analytics/project-management/manage-project-settings",permalink:"/rest-api-docs/common-workflows/analytics/project-management/manage-project-settings",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/project-management/manage-project-settings.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1676668503,formattedLastUpdatedAt:"Feb 17, 2023",frontMatter:{title:"Manage project settings",description:"A high-level workflow sample for managing project settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the project settings."},sidebar:"tutorialSidebar",previous:{title:"Manage project load settings on Intelligence Server startup",permalink:"/rest-api-docs/common-workflows/analytics/project-management/manage-project-load-settings-on-server-startup"},next:{title:"Manage project advanced properties",permalink:"/rest-api-docs/common-workflows/analytics/project-management/project-advanced-properties-management/"}},c={},m=[{value:"Log in",id:"log-in",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Get the project setting configurations",id:"get-the-project-setting-configurations",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Get the setting values for a specific project",id:"get-the-setting-values-for-a-specific-project",level:2},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Update a part of the setting values for a specific project",id:"update-a-part-of-the-setting-values-for-a-specific-project",level:2},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"Update all project setting values",id:"update-all-project-setting-values",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-4",level:3},{value:"Log out",id:"log-out",level:2},{value:"Sample request",id:"sample-request-5",level:3},{value:"Sample response",id:"sample-response-5",level:3}],d=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),g={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d30bab86-7c75-4b05-88d2-35ca2091e983?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"A high-level workflow sample for managing project settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the project settings."),(0,i.kt)("h2",{id:"log-in"},"Log in"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login")),(0,i.kt)("p",null,"This endpoint allows the user to authenticate with the MicroStrategy REST Server. You can provide the information used to create the session in the body of the request. In this example, you can use standard authentication, so you need to provide the username and password. If the call is successful, the resulting response returns a status code of 204 and a response header containing X-MSTR-AuthToken. This authorization token is used by all subsequent requests."),(0,i.kt)("p",null,"In the following example, standard authentication uses a username of administrator and a blank password."),(0,i.kt)("h3",{id:"sample-request"},"Sample request"),(0,i.kt)("p",null,"Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "administrator",\n  "password": "yourPassword"\n}\n')),(0,i.kt)("p",null,"Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{\\\\"username\\\\":\\\\"administrator\\\\",\\\\"password\\\\":\\\\"yourPassword\\\\"}"\n')),(0,i.kt)("h3",{id:"sample-response"},"Sample response"),(0,i.kt)("p",null,"Response Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"cache-control: no-cache, no-store, max-age=0, must-revalidate\ndate: Mon, 28 Oct 2019 17:38:15 GMT\nexpires: 0\npragma: no-cache\nx-mstr-authtoken: f34qc7evsntsks0qe6hfcgt0ur\n")),(0,i.kt)("p",null,"Response Code: 204 (Success: No Content)"),(0,i.kt)("h2",{id:"get-the-project-setting-configurations"},"Get the project setting configurations"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/v2/projects/{projectId}/settings/config")),(0,i.kt)("p",null,"This endpoint allows the user to retrieve information on all project settings that are available in MicroStrategy REST API. The information includes the setting description, type, options, unit, minimum value, maximum value, and reboot rule. You must specify an authorization token in the request header, which can be obtained from ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," during ",(0,i.kt)("a",{parentName:"p",href:"#log-in"},"login"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This operation requires the Web User privilege.")),(0,i.kt)("h3",{id:"sample-request-1"},"Sample request"),(0,i.kt)("p",null,"Request Parameter:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,i.kt)("p",null,"The authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login.")),(0,i.kt)("p",null,"Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/projects/{projectId}/settings/config" -H "accept: application/json" -H "X-MSTR-AuthToken: hhl9cvevf3gqcvjadojen0p45j"\n')),(0,i.kt)("h3",{id:"sample-response-1"},"Sample response"),(0,i.kt)("p",null,"Response Body:"),(0,i.kt)("p",null,"The following sample is part of the complete response body."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maxReportResultRowCount": {\n    "description": "Maximum report result rows",\n    "type": "number",\n    "max_value": 999999999,\n    "min_value": 0,\n    "options": [\n      {\n        "name": "No Limit",\n        "value": -1\n      }\n    ]\n  },\n  "maxReportExecutionTime": {\n    "description": "Maximum report execution time for interactive reports (sec)",\n    "type": "number",\n    "max_value": 999999,\n    "min_value": 0,\n    "options": [\n      {\n        "name": "No Limit",\n        "value": -1\n      }\n    ]\n  },\n  "maxJobPerUserAccount": {\n    "description": "Maximum jobs per user account",\n    "type": "number",\n    "max_value": 999999,\n    "min_value": 0,\n    "options": [\n      {\n        "name": "No Limit",\n        "value": -1\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Success: OK)"),(0,i.kt)("h2",{id:"get-the-setting-values-for-a-specific-project"},"Get the setting values for a specific project"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/v2/projects/{projectId}/settings")),(0,i.kt)("p",null,"This endpoint allows you to retrieve all project setting values that are available in MicroStrategy REST API. You must specify an authorization token in the request header, which can be obtained from ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," during ",(0,i.kt)("a",{parentName:"p",href:"#log-in"},"login"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This operation requires the Web User privilege.")),(0,i.kt)("h3",{id:"sample-request-2"},"Sample request"),(0,i.kt)("p",null,"Request Parameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,i.kt)("p",{parentName:"li"},"The authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"projectId")),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," of the project."))),(0,i.kt)("p",null,"Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/projects/{projectId}/settings" -H "accept: application/json" -H "X-MSTR-AuthToken: ks6ehab41hkleoj03qvamq3bk4"\n')),(0,i.kt)("h3",{id:"sample-response-2"},"Sample response"),(0,i.kt)("p",null,"Response Body:"),(0,i.kt)("p",null,"The following sample is part of the complete response body."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enableDeleteObjectDependencies": {\n    "value": false\n  },\n  "appendInfoForEmailDelivery": {\n    "value": [\n      "recipient_name",\n      "owner_name",\n      "report_document_name",\n      "project_name",\n      "delivery_method",\n      "schedule",\n      "subscription_name",\n      "delivery_status",\n      "date",\n      "time",\n      "email_address",\n      "error_message"\n    ]\n  },\n  "cacheEncryptionLevel": {\n    "value": 0\n  },\n  "maxEmailSubscriptionCount": {\n    "value": -1\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Success: OK)"),(0,i.kt)("h2",{id:"update-a-part-of-the-setting-values-for-a-specific-project"},"Update a part of the setting values for a specific project"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH /api/v2/projects/{projectId}/settings")),(0,i.kt)("p",null,"This endpoint allows you to modify part of the project settings exposed in REST API via ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/v2/projects/{projectId}/settings/config"),". You must specify an authorization token in the request header, which can be obtained from ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," during ",(0,i.kt)("a",{parentName:"p",href:"#log-in"},"login"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Depending on the setting you are modifying, the response body will tell you which privilege is required for the operation.")),(0,i.kt)("h3",{id:"sample-request-3"},"Sample request"),(0,i.kt)("p",null,"Request Parameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,i.kt)("p",{parentName:"li"},"The authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"projectId")),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," of the project."))),(0,i.kt)("p",null,"Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enableDeleteObjectDependencies": {\n    "value": true\n  },\n  "cacheEncryptionLevel": {\n    "value": 1\n  },\n  "maxEmailSubscriptionCount": {\n    "value": 200\n  }\n}\n')),(0,i.kt)("p",null,"Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/projects/{projectId}/settings" -H "accept: application/json" -H "X-MSTR-AuthToken: b3q75vgt84er8ektbvhbpt9qoh" -H "Content-Type: application/json" -d "{\\\\"enableDeleteObjectDependencies\\\\":{\\\\"value\\\\":true},\\\\"cacheEncryptionLevel\\\\":{\\\\"value\\\\":1},\\\\"maxEmailSubscriptionCount\\\\":{\\\\"value\\\\":200}}"\n')),(0,i.kt)("h3",{id:"sample-response-3"},"Sample response"),(0,i.kt)("p",null,"Response Body:"),(0,i.kt)("p",null,"The following sample is part of the complete response body. A complete list of project setting values with the modified values should be returned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enableDeleteObjectDependencies": {\n    "value": true\n  },\n  "appendInfoForEmailDelivery": {\n    "value": [\n      "recipient_name",\n      "owner_name",\n      "report_document_name",\n      "project_name",\n      "delivery_method",\n      "schedule",\n      "subscription_name",\n      "delivery_status",\n      "date",\n      "time",\n      "email_address",\n      "error_message"\n    ]\n  },\n  "cacheEncryptionLevel": {\n    "value": 1\n  },\n  "maxEmailSubscriptionCount": {\n    "value": 200\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Success: OK)"),(0,i.kt)("h2",{id:"update-all-project-setting-values"},"Update all project setting values"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT /api/v2/projects/{projectId}/settings")),(0,i.kt)("p",null,"This endpoint allows you to access all of the setting values that are available in MicroStrategy REST API. In this endpoint, you must provide a complete list of project settings, which is the different from the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH /api/v2/projects/{projectId}/settings")," endpoint. You can find a list of project settings exposed in REST API via ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/v2/projects/{projectId}/settings/config"),". You must specify an authorization token in the request header, which can be obtained from ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," during ",(0,i.kt)("a",{parentName:"p",href:"#log-in"},"login"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This operation requires the following privileges:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Web User"),(0,i.kt)("li",{parentName:"ul"},"Configure Server Basic"),(0,i.kt)("li",{parentName:"ul"},"Configure Caches"),(0,i.kt)("li",{parentName:"ul"},"Configure Subscription Setting"),(0,i.kt)("li",{parentName:"ul"},"Configure Governing"),(0,i.kt)("li",{parentName:"ul"},"Configure Project Basic"),(0,i.kt)("li",{parentName:"ul"},"Configure Statistics"),(0,i.kt)("li",{parentName:"ul"},"Configure History Lists"))),(0,i.kt)("h3",{id:"sample-request-4"},"Sample request"),(0,i.kt)("p",null,"Request Parameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,i.kt)("p",{parentName:"li"},"The authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"projectId")),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," of the project."))),(0,i.kt)("p",null,"Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'The following sample is part of the complete request body. The complete request body must contain all project settings.\n\n{\n  "enableDeleteObjectDependencies": {\n    "value": true\n  },\n  "appendInfoForEmailDelivery": {\n    "value": [\n      "recipient_name",\n      "owner_name",\n      "report_document_name",\n      "project_name",\n      "delivery_method",\n      "schedule",\n     "subscription_name",\n      "delivery_status",\n      "date",\n      "time",\n      "email_address",\n      "error_message"\n    ]\n  },\n  "cacheEncryptionLevel": {\n    "value": 1\n  },\n  "maxEmailSubscriptionCount": {\n    "value": 200\n  }\n}\n')),(0,i.kt)("p",null,"Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/projects/{projectId}/settings" -H "accept: application/json" -H "X-MSTR-AuthToken: 9kdr8gbhtt60crk0mulbma4msp" -H "Content-Type: application/json" -d "{\\\\"enableDeleteObjectDependencies\\\\":{\\\\"value\\\\":true},\\\\"appendInfoForEmailDelivery\\\\":{\\\\"value\\\\":[\\\\"recipient_name\\\\",\\\\"owner_name\\\\",\\\\"report_document_name\\\\",\\\\"project_name\\\\",\\\\"delivery_method\\\\",\\\\"schedule\\\\",\\\\"subscription_name\\\\",\\\\"delivery_status\\\\",\\\\"date\\\\",\\\\"time\\\\",\\\\"email_address\\\\",\\\\"error_message\\\\"]},\\\\"cacheEncryptionLevel\\\\":{\\\\"value\\\\":1},\\\\"maxEmailSubscriptionCount\\\\":{\\\\"value\\\\":200},...}"\n')),(0,i.kt)("h3",{id:"sample-response-4"},"Sample response"),(0,i.kt)("p",null,"Response Body:"),(0,i.kt)("p",null,"The following sample is part of the complete response body. A complete list of project setting values with the modified values should be returned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enableDeleteObjectDependencies": {\n    "value": true\n  },\n  "appendInfoForEmailDelivery": {\n    "value": [\n      "recipient_name",\n      "owner_name",\n      "report_document_name",\n      "project_name",\n      "delivery_method",\n      "schedule",\n      "subscription_name",\n      "delivery_status",\n      "date",\n      "time",\n      "email_address",\n      "error_message"\n    ]\n  },\n  "cacheEncryptionLevel": {\n    "value": 1\n  },\n  "maxEmailSubscriptionCount": {\n    "value": 200\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Success: OK)"),(0,i.kt)("h2",{id:"log-out"},"Log out"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"},"POST /api/auth/logout")),(0,i.kt)("p",null,"This endpoint allows the caller to log out the authenticated user from the MicroStrategy REST server. In this example, you close the active user session by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")," authorization token, which is generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". If the call is successful, the resulting response returns a status code of 204."),(0,i.kt)("h3",{id:"sample-request-5"},"Sample request"),(0,i.kt)("p",null,"Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https:// demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout" -H "accept: application/json" -H "X-MSTR-AuthToken: c8afkjurl1r9qk2k7puj2hs9cu"\n')),(0,i.kt)("h3",{id:"sample-response-5"},"Sample response"),(0,i.kt)("p",null,"Response Code: 204 (Accepted)"))}h.isMDXComponent=!0}}]);