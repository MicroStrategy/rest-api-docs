"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9688],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,E=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(E,o(o({ref:t},d),{},{components:n})):a.createElement(E,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50684:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var a,i=n(83117),r=n(80102),o=(n(67294),n(3905)),s=["components"],p={title:"Retrieve an attribute's definition",sidebar_label:"Retrieve an attribute's definition",description:"This workflow sample demonstrates how to retrieve the definition of an attribute through the Modeling service."},l=void 0,d={unversionedId:"common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition",id:"common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition",title:"Retrieve an attribute's definition",description:"This workflow sample demonstrates how to retrieve the definition of an attribute through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition.md",sourceDirName:"common-workflows/modeling/manage-attribute-objects",slug:"/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1685725225,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Retrieve an attribute's definition",sidebar_label:"Retrieve an attribute's definition",description:"This workflow sample demonstrates how to retrieve the definition of an attribute through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage attribute objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/"},next:{title:"Retrieve an attribute's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset"}},c={},u=[{value:"Retrieve an attribute&#39;s definition",id:"retrieve-an-attributes-definition",level:2},{value:"Retrieve an attribute&#39;s definition with expressions in tree and tokens formats",id:"retrieve-an-attributes-definition-with-expressions-in-tree-and-tokens-formats",level:2}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),E={toc:u};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{since:"2021 Update 1",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-9a89680f-6695-47d0-b939-4cb8dee003dd?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("h2",{id:"retrieve-an-attributes-definition"},"Retrieve an attribute's definition"),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve the definition of an attribute through the Modeling service."),(0,o.kt)("p",null,"You want to get the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Subcategory"')," attribute object. The object ID of the attribute is ",(0,o.kt)("inlineCode",{parentName:"p"},"E8C034036E4EE6404513A6B12FAE9481")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Retrieve the attribute's definition using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-getAttributeDetails"},"GET /api/model/attributes/{attributeId}"),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "73a5d2gggbqgftu9objmup6868"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/E8C034036E4EE6404513A6B12FAE9481" -H "accept: application/json" -H "X-MSTR-AuthToken: 73a5d2gggbqgftu9objmup6868" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the attribute's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-03-23T01:17:19.659Z",\n    "dateModified": "2021-03-23T01:17:19.659Z",\n    "versionId": "8B73775A1C4D575C9761D0B21C4E8269",\n    "primaryLocale": "en-US",\n    "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n    "subType": "attribute",\n    "name": "Subcategory"\n  },\n  "forms": [\n    {\n      "id": "45C11FA478E745FEA08D781CEA190FE5",\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "type": "system",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 2,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "8D679F6FE49811D387E70010A4E86DEC",\n          "expression": {\n            "text": "SUBCAT_ID"\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "type": "system",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 50,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "8D679F71E49811D387E70010A4E86DEC",\n          "expression": {\n            "text": "SUBCAT_DESC"\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "id": "45C11FA478E745FEA08D781CEA190FE5",\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {},\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "child": {\n        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Item"\n      },\n      "relationshipTable": {\n        "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_ITEM"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Category"\n      },\n      "child": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "relationshipTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The attribute's definition was returned successfully.)"),(0,o.kt)("h2",{id:"retrieve-an-attributes-definition-with-expressions-in-tree-and-tokens-formats"},"Retrieve an attribute's definition with expressions in tree and tokens formats"),(0,o.kt)("p",null,'In this workflow sample, you want to get the definition of the "',(0,o.kt)("inlineCode",{parentName:"p"},"Subcategory"),"\u201c attribute object, with the expression returned in tree and tokens formats. The object ID of the attribute is ",(0,o.kt)("inlineCode",{parentName:"p"},"E8C034036E4EE6404513A6B12FAE9481")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Expressions are presented in the following formats:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'"text": A human-readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'"tree": A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'"tokens": A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Be aware that generating tokens requires additional time.'),(0,o.kt)("p",{parentName:"li"},'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).'))),(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs"),' is omitted, the expression is returned in "text" format.'),(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"tree"),', the expression is returned in "text" and "tree" formats.'),(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens"),', the expression is returned in "text" and "tokens" formats.')),(0,o.kt)("p",null,"This workflow sample is similar to ",(0,o.kt)("a",{parentName:"p",href:"#retrieve-an-attributes-definition"},"Retrieve an attribute's definition"),", except with ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/E8C034036E4EE6404513A6B12FAE9481?showExpressionAs=tree&showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken: 73a5d2gggbqgftu9objmup6868" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the attribute\u2019s definition in the body of the response. Notice that, each attribute form's expression contains the fields \u201ctree\u201c and \u201ctokens\u201c, representing the customer expression in ",(0,o.kt)("inlineCode",{parentName:"p"},"tree")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," format respectively."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-03-23T01:17:19.659Z",\n    "dateModified": "2021-03-23T01:17:19.659Z",\n    "versionId": "8B73775A1C4D575C9761D0B21C4E8269",\n    "primaryLocale": "en-US",\n    "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n    "subType": "attribute",\n    "name": "Subcategory"\n  },\n  "forms": [\n    {\n      "id": "45C11FA478E745FEA08D781CEA190FE5",\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "type": "system",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 2,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "8D679F6FE49811D387E70010A4E86DEC",\n          "expression": {\n            "text": "SUBCAT_ID",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_ID",\n              "objectId": "8D67921711D3E4981000E787EC6DE8A4"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "SUBCAT_ID",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-01-02T20:48:47.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8D67921711D3E4981000E787EC6DE8A4",\n                  "subType": "column",\n                  "name": "SUBCAT_ID"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "type": "system",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 50,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "8D679F71E49811D387E70010A4E86DEC",\n          "expression": {\n            "text": "SUBCAT_DESC",\n            "tree": {\n              "type": "column_reference",\n              "dependenceType": "independent",\n              "columnName": "SUBCAT_DESC",\n              "objectId": "8D67928711D3E4981000E787EC6DE8A4"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "SUBCAT_DESC",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-01-02T20:48:34.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8D67928711D3E4981000E787EC6DE8A4",\n                  "subType": "column",\n                  "name": "SUBCAT_DESC"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "id": "45C11FA478E745FEA08D781CEA190FE5",\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {},\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "child": {\n        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Item"\n      },\n      "relationshipTable": {\n        "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_ITEM"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Category"\n      },\n      "child": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "relationshipTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')))}b.isMDXComponent=!0}}]);