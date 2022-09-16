"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3939],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return c}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=m(a),c=n,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return a?r.createElement(h,l(l({ref:e},s),{},{components:a})):r.createElement(h,l({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4834:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),l=["components"],o={title:"Hierarchy Qualification Prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you determine a single hierarchy or a list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."},p=void 0,m={unversionedId:"common-workflows/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts",id:"common-workflows/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts",title:"Hierarchy Qualification Prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you determine a single hierarchy or a list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters.",source:"@site/docs/common-workflows/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts.md",sourceDirName:"common-workflows/manage-prompt-objects/prompt-types",slug:"/common-workflows/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts",permalink:"/rest-api-docs/common-workflows/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1663337315,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{title:"Hierarchy Qualification Prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you determine a single hierarchy or a list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."},sidebar:"tutorialSidebar",previous:{title:"Attribute Qualification Prompts",permalink:"/rest-api-docs/common-workflows/manage-prompt-objects/prompt-types/attribute-qualification-prompts"},next:{title:"Metric Expression Prompts",permalink:"/rest-api-docs/common-workflows/manage-prompt-objects/prompt-types/metric-expression-prompts"}},s={},d=[{value:"Create a New Prompt",id:"create-a-new-prompt",level:2},{value:"Update an Existing Prompt",id:"update-an-existing-prompt",level:2}],u={toc:d};function c(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c7bb0522-b646-4b0a-93a1-159c55b3af82?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you determine a single hierarchy or a list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."),(0,i.kt)("p",null,"Use REST APIs to perform the following actions on attribute element prompts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-prompt-objects/retrieve-a-prompts-definition"},"Retrieve a Prompt's Definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-a-new-prompt"},"Create a New Prompt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#update-an-existing-prompt"},"Update an Existing Prompt"))),(0,i.kt)("h2",{id:"create-a-new-prompt"},"Create a New Prompt"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To create a hierarchy qualification prompt, you must enter the required fields with the correct information, using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt"},"POST /api/model/prompts"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The response can change based on the request parameters provided by the caller. Use the following parameters."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the changeset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,i.kt)("td",{parentName:"tr",align:null},"The parameter that specifies the format in which the response is returned."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'The model for the definition of an hierarchy qualification prompt can be represented using the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.'),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Fields"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"information"),(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"information"),(0,i.kt)("td",{parentName:"tr",align:null},"subType"),(0,i.kt)("td",{parentName:"tr",align:null},'The type of prompt. The "subType" for a hierarchy qualification prompt is "prompt_expression".'),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"information"),(0,i.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,i.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expressionType"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},'Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "hierarchy" for hierarchy qualification prompts.'),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"instruction"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"question"),(0,i.kt)("td",{parentName:"tr",align:null},"displayform"),(0,i.kt)("td",{parentName:"tr",align:null},"The displayed forms for the hierarchy."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"question"),(0,i.kt)("td",{parentName:"tr",align:null},"listallHierarchy"),(0,i.kt)("td",{parentName:"tr",align:null},'An indicator that specifies if are hierarchies are used for the prompt. If this is set to True, "predefinedObjects" and "search" should be null. Otherwise, the response returns an error.'),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"question"),(0,i.kt)("td",{parentName:"tr",align:null},"predefinedObjects"),(0,i.kt)("td",{parentName:"tr",align:null},'A list of predefined hierarchies with "objectId", "subType", and "name".'),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"question"),(0,i.kt)("td",{parentName:"tr",align:null},"search"),(0,i.kt)("td",{parentName:"tr",align:null},'A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,i.kt)("td",{parentName:"tr",align:null},"qualification"),(0,i.kt)("td",{parentName:"tr",align:null},'A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.'),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"maxElementPerSelection"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of elements per selection"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,i.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"min"),(0,i.kt)("td",{parentName:"tr",align:null},"The minimum number of qualifications that can be added."),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"max"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of qualifications that can be added."),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",{parentName:"li"},"Sample code for creating a hierarchy qualification prompt's definition is provided below."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_expression",\n    "name": "Hierarchy - ListAll"\n  },\n  "title": "Hierarchies",\n  "instruction": "Choose a hierarchy to begin building a qualification.",\n  "expressionType": "hierarchy",\n  "question": {\n    "displayForms": "all_forms",\n    "listAllHierarchies": true\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "multiple",\n    "maxElementPerSelection": 100,\n    "min": 2,\n    "max": 5\n  }\n}\n')))),(0,i.kt)("h2",{id:"update-an-existing-prompt"},"Update an Existing Prompt"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the definition of the hierarchy qualification prompt using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt"},"PUT /api/model/prompts/{promptId}"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Provide the following headers in the request:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the changeset"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In addition to the above header, you should also provide the ID of the prompt you want to update.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can modify the fields shown below. The ",(0,i.kt)("inlineCode",{parentName:"p"},'"subType"')," field is not included below since it cannot be modified through this REST API."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Fields"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"information"),(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"information"),(0,i.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,i.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expressionType"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},'Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "hierarchy" for hierarchy qualification prompts.'),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"instruction"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"question"),(0,i.kt)("td",{parentName:"tr",align:null},"displayform"),(0,i.kt)("td",{parentName:"tr",align:null},"The displayed forms for the hierarchy."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"question"),(0,i.kt)("td",{parentName:"tr",align:null},"listallHierarchy"),(0,i.kt)("td",{parentName:"tr",align:null},'An indicator that specifies if are hierarchies are used for the prompt. If this is set to True, "predefinedObjects" and "search" should be null. Otherwise, the response returns an error.'),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"question"),(0,i.kt)("td",{parentName:"tr",align:null},"predefinedObjects"),(0,i.kt)("td",{parentName:"tr",align:null},'A list of predefined hierarchies with "objectId", "subType", and "name".'),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"question"),(0,i.kt)("td",{parentName:"tr",align:null},"search"),(0,i.kt)("td",{parentName:"tr",align:null},'A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,i.kt)("td",{parentName:"tr",align:null},"qualification"),(0,i.kt)("td",{parentName:"tr",align:null},'A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.'),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,i.kt)("td",{parentName:"tr",align:null},"boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"maxElementPerSelection"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of elements per selection"),(0,i.kt)("td",{parentName:"tr",align:null},"integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,i.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"min"),(0,i.kt)("td",{parentName:"tr",align:null},"The minimum number of qualifications that can be added."),(0,i.kt)("td",{parentName:"tr",align:null},"integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"max"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of qualifications that can be added."),(0,i.kt)("td",{parentName:"tr",align:null},"integer")))))))}c.isMDXComponent=!0}}]);