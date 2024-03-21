"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3135],{19329:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(74848),o=i(28453);const s={title:"Retrieve a list of time zones' definitions",description:"You can use REST APIs to retrieve definitions for a list of available time zones through the Modeling service. This topic includes the following workflows."},a=void 0,r={id:"common-workflows/modeling/manage-time-zone-objects/retrieve-a-list-of-time-zones-definitions",title:"Retrieve a list of time zones' definitions",description:"You can use REST APIs to retrieve definitions for a list of available time zones through the Modeling service. This topic includes the following workflows.",source:"@site/docs/common-workflows/modeling/manage-time-zone-objects/retrieve-a-list-of-time-zones-definitions.md",sourceDirName:"common-workflows/modeling/manage-time-zone-objects",slug:"/common-workflows/modeling/manage-time-zone-objects/retrieve-a-list-of-time-zones-definitions",permalink:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/retrieve-a-list-of-time-zones-definitions",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-time-zone-objects/retrieve-a-list-of-time-zones-definitions.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Retrieve a list of time zones' definitions",description:"You can use REST APIs to retrieve definitions for a list of available time zones through the Modeling service. This topic includes the following workflows."}},d={},c=[{value:"Retrieve a list of all time zones&#39; definitions",id:"retrieve-a-list-of-all-time-zones-definitions",level:2},{value:"Retrieve a list of all available timezones&#39; definitions within a changeset",id:"retrieve-a-list-of-all-available-timezones-definitions-within-a-changeset",level:2},{value:"Retrieve a list of time zones&#39; definitions with a specified <code>subType</code>",id:"retrieve-a-list-of-time-zones-definitions-with-a-specified-subtype",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can try these workflows with ",(0,t.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-8f48dce2-e826-4f45-98fb-c3ceed64b670?ctx=documentation",children:"REST API Playground"}),"."]}),(0,t.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,t.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"You can use REST APIs to retrieve definitions for a list of available time zones through the Modeling service. This topic includes the following workflows."}),"\n",(0,t.jsx)(n.h2,{id:"retrieve-a-list-of-all-time-zones-definitions",children:"Retrieve a list of all time zones' definitions"}),"\n",(0,t.jsx)(n.p,{children:"You want to get the definitions of all available time zones in the configuration project."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,t.jsx)(n.p,{children:"Since timezone objects are configuration objects, you must set the project ID as an empty string."})]}),"\n",(0,t.jsxs)(n.p,{children:["Get the time zones' definitions within a changeset using ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones",children:"GET /api/model/timezones"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": ""\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,t.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: "\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(n.p,{children:"You can view the time zones' definitions in the body of the response. In this sample, three system time zones and two custom time zones are returned."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "timezones": [\n    {\n      "information": {\n        "dateCreated": "2021-10-21T08:41:51.349Z",\n        "dateModified": "2021-12-13T11:30:02.340Z",\n        "versionId": "2D54462A4BC579B910BC59A10F60354C",\n        "primaryLocale": "en-US",\n        "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n        "subType": "timezone_system",\n        "name": "America New York time",\n        "description": "The state of New York uses the Eastern Timezone (UTC-05:00) with daylight saving time (UTC-04:00)."\n      },\n      "currentOffset": -18000\n    },\n    {\n      "information": {\n        "dateCreated": "2021-10-21T08:41:51.349Z",\n        "dateModified": "2021-10-21T08:41:51.349Z",\n        "versionId": "803B4C3C48005A45B57E969A6CF511E8",\n        "primaryLocale": "en-US",\n        "objectId": "0D11814645CE423141648EA55CC1305E",\n        "subType": "timezone_system",\n        "name": "Etc UTC time",\n        "description": "Coordinated Universal Time or UTC is the primary time standard by which the world regulates clocks and time."\n      },\n      "currentOffset": 0\n    },\n    {\n      "information": {\n        "dateCreated": "2021-09-17T03:11:12.043Z",\n        "dateModified": "2021-09-17T03:11:12.043Z",\n        "versionId": "5D354734492D6A127607CCAA60C1289C",\n        "primaryLocale": "en-US",\n        "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",\n        "subType": "timezone_system",\n        "name": "Asia Shanghai time",\n        "description": "The time in China follows a single standard time offset of UTC+08:00, even though China spans five geographical time zones."\n      },\n      "currentOffset": 28800\n    },\n    {\n      "information": {\n        "dateCreated": "2021-12-08T08:54:07.114Z",\n        "dateModified": "2021-12-08T08:54:07.114Z",\n        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n        "primaryLocale": "en-US",\n        "objectId": "E99B4F7692564D36A5B324A7956CB84F",\n        "subType": "timezone_custom",\n        "name": "Asia Shanghai time"\n      },\n      "baseTimezone": {\n        "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",\n        "subType": "timezone_system",\n        "name": "Asia Shanghai time"\n      },\n      "currentOffset": 28800\n    },\n    {\n      "information": {\n        "dateCreated": "2021-12-08T08:54:07.114Z",\n        "dateModified": "2021-12-08T08:54:07.114Z",\n        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n        "primaryLocale": "en-US",\n        "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",\n        "subType": "timezone_custom",\n        "name": "America New York time"\n      },\n      "baseTimezone": {\n        "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n        "subType": "timezone_system",\n        "name": "America New York time"\n      },\n      "currentOffset": -18000\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Response Code: 200 (time zones' definitions are returned successfully.)"}),"\n",(0,t.jsx)(n.h2,{id:"retrieve-a-list-of-all-available-timezones-definitions-within-a-changeset",children:"Retrieve a list of all available timezones' definitions within a changeset"}),"\n",(0,t.jsx)(n.p,{children:"You want the definitions of all available time zones in the configuration project."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["Obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.code,{children:"[POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)"}),"."]}),(0,t.jsx)(n.p,{children:"Since timezone objects are configuration objects, you must set the project ID as an empty string."})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,t.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),". If you plan to use the response of ",(0,t.jsx)(n.code,{children:"GET /api/model/timezones"})," to create a new timezone or update the time zones' definitions, it is recommended to associate all requests to one changeset."]})}),"\n",(0,t.jsxs)(n.p,{children:["Get the time zones' definitions within a changeset using ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones",children:"GET /api/model/timezones"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,t.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(n.p,{children:"You can view the time zones' definitions in the body of the response. In this sample, three system time zones and two custom time zones are returned."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "timezones": [\n    {\n      "information": {\n        "dateCreated": "2021-10-21T08:41:51.349Z",\n        "dateModified": "2021-12-13T11:30:02.340Z",\n        "versionId": "2D54462A4BC579B910BC59A10F60354C",\n        "primaryLocale": "en-US",\n        "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n        "subType": "timezone_system",\n        "name": "America New York time",\n        "description": "The state of New York uses the Eastern Timezone (UTC-05:00) with daylight saving time (UTC-04:00)."\n      },\n      "currentOffset": -18000\n    },\n    {\n      "information": {\n        "dateCreated": "2021-10-21T08:41:51.349Z",\n        "dateModified": "2021-10-21T08:41:51.349Z",\n        "versionId": "803B4C3C48005A45B57E969A6CF511E8",\n        "primaryLocale": "en-US",\n        "objectId": "0D11814645CE423141648EA55CC1305E",\n        "subType": "timezone_system",\n        "name": "Etc UTC time",\n        "description": "Coordinated Universal Time or UTC is the primary time standard by which the world regulates clocks and time."\n      },\n      "currentOffset": 0\n    },\n    {\n      "information": {\n        "dateCreated": "2021-09-17T03:11:12.043Z",\n        "dateModified": "2021-09-17T03:11:12.043Z",\n        "versionId": "5D354734492D6A127607CCAA60C1289C",\n        "primaryLocale": "en-US",\n        "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",\n        "subType": "timezone_system",\n        "name": "Asia Shanghai time",\n        "description": "The time in China follows a single standard time offset of UTC+08:00, even though China spans five geographical time zones."\n      },\n      "currentOffset": 28800\n    },\n    {\n      "information": {\n        "dateCreated": "2021-12-08T08:54:07.114Z",\n        "dateModified": "2021-12-08T08:54:07.114Z",\n        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n        "primaryLocale": "en-US",\n        "objectId": "E99B4F7692564D36A5B324A7956CB84F",\n        "subType": "timezone_custom",\n        "name": "Asia Shanghai time"\n      },\n      "baseTimezone": {\n        "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",\n        "subType": "timezone_system",\n        "name": "Asia Shanghai time"\n      },\n      "currentOffset": 28800\n    },\n    {\n      "information": {\n        "dateCreated": "2021-12-08T08:54:07.114Z",\n        "dateModified": "2021-12-08T08:54:07.114Z",\n        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n        "primaryLocale": "en-US",\n        "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",\n        "subType": "timezone_custom",\n        "name": "America New York time"\n      },\n      "baseTimezone": {\n        "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n        "subType": "timezone_system",\n        "name": "America New York time"\n      },\n      "currentOffset": -18000\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Response Code: 200 (time zones' definitions are returned successfully)"}),"\n",(0,t.jsxs)(n.h2,{id:"retrieve-a-list-of-time-zones-definitions-with-a-specified-subtype",children:["Retrieve a list of time zones' definitions with a specified ",(0,t.jsx)(n.code,{children:"subType"})]}),"\n",(0,t.jsxs)(n.p,{children:["You want to enable the ",(0,t.jsx)(n.code,{children:"subType"})," parameter to retrieve only system time zones or custom time zones."]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"subType"})," parameter is not specified, the API will return all available time zones."]}),"\n",(0,t.jsxs)(n.p,{children:["Get the time zones' definitions using ",(0,t.jsx)(n.code,{children:"subType=timezone_custom"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones?subtype=timezone_custom" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID:"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(n.p,{children:"All custom time zones are returned."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "timezones": [\n    {\n      "information": {\n        "dateCreated": "2021-12-08T08:54:07.114Z",\n        "dateModified": "2021-12-08T08:54:07.114Z",\n        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n        "primaryLocale": "en-US",\n        "objectId": "E99B4F7692564D36A5B324A7956CB84F",\n        "subType": "timezone_custom",\n        "name": "Asia Shanghai time"\n      },\n      "baseTimezone": {\n        "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",\n        "subType": "timezone_system",\n        "name": "Asia Shanghai time"\n      },\n      "currentOffset": 28800\n    },\n    {\n      "information": {\n        "dateCreated": "2021-12-08T08:54:07.114Z",\n        "dateModified": "2021-12-08T08:54:07.114Z",\n        "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n        "primaryLocale": "en-US",\n        "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",\n        "subType": "timezone_custom",\n        "name": "America New York time"\n      },\n      "baseTimezone": {\n        "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n        "subType": "timezone_system",\n        "name": "America New York time"\n      },\n      "currentOffset": -18000\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response Code: 200 (timezones' definitions are returned successfully.)"})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);