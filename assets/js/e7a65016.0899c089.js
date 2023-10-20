"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[356],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,E=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return t?o.createElement(E,i(i({ref:n},l),{},{components:t})):o.createElement(E,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},59521:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o,a=t(83117),r=t(80102),i=(t(67294),t(3905)),s=["components"],c={title:"Convert connection string from data source name(DSN) to DSN-less for a datasource",description:"This workflow sample demonstrates how to convert connection string from DSN to DSN-less for a database source, or a datasource connection."},d=void 0,l={unversionedId:"common-workflows/administration/datasource-management/convert-connection-string-from-dsn-to-dsnless-for-a-datasource",id:"common-workflows/administration/datasource-management/convert-connection-string-from-dsn-to-dsnless-for-a-datasource",title:"Convert connection string from data source name(DSN) to DSN-less for a datasource",description:"This workflow sample demonstrates how to convert connection string from DSN to DSN-less for a database source, or a datasource connection.",source:"@site/docs/common-workflows/administration/datasource-management/convert-connection-string-from-dsn-to-dsnless-for-a-datasource.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/convert-connection-string-from-dsn-to-dsnless-for-a-datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/convert-connection-string-from-dsn-to-dsnless-for-a-datasource",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/convert-connection-string-from-dsn-to-dsnless-for-a-datasource.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Convert connection string from data source name(DSN) to DSN-less for a datasource",description:"This workflow sample demonstrates how to convert connection string from DSN to DSN-less for a database source, or a datasource connection."},sidebar:"tutorialSidebar",previous:{title:"Modify value of an advanced property",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/update-datasource-advanced-property"},next:{title:"Manage gateways",permalink:"/rest-api-docs/common-workflows/administration/manage-gateways/"}},p={},u=[{value:"Convert for a database source",id:"convert-for-a-database-source",level:2},{value:"Step 1: Use the <code>GET /api/datasources/{datasourceId}</code> API call to get the datasource definition",id:"step-1-use-the-get-apidatasourcesdatasourceid-api-call-to-get-the-datasource-definition",level:3},{value:"Step 2: Use the <code>POST /api/datasources/{datasourceId}/conversion</code> API call to convert",id:"step-2-use-the-post-apidatasourcesdatasourceidconversion-api-call-to-convert",level:3},{value:"Step 3: Use the GET <code>/api/datasources/{datasourceId}</code> API call to get the datasource definition again",id:"step-3-use-the-get-apidatasourcesdatasourceid-api-call-to-get-the-datasource-definition-again",level:3},{value:"Convert for a datasource connection",id:"convert-for-a-datasource-connection",level:2},{value:"Step 1: Use the <code>GET /api/datasources/connections/{connectionId}</code> API call to get the datasource connection definition",id:"step-1-use-the-get-apidatasourcesconnectionsconnectionid-api-call-to-get-the-datasource-connection-definition",level:3},{value:"Step 2: Use the <code>POST /api/datasources/connections/{connectionId}/conversion</code> API call to convert",id:"step-2-use-the-post-apidatasourcesconnectionsconnectionidconversion-api-call-to-convert",level:3},{value:"Step 3: Use the GET <code>/api/datasources/connections/{connectionId}</code> API call to get the datasource connection definition again",id:"step-3-use-the-get-apidatasourcesconnectionsconnectionid-api-call-to-get-the-datasource-connection-definition-again",level:3}],m=(o="Available",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),E={toc:u};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},E,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 8",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-737e03ad-a41a-46d5-bf7a-00e68963b08b?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to convert connection string from DSN to DSN-less for a database source, or a datasource connection."),(0,i.kt)("p",null,"A detailed description of each step is listed down below."),(0,i.kt)("h2",{id:"convert-for-a-database-source"},"Convert for a database source"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/datasourceConversion"},"POST /api/datasources/{datasourceId}/conversion")),(0,i.kt)("p",null,"This endpoint allows the caller to convert for a database source with a embedded database connection. You use the authorization token returned during login as the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the ",(0,i.kt)("inlineCode",{parentName:"p"},"datasourceId")," using the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/datasources"),". If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,i.kt)("h3",{id:"step-1-use-the-get-apidatasourcesdatasourceid-api-call-to-get-the-datasource-definition"},"Step 1: Use the ",(0,i.kt)("inlineCode",{parentName:"h3"},"GET /api/datasources/{datasourceId}")," API call to get the datasource definition"),(0,i.kt)("p",null,"If the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"database/connection/isEmbedded")," is true, you should be able to see the definition of the embedded connection(",(0,i.kt)("inlineCode",{parentName:"p"},"database/embeddedConnection"),"). If it's false, please use ",(0,i.kt)("a",{parentName:"p",href:"#convert-for-a-datasource-connection"},"Convert for a datasource connection")," for the standalone datasource connection."),(0,i.kt)("p",null,"Then you can check the connection string(",(0,i.kt)("inlineCode",{parentName:"p"},"database/embeddedConnection/connectionString"),") of the embedded connection you want to convert to see the DSN inside this database source before conversion."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"connectionString": "DSN=postgres_win;"\n')),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Accept: application/json"\n"X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "683E35DC47E33C3086A0EEB8F0C3F1E5",\n  "name": "postgres_dsn",\n  "description": "",\n  "dateCreated": "2022-11-10T10:35:20.000+0000",\n  "dateModified": "2022-11-24T07:39:35.000+0000",\n  "acg": 255,\n  "datasourceType": "data_import",\n  "database": {\n    "type": "postgre_sql",\n    "version": "postgre_sql_90",\n    "connection": {\n      "name": "postgres_dsn.conn",\n      "id": "C329607743675E3DE8785F917C8B0EBB",\n      "isEmbedded": true\n    },\n    "embeddedConnection": {\n      "name": "postgres_dsn.conn",\n      "id": "C329607743675E3DE8785F917C8B0EBB",\n      "description": "",\n      "acg": 0,\n      "executionMode": "synchronous",\n      "maxCancelAttemptTime": 60,\n      "maxQueryExeTime": -1,\n      "maxConnectionAttemptTime": 60,\n      "connectionLifetime": 36000,\n      "connectionIdleTimeout": 60,\n      "charEncodingWindows": "multibyte",\n      "charEncodingUnix": "utf8",\n      "tablePrefix": "",\n      "connectionString": "DSN=postgres_win;",\n      "parameterizedQueries": false,\n      "extendedFetch": false,\n      "login": {\n        "name": "postgres_dsn.login",\n        "id": "B6FD3ADA4867346E60EE5FAAB15B8471",\n        "isEmbedded": true\n      },\n      "embeddedLogin": {\n        "name": "postgres_dsn.login",\n        "id": "B6FD3ADA4867346E60EE5FAAB15B8471",\n        "description": "",\n        "dateCreated": "1970-01-01T00:00:00.000+0000",\n        "dateModified": "1970-01-01T00:00:00.000+0000",\n        "acg": 0,\n        "username": "abc"\n      },\n      "driverType": "odbc",\n      "oauthParameter": "",\n      "walletInfo": "",\n      "iam": {},\n      "resource": "",\n      "scope": "",\n      "enableSso": false\n    }\n  },\n  "tablePrefix": "",\n  "odbcVersion": "version3x",\n  "intermediateStoreDbName": "",\n  "intermediateStoreTableSpaceName": "",\n  "dbms": {\n    "name": "PostgreSQL",\n    "id": "702780F3E3594D95AD4C85CE8F803306"\n  },\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  },\n  "hidden": false\n}\n')))),(0,i.kt)("h3",{id:"step-2-use-the-post-apidatasourcesdatasourceidconversion-api-call-to-convert"},"Step 2: Use the ",(0,i.kt)("inlineCode",{parentName:"h3"},"POST /api/datasources/{datasourceId}/conversion")," API call to convert"),(0,i.kt)("p",null,"This call will convert the DSN in the connection string(",(0,i.kt)("inlineCode",{parentName:"p"},"database/embeddedConnection/connectionString"),") to DSN-less format connection string."),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Header:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Accept: application/json"\n"X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response Code: 204")),(0,i.kt)("h3",{id:"step-3-use-the-get-apidatasourcesdatasourceid-api-call-to-get-the-datasource-definition-again"},"Step 3: Use the GET ",(0,i.kt)("inlineCode",{parentName:"h3"},"/api/datasources/{datasourceId}")," API call to get the datasource definition again"),(0,i.kt)("p",null,"After conversion, you should be able to see the DSN-less format connection string in the response by calling the API to get the datasource definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"connectionString": "DRIVER={MicroStrategy ODBC Driver for PostgreSQL Wire Protocol};APPLICATIONUSINGTHREADS=1;DATABASE=test;DEFAULTLONGDATABUFFLEN=1024;DESCRIPTION=MicroStrategy ODBC Driver for PostgreSQL Wire Protocol;ENABLEDESCRIBEPARAM=1;ENCRYPTIONMETHOD=1;FETCHTSWTZASTIMESTAMP=1;FETCHTWFSASTIME=1;HOSTNAME=xx.xx.xx.xx;HOSTNAMEINCERTIFICATE=xx.xx.xx.xx;PORTNUMBER=5432;TRANSACTIONERRORBEHAVIOR=0;UID=uid;VALIDATESERVERCERTIFICATE=1;XMLDESCRIBETYPE=-10;"\n')),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Accept: application/json"\n"X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "683E35DC47E33C3086A0EEB8F0C3F1E5",\n  "name": "postgres_dsn",\n  "description": "",\n  "dateCreated": "2022-11-10T10:35:20.000+0000",\n  "dateModified": "2022-11-24T07:39:35.000+0000",\n  "acg": 255,\n  "datasourceType": "data_import",\n  "database": {\n    "type": "postgre_sql",\n    "version": "postgre_sql_90",\n    "connection": {\n      "name": "postgres_dsn.conn",\n      "id": "C329607743675E3DE8785F917C8B0EBB",\n      "isEmbedded": true\n    },\n    "embeddedConnection": {\n      "name": "postgres_dsn.conn",\n      "id": "C329607743675E3DE8785F917C8B0EBB",\n      "description": "",\n      "acg": 0,\n      "executionMode": "synchronous",\n      "maxCancelAttemptTime": 60,\n      "maxQueryExeTime": -1,\n      "maxConnectionAttemptTime": 60,\n      "connectionLifetime": 36000,\n      "connectionIdleTimeout": 60,\n      "charEncodingWindows": "multibyte",\n      "charEncodingUnix": "utf8",\n      "tablePrefix": "",\n      "connectionString": "DRIVER={MicroStrategy ODBC Driver for PostgreSQL Wire Protocol};APPLICATIONUSINGTHREADS=1;DATABASE=test;DEFAULTLONGDATABUFFLEN=1024;DESCRIPTION=MicroStrategy ODBC Driver for PostgreSQL Wire Protocol;ENABLEDESCRIBEPARAM=1;ENCRYPTIONMETHOD=1;FETCHTSWTZASTIMESTAMP=1;FETCHTWFSASTIME=1;HOSTNAME=xx.xx.xx.xx;HOSTNAMEINCERTIFICATE=xx.xx.xx.xx;PORTNUMBER=5432;TRANSACTIONERRORBEHAVIOR=0;UID=uid;VALIDATESERVERCERTIFICATE=1;XMLDESCRIBETYPE=-10;",\n      "parameterizedQueries": false,\n      "extendedFetch": false,\n      "login": {\n        "name": "postgres_dsn.login",\n        "id": "B6FD3ADA4867346E60EE5FAAB15B8471",\n        "isEmbedded": true\n      },\n      "embeddedLogin": {\n        "name": "postgres_dsn.login",\n        "id": "B6FD3ADA4867346E60EE5FAAB15B8471",\n        "description": "",\n        "dateCreated": "1970-01-01T00:00:00.000+0000",\n        "dateModified": "1970-01-01T00:00:00.000+0000",\n        "acg": 0,\n        "username": "abc"\n      },\n      "driverType": "odbc",\n      "oauthParameter": "",\n      "walletInfo": "",\n      "iam": {},\n      "resource": "",\n      "scope": "",\n      "enableSso": false\n    }\n  },\n  "tablePrefix": "",\n  "odbcVersion": "version3x",\n  "intermediateStoreDbName": "",\n  "intermediateStoreTableSpaceName": "",\n  "dbms": {\n    "name": "PostgreSQL",\n    "id": "702780F3E3594D95AD4C85CE8F803306"\n  },\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  },\n  "hidden": false\n}\n')))),(0,i.kt)("h2",{id:"convert-for-a-datasource-connection"},"Convert for a datasource connection"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/datasourceConnectionConversion"},"POST /api/datasources/connections/{connectionId}/conversion")),(0,i.kt)("p",null,"This endpoint allows the caller to convert for a standalone datasource connection. You use the authorization token returned during login as the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionId")," using the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/datasources/connections"),". If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,i.kt)("h3",{id:"step-1-use-the-get-apidatasourcesconnectionsconnectionid-api-call-to-get-the-datasource-connection-definition"},"Step 1: Use the ",(0,i.kt)("inlineCode",{parentName:"h3"},"GET /api/datasources/connections/{connectionId}")," API call to get the datasource connection definition"),(0,i.kt)("p",null,"You can check the connection string(",(0,i.kt)("inlineCode",{parentName:"p"},"connectionString"),") of the embedded datasource connection you want to convert to see the DSN inside this datasource connection before conversion."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"connectionString": "DSN=sqlserver_win;"\n')),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Accept: application/json"\n"X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "sqlserver_dsn",\n  "id": "6D34D3DE4CDCB0638BE3AF876B8E11DD",\n  "description": "",\n  "acg": 0,\n  "executionMode": "synchronous",\n  "maxCancelAttemptTime": 60,\n  "maxQueryExeTime": -1,\n  "maxConnectionAttemptTime": 6000,\n  "connectionLifetime": 36000,\n  "connectionIdleTimeout": 60,\n  "charEncodingWindows": "multibyte",\n  "charEncodingUnix": "utf8",\n  "tablePrefix": "",\n  "connectionString": "DSN=sqlserver_win;",\n  "parameterizedQueries": true,\n  "extendedFetch": false,\n  "database": {\n    "login": {\n      "id": "40B2C4E84D717B49FF8A4192493484E7",\n      "name": "sqlserver_dsn_login"\n    },\n    "type": "sql_server",\n    "version": "default"\n  },\n  "driverType": "odbc",\n  "oauthParameter": "",\n  "walletInfo": "",\n  "iam": {},\n  "resource": "",\n  "scope": "",\n  "enableSso": false\n}\n')))),(0,i.kt)("h3",{id:"step-2-use-the-post-apidatasourcesconnectionsconnectionidconversion-api-call-to-convert"},"Step 2: Use the ",(0,i.kt)("inlineCode",{parentName:"h3"},"POST /api/datasources/connections/{connectionId}/conversion")," API call to convert"),(0,i.kt)("p",null,"This call will convert the DSN in the connection string(",(0,i.kt)("inlineCode",{parentName:"p"},"connectionString"),") to DSN-less format connection string."),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Header:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Accept: application/json"\n"X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response Code: 204")),(0,i.kt)("h3",{id:"step-3-use-the-get-apidatasourcesconnectionsconnectionid-api-call-to-get-the-datasource-connection-definition-again"},"Step 3: Use the GET ",(0,i.kt)("inlineCode",{parentName:"h3"},"/api/datasources/connections/{connectionId}")," API call to get the datasource connection definition again"),(0,i.kt)("p",null,"After conversion, you should be able to see the DSN-less format connection string in the response by calling the API to get the datasource connection definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"connectionString": "DRIVER={MicroStrategy ODBC Driver for SQL Server Wire Protocol};DATABASE=tpch;HOSTNAME=10.27.69.102;KEEPALIVE=0;KEEPCONNECTIONACTIVE=0;LOADBALANCETIMEOUT=0;LOADBALANCING=0;LOGINTIMEOUT=15;MAXPOOLSIZE=100;MINPOOLSIZE=0;MULTISUBNETFAILOVER=0 - FALSE;PORTNUMBER=1433;PROXYMODE=0;QUERYTIMEOUT=0;REPORTCODEPAGECONVERSIONERRORS=0;SNAPSHOTSERIALIZABLE=0;SOCKETIDLETIMECHECKINTERVAL=1500;VALIDATESERVERCERTIFICATE=1;XMLDESCRIBETYPE=-10;"\n')),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Accept: application/json"\n"X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c"\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "sqlserver_dsn",\n  "id": "6D34D3DE4CDCB0638BE3AF876B8E11DD",\n  "description": "",\n  "acg": 0,\n  "executionMode": "synchronous",\n  "maxCancelAttemptTime": 60,\n  "maxQueryExeTime": -1,\n  "maxConnectionAttemptTime": 6000,\n  "connectionLifetime": 36000,\n  "connectionIdleTimeout": 60,\n  "charEncodingWindows": "multibyte",\n  "charEncodingUnix": "utf8",\n  "tablePrefix": "",\n  "connectionString": "DRIVER={MicroStrategy ODBC Driver for SQL Server Wire Protocol};DATABASE=tpch;HOSTNAME=10.27.69.102;KEEPALIVE=0;KEEPCONNECTIONACTIVE=0;LOADBALANCETIMEOUT=0;LOADBALANCING=0;LOGINTIMEOUT=15;MAXPOOLSIZE=100;MINPOOLSIZE=0;MULTISUBNETFAILOVER=0 - FALSE;PORTNUMBER=1433;PROXYMODE=0;QUERYTIMEOUT=0;REPORTCODEPAGECONVERSIONERRORS=0;SNAPSHOTSERIALIZABLE=0;SOCKETIDLETIMECHECKINTERVAL=1500;VALIDATESERVERCERTIFICATE=1;XMLDESCRIBETYPE=-10;",\n  "parameterizedQueries": true,\n  "extendedFetch": false,\n  "database": {\n    "login": {\n      "id": "40B2C4E84D717B49FF8A4192493484E7",\n      "name": "sqlserver_dsn_login"\n    },\n    "type": "sql_server",\n    "version": "default"\n  },\n  "driverType": "odbc",\n  "oauthParameter": "",\n  "walletInfo": "",\n  "iam": {},\n  "resource": "",\n  "scope": "",\n  "enableSso": false\n}\n')))))}g.isMDXComponent=!0}}]);