"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9355],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),f=n,d=u["".concat(m,".").concat(f)]||u[f]||p[f]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1936:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],s={title:"Manage Base Formula Objects",description:"Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics. You can use REST\u202fAPI requests to retrieve, create, and update the base formula objects through the Modeling service."},m=void 0,l={unversionedId:"common-workflows/manage-base-formula-objects/manage-base-formula-objects",id:"common-workflows/manage-base-formula-objects/manage-base-formula-objects",title:"Manage Base Formula Objects",description:"Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics. You can use REST\u202fAPI requests to retrieve, create, and update the base formula objects through the Modeling service.",source:"@site/docs/common-workflows/manage-base-formula-objects/manage-base-formula-objects.md",sourceDirName:"common-workflows/manage-base-formula-objects",slug:"/common-workflows/manage-base-formula-objects/",permalink:"/rest-api-docs/common-workflows/manage-base-formula-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-base-formula-objects/manage-base-formula-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1663944405,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Manage Base Formula Objects",description:"Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics. You can use REST\u202fAPI requests to retrieve, create, and update the base formula objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update a Metric's Definition within a Changeset",permalink:"/rest-api-docs/common-workflows/manage-metric-objects/update-a-metrics-definition-within-a-changeset"},next:{title:"Retrieve a Base Formula's Definition",permalink:"/rest-api-docs/common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition"}},c={},p=[],u={toc:p};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cf953972-3d9d-4347-b253-5d89e40c088c?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics."),(0,o.kt)("p",null,"You can use REST\u202fAPI requests to retrieve, create, and update the base formula objects through the Modeling service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition"},"Retrieve a Base Formula's Definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset"},"Retrieve a Base Formula's Definition within a Changeset")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset"},"Create a Base Formula's Definition within a Changeset")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset"},"Update a Base Formula's Definition within a Changeset"))),(0,o.kt)("p",null,"There are two important fields in the API response body defined for a base formula:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"information"),": Stores the basic information of a base formula's information including ",(0,o.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dateModified"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"versionId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryLocale"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subType"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,o.kt)("p",{parentName:"li"},"For a base formula, ",(0,o.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"agg_metric"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"expression"),": Stored as simple base formulas without any dimensionality, conditionality, or subtotals. They can be reused to create any number of simple or complex metrics."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u2139\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"Info")),(0,o.kt)("p",{parentName:"admonition"},"Tokens are a semi-structured representation of a MicroStrategy expression text that includes object references. When the base formula\u2019s expression is represented as tokens, the text is broken down into pieces, or tokens, with information about what these pieces represent in the metadata.")),(0,o.kt)("p",{parentName:"li"},"A base formula's \u201cexpression\" is presented in the following formats:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'"text": A human-readable, but non-parsable text, describing a base formula\'s expression.'),(0,o.kt)("li",{parentName:"ul"},'"tree": A tree data structure fully defining the base formula\'s expression.'),(0,o.kt)("li",{parentName:"ul"},'"tokens": A list of parsed tokens that define a base formula\'s expression. Generating tokens requires additional time.')),(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs"),' is omitted, only "text" formats are returned.'),(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"tree"),', "text" and "tree" formats are returned.'),(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens"),', "text" and "tokens" formats are returned.'))),(0,o.kt)("p",null,"For more information about the Modeling service, see ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}f.isMDXComponent=!0}}]);