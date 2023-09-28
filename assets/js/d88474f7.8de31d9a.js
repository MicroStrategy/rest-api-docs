"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[947],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92162:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var o,r=t(83117),a=t(80102),i=(t(67294),t(3905)),s=["components"],c={title:"Change the owner of an object",sidebar_label:"Change the owner of an object",description:"Change the owner of an object."},l=void 0,p={unversionedId:"common-workflows/modeling/common-object-management/change-ownership",id:"common-workflows/modeling/common-object-management/change-ownership",title:"Change the owner of an object",description:"Change the owner of an object.",source:"@site/docs/common-workflows/modeling/common-object-management/change-ownership.md",sourceDirName:"common-workflows/modeling/common-object-management",slug:"/common-workflows/modeling/common-object-management/change-ownership",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/change-ownership",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/common-object-management/change-ownership.md",tags:[],version:"current",lastUpdatedBy:"Holmblad, Darren",lastUpdatedAt:1695923197,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Change the owner of an object",sidebar_label:"Change the owner of an object",description:"Change the owner of an object."},sidebar:"tutorialSidebar",previous:{title:"Manage object's ACL",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-acl"},next:{title:"Manage object's translations",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/"}},d={},m=[{value:"Retrieve the list of objects owned by a specific user",id:"retrieve-the-list-of-objects-owned-by-a-specific-user",level:2},{value:"Transfer ownership and access rights over the specific object",id:"transfer-ownership-and-access-rights-over-the-specific-object",level:2}],u=(o="Available",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 10",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-dc9e5266-db8c-4842-9c44-16b5dd614f47"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve the list of objects owned by a specific user and transfer the specific object's ownership along with the access rights to a new user."),(0,i.kt)("p",null,'You want to get a list of dossier objects owned by "MSTR User" with ID "7FC05A65473CE2FD845CE6A1D3F13233" and transfer the ownership along with the access rights over the Landing Page dossier with ID "66366F0E11EA112A1A9C0080EF8568D5" to the user "Allister Lewandowski" with ID "E96A7B9311D4BBCE10004694316DE8A4".'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("h2",{id:"retrieve-the-list-of-objects-owned-by-a-specific-user"},"Retrieve the list of objects owned by a specific user"),(0,i.kt)("p",null,"You can get the list of objects owned by a specific user with ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/searches/results?type={type}&ownerId={ownerId}"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "hs8n6ji36i18oo77g92mc24j2k"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/searches/results?type=55&ownerId=7FC05A65473CE2FD845CE6A1D3F13233" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: hs8n6ji36i18oo77g92mc24j2k" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the number and list of objects owned by a specific user in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "totalItems": 1,\n  "result": [\n    {\n      "name": "Landing Page",\n      "id": "66366F0E11EA112A1A9C0080EF8568D5",\n      "type": 55,\n      "subtype": 14081,\n      "dateCreated": "2019-11-27T15:27:18.000+0000",\n      "dateModified": "2022-04-01T17:48:19.000+0000",\n      "version": "3F50245EF7466744AFEEE5B726C11CB2",\n      "acg": 255,\n      "owner": {\n        "name": "MSTR User",\n        "id": "7FC05A65473CE2FD845CE6A1D3F13233"\n      },\n      "extType": 0,\n      "iconPath": "https://mobilecloud.s3.amazonaws.com/MicroStrategy/landing/Cover.png",\n      "viewMedia": 1879072805,\n      "certifiedInfo": {\n        "certified": false\n      },\n      "templateInfo": {\n        "template": false,\n        "lastModifiedBy": {}\n      },\n      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The list of objects owned by a specific user was returned successfully.)"),(0,i.kt)("h2",{id:"transfer-ownership-and-access-rights-over-the-specific-object"},"Transfer ownership and access rights over the specific object"),(0,i.kt)("p",null,"You can update an object's information with ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT /api/objects/{objectId}?type={type}"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "hs8n6ji36i18oo77g92mc24j2k"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "acl": [\n    {\n      "op": "remove",\n      "trustee": "7FC05A65473CE2FD845CE6A1D3F13233",\n      "rights": 255,\n      "denied": false,\n      "inheritable": false,\n      "type": 1\n    },\n    {\n      "op": "add",\n      "trustee": "E96A7BBD11D4BBCE10004694316DE8A4",\n      "rights": 255,\n      "denied": false,\n      "inheritable": false,\n      "type": 1\n    }\n  ],\n  "ownerId": "E96A7BBD11D4BBCE10004694316DE8A4"\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PUT\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/66366F0E11EA112A1A9C0080EF8568D5?type=55&flags=70\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: hs8n6ji36i18oo77g92mc24j2k\' \\\n  -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n  -d \'{\n  "acl": [\n    {\n      "op": "remove",\n      "trustee": "7FC05A65473CE2FD845CE6A1D3F13233",\n      "rights": 255,\n      "denied": false,\n      "inheritable": false,\n      "type": 1\n    },\n    {\n      "op": "add",\n      "trustee": "E96A7BBD11D4BBCE10004694316DE8A4",\n      "rights": 255,\n      "denied": false,\n      "inheritable": false,\n      "type": 1\n    }\n\n  ],\n  "ownerId": "E96A7BBD11D4BBCE10004694316DE8A4"\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the updated owner and access rights information in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Landing Page",\n  "id": "66366F0E11EA112A1A9C0080EF8568D5",\n  "type": 55,\n  "subtype": 14081,\n  "dateCreated": "2019-11-27T15:27:19.000+0000",\n  "dateModified": "2023-05-09T16:16:19.000+0000",\n  "version": "ECFA316EAB44EF42A89A469632FD8E0F",\n  "acg": 255,\n  "owner": {\n    "name": "Allister Lewandowski",\n    "id": "E96A7BBD11D4BBCE10004694316DE8A4"\n  },\n  "acl": [\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "294DEDC011D2F1D56000D98E67019608",\n      "trusteeName": "Public / Guest",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "C82C6B1011D2894CC0009D9F29718E4F",\n      "trusteeName": "Everyone",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "54F3D26011D2896560009A8E67019608",\n      "trusteeName": "Administrator",\n      "trusteeType": 34,\n      "trusteeSubtype": 8704,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "C1E1419F11D603A2100086B3A5E8F8A4",\n      "trusteeName": "Developers",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "E96A7BBD11D4BBCE10004694316DE8A4",\n      "trusteeName": "Allister Lewandowski",\n      "trusteeType": 34,\n      "trusteeSubtype": 8704,\n      "inheritable": false\n    }\n  ],\n  "extType": 0,\n  "iconPath": "https://mobilecloud.s3.amazonaws.com/MicroStrategy/landing/Cover.png",\n  "viewMedia": 1879072805,\n  "ancestors": [\n    {\n      "name": "MicroStrategy Tutorial",\n      "id": "D43364C684E34A5F9B2F9AD7108F7828",\n      "level": 3\n    },\n    {\n      "name": "Public Objects",\n      "id": "98FE182C2A10427EACE0CD30B6768258",\n      "level": 2\n    },\n    {\n      "name": "Reports",\n      "id": "D3C7D461F69C4610AA6BAA5EF51F4125",\n      "level": 1\n    }\n  ],\n  "certifiedInfo": {\n    "certified": false\n  },\n  "templateInfo": {\n    "template": false\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The owner and access rights information of the object has been updated successfully.)"))}h.isMDXComponent=!0}}]);