"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4932],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||l[d]||a;return r?o.createElement(f,i(i({ref:t},m),{},{components:r})):o.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93774:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var o=r(83117),n=r(80102),a=(r(67294),r(3905)),i=["components"],p={title:"Manage prompt objects",description:"You can use REST API requests to retrieve, create, update, and delete the prompt objects through the Modeling service."},c=void 0,s={unversionedId:"common-workflows/modeling/manage-prompt-objects/manage-prompt-objects",id:"common-workflows/modeling/manage-prompt-objects/manage-prompt-objects",title:"Manage prompt objects",description:"You can use REST API requests to retrieve, create, update, and delete the prompt objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-prompt-objects/manage-prompt-objects.md",sourceDirName:"common-workflows/modeling/manage-prompt-objects",slug:"/common-workflows/modeling/manage-prompt-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-prompt-objects/manage-prompt-objects.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Manage prompt objects",description:"You can use REST API requests to retrieve, create, update, and delete the prompt objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a metric's applicable properties",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-applicable-properties"},next:{title:"Retrieve a prompt's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/retrieve-a-prompts-definition"}},m={},l=[],u={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-02d537e0-b0b3-4e13-b613-1cd863b7db88?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"You can use REST API requests to retrieve, create, update, and delete the prompt objects through the Modeling service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/retrieve-a-prompts-definition"},"Retrieve a prompt's definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/create-a-prompt-within-a-changeset"},"Create a prompt within a changeset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/update-a-prompts-definition-within-a-changeset"},"Update a prompt's definition within a changeset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/"},"Prompt types"))),(0,a.kt)("p",null,"For more information about the Modeling service, see ",(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."),(0,a.kt)("p",null,"For more information about prompt types, see ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/"},"Prompt types for managing prompt objects"),"."),(0,a.kt)("p",null,"For more information about the current limitations for managing prompt objects, see ",(0,a.kt)("a",{parentName:"p",href:"https://community.microstrategy.com/s/article/Functionality-vs-limitations-for-creating-and-editing-prompts-via-REST-APIs"},"KB484924"),"."),(0,a.kt)("p",null,"You cannot retrieve, create, or update level prompts using REST APIs."),(0,a.kt)("p",null,"You cannot retrieve, create, update, or delete system prompts using REST APIs."))}d.isMDXComponent=!0}}]);