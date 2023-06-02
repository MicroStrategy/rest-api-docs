"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6323],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,C=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(C,s(s({ref:n},p),{},{components:t})):a.createElement(C,s({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46835:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=t(83117),o=t(80102),r=(t(67294),t(3905)),s=["components"],l={sidebar_label:"Changesets",title:"Changesets",description:"The REST API provides a way to create and modify modeling objects through changesets. It is involved in most modeling APIs."},i=void 0,c={unversionedId:"common-workflows/modeling/changesets",id:"common-workflows/modeling/changesets",title:"Changesets",description:"The REST API provides a way to create and modify modeling objects through changesets. It is involved in most modeling APIs.",source:"@site/docs/common-workflows/modeling/changesets.md",sourceDirName:"common-workflows/modeling",slug:"/common-workflows/modeling/changesets",permalink:"/rest-api-docs/common-workflows/modeling/changesets",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/changesets.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1685726508,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{sidebar_label:"Changesets",title:"Changesets",description:"The REST API provides a way to create and modify modeling objects through changesets. It is involved in most modeling APIs."},sidebar:"tutorialSidebar",previous:{title:"Reload the schema asynchronously",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-asynchronously"},next:{title:"Manage attribute objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/"}},p={},m=[{value:"General workflow",id:"general-workflow",level:2},{value:"Create a changeset",id:"create-a-changeset",level:3},{value:"Make a modeling API call",id:"make-a-modeling-api-call",level:3},{value:"Commit a changeset",id:"commit-a-changeset",level:3},{value:"Reload the schema",id:"reload-the-schema",level:3},{value:"Delete the changeset",id:"delete-the-changeset",level:3}],d={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A changeset maintains an indivisible group of creations or modifications on modeling objects. They allow you to manipulate objects via modeling APIs (i.e. filters, facts, attributes, etc.) and validate the changes before committing the changes to metadata. All the changes in the changeset should be committed as one transaction or abandoned altogether."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the changeset is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions). The ",(0,r.kt)("inlineCode",{parentName:"p"},'"schemaEdit"')," query is required to be ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," during the creation of the changeset through the API. After committing the schema changes, you should also call ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-schemaReload"},"POST /api/model/schema/reload")," to reload the schema."),(0,r.kt)("p",{parentName:"admonition"},"Some modeling APIs requires either a ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID")," (project ID) or ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-MS-Changeset")," (changeset ID) in the header. The project ID is required to return an object's definition in the metadata. The changeset ID is required to return an objects's definition within a specific changeset. To execute the request, either the project ID or changeset ID needs to be provided. If both are provided, only the changeset ID is used.")),(0,r.kt)("h2",{id:"general-workflow"},"General workflow"),(0,r.kt)("p",null,"The general workflow for using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets"},"changesets APIs")," involves:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-changeset"},"Creating a changeset")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#make-a-modeling-api-call"},"Making the modeling APIs call to get, create, or modify objects (i.e. filters, facts, attributes, etc.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#commit-a-changeset"},"Committing the changeset")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#reload-the-schema"},"Reload the schema"),". This is needed only when ",(0,r.kt)("inlineCode",{parentName:"li"},'"schemaEdit"')," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#delete-the-changeset"},"Deleting the changeset"))),(0,r.kt)("h3",{id:"create-a-changeset"},"Create a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "805C5F3FB78A436FAE37C943471C24AD",\n  "dateCreated": "2021-03-22T18:39:47.790690Z",\n  "dateModified": "2021-03-22T18:39:47.790723Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MSTR User"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,r.kt)("h3",{id:"make-a-modeling-api-call"},"Make a modeling API call"),(0,r.kt)("p",null,"In this example, we will create an attribute."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-createAttribute"},"POST /api/model/attributes"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expression": {\n    "tokens": [\n      {\n        "value": "<attribute_form_expression>"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "attribute",\n    "name": "Subcategory",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "SUBCAT_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "SUBCAT_DESC"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("p",null,"In this sample workflow, you want to return the newly created attribute with its expression in all formats. Therefore, you should set ",(0,r.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"showExpressionsAs=tokens"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d {\\\\"information\\\\":{\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Subcategory\\\\",\\\\"destinationFolderId\\\\":\\\\"98FE182C2A10427EACE0CD30B6768258\\\\"},\\\\"forms\\\\":[{\\\\"name\\\\":\\\\"ID\\\\",\\\\"description\\\\":\\\\"Subcategory ID\\\\",\\\\"category\\\\":\\\\"ID\\\\",\\\\"displayFormat\\\\":\\\\"number\\\\",\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"SUBCAT_ID\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"76C6FEAB49D08F57BC6FC9B644743EEF\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"CITY_SUBCATEG_SLS\\\\"},{\\\\"objectId\\\\":\\\\"8D67937411D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_ITEM\\\\"},{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}]}],\\\\"alias\\\\":\\\\"SUBCAT_ID\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}},{\\\\"name\\\\":\\\\"DESC\\\\",\\\\"description\\\\":\\\\"Subcategory Name\\\\",\\\\"category\\\\":\\\\"DESC\\\\",\\\\"isMultilingual\\\\":true,\\\\"displayFormat\\\\":\\\\"text\\\\",\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"SUBCAT_DESC\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}]}],\\\\"alias\\\\":\\\\"SUBCAT_DESC\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}}],\\\\"attributeLookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"},\\\\"keyForm\\\\":{\\\\"name\\\\":\\\\"ID\\\\"},\\\\"displays\\\\":{\\\\"reportDisplays\\\\":[{\\\\"name\\\\":\\\\"DESC\\\\"}],\\\\"browseDisplays\\\\":[{\\\\"name\\\\":\\\\"DESC\\\\"}]},\\\\"sorts\\\\":{\\\\"reportSorts\\\\":[{\\\\"form\\\\":{\\\\"name\\\\":\\\\"DESC\\\\"},\\\\"ascending\\\\":true}],\\\\"browseSorts\\\\":[{\\\\"form\\\\":{\\\\"name\\\\":\\\\"DESC\\\\"},\\\\"ascending\\\\":true}]}}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new attribute's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "45E696C357BC4BE882ED945E3EEDFE09",\n    "primaryLocale": "en-US",\n    "objectId": "27DA76BDDD8B4EEEA890B76F9BC77C9D",\n    "subType": "attribute",\n    "name": "Subcategory",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "id": "45C11FA478E745FEA08D781CEA190FE5",\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "type": "system",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 2,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "B8AAB62201C44E349D3CE80CEC36200E",\n          "expression": {\n            "text": "SUBCAT_ID",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_ID",\n              "objectId": "8D67921711D3E4981000E787EC6DE8A4"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "SUBCAT_ID",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-01-02T20:48:47.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8D67921711D3E4981000E787EC6DE8A4",\n                  "subType": "column",\n                  "name": "SUBCAT_ID"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "type": "system",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 50,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "41C08B7CE11440569CA7AE54A28DCC55",\n          "expression": {\n            "text": "SUBCAT_DESC",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_DESC",\n              "objectId": "8D67928711D3E4981000E787EC6DE8A4"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "SUBCAT_DESC",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-01-02T20:48:34.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8D67928711D3E4981000E787EC6DE8A4",\n                  "subType": "column",\n                  "name": "SUBCAT_DESC"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "id": "45C11FA478E745FEA08D781CEA190FE5",\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ]\n  },\n  "relationships": []\n}\n')),(0,r.kt)("p",null,"Response Code: 201 (A new attribute is created successfully in the changeset.)"),(0,r.kt)("h3",{id:"commit-a-changeset"},"Commit a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/805C5F3FB78A436FAE37C943471C24AD/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "805C5F3FB78A436FAE37C943471C24AD",\n  "dateCreated": "2021-03-22T18:39:47.790690Z",\n  "dateModified": "2021-03-22T19:03:34.704176Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MSTR User"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,r.kt)("h3",{id:"reload-the-schema"},"Reload the schema"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-schemaReload"},"POST /api/model/schema/reload"),"."),(0,r.kt)("p",null,"This is needed only when ",(0,r.kt)("inlineCode",{parentName:"p"},'"schemaEdit"')," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "updateTypes": ["table_key", "entry_level", "logical_size", "clear_element_cache"]\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/reload" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d \'{"updateTypes": ["table_key","entry_level,"logical_size","clear_element_cache"]}\'\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("p",null,"Sample Response Code: 200 (The schema reload (synchronous call) executes successfully.)"),(0,r.kt)("h3",{id:"delete-the-changeset"},"Delete the changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}"),"."),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/805C5F3FB78A436FAE37C943471C24AD" -H "accept: \\*/\\*" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD"\n')),(0,r.kt)("p",null,"Sample Response Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (The changeset is deleted successfully.)"))}u.isMDXComponent=!0}}]);