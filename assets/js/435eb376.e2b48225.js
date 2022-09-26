"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2372],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={title:"Manage Objects",description:"An Access Control List (ACL) is a set of permissions on objects so that users or user groups have control over individual objects in the system. Those permissions decide whether or not a user can perform a particular class of operations on a particular object. For example, a user may have permissions to view and execute a report , but cannot modify the report definition or delete the report."},s=void 0,p={unversionedId:"common-workflows/manage-objects",id:"common-workflows/manage-objects",title:"Manage Objects",description:"An Access Control List (ACL) is a set of permissions on objects so that users or user groups have control over individual objects in the system. Those permissions decide whether or not a user can perform a particular class of operations on a particular object. For example, a user may have permissions to view and execute a report , but cannot modify the report definition or delete the report.",source:"@site/docs/common-workflows/manage-objects.md",sourceDirName:"common-workflows",slug:"/common-workflows/manage-objects",permalink:"/rest-api-docs/common-workflows/manage-objects",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-objects.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Manage Objects",description:"An Access Control List (ACL) is a set of permissions on objects so that users or user groups have control over individual objects in the system. Those permissions decide whether or not a user can perform a particular class of operations on a particular object. For example, a user may have permissions to view and execute a report , but cannot modify the report definition or delete the report."},sidebar:"tutorialSidebar",previous:{title:"Update SAP HANA Parameters",permalink:"/rest-api-docs/common-workflows/manage-table-objects/update-sap-hana-parameters"},next:{title:"Improve Performance by Working with Partial Resources",permalink:"/rest-api-docs/common-workflows/improve-performance-by-working-with-partial-resources/"}},u={},d=[{value:"Get a Folder&#39;s ACL",id:"get-a-folders-acl",level:2},{value:"Get an Attribute&#39;s ACL",id:"get-an-attributes-acl",level:2},{value:"Update a Folder&#39;s ACL",id:"update-a-folders-acl",level:2},{value:"Attribute Inherits ACL of Parent Folder",id:"attribute-inherits-acl-of-parent-folder",level:2}],c={toc:d};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-638a5542-2f37-4df9-be9a-972a11055db5?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"An Access Control List (ACL) is a set of permissions on objects so that users or user groups have control over individual objects in the system. Those permissions decide whether or not a user can perform a particular class of operations on a particular object. For example, a user may have permissions to view and execute a report , but cannot modify the report definition or delete the report."),(0,l.kt)("p",null,"ACLs include the following information."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"User: The name of the user or group granted or denied access to the object."),(0,l.kt)("li",{parentName:"ul"},"Permissions: The degree to which the user or group is granted or denied access to the object. The available permissions are:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Access"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Browse"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows the viewing of an object in the Folder List and Object Viewer"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Use/Execute"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows the usage of an object needed for execution. For example, a filter that must be used in a report execution."),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows viewing of the object's definition and ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Write"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows modification of the object definition, but not the object's ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delete"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows deletion of the object"),(0,l.kt)("td",{parentName:"tr",align:null},"16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Control"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows modification of the object's ACL and takes ownership of an object"),(0,l.kt)("td",{parentName:"tr",align:null},"32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Use"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow usage of the object"),(0,l.kt)("td",{parentName:"tr",align:null},"64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Execute"),(0,l.kt)("td",{parentName:"tr",align:null},"All execution of the object"),(0,l.kt)("td",{parentName:"tr",align:null},"128")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Full"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow full control of the object"),(0,l.kt)("td",{parentName:"tr",align:null},"255")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Inheritable: Applies only to folders. If set, any objects placed in the folder inherits the folder's entry in the ACL.")),(0,l.kt)("p",null,"The workflow sample below demonstrates how to get and update an object's ACL."),(0,l.kt)("h2",{id:"get-a-folders-acl"},"Get a Folder's ACL"),(0,l.kt)("p",null,"Endpoint: ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/objects/{id}")),(0,l.kt)("p",null,"In this workflow sample, we created a MicroStrategy Test Folder under the Public Objects folder. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/objects/{id}")," endpoint to get complete information about the MicroStrategy Test Folder and view its ACL. The object ID of the folder is 0017E12B4DB60EE4BF7D56946ED60A7E. Based on ",(0,l.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html"},"EnumDSSXMLObjectTypes"),", the object type is 8."),(0,l.kt)("p",null,"Pass the authorization token needed to execute the request using ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". Obtain the project ID from ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". Identify possible values of the object type from ",(0,l.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html"},"EnumDSSXMLObjectTypes"),"."),(0,l.kt)("p",null,"The MicroStrategy Test Folder has the following ACL for users and user groups:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trustee Name"),(0,l.kt)("th",{parentName:"tr",align:null},"ACL Rights"),(0,l.kt)("th",{parentName:"tr",align:null},"ACL Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Public/Guest"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Everyone"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Administrator"),(0,l.kt)("td",{parentName:"tr",align:null},"Full Control"),(0,l.kt)("td",{parentName:"tr",align:null},"255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSTR User"),(0,l.kt)("td",{parentName:"tr",align:null},"Full Control"),(0,l.kt)("td",{parentName:"tr",align:null},"255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Developer"),(0,l.kt)("td",{parentName:"tr",align:null},"Full Control"),(0,l.kt)("td",{parentName:"tr",align:null},"255")))),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j\nX-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\nObject Id: 0017E12B4DB60EE4BF7D56946ED60A7E\nObject type: 8\n")),(0,l.kt)("p",null,"Curl Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/0017E12B4DB60EE4BF7D56946ED60A7E?type=8" -H "accept: application/json" -H "X-MSTR-AuthToken: lac3dgmq352qt9hjcojia8e7n9" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,l.kt)("p",null,"Request URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/0017E12B4DB60EE4BF7D56946ED60A7E?type=8\n")),(0,l.kt)("p",null,"Response Code: 200"),(0,l.kt)("p",null,"Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MicroStrategy Test Folder",\n  "id": "0017E12B4DB60EE4BF7D56946ED60A7E",\n  "type": 8,\n  "subtype": 2048,\n  "dateCreated": "2020-08-04T20:38:43.000+0000",\n  "dateModified": "2020-08-05T15:54:16.000+0000",\n  "version": "EA48B2AA11EAD73300000080EF158CC0",\n  "acg": 255,\n  "owner": {\n    "name": "MSTR User",\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233"\n  },\n  "acl": [\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "294DEDC011D2F1D56000D98E67019608",\n      "trusteeName": "Public / Guest",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": true\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "C82C6B1011D2894CC0009D9F29718E4F",\n      "trusteeName": "Everyone",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": true\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "54F3D26011D2896560009A8E67019608",\n      "trusteeName": "Administrator",\n      "trusteeType": 34,\n      "trusteeSubtype": 8704,\n      "inheritable": true\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "C1E1419F11D603A2100086B3A5E8F8A4",\n      "trusteeName": "Developers",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": true\n    }\n  ],\n  "extType": 0,\n  "ancestors": [\n    {\n      "name": "MicroStrategy Tutorial",\n      "id": "D43364C684E34A5F9B2F9AD7108F7828",\n      "level": 2\n    },\n    {\n      "name": "Public Objects",\n      "id": "98FE182C2A10427EACE0CD30B6768258",\n      "level": 1\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"In Workstation, you can view the permissions for the MicroStrategy Test Folder."),(0,l.kt)("p",null,"1","."," On the main Workstation window, locate the MicroStrategy Test Folder. 2","."," Right-click the folder and choose ",(0,l.kt)("strong",{parentName:"p"},"Properties")," or ",(0,l.kt)("strong",{parentName:"p"},"Get Info"),". 3","."," In the left pane, click ",(0,l.kt)("strong",{parentName:"p"},"Security Access"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"manage_objects_workstation",src:n(5515).Z,width:"993",height:"757"})),(0,l.kt)("h2",{id:"get-an-attributes-acl"},"Get an Attribute's ACL"),(0,l.kt)("p",null,"Endpoint: ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/objects/{id}")),(0,l.kt)("p",null,"Under the MicroStrategy Test Folder, there is a Total Sales attribute. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/objects/{id}")," endpoint to fetch all the attribute\u2019s details, as well as the ACL. This attribute has an object ID of 5C258DC54E035C48145A2DA5C791E1D5 and an object type of 12."),(0,l.kt)("p",null,"The Total Sales attribute has the following ACL for users and user groups:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trustee Name"),(0,l.kt)("th",{parentName:"tr",align:null},"ACL Rights"),(0,l.kt)("th",{parentName:"tr",align:null},"ACL Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Public/Guest"),(0,l.kt)("td",{parentName:"tr",align:null},"View"),(0,l.kt)("td",{parentName:"tr",align:null},"199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Everyone"),(0,l.kt)("td",{parentName:"tr",align:null},"View"),(0,l.kt)("td",{parentName:"tr",align:null},"199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Administrator"),(0,l.kt)("td",{parentName:"tr",align:null},"Full Control"),(0,l.kt)("td",{parentName:"tr",align:null},"255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSTR User"),(0,l.kt)("td",{parentName:"tr",align:null},"Full Control"),(0,l.kt)("td",{parentName:"tr",align:null},"255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Developer"),(0,l.kt)("td",{parentName:"tr",align:null},"Full Control"),(0,l.kt)("td",{parentName:"tr",align:null},"255")))),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j\nX-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\nObject Id: 5C258DC54E035C48145A2DA5C791E1D5\nObject type: 12\n")),(0,l.kt)("p",null,"Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/5C258DC54E035C48145A2DA5C791E1D5?type=12" -H "accept: application/json" -H "X-MSTR-AuthToken: oc34eshuafnv5ir2381252gs5q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,l.kt)("p",null,"Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Total Sales",\n  "id": "5C258DC54E035C48145A2DA5C791E1D5",\n  "type": 12,\n  "abbreviation": "Testing",\n  "description": "Testing",\n  "subtype": 3072,\n  "dateCreated": "2020-08-04T21:05:20.000+0000",\n  "dateModified": "2020-08-05T17:29:14.000+0000",\n  "version": "2E4C112E11EAD741285E0080EF6535D3",\n  "acg": 255,\n  "owner": {\n    "name": "MSTR User",\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233"\n  },\n  "acl": [\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "54F3D26011D2896560009A8E67019608",\n      "trusteeName": "Administrator",\n      "trusteeType": 34,\n      "trusteeSubtype": 8704,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "C1E1419F11D603A2100086B3A5E8F8A4",\n      "trusteeName": "Developers",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    },\n    {\n      "deny": true,\n      "type": 0,\n      "rights": 199,\n      "trusteeId": "C82C6B1011D2894CC0009D9F29718E4F",\n      "trusteeName": "Everyone",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "7FC05A65473CE2FD845CE6A1D3F13233",\n      "trusteeName": "MSTR User",\n      "trusteeType": 34,\n      "trusteeSubtype": 8704,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "C82C6B1011D2894CC0009D9F29718E4F",\n      "trusteeName": "Everyone",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "294DEDC011D2F1D56000D98E67019608",\n      "trusteeName": "Public / Guest",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    }\n  ],\n  "extType": 0,\n  "iconPath": "string",\n  "ancestors": [\n    {\n      "name": "MicroStrategy Tutorial",\n      "id": "D43364C684E34A5F9B2F9AD7108F7828",\n      "level": 3\n    },\n    {\n      "name": "Public Objects",\n      "id": "98FE182C2A10427EACE0CD30B6768258",\n      "level": 2\n    },\n    {\n      "name": "MicroStrategy Test Folder",\n      "id": "0017E12B4DB60EE4BF7D56946ED60A7E",\n      "level": 1\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"In Workstation, you can view the permissions for the Total Sales attribute."),(0,l.kt)("p",null,"1","."," On the main Workstation window, locate the MicroStrategy Test Folder. 2","."," Right-click the Total Sales attribute in the folder and choose ",(0,l.kt)("strong",{parentName:"p"},"Properties")," or ",(0,l.kt)("strong",{parentName:"p"},"Get Info"),". 3","."," In the left pane, click ",(0,l.kt)("strong",{parentName:"p"},"Security Access"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"manage_objects_attribute",src:n(4778).Z,width:"1430",height:"1087"})),(0,l.kt)("h2",{id:"update-a-folders-acl"},"Update a Folder's ACL"),(0,l.kt)("p",null,"Endpoint: ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT /api/objects/{id}")),(0,l.kt)("p",null,"Let's use the ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," operation to update the ACL value for the MicroStrategy Test Folder, previously mentioned in step 1. Update the ACL value for Developer from Full Control (255) to View (199). Then, add a trustee called Mobile User, with an ID of 0AA72D6042B938FF3FBED3AAC39349F5 and an ACL value of View (199)."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT /api/objects/{id}")," endpoint is used to update information for a specific object, in a specific project. Obtain the authorization token needed to execute the request using ",(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". Obtain the project ID using ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". Pass the authorization token and the project ID in the request header. Specify the object ID in the path of the request. Specify the object type as a query parameter; possible values for object type are provided in ",(0,l.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html"},"EnumDSSXMLObjectTypes"),"."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j\nX-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\nObject Id: 0017E12B4DB60EE4BF7D56946ED60A7E\nObject type: 8\n")),(0,l.kt)("p",null,"Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MicroStrategy Test Folder",\n  "description": "Test Folder",\n  "folderId": "98FE182C2A10427EACE0CD30B6768258",\n  "acl": [\n    {\n      "op": "ADD",\n      "trustee": "0AA72D6042B938FF3FBED3AAC39349F5",\n      "rights": 199,\n      "denied": false,\n      "inheritable": true,\n      "type": 1\n    },\n    {\n      "op": "REPLACE",\n      "trustee": "C1E1419F11D603A2100086B3A5E8F8A4",\n      "rights": 199,\n      "denied": false,\n      "inheritable": true,\n      "type": 1\n    }\n  ],\n  "propagateACLToChildren": true\n}\n')),(0,l.kt)("p",null,"Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/0017E12B4DB60EE4BF7D56946ED60A7E?type=8" -H "accept: application/json" -H "X-MSTR-AuthToken: 3j1jbrrv4ese6qfr05kgl10lv5" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d "{\\\\"name\\\\":\\\\"MicroStrategy Test Folder\\\\",\\\\"description\\\\":\\\\"Test Folder\\\\",\\\\"folderId\\\\":\\\\"98FE182C2A10427EACE0CD30B6768258\\\\",\\\\"acl\\\\":[{\\\\"op\\\\":\\\\"ADD\\\\",\\\\"trustee\\\\":\\\\"0AA72D6042B938FF3FBED3AAC39349F5\\\\",\\\\"rights\\\\":199,\\\\"denied\\\\":false,\\\\"inheritable\\\\":true,\\\\"type\\\\":1},{\\\\"op\\\\":\\\\"REPLACE\\\\",\\\\"trustee\\\\":\\\\"C1E1419F11D603A2100086B3A5E8F8A4\\\\",\\\\"rights\\\\":199,\\\\"denied\\\\":false,\\\\"inheritable\\\\":true,\\\\"type\\\\":1}],\\\\"propagateACLToChildren\\\\":true}"\n')),(0,l.kt)("p",null,"Request URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/0017E12B4DB60EE4BF7D56946ED60A7E?type=8\n")),(0,l.kt)("p",null,"Response Code: 200"),(0,l.kt)("p",null,"Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MicroStrategy Test Folder",\n  "id": "0017E12B4DB60EE4BF7D56946ED60A7E",\n  "type": 8,\n  "description": "Test Folder",\n  "subtype": 2048,\n  "dateCreated": "2020-08-04T20:38:43.000+0000",\n  "dateModified": "2020-08-05T18:51:59.000+0000",\n  "version": "BDFAEE5211EAD74C00000080EFF54DC2",\n  "acg": 255,\n  "owner": {\n    "name": "MSTR User",\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233"\n  },\n  "acl": [\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "294DEDC011D2F1D56000D98E67019608",\n      "trusteeName": "Public / Guest",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": true\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "C82C6B1011D2894CC0009D9F29718E4F",\n      "trusteeName": "Everyone",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": true\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "54F3D26011D2896560009A8E67019608",\n      "trusteeName": "Administrator",\n      "trusteeType": 34,\n      "trusteeSubtype": 8704,\n      "inheritable": true\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "C1E1419F11D603A2100086B3A5E8F8A4",\n      "trusteeName": "Developers",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": true\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "0AA72D6042B938FF3FBED3AAC39349F5",\n      "trusteeName": "Mobile Users",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": true\n    }\n  ],\n  "extType": 0,\n  "ancestors": [\n    {\n      "name": "MicroStrategy Tutorial",\n      "id": "D43364C684E34A5F9B2F9AD7108F7828",\n      "level": 2\n    },\n    {\n      "name": "Public Objects",\n      "id": "98FE182C2A10427EACE0CD30B6768258",\n      "level": 1\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"attribute-inherits-acl-of-parent-folder"},"Attribute Inherits ACL of Parent Folder"),(0,l.kt)("p",null,"Endpoint: ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/objects/{id}")),(0,l.kt)("p",null,"In step 3, the Total Sales attribute inherited the same updated ACL as the parent MicroStrategy Test Folder. Any objects placed in this folder inherit the folder's entry in the ACL. The ACL for Developer is updated from Full Control (255) to View (199). A new trustee called Mobile User is added with a View (199) permission."),(0,l.kt)("p",null,"The Total Sales attribute has the following ACL for users and user groups:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trustee Name"),(0,l.kt)("th",{parentName:"tr",align:null},"ACL Rights"),(0,l.kt)("th",{parentName:"tr",align:null},"ACL Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Public/Guest"),(0,l.kt)("td",{parentName:"tr",align:null},"View"),(0,l.kt)("td",{parentName:"tr",align:null},"199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Everyone"),(0,l.kt)("td",{parentName:"tr",align:null},"View"),(0,l.kt)("td",{parentName:"tr",align:null},"199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Administrator"),(0,l.kt)("td",{parentName:"tr",align:null},"Full Control"),(0,l.kt)("td",{parentName:"tr",align:null},"255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mobile User"),(0,l.kt)("td",{parentName:"tr",align:null},"View"),(0,l.kt)("td",{parentName:"tr",align:null},"199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Developer"),(0,l.kt)("td",{parentName:"tr",align:null},"View"),(0,l.kt)("td",{parentName:"tr",align:null},"199")))),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j\nX-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\nObject Id: 5C258DC54E035C48145A2DA5C791E1D5\nObject type: 12\n")),(0,l.kt)("p",null,"Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Total Sales",\n  "id": "5C258DC54E035C48145A2DA5C791E1D5",\n  "type": 12,\n  "abbreviation": "Testing",\n  "description": "Testing",\n  "subtype": 3072,\n  "dateCreated": "2020-08-04T21:05:20.000+0000",\n  "dateModified": "2020-08-05T18:51:59.000+0000",\n  "version": "BE0D1F6E11EAD74CC1CC0080EFB54BF3",\n  "acg": 255,\n  "owner": {\n    "name": "MSTR User",\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233"\n  },\n  "acl": [\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "294DEDC011D2F1D56000D98E67019608",\n      "trusteeName": "Public / Guest",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "C82C6B1011D2894CC0009D9F29718E4F",\n      "trusteeName": "Everyone",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "54F3D26011D2896560009A8E67019608",\n      "trusteeName": "Administrator",\n      "trusteeType": 34,\n      "trusteeSubtype": 8704,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "C1E1419F11D603A2100086B3A5E8F8A4",\n      "trusteeName": "Developers",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    },\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 199,\n      "trusteeId": "0AA72D6042B938FF3FBED3AAC39349F5",\n      "trusteeName": "Mobile Users",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    }\n  ],\n  "extType": 0,\n  "iconPath": "string",\n  "ancestors": [\n    {\n      "name": "MicroStrategy Tutorial",\n      "id": "D43364C684E34A5F9B2F9AD7108F7828",\n      "level": 3\n    },\n    {\n      "name": "Public Objects",\n      "id": "98FE182C2A10427EACE0CD30B6768258",\n      "level": 2\n    },\n    {\n      "name": "MicroStrategy Test Folder",\n      "id": "0017E12B4DB60EE4BF7D56946ED60A7E",\n      "level": 1\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"In Workstation, you can view the updated security access for the Total Sales attribute."),(0,l.kt)("p",null,"1","."," On the main Workstation window, locate the MicroStrategy Test Folder. 2","."," Right-click the Total Sales attribute in the folder and choose ",(0,l.kt)("strong",{parentName:"p"},"Properties")," or ",(0,l.kt)("strong",{parentName:"p"},"Get Info"),". 3","."," In the left pane, click ",(0,l.kt)("strong",{parentName:"p"},"Security Access"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"workstation_updated_ACL",src:n(8074).Z,width:"1430",height:"1087"})))}m.isMDXComponent=!0},4778:function(e,t,n){t.Z=n.p+"assets/images/manage_objects_attribute-214d5490066ea8edf7dfde35bfc12d4a.png"},5515:function(e,t,n){t.Z=n.p+"assets/images/manage_objects_workstation-379fc96f7a3feb3d4b1a69623d1292b2.png"},8074:function(e,t,n){t.Z=n.p+"assets/images/workstation_updated_ACL-214d5490066ea8edf7dfde35bfc12d4a.png"}}]);