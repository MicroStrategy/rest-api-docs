"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6349],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={title:"Configure clustered environments",description:"This page provides information for clustered environment configuration."},l=void 0,c={unversionedId:"getting-started/configure-clustered-environments",id:"getting-started/configure-clustered-environments",title:"Configure clustered environments",description:"This page provides information for clustered environment configuration.",source:"@site/docs/getting-started/configure-clustered-environments.md",sourceDirName:"getting-started",slug:"/getting-started/configure-clustered-environments",permalink:"/rest-api-docs/getting-started/configure-clustered-environments",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/getting-started/configure-clustered-environments.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1675877015,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Configure clustered environments",description:"This page provides information for clustered environment configuration."},sidebar:"tutorialSidebar",previous:{title:"REST API families",permalink:"/rest-api-docs/getting-started/rest-api-families"},next:{title:"Authentication",permalink:"/rest-api-docs/getting-started/authentication"}},u={},p=[],f={toc:p};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The MicroStrategy REST platform provides a highly scalable solution to meet your performance needs by installing multiple instances of REST servers that can communicate with an Intelligence Server cluster."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"REST Configuration",src:n(3419).Z,width:"1910",height:"1606"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Load balancing must be configured to maintain session stickiness.")),(0,o.kt)("p",null,"You must configure certain properties for horizontal scaling of REST Servers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Configuration files"),(0,o.kt)("p",{parentName:"li"},"The following configuration files should be kept in sync between all REST Server nodes within a clustered environment."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/WEB-INF/classes/config/","*"),(0,o.kt)("li",{parentName:"ul"},"/WEB-INF/classes/auth/","*"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The MicroStrategyLibrary REST Server provides an admin page to modify some of the configuration settings."),(0,o.kt)("p",{parentName:"li"},"The MicroStrategy REST Server contains default values for configuration in \u2026/config/configDefaults.properties. The configDefaults.properties file contains key-value pairs of configuration options. To specify a configuration option, the desired key can be copied from the configDefaults.properties file, and saved into configOverride.properties with a different value."),(0,o.kt)("p",{parentName:"li"},"However, if you use this method to make configuration changes and your REST Server is running in a clustered environment, only one of the nodes in the cluster is modified. To resolve this problem, you can use a shared drive across all nodes via Mount or Symbolic links. If you use Symbolic links, you need to enable the Tomcat property allowLinking. Refer to the Apache Tomcat Configuration Reference."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"allowLinking"),(0,o.kt)("td",{parentName:"tr",align:"left"},'If the value of this flag is set to "true", symlinks is allowed inside the web application, pointing to resources outside the web application base path. If the value of this flag is not specified, the default value of "false" is used.')))),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'This flag MUST NOT be set to "true" on the Windows platform (or any other operating system that does not have a case-sensitive file system). This will disable case sensitivity checks, allowing JSP source code disclosure, among other security problems.')))))}d.isMDXComponent=!0},3419:function(e,t,n){t.Z=n.p+"assets/images/REST_Configuration-e6aec76b54e8a85afea5a2c10e50f874.png"}}]);