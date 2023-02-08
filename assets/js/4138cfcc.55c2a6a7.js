"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7116],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||c[d]||n;return r?a.createElement(f,p(p({ref:t},m),{},{components:r})):a.createElement(f,p({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<n;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7406:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a,o=r(3117),n=r(102),p=(r(7294),r(3905)),s=["components"],i={title:"Prompt execution errors",description:"Various errors can occur during prompt execution. Some errors can happen with all types of prompts, and others occur only for specific types of prompts."},l=void 0,m={unversionedId:"common-workflows/analytics/use-prompts-objects/prompt-execution-errors",id:"common-workflows/analytics/use-prompts-objects/prompt-execution-errors",title:"Prompt execution errors",description:"Various errors can occur during prompt execution. Some errors can happen with all types of prompts, and others occur only for specific types of prompts.",source:"@site/docs/common-workflows/analytics/use-prompts-objects/prompt-execution-errors.md",sourceDirName:"common-workflows/analytics/use-prompts-objects",slug:"/common-workflows/analytics/use-prompts-objects/prompt-execution-errors",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-execution-errors",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/prompt-execution-errors.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Prompt execution errors",description:"Various errors can occur during prompt execution. Some errors can happen with all types of prompts, and others occur only for specific types of prompts."},sidebar:"tutorialSidebar",previous:{title:"Answer prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/answer-prompts"},next:{title:"Manage selectors",permalink:"/rest-api-docs/common-workflows/analytics/manage-selectors/"}},c={},u=[{value:"Errors that apply to all prompt types",id:"errors-that-apply-to-all-prompt-types",level:2},{value:"Prompt-specific errors",id:"prompt-specific-errors",level:2}],d=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),f={toc:u};function k(e){var t=e.components,r=(0,n.Z)(e,s);return(0,p.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)(d,{since:"2021 Update 1",mdxType:"Available"}),(0,p.kt)("p",null,"Various errors can occur during prompt execution. Some errors can happen with ",(0,p.kt)("a",{parentName:"p",href:"#errors-that-apply-to-all-prompt-types"},"all types of prompts"),", and others occur only for ",(0,p.kt)("a",{parentName:"p",href:"#prompt-specific-errors"},"specific types of prompts"),". Some causes of errors during prompt execution include:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Incorrect input:",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"ID for the prompt does not exist in the object (dossier, document, or report)"),(0,p.kt)("li",{parentName:"ul"},"Name for the prompt does not exist in the object (dossier, document, or report)"),(0,p.kt)("li",{parentName:"ul"},"Attribute element or name could not be found in the attribute element list prompt"),(0,p.kt)("li",{parentName:"ul"},"ID (",(0,p.kt)("inlineCode",{parentName:"li"},"objectId"),") for an object prompt does not exist in the metadata or could not be found"),(0,p.kt)("li",{parentName:"ul"},"Answer for a value prompt is outside of the expected range"),(0,p.kt)("li",{parentName:"ul"},"Answer for a value prompt is of an unexpected data type"))),(0,p.kt)("li",{parentName:"ul"},"Issues in the workflow:",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"The caller attempts to dismiss required prompts"),(0,p.kt)("li",{parentName:"ul"},"The caller attempts to answer the prompt with no answers but the prompt requires them")))),(0,p.kt)("h2",{id:"errors-that-apply-to-all-prompt-types"},"Errors that apply to all prompt types"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Bad request. JSON is not formatted properly."),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "Unexpected character (\'\\"\' (code 34)): was expecting a colon to separate field name and value \\n at [Source: (org.glassfish.jersey.message.internal.ReaderInterceptorExecutor$UnCloseableInputStream); line: 4, column: 13]",\n  "ticketId": "307a1fbcc6394306b0c41f302d6ec5d6"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Message inbox could not be found"),(0,p.kt)("p",{parentName:"li"},"HTTP - 404"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR004",\n  "iServerCode": -2147468986,\n  "message": "(Message not found in user history list. It may have been deleted from other session already. Please refresh your history list.)",\n  "ticketId": "a57588a29fa646e2b167d3bc1d182446"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Unable to identify prompt based on key"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "Failed to locate the prompt by either key: G46842D548C9F0CEEDD3979528480FE5@0@10, please verify this information is correct.",\n  "ticketId": "30190f8b9f6b477f88229cc150b6b2ad"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Unable to identify prompt based on name"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "Failed to locate the prompt by either name: my prompt, please verify this information is correct.",\n  "ticketId": "66e6e02e57fc4b5db7ba6cc9109f8b1e"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Unable to identify prompt based on ID"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "Failed to locate the prompt by either id: 138C60BC4999F6BEEFBFAFB970770A3F, please verify this information is correct.",\n  "ticketId": "af62ab2e10b64a7d8b45f267ac4e4c1d"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Provided prompt type does not match actual WebPrompt prompt type (type provided in the JSON helps with serialization of the object)"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The supplied prompt type OBJECTS for prompt A46842D548C3F0CEEDD3979528480FE5@0@10 does not match, this prompt is of type VALUE please verify this information.",\n  "ticketId": "61ddb2cc60be4d4d8d6d4cd05b07da51"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Attempted to answer with default answers, but the prompt does not have any"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The supplied prompt type OBJECTS for prompt A46842D548C3F0CEEDD3979528480FE5@0@10 does not match, this prompt is of type VALUE please verify this information.",\n  "ticketId": "61ddb2cc60be4d4d8d6d4cd05b07da51"\n}\n')))),(0,p.kt)("h2",{id:"prompt-specific-errors"},"Prompt-specific errors"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#errors-that-occur-only-for-attribute-element-prompts"},"Errors that occur only for attribute element prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#errors-that-occur-only-for-object-prompts"},"Errors that occur only for object prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#errors-that-occur-only-for-value-prompts"},"Errors that occur only for value prompts"))),(0,p.kt)("p",null,"Code samples for prompt-specific errors are provided below."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h3",{parentName:"li",id:"errors-that-occur-only-for-attribute-element-prompts"},"Errors That Occur Only for Attribute Element Prompts"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Incorrect attribute element format")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Unable to find attribute element by name"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "Unable to find elements that match 1234 for prompt name: Elements of Year key: 040A30DF43F18A2DFC208A8F4AC0A931@0@10.",\n  "ticketId": "1f32bda3146e46539ce36f6d77f3ce66"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Unable to find attribute element by ID"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "Prompt validation failed. This is a required prompt.",\n  "ticketId": "411a15817f3e4c9d862513ccc8390170"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Too few elements provided"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The number of attribute elements for prompt name: Elements of Year key: 040A30DF43F18A2DFC208A8F4AC0A931@0@10 does not meet the minimum required(2} answers.",\n  "ticketId": "d5dd190613944873a2c40ac0c2b995db"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Too many elements provided"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The number of attribute elements for prompt name: Elements of Year key: 040A30DF43F18A2DFC208A8F4AC0A931@0@10 exceeds the maximum allowed(2} answers.",\n  "ticketId": "35a8c3ffb18d4105aaaaa15df38dcb1e"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Incorrect attribute element format for attribute element prompt")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h3",{parentName:"li",id:"errors-that-occur-only-for-object-prompts"},"Errors That Occur Only for Object Prompts"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Too many prompt answers provided"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 exceeds the maximum allowed(3} answers",\n  "ticketId": "5352773f8b1440a9891911bc2cdd05b4"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Too few prompt answers provided"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 does not meet the minimum required(3} answer.",\n  "ticketId": "3439cf127157448abfb621998868ad19"\n}\n'))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h3",{parentName:"li",id:"errors-that-occur-only-for-value-prompts"},"Errors That Occur Only for Value Prompts"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Incorrect data type provided for answer")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Text length too short"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The number of characters provided for prompt name: Value (Text) key: CF604AA948AF21CBC67AF98FBA614E0F@0@10 does not meet the minimum required(2} text length.",\n  "ticketId": "67fb558e27c34d6e816a8a17920a23eb"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Text length too long"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The number of characters provided for prompt name: Value (Text) key: CF604AA948AF21CBC67AF98FBA614E0F@0@10 exceeds the maximum allowed(5) text length.",\n  "ticketId": "67fb558e27c34d6e816a8a17920a23eb"\n}\n')))))))}k.isMDXComponent=!0}}]);