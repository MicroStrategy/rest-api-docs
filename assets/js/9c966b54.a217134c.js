"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8687],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3497:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={title:"Workflow sample - Retrieve a base formula's definition within a changeset",sidebar_label:"Retrieve a base formula's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a base formula's definition\u202fwithin a changeset."},l=void 0,m={unversionedId:"common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset",id:"common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset",title:"Workflow sample - Retrieve a base formula's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a base formula's definition\u202fwithin a changeset.",source:"@site/docs/common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset.md",sourceDirName:"common-workflows/manage-base-formula-objects",slug:"/common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1669135808,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"Workflow sample - Retrieve a base formula's definition within a changeset",sidebar_label:"Retrieve a base formula's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a base formula's definition\u202fwithin a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a base formula's definition",permalink:"/rest-api-docs/common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition"},next:{title:"Create a base formula's definition within a changeset",permalink:"/rest-api-docs/common-workflows/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset"}},p={},c=[{value:"Get the definition of the specified base formula ID within a changeset using GET /api/model/formulas/{formulaId}",id:"get-the-definition-of-the-specified-base-formula-id-within-a-changeset-using-get-apimodelformulasformulaid",level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-7bcc16b2-2864-4980-b2b1-77681174827a?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve a base formula's definition\u202fwithin a changeset."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("p",null,"You want to get the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Cost"')," related base formula object, which is defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201dSum(Cost)\u201d")," and named as ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201cbase_sum(Cost)\u201c"),". The object ID of the base formula is ",(0,o.kt)("inlineCode",{parentName:"p"},"594A680CB5894B25BD3AE8BB47AAF424")," \u202fin the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("p",null,"For different formats of base formula expressions, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition"},"Workflow sample - Retrieve a base formula's definition"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h2",{id:"get-the-definition-of-the-specified-base-formula-id-within-a-changeset-using-get-apimodelformulasformulaid"},"Get the definition of the specified base formula ID within a changeset using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Formulas/getFormulaDetails"},"GET /api/model/formulas/{formulaId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the base formula's definition in the body of the response, including the information, attributes, and relationships of this specified base formula."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,o.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the changeset.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,o.kt)("td",{parentName:"tr",align:null},"Omitted, tree, or tokens:",(0,o.kt)("br",null),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,o.kt)("br",null),"- If ",(0,o.kt)("inlineCode",{parentName:"td"},"tree"),', the expression is returned in "text" and "tree" formats.',(0,o.kt)("br",null),"- If ",(0,o.kt)("inlineCode",{parentName:"td"},"tokens"),', the expression is returned in "text" and "tokens" formats.')))),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the base formula's definition in the body of the response, including the expression of this specified base formula."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-03T03:36:08.382Z",\n    "dateModified": "2022-03-03T03:36:08.382Z",\n    "versionId": "CAF77F9B432CD7FE85F2F390621F38F2",\n    "primaryLocale": "en-US",\n    "objectId": "594A680CB5894B25BD3AE8BB47AAF424",\n    "subType": "agg_metric",\n    "name": "base_sum(Cost)"\n  },\n  "expression": { "text": "Sum(Cost)" }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Base Formula's definition is returned successfully.)"))}d.isMDXComponent=!0}}]);