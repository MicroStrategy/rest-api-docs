"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5713],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,C=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return a?n.createElement(C,o(o({ref:t},p),{},{components:a})):n.createElement(C,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4434:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return g}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=["components"],i={title:"Workflow Sample - Create and Modify a Dataset with One Request",sidebar_label:"Create and Modify a Dataset with One Request",description:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request."},s=void 0,d={unversionedId:"common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",id:"common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",title:"Workflow Sample - Create and Modify a Dataset with One Request",description:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request.",source:"@site/docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request.md",sourceDirName:"common-workflows/make-external-data-available/create-a-dataset-with-one-request",slug:"/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",permalink:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Create and Modify a Dataset with One Request",sidebar_label:"Create and Modify a Dataset with One Request",description:"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request."},sidebar:"tutorialSidebar",previous:{title:"Make External Data Available Using the Push Data API",permalink:"/rest-api-docs/common-workflows/make-external-data-available/"},next:{title:"Create a Dataset Incrementally with Multiple Requests",permalink:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/"}},p={},g=[{value:"Workflow",id:"workflow",level:2},{value:"Log in",id:"log-in",level:2},{value:"Create a dataset",id:"create-a-dataset",level:2},{value:"Tables",id:"tables",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Update a dataset",id:"update-a-dataset",level:2},{value:"Log out",id:"log-out",level:2}],u={toc:g};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-eccc2471-3af4-44c0-b4aa-9c98a1443823?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("h2",{id:"workflow"},"Workflow"),(0,l.kt)("p",null,"You can use a single REST API to create a dataset using external data you upload directly to the Intelligence Server. If you have a small amount of data and need only one table in your dataset, this request workflow is the easiest to use. You simply define a single-table dataset and upload data to it using one Push Data API request."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you have a large amount of data, the recommendation is to use the ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/"},"incremental approach to uploading data to the Intelligence Server"),"."),(0,l.kt)("p",{parentName:"admonition"},"Datasets created using ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/datasets/models")," cannot be modified with ",(0,l.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasets/{datasetId}/tables/{tableId}"),". They are updated using the same ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally"},"upload session workflow")," used to create the dataset; datasets created using ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/datasets")," can also be updated using the upload session workflow.")),(0,l.kt)("p",null,"The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#log-in"},"Log in"),". User authenticates into the environment with ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#create-a-dataset"},"Create a dataset"),". User calls ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/datasets")," to create a dataset"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#update-a-dataset"},"Update a dataset"),". User calls ",(0,l.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasets/{datasetId}/tables/{tableId}")," to update the dataset"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#log-out"},"Log out"),". User calls ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/logout")," to close the session.")),(0,l.kt)("p",null,"A detailed explanation of each step is provided below."),(0,l.kt)("h2",{id:"log-in"},"Log in"),(0,l.kt)("p",null,"End Point: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login")),(0,l.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used in subsequent requests."),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n")),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c ~/cookie-jar.txt --header \'Content-Type: application/json\'\\\n--header \'Accept: application/json\' -d \'{ \\\n"loginMode":1, \\\n"username": "administrator", \\\n"password": "" \\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n')),(0,l.kt)("p",null,"Sample Response Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "rllckqkm598s8vm9h3mgvfqhus",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 16 Aug 2017 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n')),(0,l.kt)("p",null,"The authorization token ",(0,l.kt)("inlineCode",{parentName:"p"},"\u201cx-mstr-authtoken\u201d")," is returned in the response header. It is used in other endpoints to authenticate the user."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"swaggerLogin_response",src:a(3366).Z,width:"624",height:"219"})),(0,l.kt)("p",null,"Response Body: Empty"),(0,l.kt)("h2",{id:"create-a-dataset"},"Create a dataset"),(0,l.kt)("p",null,"End Point: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasets/createDICube"},"POST /api/datasets")),(0,l.kt)("p",null,"This endpoint allows the caller to create a dataset with the MicroStrategy REST server. You use the authorization token returned in step 1 as the value for ",(0,l.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")," and a project ID for ",(0,l.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID"),"."),(0,l.kt)("p",null,"The dataset is created from the data in the ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," parameter of the request. The ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," parameter defines the data you want to upload to the Intelligence Server."),(0,l.kt)("p",null,"The model for this parameter has the following fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," : Name of the dataset to be created from the external data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tables")," : Tables to be created in the dataset"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"attributes"),": Attributes to be included in the dataset"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metrics"),": Metrics to be included in the dataset")),(0,l.kt)("p",null,"The details of each field is explained below, with the JSON examples at the end."),(0,l.kt)("h3",{id:"tables"},"Tables"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tables")," field is an array of tables. Here are the fields for each table."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"columnHeaders")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of column headers for the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data in the table. It is a Base64 encoded string of JSON.")))),(0,l.kt)("p",null,"For each column header:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the column header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dataType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data type for the values in the column, with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dateFormat")),(0,l.kt)("td",{parentName:"tr",align:null},"string (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Date format for DATETME values in the column, with default format of YYYY-MM-DD[(T)hh:mm:","[ss]","]")))),(0,l.kt)("h3",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"attributes")," field is an array of attributes in the table. Here are the fields for each attribute."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the attribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributeForms")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of attribute forms")))),(0,l.kt)("p",null,"For each attribute form:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"category")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Category of the attribute form, with values such as ID or DESC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"expressions")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of expressions that link the attribute form to a column header in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dataType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data type for the values in the column, with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME'")))),(0,l.kt)("p",null,"For each expression:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"formula")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Expression that links a metric or attribute form in the dataset to a column header in the table, in the format table_name.column_name")))),(0,l.kt)("h3",{id:"metrics"},"Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the metric")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dataType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data type for the values in the column, with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"expressions")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of expressions that link the metric to a column header in the table")))),(0,l.kt)("h3",{id:"request"},"Request"),(0,l.kt)("p",null,"Request Parameters:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"CreateDataset_ReqParams",src:a(7584).Z,width:"675",height:"279"})),(0,l.kt)("p",null,"Sample Request Headers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\n")),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SALES_TABLE",\n  "tables": [\n    {\n      "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjoyLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0IjozMDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOCwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjQwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjUwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n      "name": "SALES_TABLE",\n      "columnHeaders": [\n        {\n          "name": "Year",\n          "dataType": "INTEGER"\n        },\n        {\n          "name": "Category_ID",\n          "dataType": "INTEGER"\n        },\n        {\n          "name": "Category_DESC",\n          "dataType": "string"\n        },\n        {\n          "name": "Cost",\n          "dataType": "DOUBLE"\n        },\n        {\n          "name": "Profit",\n          "dataType": "DOUBLE"\n        }\n      ]\n    }\n  ],\n  "metrics": [\n    {\n      "name": "Cost",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Cost"\n        }\n      ]\n    },\n    {\n      "name": "Profit",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Profit"\n        }\n      ]\n    }\n  ],\n  "attributes": [\n    {\n      "name": "Year",\n      "attributeForms": [\n        {\n          "category": "ID",\n          "expressions": [{ "formula": "SALES_TABLE.Year" }],\n          "dataType": "INTEGER"\n        }\n      ]\n    },\n    {\n      "name": "category",\n      "attributeForms": [\n        {\n          "category": "ID",\n          "expressions": [{ "formula": "SALES_TABLE.Category_ID" }],\n          "dataType": "INTEGER"\n        },\n        {\n          "category": "DESC",\n          "expressions": [{ "formula": "SALES_TABLE.Category_DESC" }],\n          "dataType": "string"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c ~/cookie-jar.txt --header \'Content-Type: application/json\'\\\n--header \'Accept: application/json\' --header \'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs\'\\\n--header \'X-MSTR-ProjectID: A773B25B4E505595455EF5B11D90049B\' -d \'{\n  "name": "SALES_TABLE",\n  "tables":[\n    {\n      "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjoyLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0IjozMDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOCwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjQwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjUwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n      "name":"SALES_TABLE",\n          "columnHeaders": [\n            {\n              "name" : "Year",\n              "dataType" : "INTEGER"\n            },\n            {\n              "name" : "Category_ID",\n              "dataType" : "INTEGER"\n            },\n            {\n              "name" : "Category_DESC",\n              "dataType" : "string"\n            },\n            {\n              "name" : "Cost",\n              "dataType" : "DOUBLE"\n            },\n            {\n              "name" : "Profit",\n              "dataType" : "DOUBLE"\n            }\n          ]\n    }\n  ],\n  "metrics" : [\n    {\n      "name": "Cost",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Cost"\n        }\n      ]\n    },\n    {\n      "name": "Profit",\n      "dataType": "DOUBLE",\n      "expressions": [\n        {\n          "formula": "SALES_TABLE.Profit"\n        }\n      ]\n    }\n  ],\n  "attributes" : [\n    {\n      "name":"Year",\n      "attributeForms":[\n        {\n          "category" : "ID",\n          "expressions" : [{"formula" : "SALES_TABLE.Year"}],\n          "dataType": "INTEGER"\n        }\n      ]\n    },\n    {\n      "name":"category",\n      "attributeForms":[\n        {\n          "category" : "ID",\n          "expressions" : [{"formula" : "SALES_TABLE.Category_ID"}],\n          "dataType": "INTEGER"\n        },\n        {\n          "category" : "DESC",\n          "expressions" : [{"formula" : "SALES_TABLE.Category_DESC"}],\n          "dataType": "string"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("p",null,"The resulting HTTP response returns an HTTP status 200 and a response body containing the name and ID of the dataset and the ID of the table containing the data."),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "datasetId": "105E10C94CF881BE3DDBA6B97E61FBC5",\n  "name": "SALES_TABLE",\n  "tables": [\n    {\n      "id": "67DD8A4015E4C176A2517420A3D14666",\n      "name": "SALES_TABLE"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"A dataset named SALES_TABLE is created under the My Reports folder. The dataset ID and the table ID, returned in the response body, are used in other endpoints, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasets/{datasetId}/tables/{tableId}"),"."),(0,l.kt)("h2",{id:"update-a-dataset"},"Update a dataset"),(0,l.kt)("p",null,"End Point: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasets/updateDICube"},"PATCH /api/datasets/{datasetId}/tables/{tableId}")),(0,l.kt)("p",null,"This endpoint allows the caller to update and republish a dataset that was created by the MicroStrategy REST server (using ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/datasets"),"). To update and republish a specific dataset, you provide the authorization token, ",(0,l.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", generated in step 1, the dataset ID and table ID to identify the dataset to be updated, the type of update action that should be performed, and the data to be applied. If successful, the resulting HTTP response returns an HTTP status 200."),(0,l.kt)("p",null,"Request Parameters"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"UpdateDataset_ReqParams",src:a(4814).Z,width:"677",height:"361"})),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\n")),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjo1LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0Ijo2MDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOSwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjYwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjYwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n  "name": "SALES_TABLE",\n  "columnHeaders": [\n    {\n      "name": "Year",\n      "dataType": "INTEGER"\n    },\n    {\n      "name": "Category_ID",\n      "dataType": "INTEGER"\n    },\n    {\n      "name": "Category_DESC",\n      "dataType": "string"\n    },\n    {\n      "name": "Cost",\n      "dataType": "DOUBLE"\n    },\n    {\n      "name": "Profit",\n      "dataType": "DOUBLE"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH -b ~/cookie-jar.txt \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasets/105E10C94CF881BE3DDBA6B97E61FBC5/tables/67DD8A4015E4C176A2517420A3D14666\'\\\n--header \'Content-Type: application/json\'\\\n--header \'Accept: application/json\' --header \'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs\'\\\n--header \'X-MSTR-ProjectID: A773B25B4E505595455EF5B11D90049B\'\\\n--header \'updatePolicy: Replace\' -d \'       {\n  "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjo1LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0Ijo2MDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOSwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjYwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjYwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",\n  "name":"SALES_TABLE",\n  "columnHeaders": [\n    {\n      "name" : "Year",\n      "dataType" : "INTEGER"\n    },\n    {\n      "name" : "Category_ID",\n      "dataType" : "INTEGER"\n    },\n    {\n      "name" : "Category_DESC",\n      "dataType" : "string"\n    },\n    {\n      "name" : "Cost",\n      "dataType" : "DOUBLE"\n    },\n    {\n      "name" : "Profit",\n      "dataType" : "DOUBLE"\n    }\n  ]\n}\'\n')),(0,l.kt)("p",null,"Response Body: Empty"),(0,l.kt)("p",null,"Response Code: 204"),(0,l.kt)("p",null,"The dataset named SALES_TABLE, under the My Reports folder, is updated and republished using the specified type of update action and data. In this example, the update action is to replace the existing data with new data."),(0,l.kt)("h2",{id:"log-out"},"Log out"),(0,l.kt)("p",null,"End Point: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"},"POST /api/auth/logout")),(0,l.kt)("p",null,"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST server. In this example, you close the active user session by providing the authorization token, X-MSTR-AuthToken, generated in step 1. If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\n")),(0,l.kt)("p",null,"Request Body: Empty"),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json'\\\n--header 'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")),(0,l.kt)("p",null,"Response Code: 204"))}m.isMDXComponent=!0},7584:function(e,t,a){t.Z=a.p+"assets/images/CreateDataset_ReqParams-947a424cafa4f1dc214d3c27d3fdb10f.png"},4814:function(e,t,a){t.Z=a.p+"assets/images/UpdateDataset_ReqParams-7eb7765de6e5b44330fffe92d9b3f7d6.png"},3366:function(e,t,a){t.Z=a.p+"assets/images/swaggerLogin_response-77d8e10a34b2765db036f4cd3ac8c6b9.png"}}]);