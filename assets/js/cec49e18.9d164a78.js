"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5490],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=l(r),c=o,h=d["".concat(i,".").concat(c)]||d[c]||u[c]||p;return r?n.createElement(h,s(s({ref:t},m),{},{components:r})):n.createElement(h,s({ref:t},m))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,s=new Array(p);s[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<p;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4739:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(3117),o=r(102),p=(r(7294),r(3905)),s=["components"],a={title:"Answer Prompts",description:"The workflow to answer prompts."},i=void 0,l={unversionedId:"common-workflows/use-prompts-objects/answer-prompts",id:"common-workflows/use-prompts-objects/answer-prompts",title:"Answer Prompts",description:"The workflow to answer prompts.",source:"@site/docs/common-workflows/use-prompts-objects/answer-prompts.md",sourceDirName:"common-workflows/use-prompts-objects",slug:"/common-workflows/use-prompts-objects/answer-prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/answer-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/use-prompts-objects/answer-prompts.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Answer Prompts",description:"The workflow to answer prompts."},sidebar:"tutorialSidebar",previous:{title:"Use Prompts Objects",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/"},next:{title:"Get Prompt Information",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/get-prompt-information/"}},m={},u=[{value:"Workflow Sample: Answer Prompts",id:"workflow-sample-answer-prompts",level:2},{value:"Create an instance of a dossier, document or report",id:"create-an-instance-of-a-dossier-document-or-report",level:2},{value:"Provide prompt answers",id:"provide-prompt-answers",level:2},{value:"Export results to PDF",id:"export-results-to-pdf",level:2},{value:"Answer Prompts with Specific Answers",id:"answer-prompts-with-specific-answers",level:2},{value:"Use Default Prompt Answers",id:"use-default-prompt-answers",level:2},{value:"Close Prompts without Answers",id:"close-prompts-without-answers",level:2},{value:"Reprompt",id:"reprompt",level:2},{value:"Nested Prompts",id:"nested-prompts",level:2},{value:"Documents and Dossiers",id:"documents-and-dossiers",level:3},{value:"Reports",id:"reports",level:3}],d={toc:u};function c(e){var t=e.components,a=(0,o.Z)(e,s);return(0,p.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"workflow-sample-answer-prompts"},"Workflow Sample: Answer Prompts"),(0,p.kt)("p",null,"Here is a workflow sample for using REST APIs to answer prompts:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"#create-an-instance-of-a-dossier-document-or-report"},"Create an instance of a dossier, document or report")),(0,p.kt)("p",{parentName:"li"},"Only the prompt ID, instance ID and prompt status are returned when an instance of a prompted dossier or document is created; data is not returned. This is different from prompted reports. When an instance of a prompted report is created, the prompt ID, instance ID, prompt status, and data are all returned."),(0,p.kt)("admonition",{parentName:"li",type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"Data is returned for unprompted dossiers, documents, and reports."))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"#provide-prompt-answers"},"Provide prompt answers")),(0,p.kt)("p",{parentName:"li"},"You can provide prompt answers for three separate prompt types: ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-element-prompts"},"attribute element prompts"),", ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/object-prompts"},"object prompts"),", and ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/value-prompts"},"value prompts"),"."),(0,p.kt)("p",{parentName:"li"},"To view the results of applying prompt answers, you need to use another REST API. While this step is not a requirement for answering prompts, it is necessary for seeing the results if you want to confirm that the prompt answers you provided were applied.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"#export-results-to-pdf"},"Export results to PDF")),(0,p.kt)("p",{parentName:"li"},"You can confirm that the prompt answers were successfully applied by exporting the results of the report or document/dossier execution to PDF."))),(0,p.kt)("p",null,"Detailed explanations for each step are provided below:"),(0,p.kt)("h2",{id:"create-an-instance-of-a-dossier-document-or-report"},"Create an instance of a dossier, document or report"),(0,p.kt)("p",null,"Endpoints:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"POST ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"POST ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances")))),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"You can also use POST ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/dossiers/{dossierId}/instances")," to create an instance of a dossier.")),(0,p.kt)("p",null,'You can execute a specific report, document, or dossier and create an instance of that report, document, or dossier. The information in the responses varies, but each response includes two important pieces of information\u2014the instance ID and status. The instance ID is \u201cmid\u201d for a dossier or document and "instanceId" for a report. Status "1" indicates that the instance has been created, and status "2" indicates that the dossier, document or report is waiting for a prompt answer. If the status is "1", the response also returns the ID of the object.'),(0,p.kt)("p",null,"The response body when you create an instance of a prompted document or dossier would look like the following sample code:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0034EC8011E70F1600000080EFD5150B",\n\n  "status": 2,\n\n  "mid": "F160BAF211E8C0372DBC0080EFE59EDF"\n}\n')),(0,p.kt)("p",null,"The response body when you create an instance of a prompted report would look like the following sample code:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0034EC8011E70F1600000080EFD5150B",\n\n  "instanceId": "F160BAF211E8C0372DBC0080EFE59EDF",\n\n  "status": 2\n}\n')),(0,p.kt)("h2",{id:"provide-prompt-answers"},"Provide prompt answers"),(0,p.kt)("p",null,"Endpoints:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts/answers"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers")))),(0,p.kt)("p",null,"You can provide prompt answers for three separate prompt types: attribute element prompts, object prompts, and value prompts. Sample JSON for each prompt answer is provided below. The request returns an HTTP status code of 204."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "answers": [\n    {\n      "key": "W34D600FCA9CE481F89859762AED04C69",\n\n      "type": "OBJECTS", // object prompts\n\n      "answers": [\n        {\n          "id": "8D679D4111D3E4981000E787EC6DE8A4",\n\n          "type": 12\n        },\n        {\n          "id": "8D679D4111D3E4981000E787EC6DE8A4",\n\n          "type": 12\n        }\n      ]\n    },\n    {\n      "key": "W34D600FCA9CE481F89859762AED04C69",\n\n      "type": "ELEMENTS", // attribute element prompts\n\n      "answers": [\n        {\n          "id": "h4;8D679D4111D3E4981000E787EC6DE8A4;40K-50K"\n        }\n      ]\n    },\n    {\n      "key": "W34D600FCA9CE481F89859762AED04C68",\n\n      "type": "VALUE", // value prompts\n\n      "answers": ["abc", "dfg"]\n    }\n  ]\n}\n')),(0,p.kt)("h2",{id:"export-results-to-pdf"},"Export results to PDF"),(0,p.kt)("p",null,"Endpoint: POST ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/pdf")),(0,p.kt)("p",null,"This endpoint allows the caller to export the document to a PDF file (in the form of binary data with Base64 encoding) using the instance ID and object ID of the document. Exporting to PDF is not a required part of the prompt workflow, but it is useful for confirming that the prompts have been applied correctly."),(0,p.kt)("h2",{id:"answer-prompts-with-specific-answers"},"Answer Prompts with Specific Answers"),(0,p.kt)("p",null,"You can use REST APIs to provide prompt answers for three types of prompts applied to dossiers, documents, and reports. For these three prompt types, you can provide specific answers to prompts, choose to ",(0,p.kt)("a",{parentName:"p",href:"#use-default-prompt-answers"},"use default prompt answers"),", or ",(0,p.kt)("a",{parentName:"p",href:"#close-prompts-without-answers"},"close optional prompts without providing answers"),". You can also reset the status so that the dossier, document, or report will be re-prompted the next time it is run."),(0,p.kt)("p",null,"The prompts supported in the MicroStrategy platform are defined in ",(0,p.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPromptType.html"},"EnumDSSXMLPromptType.")),(0,p.kt)("p",null,"You use the following REST API endpoints to answer a prompt applied to a dossier, document, or report:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts/answers"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers")))),(0,p.kt)("p",null,"You can use REST APIs to answer the following three prompt types:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-element-prompts"},"Attribute Element Prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/object-prompts"},"Object prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/value-prompts"},"Value prompts"))),(0,p.kt)("p",null,"You can identify prompts with the prompt key, prompt ID, or prompt name. If more than one identifier is provided, the logic for identifying the prompt will follow this order: key, ID, name. The prompt key is used first if is available because the key is the only unique value. Since the same prompt can be applied more than once to a dataset, the ID and the name might not be unique. Despite this possibility, the name is often the most convenient way to identify a prompt because of its descriptive nature."),(0,p.kt)("h2",{id:"use-default-prompt-answers"},"Use Default Prompt Answers"),(0,p.kt)("p",null,"You use the following REST API endpoints to answer a prompt with the default prompt answers:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts/answers"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers")))),(0,p.kt)("p",null,"You can answer the following prompts with default answers:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-element-prompts"},"Attribute Element Prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/object-prompts"},"Object prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/value-prompts"},"Value prompts"))),(0,p.kt)("p",null,"In the body parameter of the request, you use the ",(0,p.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"key"),", or ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," parameter to identify the prompt and the type parameter to specify the prompt type. You specify that the default prompt answers should be used by setting the ",(0,p.kt)("inlineCode",{parentName:"p"},"useDefault"),' parameter to "true". The default answers that were stored with the prompt are applied at runtime.'),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"prompt answer model",src:r(6582).Z,width:"336",height:"474"})),(0,p.kt)("p",null,"Sample code for answering several types of prompts with the default answer, with the prompt identified by ID."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "id": "055A4B7241396EB7FC27E3A5D2A9FB2F", // element prompt\n\n      "useDefault": true\n    },\n    {\n      "id": "0B524DB54440D0280747C1A3058ED474", // object prompt\n\n      "useDefault": true\n    },\n    {\n      "id": "0CE45CA4483E29FFB0AF969D68588E95", // value prompt\n\n      "useDefault": true\n    }\n  ]\n}\n')),(0,p.kt)("h2",{id:"close-prompts-without-answers"},"Close Prompts without Answers"),(0,p.kt)("p",null,"You close a prompt by using a REST API to answer the prompt, but not providing an answer. You can call one of the following REST API endpoints to close a prompt:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts/answers"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers")))),(0,p.kt)("p",null,"The prompts you close must all be optional; if you try to close a required prompt, you will get an error."),(0,p.kt)("p",null,"You can close the following prompts by not providing answers:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-element-prompts"},"Attribute element prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/object-prompts"},"Object prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/value-prompts"},"Value prompts"))),(0,p.kt)("p",null,"In the body parameter of the request, you use the ",(0,p.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"key"),", or ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," parameter to identify the prompt and the type parameter to specify the prompt type. For the parameters where you would have provided a prompt answer, you leave the value blank."),(0,p.kt)("h2",{id:"reprompt"},"Reprompt"),(0,p.kt)("p",null,"You can use a REST API to cause a prompted document or dossier to be re-prompted. You cannot currently use a REST API to specifically reprompt a report."),(0,p.kt)("h2",{id:"nested-prompts"},"Nested Prompts"),(0,p.kt)("p",null,"It is possible that the report, dossier, or document contains nested prompts which need to be resolved prior to fetching data. These prompts can be nested ",(0,p.kt)("em",{parentName:"p"},"n")," levels deep, so this workflow may need to be iterated over."),(0,p.kt)("p",null,"Let's see an example report with the following template:"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"report_template_500x325",src:r(215).Z,width:"500",height:"325"})),(0,p.kt)("p",null,"In the report filter there is an attribute element prompt on Quarter that is configured to use a filter on Year to reduce the number of elements."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"prompt_gen_wizard_500x363",src:r(2799).Z,width:"500",height:"363"})),(0,p.kt)("p",null,"When this report is executed, the user is prompted to select the year and then quarter, which is filtered based on the year selection."),(0,p.kt)("p",null,"To achieve this workflow via REST API, you simply need to loop through the following workflow:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Execute the report using POST ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/v2/reports/{id}/instances"),"."),(0,p.kt)("p",{parentName:"li"},"There is a response with an HTTP status of 200. Inside the body, status=2, which means there are prompts to be answered."),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{alt:"execute_report_response_600x160",src:r(7134).Z,width:"600",height:"160"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Fetch the current open prompts using GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{id}/instances/{instanceId}/prompts"),"."),(0,p.kt)("p",{parentName:"li"},"There is a response with an HTTP status of 200. One prompt is in the body."),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{alt:"fetch_current_open_prompts_response_600x364",src:r(4222).Z,width:"600",height:"364"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Fetch potential elements for prompt answering using GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{id}/instances/{instanceId}/prompts/{id}/elements"),"."),(0,p.kt)("p",{parentName:"li"},"There is a response with an HTTP status of 200 and a list of elements."),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{alt:"fetch_potential_elements_response_600x358",src:r(5729).Z,width:"600",height:"358"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Answer the prompt using PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{id}/instances/{instancedId}/prompts/answers"),"."),(0,p.kt)("p",{parentName:"li"},"Request Body:"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{alt:"answer_prompt_request_body_500x334",src:r(734).Z,width:"500",height:"334"})),(0,p.kt)("p",{parentName:"li"},"HTTP Response Status: 204")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Check the status of report/fetch data using GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/v2/reports/{id}/instances/{instanceId}"),"."),(0,p.kt)("p",{parentName:"li"},"There is a response of 200. The status within the body is still 2, which means there are still unanswered prompts."),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{alt:"check_report_status_response_600x168",src:r(1458).Z,width:"600",height:"168"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Fetch the current open prompts using GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{id}/instances/{instanceId}/prompts"),"."),(0,p.kt)("p",{parentName:"li"},"There is a response of 200 with two prompts. One prompt is closed=true, since it was already answered. If you call the ",(0,p.kt)("inlineCode",{parentName:"p"},"GET /api/prompts")," API with a closed=true query parameter, the answered prompt is filtered out."),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{alt:"fetch_open_prompts_response_600x447",src:r(4959).Z,width:"600",height:"447"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Fetch potential elements for prompt answering using GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{id}/instances/{instanceId}/prompts/{id}/elements"),"."),(0,p.kt)("p",{parentName:"li"},"There is a response of 200 with a list of elements for Quarter, which is filtered based on the prompt answer used for Year."),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{alt:"fetch_elements_prompt_answer_response_600x361",src:r(3803).Z,width:"600",height:"361"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Answer the prompt using PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{id}/instances/{instancedId}/prompts/answers"),"."),(0,p.kt)("p",{parentName:"li"},"Request Body:"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{alt:"answer_prompt_request_body2_600x351",src:r(991).Z,width:"600",height:"351"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Check the status of report/fetch data using GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/v2/reports/{id}/instances/{instanceId}"),"."))),(0,p.kt)("p",null,"There is a response of 200. The response body now contains the data, since all prompts have been answered."),(0,p.kt)("h3",{id:"documents-and-dossiers"},"Documents and Dossiers"),(0,p.kt)("p",null,"To reprompt a document or dossier, use the following endpoint:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"POST ",(0,p.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/rePrompt"))),(0,p.kt)("p",null,'This sets the status back to "1", indicating that the document or dossier is waiting for prompt answers.'),(0,p.kt)("p",null,"When you use this endpoint, a new instance ID is generated, different from the one passed in the request. Having separate instance IDs for before and after the re-prompting request is designed to allow users to go back if they decide they want to revert to the previous instance."),(0,p.kt)("h3",{id:"reports"},"Reports"),(0,p.kt)("p",null,"To reprompt a report, simply execute the prompted report again, using the same endpoint you used originally."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"PUT ",(0,p.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"))))}c.isMDXComponent=!0},991:function(e,t,r){t.Z=r.p+"assets/images/answer_prompt_request_body2_600x351-38ff12ba5ab30c7d3d187313c278d8ff.png"},734:function(e,t,r){t.Z=r.p+"assets/images/answer_prompt_request_body_500x334-43c5e5a52288fcb9f583a9e31dc01962.png"},1458:function(e,t,r){t.Z=r.p+"assets/images/check_report_status_response_600x168-22958a1bbbe9db1da4577d5e504865a4.png"},7134:function(e,t,r){t.Z=r.p+"assets/images/execute_report_response_600x160-5f1960b5c6771a4d4b72dbdd37b6f03e.png"},4222:function(e,t,r){t.Z=r.p+"assets/images/fetch_current_open_prompts_response_600x364-d8e095188618a252a44d9381da2e0d71.png"},3803:function(e,t,r){t.Z=r.p+"assets/images/fetch_elements_prompt_answer_response_600x361-efcd5e3400e435e4e16160aa2dff89ee.png"},4959:function(e,t,r){t.Z=r.p+"assets/images/fetch_open_prompts_response_600x447-8fffb6ef14a3e5e424ea9b183dbb47c4.png"},5729:function(e,t,r){t.Z=r.p+"assets/images/fetch_potential_elements_response_600x358-f6b87204b35dee79250efb30716e67f7.png"},2799:function(e,t,r){t.Z=r.p+"assets/images/prompt_gen_wizard_500x363-e1127bf348054f72e3b2938a1744aed6.png"},215:function(e,t,r){t.Z=r.p+"assets/images/report_template_500x325-b881458e5cc224cae32b295365556ceb.png"},6582:function(e,t,r){t.Z=r.p+"assets/images/swagger_promptAnswerModel-c7ad8ba8d412aab7837a477e460d8a31.png"}}]);