---
title: Manage application themes
description: You can use REST API requests to manage application themes.
---

<Available since="2021 Update 9" />

You can use REST APIs to manage the customized themes in application.

In this sample workflow, we want to create an application with customized theme and then change the
theme properties

:::info

Get the authorization token needed to execute the request with
[POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

:::info

The [DssXmlPrivilegesManageApplication](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesManageApplication) privilege is required to manage application themes.

:::

## Create an application with customized theme

The following table lists important fields in the theme object.

| Location | Field            | Description                                                                                           |
| -------- | ---------------- | ----------------------------------------------------------------------------------------------------- |
| header   | X-MSTR-AuthToken | The authorization token                                                                               |
| body     | theme.logos      | set of image urls to customize library web, library mobile icons and favicon                          |
| body     | theme.color      | set of hexadecimal values to customize background and text colors of different library web components |

For more information about the application, see
[Manage Application](https://www2.microstrategy.com/producthelp/Current/MicroStrategy/en-us/Content/custom_application.htm?tocpath=Create%20an%20Application%7C_____0#general).

Let's create an application with the customized theme for company A. The theme can contain the
following properties with fields as described below

- Logos (optional) -

  - `web` - An object describing a customized library web Logo
  - `favicon` - An object describing a customized library web Favicon
  - `mobile` - An object describing a customized library web Favicon

  Each of the above logo object will have two mandatory fields

  - `type` - this can have only value `URL` for now. More types may be added in the future
  - `value` - a string which refers to an image url

- Color (optional) -
  - `selectedTheme` - can be either one of the predefined color themes i.e `light`, `dark`, `red`,
    `green`, `yellow`, `blue` and `darkBlue` OR it can be a user defined custom theme.
  - `formatting` - includes properties like `toolbarFill`, `toolbarColor`, `sidebarFill`,
    `sidebarColor`,`panelFill`, `canvasFill`, `buttonColor` etc. for the POST and PUT endpoints, the
    formatting property can be omitted as the rest server will populate the values automatically
    before saving the object for predefined color themes.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "hkr5bl7itn13hs5ml5dbaufs73"
```

Sample Request Body:

```json
{
  "name": "Application for Company A",
  "description": "This is the application for the Company A.",
  "objectNames": [],
  "objectAcl": [],
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
    },
    "theme" {
      "logos": {
        "web": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/web.png"
        },
        "favicon": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/favicon.png"
        },
        "mobile": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/mobile.png"
        }
      },
      "color": {
        "selectedTheme": "custom",
        "formatting": {
          "toolbarFill": "#FFFFFF",
          "toolbarColor": "#29313B",
          "sidebarFill": "#FFFFFF",
          "sidebarColor": "#29313B",
          "sidebarActiveFill": "#E9F2FE",
          "sidebarActiveColor": "#29313B",
          "panelFill": "#F7F8FA",
          "panelColor": "#29313B",
          "accentFill": "#0E6FF9",
          "notificationBadgeFill": "#D9232E"
        }
      }
    }
  },
  "emailSettings": {
    "enabled": true,
    "hostPortal": "http://host-portal-of-company-A.com",
    "showBrandingImage": true,
    "showBrowserButton": true,
    "showMobileButton": true,
    "showButtonDescription": false,
    "showReminder": true,
    "showSentBy": true,
    "sentByText": "Sent By Company A",
    "showSocialMedia": true,
    "content": {
      "SHARE_BOOKMARK": {
        "subject": "Custom SHARE_BOOKMARK subject. DossierName={&DossierName} ",
        "body": "Custom SHARE_BOOKMARK body. RecipientName={&RecipientName}, SenderName={&SenderName} BookmarkCount={&BookmarkCount}"
      },
      "USER_MENTION": {
        "subject": "Custom USER_MENTION subject. DossierName={&DossierName} ",
        "body": "Custom USER_MENTION body. RecipientName={&RecipientName}, SenderName={&SenderName} MentionTarget={&MentionTarget}"
      },
      "SHARE_DOSSIER": {
        "subject": "Custom SHARE_DOSSIER subject. DossierName={&DossierName} ",
        "body": "Custom SHARE_DOSSIER body. RecipientName={&RecipientName}, SenderName={&SenderName} BookmarkCount={&BookmarkCount}"
      },
      "MEMBER_ADDED": {
        "subject": "Custom MEMBER_ADDED subject.",
        "body": "Custom MEMBER_ADDED body. RecipientName={&RecipientName}, SenderName={&SenderName}"
      }
    },
    "sender": {
      "displayName": "Company A",
      "address": "email_service@company-a.com"
    },
    "brandingImage": {
      "url": "https://company-A.com/logo.png"
    },
    "button": {
      "browserButtonStyle": {
        "backgroundColor": "#198556",
        "fontColor": "#FFFFFF",
        "text": "Custom button1"
      },
      "mobileButtonStyle": {
        "backgroundColor": "#198556",
        "fontColor": "#FFFFFF",
        "text": "Custom button2"
      },
      "mobileButtonLinkType": "DEFAULT",
      "description": "Custom button description"
    },
    "reminder": {
      "text": "Custom Reminder Text. NewNotificationCount={&NewNotificationCount}",
      "linkText": "View Custom Link"
    },
    "socialMedia": {
      "showFacebook": true,
      "facebookLink": "companyA",
      "showTwitter": false,
      "showLinkedIn": false,
      "showYouTube": false
    }
  }
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
      },
      "theme" {
      "logos": {
        "web": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/web.png"
        },
        "favicon": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/favicon.png"
        },
        "mobile": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/mobile.png"
        }
      },
      "color": {
        "selectedTheme": "custom",
        "formatting": {
          "toolbarFill": "#FFFFFF",
          "toolbarColor": "#29313B",
          "sidebarFill": "#FFFFFF",
          "sidebarColor": "#29313B",
          "sidebarActiveFill": "#E9F2FE",
          "sidebarActiveColor": "#29313B",
          "panelFill": "#F7F8FA",
          "panelColor": "#29313B",
          "accentFill": "#0E6FF9",
          "notificationBadgeFill": "#D9232E"
        }
      }
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

