"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6477],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(y,l(l({ref:t},m),{},{components:n})):a.createElement(y,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8431:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],s={title:"Retrieve a Selector's Definition",description:"The workflow to retrieve a selector's definition."},o=void 0,p={unversionedId:"common-workflows/manage-selectors/retrieve-a-selectors-definition",id:"common-workflows/manage-selectors/retrieve-a-selectors-definition",title:"Retrieve a Selector's Definition",description:"The workflow to retrieve a selector's definition.",source:"@site/docs/common-workflows/manage-selectors/retrieve-a-selectors-definition.md",sourceDirName:"common-workflows/manage-selectors",slug:"/common-workflows/manage-selectors/retrieve-a-selectors-definition",permalink:"/rest-api-docs/common-workflows/manage-selectors/retrieve-a-selectors-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-selectors/retrieve-a-selectors-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Retrieve a Selector's Definition",description:"The workflow to retrieve a selector's definition."},sidebar:"tutorialSidebar",previous:{title:"Manage Selectors",permalink:"/rest-api-docs/common-workflows/manage-selectors/"},next:{title:"Set Selector Type",permalink:"/rest-api-docs/common-workflows/manage-selectors/set-selector-type"}},m={},c=[{value:"API: GET /api/v2/dossiers/{dossierId}/definition",id:"api-get-apiv2dossiersdossieriddefinition",level:2},{value:"Parameters",id:"parameters",level:3},{value:"API: GET /api/v2/dossiers/{dossierId}/instances/{instanceId}/definition",id:"api-get-apiv2dossiersdossieridinstancesinstanceiddefinition",level:2},{value:"Parameters",id:"parameters-1",level:3}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can retrieve a selector's definition using the following APIs."),(0,i.kt)("h2",{id:"api-get-apiv2dossiersdossieriddefinition"},"API: ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList_1"},"GET /api/v2/dossiers/{dossierId}/definition")),(0,i.kt)("p",null,"This endpoint fetches a selector's definition and dataset information of a dossier (without executing it). The following details are returned:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Current chapter key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dataset information:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Available object information"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output example for a dossier and dossier instance definition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": "D29DC6464099A518DE19FEA4C25D346B", "name": "temp Dossier", "hasPrompt": false, "chapters": [ { "key": "K36", "name": "Chapter 1", "pages": [ { "key": "K53", "name": "Page 1", "visualizations": [ { "key": "K52", "name": "Visualization 1", "filteredTargetVisualizations": [ { "key": "W65" } ] }, { "key": "W62", "name": "Visualization 2" }, { "key": "W65", "name": "Visualization 3" } ], "inCanvasSelectors": [] } ], "filters": [ { "key": "W134", "name": "Cost", "summary": "((Cost Between 5707743.0 And 21191039.0))", "source": { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "type": 4 }, "synchronizedAcrossChapter":false "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "expression": { "operator": "And", "operands": [ { "operator": "Between", "operands": [ { "type": "metric", "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost" }, { "type": "constant", "dataType": "Real", "value": "5707743" }, { "type": "constant", "dataType": "Real", "value": "21191039" } ] } ] }, "selections": [] }, { "key": "W138", "name": "Category", "summary": "Category In List Electronics", "source": { "id": "8D679D3711D3E4981000E787EC6DE8A4", "type": 12 }, "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "selections": [ { "id": "h2;8D679D3711D3E4981000E787EC6DE8A4", "name": "Electronics" } ] } ] } ], "datasets": [ { "name": "8DFA1ABC41C2F43530645FA90B80C745", "id": "New Dataset 1", "availableObjects": [ { "id": "8D679D3711D3E4981000E787EC6DE8A4", "name": "Category", "type": "attribute", "forms": [ { "id": "CCFBE2A5EADB4F50941FB879CCF1721C", "name": "DESC" } ] }, { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost", "type": "metric" } ] } ] }\n')))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filter definition:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Element list selector (in chapter-level, in canvas)"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output examples for an element list selector definition"),(0,i.kt)("p",{parentName:"li"},"Common attribute element list:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W228",\n  "name": "Category",\n  "summary": "Category In List Books, Movies",\n  "source": {\n    "id": "8D679D3711D3E4981000E787EC6DE8A4",\n    "name": "Category",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_element_list",\n  "displayStyle": "check_boxes",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "allSelected": false,\n    "elements": [\n      { "id": "h1;8D679D3711D3E4981000E787EC6DE8A4", "name": "Books" },\n      { "id": "h3;8D679D3711D3E4981000E787EC6DE8A4", "name": "Movies" }\n    ]\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"Dynamic selection applied:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W77",\n  "name": "Year",\n  "summary": "",\n  "source": {\n    "id": "8D679D5111D3E4981000E787EC6DE8A4",\n    "name": "Year",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_element_list",\n  "displayStyle": "check_boxes",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "dynamicSelectionApplied": true,\n    "allSelected": false,\n    "elements": []\n  },\n  "defaultDynamicSelection": { "status": "first_elements", "quantity": 1 }\n}\n')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Attribute qualification selector (in chapter-level, in canvas)"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output example for an attribute qualification selector definition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W230",\n  "name": "Daytime",\n  "summary": "((Daytime@ID Between \'1/1/2014 12:00:14 AM\' And \'12/31/2016 11:59:59 PM\'))",\n  "source": {\n    "id": "664D1AC647064FE9B35FF8A09780BC48",\n    "name": "Daytime",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_qualification",\n  "displayStyle": "attribute_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Between",\n      "operands": [\n        {\n          "type": "form",\n          "attribute": {\n            "id": "664D1AC647064FE9B35FF8A09780BC48",\n            "name": "Daytime"\n          },\n          "form": { "id": "45C11FA478E745FEA08D781CEA190FE5", "name": "ID" }\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "1/1/2014 12:00:14 AM"\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "12/31/2016 11:59:59 PM"\n        }\n      ]\n    }\n  }\n}\n')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Metric qualification selector (in chapter-level, in canvas)"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output examples for a metric qualification selector definition"),(0,i.kt)("p",{parentName:"li"},'"Greater than" case:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W232",\n  "name": "Cost",\n  "summary": "Cost >= 1000.0",\n  "source": {\n    "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n    "name": "Cost",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "GreaterEqual",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        { "type": "constant", "dataType": "Real", "value": "1000" }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},'"Not in" case:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W232",\n  "name": "Cost",\n  "summary": "Cost [Not In] (1000.0,2000.0,3000.0)",\n  "source": {\n    "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n    "name": "Cost",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "NotIn",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        {\n          "type": "constants",\n          "dataType": "Real",\n          "values": ["1000", "2000", "3000"]\n        }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},'"Highest rank" case:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W234",\n  "name": "Revenue",\n  "summary": "Rank&lt;ASC=False , ByValue=False &gt;(Revenue) <= 0.4",\n  "source": {\n    "id": "4C05177011D3E877C000B3B2D86C964F",\n    "name": "Revenue",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Percent.Top",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "4C05177011D3E877C000B3B2D86C964F",\n          "name": "Revenue"\n        },\n        { "type": "constant", "dataType": "Real", "value": "40%" }\n      ]\n    }\n  }\n}\n')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Object replacement selector (in-canvas)"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output example for an object replacement selector definition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W203",\n  "name": "Selector 2",\n  "summary": "Selector 2 In List Cost",\n  "selectorType": "object_replacement",\n  "displayStyle": "hyper_links",\n  "hasAllOption": false,\n  "targets": [{ "key": "K52" }],\n  "multiSelectionAllowed": false,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "objectItems": [\n      {\n        "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      }\n    ]\n  },\n  "availableObjectItems": [\n    {\n      "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n      "name": "Cost"\n    },\n    {\n      "id": "i381980B211D40BC8C000C8906B98494F;381980B211D40BC8C000C8906B98494F",\n      "name": "Discount"\n    },\n    {\n      "id": "i4C051DB611D3E877C000B3B2D86C964F;4C051DB611D3E877C000B3B2D86C964F",\n      "name": "Profit"\n    }\n  ]\n}\n')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set visualization as filter"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output example for a visualization as filter definition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "visualizationKey": "W217",\n  "selectorType": "visualization_as_filter",\n  "targets": [{ "key": "W188" }, { "key": "W193" }],\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Or",\n      "operands": [\n        {\n          "operator": "In",\n          "operands": [\n            {\n              "type": "attribute",\n              "id": "8D679D5111D3E4981000E787EC6DE8A4",\n              "name": "Year"\n            },\n            {\n              "type": "elements",\n              "elements": [\n                {\n                  "id": "8D679D5111D3E4981000E787EC6DE8A4:2014",\n                  "name": "2014"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n'))))))),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization token"),(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectId"),(0,i.kt)("td",{parentName:"tr",align:null},"Project Id"),(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dossierId"),(0,i.kt)("td",{parentName:"tr",align:null},"dossier id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")))),(0,i.kt)("h2",{id:"api-get-apiv2dossiersdossieridinstancesinstanceiddefinition"},"API: ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList_2"},"GET /api/v2/dossiers/{dossierId}/instances/{instanceId}/definition")),(0,i.kt)("p",null,"This endpoint fetches a selector's definition and dataset information from an executed dossier. The following details are returned:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Current chapter key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dataset information:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Available object information"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output example for a dossier and dossier instance definition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": "D29DC6464099A518DE19FEA4C25D346B", "name": "temp Dossier", "hasPrompt": false, "chapters": [ { "key": "K36", "name": "Chapter 1", "pages": [ { "key": "K53", "name": "Page 1", "visualizations": [ { "key": "K52", "name": "Visualization 1", "filteredTargetVisualizations": [ { "key": "W65" } ] }, { "key": "W62", "name": "Visualization 2" }, { "key": "W65", "name": "Visualization 3" } ], "inCanvasSelectors": [] } ], "filters": [ { "key": "W134", "name": "Cost", "summary": "((Cost Between 5707743.0 And 21191039.0))", "source": { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "type": 4 }, "synchronizedAcrossChapter":false "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "expression": { "operator": "And", "operands": [ { "operator": "Between", "operands": [ { "type": "metric", "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost" }, { "type": "constant", "dataType": "Real", "value": "5707743" }, { "type": "constant", "dataType": "Real", "value": "21191039" } ] } ] }, "selections": [] }, { "key": "W138", "name": "Category", "summary": "Category In List Electronics", "source": { "id": "8D679D3711D3E4981000E787EC6DE8A4", "type": 12 }, "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "selections": [ { "id": "h2;8D679D3711D3E4981000E787EC6DE8A4", "name": "Electronics" } ] } ] } ], "datasets": [ { "name": "8DFA1ABC41C2F43530645FA90B80C745", "id": "New Dataset 1", "availableObjects": [ { "id": "8D679D3711D3E4981000E787EC6DE8A4", "name": "Category", "type": "attribute", "forms": [ { "id": "CCFBE2A5EADB4F50941FB879CCF1721C", "name": "DESC" } ] }, { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost", "type": "metric" } ] } ] }\n')))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filter definition:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Element list selector (in chapter-level, in canvas)"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output examples for an element list selector definition"),(0,i.kt)("p",{parentName:"li"},"Common attribute element list:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W228",\n  "name": "Category",\n  "summary": "Category In List Books, Movies",\n  "source": {\n    "id": "8D679D3711D3E4981000E787EC6DE8A4",\n    "name": "Category",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_element_list",\n  "displayStyle": "check_boxes",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "allSelected": false,\n    "elements": [\n      { "id": "h1;8D679D3711D3E4981000E787EC6DE8A4", "name": "Books" },\n      { "id": "h3;8D679D3711D3E4981000E787EC6DE8A4", "name": "Movies" }\n    ]\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"Dynamic selection applied:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W77",\n  "name": "Year",\n  "summary": "",\n  "source": {\n    "id": "8D679D5111D3E4981000E787EC6DE8A4",\n    "name": "Year",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_element_list",\n  "displayStyle": "check_boxes",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "dynamicSelectionApplied": true,\n    "allSelected": false,\n    "elements": []\n  },\n  "defaultDynamicSelection": { "status": "first_elements", "quantity": 1 }\n}\n')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Attribute qualification selector (in chapter-level, in canvas)"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output example for an attribute qualification selector definition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W230",\n  "name": "Daytime",\n  "summary": "((Daytime@ID Between \'1/1/2014 12:00:14 AM\' And \'12/31/2016 11:59:59 PM\'))",\n  "source": {\n    "id": "664D1AC647064FE9B35FF8A09780BC48",\n    "name": "Daytime",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_qualification",\n  "displayStyle": "attribute_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Between",\n      "operands": [\n        {\n          "type": "form",\n          "attribute": {\n            "id": "664D1AC647064FE9B35FF8A09780BC48",\n            "name": "Daytime"\n          },\n          "form": { "id": "45C11FA478E745FEA08D781CEA190FE5", "name": "ID" }\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "1/1/2014 12:00:14 AM"\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "12/31/2016 11:59:59 PM"\n        }\n      ]\n    }\n  }\n}\n')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Metric qualification selector (in chapter-level, in canvas)"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output examples for a metric qualification selector definition"),(0,i.kt)("p",{parentName:"li"},'"Greater than" case:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W232",\n  "name": "Cost",\n  "summary": "Cost >= 1000.0",\n  "source": {\n    "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n    "name": "Cost",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "GreaterEqual",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        { "type": "constant", "dataType": "Real", "value": "1000" }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},'"Not in" case:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W232",\n  "name": "Cost",\n  "summary": "Cost [Not In] (1000.0,2000.0,3000.0)",\n  "source": {\n    "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n    "name": "Cost",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "NotIn",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        {\n          "type": "constants",\n          "dataType": "Real",\n          "values": ["1000", "2000", "3000"]\n        }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},'"Highest rank" case:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W234",\n  "name": "Revenue",\n  "summary": "Rank&lt;ASC=False , ByValue=False &gt;(Revenue) <= 0.4",\n  "source": {\n    "id": "4C05177011D3E877C000B3B2D86C964F",\n    "name": "Revenue",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Percent.Top",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "4C05177011D3E877C000B3B2D86C964F",\n          "name": "Revenue"\n        },\n        { "type": "constant", "dataType": "Real", "value": "40%" }\n      ]\n    }\n  }\n}\n')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Object replacement selector (in-canvas)"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output example for an object replacement selector definition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W203",\n  "name": "Selector 2",\n  "summary": "Selector 2 In List Cost",\n  "selectorType": "object_replacement",\n  "displayStyle": "hyper_links",\n  "hasAllOption": false,\n  "targets": [{ "key": "K52" }],\n  "multiSelectionAllowed": false,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "objectItems": [\n      {\n        "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      }\n    ]\n  },\n  "availableObjectItems": [\n    {\n      "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n      "name": "Cost"\n    },\n    {\n      "id": "i381980B211D40BC8C000C8906B98494F;381980B211D40BC8C000C8906B98494F",\n      "name": "Discount"\n    },\n    {\n      "id": "i4C051DB611D3E877C000B3B2D86C964F;4C051DB611D3E877C000B3B2D86C964F",\n      "name": "Profit"\n    }\n  ]\n}\n')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set visualization as filter"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output example for a visualization as filter definition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "visualizationKey": "W217",\n  "selectorType": "visualization_as_filter",\n  "targets": [{ "key": "W188" }, { "key": "W193" }],\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Or",\n      "operands": [\n        {\n          "operator": "In",\n          "operands": [\n            {\n              "type": "attribute",\n              "id": "8D679D5111D3E4981000E787EC6DE8A4",\n              "name": "Year"\n            },\n            {\n              "type": "elements",\n              "elements": [\n                {\n                  "id": "8D679D5111D3E4981000E787EC6DE8A4:2014",\n                  "name": "2014"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n'))))))),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization token"),(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectId"),(0,i.kt)("td",{parentName:"tr",align:null},"Project Id"),(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dossierId"),(0,i.kt)("td",{parentName:"tr",align:null},"dossier id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"instanceId"),(0,i.kt)("td",{parentName:"tr",align:null},"dossier instance id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")))))}d.isMDXComponent=!0}}]);