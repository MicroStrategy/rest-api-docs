"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7454],{78887:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>p,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(74848),r=t(28453);const o={title:"Answer prompts",description:"The workflow to answer prompts."},p=void 0,i={id:"common-workflows/analytics/use-prompts-objects/answer-prompts",title:"Answer prompts",description:"The workflow to answer prompts.",source:"@site/docs/common-workflows/analytics/use-prompts-objects/answer-prompts.md",sourceDirName:"common-workflows/analytics/use-prompts-objects",slug:"/common-workflows/analytics/use-prompts-objects/answer-prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/answer-prompts",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/answer-prompts.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Answer prompts",description:"The workflow to answer prompts."},sidebar:"tutorialSidebar",previous:{title:"Level prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/level-prompts"},next:{title:"Prompt execution errors",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-execution-errors"}},a={},d=[{value:"Workflow sample: Answer prompts",id:"workflow-sample-answer-prompts",level:2},{value:"Create an instance of a dashboard, document or report",id:"create-an-instance-of-a-dashboard-document-or-report",level:2},{value:"Provide prompt answers",id:"provide-prompt-answers",level:2},{value:"Export results to PDF",id:"export-results-to-pdf",level:2},{value:"Answer prompts with specific answers",id:"answer-prompts-with-specific-answers",level:2},{value:"Use default prompt answers",id:"use-default-prompt-answers",level:2},{value:"Close prompts without answers",id:"close-prompts-without-answers",level:2},{value:"Re-prompt",id:"re-prompt",level:2},{value:"Nested prompts",id:"nested-prompts",level:2},{value:"Documents and dashboards",id:"documents-and-dashboards",level:3},{value:"Reports",id:"reports",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Available:o}=s;return o||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{since:"2021 Update 1"}),"\n",(0,n.jsx)(s.h2,{id:"workflow-sample-answer-prompts",children:"Workflow sample: Answer prompts"}),"\n",(0,n.jsx)(s.p,{children:"Here is a workflow sample for using REST APIs to answer prompts:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"#create-an-instance-of-a-dashboard-document-or-report",children:"Create an instance of a dossier, document or report"})}),"\n",(0,n.jsx)(s.p,{children:"Only the prompt ID, instance ID and prompt status are returned when an instance of a prompted dashboard or document is created; data is not returned. This is different from prompted reports. When an instance of a prompted report is created, the prompt ID, instance ID, prompt status, and data are all returned."}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"Data is returned for unprompted dashboards, documents, and reports."})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"#provide-prompt-answers",children:"Provide prompt answers"})}),"\n",(0,n.jsxs)(s.p,{children:["You can provide prompt answers for three separate prompt types: ",(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts",children:"attribute element prompts"}),", ",(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts",children:"object prompts"}),", ",(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/value-prompts",children:"value prompts"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"To view the results of applying prompt answers, you need to use another REST API. While this step is not a requirement for answering prompts, it is necessary for seeing the results if you want to confirm that the prompt answers you provided were applied."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"#export-results-to-pdf",children:"Export results to PDF"})}),"\n",(0,n.jsx)(s.p,{children:"You can confirm that the prompt answers were successfully applied by exporting the results of the report or document/dashboard execution to PDF."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Detailed explanations for each step are provided below:"}),"\n",(0,n.jsx)(s.h2,{id:"create-an-instance-of-a-dashboard-document-or-report",children:"Create an instance of a dashboard, document or report"}),"\n",(0,n.jsx)(s.p,{children:"Endpoints:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["POST ",(0,n.jsx)(s.code,{children:"/api/documents/{id}/instances"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["POST ",(0,n.jsx)(s.code,{children:"/api/reports/{reportId}/instances"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["You can also use POST ",(0,n.jsx)(s.code,{children:"/api/dossiers/{dossierId}/instances"})," to create an instance of a dossier."]})}),"\n",(0,n.jsx)(s.p,{children:'You can execute a specific report, document, or dashboard and create an instance of that report, document, or dashboard. The information in the responses varies, but each response includes two important pieces of information\u2014the instance ID and status. The instance ID is \u201cmid\u201d for a dashboard or document and "instanceId" for a report. Status "1" indicates that the instance has been created, and status "2" indicates that the dashboard, document or report is waiting for a prompt answer. If the status is "1", the response also returns the ID of the object.'}),"\n",(0,n.jsx)(s.p,{children:"The response body when you create an instance of a prompted document or dashboard would look like the following sample code:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "id": "0034EC8011E70F1600000080EFD5150B",\n  "status": 2,\n  "mid": "F160BAF211E8C0372DBC0080EFE59EDF"\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"The response body when you create an instance of a prompted report would look like the following sample code:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "id": "0034EC8011E70F1600000080EFD5150B",\n  "instanceId": "F160BAF211E8C0372DBC0080EFE59EDF",\n  "status": 2\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"provide-prompt-answers",children:"Provide prompt answers"}),"\n",(0,n.jsx)(s.p,{children:"Endpoints:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PUT ",(0,n.jsx)(s.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PUT ",(0,n.jsx)(s.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You can provide prompt answers for three separate prompt types: attribute element prompts, object prompts, and value prompts. Sample JSON for each prompt answer is provided below. The request returns an HTTP status code of 204."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "prompts": [\n    {\n      "key": "W34D600FCA9CE481F89859762AED04C69",\n      "type": "OBJECTS", // object prompts\n      "answers": [\n        {\n          "id": "8D679D4111D3E4981000E787EC6DE8A4",\n          "type": 12\n        },\n        {\n          "id": "8D679D4111D3E4981000E787EC6DE8A4",\n          "type": 12\n        }\n      ]\n    },\n    {\n      "key": "W34D600FCA9CE481F89859762AED04C69",\n      "type": "ELEMENTS", // attribute element prompts\n      "answers": [\n        {\n          "id": "h4;8D679D4111D3E4981000E787EC6DE8A4;40K-50K"\n        }\n      ]\n    },\n    {\n      "key": "W34D600FCA9CE481F89859762AED04C68",\n      "type": "VALUE", // value prompts\n      "answers": ["abc", "dfg"]\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"export-results-to-pdf",children:"Export results to PDF"}),"\n",(0,n.jsxs)(s.p,{children:["Endpoint: ",(0,n.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/exportDashboardToPdf",children:"POST /api/documents/{id}/instances/{instanceId}/pdf"})]}),"\n",(0,n.jsx)(s.p,{children:"This endpoint allows the caller to export the document to a PDF file (in the form of binary data with Base64 encoding) using the instance ID and object ID of the document. Exporting to PDF is not a required part of the prompt workflow, but it is useful for confirming that the prompts have been applied correctly."}),"\n",(0,n.jsx)(s.h2,{id:"answer-prompts-with-specific-answers",children:"Answer prompts with specific answers"}),"\n",(0,n.jsxs)(s.p,{children:["You can use REST APIs to provide prompt answers for three types of prompts applied to dashboards, documents, and reports. For these three prompt types, you can provide specific answers to prompts, choose to ",(0,n.jsx)(s.a,{href:"#use-default-prompt-answers",children:"use default prompt answers"}),", or ",(0,n.jsx)(s.a,{href:"#close-prompts-without-answers",children:"close optional prompts without providing answers"}),". You can also reset the status so that the dashboard, document, or report will be re-prompted the next time it is run."]}),"\n",(0,n.jsxs)(s.p,{children:["The prompts supported in the MicroStrategy platform are defined in ",(0,n.jsx)(s.a,{href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPromptType.html",children:"EnumDSSXMLPromptType."})]}),"\n",(0,n.jsx)(s.p,{children:"You use the following REST API endpoints to answer a prompt applied to a dashboard, document, or report:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PUT ",(0,n.jsx)(s.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PUT ",(0,n.jsx)(s.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You can use REST APIs to answer the following three prompt types:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts",children:"Attribute element prompts"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts",children:"Object prompts"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/value-prompts",children:"Value prompts"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You can identify prompts with the prompt key, prompt ID, or prompt name. If more than one identifier is provided, the logic for identifying the prompt will follow this order: key, ID, name. The prompt key is used first if is available because the key is the only unique value. Since the same prompt can be applied more than once to a dataset, the ID and the name might not be unique. Despite this possibility, the name is often the most convenient way to identify a prompt because of its descriptive nature."}),"\n",(0,n.jsx)(s.h2,{id:"use-default-prompt-answers",children:"Use default prompt answers"}),"\n",(0,n.jsx)(s.p,{children:"You use the following REST API endpoints to answer a prompt with the default prompt answers:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PUT ",(0,n.jsx)(s.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PUT ",(0,n.jsx)(s.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You can answer the following prompts with default answers:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts",children:"Attribute element prompts"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts",children:"Object prompts"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/value-prompts",children:"Value prompts"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In the body parameter of the request, you use the ",(0,n.jsx)(s.code,{children:"id"}),", ",(0,n.jsx)(s.code,{children:"key"}),", or ",(0,n.jsx)(s.code,{children:"name"})," parameter to identify the prompt and the type parameter to specify the prompt type. You specify that the default prompt answers should be used by setting the ",(0,n.jsx)(s.code,{children:"useDefault"}),' parameter to "true". The default answers that were stored with the prompt are applied at runtime.']}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"prompt answer model",src:t(85997).A+"",width:"336",height:"474"})}),"\n",(0,n.jsx)(s.p,{children:"Sample code for answering several types of prompts with the default answer, with the prompt identified by ID."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "prompts": [\n    {\n      "id": "055A4B7241396EB7FC27E3A5D2A9FB2F", // element prompt\n      "type": "ELEMENTS",\n      "useDefault": true\n    },\n    {\n      "id": "0B524DB54440D0280747C1A3058ED474", // object prompt\n      "type": "OBJECTS",\n      "useDefault": true\n    },\n    {\n      "id": "0CE45CA4483E29FFB0AF969D68588E95", // value prompt\n      "type": "VALUE",\n      "useDefault": true\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"close-prompts-without-answers",children:"Close prompts without answers"}),"\n",(0,n.jsx)(s.p,{children:"You close a prompt by using a REST API to answer the prompt, but not providing an answer. You can call one of the following REST API endpoints to close a prompt:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PUT ",(0,n.jsx)(s.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PUT ",(0,n.jsx)(s.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The prompts you close must all be optional; if you try to close a required prompt, you will get an error."}),"\n",(0,n.jsx)(s.p,{children:"You can close the following prompts by not providing answers:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts",children:"Attribute element prompts"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts",children:"Object prompts"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/value-prompts",children:"Value prompts"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In the body parameter of the request, you use the ",(0,n.jsx)(s.code,{children:"id"}),", ",(0,n.jsx)(s.code,{children:"key"}),", or ",(0,n.jsx)(s.code,{children:"name"})," parameter to identify the prompt and the type parameter to specify the prompt type. For the parameters where you would have provided a prompt answer, you leave the value blank."]}),"\n",(0,n.jsx)(s.h2,{id:"re-prompt",children:"Re-prompt"}),"\n",(0,n.jsx)(s.p,{children:"You can use a REST API to cause a prompted document or dashboard to be re-prompted. You cannot currently use a REST API to specifically re-prompt a report."}),"\n",(0,n.jsx)(s.h2,{id:"nested-prompts",children:"Nested prompts"}),"\n",(0,n.jsxs)(s.p,{children:["It is possible that the report, dashboard, or document contains nested prompts which need to be resolved prior to fetching data. These prompts can be nested ",(0,n.jsx)(s.em,{children:"n"})," levels deep, so this workflow may need to be iterated over."]}),"\n",(0,n.jsx)(s.p,{children:"Let's see an example report with the following template:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"report_template_500x325",src:t(85492).A+"",width:"500",height:"325"})}),"\n",(0,n.jsx)(s.p,{children:"In the report filter there is an attribute element prompt on Quarter that is configured to use a filter on Year to reduce the number of elements."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"prompt_gen_wizard_500x363",src:t(18120).A+"",width:"500",height:"363"})}),"\n",(0,n.jsx)(s.p,{children:"When this report is executed, the user is prompted to select the year and then quarter, which is filtered based on the year selection."}),"\n",(0,n.jsx)(s.p,{children:"To achieve this workflow via REST API, you simply need to loop through the following workflow:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Execute the report using POST ",(0,n.jsx)(s.code,{children:"/api/v2/reports/{id}/instances"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"There is a response with an HTTP status of 200. Inside the body, status=2, which means there are prompts to be answered."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"execute_report_response_600x160",src:t(74427).A+"",width:"600",height:"160"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Fetch the current open prompts using GET ",(0,n.jsx)(s.code,{children:"/api/reports/{id}/instances/{instanceId}/prompts"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"There is a response with an HTTP status of 200. One prompt is in the body."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"fetch_current_open_prompts_response_600x364",src:t(76668).A+"",width:"600",height:"364"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Fetch potential elements for prompt answering using GET ",(0,n.jsx)(s.code,{children:"/api/reports/{id}/instances/{instanceId}/prompts/{id}/elements"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"There is a response with an HTTP status of 200 and a list of elements."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"fetch_potential_elements_response_600x358",src:t(2057).A+"",width:"600",height:"358"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Answer the prompt using PUT ",(0,n.jsx)(s.code,{children:"/api/reports/{id}/instances/{instancedId}/prompts/answers"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Request Body:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"answer_prompt_request_body_500x334",src:t(17421).A+"",width:"500",height:"334"})}),"\n",(0,n.jsx)(s.p,{children:"HTTP Response Status: 204"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Check the status of report/fetch data using GET ",(0,n.jsx)(s.code,{children:"/api/v2/reports/{id}/instances/{instanceId}"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"There is a response of 200. The status within the body is still 2, which means there are still unanswered prompts."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"check_report_status_response_600x168",src:t(12023).A+"",width:"600",height:"168"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Fetch the current open prompts using GET ",(0,n.jsx)(s.code,{children:"/api/reports/{id}/instances/{instanceId}/prompts"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["There is a response of 200 with two prompts. One prompt is closed=true, since it was already answered. If you call the ",(0,n.jsx)(s.code,{children:"GET /api/prompts"})," API with a closed=true query parameter, the answered prompt is filtered out."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"fetch_open_prompts_response_600x447",src:t(9024).A+"",width:"600",height:"447"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Fetch potential elements for prompt answering using GET ",(0,n.jsx)(s.code,{children:"/api/reports/{id}/instances/{instanceId}/prompts/{id}/elements"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"There is a response of 200 with a list of elements for Quarter, which is filtered based on the prompt answer used for Year."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"fetch_elements_prompt_answer_response_600x361",src:t(9752).A+"",width:"600",height:"361"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Answer the prompt using PUT ",(0,n.jsx)(s.code,{children:"/api/reports/{id}/instances/{instancedId}/prompts/answers"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Request Body:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"answer_prompt_request_body2_600x351",src:t(19811).A+"",width:"600",height:"351"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Check the status of report/fetch data using GET ",(0,n.jsx)(s.code,{children:"/api/v2/reports/{id}/instances/{instanceId}"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"There is a response of 200. The response body now contains the data, since all prompts have been answered."}),"\n",(0,n.jsx)(s.h3,{id:"documents-and-dashboards",children:"Documents and dashboards"}),"\n",(0,n.jsx)(s.p,{children:"To re-prompt a document or dashboard, use the following endpoint:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["POST ",(0,n.jsx)(s.code,{children:"/api/documents/{id}/instances/{instanceId}/rePrompt"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:'This sets the status back to "1", indicating that the document or dashboard is waiting for prompt answers.'}),"\n",(0,n.jsx)(s.p,{children:"When you use this endpoint, a new instance ID is generated, different from the one passed in the request. Having separate instance IDs for before and after the re-prompting request is designed to allow users to go back if they decide they want to revert to the previous instance."}),"\n",(0,n.jsx)(s.h3,{id:"reports",children:"Reports"}),"\n",(0,n.jsx)(s.p,{children:"To re-prompt a report, simply execute the prompted report again, using the same endpoint you used originally."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["PUT ",(0,n.jsx)(s.code,{children:"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"})]}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19811:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/answer_prompt_request_body2_600x351-38ff12ba5ab30c7d3d187313c278d8ff.png"},17421:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/answer_prompt_request_body_500x334-43c5e5a52288fcb9f583a9e31dc01962.png"},12023:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/check_report_status_response_600x168-22958a1bbbe9db1da4577d5e504865a4.png"},74427:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/execute_report_response_600x160-5f1960b5c6771a4d4b72dbdd37b6f03e.png"},76668:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/fetch_current_open_prompts_response_600x364-d8e095188618a252a44d9381da2e0d71.png"},9752:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/fetch_elements_prompt_answer_response_600x361-efcd5e3400e435e4e16160aa2dff89ee.png"},9024:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/fetch_open_prompts_response_600x447-8fffb6ef14a3e5e424ea9b183dbb47c4.png"},2057:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/fetch_potential_elements_response_600x358-f6b87204b35dee79250efb30716e67f7.png"},18120:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/prompt_gen_wizard_500x363-e1127bf348054f72e3b2938a1744aed6.png"},85492:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/report_template_500x325-b881458e5cc224cae32b295365556ceb.png"},85997:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/swagger_promptAnswerModel-c7ad8ba8d412aab7837a477e460d8a31.png"},28453:(e,s,t)=>{t.d(s,{R:()=>p,x:()=>i});var n=t(96540);const r={},o=n.createContext(r);function p(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:p(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);