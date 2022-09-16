"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6407],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(a),k=r,c=m["".concat(d,".").concat(k)]||m[k]||p[k]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2297:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],o={title:"Workflow Sample - Modify a Dataset with One Request",sidebar_label:"Modify a Dataset with One Request",description:"You can use a single Push Data API request to modify a dataset that was created using POST /datasets. You can add new data and modify existing data in the dataset. The workflow for using the Push Data API to modify a dataset is described below."},d=void 0,s={unversionedId:"common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-modify-a-dataset-with-one-request",id:"common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-modify-a-dataset-with-one-request",title:"Workflow Sample - Modify a Dataset with One Request",description:"You can use a single Push Data API request to modify a dataset that was created using POST /datasets. You can add new data and modify existing data in the dataset. The workflow for using the Push Data API to modify a dataset is described below.",source:"@site/docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-modify-a-dataset-with-one-request.md",sourceDirName:"common-workflows/make-external-data-available/create-a-dataset-with-one-request",slug:"/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-modify-a-dataset-with-one-request",permalink:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-modify-a-dataset-with-one-request",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-modify-a-dataset-with-one-request.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1663337315,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{title:"Workflow Sample - Modify a Dataset with One Request",sidebar_label:"Modify a Dataset with One Request",description:"You can use a single Push Data API request to modify a dataset that was created using POST /datasets. You can add new data and modify existing data in the dataset. The workflow for using the Push Data API to modify a dataset is described below."},sidebar:"tutorialSidebar",previous:{title:"Create a Dataset with One Request",permalink:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-a-dataset-with-one-request"},next:{title:"Create and Modify a Dataset with One Request",permalink:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request"}},u={},p=[],m={toc:p};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can use a single Push Data API request to modify a dataset that was ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/"},"created using ",(0,l.kt)("inlineCode",{parentName:"a"},"POST /api/datasets")),". You can add new data and modify existing data in the dataset."),(0,l.kt)("p",null,"The workflow for using the Push Data API to modify a dataset is described below."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deploy the ",(0,l.kt)("inlineCode",{parentName:"p"},"MicroStrategyLibrary")," war file.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," request to create a session and get an authorization token."),(0,l.kt)("p",{parentName:"li"},"To make sure that you have permission to modify a dataset on the Intelligence Server, send a ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," request to create a session. If it is successful, this request returns an authorization token that you then use in the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasets/{datasetId}/tables/{tableId}")," request.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Prepare the external data that you want to use to modify the dataset.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasets/{datasetId}/tables/{tableId}")," request to upload external data and use it to modify the dataset on the Intelligence Server."),(0,l.kt)("p",{parentName:"li"},"You define the external data that you want to upload in the ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," parameter of the PATCH request . You specify the action that should be taken to modify the dataset using the ",(0,l.kt)("inlineCode",{parentName:"p"},"updatePolicy")," parameter of the PATCH request."))),(0,l.kt)("p",null,"The dataset is made up of tables, with each table representing a structured set of data. The ",(0,l.kt)("inlineCode",{parentName:"p"},"datasetId")," specifies the dataset that contains the table you want to modify, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"tabletId")," specifies the table that contains the data you want to modify."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you created the dataset with a single request, it can have only one table; if you created it with multiple requests, it can have one or more tables.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasets/{datasetId}/tables/{tableId}")," request has the following parameters:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization token returned from the POST /api/auth/login request"),(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"datasetId"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the dataset to be modified"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableId"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the dataset table to be modified"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updatePolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of update action to take: add, update, upsert, or replace"),(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the external data to be uploaded to the MicroStrategy Intelligence Server. The dataset is made up of tables that each represent a set of structured data."),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"updatePolicy")," parameter in the header defines the type of action you want to take to modify the database table. Actions include:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add Adds new data if it does not exist in the current dataset table. Does not replace data if it already exists in the current dataset table."),(0,l.kt)("li",{parentName:"ul"},"Update Replaces data if it does exist in the current dataset table. Does not add new data if it does not exist in the current dataset table."),(0,l.kt)("li",{parentName:"ul"},"Upsert Adds new data if it does not exist in the current dataset table. Replaces data if it does exist in the current dataset table."),(0,l.kt)("li",{parentName:"ul"},"Replace Replaces all the existing data in the dataset table with new imported external data."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," parameter defines the data you want to upload to the Intelligence Server and use to modify the database table. The model for this parameter has the following keys"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TableCreator"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table to be modified")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"columnHeaders"),(0,l.kt)("td",{parentName:"tr",align:null},"Array ","[columnHeader]"),(0,l.kt)("td",{parentName:"tr",align:null},"Column headers for the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data in the table in stringified JSON format encoded as Base64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ColumnHeader"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the column header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"dataType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data type for the values in the column with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"dateFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"string (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Date format for DATETME values in the column with default format of YYYY-MM-DD[(T)hh:mm:","[ss]","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the operation fails, the ",(0,l.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasets/{datasetId}/tables/{tableId}")," request returns a response indicating why it failed.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Status Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Bad request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"Internal server error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);