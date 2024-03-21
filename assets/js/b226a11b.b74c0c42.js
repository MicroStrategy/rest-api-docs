"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1964],{73958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=t(74848),r=t(28453);const o={title:"Modify value of an advanced property",description:"The workflow involves modifying datasource's advanced properties values"},s=void 0,d={id:"common-workflows/administration/datasource-management/update-datasource-advanced-property",title:"Modify value of an advanced property",description:"The workflow involves modifying datasource's advanced properties values",source:"@site/docs/common-workflows/administration/datasource-management/update-datasource-advanced-property.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/update-datasource-advanced-property",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/update-datasource-advanced-property",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/update-datasource-advanced-property.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Modify value of an advanced property",description:"The workflow involves modifying datasource's advanced properties values"},sidebar:"tutorialSidebar",previous:{title:"Get datasource definition and advanced properties",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/get-datasource-with-advanced-properties"},next:{title:"Convert connection string from data source name(DSN) to DSN-less for a datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/convert-connection-string-from-dsn-to-dsnless-for-a-datasource"}},i={},c=[{value:"Update datasource&#39;s advanced property value",id:"update-datasources-advanced-property-value",level:2},{value:"Set property value back to default",id:"set-property-value-back-to-default",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 8"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can try out this workflow at ",(0,a.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-689ad52e-2dee-4582-92a1-679dc0fda692?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(n.h2,{id:"update-datasources-advanced-property-value",children:"Update datasource's advanced property value"}),"\n",(0,a.jsx)(n.p,{children:"This workflow sample demonstrates how to update datasource's advanced property value"}),"\n",(0,a.jsxs)(n.p,{children:["You want to get the applicable properties of the ",(0,a.jsx)(n.code,{children:"Amazon Athena"})," datasource object. The object ID is ",(0,a.jsx)(n.code,{children:"31B4EC39D7F94875AB4E2785C8BBA26E"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(n.p,{children:["Get the project ID from ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["Update a property using ",(0,a.jsx)(n.code,{children:"PUT /api/model/datasource/{datasourceId}?showAdvancedProperties=true"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "advancedProperties": {\n    "vldbProperties": {\n      "[DatamartProperties].[Insert SQLs]": {\n        "value": "1"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datasources/31B4EC39D7F94875AB4E2785C8BBA26E?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.p,{children:"You can view list of advanced properties including updated property in the response."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2007-11-01T18:59:13.000Z",\n    "dateModified": "2022-02-10T13:24:12.000Z",\n    "versionId": "440000474A61382839A0829F1E0FD189",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "DC49026849C4DC86A7D4D98DC5DC3E28",\n    "subType": "db_role",\n    "name": "Amazon Athena"\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "type": "string",\n        "value": "1",\n        "resolvedLocation": "db_role",\n        "isInherited": false,\n        "nextValue": "",\n        "nextResolvedLocation": "default"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "type": "string",\n        "value": "",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Response Code: 200 (The datasource's definition and its advanced properties were updated successfully.)"}),"\n",(0,a.jsx)(n.h2,{id:"set-property-value-back-to-default",children:"Set property value back to default"}),"\n",(0,a.jsx)(n.p,{children:"This is an example to reset the property value to default."}),"\n",(0,a.jsxs)(n.p,{children:["Update a property using ",(0,a.jsx)(n.code,{children:"PUT /api/model/datasource/{datasourceId}?showAdvancedProperties=true"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "advancedProperties": {\n    "vldbProperties": {\n      "[DatamartProperties].[Insert SQLs]": {\n        "value": null\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datasources/DC49026849C4DC86A7D4D98DC5DC3E28?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.p,{children:"You can view list of advanced properties including updated property in the response."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2007-11-01T18:59:13.000Z",\n    "dateModified": "2022-02-10T13:24:12.000Z",\n    "versionId": "440000474A61382839A0829F1E0FD189",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "DC49026849C4DC86A7D4D98DC5DC3E28",\n    "subType": "db_role",\n    "name": "Amazon Athena"\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "type": "string",\n        "value": "",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "type": "string",\n        "value": "",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Response Code: 200 (The datasource's definition and its advanced properties were updated successfully.)"})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var a=t(96540);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);