"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8950],{4218:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>a,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>m});var r=e(74848),s=e(28453);const i={title:"Get prompt information"},p=void 0,n={id:"common-workflows/analytics/use-prompts-objects/get-prompt-information/get-prompt-information",title:"Get prompt information",description:"You can use REST APIs to get information about five supported types of prompts applied to dashboards, documents, and reports. You can get a list of the prompts that have been applied to a dashboard, document or report, together with the definition of each prompt.",source:"@site/docs/common-workflows/analytics/use-prompts-objects/get-prompt-information/get-prompt-information.md",sourceDirName:"common-workflows/analytics/use-prompts-objects/get-prompt-information",slug:"/common-workflows/analytics/use-prompts-objects/get-prompt-information/",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/get-prompt-information/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/get-prompt-information/get-prompt-information.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Get prompt information"},sidebar:"tutorialSidebar",previous:{title:"Use prompts objects",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/"},next:{title:"Get prompt information",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/get-prompt-information/workflow-get-prompt-information"}},a={},m=[];function c(t){const o={a:"a",li:"li",p:"p",ul:"ul",...(0,s.R)(),...t.components},{Available:e}=o;return e||function(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e,{since:"2021 Update 1"}),"\n",(0,r.jsx)(o.p,{children:"You can use REST APIs to get information about five supported types of prompts applied to dashboards, documents, and reports. You can get a list of the prompts that have been applied to a dashboard, document or report, together with the definition of each prompt."}),"\n",(0,r.jsx)(o.p,{children:"The prompts supported in the MicroStrategy platform are defined in EnumDSSXMLPromptType."}),"\n",(0,r.jsx)(o.p,{children:"You can use REST APIs to return information about the following prompts:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts",children:"Attribute element prompts"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-qualification-prompts",children:"Attribute qualification prompts"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/object-prompts",children:"Object prompts"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/value-prompts",children:"Value prompts"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/metric-expression-prompts",children:"Metric expression prompts"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",children:"Hierarchy qualification prompts"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/level-prompts",children:"Level prompts"})}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"You can identify prompts with the prompt key, prompt ID, or prompt name. If more than one identifier is provided, the logic for identifying the prompt will follow this order: key, ID, name. The prompt key is used first if is available because the key is the only unique value. Since the same prompt can be applied more than once to a dataset, the ID and the name might not be unique. Despite this possibility, the name is often the most convenient way to identify a prompt because of its descriptive nature."}),"\n",(0,r.jsxs)(o.p,{children:["To help you get started using REST APIs to build feature-rich applications that leverage MicroStrategy's prompt capabilities, we have provided a ",(0,r.jsx)(o.a,{href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/get-prompt-information/workflow-get-prompt-information",children:"workflow sample for getting a prompt definition"}),"."]})]})}function l(t={}){const{wrapper:o}={...(0,s.R)(),...t.components};return o?(0,r.jsx)(o,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},28453:(t,o,e)=>{e.d(o,{R:()=>p,x:()=>n});var r=e(96540);const s={},i=r.createContext(s);function p(t){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(o):{...o,...t}}),[o,t])}function n(t){let o;return o=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:p(t.components),r.createElement(i.Provider,{value:o},t.children)}}}]);