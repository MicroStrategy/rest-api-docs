"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6314],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5258:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var a,o=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],p={title:"Project administration",description:"The workflow below allows an administrator to manage project distribution and configuration."},s=void 0,d={unversionedId:"common-workflows/administration/monitors/project-administration",id:"common-workflows/administration/monitors/project-administration",title:"Project administration",description:"The workflow below allows an administrator to manage project distribution and configuration.",source:"@site/docs/common-workflows/administration/monitors/project-administration.md",sourceDirName:"common-workflows/administration/monitors",slug:"/common-workflows/administration/monitors/project-administration",permalink:"/rest-api-docs/common-workflows/administration/monitors/project-administration",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/monitors/project-administration.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Project administration",description:"The workflow below allows an administrator to manage project distribution and configuration."},sidebar:"tutorialSidebar",previous:{title:"Monitor and manage cube caches",permalink:"/rest-api-docs/common-workflows/administration/monitors/monitor-and-manage-cube-caches"},next:{title:"Manage subscriptions",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/"}},c={},u=[{value:"Log in",id:"log-in",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Get information about nodes and projects with current status",id:"get-information-about-nodes-and-projects-with-current-status",level:2},{value:"Update properties for a specific project",id:"update-properties-for-a-specific-project",level:2},{value:"Get update information about projects for a node",id:"get-update-information-about-projects-for-a-node",level:2},{value:"Delete project",id:"delete-project",level:2},{value:"Log out",id:"log-out",level:2}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),k={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b8adf359-7841-499a-8197-bcbe15c06add?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"The following sequence of REST API requests allows an administrator to manage project distribution and configuration:"),(0,i.kt)("h2",{id:"log-in"},"Log in"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")),(0,i.kt)("p",null,"This end point allows the caller to authenticate with the MicroStrategy REST Server. Provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting response returns a status code of 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used by subsequent requests."),(0,i.kt)("h3",{id:"sample-request"},"Sample request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request body:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "administrator",\n  "password": "yourPassword",\n  "loginMode": 1\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https:// demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{\\\\"username\\\\":\\\\"administrator\\\\",\\\\"password\\\\":\\\\"yourPassword\\\\",\\\\"loginMode\\\\":1}"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response header:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"cache-control: no-cache, no-store, max-age=0, must-revalidate\ndate: Mon, 28 Oct 2019 17:38:15 GMT\nexpires: 0\npragma: no-cache\nx-mstr-authtoken: f34qc7evsntsks0qe6hfcgt0ur\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response code: 204 (Success: No Content)"))),(0,i.kt)("h2",{id:"get-information-about-nodes-and-projects-with-current-status"},"Get information about nodes and projects with current status"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/monitors/iServer/nodes")),(0,i.kt)("p",null,"This end point includes basic information, run time state, and information for the projects on each node. You specify an authorization token in the request header which you will get from ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," used during ",(0,i.kt)("a",{parentName:"p",href:"#log-in"},"Log in"),"."),(0,i.kt)("p",null,"You can also use filter option either on project id or node name or both to get specific information in response. This filed is optional."),(0,i.kt)("p",null,"You can expect the following statuses of the project to be returned with respect to the nodes: unloaded, loaded, exec_idle, request_idle, full_idle, wh_exec_idle, partial_idle, unloaded_pending, loaded_pending."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'This operation requires the "Monitor cluster" privilege.')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Parameter:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-MSTR-AuthToken"),": Authorization Token"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projects.id"),": Project Id (optional)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": Node Name (optional)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/monitors/iServer/nodes" -H "accept: application/json" -H "X-MSTR-AuthToken: s664q0cqjergslaj4vfpnneb3m"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response body:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "name": "env-160560laio1use1",\n      "port": 34952,\n      "status": "running",\n      "load": 1,\n      "projects": [\n        {\n          "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n          "name": "MicroStrategy Tutorial",\n          "status": "unloaded"\n        },\n        {\n          "id": "B3FEE61A11E696C8BD0F0080EFC58F44",\n          "name": "Hierarchies Project",\n          "status": "loaded"\n        }\n      ],\n      "default": true\n    },\n    {\n      "name": "env-160560laio2use1",\n      "port": 34952,\n      "status": "running",\n      "load": 0,\n      "projects": [\n        {\n          "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n          "name": "MicroStrategy Tutorial",\n          "status": "loaded"\n        },\n        {\n          "id": "B3FEE61A11E696C8BD0F0080EFC58F44",\n          "name": "Hierarchies Project",\n          "status": "unloaded"\n        }\n      ]\n    }\n  ]\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response code: 200 (Success: OK)"))),(0,i.kt)("p",null,"To apply a filter on project id and node name, you can use the filter option of this api."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https:// demo.microstrategy.com/MicroStrategyLibrary/api/monitors/iServer/nodes?projects.id=B7CA92F04B9FAE8D941C3E9B7E0CD754&name=env-160560laio1use1" -H "accept: application/json" -H "X-MSTR-AuthToken: 8jf3gkobqcdsljm8i3kio7nqc3"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response body:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "name": "env-160560laio1use1",\n      "port": 34952,\n      "status": "running",\n      "load": 1,\n      "projects": [\n        {\n          "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n          "name": "MicroStrategy Tutorial",\n          "status": "unloaded"\n        }\n      ],\n      "default": true\n    }\n  ]\n}\n')))),(0,i.kt)("h2",{id:"update-properties-for-a-specific-project"},"Update properties for a specific project"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH /api/monitors/iServer/nodes/{nodeName}/projects/{projectId}")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You obtain the authorization token from ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". You pass the authorization token in the request header. You obtain cluster node name and project id from ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/monitors/iServer/nodes"),".")),(0,i.kt)("p",null,"Currently, we accept the following project status values for status path and replace operations: loaded, unloaded, request_idle, exec_idle, wh_exec_idle, partial_idle, full_idle."),(0,i.kt)("p",null,"This API will accept the request and start processing to execute based on the request submitted."),(0,i.kt)("p",null,'This operation requires the "Load and Unload project" and "Idle and Resume project" privileges.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request parameters:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-MSTR- AuthToken"),": Authorization Token"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodeName"),": Node Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projectId"),": Project Id"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request body:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/status",\n      "value": "loaded"\n    }\n  ]\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH " https:// demo.microstrategy.com/MicroStrategyLibrary/api/monitors/iServer/nodes/env-160560laio1use1/projects/B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "accept: application/json" -H "X-MSTR-AuthToken: jal5uua4uo6gfag1vivmadag17" -H "Content-Type: application/json" -d "{\\\\"operationList\\\\":[{\\\\"op\\\\":\\\\"replace\\\\",\\\\"path\\\\":\\\\"/status\\\\",\\\\"value\\\\":\\\\"loaded\\\\"}]}"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response body:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "project": {\n    "name": "MicroStrategy Tutorial",\n    "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n    "status": "pending"\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response code: 202 (Accepted)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Error Handling:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Invalid operation name"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "Invalid JSON body. Cannot construct instance of `com.microstrategy.rest.model.iserver.PatchOperator`, problem: Invalid patch operations",\n  "ticketId": "8ba0b99f09b14440b0b31a066cdb2678"\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Valid operation name but not valid for status path. To change the project status, the "replace" operation is allowed.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "code": "ERR006",\n "message": "Please validate operation type or value. Input value can not be\n\'add\' as the Status in the given project.",\n "ticketId": "c1e816c9d2f44b13818319a7f4547bbe"\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"No privileges"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the user does not have load and unload project privilege:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR014",\n  "IserverCode": -2147213784,\n  "message": "You do not have Load and unload project privilege(s) to perform the task.",\n  "ticketId": "8ba0b99f09b14440b0b31a066cdb2678"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the user does not have Idle and resume Project privilege:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR014",\n  "IserverCode": -2147213784,\n  "message": "You do not have Load and unload project privilege(s) to perform the task.",\n  "ticketId": "8ba0b99f09b14440b0b31a066cdb2678"\n}\n'))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Invalid operation name"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "xyz is not valid value to change project status. Valid values are loaded, unloaded, request_idle, exec_idle, partial_idle, wh_exec_idle, full_idle",\n  "ticketId": "c98e0e6208a74dfda8cedee74925bfbb"\n}\n')))))),(0,i.kt)("h2",{id:"get-update-information-about-projects-for-a-node"},"Get update information about projects for a node"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/monitors/iServer/nodes")),(0,i.kt)("p",null,"In the example above, the project status of ",(0,i.kt)("inlineCode",{parentName:"p"},'"MicroStrategy Tutorial"'),' was changed from unloaded to loaded on the cluster node named env-160560laio1use1. You can view the updated status through this API. Here, you can use the filter option on project id "B7CA92F04B9FAE8D941C3E9B7E0CD754" and/or on node name ',(0,i.kt)("inlineCode",{parentName:"p"},'"env-160560laio1use1"')," to get information about the node."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https:// demo.microstrategy.com/MicroStrategyLibrary/api/monitors/iServer/nodes?projects.id=B7CA92F04B9FAE8D941C3E9B7E0CD754&name=env-160560laio1use1" -H "accept: application/json" -H "X-MSTR-AuthToken: jal5uua4uo6gfag1vivmadag17"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request body:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "name": "env-160560laio1use1",\n      "port": 34952,\n      "status": "running",\n      "load": 1,\n      "projects": [\n        {\n          "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n          "name": "MicroStrategy Tutorial",\n          "status": "loaded"\n        }\n      ],\n      "default": true\n    }\n  ]\n}\n')))),(0,i.kt)("h2",{id:"delete-project"},"Delete project"),(0,i.kt)(m,{since:"2021 Update 8",mdxType:"Available"}),(0,i.kt)("p",null,"There are several use cases in which it is required to delete a project from an environment. A dedicated end point ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE /api/projects/{projectId}")," was implemented to address these use cases. The end point call requires to provide an identifier of the project in the path and ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")," in the header. The exemplary call is listed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'DELETE' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/A435ED1A4CF916B9A0A0729F9C93C9B9' -H 'accept: */*' -H 'X-MSTR-AuthToken: tp43crmdrkf54avoo9jbgj4a3q'\n")),(0,i.kt)("p",null,"The response code is either ",(0,i.kt)("inlineCode",{parentName:"p"},"202 Accepted")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"204 No Content"),". The code depends on the deletion execution status. If the end point manages to delete the project in a given timeout, it sends ",(0,i.kt)("inlineCode",{parentName:"p"},"204")," code. If the deletion takes longer than the timeout, the end point sends ",(0,i.kt)("inlineCode",{parentName:"p"},"202")," code. The status of the operation can be checked using ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/monitors/iServer/nodes")," end point. If the deletion is successful, the end point stops reporting the project. The end point will delete a project only if the project has unloaded status on every node. If the project is not unloaded a following error will be provided to a client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The project is not unloaded on at least one node",\n  "ticketId": "8cf89ac213e34db596c1cbb58b28bbe3"\n}\n')),(0,i.kt)("p",null,"The project status can be changed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH /api/monitors/iServer/nodes/{nodeName}/projects/{projectId}")," end point. The client can delete the project if it is administrator or owner of the project."),(0,i.kt)("h2",{id:"log-out"},"Log out"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/logout")),(0,i.kt)("p",null,"This end point allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, X-MSTR-AuthToken, generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". If the call is successful, the resulting response returns the status code 204."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https:// demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout" -H "accept: application/json" -H "X-MSTR-AuthToken: c8afkjurl1r9qk2k7puj2hs9cu"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 204 (Accepted)"))))}h.isMDXComponent=!0}}]);