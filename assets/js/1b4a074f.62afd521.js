"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9138],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,l(l({ref:e},u),{},{components:n})):r.createElement(m,l({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82884:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"Supported constant data types for view filters",description:"The supported constant data types for view filters."},p=void 0,s={unversionedId:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types",id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types",title:"Supported constant data types for view filters",description:"The supported constant data types for view filters.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Supported constant data types for view filters",description:"The supported constant data types for view filters."},sidebar:"tutorialSidebar",previous:{title:"Supported operators for view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators"},next:{title:"Code sample - Filter reports and cubes using view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample"}},u={},d=[{value:"Supported data types for numeric values",id:"supported-data-types-for-numeric-values",level:2},{value:"Supported data types for date and time",id:"supported-data-types-for-date-and-time",level:2},{value:"Supported data types for text",id:"supported-data-types-for-text",level:2}],c={toc:d};function f(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When a constant is used in a view filter qualification, you need to explicitly specify the data type. The table below lists the constant data types that are supported for view filters."),(0,i.kt)("h2",{id:"supported-data-types-for-numeric-values"},"Supported data types for numeric values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Support qualification Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Support qualification Form"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Real"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Single-precision_floating-point_format"},"IEEE 754 32-bit single-precision floating point number"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BigDecimal"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Arbitrary-precision singed big decimal number. Range: Unlimited digits before and after decimal point")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Int64"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"64-bit signed integer. Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.")))),(0,i.kt)("h2",{id:"supported-data-types-for-date-and-time"},"Supported data types for date and time"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Date and time are written as session-locale-specific string.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Support qualification Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Support qualification Form"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Date. Range: 1899/12/30~65535/12/31")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Time"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Time of day, precision in milliseconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TimeStamp"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Date + Time (an absolute point of time)")))),(0,i.kt)("h2",{id:"supported-data-types-for-text"},"Supported data types for text"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Support qualification Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Support qualification Form"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Char"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"String")))))}f.isMDXComponent=!0}}]);