"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7879],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return f}});var r=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)o=p[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)o=p[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=r.createContext({}),m=function(t){var e=r.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,p=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=m(o),f=n,d=u["".concat(s,".").concat(f)]||u[f]||l[f]||p;return o?r.createElement(d,i(i({ref:e},c),{},{components:o})):r.createElement(d,i({ref:e},c))}));function f(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=o.length,i=new Array(p);i[0]=u;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:n,i[1]=a;for(var m=2;m<p;m++)i[m]=o[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3230:function(t,e,o){o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return m},toc:function(){return l}});var r=o(3117),n=o(102),p=(o(7294),o(3905)),i=["components"],a={title:"Get prompt information"},s=void 0,m={unversionedId:"common-workflows/use-prompts-objects/get-prompt-information/get-prompt-information",id:"common-workflows/use-prompts-objects/get-prompt-information/get-prompt-information",title:"Get prompt information",description:"You can use REST APIs to get information about five supported types of prompts applied to dossiers, documents, and reports. You can get a list of the prompts that have been applied to a dossier, document or report, together with the definition of each prompt.",source:"@site/docs/common-workflows/use-prompts-objects/get-prompt-information/get-prompt-information.md",sourceDirName:"common-workflows/use-prompts-objects/get-prompt-information",slug:"/common-workflows/use-prompts-objects/get-prompt-information/",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/get-prompt-information/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/use-prompts-objects/get-prompt-information/get-prompt-information.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664482211,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"Get prompt information"},sidebar:"tutorialSidebar",previous:{title:"Answer prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/answer-prompts"},next:{title:"Get prompt information",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information"}},c={},l=[],u={toc:l};function f(t){var e=t.components,o=(0,n.Z)(t,i);return(0,p.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"You can use REST APIs to get information about five supported types of prompts applied to dossiers, documents, and reports. You can get a list of the prompts that have been applied to a dossier, document or report, together with the definition of each prompt."),(0,p.kt)("p",null,"The prompts supported in the MicroStrategy platform are defined in EnumDSSXMLPromptType."),(0,p.kt)("p",null,"You can use REST APIs to return information about the following prompts:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-element-prompts"},"Attribute element prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts"},"Attribute qualification prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/object-prompts"},"Object prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/value-prompts"},"Value Prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/metric-expression-prompts"},"Metric expression prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/hierarchy-qualification-prompts"},"Hierarchy qualification prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/level-prompts"},"Level Prompts"))),(0,p.kt)("p",null,"You can identify prompts with the prompt key, prompt ID, or prompt name. If more than one identifier is provided, the logic for identifying the prompt will follow this order: key, ID, name. The prompt key is used first if is available because the key is the only unique value. Since the same prompt can be applied more than once to a dataset, the ID and the name might not be unique. Despite this possibility, the name is often the most convenient way to identify a prompt because of its descriptive nature."),(0,p.kt)("p",null,"To help you get started using REST APIs to build feature-rich applications that leverage MicroStrategy's prompt capabilities, we have provided a ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information"},"workflow sample for getting a prompt definition"),"."))}f.isMDXComponent=!0}}]);