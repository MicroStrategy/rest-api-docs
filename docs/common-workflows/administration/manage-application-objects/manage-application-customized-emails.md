---
title: Manage application customized emails
description: You can use REST APIs to manage the customized emails in application.
---

<Available since="2021 Update 8" />

You can use REST APIs to manage the customized emails in application.

In this sample workflow, we want to create an application with customized email and then change the email setting.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Create an application with customized email

The following table lists important fields in the email settings.

| Location | Field                    | Description                                                                                                                                                                                                                                                                                                                                            |
| -------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-AuthToken         | The authorization token                                                                                                                                                                                                                                                                                                                                |
| body     | emailSettings.enabled    | Whether to enable the customized email                                                                                                                                                                                                                                                                                                                 |
| body     | emailSettings.hostPortal | In a client application that embeds a dossier page, if you want the share link in the embedded dossier page to be the client application URL instead of the embedded dossier URL, you need to configure this field. More details could be found [here](https://microstrategy.github.io/embedding-sdk-docs/add-functionality/use-custom-dossier-link/). |
| body     | emailSettings.content    | The customized email content for different templates. The content for both subject and body should be the plain text. Some placeholders like dossier name, sender name, recipient name are supported.                                                                                                                                                  |
| body     | emailSettings.sender     | The sender info which can specify the display name and address in the distribution email.                                                                                                                                                                                                                                                              |

Let's create an application with the customized email for company A. The email will contain the customized subject, body, sender info, branding image, host web portal, action buttons with different styles, and social media area. Make sure the `enabled` field is true, otherwise the original email templates will be used.

Endpoint: [POST /api/v2/applications](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/createApplication_1)

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
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: hkr5bl7itn13hs5ml5dbaufs73' \
  -H 'Content-Type: application/json' \
  -d '{
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
}'
```

Sample Response Body: N/A

Sample Response Code: 204 (The application has been created successfully.)

## Update the customized email setting for an existing application

Next, we want to update the application with id `EAF29916C4E147CCAD976C6AB6F12632` to hide the branding info in the distribution email. Specifically, we will hide the branding image, send by section, and the social media area. Note that all other fields in the application should be sent, otherwise they will be set to empty. You could use the endpoint [GET /api/v2/applications/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/getApplication_1) with the output flag for the whole definition of this application. Refer to [update an existing application](manage-application-general-settings.md#update-an-existing-application) for details.

Endpoint: [PUT /api/v2/applications/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/updateApplication)

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
