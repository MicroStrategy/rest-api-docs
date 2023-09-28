---
title: Manage application general settings
description: You can use REST APIs to manage application general settings.
---

<Available since="2021 Update 4" />

You can use REST APIs to manage application general settings.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

:::info

The [DssXmlPrivilegesManageApplication](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesManageApplication) privilege is required to manage an application's general settings.

:::

## Create an application

Let's create a general application named company A.

Here are some important objects explain may help you:

- general

  This object contains a series of general setting fields such as network timeout, custom logging, clear cache, and so on.

- homeScreen

  This object has two modes, `0` on behalf of using the Library screen as home and `1` on behalf of using the document as home. We can customize the document screen through the "homeDocument" field and the library screen through "homeLibrary".

Endpoint: [POST /api/v2/applications](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/createApplication_1)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "6ijq1gm6h441ab73veev05igr"
```

Sample Request Body:

```json
{
  "projectId": "38A062302D4411D28E71006008960167",
  "name": "company A",
  "description": "hello world",
  "type": 78,
  "general": {
    "disableAdvancedSettings": false,
    "disablePreferences": false,
    "networkTimeout": 180,
    "cacheClearMode": 1,
    "clearCacheOnLogout": false,
    "maxLogSize": 500,
    "logLevel": 12,
    "updateInterval": 30
  },
  "homeScreen": {
    "mode": 0,
    "homeDocument": {
      "url": "",
      "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],
      "toolbarMode": 0,
      "toolbarEnabled": true
    },
    "homeLibrary": {
      "contentBundleIds": [],
      "icons": [
        "sidebars",
        "sort_and_filter",
        "search",
        "notifications",
        "multi_select",
        "options"
      ],
      "customizedItems": {
        "my_content": true,
        "subscriptions": true,
        "new_dossier": true,
        "edit_dossier": true,
        "add_library_server": true,
        "data_search": true,
        "hyper_intelligence": true,
        "font_size": true,
        "undo_and_redo": true
      },
      "toolbarMode": 0,
      "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],
      "toolbarEnabled": true,
      "defaultGroupsName": "Default Groups"
    }
  },
  "platforms": ["mobile", "web", "desktop"],
  "applicationPalettes": [],
  "isDefault": false,
  "useConfigPalettes": false
}
```

Sample Curl:

```bash
curl -X 'POST' \
  'http://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: 6ijq1gm6h441ab73veev05igr' \
  -H 'Content-Type: application/json' \
  -d '{
   "projectId":"38A062302D4411D28E71006008960167",
   "name":"company A",
   "description":"hello world",
   "type":78,
   "ownerId":"BC29183744275F2836AC8DB23E2AB756",
   "objectNames":[

   ],
   "parentObjectId":"4B979645463C14EF5A32EF8A032C9AC1",
   "parentId":"4B979645463C14EF5A32EF8A032C9AC1",
   "objectAcl":[
      {
         "deny":false,
         "inheritable":false,
         "rights":255,
         "type":1,
         "trustee":"BC29183744275F2836AC8DB23E2AB756"
      }
   ],
   "general":{
      "disableAdvancedSettings":false,
      "disablePreferences":false,
      "networkTimeout":180,
      "cacheClearMode":1,
      "clearCacheOnLogout":false,
      "maxLogSize":500,
      "logLevel":12,
      "updateInterval":30
   },
   "homeScreen":{
      "mode":0,
      "homeDocument":{
         "url":"",
         "icons":[
            "table_of_contents",
            "bookmarks",
            "reset",
            "filters",
            "comments",
            "share"
         ],
         "toolbarMode":0,
         "toolbarEnabled":true
      },
      "homeLibrary":{
         "contentBundleIds":[

         ],
         "icons":[
            "sidebars",
            "sort_and_filter",
            "search",
            "notifications",
            "multi_select",
            "options"
         ],
         "customizedItems":{
            "my_content":true,
            "subscriptions":true,
            "new_dossier":true,
            "edit_dossier":true,
            "add_library_server":true,
            "data_search":true,
            "hyper_intelligence":true,
            "font_size":true,
            "undo_and_redo":true
         },
         "toolbarMode":0,
         "sidebars":[
            "all",
            "favorites",
            "recents",
            "default_groups",
            "my_groups",
            "options"
         ],
         "toolbarEnabled":true,
         "defaultGroupsName":"Default Groups"
      }
   },
   "platforms":[
      "mobile",
      "web",
      "desktop"
   ],
   "applicationPalettes":[

   ],
   "isDefault":false,
   "useConfigPalettes":false
}'
```

Sample Response Body: N/A

Sample Response Code: 204 (The application has been created successfully.)

## Get an existing application

Next, we want to get the application created above whose id is `856F5276290944F48FCF34DF4AC9737C`. The result will include `objectVersion`, `objectNames`, and `objectAcl` if requested with the parameter `outputFlag=INCLUDE_LOCALE&outputFlag=INCLUDE_ACL`. They are essential for updating applications.

Endpoint: [GET /api/v2/applications/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/getApplication_1)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "dol2gdrd2297743v8kush3nd1e"
```

