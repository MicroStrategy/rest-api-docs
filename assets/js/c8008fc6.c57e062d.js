"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9747],{43947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(74848),a=n(28453);const s={title:"Retrieve an attribute's relationships within a changeset",sidebar_label:"Retrieve an attribute's relationships within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset."},r=void 0,o={id:"common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",title:"Retrieve an attribute's relationships within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset.",source:"@site/docs/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-attribute-relationships",slug:"/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve an attribute's relationships within a changeset",sidebar_label:"Retrieve an attribute's relationships within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an attribute's relationships",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships"},next:{title:"Update an attribute's relationships",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-relationships/update-an-attributes-relationships"}},h={},c=[{value:"Get an attribute&#39;s relationships within a changeset",id:"get-an-attributes-relationships-within-a-changeset",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{since:"2021 Update 1"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["You can try out this workflow at ",(0,i.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-8b42c446-de96-4899-b3c1-005f25702596?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create a changeset."}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#get-an-attributes-relationships-within-a-changeset",children:"Get an attribute's relationships within a changeset."})}),"\n",(0,i.jsx)(t.li,{children:"Delete the changeset."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You want to get the relationships of the ",(0,i.jsx)(t.code,{children:'"Month"'})," attribute object. The object ID of the attribute is ",(0,i.jsx)(t.code,{children:"8D679D4411D3E4981000E787EC6DE8A4"})," in the MicroStrategy Tutorial project. The project ID is ",(0,i.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(t.p,{children:["Get the project ID from ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsx)(t.h2,{id:"get-an-attributes-relationships-within-a-changeset",children:"Get an attribute's relationships within a changeset"}),"\n",(0,i.jsxs)(t.p,{children:["Use [GET /api/model/systemHierarchy/attributes/{attributeId}/relationships](",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System",children:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System"})," Hierarchy/ms-getAttributeRelationships)."]}),"\n",(0,i.jsxs)(t.p,{children:["You want to get the relationship of the ",(0,i.jsx)(t.code,{children:'"Month"'})," attribute object. The object ID of the attribute is ",(0,i.jsx)(t.code,{children:"8D679D4411D3E4981000E787EC6DE8A4"})," in the MicroStrategy Tutorial project. The project ID is ",(0,i.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-MS-Changeset": "FA282B2D8EFD4327A652FE09B32A439D"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/systemHierarchy/attributes/8D679D4411D3E4981000E787EC6DE8A4/relationships" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-MS-Changeset: FA282B2D8EFD4327A652FE09B32A439D"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:"You can view the attribute's relationship in the body of the response."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "relationshipTable": {\n        "objectId": "8D67938011D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_MONTH"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "relationshipTable": {\n        "objectId": "8D67938011D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_MONTH"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "child": {\n        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n        "subType": "attribute",\n        "name": "Day"\n      },\n      "relationshipTable": {\n        "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n        "subType": "logical_table",\n        "name": "LU_DAY"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Response Code: 200 (The attribute's relationships are returned successfully.)"})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);