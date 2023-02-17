"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1994],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(r),d=i,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return r?a.createElement(f,n(n({ref:t},p),{},{components:r})):a.createElement(f,n({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var m=2;m<o;m++)n[m]=r[m];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5474:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a,i=r(3117),o=r(102),n=(r(7294),r(3905)),s=["components"],l={title:"Modify a security filter's member",sidebar_label:"Modify a security filter's member",description:"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to."},m=void 0,p={unversionedId:"common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member",id:"common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member",title:"Modify a security filter's member",description:"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to.",source:"@site/docs/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member.md",sourceDirName:"common-workflows/modeling/manage-security-filter-objects",slug:"/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1676668503,formattedLastUpdatedAt:"Feb 17, 2023",frontMatter:{title:"Modify a security filter's member",sidebar_label:"Modify a security filter's member",description:"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a security filter's member",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/retrieve-a-security-filters-member"},next:{title:"Manage subtotal objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/"}},u={},c=[{value:"1. Remove the users and user groups using PATCH /api/securityFilters/{id}/members",id:"1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",level:2},{value:"2. Add the users and user groups using PATCH /api/securityFilters/{id}/members",id:"2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",level:2}],d=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),f={toc:c};function y(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(d,{since:"2021 Update 1",mdxType:"Available"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,n.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b39c86ac-1a16-4100-a96d-b1a6d2f74b9c?ctx=documentation"},"REST API Playground"),"."),(0,n.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,n.kt)("p",null,"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to. The object ID of the security filter is ",(0,n.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers"},"1. Remove the users and user groups using ",(0,n.kt)("inlineCode",{parentName:"a"},"PATCH /api/securityFilters/{id}/members"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers"},"2. Add the users and user groups using ",(0,n.kt)("inlineCode",{parentName:"a"},"PATCH /api/securityFilters/{id}/members")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,n.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,n.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,n.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,n.kt)("h2",{id:"1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers"},"1. Remove the users and user groups using ",(0,n.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/updatePartialSecurityFilter"},"PATCH /api/securityFilters/{id}/members")),(0,n.kt)("p",null,"Sample Request Header:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pamr302kmu0q1l0c22jeb13s2q"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,n.kt)("p",null,"Sample Request Body:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "removeElements",\n      "path": "/members",\n      "value": ["D09773F94699124B4D75B48F1B358327", "54F3D26011D2896560009A8E67019608"]\n    }\n  ]\n}\n')),(0,n.kt)("p",null,"Sample Curl:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/06648A0711D50131C00051916B98494F/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d \'{"operationList":[{"op":"removeElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}\'\n')),(0,n.kt)("p",null,"Sample Response Body: Empty"),(0,n.kt)("p",null,"Response Code: 204 (The security filter's member is modified successfully.)"),(0,n.kt)("h2",{id:"2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers"},"2. Add the users and user groups using ",(0,n.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/updatePartialSecurityFilter"},"PATCH /api/securityFilters/{id}/members")),(0,n.kt)("p",null,"Sample Request Header:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pamr302kmu0q1l0c22jeb13s2q"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,n.kt)("p",null,"Sample Request Body:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "addElements",\n      "path": "/members",\n      "value": ["D09773F94699124B4D75B48F1B358327", "54F3D26011D2896560009A8E67019608"]\n    }\n  ]\n}\n')),(0,n.kt)("p",null,"Sample Curl:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/06648A0711D50131C00051916B98494F/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d \'{"operationList":[{"op":"addElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}\'\n')),(0,n.kt)("p",null,"Sample Response Body: Empty"),(0,n.kt)("p",null,"Response Code: 200 (The security filter's member is modified successfully.)"))}y.isMDXComponent=!0}}]);