Sample Curl:

```bash
curl -X 'GET' \
  'http://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications/856F5276290944F48FCF34DF4AC9737C?outputFlag=INCLUDE_LOCALE&outputFlag=INCLUDE_ACL' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: dol2gdrd2297743v8kush3nd1e'
```

Sample Response Body

```json
{
  "id": "856F5276290944F48FCF34DF4AC9737C",
  "projectId": "38A062302D4411D28E71006008960167",
  "name": "company A",
  "description": "hello world",
  "type": 78,
  "dateCreated": "2022-12-01T06:01:13.971+0000",
  "dateModified": "2022-12-01T06:14:19.730+0000",
  "objectVersion": "0805BA3446006A004CEE97A9BEA3EE0A",
  "ownerId": "44622F1542CDBB6DF7E598B23972AC02",
  "objectNames": [
    {
      "localeId": 1033,
      "name": "company A",
      "description": "hello world"
    }
  ],
  "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",
  "parentId": "4B979645463C14EF5A32EF8A032C9AC1",
  "objectAcl": [
    {
      "deny": false,
      "inheritable": false,
      "rights": 255,
      "type": 1,
      "trustee": "44622F1542CDBB6DF7E598B23972AC02"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "294DEDC011D2F1D56000D98E67019608"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "4FF5121411D49BC8C00014894C78604F"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "5F3FAFE011D2D8CC6000CC8E67019608"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "C82C6B1011D2894CC0009D9F29718E4F"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 255,
      "type": 1,
      "trustee": "5F3FAFE111D2D8CC6000CC8E67019608"
    }
  ],
  "general": {
    "disableAdvancedSettings": false,
    "disablePreferences": false,
    "networkTimeout": 180,
    "cacheClearMode": 1,
    "clearCacheOnLogout": false,
    "maxLogSize": 500,
    "logLevel": 12,
    "updateInterval": 30
  },
  "homeScreen": {
    "mode": 0,
    "homeDocument": {
      "url": "",
      "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],
      "toolbarMode": 0,
      "toolbarEnabled": true
    },
    "homeLibrary": {
      "contentBundleIds": [],
      "icons": [
        "sidebars",
        "sort_and_filter",
        "search",
        "notifications",
        "multi_select",
        "options"
      ],
      "customizedItems": {
        "my_content": true,
        "subscriptions": true,
        "new_dossier": true,
        "edit_dossier": true,
        "add_library_server": true,
        "data_search": true,
        "hyper_intelligence": true,
        "font_size": true,
        "undo_and_redo": true
      },
      "toolbarMode": 0,
      "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],
      "toolbarEnabled": true,
      "defaultGroupsName": "Default Groups"
    }
  },
  "platforms": ["mobile", "web", "desktop"],
  "applicationPalettes": [],
  "isDefault": false
}
```

Sample Response Code: 200

## Update an existing application

Now, let us update the properties in the application created above. We should send the request with these objects below and keep the same as what we got.

`objectVersion`, `objectNames`, `objectAcl`

