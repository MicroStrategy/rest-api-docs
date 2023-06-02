"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2536],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),h=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=h(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(n),m=i,d=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var h=2;h<a;h++)o[h]=n[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return h},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r,i=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],c={title:"Retrieve a user hierarchy's definition",sidebar_label:"Retrieve a user hierarchy's definition",description:"This workflow sample demonstrates how to retrieve an user hierarchy's definition\u202fwithin a changeset."},h=void 0,p={unversionedId:"common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-user-hierarchys-definition",id:"common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-user-hierarchys-definition",title:"Retrieve a user hierarchy's definition",description:"This workflow sample demonstrates how to retrieve an user hierarchy's definition\u202fwithin a changeset.",source:"@site/docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-user-hierarchys-definition.md",sourceDirName:"common-workflows/modeling/manage-user-hierarchy-objects",slug:"/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-user-hierarchys-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-user-hierarchys-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-user-hierarchys-definition.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Retrieve a user hierarchy's definition",sidebar_label:"Retrieve a user hierarchy's definition",description:"This workflow sample demonstrates how to retrieve an user hierarchy's definition\u202fwithin a changeset."},sidebar:"tutorialSidebar",previous:{title:"Manage user hierarchy objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/"},next:{title:"Create a user hierarchy",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/create-a-user-hierarchy"}},l={},u=[{value:"Get the definition of the specified user hierarchy within a changeset",id:"get-the-definition-of-the-specified-user-hierarchy-within-a-changeset",level:2}],m=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{since:"2021 Update 2",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-6403c6f8-0173-4b2c-826c-029742877689?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve an user hierarchy's definition\u202fwithin a changeset."),(0,o.kt)("p",null,"You want to get the definition of the Time user hierarchy object, in the MicroStrategy Tutorial project, which contains the relationship between the Year, Month of Year, Quarter, Month, and Day attributes. The object ID of the user hierarchy is ",(0,o.kt)("inlineCode",{parentName:"p"},"B793B55C11D3E4E51000E887EC6DE8A4"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,o.kt)("h2",{id:"get-the-definition-of-the-specified-user-hierarchy-within-a-changeset"},"Get the definition of the specified user hierarchy within a changeset"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-getHierarchy"},"GET /api/model/hierarchies/{hierarchyId}"),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies/B793B55C11D3E4E51000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Response Body: You can view the user hierarchy's definition in the body of the response. This includes the information, attributes, and relationships of this specified user hierarchy. See ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters"},"User hierarchy import parameters")," for more information about the import parameters that define the user hierarchy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2001-01-02T20:47:24.000Z",\n    "dateModified": "2009-06-12T18:43:44.000Z",\n    "versionId": "8951A91F41520C9A19E23CB22CF594B4",\n    "primaryLocale": "en-US",\n    "objectId": "B793B55C11D3E4E51000E887EC6DE8A4",\n    "subType": "dimension_user",\n    "name": "Time"\n  },\n  "useAsDrillHierarchy": true,\n  "attributes": [\n    {\n      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n      "name": "Month",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n      "name": "Month of Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n      "name": "Quarter",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n      "name": "Day",\n      "entryPoint": true,\n      "elementDisplayOption": "limited_elements",\n      "limit": 50\n    }\n  ],\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "child": {\n        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n        "subType": "attribute",\n        "name": "Day"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Hierarchy's definition is returned successfully.)"))}f.isMDXComponent=!0}}]);