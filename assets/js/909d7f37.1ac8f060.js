"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8265],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},189:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],i={title:"Workflow Sample - Create a Prompt within a Changeset",sidebar_label:"Create a Prompt within a Changeset",description:"This workflow sample demonstrates how to create a new prompt object through the Modeling service."},p=void 0,l={unversionedId:"common-workflows/manage-prompt-objects/create-a-prompt-within-a-changeset",id:"common-workflows/manage-prompt-objects/create-a-prompt-within-a-changeset",title:"Workflow Sample - Create a Prompt within a Changeset",description:"This workflow sample demonstrates how to create a new prompt object through the Modeling service.",source:"@site/docs/common-workflows/manage-prompt-objects/create-a-prompt-within-a-changeset.md",sourceDirName:"common-workflows/manage-prompt-objects",slug:"/common-workflows/manage-prompt-objects/create-a-prompt-within-a-changeset",permalink:"/rest-api-docs/common-workflows/manage-prompt-objects/create-a-prompt-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-prompt-objects/create-a-prompt-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Create a Prompt within a Changeset",sidebar_label:"Create a Prompt within a Changeset",description:"This workflow sample demonstrates how to create a new prompt object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a Prompt's Definition",permalink:"/rest-api-docs/common-workflows/manage-prompt-objects/retrieve-a-prompts-definition"},next:{title:"Update a Prompt's Definition within a Changeset",permalink:"/rest-api-docs/common-workflows/manage-prompt-objects/update-a-prompts-definition-within-a-changeset"}},c={},m=[{value:"Create a changeset",id:"create-a-changeset",level:2},{value:"Create a prompt using POST/api/model/prompts",id:"create-a-prompt-using-postapimodelprompts",level:2},{value:"Commit a changeset",id:"commit-a-changeset",level:2},{value:"Delete a changeset",id:"delete-a-changeset",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bfdf91c2-f8d8-495a-b4ca-cf1daeb7c6db?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow sample demonstrates how to create a new prompt object through the Modeling service."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-changeset-using-post-apimodelchangesets"},"Create a changeset using `POST /api/model/changesets"),"`"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-prompt-using-postapimodelprompts"},"Create a prompt using POST/api/model/prompts")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#commit-a-changeset-using-post-apimodelchangesetschangesetidcommit"},"Commit a changeset using `POST /api/model/changesets/{changesetId}/commit"),"`"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#delete-a-changeset-using-delete-apimodelchangesetschangesetid"},"Delete a changeset using `DELETE /api/model/changesets/{changesetId}"),"`")),(0,r.kt)("p",null,"You want to create a new prompt object for the ",(0,r.kt)("inlineCode",{parentName:"p"},'"Call Center in USA"')," prompt under a specific folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"8A1831FF494F528D02A4A8BF5FB73459"),". The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."),(0,r.kt)("p",{parentName:"admonition"},"A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("h2",{id:"create-a-changeset"},"Create a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets"),"."),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4E830DF576A24E4B9120455EE576EB51",\n  "dateCreated": "2021-02-20T07:53:00.849722500Z",\n  "dateModified": "2021-02-20T07:53:00.849722500Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MS02_qichen",\n  "mstrUserId": "F82DAA9D40D07ACB1FFE12A81D74CE98",\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "userWarehouseLocale": "en-US",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,r.kt)("h2",{id:"create-a-prompt-using-postapimodelprompts"},"Create a prompt using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt"},"POST/api/model/prompts")),(0,r.kt)("p",null,"You want to create a ",(0,r.kt)("inlineCode",{parentName:"p"},'"Call Center in USA"')," prompt of an attribute element prompt under a specific folder in the MicroStrategy Tutorial project. To create the prompt, you must submit the request body with the correct information. In ",(0,r.kt)("inlineCode",{parentName:"p"},'"information"'),", provide the ",(0,r.kt)("inlineCode",{parentName:"p"},'"subType"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"name"'),", and ",(0,r.kt)("inlineCode",{parentName:"p"},'"destinationFolderId"')," for the prompt you want to create."),(0,r.kt)("p",null,"If you are constructing the POST prompt request body based on the response of the GET prompt call of an existing prompt, be aware that any embedded objects (",(0,r.kt)("inlineCode",{parentName:"p"},'"isEmbedded":true'),') cannot be used to create a new prompt, as the embedded objects are only "local" to their owner.'),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n"Content-Type": "application/json"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_elements",\n    "name": "Call Center in USA"\n  },\n  "title": "Call Center In USA",\n  "instruction": "Choose elements of Call Center.",\n  "question": {\n    "attribute": {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    },\n    "listAllElements": false,\n    "filter": {\n      "objectId": "4C46C8CB43D1BCD0347E10BA3004E70D",\n      "subType": "filter",\n      "name": "CountryInUSA"\n    }\n  },\n  "defaultAnswer": {\n    "elements": [\n      {\n        "display": "Atlanta",\n        "elementId": "h1"\n      },\n      {\n        "display": "Washington, DC",\n        "elementId": "h5"\n      },\n      {\n        "display": "Salt Lake City",\n        "elementId": "h6"\n      }\n    ]\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "none",\n    "min": 2,\n    "max": 5\n  }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/prompts" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51" -H "Content-Type: application/json" -d \'{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","subType":"prompt_elements","name":"CallCenter_FilterInUSA_DefaultAnswers"},"title":"Call Center In UAS","instruction":"Choose elements of Call Center.","question":{"attribute":{"objectId":"8D679D3511D3E4981000E787EC6DE8A4","subType":"attribute","name":"Call Center"},"listAllElements":false,"filter":{"objectId":"4C46C8CB43D1BCD0347E10BA3004E70D","subType":"filter","name":"CountryInUSA"}},"defaultAnswer":{"elements":[{"display":"Atlanta","elementId":"h1"},{"display":"Washington, DC","elementId":"h5"},{"display":"Salt Lake City","elementId":"h6"}]},"restriction":{"required":false,"allowPersonalAnswers":"none","min":2,"max":5}}\'\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new prompt's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "24915328E8884E26B1A4155BD6C87741",\n    "primaryLocale": "en-US",\n    "objectId": "7EBD3A41BC8049FF984E51511BE60FD7",\n    "subType": "prompt_elements",\n    "name": "Call Center in USA",\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"\n  },\n  "title": "Call Center In USA",\n  "instruction": "Choose elements of Call Center.",\n  "question": {\n    "attribute": {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    },\n    "listAllElements": false,\n    "filter": {\n      "objectId": "4C46C8CB43D1BCD0347E10BA3004E70D",\n      "subType": "filter",\n      "name": "CountryInUSA"\n    }\n  },\n  "defaultAnswer": {\n    "elements": [\n      {\n        "display": "Atlanta",\n        "elementId": "h1"\n      },\n      {\n        "display": "Washington, DC",\n        "elementId": "h5"\n      },\n      {\n        "display": "Salt Lake City",\n        "elementId": "h6"\n      }\n    ]\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "none",\n    "min": 2,\n    "max": 5\n  }\n}\n')),(0,r.kt)("p",null,"Response Code: 201 (A new prompt is created successfully in the changeset.)"),(0,r.kt)("h2",{id:"commit-a-changeset"},"Commit a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4E830DF576A24E4B9120455EE576EB51",\n  "dateCreated": "2021-02-23T10:51:04.336913300Z",\n  "dateModified": "2021-02-23T10:51:18.780285700Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "CFC4E856492FEF1A2BB6F1BC37ABFD06",\n  "userMetadataLocale": "en-US",\n  "userDateNumberLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MS"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,r.kt)("h2",{id:"delete-a-changeset"},"Delete a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: \\*/\\*" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"))}u.isMDXComponent=!0}}]);