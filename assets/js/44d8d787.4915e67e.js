"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1103],{11319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(74848),s=n(28453);const i={title:"Value prompts",description:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase."},d=void 0,l={id:"common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts",title:"Value prompts",description:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase.",source:"@site/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts.md",sourceDirName:"common-workflows/modeling/manage-prompt-objects/prompt-types",slug:"/common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Value prompts",description:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase."},sidebar:"tutorialSidebar",previous:{title:"Object prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts"},next:{title:"Manage security filter objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/"}},h={},o=[{value:"Create a new prompt",id:"create-a-new-prompt",level:2},{value:"Date",id:"date",level:3},{value:"Text",id:"text",level:3},{value:"Number",id:"number",level:3},{value:"Big decimal",id:"big-decimal",level:3},{value:"Long",id:"long",level:3},{value:"Update an existing prompt",id:"update-an-existing-prompt",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["You can try out this workflow at ",(0,r.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2541f642-4418-4621-980d-40fa31236eb8?ctx=documentation",children:"REST API Playground"}),"."]}),(0,r.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,r.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,r.jsx)(t.p,{children:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase."}),"\n",(0,r.jsx)(t.p,{children:"Use REST APIs to perform the following actions on value prompts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/retrieve-a-prompts-definition",children:"Retrieve a prompt's definition"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#create-a-new-prompt",children:"Create a new prompt"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#update-an-existing-prompt",children:"Update an existing prompt"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You can manipulate the following types of value prompts through REST APIs:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#create-a-new-prompt",children:"Create a new prompt"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#date",children:"Date"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#text",children:"Text"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#number",children:"Number"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#big-decimal",children:"Big decimal"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#long",children:"Long"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#update-an-existing-prompt",children:"Update an existing prompt"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-new-prompt",children:"Create a new prompt"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To create a value prompt, you must enter the required fields with the correct information, using ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt",children:"POST /api/model/prompts"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Location"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,r.jsx)(t.td,{children:"The authorization token"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,r.jsx)(t.td,{children:"The ID of the project"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-MS-Changeset"}),(0,r.jsx)(t.td,{children:"The ID of the changeset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"showExpressionAs"}),(0,r.jsx)(t.td,{children:"The parameter that specifies the format in which the response is returned."})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The sections below details the different types of value prompts you can create."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"date",children:"Date"}),"\n",(0,r.jsx)(t.p,{children:'You can create a prompt that allows the results to be filtered based on a specific date and time, by providing the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Fields"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Required?"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the prompt. This should be a user-friendly name for identifying the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"subType"}),(0,r.jsx)(t.td,{children:'The type of prompt. The "subType" for a date value prompt is "prompt_date".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"destinationFolderId"}),(0,r.jsx)(t.td,{children:"The folder ID where the new prompt is saved."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The title of the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"instruction"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The instruction on how to apply the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:'The type of date. This can be "date" or "date_time".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultAnswer"}),(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"A list of date values used as the default answer. The date values can be static or dynamic."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"required"}),(0,r.jsx)(t.td,{children:"An indicator that specifies whether a prompt answer is required or not."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"allowPersonalAnswers"}),(0,r.jsx)(t.td,{children:'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"The minimum value of the date that can be set. The date value can be static or dynamic."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"The maximum value of the date that can be set. The date value can be static or dynamic."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Sample code for creating the different types of value prompt's definitions is provided below."}),"\n",(0,r.jsx)(t.p,{children:"Static date:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'"date": {\n    "mode": "static",\n    "value": "2007-12-03"  //(A date without a time-zone in the ISO-8601 calendar system, YYYY-MM-DD)\n}\n```json\n\nDynamic date:\n```json\n"date": {\n    "mode": "dynamic",\n    "dayOffset": 2,\n    "monthOffset": 0,\n    "adjustmentMonthlyByDay": {\n        "day": 1\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Static time:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'"time": {\n    "hourMode": "static",\n    "hour": 12,\n    "minuteAndSecondMode": "static",\n    "minute": 5,\n    "second": 10\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Dynamic time:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'"time": {\n    "hourMode": "dynamic",\n    "hourOffset": 1,\n    "minuteAndSecondMode": "dynamic",\n    "minuteOffset": 2,\n    "secondOffset": 5\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Sample code for creating a date prompt's definition is provided below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_date",\n    "name": "Pick a valid date"\n  },\n  "title": "Date",\n  "instruction": "Enter a value (Date).",\n  "question": {\n    "type": "date"\n  },\n  "defaultAnswer": {\n    "value": {\n      "dynamicDateTime": {\n        "type": "date",\n        "date": {\n          "mode": "dynamic",\n          "dayOffset": 8,\n          "monthOffset": 0,\n          "adjustmentNone": {}\n        }\n      }\n    }\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none",\n    "min": {\n      "dynamicDateTime": {\n        "type": "date",\n        "date": {\n          "mode": "dynamic",\n          "dayOffset": 5,\n          "monthOffset": 0,\n          "adjustmentNone": {}\n        }\n      }\n    },\n    "max": {\n      "dynamicDateTime": {\n        "type": "date",\n        "date": {\n          "mode": "dynamic",\n          "dayOffset": 15,\n          "monthOffset": 0,\n          "adjustmentNone": {}\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"text",children:"Text"}),"\n",(0,r.jsx)(t.p,{children:"You can create a prompt that allows the results to be filtered based on a specific string, by providing the fields show below."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Fields"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Required?"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the prompt. This should be a user-friendly name for identifying the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"subType"}),(0,r.jsx)(t.td,{children:'The type of prompt. The "subType" for a value text prompt is "prompt_string".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"destinationFolderId"}),(0,r.jsx)(t.td,{children:"The folder ID where the new prompt is saved."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The title of the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"instruction"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The instruction on how to apply the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultAnswer"}),(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"A list of text values used as the default answer."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"required"}),(0,r.jsx)(t.td,{children:"An indicator that specifies whether a prompt answer is required or not."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"allowPersonalAnswers"}),(0,r.jsx)(t.td,{children:'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"The minimum number of characters that can be entered."}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"The maximum number of characters that can be entered."}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Sample code for creating a text prompt's definition is provided below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_string",\n    "name": "Enter a text"\n  },\n  "title": "Text",\n  "instruction": "Enter a value (Text).",\n  "defaultAnswer": {\n    "value": "New York"\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "multiple",\n    "min": 11,\n    "max": 456782\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"number",children:"Number"}),"\n",(0,r.jsx)(t.p,{children:"You can create a prompt that allows the results to be filtered based on a specific number, by providing the fields shown below."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Fields"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Required?"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the prompt. This should be a user-friendly name for identifying the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"subType"}),(0,r.jsx)(t.td,{children:'The type of prompt. The "subType" for a number prompt is "prompt_double".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"destinationFolderId"}),(0,r.jsx)(t.td,{children:"The folder ID where the new prompt is saved."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The title of the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"instruction"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The instruction on how to apply the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultAnswer"}),(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"A list of number values used as the default answer."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"required"}),(0,r.jsx)(t.td,{children:"An indicator that specifies whether a prompt answer is required or not."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"allowPersonalAnswers"}),(0,r.jsx)(t.td,{children:'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"The minimum number value that can be set."}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"The maximum number value that can be set."}),(0,r.jsx)(t.td,{children:"double"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Sample code for creating a number prompt's definition is shown below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_double",\n    "name": "Choose a number"\n  },\n  "title": " ",\n  "instruction": "Enter a value (Number).",\n  "defaultAnswer": {\n    "value": 0\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "none",\n    "min": -100,\n    "max": 2\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"big-decimal",children:"Big decimal"}),"\n",(0,r.jsx)(t.p,{children:"You can create a prompt that allows the results to be filtered based on a specific big decimal value, by providing the fields shown below."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Fields"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Required?"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the prompt. This should be a user-friendly name for identifying the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"subType"}),(0,r.jsx)(t.td,{children:'The type of prompt. The "subType" for a big decimal prompt is "prompt_big_decimal".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"destinationFolderId"}),(0,r.jsx)(t.td,{children:"The folder ID where the new prompt is saved."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The title of the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"instruction"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The instruction on how to apply the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultAnswer"}),(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"A list of big decimal values used as the default answer."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"required"}),(0,r.jsx)(t.td,{children:"An indicator that specifies whether a prompt answer is required or not."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"allowPersonalAnswers"}),(0,r.jsx)(t.td,{children:'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"The minimum big decimal value that can be set."}),(0,r.jsx)(t.td,{children:"big decimal"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"The maximum big decimal value that can be set."}),(0,r.jsx)(t.td,{children:"big decimal"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Sample code for creating a big decimal prompt's definition is shown below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_big_decimal",\n    "name": "Choose a Big Decimal Value"\n  },\n  "title": "Big decimal",\n  "instruction": "Enter a value (Big Decimal).",\n  "defaultAnswer": {\n    "value": "0.1"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none",\n    "min": "0",\n    "max": "1.0"\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"long",children:"Long"}),"\n",(0,r.jsx)(t.p,{children:"You can create a prompt that allows the results to be filtered based on a specific long value, by providing the fields shown below"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Fields"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Required?"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the prompt. This should be a user-friendly name for identifying the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"subType"}),(0,r.jsx)(t.td,{children:'The type of prompt. The "subType" for a long is "prompt_long".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"destinationFolderId"}),(0,r.jsx)(t.td,{children:"The folder ID where the new prompt is saved."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The title of the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"instruction"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The instruction on how to apply the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultAnswer"}),(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"A list of long values used as the default answer."}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"required"}),(0,r.jsx)(t.td,{children:"An indicator that specifies whether a prompt answer is required or not."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"allowPersonalAnswers"}),(0,r.jsx)(t.td,{children:'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"The minimum long value that can be set."}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"The maximum long value that can be set."}),(0,r.jsx)(t.td,{children:"long"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Sample code for creating a long prompt's definition is shown below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_long",\n    "name": "Choose a long value"\n  },\n  "title": "Number",\n  "instruction": "Enter a value (Number).",\n  "defaultAnswer": {\n    "value": -2147483648\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none",\n    "min": -2147483648,\n    "max": 2147483647\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"update-an-existing-prompt",children:"Update an existing prompt"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update the definition of an object prompt using ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt",children:"PUT /api/model/prompts/{promptId}"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Provide the following headers in the request:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Location"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,r.jsx)(t.td,{children:"The authorization token"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,r.jsx)(t.td,{children:"The ID of the project"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-MS-Changeset"}),(0,r.jsx)(t.td,{children:"The ID of the changeset"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In addition to the above header, you should also provide the ID of the prompt you want to update."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Modify the fields for the appropriate prompt type using the tables linked below. The ",(0,r.jsx)(t.code,{children:'"subType"'})," field cannot be modified through this REST API."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#date",children:"Date"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#text",children:"Text"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#number",children:"Number"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#big-decimal",children:"Big decimal"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#long",children:"Long"})}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);