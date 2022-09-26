"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4505],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9594:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Workflow Sample - Update the Incremental Refresh Report Definition",sidebar_label:"Update an IRR Definition",description:"This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service."},p=void 0,s={unversionedId:"common-workflows/manage-incremental-refresh-report/update-an-irr-definition",id:"common-workflows/manage-incremental-refresh-report/update-an-irr-definition",title:"Workflow Sample - Update the Incremental Refresh Report Definition",description:"This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service.",source:"@site/docs/common-workflows/manage-incremental-refresh-report/update-an-irr-definition.md",sourceDirName:"common-workflows/manage-incremental-refresh-report",slug:"/common-workflows/manage-incremental-refresh-report/update-an-irr-definition",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/update-an-irr-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-incremental-refresh-report/update-an-irr-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Workflow Sample - Update the Incremental Refresh Report Definition",sidebar_label:"Update an IRR Definition",description:"This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create an IRR",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/create-an-irr"},next:{title:"Retrieve an IRR Definition with Advanced Properties",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties"}},d={},m=[{value:"Update the Incremental Refresh Report using PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}",id:"update-the-incremental-refresh-report-using-put-apimodelincrementalrefreshincrementalrefreshreportid",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-54f5b582-05ac-4f2d-88f9-98f36dd8373c?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service."),(0,i.kt)("p",null,"You want to update the definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},"YearInList_Insert")," Incremental Refresh Report with the changes listed below. The object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"5A7282CC41E6C9B5DE2772A16B073B21"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modify the destination folder to another one."),(0,i.kt)("li",{parentName:"ul"},"Change the target cube to another one."),(0,i.kt)("li",{parentName:"ul"},"Modify the element list of the filter.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("h2",{id:"update-the-incremental-refresh-report-using-put-apimodelincrementalrefreshincrementalrefreshreportid"},"Update the Incremental Refresh Report using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/put_api_model_incrementalRefresh__incrementalRefreshReportId_"},"PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"Content-Type": "application/json"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "name": "YearInList_Insert"\n  },\n  "targetCube": {\n    "objectId": "1154C0014435FB4E3C69ABA7BDC8E8D8",\n    "subType": "report_cube",\n    "name": "IC02_Year+Country+Category+3Metrics"\n  },\n  "filter": {\n    "text": "Year <> 2014",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "DFADE548DBD144079C2F3AFE7CDE3AE1",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2014",\n            "elementId": "h2014"\n          }\n        ],\n        "function": "not_in"\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2022-05-09T09:37:11.000Z",\n          "versionId": "05BB3D284698B0542866C6A5DBA355BC",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "[Not In]",\n        "type": "function",\n        "target": {\n          "dateCreated": "1900-01-01T00:00:00.000Z",\n          "dateModified": "2021-02-26T03:18:34.000Z",\n          "versionId": "A3808F5B4E6620E24102E48D99550BB2",\n          "primaryLocale": "en-US",\n          "objectId": "8107C348DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Not In",\n          "description": "Returns TRUE if Arg1 is not in Arg2."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "{Year=2014}",\n        "type": "elements"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh/5A7282CC41E6C9B5DE2772A16B073B21" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: k2o767js136lqdr8fm6j6kbm9o" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -\\\nH "Content-Type: application/json" \\\n-d \'{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","name":"YearInList_Insert_test"},"targetCube":{"objectId":"1154C0014435FB4E3C69ABA7BDC8E8D8","subType":"report_cube","name":"Copy of IC01_Year+Country+Category+3Metrics"},"filter":{"text":"Year <> 2014","tree":{"type":"predicate_element_list","predicateId":"DFADE548DBD144079C2F3AFE7CDE3AE1","predicateTree":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"elements":[{"display":"2014","elementId":"h2014"}],"function":"not_in"}},"tokens":[{"level":"resolved","state":"initial","value":"%","type":"character"},{"level":"resolved","state":"initial","value":"Year","type":"object_reference","target":{"dateCreated":"2001-01-02T20:48:10.000Z","dateModified":"2022-05-09T09:37:11.000Z","versionId":"05BB3D284698B0542866C6A5DBA355BC","primaryLocale":"en-US","objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"}},{"level":"resolved","state":"initial","value":"[Not In]","type":"function","target":{"dateCreated":"1900-01-01T00:00:00.000Z","dateModified":"2021-02-26T03:18:34.000Z","versionId":"A3808F5B4E6620E24102E48D99550BB2","primaryLocale":"en-US","objectId":"8107C348DD9911D3B98100C04F2233EA","subType":"function","name":"Not In","description":"Returns TRUE if Arg1 is not in Arg2."}},{"level":"resolved","state":"initial","value":"{Year=2014}","type":"elements"},{"level":"resolved","state":"initial","value":"","type":"end_of_text"}]}}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the updated Incremental Refresh Report definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-06-08T07:41:37.939Z",\n    "dateModified": "2022-06-08T08:12:30.611Z",\n    "versionId": "50C2A0804F78CA721EA8A7B408C36FEA",\n    "primaryLocale": "en-US",\n    "objectId": "5A7282CC41E6C9B5DE2772A16B073B21",\n    "subType": "report_increment_refresh",\n    "name": "YearInList_Insert_test",\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"\n  },\n  "targetCube": {\n    "objectId": "1154C0014435FB4E3C69ABA7BDC8E8D8",\n    "subType": "report_cube",\n    "name": "Copy of IC01_Year+Country+Category+3Metrics"\n  },\n  "incrementType": "filter",\n  "refreshType": "insert",\n  "filter": {\n    "text": "Year <> 2014",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "99D9C22039A54FA787791A297AB4B534",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2014",\n            "elementId": "h2014"\n          }\n        ],\n        "function": "not_in"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The incremental refresh report's definition is updated successfully.)"),(0,i.kt)("p",null,"The model for the definition of the Incremental Refresh Report can be represented with the following fields."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"subType")," cannot be modified through REST API.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"information"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - Name of the IRR. This is the most user-friendly value that can be used to identify the IRR."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"destinationFolderId")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - Folder ID where the new IRR is saved."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"targetCube"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"objectID")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The object ID of the target cube that the IRR is built on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The name of the target cube."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"incrementType")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The incremental type for IRR, which can only be a filter and report."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refreshType")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The refresh type for IRR, which can only be ",(0,i.kt)("inlineCode",{parentName:"li"},"update"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"delete"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"update_only"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"replace"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text")," (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The text of the filter name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tree")," (",(0,i.kt)("inlineCode",{parentName:"li"},"ExpressionNode"),") - A tree data structure fully defining the filter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," (",(0,i.kt)("inlineCode",{parentName:"li"},"List<ExpressionToken>"),") - A list of parsed tokens for the filter."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"template"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rows")," (",(0,i.kt)("inlineCode",{parentName:"li"},"List<Objects>"),") - A list of objects on the row of IRR template."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"columns")," (",(0,i.kt)("inlineCode",{parentName:"li"},"List<Objects>"),") - A list of objects on the column of IRR template."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageby")," (",(0,i.kt)("inlineCode",{parentName:"li"},"List<Objects>"),") - A list of objects on the pageby of IRR template.")))))}u.isMDXComponent=!0}}]);