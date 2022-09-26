"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3366],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7334:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Workflow Sample - Update a User Hierarchy's Definition",sidebar_label:"Update a User Hierarchy's Definition",description:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service."},s=void 0,p={unversionedId:"common-workflows/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",id:"common-workflows/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",title:"Workflow Sample - Update a User Hierarchy's Definition",description:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service.",source:"@site/docs/common-workflows/manage-user-hierarchy-objects/update-a-user-hierarchys-definition.md",sourceDirName:"common-workflows/manage-user-hierarchy-objects",slug:"/common-workflows/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",permalink:"/rest-api-docs/common-workflows/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-user-hierarchy-objects/update-a-user-hierarchys-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Update a User Hierarchy's Definition",sidebar_label:"Update a User Hierarchy's Definition",description:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a User Hierarchy",permalink:"/rest-api-docs/common-workflows/manage-user-hierarchy-objects/create-a-user-hierarchy"},next:{title:"Retrieve a List of Available User Hierarchies",permalink:"/rest-api-docs/common-workflows/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies"}},m={},d=[{value:"Create a changeset",id:"create-a-changeset",level:2},{value:"Update the user hierarchy&#39;s definition",id:"update-the-user-hierarchys-definition",level:2},{value:"Commit the changeset",id:"commit-the-changeset",level:2},{value:"Delete the changeset",id:"delete-the-changeset",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c257416e-ee2c-46fc-9a71-f2ea390c8452?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service."),(0,i.kt)("p",null,"You want to update the definition of the Time user hierarchy with following changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove the Day attribute and its relationship."),(0,i.kt)("li",{parentName:"ul"},"Move it to an object folder with an ID of ",(0,i.kt)("inlineCode",{parentName:"li"},"8A1831FF494F528D02A4A8BF5FB73459"),"."),(0,i.kt)("li",{parentName:"ul"},"Rename the user hierarchy to TimeToMonth.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the user hierarchy ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-getHierarchies"},"GET /api/model/hierarchies"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,i.kt)("h2",{id:"create-a-changeset"},(0,i.kt)("a",{parentName:"h2",href:"/rest-api-docs/common-workflows/manage-user-hierarchy-objects/retrieve-a-user-hierarchys-definition"},"Create a changeset")),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,i.kt)("h2",{id:"update-the-user-hierarchys-definition"},"Update the user hierarchy's definition"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-updateHiearchy"},"PATCH /api/model/hierarchies/{hierarchyId}"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provide the following headers in the request.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the changeset")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provide the ID of the user hierarchy you want to update."),(0,i.kt)("li",{parentName:"ol"},'You can modify the fields shown below. The "subType" field is not included since it cannot be modified through this REST API.')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Fields"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"information"),(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the user hierarchy. This should be a user-friendly name for identifying the user hierarchy."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"information"),(0,i.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,i.kt)("td",{parentName:"tr",align:null},"The folder ID where the new user hierarchy is saved."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"useAsDrillHierarchy"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the user hierarchy subtype"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attributes"),(0,i.kt)("td",{parentName:"tr",align:null},"objectId"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the attribute in the user hierarchy."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attributes"),(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the attribute."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attributes"),(0,i.kt)("td",{parentName:"tr",align:null},"entryPoint"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the current attribute is a single entry point attribute."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attributes"),(0,i.kt)("td",{parentName:"tr",align:null},"elementDisplayOption"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the element display type of the specified attribute."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attributes"),(0,i.kt)("td",{parentName:"tr",align:null},"filter"),(0,i.kt)("td",{parentName:"tr",align:null},'A list of standalone filter objects with "objectId", "subType", and "name" that apply to the specified attribute.'),(0,i.kt)("td",{parentName:"tr",align:null},"List",(0,i.kt)("inlineCode",{parentName:"td"},"<ObjectInfoReference>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attributes"),(0,i.kt)("td",{parentName:"tr",align:null},"limit"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of elements to display. Required for limited_elements with a range of ","[1, 1000000]","."),(0,i.kt)("td",{parentName:"tr",align:null},"integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"relationships"),(0,i.kt)("td",{parentName:"tr",align:null},"parent"),(0,i.kt)("td",{parentName:"tr",align:null},"The parent attribute of the relationship."),(0,i.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"relationships"),(0,i.kt)("td",{parentName:"tr",align:null},"child"),(0,i.kt)("td",{parentName:"tr",align:null},"The child attribute of the relationship."),(0,i.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference")))),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "dimension_user",\n    "name": "TimeToMonth"\n  },\n  "useAsDrillHierarchy": true,\n  "attributes": [\n    {\n      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n      "name": "Month",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n      "name": "Month of Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n      "name": "Quarter",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    }\n  ],\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies/B793B55C11D3E4E51000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: EB3A4F66E6A8413E9C36633533D0BA31" -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"8A1831FF494F528D02A4A8BF5FB73459\\",\\"subType\\":\\"dimension_user\\",\\"name\\":\\"TimeToMonth\\"},\\"useAsDrillHierarchy\\":true,\\"attributes\\":[{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Month\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D4511D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Month of Year\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Quarter\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Year\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"}],\\"relationships\\":[{\\"parent\\":{\\"objectId\\":\\"8D679D4511D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month of Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Quarter\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Quarter\\"}}]}"\n')),(0,i.kt)("p",null,"Sample Response Body: You can view the updated user hierarchy's definition in the body of the response. See ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-user-hierarchy-objects/user-hierarchy-import-parameters"},"User Hierarchy Import Parameters")," for more information about the import parameters that define the user hierarchy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2001-01-02T20:47:24.000Z",\n    "dateModified": "2009-06-12T18:43:44.000Z",\n    "versionId": "8951A91F41520C9A19E23CB22CF594B4",\n    "primaryLocale": "en-US",\n    "objectId": "B793B55C11D3E4E51000E887EC6DE8A4",\n    "subType": "dimension_user",\n    "name": "TimeToMonth",\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"\n  },\n  "useAsDrillHierarchy": true,\n  "attributes": [\n    {\n      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n      "name": "Month",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n      "name": "Month of Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n      "name": "Quarter",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    }\n  ],\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The user hierarchy's definition is updated successfully in the changeset.)"),(0,i.kt)("h2",{id:"commit-the-changeset"},"Commit the changeset"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit"),"."),(0,i.kt)("h2",{id:"delete-the-changeset"},"Delete the changeset"),(0,i.kt)("p",null,"EndPoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}")))}c.isMDXComponent=!0}}]);