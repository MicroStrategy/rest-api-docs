"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8642],{608:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(74848),n=t(28453);const i={title:"Data lineage analysis via REST APIs",description:"The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata."},r=void 0,o={id:"common-workflows/analytics/object-discovery/data-lineage-analysis-via-rest-apis",title:"Data lineage analysis via REST APIs",description:"The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata.",source:"@site/docs/common-workflows/analytics/object-discovery/data-lineage-analysis-via-rest-apis.md",sourceDirName:"common-workflows/analytics/object-discovery",slug:"/common-workflows/analytics/object-discovery/data-lineage-analysis-via-rest-apis",permalink:"/rest-api-docs/common-workflows/analytics/object-discovery/data-lineage-analysis-via-rest-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/object-discovery/data-lineage-analysis-via-rest-apis.md",tags:[],version:"current",lastUpdatedBy:"wangrenhang",lastUpdatedAt:1711017072,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Data lineage analysis via REST APIs",description:"The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata."},sidebar:"tutorialSidebar",previous:{title:"Search for objects",permalink:"/rest-api-docs/common-workflows/analytics/object-discovery/search-for-objects"},next:{title:"Manage project load settings on Intelligence Server startup",permalink:"/rest-api-docs/common-workflows/analytics/project-management/manage-project-load-settings-on-server-startup"}},c={},d=[{value:"List components",id:"list-components",level:2},{value:"List dependents",id:"list-dependents",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Available:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021"}),"\n",(0,a.jsxs)(s.admonition,{type:"tip",children:[(0,a.jsxs)(s.p,{children:["You can try out this workflow at ",(0,a.jsx)(s.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-e42edf07-9e68-4cc2-9eb9-a16ad920bb49?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(s.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(s.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(s.p,{children:"The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata."}),"\n",(0,a.jsx)(s.p,{children:"There are two functions that MicroStrategy data lineage supports:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Given an object, for example a report, attribute, dashboard, or database, list the direct and indirect components of that object"}),"\n",(0,a.jsx)(s.li,{children:"Given an object, list the objects which directly and indirectly depend on that object"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"The workflow sample below demonstrates how to perform data lineage analysis."}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsx)(s.p,{children:"The metadata search API has one restriction that search cannot be triggered in parallel in one session. This means when the following two sets of APIs are used, the user should execute them in synchronized mode."})}),"\n",(0,a.jsx)(s.h2,{id:"list-components",children:"List components"}),"\n",(0,a.jsx)(s.p,{children:"You need to use the metadata search API to get the indirect and direct components of a specific object."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Create a metadata search by using ",(0,a.jsx)(s.code,{children:"POST /api/metadataSearch/results"}),". This will search the metadata and store an instance of search results."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"X-MSTR-AuthToken"}),": This is required in the header."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"X-MSTR-ProjectID"}),": This is optional, but recommended to used."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"domain"}),": This is optional and the recommended value is 2 with X-MSTR-ProjectID to specify the search domains."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"type"}),": This is option, but recommended to specify the types of search result. Possible values are defined in ",(0,a.jsx)(s.a,{href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html",children:"EnumDSSXMLObjectTypes"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"usedByObject"}),": This is required and used to specify the object id and type to search with."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"usedByRecursive"}),": This is optional and controls the Intelligence Server to find objects that use the given objects indirectly. The default value is false, and in most cases, should be false."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Curl:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2&amp;usedByObject=B7CA92F04B9FAE8D941C3E9B70CD754%3B32&amp;usedByRecursive=false" -H "accept: application/json" -H "X-MSTR-AuthToken: 14bu7siu403m9qr9987ejofill" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(s.p,{children:"Request URL:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-url",children:"https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2&usedByObject=B7CA92F04B9FAE8D941C3E9B7E0CD754%3B32&usedByRecursive=false\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Use ",(0,a.jsx)(s.code,{children:"GET /api/metadataSearches/results"})," to get the search results. Get the search results previously stored in an instance in the Intelligence Server memory and display them in a list."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"list-dependents",children:"List dependents"}),"\n",(0,a.jsx)(s.p,{children:"You need to use the metadata search API to get the indirect and direct dependents of a specific object."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Create a metadata search by using ",(0,a.jsx)(s.code,{children:"POST /api/metadataSearch/results"}),". This will search the metadata and store an instance of search results."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"X-MSTR-AuthToken"}),": This is required in the header."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"X-MSTR-ProjectID"}),": This is optional, but recommended to used."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"domain"}),": This is optional and the recommended value is 2 with X-MSTR-ProjectID to specify the search domains."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"type"}),": This is option, but recommended to specify the types of search result. Possible values are defined in ",(0,a.jsx)(s.a,{href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html",children:"EnumDSSXMLObjectTypes"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"usesObject"}),": This is required and used to specify the object id and type to search with."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"usesRecursive"}),": This is optional and controls the Intelligence Server to find objects that use the given objects indirectly. The default value is false, and in most cases, should be false."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Curl:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2&amp;usesObject=B7CA92F04B9FAE8D941C3E9B70CD754%3B32&amp;usesRecursive=false" -H "accept: application/json" -H "X-MSTR-AuthToken: 14bu7siu403m9qr9987ejofill" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(s.p,{children:"Request URL:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-url",children:"https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2 usesObject=B7CA92F04B9FAE8D941C3E9B7E0CD754%3B32&usesRecursive=false\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Get the search results by using ",(0,a.jsx)(s.code,{children:"GET /api/metadataSearches/results"}),". Get the search results previously stored in an instance in the Intelligence Server memory and display them in a list."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var a=t(96540);const n={},i=a.createContext(n);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);