"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2674],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||l[u]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var m=2;m<s;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return r},metadata:function(){return m},toc:function(){return l}});var a=n(3117),o=n(102),s=(n(7294),n(3905)),i=["components"],r={title:"Workflow Sample - Update a Custom Time Zone Object",sidebar_label:"Update a Custom Time Zone Object",description:"This workflow sample demonstrates how to update an existing custom time zone object through the Modeling service."},c=void 0,m={unversionedId:"common-workflows/manage-time-zone-objects/update-a-time-zone-object",id:"common-workflows/manage-time-zone-objects/update-a-time-zone-object",title:"Workflow Sample - Update a Custom Time Zone Object",description:"This workflow sample demonstrates how to update an existing custom time zone object through the Modeling service.",source:"@site/docs/common-workflows/manage-time-zone-objects/update-a-time-zone-object.md",sourceDirName:"common-workflows/manage-time-zone-objects",slug:"/common-workflows/manage-time-zone-objects/update-a-time-zone-object",permalink:"/rest-api-docs/common-workflows/manage-time-zone-objects/update-a-time-zone-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-time-zone-objects/update-a-time-zone-object.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1663613072,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Workflow Sample - Update a Custom Time Zone Object",sidebar_label:"Update a Custom Time Zone Object",description:"This workflow sample demonstrates how to update an existing custom time zone object through the Modeling service."}},p={},l=[{value:"1. Create a changeset using <code>POST /api/model/changesets</code> with <code>schemaEdit=false</code>",id:"1-create-a-changeset-using-post-apimodelchangesets-with-schemaeditfalse",level:2},{value:"2. Update an existing time zone using <code>PATCH /api/model/timezones</code>",id:"2-update-an-existing-time-zone-using-patch-apimodeltimezones",level:2},{value:"3. Commit the changeset using <code>POST /api/model/changesets/{ChangesetId}/commit</code>",id:"3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit",level:2},{value:"4. Delete the changeset using <code>DELETE /api/model/changesets/{ChangesetId}</code>",id:"4-delete-the-changeset-using-delete-apimodelchangesetschangesetid",level:2}],d={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,s.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-4845cf11-1e66-4530-b33f-730143143498?ctx=documentation"},"REST API Playground"),"."),(0,s.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,s.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,s.kt)("p",null,"This workflow sample demonstrates how to update an existing custom time zone object through the Modeling service."),(0,s.kt)("p",null,"You want to update a custom time zone named ",(0,s.kt)("inlineCode",{parentName:"p"},'"Asian Shanghai Time"'),". The time zone object ID is ",(0,s.kt)("inlineCode",{parentName:"p"},"E99B4F7692564D36A5B324A7956CB84F"),"."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,s.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},(0,s.kt)("inlineCode",{parentName:"a"},"POST /api/auth/login")),"."),(0,s.kt)("p",{parentName:"admonition"},"Since time zone objects are configuration objects, you must set the project ID as an empty string.")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"schemaEdit")," must be ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if you are committing a changeset that contains schema manipulations."),(0,s.kt)("h2",{id:"1-create-a-changeset-using-post-apimodelchangesets-with-schemaeditfalse"},"1. Create a changeset using ",(0,s.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},(0,s.kt)("inlineCode",{parentName:"a"},"POST /api/model/changesets"))," with ",(0,s.kt)("inlineCode",{parentName:"h2"},"schemaEdit=false")),(0,s.kt)("p",null,"Sample Request Header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": ""\n')),(0,s.kt)("p",null,"Sample Request Body: Empty"),(0,s.kt)("p",null,"Sample Curl:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=false" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID:"\n')),(0,s.kt)("p",null,"Sample Response Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:36:31.187294Z",\n  "dateModified": "2020-11-17T17:36:31.187308Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "38A062302D4411D28E71006008960167",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,s.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,s.kt)("h2",{id:"2-update-an-existing-time-zone-using-patch-apimodeltimezones"},"2. Update an existing time zone using ",(0,s.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones"},(0,s.kt)("inlineCode",{parentName:"a"},"PATCH /api/model/timezones"))),(0,s.kt)("p",null,"System time zones cannot be updated through API."),(0,s.kt)("p",null,"Sample Request Header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,s.kt)("p",null,"Sample Request Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "newTimezoneName",\n    "description": "This timezone has been updated."\n  },\n  "baseTimezone": { "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C" }\n}\n')),(0,s.kt)("p",null,"Sample Curl:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/E99B4F7692564D36A5B324A7956CB84F" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"information\\":{\\"name\\":\\"newtimezoneName\\", \\"description\\": \\"This timezone has been updated.\\"},\\"baseTimezone\\":{\\"objectId\\":\\"0B4AC9E54E016BF00EAA99929C2B4E5C\\"}}"\n')),(0,s.kt)("p",null,"Sample Response Body:"),(0,s.kt)("p",null,"You can view the new time zone's definition in the body of the response."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-12-08T08:54:07.114Z",\n    "dateModified": "2021-12-08T08:54:07.114Z",\n    "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n    "primaryLocale": "en-US",\n    "objectId": "E99B4F7692564D36A5B324A7956CB84F",\n    "subType": "timezone_custom",\n    "name": "newtimezoneName",\n    "description": "This timezone has been updated."\n  },\n  "baseTimezone": {\n    "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",\n    "subType": "timezone_system",\n    "name": "Asia Shanghai time"\n  },\n  "currentOffset": 28800\n}\n')),(0,s.kt)("p",null,"Response Code: 200 (Time zone is successfully updated in the changeset.)"),(0,s.kt)("h2",{id:"3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit"},"3. Commit the changeset using ",(0,s.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},(0,s.kt)("inlineCode",{parentName:"a"},"POST /api/model/changesets/{ChangesetId}/commit"))),(0,s.kt)("p",null,"Sample Request Header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,s.kt)("p",null,"Sample Curl:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,s.kt)("p",null,"Sample Response Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:42:13.312629Z",\n  "dateModified": "2020-11-17T17:44:30.814816Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "userName": "MSTR User",\n  "mstrProjectId": "38A062302D4411D28E71006008960167",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,s.kt)("p",null,"Sample Response Code: 200 (The changeset is committed successfully.)"),(0,s.kt)("h2",{id:"4-delete-the-changeset-using-delete-apimodelchangesetschangesetid"},"4. Delete the changeset using ",(0,s.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},(0,s.kt)("inlineCode",{parentName:"a"},"DELETE /api/model/changesets/{ChangesetId}"))),(0,s.kt)("p",null,"Sample Request Header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,s.kt)("p",null,"Sample Request Body: Empty"),(0,s.kt)("p",null,"Sample Curl:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,s.kt)("p",null,"Sample Response Body: Empty"),(0,s.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"))}u.isMDXComponent=!0}}]);