Endpoint: [PUT /api/v2/applications/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/updateApplication)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "dol2gdrd2297743v8kush3nd1e"
```

Sample Request Body:

```json
{
  "id": "856F5276290944F48FCF34DF4AC9737C",
  "projectId": "38A062302D4411D28E71006008960167",
  "name": "company A",
  "description": "hello, company A",
  "type": 78,
  "dateCreated": "2022-12-01T06:01:13.971+0000",
  "dateModified": "2022-12-01T06:14:19.730+0000",
  "objectVersion": "0805BA3446006A004CEE97A9BEA3EE0A",
  "ownerId": "44622F1542CDBB6DF7E598B23972AC02",
  "objectNames": [
    {
      "localeId": 1033,
      "name": "company A",
      "description": "hello world"
    }
  ],
  "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",
  "parentId": "4B979645463C14EF5A32EF8A032C9AC1",
  "objectAcl": [
    {
      "deny": false,
      "inheritable": false,
      "rights": 255,
      "type": 1,
      "trustee": "44622F1542CDBB6DF7E598B23972AC02"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "294DEDC011D2F1D56000D98E67019608"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "4FF5121411D49BC8C00014894C78604F"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "5F3FAFE011D2D8CC6000CC8E67019608"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "C82C6B1011D2894CC0009D9F29718E4F"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 255,
      "type": 1,
      "trustee": "5F3FAFE111D2D8CC6000CC8E67019608"
    }
  ],
  "general": {
    "disableAdvancedSettings": false,
    "disablePreferences": false,
    "networkTimeout": 180,
    "cacheClearMode": 1,
    "clearCacheOnLogout": false,
    "maxLogSize": 500,
    "logLevel": 12,
    "updateInterval": 30
  },
  "homeScreen": {
    "mode": 0,
    "homeDocument": {
      "url": "",
      "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],
      "toolbarMode": 0,
      "toolbarEnabled": true
    },
    "homeLibrary": {
      "contentBundleIds": [],
      "icons": [
        "sidebars",
        "sort_and_filter",
        "search",
        "notifications",
        "multi_select",
        "options"
      ],
      "customizedItems": {
        "my_content": true,
        "subscriptions": true,
        "new_dossier": true,
        "edit_dossier": true,
        "add_library_server": true,
        "data_search": true,
        "hyper_intelligence": true,
        "font_size": true,
        "undo_and_redo": true
      },
      "toolbarMode": 0,
      "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],
      "toolbarEnabled": true,
      "defaultGroupsName": "Default Groups"
    }
  },
  "platforms": ["mobile", "web", "desktop"],
  "applicationPalettes": [],
  "isDefault": false
}
```

Sample Curl:

```bash
curl -X 'PUT' \
  'http://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications/856F5276290944F48FCF34DF4AC9737C' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: dol2gdrd2297743v8kush3nd1e' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "856F5276290944F48FCF34DF4AC9737C",
  "projectId": "38A062302D4411D28E71006008960167",
  "name": "company A",
  "description": "hello, company A",
  "type": 78,
  "dateCreated": "2022-12-01T06:01:13.971+0000",
  "dateModified": "2022-12-01T06:14:19.730+0000",
  "objectVersion": "0805BA3446006A004CEE97A9BEA3EE0A",
  "ownerId": "44622F1542CDBB6DF7E598B23972AC02",
  "objectNames": [
    {
      "localeId": 1033,
      "name": "company A",
      "description": "hello world"
    }
  ],
  "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",
  "parentId": "4B979645463C14EF5A32EF8A032C9AC1",
  "objectAcl": [
    {
      "deny": false,
      "inheritable": false,
      "rights": 255,
      "type": 1,
      "trustee": "44622F1542CDBB6DF7E598B23972AC02"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "294DEDC011D2F1D56000D98E67019608"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "4FF5121411D49BC8C00014894C78604F"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "5F3FAFE011D2D8CC6000CC8E67019608"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 5,
      "type": 1,
      "trustee": "C82C6B1011D2894CC0009D9F29718E4F"
    },
    {
      "deny": false,
      "inheritable": false,
      "rights": 255,
      "type": 1,
      "trustee": "5F3FAFE111D2D8CC6000CC8E67019608"
    }
  ],
  "general": {
    "disableAdvancedSettings": false,
    "disablePreferences": false,
    "networkTimeout": 180,
    "cacheClearMode": 1,
    "clearCacheOnLogout": false,
    "maxLogSize": 500,
    "logLevel": 12,
    "updateInterval": 30
  },
  "homeScreen": {
    "mode": 0,
    "homeDocument": {
      "url": "",
      "icons": [
        "table_of_contents",
        "bookmarks",
        "reset",
        "filters",
        "comments",
        "share"
      ],
      "toolbarMode": 0,
      "toolbarEnabled": true
    },
    "homeLibrary": {
      "contentBundleIds": [],
      "icons": [
        "sidebars",
        "sort_and_filter",
        "search",
        "notifications",
        "multi_select",
        "options"
      ],
      "customizedItems": {
        "my_content": true,
        "subscriptions": true,
        "new_dossier": true,
        "edit_dossier": true,
        "add_library_server": true,
        "data_search": true,
        "hyper_intelligence": true,
        "font_size": true,
        "undo_and_redo": true
      },
      "toolbarMode": 0,
      "sidebars": [
        "all",
        "favorites",
        "recents",
        "default_groups",
        "my_groups",
        "options"
      ],
      "toolbarEnabled": true,
      "defaultGroupsName": "Default Groups"
    }
  },
  "platforms": [
    "mobile",
    "web",
    "desktop"
  ],
  "applicationPalettes": [],
  "isDefault": false
}'
```

Sample Response Body: N/A

Sample Response Code: 204 (The application has been updated successfully.)

## Delete an existing application

We can also delete the application created above whose id is `856F5276290944F48FCF34DF4AC9737C`.

Endpoint: [DELETE /api/v2/applications/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/removeApplication)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "dol2gdrd2297743v8kush3nd1e"
```

