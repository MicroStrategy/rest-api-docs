"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5225],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8457:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"Set Selector Type",description:"You can set the different types of selector using the following requests."},s=void 0,p={unversionedId:"common-workflows/manage-selectors/set-selector-type",id:"common-workflows/manage-selectors/set-selector-type",title:"Set Selector Type",description:"You can set the different types of selector using the following requests.",source:"@site/docs/common-workflows/manage-selectors/set-selector-type.md",sourceDirName:"common-workflows/manage-selectors",slug:"/common-workflows/manage-selectors/set-selector-type",permalink:"/rest-api-docs/common-workflows/manage-selectors/set-selector-type",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-selectors/set-selector-type.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1663337315,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{title:"Set Selector Type",description:"You can set the different types of selector using the following requests."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a Selector's Definition",permalink:"/rest-api-docs/common-workflows/manage-selectors/retrieve-a-selectors-definition"},next:{title:"Manage Drill Maps",permalink:"/rest-api-docs/common-workflows/manage-drill-maps/"}},u={},m=[{value:"API: <code>POST /api/dossiers/instances</code>",id:"api-post-apidossiersinstances",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"API: <code>PUT/dossiers/{dossierId}/instances/{instancesId}/filters</code>",id:"api-putdossiersdossieridinstancesinstancesidfilters",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Error Handling",id:"error-handling-1",level:3},{value:"API: <code>GET /api/dossiers/{dossierId}/instances/{instanceId}/elements</code>",id:"api-get-apidossiersdossieridinstancesinstanceidelements",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Error Handling",id:"error-handling-2",level:3}],d={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can set the different types of selector using the following requests."),(0,l.kt)("h2",{id:"api-post-apidossiersinstances"},"API: ",(0,l.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Dossiers%20and%20Documents/createDossierInstance_1"},(0,l.kt)("inlineCode",{parentName:"a"},"POST /api/dossiers/instances"))),(0,l.kt)("p",null,"This endpoint is used to execute a dossier with specific filtering criteria applied in the current chapter. You can set the following selector types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Element list selector (in chapter-level, in canvas)"),(0,l.kt)("li",{parentName:"ul"},"Attribute qualification selector (in chapter-level, in canvas)"),(0,l.kt)("li",{parentName:"ul"},"Metric qualification selector (in chapter-level, in canvas)"),(0,l.kt)("li",{parentName:"ul"},"Object replacement selector (in canvas)"),(0,l.kt)("li",{parentName:"ul"},"Visualization as filter")),(0,l.kt)("p",null,"You can also perform the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unset filter"),(0,l.kt)("li",{parentName:"ul"},"Exclude or include functionality on the element list selector with an attribute target"),(0,l.kt)("li",{parentName:"ul"},"Control flag to ignore (or not ignore) unmatched filter")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization token"),(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectId"),(0,l.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dossierId"),(0,l.kt)("td",{parentName:"tr",align:null},"dossier ID"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"Sample Input Body:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Element list selector:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W228",\n  "name": "Category",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "allSelected": false,\n    "elements": [\n      {\n        "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Books"\n      },\n      {\n        "id": "h2;8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Electronics"\n      }\n    ]\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Attribute qualification selector:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W230",\n  "name": "Daytime",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Between",\n      "operands": [\n        {\n          "type": "form",\n          "attribute": {\n            "id": "664D1AC647064FE9B35FF8A09780BC48",\n            "name": "Daytime"\n          },\n          "form": {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID"\n          }\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "1/1/2014 12:00:14 AM"\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "12/31/2016 11:59:59 PM"\n        }\n      ]\n    }\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Metric qualification selector ("highest" rank):'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W234",\n  "name": "Revenue",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Percent.Top",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "4C05177011D3E877C000B3B2D86C964F",\n          "name": "Revenue"\n        },\n        {\n          "type": "constant",\n          "dataType": "Real",\n          "value": "40%"\n        }\n      ]\n    }\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Object replacement selector:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W203",\n  "name": "Selector 2",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "objectItems": [\n      {\n        "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      }\n    ]\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Visualization as filter (choose year=2014):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "visualizationKey": "W217",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Or",\n      "operands": [\n        {\n          "operator": "In",\n          "operands": [\n            {\n              "type": "attribute",\n              "id": "8D679D5111D3E4981000E787EC6DE8A4",\n              "name": "Year"\n            },\n            {\n              "type": "elements",\n              "elements": [\n                {\n                  "id": "8D679D5111D3E4981000E787EC6DE8A4:2014",\n                  "name": "2014"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')))),(0,l.kt)("p",null,"Response Code: 201 (successfully created)"),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mid": "1D7BCE494E814EC29F95218147721042",\n  "status": 1\n}\n')),(0,l.kt)("h3",{id:"error-handling"},"Error Handling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Invalid Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Error Message"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Response Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"No matches on the filter's data input (key, name, source id, source name)"),(0,l.kt)("td",{parentName:"tr",align:null},"Following constraint violations have been detected: At least one of the following fields cannot be null or empty; key, name, source"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Previous error message: Following constraint violations have been detected: At least one of the following fields cannot be null or empty: key, name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Invalid filter key input"),(0,l.kt)("td",{parentName:"tr",align:null},"Failed to locate the filter by either key: {filter key}, or name: null, or target (attribute/metric) id: null, or target (attribute/metric) name: null, please verify this information is correct."),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Invalid filter name input"),(0,l.kt)("td",{parentName:"tr",align:null},"Failed to locate the filter by either key: null, or name: {filter name}, or target (attribute/metric) id: null, or target (attribute/metric) name: null, please verify this information is correct."),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set 'excluded' status for a metric or attribute qualification selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported excluded status for qualification selector"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"The 'excluded' status is not allowed to set for a metric or attribute qualification selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set 'excluded' status for element list selector with target on consolidation or custom group"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported 'excluded' status for element list selector with targeted on consolidation or custom group"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"The 'excluded' status is not allowed to set for an element list selector with a target a on consolidation or custom group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set dynamic selection applied to enable or disable an element list selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported setting dynamic selection applied currently, please remove the property 'dynamicSelectionApplied' in the request body"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Applying dynamic selection to enable or disable an element list selector is not supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set only support single selection selector's multi selections for attribute element list selector"),(0,l.kt)("td",{parentName:"tr",align:null},"The {filter name} filter does not support multiple selections, please verify the request"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only the attribute element list selector and object replacement selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Specifying consolidation or custom group elements only by name"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifying {Consolidation","|","custom group} elements by name is currently not supported, please verify input for {filter name} filter."),(0,l.kt)("td",{parentName:"tr",align:null},"501"),(0,l.kt)("td",{parentName:"tr",align:null},"Only attribute element list selector and object replacement selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(new expression json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Invalid operator input"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid operator - {input operator}"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Similar error in view filter functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(new expression json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Invalid constants counts"),(0,l.kt)("td",{parentName:"tr",align:null},"There should be {expected constant count} operands for operator - {input operator}"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Similar error in view filter functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(new expression json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"The operands type combination is not supported for operator - {1}"),(0,l.kt)("td",{parentName:"tr",align:null},"The operands type combination of {0} is not supported for operator - {1}"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Similar error in view filter functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(new expression json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"The first input of Rank/Percent metric qualification is not a metric"),(0,l.kt)("td",{parentName:"tr",align:null},"The first input of Rank/Percent metric qualification must be a metric"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Similar error in view filter functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(existed old metric selector json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Invalid operator input"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid operator - {input operator}"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Existed old metric selector json input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(existed old metric selector json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Invalid constant counts"),(0,l.kt)("td",{parentName:"tr",align:null},"Constants count is not right"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Similar error in view filter functionality. Existed old metric selector json input.")))),(0,l.kt)("h2",{id:"api-putdossiersdossieridinstancesinstancesidfilters"},"API: ",(0,l.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Dossiers%20and%20Documents/setFilters"},(0,l.kt)("inlineCode",{parentName:"a"},"PUT/dossiers/{dossierId}/instances/{instancesId}/filters"))),(0,l.kt)("p",null,"This endpoint is used to execute a dossier with specific filtering criteria applied in the current chapter. You can set the following selector types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Element list selector (in chapter-level, in canvas)"),(0,l.kt)("li",{parentName:"ul"},"Attribute qualification selector (in chapter-level, in canvas)"),(0,l.kt)("li",{parentName:"ul"},"Metric qualification selector (in chapter-level, in canvas)"),(0,l.kt)("li",{parentName:"ul"},"Object replacement selector (in canvas)"),(0,l.kt)("li",{parentName:"ul"},"Visualization as filter")),(0,l.kt)("p",null,"You can also perform the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unset filter"),(0,l.kt)("li",{parentName:"ul"},"Exclude or include functionality on the element list selector with an attribute target"),(0,l.kt)("li",{parentName:"ul"},"Control flag to ignore (or not ignore) unmatched filter")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization token"),(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectId"),(0,l.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dossierId"),(0,l.kt)("td",{parentName:"tr",align:null},"Dossier ID"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"Sample Input Body:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Element list selector:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W228",\n  "name": "Category",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "allSelected": false,\n    "elements": [\n      {\n        "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Books"\n      },\n      {\n        "id": "h2;8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Electronics"\n      }\n    ]\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Attribute qualification selector:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W230",\n  "name": "Daytime",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Between",\n      "operands": [\n        {\n          "type": "form",\n          "attribute": {\n            "id": "664D1AC647064FE9B35FF8A09780BC48",\n            "name": "Daytime"\n          },\n          "form": {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID"\n          }\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "1/1/2014 12:00:14 AM"\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "12/31/2016 11:59:59 PM"\n        }\n      ]\n    }\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Metric qualification selector ("highest" rank):'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W234",\n  "name": "Revenue",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Percent.Top",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "4C05177011D3E877C000B3B2D86C964F",\n          "name": "Revenue"\n        },\n        {\n          "type": "constant",\n          "dataType": "Real",\n          "value": "40%"\n        }\n      ]\n    }\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Object replacement selector:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W203",\n  "name": "Selector 2",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "objectItems": [\n      {\n        "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      }\n    ]\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Visualization as filter (choose year=2014):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "visualizationKey": "W217",\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Or",\n      "operands": [\n        {\n          "operator": "In",\n          "operands": [\n            {\n              "type": "attribute",\n              "id": "8D679D5111D3E4981000E787EC6DE8A4",\n              "name": "Year"\n            },\n            {\n              "type": "elements",\n              "elements": [\n                {\n                  "id": "8D679D5111D3E4981000E787EC6DE8A4:2014",\n                  "name": "2014"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')))),(0,l.kt)("p",null,"Response Code: 204 (no content)"),(0,l.kt)("h3",{id:"error-handling-1"},"Error Handling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Invalid Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Error Message"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Response Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"No matches on the filter's data input (key, name, source id, source name)"),(0,l.kt)("td",{parentName:"tr",align:null},"Following constraint violations have been detected: At least one of the following fields cannot be null or empty; key, name, source"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Previous error message: Following constraint violations have been detected: At least one of the following fields cannot be null or empty: key, name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Invalid filter key input"),(0,l.kt)("td",{parentName:"tr",align:null},"Failed to locate the filter by either key: {filter key}, or name: null, or target (attribute/metric) id: null, or target (attribute/metric) name: null, please verify this information is correct."),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Invalid filter name input"),(0,l.kt)("td",{parentName:"tr",align:null},"Failed to locate the filter by either key: null, or name: {filter name}, or target (attribute/metric) id: null, or target (attribute/metric) name: null, please verify this information is correct."),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set 'excluded' status for a metric or attribute qualification selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported excluded status for qualification selector"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"The 'excluded' status is not allowed to set for a metric or attribute qualification selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set 'excluded' status for element list selector with target on consolidation or custom group"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported 'excluded' status for element list selector with targeted on consolidation or custom group"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"The 'excluded' status is not allowed to set for an element list selector with a target a on consolidation or custom group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set dynamic selection applied to enable or disable an element list selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported setting dynamic selection applied currently, please remove the property 'dynamicSelectionApplied' in the request body"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Applying dynamic selection to enable or disable an element list selector is not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set only support single selection selector's multi selections for attribute element list selector"),(0,l.kt)("td",{parentName:"tr",align:null},"The {filter name} filter does not support multiple selections, please verify the request"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only the attribute element list selector and object replacement selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Specifying consolidation or custom group elements only by name"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifying {Consolidation","|","custom group} elements by name is currently not supported, please verify input for {filter name} filter."),(0,l.kt)("td",{parentName:"tr",align:null},"501"),(0,l.kt)("td",{parentName:"tr",align:null},"Only attribute element list selector and object replacement selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(new expression json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Invalid operator input"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid operator - {input operator}"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Similar error in view filter functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(new expression json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Invalid constants counts"),(0,l.kt)("td",{parentName:"tr",align:null},"There should be {expected constant count} operands for operator - {input operator}"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Similar error in view filter functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(new expression json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"The operands type combination is not supported for operator - {1}"),(0,l.kt)("td",{parentName:"tr",align:null},"The operands type combination of {0} is not supported for operator - {1}"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Similar error in view filter functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(new expression json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"The first input of Rank/Percent metric qualification is not a metric"),(0,l.kt)("td",{parentName:"tr",align:null},"The first input of Rank/Percent metric qualification must be a metric"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Similar error in view filter functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(existed old metric selector json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Invalid operator input"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid operator - {input operator}"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector. Existed old metric selector json input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(existed old metric selector json input)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Invalid constant counts"),(0,l.kt)("td",{parentName:"tr",align:null},"Constants count is not right"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Only metric expression selector.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Similar error in view filter functionality. Existed old metric selector json input.")))),(0,l.kt)("h2",{id:"api-get-apidossiersdossieridinstancesinstanceidelements"},"API: ",(0,l.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Dossiers%20and%20Documents/getDossierDatasetFilterElements"},(0,l.kt)("inlineCode",{parentName:"a"},"GET /api/dossiers/{dossierId}/instances/{instanceId}/elements"))),(0,l.kt)("p",null,"This endpoint is used to fetch available elements for the element list selector."),(0,l.kt)("h3",{id:"functionality"},"Functionality"),(0,l.kt)("p",null,"Get information for available elements of a dossier selector."),(0,l.kt)("p",null,"Get information for search elements of a dossier selector based on the search pattern."),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,l.kt)("td",{parentName:"tr",align:null},"The previously generated session ID"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectId"),(0,l.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dossierId"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the executed dossier"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instanceId"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the dossier instance"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting point within the collection of returned results. Use to control paging behavior."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of items returned for a single request. Used to control paging behavior.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Use -1 for no limit."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetObjectId"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the target object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetObjectType"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the target object.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Available values: attribute, consolidation"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"searchForms"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of search form IDs"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"searchPattern"),(0,l.kt)("td",{parentName:"tr",align:null},"The search pattern"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filterKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter (selection) key"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Books",\n    "id": "h1;;Books"\n  },\n  {\n    "name": "Electronics",\n    "id": "h2;;Electronics"\n  },\n  {\n    "name": "Movies",\n    "id": "h3;;Movies"\n  },\n  {\n    "name": "Music",\n    "id": "h4;;Music"\n  }\n]\n')),(0,l.kt)("h3",{id:"error-handling-2"},"Error Handling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Invalid Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Error Message"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Response Code"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"At least search form is not a GUID"),(0,l.kt)("td",{parentName:"tr",align:null},"Following constraint violations have been detected: At least one of the form ID provided is not a valid value {search forms input} is not a valid value for GUID"),(0,l.kt)("td",{parentName:"tr",align:null},"400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetObjectId is not a GUID"),(0,l.kt)("td",{parentName:"tr",align:null},"{input object id} is not a valid for GUID"),(0,l.kt)("td",{parentName:"tr",align:null},"400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetObjectType is invalid"),(0,l.kt)("td",{parentName:"tr",align:null},"targetObjectType is invalid"),(0,l.kt)("td",{parentName:"tr",align:null},"400")))))}c.isMDXComponent=!0}}]);