"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2108],{86464:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=o(74848),s=o(28453);const i={title:"Manage subtotal objects",description:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation."},a=void 0,r={id:"common-workflows/modeling/manage-subtotal-objects/manage-subtotal-objects",title:"Manage subtotal objects",description:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation.",source:"@site/docs/common-workflows/modeling/manage-subtotal-objects/manage-subtotal-objects.md",sourceDirName:"common-workflows/modeling/manage-subtotal-objects",slug:"/common-workflows/modeling/manage-subtotal-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-subtotal-objects/manage-subtotal-objects.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Manage subtotal objects",description:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation."},sidebar:"tutorialSidebar",previous:{title:"Modify a security filter's member",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member"},next:{title:"Retrieve a subtotal's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition"}},l={},c=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Available:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{since:"2021 Update 5"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You can try these workflows with ",(0,n.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0e8e2533-03d6-4235-8aa0-6aef1cc2e723?ctx=documentation",children:"REST API Playground"}),"."]}),(0,n.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,n.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,n.jsx)(t.p,{children:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation."}),"\n",(0,n.jsx)(t.p,{children:"You can use REST\u202fAPI requests retrieve, create, and update the subtotal objects through the Modeling service:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition",children:"Retrieve a Subtotal's Definition"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",children:"Retrieve a Subtotal's Definition within a Changeset"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/create-a-subtotal-within-a-changeset",children:"Create a Subtotal within a Changeset"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/update-a-subtotal-within-a-changeset",children:"Update a Subtotal within a Changeset"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"There are three important fields in the API response body defined for a subtotal:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"information"}),": Stores the basic subtotal information include ",(0,n.jsx)(t.code,{children:"dateCreated"}),", ",(0,n.jsx)(t.code,{children:"dateModified"}),", ",(0,n.jsx)(t.code,{children:"versionId"}),", ",(0,n.jsx)(t.code,{children:"primaryLocale"}),", ",(0,n.jsx)(t.code,{children:"objectId"}),",",(0,n.jsx)(t.code,{children:"subType"}),", and ",(0,n.jsx)(t.code,{children:"name"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For a subtotal, ",(0,n.jsx)(t.code,{children:"subType"})," is ",(0,n.jsx)(t.code,{children:"metric_subtotal"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"expression"}),": Stores the aggregation types and targets defined in the subtotal either using single-value functions or group-value functions."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["\u2139\ufe0f"," ",(0,n.jsx)(t.strong,{children:"Info"})]}),(0,n.jsx)(t.p,{children:"Tokens are a semi-structured representation of a MicroStrategy expression text that includes object references. When the subtotal\u2019s expression is represented as tokens, the text is broken down into pieces, or tokens, with information about what these pieces represent in the metadata."})]}),"\n",(0,n.jsx)(t.p,{children:"A subtotal's \u201cexpression\" is presented in the following formats:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"text": A human-readable, but non-parsable text, describing a subtotal\'s expression.'}),"\n",(0,n.jsx)(t.li,{children:'"tree": A tree data structure fully defining the subtotal\'s expression.'}),"\n",(0,n.jsx)(t.li,{children:'"tokens": A list of parsed tokens that define a subtotal\'s expression. Generating tokens requires additional time.'}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"showExpressionAs"}),' is omitted, only "text" formats are returned.']}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"showExpressionAs"})," is ",(0,n.jsx)(t.code,{children:"tree"}),', "text" and "tree" formats are returned.']}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"showExpressionAs"})," is ",(0,n.jsx)(t.code,{children:"tokens"}),', "text" and "tokens" formats are returned.']}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"dimty"}),": Contains a list of ",(0,n.jsx)(t.code,{children:"DimtyUnit"}),", which describes the level at which the subtotal can be calculated."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For more information about the Modeling service, see ",(0,n.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm",children:"Configuring the Modeling Service"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);