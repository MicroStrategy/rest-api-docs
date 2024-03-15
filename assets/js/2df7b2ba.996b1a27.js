"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8491],{36257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(74848),r=n(28453);const s={title:"Update a metric's definition within a changeset",sidebar_label:"Update a metric's definition within a changeset",description:"This workflow sample demonstrates how to update a metric's definition through the Modeling service."},d=void 0,o={id:"common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset",title:"Update a metric's definition within a changeset",description:"This workflow sample demonstrates how to update a metric's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-metric-objects",slug:"/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Update a metric's definition within a changeset",sidebar_label:"Update a metric's definition within a changeset",description:"This workflow sample demonstrates how to update a metric's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a metric within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/create-a-metric-within-a-changeset"},next:{title:"Retrieve a metric's applicable properties",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties"}},a={},l=[{value:"Update the metric&#39;s definition using PUT /api/model/metrics/{metricId}",id:"update-the-metrics-definition-using-put-apimodelmetricsmetricid",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{since:"2021 Update 5"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["You can try out this workflow at ",(0,i.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cd346c9a-019b-401a-9470-6097a5d9b24a?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"This workflow sample demonstrates how to update a metric's definition through the Modeling service."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,i.jsxs)(t.p,{children:["You want to update the definition of the ",(0,i.jsx)(t.code,{children:'"Cost Comparison"'})," metric with object ID ",(0,i.jsx)(t.code,{children:"28F95FDC4EF1CA5746F8E6971A144BED"})," to achieve the below changes:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Remove the dimty level other than the report level"}),"\n",(0,i.jsxs)(t.li,{children:["Update the ",(0,i.jsx)(t.code,{children:"datatype"})," to ",(0,i.jsx)(t.code,{children:"double"})]}),"\n",(0,i.jsxs)(t.li,{children:["Update ",(0,i.jsx)(t.code,{children:"subtotalFromBase"})," to ",(0,i.jsx)(t.code,{children:"true"})]}),"\n",(0,i.jsxs)(t.li,{children:["Rename the Metric to ",(0,i.jsx)(t.code,{children:'"Cost"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Set the ",(0,i.jsx)(t.code,{children:"[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]"})," VLDB property to ",(0,i.jsx)(t.code,{children:"2"})]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(t.p,{children:["Get the project ID from ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,i.jsxs)(t.h2,{id:"update-the-metrics-definition-using-put-apimodelmetricsmetricid",children:["Update the metric's definition using ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Metrics/ms-putMetric",children:"PUT /api/model/metrics/{metricId}"})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Location"}),(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"header"}),(0,i.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,i.jsx)(t.td,{children:"The authorization token."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"header"}),(0,i.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,i.jsx)(t.td,{children:"The ID of the project."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"header"}),(0,i.jsx)(t.td,{children:"X-MSTR-MS-Changeset"}),(0,i.jsx)(t.td,{children:"The ID of the changeset."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"params"}),(0,i.jsx)(t.td,{children:"showFilterTokens"}),(0,i.jsx)(t.td,{children:'Specify whether the "filter" in Metric is returned in "tokens", "text", and "tree" formats.'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"params"}),(0,i.jsx)(t.td,{children:"showExpressionAs"}),(0,i.jsxs)(t.td,{children:["Omitted, tree, or tokens:",(0,i.jsx)("br",{}),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,i.jsx)("br",{}),"- If ",(0,i.jsx)(t.code,{children:"tree"}),', the expression is returned in "text" and "tree" formats.',(0,i.jsx)("br",{}),"- If ",(0,i.jsx)(t.code,{children:"tokens"}),', the expression is returned in "text" and "tokens" formats.']})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"params"}),(0,i.jsx)(t.td,{children:"showAdvancedProperties"}),(0,i.jsxs)(t.td,{children:["Specify whether the metric\u2019s definition is returned with advanced properties.",(0,i.jsx)("br",{}),"- If omitted or false, the advanced properties are not returned.",(0,i.jsx)("br",{}),"- If true, the advanced properties are are returned."]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": { "name": "Cost" },\n  "dimty": {\n    "dimtyUnits": [\n      {\n        "dimtyUnitType": "report_base_level",\n        "aggregation": "normal",\n        "filtering": "apply",\n        "groupBy": true\n      }\n    ],\n    "excludeAttribute": false,\n    "allowAddingUnit": true\n  },\n  "subtotalFromBase": true,\n  "dataType": { "type": "double", "precision": 0, "scale": 0 },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "type": "int32",\n        "value": "2",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X PUT \\\n  \'http://demo.microstrategy.com/MicroStrategyLibrary/api//model/metrics/28F95FDC4EF1CA5746F8E6971A144BED?showAdvancedProperties=true\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: vou86a0sjelh4abm2oh274ghos\' \\\n  -H \'X-MSTR-MS-Changeset: E839A2FE06AF4BCB947B678A6E8E6EAA\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "information": {\n        "name": "Cost"\n    },\n    "dimty": {\n        "dimtyUnits": [\n            {\n                "dimtyUnitType": "report_base_level",\n                "aggregation": "normal",\n                "filtering": "apply",\n                "groupBy": true\n            }\n        ],\n        "excludeAttribute": false,\n        "allowAddingUnit": true\n    },\n    "dataType": {\n        "type": "double",\n        "precision": 0,\n        "scale": 0\n    },\n    "advancedProperties": {\n        "vldbProperties": {\n            "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n                "name": "NullCheckingForAnalyticalEngine",\n                "type": "int32",\n                "value": "2",\n                "resolvedLocation": "default",\n                "isInherited": true\n            }\n        }\n    }\n}\'\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:"You can view the updated metric's definition in the body of the response."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "versionId": "ABF987FAB5E543E48C18F0501B51BE1C",\n    "primaryLocale": "en-US",\n    "objectId": "28F95FDC4EF1CA5746F8E6971A144BED",\n    "subType": "metric",\n    "name": "Cost",\n    "destinationFolderId": "1031D6F04D13AE5E24EF08944D5745AD"\n  },\n  "expression": {\n    "text": "Sum(Cost)",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "B9E3AEAA4D9DF42F6683EB8D7185825C",\n        "subType": "agg_metric",\n        "isEmbedded": true\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [\n      {\n        "dimtyUnitType": "report_base_level",\n        "aggregation": "normal",\n        "filtering": "apply",\n        "groupBy": true\n      }\n    ],\n    "excludeAttribute": false,\n    "allowAddingUnit": true\n  },\n  "conditionality": {\n    "filter": {\n      "objectId": "E638359211D5C49EC0000C881FDA1A4F",\n      "subType": "filter",\n      "name": "Select a Quarter"\n    },\n    "embedMethod": "metric_into_report_filter",\n    "removeElements": true\n  },\n  "metricSubtotals": [\n    {\n      "definition": {\n        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",\n        "subType": "system_subtotal",\n        "name": "Total"\n      },\n      "implementation": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B328C60462634223B2387D4ADABEEB53",\n        "subType": "system_subtotal",\n        "name": "Average"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",\n        "subType": "system_subtotal",\n        "name": "Minimum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",\n        "subType": "system_subtotal",\n        "name": "Maximum"\n      }\n    },\n    {\n      "definition": {\n        "objectId": "F225147A4CA0BB97368A5689D9675E73",\n        "subType": "system_subtotal",\n        "name": "Aggregation"\n      },\n      "implementation": {\n        "objectId": "078C50834B484EE29948FA9DD5300ADF",\n        "subType": "system_subtotal",\n        "name": "Count"\n      }\n    }\n  ],\n  "aggregateFromBase": false,\n  "formulaJoinType": "inner",\n  "smartTotal": "decomposable_false",\n  "dataType": { "type": "double", "precision": 0, "scale": 0 },\n  "format": {\n    "header": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "2" },\n      { "type": "number_thousand_separator", "value": "true" },\n      { "type": "number_currency_symbol", "value": "$" },\n      { "type": "number_currency_position", "value": "0" },\n      { "type": "number_format", "value": "#,##0.00;(#,##0.00)" },\n      { "type": "number_negative_numbers", "value": "3" },\n      { "type": "background_fill_color", "value": "3355443" },\n      { "type": "background_pattern_style", "value": "1" },\n      { "type": "background_fill_style", "value": "0" },\n      { "type": "background_gradient_angle", "value": "0" },\n      { "type": "background_gradient_x_offset", "value": "0" },\n      { "type": "series_fill_style", "value": "0" },\n      { "type": "series_fill_color", "value": "8388608" },\n      { "type": "series_gradient_angle", "value": "0" },\n      { "type": "series_gradient_x_offset", "value": "0" }\n    ],\n    "values": [\n      { "type": "number_category", "value": "0" },\n      { "type": "number_decimal_places", "value": "0" },\n      { "type": "number_format", "value": "#,##0;(#,##0)" }\n    ]\n  },\n  "subtotalFromBase": true,\n  "columnNameAlias": "test",\n  "metricFormatType": "reserved",\n  "thresholds": [],\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "type": "int32",\n        "value": "2",\n        "resolvedLocation": "object",\n        "isInherited": false,\n        "nextValue": "2",\n        "nextResolvedLocation": "default"\n      },\n      "[AnalyticalEngineProperties].[SubtotalDimensionalityAware]": {\n        "name": "SubtotalDimensionalityAware",\n        "type": "boolean",\n        "value": "true",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Function].[Null Check]": {\n        "name": "Null Check",\n        "type": "int32",\n        "value": "2",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Function].[Zero Check]": {\n        "name": "Zero Check",\n        "type": "int32",\n        "value": "1",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Report].[Count Distinct with Partitions]": {\n        "name": "Count Distinct with Partitions",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Integer Constant In Metric]": {\n        "name": "Integer Constant In Metric",\n        "type": "int32",\n        "value": "1",\n        "resolvedLocation": "dbms",\n        "isInherited": true,\n        "nextValue": "0",\n        "nextResolvedLocation": "default"\n      },\n      "[VLDB Select].[Metric Join Type]": {\n        "name": "Metric Join Type",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[No Nulls In Metric For Cube Reuse]": {\n        "name": "No Nulls In Metric For Cube Reuse",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Smart Metric Transformation]": {\n        "name": "Smart Metric Transformation",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Transformable AggMetric]": {\n        "name": "Transformable AggMetric",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Use Subtotal Dimty for Dynamic Aggregation]": {\n        "name": "Use Subtotal Dimty for Dynamic Aggregation",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Response Code: 200 (The Metric's definition is updated successfully in the changeset.)"}),"\n",(0,i.jsx)(t.p,{children:"The model for the definition of a metric can be updated with the following fields:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Fields"}),(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Data Type"}),(0,i.jsx)(t.th,{children:"Required?"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"information"}),(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"Name of the metric. This is the most user-friendly value that can be used to identify the metric."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"destinationFolderId"}),(0,i.jsx)(t.td,{children:"Folder ID where the new metric is saved."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expression"}),(0,i.jsx)(t.td,{children:"text"}),(0,i.jsx)(t.td,{children:"A human readable that describes the expression."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tree"}),(0,i.jsx)(t.td,{children:"A tree data structure fully defining the expression."}),(0,i.jsx)(t.td,{children:"List<ObjectInfoReference>"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tokens"}),(0,i.jsx)(t.td,{children:"A list of parsed tokens."}),(0,i.jsx)(t.td,{children:"List<ObjectInfoReference>"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dimty"}),(0,i.jsx)(t.td,{children:"dimtyUnits"}),(0,i.jsx)(t.td,{children:"Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated."}),(0,i.jsx)(t.td,{children:"List<ObjectInfoReference>"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"excludeAttribute"}),(0,i.jsx)(t.td,{children:"If true, exclude attributes absent in report or level. If false, do not exclude."}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"allowAddingUnit"}),(0,i.jsx)(t.td,{children:"This setting allows other users to add extra units to this definition."}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prompt"}),(0,i.jsx)(t.td,{children:"This points to the level prompt."}),(0,i.jsx)(t.td,{children:"ObjectInfoReference"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"conditionality"}),(0,i.jsx)(t.td,{children:"filter"}),(0,i.jsx)(t.td,{children:"The reference to a filter."}),(0,i.jsx)(t.td,{children:"ObjectInfoReference"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prompt"}),(0,i.jsx)(t.td,{children:"The reference to an object prompt."}),(0,i.jsx)(t.td,{children:"ObjectInfoReference"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"embedMethod"}),(0,i.jsx)(t.td,{children:"Indicates the embedding method for the filter with report filter."}),(0,i.jsx)(t.td,{children:"EnumDSSEmbedMethod"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"removeElements"}),(0,i.jsx)(t.td,{children:"Indicates whether to remove related report filter elements. True to remove."}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"metricSubtotals"}),(0,i.jsx)(t.td,{children:"definition"}),(0,i.jsx)(t.td,{children:"An object reference that reference to the subtotal object."}),(0,i.jsx)(t.td,{children:"ObjectInfoReference"}),(0,i.jsx)(t.td,{children:"Yes, if metricSubtotals is provided ."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"implementation"}),(0,i.jsxs)(t.td,{children:["When the total subtotal function is set to one object, this field will reference to that object only when the definition field references to Total.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"When the dynamic aggregation function is set to one object, this field will reference to that object only when the definition field references to Aggregation.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For subtotals except Total and Aggregation, this field should be empty."]}),(0,i.jsx)(t.td,{children:"ObjectInfoReference"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"aggregateFromBase"}),(0,i.jsx)(t.td,{children:"aggregateFromBase"}),(0,i.jsx)(t.td,{children:"Indicates the aggregation type. True to aggregate from base."}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FormulaJoinType"}),(0,i.jsx)(t.td,{children:"formulaJoinType"}),(0,i.jsx)(t.td,{children:"Indicates formula join type with three options: Default, Inner, or Outer"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"data type"}),(0,i.jsx)(t.td,{children:"type"}),(0,i.jsx)(t.td,{children:"Indicates the data type."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"precision"}),(0,i.jsx)(t.td,{children:"Indicates the precision."}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"scale"}),(0,i.jsx)(t.td,{children:"Indicates the scale."}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"smartTotal"}),(0,i.jsx)(t.td,{children:"smartTotal"}),(0,i.jsx)(t.td,{children:"Indicates the calculation type of total."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"format"}),(0,i.jsx)(t.td,{children:"format"}),(0,i.jsx)(t.td,{children:"Contains the header format and value format."}),(0,i.jsx)(t.td,{children:"Format"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subtotalFromBase"}),(0,i.jsx)(t.td,{children:"subtotalFromBase"}),(0,i.jsx)(t.td,{children:"Indicates the subtotal type. True to subtotal from base."}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"columnNameAlias"}),(0,i.jsx)(t.td,{children:"columnNameAlias"}),(0,i.jsx)(t.td,{children:"This name is used in SQL generation."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"metricFormatType"}),(0,i.jsx)(t.td,{children:"metricFormatType"}),(0,i.jsx)(t.td,{children:"Indicates the metric format type."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"thresholds"}),(0,i.jsx)(t.td,{children:"format"}),(0,i.jsx)(t.td,{children:"A list of FormatProperty that defines the format."}),(0,i.jsx)(t.td,{children:"List<FormatProperty>"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"condition"}),(0,i.jsx)(t.td,{children:"The filter expression for the threshold."}),(0,i.jsx)(t.td,{children:"Expression"}),(0,i.jsx)(t.td,{children:"Yes, if thresholds is provided."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of the threshold."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"replaceText"}),(0,i.jsx)(t.td,{children:"The text used to replace the metric value."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"semantics"}),(0,i.jsx)(t.td,{children:"Indicates the semantics used by the threshold."}),(0,i.jsx)(t.td,{children:"EnumDSSBaseFormType"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"scope"}),(0,i.jsx)(t.td,{children:"Indicates the scope applied by the threshold."}),(0,i.jsx)(t.td,{children:"EnumDSSBaseFormType"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"enable"}),(0,i.jsx)(t.td,{children:"A boolean value that indicates whether this threshold is enabled."}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"advancedProperties"}),(0,i.jsx)(t.td,{children:"vldbProperties"}),(0,i.jsx)(t.td,{children:"The VLDB Properties that are applicable to metric and their values."}),(0,i.jsx)(t.td,{children:"LinkedHashMap<String, PropertyWithValue>"}),(0,i.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:'"subType" cannot be modified through REST API.'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);