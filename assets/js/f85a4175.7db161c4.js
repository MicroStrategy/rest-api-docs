"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6452],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"Manage an Intelligence Server cluster",description:"Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment."},s=void 0,m={unversionedId:"common-workflows/administration/monitors/manage-an-intelligence-server-cluster",id:"common-workflows/administration/monitors/manage-an-intelligence-server-cluster",title:"Manage an Intelligence Server cluster",description:"Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment.",source:"@site/docs/common-workflows/administration/monitors/manage-an-intelligence-server-cluster.md",sourceDirName:"common-workflows/administration/monitors",slug:"/common-workflows/administration/monitors/manage-an-intelligence-server-cluster",permalink:"/rest-api-docs/common-workflows/administration/monitors/manage-an-intelligence-server-cluster",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/monitors/manage-an-intelligence-server-cluster.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Manage an Intelligence Server cluster",description:"Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment."},sidebar:"tutorialSidebar",previous:{title:"Create security roles",permalink:"/rest-api-docs/common-workflows/administration/user-management/create-security-roles"},next:{title:"Purge object and element caches",permalink:"/rest-api-docs/common-workflows/administration/monitors/manage-caches"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"List nodes",id:"list-nodes",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Add a node",id:"add-a-node",level:2},{value:"Remove a node",id:"remove-a-node",level:2}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-7f67e2a1-9eb5-45b1-8e4c-4fcec18a998a?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment. MicroStrategy REST exposes a set of APIs for viewing and editing members of connected Intelligence Server cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"View member nodes and projects of the connected cluster"),(0,i.kt)("li",{parentName:"ul"},"Adding a node to the connected cluster"),(0,i.kt)("li",{parentName:"ul"},"Removing a node from the connected cluster")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Intelligence Server clustering requirements need to be met for using these APIs. It's recommended that you have understanding about how clustering works and how to manage cluster through Developer or Command Manager. For details, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/SystemAdmin/WebHelp/Lang_1033/index.htm"},"System Administration Help"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have clustered multiple Library Server nodes in your deployment, make sure they all connect to the same Intelligence Server name from Library Administration page. Also see the ",(0,i.kt)("em",{parentName:"p"},"Load Balancer and Clustering Considerations for Library & Collaboration Server")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/index.htm"},"Installation and Configuration Help"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For adding/removing nodes, it's recommended to:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Make sure no other user is connected to Library Server and Intelligence Server nodes. Editing cluster membership is an administrative action and should be performed exclusively."),(0,i.kt)("li",{parentName:"ul"},"Make sure all Intelligence Server nodes are running during the life-time of Library Server. If some Intelligence Server nodes are/were down, you can start them first and then restart Library Server. This ensures changes are synchronized in a timely manner.")))),(0,i.kt)("h2",{id:"list-nodes"},"List nodes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/monitors/iServer/nodes")),(0,i.kt)("p",null,"Get information about nodes in the connected Intelligence Server cluster, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basic information"),(0,i.kt)("li",{parentName:"ul"},"Runtime state"),(0,i.kt)("li",{parentName:"ul"},"Information for the projects on each node")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/administration/monitors/project-administration"},"Project administration")," for more information.")),(0,i.kt)("p",null,'This operation requires the "Monitor cluster" privilege.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization token"),(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response: 200 (Success : OK)")),(0,i.kt)("h3",{id:"sample-request"},"Sample request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "name": "foo", // Canonical Intelligence Server node name\n      "port": 34952,\n      "status": "running", // running|stopped|unknown\n      "load": "2",\n      "projects": [\n        {\n          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n          "name": "MicroStrategy Tutorial",\n          "status": "loaded"\n        }\n      ],\n      "default": true // whether it\'s the connected node in Library Admin page\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"add-a-node"},"Add a node"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT /api/monitors/iServer/nodes/{name}")),(0,i.kt)("p",null,"Add a node to the connected Intelligence Server cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The node must meet Intelligence Server clustering requirements."),(0,i.kt)("li",{parentName:"ul"},"If the node is part of a multi-node cluster, all the nodes in that cluster will be added."),(0,i.kt)("li",{parentName:"ul"},"If the node is already in the cluster, the operation succeeds without making any change.")),(0,i.kt)("p",null,'This operation requires the "Monitor cluster" and "Administer cluster" privileges.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization token"),(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"Intelligence Server node name."),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In case of complicated network configuration, it's recommended to provide a hostname accessible from both the Library Server and Intelligence Server.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Success"),": 200 OK"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Timeout, still in-progress"),": 202 Accepted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node unreachable"),": 404 Not Found")))),(0,i.kt)("h2",{id:"remove-a-node"},"Remove a node"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE /api/monitors/iServer/nodes/{name}")),(0,i.kt)("p",null,"Remove a node from the connected Intelligence Server cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's recommended to use the exact name returned in Viewing"),(0,i.kt)("li",{parentName:"ul"},"After a successful removal, some existing authorization tokens may become invalidated and in this case re-login is needed."),(0,i.kt)("li",{parentName:"ul"},"You cannot remove a node if it's the configured default node of Library Server, or there is only one node in the cluster.")),(0,i.kt)("p",null,'This operation requires the "Monitor cluster" and "Administer cluster" privileges.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization token"),(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"Intelligence Server node name."),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use the exact name returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/monitors/iServer/nodes"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Success"),": 204 No Content"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Timeout, still in-progress"),": 202 Accepted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node not a member"),": 404 Not Found")))))}c.isMDXComponent=!0}}]);