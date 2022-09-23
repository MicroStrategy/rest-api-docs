"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3019],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,d=c["".concat(p,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1385:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Hierarchy Qualification Prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."},p=void 0,s={unversionedId:"common-workflows/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",id:"common-workflows/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",title:"Hierarchy Qualification Prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters.",source:"@site/docs/common-workflows/use-prompts-objects/prompt-types/hierarchy-qualification-prompts.md",sourceDirName:"common-workflows/use-prompts-objects/prompt-types",slug:"/common-workflows/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/use-prompts-objects/prompt-types/hierarchy-qualification-prompts.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1663944405,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Hierarchy Qualification Prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."},sidebar:"tutorialSidebar",previous:{title:"Metric Expression Prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/metric-expression-prompts"},next:{title:"Level Prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/level-prompts"}},m={},u=[{value:"Get Information About a Hierarchy Qualification Prompt",id:"get-information-about-a-hierarchy-qualification-prompt",level:2},{value:"Get the Hierarchy Qualification Prompt&#39;s Available Objects",id:"get-the-hierarchy-qualification-prompts-available-objects",level:2},{value:"Get the Attributes of a Hierarchy",id:"get-the-attributes-of-a-hierarchy",level:2},{value:"Answer a Hierarchy Qualification Prompt",id:"answer-a-hierarchy-qualification-prompt",level:2},{value:"Provide Specific Prompt Answers",id:"provide-specific-prompt-answers",level:3}],c={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."),(0,i.kt)("p",null,"Use REST APIs to perform the following actions on hierarchy qualification prompts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-information-about-a-hierarchy-qualification-prompt"},"Get Information About a Hierarchy Qualification Prompt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-the-hierarchy-qualification-prompts-available-objects"},"Get the Hierarchy Qualification Prompt's Available Objects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-the-attributes-of-a-hierarchy"},"Get the Attributes of a Hierarchy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#answer-a-hierarchy-qualification-prompt"},"Answer a Hierarchy Qualification Prompt"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#provide-specific-prompt-answers"},"Provide Specific Prompt Answers"))))),(0,i.kt)("h2",{id:"get-information-about-a-hierarchy-qualification-prompt"},"Get Information About a Hierarchy Qualification Prompt"),(0,i.kt)("p",null,"Use the following REST API endpoints to get information about hierarchy qualification prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/prompts")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/prompts")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts"))),(0,i.kt)("p",null,"Provide the ID of the document, dossier, or report in the path of the request. In addition, you need to supply the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information. All available parameters for the prompt definition are shown below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"The title of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of prompt; Enum: ","[ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if a prompt is required"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"closed"),(0,i.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if a prompt is closed"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,i.kt)("p",null,"The sample code below contains a hierarchy qualification prompt definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n  "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",\n  "name": "test prompt",\n  "title": "test prompt",\n  "type": "EXPRESSION",\n  "closed": false,\n  "required": true,\n  "max": 2,\n  "min": 1,\n  "displayForms": "all", // all|browseForms|reportDisplayForms|customForms\n  "maxElementsPerSelection": -1,\n  "defaultAnswer": {\n    "content": "Category ID In 1, 2, 3, 4, 5",\n    "xml": "<exp></exp>",\n    "expression": {\n      "operator": "In",\n      "operands": [\n        {\n          "type": "form",\n          "attribute": {\n            "id": "8D679D3711D3E4981000E787EC6DE8A4",\n            "name": "Category"\n          },\n          "form": {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID"\n          }\n        },\n        {\n          "type": "constants",\n          "dataType": "Real",\n          "values": ["1", "2", "3", "4", "5"]\n        }\n      ]\n    }\n  },\n  "answers": {\n    "content": "Category In List Books, Movies",\n    "xml": "<exp></exp>",\n    "expression": {\n      "operator": "In",\n      "operands": [\n        {\n          "type": "attribute",\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category"\n        },\n        {\n          "type": "elements",\n          "elements": [\n            {\n              "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",\n              "name": "Books"\n            },\n            {\n              "id": "h2;8D679D3711D3E4981000E787EC6DE8A4",\n              "name": "Electronics"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Besides the commonly-used fields, the hierarchy qualification prompt also contains the following field:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"maxElementsPerSelection")," The maximum number of elements that can be supplied to answer the prompt per selection. The default setting of ",(0,i.kt)("strong",{parentName:"p"},"-1")," means there is no limit to the maximum number of elements."),(0,i.kt)("h2",{id:"get-the-hierarchy-qualification-prompts-available-objects"},"Get the Hierarchy Qualification Prompt's Available Objects"),(0,i.kt)("p",null,"Use the following REST API endpoints to get a hierarchy qualification prompt's available objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/reports/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects"))),(0,i.kt)("p",null,"In a hierarchy qualification prompt, the available objects returned by this endpoint are hierarchies, which contain an ID and name. The hierarchy prompt provides the user with a list of available objects. These objects can come from three different sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Predefined list of objects"),(0,i.kt)("li",{parentName:"ul"},"Result of a search object"),(0,i.kt)("li",{parentName:"ul"},"List of all attributes and hierarchies")),(0,i.kt)("p",null,"The sample code below contains a hierarchy qualification prompt's available objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "objects": [\n  {\n    "id": "C11D3E4981000E8D679D3787EC6DE8A4",\n    "name": "Time",\n    "type": "HIERARCHY"\n  }\n]\n')),(0,i.kt)("h2",{id:"get-the-attributes-of-a-hierarchy"},"Get the Attributes of a Hierarchy"),(0,i.kt)("p",null,"After getting a hierarchy qualification prompt's available objects, the user may need to get the attributes of some hierarchies to construct their own view filter expression. Use the following REST API endpoints to retrieve the attributes of a hierarchy."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/hierarchies/{hierarchyId}/attributes")),(0,i.kt)("p",null,"The sample code below contains the definition of the attributes of a hierarchy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": [\n    {\n      "name": "Month",\n      "id": "8D679D4411D3E4981000E787EC6DE8A4",\n      "type": "attribute",\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID"\n        },\n        {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        },\n        {\n          "id": "4B97DFC611D5AEDAC000E38A4CC5F24F",\n          "name": "DATE"\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"answer-a-hierarchy-qualification-prompt"},"Answer a Hierarchy Qualification Prompt"),(0,i.kt)("p",null,"Use the following REST API endpoints to answer a hierarchy qualification prompt applied to a dossier, document, or report:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PUT ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/reports/{id}/instances/{instanceId}/prompts/answers")),(0,i.kt)("li",{parentName:"ul"},"PUT ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/answers"))),(0,i.kt)("h3",{id:"provide-specific-prompt-answers"},"Provide Specific Prompt Answers"),(0,i.kt)("p",null,"You provide answers to a hierarchy qualification prompt in the body parameter of the request. Identify the prompt by providing the prompt ID, name or key, and specify the prompt type as EXPRESSION. Then, specify the expression used to answer the prompt. The format of the expression is the same as the ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},"JSON Data API's view filter"),". This expression can be used with attribute elements."),(0,i.kt)("p",null,"All available parameters for the prompt answer are shown below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"The object ID of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of prompt; Enum: ","[ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"useDefault"),(0,i.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if the default answer should be used. If this is set to true, the values are ignored."),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"The sample code below answers an attribute qualification prompt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts":[{\n    "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n    "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",\n    "name": "test prompt",\n    "type": "EXPRESSION",\n    "answers": {\n        "content": "Category In List 1, 2, 3, 4, 5",\n        "expression": {\n            "operator": "In",\n            "operands": [\n              {\n                "type": "form",\n                "attribute":{\n                  "id": "8D679D3711D3E4981000E787EC6DE8A4",\n                  "name": "Category"\n                },\n                "form": {\n                  "id": "45C11FA478E745FEA08D781CEA190FE5",\n                  "name": "ID"\n                }\n              },\n              {\n                "type": "constants",\n                "dataType": "Real",\n                "values": ["1", "2", "3", "4", "5"]\n              }\n           ]\n        }\n    },\n')),(0,i.kt)("p",null,"Some things to keep in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You only need to provide one ",(0,i.kt)("strong",{parentName:"li"},"id"),", ",(0,i.kt)("strong",{parentName:"li"},"key"),", or ",(0,i.kt)("strong",{parentName:"li"},"name"),". ",(0,i.kt)("strong",{parentName:"li"},"Key")," is preferred."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"useDefault")," field is optional, since the default value is false."),(0,i.kt)("li",{parentName:"ul"},"Content in the answer is optional. Its values do not affect the resulting answer. The default value is ",(0,i.kt)("strong",{parentName:"li"},'""'),".")))}h.isMDXComponent=!0}}]);