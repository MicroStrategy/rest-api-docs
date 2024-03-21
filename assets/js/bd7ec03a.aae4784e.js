"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3968],{85747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(74848),o=n(28453);const a={sidebar_label:"Create a bot instance",title:"Create a bot instance",description:"This workflow sample demonstrates how to create a bot instance"},i=void 0,r={id:"common-workflows/analytics/use-bot-api/create-a-bot-instance",title:"Create a bot instance",description:"This workflow sample demonstrates how to create a bot instance",source:"@site/docs/common-workflows/analytics/use-bot-api/create-a-bot-instance.md",sourceDirName:"common-workflows/analytics/use-bot-api",slug:"/common-workflows/analytics/use-bot-api/create-a-bot-instance",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/create-a-bot-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-bot-api/create-a-bot-instance.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{sidebar_label:"Create a bot instance",title:"Create a bot instance",description:"This workflow sample demonstrates how to create a bot instance"},sidebar:"tutorialSidebar",previous:{title:"Get a chat bot's question list",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/get-bot-question-list"},next:{title:"Ask a bot instance for suggested questions",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/ask-bot-instance-suggested-question"}},c={},d=[{value:"Create a bot instance",id:"create-a-bot-instance",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{since:"MicroStrategy ONE (March 2024)"}),"\n",(0,s.jsx)(t.p,{children:"This workflow sample demonstrates how to create a bot instance."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Obtain the authorization token needed to execute the request using ",(0,s.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"create-a-bot-instance",children:"Create a bot instance"}),"\n",(0,s.jsxs)(t.p,{children:["Endpoint: ",(0,s.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/createInstance",children:"POST /api/bots/{botId}/instances"})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"{botId}"})," in ",(0,s.jsx)(t.code,{children:"POST /api/bots/{botId}/instances"})," with the chatbot ID in your environment."]})}),"\n",(0,s.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-http",children:'"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "context": {\n    "type": "new"\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/instances' \\\n-X 'POST'\n--header 'X-MSTR-AuthToken: t40ltbk411923ipk85r8r0tace' \\\n--header 'X-MSTR-ProjectID: FCC1924411EAABC39C6C0080EFA54501' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"context\": {\n        \"type\": \"new\"\n    }\n}'\n"})}),"\n",(0,s.jsx)(t.p,{children:"Sample Response:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Response Code"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:"Successfully create the bot instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"400"}),(0,s.jsx)(t.td,{children:"Error in creating the bot isntance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"401"}),(0,s.jsx)(t.td,{children:"Authorization failed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"404"}),(0,s.jsx)(t.td,{children:"Bot does not exist"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Sample Response Body on success:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "5B1EB48585F04384A97F3D831D7C7416"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);