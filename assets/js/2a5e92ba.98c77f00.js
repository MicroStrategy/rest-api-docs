"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8360],{61857:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(74848),a=i(28453);const s={title:"Create a KPI object",description:"This workflow sample demonstrates how to create a KPI object for a user."},o=void 0,r={id:"common-workflows/analytics/manage-insights/create-kpi",title:"Create a KPI object",description:"This workflow sample demonstrates how to create a KPI object for a user.",source:"@site/docs/common-workflows/analytics/manage-insights/create-kpi.md",sourceDirName:"common-workflows/analytics/manage-insights",slug:"/common-workflows/analytics/manage-insights/create-kpi",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/create-kpi",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-insights/create-kpi.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Create a KPI object",description:"This workflow sample demonstrates how to create a KPI object for a user."},sidebar:"tutorialSidebar",previous:{title:"Manage KPI objects and insights",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/manage-kpi-and-insights"},next:{title:"Get KPI objects",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/get-kpi"}},c={},d=[{value:"1. Create a dashboard instance",id:"1-create-a-dashboard-instance",level:2},{value:"2. Get the Chapter key, Page key and Visualization key",id:"2-get-the-chapter-key-page-key-and-visualization-key",level:2},{value:"3. Get the metric id",id:"3-get-the-metric-id",level:2},{value:"4. Create a KPI object",id:"4-create-a-kpi-object",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Available:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{since:"2021 Update 10"}),"\n",(0,t.jsx)(n.p,{children:"This workflow sample demonstrates how to modify a KPI owned by a user."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"1-create-a-dashboard-instance",children:"1. Create a dashboard instance"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"You should have the dashboard ID and the dashboard project ID before performing the following steps."})}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/rest-api-docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/workflow-retrieve-data-from-the-intelligence-server#create-a-dashboard-instance",children:"Create a dashboard instance"})," on how to create a dashboard instance."]}),"\n",(0,t.jsxs)(n.p,{children:["Retrieve the ",(0,t.jsx)(n.code,{children:"mid"})," from the response and save it to use later."]}),"\n",(0,t.jsx)(n.h2,{id:"2-get-the-chapter-key-page-key-and-visualization-key",children:"2. Get the Chapter key, Page key and Visualization key"}),"\n",(0,t.jsx)(n.p,{children:"Chapter keys, Page keys, and Visualization keys are used to identify the visualization that you want to create a KPI object on."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["This API only supports creating KPI objects based on KPI visualizations. Ensure the visualization is of type KPI, otherwise ",(0,t.jsx)(n.code,{children:"step 4"})," will return an error."]})}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList",children:"GET /api/dossiers/{dossierId}/definition"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Body: N/A"}),"\n",(0,t.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"{dossierId}"})," in ",(0,t.jsx)(n.code,{children:"GET /api/dossiers/{dossierId}/definition"})," with the dashboard ID."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/dossiers/8CF183CB4346C729EC6E2EA368BF49ED/definition' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: t3r90utftsigqe25hg9ossfmgl' \\\n  -H 'X-MSTR-ProjectID: A728B9A98C420236E6C825AAB4A812D6'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "8CF183CB4346C729EC6E2EA368BF49ED",\n  "name": "Bitcoin Analytics",\n  "chapters": [\n    {\n      "key": "W3BEA2A6BF8A44218B7AC7FF236A20C55",\n      "name": "Summary",\n      "pages": [\n        {\n          "key": "W66AE9E04126845EB96453C9C9EB39628",\n          "name": "Bitcoin",\n          "visualizations": [\n            {\n              "key": "K0575A35B7B4EE4A87AD0C586829F9799",\n              "name": "Latest Price"\n            },\n            {\n              "key": "K79913FEC544356AD52CCF48DD81506EE",\n              "name": "Transaction"\n            },\n            {\n              "key": "K31B23A789949C4BF27D3C099974B9634",\n              "name": "Market Cap"\n            },\n            {\n              "key": "K658DC9A7B941EF9D5376BDB037C15B73",\n              "name": "Addresses"\n            },\n            {\n              "key": "KFE8C6416084281ECE9615D8A723E8888",\n              "name": "Hash Rate"\n            },\n            {\n              "key": "K0EC0A72DFC400304562915AB7B0BE0CF",\n              "name": "Block Time"\n            },\n            {\n              "key": "KBBE93DCE204BE75A8FED1A8C11C13ABD",\n              "name": "Price"\n            }\n          ]\n        }\n      ],\n      "filters": []\n    },\n    {\n      "key": "W9D847538C2C34219845B9A4465F31475",\n      "name": "Blockchain Analytics",\n      "pages": [\n        {\n          "key": "W155",\n          "name": "Transactions",\n          "visualizations": [\n            {\n              "key": "W07F29CC0388145F0B0C19B6E30DA839A",\n              "name": "Visualization 4 copy"\n            }\n          ]\n        },\n        {\n          "key": "W153",\n          "name": "Mining",\n          "visualizations": [\n            {\n              "key": "W904613A5412949FFB7F3E0C689188ECF",\n              "name": "Visualization 3 copy"\n            }\n          ]\n        },\n        {\n          "key": "WBF01FA492EE94461945FAA5EF010EA39",\n          "name": "Distribution",\n          "visualizations": [\n            {\n              "key": "W9A3B8B1B2DBA4EB28E53E24390495BA8",\n              "name": "Net Realized P/L KPI copy"\n            }\n          ]\n        },\n        {\n          "key": "W430AF459B1CB49E5A3C446315A77713D",\n          "name": "Addresses",\n          "visualizations": [\n            {\n              "key": "W0D3A7A47A14A4F6984D62DB85F805611",\n              "name": "BTC in Top 100 Addresses copy"\n            }\n          ]\n        },\n        {\n          "key": "W7E06EE12AA4F4357BC38660E6D6675C1",\n          "name": "Top Movers",\n          "visualizations": [\n            {\n              "key": "W06DCAA9BDA114754961A1733D92B0968",\n              "name": "Visualization 2 copy"\n            }\n          ]\n        }\n      ],\n      "filters": []\n    },\n    {\n      "key": "W5A12E9C0FFC740D3800DD62E62FCA223",\n      "name": "Market Analytics",\n      "pages": [\n        {\n          "key": "W7883EFF7A16A4B648931FF1F18F41F5D",\n          "name": "Price Trend",\n          "visualizations": [\n            {\n              "key": "W434C609C25F54D3F89FF798250CF297F",\n              "name": "Visualization 1"\n            }\n          ]\n        },\n        {\n          "key": "W1D753812D4BB4D62948513E1C24E4DF7",\n          "name": "Network Valuation",\n          "visualizations": [\n            {\n              "key": "WC71F3328C27540D5857331478735675B",\n              "name": "Visualization 1"\n            }\n          ]\n        },\n        {\n          "key": "W52A2509B41F04AAA972668B96AD9A93E",\n          "name": "Network Profitability",\n          "visualizations": [\n            {\n              "key": "WA5A4D4AF7F2D4E85BEC266D85AE26970",\n              "name": "Net Realized P/L KPI"\n            },\n            {\n              "key": "W87B07DEB025D4A8090A454A57FEC6635",\n              "name": "Net Unrealized P/L KPI"\n            },\n            {\n              "key": "W8429608805D141C5A1D6D320710C14E2",\n              "name": "SHT SOPR KPI"\n            },\n            {\n              "key": "W68A92B83FFBD4B71B5EFF0D3FEA81C64",\n              "name": "LTH SOPR KPI"\n            }\n          ]\n        }\n      ],\n      "filters": []\n    },\n    {\n      "key": "W03451867BA5247A4B325C39E5FA65CE0",\n      "name": "Bitcoin Energy",\n      "pages": [\n        {\n          "key": "W154",\n          "name": "Consumption",\n          "visualizations": [\n            {\n              "key": "W80B3C94F6025411EB4E0B3519005DBBD",\n              "name": "Visualization 2"\n            },\n            {\n              "key": "K252F61E2A84BF7EC3C37FBA8C54010D7",\n              "name": "Weekly BTC Mining Fees (YTD)"\n            }\n          ]\n        },\n        {\n          "key": "WED5E86A38E254DE48F17C260E3E84677",\n          "name": "Comparison",\n          "visualizations": [\n            {\n              "key": "K4D98B639FE4EC4AD82DF479C6F23DC6F",\n              "name": "Visualization 5"\n            }\n          ]\n        }\n      ],\n      "filters": []\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"From the response, identify the Visualization which you want to create a KPI object , then collect the Visualization key, Page key and Chapter key to use later."}),"\n",(0,t.jsxs)(n.p,{children:["For example, you want to create a KPI object on a ",(0,t.jsx)(n.code,{children:"Latest Price"})," visualization, you check the response and notice that the key of ",(0,t.jsx)(n.code,{children:"Latest Price"})," is ",(0,t.jsx)(n.code,{children:"K0575A35B7B4EE4A87AD0C586829F9799"}),". The Page that contains the visualization is ",(0,t.jsx)(n.code,{children:"Bitcoin"})," and its key is ",(0,t.jsx)(n.code,{children:"W66AE9E04126845EB96453C9C9EB39628"}),". The Chapter which contains page ",(0,t.jsx)(n.code,{children:"Bitcoin"})," is ",(0,t.jsx)(n.code,{children:"Summary"})," and the key is ",(0,t.jsx)(n.code,{children:"W3BEA2A6BF8A44218B7AC7FF236A20C55"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"3-get-the-metric-id",children:"3. Get the metric id"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationResult",children:"GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey}/visualizations/{visualizationKey}"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Body: N/A"}),"\n",(0,t.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"{dossierId}"})," with the dashboard ID."]}),(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"{instanceId}"})," with the value of ",(0,t.jsx)(n.code,{children:"mid"})," found in ",(0,t.jsx)(n.code,{children:"step 1"}),"."]}),(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"{chapterKey}"})," and ",(0,t.jsx)(n.code,{children:"{visualizationKey}"})," with the key value found in ",(0,t.jsx)(n.code,{children:"step 2"}),"."]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/dossiers/8CF183CB4346C729EC6E2EA368BF49ED/instances/F164FB81C54DAB9A936196ACDC2287CA/chapters/W3BEA2A6BF8A44218B7AC7FF236A20C55/visualizations/K0575A35B7B4EE4A87AD0C586829F9799?offset=0&limit=0' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: t3r90utftsigqe25hg9ossfmgl' \\\n  -H 'X-MSTR-ProjectID: A728B9A98C420236E6C825AAB4A812D6'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "key": "K0575A35B7B4EE4A87AD0C586829F9799",\n  "name": "Latest Price",\n  "result": {\n    "definition": {\n      "metrics": [\n        {\n          "name": "Latest Price",\n          "id": "5B1EA76011EB75E45C3A0080EFA52176",\n          "type": "Metric",\n          "min": 22212.82,\n          "max": 22212.82,\n          "dataType": "Double",\n          "numberFormatting": {\n            "category": 1,\n            "decimalPlaces": 0,\n            "currencySymbol": "$",\n            "currencyPosition": 0,\n            "formatString": "\\"$\\"#,##0;(\\"$\\"#,##0)",\n            "negativeType": 3\n          }\n        }\n      ],\n      "attributes": [],\n      "thresholds": [],\n      "viewFilterSummary": "",\n      "elementFilterSummary": "",\n      "metricLimitSummary": ""\n    },\n    "data": {\n      "paging": {\n        "total": 1,\n        "current": 0,\n        "offset": 0,\n        "limit": 0,\n        "prev": null,\n        "next": null\n      },\n      "root": null\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Get the metric id ",(0,t.jsx)(n.code,{children:".result.definition.metrics[0].id"})," from response."]}),"\n",(0,t.jsx)(n.h2,{id:"4-create-a-kpi-object",children:"4. Create a KPI object"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/createKPI",children:"POST /api/insight/KPIs"})]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/rest-api-docs/common-workflows/analytics/manage-insights/get-kpi#kpi-fields-explanation",children:"KPI fields explanation"})," for detailed explanations of each field."]}),(0,t.jsxs)(n.p,{children:["All fields in the example are ",(0,t.jsx)(n.strong,{children:"required"})," to create a KPI object."]}),(0,t.jsxs)(n.p,{children:["Set the value of ",(0,t.jsx)(n.code,{children:"mid"})," from ",(0,t.jsx)(n.code,{children:"step 1"})," to ",(0,t.jsx)(n.code,{children:"content.instanceId"}),"."]}),(0,t.jsxs)(n.p,{children:["Set the value of ",(0,t.jsx)(n.code,{children:"Chapter Key"})," from ",(0,t.jsx)(n.code,{children:"step 2"})," to ",(0,t.jsx)(n.code,{children:"kpiTarget.chapterKey"}),"."]}),(0,t.jsxs)(n.p,{children:["Set the value of ",(0,t.jsx)(n.code,{children:"Page Key"})," from ",(0,t.jsx)(n.code,{children:"step 2"})," to ",(0,t.jsx)(n.code,{children:"kpiTarget.pageKey"}),"."]}),(0,t.jsxs)(n.p,{children:["Set the value of ",(0,t.jsx)(n.code,{children:"Visualization Key"})," from ",(0,t.jsx)(n.code,{children:"step 2"})," to ",(0,t.jsx)(n.code,{children:"kpiTarget.nodeKey"}),"."]}),(0,t.jsxs)(n.p,{children:["Set the value of ",(0,t.jsx)(n.code,{children:"metric id"})," from ",(0,t.jsx)(n.code,{children:"step 3"})," to ",(0,t.jsx)(n.code,{children:"kpiTarget.kpiObjects[0].id"}),"."]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Profit of North America",\n  "content": {\n    "id": "D5EA39B447058084F270F5ADA3ED0433",\n    "type": 55,\n    "instanceId": "54F3D26011D2896560009A8E67019608"\n  },\n  "configString": "{\\"color\\":100}",\n  "disabled": false,\n  "kpiTarget": {\n    "chapterKey": "K3",\n    "pageKey": "K34",\n    "nodeKey": "W68",\n    "kpiObjects": [\n      {\n        "id": "CE132A8447058084F270F5ADA3ED0433",\n        "type": 4\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/KPIs\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7\' \\\n  -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n  -d \'{\n  "name": "Profit of North America",\n  "content": {\n    "id": "D5EA39B447058084F270F5ADA3ED0433",\n    "type": 55,\n    "instanceId": "54F3D26011D2896560009A8E67019608"\n  },\n  "configString": "{\\"color\\":100}",\n  "disabled": false,\n  "kpiTarget": {\n    "chapterKey": "K3",\n    "pageKey": "K34",\n    "nodeKey": "W68",\n    "kpiObjects": [\n      {\n        "id": "CE132A8447058084F270F5ADA3ED0433",\n        "type": 4\n      }\n    ]\n  }\n}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response:"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["See to ",(0,t.jsx)(n.a,{href:"/rest-api-docs/common-workflows/analytics/manage-insights/get-kpi#kpi-fields-explanation",children:"KPI fields explanation"})," for detailed explanations of each field."]}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"data"})," field is not presented in the response."]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "53F0076E4A46369A13121886DEB3FEA5",\n  "name": "Profit of North America",\n  "dateCreated": "2023-03-08T09:11:53.069Z",\n  "dateModified": "2023-03-08T09:11:53.069Z",\n  "schedule": {\n    "id": "CA5683F942AD1F8529627D945B254A4A",\n    "recurrenceIntervalInHour": 1\n  },\n  "content": {\n    "id": "D5EA39B447058084F270F5ADA3ED0433",\n    "type": 55,\n    "name": "Financial"\n  },\n  "configString": "{\\"color\\":100}",\n  "disabled": false,\n  "bookmarkId": "AD33B215438A71FC2825C9A5AA059BE6",\n  "subscriptionId": "ACBAFEF247DCE4701682E9872F54804F",\n  "kpiTarget": {\n    "chapterKey": "K3",\n    "pageKey": "K34",\n    "nodeKey": "K68",\n    "kpiObjects": [\n      {\n        "id": "CE132A8447058084F270F5ADA3ED0433",\n        "type": 4,\n        "name": "Latest Price"\n      }\n    ],\n    "elements": []\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);