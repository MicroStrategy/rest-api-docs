"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7437],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9674:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],p={title:"Workflow Samples - Retrieve a Prompt of an SAP HANA Table With Input Parameters",sidebar_label:"Retrieve a Prompt of an SAP HANA Table",description:"You can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table."},s=void 0,l={unversionedId:"common-workflows/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",id:"common-workflows/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",title:"Workflow Samples - Retrieve a Prompt of an SAP HANA Table With Input Parameters",description:"You can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table.",source:"@site/docs/common-workflows/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table.md",sourceDirName:"common-workflows/manage-table-objects",slug:"/common-workflows/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",permalink:"/common-workflows/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",draft:!1,editUrl:"https://undefined/undefined/restapi-docs/tree/main/docs/common-workflows/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663186539,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Samples - Retrieve a Prompt of an SAP HANA Table With Input Parameters",sidebar_label:"Retrieve a Prompt of an SAP HANA Table",description:"You can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table."},sidebar:"tutorialSidebar",previous:{title:"Update a Table's Definition",permalink:"/common-workflows/manage-table-objects/update-a-tables-definition"},next:{title:"Update a Prompt of an SAP HANA Table",permalink:"/common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table"}},m={},c=[{value:"Retrieve a Prompt of a Table",id:"retrieve-a-prompt-of-a-table",level:2},{value:"Retrieve a Table Prompt Within a Changeset",id:"retrieve-a-table-prompt-within-a-changeset",level:2},{value:"Step 1: Create a changeset using POST /api/model/changesets",id:"step-1-create-a-changeset-using-post-apimodelchangesets",level:3},{value:"Step 2: Get a table&#39;s prompt within a changeset using GET api/model/tables/{tableId}/prompts/{promptId}",id:"step-2-get-a-tables-prompt-within-a-changeset-using-get-apimodeltablestableidpromptspromptid",level:3},{value:"Step 3: Delete a changeset using DELETE /api/model/changeset/{ChangesetId}",id:"step-3-delete-a-changeset-using-delete-apimodelchangesetchangesetid",level:3}],d={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-6ddc138b-b2ab-4c53-8172-b2af26f4586d?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"Starting in MicroStrategy 2021 Update 6, you can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table."),(0,o.kt)("p",null,"This workflow applies only to SAP HANA tables with input parameters because only these tables have prompts, and one input parameters corresponds to one prompt. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US"},"KB48437: Support for SAP HANA calculation views with input parameters"),"."),(0,o.kt)("h2",{id:"retrieve-a-prompt-of-a-table"},"Retrieve a Prompt of a Table"),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve an existing prompt of an SAP HANA table."),(0,o.kt)("p",null,"The object ID of the table is ",(0,o.kt)("inlineCode",{parentName:"p"},"84AF2517E662417D9924FD678B44591A")," and the object ID of the prompt is ",(0,o.kt)("inlineCode",{parentName:"p"},"339585B03F354D11AE8760C4489160F1"),". The table is in the MicroStrategy Tutorial Advanced project and its project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"6AB8DFFE4B99B7F6FB0E94AD176C4A28"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Retrieve the table prompt using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTablePromptDetails"},"GET /api/model/tables/{tableId}/prompts/{promptId}"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The prompt you are retrieving must already be in the prompt list of the current table."),(0,o.kt)("p",{parentName:"admonition"},"You must use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails"},"GET /api/model/tables/{tableId}")," and check the ",(0,o.kt)("inlineCode",{parentName:"p"},"sapHanaParameters")," field to view the list of existing prompts.")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "qu6j11maseap1gc67mrsf7ivdq"\n"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1' \\\n-H 'X-MSTR-AuthToken: qu6j11maseap1gc67mrsf7ivdq' \\\n-H 'X-MSTR-ProjectID: 6AB8DFFE4B99B7F6FB0E94AD176C4A28' \\\n-H 'Cookie: JSESSIONID=741610581756E9B5B624E71E7FA84DD3; iSession=qu6j11maseap1gc67mrsf7ivdq'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the table's prompt in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-04-19T06:25:44.000Z",\n    "dateModified": "2022-05-11T08:29:50.000Z",\n    "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n    "primaryLocale": "en-US",\n    "objectId": "339585B03F354D11AE8760C4489160F1",\n    "subType": "prompt_string",\n    "name": "IP_Static_List",\n    "description": "a static list"\n  },\n  "title": "a static list",\n  "instruction": "a static list",\n  "defaultAnswer": {\n    "value": "1500211138,1501014825"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Table's prompt is returned successfully.)"),(0,o.kt)("h2",{id:"retrieve-a-table-prompt-within-a-changeset"},"Retrieve a Table Prompt Within a Changeset"),(0,o.kt)("p",null,"You want to get the prompt of the same table object mentioned in ",(0,o.kt)("a",{parentName:"p",href:"#retrieve-a-prompt-of-a-table"},"Retrieve a Prompt of a Table"),", while within a changeset. The object ID of the table is ",(0,o.kt)("inlineCode",{parentName:"p"},"84AF2517E662417D9924FD678B44591A"),". The table is in the MicroStrategy Tutorial Advanced project and its project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"6AB8DFFE4B99B7F6FB0E94AD176C4A28"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTablePromptDetails"},"GET /api/model/tables/{tableId}/prompts/{promptId}")," to update the table\u2019s prompts, it is recommended to associate all requests to one changeset.")),(0,o.kt)("h3",{id:"step-1-create-a-changeset-using-post-apimodelchangesets"},"Step 1: Create a changeset using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "qu6j11maseap1gc67mrsf7ivdq"\n"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets?schemaEdit=false' \\\n-H 'Content-Type: application/json' \\\n-H 'X-MSTR-ProjectID: 6AB8DFFE4B99B7F6FB0E94AD176C4A28' \\\n-H 'X-MSTR-AuthToken: qu6j11maseap1gc67mrsf7ivdq' \\\n-H 'Cookie: JSESSIONID=741610581756E9B5B624E71E7FA84DD3; iSession=qu6j11maseap1gc67mrsf7ivdq' \\\n--data-raw ''\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "99B0CDA74BD6480DAA4C164FC361F4F0",\n  "type": "metadata",\n  "dateCreated": "2022-06-08T03:39:49.842053Z",\n  "dateModified": "2022-06-08T03:39:49.842072Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrUserId": "54F3D26011D2896560009A8E67019608",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userDisplayLocale": "en-US",\n  "mstrProjectId": "6AB8DFFE4B99B7F6FB0E94AD176C4A28",\n  "userName": "Administrator"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,o.kt)("h3",{id:"step-2-get-a-tables-prompt-within-a-changeset-using-get-apimodeltablestableidpromptspromptid"},"Step 2: Get a table's prompt within a changeset using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTablePromptDetails"},"GET api/model/tables/{tableId}/prompts/{promptId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "qu6j11maseap1gc67mrsf7ivdq"\n"X-MSTR-MS-Changeset": "99B0CDA74BD6480DAA4C164FC361F4F0"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Request Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1' \\\n-H 'X-MSTR-MS-Changeset: 99B0CDA74BD6480DAA4C164FC361F4F0' \\\n-H 'X-MSTR-AuthToken: qu6j11maseap1gc67mrsf7ivdq' \\\n-H 'Cookie: JSESSIONID=741610581756E9B5B624E71E7FA84DD3; iSession=qu6j11maseap1gc67mrsf7ivdq'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the table\u2019s definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-04-19T06:25:44.000Z",\n    "dateModified": "2022-05-11T08:29:50.000Z",\n    "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n    "primaryLocale": "en-US",\n    "objectId": "339585B03F354D11AE8760C4489160F1",\n    "subType": "prompt_string",\n    "name": "IP_Static_List",\n    "description": "a static list"\n  },\n  "title": "a static list",\n  "instruction": "a static list",\n  "defaultAnswer": {\n    "value": "1500211138,1501014825"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (Table's prompt is returned successfully.)"),(0,o.kt)("h3",{id:"step-3-delete-a-changeset-using-delete-apimodelchangesetchangesetid"},"Step 3: Delete a changeset using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changeset/{ChangesetId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "qu6j11maseap1gc67mrsf7ivdq"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets/99B0CDA74BD6480DAA4C164FC361F4F0' \\\n-H 'X-MSTR-AuthToken: qu6j11maseap1gc67mrsf7ivdq' \\\n-H 'Cookie: JSESSIONID=741610581756E9B5B624E71E7FA84DD3; iSession=qu6j11maseap1gc67mrsf7ivdq'\n")),(0,o.kt)("p",null,"Sample Response Body: Empty"),(0,o.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"))}u.isMDXComponent=!0}}]);