Next, we want to get the application created above whose id is `856F5276290944F48FCF34DF4AC9737C`.
The result will include `objectVersion`, `objectNames`, and `objectAcl` if requested with the
parameter `outputFlag=INCLUDE_LOCALE&outputFlag=INCLUDE_ACL`. They are essential for updating
applications.

Endpoint: [GET /api/v2/applications/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/getApplication_1)

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
    },
    "theme" {
      "logos": {
        "web": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/web.png"
        },
        "favicon": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/favicon.png"
        },
        "mobile": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/mobile.png"
        }
      },
      "color": {
        "selectedTheme": "custom",
        "formatting": {
          "toolbarFill": "#FFFFFF",
          "toolbarColor": "#29313B",
          "sidebarFill": "#FFFFFF",
          "sidebarColor": "#29313B",
          "sidebarActiveFill": "#E9F2FE",
          "sidebarActiveColor": "#29313B",
          "panelFill": "#F7F8FA",
          "panelColor": "#29313B",
          "accentFill": "#0E6FF9",
          "notificationBadgeFill": "#D9232E"
        }
      }
    }
  },
  "platforms": ["mobile", "web", "desktop"],
  "applicationPalettes": [],
  "isDefault": false
}
```

Sample Response Code: 200

## Update the customized theme object for an existing application

Next, we want to update the application with id `EAF29916C4E147CCAD976C6AB6F12632` to change the
color theme from `custom` to a predefined color theme `red`. You could use the endpoint
[GET /api/v2/applications/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/getApplication_1)
with the output flag for the whole definition of this application. Refer to
[update an existing application](manage-application-general-settings.md#update-an-existing-application)
for details.

As mentioned previously, we do not need to include the `formatting` property as part of the `color`
object if updating with a predefined color theme.

Endpoint: [PUT /api/v2/applications/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/updateApplication)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "hkr5bl7itn13hs5ml5dbaufs73"
```

Sample Request Body:

