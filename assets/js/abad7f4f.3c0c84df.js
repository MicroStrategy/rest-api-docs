"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[45],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(b,o(o({ref:n},c),{},{components:t})):a.createElement(b,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77428:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a,r=t(83117),i=t(80102),o=(t(67294),t(3905)),s=["components"],l={title:"Manage mobile subscriptions",description:"This workflow sample demonstrates how to create and update a mobile subscription."},p=void 0,c={unversionedId:"common-workflows/administration/distribution-services/manage-subscriptions/mobile-subscriptions",id:"common-workflows/administration/distribution-services/manage-subscriptions/mobile-subscriptions",title:"Manage mobile subscriptions",description:"This workflow sample demonstrates how to create and update a mobile subscription.",source:"@site/docs/common-workflows/administration/distribution-services/manage-subscriptions/mobile-subscriptions.md",sourceDirName:"common-workflows/administration/distribution-services/manage-subscriptions",slug:"/common-workflows/administration/distribution-services/manage-subscriptions/mobile-subscriptions",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/mobile-subscriptions",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/distribution-services/manage-subscriptions/mobile-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Manage mobile subscriptions",description:"This workflow sample demonstrates how to create and update a mobile subscription."},sidebar:"tutorialSidebar",previous:{title:"Create and get a subscription",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/create-and-get-a-subscription"},next:{title:"Create subscription for multi content",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-for-multi-content"}},u={},d=[{value:"Create a new mobile subscription",id:"create-a-new-mobile-subscription",level:2},{value:"Update an existing mobile subscription",id:"update-an-existing-mobile-subscription",level:2}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),b={toc:d};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(m,{since:"2021 Update 9",mdxType:"Available"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to create and update a mobile subscription."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-mobile-subscription"},"Create a new mobile subscription")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#update-an-existing-mobile-subscription"},"Update an existing mobile subscription"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This workflow follows the general steps described in ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/create-and-get-a-subscription"},"Create and get a subscription"),". You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-da43d1b1-a332-4452-829f-e07a041abc8f?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("h2",{id:"create-a-new-mobile-subscription"},"Create a new mobile subscription"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/createSubscription"},"POST /api/subscriptions")),(0,o.kt)("p",null,"This endpoint allows you to create a new subscription for a given project. Obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". Obtain the project ID using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". Provide the information used to create a subscription in the body parameter of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 201 and a response body containing all the information on the newly created subscription."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Example",\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA"\n    }\n  ],\n  "contents": [\n    {\n      "id": "E63834A411D5C49EC0000C881FDA1A4F",\n      "name": "Unit Tracking by Supplier",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML"\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "type": "user",\n      "includeType": "TO"\n    }\n  ],\n  "delivery": {\n    "mode": "MOBILE",\n    "contactSecurity": false,\n    "mobile": {\n      "clientType": "TABLET",\n      "deviceId": "E206C75BABC441C5B13B60C5D956F605",\n      "doNotCreateUpdateCaches": false,\n      "overwriteOlderVersion": true,\n      "reRunHl": false\n    }\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -d '...' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0BC64C0AFA4F86A55FB8BEA3332F90B7",\n  "multipleContents": false,\n  "name": "Example",\n  "editable": true,\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "dateCreated": "2021-08-03T13:08:47+0000",\n  "dateModified": "2021-08-03T13:08:47+0000",\n  "owner": {\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233",\n    "name": "MSTR User"\n  },\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA",\n      "name": "Books Closed",\n      "type": "event_based",\n      "expired": false\n    }\n  ],\n  "contents": [\n    {\n      "id": "E63834A411D5C49EC0000C881FDA1A4F",\n      "name": "Unit Tracking by Supplier",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML"\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "isGroup": false,\n      "type": "user",\n      "includeType": "TO",\n      "childSubscriptionId": "8B1B107C2D4D82C13F1342B7959E9B4D"\n    }\n  ],\n  "delivery": {\n    "mode": "MOBILE",\n    "contactSecurity": false,\n    "mobile": {\n      "clientType": "TABLET",\n      "deviceId": "E206C75BABC441C5B13B60C5D956F605",\n      "doNotCreateUpdateCaches": false,\n      "overwriteOlderVersion": true,\n      "reRunHl": false\n    }\n  }\n}\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Response Code: 201 (Created)")))),(0,o.kt)("h2",{id:"update-an-existing-mobile-subscription"},"Update an existing mobile subscription"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/updateSubscription"},"PUT /api/subscriptions/{id}")),(0,o.kt)("p",null,"This endpoint allows you to update all of the information for a specific subscription. Obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". Obtain the project ID using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". Provide the information used to update a subscription in the body parameter of the request and provide the subscription ID in the request path. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the updated subscription."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Example",\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA"\n    }\n  ],\n  "contents": [\n    {\n      "id": "E63834A411D5C49EC0000C881FDA1A4F",\n      "name": "Unit Tracking by Supplier",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML"\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "type": "user",\n      "includeType": "TO"\n    }\n  ],\n  "delivery": {\n    "mode": "MOBILE",\n    "contactSecurity": false,\n    "mobile": {\n      "clientType": "TABLET",\n      "deviceId": "E206C75BABC441C5B13B60C5D956F605",\n      "doNotCreateUpdateCaches": false,\n      "overwriteOlderVersion": true,\n      "reRunHl": false\n    }\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X PUT -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -d '...' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/0BC64C0AFA4F86A55FB8BEA3332F90B7\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0BC64C0AFA4F86A55FB8BEA3332F90B7",\n  "multipleContents": false,\n  "name": "Example",\n  "editable": true,\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "dateCreated": "2021-08-03T13:08:47+0000",\n  "dateModified": "2021-08-03T13:08:47+0000",\n  "owner": {\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233",\n    "name": "MSTR User"\n  },\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA",\n      "name": "Books Closed",\n      "type": "event_based",\n      "expired": false\n    }\n  ],\n  "contents": [\n    {\n      "id": "E63834A411D5C49EC0000C881FDA1A4F",\n      "name": "Unit Tracking by Supplier",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML"\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "isGroup": false,\n      "type": "user",\n      "includeType": "TO",\n      "childSubscriptionId": "8B1B107C2D4D82C13F1342B7959E9B4D"\n    }\n  ],\n  "delivery": {\n    "mode": "MOBILE",\n    "contactSecurity": false,\n    "mobile": {\n      "clientType": "TABLET",\n      "deviceId": "E206C75BABC441C5B13B60C5D956F605",\n      "doNotCreateUpdateCaches": false,\n      "overwriteOlderVersion": true,\n      "reRunHl": false\n    }\n  }\n}\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Response Code: 200 (OK)")))))}f.isMDXComponent=!0}}]);