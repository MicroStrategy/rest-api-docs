"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3823],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},744:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],s={title:"Manage Subtotal Objects",description:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation."},l=void 0,p={unversionedId:"common-workflows/manage-subtotal-objects/manage-subtotal-objects",id:"common-workflows/manage-subtotal-objects/manage-subtotal-objects",title:"Manage Subtotal Objects",description:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation.",source:"@site/docs/common-workflows/manage-subtotal-objects/manage-subtotal-objects.md",sourceDirName:"common-workflows/manage-subtotal-objects",slug:"/common-workflows/manage-subtotal-objects/",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-subtotal-objects/manage-subtotal-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1663944405,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Manage Subtotal Objects",description:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation."},sidebar:"tutorialSidebar",previous:{title:"Update a Base Formula's Definition within a Changeset",permalink:"/rest-api-docs/common-workflows/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset"},next:{title:"Retrieve a Subtotal's Definition",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition"}},c={},u=[],m={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0e8e2533-03d6-4235-8aa0-6aef1cc2e723?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation."),(0,r.kt)("p",null,"You can use REST\u202fAPI requests retrieve, create, and update the subtotal objects through the Modeling service:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition"},"Retrieve a Subtotal's Definition")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset"},"Retrieve a Subtotal's Definition within a Changeset")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-subtotal-objects/create-a-subtotal-within-a-changeset"},"Create a Subtotal within a Changeset")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset"},"Update a Subtotal within a Changeset")),(0,r.kt)("p",null,"There are three important fields in the API response body defined for a subtotal:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"information"),": Stores the basic subtotal information include ",(0,r.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dateModified"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"versionId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"primaryLocale"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"objectId"),",",(0,r.kt)("inlineCode",{parentName:"p"},"subType"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,r.kt)("p",{parentName:"li"},"For a subtotal, ",(0,r.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"metric_subtotal"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"expression"),": Stores the aggregation types and targets defined in the subtotal either using single-value functions or group-value functions."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u2139\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Info")),(0,r.kt)("p",{parentName:"admonition"},"Tokens are a semi-structured representation of a MicroStrategy expression text that includes object references. When the subtotal\u2019s expression is represented as tokens, the text is broken down into pieces, or tokens, with information about what these pieces represent in the metadata.")),(0,r.kt)("p",{parentName:"li"},"A subtotal's \u201cexpression\" is presented in the following formats:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"text": A human-readable, but non-parsable text, describing a subtotal\'s expression.'),(0,r.kt)("li",{parentName:"ul"},'"tree": A tree data structure fully defining the subtotal\'s expression.'),(0,r.kt)("li",{parentName:"ul"},'"tokens": A list of parsed tokens that define a subtotal\'s expression. Generating tokens requires additional time.')),(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"showExpressionAs"),' is omitted, only "text" formats are returned.'),(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"tree"),', "text" and "tree" formats are returned.'),(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens"),', "text" and "tokens" formats are returned.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"dimty"),": Contains a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"DimtyUnit"),", which describes the level at which the subtotal can be calculated."))),(0,r.kt)("p",null,"For more information about the Modeling service, see ",(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}d.isMDXComponent=!0}}]);