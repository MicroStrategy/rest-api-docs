"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5303],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},371:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a,r=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],s={title:"Update a user hierarchy's definition",sidebar_label:"Update a user hierarchy's definition",description:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service."},p=void 0,u={unversionedId:"common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",id:"common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",title:"Update a user hierarchy's definition",description:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition.md",sourceDirName:"common-workflows/modeling/manage-user-hierarchy-objects",slug:"/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Update a user hierarchy's definition",sidebar_label:"Update a user hierarchy's definition",description:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a user hierarchy",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/create-a-user-hierarchy"},next:{title:"Retrieve a list of available user hierarchies",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies"}},d={},m=[{value:"Update the user hierarchy&#39;s definition",id:"update-the-user-hierarchys-definition",level:2}],c=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:m};function b(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{since:"2021 Update 2",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c257416e-ee2c-46fc-9a71-f2ea390c8452?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service."),(0,o.kt)("p",null,"You want to update the definition of the Time user hierarchy with following changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove the Day attribute and its relationship."),(0,o.kt)("li",{parentName:"ul"},"Move it to an object folder with an ID of ",(0,o.kt)("inlineCode",{parentName:"li"},"8A1831FF494F528D02A4A8BF5FB73459"),"."),(0,o.kt)("li",{parentName:"ul"},"Rename the user hierarchy to TimeToMonth.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the user hierarchy ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-getHierarchies"},"GET /api/model/hierarchies"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,o.kt)("h2",{id:"update-the-user-hierarchys-definition"},"Update the user hierarchy's definition"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-updateHiearchy"},"PATCH /api/model/hierarchies/{hierarchyId}"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provide the following headers in the request.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,o.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the changeset")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provide the ID of the user hierarchy you want to update."),(0,o.kt)("li",{parentName:"ol"},'You can modify the fields shown below. The "subType" field is not included since it cannot be modified through this REST API.')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Fields"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"information"),(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the user hierarchy. This should be a user-friendly name for identifying the user hierarchy."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"information"),(0,o.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,o.kt)("td",{parentName:"tr",align:null},"The folder ID where the new user hierarchy is saved."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"useAsDrillHierarchy"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the user hierarchy subtype"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"objectId"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the attribute in the user hierarchy."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the attribute."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"entryPoint"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates whether the current attribute is a single entry point attribute."),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"elementDisplayOption"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the element display type of the specified attribute."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"filter"),(0,o.kt)("td",{parentName:"tr",align:null},'A list of standalone filter objects with "objectId", "subType", and "name" that apply to the specified attribute.'),(0,o.kt)("td",{parentName:"tr",align:null},"List",(0,o.kt)("inlineCode",{parentName:"td"},"<ObjectInfoReference>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"limit"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of elements to display. Required for limited_elements with a range of ","[1, 1000000]","."),(0,o.kt)("td",{parentName:"tr",align:null},"integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"relationships"),(0,o.kt)("td",{parentName:"tr",align:null},"parent"),(0,o.kt)("td",{parentName:"tr",align:null},"The parent attribute of the relationship."),(0,o.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"relationships"),(0,o.kt)("td",{parentName:"tr",align:null},"child"),(0,o.kt)("td",{parentName:"tr",align:null},"The child attribute of the relationship."),(0,o.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference")))),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "dimension_user",\n    "name": "TimeToMonth"\n  },\n  "useAsDrillHierarchy": true,\n  "attributes": [\n    {\n      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n      "name": "Month",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n      "name": "Month of Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n      "name": "Quarter",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    }\n  ],\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies/B793B55C11D3E4E51000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: EB3A4F66E6A8413E9C36633533D0BA31" -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"8A1831FF494F528D02A4A8BF5FB73459\\",\\"subType\\":\\"dimension_user\\",\\"name\\":\\"TimeToMonth\\"},\\"useAsDrillHierarchy\\":true,\\"attributes\\":[{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Month\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D4511D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Month of Year\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Quarter\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Year\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"}],\\"relationships\\":[{\\"parent\\":{\\"objectId\\":\\"8D679D4511D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month of Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Quarter\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Quarter\\"}}]}"\n')),(0,o.kt)("p",null,"Sample Response Body: You can view the updated user hierarchy's definition in the body of the response. See ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters"},"User hierarchy import parameters")," for more information about the import parameters that define the user hierarchy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2001-01-02T20:47:24.000Z",\n    "dateModified": "2009-06-12T18:43:44.000Z",\n    "versionId": "8951A91F41520C9A19E23CB22CF594B4",\n    "primaryLocale": "en-US",\n    "objectId": "B793B55C11D3E4E51000E887EC6DE8A4",\n    "subType": "dimension_user",\n    "name": "TimeToMonth",\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"\n  },\n  "useAsDrillHierarchy": true,\n  "attributes": [\n    {\n      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n      "name": "Month",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n      "name": "Month of Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n      "name": "Quarter",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    }\n  ],\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The user hierarchy's definition is updated successfully in the changeset.)"))}b.isMDXComponent=!0}}]);