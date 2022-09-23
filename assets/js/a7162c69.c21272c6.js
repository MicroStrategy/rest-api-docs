"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2010],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,d=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5585:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={title:"Retrieve a specific fence",description:"This workflow sample demonstrates how to retrieve a specific user or workload fence."},c=void 0,p={unversionedId:"common-workflows/manage-fences/retrieve-specific-fence",id:"common-workflows/manage-fences/retrieve-specific-fence",title:"Retrieve a specific fence",description:"This workflow sample demonstrates how to retrieve a specific user or workload fence.",source:"@site/docs/common-workflows/manage-fences/retrieve-specific-fence.md",sourceDirName:"common-workflows/manage-fences",slug:"/common-workflows/manage-fences/retrieve-specific-fence",permalink:"/rest-api-docs/common-workflows/manage-fences/retrieve-specific-fence",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-fences/retrieve-specific-fence.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1663944405,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Retrieve a specific fence",description:"This workflow sample demonstrates how to retrieve a specific user or workload fence."},sidebar:"tutorialSidebar",previous:{title:"Retrieve the list of fences",permalink:"/rest-api-docs/common-workflows/manage-fences/retrieve-list-of-fences"},next:{title:"Create a new fence",permalink:"/rest-api-docs/common-workflows/manage-fences/create-fence"}},l={},f=[{value:"Get the detailed information of a specific fence",id:"get-the-detailed-information-of-a-specific-fence",level:2}],m={toc:f};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You want to get the detailed information of ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator_user_fence")," user fence based on the fence name, which reserves ",(0,i.kt)("inlineCode",{parentName:"p"},"env-296739laio1use1")," node and configured for ",(0,i.kt)("inlineCode",{parentName:"p"},"Administrator")," user/usergroups."),(0,i.kt)("p",null,"The user ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"54F3D26011D2896560009A8E67019608"),". The usergroup ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"E96685CD4E60068559F7DFAC7C2AA851"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic"},"DssXmlPrivilegesConfigureServerBasic")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor"},"DssXmlPrivilegesUseClusterMonitor")," privileges are required to retrieve a specific user fence."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST\xa0/api/auth/login"),".")),(0,i.kt)("h2",{id:"get-the-detailed-information-of-a-specific-fence"},"Get the detailed information of a specific fence"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getFence"},"GET /api/iserver/fences/{name}"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences/administrator_user_fence' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"usergroups")," can be configured only for user fence, therefore the response body for workload fence should contain empty ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"usergroups")," fields.")),(0,i.kt)("p",null,"You can view the detailed information of ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator_user_fence")," user fence in the body of the response. The detailed information includes ",(0,i.kt)("inlineCode",{parentName:"p"},"rank"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", reserved ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes"),", configured ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"usergroups")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"projects"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rank": 1,\n  "name": "administrator_user_fence",\n  "type": "user_fence",\n  "nodes": ["env-295232laiouse1"],\n  "users": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    }\n  ],\n  "usergroups": [\n    {\n      "id": "E96685CD4E60068559F7DFAC7C2AA851",\n      "name": "Administrator"\n    }\n  ],\n  "projects": [\n    {\n      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "name": "MicroStrategy Tutorial"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The detailed information of a given fence is returned successfully.)"))}u.isMDXComponent=!0}}]);