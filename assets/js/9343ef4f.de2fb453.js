"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[19],{90480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(74848),i=t(28453);const o={title:"Retrieve the incremental refresh report definition with advanced properties",sidebar_label:"Retrieve an IRR definition with advanced properties",description:"This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value."},a=void 0,s={id:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties",title:"Retrieve the incremental refresh report definition with advanced properties",description:"This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report",slug:"/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve the incremental refresh report definition with advanced properties",sidebar_label:"Retrieve an IRR definition with advanced properties",description:"This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value."},sidebar:"tutorialSidebar",previous:{title:"Update an IRR definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-an-irr-definition"},next:{title:"Create an IRR with advanced properties",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr-with-advanced-properties"}},c={},d=[{value:"Get the definition of the specified incremental refresh report with advanced properties using GET /api/model/incrementalRefresh/{incrementalRefreshReportId}",id:"get-the-definition-of-the-specified-incremental-refresh-report-with-advanced-properties-using-get-apimodelincrementalrefreshincrementalrefreshreportid",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{since:"2021 Update 6"}),"\n",(0,r.jsx)(n.p,{children:"This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value."}),"\n",(0,r.jsxs)(n.p,{children:["The object ID of the Incremental Refresh Report is \u202f",(0,r.jsx)(n.code,{children:"B17F066940FA684A00C1D9AC5FC95754"})," in the MicroStrategy Tutorial project. The project ID is ",(0,r.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."}),(0,r.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,r.jsxs)(n.p,{children:["Get the project ID from ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,r.jsxs)(n.h2,{id:"get-the-definition-of-the-specified-incremental-refresh-report-with-advanced-properties-using-get-apimodelincrementalrefreshincrementalrefreshreportid",children:["Get the definition of the specified incremental refresh report with advanced properties using ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-getIncrementalRefreshReport",children:"GET /api/model/incrementalRefresh/{incrementalRefreshReportId}"})]}),"\n",(0,r.jsx)(n.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Header: ",(0,r.jsx)(n.code,{children:"X-MSTR-authToken"})," - The authorization token"]}),"\n",(0,r.jsxs)(n.li,{children:["Header: ",(0,r.jsx)(n.code,{children:"X-MSTR-ProjectID"})," - The ID of the project"]}),"\n",(0,r.jsxs)(n.li,{children:["Parameter: ",(0,r.jsx)(n.code,{children:"showFilterTokens"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Specify whether the Incremental Refresh Report ",(0,r.jsx)(n.code,{children:"filter"})," is returned in ",(0,r.jsx)(n.code,{children:"tokens"})," format, along with ",(0,r.jsx)(n.code,{children:"text"})," and ",(0,r.jsx)(n.code,{children:"tree"})," formats."]}),"\n",(0,r.jsxs)(n.li,{children:["If omitted or ",(0,r.jsx)(n.code,{children:"false"}),", only ",(0,r.jsx)(n.code,{children:"text"})," and ",(0,r.jsx)(n.code,{children:"tree"})," formats are returned."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"true"}),", all ",(0,r.jsx)(n.code,{children:"text"}),", ",(0,r.jsx)(n.code,{children:"tree"}),", and ",(0,r.jsx)(n.code,{children:"tokens"})," formats are returned."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X GET "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh/B17F066940FA684A00C1D9AC5FC95754?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: fg8fimprk63ige5d83054oopkd" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,r.jsxs)(n.p,{children:["You can view the Incremental Refresh Report definition in the body of the response. Below is an example of a filter in ",(0,r.jsx)(n.code,{children:"\u201ctext\u201c"})," and ",(0,r.jsx)(n.code,{children:"\u201ctree\u201c"})," formats."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-06-10T03:39:43.694Z",\n    "dateModified": "2022-06-10T03:39:43.694Z",\n    "versionId": "D67D158B457FA8563B4EF9AC9DE3F859",\n    "primaryLocale": "en-US",\n    "objectId": "B17F066940FA684A00C1D9AC5FC95754",\n    "subType": "report_increment_refresh",\n    "name": "IRR_IC01_report"\n  },\n  "targetCube": {\n    "objectId": "9878A08A41A93506FCBA9B91B2665D88",\n    "subType": "report_cube",\n    "name": "IC01_VLDB_all_4_change"\n  },\n  "incrementType": "report",\n  "refreshType": "update",\n  "template": {\n    "rows": [\n      {\n        "id": "8D679D5111D3E4981000E787EC6DE8A4",\n        "name": "Year",\n        "type": "attribute"\n      },\n      {\n        "id": "8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Category",\n        "type": "attribute"\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost",\n            "subType": "metric"\n          },\n          {\n            "id": "4C051DB611D3E877C000B3B2D86C964F",\n            "name": "Profit",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "filter": {\n    "text": "Year = 2016, 2017",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "C3CD0B2575C24F639C4E9DCD16722B70",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2016",\n            "elementId": "h2016"\n          },\n          {\n            "display": "2017",\n            "elementId": "h2017"\n          }\n        ],\n        "function": "in"\n      }\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {\n        "name": "ConsolidationSubtotal",\n        "value": "true",\n        "type": "boolean",\n        "resolvedLocation": "default"\n      },\n      "[MDX Syntax].[MDX Add Fake Measure]": {\n        "name": "MDX Add Fake Measure",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    },\n    "metricJoinTypes": {\n      "7FD5B69611D5AC76C000D98A4CC5F24F": {\n        "metric": {\n          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "subType": "metric",\n          "name": "Cost"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "report_target"\n      },\n      "4C051DB611D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C051DB611D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Profit"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D5111D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "noParticipationInPreserveRow": true,\n        "resolvedLocation": "report_target"\n      },\n      "8D679D3711D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Response Code: 200 (Incremental Refresh Report's definition is returned successfully.)"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);