Sample Curl:

```bash
curl -X 'DELETE' \
  'http://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications/856F5276290944F48FCF34DF4AC9737C' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: dol2gdrd2297743v8kush3nd1e'
```

Sample Response Body: N/A

Sample Response Code: 204 (The application has been deleted successfully.)

## Get application list

We can get all existing applications.

Endpoint: [GET /api/v2/applications](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/getApplications)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "dol2gdrd2297743v8kush3nd1e"
```

Sample Curl:

```bash
curl -X 'GET' \
'http://10.27.69.39:8080/MicroStrategyLibrary/api/v2/applications' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: dol2gdrd2297743v8kush3nd1e'
```

Sample Response Body:

```json
{
  "applications": [
    {
      "id": "BEAA91CE8C854AC6A2C580CF283E0C99",
      "projectId": "38A062302D4411D28E71006008960167",
      "name": "Copy of haoxu_1012_4",
      "description": "123111111aaaqqq",
      "type": 78,
      "dateCreated": "2022-10-17T11:20:07.291+0000",
      "dateModified": "2022-10-17T11:23:44.096+0000",
      "objectVersion": "BE40BA334A68A54CDDA25FB3EA943B22",
      "ownerId": "E01FC9A147ED7FEAECF113ABB26AB83B",
      "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",
      "parentId": "4B979645463C14EF5A32EF8A032C9AC1",
      "general": {
        "disableAdvancedSettings": false,
        "disablePreferences": false,
        "networkTimeout": 180,
        "cacheClearMode": 1,
        "clearCacheOnLogout": false,
        "maxLogSize": 500,
        "logLevel": 12,
        "updateInterval": 30
      },
      "homeScreen": {
        "mode": 0,
        "homeDocument": {
          "url": "",
          "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],
          "toolbarMode": 0,
          "toolbarEnabled": true
        },
        "homeLibrary": {
          "contentBundleIds": [],
          "icons": [
            "sidebars",
            "sort_and_filter",
            "search",
            "notifications",
            "multi_select",
            "options"
          ],
          "customizedItems": {
            "my_content": true,
            "subscriptions": true,
            "new_dossier": true,
            "edit_dossier": true,
            "add_library_server": true,
            "data_search": true,
            "hyper_intelligence": true,
            "font_size": true,
            "undo_and_redo": true
          },
          "toolbarMode": 0,
          "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],
          "toolbarEnabled": true,
          "defaultGroupsName": "Default Groups"
        }
      },
      "platforms": ["mobile", "web", "desktop"],
      "applicationPalettes": [],
      "isDefault": false,
      "emailSettings": {
        "enabled": true,
        "hostPortal": "",
        "showBrandingImage": true,
        "showBrowserButton": true,
        "showMobileButton": true,
        "showReminder": true,
        "showSentBy": true,
        "sentByText": "&lt;h1&gt;123&lt;/h1&gt;&lt;br&gt;",
        "showSocialMedia": false
      }
    },

    {
      "id": "81F38D0F62994E35A4AD016B4931B511",
      "projectId": "38A062302D4411D28E71006008960167",
      "name": "Smit_test1",
      "type": 78,
      "dateCreated": "2022-08-18T14:39:23.769+0000",
      "dateModified": "2022-08-29T08:30:52.832+0000",
      "objectVersion": "EFDCCFFA4800970D8DA89EB961C6F9B9",
      "ownerId": "AD96A895446E227989BDCEBCEBFD57B5",
      "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",
      "parentId": "4B979645463C14EF5A32EF8A032C9AC1",
      "general": {
        "disableAdvancedSettings": false,
        "disablePreferences": false,
        "networkTimeout": 180,
        "cacheClearMode": 1,
        "clearCacheOnLogout": false,
        "maxLogSize": 500,
        "logLevel": 12,
        "updateInterval": 30
      },
      "homeScreen": {
        "mode": 0,
        "homeDocument": {
          "url": "",
          "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],
          "toolbarMode": 0,
          "toolbarEnabled": true
        },
        "homeLibrary": {
          "contentBundleIds": [],
          "icons": [
            "sidebars",
            "sort_and_filter",
            "search",
            "notifications",
            "multi_select",
            "options"
          ],
          "customizedItems": {
            "my_content": true,
            "subscriptions": true,
            "new_dossier": true,
            "edit_dossier": true,
            "add_library_server": true,
            "data_search": true,
            "hyper_intelligence": true,
            "font_size": true,
            "undo_and_redo": true,
            "insights": true
          },
          "toolbarMode": 0,
          "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],
          "toolbarEnabled": true,
          "defaultGroupsName": "Default Groups"
        }
      },
      "platforms": ["mobile", "web", "desktop"],
      "applicationPalettes": [],
      "isDefault": false,
      "emailSettings": {
        "enabled": true,
        "hostPortal": "",
        "showBrandingImage": true,
        "showBrowserButton": true,
        "showMobileButton": true,
        "showReminder": true,
        "showSentBy": true,
        "sentByText": "Smit",
        "showSocialMedia": true
      }
    },
    {
      "id": "6EA250C2E0AA446FB1DC4154AC91C7B1",
      "projectId": "38A062302D4411D28E71006008960167",
      "name": "zzhou_1018_disabled",
      "type": 78,
      "dateCreated": "2022-10-18T04:03:01.107+0000",
      "dateModified": "2022-10-18T04:03:01.107+0000",
      "objectVersion": "5C159F894EAB7F0F1457E8997ACE514F",
      "ownerId": "6B8437A34B2A2BB16FA0BE815D9B2127",
      "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",
      "parentId": "4B979645463C14EF5A32EF8A032C9AC1",
      "general": {
        "disableAdvancedSettings": false,
        "disablePreferences": false,
        "networkTimeout": 180,
        "cacheClearMode": 1,
        "clearCacheOnLogout": false,
        "maxLogSize": 500,
        "logLevel": 12,
        "updateInterval": 30
      },
      "homeScreen": {
        "mode": 0,
        "homeDocument": {
          "url": "",
          "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],
          "toolbarMode": 0,
          "toolbarEnabled": true
        },
        "homeLibrary": {
          "contentBundleIds": [],
          "icons": [
            "sidebars",
            "sort_and_filter",
            "search",
            "notifications",
            "multi_select",
            "options"
          ],
          "customizedItems": {
            "my_content": true,
            "subscriptions": true,
            "new_dossier": true,
            "edit_dossier": true,
            "add_library_server": true,
            "data_search": true,
            "hyper_intelligence": true,
            "font_size": true,
            "undo_and_redo": true,
            "insights": true
          },
          "toolbarMode": 0,
          "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],
          "toolbarEnabled": true,
          "defaultGroupsName": "Default Groups"
        }
      },
      "platforms": ["mobile", "web", "desktop"],
      "applicationPalettes": [],
      "isDefault": false,
      "emailSettings": {
        "enabled": false,
        "hostPortal": "",
        "showBrandingImage": true,
        "showBrowserButton": true,
        "showMobileButton": true,
        "showReminder": true,
        "showSentBy": true,
        "sentByText": "MicroStrategy Inc.",
        "showSocialMedia": true
      }
    }
  ]
}
```

Sample Response Code: 200
