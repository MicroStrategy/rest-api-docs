"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3729],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(a),u=o,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(f,p(p({ref:t},m),{},{components:a})):n.createElement(f,p({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<r;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85662:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var n,o=a(83117),r=a(80102),p=(a(67294),a(3905)),i=["components"],s={title:"Update a prompt of an SAP HANA table with input parameters",sidebar_label:"Update a prompt of an SAP HANA table",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},l=void 0,m={unversionedId:"common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table",id:"common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table",title:"Update a prompt of an SAP HANA table with input parameters",description:"You can use REST APIs to update a prompt of a table through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Update a prompt of an SAP HANA table with input parameters",sidebar_label:"Update a prompt of an SAP HANA table",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a prompt of an SAP HANA table",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table"},next:{title:"Update SAP HANA parameters",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters"}},c={},d=[{value:"Workflow",id:"workflow",level:2},{value:"Update a table prompt with PUT /api/model/tables/{tableId}/prompts/{promptId}",id:"update-a-table-prompt-with-put-apimodeltablestableidpromptspromptid",level:3}],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),f={toc:d};function b(e){var t=e.components,a=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)(u,{since:"2021 Update 6",mdxType:"Available"}),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,p.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-e3e4974a-dc93-4f79-9ea6-259a1693dc0d?ctx=documentation"},"REST API Playground"),"."),(0,p.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,p.kt)("p",null,"Starting in MicroStrategy 2021 Update 6, you can use REST APIs to update a prompt of a table through the Modeling service."),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"This workflow applies only to SAP HANA tables with input parameters because only these tables have prompts, and one input parameters corresponds to one prompt. For more information, see ",(0,p.kt)("a",{parentName:"p",href:"https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US"},"KB48437: Support for SAP HANA calculation views with input parameters"),".")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"You should at least have ",(0,p.kt)("strong",{parentName:"p"},"read access")," to the table to successfully complete this workflow. If the prompt you want to update is a managed object, ",(0,p.kt)("strong",{parentName:"p"},"write access")," to the table is also required. The managed prompts of an SAP HANA table with input parameters are automatically created by MicroStrategy by default. However, you can choose to replace these managed prompts with standalone ones by following the steps in ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters"},"Update SAP HANA parameters for an SAP HANA table with input parameters"),". For more information on managed objects, see ",(0,p.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/MDXCubeReporting/WebHelp/Lang_1033/Content/About_managed_objects.htm"},"About Managed Objects"),".")),(0,p.kt)("p",null,"You want to update the prompt of a table. The object ID of the table is ",(0,p.kt)("inlineCode",{parentName:"p"},"84AF2517E662417D9924FD678B44591A"),". The table is in the MicroStrategy Tutorial Advanced project and its ID is ",(0,p.kt)("inlineCode",{parentName:"p"},"6AB8DFFE4B99B7F6FB0E94AD176C4A28"),". The object ID of the current prompt is ",(0,p.kt)("inlineCode",{parentName:"p"},"339585B03F354D11AE8760C4489160F1")," and you want to update fields of the prompt, for example, the name and default answers."),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),"."),(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("inlineCode",{parentName:"p"},"schemaEdit")," is required to be ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," if this changeset ID is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions).")),(0,p.kt)("h2",{id:"workflow"},"Workflow"),(0,p.kt)("h3",{id:"update-a-table-prompt-with-put-apimodeltablestableidpromptspromptid"},"Update a table prompt with ",(0,p.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-putTablePrompt"},"PUT /api/model/tables/{tableId}/prompts/{promptId}")),(0,p.kt)("p",null,"The prompt you are updating must already be in the prompt list of the current table."),(0,p.kt)("p",null,"You must use ",(0,p.kt)("inlineCode",{parentName:"p"},"GET /api/model/tables/{tableId}")," and check the ",(0,p.kt)("inlineCode",{parentName:"p"},"sapHanaParameters")," field to view the list of existing prompts."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"\n"X-MSTR-MS-Changeset": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n')),(0,p.kt)("p",null,"Sample Request Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "prompt_string",\n    "name": "newName",\n    "description": "a new prompt definition"\n  },\n  "title": "a new static list",\n  "instruction": "a new static list",\n  "defaultAnswer": {\n    "value": "111,222"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n')),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1" \\\n-H "X-MSTR-MS-Changeset: 6AB8DFFE4B99B7F6FB0E94AD176C4A28" \\\n-H "Content-Type: application/json" \\\n-H "X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05" \\\n-H "Cookie: JSESSIONID=3374D7CF489BEAC87C495CE5BB0BD7ED; iSession=62i31bvfoctesonlukpo8r83th" \\\n--data-raw \'{"information": {"subType": "prompt_string", "name": "newName", "description": "a new prompt definition"}, "title": "a new static list", "instruction": "a new static list", "defaultAnswer": {"value": "111,222"}, "restriction": {"required": true, "allowPersonalAnswers": "none"}}\'\n')),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("p",null,"You can view the new prompt definition in the body of the response."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-04-19T06:25:44.000Z",\n    "dateModified": "2022-06-08T09:29:08.875Z",\n    "versionId": "5821E67A4847D914ABA627BB4F9DBB08",\n    "primaryLocale": "en-US",\n    "objectId": "339585B03F354D11AE8760C4489160F1",\n    "subType": "prompt_string",\n    "name": "newName",\n    "description": "a new prompt definition"\n  },\n  "title": "a new static list",\n  "instruction": "a new static list",\n  "defaultAnswer": {\n    "value": "111,222"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n')),(0,p.kt)("p",null,"Response Code: 201 (The prompt of the table is updated successfully in the changeset.)"))}b.isMDXComponent=!0}}]);