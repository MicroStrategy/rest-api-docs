"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[67],{27732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(74848),a=n(28453);const o={title:"Retrieve an attribute's definition within a changeset",sidebar_label:"Retrieve an attribute's definition within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's definition within a changeset."},s=void 0,r={id:"common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset",title:"Retrieve an attribute's definition within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's definition within a changeset.",source:"@site/docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-attribute-objects",slug:"/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve an attribute's definition within a changeset",sidebar_label:"Retrieve an attribute's definition within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's definition within a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an attribute's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition"},next:{title:"Create an attribute object",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object"}},c={},d=[{value:"Get an attribute&#39;s definition within a changeset",id:"get-an-attributes-definition-within-a-changeset",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{since:"2021 Update 1"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["You can try out this workflow at ",(0,i.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5038d0d2-f112-47fc-b602-e01c58fd8aec?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"This workflow sample demonstrates how to retrieve an attribute's definition within a changeset."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:['You want to get the definition of the "Subcategory" attribute object. The object ID of the attribute is ',(0,i.jsx)(t.code,{children:"E8C034036E4EE6404513A6B12FAE9481"})," in the MicroStrategy Tutorial project. The project ID is ",(0,i.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(t.p,{children:["Get the project ID from ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsx)(t.h2,{id:"get-an-attributes-definition-within-a-changeset",children:"Get an attribute's definition within a changeset"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-getAttributeDetails",children:"GET /api/model/attributes/{attributeId}."})]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-MS-Changeset": "FA282B2D8EFD4327A652FE09B32A439D"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/E8C034036E4EE6404513A6B12FAE9481" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-MS-Changeset: FA282B2D8EFD4327A652FE09B32A439D"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:"You can view the attribute's definition in the body of the response."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2021-03-23T01:17:19.659Z",\n    "dateModified": "2021-03-23T01:17:19.659Z",\n    "versionId": "8B73775A1C4D575C9761D0B21C4E8269",\n    "primaryLocale": "en-US",\n    "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n    "subType": "attribute",\n    "name": "Subcategory"\n  },\n  "forms": [\n    {\n      "id": "45C11FA478E745FEA08D781CEA190FE5",\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "type": "system",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 2,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "8D679F6FE49811D387E70010A4E86DEC",\n          "expression": {\n            "text": "SUBCAT_ID"\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "type": "system",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 50,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "8D679F71E49811D387E70010A4E86DEC",\n          "expression": {\n            "text": "SUBCAT_DESC"\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "id": "45C11FA478E745FEA08D781CEA190FE5",\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {},\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "child": {\n        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Item"\n      },\n      "relationshipTable": {\n        "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_ITEM"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Category"\n      },\n      "child": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "relationshipTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Response Code: 200 (The attribute's definition is returned successfully.)"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);