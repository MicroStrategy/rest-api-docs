"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4352],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90883:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var r,i=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],p={title:"Retrieve a derived element's definition in report",description:"You can use REST APIs to retrieve the a derived element\u2019s definition in report through the Modeling service."},l=void 0,d={unversionedId:"common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-derived-elements-definition-in-report",id:"common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-derived-elements-definition-in-report",title:"Retrieve a derived element's definition in report",description:"You can use REST APIs to retrieve the a derived element\u2019s definition in report through the Modeling service.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-derived-elements-definition-in-report.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-derived-elements-definition-in-report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-derived-elements-definition-in-report",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-derived-elements-definition-in-report.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Retrieve a derived element's definition in report",description:"You can use REST APIs to retrieve the a derived element\u2019s definition in report through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update the definition of an existing report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/update-the-definition-of-an-existing-report"},next:{title:"Create a derived element in report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/create-a-derived-element-in-report"}},c={},m=[{value:"Retrieve a derived element\u2019s definition within a report instance",id:"retrieve-a-derived-elements-definition-within-a-report-instance",level:2},{value:"1. Create a report instance",id:"1-create-a-report-instance",level:3},{value:"2. Get derived element&#39;s definition within the report instance",id:"2-get-derived-elements-definition-within-the-report-instance",level:3},{value:"3. Delete the report instance",id:"3-delete-the-report-instance",level:3}],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),h={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,a.kt)("p",null,"You can use REST APIs to retrieve a derived element\u2019s definition in report through the Modeling service. The workflow includes the following REST APIs requests."),(0,a.kt)("h2",{id:"retrieve-a-derived-elements-definition-within-a-report-instance"},"Retrieve a derived element\u2019s definition within a report instance"),(0,a.kt)("p",null,"In this sample workflow, we want to get the definition of a derived element in report. The report ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"9B9ADA7F464E63CE0D0B709B03BD9370"),". The derived element ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"EA18C4C1484F06FF47B603A7A0DCA8D6"),'. The report is in the project "MicroStrategy Tutorial", and the project ID is ',(0,a.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,a.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,a.kt)("h3",{id:"1-create-a-report-instance"},"1. Create a report instance"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.")),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance"},"POST /api/model/reports/{reportId}/instances")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n}\n')),(0,a.kt)("h3",{id:"2-get-derived-elements-definition-within-the-report-instance"},"2. Get derived element's definition within the report instance"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-getReportDerivedElement"},"GET /api/model/reports/{reportId}/derivedElements/{derivedElementId}")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/derivedElements/EA18C4C1484F06FF47B603A7A0DCA8D6' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,a.kt)("p",null,"Sample Response Body: you can view the derived element\u2019s definition in the body of the response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-09-02T05:48:20.980Z",\n    "dateModified": "2022-09-02T05:48:20.980Z",\n    "versionId": "00704A6841F85188FBC37391002334D7",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "EA18C4C1484F06FF47B603A7A0DCA8D6",\n    "subType": "consolidation_element"\n  },\n  "attribute": {\n    "objectId": "8D679D5211D3E4981000E787EC6DE8A4",\n    "subType": "attribute",\n    "name": "Distribution Center"\n  },\n  "elements": [\n    {\n      "id": "20C83A1A0F5F4ED9A3401469C89CA39F",\n      "name": "Distribution Center in list",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Washington, DC, Seattle, San Diego",\n      "elements": [\n        {\n          "display": "Washington, DC",\n          "elementId": "h1:3"\n        },\n        {\n          "display": "Seattle",\n          "elementId": "h1:2"\n        },\n        {\n          "display": "San Diego",\n          "elementId": "h1:4"\n        }\n      ]\n    },\n    {\n      "id": "1618B94E8E8946CD859BC32253B60472",\n      "name": "All Others",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (Derived element's definition is returned successfully.)"),(0,a.kt)("h3",{id:"3-delete-the-report-instance"},"3. Delete the report instance"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance"},"DELETE /api/model/reports/{reportId}/instances")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,a.kt)("p",null,"Sample Response Body: Empty"),(0,a.kt)("p",null,"Sample Response Code: 204 (The report instance has been deleted successfully.)"))}f.isMDXComponent=!0}}]);