```json
{
  "name": "Application for Company A",
  "description": "This is the application for the Company A.",
  "type": 78,
  "dateCreated": "2022-11-23T08:33:01.438+0000",
  "dateModified": "2022-11-23T08:33:01.438+0000",
  "objectVersion": "045406B843595EFF1CF08AB05B7BEA97",
  "ownerId": "54F3D26011D2896560009A8E67019608",
  "objectNames": [
    {
      "localeId": 1033,
      "name": "Application for Company A",
      "description": "This is the application for the Company A."
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
      "trustee": "54F3D26011D2896560009A8E67019608"
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
    },
    "theme" {
      "logos": {
        "web": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/web.png"
        },
        "favicon": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/favicon.png"
        },
        "mobile": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/mobile.png"
        }
      },
      "color": {
        "selectedTheme": "red"
      }
    }
  },
  "applicationPalettes": [],
  "emailSettings": {
    "enabled": true,
    "showBrandingImage": false,
    "showBrowserButton": true,
    "showMobileButton": true,
    "showButtonDescription": false,
    "showReminder": true,
    "showSentBy": false,
    "showSocialMedia": false,
    "content": {
      "SHARE_BOOKMARK": {
        "subject": "Custom SHARE_BOOKMARK subject. DossierName={&amp;DossierName} ",
        "body": "Custom SHARE_BOOKMARK body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} BookmarkCount={&amp;BookmarkCount}"
      },
      "USER_MENTION": {
        "subject": "Custom USER_MENTION subject. DossierName={&amp;DossierName} ",
        "body": "Custom USER_MENTION body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} MentionTarget={&amp;MentionTarget}"
      },
      "SHARE_DOSSIER": {
        "subject": "Custom SHARE_DOSSIER subject. DossierName={&amp;DossierName} ",
        "body": "Custom SHARE_DOSSIER body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} BookmarkCount={&amp;BookmarkCount}"
      },
      "MEMBER_ADDED": {
        "subject": "Custom MEMBER_ADDED subject.",
        "body": "Custom MEMBER_ADDED body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName}"
      }
    },
    "sender": {
      "displayName": "Company A",
      "address": "email_service@company-a.com"
    },
    "button": {
      "browserButtonStyle": {
        "backgroundColor": "#198556",
        "fontColor": "#FFFFFF",
        "text": "Custom button1"
      },
      "mobileButtonStyle": {
        "backgroundColor": "#198556",
        "fontColor": "#FFFFFF",
        "text": "Custom button2"
      },
      "mobileButtonLinkType": "DEFAULT",
      "description": "Custom button description"
    },
    "reminder": {
      "text": "Custom Reminder Text. NewNotificationCount={&amp;NewNotificationCount}",
      "linkText": "View Custom Link"
    },
    "socialMedia": {
      "showFacebook": false,
      "showTwitter": false,
      "showLinkedIn": false,
      "showYouTube": false
    }
  }
}
```

Sample Curl:

```bash
curl -X 'PUT' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications/EAF29916C4E147CCAD976C6AB6F12632' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: hkr5bl7itn13hs5ml5dbaufs73' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Application for Company A",
  "description": "This is the application for the Company A.",
  "type": 78,
  "dateCreated": "2022-11-23T08:33:01.438+0000",
  "dateModified": "2022-11-23T08:33:01.438+0000",
  "objectVersion": "045406B843595EFF1CF08AB05B7BEA97",
  "ownerId": "54F3D26011D2896560009A8E67019608",
  "objectNames": [
    {
      "localeId": 1033,
      "name": "Application for Company A",
      "description": "This is the application for the Company A."
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
      "trustee": "54F3D26011D2896560009A8E67019608"
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
    },
    "theme" {
      "logos": {
        "web": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/web.png"
        },
        "favicon": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/favicon.png"
        },
        "mobile": {
          "type": "URL",
          "value": "https://host-portal-of-company-A.com/images/mobile.png"
        }
      },
      "color": {
        "selectedTheme": "red"
      }
    }
  },
  "applicationPalettes": [],
  "emailSettings": {
    "enabled": true,
    "showBrandingImage": false,
    "showBrowserButton": true,
    "showMobileButton": true,
    "showButtonDescription": false,
    "showReminder": true,
    "showSentBy": false,
    "showSocialMedia": false,
    "content": {
      "SHARE_BOOKMARK": {
        "subject": "Custom SHARE_BOOKMARK subject. DossierName={&amp;DossierName} ",
        "body": "Custom SHARE_BOOKMARK body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} BookmarkCount={&amp;BookmarkCount}"
      },
      "USER_MENTION": {
        "subject": "Custom USER_MENTION subject. DossierName={&amp;DossierName} ",
        "body": "Custom USER_MENTION body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} MentionTarget={&amp;MentionTarget}"
      },
      "SHARE_DOSSIER": {
        "subject": "Custom SHARE_DOSSIER subject. DossierName={&amp;DossierName} ",
        "body": "Custom SHARE_DOSSIER body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} BookmarkCount={&amp;BookmarkCount}"
      },
      "MEMBER_ADDED": {
        "subject": "Custom MEMBER_ADDED subject.",
        "body": "Custom MEMBER_ADDED body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName}"
      }
    },
    "sender": {
      "displayName": "Company A",
      "address": "email_service@company-a.com"
    },
    "button": {
      "browserButtonStyle": {
        "backgroundColor": "#198556",
        "fontColor": "#FFFFFF",
        "text": "Custom button1"
      },
      "mobileButtonStyle": {
        "backgroundColor": "#198556",
        "fontColor": "#FFFFFF",
        "text": "Custom button2"
      },
      "mobileButtonLinkType": "DEFAULT",
      "description": "Custom button description"
    },
    "reminder": {
      "text": "Custom Reminder Text. NewNotificationCount={&amp;NewNotificationCount}",
      "linkText": "View Custom Link"
    },
    "socialMedia": {
      "showFacebook": false,
      "showTwitter": false,
      "showLinkedIn": false,
      "showYouTube": false
    }
  }
}'
```

Sample Response Body: N/A

Sample Response Code: 204 (The application has been updated successfully.)
