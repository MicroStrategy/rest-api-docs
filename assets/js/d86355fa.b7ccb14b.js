"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4844],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,b=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(b,l(l({ref:t},s),{},{components:n})):a.createElement(b,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return p}});var a,r=n(3117),o=n(102),l=(n(7294),n(3905)),i=["components"],d={title:"Create a custom calendar object",sidebar_label:"Create a custom calendar object",description:"This workflow demonstrates how to create a new custom calendar object through the Modeling service."},c=void 0,s={unversionedId:"common-workflows/modeling/manage-calendar-objects/create-a-calendar-object",id:"common-workflows/modeling/manage-calendar-objects/create-a-calendar-object",title:"Create a custom calendar object",description:"This workflow demonstrates how to create a new custom calendar object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-calendar-objects/create-a-calendar-object.md",sourceDirName:"common-workflows/modeling/manage-calendar-objects",slug:"/common-workflows/modeling/manage-calendar-objects/create-a-calendar-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/create-a-calendar-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-calendar-objects/create-a-calendar-object.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Create a custom calendar object",sidebar_label:"Create a custom calendar object",description:"This workflow demonstrates how to create a new custom calendar object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a calendar's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-calendar-definition"},next:{title:"Update a custom calendar object",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object"}},m={},p=[{value:"Create a new custom calendar",id:"create-a-new-custom-calendar",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),b={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,l.kt)("p",null,"This workflow sample demonstrates how to create a new Custom Calendar object through the Modeling service."),(0,l.kt)("p",null,'You want to create a new Custom Calendar called "European Calendar" based on system calendar of Gregorian Calendar with Object ID 2AD679C54C569506AADE6596A1A479ED. You want to set Sunday as the week start day. The Calendar would start from Year 2022 and end after 5 years.'),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},(0,l.kt)("inlineCode",{parentName:"a"},"POST /api/auth/login")),"."),(0,l.kt)("p",{parentName:"admonition"},"Since Calendar objects are configuration objects, you must set the project ID as an empty string.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,l.kt)("h2",{id:"create-a-new-custom-calendar"},"Create a new custom calendar"),(0,l.kt)("p",null,"Endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/calendars"},(0,l.kt)("inlineCode",{parentName:"a"},"POST /api/model/calendars"))),(0,l.kt)("p",null,"To create the new custome calendar , you can submit the request body with the correct information."),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"information"),", you need to provide ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"subType")," for the calendar you want to create. In ",(0,l.kt)("inlineCode",{parentName:"p"},"baseCalendar"),", you need to provide the information for the base calendar that the custom calendar is built on."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"For custom calendar, the ",(0,l.kt)("inlineCode",{parentName:"p"},"subType")," should be ",(0,l.kt)("inlineCode",{parentName:"p"},"calendar_custom"),". User can't set destination folder for configuration object.")),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json""X-MSTR-AuthToken": "qr56qbrjb59oq5m193v8avjsdv""X-MSTR-MS-Changeset": "46FB9631EB134C9F992BC2F9E92DDC50"\n')),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "European Calendar",\n    "subType": "calendar_custom"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 5\n  },\n  "weekStartDay": "Sunday"\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'POST\' \\\n  \'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: qr56qbrjb59oq5m193v8avjsdv\' \\\n  -H \'X-MSTR-MS-Changeset: 46FB9631EB134C9F992BC2F9E92DDC50\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "information": {\n    "name": "European Calendar",\n    "subType": "calendar_custom"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 5\n  },\n  "weekStartDay": "Sunday"\n}\'\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("p",null,"You can view the new calendar's full definition in the body of the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "5A09AB76ECA742D8889AE035A66F711F",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "66FBD8D81F254B63B3C74B599EC7BB47",\n    "subType": "calendar_custom",\n    "name": "European Calendar",\n    "ownerId": "54F3D26011D2896560009A8E67019608",\n    "destinationFolderId": "636200232691438EA7CA6CB26CCDB4EF"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system",\n    "name": "Gregorian Calendar"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 5\n  },\n  "weekStartDay": "Sunday"\n}\n')),(0,l.kt)("p",null,"Response Code: 201 (A new calendar is created successfully in the changeset.)"),(0,l.kt)("p",null,"The model for the definition of a custom calendar can be represented with the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"information.name")),(0,l.kt)("td",{parentName:"tr",align:null},"String. Name of the custom calendar. This is the most user-friendly value that can be used to identify the custom calendar."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"information.subType")),(0,l.kt)("td",{parentName:"tr",align:null},"String. For custom calendar, subType is calendar_custom."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"information.destinationFolderId")),(0,l.kt)("td",{parentName:"tr",align:null},"String. Folder Id where the new custom calendar is saved which couldn\u2019t be modified by user."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"baseCalendar.objectId")),(0,l.kt)("td",{parentName:"tr",align:null},"String. The object ID of the base calendar that the custom calendar is built on."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"baseCalendar.subType")),(0,l.kt)("td",{parentName:"tr",align:null},"String. The subtype of the base calendar should be calendar_system."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"baseCalendar.name")),(0,l.kt)("td",{parentName:"tr",align:null},"String. The name of the base calendar."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tablePrefix")),(0,l.kt)("td",{parentName:"tr",align:null},"String. It specifies the warehouse table prefix, which is used to create time tables for reporting."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"calendarBegin")),(0,l.kt)("td",{parentName:"tr",align:null},"The year that this custom calendar begins. Only one of dynamicYearOffset and staticYear can be valid."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"calendarEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"The year that this custom calendar ends. Only one of dynamicYearOffset and staticYear can be valid."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"weekStartDay")),(0,l.kt)("td",{parentName:"tr",align:null},"String. The Day that a week starts for this custom calendar. It can only be of (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday or Saturday)."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714")))))}f.isMDXComponent=!0}}]);