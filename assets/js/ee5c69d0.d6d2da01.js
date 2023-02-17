"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3545],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={title:"Update a datasource",description:"This workflow sample demonstrates how to update a database source, datasource connection, and datasource login."},l=void 0,c={unversionedId:"common-workflows/administration/datasource-management/update-a-datasource",id:"common-workflows/administration/datasource-management/update-a-datasource",title:"Update a datasource",description:"This workflow sample demonstrates how to update a database source, datasource connection, and datasource login.",source:"@site/docs/common-workflows/administration/datasource-management/update-a-datasource.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/update-a-datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/update-a-datasource",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/update-a-datasource.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1676668503,formattedLastUpdatedAt:"Feb 17, 2023",frontMatter:{title:"Update a datasource",description:"This workflow sample demonstrates how to update a database source, datasource connection, and datasource login."},sidebar:"tutorialSidebar",previous:{title:"Create a datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/create-a-datasource"},next:{title:"Add and remove datasource from project",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/add-and-remove-datasource-from-project"}},p={},d=[{value:"Update a database source",id:"update-a-database-source",level:2},{value:"Update a datasource connection",id:"update-a-datasource-connection",level:2},{value:"Update a datasource login",id:"update-a-datasource-login",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This workflow sample demonstrates how to update a database source, datasource connection, and datasource login."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#update-a-database-source"},"Update database source.")," ",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasources/{datasourceId}")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#update-a-datasource-connection"},"Update datasource connection.")," ",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasources/connections/{connectionId}")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#update-a-datasource-login"},"Update datasource login.")," ",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasources/connections/{loginId}"))),(0,r.kt)("p",null,"A detailed description of each step of this request is listed down below."),(0,r.kt)("h2",{id:"update-a-database-source"},"Update a database source"),(0,r.kt)("p",null,"End Point: ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasources/{datasourceId}")),(0,r.kt)("p",null,"This endpoint allows the caller to update a database source with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the datasourceId using the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/datasources"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a info for the updated database source."),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": "Test snowflake database source"\n    }\n  ]\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/{{datasourceId}}\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "replace",\n            "path": "/description",\n            "value": "Test snowflake database source"\n        }\n    ]\n}\'\n')))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "D6C2B40858421FAF457501A620908C00",\n  "name": "Test_Snow_Source",\n  "description": "Test snowflake database source",\n  "dateCreated": "2021-08-03T20:04:56.000+0000",\n  "dateModified": "2021-08-03T20:05:15.000+0000",\n  "acg": 255,\n  "datasourceType": "normal",\n  "database": {\n    "type": "snow_flake",\n    "version": "snowflake_1x",\n    "connection": {\n      "name": "Test_Snow_Connection",\n      "id": "00FBD7497E42AB6BCDDDD8A986BFBFF2",\n      "isEmbedded": false\n    }\n  },\n  "tablePrefix": "",\n  "odbcVersion": "version3x",\n  "intermediateStoreDbName": "",\n  "intermediateStoreTableSpaceName": "",\n  "dbms": {\n    "name": "Snowflake",\n    "id": "86AC7FD44D2B4B0FB65AE948EF19BDD0"\n  },\n  "owner": {\n    "name": "MSTR User",\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233"\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Code: 200 (Update database source.)"))),(0,r.kt)("h2",{id:"update-a-datasource-connection"},"Update a datasource connection"),(0,r.kt)("p",null,"End Point: ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasources/connections/{connectionId}")),(0,r.kt)("p",null,"This endpoint allows the caller to update a datasource connection with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the connectionId using the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/datasources/connections"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing info for the updated datasource connection."),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": "Test Snowflake Connection"\n    }\n  ]\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/connections/{{connectionId}}\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "replace",\n            "path": "/description",\n            "value": "Test Snowflake Connection"\n        }\n    ]\n}\'\n')))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test_Snow_Connection",\n  "id": "00FBD7497E42AB6BCDDDD8A986BFBFF2",\n  "description": "Test Snowflake Connection",\n  "acg": 255,\n  "executionMode": "synchronous",\n  "maxCancelAttemptTime": 60,\n  "maxQueryExeTime": 0,\n  "maxConnectionAttemptTime": 60,\n  "connectionLifetime": 36000,\n  "connectionIdleTimeout": 60000,\n  "charEncodingWindows": "multibyte",\n  "charEncodingUnix": "utf8",\n  "tablePrefix": "",\n  "connectionString": "DSN=SNOWFLAKE_DSN",\n  "parameterizedQueries": true,\n  "extendedFetch": false,\n  "database": {\n    "login": {\n      "id": "E0A644366147B08B570B6DB4E15119EF",\n      "name": "Test_Snow_Login"\n    },\n    "type": "snow_flake",\n    "version": "snowflake_1x"\n  },\n  "driverType": "odbc",\n  "oauthParameter": ""\n}\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Code: 200 (Update datasource connection.)"))),(0,r.kt)("h2",{id:"update-a-datasource-login"},"Update a datasource login"),(0,r.kt)("p",null,"End Point: ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasources/connections/{loginId}")),(0,r.kt)("p",null,"This endpoint allows the caller to update a datasource login with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the loginId using the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/datasources/logins"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing info for the updated datasource login."),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/username",\n      "value": "USERNAME_NEW"\n    }\n  ]\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/logins/{{loginId}}\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "replace",\n            "path": "/username",\n            "value": "USERNAME_NEW"\n        }\n    ]\n}\'\n')))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test_Snow_Login",\n  "id": "E0A644366147B08B570B6DB4E15119EF",\n  "description": "",\n  "dateCreated": "2021-08-03T20:03:33.000+0000",\n  "dateModified": "2021-08-03T20:03:33.000+0000",\n  "acg": 255,\n  "username": "USERNAME_NEW"\n}\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Code: 200 (Update datasource login.)"))))}m.isMDXComponent=!0}}]);