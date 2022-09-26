"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5757],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1571:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),s=["components"],o={title:"Data Lineage Analysis via REST APIs",description:"The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata."},l=void 0,c={unversionedId:"common-workflows/data-lineage-analysis-via-rest-apis",id:"common-workflows/data-lineage-analysis-via-rest-apis",title:"Data Lineage Analysis via REST APIs",description:"The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata.",source:"@site/docs/common-workflows/data-lineage-analysis-via-rest-apis.md",sourceDirName:"common-workflows",slug:"/common-workflows/data-lineage-analysis-via-rest-apis",permalink:"/rest-api-docs/common-workflows/data-lineage-analysis-via-rest-apis",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/data-lineage-analysis-via-rest-apis.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664213537,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Data Lineage Analysis via REST APIs",description:"The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata."},sidebar:"tutorialSidebar",previous:{title:"Field Selection for Data API v2 Result-Fetching Endpoints",permalink:"/rest-api-docs/common-workflows/improve-performance-by-working-with-partial-resources/field-selection-for-data-api-v2-result-fetching-endpoints"},next:{title:"Manage Page-By Information",permalink:"/rest-api-docs/common-workflows/manage-page-by-information"}},d={},p=[{value:"List Components",id:"list-components",level:2},{value:"List Dependents",id:"list-dependents",level:3}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-e42edf07-9e68-4cc2-9eb9-a16ad920bb49?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata."),(0,i.kt)("p",null,"There are two functions that MicroStrategy data lineage supports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Given an object, for example a report, attribute, dossier, or database, list the direct and indirect components of that object"),(0,i.kt)("li",{parentName:"ul"},"Given an object, list the objects which directly and indirectly depend on that object")),(0,i.kt)("p",null,"The workflow sample below demonstrates how to perform data lineage analysis."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The metadata search API has one restriction that search cannot be triggered in parallel in one session. This means when the following two sets of APIs are used, the user should execute them in synchronized mode.")),(0,i.kt)("h2",{id:"list-components"},"List Components"),(0,i.kt)("p",null,"You need to use the metadata search API to get the indirect and direct components of a specific object."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a metadata search by using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/metadataSearch/results"),". This will search the metadata and store an instance of search results."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-MSTR-AuthToken"),": This is required in the header."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-MSTR-ProjectID"),": This is optional, but recommended to used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domain"),": This is optional and the recommended value is 2 with X-MSTR-ProjectID to specify the search domains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": This is option, but recommended to specify the types of search result. Possible values are defined in ",(0,i.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html"},"EnumDSSXMLObjectTypes"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usedByObject"),": This is required and used to specify the object id and type to search with."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usedByRecursive"),": This is optional and controls the Intelligence Server to find objects that use the given objects indirectly. The default value is false, and in most cases, should be false.")),(0,i.kt)("p",{parentName:"li"},"Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2&amp;usedByObject=B7CA92F04B9FAE8D941C3E9B70CD754%3B32&amp;usedByRecursive=false" -H "accept: application/json" -H "X-MSTR-AuthToken: 14bu7siu403m9qr9987ejofill" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",{parentName:"li"},"Request URL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2&usedByObject=B7CA92F04B9FAE8D941C3E9B7E0CD754%3B32&usedByRecursive=false\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/metadataSearches/results")," to get the search results. Get the search results previously stored in an instance in the Intelligence Server memory and display them in a list."))),(0,i.kt)("h3",{id:"list-dependents"},"List Dependents"),(0,i.kt)("p",null,"You need to use the metadata search API to get the indirect and direct dependents of a specific object."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a metadata search by using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/metadataSearch/results"),". This will search the metadata and store an instance of search results."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-MSTR-AuthToken"),": This is required in the header."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-MSTR-ProjectID"),": This is optional, but recommended to used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domain"),": This is optional and the recommended value is 2 with X-MSTR-ProjectID to specify the search domains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": This is option, but recommended to specify the types of search result. Possible values are defined in ",(0,i.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html"},"EnumDSSXMLObjectTypes"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usesObject"),": This is required and used to specify the object id and type to search with."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usesRecursive"),": This is optional and controls the Intelligence Server to find objects that use the given objects indirectly. The default value is false, and in most cases, should be false.")),(0,i.kt)("p",{parentName:"li"},"Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2&amp;usesObject=B7CA92F04B9FAE8D941C3E9B70CD754%3B32&amp;usesRecursive=false" -H "accept: application/json" -H "X-MSTR-AuthToken: 14bu7siu403m9qr9987ejofill" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",{parentName:"li"},"Request URL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2 usesObject=B7CA92F04B9FAE8D941C3E9B7E0CD754%3B32&usesRecursive=false\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get the search results by using ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/metadataSearches/results"),". Get the search results previously stored in an instance in the Intelligence Server memory and display them in a list."))))}m.isMDXComponent=!0}}]);