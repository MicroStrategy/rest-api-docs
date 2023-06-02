"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2819],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=l(t),m=r,u=k["".concat(c,".").concat(m)]||k[m]||d[m]||o;return t?n.createElement(u,i(i({ref:a},s),{},{components:t})):n.createElement(u,i({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=k;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},57076:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return k}});var n,r=t(83117),o=t(80102),i=(t(67294),t(3905)),p=["components"],c={title:"Create a migration package",sidebar_label:"Create a migration package",description:"This workflow sample demonstrates how to create a migration package using REST APIs."},l=void 0,s={unversionedId:"common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package",id:"common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package",title:"Create a migration package",description:"This workflow sample demonstrates how to create a migration package using REST APIs.",source:"@site/docs/common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package.md",sourceDirName:"common-workflows/administration/migrations/create-and-import-migration-packages",slug:"/common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Create a migration package",sidebar_label:"Create a migration package",description:"This workflow sample demonstrates how to create a migration package using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Create and import migration packages",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/"},next:{title:"Import a migration package",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/import-a-migration-package"}},d={},k=[{value:"Creating a project package",id:"creating-a-project-package",level:2},{value:"Create an empty package",id:"create-an-empty-package",level:3},{value:"Update the package definition",id:"update-the-package-definition",level:3},{value:"Get the package definition",id:"get-the-package-definition",level:3},{value:"Download the package and save it as a binary file",id:"download-the-package-and-save-it-as-a-binary-file",level:3},{value:"Delete the package",id:"delete-the-package",level:3},{value:"More examples",id:"more-examples",level:2},{value:"Create a project package",id:"create-a-project-package",level:3},{value:"Create a configuration package",id:"create-a-configuration-package",level:3},{value:"Create a project security package",id:"create-a-project-security-package",level:3}],m=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),u={toc:k};function g(e){var a=e.components,t=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 2",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c4f8860a-cb20-4e14-a7c8-16d450c167c5?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to create a migration package using REST APIs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-project-package"},"Creating a project package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#more-examples"},"More examples"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-a-project-package"},"Create a project package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-a-configuration-package"},"Create a configuration package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-a-project-security-package"},"Create a project security package"))))),(0,i.kt)("h2",{id:"creating-a-project-package"},"Creating a project package"),(0,i.kt)("p",null,"In this workflow sample, you want to create a project package that contains a ",(0,i.kt)("inlineCode",{parentName:"p"},'"Year"')," object with an attribute object ID of ",(0,i.kt)("inlineCode",{parentName:"p"},"8D679D5111D3E4981000E787EC6DE8A4")," and all its dependents in the MicroStrategy Tutorial project. The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),". Use ",(0,i.kt)("inlineCode",{parentName:"p"},'"replace"')," as a conflict rule for all these objects."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,i.kt)("p",{parentName:"admonition"},"You must have the Create Package privilege.")),(0,i.kt)("h3",{id:"create-an-empty-package"},"Create an empty package"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/createEmptyPackage"},"POST /api/packages")," to create an empty package."),(0,i.kt)("p",null,"An empty package is required for creating or importing packages through REST APIs. An empty package holds all content and its status in memory. For performance reasons, you can only create one package instance in each user session. Make sure to delete the package when it is no longer used. Otherwise, it lives along with the user session."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages"\\\n-H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",\n  "status": "EMPTY"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 201 (A new empty package is created successfully.)"),(0,i.kt)("h3",{id:"update-the-package-definition"},"Update the package definition"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/updatePackagePerSpec"},"PUT /api/packages/{packageId}")," to update the package definition. You want to create a ",(0,i.kt)("inlineCode",{parentName:"p"},'"project"')," migration package type."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"There are three types of supported migration packages. This includes ",(0,i.kt)("inlineCode",{parentName:"p"},'"project package"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"configuration package"'),", and ",(0,i.kt)("inlineCode",{parentName:"p"},'"project security package"'),"."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},'"project package"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"project security package"'),", the related project ID is required in the request header of each endpoint. For ",(0,i.kt)("inlineCode",{parentName:"li"},'"configuration package"'),", the project ID should ",(0,i.kt)("em",{parentName:"li"},"not")," be used in request header."),(0,i.kt)("li",{parentName:"ul"},"Only objects at the project level can be passed in the request body when creating a ",(0,i.kt)("inlineCode",{parentName:"li"},'"project package"'),". Only objects at the configuration level can be passed in the request body when creating a ",(0,i.kt)("inlineCode",{parentName:"li"},'"configuration package"'),". Only objects of user/user group types can be passed in the request body when creating a ",(0,i.kt)("inlineCode",{parentName:"li"},'"project security package"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'settings.updateSchema'")," is only supported for project packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'settings.aclOnReplacingObjects'")," is not supported for project security packages."))),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"Prefer": "respond-async"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "project",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "type": 12,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RjBBMzVBNUM0MjRBNUQ0MjdEMjc3N0EzNENFNDcwRTY="\\\n-H \'Content-Type: application/json\' -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\'\\\n-H \'X-MSTR-AuthToken: 16pm8vao8e6ltq6cu73htrkl8o\' -H \'Prefer: respond-async\'\\\n--data-raw \'{\n    "type": "project",\n    "settings": {\n        "updateSchema": [\n            "recal_table_logical_size",\n            "recal_table_keys_fact_entry_level"\n        ],\n        "aclOnReplacingObjects": "use_existing",\n        "aclOnNewObjects": ["keep_acl_as_source_object"],\n        "defaultAction": "replace"\n    },\n    "content": [\n        {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "name": "Year",\n            "type": 12,\n            "action": "replace",\n            "includeDependents": true\n        }\n    ]\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzI3MkU4NzU2RTQ3MzA2Q0QyMTRDOEIwNkFFOUU4N0M=",\n  "status": "PROCESSING"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 202 (The package is being created.)"),(0,i.kt)("h3",{id:"get-the-package-definition"},"Get the package definition"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/get"},"GET /api/packages/{packageId}")," to get the package definition."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"http://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=?showContent=true\"\\\n-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\\\n-H 'X-MSTR-AuthToken: 657im8d8ol5hbn6q42ddgobg01'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",\n  "status": "READY",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "version": "2215B50211EB7C9D8F150080EF651EEA",\n      "type": 12,\n      "owner": {\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "dateCreated": "2001-01-02T20:48:10.000+0000",\n      "dateModified": "2021-03-04T03:53:09.000+0000",\n      "action": "replace",\n      "includeDependents": true,\n      "explicitIncluded": true,\n      "level": "project_object"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 200 (The full definition of the package was retrieved successfully.)"),(0,i.kt)("h3",{id:"download-the-package-and-save-it-as-a-binary-file"},"Download the package and save it as a binary file"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/downloadPackageBinary_1"},"GET /api/packages/{packageId}/binary")," to download the package and save it as a binary file."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"Accept": "application/octet-stream"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6OTIyRUI1QzMyRDQ3QTAyMUVCQURGNDgzQkVEMjg5NjY=/binary\"\\\n-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\\\n-H 'X-MSTR-AuthToken: g90v2lm2185h52sis09n1kkq0i' -H 'Accept: application/octet-stream'\n")),(0,i.kt)("p",null,"Sample Response Code: 200 (The packaged binary file was retrieved successfully.)"),(0,i.kt)("h3",{id:"delete-the-package"},"Delete the package"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/deletePackageAsync"},"DELETE /api/packages/{packageId}")," to delete the package."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"Prefer": "respond-async"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=\"\\\n-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\\\n-H 'X-MSTR-AuthToken: jmm09h37g6fot3oeqncj20s1nk' -H 'Prefer: respond-async'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=",\n  "status": "DELETING"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 202 (The package is being deleted.)"),(0,i.kt)("h2",{id:"more-examples"},"More examples"),(0,i.kt)("p",null,"Three types of migration package are supported. The only difference between the three is the definition of the package type when using the PUT API. The examples below provide sample request body JSON to create packages of each type."),(0,i.kt)("h3",{id:"create-a-project-package"},"Create a project package"),(0,i.kt)("p",null,"Create a project package that contains the ",(0,i.kt)("inlineCode",{parentName:"p"},'"Year"')," object, with an attribute object ID of ",(0,i.kt)("inlineCode",{parentName:"p"},"8D679D5111D3E4981000E787EC6DE8A4"),", and its dependents. Make sure the request header contains a project ID."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "project",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "type": 12,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"create-a-configuration-package"},"Create a configuration package"),(0,i.kt)("p",null,"Create a configuration package that contains the ",(0,i.kt)("inlineCode",{parentName:"p"},'"Administrator"')," object, with a user object ID of ",(0,i.kt)("inlineCode",{parentName:"p"},"54F3D26011D2896560009A8E67019608"),", and its dependents. Make sure that the request header does ",(0,i.kt)("em",{parentName:"p"},"not")," contain a project ID."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "configuration",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "type": 34,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"create-a-project-security-package"},"Create a project security package"),(0,i.kt)("p",null,"A project security package includes links to security roles, security filters, connection mappings, profile folder links, and personal preferences that are related to the selected user and/or user group objects. Security roles and security filters objects are ",(0,i.kt)("em",{parentName:"p"},"not")," included. Only links are included."),(0,i.kt)("p",null,"Create a project security package that contains the ",(0,i.kt)("inlineCode",{parentName:"p"},'"Administrator"')," object, with a user object ID of ",(0,i.kt)("inlineCode",{parentName:"p"},"54F3D26011D2896560009A8E67019608"),", and its dependents. Make sure the request header contains a project ID."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "project_security",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": null,\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "type": 34,\n      "action": "replace",\n      "includeDependents": false\n    }\n  ]\n}\n')))}g.isMDXComponent=!0}}]);