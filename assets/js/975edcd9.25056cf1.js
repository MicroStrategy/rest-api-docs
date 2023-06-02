"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8414],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=s(t),d=r,g=k["".concat(l,".").concat(d)]||k[d]||m[d]||o;return t?n.createElement(g,p(p({ref:a},c),{},{components:t})):n.createElement(g,p({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=k;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},26719:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return k}});var n,r=t(83117),o=t(80102),p=(t(67294),t(3905)),i=["components"],l={title:"Import a migration package",sidebar_label:"Import a migration package",description:"This workflow sample demonstrates how to import a migration package using REST APIs."},s=void 0,c={unversionedId:"common-workflows/administration/migrations/create-and-import-migration-packages/import-a-migration-package",id:"common-workflows/administration/migrations/create-and-import-migration-packages/import-a-migration-package",title:"Import a migration package",description:"This workflow sample demonstrates how to import a migration package using REST APIs.",source:"@site/docs/common-workflows/administration/migrations/create-and-import-migration-packages/import-a-migration-package.md",sourceDirName:"common-workflows/administration/migrations/create-and-import-migration-packages",slug:"/common-workflows/administration/migrations/create-and-import-migration-packages/import-a-migration-package",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/import-a-migration-package",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/migrations/create-and-import-migration-packages/import-a-migration-package.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Import a migration package",sidebar_label:"Import a migration package",description:"This workflow sample demonstrates how to import a migration package using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Create a migration package",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package"},next:{title:"View content from a newly created package",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/view-newly-created-package"}},m={},k=[{value:"Import a project package",id:"import-a-project-package",level:2},{value:"Create an empty package",id:"create-an-empty-package",level:2},{value:"Upload a package binary file",id:"upload-a-package-binary-file",level:2},{value:"Get the package definition",id:"get-the-package-definition",level:2},{value:"Create an import process to import a package",id:"create-an-import-process-to-import-a-package",level:2},{value:"Query the import status",id:"query-the-import-status",level:2},{value:"Download an undo package binary file",id:"download-an-undo-package-binary-file",level:2},{value:"Delete the import process",id:"delete-the-import-process",level:2},{value:"Delete the package",id:"delete-the-package",level:2},{value:"More examples",id:"more-examples",level:2}],d=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),g={toc:k};function u(e){var a=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)(d,{since:"2021 Update 2",mdxType:"Available"}),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,p.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-7a6ff268-6e87-449b-a51f-30f134ab54d4?ctx=documentation"},"REST API Playground"),"."),(0,p.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,p.kt)("p",null,"This workflow sample demonstrates how to import a migration package using REST APIs."),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"#create-an-empty-package"},"Create an empty package.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"#upload-a-package-binary-file"},"Upload a package binary file.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"#get-the-package-definition"},"Get the package definition.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"#create-an-import-process-to-import-a-package"},"Create an import process.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"#query-the-import-status"},"Query the import status.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"#download-an-undo-package-binary-file"},"Download an undo package binary file.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"#delete-the-import-process"},"Delete the import process.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"#delete-the-package"},"Delete the package."))),(0,p.kt)("h2",{id:"import-a-project-package"},"Import a project package"),(0,p.kt)("p",null,"You want to import a project package that contains a ",(0,p.kt)("inlineCode",{parentName:"p"},'"Year"')," object, with an attribute object ID of ",(0,p.kt)("inlineCode",{parentName:"p"},"8D679D5111D3E4981000E787EC6DE8A4"),", and all its dependents in the MicroStrategy Tutorial project. The project ID is ",(0,p.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),". You are using the ",(0,p.kt)("inlineCode",{parentName:"p"},'"Demo Project"'),", which has a project ID of ",(0,p.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,p.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,p.kt)("p",{parentName:"admonition"},"You must have the Create Package and Import Package privileges.")),(0,p.kt)("h2",{id:"create-an-empty-package"},"Create an empty package"),(0,p.kt)("p",null,"Use ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/createEmptyPackage"},"POST /api/packages")," to create an empty package. The destination project ID is required in the request header."),(0,p.kt)("p",null,"An empty package is required for creating or importing packages through REST APIs. An empty package holds all content and its status in memory. For performance reasons, you can only create one package instance in each user session. Make sure to delete the package when it is no longer used. Otherwise, it lives along with the user session."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",\n  "status": "EMPTY"\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 201 (A new empty package is created successfully.)"),(0,p.kt)("h2",{id:"upload-a-package-binary-file"},"Upload a package binary file"),(0,p.kt)("p",null,"Use ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/uploadPackageBinary"},"PUT /api/packages/{packageId}/binary")," to upload a package binary file."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "multipart/form-data"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X PUT \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RUQ4MTJGNjFDNTQ4RjVDNzRFN0NCMkFDNDYyMUU4RUI=/binary\"\\\n-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\\\n-H 'X-MSTR-AuthToken: i4heb6cpcskop2dgn518e6ch67' -F 'file=@\"/path/to/packageName.mmp\"'\n")),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MkJFODMyQjE5NjQxRDREMEYzRUMyN0E2OUQwMzU5NTU=",\n  "status": "READY"\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 200 (The package is uploaded successfully)."),(0,p.kt)("h2",{id:"get-the-package-definition"},"Get the package definition"),(0,p.kt)("p",null,"Use ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/get"},"GET /api/packages/{packageId}")," to get the package definition. This call is optional and is used to get the status or full definition of the package."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MDk2NjgxM0VBNzQ5Q0Y3MjZEMzI2NEJEMTg1Qjk4RDM=?showContent=true\"\\\n-H 'Content-Type: application/json'\\\n-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\\\n-H 'X-MSTR-AuthToken: k2023jpr443b3hdo1fma1flpr\n")),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MDk2NjgxM0VBNzQ5Q0Y3MjZEMzI2NEJEMTg1Qjk4RDM=",\n  "status": "READY",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "version": "2215B50211EB7C9D8F150080EF651EEA",\n      "type": 12,\n      "owner": {\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "dateCreated": "2001-01-02T20:48:10.000+0000",\n      "dateModified": "2021-03-04T03:53:09.000+0000",\n      "action": "replace",\n      "level": "project_object"\n    }\n  ]\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 200 (The package definition is uploaded successfully.)"),(0,p.kt)("h2",{id:"create-an-import-process-to-import-a-package"},"Create an import process to import a package"),(0,p.kt)("p",null,"Use ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/create_2"},"POST /api/packages/imports")," to create an import process."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports?packageId=QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6NkE1MjRGRUQ0MjRBMkNDNkNEMDZBNTk5QTRDRjZBRTQ=&generateUndo=true\"\\\n-H 'Content-Type: application/json'\\\n-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\\\n-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq'\\\n-H 'Prefer: respond-async'\n")),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=",\n  "status": "PROCESSING",\n  "undoPackageCreated": false,\n  "progress": 0.0\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 202 (The package import process is running.)"),(0,p.kt)("h2",{id:"query-the-import-status"},"Query the import status"),(0,p.kt)("p",null,"Use ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/retrieve_2"},"GET /api/packages/imports/{importId}")," to query the import status."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=\"\\\n-H 'Content-Type: application/json'\\\n-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\\\n-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq'\n")),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=",\n  "status": "IMPORTED",\n  "undoPackageCreated": true,\n  "progress": 100.0\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 200 (The import process details were retrieved successfully.)"),(0,p.kt)("h2",{id:"download-an-undo-package-binary-file"},"Download an undo package binary file"),(0,p.kt)("p",null,"Use ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/downloadUndoPackageBinary"},"GET /api/packages/imports/{importId}/undoPackage/binary")," to download the undo package binary file."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=/undoPackage/binary\"\\\n-H 'Content-Type: application/json'\\\n-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\\\n-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq' -F 'file=@\"/path/to/file\"'\n")),(0,p.kt)("p",null,"Sample Response Body: Binary stream"),(0,p.kt)("p",null,"Sample Response Code: 200 (The undo package was downloaded successfully.)"),(0,p.kt)("h2",{id:"delete-the-import-process"},"Delete the import process"),(0,p.kt)("p",null,"Use ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/delete"},"DELETE /api/packages/imports/{importId}")," to delete the import process."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"Prefer": "respond-async"\n"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE \"http://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=\"\\\n-H 'Content-Type: application/json'\\\n-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\\\n-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq'\\\n-H 'Prefer: respond-async'\n")),(0,p.kt)("p",null,"Sample Response Body: Empty"),(0,p.kt)("p",null,"Sample Response Code: 202 (The package is being deleted.)"),(0,p.kt)("h2",{id:"delete-the-package"},"Delete the package"),(0,p.kt)("p",null,"Use ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/deletePackageAsync"},"DELETE /api/packages/{packageId}")," to delete the package."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"Prefer": "respond-async"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=\"\\\n-H 'Content-Type: application/json'\\\n-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\\\n-H 'X-MSTR-AuthToken: jmm09h37g6fot3oeqncj20s1nk'\\\n-H 'Prefer: respond-async'\n")),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=",\n  "status": "DELETING"\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 202 (The package is being deleted.)"),(0,p.kt)("h2",{id:"more-examples"},"More examples"),(0,p.kt)("p",null,"By default, the package import process automatically generates an undo package. In some cases, such as when the \u201c",(0,p.kt)("inlineCode",{parentName:"p"},"KeepBoth\u201c")," package is used as conflict rule, the undo package cannot be created. The following sample request imports a package without creating the undo package."),(0,p.kt)("p",null,"Create the import process using ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/create_2"},"POST /api/packages/imports")," with ",(0,p.kt)("inlineCode",{parentName:"p"},"generateUndo=false"),"."),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/imports?packageId=QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6NkE1MjRGRUQ0MjRBMkNDNkNEMDZBNTk5QTRDRjZBRTQ=&generateUndo=false\"\\\n-H 'Content-Type: application/json'\\\n-H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\\\n-H 'X-MSTR-AuthToken: iml486nd9soro64tg1d06fe2vq'\\\n-H 'Prefer: respond-async'\n")),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RTU0MkQyNjFDRjRGMjg1NUI0QURCMzk2MEU1NTBDNTI=",\n  "status": "PROCESSING",\n  "undoPackageCreated": false,\n  "progress": 0.0\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 202 (The package import process is running.)"))}u.isMDXComponent=!0}}]);