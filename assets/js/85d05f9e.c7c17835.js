"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3867],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a,r=n(83117),i=n(80102),s=(n(67294),n(3905)),o=["components"],l={title:"Retrieve all insights",description:"You can use REST APIs to retrieve all insights."},p=void 0,d={unversionedId:"common-workflows/analytics/manage-insights/retrieve-all-insights",id:"common-workflows/analytics/manage-insights/retrieve-all-insights",title:"Retrieve all insights",description:"You can use REST APIs to retrieve all insights.",source:"@site/docs/common-workflows/analytics/manage-insights/retrieve-all-insights.md",sourceDirName:"common-workflows/analytics/manage-insights",slug:"/common-workflows/analytics/manage-insights/retrieve-all-insights",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/retrieve-all-insights",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-insights/retrieve-all-insights.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Retrieve all insights",description:"You can use REST APIs to retrieve all insights."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an insight",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/retrieve-an-insight"},next:{title:"Retrieve insight preferences",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/retrieve-insight-preferences"}},m={},u=[{value:"Retrieve all insights without KPI data",id:"retrieve-all-insights-without-kpi-data",level:2},{value:"Retrieve specified insights with KPI data",id:"retrieve-specified-insights-with-kpi-data",level:2}],c=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),f={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c,{since:"2021 Update 10",mdxType:"Available"}),(0,s.kt)("p",null,"You can use REST APIs to retrieve all insights."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,s.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,s.kt)("h2",{id:"retrieve-all-insights-without-kpi-data"},"Retrieve all insights without KPI data"),(0,s.kt)("p",null,"The following sample workflow retrieves all insights without KPI data."),(0,s.kt)("p",null,"Endpoint: ",(0,s.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20Insights/getInsightCards"},"GET /api/insight/insightCards")),(0,s.kt)("p",null,"Sample Request Header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n')),(0,s.kt)("p",null,"Sample Request Body: N/A"),(0,s.kt)("p",null,"Sample Curl:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/insightCards' \\\n  -H 'accept: */*' \\\n  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd'\n")),(0,s.kt)("p",null,"Sample Response Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "insightCards": [\n    {\n      "id": "4028f2df86340c5f018634c2f945000e",\n      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "kpiId": "82B43E695D4C08AF3236E3AE886700F8",\n      "type": "OUTLIER",\n      "read": false,\n      "generatedTimestamp": "2023-02-09T06:00:38.466Z",\n      "results": [\n        {\n          "insightDataPoints": [\n            {\n              "rawValue": 5135661.126100001,\n              "formattedValue": "$5,135,661",\n              "timestamp": "2023-02-09T06:00:23.000Z",\n              "slope": 0\n            }\n          ],\n          "insightDataTrends": [],\n          "seasonalityPresence": false,\n          "seasonalities": [],\n          "lowerBoundary": [1.3956862745098038],\n          "upperBoundary": [8.518039215686276],\n          "score": 0,\n          "templateKey": "UNEXPECTED_HIGH",\n          "template": "{{kpiName}} was unexpectedly <span data-formatting=\'bold positive\'>high</span> on {{timestamp}}, with a value of <span data-formatting=\'bold positive\'>{{value}}</span>. This value is outside the expected range of <span data-formatting=\'bold positive\'>{{lowerBoundary}}</span> to <span data-formatting=\'bold positive\'>{{upperBoundary}}</span>.",\n          "templatePropertySet": {\n            "timestamp": "2023-02-09T06:00:23.000Z",\n            "value": "5135661.126100001",\n            "lowerBoundary": "1.3956862745098038",\n            "upperBoundary": "8.518039215686276",\n            "kpiName": "Profit - autotest"\n          },\n          "models": [0, 1, 0]\n        }\n      ]\n    },\n    {\n      "id": "4028f2df86340c5f018634374d24000b",\n      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "kpiId": "82B43E695D4C08AF3236E3AE886700F8",\n      "type": "TREND",\n      "read": false,\n      "generatedTimestamp": "2023-02-09T03:28:04.892Z",\n      "results": [\n        {\n          "insightDataPoints": [],\n          "insightDataTrends": [\n            {\n              "startRawValue": 3.5802976486733438,\n              "startFormattedValue": "",\n              "startTimestamp": "2023-01-08T21:55:19.000Z",\n              "endRawValue": 2.550248068741387,\n              "endFormattedValue": "",\n              "endTimestamp": "2023-01-23T08:00:00.000Z",\n              "slope": -0.0736\n            }\n          ],\n          "seasonalityPresence": false,\n          "seasonalities": [],\n          "lowerBoundary": [],\n          "upperBoundary": [],\n          "score": 0,\n          "templateKey": "TREND_DOWNWARDS",\n          "template": "{{kpiName}} <span data-formatting=\'bold negative\'>trended down</span> between {{timestampStart}} and {{timestampEnd}}, decreasing by <span data-formatting=\'bold negative\'>{{percentChange}}</span>.",\n          "templatePropertySet": {\n            "startValue": "3.5802976486733438",\n            "endValue": "2.550248068741387",\n            "timestampStart": "2023-01-08T21:55:19.000Z",\n            "timestampEnd": "2023-01-23T08:00:00.000Z",\n            "percentChange": "28.77%",\n            "kpiName": "Profit - autotest"\n          },\n          "models": []\n        }\n      ]\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Sample Response Code: 200 (All insights are returned successfully.)"),(0,s.kt)("h2",{id:"retrieve-specified-insights-with-kpi-data"},"Retrieve specified insights with KPI data"),(0,s.kt)("p",null,"Next, you can retrieve the definition and KPI data for insights with ID ",(0,s.kt)("inlineCode",{parentName:"p"},"4028f2df86340c5f018634c2f945000e")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"4028f2df86340c5f018634374d24000b"),"."),(0,s.kt)("p",null,"Endpoint: ",(0,s.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20Insights/getInsightCards"},"GET /api/insight/insightCards")),(0,s.kt)("p",null,"Sample Request Header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n')),(0,s.kt)("p",null,"Sample Request Parameters:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},'"ids": "4028f2df86340c5f018634c2f945000e,4028f2df86340c5f018634374d24000b"\n"includeData": "true"\n')),(0,s.kt)("p",null,"Sample Request Body: N/A"),(0,s.kt)("p",null,"Sample Curl:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/insightCards?ids=4028f2df86340c5f018634c2f945000e&ids=4028f2df86340c5f018634374d24000b&includeData=true' \\\n  -H 'accept: */*' \\\n  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd'\n")),(0,s.kt)("p",null,"Sample Response Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "insightCards": [\n    {\n      "id": "4028f2df86340c5f018634c2f945000e",\n      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "kpiId": "82B43E695D4C08AF3236E3AE886700F8",\n      "numberFormat": "\\"$\\"#,##0;(\\"$\\"#,##0)",\n      "type": "OUTLIER",\n      "read": false,\n      "generatedTimestamp": "2023-02-09T06:00:38.466Z",\n      "results": [\n        {\n          "insightDataPoints": [\n            {\n              "rawValue": 5135661.126100001,\n              "formattedValue": "$5,135,661",\n              "timestamp": "2023-02-09T06:00:23.000Z",\n              "slope": 0\n            }\n          ],\n          "insightDataTrends": [],\n          "seasonalityPresence": false,\n          "seasonalities": [],\n          "lowerBoundary": [1.3956862745098038],\n          "upperBoundary": [8.518039215686276],\n          "score": 0,\n          "templateKey": "UNEXPECTED_HIGH",\n          "template": "{{kpiName}} was unexpectedly <span data-formatting=\'bold positive\'>high</span> on {{timestamp}}, with a value of <span data-formatting=\'bold positive\'>{{value}}</span>. This value is outside the expected range of <span data-formatting=\'bold positive\'>{{lowerBoundary}}</span> to <span data-formatting=\'bold positive\'>{{upperBoundary}}</span>.",\n          "templatePropertySet": {\n            "timestamp": "2023-02-09T06:00:23.000Z",\n            "value": "5135661.126100001",\n            "lowerBoundary": "1.3956862745098038",\n            "upperBoundary": "8.518039215686276",\n            "kpiName": "Profit - autotest"\n          },\n          "models": [0, 1, 0]\n        }\n      ],\n      "dataPoints": [\n        {\n          "rawValue": 4,\n          "formattedValue": "4",\n          "timestamp": "2023-01-29T15:00:00.000Z"\n        },\n        {\n          "rawValue": 4,\n          "formattedValue": "4",\n          "timestamp": "2023-01-29T16:00:00.000Z"\n        },\n        {\n          "rawValue": 5,\n          "formattedValue": "5",\n          "timestamp": "2023-01-29T17:55:19.000Z"\n        },\n        {\n          "rawValue": 5,\n          "formattedValue": "5",\n          "timestamp": "2023-01-29T18:00:00.000Z"\n        },\n        {\n          "rawValue": 5,\n          "formattedValue": "5",\n          "timestamp": "2023-01-29T19:00:00.000Z"\n        },\n        {\n          "rawValue": 5,\n          "formattedValue": "5",\n          "timestamp": "2023-01-29T20:00:00.000Z"\n        },\n        {\n          "rawValue": 3,\n          "formattedValue": "3",\n          "timestamp": "2023-01-29T21:55:19.000Z"\n        },\n        {\n          "rawValue": 3,\n          "formattedValue": "3",\n          "timestamp": "2023-01-29T22:00:00.000Z"\n        },\n        {\n          "rawValue": 3,\n          "formattedValue": "3",\n          "timestamp": "2023-01-29T23:00:00.000Z"\n        },\n        {\n          "rawValue": 3,\n          "formattedValue": "3",\n          "timestamp": "2023-01-30T00:00:00.000Z"\n        }\n      ]\n    },\n    {\n      "id": "4028f2df86340c5f018634374d24000b",\n      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "kpiId": "82B43E695D4C08AF3236E3AE886700F8",\n      "numberFormat": "\\"$\\"#,##0;(\\"$\\"#,##0)",\n      "type": "TREND",\n      "read": false,\n      "generatedTimestamp": "2023-02-09T03:28:04.892Z",\n      "results": [\n        {\n          "insightDataPoints": [],\n          "insightDataTrends": [\n            {\n              "startRawValue": 3.5802976486733438,\n              "startFormattedValue": "",\n              "startTimestamp": "2023-01-08T21:55:19.000Z",\n              "endRawValue": 2.550248068741387,\n              "endFormattedValue": "",\n              "endTimestamp": "2023-01-23T08:00:00.000Z",\n              "slope": -0.0736\n            }\n          ],\n          "seasonalityPresence": false,\n          "seasonalities": [],\n          "lowerBoundary": [],\n          "upperBoundary": [],\n          "score": 0,\n          "templateKey": "TREND_DOWNWARDS",\n          "template": "{{kpiName}} <span data-formatting=\'bold negative\'>trended down</span> between {{timestampStart}} and {{timestampEnd}}, decreasing by <span data-formatting=\'bold negative\'>{{percentChange}}</span>.",\n          "templatePropertySet": {\n            "startValue": "3.5802976486733438",\n            "endValue": "2.550248068741387",\n            "timestampStart": "2023-01-08T21:55:19.000Z",\n            "timestampEnd": "2023-01-23T08:00:00.000Z",\n            "percentChange": "28.77%",\n            "kpiName": "Profit - autotest"\n          },\n          "models": []\n        }\n      ],\n      "dataPoints": [\n        {\n          "rawValue": 4,\n          "formattedValue": "4",\n          "timestamp": "2023-01-08T21:55:19.000Z"\n        },\n        {\n          "rawValue": 2,\n          "formattedValue": "2",\n          "timestamp": "2023-01-09T05:00:00.000Z"\n        },\n        {\n          "rawValue": 2,\n          "formattedValue": "2",\n          "timestamp": "2023-01-10T05:00:00.000Z"\n        },\n        {\n          "rawValue": 3,\n          "formattedValue": "3",\n          "timestamp": "2023-01-11T05:00:00.000Z"\n        },\n        {\n          "rawValue": 5,\n          "formattedValue": "5",\n          "timestamp": "2023-01-12T05:00:00.000Z"\n        },\n        {\n          "rawValue": 2,\n          "formattedValue": "2",\n          "timestamp": "2023-01-13T05:00:00.000Z"\n        },\n        {\n          "rawValue": 1,\n          "formattedValue": "1",\n          "timestamp": "2023-01-14T05:00:00.000Z"\n        },\n        {\n          "rawValue": 1,\n          "formattedValue": "1",\n          "timestamp": "2023-01-15T05:00:00.000Z"\n        },\n        {\n          "rawValue": 3,\n          "formattedValue": "3",\n          "timestamp": "2023-01-16T05:00:00.000Z"\n        },\n        {\n          "rawValue": 4,\n          "formattedValue": "4",\n          "timestamp": "2023-01-17T05:00:00.000Z"\n        }\n      ]\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Sample Response Code: 200 (Specified insights are returned successfully.)"))}g.isMDXComponent=!0}}]);