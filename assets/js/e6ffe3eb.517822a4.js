"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5996],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=u(n),s=r,N=k["".concat(o,".").concat(s)]||k[s]||m[s]||l;return n?a.createElement(N,i(i({ref:e},d),{},{components:n})):a.createElement(N,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2082:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],p={title:"Supported Operators for View Filters",description:"The supported operators for view filters."},o=void 0,u={unversionedId:"common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators",id:"common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators",title:"Supported Operators for View Filters",description:"The supported operators for view filters.",source:"@site/docs/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators.md",sourceDirName:"common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters",slug:"/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators",permalink:"/rest-api-docs/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1663337315,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{title:"Supported Operators for View Filters",description:"The supported operators for view filters."},sidebar:"tutorialSidebar",previous:{title:"General Guidelines for Using View Filters",permalink:"/rest-api-docs/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines"},next:{title:"Supported Constant Data Types for View Filters",permalink:"/rest-api-docs/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types"}},d={},m=[{value:"Attributes",id:"attributes",level:2},{value:"Metrics",id:"metrics",level:2}],k={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The table below lists the operators/functions that can be used to define view filters when you are creating reports and cube instances with REST APIs (sometimes referred to as JSON Data API)."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample"},"Code samples")," are provided to illustrate how to use some of these operators. For operators without code samples, you can use the samples that are provided as a model for how to write your own code."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,"The following are the supported operators for attributes."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Function Alias"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Attribute element"),(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"In list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NotIn"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Not in list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Attribute form ","[ID / DESC]"),(0,l.kt)("td",{parentName:"tr",align:null},"Equals"),(0,l.kt)("td",{parentName:"tr",align:null},"="),(0,l.kt)("td",{parentName:"tr",align:null},"Exactly")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NotEqual"),(0,l.kt)("td",{parentName:"tr",align:null},"!="),(0,l.kt)("td",{parentName:"tr",align:null},"Different from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Greater"),(0,l.kt)("td",{parentName:"tr",align:null},">"),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Less"),(0,l.kt)("td",{parentName:"tr",align:null},"<"),(0,l.kt)("td",{parentName:"tr",align:null},"Less than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"GreaterEqual"),(0,l.kt)("td",{parentName:"tr",align:null},">="),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"LessEqual"),(0,l.kt)("td",{parentName:"tr",align:null},"<="),(0,l.kt)("td",{parentName:"tr",align:null},"Less than or equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Between"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Between")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NotBetween"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Not between")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IsNull"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Is null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IsNotNull"),(0,l.kt)("td",{parentName:"tr",align:null},"notnull"),(0,l.kt)("td",{parentName:"tr",align:null},"Is not null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Attribute form ","[DESC]"),(0,l.kt)("td",{parentName:"tr",align:null},"Like"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NotLike"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Contains"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NotContains"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"BeginsWith"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NotBeginsWith"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"EndsWith"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NotEndsWith"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"metrics"},"Metrics"),(0,l.kt)("p",null,"The following are the supported operators for metrics."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Function Alias"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Basic function"),(0,l.kt)("td",{parentName:"tr",align:null},"Equals"),(0,l.kt)("td",{parentName:"tr",align:null},"=")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NotEqual"),(0,l.kt)("td",{parentName:"tr",align:null},"!=")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Greater"),(0,l.kt)("td",{parentName:"tr",align:null},">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Less"),(0,l.kt)("td",{parentName:"tr",align:null},"<")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"GreaterEqual"),(0,l.kt)("td",{parentName:"tr",align:null},">=")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"LessEqual"),(0,l.kt)("td",{parentName:"tr",align:null},"<=")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Between"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NotBetween"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IsNull"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IsNotNull"),(0,l.kt)("td",{parentName:"tr",align:null},"notnull")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Rank")," ","[descending order]"),(0,l.kt)("td",{parentName:"tr",align:null},"Rank.Equals"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rank.DifferentFrom"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rank.Between"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rank.NotBetween"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rank.Top"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rank.Bottom"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rank.ExcludeTop"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rank.ExcludeBottom"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Percent")," ","[descending order]"),(0,l.kt)("td",{parentName:"tr",align:null},"Percent.Equals"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Percent.DifferentFrom"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Percent.Between"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Percent.NotBetween"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Percent.Top"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Percent.Bottom"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Percent.ExcludeTop"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Percent.ExcludeBottom"),(0,l.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);