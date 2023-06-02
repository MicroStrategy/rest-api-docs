"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6639],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return u}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return r?i.createElement(m,a(a({ref:t},f),{},{components:r})):i.createElement(m,a({ref:t},f))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37108:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=r(83117),n=r(80102),o=(r(67294),r(3905)),a=["components"],s={title:"Retrieve filters applied to dossier chapters",description:"You can use the following REST API to get information about the filter applied in each chapter in a specific dossier, including the key and name of the filter, a text summary of the filter expression, and information for the filter source."},l=void 0,c={unversionedId:"common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters",id:"common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters",title:"Retrieve filters applied to dossier chapters",description:"You can use the following REST API to get information about the filter applied in each chapter in a specific dossier, including the key and name of the filter, a text summary of the filter expression, and information for the filter source.",source:"@site/docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters.md",sourceDirName:"common-workflows/analytics/filter-data",slug:"/common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1685725225,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Retrieve filters applied to dossier chapters",description:"You can use the following REST API to get information about the filter applied in each chapter in a specific dossier, including the key and name of the filter, a text summary of the filter expression, and information for the filter source."},sidebar:"tutorialSidebar",previous:{title:"Apply filters to a dossier",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier"},next:{title:"Retrieve filters applied to a visualization",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/"}},f={},p=[],d={toc:p};function u(e){var t=e.components,s=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the following REST API to get information about the filter applied in each chapter in a specific dossier, including the key and name of the filter, a text summary of the filter expression, and information for the filter source."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers/{dossierId}/definition"))),(0,o.kt)("p",null,"The filter information is included in the dossier hierarchy information that is returned by this endpoint."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dossierDefinitionWithFilter",src:r(47745).Z,width:"831",height:"912"})))}u.isMDXComponent=!0},47745:function(e,t,r){t.Z=r.p+"assets/images/dossierDefinitionWithFilter-34db21bb514bae53831be8394358b775.png"}}]);