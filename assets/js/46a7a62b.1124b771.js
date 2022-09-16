"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5932],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=p(n),u=r,m=f["".concat(l,".").concat(u)]||f[u]||c[u]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3120:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],s={title:"Workflow Sample - Retrieve a Filter's Definition",sidebar_label:"Retrieve a Filter's Definition",description:"This topic covers several workflows for retrieving a filter's definition."},l=void 0,p={unversionedId:"common-workflows/manage-filter-objects/retrieve-a-filters-definition",id:"common-workflows/manage-filter-objects/retrieve-a-filters-definition",title:"Workflow Sample - Retrieve a Filter's Definition",description:"This topic covers several workflows for retrieving a filter's definition.",source:"@site/docs/common-workflows/manage-filter-objects/retrieve-a-filters-definition.md",sourceDirName:"common-workflows/manage-filter-objects",slug:"/common-workflows/manage-filter-objects/retrieve-a-filters-definition",permalink:"/rest-api-docs/common-workflows/manage-filter-objects/retrieve-a-filters-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-filter-objects/retrieve-a-filters-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1663337315,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{title:"Workflow Sample - Retrieve a Filter's Definition",sidebar_label:"Retrieve a Filter's Definition",description:"This topic covers several workflows for retrieving a filter's definition."},sidebar:"tutorialSidebar",previous:{title:"Manage Filter Objects",permalink:"/rest-api-docs/common-workflows/manage-filter-objects/"},next:{title:"Retrieve a Filter's Definition within a Changeset",permalink:"/rest-api-docs/common-workflows/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset"}},d={},c=[{value:"Retrieve a Filter&#39;s Definition",id:"retrieve-a-filters-definition",level:2},{value:"Retrieve a Filter&#39;s Definition in Tokens Format",id:"retrieve-a-filters-definition-in-tokens-format",level:2},{value:"Retrieve a Filter&#39;s Definition with Custom Expressions in Tree and Tokens Formats",id:"retrieve-a-filters-definition-with-custom-expressions-in-tree-and-tokens-formats",level:2},{value:"Retrieve a Filter&#39;s Definition That Contains Inline Custom Expressions, with the Expression in Tree and Tokens Formats",id:"retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats",level:2}],f={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c532ccd7-317b-4f18-9a37-1388740cbab5?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"This topic covers several workflows for retrieving a filter's definition:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-filters-definition"},"Retrieve a Filter's Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-filters-definition-in-tokens-format"},"Retrieve a Filter's Definition in Tokens Format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-filters-definition-with-custom-expressions-in-tree-and-tokens-formats"},"Retrieve a Filter's Definition with Custom Expressions in Tree and Tokens Formats")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats"},"Retrieve a Filter's Definition That Contains Inline Custom Expressions, with the Expression in Tree and Tokens Formats"))),(0,a.kt)("h2",{id:"retrieve-a-filters-definition"},"Retrieve a Filter's Definition"),(0,a.kt)("p",null,"This workflow sample demonstrates how to retrieve the definition of a filter through the Modeling service."),(0,a.kt)("p",null,'You want to get the definition of the "Year > 2015" filter object. The object ID of the filter is ',(0,a.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1")," in the MicroStrategy Tutorial project. The project ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},(0,a.kt)("inlineCode",{parentName:"a"},"POST /api/auth/login")),"."),(0,a.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},(0,a.kt)("inlineCode",{parentName:"a"},"GET /api/projects")),".")),(0,a.kt)("p",null,"Retrieve the filter's definition using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-getFilterDetails"},"/api/model/filters/{FilterId}"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/filters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view the filter's definition in the body of the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-17T16:42:39.776Z",\n    "dateModified": "2020-11-17T16:42:57.268Z",\n    "versionId": "F253FD1211EB28F32AE10080EFC56102",\n    "primaryLocale": "en-US",\n    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",\n    "subType": "filter",\n    "name": "Year > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "62EE53C755F64508BAEE99989E9EACCC",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (The filter's definition was returned successfully.)"),(0,a.kt)("h2",{id:"retrieve-a-filters-definition-in-tokens-format"},"Retrieve a Filter's Definition in Tokens Format"),(0,a.kt)("p",null,'In this workflow sample, you want to get the definition of the "Year < 2015" filter object. The object ID of the filter is ',(0,a.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1"),". Unlike the first workflow, we want to enable the showFilterTokens parameter to retrieve the filter's definition in tokens format as well."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a filter expression is "Revenue > Cost". When the filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).'),(0,a.kt)("p",{parentName:"admonition"},'A filter\'s "qualification" is presented in the following formats:'),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'"text": A human-readable, but non-parsable text, describing a filter\'s qualification.'),(0,a.kt)("li",{parentName:"ul"},'"tree": A tree data structure fully defining the filter\'s qualification.'),(0,a.kt)("li",{parentName:"ul"},'"tokens": A list of parsed tokens that define a filter\'s qualification. Be aware that generating tokens requires additional time.')),(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"showFilterTokens")," is omitted or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),', only "text" and "tree" formats are returned.'),(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"showFilterTokens")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),', all "text", "tree" and "tokens" formats are returned.')),(0,a.kt)("p",null,"This workflow sample is similar to ",(0,a.kt)("a",{parentName:"p",href:"./"},"Workflow Samples: Retrieve a Filter's Definition"),", except with ",(0,a.kt)("inlineCode",{parentName:"p"},"showFilterTokens=true"),"."),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/filters/5B64A6A6E5B1466497D9D4D35328D91B?showFilterTokens=true" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body: You can view the filter\u2019s definition in the body of the response. If you compare this to ",(0,a.kt)("a",{parentName:"p",href:"#retrieve-a-filters-definition"},"Workflow Samples: Retrieve a Filter's Definition"),', "qualification" has an extra field of "tokens".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-30T12:56:01.400Z",\n    "dateModified": "2020-11-30T12:56:01.400Z",\n    "versionId": "6602277211EB330B01430080EF051B59",\n    "primaryLocale": "en-US",\n    "objectId": "5B64A6A6E5B1466497D9D4D35328D91B",\n    "subType": "filter",\n    "name": "Year > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "A0D326D440304DC4B07F12DA6631447F",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year@ID",\n        "type": "object_at_form",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2012-01-27T12:00:32.000Z",\n          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "attributeForm": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2018-01-29T21:13:06.000Z",\n          "versionId": "332E00E411E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C317DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": ">",\n          "description": "Returns TRUE if the first value is greater than the second value."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "2015.0",\n        "type": "integer"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h2",{id:"retrieve-a-filters-definition-with-custom-expressions-in-tree-and-tokens-formats"},"Retrieve a Filter's Definition with Custom Expressions in Tree and Tokens Formats"),(0,a.kt)("p",null,'In this workflow sample, you want to get the definition of a filter that contains the custom expression, "Year@ID > 2015", with the expression returned in tree and tokens formats. The object ID of the filter is ',(0,a.kt)("inlineCode",{parentName:"p"},"B4B9AE1411EB3309268D0080EFE5DA56"),". The following is a screenshot of what the filter looks like in the Filter editor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"filter_editor",src:n(5383).Z,width:"1993",height:"1524"})),(0,a.kt)("p",null,"If custom expressions are used in a filter, this parameter specifies the format in which they are returned in the response."),(0,a.kt)("p",null,"Custom expressions are presented in the following formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"text": A human-readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.'),(0,a.kt)("li",{parentName:"ul"},'"tree": A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.'),(0,a.kt)("li",{parentName:"ul"},'"tokens": A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Be aware that generating tokens requires additional time.')),(0,a.kt)("p",null,'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a filter expression is "Revenue > Cost". When the filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).'),(0,a.kt)("p",null,'If omitted, the custom expression is returned in "text" format.'),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"tree"),', the custom expression is returned in "text" and "tree" format.'),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"tokens"),', the custom expression is returned in "text" and "tokens" format.'),(0,a.kt)("p",null,"This workflow is similar to ",(0,a.kt)("a",{parentName:"p",href:"#retrieve-a-filters-definition"},"Retrieve a Filter's Definition"),", except with ",(0,a.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/filters/B4B9AE1411EB3309268D0080EFE5DA56?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body: You can view the filter\u2019s definition in the body of the response. Notice that, ",(0,a.kt)("inlineCode",{parentName:"p"},"['qualification']['tree']['PredicateTree']['expression']"),' contains the fields "tree" and "tokens", representing the customer expression in ',(0,a.kt)("inlineCode",{parentName:"p"},"tree")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tokens")," format respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-30T12:56:18.228Z",\n    "dateModified": "2020-11-30T19:36:32.103Z",\n    "versionId": "596C793011EB334357FA0080EF7579B5",\n    "primaryLocale": "en-US",\n    "objectId": "B4B9AE1411EB3309268D0080EFE5DA56",\n    "subType": "filter",\n    "name": "Year@ID > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_custom",\n      "predicateId": "A6CBA8F104FD4194B4727AE74DE8F721",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "expression": {\n          "text": "Year (ID) > 2015",\n          "tree": {\n            "function": "greater",\n            "children": [\n              {\n                "attribute": {\n                  "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Year"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                },\n                "type": "form_shortcut"\n              },\n              {\n                "type": "constant",\n                "variant": {\n                  "type": "int32",\n                  "value": "2015"\n                }\n              }\n            ],\n            "levelType": "metric_level",\n            "type": "operator"\n          },\n          "tokens": [\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "%",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year@ID",\n              "type": "object_at_form",\n              "target": {\n                "dateCreated": "2001-01-02T20:48:10.000Z",\n                "dateModified": "2012-01-27T12:00:32.000Z",\n                "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                "primaryLocale": "en-US",\n                "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Year"\n              },\n              "attributeForm": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ">",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:41.000Z",\n                "dateModified": "2018-01-29T21:13:06.000Z",\n                "versionId": "332E00E411E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C317DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": ">",\n                "description": "Returns TRUE if the first value is greater than the second value."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "2015",\n              "type": "integer"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "",\n              "type": "end_of_text"\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Sample Response Code: 200 (Filter's definition is returned successfully.)"),(0,a.kt)("h2",{id:"retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats"},"Retrieve a Filter's Definition That Contains Inline Custom Expressions, with the Expression in Tree and Tokens Formats"),(0,a.kt)("p",null,"In this workflow sample, you want to get the definition of a filter that contains an inline custom expression, with the expression returned in tree and tokens format. The object ID of the filter is ",(0,a.kt)("inlineCode",{parentName:"p"},"B488A1B711EB330926FF0080EFB57956"),". The following is a screenshot of what the filter looks like in the Filter editor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"filter_editor_custom_expressions",src:n(8752).Z,width:"1231",height:"938"})),(0,a.kt)("p",null,"Get filter\u2019s definition with its inline custom expression in tree and tokens format."),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/filters/B488A1B711EB330926FF0080EFB57956?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body: You can view the filter\u2019s definition in the body of the response. Notice that, ",(0,a.kt)("inlineCode",{parentName:"p"},"['qualification']['tree']['PredicateTree']['expression']"),' contains the fields "tree" and "tokens", representing the customer expression in ',(0,a.kt)("inlineCode",{parentName:"p"},"tree")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tokens")," format respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-30T12:56:40.479Z",\n    "dateModified": "2020-11-30T19:36:49.829Z",\n    "versionId": "63FD317811EB334357BA0080EF5539B5",\n    "primaryLocale": "en-US",\n    "objectId": "B488A1B711EB330926FF0080EFB57956",\n    "subType": "filter",\n    "name": "Year > Current Year - 5"\n  },\n  "qualification": {\n    "text": "Year (ID) > (Year(CurrentDate) - 5)",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "C7ACD6179CC44F219A663E95D236583F",\n      "predicateText": "Year (ID) > (Year(CurrentDate) - 5)",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "expression",\n            "expression": {\n              "text": "(Year(CurrentDate) - 5)",\n              "tree": {\n                "function": "minus",\n                "children": [\n                  {\n                    "function": "year",\n                    "children": [\n                      {\n                        "function": "current_date",\n                        "type": "operator"\n                      }\n                    ],\n                    "type": "operator"\n                  },\n                  {\n                    "type": "constant",\n                    "variant": {\n                      "type": "int32",\n                      "value": "5"\n                    }\n                  }\n                ],\n                "type": "operator"\n              },\n              "tokens": [\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "Year",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:55.000Z",\n                    "dateModified": "2018-01-29T21:13:05.000Z",\n                    "versionId": "32737F3011E8053925F00080EF7500C5",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "Year",\n                    "description": "Returns the year of the input date."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "CurrentDate",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:54.000Z",\n                    "dateModified": "2018-01-29T21:13:05.000Z",\n                    "versionId": "32363DBE11E8053925F00080EF7500C5",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "CurrentDate",\n                    "description": "Returns the current date based on the database timer. This function takes no input parameters."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "-",\n                  "type": "character",\n                  "target": {\n                    "dateCreated": "2001-01-02T20:47:41.000Z",\n                    "dateModified": "2018-01-29T21:13:06.000Z",\n                    "versionId": "330711DC11E8053925F00080EF7500C5",\n                    "primaryLocale": "en-US",\n                    "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                    "subType": "function",\n                    "name": "-",\n                    "description": "Returns the difference between two values."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "5",\n                  "type": "integer"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                }\n              ]\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0},5383:function(e,t,n){t.Z=n.p+"assets/images/filter_editor-5b97eb7c86e2934a607947ca9d19ca98.png"},8752:function(e,t,n){t.Z=n.p+"assets/images/filter_editor_custom_expressions-e326cd8d8179ef8e0b5a7fd731f9a22b.png"}}]);