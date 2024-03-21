"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5828],{867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(74848),r=t(28453);const a={title:"Retrieve a metric's definition",sidebar_label:"Retrieve a metric's definition",description:"This topic covers several workflows for retrieving a metric's definition."},o=void 0,s={id:"common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-definition",title:"Retrieve a metric's definition",description:"This topic covers several workflows for retrieving a metric's definition.",source:"@site/docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-definition.md",sourceDirName:"common-workflows/modeling/manage-metric-objects",slug:"/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-definition.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve a metric's definition",sidebar_label:"Retrieve a metric's definition",description:"This topic covers several workflows for retrieving a metric's definition."},sidebar:"tutorialSidebar",previous:{title:"Manage metric objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/"},next:{title:"Retrieve a metric's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset"}},l={},d=[{value:"Retrieve a metric&#39;s definition",id:"retrieve-a-metrics-definition",level:2},{value:"Retrieve a metric&#39;s definition in tree format",id:"retrieve-a-metrics-definition-in-tree-format",level:2},{value:"Retrieve a metric&#39;s definition in tokens format",id:"retrieve-a-metrics-definition-in-tokens-format",level:2},{value:"Retrieve a Metric\u2019s definition with Advanced Properties <Available></Available>",id:"retrieve-a-metrics-definition-with-advanced-properties-",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{since:"2021 Update 5"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can try out this workflow at ",(0,i.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c9639bc3-853f-4746-94b6-528b5aed21a5?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:"This topic covers several workflows for retrieving a metric's definition."}),"\n",(0,i.jsxs)(n.p,{children:["You want to get the definition of the ",(0,i.jsx)(n.code,{children:'\u201cCost Comparison"'})," metric object. The object ID of the metric is ",(0,i.jsx)(n.code,{children:"28F95FDC4EF1CA5746F8E6971A144BED"}),"\u202fin the MicroStrategy Tutorial project. The project ID is ",(0,i.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(n.p,{children:["Get the project ID from ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Get the definition of the specified metric within a changeset, with ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Metrics/ms-getMetricDetails",children:"GET /api/model/metrics/{metricId}"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Location"}),(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"header"}),(0,i.jsx)(n.td,{children:"X-MSTR-authToken"}),(0,i.jsx)(n.td,{children:"The authorization token."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"header"}),(0,i.jsx)(n.td,{children:"X-MSTR-ProjectID"}),(0,i.jsx)(n.td,{children:"The Project ID."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"params"}),(0,i.jsx)(n.td,{children:"showFilterTokens"}),(0,i.jsx)(n.td,{children:'Specifies whether the "filter" in Metric is returned in "tokens", "text", and "tree" formats.'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"params"}),(0,i.jsx)(n.td,{children:"showExpressionAs"}),(0,i.jsxs)(n.td,{children:["Omitted, tree, or tokens:",(0,i.jsx)("br",{}),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,i.jsx)("br",{}),"- If ",(0,i.jsx)(n.code,{children:"tree"}),', the expression is returned in "text" and "tree" formats.',(0,i.jsx)("br",{}),"- If ",(0,i.jsx)(n.code,{children:"tokens"}),', the expression is returned in "text" and "tokens" formats.']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"params"}),(0,i.jsx)(n.td,{children:"showAdvancedProperties"}),(0,i.jsxs)(n.td,{children:["Specifies whether the metric\u2019s definition is returned with advanced properties.",(0,i.jsx)("br",{}),"- If omitted or false, the advanced properties are not returned.",(0,i.jsx)("br",{}),"- If true, the advanced properties are are returned."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-a-metrics-definition",children:"Retrieve a metric's definition"}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/metrics/28F95FDC4EF1CA5746F8E6971A144BED" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.p,{children:"You can view the metric's definition in the body of the response. The following is an example of an expression in \u201ctext\u201c formats."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-03-08T10:37:03.000Z",\n    "dateModified": "2022-03-15T15:59:50.000Z",\n    "versionId": "5FE091CE4842941170D5F6AC998DEB3E",\n    "primaryLocale": "en-US",\n    "objectId": "28F95FDC4EF1CA5746F8E6971A144BED",\n    "subType": "metric",\n    "name": "Cost Comparison"\n  },\n  "expression": { "text": "Sum(Cost)" },\n  "dimty": {\n    "dimtyUnits": [\n      {\n        "dimtyUnitType": "report_base_level",\n        "aggregation": "normal",\n        "filtering": "apply",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "aggregation": "first_in_fact",\n        "filtering": "absolute",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "role",\n        "target": {\n          "objectId": "2437C03311D5BD85C000F98A4CC5F24F",\n          "subType": "role_transformation",\n          "name": "Last Quarter\'s"\n        }\n      }\n    ],\n    "excludeAttribute": false,\n    "allowAddingUnit": true\n  },\n  "conditionality": {\n    "filter": {\n      "objectId": "E638359211D5C49EC0000C881FDA1A4F",\n      "subType": "filter",\n      "name": "Select a Quarter"\n    },\n    "embedMethod": "metric_into_report_filter",\n    "removeElements": true\n  },\n  "metricSubtotals": [\n    {\n      "definition": {\n        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",\n        "subType": "system_subtotal",\n        "name": "Total"\n      },\n      "implementation": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",\n        "subType": "system_subtotal",\n        "name": "Minimum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",\n        "subType": "system_subtotal",\n        "name": "Maximum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "F225147A4CA0BB97368A5689D9675E73",\n        "subType": "system_subtotal",\n        "name": "Aggregation"\n      },\n      "implementation": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    }\n  ],\n  "aggregateFromBase": false,\n  "formulaJoinType": "inner",\n  "smartTotal": "decomposable_false",\n  "dataType": { "type": "int64", "precision": 0, "scale": 0 },\n  "format": {\n    "header": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "2" },\n      { "type": "number_thousand_separator", "value": "true" },\n      { "type": "number_currency_symbol", "value": "$" },\n      { "type": "number_currency_position", "value": "0" },\n      { "type": "number_format", "value": "#,##0.00;(#,##0.00)" },\n      { "type": "number_negative_numbers", "value": "3" },\n      { "type": "background_fill_color", "value": "3355443" },\n      { "type": "background_pattern_style", "value": "1" },\n      { "type": "background_fill_style", "value": "0" },\n      { "type": "background_gradient_angle", "value": "0" },\n      { "type": "background_gradient_x_offset", "value": "0" },\n      { "type": "series_fill_style", "value": "0" },\n      { "type": "series_fill_color", "value": "8388608" },\n      { "type": "series_gradient_angle", "value": "0" },\n      { "type": "series_gradient_x_offset", "value": "0" }\n    ],\n    "values": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "0" },\n      { "type": "number_format", "value": "#,##0;(#,##0)" }\n    ]\n  },\n  "subtotalFromBase": false,\n  "columnNameAlias": "test",\n  "metricFormatType": "reserved",\n  "thresholds": []\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 200 (Metric's definition is returned successfully.)"}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-a-metrics-definition-in-tree-format",children:"Retrieve a metric's definition in tree format"}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/metrics/28F95FDC4EF1CA5746F8E6971A144BED?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.p,{children:'You can view the metric\'s definition of the body of the response in "text" and "tree" formats.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-03-08T10:37:03.000Z",\n    "dateModified": "2022-03-15T15:59:50.000Z",\n    "versionId": "5FE091CE4842941170D5F6AC998DEB3E",\n    "primaryLocale": "en-US",\n    "objectId": "28F95FDC4EF1CA5746F8E6971A144BED",\n    "subType": "metric",\n    "name": "Cost Comparison"\n  },\n  "expression": {\n    "text": "Sum(Cost)",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "2D69DE1D4767A591B82D79B7B996F346",\n        "subType": "agg_metric",\n        "isEmbedded": true\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [\n      {\n        "dimtyUnitType": "report_base_level",\n        "aggregation": "normal",\n        "filtering": "apply",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "aggregation": "first_in_fact",\n        "filtering": "absolute",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "role",\n        "target": {\n          "objectId": "2437C03311D5BD85C000F98A4CC5F24F",\n          "subType": "role_transformation",\n          "name": "Last Quarter\'s"\n        }\n      }\n    ],\n    "excludeAttribute": false,\n    "allowAddingUnit": true\n  },\n  "conditionality": {\n    "filter": {\n      "objectId": "E638359211D5C49EC0000C881FDA1A4F",\n      "subType": "filter",\n      "name": "Select a Quarter"\n    },\n    "embedMethod": "metric_into_report_filter",\n    "removeElements": true\n  },\n  "metricSubtotals": [\n    {\n      "definition": {\n        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",\n        "subType": "system_subtotal",\n        "name": "Total"\n      },\n      "implementation": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",\n        "subType": "system_subtotal",\n        "name": "Minimum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",\n        "subType": "system_subtotal",\n        "name": "Maximum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "F225147A4CA0BB97368A5689D9675E73",\n        "subType": "system_subtotal",\n        "name": "Aggregation"\n      },\n      "implementation": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    }\n  ],\n  "aggregateFromBase": false,\n  "formulaJoinType": "inner",\n  "smartTotal": "decomposable_false",\n  "dataType": { "type": "int64", "precision": 0, "scale": 0 },\n  "format": {\n    "header": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "2" },\n      { "type": "number_thousand_separator", "value": "true" },\n      { "type": "number_currency_symbol", "value": "$" },\n      { "type": "number_currency_position", "value": "0" },\n      { "type": "number_format", "value": "#,##0.00;(#,##0.00)" },\n      { "type": "number_negative_numbers", "value": "3" },\n      { "type": "background_fill_color", "value": "3355443" },\n      { "type": "background_pattern_style", "value": "1" },\n      { "type": "background_fill_style", "value": "0" },\n      { "type": "background_gradient_angle", "value": "0" },\n      { "type": "background_gradient_x_offset", "value": "0" },\n      { "type": "series_fill_style", "value": "0" },\n      { "type": "series_fill_color", "value": "8388608" },\n      { "type": "series_gradient_angle", "value": "0" },\n      { "type": "series_gradient_x_offset", "value": "0" }\n    ],\n    "values": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "0" },\n      { "type": "number_format", "value": "#,##0;(#,##0)" }\n    ]\n  },\n  "subtotalFromBase": false,\n  "columnNameAlias": "test",\n  "metricFormatType": "reserved",\n  "thresholds": []\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 200 (Metric's definition is returned successfully.)"}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-a-metrics-definition-in-tokens-format",children:"Retrieve a metric's definition in tokens format"}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/metrics/28F95FDC4EF1CA5746F8E6971A144BED?showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.p,{children:'The following is an example of an expression in "text" and "tokens" format.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-03-08T10:37:03.000Z",\n    "dateModified": "2022-03-15T15:59:50.000Z",\n    "versionId": "5FE091CE4842941170D5F6AC998DEB3E",\n    "primaryLocale": "en-US",\n    "objectId": "28F95FDC4EF1CA5746F8E6971A144BED",\n    "subType": "metric",\n    "name": "Cost Comparison"\n  },\n  "expression": {\n    "text": "Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:40.000Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2021-02-26T03:18:52.000Z",\n          "versionId": "66BBCD784D52223085BBC2BC81EB8F16",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "{",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "~",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "+",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ",",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<|",\n        "type": "other"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2021-02-26T03:18:50.000Z",\n          "versionId": "CF8EEF064DCB3A0CFFC3439EF5ADEE47",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "*",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "}",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "[Select a Quarter]",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-10-19T16:59:45.000Z",\n          "dateModified": "2016-02-02T21:42:28.000Z",\n          "versionId": "BC17244611E5C05100000080EF75F6D3",\n          "primaryLocale": "en-US",\n          "objectId": "E638359211D5C49EC0000C881FDA1A4F",\n          "subType": "filter",\n          "name": "Select a Quarter"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ";",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "@",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "3",\n        "type": "integer"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "|",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "[Last Quarter\'s]",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-10-10T13:50:20.000Z",\n          "dateModified": "2021-02-26T03:18:51.000Z",\n          "versionId": "28EA303A4A885EC20F1BC3BBD1AACD20",\n          "primaryLocale": "en-US",\n          "objectId": "2437C03311D5BD85C000F98A4CC5F24F",\n          "subType": "role_transformation",\n          "name": "Last Quarter\'s",\n          "description": "Transforms Quarter to Last Quarter, Month to Last Quarter\'s Month, Day to Last Quarter\'s Day"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "|",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  },\n  "dimty": {\n    "dimtyUnits": [\n      {\n        "dimtyUnitType": "report_base_level",\n        "aggregation": "normal",\n        "filtering": "apply",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "aggregation": "first_in_fact",\n        "filtering": "absolute",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "role",\n        "target": {\n          "objectId": "2437C03311D5BD85C000F98A4CC5F24F",\n          "subType": "role_transformation",\n          "name": "Last Quarter\'s"\n        }\n      }\n    ],\n    "excludeAttribute": false,\n    "allowAddingUnit": true\n  },\n  "conditionality": {\n    "filter": {\n      "objectId": "E638359211D5C49EC0000C881FDA1A4F",\n      "subType": "filter",\n      "name": "Select a Quarter"\n    },\n    "embedMethod": "metric_into_report_filter",\n    "removeElements": true\n  },\n  "metricSubtotals": [\n    {\n      "definition": {\n        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",\n        "subType": "system_subtotal",\n        "name": "Total"\n      },\n      "implementation": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",\n        "subType": "system_subtotal",\n        "name": "Minimum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",\n        "subType": "system_subtotal",\n        "name": "Maximum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "F225147A4CA0BB97368A5689D9675E73",\n        "subType": "system_subtotal",\n        "name": "Aggregation"\n      },\n      "implementation": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    }\n  ],\n  "aggregateFromBase": false,\n  "formulaJoinType": "inner",\n  "smartTotal": "decomposable_false",\n  "dataType": { "type": "int64", "precision": 0, "scale": 0 },\n  "format": {\n    "header": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "2" },\n      { "type": "number_thousand_separator", "value": "true" },\n      { "type": "number_currency_symbol", "value": "$" },\n      { "type": "number_currency_position", "value": "0" },\n      { "type": "number_format", "value": "#,##0.00;(#,##0.00)" },\n      { "type": "number_negative_numbers", "value": "3" },\n      { "type": "background_fill_color", "value": "3355443" },\n      { "type": "background_pattern_style", "value": "1" },\n      { "type": "background_fill_style", "value": "0" },\n      { "type": "background_gradient_angle", "value": "0" },\n      { "type": "background_gradient_x_offset", "value": "0" },\n      { "type": "series_fill_style", "value": "0" },\n      { "type": "series_fill_color", "value": "8388608" },\n      { "type": "series_gradient_angle", "value": "0" },\n      { "type": "series_gradient_x_offset", "value": "0" }\n    ],\n    "values": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "0" },\n      { "type": "number_format", "value": "#,##0;(#,##0)" }\n    ]\n  },\n  "subtotalFromBase": false,\n  "columnNameAlias": "test",\n  "metricFormatType": "reserved",\n  "thresholds": []\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 200 (Metric's definition is returned successfully.)"}),"\n",(0,i.jsxs)(n.h2,{id:"retrieve-a-metrics-definition-with-advanced-properties-",children:["Retrieve a Metric\u2019s definition with Advanced Properties ",(0,i.jsx)(t,{since:"2021 Update 9",inline:!0})]}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/metrics/28F95FDC4EF1CA5746F8E6971A144BED?showAdvancedProperties=true" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.p,{children:"The following is an example of metric\u2019s definition with advanced properties."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-03-08T10:37:03.000Z",\n    "dateModified": "2022-03-15T15:59:50.000Z",\n    "versionId": "5FE091CE4842941170D5F6AC998DEB3E",\n    "primaryLocale": "en-US",\n    "objectId": "28F95FDC4EF1CA5746F8E6971A144BED",\n    "subType": "metric",\n    "name": "Cost Comparison"\n  },\n  "expression": {\n    "text": "Sum(Cost)"\n  },\n  "dimty": {\n    "dimtyUnits": [\n      {\n        "dimtyUnitType": "report_base_level",\n        "aggregation": "normal",\n        "filtering": "apply",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "aggregation": "first_in_fact",\n        "filtering": "absolute",\n        "groupBy": true\n      },\n      {\n        "dimtyUnitType": "role",\n        "target": {\n          "objectId": "2437C03311D5BD85C000F98A4CC5F24F",\n          "subType": "role_transformation",\n          "name": "Last Quarter\'s"\n        }\n      }\n    ],\n    "excludeAttribute": false,\n    "allowAddingUnit": true\n  },\n  "conditionality": {\n    "filter": {\n      "objectId": "E638359211D5C49EC0000C881FDA1A4F",\n      "subType": "filter",\n      "name": "Select a Quarter"\n    },\n    "embedMethod": "metric_into_report_filter",\n    "removeElements": true\n  },\n  "metricSubtotals": [\n    {\n      "definition": {\n        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",\n        "subType": "system_subtotal",\n        "name": "Total"\n      },\n      "implementation": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",\n        "subType": "system_subtotal",\n        "name": "Minimum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",\n        "subType": "system_subtotal",\n        "name": "Maximum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "F225147A4CA0BB97368A5689D9675E73",\n        "subType": "system_subtotal",\n        "name": "Aggregation"\n      },\n      "implementation": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    }\n  ],\n  "aggregateFromBase": false,\n  "formulaJoinType": "inner",\n  "smartTotal": "decomposable_false",\n  "dataType": { "type": "int64", "precision": 0, "scale": 0 },\n  "format": {\n    "header": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "2" },\n      { "type": "number_thousand_separator", "value": "true" },\n      { "type": "number_currency_symbol", "value": "$" },\n      { "type": "number_currency_position", "value": "0" },\n      { "type": "number_format", "value": "#,##0.00;(#,##0.00)" },\n      { "type": "number_negative_numbers", "value": "3" },\n      { "type": "background_fill_color", "value": "3355443" },\n      { "type": "background_pattern_style", "value": "1" },\n      { "type": "background_fill_style", "value": "0" },\n      { "type": "background_gradient_angle", "value": "0" },\n      { "type": "background_gradient_x_offset", "value": "0" },\n      { "type": "series_fill_style", "value": "0" },\n      { "type": "series_fill_color", "value": "8388608" },\n      { "type": "series_gradient_angle", "value": "0" },\n      { "type": "series_gradient_x_offset", "value": "0" }\n    ],\n    "values": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "0" },\n      { "type": "number_format", "value": "#,##0;(#,##0)" }\n    ]\n  },\n  "subtotalFromBase": false,\n  "columnNameAlias": "test",\n  "metricFormatType": "reserved",\n  "thresholds": [],\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "type": "int32",\n        "value": "2",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[AnalyticalEngineProperties].[SubtotalDimensionalityAware]": {\n        "name": "SubtotalDimensionalityAware",\n        "type": "boolean",\n        "value": "true",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Function].[Null Check]": {\n        "name": "Null Check",\n        "type": "int32",\n        "value": "2",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Function].[Zero Check]": {\n        "name": "Zero Check",\n        "type": "int32",\n        "value": "1",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Report].[Count Distinct with Partitions]": {\n        "name": "Count Distinct with Partitions",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Integer Constant In Metric]": {\n        "name": "Integer Constant In Metric",\n        "type": "int32",\n        "value": "1",\n        "resolvedLocation": "dbms",\n        "isInherited": true,\n        "nextValue": "0",\n        "nextResolvedLocation": "default"\n      },\n      "[VLDB Select].[Metric Join Type]": {\n        "name": "Metric Join Type",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[No Nulls In Metric For Cube Reuse]": {\n        "name": "No Nulls In Metric For Cube Reuse",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Smart Metric Transformation]": {\n        "name": "Smart Metric Transformation",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Transformable AggMetric]": {\n        "name": "Transformable AggMetric",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Use Subtotal Dimty for Dynamic Aggregation]": {\n        "name": "Use Subtotal Dimty for Dynamic Aggregation",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 200 (Metric's definition is returned successfully.)"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);