"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5817],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Retrieve object's translations",sidebar_label:"Retrieve object's translations",description:"This topic covers workflow for retrieving object's translations."},l=void 0,c={unversionedId:"common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations",id:"common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations",title:"Retrieve object's translations",description:"This topic covers workflow for retrieving object's translations.",source:"@site/docs/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations.md",sourceDirName:"common-workflows/modeling/common-object-management/manage-object-translations",slug:"/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations.md",tags:[],version:"current",lastUpdatedBy:"elinmstr",lastUpdatedAt:1676668503,formattedLastUpdatedAt:"Feb 17, 2023",frontMatter:{title:"Retrieve object's translations",sidebar_label:"Retrieve object's translations",description:"This topic covers workflow for retrieving object's translations."},sidebar:"tutorialSidebar",previous:{title:"Manage object's translations",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/"},next:{title:"Remove and add object's translations",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/remove-add-object-translations"}},m={},p=[{value:"Retrieve object&#39;s translations",id:"retrieve-objects-translations",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This topic covers workflow for retrieving object's translations."),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Object%20Management/getObjectsTranslation"},"GET /api/objects/{type}/{id}/translations"),"."),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,o.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"path"),(0,o.kt)("td",{parentName:"tr",align:null},"objectId"),(0,o.kt)("td",{parentName:"tr",align:null},"Id of an object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"path"),(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"type of an object")))),(0,o.kt)("p",null,"Prepare necessary info in order to perform GET operation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("li",{parentName:"ol"},"Get the project ID from ",(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,o.kt)("li",{parentName:"ol"},"Identify the object type from ",(0,o.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html"},"EnumDSSXMLObjectTypes"),".")),(0,o.kt)("p",null,"In this demo following parameter values will be used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Project: MicroStrategy Tutorial"),(0,o.kt)("li",{parentName:"ul"},"Project ID: ",(0,o.kt)("inlineCode",{parentName:"li"},"B7CA92F04B9FAE8D941C3E9B7E0CD754")),(0,o.kt)("li",{parentName:"ul"},"Object ID: ",(0,o.kt)("inlineCode",{parentName:"li"},"BEC722A6406320A3E67DBFBAB2F033CB")),(0,o.kt)("li",{parentName:"ul"},"Object type: ",(0,o.kt)("inlineCode",{parentName:"li"},"report_definition"))),(0,o.kt)("p",null,"Request URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/report_definition/BEC722A6406320A3E67DBFBAB2F033CB/translations\n")),(0,o.kt)("h2",{id:"retrieve-objects-translations"},"Retrieve object's translations"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/report_definition/BEC722A6406320A3E67DBFBAB2F033CB/translations" -H "X-MSTR-AuthToken: db3nqj4o29vg5i747cdd2t4j38" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "defaultLanguage": "en",\n  "localesAndTranslations": {\n    "1:0:": {\n      "translationTargetName": "Object Name ",\n      "translationValues": {\n        "1028": {\n          "translation": "\u7522\u54c1\u5927\u985e\u92b7\u552e\u5831\u8868"\n        },\n        "1031": {\n          "translation": "Kategorieumsatzbericht"\n        },\n        "1033": {\n          "translation": "Category Sales Report"\n        },\n        "1036": {\n          "translation": "Rapport sur les ventes par cat\xe9gorie"\n        },\n        "1040": {\n          "translation": "Report Vendite di categoria"\n        },\n        "1041": {\n          "translation": "\u30ab\u30c6\u30b4\u30ea\u58f2\u4e0a\u30ec\u30dd\u30fc\u30c8"\n        },\n        "1042": {\n          "translation": "\ubc94\uc8fc \ub9e4\ucd9c \ub9ac\ud3ec\ud2b8"\n        },\n        "1046": {\n          "translation": "Relat\xf3rio de Vendas da Categoria"\n        },\n        "1053": {\n          "translation": "Kategorif\xf6rs\xe4ljningsrapport"\n        },\n        "2052": {\n          "translation": "\u5404\u5927\u7c7b\u5546\u54c1\u9500\u552e\u62a5\u8868"\n        },\n        "3082": {\n          "translation": "Categor\xeda Informe de ventas"\n        }\n      }\n    },\n    "1:2:": {\n      "translationTargetName": "Object Description ",\n      "translationValues": {\n        "1028": {\n          "translation": "\u8a72\u5831\u8868\u986f\u793a\u4e86\u67d0\u7279\u5b9a\u7522\u54c1\u985e\u5225\u548c\u4e2d\u985e\u6bcf\u6708\u7684\u71df\u6536\u548c\u5229\u6f64\u8cc7\u8a0a\u3002\u8a72\u5229\u606f\u7684\u7522\u54c1\u985e\u5225\u901a\u904e\u5206\u9801\u9078\u64c7\u3002"\n        },\n        "1031": {\n          "translation": "Dieser Bericht zeigt Informationen zu Einnahmen und Gewinn nach Monat f\xfcr eine bestimmte Kategorie und Subkategorie. Die Kategorie, f\xfcr die Sie sich interessieren, wird mit Page-By ausgew\xe4hlt."\n        },\n        "1033": {\n          "translation": "This report displays revenue and profit information by month for a particular category and subcategory.  The category of interest is selected via page-by."\n        },\n        "1036": {\n          "translation": "Ce rapport affiche les informations sur le chiffre d\'affaires et le profit par mois pour une certaine cat\xe9gorie et sous-cat\xe9gorie  La cat\xe9gorie qui int\xe9resse l\'utilisateur est s\xe9lectionn\xe9e via le saut de page."\n        },\n        "1040": {\n          "translation": "Questo report mostra informazioni di entrate e profitti per mese per categorie e sottocategorie particolari. La categoria di interesse viene selezionata tramite raggruppamento a pagine."\n        },\n        "1041": {\n          "translation": "\u3053\u306e\u30ec\u30dd\u30fc\u30c8\u306f\u7279\u5b9a\u306e\u30ab\u30c6\u30b4\u30ea\u3068\u30b5\u30d6\u30ab\u30c6\u30b4\u30ea\u3054\u3068\u306b\u6708\u5225\u3067\u58f2\u4e0a\u9ad8\u3068\u5229\u76ca\u60c5\u5831\u3092\u793a\u3057\u307e\u3059\u3002\u30ab\u30c6\u30b4\u30ea\u306f\u30da\u30fc\u30b8\u30d0\u30a4\u3067\u9078\u629e\u3067\u304d\u307e\u3059\u3002"\n        },\n        "1042": {\n          "translation": "\uc774 \ub9ac\ud3ec\ud2b8\ub294 \ud2b9\uc815 \ubc94\uc8fc \ubc0f \ud558\uc704 \ubc94\uc8fc\ubcc4\ub85c \uc6d4\ubcc4 \uc218\uc775 \ubc0f \uc774\uc775 \uc815\ubcf4\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc6d0\ud558\ub294 \ubc94\uc8fc\ub294 \ud398\uc774\uc9c0-\ubc14\uc774\ub97c \ud1b5\ud574 \uc120\ud0dd\ub429\ub2c8\ub2e4."\n        },\n        "1046": {\n          "translation": "Este relat\xf3rio exibe informa\xe7\xf5es sobre a receita e o lucro mensal de categorias e subcategorias espec\xedficas.  A categoria de interesse \xe9 selecionada p\xe1gina a p\xe1gina."\n        },\n        "1053": {\n          "translation": "Denna rapport visar information om int\xe4kt och vinst per m\xe5nad f\xf6r en viss kategori och underkategori.  Kategorin av intresse v\xe4ljs genom s\xf6kning."\n        },\n        "2052": {\n          "translation": "\u8be5\u62a5\u8868\u663e\u793a\u4e86\u67d0\u7279\u5b9a\u5546\u54c1\u5927\u7c7b\u548c\u5b50\u7c7b\u6bcf\u6708\u7684\u6536\u76ca\u548c\u5229\u6da6\u4fe1\u606f\u3002\u8be5\u5229\u606f\u7684\u5546\u54c1\u5927\u7c7b\u901a\u8fc7\u5206\u9875\u9009\u62e9\u3002"\n        },\n        "3082": {\n          "translation": "Este informe muestra informaci\xf3n sobre ingresos y beneficios por mes para una categor\xeda y una subcategor\xeda determinadas.  La categor\xeda se selecciona mediante paginaci\xf3n."\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Object's translations returned successfully)"))}d.isMDXComponent=!0}}]);