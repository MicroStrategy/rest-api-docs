"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6132],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6096:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],i={title:"Workflow Sample - Create a Custom Time Zone Object",sidebar_label:"Create a Custom Time Zone Object",description:"This workflow demonstrates how to create a new custom object through the Modeling service."},c=void 0,m={unversionedId:"common-workflows/manage-time-zone-objects/create-a-time-zone-object",id:"common-workflows/manage-time-zone-objects/create-a-time-zone-object",title:"Workflow Sample - Create a Custom Time Zone Object",description:"This workflow demonstrates how to create a new custom object through the Modeling service.",source:"@site/docs/common-workflows/manage-time-zone-objects/create-a-time-zone-object.md",sourceDirName:"common-workflows/manage-time-zone-objects",slug:"/common-workflows/manage-time-zone-objects/create-a-time-zone-object",permalink:"/rest-api-docs/common-workflows/manage-time-zone-objects/create-a-time-zone-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-time-zone-objects/create-a-time-zone-object.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1663944405,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Workflow Sample - Create a Custom Time Zone Object",sidebar_label:"Create a Custom Time Zone Object",description:"This workflow demonstrates how to create a new custom object through the Modeling service."}},l={},p=[{value:"1. Create a changeset using <code>POST /api/model/changesets</code> with <code>schemaEdit=false</code>",id:"1-create-a-changeset-using-post-apimodelchangesets-with-schemaeditfalse",level:2},{value:"2. Create a new custom time zone using <code>POST /api/model/timezones</code>",id:"2-create-a-new-custom-time-zone-using-post-apimodeltimezones",level:2},{value:"3. Commit the changeset using <code>POST /api/model/changesets/{ChangesetId}/commit</code>",id:"3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit",level:2},{value:"4. Delete the changeset using <code>DELETE /api/model/changesets/{ChangesetId}</code>",id:"4-delete-the-changeset-using-delete-apimodelchangesetschangesetid",level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0bea31ca-d010-4214-8ad6-19c1906fbd5a?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow demonstrates how to create a new custom object through the Modeling service."),(0,r.kt)("p",null,"You want to create a new custom time zone named ",(0,r.kt)("inlineCode",{parentName:"p"},'"New York"')," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom Timezones")," folder in the configuration."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /api/auth/login")),"."),(0,r.kt)("p",{parentName:"admonition"},"Since time zone objects are configuration objects, you must set the project ID as an empty string.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"schemaEdit")," must be ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you are committing a changeset that contains schema manipulations."),(0,r.kt)("h2",{id:"1-create-a-changeset-using-post-apimodelchangesets-with-schemaeditfalse"},"1. Create a changeset using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /api/model/changesets"))," with ",(0,r.kt)("inlineCode",{parentName:"h2"},"schemaEdit=false")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": ""\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=false" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID:"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:36:31.187294Z",\n  "dateModified": "2020-11-17T17:36:31.187308Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "38A062302D4411D28E71006008960167",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,r.kt)("h2",{id:"2-create-a-new-custom-time-zone-using-post-apimodeltimezones"},"2. Create a new custom time zone using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/timezones"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /api/model/timezones"))),(0,r.kt)("p",null,"You want to create the time zone by providing its name and base time zone."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"'name' is not required to create a new time zone. If 'name' is not provided, the new time zone will be named using the base time zone's name. If the base time zone's name already exists in the folder, the suffix like ",(0,r.kt)("inlineCode",{parentName:"p"},"(1)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"(2)"),", and so on will be appended.")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json""X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9""X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": { "name": "New York" },\n  "baseTimezone": { "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8" }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"information\\": {\\"name\\": \\"New York\\"},\\"baseTimezone\\": {\\"objectId\\": \\"1D18D39B4594CFAF60A6C1B2F48164E8\\"}}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new time zone's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-12-08T08:54:07.114Z",\n    "dateModified": "2021-12-08T08:54:07.114Z",\n    "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n    "primaryLocale": "en-US",\n    "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",\n    "subType": "timezone_custom",\n    "name": "New York"\n  },\n  "baseTimezone": {\n    "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n    "subType": "timezone_system",\n    "name": "America New York time"\n  },\n  "currentOffset": -18000\n}\n')),(0,r.kt)("p",null,"Response Code: 201 (A new time zone is created successfully in the changeset.)"),(0,r.kt)("h2",{id:"3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit"},"3. Commit the changeset using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /api/model/changesets/{ChangesetId}/commit"))),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:42:13.312629Z",\n  "dateModified": "2020-11-17T17:44:30.814816Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "38A062302D4411D28E71006008960167",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,r.kt)("h2",{id:"4-delete-the-changeset-using-delete-apimodelchangesetschangesetid"},"4. Delete the changeset using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},(0,r.kt)("inlineCode",{parentName:"a"},"DELETE /api/model/changesets/{ChangesetId}"))),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",null,"Sample Response Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (The changeset is deleted successfully.)"))}u.isMDXComponent=!0}}]);