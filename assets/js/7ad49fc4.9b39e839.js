"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1507],{40166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(74848),r=n(28453);const o={title:"Get attribute along with its advanced properties",sidebar_label:"Get attribute definition and advanced properties",description:"Get attribute definition and advanced properties."},i=void 0,s={id:"common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties",title:"Get attribute along with its advanced properties",description:"Get attribute definition and advanced properties.",source:"@site/docs/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties.md",sourceDirName:"common-workflows/modeling/manage-attribute-objects",slug:"/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Get attribute along with its advanced properties",sidebar_label:"Get attribute definition and advanced properties",description:"Get attribute definition and advanced properties."},sidebar:"tutorialSidebar",previous:{title:"Get applicable properties for an attribute",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/get-attribute-applicable-advanced-properties"},next:{title:"Modify value of an advanced property of the attribute",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/update-attribute-advanced-property"}},d={},c=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{since:"2021 Update 9"}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["You can try this workflow at ",(0,a.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-df3dd3da-b225-4637-93dd-c41579ce1074?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(t.p,{children:"This workflow sample demonstrates how to retrieve an attribute's definition and its advanced properties."}),"\n",(0,a.jsxs)(t.p,{children:["To get the advanced properties of the ",(0,a.jsx)(t.code,{children:"Age Range"})," attribute, the object ID is ",(0,a.jsx)(t.code,{children:"5603951E4FE1BC04A44E44B85BBB8ED2"}),"."]}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.p,{children:["Get the authorization token to execute the request with ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(t.p,{children:["Get the project ID with ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsxs)(t.p,{children:["Retrieve the advanced properties with ",(0,a.jsx)(t.code,{children:"GET /api/model/attributes/{attributeId}?showAdvancedProperties=true"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"showAdvancedProperty=true"})," query parameter is mandatory for the API to return the list of advanced properties. When ",(0,a.jsx)(t.code,{children:'"showAdvancedProperty"'})," query parameter is not provided or is set to ",(0,a.jsx)(t.code,{children:'"false"'}),", the list of advanced property won't be included in the API response."]}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "5u349u1en5igufluj1tfbp71t0"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,a.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/5603951E4FE1BC04A44E44B85BBB8ED2?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: 5u349u1en5igufluj1tfbp71t0" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(t.p,{children:"You can see the attribute and its advanced properties in the response."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2006-11-30T23:59:56.000Z",\n    "dateModified": "2023-02-06T11:49:40.206Z",\n    "versionId": "5574CA56624FE746076270BDA248A420",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n    "subType": "attribute",\n    "name": "Age Range"\n  },\n  "forms": [\n    {\n      "id": "45C11FA478E745FEA08D781CEA190FE5",\n      "name": "ID",\n      "category": "ID",\n      "type": "system",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 4,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "A8E63C9AC5D848CC9686C59078FB0BD0",\n          "expression": {\n            "text": "agerange_id"\n          },\n          "tables": [\n            {\n              "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n              "subType": "logical_table",\n              "name": "LU_AGERANGE"\n            },\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "agerange_id",\n      "lookupTable": {\n        "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n        "subType": "logical_table",\n        "name": "LU_AGERANGE"\n      }\n    },\n    {\n      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n      "name": "DESC",\n      "category": "DESC",\n      "type": "system",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "dataType": {\n        "type": "fixed_length_string",\n        "precision": 20,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "D4DB40D9A6FF4643974271E72C92CB4F",\n          "expression": {\n            "text": "agerange_desc"\n          },\n          "tables": [\n            {\n              "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n              "subType": "logical_table",\n              "name": "LU_AGERANGE"\n            }\n          ]\n        }\n      ],\n      "alias": "agerange_desc",\n      "lookupTable": {\n        "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n        "subType": "logical_table",\n        "name": "LU_AGERANGE"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n    "subType": "logical_table",\n    "name": "LU_AGERANGE"\n  },\n  "keyForm": {\n    "id": "45C11FA478E745FEA08D781CEA190FE5",\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {},\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n        "subType": "attribute",\n        "name": "Age Range"\n      },\n      "child": {\n        "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Customer"\n      },\n      "relationshipTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ],\n  "advancedProperties": {\n    "vldbProperties": {\n      "[VLDB Create].[Attribute ID Constraint]": {\n        "name": "Attribute ID Constraint",\n        "type": "string",\n        "value": "",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Do Case Insensitive Comparison for Strings in Filters]": {\n        "name": "Do Case Insensitive Comparison for Strings in Filters",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Incomplete Lookup Table]": {\n        "name": "Incomplete Lookup Table",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[No Nulls All In Lookup In Attribute For Cube Reuse]": {\n        "name": "No Nulls All In Lookup In Attribute For Cube Reuse",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Response Code: 200 (The attribute's definition and its advanced properties were returned successfully.)"})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);