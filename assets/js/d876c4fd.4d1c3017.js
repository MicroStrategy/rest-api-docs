"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1839],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60960:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return _},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a,r=n(83117),s=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Retrieve the SQL statement of datasets in a document or dossier instance",sidebar_label:"Retrieve the SQL statement of datasets in a document or dossier instance",description:"You can retrieve the SQL statements of all datasets in a document or dossier instance. In this workflow sample, a dossier instance is used. However, the same workflow applies to a document instance."},c=void 0,p={unversionedId:"common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql",id:"common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql",title:"Retrieve the SQL statement of datasets in a document or dossier instance",description:"You can retrieve the SQL statements of all datasets in a document or dossier instance. In this workflow sample, a dossier instance is used. However, the same workflow applies to a document instance.",source:"@site/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql.md",sourceDirName:"common-workflows/analytics/retrieve-sql-statements-and-query-details",slug:"/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql.md",tags:[],version:"current",lastUpdatedBy:"Holmblad, Darren",lastUpdatedAt:1695923197,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Retrieve the SQL statement of datasets in a document or dossier instance",sidebar_label:"Retrieve the SQL statement of datasets in a document or dossier instance",description:"You can retrieve the SQL statements of all datasets in a document or dossier instance. In this workflow sample, a dossier instance is used. However, the same workflow applies to a document instance."},sidebar:"tutorialSidebar",previous:{title:"Retrieve report or card SQL",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql"},next:{title:"Retrieve visualization query details",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details"}},d={},u=[{value:"Create a dossier instance",id:"create-a-dossier-instance",level:2},{value:"Get the SQL statements of datasets in document or dossier instances using <code>GET /api/dossiers/{id}/instances/{instanceId}/datasets/sqlView</code>",id:"get-the-sql-statements-of-datasets-in-document-or-dossier-instances-using-get-apidossiersidinstancesinstanceiddatasetssqlview",level:2}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:u};function _(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{since:"2021 Update 2",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5d5e523d-6a02-45a1-9537-bc0d37f9c10c"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"You can retrieve the SQL statements of all datasets in a document or dossier instance. In this workflow sample, a dossier instance is used. However, the same workflow applies to a document instance."),(0,o.kt)("p",null,"You want to view the SQL statement of every dataset in the Cost Analysis Dossier in the MicroStrategy Tutorial project. The object ID of the dossier is ",(0,o.kt)("inlineCode",{parentName:"p"},"D14F30994A4B97AD8EF6AEA5F589E30B"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesWebReportSQL"},"DssXmlPrivilegesWebReportSQL")," privilege is required to get the SQL view of a report instance.")),(0,o.kt)("h2",{id:"create-a-dossier-instance"},"Create a dossier instance"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2"},"POST /api/dossiers/{id}/instances"),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (A new dossier instance is created successfully.)"),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mid": "50454FC6DA48C798E8EDA28C46726F5B",\n  "status": 1\n}\n')),(0,o.kt)("h2",{id:"get-the-sql-statements-of-datasets-in-document-or-dossier-instances-using-get-apidossiersidinstancesinstanceiddatasetssqlview"},"Get the SQL statements of datasets in document or dossier instances using ",(0,o.kt)("inlineCode",{parentName:"h2"},"GET /api/dossiers/{id}/instances/{instanceId}/datasets/sqlView")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances/50454FC6DA48C798E8EDA28C46726F5B/datasets/sqlView" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the SQL statement of every dataset in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "datasets": [\n    {\n      "name": "New Dataset 1",\n      "id": "53789FDF1C4378D8EBDAD8AF41E0C95F",\n      "sqlStatement": "select\\tdistinct `pa11`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\\n\\t`a14`.`MONTH_OF_YEAR_NAME`  `MONTH_OF_YEAR_NAME0`,\\n\\t`pa11`.`Quarter_ID`  `Quarter_ID`,\\n\\t`a13`.`QUARTER_DESC`  `QUARTER_DESC0`,\\n\\t`a13`.`Year_ID`  `Year_ID`,\\n\\t`pa11`.`WJXBFS1`  `WJXBFS1`,\\n\\t`pa11`.`WJXBFS2`  `WJXBFS2`,\\n\\t`pa12`.`WJXBFS1`  `WJXBFS3`\\nfrom\\t(select\\t`a12`.`Quarter_ID`  `Quarter_ID`,\\n\\t\\t`a13`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\\n\\t\\tsum((`a11`.`QTY_SOLD` * `a11`.`UNIT_COST`))  `WJXBFS1`,\\n\\t\\tsum((`a11`.`QTY_SOLD` * `a11`.`DISCOUNT`))  `WJXBFS2`\\n\\tfrom\\t`ORDER_DETAIL`\\t`a11`\\n\\t\\tjoin\\t`LU_DAY`\\t`a12`\\n\\t\\t  on \\t(`a11`.`ORDER_DATE` = `a12`.`DAY_DATE`)\\n\\t\\tjoin\\t`LU_MONTH`\\t`a13`\\n\\t\\t  on \\t(`a12`.`MONTH_ID` = `a13`.`MONTH_ID`)\\n\\tgroup by\\t`a12`.`Quarter_ID`,\\n\\t\\t`a13`.`MONTH_OF_YEAR`\\n\\t)\\t`pa11`\\n\\tjoin\\t(select\\t`a13`.`Quarter_ID`  `Quarter_ID`,\\n\\t\\t`a12`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\\n\\t\\tsum(`a11`.`TOT_COST`)  `WJXBFS1`\\n\\tfrom\\t`STATE_SUBCATEG_MNTH_SLS`\\t`a11`\\n\\t\\tjoin\\t`LU_MONTH`\\t`a12`\\n\\t\\t  on \\t(`a11`.`MONTH_ID` = `a12`.`MONTH_ID`)\\n\\t\\tjoin\\t`LU_QUARTER`\\t`a13`\\n\\t\\t  on \\t(`a12`.`Quarter_ID` = `a13`.`LY_QUARTER_ID`)\\n\\tgroup by\\t`a13`.`Quarter_ID`,\\n\\t\\t`a12`.`MONTH_OF_YEAR`\\n\\t)\\t`pa12`\\n\\t  on \\t(`pa11`.`MONTH_OF_YEAR` = `pa12`.`MONTH_OF_YEAR` and \\n\\t`pa11`.`Quarter_ID` = `pa12`.`Quarter_ID`)\\n\\tjoin\\t`LU_QUARTER`\\t`a13`\\n\\t  on \\t(`pa11`.`Quarter_ID` = `a13`.`Quarter_ID`)\\n\\tjoin\\t`LU_MONTH_OF_YEAR`\\t`a14`\\n\\t  on \\t(`pa11`.`MONTH_OF_YEAR` = `a14`.`MONTH_OF_YEAR`)\\n\\n[Analytical engine calculation steps:\\n\\t1.  Calculate metric: <Cost Growth>\\n\\t2.  Perform cross-tabbing\\n]\\n"\n    },\n    {\n      "name": "New Dataset 1",\n      "id": "C50B684A7D4C9FA8D30F50B6BFCBA7EA",\n      "sqlStatement": "select\\tdistinct `pa12`.`CALL_CTR_ID`  `CALL_CTR_ID`,\\n\\t`a13`.`CENTER_NAME`  `CENTER_NAME`,\\n\\t`a13`.`COUNTRY_ID`  `COUNTRY_ID`,\\n\\t`a15`.`COUNTRY_NAME`  `COUNTRY_NAME0`,\\n\\t`a13`.`REGION_ID`  `REGION_ID`,\\n\\t`a14`.`REGION_NAME`  `REGION_NAME`,\\n\\t`pa12`.`WJXBFS1`  `WJXBFS1`\\n\\t`pa12`.`Revenue`  `Revenue`\\nfrom\\t(select\\t`a12`.`CALL_CTR_ID`  `CALL_CTR_ID`,\\n\\t\\tsum((`a11`.`TOT_DOLLAR_SALES` - `a11`.`TOT_COST`))  `WJXBFS1`,\\n\\t\\tsum(`a11`.`TOT_DOLLAR_SALES`)  `Revenue`\\n\\tfrom\\t`ITEM_EMP_SLS`\\t`a11`\\n\\t\\tjoin\\t`LU_EMPLOYEE`\\t`a12`\\n\\t\\t  on \\t(`a11`.`EMP_ID` = `a12`.`EMP_ID`)\\n\\tgroup by\\t`a12`.`CALL_CTR_ID`\\n\\t)\\t`pa12`\\n\\tjoin\\t`LU_CALL_CTR`\\t`a13`\\n\\t  on \\t(`pa12`.`CALL_CTR_ID` = `a13`.`CALL_CTR_ID`)\\n\\tjoin\\t`LU_REGION`\\t`a14`\\n\\t  on \\t(`a13`.`COUNTRY_ID` = `a14`.`COUNTRY_ID` and \\n\\t`a13`.`REGION_ID` = `a14`.`REGION_ID`)\\n\\tjoin\\t`LU_COUNTRY`\\t`a15`\\n\\t  on \\t(`a13`.`COUNTRY_ID` = `a15`.`COUNTRY_ID`)\\n\\n[Analytical engine calculation steps:\\n\\t1.  Calculate metric: <Profit Margin>\\n\\t2.  Calculate metric: <Profit Percent Growth>\\n\\t3.  Perform cross-tabbing\\n]\\n"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The SQL statement of the dossier instance's dataset is returned successfully.)"))}_.isMDXComponent=!0}}]);