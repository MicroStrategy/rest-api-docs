"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8455],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],s={title:"Workflow samples - Retrieve a security filter definition",sidebar_label:"Retrieve a security filter definition",description:"This topic covers several workflows for retrieving a security filter's definition through the Modeling service."},l=void 0,c={unversionedId:"common-workflows/manage-security-filter-objects/retrieve-a-security-filter-definition",id:"common-workflows/manage-security-filter-objects/retrieve-a-security-filter-definition",title:"Workflow samples - Retrieve a security filter definition",description:"This topic covers several workflows for retrieving a security filter's definition through the Modeling service.",source:"@site/docs/common-workflows/manage-security-filter-objects/retrieve-a-security-filter-definition.md",sourceDirName:"common-workflows/manage-security-filter-objects",slug:"/common-workflows/manage-security-filter-objects/retrieve-a-security-filter-definition",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/retrieve-a-security-filter-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-security-filter-objects/retrieve-a-security-filter-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664482211,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"Workflow samples - Retrieve a security filter definition",sidebar_label:"Retrieve a security filter definition",description:"This topic covers several workflows for retrieving a security filter's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage security filter objects",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/"},next:{title:"Create a security filter object",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/create-a-security-filter-object"}},p={},u=[{value:"Retrieve a security filter&#39;s definition",id:"retrieve-a-security-filters-definition",level:2},{value:"Retrieve a security filter&#39;s definition within a changeset",id:"retrieve-a-security-filters-definition-within-a-changeset",level:2},{value:"Create a changeset",id:"create-a-changeset",level:3},{value:"Get the security filter&#39;s definition within a changeset",id:"get-the-security-filters-definition-within-a-changeset",level:3},{value:"Delete a changeset",id:"delete-a-changeset",level:3},{value:"Retrieve a security filter&#39;s definition in tokens format",id:"retrieve-a-security-filters-definition-in-tokens-format",level:2},{value:"Retrieve a security filter&#39;s definition with custom expressions in tree and tokens formats",id:"retrieve-a-security-filters-definition-with-custom-expressions-in-tree-and-tokens-formats",level:2},{value:"Retrieve a filter&#39;s definition that contains inline custom expressions, with the expression in tree and tokens formats",id:"retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This topic covers several workflows for retrieving a security filter's definition through the Modeling service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-security-filters-definition"},"Retrieve a Security Filter's Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-security-filters-definition-within-a-changeset"},"Retrieve a Security Filter's Definition within a Changeset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-security-filters-definition-in-tokens-format"},"Retrieve a Security Filter's Definition in Tokens Format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-security-filters-definition-with-custom-expressions-in-tree-and-tokens-formats"},"Retrieve a Security Filter's Definition with Custom Expressions in Tree and Tokens Formats")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats"},"Retrieve a Filter's Definition That Contains Inline Custom Expressions, with the Expression in Tree and Tokens Formats"))),(0,a.kt)("h2",{id:"retrieve-a-security-filters-definition"},"Retrieve a security filter's definition"),(0,a.kt)("p",null,'In this workflow sample, you want to get the definition of the "Year > 2015" security filter object. The object ID of the security filter is ',(0,a.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1")," in the MicroStrategy Tutorial project. The project ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,a.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,a.kt)("p",null,"Retrieve the security filter definition using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/getSecurityFilterDetails"},"api/model/securityFilters/{securityFilterId}"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view the security filter's definition in the body of the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-17T16:42:39.776Z",\n    "dateModified": "2020-11-17T16:42:57.268Z",\n    "versionId": "F253FD1211EB28F32AE10080EFC56102",\n    "primaryLocale": "en-US",\n    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",\n    "subType": "md_security_filter",\n    "name": "Year > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "62EE53C755F64508BAEE99989E9EACCC",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (The security filter's definition was returned successfully.)"),(0,a.kt)("h2",{id:"retrieve-a-security-filters-definition-within-a-changeset"},"Retrieve a security filter's definition within a changeset"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/model/securityFilters/{securityFilterId}")," to create a new security filter or update the security filter's definition, it is recommended to associate all requests to one changeset.")),(0,a.kt)("p",null,'In this workflow sample, you want to get the definition of the "Year > 2015" security filter object. The object ID of the security filter is ',(0,a.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1")," in the MicroStrategy Tutorial project. The project ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,a.kt)("p",null,"Obtain the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,a.kt)("h3",{id:"create-a-changeset"},"Create a changeset"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T16:38:09.825650Z",\n  "dateModified": "2020-11-17T16:38:09.825665Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,a.kt)("p",null,"Sample Response Code: 200 (A new changeset is created successfully.)"),(0,a.kt)("h3",{id:"get-the-security-filters-definition-within-a-changeset"},"Get the security filter's definition within a changeset"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-getFilterDetails"},"GET /api/model/securityFilters/{securityFilterId}"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view the security filter's definition in the body of the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-17T16:42:39.776Z",\n    "dateModified": "2020-11-17T16:42:57.268Z",\n    "versionId": "F253FD1211EB28F32AE10080EFC56102",\n    "primaryLocale": "en-US",\n    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",\n    "subType": "md_security_filter",\n    "name": "Year > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "62EE53C755F64508BAEE99989E9EACCC",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (The security filter's definition is returned successfully.)"),(0,a.kt)("h3",{id:"delete-a-changeset"},"Delete a changeset"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/changesets/0E9F01172ECF4BA2BB510F7B9FB4F6E8" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,a.kt)("p",null,"Sample Response Body: Empty"),(0,a.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully)"),(0,a.kt)("h2",{id:"retrieve-a-security-filters-definition-in-tokens-format"},"Retrieve a security filter's definition in tokens format"),(0,a.kt)("p",null,'In this workflow sample, you want to get the definition of the "Year > 2015" security filter object. The object ID of the security filter is ',(0,a.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1")," in the MicroStrategy Tutorial project. This procedure is similar to ",(0,a.kt)("a",{parentName:"p",href:"#retrieve-a-security-filters-definition"},"Retrieve a Security Filter's Definition"),", except you want to enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"showFilterTokens")," parameter to retrieve the security filter's definition in tokens format."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'Security filter tokens are used the same manner as filter tokens. Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\'s say a security filter expression is "Revenue > Cost". When the security filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).',(0,a.kt)("br",null),(0,a.kt)("br",null),'A security filter\'s "qualification" is presented in the following formats:'),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'"text": A human-readable, but non-parsable text, describing a filter\'s qualification.'),(0,a.kt)("li",{parentName:"ul"},'"tree": A tree data structure fully defining the filter\'s qualification.'),(0,a.kt)("li",{parentName:"ul"},'"tokens": A list of parsed tokens that define a filter\'s qualification. Be aware that generating tokens requires additional time.')),(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"showFilterTokens")," is omitted or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),', only "text" and "tree" formats are returned.',(0,a.kt)("br",null),"If ",(0,a.kt)("inlineCode",{parentName:"p"},"showFilterTokens")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),', all "text", "tree" and "tokens" formats are returned.')),(0,a.kt)("p",null,"Get the security filter's definition in tokens format using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/getSecurityFilterDetails"},"GET /api/model/securityFilters/{securityFilterId}")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"showFilterTokens=true"),"."),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/5B64A6A6E5B1466497D9D4D35328D91B?showFilterTokens=true" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view the security filter's definition in the body of the response. Notice that, compared to ",(0,a.kt)("a",{parentName:"p",href:"#retrieve-a-security-filters-definition"},"Retrieve a Security Filter's Definition"),', "qualification"',(0,a.kt)("inlineCode",{parentName:"p"},"has an extra"),'"tokens"` field.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-30T12:56:01.400Z",\n    "dateModified": "2020-11-30T12:56:01.400Z",\n    "versionId": "6602277211EB330B01430080EF051B59",\n    "primaryLocale": "en-US",\n    "objectId": "5B64A6A6E5B1466497D9D4D35328D91B",\n    "subType": "md_security_filter",\n    "name": "Year > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "A0D326D440304DC4B07F12DA6631447F",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year@ID",\n        "type": "object_at_form",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2012-01-27T12:00:32.000Z",\n          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "attributeForm": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2018-01-29T21:13:06.000Z",\n          "versionId": "332E00E411E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C317DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": ">",\n          "description": "Returns TRUE if the first value is greater than the second value."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "2015.0",\n        "type": "integer"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,a.kt)("h2",{id:"retrieve-a-security-filters-definition-with-custom-expressions-in-tree-and-tokens-formats"},"Retrieve a security filter's definition with custom expressions in tree and tokens formats"),(0,a.kt)("p",null,'In this workflow sample, you want to get the definition of a security filter that contains a "Year@ID < 2015" custom expression. The object ID of the security filter is ',(0,a.kt)("inlineCode",{parentName:"p"},"B4B9AE1411EB3309268D0080EFE5DA56"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If custom expressions are used in a security filter, this parameter specifies the format in which they are returned in the response."),(0,a.kt)("p",{parentName:"admonition"},"Custom expressions are presented in the following formats:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"text": A human-readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"tree": A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"tokens": A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Be aware that generating tokens requires additional time.'),(0,a.kt)("p",{parentName:"li"},'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\'s say a security filter expression is "Revenue > Cost". When the security filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).'))),(0,a.kt)("p",{parentName:"admonition"},'If omitted, the custom expression is returned in "text" format.'),(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"tree"),', the custom expression is returned in "text" and "tree" format.'),(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"tokens"),', the custom expression is returned in "text" and "tokens" format.')),(0,a.kt)("p",null,"Get the security filter's definition in tokens format using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/getSecurityFilterDetails"},"GET /api/model/securityFilters/{securityFilterId}")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/B4B9AE1411EB3309268D0080EFE5DA56?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view the security filter's definition in the body of the response. Notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"['qualification']['tree']['PredicateTree']['expression']")," contains ",(0,a.kt)("inlineCode",{parentName:"p"},'"tree"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"token"')," fields, which represent the custom expression in tree and tokens format respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-30T12:56:18.228Z",\n    "dateModified": "2020-11-30T19:36:32.103Z",\n    "versionId": "596C793011EB334357FA0080EF7579B5",\n    "primaryLocale": "en-US",\n    "objectId": "B4B9AE1411EB3309268D0080EFE5DA56",\n    "subType": "md_security_filter",\n    "name": "Year@ID > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_custom",\n      "predicateId": "A6CBA8F104FD4194B4727AE74DE8F721",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "expression": {\n          "text": "Year (ID) > 2015",\n          "tree": {\n            "function": "greater",\n            "children": [\n              {\n                "attribute": {\n                  "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Year"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                },\n                "type": "form_shortcut"\n              },\n              {\n                "type": "constant",\n                "variant": {\n                  "type": "int32",\n                  "value": "2015"\n                }\n              }\n            ],\n            "levelType": "metric_level",\n            "type": "operator"\n          },\n          "tokens": [\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "%",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year@ID",\n              "type": "object_at_form",\n              "target": {\n                "dateCreated": "2001-01-02T20:48:10.000Z",\n                "dateModified": "2012-01-27T12:00:32.000Z",\n                "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                "primaryLocale": "en-US",\n                "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Year"\n              },\n              "attributeForm": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ">",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:41.000Z",\n                "dateModified": "2018-01-29T21:13:06.000Z",\n                "versionId": "332E00E411E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C317DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": ">",\n                "description": "Returns TRUE if the first value is greater than the second value."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "2015",\n              "type": "integer"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "",\n              "type": "end_of_text"\n            }\n          ]\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,a.kt)("p",null,"Sample Response Code: 200 (The security filter's definition is returned successfully.)"),(0,a.kt)("h2",{id:"retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats"},"Retrieve a filter's definition that contains inline custom expressions, with the expression in tree and tokens formats"),(0,a.kt)("p",null,"In this workflow sample, you want to get the definition of a security filter that contains an inline custom expression. The object ID of the security filter is ",(0,a.kt)("inlineCode",{parentName:"p"},"B488A1B711EB330926FF0080EFB57956"),"."),(0,a.kt)("p",null,"Get the security filter's definition with its inline custom expression in tree and tokens format using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/getSecurityFilterDetails"},"GET /api/model/securityFilters/{securityFilterId}")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/B488A1B711EB330926FF0080EFB57956?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view the security filter's definition in the body of the response. Notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"['qualification']['tree']['PredicateTree']['expression']")," contains ",(0,a.kt)("inlineCode",{parentName:"p"},'"tree"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"tokens"')," fields, representing the inline custom expression in tree and tokens format respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-30T12:56:40.479Z",\n    "dateModified": "2020-11-30T19:36:49.829Z",\n    "versionId": "63FD317811EB334357BA0080EF5539B5",\n    "primaryLocale": "en-US",\n    "objectId": "B488A1B711EB330926FF0080EFB57956",\n    "subType": "md_security_filter",\n    "name": "Year > Current Year - 5"\n  },\n  "qualification": {\n    "text": "Year (ID) > (Year(CurrentDate) - 5)",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "C7ACD6179CC44F219A663E95D236583F",\n      "predicateText": "Year (ID) > (Year(CurrentDate) - 5)",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "expression",\n            "expression": {\n              "text": "(Year(CurrentDate) - 5)",\n              "tree": {\n                "function": "minus",\n                "children": [\n                  {\n                    "function": "year",\n                    "children": [\n                      {\n                        "function": "current_date",\n                        "type": "operator"\n                      }\n                    ],\n                    "type": "operator"\n                  },\n                  {\n                    "type": "constant",\n                    "variant": {\n                      "type": "int32",\n                      "value": "5"\n                    }\n                  }\n                ],\n                "type": "operator"\n              },\n              "tokens": [\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "Year",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:55.000Z",\n                    "dateModified": "2018-01-29T21:13:05.000Z",\n                    "versionId": "32737F3011E8053925F00080EF7500C5",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "Year",\n                    "description": "Returns the year of the input date."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "CurrentDate",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:54.000Z",\n                    "dateModified": "2018-01-29T21:13:05.000Z",\n                    "versionId": "32363DBE11E8053925F00080EF7500C5",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "CurrentDate",\n                    "description": "Returns the current date based on the database timer. This function takes no input parameters."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "-",\n                  "type": "character",\n                  "target": {\n                    "dateCreated": "2001-01-02T20:47:41.000Z",\n                    "dateModified": "2018-01-29T21:13:06.000Z",\n                    "versionId": "330711DC11E8053925F00080EF7500C5",\n                    "primaryLocale": "en-US",\n                    "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                    "subType": "function",\n                    "name": "-",\n                    "description": "Returns the difference between two values."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "5",\n                  "type": "integer"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                }\n              ]\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')))}m.isMDXComponent=!0}}]);