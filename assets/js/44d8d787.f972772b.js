"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4146],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=m(n),k=r,g=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},54321:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],p={title:"Value prompts",description:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase."},o=void 0,m={unversionedId:"common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts",id:"common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts",title:"Value prompts",description:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase.",source:"@site/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts.md",sourceDirName:"common-workflows/modeling/manage-prompt-objects/prompt-types",slug:"/common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts.md",tags:[],version:"current",lastUpdatedBy:"Holmblad, Darren",lastUpdatedAt:1695923197,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Value prompts",description:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase."},sidebar:"tutorialSidebar",previous:{title:"Object prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts"},next:{title:"Manage security filter objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/"}},d={},u=[{value:"Create a new prompt",id:"create-a-new-prompt",level:2},{value:"Date",id:"date",level:3},{value:"Text",id:"text",level:3},{value:"Number",id:"number",level:3},{value:"Big decimal",id:"big-decimal",level:3},{value:"Long",id:"long",level:3},{value:"Update an existing prompt",id:"update-an-existing-prompt",level:2}],s={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2541f642-4418-4621-980d-40fa31236eb8?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase."),(0,l.kt)("p",null,"Use REST APIs to perform the following actions on value prompts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/retrieve-a-prompts-definition"},"Retrieve a prompt's definition")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-a-new-prompt"},"Create a new prompt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-an-existing-prompt"},"Update an existing prompt"))),(0,l.kt)("p",null,"You can manipulate the following types of value prompts through REST APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-a-new-prompt"},"Create a new prompt"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#date"},"Date")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#text"},"Text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#number"},"Number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#big-decimal"},"Big decimal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#long"},"Long")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-an-existing-prompt"},"Update an existing prompt"))),(0,l.kt)("h2",{id:"create-a-new-prompt"},"Create a new prompt"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To create a value prompt, you must enter the required fields with the correct information, using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt"},"POST /api/model/prompts"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The response can change based on the request parameters provided by the caller. Use the following parameters."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Location"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,l.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the changeset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter that specifies the format in which the response is returned."))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The sections below details the different types of value prompts you can create."))),(0,l.kt)("h3",{id:"date"},"Date"),(0,l.kt)("p",null,'You can create a prompt that allows the results to be filtered based on a specific date and time, by providing the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"subType"),(0,l.kt)("td",{parentName:"tr",align:null},'The type of prompt. The "subType" for a date value prompt is "prompt_date".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instruction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},'The type of date. This can be "date" or "date_time".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of date values used as the default answer. The date values can be static or dynamic."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,l.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum value of the date that can be set. The date value can be static or dynamic."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum value of the date that can be set. The date value can be static or dynamic."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Sample code for creating the different types of value prompt's definitions is provided below."),(0,l.kt)("p",null,"Static date:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"date": {\n    "mode": "static",\n    "value": "2007-12-03"  //(A date without a time-zone in the ISO-8601 calendar system, YYYY-MM-DD)\n}\n```json\n\nDynamic date:\n```json\n"date": {\n    "mode": "dynamic",\n    "dayOffset": 2,\n    "monthOffset": 0,\n    "adjustmentMonthlyByDay": {\n        "day": 1\n    }\n}\n')),(0,l.kt)("p",null,"Static time:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"time": {\n    "hourMode": "static",\n    "hour": 12,\n    "minuteAndSecondMode": "static",\n    "minute": 5,\n    "second": 10\n}\n')),(0,l.kt)("p",null,"Dynamic time:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"time": {\n    "hourMode": "dynamic",\n    "hourOffset": 1,\n    "minuteAndSecondMode": "dynamic",\n    "minuteOffset": 2,\n    "secondOffset": 5\n}\n')),(0,l.kt)("p",null,"Sample code for creating a date prompt's definition is provided below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_date",\n    "name": "Pick a valid date"\n  },\n  "title": "Date",\n  "instruction": "Enter a value (Date).",\n  "question": {\n    "type": "date"\n  },\n  "defaultAnswer": {\n    "value": {\n      "dynamicDateTime": {\n        "type": "date",\n        "date": {\n          "mode": "dynamic",\n          "dayOffset": 8,\n          "monthOffset": 0,\n          "adjustmentNone": {}\n        }\n      }\n    }\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none",\n    "min": {\n      "dynamicDateTime": {\n        "type": "date",\n        "date": {\n          "mode": "dynamic",\n          "dayOffset": 5,\n          "monthOffset": 0,\n          "adjustmentNone": {}\n        }\n      }\n    },\n    "max": {\n      "dynamicDateTime": {\n        "type": "date",\n        "date": {\n          "mode": "dynamic",\n          "dayOffset": 15,\n          "monthOffset": 0,\n          "adjustmentNone": {}\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"text"},"Text"),(0,l.kt)("p",null,"You can create a prompt that allows the results to be filtered based on a specific string, by providing the fields show below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"subType"),(0,l.kt)("td",{parentName:"tr",align:null},'The type of prompt. The "subType" for a value text prompt is "prompt_string".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instruction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of text values used as the default answer."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,l.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum number of characters that can be entered."),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of characters that can be entered."),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Sample code for creating a text prompt's definition is provided below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_string",\n    "name": "Enter a text"\n  },\n  "title": "Text",\n  "instruction": "Enter a value (Text).",\n  "defaultAnswer": {\n    "value": "New York"\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "multiple",\n    "min": 11,\n    "max": 456782\n  }\n}\n')),(0,l.kt)("h3",{id:"number"},"Number"),(0,l.kt)("p",null,"You can create a prompt that allows the results to be filtered based on a specific number, by providing the fields shown below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"subType"),(0,l.kt)("td",{parentName:"tr",align:null},'The type of prompt. The "subType" for a number prompt is "prompt_double".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instruction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of number values used as the default answer."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,l.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum number value that can be set."),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number value that can be set."),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Sample code for creating a number prompt's definition is shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_double",\n    "name": "Choose a number"\n  },\n  "title": " ",\n  "instruction": "Enter a value (Number).",\n  "defaultAnswer": {\n    "value": 0\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "none",\n    "min": -100,\n    "max": 2\n  }\n}\n')),(0,l.kt)("h3",{id:"big-decimal"},"Big decimal"),(0,l.kt)("p",null,"You can create a prompt that allows the results to be filtered based on a specific big decimal value, by providing the fields shown below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"subType"),(0,l.kt)("td",{parentName:"tr",align:null},'The type of prompt. The "subType" for a big decimal prompt is "prompt_big_decimal".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instruction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of big decimal values used as the default answer."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,l.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum big decimal value that can be set."),(0,l.kt)("td",{parentName:"tr",align:null},"big decimal"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum big decimal value that can be set."),(0,l.kt)("td",{parentName:"tr",align:null},"big decimal"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Sample code for creating a big decimal prompt's definition is shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_big_decimal",\n    "name": "Choose a Big Decimal Value"\n  },\n  "title": "Big decimal",\n  "instruction": "Enter a value (Big Decimal).",\n  "defaultAnswer": {\n    "value": "0.1"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none",\n    "min": "0",\n    "max": "1.0"\n  }\n}\n')),(0,l.kt)("h3",{id:"long"},"Long"),(0,l.kt)("p",null,"You can create a prompt that allows the results to be filtered based on a specific long value, by providing the fields shown below"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"subType"),(0,l.kt)("td",{parentName:"tr",align:null},'The type of prompt. The "subType" for a long is "prompt_long".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instruction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of long values used as the default answer."),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,l.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum long value that can be set."),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum long value that can be set."),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Sample code for creating a long prompt's definition is shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_long",\n    "name": "Choose a long value"\n  },\n  "title": "Number",\n  "instruction": "Enter a value (Number).",\n  "defaultAnswer": {\n    "value": -2147483648\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none",\n    "min": -2147483648,\n    "max": 2147483647\n  }\n}\n')),(0,l.kt)("h2",{id:"update-an-existing-prompt"},"Update an existing prompt"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Update the definition of an object prompt using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt"},"PUT /api/model/prompts/{promptId}"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Provide the following headers in the request:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Location"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,l.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the changeset"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In addition to the above header, you should also provide the ID of the prompt you want to update.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Modify the fields for the appropriate prompt type using the tables linked below. The ",(0,l.kt)("inlineCode",{parentName:"p"},'"subType"')," field cannot be modified through this REST API."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#date"},"Date")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#text"},"Text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#number"},"Number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#big-decimal"},"Big decimal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#long"},"Long"))))))}k.isMDXComponent=!0}}]);