"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6595],{74728:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=s(74848),n=s(28453);const i={title:"Retrieve history lists",Description:"Retrieve history lists using the MicroStrategy REST API."},o=void 0,d={id:"common-workflows/administration/manage-history-lists/get-history-list/get-history-list",title:"Retrieve history lists",description:"This workflow sample demonstrates how to retrieve messages from the history list using the MicroStrategy REST API.",source:"@site/docs/common-workflows/administration/manage-history-lists/get-history-list/get-history-list.md",sourceDirName:"common-workflows/administration/manage-history-lists/get-history-list",slug:"/common-workflows/administration/manage-history-lists/get-history-list/",permalink:"/rest-api-docs/common-workflows/administration/manage-history-lists/get-history-list/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-history-lists/get-history-list/get-history-list.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve history lists",Description:"Retrieve history lists using the MicroStrategy REST API."},sidebar:"tutorialSidebar",previous:{title:"Manage History Lists",permalink:"/rest-api-docs/common-workflows/administration/manage-history-lists/"},next:{title:"Manage subscriptions",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/"}},l={},a=[{value:"Get History Lists",id:"get-history-lists",level:2},{value:"Request URL",id:"request-url",level:3},{value:"Endpoint: GET /api/v2/historyList",id:"endpoint-get-apiv2historylist",level:3},{value:"Sample Curl Request",id:"sample-curl-request",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{Available:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{since:"2021 Update 8"}),"\n",(0,r.jsx)(t.p,{children:"This workflow sample demonstrates how to retrieve messages from the history list using the MicroStrategy REST API."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Obtain the authorization token needed to execute the request using ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"get-history-lists",children:"Get History Lists"}),"\n",(0,r.jsx)(t.p,{children:"Use the following endpoint to get a list of history lists:"}),"\n",(0,r.jsx)(t.h3,{id:"request-url",children:"Request URL"}),"\n",(0,r.jsxs)(t.h3,{id:"endpoint-get-apiv2historylist",children:["Endpoint: ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/History%20List/getHistoryList_1",children:"GET /api/v2/historyList"})]}),"\n",(0,r.jsx)(t.h3,{id:"sample-curl-request",children:"Sample Curl Request"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/historyList?scope=single_user&projectId=9DE876B611E7C33BF65B0080EF45D3E8&offset=0&limit=-1' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: p3itnh1510c2j7kg29t29ju5us'\n"})}),"\n",(0,r.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"X-MSTR-AuthToken"})}),(0,r.jsx)(t.td,{children:"Header"}),(0,r.jsx)(t.td,{children:"Authorization token"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Located in"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"scope"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsxs)(t.td,{children:["History list retrieval scope, options: ",(0,r.jsx)(t.code,{children:"single_user"})," or ",(0,r.jsx)(t.code,{children:"all_users"})]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsxs)(t.td,{children:["string (",(0,r.jsx)(t.code,{children:"single_user"}),", ",(0,r.jsx)(t.code,{children:"all_users"}),")"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"projectId"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Field to filter on project ID of the job"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetInfo.name"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Name of history list message target object, used for filtering as 'contains'"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"messageDisplayName"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Message Display Name"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ownerId"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Message Owner ID"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetInfo.objectCreator"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Name of object creator"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsxs)(t.td,{children:["Type of the content, options: ",(0,r.jsx)(t.code,{children:"report"}),", ",(0,r.jsx)(t.code,{children:"document"}),", ",(0,r.jsx)(t.code,{children:"dossier"})]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsxs)(t.td,{children:["string (",(0,r.jsx)(t.code,{children:"report"}),", ",(0,r.jsx)(t.code,{children:"document"}),", ",(0,r.jsx)(t.code,{children:"dossier"}),")"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"status"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Message status"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"readStatus"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Message read status"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"applicationType"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Application type"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Starting point within the collection of returned results. Used to control paging behavior."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"integer (int32)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Query"}),(0,r.jsx)(t.td,{children:"Maximum number of items returned for a single request. Used to control paging behavior. Use -1 for no limit."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"integer (int32)"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(t.p,{children:["If successful, this API call returns a ",(0,r.jsx)(t.code,{children:"200 OK"})," status code and the list of documents in the response body. The response body follows the ",(0,r.jsx)(t.code,{children:"HistoryListMessages"})," schema."]}),"\n",(0,r.jsx)(t.h4,{id:"sample-response",children:"Sample Response"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "historyList": [\n    {\n      "messageId": "0A6B683C4AF5FECC365F4CA18C11710A",\n      "title": "2.NormalRWD",\n      "stateId": 0,\n      "saveStateId": 0,\n      "serverStateId": 0,\n      "messageType": "read_message",\n      "status": "reserved",\n      "sequenceNumber": 10,\n      "parentId": "00000000000000000000000000000000",\n      "clientType": "MicroStrategyWeb",\n      "requestType": "document",\n      "requestStatus": "job_running",\n      "startTime": "2022-06-30T06:10:50Z",\n      "finishTime": "2022-06-30T06:10:52Z",\n      "targetInfo": {\n        "creationTime": "2022-06-30T06:10:50Z",\n        "modificationTime": "2022-06-30T06:10:52Z",\n        "objectId": "E0783EAF44DEF424CA5215A228D33606",\n        "type": "document_definition",\n        "objectDesc": "",\n        "objectCreator": "Administrator",\n        "folderId": "D6253070472AA691A4E9C88E72B7AC64",\n        "folderName": "HLCodeCoverage"\n      },\n      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8",\n      "projectName": "MicroStrategy Tutorial",\n      "resultFlags": 0,\n      "cacheId": null,\n      "messageText": "User request is completed.",\n      "displayName": "2.NormalRWD",\n      "ownerName": "Administrator",\n      "ownerId": "D6253070472AA691A4E9C88E72B7AC6D",\n      "locale": 0,\n      "language": "English (United States)",\n      "children": [\n        {\n          "messageId": "33732CEC431C52F3FE781183676E2D62",\n          "title": "1.NormalReport",\n          "stateId": 0,\n          "saveStateId": 0,\n          "serverStateId": 0,\n          "messageType": "general",\n          "status": "new_message",\n          "sequenceNumber": 11,\n          "parentId": "0A6B683C4AF5FECC365F4CA18C11710A",\n          "clientType": "MicroStrategyWeb",\n          "requestType": "report",\n          "requestStatus": 1,\n          "startTime": "2022-06-30T06:10:51Z",\n          "finishTime": "2022-06-30T06:10:51Z",\n          "targetInfo": {\n            "creationTime": "2022-06-30T06:10:51Z",\n            "modificationTime": "2022-06-30T06:10:51Z",\n            "objectId": "1806052048A0120B1168D2B6EF66BA5B",\n            "type": "report_definition",\n            "objectDesc": "",\n            "objectCreator": "Administrator",\n            "folderId": "D6253070472AA691A4E9C88E72B7AC64",\n            "folderName": "HLCodeCoverage"\n          },\n          "projectName": "MicroStrategy Tutorial",\n          "resultFlags": "dtls_expr_nothing",\n          "messageText": "User request is completed.",\n          "displayName": "1.NormalReport",\n          "ownerName": "Administrator",\n          "locale": 0,\n          "language": "English (United States)"\n        }\n      ]\n    },\n    {\n      "messageId": "A414294343F46D29AE9DBF84F6B25A2E",\n      "title": "3Ms",\n      "stateId": 0,\n      "saveStateId": 0,\n      "serverStateId": 0,\n      "messageType": "general",\n      "status": "new_message",\n      "sequenceNumber": 9,\n      "parentId": "00000000000000000000000000000000",\n      "clientType": "MicroStrategyWeb",\n      "requestType": "report",\n      "requestStatus": "loading_prompt",\n      "startTime": "2022-07-30T06:10:51Z",\n      "finishTime": "2022-07-30T06:10:58Z",\n      "targetInfo": {\n        "creationTime": "2022-07-30T06:10:51Z",\n        "modificationTime": "2022-06-30T06:10:58Z",\n        "objectId": "6B9F06CB452CD307AE4F299EC1CD380A",\n        "type": "report_definition",\n        "objectDesc": "",\n        "objectCreator": "Administrator",\n        "folderId": "BE4B09B24918EA987267DBA2D9D11593",\n        "folderName": "_Chun"\n      },\n      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8",\n      "projectName": "MicroStrategy Tutorial",\n      "resultFlags": "dtls_expr_nothing",\n      "messageText": "User request is completed.",\n      "displayName": "3Ms",\n      "ownerName": "Administrator",\n      "locale": 0,\n      "language": "English (United States)"\n    }\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var r=s(96540);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);