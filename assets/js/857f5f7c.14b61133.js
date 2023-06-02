"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[72],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r,a=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],c={title:"Retrieve an insight",description:"You can use REST APIs to retrieve an insight."},l=void 0,p={unversionedId:"common-workflows/analytics/manage-insights/retrieve-an-insight",id:"common-workflows/analytics/manage-insights/retrieve-an-insight",title:"Retrieve an insight",description:"You can use REST APIs to retrieve an insight.",source:"@site/docs/common-workflows/analytics/manage-insights/retrieve-an-insight.md",sourceDirName:"common-workflows/analytics/manage-insights",slug:"/common-workflows/analytics/manage-insights/retrieve-an-insight",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/retrieve-an-insight",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-insights/retrieve-an-insight.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Retrieve an insight",description:"You can use REST APIs to retrieve an insight."},sidebar:"tutorialSidebar",previous:{title:"Delete a KPI object",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/delete-kpi"},next:{title:"Retrieve all insights",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/retrieve-all-insights"}},u={},m=[],d=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{since:"2021 Update 10",mdxType:"Available"}),(0,o.kt)("p",null,"You can use REST APIs to retrieve an insight by ID."),(0,o.kt)("p",null,"This workflow sample retrieves an existing insight with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"4028f2df86340c5f018634c2f945000e")," and project id ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20Insights/getInsightCard"},"GET /api/insight/insightCards/{id}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "5f8qohkckd5d4tm18c9etbe0vd"\n')),(0,o.kt)("p",null,"Sample Request Body: N/A"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/insightCards/4028f2df86340c5f018634c2f945000e' \\\n  -H 'accept: */*' \\\n  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd' \\\n  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4028f2df86340c5f018634c2f945000e",\n  "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "kpiId": "82B43E695D4C08AF3236E3AE886700F8",\n  "type": "OUTLIER",\n  "read": false,\n  "generatedTimestamp": "2023-02-09T06:00:38.466Z",\n  "results": [\n    {\n      "insightDataPoints": [\n        {\n          "rawValue": 5135661.126100001,\n          "formattedValue": "$5,135,661",\n          "timestamp": "2023-02-09T06:00:23.000Z",\n          "slope": 0\n        }\n      ],\n      "insightDataTrends": [],\n      "seasonalityPresence": false,\n      "seasonalities": [],\n      "lowerBoundary": [1.3956862745098038],\n      "upperBoundary": [8.518039215686276],\n      "score": 0,\n      "templateKey": "UNEXPECTED_HIGH",\n      "template": null,\n      "templatePropertySet": {\n        "timestamp": "2023-02-09T06:00:23.000Z",\n        "value": "5135661.126100001",\n        "lowerBoundary": "1.3956862745098038",\n        "upperBoundary": "8.518039215686276"\n      },\n      "models": [0, 1, 0]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (The insight is returned successfully.)"))}g.isMDXComponent=!0}}]);