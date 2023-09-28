"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2611],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20792:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var a,r=t(83117),o=t(80102),l=(t(67294),t(3905)),i=["components"],c={title:"Update a custom calendar object",sidebar_label:"Update a custom calendar object",description:"This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service."},d=void 0,s={unversionedId:"common-workflows/modeling/manage-calendar-objects/update-a-calendar-object",id:"common-workflows/modeling/manage-calendar-objects/update-a-calendar-object",title:"Update a custom calendar object",description:"This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object.md",sourceDirName:"common-workflows/modeling/manage-calendar-objects",slug:"/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object.md",tags:[],version:"current",lastUpdatedBy:"Holmblad, Darren",lastUpdatedAt:1695923197,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Update a custom calendar object",sidebar_label:"Update a custom calendar object",description:"This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a custom calendar object",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/create-a-calendar-object"},next:{title:"Manage consolidation objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-consolidation-objects/"}},p={},m=[{value:"Update an existing custom calendar",id:"update-an-existing-custom-calendar",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),f={toc:m};function b(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,l.kt)("p",null,"This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service."),(0,l.kt)("p",null,"You want to update the existing Custom Calendar with object ID 66FBD8D81F254B63B3C74B599EC7BB47 with the following changes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modify the weekStartDay to Monday"),(0,l.kt)("li",{parentName:"ul"},'Rename the calendar to "Chinese Calendar"'),(0,l.kt)("li",{parentName:"ul"},"Modify the calendarEnd to 20")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,l.kt)("p",{parentName:"admonition"},"Since calendar objects are configuration objects, you must set the project ID as an empty string.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,l.kt)("h2",{id:"update-an-existing-custom-calendar"},"Update an existing custom calendar"),(0,l.kt)("p",null,"Endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars"},"PUT /api/model/calendars/{calendarId}")),(0,l.kt)("p",null,"System calendars cannot be updated through API."),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "qr56qbrjb59oq5m193v8avjsdv"\n"X-MSTR-MS-Changeset": "46FB9631EB134C9F992BC2F9E92DDC50"\n')),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Chinese Calendar",\n    "subType": "calendar_custom"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 20\n  },\n  "weekStartDay": "Monday"\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PUT\' \\\n  \'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars/015FB8D4CF30413DAF120DCDE4C2F85C\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: qr56qbrjb59oq5m193v8avjsdv\' \\\n  -H \'X-MSTR-MS-Changeset: 46FB9631EB134C9F992BC2F9E92DDC50\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "information": {\n    "name": "Chinese Calendar",\n    "subType": "calendar_custom"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 20\n  },\n  "weekStartDay": "Monday"\n}\'\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("p",null,"You can view the new calendar's definition in the body of the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-07-22T04:44:03.000Z",\n    "dateModified": "2022-08-03T06:46:42.019Z",\n    "versionId": "0CA4BAE39B44F1212BD6F8B843E736B6",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "015FB8D4CF30413DAF120DCDE4C2F85C",\n    "subType": "calendar_custom",\n    "name": "Chinese Calendar",\n    "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",\n    "description": "custom calendar",\n    "destinationFolderId": "636200232691438EA7CA6CB26CCDB4EF"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system",\n    "name": "Gregorian Calendar"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 20\n  },\n  "weekStartDay": "Monday"\n}\n')),(0,l.kt)("p",null,"Response Code: 200 (Calendar is successfully updated in the changeset.)"),(0,l.kt)("p",null,"The following fields of a custom calendar could be updated using PUT API."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"information.name")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"baseCalendar.objectId")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tablePrefix")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"calendarBegin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"calendarEnd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weekStartDay"))))}b.isMDXComponent=!0}}]);