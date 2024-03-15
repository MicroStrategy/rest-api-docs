"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[783],{52979:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(74848),i=a(28453);const o={title:"Get dashboard theme json",sidebar_label:"Get dashboard theme json",description:"A workflow sample for retrieving dashboard theme instance in json."},s=void 0,r={id:"common-workflows/modeling/manage-dossier-themes/get-dossier-theme-json",title:"Get dashboard theme json",description:"A workflow sample for retrieving dashboard theme instance in json.",source:"@site/docs/common-workflows/modeling/manage-dossier-themes/get-dossier-theme-json.md",sourceDirName:"common-workflows/modeling/manage-dossier-themes",slug:"/common-workflows/modeling/manage-dossier-themes/get-dossier-theme-json",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/get-dossier-theme-json",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-dossier-themes/get-dossier-theme-json.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Get dashboard theme json",sidebar_label:"Get dashboard theme json",description:"A workflow sample for retrieving dashboard theme instance in json."},sidebar:"tutorialSidebar",previous:{title:"Save dashboard themes",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/save-dossier-themes"},next:{title:"Apply dashboard themes",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/apply-dossier-theme"}},m={},l=[{value:"get a dashboard theme instance in json",id:"get-a-dashboard-theme-instance-in-json",level:2}];function E(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components},{Available:a}=e;return a||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{since:"2021 Update 10"}),"\n",(0,t.jsxs)(e.p,{children:["This workflow sample demonstrates how to get a dashboard theme instance in json through REST API ",(0,t.jsx)(e.code,{children:"GET /api/themes/dossiers/{id}/themeInstances/{instanceId}"}),"."]}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsxs)(e.p,{children:["Get the authorization token needed to execute the request with ",(0,t.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,t.jsxs)(e.p,{children:["Get the project ID from ",(0,t.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,t.jsx)(e.h2,{id:"get-a-dashboard-theme-instance-in-json",children:"get a dashboard theme instance in json"}),"\n",(0,t.jsxs)(e.p,{children:["Endpoint: ",(0,t.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Themes/getThemeInstance",children:"GET /api/themes/dossiers/{id}/themeInstances/{instanceId}"})]}),"\n",(0,t.jsx)(e.p,{children:"In this step, you are retrieving information of a dashboard theme instance. The theme object ID and theme instance ID are in request URL as path parameters. The response will be in json."}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"In path parameter, the instanceId is ID of dashboard theme instance;"}),"\n",(0,t.jsx)(e.li,{children:"If the instance has not persisted yet, path parameter of ID can be any GUID"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,t.jsx)(e.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8282/consume-dev/api/themes/dossiers/119DEDCC11D4E0EFC000EB9495D0F444/themeInstances/4A2F9667C842E3BB9D0CFFABE6F3ED53' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: mni11f26j5acml4opgf0gckmnk' \\\n  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"})}),"\n",(0,t.jsx)(e.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "id": "FC53DDBF4CF41D2B365248BA5150C9D4",\n  "name": "Preview Dossier",\n  "datasets": [\n    {\n      "name": "Retail Sample",\n      "id": "5320383711EDAE6C15030080EF5E0318",\n      "availableObjects": [\n        {\n          "id": "539386D911EDAE6CB4B80080EF5E82C8",\n          "name": "Month",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "45C11FA478E745FEA08D781CEA190FE5",\n              "name": "ID",\n              "dataType": "UTF8Char",\n              "baseFormCategory": "ID",\n              "baseFormType": "text"\n            }\n          ]\n        },\n        {\n          "id": "53938E5911EDAE6CB4EA0080EF5E82C8",\n          "name": "City",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "45C11FA478E745FEA08D781CEA190FE5",\n              "name": "ID",\n              "dataType": "UTF8Char",\n              "baseFormCategory": "ID",\n              "baseFormType": "text"\n            },\n            {\n              "id": "B191051C48221A6AE44CA2B65B1B65E3",\n              "name": "Latitude",\n              "dataType": "double",\n              "baseFormCategory": "Latitude",\n              "baseFormType": "number"\n            },\n            {\n              "id": "2345134F4F5E261C3BB902A874467080",\n              "name": "Longitude",\n              "dataType": "double",\n              "baseFormCategory": "Longitude",\n              "baseFormType": "number"\n            }\n          ]\n        },\n        {\n          "id": "5393A88511EDAE6CB4B70080EF5E82C8",\n          "name": "Date",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "45C11FA478E745FEA08D781CEA190FE5",\n              "name": "ID",\n              "dataType": "date",\n              "baseFormCategory": "ID",\n              "baseFormType": "date"\n            }\n          ]\n        },\n        {\n          "id": "5393920F11EDAE6CB4EA0080EF5E82C8",\n          "name": "Cost",\n          "type": "metric"\n        },\n        {\n          "id": "5393A4C411EDAE6CB4EA0080EF5E82C8",\n          "name": "Revenue",\n          "type": "metric"\n        },\n        {\n          "id": "5393AC4F11EDAE6CB4B70080EF5E82C8",\n          "name": "Open",\n          "type": "metric"\n        },\n        {\n          "id": "5393B00411EDAE6CB4B70080EF5E82C8",\n          "name": "High",\n          "type": "metric"\n        },\n        {\n          "id": "5393B38911EDAE6CB4B70080EF5E82C8",\n          "name": "Low",\n          "type": "metric"\n        },\n        {\n          "id": "5393B6F911EDAE6CB4B80080EF5E82C8",\n          "name": "Close*",\n          "type": "metric"\n        },\n        {\n          "id": "FFA3229E11EDAE6CB4EC0080EF5E82C8",\n          "name": "Volume",\n          "type": "metric"\n        },\n        {\n          "id": "5321C49511EDAE6C01580080EF5E820D",\n          "name": "Row Count - data less.csv",\n          "type": "metric"\n        }\n      ],\n      "rows": [\n        {\n          "id": "539386D911EDAE6CB4B80080EF5E82C8",\n          "name": "Month",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "45C11FA478E745FEA08D781CEA190FE5",\n              "name": "ID",\n              "dataType": "UTF8Char",\n              "baseFormCategory": "ID",\n              "baseFormType": "text"\n            }\n          ]\n        },\n        {\n          "id": "53938E5911EDAE6CB4EA0080EF5E82C8",\n          "name": "City",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "45C11FA478E745FEA08D781CEA190FE5",\n              "name": "ID",\n              "dataType": "UTF8Char",\n              "baseFormCategory": "ID",\n              "baseFormType": "text"\n            },\n            {\n              "id": "B191051C48221A6AE44CA2B65B1B65E3",\n              "name": "Latitude",\n              "dataType": "double",\n              "baseFormCategory": "Latitude",\n              "baseFormType": "number"\n            },\n            {\n              "id": "2345134F4F5E261C3BB902A874467080",\n              "name": "Longitude",\n              "dataType": "double",\n              "baseFormCategory": "Longitude",\n              "baseFormType": "number"\n            }\n          ]\n        },\n        {\n          "id": "5393A88511EDAE6CB4B70080EF5E82C8",\n          "name": "Date",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "45C11FA478E745FEA08D781CEA190FE5",\n              "name": "ID",\n              "dataType": "date",\n              "baseFormCategory": "ID",\n              "baseFormType": "date"\n            }\n          ]\n        }\n      ],\n      "columns": [\n        {\n          "id": "00000000000000000000000000000000",\n          "name": "Metrics",\n          "type": "templateMetrics",\n          "elements": [\n            {\n              "name": "Cost",\n              "id": "5393920F11EDAE6CB4EA0080EF5E82C8",\n              "type": "metric",\n              "dataType": "integer"\n            },\n            {\n              "name": "Revenue",\n              "id": "5393A4C411EDAE6CB4EA0080EF5E82C8",\n              "type": "metric",\n              "dataType": "integer"\n            },\n            {\n              "name": "Open",\n              "id": "5393AC4F11EDAE6CB4B70080EF5E82C8",\n              "type": "metric",\n              "dataType": "integer"\n            },\n            {\n              "name": "High",\n              "id": "5393B00411EDAE6CB4B70080EF5E82C8",\n              "type": "metric",\n              "dataType": "integer"\n            },\n            {\n              "name": "Low",\n              "id": "5393B38911EDAE6CB4B70080EF5E82C8",\n              "type": "metric",\n              "dataType": "integer"\n            },\n            {\n              "name": "Close*",\n              "id": "5393B6F911EDAE6CB4B80080EF5E82C8",\n              "type": "metric",\n              "dataType": "integer"\n            },\n            {\n              "name": "Volume",\n              "id": "FFA3229E11EDAE6CB4EC0080EF5E82C8",\n              "type": "metric",\n              "dataType": "double"\n            },\n            {\n              "name": "Row Count - data less.csv",\n              "id": "5321C49511EDAE6C01580080EF5E820D",\n              "type": "metric",\n              "dataType": "reserved"\n            }\n          ]\n        }\n      ],\n      "pageBy": []\n    }\n  ],\n  "currentChapter": "K36",\n  "chapters": [\n    {\n      "key": "K36",\n      "name": "Visualizations",\n      "pages": [\n        {\n          "key": "WF5CD888982CE49B49C32375100EA57F3",\n          "name": "Common Formatting",\n          "visualizations": [\n            {\n              "key": "WDDB796D2FE074073BBDD4481F10141A2",\n              "name": "Container Title",\n              "visualizationType": "pie_chart"\n            },\n            {\n              "key": "WF98AFCE7C5CC43AE863D259D2BB194B7",\n              "name": "Container Title",\n              "visualizationType": "bar_chart"\n            }\n          ],\n          "fields": [\n            {\n              "key": "W63DD88F95C0D45F0AE26B6756D1EAF1C",\n              "name": "Image 1",\n              "fieldType": "image"\n            },\n            {\n              "key": "W56DA67A60B774687A29B269E20540774",\n              "name": "Text 1",\n              "fieldType": "text"\n            }\n          ]\n        },\n        {\n          "key": "K53",\n          "name": "Grid",\n          "visualizations": [\n            {\n              "key": "84E7D763373D4C599028919AB4EB329E",\n              "name": "Title of your visualization",\n              "visualizationType": "microcharts",\n              "columnSets": [\n                {\n                  "key": "K52",\n                  "name": "Column Set 1"\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "key": "W95CE01B0772A40BB94157E6830161AAE",\n          "name": "Graphs",\n          "visualizations": [\n            {\n              "key": "WF8AC10C1B9124B43965009966326E958",\n              "name": "Title of your visualization",\n              "visualizationType": "bar_chart"\n            }\n          ]\n        },\n        {\n          "key": "W1E35B86FD86B4EAF8FB384A9078D51B2",\n          "name": "KPI",\n          "visualizations": [\n            {\n              "key": "W9C47F6165DC64E168D39ED793C916FDD",\n              "name": "Title of your visualization",\n              "visualizationType": "kpi"\n            }\n          ]\n        },\n        {\n          "key": "W3BF7477D8F1849128F311BAE883E8FDE",\n          "name": "Multi-Metri KPI",\n          "visualizations": [\n            {\n              "key": "W2975C3D6AB024D38A4A09DBC2A4485B6",\n              "name": "Title of your visualization",\n              "visualizationType": "multi_metric_kpi"\n            }\n          ]\n        },\n        {\n          "key": "W8FB185A3C630414699948113D55CAE7B",\n          "name": "Comparison KPI",\n          "visualizations": [\n            {\n              "key": "W3D6CBE3886CE4C1FA5B3A68AF9BF2563",\n              "name": "Title of your visualization",\n              "visualizationType": "comparison_kpi"\n            }\n          ]\n        },\n        {\n          "key": "WCDDED8563C3F4174A43C4480DAA772BF",\n          "name": "Gauge",\n          "visualizations": [\n            {\n              "key": "W3E9B87D1348D49EDA7EB5C101D26FA96",\n              "name": "Title of your visualization",\n              "visualizationType": "gauge"\n            }\n          ]\n        },\n        {\n          "key": "W2543E6EA4D744CF39414287C9EAA891C",\n          "name": "Geospatial Service",\n          "visualizations": [\n            {\n              "key": "W1B7285588F684484A51943342D1F8F3A",\n              "name": "Title of your visualization",\n              "visualizationType": "geospatial_service"\n            }\n          ]\n        },\n        {\n          "key": "WD0E88881BF7F40B4945D30670C239230",\n          "name": "Map",\n          "visualizations": [\n            {\n              "key": "WBE059BF5BBBA47EDA69C6E9671EBD67D",\n              "name": "Title of your visualization",\n              "visualizationType": "google_map"\n            }\n          ]\n        },\n        {\n          "key": "W8E574508DE914D1FA03BA25AA641E53C",\n          "name": "Heatmap",\n          "visualizations": [\n            {\n              "key": "W455DECA8E98A4B2EA11F0D585F59C088",\n              "name": "Title of your visualization",\n              "visualizationType": "heat_map"\n            }\n          ]\n        },\n        {\n          "key": "W0FC6E42EB71A424AB84EF6EB1375C289",\n          "name": "Waterfall",\n          "visualizations": [\n            {\n              "key": "WB5D2160AFB154F7AB3F072349D43C885",\n              "name": "Title of your visualization",\n              "visualizationType": "waterfall"\n            }\n          ]\n        },\n        {\n          "key": "W158206C59B174E61920FD1E5BEFE618D",\n          "name": "Box Plot",\n          "visualizations": [\n            {\n              "key": "W986776FFCC7C49C4B6490C9C5743470D",\n              "name": "Title of your visualization",\n              "visualizationType": "box_plot"\n            }\n          ]\n        },\n        {\n          "key": "W1F6B2A2A0CCD41E8A101C172C7508F17",\n          "name": "Network",\n          "visualizations": [\n            {\n              "key": "WBF6204F34726491D8C0465E7E8606CF8",\n              "name": "Title of your visualization",\n              "visualizationType": "network"\n            }\n          ]\n        },\n        {\n          "key": "W2648051442F246229E391F641C618A88",\n          "name": "Histogram",\n          "visualizations": [\n            {\n              "key": "WBF4D525218894CE49D9AA500C11272A0",\n              "name": "Title of your visualization",\n              "visualizationType": "histogram"\n            }\n          ]\n        },\n        {\n          "key": "W240B06D71E774C3B9CD08CB7064F251C",\n          "name": "Sankey",\n          "visualizations": [\n            {\n              "key": "W5A6478F094894DC0AF532AF3339448B6",\n              "name": "Title of your visualization",\n              "visualizationType": "sankey"\n            }\n          ]\n        },\n        {\n          "key": "WF58B0B8BA6C94E85AE50D778E17D180C",\n          "name": "Time Series",\n          "visualizations": [\n            {\n              "key": "WCA48BB51A18941AAA78A0F41334222AC",\n              "name": "Title of your visualization",\n              "visualizationType": "time_series"\n            }\n          ]\n        }\n      ],\n      "filters": []\n    },\n    {\n      "key": "WAB21018152CC446A96AB64FB9E937E95",\n      "name": "Components",\n      "pages": [\n        {\n          "key": "K302AD5F111EDACFC1A010080EFDED712",\n          "name": "Filter",\n          "visualizations": [\n            {\n              "key": "K302AD65F11EDACFC00000080EFDED711",\n              "name": "Title of your visualization",\n              "visualizationType": "bar_chart"\n            }\n          ],\n          "selectors": [\n            {\n              "key": "W0E10C1EAC98E4E1285F6231CD8C064D1",\n              "name": "City",\n              "summary": "",\n              "source": {\n                "id": "53938E5911EDAE6CB4EA0080EF5E82C8",\n                "name": "City",\n                "type": 12\n              },\n              "selectorType": "attribute_element_list",\n              "displayStyle": "hyper_links",\n              "hasAllOption": true,\n              "targets": [\n                {\n                  "key": "K302AD65F11EDACFC00000080EFDED711"\n                }\n              ],\n              "multiSelectionAllowed": true,\n              "currentSelection": {\n                "selectionStatus": "unfiltered",\n                "allSelected": false,\n                "elements": []\n              }\n            }\n          ]\n        },\n        {\n          "key": "W0C33FD2AB470474AAE713C026D6BEA6D",\n          "name": "Text",\n          "visualizations": [],\n          "fields": [\n            {\n              "key": "W7627510BC43A4A4FBDD049951B35EF4A",\n              "name": "Text 1",\n              "fieldType": "text"\n            }\n          ]\n        },\n        {\n          "key": "W1F733DDF1A894BF0A85BE20719F6140A",\n          "name": "Image",\n          "visualizations": [],\n          "fields": [\n            {\n              "key": "W165966080C024FBFA818CC324A30C7E3",\n              "name": "Image 1",\n              "fieldType": "image"\n            }\n          ]\n        },\n        {\n          "key": "WF4C5CD6182C0461DB133148E08827C61",\n          "name": "HTML Container",\n          "visualizations": [],\n          "fields": [\n            {\n              "key": "W8502A11C05EC4277AB8A9114CDD07187",\n              "name": "HTML Container 1",\n              "fieldType": "html"\n            }\n          ]\n        },\n        {\n          "key": "W18039B5B54534BDCA86ED5F5770AE931",\n          "name": "Shape",\n          "visualizations": [],\n          "fields": [\n            {\n              "key": "W3E6264A8CB48428099D7354E2DE00B8A",\n              "name": "Rectangle",\n              "fieldType": "shape"\n            }\n          ]\n        },\n        {\n          "key": "W113632DF45F044409DBAE5D8B7F21B4D",\n          "name": "Panel Stack",\n          "visualizations": [],\n          "panelStacks": [\n            {\n              "key": "W5991298B09C24BFFB7391D04EA3C6E38",\n              "name": "Panel Stack 1",\n              "panels": [\n                {\n                  "key": "W77A6DE2F0E774A0DBE4B63F072B26E10",\n                  "name": "Panel 1",\n                  "visualizations": [\n                    {\n                      "key": "WACB23259C5B34C4F841D0D407F5D2513",\n                      "name": "Title of your visualization",\n                      "visualizationType": "multi_metric_kpi"\n                    },\n                    {\n                      "key": "B8F50053C0504F64BCEB848F691381BF",\n                      "name": "Title of your visualization",\n                      "visualizationType": "microcharts",\n                      "columnSets": [\n                        {\n                          "key": "W84C12DD4F5F74EB8A05E25C2F97214F6",\n                          "name": "Column Set 1"\n                        }\n                      ]\n                    }\n                  ]\n                }\n              ],\n              "currentPanelKey": "W77A6DE2F0E774A0DBE4B63F072B26E10"\n            }\n          ]\n        }\n      ],\n      "filters": []\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"Sample Response Code: 201 (Dashboard theme instance is saved to metadata.)"})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(E,{...n})}):E(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>s,x:()=>r});var t=a(96540);const i={},o=t.createContext(i);function s(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);