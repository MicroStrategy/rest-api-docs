"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4583],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r,a=n(3117),s=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Manage Watch KPI and Insight service privileges",description:"A high-level workflow sample for managing Watch KPI and Insight service privileges is shown below. The sequence of REST API requests in the following procedure allows an administrative user to assign server-level privilege for a specific user or user group to use Watch KPI and Insight service."},p=void 0,c={unversionedId:"common-workflows/administration/server-management/server-level-privileges/watch-kpi-insight-service-privileges",id:"common-workflows/administration/server-management/server-level-privileges/watch-kpi-insight-service-privileges",title:"Manage Watch KPI and Insight service privileges",description:"A high-level workflow sample for managing Watch KPI and Insight service privileges is shown below. The sequence of REST API requests in the following procedure allows an administrative user to assign server-level privilege for a specific user or user group to use Watch KPI and Insight service.",source:"@site/docs/common-workflows/administration/server-management/server-level-privileges/watch-kpi-insight-service-privileges.md",sourceDirName:"common-workflows/administration/server-management/server-level-privileges",slug:"/common-workflows/administration/server-management/server-level-privileges/watch-kpi-insight-service-privileges",permalink:"/rest-api-docs/common-workflows/administration/server-management/server-level-privileges/watch-kpi-insight-service-privileges",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/server-management/server-level-privileges/watch-kpi-insight-service-privileges.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1676668503,formattedLastUpdatedAt:"Feb 17, 2023",frontMatter:{title:"Manage Watch KPI and Insight service privileges",description:"A high-level workflow sample for managing Watch KPI and Insight service privileges is shown below. The sequence of REST API requests in the following procedure allows an administrative user to assign server-level privilege for a specific user or user group to use Watch KPI and Insight service."},sidebar:"tutorialSidebar",previous:{title:"Manage server-level privileges",permalink:"/rest-api-docs/common-workflows/administration/server-management/server-level-privileges/manage-server-level-privileges"},next:{title:"Manage server settings",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-server-settings"}},u={},m=[{value:"Assign privilege to use Watch KPI and Insight service to users",id:"assign-privilege-to-use-watch-kpi-and-insight-service-to-users",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Query the status of submitted command",id:"query-the-status-of-submitted-command",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3}],d=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:m};function g(e){var t=e.components,n=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021 Update 8",mdxType:"Available"}),(0,i.kt)("p",null,"A high-level workflow sample for managing Watch KPI and Insight service privileges is shown below. The sequence of REST API requests in the following procedure allows an administrative user to assign server-level privilege for a specific user or user group to use Watch KPI and Insight service."),(0,i.kt)("p",null,"For the privileges to use Watch KPI and Insight service, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/Library/en-us/Content/insights_privileges.htm"},"Assign privileges to MicroStrategy Insight"),"."),(0,i.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,i.kt)("h2",{id:"assign-privilege-to-use-watch-kpi-and-insight-service-to-users"},"Assign privilege to use Watch KPI and Insight service to users"),(0,i.kt)("p",null,"Endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/iserver/metadata/commands"))),(0,i.kt)("p",null,"These endpoints allow administrative users to submit commands to manipulate metadata on IServer. First, you obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". Then, you pass the authorization token in the request header. You provide the information in the parameters of the request."),(0,i.kt)("p",null,'To auto-grant Watch KPI privileges ("Use Library Watchlist" and "Use Library Insight") for Library users (who has "Use Library Web" privilege), you need to call this API with query parameter ',(0,i.kt)("inlineCode",{parentName:"p"},"commandId")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("p",null,"The example below demonstrates how to assign privilege to use Watch KPI and Insight service to users."),(0,i.kt)("h3",{id:"sample-request"},"Sample request"),(0,i.kt)("p",null,"Request Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,i.kt)("p",{parentName:"li"},"The authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"commandId")),(0,i.kt)("p",{parentName:"li"},"The command ID defined by IServer. For assigning privileges to use Watch KPI and Insight service, the command ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". The valid command is only ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," for now."))),(0,i.kt)("p",null,"Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n\u2018X-MSTR-AuthToken: djoofk6kq8htka6emv15246959\u2019\n")),(0,i.kt)("p",null,"Request Body:"),(0,i.kt)("p",null,"No request body."),(0,i.kt)("p",null,"Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://localhost:8282/consume-dev/api/iserver/metadata/commands?commandId=1" -H "accept: application/json" -H "X-MSTR-AuthToken: djoofk6kq8htka6emv15246959"\n')),(0,i.kt)("h3",{id:"sample-response"},"Sample response"),(0,i.kt)("p",null,"Response Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"access-control-allow-headers: Content-Type\naccess-control-allow-methods: POST\ncache-control: no-store\ncontent-encoding: gzip\ncontent-length: 1307\ncontent-security-policy: frame-ancestors 'self'\ncontent-type: application/json\ndate: Thu, 27 Feb 2020 00:28:01 GMT\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\n")),(0,i.kt)("p",null,"Response Body:"),(0,i.kt)("p",null,"The API returns the href to query the status of the submitted command. You can then use the API ",(0,i.kt)("inlineCode",{parentName:"p"},"GET \u200b/api\u200b/iserver\u200b/queues\u200b/{id}")," to query the status of the submitted command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "link": {\n    "href": "/queues/9E4799C94823E297DAC9808357575AF5",\n    "type": "GET"\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Success)"),(0,i.kt)("h2",{id:"query-the-status-of-submitted-command"},"Query the status of submitted command"),(0,i.kt)("p",null,"The following endpoints, used to query the status of submitted command by the API ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/iserver/metadata/commands"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET \u200b/api\u200b/iserver\u200b/queues\u200b/{id}"))),(0,i.kt)("h3",{id:"sample-request-1"},"Sample request"),(0,i.kt)("p",null,"Request Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,i.kt)("p",{parentName:"li"},"The authorization token generated by `POST /api/auth/login.``")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id")),(0,i.kt)("p",{parentName:"li"},"The ID of the submitted command retrieved from the response of ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/iserver/metadata/commands")," on success."))),(0,i.kt)("p",null,"Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'\'Accept: application/json\'\n"X-MSTR-AuthToken": "pdcmrontjrlf494tl1eu6nt7hg"\n')),(0,i.kt)("p",null,"Request Parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": " pdcmrontjrlf494tl1eu6nt7hg",\n"id": "9E4799C94823E297DAC9808357575AF5"\n')),(0,i.kt)("p",null,"Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:8282/consume-dev/api/iserver/queues/9E4799C94823E297DAC9808357575AF5" -H "accept: application/json" -H "X-MSTR-AuthToken: cmjt8jfn2ucl260lqtrhh4gips"\n')),(0,i.kt)("h3",{id:"sample-response-1"},"Sample response"),(0,i.kt)("p",null,"Response Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"access-control-allow-headers: Content-Type\naccess-control-allow-methods: GET\ncache-control: no-store\ncontent-encoding: gzip\ncontent-length: 790\ncontent-security-policy: frame-ancestors 'self'\ncontent-type: application/json\ndate: Thu, 27 Feb 2020 16:38:44 GMT\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\n")),(0,i.kt)("p",null,"Response Body:"),(0,i.kt)("p",null,"The REST server returns a JSON object that contains the information of the submitted task. Status ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," indicates the command finishes successfully."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 3,\n  "progress": 100,\n  "iServerErrorCode": 0\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Success: OK)"))}g.isMDXComponent=!0}}]);