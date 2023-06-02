"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6847],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),m=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=m(t.components);return n.createElement(i.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=m(a),u=r,h=d["".concat(i,".").concat(u)]||d[u]||l[u]||s;return a?n.createElement(h,o(o({ref:e},c),{},{components:a})):n.createElement(h,o({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,o=new Array(s);o[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43870:function(t,e,a){a.r(e),a.d(e,{assets:function(){return l},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n,r=a(83117),s=a(80102),o=(a(67294),a(3905)),p=["components"],i={title:"Execute a datamart",description:"This workflow sample demonstrates how to execute a datamart using REST APIs."},m=void 0,c={unversionedId:"common-workflows/modeling/manage-datamart-objects/execute-a-datamart",id:"common-workflows/modeling/manage-datamart-objects/execute-a-datamart",title:"Execute a datamart",description:"This workflow sample demonstrates how to execute a datamart using REST APIs.",source:"@site/docs/common-workflows/modeling/manage-datamart-objects/execute-a-datamart.md",sourceDirName:"common-workflows/modeling/manage-datamart-objects",slug:"/common-workflows/modeling/manage-datamart-objects/execute-a-datamart",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/execute-a-datamart",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-datamart-objects/execute-a-datamart.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Execute a datamart",description:"This workflow sample demonstrates how to execute a datamart using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Retrieve applicable properties of a datamart",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart"},next:{title:"Manage derived element objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-derived-element-objects/"}},l={},d=[{value:"Execute a datamart and insert the data to table",id:"execute-a-datamart-and-insert-the-data-to-table",level:2},{value:"Step 1: Create a datamart instance based on an existing datamart",id:"step-1-create-a-datamart-instance-based-on-an-existing-datamart",level:3},{value:"Step 2: Execute the datamart",id:"step-2-execute-the-datamart",level:3},{value:"Step 3: Answer the prompts (skip this step if the datamart has no prompts)",id:"step-3-answer-the-prompts-skip-this-step-if-the-datamart-has-no-prompts",level:3},{value:"Step 4: Change the prompt option and save(skip this step if keeping the default option)",id:"step-4-change-the-prompt-option-and-saveskip-this-step-if-keeping-the-default-option",level:3},{value:"Step 5: Delete the datamart instance",id:"step-5-delete-the-datamart-instance",level:3}],u=(n="Available",function(t){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}),h={toc:d};function g(t){var e=t.components,a=(0,s.Z)(t,p);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 9",mdxType:"Available"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to execute a datamart using REST APIs."),(0,o.kt)("p",null,"The datamart object ID is 85000B907B4EAD3B0D9522A9CFD10DBC. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."),(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h2",{id:"execute-a-datamart-and-insert-the-data-to-table"},"Execute a datamart and insert the data to table"),(0,o.kt)("h3",{id:"step-1-create-a-datamart-instance-based-on-an-existing-datamart"},"Step 1: Create a datamart instance based on an existing datamart"),(0,o.kt)("p",null,"User can create an instance using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-createDatamartInstance"},"POST /api/model/datamarts/{datamartId}/instances"),"."),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Request Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances' \\\n  -H 'accept: */*' \\\n  -H 'X-MSTR-AuthToken: csgf8rns3orn8pnd1addkf01bk' \\\n  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n")),(0,o.kt)("p",null,"Sample Response Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"cache-control: no-cache,no-store,max-age=0,must-revalidate,proxy-revalidate,no-transform\ncontent-encoding: gzip\ncontent-length: 22\ncontent-security-policy: frame-ancestors 'self'\ncontent-type: application/json\ndate: Thu,09 Feb 2023 06:16:42 GMT\nexpires: 0\npragma: no-cache\nserver: MicroStrategy\nstrict-transport-security: max-age=31536000;includeSubDomains\nx-content-type-options: nosniff\nx-mstr-ms-instance: 35DCAB983549ECD49FC20F9AB0CC4C28\nx-xss-protection: 1; mode=block\n")),(0,o.kt)("p",null,"Sample Response Body: Empty"),(0,o.kt)("p",null,"Sample Response Code: 201 (The in-memory instance is created successfully.)"),(0,o.kt)("h3",{id:"step-2-execute-the-datamart"},"Step 2: Execute the datamart"),(0,o.kt)("p",null,"User can execute the datamart using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/execute"},"POST /api/datamarts/{datamartId}/instances/{instanceID}/execution/jobs"),"."),(0,o.kt)("p",null,"Execute a datamart may take a long time."),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Request Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' \\\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances/1C818981C44AC7447B9853B1B7F27200/execution/jobs' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \\\n-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "85000B907B4EAD3B0D9522A9CFD10DBC",\n  "instanceId": "1C818981C44AC7447B9853B1B7F27200",\n  "status": 5,\n  "jobId": "10:RU5WLTMwODE3OUxBSU8yVVNFMQ=="\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (OK)."),(0,o.kt)("h3",{id:"step-3-answer-the-prompts-skip-this-step-if-the-datamart-has-no-prompts"},"Step 3: Answer the prompts (skip this step if the datamart has no prompts)"),(0,o.kt)("p",null,"User needs to check whether the datamart contains prompt using: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/getExecution"},"GET /api/datamarts/{datamartId}/instances/{instanceId}/execution")),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Request Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances/1C818981C44AC7447B9853B1B7F27200/execution' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \\\n-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "85000B907B4EAD3B0D9522A9CFD10DBC",\n  "status": 2,\n  "instanceId": "1C818981C44AC7447B9853B1B7F27200"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (OK)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If status is not 2, the datamart has no prompts."),(0,o.kt)("li",{parentName:"ul"},"If status is 2, the datamart has prompts.")),(0,o.kt)("p",null,"You can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/rest-api-docs/common-workflows/analytics/use-prompts-objects/"},"Use prompt objects")," to get the information about the contained prompts."),(0,o.kt)("p",null,"Then if the datamart contains prompts, user can answer prompt using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/answerPrompts_2"},"PUT /api/reports/{reportId}/instances/{reportInstance}/prompts/answers"),"."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "name": "Elements of Country",\n      "type": "ELEMENTS",\n      "required": true,\n      "closed": false,\n      "source": {\n        "id": "8D679D3811D3E4981000E787EC6DE8A4",\n        "type": 12\n      },\n      "defaultAnswer": [],\n      "answers": [\n        {\n          "name": "USA"\n        },\n        {\n          "name": "England"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Request Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/reports/85000B907B4EAD3B0D9522A9CFD10DBC/instances/1C818981C44AC7447B9853B1B7F27200/prompts/answers' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \\\n-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n")),(0,o.kt)("p",null,"Sample Response Body: Empty"),(0,o.kt)("p",null,"Sample Response Code: 204 (Prompt has been answered.)"),(0,o.kt)("h3",{id:"step-4-change-the-prompt-option-and-saveskip-this-step-if-keeping-the-default-option"},"Step 4: Change the prompt option and save(skip this step if keeping the default option)"),(0,o.kt)("p",null,"You can change the prompt option using: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-saveDatamartInstance"},"POST /api/model/datamarts/{datamartId}/instances/save"),"."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "promptOptions": {\n    "saveAsWithAnswers": true,\n    "saveAsFilterWithPrompts": true,\n    "saveAsTemplateWithPrompts": true\n  }\n}\n')),(0,o.kt)("p",null,"Sample Request Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' \\\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances/save' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \\\n-H 'X-MSTR-MS-Instance: 1C818981C44AC7447B9853B1B7F27200' \\\n-H 'Content-Type: application/json' \\\n-d '{\n\"promptOptions\": {\n\"saveAsWithAnswers\": true,\n\"saveAsFilterWithPrompts\": true,\n\"saveAsTemplateWithPrompts\": true\n}\n}'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "objectId": "85000B907B4EAD3B0D9522A9CFD10DBC"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (The datamart definition is saved successfully.)"),(0,o.kt)("p",null,"If you want to change the datamart name or destination folder at the same time, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-saveAsDatamartInstance"},"POST /api/model/datamarts/{datamartId}/instances/saveAs"),"."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "City",\n  "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n  "promptOptions": {\n    "saveAsWithAnswers": true,\n    "saveAsFilterWithPrompts": true,\n    "saveAsTemplateWithPrompts": true\n  }\n}\n')),(0,o.kt)("p",null,"Sample Request Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'POST\' \\\n\'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances/saveAs\' \\\n-H \'accept: application/json\' \\\n-H \'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf\' \\\n-H \'X-MSTR-MS-Instance: 1C818981C44AC7447B9853B1B7F27200\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n"name": "City",\n"destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n"promptOptions": {\n"saveAsWithAnswers": true,\n"saveAsFilterWithPrompts": true,\n"saveAsTemplateWithPrompts": true\n}\n}\'\n')),(0,o.kt)("p",null,"Response is same with that of ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-saveDatamartInstance"},"POST /api/model/datamarts/{datamartId}/instances/save"),"."),(0,o.kt)("h3",{id:"step-5-delete-the-datamart-instance"},"Step 5: Delete the datamart instance"),(0,o.kt)("p",null,"User can delete the created datamart instance using: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-deleteDatamartInstance"},"DELETE /api/model/datamarts/{datamartId}/instances"),"."),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Request Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'DELETE' \\\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \\\n-H 'X-MSTR-MS-Instance: 1C818981C44AC7447B9853B1B7F27200' \\\n-H 'Content-Type: application/json'\n")),(0,o.kt)("p",null,"Sample Response Code: 204 (The in-memory instance is deleted successfully.)"))}g.isMDXComponent=!0}}]);