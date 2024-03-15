"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6412],{1897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var s=t(74848),r=t(28453);const o={title:"Object prompts",description:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made."},i=void 0,d={id:"common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts",title:"Object prompts",description:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made.",source:"@site/docs/common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts.md",sourceDirName:"common-workflows/analytics/use-prompts-objects/prompt-types",slug:"/common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Object prompts",description:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made."},sidebar:"tutorialSidebar",previous:{title:"Attribute qualification prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-qualification-prompts"},next:{title:"Value prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/value-prompts"}},c={},p=[{value:"Workflow for object prompts",id:"workflow-for-object-prompts",level:2},{value:"Obtain elements for answering object prompts",id:"obtain-elements-for-answering-object-prompts",level:2},{value:"Answer an object prompt",id:"answer-an-object-prompt",level:2},{value:"Provide specific prompt answers",id:"provide-specific-prompt-answers",level:3},{value:"Get information about an object prompt",id:"get-information-about-an-object-prompt",level:3},{value:"Object prompt definition",id:"object-prompt-definition",level:3},{value:"Possible prompt execution errors for object prompts",id:"possible-prompt-execution-errors-for-object-prompts",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Available:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{since:"2021 Update 1"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can try out this workflow at ",(0,s.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-763d27e2-3d03-47ab-9e7b-6b3b4db736b4?ctx=documentation",children:"REST API Playground"}),"."]}),(0,s.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,s.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,s.jsx)(n.p,{children:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#workflow-for-object-prompts",children:"Workflow for object prompts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#obtain-elements-for-answering-object-prompts",children:"Obtain elements for answering object prompts"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#answer-an-object-prompt",children:"Answer an object prompt"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#provide-specific-prompt-answers",children:"Provide specific prompt answers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#get-information-about-an-object-prompt",children:"Get information about an object prompt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#object-prompt-definition",children:"Object prompt definition"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#possible-prompt-execution-errors-for-object-prompts",children:"Possible prompt execution errors for object prompts"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"workflow-for-object-prompts",children:"Workflow for object prompts"}),"\n",(0,s.jsx)(n.p,{children:"Here is a workflow sample for using REST APIs to execute object prompts:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The user authenticates into the environment using the following endpoint and standard authentication:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["POST ",(0,s.jsx)(n.code,{children:"/api/auth/login"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the following endpoints to create a report or dashboard/document instance:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["POST ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/instances"})]}),"\n",(0,s.jsxs)(n.li,{children:["POST ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/instances"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the following endpoints to get the collection of prompts and their respective definitions from a report, document, or dashboard:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/prompts"})]}),"\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts"})]}),"\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/prompts"})]}),"\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the following endpoints to get an available list of objects for answering the prompts for a report, document, or dashboard instance:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/{promptIdentifier}/objects"})]}),"\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the following endpoints to answer a prompt applied to a dashboard, document, or report instance:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["PUT ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"})]}),"\n",(0,s.jsxs)(n.li,{children:["POST ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the following endpoints to answer specified prompts on the document, dashboard, or report instance:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["PUT ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"})]}),"\n",(0,s.jsxs)(n.li,{children:["PUT ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Get the result of a report instance. Use the following API endpoints to get report data after applying a prompt on top of the report instance:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/instances/{instancesId}"})]}),"\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/dossiers/{dossierId}/instances/{dossierInstanceId}"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"obtain-elements-for-answering-object-prompts",children:"Obtain elements for answering object prompts"}),"\n",(0,s.jsx)(n.p,{children:"To answer an object prompt, the user needs to know which object can be supplied as the answer. The following REST APIs can be used to obtain this list of objects."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/{promptIdentifier}/objects"})]}),"\n",(0,s.jsxs)(n.li,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The response changes based on the request parameters provided by the caller. All available parameters are shown below."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Location"}),(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Data Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"X-MSTR-AuthToken"}),(0,s.jsx)(n.td,{children:"The authorization token"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"X-MSTR-ProjectID"}),(0,s.jsx)(n.td,{children:"The ID of the project"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"reportId"}),(0,s.jsx)(n.td,{children:"The ID of the report"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"instanceId"}),(0,s.jsx)(n.td,{children:"The instance ID of the report"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"promptIdentifier"}),(0,s.jsxs)(n.td,{children:["The key or ID of the prompt. Either one can be used to identify the prompt. Only the key is unique, since some prompts can be present multiple times in the dataset. Both of these fields can be obtained from the ",(0,s.jsx)(n.code,{children:"GET /api/prompts"})," API call."]}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query"}),(0,s.jsx)(n.td,{children:"fields"}),(0,s.jsx)(n.td,{children:"Comma-separated top-level field white list. This allows the client to selectively retrieve part of the response model. If specified, extra filtering is applied and the top-level object (If the root model is an array, each array element), only the listed fields are kept in the response. For example, id,elements means to keep only the id field and the whole elements array field, omitting all other fields of the top-level response model."}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query"}),(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"The starting point within the collection of returned results. Used to control paging behavior. The default is zero."}),(0,s.jsx)(n.td,{children:"integer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query"}),(0,s.jsx)(n.td,{children:"limit"}),(0,s.jsx)(n.td,{children:"The maximum number of items returned for a single request. The default value is 100. The maximum value is 200."}),(0,s.jsx)(n.td,{children:"integer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"query"}),(0,s.jsx)(n.td,{children:"searchPattern"}),(0,s.jsx)(n.td,{children:"The search pattern"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"answer-an-object-prompt",children:"Answer an object prompt"}),"\n",(0,s.jsx)(n.p,{children:"You use the following REST API endpoints to answer an object prompt applied to a dashboard, document, or report:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["PUT ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/answers"})]}),"\n",(0,s.jsxs)(n.li,{children:["PUT ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"provide-specific-prompt-answers",children:"Provide specific prompt answers"}),"\n",(0,s.jsx)(n.p,{children:'You provide answers to an object prompt in the body parameter of the request. You identify the prompt by providing the prompt ID or key; you specify the prompt type as "OBJECTS". You specify the object used to answer the prompt by providing the object GUID and the object type; the value of the object type depends on the kind of object used by the prompt.'}),"\n",(0,s.jsx)(n.p,{children:"Object prompts cannot be identified by name because names are not unique in the metadata."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"swagger_promptAnswerModel",src:t(85997).A+"",width:"336",height:"474"})}),"\n",(0,s.jsx)(n.p,{children:"Sample code for answering multiple object prompts in a single request is provided below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "prompts": [\n    {\n      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",\n      "type": "OBJECTS",\n      "answers": [\n        {\n          "id": "8D679D5111D3E4981000E787EC6DE8A4",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4A11D3E4981000E787EC6DE8A4",\n          "type": "attribute"\n        }\n      ]\n    },\n    {\n      "key": "07736087478D24656A2A65820F968661@0@10",\n      "type": "OBJECTS",\n      "answers": [\n        {\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "type": "metric"\n        },\n        {\n          "id": "4C051DB611D3E877C000B3B2D86C964F",\n          "type": "metric"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"get-information-about-an-object-prompt",children:"Get information about an object prompt"}),"\n",(0,s.jsx)(n.p,{children:"You use the following REST API endpoints to get information about object prompts applied to dashboard, document, and report objects in the metadata, as well as instances of those objects:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/prompts"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/prompts"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["GET ",(0,s.jsx)(n.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You provide the ID of the document, dashboard, or report in the path of the request, as well as the instance ID if you are getting information about a prompt applied to an instance of a document, dashboard, or report. The response contains the prompt information."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"swagger_promptAnswerModel_response",src:t(20183).A+"",width:"1218",height:"316"})}),"\n",(0,s.jsx)(n.h3,{id:"object-prompt-definition",children:"Object prompt definition"}),"\n",(0,s.jsx)(n.p,{children:"The model for the definition of an object prompt can be represented with the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"id"})," GUID of the prompt."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"name"})," Name of the prompt. This is the most user-friendly value that can be used to identify the prompt."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"key"})," Unique identifier of the prompt. It is important to use this to identify the prompt if the same prompt is used more than once in the report, document or dashboard."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"title"})," Title of the prompt."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"required"})," Specifies whether this prompt is required or optional."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"}),' Prompt type. For object prompts, the value is "OBJECTS".']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"min"})," The minimum number of values that must be supplied to answer the prompt."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"max"})," The maximum number of values that can be supplied to answer the prompt."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"defaultAnswer"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"id"})," Object GUID of the default prompt answer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"name"})," Object name of the default prompt answer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"})," String value for the object type. The value of the object type depends on the kind of object used by the prompt. If the prompt consists of metric choices, the object type is ",(0,s.jsx)(n.strong,{children:"metric"}),". If the prompt consists of attribute choices, the object type is ",(0,s.jsx)(n.strong,{children:"attribute"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"answers"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"id"})," Object GUID of the prompt answer to be used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"name"})," Object name of the prompt answer to be used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"})," String value for the object type. The value of the object type depends on the kind of object used by the prompt. If the prompt consists of metric choices, the object type is ",(0,s.jsx)(n.strong,{children:"metric"}),". If the prompt consists of attribute choices, the object type is ",(0,s.jsx)(n.strong,{children:"attribute"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Sample JSON for an object prompt definition is provided below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": "0B524DB54440D0280747C1A3058ED474",\n    "key": "0B524DB54440D0280747C1A3058ED474@0@10",\n    "name": "Metric Prompt",\n    "title": "Objects",\n    "type": "OBJECTS",\n    "required": false,\n    "max": 2,\n    "min": 1,\n    "defaultAnswer": [\n      {\n        "name": "Cost Growth",\n        "id": "D823D64B48A0104B01135587BA87A2BD",\n        "type": "metric"\n      }\n    ],\n    "answers": [\n      {\n        "name": "Cost Growth",\n        "id": "D823D64B48A0104B01135587BA87A2BD",\n        "type": "metric"\n      }\n    ]\n  }\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Additional sample code for an object prompt definition is provided below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n  "name": "Predefined list of objects",\n  "title": "Objects",\n  "type": "OBJECTS",\n  "required": true,\n  "max": 2,\n  "min": 1,\n  "defaultAnswer": [\n    {\n      "name": "Age Range",\n      "id": "5603951E4FE1BC04A44E44B85BBB8ED2",\n      "type": "attribute"\n    },\n    {\n      "name": "Customer",\n      "id": "8D679D3C11D3E4981000E787EC6DE8A4",\n      "type": "attribute"\n    }\n  ],\n  "answers": [\n    {\n      "name": "Age Range",\n      "id": "5603951E4FE1BC04A44E44B85BBB8ED2",\n      "type": "attribute"\n    },\n    {\n      "name": "Customer",\n      "id": "8D679D3C11D3E4981000E787EC6DE8A4",\n      "type": "attribute"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"possible-prompt-execution-errors-for-object-prompts",children:"Possible prompt execution errors for object prompts"}),"\n",(0,s.jsxs)(n.p,{children:["Numerous errors can occur during the prompt execution workflow, when answering prompts. Some of these are ",(0,s.jsx)(n.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-execution-errors",children:"general errors"}),", and others occur only for specific types of prompts. The errors listed below are specific to object prompts."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Too many prompt answers provided"}),"\n",(0,s.jsx)(n.p,{children:"HTTP - 400"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "code": "ERR006",\n  "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 exceeds the maximum allowed(3} answers",\n  "ticketId": "5352773f8b1440a9891911bc2cdd05b4"\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Too few prompt answers provided"}),"\n",(0,s.jsx)(n.p,{children:"HTTP - 400"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "code": "ERR006",\n  "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 does not meet the minimum required(3} answer.",\n  "ticketId": "3439cf127157448abfb621998868ad19"\n}\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},85997:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/swagger_promptAnswerModel-c7ad8ba8d412aab7837a477e460d8a31.png"},20183:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/swagger_promptAnswerModel_response-93a77f14c2ae9b378ff4d4f556f3acb7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);