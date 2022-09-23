"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||a;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={title:"Workflow Sample - Retrieve an Incremental Refresh Report Definition",sidebar_label:"Retrieve an IRR Definition",description:"This topic covers several workflows to retrieve an Incremental Refresh Report definition."},s=void 0,p={unversionedId:"common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition",id:"common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition",title:"Workflow Sample - Retrieve an Incremental Refresh Report Definition",description:"This topic covers several workflows to retrieve an Incremental Refresh Report definition.",source:"@site/docs/common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition.md",sourceDirName:"common-workflows/manage-incremental-refresh-report",slug:"/common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1663944405,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Workflow Sample - Retrieve an Incremental Refresh Report Definition",sidebar_label:"Retrieve an IRR Definition",description:"This topic covers several workflows to retrieve an Incremental Refresh Report definition."},sidebar:"tutorialSidebar",previous:{title:"Manage Incremental Refresh Reports",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/"},next:{title:"Create an IRR",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/create-an-irr"}},c={},m=[{value:"Retrieve an Incremental Refresh Report Definition",id:"retrieve-an-incremental-refresh-report-definition",level:2},{value:"Retrieve an Incremental Refresh Report Definition With Filter Using Tokens",id:"retrieve-an-incremental-refresh-report-definition-with-filter-using-tokens",level:2}],d={toc:m};function f(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This topic covers several workflows to retrieve an Incremental Refresh Report definition."),(0,a.kt)("p",null,"You want to get the definition of the ",(0,a.kt)("inlineCode",{parentName:"p"},"YearInList_Insert")," Incremental Refresh Report object as shown in the below screenshot. The object ID of the Incremental Refresh Report is \u202f",(0,a.kt)("inlineCode",{parentName:"p"},"B5905F5C4565159A5AEAF78E71DC8BF6")," in the MicroStrategy Tutorial project. The project ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IRR Report Editor",src:n(2469).Z,width:"900",height:"569"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."),(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,a.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,a.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Header: ",(0,a.kt)("inlineCode",{parentName:"li"},"X-MSTR-authToken")," - The authorization token"),(0,a.kt)("li",{parentName:"ul"},"Header: ",(0,a.kt)("inlineCode",{parentName:"li"},"X-MSTR-ProjectID")," - The ID of the project"),(0,a.kt)("li",{parentName:"ul"},"Parameter: ",(0,a.kt)("inlineCode",{parentName:"li"},"showFilterTokens"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Specify whether the Incremental Refresh Report ",(0,a.kt)("inlineCode",{parentName:"li"},"filter")," is returned in ",(0,a.kt)("inlineCode",{parentName:"li"},"tokens")," format, along with ",(0,a.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"tree")," formats."),(0,a.kt)("li",{parentName:"ul"},"If omitted or ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", only ",(0,a.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"tree")," formats are returned."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", all ",(0,a.kt)("inlineCode",{parentName:"li"},"text"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"tree"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"tokens")," formats are returned.")))),(0,a.kt)("h2",{id:"retrieve-an-incremental-refresh-report-definition"},"Retrieve an Incremental Refresh Report Definition"),(0,a.kt)("p",null,"Retrieve the Incremental Refresh Report definition using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/get_api_model_incrementalRefresh__incrementalRefreshReportId_"},"GET /api/model/incrementalRefresh/{incrementalRefreshReportId}"),"."),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://10.23.33.151:8080/MicroStrategyLibrary/api/model/incrementalRefresh/B5905F5C4565159A5AEAF78E71DC8BF6" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: 1etbm9r9i7ngvcbudaarg13m93" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view the Incremental Refresh Report definition in the body of the response. Below is an example of the filter in ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tree")," formats."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-04-13T09:42:20.000Z",\n    "dateModified": "2022-04-13T09:45:58.000Z",\n    "versionId": "41241D044FD62C905E9AA69D9149B863",\n    "primaryLocale": "en-US",\n    "objectId": "B5905F5C4565159A5AEAF78E71DC8BF6",\n    "subType": "report_increment_refresh",\n    "name": "YearInList_Insert"\n  },\n  "targetCube": {\n    "objectId": "F71F4C0E4B8F73B143B0DD83EEB47F43",\n    "subType": "report_cube",\n    "name": "Year_Country_Category_3Metrics"\n  },\n  "incrementType": "filter",\n  "refreshType": "insert",\n  "filter": {\n    "text": "Year <> 2014, 2015",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "3CFB65D310F44BF0ADDB37E5F5005CF9",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2014",\n            "elementId": "h2014"\n          },\n          {\n            "display": "2015",\n            "elementId": "h2015"\n          }\n        ],\n        "function": "not_in"\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (Incremental Refresh Report's definition is returned successfully.)"),(0,a.kt)("h2",{id:"retrieve-an-incremental-refresh-report-definition-with-filter-using-tokens"},"Retrieve an Incremental Refresh Report Definition With Filter Using Tokens"),(0,a.kt)("p",null,"Retrieve the Incremental Refresh Report definition using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/get_api_model_incrementalRefresh__incrementalRefreshReportId_"},"GET /api/model/incrementalRefresh/{incrementalRefreshReportId}"),"."),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://10.23.33.151:8080/MicroStrategyLibrary/api/model/incrementalRefresh/B5905F5C4565159A5AEAF78E71DC8BF6?showFilterTokens=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: onlh5h70iu6evblgafkpb5ve3e" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view the Incremental Refresh Report definition in the body of the response in ",(0,a.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tree"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"tokens")," formats."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-04-13T09:42:20.000Z",\n    "dateModified": "2022-04-13T09:45:58.000Z",\n    "versionId": "41241D044FD62C905E9AA69D9149B863",\n    "primaryLocale": "en-US",\n    "objectId": "B5905F5C4565159A5AEAF78E71DC8BF6",\n    "subType": "report_increment_refresh",\n    "name": "IYearInList_Insert"\n  },\n  "targetCube": {\n    "objectId": "F71F4C0E4B8F73B143B0DD83EEB47F43",\n    "subType": "report_cube",\n    "name": "IC01_Year+Country+Category+3Metrics"\n  },\n  "incrementType": "filter",\n  "refreshType": "insert",\n  "filter": {\n    "text": "Year <> 2014, 2015",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "15841CA2D9754625A49B45CC5E6A57FD",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2014",\n            "elementId": "h2014"\n          },\n          {\n            "display": "2015",\n            "elementId": "h2015"\n          }\n        ],\n        "function": "not_in"\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2022-05-09T09:37:11.000Z",\n          "versionId": "05BB3D284698B0542866C6A5DBA355BC",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        }\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (Incremental Refresh Report's definition is returned successfully.)"))}f.isMDXComponent=!0},2469:function(e,t,n){t.Z=n.p+"assets/images/IRR_report_editor-81769141a41cce1c9ae4649b000ac50f.png"}}]);