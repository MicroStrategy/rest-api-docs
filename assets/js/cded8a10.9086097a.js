"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1601],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41126:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a,r=n(83117),i=n(80102),o=(n(67294),n(3905)),l=["components"],s={title:"Retrieve documents",Description:"Retrieve a list of documents using the MicroStrategy REST API."},d=void 0,p={unversionedId:"common-workflows/analytics/manage-documents/get-document-list/get-document-list",id:"common-workflows/analytics/manage-documents/get-document-list/get-document-list",title:"Retrieve documents",description:"This workflow sample demonstrates how to retrieve a list of documents using the MicroStrategy REST API.",source:"@site/docs/common-workflows/analytics/manage-documents/get-document-list/get-document-list.md",sourceDirName:"common-workflows/analytics/manage-documents/get-document-list",slug:"/common-workflows/analytics/manage-documents/get-document-list/",permalink:"/rest-api-docs/common-workflows/analytics/manage-documents/get-document-list/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-documents/get-document-list/get-document-list.md",tags:[],version:"current",lastUpdatedBy:"Holmblad, Darren",lastUpdatedAt:1695923197,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Retrieve documents",Description:"Retrieve a list of documents using the MicroStrategy REST API."},sidebar:"tutorialSidebar",previous:{title:"Manage documents",permalink:"/rest-api-docs/common-workflows/analytics/manage-documents/"},next:{title:"Retrieve the hierarchy of document",permalink:"/rest-api-docs/common-workflows/analytics/manage-documents/retrieve-document/retrieve-the-hierarchy-of-a-document"}},m={},c=[{value:"GET /api/documents",id:"get-apidocuments",level:2},{value:"Request URL",id:"request-url",level:3},{value:"Sample Curl Request",id:"sample-curl-request",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"HTTP Status Codes",id:"http-status-codes",level:3}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),k={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 10",mdxType:"Available"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve a list of documents using the MicroStrategy REST API."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,o.kt)("h2",{id:"get-apidocuments"},"GET /api/documents"),(0,o.kt)("p",null,"Retrieve a list of documents in a specific project that meet specific search criteria."),(0,o.kt)("h3",{id:"request-url"},"Request URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"GET /api/documents\n")),(0,o.kt)("h3",{id:"sample-curl-request"},"Sample Curl Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' 'http://demo.microstrategy.com/MicroStrategyLibrary/api/documents?searchTerm=ipad&searchPattern=CONTAINS_ANY_WORD&offset=0&limit=-1&certifiedStatus=ALL' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: p3itnh1510c2j7kg29t29ju5us' \\\n-H 'X-MSTR-ProjectID: 9DE876B611E7C33BF65B0080EF45D3E8'\n")),(0,o.kt)("h3",{id:"request-headers"},"Request Headers"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"X-MSTR-AuthToken")),(0,o.kt)("td",{parentName:"tr",align:null},"Header"),(0,o.kt)("td",{parentName:"tr",align:null},"Authorization token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"X-MSTR-ProjectID")),(0,o.kt)("td",{parentName:"tr",align:null},"Header"),(0,o.kt)("td",{parentName:"tr",align:null},"Project ID")))),(0,o.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"searchTerm")),(0,o.kt)("td",{parentName:"tr",align:null},"Query"),(0,o.kt)("td",{parentName:"tr",align:null},"The value of the search ",(0,o.kt)("inlineCode",{parentName:"td"},"searchPattern"),". This parameter is used with the ",(0,o.kt)("inlineCode",{parentName:"td"},"searchPattern")," parameter.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"searchPattern")),(0,o.kt)("td",{parentName:"tr",align:null},"Query"),(0,o.kt)("td",{parentName:"tr",align:null},'The search pattern that will be applied to the search. Possible search patterns include "Begins with", "Begins with phrase", "Contains", etc.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"offset")),(0,o.kt)("td",{parentName:"tr",align:null},"Query"),(0,o.kt)("td",{parentName:"tr",align:null},"The starting point in a collection of returned search results. This parameter is used to control paging behavior.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"limit")),(0,o.kt)("td",{parentName:"tr",align:null},"Query"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of items returned for a single request. This parameter is used to control paging behavior.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"certifiedStatus")),(0,o.kt)("td",{parentName:"tr",align:null},"Query"),(0,o.kt)("td",{parentName:"tr",align:null},"Defines a search criteria of the certified status of the object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fields")),(0,o.kt)("td",{parentName:"tr",align:null},"Query"),(0,o.kt)("td",{parentName:"tr",align:null},"A comma-separated, top-level field whitelist that allows the client to selectively retrieve part of the response model.")))),(0,o.kt)("h3",{id:"response"},"Response"),(0,o.kt)("p",null,"If successful, this API call returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")," status code and the list of documents in the response body. The response body follows the ",(0,o.kt)("inlineCode",{parentName:"p"},"SearchResultInfo")," schema."),(0,o.kt)("h4",{id:"sample-response"},"Sample Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "totalItems": 2,\n  "result": [\n    {\n      "name": "iPad Landscape",\n      "id": "036C946741BB821F9DE3BE82C19FA45A",\n      "type": 55,\n      "description": "Use this template to create dashboards for iPad in landscape mode.",\n      "subtype": 14081,\n      "dateCreated": "2010-06-12T18:55:38.000+0000",\n      "dateModified": "2015-01-12T13:53:09.000+0000",\n      "version": "AC1BFF4741F061028A1500AFACF1ACD5",\n      "acg": 255,\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "hidden": true,\n      "extType": 0,\n      "viewMedia": 268435711,\n      "certifiedInfo": {\n        "certified": false\n      },\n      "templateInfo": {\n        "template": false,\n        "lastModifiedBy": {}\n      },\n      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8"\n    },\n    {\n      "name": "iPad Portrait",\n      "id": "24C6A93740053621A3A9FFBE66D51F98",\n      "type": 55,\n      "description": "Use this template to create dashboards for iPad in portrait mode.",\n      "subtype": 14081,\n      "dateCreated": "2010-06-12T18:58:52.000+0000",\n      "dateModified": "2015-01-12T13:53:52.000+0000",\n      "version": "4BBE365743ACBB0927C087AFCF736367",\n      "acg": 255,\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "hidden": true,\n      "extType": 0,\n      "viewMedia": 268435711,\n      "certifiedInfo": {\n        "certified": false\n      },\n      "templateInfo": {\n        "template": false,\n        "lastModifiedBy": {}\n      },\n      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," field contains an array of document objects, where each object represents a document and includes properties such as ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"createdBy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"createdTime"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"certified"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"totalCount")," field indicates the total number of documents found based on the search criteria."),(0,o.kt)("h3",{id:"http-status-codes"},"HTTP Status Codes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"200"),(0,o.kt)("td",{parentName:"tr",align:null},"OK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"400"),(0,o.kt)("td",{parentName:"tr",align:null},"Bad Request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"500"),(0,o.kt)("td",{parentName:"tr",align:null},"Internal Server Error")))))}h.isMDXComponent=!0}}]);