"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5713],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(a),m=r,C=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return a?n.createElement(C,o(o({ref:e},p),{},{components:a})):n.createElement(C,o({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4434:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return g}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=["components"],i={title:"Workflow Sample - Create and Modify a Dataset with One Request",sidebar_label:"Create and Modify a Dataset with One Request",description:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request."},s=void 0,d={unversionedId:"common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",id:"common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",title:"Workflow Sample - Create and Modify a Dataset with One Request",description:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request.",source:"@site/docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request.md",sourceDirName:"common-workflows/make-external-data-available/create-a-dataset-with-one-request",slug:"/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",permalink:"/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",draft:!1,editUrl:"https://undefined/undefined/restapi-docs/tree/main/docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663186539,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Create and Modify a Dataset with One Request",sidebar_label:"Create and Modify a Dataset with One Request",description:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request."},sidebar:"tutorialSidebar",previous:{title:"Modify a Dataset with One Request",permalink:"/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-modify-a-dataset-with-one-request"},next:{title:"Create a Dataset Incrementally with Multiple Requests",permalink:"/common-workflows/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/"}},p={},g=[{value:"Log in",id:"log-in",level:2},{value:"Get project list",id:"get-project-list",level:2},{value:"Create a dataset",id:"create-a-dataset",level:2},{value:"Update a dataset",id:"update-a-dataset",level:2},{value:"Log out",id:"log-out",level:2}],u={toc:g};function m(t){var e=t.components,i=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#log-in"},"Log in")," User authenticates into the environment with ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#get-project-list"},"Get project list")," User obtains the project list from ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/projects")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#create-a-dataset"},"Create a dataset")," User calls ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/datasets")," to create a dataset"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#update-a-dataset"},"Update a dataset")," User calls ",(0,l.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasets/{datasetId}/tables/{tableId}")," to update the dataset"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#log-out"},"Log out")," User calls ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/logout")," to close the session.")),(0,l.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,l.kt)("h2",{id:"log-in"},"Log in"),(0,l.kt)("p",null,"End Point: ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")),(0,l.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used in subsequent requests."),(0,l.kt)("p",null,"REST API Explorer: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin")),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n")),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c ~/cookie-jar.txt --header \'Content-Type: application/json\'\\\n--header \'Accept: application/json\' -d \'{ \\\n"loginMode":1, \\\n"username": "administrator", \\\n"password": "" \\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n')),(0,l.kt)("p",null,"Sample Response Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "rllckqkm598s8vm9h3mgvfqhus",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 16 Aug 2017 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n')),(0,l.kt)("p",null,"The authorization token ",(0,l.kt)("inlineCode",{parentName:"p"},"\u201cx-mstr-authtoken\u201d")," is returned in the response header. It is used in other endpoints to authenticate the user."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"swaggerLogin_response",src:a(3366).Z,width:"624",height:"219"})),(0,l.kt)("p",null,"Response Body: Empty"),(0,l.kt)("h2",{id:"get-project-list"},"Get project list"),(0,l.kt)("p",null,"End Point: ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/projects")),(0,l.kt)("p",null,"This endpoint allows the caller to get the list of projects with the MicroStrategy REST server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned in step 1 as the value for ",(0,l.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to."),(0,l.kt)("p",null,"REST API Explorer: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#/Projects"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#/Projects")),(0,l.kt)("p",null,"Sample Request Header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: i5cggnjsm7cqb5snnmkbrmnjb7'\n")),(0,l.kt)("p",null,"Request Body: Empty"),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json'\\\n--header 'X-MSTR-AuthToken: dlv58lvan2uh83skmbp55a9a7v'\n      https://demo.microstrategy.com/MicroStrategyLibrary/api/projects'\n")),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    "name": "MicroStrategy Tutorial",\n    "alias": "",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",\n    "status": 0\n  },\n  {\n    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",\n    "name": "Human Resources Analysis Module",\n    "alias": "",\n    "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",\n    "status": 0\n  }\n]\n')),(0,l.kt)("p",null,"The project information, including the project ID, is included in the response body. The project ID is used in other endpoints."),(0,l.kt)("h2",{id:"create-a-dataset"},"Create a dataset"),(0,l.kt)("p",null,"End Point: ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/datasets")),(0,l.kt)("p",null,"This endpoint allows the caller to create a dataset with the MicroStrategy REST server. You use the authorization token returned in step 1 as the value for ",(0,l.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),' and the ID for the "test" project returned in step 2 as the value for ',(0,l.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID"),"."),(0,l.kt)("p",null,"The dataset is created from the data in the ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," parameter of the request. The ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," parameter defines the data you want to upload to the Intelligence Server. The model for this parameter has the following keys:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DatasetCreator"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the dataset to be created from the external data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"tables"),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[TableCreator]"),(0,l.kt)("td",{parentName:"tr",align:null},"Tables to be created in the dataset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[DIAttribute]"),(0,l.kt)("td",{parentName:"tr",align:null},"Attributes to be included in the dataset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[DIMetric]"),(0,l.kt)("td",{parentName:"tr",align:null},"Metrics to be included in the dataset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TableCreator"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"columnHeaders"),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[columnHeader]"),(0,l.kt)("td",{parentName:"tr",align:null},"Column headers for the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data in the table in stringified JSON format encoded as Base64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DIAttribute"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the attribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"attributeForms"),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[DIForm]"),(0,l.kt)("td",{parentName:"tr",align:null},"Set of forms for the attribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DIMetric"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the metric")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"expressions"),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[DIExpression]"),(0,l.kt)("td",{parentName:"tr",align:null},"Expression that links the metric to a column header in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ColumnHeader"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the column header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"dataType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data type for the values in the column, with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"dateFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"string (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Date format for DATETME values in the column, with default format of YYYY-MM-DD[(T)hh:mm:","[ss]","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DIForm"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"category"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Category of the attribute form, with values such as ID or DESC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"expressions"),(0,l.kt)("td",{parentName:"tr",align:null},"Array","[DIExpression]"),(0,l.kt)("td",{parentName:"tr",align:null},"Expression that links the attribute form to a column header in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DIExpression"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"formula"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Expression that links a metric or attribute form in the dataset to a column header in the table, in the format table_name.column_name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"The resulting HTTP response returns an HTTP status 200 and a response body containing the name and ID of the dataset and the ID of the table containing the data."),(0,l.kt)("p",null,"REST API Explorer: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Datasets/createDICubeInstance"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Datasets/createDICubeInstance")),(0,l.kt)("p",null,"Request Parameters:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"CreateDataset_ReqParams",src:a(7584).Z,width:"675",height:"279"})),(0,l.kt)("p",null,"Sample Request Headers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\n")),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SALES_TABLE",\n  "tables": [\n    {\n      "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjoyLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0IjozMDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOCwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjQwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjUwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n      "name": "SALES_TABLE",\n      "columnHeaders": [\n        {\n          "name": "Year",\n          "dataType": "INTEGER"\n        },\n        {\n          "name": "Category_ID",\n          "dataType": "INTEGER"\n        },\n        {\n          "name": "Category_DESC",\n          "dataType": "string"\n        },\n        {\n          "name": "Cost",\n          "dataType": "DOUBLE"\n        },\n        {\n          "name": "Profit",\n          "dataType": "DOUBLE"\n        }\n      ]\n    }\n  ],\n  "metrics": [\n    {\n      "name": "Cost",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Cost"\n        }\n      ]\n    },\n    {\n      "name": "Profit",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Profit"\n        }\n      ]\n    }\n  ],\n  "attributes": [\n    {\n      "name": "Year",\n      "attributeForms": [\n        {\n          "category": "ID",\n          "expressions": [{ "formula": "SALES_TABLE.Year" }],\n          "dataType": "INTEGER"\n        }\n      ]\n    },\n    {\n      "name": "category",\n      "attributeForms": [\n        {\n          "category": "ID",\n          "expressions": [{ "formula": "SALES_TABLE.Category_ID" }],\n          "dataType": "INTEGER"\n        },\n        {\n          "category": "DESC",\n          "expressions": [{ "formula": "SALES_TABLE.Category_DESC" }],\n          "dataType": "string"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c ~/cookie-jar.txt --header \'Content-Type: application/json\'\\\n--header \'Accept: application/json\' --header \'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs\'\\\n--header \'X-MSTR-ProjectID: A773B25B4E505595455EF5B11D90049B\' -d \'{\n  "name": "SALES_TABLE",\n  "tables":[\n    {\n      "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjoyLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0IjozMDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOCwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjQwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjUwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n      "name":"SALES_TABLE",\n          "columnHeaders": [\n            {\n              "name" : "Year",\n              "dataType" : "INTEGER"\n            },\n            {\n              "name" : "Category_ID",\n              "dataType" : "INTEGER"\n            },\n            {\n              "name" : "Category_DESC",\n              "dataType" : "string"\n            },\n            {\n              "name" : "Cost",\n              "dataType" : "DOUBLE"\n            },\n            {\n              "name" : "Profit",\n              "dataType" : "DOUBLE"\n            }\n          ]\n    }\n  ],\n  "metrics" : [\n    {\n      "name": "Cost",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Cost"\n        }\n      ]\n    },\n    {\n      "name": "Profit",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Profit"\n        }\n      ]\n    }\n  ],\n  "attributes" : [\n    {\n      "name":"Year",\n      "attributeForms":[\n        {\n          "category" : "ID",\n          "expressions" : [{"formula" : "SALES_TABLE.Year"}],\n          "dataType": "INTEGER"\n        }\n      ]\n    },\n    {\n      "name":"category",\n      "attributeForms":[\n        {\n          "category" : "ID",\n          "expressions" : [{"formula" : "SALES_TABLE.Category_ID"}],\n          "dataType": "INTEGER"\n        },\n        {\n          "category" : "DESC",\n          "expressions" : [{"formula" : "SALES_TABLE.Category_DESC"}],\n          "dataType": "string"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "datasetId": "105E10C94CF881BE3DDBA6B97E61FBC5",\n  "name": "SALES_TABLE",\n  "tables": [\n    {\n      "id": "67DD8A4015E4C176A2517420A3D14666",\n      "name": "SALES_TABLE"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"A dataset named SALES_TABLE is created under the My Reports folder. The dataset ID and the table ID, returned in the response body, are used in other endpoints, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasets/{datasetId}/tables/{tableId}"),"."),(0,l.kt)("h2",{id:"update-a-dataset"},"Update a dataset"),(0,l.kt)("p",null,"End Point: ",(0,l.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasets/{datasetId}/tables/{tableId}")),(0,l.kt)("p",null,"This endpoint allows the caller to update and republish a dataset that was created by the MicroStrategy REST server (using ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/datasets"),"). To update and republish a specific dataset, you provide the authorization token, ",(0,l.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", generated in step 1, the dataset ID and table ID to identify the dataset to be updated, the type of update action that should be performed, and the data to be applied. If successful, the resulting HTTP response returns an HTTP status 200."),(0,l.kt)("p",null,"REST API Explorer: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Datasets/updateDICubeInstance"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Datasets/updateDICubeInstance")),(0,l.kt)("p",null,"Request Parameters"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"UpdateDataset_ReqParams",src:a(4814).Z,width:"677",height:"361"})),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\n")),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjo1LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0Ijo2MDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOSwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjYwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjYwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n  "name": "SALES_TABLE",\n  "columnHeaders": [\n    {\n      "name": "Year",\n      "dataType": "INTEGER"\n    },\n    {\n      "name": "Category_ID",\n      "dataType": "INTEGER"\n    },\n    {\n      "name": "Category_DESC",\n      "dataType": "string"\n    },\n    {\n      "name": "Cost",\n      "dataType": "DOUBLE"\n    },\n    {\n      "name": "Profit",\n      "dataType": "DOUBLE"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH -b ~/cookie-jar.txt \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasets/105E10C94CF881BE3DDBA6B97E61FBC5/tables/67DD8A4015E4C176A2517420A3D14666\'\\\n--header \'Content-Type: application/json\'\\\n--header \'Accept: application/json\' --header \'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs\'\\\n--header \'X-MSTR-ProjectID: A773B25B4E505595455EF5B11D90049B\'\\\n--header \'updatePolicy: Replace\' -d \'       {\n  "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjo1LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0Ijo2MDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOSwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjYwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjYwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n  "name":"SALES_TABLE",\n  "columnHeaders": [\n    {\n      "name" : "Year",\n      "dataType" : "INTEGER"\n    },\n    {\n      "name" : "Category_ID",\n      "dataType" : "INTEGER"\n    },\n    {\n      "name" : "Category_DESC",\n      "dataType" : "string"\n    },\n    {\n      "name" : "Cost",\n      "dataType" : "DOUBLE"\n    },\n    {\n      "name" : "Profit",\n      "dataType" : "DOUBLE"\n    }\n  ]\n}\'\n')),(0,l.kt)("p",null,"Response Body: Empty"),(0,l.kt)("p",null,"Response Code: 204"),(0,l.kt)("p",null,"The dataset named SALES_TABLE, under the My Reports folder, is updated and republished using the specified type of update action and data. In this example, the update action is to replace the existing data with new data."),(0,l.kt)("h2",{id:"log-out"},"Log out"),(0,l.kt)("p",null,"End Point: ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/auth/logout")),(0,l.kt)("p",null,"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST server. In this example, you close the active user session by providing the authorization token, X-MSTR-AuthToken, generated in step 1. If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,l.kt)("p",null,"REST API Explorer: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout")),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\n")),(0,l.kt)("p",null,"Request Body: Empty"),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json'\\\n--header 'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")),(0,l.kt)("p",null,"Response Code: 204"))}m.isMDXComponent=!0},7584:function(t,e,a){e.Z=a.p+"assets/images/CreateDataset_ReqParams-947a424cafa4f1dc214d3c27d3fdb10f.png"},4814:function(t,e,a){e.Z=a.p+"assets/images/UpdateDataset_ReqParams-7eb7765de6e5b44330fffe92d9b3f7d6.png"},3366:function(t,e,a){e.Z=a.p+"assets/images/swaggerLogin_response-77d8e10a34b2765db036f4cd3ac8c6b9.png"}}]);