"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6410],{87764:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=n(74848),c=n(28453);const r={title:"Create a migration package",sidebar_label:"Create a migration package",description:"This workflow sample demonstrates how to create a migration package using REST APIs."},i=void 0,s={id:"common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package",title:"Create a migration package",description:"This workflow sample demonstrates how to create a migration package using REST APIs.",source:"@site/docs/common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package.md",sourceDirName:"common-workflows/administration/migrations/create-and-import-migration-packages",slug:"/common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/migrations/create-and-import-migration-packages/create-a-migration-package.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Create a migration package",sidebar_label:"Create a migration package",description:"This workflow sample demonstrates how to create a migration package using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Create and import migration packages",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/"},next:{title:"Import a migration package",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/import-a-migration-package"}},o={},l=[{value:"Creating a project package",id:"creating-a-project-package",level:2},{value:"Create an empty package",id:"create-an-empty-package",level:3},{value:"Update the package definition",id:"update-the-package-definition",level:3},{value:"Get the package definition",id:"get-the-package-definition",level:3},{value:"Download the package and save it as a binary file",id:"download-the-package-and-save-it-as-a-binary-file",level:3},{value:"Delete the package",id:"delete-the-package",level:3},{value:"More examples",id:"more-examples",level:2},{value:"Create a project package",id:"create-a-project-package",level:3},{value:"Create a configuration package",id:"create-a-configuration-package",level:3},{value:"Create a project security package",id:"create-a-project-security-package",level:3}];function p(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components},{Available:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{since:"2021 Update 2"}),"\n",(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsxs)(a.p,{children:["You can try out this workflow at ",(0,t.jsx)(a.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c4f8860a-cb20-4e14-a7c8-16d450c167c5?ctx=documentation",children:"REST API Playground"}),"."]}),(0,t.jsxs)(a.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,t.jsx)(a.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,t.jsx)(a.p,{children:"This workflow sample demonstrates how to create a migration package using REST APIs."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#creating-a-project-package",children:"Creating a project package"})}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"#more-examples",children:"More examples"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#create-a-project-package",children:"Create a project package"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#create-a-configuration-package",children:"Create a configuration package"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#create-a-project-security-package",children:"Create a project security package"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"creating-a-project-package",children:"Creating a project package"}),"\n",(0,t.jsxs)(a.p,{children:["In this workflow sample, you want to create a project package that contains a ",(0,t.jsx)(a.code,{children:'"Year"'})," object with an attribute object ID of ",(0,t.jsx)(a.code,{children:"8D679D5111D3E4981000E787EC6DE8A4"})," and all its dependents in the MicroStrategy Tutorial project. The project ID is ",(0,t.jsx)(a.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),". Use ",(0,t.jsx)(a.code,{children:'"replace"'})," as a conflict rule for all these objects."]}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsxs)(a.p,{children:["Get the authorization token needed to execute the request with ",(0,t.jsx)(a.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,t.jsxs)(a.p,{children:["Get the project ID from ",(0,t.jsx)(a.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]}),(0,t.jsx)(a.p,{children:"You must have the Create Package privilege."})]}),"\n",(0,t.jsx)(a.h3,{id:"create-an-empty-package",children:"Create an empty package"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/createEmptyPackage",children:"POST /api/packages"})," to create an empty package."]}),"\n",(0,t.jsx)(a.p,{children:"An empty package is required for creating or importing packages through REST APIs. An empty package holds all content and its status in memory. For performance reasons, you can only create one package instance in each user session. Make sure to delete the package when it is no longer used. Otherwise, it lives along with the user session."}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Body: Empty"}),"\n",(0,t.jsx)(a.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages"\\\n-H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",\n  "status": "EMPTY"\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Response Code: 201 (A new empty package is created successfully.)"}),"\n",(0,t.jsx)(a.h3,{id:"update-the-package-definition",children:"Update the package definition"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/updatePackagePerSpec",children:"PUT /api/packages/{packageId}"})," to update the package definition. You want to create a ",(0,t.jsx)(a.code,{children:'"project"'})," migration package type."]}),"\n",(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsxs)(a.p,{children:["There are three types of supported migration packages. This includes ",(0,t.jsx)(a.code,{children:'"project package"'}),", ",(0,t.jsx)(a.code,{children:'"configuration package"'}),", and ",(0,t.jsx)(a.code,{children:'"project security package"'}),"."]}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["For ",(0,t.jsx)(a.code,{children:'"project package"'})," and ",(0,t.jsx)(a.code,{children:'"project security package"'}),", the related project ID is required in the request header of each endpoint. For ",(0,t.jsx)(a.code,{children:'"configuration package"'}),", the project ID should ",(0,t.jsx)(a.em,{children:"not"})," be used in request header."]}),"\n",(0,t.jsxs)(a.li,{children:["Only objects at the project level can be passed in the request body when creating a ",(0,t.jsx)(a.code,{children:'"project package"'}),". Only objects at the configuration level can be passed in the request body when creating a ",(0,t.jsx)(a.code,{children:'"configuration package"'}),". Only objects of user/user group types can be passed in the request body when creating a ",(0,t.jsx)(a.code,{children:'"project security package"'}),"."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"'settings.updateSchema'"})," is only supported for project packages."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"'settings.aclOnReplacingObjects'"})," is not supported for project security packages."]}),"\n"]})]}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-http",children:'"Content-Type": "application/json"\n"Prefer": "respond-async"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Body:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "type": "project",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "type": 12,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RjBBMzVBNUM0MjRBNUQ0MjdEMjc3N0EzNENFNDcwRTY="\\\n-H \'Content-Type: application/json\' -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\'\\\n-H \'X-MSTR-AuthToken: 16pm8vao8e6ltq6cu73htrkl8o\' -H \'Prefer: respond-async\'\\\n--data-raw \'{\n    "type": "project",\n    "settings": {\n        "updateSchema": [\n            "recal_table_logical_size",\n            "recal_table_keys_fact_entry_level"\n        ],\n        "aclOnReplacingObjects": "use_existing",\n        "aclOnNewObjects": ["keep_acl_as_source_object"],\n        "defaultAction": "replace"\n    },\n    "content": [\n        {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "name": "Year",\n            "type": 12,\n            "action": "replace",\n            "includeDependents": true\n        }\n    ]\n}\'\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzI3MkU4NzU2RTQ3MzA2Q0QyMTRDOEIwNkFFOUU4N0M=",\n  "status": "PROCESSING"\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Response Code: 202 (The package is being created.)"}),"\n",(0,t.jsx)(a.h3,{id:"get-the-package-definition",children:"Get the package definition"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/get",children:"GET /api/packages/{packageId}"})," to get the package definition."]}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Body: Empty"}),"\n",(0,t.jsx)(a.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl -X GET \"http://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=?showContent=true\"\\\n-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\\\n-H 'X-MSTR-AuthToken: 657im8d8ol5hbn6q42ddgobg01'\n"})}),"\n",(0,t.jsx)(a.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",\n  "status": "READY",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "version": "2215B50211EB7C9D8F150080EF651EEA",\n      "type": 12,\n      "owner": {\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "dateCreated": "2001-01-02T20:48:10.000+0000",\n      "dateModified": "2021-03-04T03:53:09.000+0000",\n      "action": "replace",\n      "includeDependents": true,\n      "explicitIncluded": true,\n      "level": "project_object"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Response Code: 200 (The full definition of the package was retrieved successfully.)"}),"\n",(0,t.jsx)(a.h3,{id:"download-the-package-and-save-it-as-a-binary-file",children:"Download the package and save it as a binary file"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/downloadPackageBinary_1",children:"GET /api/packages/{packageId}/binary"})," to download the package and save it as a binary file."]}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-http",children:'"Content-Type": "application/json"\n"Accept": "application/octet-stream"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Body: Empty"}),"\n",(0,t.jsx)(a.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6OTIyRUI1QzMyRDQ3QTAyMUVCQURGNDgzQkVEMjg5NjY=/binary\"\\\n-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\\\n-H 'X-MSTR-AuthToken: g90v2lm2185h52sis09n1kkq0i' -H 'Accept: application/octet-stream'\n"})}),"\n",(0,t.jsx)(a.p,{children:"Sample Response Code: 200 (The packaged binary file was retrieved successfully.)"}),"\n",(0,t.jsx)(a.h3,{id:"delete-the-package",children:"Delete the package"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/deletePackageAsync",children:"DELETE /api/packages/{packageId}"})," to delete the package."]}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-http",children:'"Content-Type": "application/json"\n"Prefer": "respond-async"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Body: Empty"}),"\n",(0,t.jsx)(a.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl -X DELETE \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=\"\\\n-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\\\n-H 'X-MSTR-AuthToken: jmm09h37g6fot3oeqncj20s1nk' -H 'Prefer: respond-async'\n"})}),"\n",(0,t.jsx)(a.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=",\n  "status": "DELETING"\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"Sample Response Code: 202 (The package is being deleted.)"}),"\n",(0,t.jsx)(a.h2,{id:"more-examples",children:"More examples"}),"\n",(0,t.jsx)(a.p,{children:"Three types of migration package are supported. The only difference between the three is the definition of the package type when using the PUT API. The examples below provide sample request body JSON to create packages of each type."}),"\n",(0,t.jsx)(a.h3,{id:"create-a-project-package",children:"Create a project package"}),"\n",(0,t.jsxs)(a.p,{children:["Create a project package that contains the ",(0,t.jsx)(a.code,{children:'"Year"'})," object, with an attribute object ID of ",(0,t.jsx)(a.code,{children:"8D679D5111D3E4981000E787EC6DE8A4"}),", and its dependents. Make sure the request header contains a project ID."]}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Body:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "type": "project",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "type": 12,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(a.h3,{id:"create-a-configuration-package",children:"Create a configuration package"}),"\n",(0,t.jsxs)(a.p,{children:["Create a configuration package that contains the ",(0,t.jsx)(a.code,{children:'"Administrator"'})," object, with a user object ID of ",(0,t.jsx)(a.code,{children:"54F3D26011D2896560009A8E67019608"}),", and its dependents. Make sure that the request header does ",(0,t.jsx)(a.em,{children:"not"})," contain a project ID."]}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Body:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "type": "configuration",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "type": 34,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(a.h3,{id:"create-a-project-security-package",children:"Create a project security package"}),"\n",(0,t.jsxs)(a.p,{children:["A project security package includes links to security roles, security filters, connection mappings, profile folder links, and personal preferences that are related to the selected user and/or user group objects. Security roles and security filters objects are ",(0,t.jsx)(a.em,{children:"not"})," included. Only links are included."]}),"\n",(0,t.jsxs)(a.p,{children:["Create a project security package that contains the ",(0,t.jsx)(a.code,{children:'"Administrator"'})," object, with a user object ID of ",(0,t.jsx)(a.code,{children:"54F3D26011D2896560009A8E67019608"}),", and its dependents. Make sure the request header contains a project ID."]}),"\n",(0,t.jsx)(a.p,{children:"Sample Request Body:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "type": "project_security",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": null,\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "type": 34,\n      "action": "replace",\n      "includeDependents": false\n    }\n  ]\n}\n'})})]})}function d(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>s});var t=n(96540);const c={},r=t.createContext(c);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);