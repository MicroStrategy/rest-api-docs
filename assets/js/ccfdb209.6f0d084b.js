"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4171],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(g,i(i({ref:t},l),{},{components:r})):o.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3288:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=r(3117),n=r(102),a=(r(7294),r(3905)),i=["components"],s={title:"MicroStrategy REST API Explorer",description:"Instructions for using MicroStrategy REST API Explorer, our official REST API documentation."},c=void 0,p={unversionedId:"getting-started/microstrategy-rest-api-explorer",id:"getting-started/microstrategy-rest-api-explorer",title:"MicroStrategy REST API Explorer",description:"Instructions for using MicroStrategy REST API Explorer, our official REST API documentation.",source:"@site/docs/getting-started/microstrategy-rest-api-explorer.md",sourceDirName:"getting-started",slug:"/getting-started/microstrategy-rest-api-explorer",permalink:"/getting-started/microstrategy-rest-api-explorer",draft:!1,editUrl:"https://undefined/undefined/restapi-docs/tree/main/docs/getting-started/microstrategy-rest-api-explorer.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663186539,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"MicroStrategy REST API Explorer",description:"Instructions for using MicroStrategy REST API Explorer, our official REST API documentation."},sidebar:"tutorialSidebar",previous:{title:"Handle REST API Errors",permalink:"/getting-started/handle-rest-api-exceptions"},next:{title:"MicroStrategy REST API Playground",permalink:"/getting-started/playground"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Commonly asked questions",id:"commonly-asked-questions",level:2},{value:"How to use SAML or OIDC authentication in API Explorer?",id:"how-to-use-saml-or-oidc-authentication-in-api-explorer",level:3}],d={toc:u};function m(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs"},"MicroStrategy API Explorer")," serves as the REST API reference guide, providing a comprehensive list of the available MicroStrategy REST APIs grouped into REST API families. Common MicroStrategy platform capabilities are exposed in a RESTful web service."),(0,a.kt)("p",null,"It is hosted on ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs"},"demo.microstrategy.com"),". You can also use the API Explorer shipped in your MicroStrategyLibrary server. Once the MicroStrategyLibrary server is started, you access the MicroStrategy REST API Explorer at ",(0,a.kt)("inlineCode",{parentName:"p"},"{YOUR_LIBRARY_SERVER_URL}/api-docs/"),", e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://env-263053.customer.cloud.microstrategy.com/MicroStrategyLibrary/api-docs"),"."),(0,a.kt)("p",null,"When you access the server, you are able to see the available APIs. You can drill down into these to see HTTP headers and input and output information for each request, and enter values to try out the APIs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SwaggerUI REST API Explorer",src:r(8208).Z,width:"1014",height:"869"})),(0,a.kt)("h2",{id:"commonly-asked-questions"},"Commonly asked questions"),(0,a.kt)("h3",{id:"how-to-use-saml-or-oidc-authentication-in-api-explorer"},"How to use SAML or OIDC authentication in API Explorer?"),(0,a.kt)("p",null,"To use SAML or OIDC authentication in API Explorer, you can open another browser window to finish authentication, then come back to API Explorer. Open a page that requires authentication in another browser window, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"{YOUR_LIBRARY_SERVER_URL}/app/"),". After you are authenticated, open API Explorer page and use ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/auth/token")," call to get the auth token. You don't need to provide iSession value, because the browser will handle it automatically. After you have the auth token, you can use the auth token in other API calls."))}m.isMDXComponent=!0},8208:function(e,t,r){t.Z=r.p+"assets/images/swaggerUI_REST_API_Explorer-93944863f97c181a27f142fee66637c9.png"}}]);