"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[693],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r,a=n(83117),o=n(80102),i=(n(67294),n(3905)),s=["components"],c={title:"Delete a specific fence",description:"This workflow sample demonstrates how to delete a specific user or workload fence."},p=void 0,l={unversionedId:"common-workflows/administration/server-management/manage-fences/delete-specific-fence",id:"common-workflows/administration/server-management/manage-fences/delete-specific-fence",title:"Delete a specific fence",description:"This workflow sample demonstrates how to delete a specific user or workload fence.",source:"@site/docs/common-workflows/administration/server-management/manage-fences/delete-specific-fence.md",sourceDirName:"common-workflows/administration/server-management/manage-fences",slug:"/common-workflows/administration/server-management/manage-fences/delete-specific-fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/delete-specific-fence",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/server-management/manage-fences/delete-specific-fence.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Delete a specific fence",description:"This workflow sample demonstrates how to delete a specific user or workload fence."},sidebar:"tutorialSidebar",previous:{title:"Update specific fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/update-specific-fence"},next:{title:"Manage language objects",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-languages"}},m={},u=[{value:"Delete an existing fence",id:"delete-an-existing-fence",level:2}],d=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021 Update 6",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-977138df-2f06-40ae-87f3-8af880b7a336?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"You want to delete an ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator_user_fence")," user fence by fence name, which reserves ",(0,i.kt)("inlineCode",{parentName:"p"},"env-296739laio1use1")," node and configured for ",(0,i.kt)("inlineCode",{parentName:"p"},"Administrator")," user/usergroups."),(0,i.kt)("p",null,"The user ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"54F3D26011D2896560009A8E67019608"),". The usergroup ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"E96685CD4E60068559F7DFAC7C2AA851"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic"},"DssXmlPrivilegesConfigureServerBasic")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor"},"DssXmlPrivilegesUseClusterMonitor")," privileges are required to delete an existing fence."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST\xa0/api/auth/login"),".")),(0,i.kt)("h2",{id:"delete-an-existing-fence"},"Delete an existing fence"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/deleteFence"},"DELETE /api/iserver/fences/{name}"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE \\\n'demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences/administrator_user_fence' \\\n-H 'accept: */*' \\\n-H 'X-MSTR-AuthToken: 27tm0ok3pno1qb9nd4opt7qq07'\n")),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Response Code: 204 (User fence is deleted successfully.)"))}g.isMDXComponent=!0}}]);