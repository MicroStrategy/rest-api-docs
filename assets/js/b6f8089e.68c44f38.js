"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6367],{26890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(74848),n=a(28453);const r={title:"Update a prompt of an SAP HANA table with input parameters",sidebar_label:"Update a prompt of an SAP HANA table",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},s=void 0,i={id:"common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table",title:"Update a prompt of an SAP HANA table with input parameters",description:"You can use REST APIs to update a prompt of a table through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Update a prompt of an SAP HANA table with input parameters",sidebar_label:"Update a prompt of an SAP HANA table",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a prompt of an SAP HANA table",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table"},next:{title:"Update SAP HANA parameters",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters"}},p={},l=[{value:"Workflow",id:"workflow",level:2},{value:"Update a table prompt with PUT /api/model/tables/{tableId}/prompts/{promptId}",id:"update-a-table-prompt-with-put-apimodeltablestableidpromptspromptid",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components},{Available:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{since:"2021 Update 6"}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.p,{children:["You can try out this workflow at ",(0,o.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-e3e4974a-dc93-4f79-9ea6-259a1693dc0d?ctx=documentation",children:"REST API Playground"}),"."]}),(0,o.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,o.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,o.jsx)(t.p,{children:"Starting in MicroStrategy 2021 Update 6, you can use REST APIs to update a prompt of a table through the Modeling service."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["This workflow applies only to SAP HANA tables with input parameters because only these tables have prompts, and one input parameters corresponds to one prompt. For more information, see ",(0,o.jsx)(t.a,{href:"https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US",children:"KB48437: Support for SAP HANA calculation views with input parameters"}),"."]})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["You should at least have ",(0,o.jsx)(t.strong,{children:"read access"})," to the table to successfully complete this workflow. If the prompt you want to update is a managed object, ",(0,o.jsx)(t.strong,{children:"write access"})," to the table is also required. The managed prompts of an SAP HANA table with input parameters are automatically created by MicroStrategy by default. However, you can choose to replace these managed prompts with standalone ones by following the steps in ",(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters",children:"Update SAP HANA parameters for an SAP HANA table with input parameters"}),". For more information on managed objects, see ",(0,o.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/2021/MDXCubeReporting/WebHelp/Lang_1033/Content/About_managed_objects.htm",children:"About Managed Objects"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["You want to update the prompt of a table. The object ID of the table is ",(0,o.jsx)(t.code,{children:"84AF2517E662417D9924FD678B44591A"}),". The table is in the MicroStrategy Tutorial Advanced project and its ID is ",(0,o.jsx)(t.code,{children:"6AB8DFFE4B99B7F6FB0E94AD176C4A28"}),". The object ID of the current prompt is ",(0,o.jsx)(t.code,{children:"339585B03F354D11AE8760C4489160F1"})," and you want to update fields of the prompt, for example, the name and default answers."]}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"schemaEdit"})," is required to be ",(0,o.jsx)(t.code,{children:"true"})," if this changeset ID is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions)."]})]}),"\n",(0,o.jsx)(t.h2,{id:"workflow",children:"Workflow"}),"\n",(0,o.jsxs)(t.h3,{id:"update-a-table-prompt-with-put-apimodeltablestableidpromptspromptid",children:["Update a table prompt with ",(0,o.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-putTablePrompt",children:"PUT /api/model/tables/{tableId}/prompts/{promptId}"})]}),"\n",(0,o.jsx)(t.p,{children:"The prompt you are updating must already be in the prompt list of the current table."}),"\n",(0,o.jsxs)(t.p,{children:["You must use ",(0,o.jsx)(t.code,{children:"GET /api/model/tables/{tableId}"})," and check the ",(0,o.jsx)(t.code,{children:"sapHanaParameters"})," field to view the list of existing prompts."]}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"\n"X-MSTR-MS-Changeset": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "prompt_string",\n    "name": "newName",\n    "description": "a new prompt definition"\n  },\n  "title": "a new static list",\n  "instruction": "a new static list",\n  "defaultAnswer": {\n    "value": "111,222"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'curl -X PUT "http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1" \\\n-H "X-MSTR-MS-Changeset: 6AB8DFFE4B99B7F6FB0E94AD176C4A28" \\\n-H "Content-Type: application/json" \\\n-H "X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05" \\\n-H "Cookie: JSESSIONID=3374D7CF489BEAC87C495CE5BB0BD7ED; iSession=62i31bvfoctesonlukpo8r83th" \\\n--data-raw \'{"information": {"subType": "prompt_string", "name": "newName", "description": "a new prompt definition"}, "title": "a new static list", "instruction": "a new static list", "defaultAnswer": {"value": "111,222"}, "restriction": {"required": true, "allowPersonalAnswers": "none"}}\'\n'})}),"\n",(0,o.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,o.jsx)(t.p,{children:"You can view the new prompt definition in the body of the response."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-04-19T06:25:44.000Z",\n    "dateModified": "2022-06-08T09:29:08.875Z",\n    "versionId": "5821E67A4847D914ABA627BB4F9DBB08",\n    "primaryLocale": "en-US",\n    "objectId": "339585B03F354D11AE8760C4489160F1",\n    "subType": "prompt_string",\n    "name": "newName",\n    "description": "a new prompt definition"\n  },\n  "title": "a new static list",\n  "instruction": "a new static list",\n  "defaultAnswer": {\n    "value": "111,222"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Response Code: 201 (The prompt of the table is updated successfully in the changeset.)"})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var o=a(96540);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);