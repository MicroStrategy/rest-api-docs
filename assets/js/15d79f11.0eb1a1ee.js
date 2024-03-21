"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5697],{26444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(74848),i=t(28453);const o={title:"Retrieve a report's definition",description:"You can use REST APIs to retrieve the definition of a report through Modeling service."},s=void 0,a={id:"common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition",title:"Retrieve a report's definition",description:"You can use REST APIs to retrieve the definition of a report through Modeling service.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve a report's definition",description:"You can use REST APIs to retrieve the definition of a report through Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage report objects",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/"},next:{title:"Create a new report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/create-a-new-report"}},c={},d=[{value:"Retrieve a report&#39;s definition directly",id:"retrieve-a-reports-definition-directly",level:2},{value:"Retrieve a report&#39;s definition within a report instance",id:"retrieve-a-reports-definition-within-a-report-instance",level:2},{value:"1. Create a report instance",id:"1-create-a-report-instance",level:3},{value:"2. Get a report&#39;s definition within the instance",id:"2-get-a-reports-definition-within-the-instance",level:3},{value:"3. Delete report instance",id:"3-delete-report-instance",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{since:"2021 Update 7"}),"\n",(0,r.jsx)(n.p,{children:"You can use REST APIs to retrieve the definition of a report through Modeling service. This topic includes the following workflows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#retrieve-a-reports-definition-directly",children:"Retrieve a report's definition directly"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#retrieve-a-reports-definition-within-a-report-instance",children:"Retrieve a report's definition within a report instance"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#1-create-a-report-instance",children:"1. Create a report instance"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#2-get-a-reports-definition-within-the-instance",children:"2. Get a report's definition within the instance"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#3-delete-report-instance",children:"3. Delete report instance"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In both sample workflows, we want to retrieve a report\u2019s definition from \u201cMicroStrategy Tutorial\u201c project. The report ID is ",(0,r.jsx)(n.code,{children:"FFDAB82F4CA397073ABD4196FCBCD918"}),". The project ID is ",(0,r.jsx)(n.code,{children:"B19DEDCC11D4E0EFC000EB9495D0F44F"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,r.jsxs)(n.p,{children:["Get the project ID from ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"retrieve-a-reports-definition-directly",children:"Retrieve a report's definition directly"}),"\n",(0,r.jsx)(n.p,{children:"By using this workflow, you can quickly get the report\u2019s definition, but you still need to create a report instance to do any further modification."}),"\n",(0,r.jsxs)(n.p,{children:["Endpoint: ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-getReport",children:"GET /api/model/reports/{reportId}"})]}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "5vcpml6ds4pe9g13c0oevqnmae"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,r.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918?showExpressionAs=tree' -H 'X-MSTR-AuthToken: 5vcpml6ds4pe9g13c0oevqnmae' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Cookie: JSESSIONID=0FAABB8353719758660C07AF715CA12C; iSession=5vcpml6ds4pe9g13c0oevqnmae'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2003-10-17T18:09:11.000Z",\n    "dateModified": "2016-08-12T19:33:32.000Z",\n    "versionId": "0DDDEEF04A42DE7AB4C752A146D7F446",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "FFDAB82F4CA397073ABD4196FCBCD918",\n    "subType": "report_grid",\n    "name": "Units Sold Analysis"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "803BE0704085BDE65FEA55B03E83D43B",\n              "name": "Units Sold Status",\n              "subType": "metric"\n            },\n            {\n              "id": "5B3114084613C45EF079279122DD0DDE",\n              "name": "Units Sold Forecast",\n              "subType": "metric"\n            },\n            {\n              "id": "4C05190A11D3E877C000B3B2D86C964F",\n              "name": "Units Sold",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {\n      "text": "Month = Dec 2016",\n      "tree": {\n        "type": "predicate_filter_qualification",\n        "predicateId": "9F9A0054208D43BCB89678B9E93C26D4",\n        "predicateText": "Month = Dec 2016",\n        "predicateTree": {\n          "filter": {\n            "objectId": "87989C374DF0A7B20BFCDFB9E6E042F1",\n            "subType": "filter",\n            "name": "Fixed month selection - December current year"\n          },\n          "isIndependent": 0\n        }\n      }\n    }\n  },\n  "grid": {\n    "viewTemplate": {\n      "rows": {\n        "units": [],\n        "sorts": []\n      },\n      "columns": {\n        "units": [\n          {\n            "type": "metrics",\n            "elements": [\n              {\n                "id": "803BE0704085BDE65FEA55B03E83D43B",\n                "name": "Units Sold Status",\n                "subType": "metric",\n                "thresholds": [\n                  {\n                    "format": [\n                      {\n                        "type": "alignment_horizontal",\n                        "value": "3"\n                      },\n                      {\n                        "type": "font_name",\n                        "value": "Wingdings"\n                      }\n                    ],\n                    "condition": {\n                      "text": "{Units Sold} > {Units Sold Forecast}",\n                      "tree": {\n                        "type": "predicate_metric_qualification",\n                        "predicateId": "3F7973B48873456ABDC742B7CAB7872D",\n                        "predicateText": "{Units Sold} > {Units Sold Forecast}",\n                        "predicateTree": {\n                          "function": "greater",\n                          "parameters": [\n                            {\n                              "parameterType": "object_reference",\n                              "target": {\n                                "objectId": "5B3114084613C45EF079279122DD0DDE",\n                                "subType": "metric",\n                                "name": "Units Sold Forecast"\n                              }\n                            }\n                          ],\n                          "levelType": "metric_level",\n                          "metric": {\n                            "objectId": "4C05190A11D3E877C000B3B2D86C964F",\n                            "subType": "metric",\n                            "name": "Units Sold"\n                          },\n                          "metricFunction": "value",\n                          "isIndependent": 0,\n                          "nullInclude": 0\n                        }\n                      }\n                    },\n                    "name": "Positive",\n                    "replaceText": "4",\n                    "semantics": "symbol",\n                    "scope": "metric_only",\n                    "enable": true\n                  }\n                ]\n              },\n              {\n                "id": "5B3114084613C45EF079279122DD0DDE",\n                "name": "Units Sold Forecast",\n                "subType": "metric"\n              },\n              {\n                "id": "4C05190A11D3E877C000B3B2D86C964F",\n                "name": "Units Sold",\n                "subType": "metric"\n              }\n            ]\n          }\n        ],\n        "sorts": []\n      },\n      "pageBy": {\n        "units": [],\n        "sorts": []\n      }\n    },\n    "viewFilter": {}\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Response Code: 200 (The report's definition is returned successfully.)"}),"\n",(0,r.jsx)(n.h2,{id:"retrieve-a-reports-definition-within-a-report-instance",children:"Retrieve a report's definition within a report instance"}),"\n",(0,r.jsx)(n.p,{children:"By using this workflow, you can do modifications after the report instance has been created. A series of modifications and creations will be set to the metadata when you save the report."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"A report instance is required for getting, creating, updating, deleting derived elements in report. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects."})}),"\n",(0,r.jsx)(n.h3,{id:"1-create-a-report-instance",children:"1. Create a report instance"}),"\n",(0,r.jsxs)(n.p,{children:["Endpoint: ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance",children:"POST /api/model/reports/{reportId}/instances"})]}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,r.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'X-MSTR-ProjectId: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "id": "25114D344481A2EA0400A1AD21450BED"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Response Code: 201 (A new report instance is created successfully.)"}),"\n",(0,r.jsx)(n.h3,{id:"2-get-a-reports-definition-within-the-instance",children:"2. Get a report's definition within the instance"}),"\n",(0,r.jsxs)(n.p,{children:["Endpoint: ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-getReport",children:"GET /api/model/reports/{reportId}"})]}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "5vcpml6ds4pe9g13c0oevqnmae"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,r.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918' -H 'X-MSTR-MS-Instance: 25114D344481A2EA0400A1AD21450BED' -H 'X-MSTR-AuthToken: 5vcpml6ds4pe9g13c0oevqnmae' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Cookie: JSESSIONID=12F90A04AD40EC78CEBEE570A1E496E4; iSession=ldk7lv4emfrqs6rmtfniq1tpfq'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2003-10-17T18:09:11.000Z",\n    "dateModified": "2016-08-12T19:33:32.000Z",\n    "versionId": "0DDDEEF04A42DE7AB4C752A146D7F446",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "FFDAB82F4CA397073ABD4196FCBCD918",\n    "subType": "report_grid",\n    "name": "Units Sold Analysis"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "803BE0704085BDE65FEA55B03E83D43B",\n              "name": "Units Sold Status",\n              "subType": "metric"\n            },\n            {\n              "id": "5B3114084613C45EF079279122DD0DDE",\n              "name": "Units Sold Forecast",\n              "subType": "metric"\n            },\n            {\n              "id": "4C05190A11D3E877C000B3B2D86C964F",\n              "name": "Units Sold",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {\n      "text": "Month = Dec 2016",\n      "tree": {\n        "type": "predicate_filter_qualification",\n        "predicateId": "9F9A0054208D43BCB89678B9E93C26D4",\n        "predicateText": "Month = Dec 2016",\n        "predicateTree": {\n          "filter": {\n            "objectId": "87989C374DF0A7B20BFCDFB9E6E042F1",\n            "subType": "filter",\n            "name": "Fixed month selection - December current year"\n          },\n          "isIndependent": 0\n        }\n      }\n    }\n  },\n  "grid": {\n    "viewTemplate": {\n      "rows": {\n        "units": [],\n        "sorts": []\n      },\n      "columns": {\n        "units": [\n          {\n            "type": "metrics",\n            "elements": [\n              {\n                "id": "803BE0704085BDE65FEA55B03E83D43B",\n                "name": "Units Sold Status",\n                "subType": "metric",\n                "thresholds": [\n                  {\n                    "format": [\n                      {\n                        "type": "alignment_horizontal",\n                        "value": "3"\n                      },\n                      {\n                        "type": "font_name",\n                        "value": "Wingdings"\n                      },\n                      {\n                        "type": "font_color",\n                        "value": "32768"\n                      },\n                      {\n                        "type": "font_script",\n                        "value": "2"\n                      },\n                      {\n                        "type": "background_fill_style",\n                        "value": "0"\n                      }\n                    ],\n                    "condition": {\n                      "text": "{Units Sold} > {Units Sold Forecast}",\n                      "tree": {\n                        "type": "predicate_metric_qualification",\n                        "predicateId": "3F7973B48873456ABDC742B7CAB7872D",\n                        "predicateText": "{Units Sold} > {Units Sold Forecast}",\n                        "predicateTree": {\n                          "function": "greater",\n                          "parameters": [\n                            {\n                              "parameterType": "object_reference",\n                              "target": {\n                                "objectId": "5B3114084613C45EF079279122DD0DDE",\n                                "subType": "metric",\n                                "name": "Units Sold Forecast"\n                              }\n                            }\n                          ],\n                          "levelType": "metric_level",\n                          "metric": {\n                            "objectId": "4C05190A11D3E877C000B3B2D86C964F",\n                            "subType": "metric",\n                            "name": "Units Sold"\n                          },\n                          "metricFunction": "value",\n                          "isIndependent": 0,\n                          "nullInclude": 0\n                        }\n                      }\n                    },\n                    "name": "Positive",\n                    "replaceText": "4",\n                    "semantics": "symbol",\n                    "scope": "metric_only",\n                    "enable": true\n                  }\n                ]\n              },\n              {\n                "id": "5B3114084613C45EF079279122DD0DDE",\n                "name": "Units Sold Forecast",\n                "subType": "metric"\n              },\n              {\n                "id": "4C05190A11D3E877C000B3B2D86C964F",\n                "name": "Units Sold",\n                "subType": "metric"\n              }\n            ]\n          }\n        ],\n        "sorts": []\n      },\n      "pageBy": {\n        "units": [],\n        "sorts": []\n      }\n    },\n    "viewFilter": {}\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Response Code: 200 (The report's definition is returned successfully.)"}),"\n",(0,r.jsx)(n.h3,{id:"3-delete-report-instance",children:"3. Delete report instance"}),"\n",(0,r.jsxs)(n.p,{children:["Endpoint: ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance",children:"DELETE /api/model/reports/{reportId}/instances"})]}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"\n"X-MSTR-MS-Instance": "25114D344481A2EA0400A1AD21450BED"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,r.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918/instances' -H 'X-MSTR-MS-Instance: 25114D344481A2EA0400A1AD21450BED' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'Cookie: JSESSIONID=DFCB945B0A0DD959D26BA05F9AE20B3B; iSession=vslb4k2o4api370rf2jq2htbm2'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sample Response Body: Empty"}),"\n",(0,r.jsx)(n.p,{children:"Sample Response Code: 204 (The report instance has been deleted successfully.)"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);