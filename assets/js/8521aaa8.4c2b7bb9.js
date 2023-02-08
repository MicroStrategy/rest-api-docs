"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6970],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),c=a,k=u["".concat(i,".").concat(c)]||u[c]||d[c]||p;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r,a=n(3117),p=n(102),o=(n(7294),n(3905)),s=["components"],i={title:"Metric expression prompts",description:'can define a prompt as "Get data when Avg Revenue per Customer is greater than 10".'},l=void 0,m={unversionedId:"common-workflows/analytics/use-prompts-objects/prompt-types/metric-expression-prompts",id:"common-workflows/analytics/use-prompts-objects/prompt-types/metric-expression-prompts",title:"Metric expression prompts",description:'can define a prompt as "Get data when Avg Revenue per Customer is greater than 10".',source:"@site/docs/common-workflows/analytics/use-prompts-objects/prompt-types/metric-expression-prompts.md",sourceDirName:"common-workflows/analytics/use-prompts-objects/prompt-types",slug:"/common-workflows/analytics/use-prompts-objects/prompt-types/metric-expression-prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/metric-expression-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/prompt-types/metric-expression-prompts.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Metric expression prompts",description:'can define a prompt as "Get data when Avg Revenue per Customer is greater than 10".'},sidebar:"tutorialSidebar",previous:{title:"Value prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/value-prompts"},next:{title:"Hierarchy qualification prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts"}},d={},u=[{value:"Get information about a metric expression prompt",id:"get-information-about-a-metric-expression-prompt",level:2},{value:"Get the metric expression prompt&#39;s available answer",id:"get-the-metric-expression-prompts-available-answer",level:2},{value:"Answer a metric expression prompt",id:"answer-a-metric-expression-prompt",level:2},{value:"Provide specific prompt answers",id:"provide-specific-prompt-answers",level:3}],c=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),k={toc:u};function f(e){var t=e.components,n=(0,p.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{since:"2021 Update 1",mdxType:"Available"}),(0,o.kt)("p",null,"The metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the date in a report or dossier. For example, you can define a prompt as ",(0,o.kt)("em",{parentName:"p"},"Get data when Avg Revenue per Customer is greater than 10"),"."),(0,o.kt)("p",null,"Use REST APIs to perform the following actions on metric expression prompts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-information-about-a-metric-expression-prompt"},"Get information about a metric expression prompt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-the-metric-expression-prompts-available-answer"},"Get the metric expression prompt's available answer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#answer-a-metric-expression-prompt"},"Answer a metric expression prompt"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#provide-specific-prompt-answers"},"Provide specific prompt answers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/answer-prompts#use-default-prompt-answers"},"Use default prompt answers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/answer-prompts#close-prompts-without-answers"},"Close prompts without answers"))))),(0,o.kt)("h2",{id:"get-information-about-a-metric-expression-prompt"},"Get information about a metric expression prompt"),(0,o.kt)("p",null,"Use the following REST API endpoints to get information about metric expression prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/prompts")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/prompts")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts"))),(0,o.kt)("p",null,"Provide the ID of the document, dossier, or report in the path of the request. You also need to provide the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information. All available parameters for the prompt definition are shown below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"key"),(0,o.kt)("td",{parentName:"tr",align:null},"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"title"),(0,o.kt)("td",{parentName:"tr",align:null},"The title of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of prompt; Enum: ","[ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"required"),(0,o.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if a prompt is required"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"closed"),(0,o.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if a prompt is closed"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,o.kt)("p",null,"The sample code below contains a metric expression prompt definition in a format that is supported by the API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n  "name": "test prompt",\n  "title": "test prompt",\n  "type": "EXPRESSION",\n  "required": true,\n  "closed": false,\n  "max": 2,\n  "min": 1,\n  "defaultAnswer": {\n    "content": "{Avg Revenue per Customer} > 10",\n    "expression": {\n      "level": {\n        "type": "attribute",\n        "objects": [\n          {\n            "id": "4C05177011D3E877C000B3B2D86C964F",\n            "name": "day"\n          }\n        ]\n      },\n      "operator": "Greater",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "4C05177011D3E877C000B3B2D86C964F",\n          "name": "Revenue"\n        },\n        {\n          "type": "constant",\n          "dataType": "Real",\n          "value": "10"\n        }\n      ]\n    }\n  },\n  "answers": {\n    "content": "{Avg Revenue per Customer} > 10",\n    "expression": {\n      "level": {\n        "type": "attribute",\n        "objects": [\n          {\n            "id": "4C05177011D3E877C000B3B2D86C964F",\n            "name": "day"\n          }\n        ]\n      },\n      "operator": "Greater",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "4C05177011D3E877C000B3B2D86C964F",\n          "name": "Revenue"\n        },\n        {\n          "type": "constant",\n          "dataType": "Real",\n          "value": "10"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The sample code below contains a metric expression prompt definition in a format that is ",(0,o.kt)("em",{parentName:"p"},"not")," supported by the API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n    "name": "test prompt",\n    "title": "test prompt",\n    "type": "EXPRESSION",\n    "required": true,\n    "max": 2,\n    "min": 1,\n    "defaultAnswer": {\n      "content": "{Avg Revenue per Customer} > 10",\n        "xml": "xml": "<exp nc="3">{Avg Revenue per Customer} > 10 <nd et="10" nt="4" dmt="7" ddt="-1" is_indp_csi="1" cc="2"><nd et="1" nt="5" dmt="1" ddt="-1" is_indp_csi="1" cc="0"><mt rfd="9">Avg Revenue per Customer</mt></nd><nd et="1" nt="3" dmt="1" ddt="3" is_indp_csi="1" cc="0"><cst ddt="5">10</cst></nd><op fnt="8" fg="0" apply_order="0" node="0"/></nd></exp>"\n    },\n    "answers":{\n      "content": "{Avg Revenue per Customer} > 10",\n        "xml": "xml": "<exp nc="3">{Avg Revenue per Customer} > 10 <nd et="10" nt="4" dmt="7" ddt="-1" is_indp_csi="1" cc="2"><nd et="1" nt="5" dmt="1" ddt="-1" is_indp_csi="1" cc="0"><mt rfd="9">Avg Revenue per Customer</mt></nd><nd et="1" nt="3" dmt="1" ddt="3" is_indp_csi="1" cc="0"><cst ddt="5">10</cst></nd><op fnt="8" fg="0" apply_order="0" node="0"/></nd></exp>"\n    }\n  }\n')),(0,o.kt)("p",null,"Besides the commonly-used fields, the metric expression prompt also contains the fields shown below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Section"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"min"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum number of qualifications that must be supplied to answer the prompt. The qualification here has the same meaning as ",(0,o.kt)("a",{parentName:"td",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/supported-operators"},"operator"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"max"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of qualifications that can be supplied to answer the prompt.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,o.kt)("td",{parentName:"tr",align:null},"content"),(0,o.kt)("td",{parentName:"tr",align:null},"Describes the default answer expression's content.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"expression"),(0,o.kt)("td",{parentName:"tr",align:null},"Reuse the ",(0,o.kt)("a",{parentName:"td",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},"JSON Data API view filter's format"),". This field appears when the prompt's expression is supported by the prompt.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"xml"),(0,o.kt)("td",{parentName:"tr",align:null},"The xml that represents the prompt's expression. This field appears when the prompt's expression is not supported.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"answers"),(0,o.kt)("td",{parentName:"tr",align:null},"content"),(0,o.kt)("td",{parentName:"tr",align:null},"Describes the answer expression's content.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"expression"),(0,o.kt)("td",{parentName:"tr",align:null},"Reuse the ",(0,o.kt)("a",{parentName:"td",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},"JSON Data API view filter's format"),". This field appears when the prompt's expression is supported by the prompt.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"xml"),(0,o.kt)("td",{parentName:"tr",align:null},"The xml that represents the prompt's expression. This field appears when the prompt's expression is not supported.")))),(0,o.kt)("h2",{id:"get-the-metric-expression-prompts-available-answer"},"Get the metric expression prompt's available answer"),(0,o.kt)("p",null,"Use the following REST API endpoint to get a metric expression prompt's available answer:"),(0,o.kt)("p",null,"GET ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts/{promptIdentifier}/objects")),(0,o.kt)("p",null,"The metric this endpoint returns can be used when you generate the expression to answer the prompt. The operator should work on metrics."),(0,o.kt)("p",null,"The sample code below contains a metric expression prompt's available answer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "objects": [\n    {\n      "name": "Profit",\n      "id": "4C051DB611D3E877C000B3B2D86C964F",\n      "type": "metric"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"answer-a-metric-expression-prompt"},"Answer a metric expression prompt"),(0,o.kt)("p",null,"Use the following REST API endpoints to answer a metric expression prompt applied to a dossier, document, or report:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/answers")),(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"))),(0,o.kt)("h3",{id:"provide-specific-prompt-answers"},"Provide specific prompt answers"),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,"All available parameters for the prompt answer are shown below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"key"),(0,o.kt)("td",{parentName:"tr",align:null},"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"The object ID of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of prompt; Enum: ","[ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"useDefault"),(0,o.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if the default answer should be used. If this is set to true, the values are ignored."),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"The sample code below answers a metric expression prompt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "id": "753C65EB402C44D3A991F285D3CB7F6D",\n      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",\n      "name": "test",\n      "useDefault": false,\n      "type": "EXPRESSION",\n      "answers": {\n        "content": "{Avg Revenue per Customer} > 10",\n        "expression": {\n          "level": {\n            "type": "attribute",\n            "objects": [\n              {\n                "id": "4C05177011D3E877C000B3B2D86C964F",\n                "name": "day"\n              }\n            ]\n          },\n          "operator": "Greater",\n          "operands": [\n            {\n              "type": "metric",\n              "id": "4C05177011D3E877C000B3B2D86C964F",\n              "name": "Revenue"\n            },\n            {\n              "type": "constant",\n              "dataType": "Real",\n              "value": "10"\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Since some operations are not supported in the ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},"JSON Data API view filter"),", we provide a way for you to use XML to answer the prompt, as shown in the code sample below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"{\n  \"prompts\": [\n    {\n      \"id\": \"753C65EB402C44D3A991F285D3CB7F6D\",\n      \"key\": \"753C65EB402C44D3A991F285D3CB7F6D@0@10\",\n      \"name\": \"test\",\n      \"useDefault\": false,\n      \"type\": \"EXPRESSION\",\n      \"answers\": {\n        \"content\": \"{Avg Revenue per Customer} > 10\",\n        \"xml\": \"<exp nc='3'>{Avg Revenue per Customer} > 10 <nd et='10' nt='4' dmt='7' ddt='-1' is_indp_csi='1' cc='2'><nd et='1' nt='5' dmt='1' ddt='-1' is_indp_csi='1' cc='0'><mt rfd='9'>Avg Revenue per Customer</mt></nd><nd et='1' nt='3' dmt='1' ddt='3' is_indp_csi='1' cc='0'><cst ddt='5'>10</cst></nd><op fnt='8' fg='0' apply_order='0' node='0'/></nd></exp>\"\n      }\n    }\n  ]\n}\n")),(0,o.kt)("p",null,"Some things to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You only need to provide one ",(0,o.kt)("strong",{parentName:"li"},"id"),", ",(0,o.kt)("strong",{parentName:"li"},"key"),", or ",(0,o.kt)("strong",{parentName:"li"},"name"),". ",(0,o.kt)("strong",{parentName:"li"},"Key")," is preferred."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"useDefault")," field is optional, since the default value is false."),(0,o.kt)("li",{parentName:"ul"},"Content in the answer is optional. Its values do not affect the resulting answer. The default value is ",(0,o.kt)("strong",{parentName:"li"},'""'),".")),(0,o.kt)("p",null,"A lighter version of the sample code is provided below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",\n      "type": "EXPRESSION",\n      "answers": {\n        "expression": {\n          "level": {\n            "type": "attribute",\n            "objects": [\n              {\n                "id": "4C05177011D3E877C000B3B2D86C964F",\n                "name": "day"\n              }\n            ]\n          },\n          "operator": "Greater",\n          "operands": [\n            {\n              "type": "metric",\n              "id": "4C05177011D3E877C000B3B2D86C964F",\n              "name": "Revenue"\n            },\n            {\n              "type": "constant",\n              "dataType": "Real",\n              "value": "10"\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);