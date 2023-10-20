"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3873],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(m,".").concat(d)]||u[d]||l[d]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13566:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"Update a custom timezone object",sidebar_label:"Update a custom timezone object",description:"This workflow sample demonstrates how to update an existing custom timezone object through the Modeling service."},m=void 0,c={unversionedId:"common-workflows/modeling/manage-time-zone-objects/update-a-time-zone-object",id:"common-workflows/modeling/manage-time-zone-objects/update-a-time-zone-object",title:"Update a custom timezone object",description:"This workflow sample demonstrates how to update an existing custom timezone object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-time-zone-objects/update-a-time-zone-object.md",sourceDirName:"common-workflows/modeling/manage-time-zone-objects",slug:"/common-workflows/modeling/manage-time-zone-objects/update-a-time-zone-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/update-a-time-zone-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-time-zone-objects/update-a-time-zone-object.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Update a custom timezone object",sidebar_label:"Update a custom timezone object",description:"This workflow sample demonstrates how to update an existing custom timezone object through the Modeling service."}},p={},l=[{value:"Update an existing timezone using PATCH /api/model/timezones",id:"update-an-existing-timezone-using-patch-apimodeltimezones",level:2}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-4845cf11-1e66-4530-b33f-730143143498?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow sample demonstrates how to update an existing custom timezone object through the Modeling service."),(0,r.kt)("p",null,"You want to update a custom timezone named ",(0,r.kt)("inlineCode",{parentName:"p"},'"Asian Shanghai Time"'),". The timezone object ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"E99B4F7692564D36A5B324A7956CB84F"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Since timezone objects are configuration objects, you must set the project ID as an empty string.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,r.kt)("h2",{id:"update-an-existing-timezone-using-patch-apimodeltimezones"},"Update an existing timezone using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones"},"PATCH /api/model/timezones")),(0,r.kt)("p",null,"System time zones cannot be updated through API."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "newTimezoneName",\n    "description": "This timezone has been updated."\n  },\n  "baseTimezone": { "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C" }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/E99B4F7692564D36A5B324A7956CB84F" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"information\\":{\\"name\\":\\"newtimezoneName\\", \\"description\\": \\"This timezone has been updated.\\"},\\"baseTimezone\\":{\\"objectId\\":\\"0B4AC9E54E016BF00EAA99929C2B4E5C\\"}}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new timezone's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-12-08T08:54:07.114Z",\n    "dateModified": "2021-12-08T08:54:07.114Z",\n    "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n    "primaryLocale": "en-US",\n    "objectId": "E99B4F7692564D36A5B324A7956CB84F",\n    "subType": "timezone_custom",\n    "name": "newtimezoneName",\n    "description": "This timezone has been updated."\n  },\n  "baseTimezone": {\n    "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",\n    "subType": "timezone_system",\n    "name": "Asia Shanghai time"\n  },\n  "currentOffset": 28800\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (Timezone is successfully updated in the changeset.)"))}d.isMDXComponent=!0}}]);