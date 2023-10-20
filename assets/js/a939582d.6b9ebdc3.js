"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8233],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return y}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(t),y=r,c=u["".concat(p,".").concat(y)]||u[y]||s[y]||i;return t?a.createElement(c,o(o({ref:n},d),{},{components:t})):a.createElement(c,o({ref:n},d))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89785:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var a,r=t(83117),i=t(80102),o=(t(67294),t(3905)),l=["components"],p={title:"Retrieve the hierarchy of document",Description:"Retrieve the hierarchy of document using the MicroStrategy REST API."},m=void 0,d={unversionedId:"common-workflows/analytics/manage-documents/retrieve-document/retrieve-the-hierarchy-of-a-document",id:"common-workflows/analytics/manage-documents/retrieve-document/retrieve-the-hierarchy-of-a-document",title:"Retrieve the hierarchy of document",description:"Learn more about MicroStrategy REST API Playground here.",source:"@site/docs/common-workflows/analytics/manage-documents/retrieve-document/retrieve-the-hierarchy-of-a-document.md",sourceDirName:"common-workflows/analytics/manage-documents/retrieve-document",slug:"/common-workflows/analytics/manage-documents/retrieve-document/retrieve-the-hierarchy-of-a-document",permalink:"/rest-api-docs/common-workflows/analytics/manage-documents/retrieve-document/retrieve-the-hierarchy-of-a-document",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-documents/retrieve-document/retrieve-the-hierarchy-of-a-document.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Retrieve the hierarchy of document",Description:"Retrieve the hierarchy of document using the MicroStrategy REST API."},sidebar:"tutorialSidebar",previous:{title:"Retrieve documents",permalink:"/rest-api-docs/common-workflows/analytics/manage-documents/get-document-list/"},next:{title:"Manage dossiers",permalink:"/rest-api-docs/common-workflows/analytics/manage-dossiers/"}},s={},u=[{value:"Retrieve the hierarchy of a document directly",id:"retrieve-the-hierarchy-of-a-document-directly",level:2},{value:"Request URL",id:"request-url",level:3},{value:"Sample Curl Request",id:"sample-curl-request",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"HTTP Status Codes",id:"http-status-codes",level:3}],y=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),c={toc:u};function k(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(y,{since:"2021 Update 10",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve the document definition directly using the MicroStrategy REST API."),(0,o.kt)("p",null,"You want to retrieve the document's definition from \u201cMicroStrategy Tutorial\u201c project. The document ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"643209B54CC84199C48A238ACB6CB621"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,o.kt)("h2",{id:"retrieve-the-hierarchy-of-a-document-directly"},"Retrieve the hierarchy of a document directly"),(0,o.kt)("p",null,"Retrieve hierarchy of a document by document ID in a specific project."),(0,o.kt)("h3",{id:"request-url"},"Request URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"GET /api/documents/{id}/definition\n")),(0,o.kt)("h3",{id:"sample-curl-request"},"Sample Curl Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' 'http://demo.microstrategy.com/MicroStrategyLibrary/api/documents/643209B54CC84199C48A238ACB6CB621/definition' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: 7tb1sp0u7te3t73fvu5qn368r' \\\n  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,o.kt)("h3",{id:"request-headers"},"Request Headers"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"X-MSTR-AuthToken")),(0,o.kt)("td",{parentName:"tr",align:null},"Header"),(0,o.kt)("td",{parentName:"tr",align:null},"Authorization token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"X-MSTR-ProjectID")),(0,o.kt)("td",{parentName:"tr",align:null},"Header"),(0,o.kt)("td",{parentName:"tr",align:null},"Project ID")))),(0,o.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fields")),(0,o.kt)("td",{parentName:"tr",align:null},"Query"),(0,o.kt)("td",{parentName:"tr",align:null},"Comma-separated, top-level field whitelist that allows the client to selectively retrieve part of the response model.")))),(0,o.kt)("h3",{id:"response"},"Response"),(0,o.kt)("p",null,"If successful, this API call returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")," status code along with the hierarchy of a document in the response body. The response body follows the ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentTreeDefinition")," schema."),(0,o.kt)("h4",{id:"sample-response"},"Sample Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "643209B54CC84199C48A238ACB6CB621",\n  "name": "Cockpit",\n  "datasets": [\n    {\n      "name": "Cockpit Dataset",\n      "id": "E0B145DF4EC22379FDC3AEAD21392EB2",\n      "availableObjects": [\n        {\n          "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n          "name": "Subcategory",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "name": "DESC",\n              "dataType": "varChar",\n              "baseFormCategory": "DESC",\n              "baseFormType": "text"\n            }\n          ]\n        },\n        {\n          "id": "8D679D4A11D3E4981000E787EC6DE8A4",\n          "name": "Quarter",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "name": "DESC",\n              "dataType": "varChar",\n              "baseFormCategory": "DESC",\n              "baseFormType": "text"\n            }\n          ]\n        },\n        {\n          "id": "8D679D4B11D3E4981000E787EC6DE8A4",\n          "name": "Region",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "name": "DESC",\n              "dataType": "varChar",\n              "baseFormCategory": "DESC",\n              "baseFormType": "text"\n            }\n          ]\n        },\n        {\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "name": "DESC",\n              "dataType": "varChar",\n              "baseFormCategory": "DESC",\n              "baseFormType": "text"\n            }\n          ]\n        },\n        {\n          "id": "4C05177011D3E877C000B3B2D86C964F",\n          "name": "Revenue",\n          "type": "metric"\n        },\n        {\n          "id": "4C051DB611D3E877C000B3B2D86C964F",\n          "name": "Profit",\n          "type": "metric"\n        },\n        {\n          "id": "A0458DCF46FC7BECE12290A486E30E85",\n          "name": "Last Quarter\'s Revenue",\n          "type": "metric"\n        },\n        {\n          "id": "07DED03E4B9E165A6E273FABEFF78E89",\n          "name": "Last Quarter\'s Profit",\n          "type": "metric"\n        },\n        {\n          "id": "2680DF9E11D5C3FEC0000B881FDA1A4F",\n          "name": "Profit Margin",\n          "type": "metric"\n        },\n        {\n          "id": "2EB83FAB41D98A679CE415913E82D0DD",\n          "name": "Last Quarter\'s Profit Margin",\n          "type": "metric"\n        },\n        {\n          "id": "1FAF96994873E7CEFC71BDB269522636",\n          "name": "Profit Forecast",\n          "type": "metric"\n        },\n        {\n          "id": "8D7D59C144AB891C57FEFA873ABE1C92",\n          "name": "Revenue Forecast",\n          "type": "metric"\n        },\n        {\n          "id": "C701B0A045218C0949793BB6499CCECB",\n          "name": "Profit Margin Forecast",\n          "type": "metric"\n        }\n      ],\n      "rows": [\n        {\n          "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n          "name": "Subcategory",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "name": "DESC",\n              "dataType": "varChar",\n              "baseFormCategory": "DESC",\n              "baseFormType": "text"\n            }\n          ]\n        },\n        {\n          "id": "8D679D4A11D3E4981000E787EC6DE8A4",\n          "name": "Quarter",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "name": "DESC",\n              "dataType": "varChar",\n              "baseFormCategory": "DESC",\n              "baseFormType": "text"\n            }\n          ]\n        },\n        {\n          "id": "8D679D4B11D3E4981000E787EC6DE8A4",\n          "name": "Region",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "name": "DESC",\n              "dataType": "varChar",\n              "baseFormCategory": "DESC",\n              "baseFormType": "text"\n            }\n          ]\n        },\n        {\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category",\n          "type": "attribute",\n          "forms": [\n            {\n              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "name": "DESC",\n              "dataType": "varChar",\n              "baseFormCategory": "DESC",\n              "baseFormType": "text"\n            }\n          ]\n        }\n      ],\n      "columns": [\n        {\n          "id": "00000000000000000000000000000000",\n          "name": "Metrics",\n          "type": "templateMetrics",\n          "elements": [\n            {\n              "name": "Revenue",\n              "id": "4C05177011D3E877C000B3B2D86C964F",\n              "type": "metric",\n              "dataType": "unknown"\n            },\n            {\n              "name": "Profit",\n              "id": "4C051DB611D3E877C000B3B2D86C964F",\n              "type": "metric",\n              "dataType": "unknown"\n            },\n            {\n              "name": "Last Quarter\'s Revenue",\n              "id": "A0458DCF46FC7BECE12290A486E30E85",\n              "type": "metric",\n              "dataType": "unknown"\n            },\n            {\n              "name": "Last Quarter\'s Profit",\n              "id": "07DED03E4B9E165A6E273FABEFF78E89",\n              "type": "metric",\n              "dataType": "unknown"\n            },\n            {\n              "name": "Profit Margin",\n              "id": "2680DF9E11D5C3FEC0000B881FDA1A4F",\n              "type": "metric",\n              "dataType": "unknown"\n            },\n            {\n              "name": "Last Quarter\'s Profit Margin",\n              "id": "2EB83FAB41D98A679CE415913E82D0DD",\n              "type": "metric",\n              "dataType": "unknown"\n            },\n            {\n              "name": "Profit Forecast",\n              "id": "1FAF96994873E7CEFC71BDB269522636",\n              "type": "metric",\n              "dataType": "unknown"\n            },\n            {\n              "name": "Revenue Forecast",\n              "id": "8D7D59C144AB891C57FEFA873ABE1C92",\n              "type": "metric",\n              "dataType": "unknown"\n            },\n            {\n              "name": "Profit Margin Forecast",\n              "id": "C701B0A045218C0949793BB6499CCECB",\n              "type": "metric",\n              "dataType": "unknown"\n            }\n          ]\n        }\n      ],\n      "pageBy": []\n    }\n  ],\n  "currentLayout": "K3",\n  "layouts": [\n    {\n      "key": "K3",\n      "name": "Layout 1",\n      "visualizations": [\n        {\n          "key": "K17",\n          "name": "GridGraph1",\n          "visualizationType": "grid"\n        },\n        {\n          "key": "K36",\n          "name": "GridGraph3",\n          "visualizationType": "grid"\n        },\n        {\n          "key": "W112",\n          "name": "GridGraph112",\n          "visualizationType": "grid"\n        },\n        {\n          "key": "W83",\n          "name": "GridGraph83",\n          "visualizationType": "grid"\n        },\n        {\n          "key": "K45",\n          "name": "GridGraph4",\n          "visualizationType": "grid"\n        },\n        {\n          "key": "K46",\n          "name": "GridGraph5",\n          "visualizationType": "grid"\n        },\n        {\n          "key": "W31",\n          "name": "GridGraph31",\n          "visualizationType": "grid"\n        },\n        {\n          "key": "W29",\n          "name": "GridGraph29",\n          "visualizationType": "grid"\n        }\n      ],\n      "fields": [\n        {\n          "key": "W139",\n          "name": "Text139",\n          "fieldType": "text"\n        },\n        {\n          "key": "W76",\n          "name": "Rectangle76",\n          "fieldType": "shape"\n        },\n        {\n          "key": "W28",\n          "name": "Rectangle28",\n          "fieldType": "shape"\n        },\n        {\n          "key": "W77",\n          "name": "Line77",\n          "fieldType": "line"\n        },\n        {\n          "key": "W93",\n          "name": "Line93",\n          "fieldType": "line"\n        },\n        {\n          "key": "W94",\n          "name": "Line94",\n          "fieldType": "line"\n        },\n        {\n          "key": "W80",\n          "name": "Text78",\n          "fieldType": "text"\n        },\n        {\n          "key": "W87",\n          "name": "Text87",\n          "fieldType": "text"\n        },\n        {\n          "key": "W88",\n          "name": "Text87",\n          "fieldType": "text"\n        },\n        {\n          "key": "W78",\n          "name": "Text78",\n          "fieldType": "text"\n        },\n        {\n          "key": "W79",\n          "name": "Text78",\n          "fieldType": "text"\n        },\n        {\n          "key": "W132",\n          "name": "Line132",\n          "fieldType": "line"\n        },\n        {\n          "key": "W41",\n          "name": "Text40",\n          "fieldType": "text"\n        },\n        {\n          "key": "W40",\n          "name": "Text40",\n          "fieldType": "text"\n        },\n        {\n          "key": "W82",\n          "name": "Text78",\n          "fieldType": "text"\n        },\n        {\n          "key": "W81",\n          "name": "Text78",\n          "fieldType": "text"\n        },\n        {\n          "key": "W89",\n          "name": "Text87",\n          "fieldType": "text"\n        },\n        {\n          "key": "W90",\n          "name": "Text87",\n          "fieldType": "text"\n        },\n        {\n          "key": "W91",\n          "name": "Text87",\n          "fieldType": "text"\n        },\n        {\n          "key": "W92",\n          "name": "Text87",\n          "fieldType": "text"\n        },\n        {\n          "key": "W99",\n          "name": "Line97",\n          "fieldType": "line"\n        },\n        {\n          "key": "W98",\n          "name": "Line97",\n          "fieldType": "line"\n        },\n        {\n          "key": "W97",\n          "name": "Line97",\n          "fieldType": "line"\n        },\n        {\n          "key": "W95",\n          "name": "Line95",\n          "fieldType": "line"\n        },\n        {\n          "key": "W96",\n          "name": "Line96",\n          "fieldType": "line"\n        },\n        {\n          "key": "K35",\n          "name": "Line1",\n          "fieldType": "line"\n        },\n        {\n          "key": "W23",\n          "name": "Text23",\n          "fieldType": "text"\n        },\n        {\n          "key": "W24",\n          "name": "Text23",\n          "fieldType": "text"\n        },\n        {\n          "key": "W21",\n          "name": "Rectangle21",\n          "fieldType": "shape"\n        },\n        {\n          "key": "W25",\n          "name": "Text23",\n          "fieldType": "text"\n        }\n      ],\n      "panelStacks": [\n        {\n          "key": "W142",\n          "name": "Panel Stack142",\n          "panels": [\n            {\n              "key": "W143",\n              "name": "Panel143",\n              "visualizations": [],\n              "fields": [\n                {\n                  "key": "W117",\n                  "name": "Line117",\n                  "fieldType": "line"\n                },\n                {\n                  "key": "W116",\n                  "name": "Line116",\n                  "fieldType": "line"\n                },\n                {\n                  "key": "W140",\n                  "name": "Line140",\n                  "fieldType": "line"\n                },\n                {\n                  "key": "W141",\n                  "name": "Rectangle141",\n                  "fieldType": "shape_round"\n                },\n                {\n                  "key": "W42",\n                  "name": "Text42",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "W43",\n                  "name": "Text42",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "W148",\n                  "name": "Text148",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "W144",\n                  "name": "Text144",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "W44",\n                  "name": "Text42",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "W45",\n                  "name": "Text42",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "W46",\n                  "name": "Text42",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "K22",\n                  "name": "Text2",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "K21",\n                  "name": "Text1",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "W149",\n                  "name": "Text148",\n                  "fieldType": "text"\n                },\n                {\n                  "key": "K23",\n                  "name": "Text3",\n                  "fieldType": "text"\n                }\n              ]\n            }\n          ],\n          "currentPanelKey": "W143"\n        }\n      ]\n    },\n    {\n      "key": "K2",\n      "name": "",\n      "visualizations": []\n    },\n    {\n      "key": "K16",\n      "name": "",\n      "visualizations": []\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"datasets")," field contains an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"availableObjects"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rows"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"columns"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"pageBy")," where each object represents an element."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The attribute element includes properties such as ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"forms"),"."),(0,o.kt)("li",{parentName:"ul"},"The metric element includes only ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," properties.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"layouts")," field contains an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"visualizations"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"panelStacks")," where each object represents either ",(0,o.kt)("inlineCode",{parentName:"p"},"visualization"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"panel stack"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The visualization object includes properties such as ",(0,o.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"visualizationType"),"."),(0,o.kt)("li",{parentName:"ul"},"The field object includes properties such as ",(0,o.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"fieldType"),"."),(0,o.kt)("li",{parentName:"ul"},"The panel stack object includes properties such as ",(0,o.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"currentPanelKey")," and array of ",(0,o.kt)("inlineCode",{parentName:"li"},"panels"),". Every object in the ",(0,o.kt)("inlineCode",{parentName:"li"},"panels")," arrays represents a panel object.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The panel object includes properties such as ",(0,o.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", and an array of ",(0,o.kt)("inlineCode",{parentName:"li"},"visualizations"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"fields"),".")))),(0,o.kt)("h3",{id:"http-status-codes"},"HTTP Status Codes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"200"),(0,o.kt)("td",{parentName:"tr",align:null},"OK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"400"),(0,o.kt)("td",{parentName:"tr",align:null},"Bad Request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},"Unauthorized")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"403"),(0,o.kt)("td",{parentName:"tr",align:null},"Forbidden")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"404"),(0,o.kt)("td",{parentName:"tr",align:null},"Not Foun")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"500"),(0,o.kt)("td",{parentName:"tr",align:null},"Internal Server Error")))))}k.isMDXComponent=!0}}]);