"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2012],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||a;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94435:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r,o=n(83117),a=n(80102),s=(n(67294),n(3905)),i=["components"],c={title:"Create a dossier theme instance",sidebar_label:"Create a dossier theme instance",description:"Dossier themes can be used to define dossier presentation styles. Once a theme is applied to a dossier, you can then apply that predefined formatting to a target dossier. To create a dossier theme, the client must create a theme instance from either the project default theme template, a dossier instance (with or without specifying which part of the dossier), or a report instance. In this section, multiple ways of creating dossier themes are presented and explained."},l=void 0,p={unversionedId:"common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation",id:"common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation",title:"Create a dossier theme instance",description:"Dossier themes can be used to define dossier presentation styles. Once a theme is applied to a dossier, you can then apply that predefined formatting to a target dossier. To create a dossier theme, the client must create a theme instance from either the project default theme template, a dossier instance (with or without specifying which part of the dossier), or a report instance. In this section, multiple ways of creating dossier themes are presented and explained.",source:"@site/docs/common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation.md",sourceDirName:"common-workflows/modeling/manage-dossier-themes",slug:"/common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-dossier-themes/dossier-theme-instance-creation.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1697826885,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Create a dossier theme instance",sidebar_label:"Create a dossier theme instance",description:"Dossier themes can be used to define dossier presentation styles. Once a theme is applied to a dossier, you can then apply that predefined formatting to a target dossier. To create a dossier theme, the client must create a theme instance from either the project default theme template, a dossier instance (with or without specifying which part of the dossier), or a report instance. In this section, multiple ways of creating dossier themes are presented and explained."},sidebar:"tutorialSidebar",previous:{title:"Manage dossier themes",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/"},next:{title:"Save dossier themes",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/save-dossier-themes"}},m={},d=[{value:"Create a dossier theme instance",id:"create-a-dossier-theme-instance",level:2},{value:"More examples",id:"more-examples",level:3}],h=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),u={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(h,{since:"2021 Update 10",mdxType:"Available"}),(0,s.kt)("p",null,"This workflow sample demonstrates how to create a new dossier theme instance using ",(0,s.kt)("inlineCode",{parentName:"p"},"POST /api/themes"),"."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,s.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,s.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,s.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,s.kt)("h2",{id:"create-a-dossier-theme-instance"},"Create a dossier theme instance"),(0,s.kt)("p",null,"Endpoint: ",(0,s.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Themes/createThemes"},"POST /api/themes")),(0,s.kt)("p",null,"In this step, you are creating a dossier theme instance from a project default dossier theme template. Note that a theme template is also a dossier theme object. The newly created dossier theme instance inherits all properties from the template. You can find more examples in the following sections on this page, as well as More examples at the bottom of this page."),(0,s.kt)("p",null,"Sample Request Header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,s.kt)("p",null,"Sample Request Body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,s.kt)("p",null,"Sample Curl:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' \\\n  'http://localhost:8282/consume-dev/api/themes' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: h5oeq515djqbltih6r883sbb90' \\\n  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n}'\n")),(0,s.kt)("p",null,"Sample Response Body:"),(0,s.kt)("p",null,"You can view the new dossier theme instance ID in the body of the response. The instance ID provides reference to the instance on the Intelligence Server, which can be used for further options, such as saving to metadata."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "instanceId": "2E7090A9D241F962D6B191B3A1BE02D4"\n}\n')),(0,s.kt)("p",null,"Sample Response Code: 201 (A new dossier theme instance is created on the Intelligence Server.)"),(0,s.kt)("h3",{id:"more-examples"},"More examples"),(0,s.kt)("p",null,"In the above example, the request body is empty. The newly created dossier theme instance is just a copy of the project default dossier theme template. With a properly prepared payload, you can get a dossier theme that is suited to your specific needs. The following properties can be put in the payload:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "themeId": "E0783EAF44DEF424CA5215A228D33606",\n  "instanceId": "E0783EAF44DEF424CA5215A228D336067",\n  "keys": [\n    {\n      "key": "String",\n      "type": "control_key"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"The following properties are in the request body:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"themeId: Optional theme template ID if use template other than project default."),(0,s.kt)("li",{parentName:"ul"},"instanceId: Optional Dossier or report instance ID."),(0,s.kt)("li",{parentName:"ul"},"keys: Optional, only applicable when instance ID is for a dossier, indicating the parts of dossier whose style information to be used in new theme instance."),(0,s.kt)("li",{parentName:"ul"},"key: id of key in dossier definition."),(0,s.kt)("li",{parentName:"ul"},"type: Type of the key with 3 valid inputs: control_key, field, others.")))}f.isMDXComponent=!0}}]);