"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1210],{58038:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=r(74848),i=r(28453);const s={title:"Manage an Intelligence Server cluster",description:"Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment."},o=void 0,d={id:"common-workflows/administration/monitors/manage-an-intelligence-server-cluster",title:"Manage an Intelligence Server cluster",description:"Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment.",source:"@site/docs/common-workflows/administration/monitors/manage-an-intelligence-server-cluster.md",sourceDirName:"common-workflows/administration/monitors",slug:"/common-workflows/administration/monitors/manage-an-intelligence-server-cluster",permalink:"/rest-api-docs/common-workflows/administration/monitors/manage-an-intelligence-server-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/monitors/manage-an-intelligence-server-cluster.md",tags:[],version:"current",lastUpdatedBy:"ziyuhehe",lastUpdatedAt:1710490354,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Manage an Intelligence Server cluster",description:"Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment."},sidebar:"tutorialSidebar",previous:{title:"Create security roles",permalink:"/rest-api-docs/common-workflows/administration/user-management/create-security-roles"},next:{title:"Purge object and element caches",permalink:"/rest-api-docs/common-workflows/administration/monitors/manage-caches"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"List nodes",id:"list-nodes",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Add a node",id:"add-a-node",level:2},{value:"Remove a node",id:"remove-a-node",level:2},{value:"Cluster startup membership",id:"cluster-startup-membership",level:2},{value:"Sample response body",id:"sample-response-body",level:3},{value:"Cluster startup membership update",id:"cluster-startup-membership-update",level:2},{value:"Sample request body",id:"sample-request-body",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can try out this workflow at ",(0,t.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-7f67e2a1-9eb5-45b1-8e4c-4fcec18a998a?ctx=documentation",children:"REST API Playground"}),"."]}),(0,t.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,t.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"Intelligence Server provides you the functionality to cluster a group of Intelligence Server machines to take advantage of the many benefits available in a clustered environment. MicroStrategy REST exposes a set of APIs for viewing and editing members of connected Intelligence Server cluster:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"View member nodes and projects of the connected cluster"}),"\n",(0,t.jsx)(n.li,{children:"Adding a node to the connected cluster"}),"\n",(0,t.jsx)(n.li,{children:"Removing a node from the connected cluster"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Intelligence Server clustering requirements need to be met for using these APIs. It's recommended that you have understanding about how clustering works and how to manage cluster through Developer or Command Manager. For details, please refer to the ",(0,t.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/2021/SystemAdmin/WebHelp/Lang_1033/index.htm",children:"System Administration Help"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you have clustered multiple Library Server nodes in your deployment, make sure they all connect to the same Intelligence Server name from Library Administration page. Also see the ",(0,t.jsx)(n.em,{children:"Load Balancer and Clustering Considerations for Library & Collaboration Server"})," in the ",(0,t.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/index.htm",children:"Installation and Configuration Help"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For adding/removing nodes, it's recommended to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure no other user is connected to Library Server and Intelligence Server nodes. Editing cluster membership is an administrative action and should be performed exclusively."}),"\n",(0,t.jsx)(n.li,{children:"Make sure all Intelligence Server nodes are running during the life-time of Library Server. If some Intelligence Server nodes are/were down, you can start them first and then restart Library Server. This ensures changes are synchronized in a timely manner."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor",children:"DssXmlPrivilegesUseClusterMonitor"})," and ",(0,t.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesClusterAdministration",children:"DssXmlPrivilegesClusterAdministration"})," privileges are required to manage nodes from the connected Intelligence Server cluster."]})}),"\n",(0,t.jsx)(n.h2,{id:"list-nodes",children:"List nodes"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/getClusterNodes",children:"GET /api/monitors/iServer/nodes"})]}),"\n",(0,t.jsx)(n.p,{children:"Get information about nodes in the connected Intelligence Server cluster, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Basic information"}),"\n",(0,t.jsx)(n.li,{children:"Runtime state"}),"\n",(0,t.jsx)(n.li,{children:"Information for the projects on each node"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/rest-api-docs/common-workflows/administration/monitors/project-administration",children:"Project administration"})," for more information."]})}),"\n",(0,t.jsx)(n.p,{children:'This operation requires the "Monitor cluster" privilege.'}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Parameter Type"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"X-MSTR-AuthToken"}),(0,t.jsx)(n.td,{children:"Authorization token"}),(0,t.jsx)(n.td,{children:"Header"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Response: 200 (Success : OK)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "nodes": [\n    {\n      "name": "foo", // Canonical Intelligence Server node name\n      "port": 34952,\n      "status": "running", // running|stopped|unknown\n      "load": "2",\n      "projects": [\n        {\n          "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n          "name": "MicroStrategy Tutorial",\n          "status": "loaded"\n        }\n      ],\n      "default": true // whether it\'s the connected node in Library Admin page\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"add-a-node",children:"Add a node"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/addServerClusterMember",children:"PUT /api/monitors/iServer/nodes/{name}"})]}),"\n",(0,t.jsx)(n.p,{children:"Add a node to the connected Intelligence Server cluster."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The node must meet Intelligence Server clustering requirements."}),"\n",(0,t.jsx)(n.li,{children:"If the node is part of a multi-node cluster, all the nodes in that cluster will be added."}),"\n",(0,t.jsx)(n.li,{children:"If the node is already in the cluster, the operation succeeds without making any change."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'This operation requires the "Monitor cluster" and "Administer cluster" privileges.'}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Parameter Type"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"X-MSTR-AuthToken"}),(0,t.jsx)(n.td,{children:"Authorization token"}),(0,t.jsx)(n.td,{children:"Header"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Intelligence Server node name."}),(0,t.jsx)(n.td,{children:"Path"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"In case of complicated network configuration, it's recommended to provide a hostname accessible from both the Library Server and Intelligence Server."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Response:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Success"}),": 200 OK"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timeout, still in-progress"}),": 202 Accepted"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Node unreachable"}),": 404 Not Found"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"remove-a-node",children:"Remove a node"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/removeServerClusterMember",children:"DELETE /api/monitors/iServer/nodes/{name}"})]}),"\n",(0,t.jsx)(n.p,{children:"Remove a node from the connected Intelligence Server cluster."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It's recommended to use the exact name returned in Viewing"}),"\n",(0,t.jsx)(n.li,{children:"After a successful removal, some existing authorization tokens may become invalidated and in this case re-login is needed."}),"\n",(0,t.jsx)(n.li,{children:"You cannot remove a node if it's the configured default node of Library Server, or there is only one node in the cluster."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'This operation requires the "Monitor cluster" and "Administer cluster" privileges.'}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Parameter Type"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"X-MSTR-AuthToken"}),(0,t.jsx)(n.td,{children:"Authorization token"}),(0,t.jsx)(n.td,{children:"Header"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Intelligence Server node name."}),(0,t.jsx)(n.td,{children:"Path"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Use the exact name returned by ",(0,t.jsx)(n.code,{children:"GET /api/monitors/iServer/nodes"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Response:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Success"}),": 204 No Content"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timeout, still in-progress"}),": 202 Accepted"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Node not a member"}),": 404 Not Found"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cluster-startup-membership",children:"Cluster startup membership"}),"\n",(0,t.jsxs)(n.p,{children:["The endpoints: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/addServerClusterMember",children:"PUT /api/monitors/iServer/nodes/{name}"})," and ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/removeServerClusterMember",children:"DELETE /api/monitors/iServer/nodes/{name}"})," allow to add or remove a node from a working cluster. The changes introduced by the endpoints aren't permanent. When a cluster is being restarted the cluster setup will be restored to the cluster startup membership configuration from metadata. In order to display the configuration, you can use a following endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getClusterStartupMembership",children:"GET /api/iserver/clusterStartupMembership"})]}),"\n",(0,t.jsx)(n.p,{children:'This operation requires "Cluster Administration" privilege.'}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Parameter Type"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"X-MSTR-AuthToken"}),(0,t.jsx)(n.td,{children:"Authorization token"}),(0,t.jsx)(n.td,{children:"Header"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Response: 200 (Success : OK)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-response-body",children:"Sample response body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "clusterStartupMembership": [\n    "i-server-hostname-1",\n    "i-server-hostname-2",\n    "i-server-hostname-3",\n    "i-server-hostname-4"\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"cluster-startup-membership-update",children:"Cluster startup membership update"}),"\n",(0,t.jsxs)(n.p,{children:["There is also a dedicated ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getClusterStartupMembership",children:"PUT /api/iserver/clusterStartupMembership"})," endpoint to update cluster startup membership configuration."]}),"\n",(0,t.jsx)(n.p,{children:'This operation requires the "Cluster Administration" privilege.'}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Parameter Type"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"X-MSTR-AuthToken"}),(0,t.jsx)(n.td,{children:"Authorization token"}),(0,t.jsx)(n.td,{children:"Header"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Response:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Success"}),": 200 OK"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Incorrect list of host names"}),": 400 Bad Request"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-body",children:"Sample request body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "clusterStartupMembership": [\n    "i-server-hostname-A",\n    "i-server-hostname-B",\n    "i-server-hostname-C",\n    "i-server-hostname-D"\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"PUT"})," endpoint return updated startup configuration of the cluster in the response."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);