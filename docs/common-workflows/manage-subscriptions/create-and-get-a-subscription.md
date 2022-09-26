---
title: Create and Get a Subscription
description: This workflow sample demonstrates how to retrieve a subscription, as well as create your own.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-da43d1b1-a332-4452-829f-e07a041abc8f?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a subscription, as well as create your own.

1. [Log in.](#log-in)
1. [Get projects.](#get-a-list-of-available-projects)
1. [Get all subscriptions.](#get-a-list-of-available-subscriptions)
1. [Get schedules.](#get-a-list-of-available-schedules)
1. [Get user's ID.](#get-info-for-user)
1. [Create user's email.](#create-a-user-email-address)
1. [Create subscription.](#create-a-new-subscription)
1. [Get information for a specific subscription.](#get-information-on-a-specific-subscription)
1. [Send subscription immediately.](#send-the-specified-subscription-immediately)
1. [Delete the subscription.](#delete-the-subscription)
1. [Delete user email.](#delete-user-email)
1. [Logout.](#close-existing-session-and-logout)

A detailed description of each step of this workflow is listed down below.

## Log in

End Point: `POST /api/auth/login`

This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing `X-MSTR-AuthToken`, the authorization token that will be used in subsequent requests.

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
```

- Request Body

```json
{
  "loginMode": 1,
  "username": "administrator",
  "password": ""
}
```

- Curl

```bash
curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \\
"loginMode":1, \\
"username": "administrator", \\
"password": "" \\
}' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login
```

Sample Response

- Response Headers

```json
{
  "pragma": "no-cache",
  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",
  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
  "date": "Wed, 16 Aug 2017 01:42:31 GMT",
  "expires": "0",
  "content-type": null
}
```

The authorization token "`x-mstr-authtoken`" is returned in the response header. It is used in other endpoints to authenticate the user.

- Response Body: Empty

- Response Code: 204 (Success: No Content)

## Get a list of available projects

End Point: `GET /api/projects`

This endpoint allows the caller to get the list of projects with the MicroStrategy REST Server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/projects
  ```

Sample Response

- Response Body

  ```json
  [
    {
      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
      "name": "MicroStrategy Tutorial",
      "alias": "",
      "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform's rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",
      "status": 0
    },
    {
      "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",
      "name": "Human Resources Analysis Module",
      "alias": "",
      "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",
      "status": 0
    }
  ]
  ```

  The response body contains information for each project that is returned, including the project ID that you will use in later endpoints.

- Response Code: 200 (Success)

## Get a list of available subscriptions

End Point: `GET /api/subscriptions`

This end point returns a list of all subscriptions for a given project that the authenticated user has access to. User will get all the subscriptions from other users if the user has `DssXmlPrivilegesUseScheduleMonitor` or `DssXmlPrivilegesScheduleAdministration` privilege. This endpoint returns the name, ID, and other information about Subscriptions. You must pass the authorization token and the project ID in the request header. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing all subscriptions the user has access to.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json'
  --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions
  ```

Sample Response

- Response Body

  ```json
  {
    "subscriptions": [
      {
        "id": "64E9995E4908CC6BFC6F1998D244FE55",
        "multipleContents": false,
        "name": "Tutorial Home 3/1/2016 3:33:52 PM",
        "editable": true,
        "allowDeliveryChanges": false,
        "allowPersonalizationChanges": false,
        "allowUnsubscribe": false,
        "dateCreated": "2016-03-01T20:33:54+0000",
        "dateModified": "2016-03-01T20:33:54+0000",
        "owner": {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator"
        },
        "schedules": [
          {
            "id": "E24F501E802911E1BBCB892C4924019B",
            "name": "Personal View",
            "type": "unknown"
          }
        ],
        "contents": [
          {
            "id": "D73B9F3411E5C9E00EE20080EFE55B9E",
            "name": "Tutorial Home",
            "type": "document",
            "personalization": {
              "compressed": false,
              "formatMode": "DEFAULT",
              "formatType": "PDF"
            }
          }
        ],
        "recipients": [
          {
            "id": "54F3D26011D2896560009A8E67019608",
            "name": "Administrator",
            "isGroup": false,
            "type": "user",
            "includeType": "TO",
            "childSubscriptionId": "EA9596824F0D65EACF595A9059ED136B"
          }
        ],
        "delivery": {
          "mode": "SHARED_LINK",
          "contactSecurity": false
        }
      }
    ]
  }
  ```

  The response body contains all of the information pertaining to each subscription the user has access to.

  - Response Code: 200 (Success)

## Get a list of available schedules

End Point: `GET /api/schedules`

This endpoint allows the user to retrieve a list of all schedules that they have access to. This endpoint returns the name, ID, and other information about schedules.

:::info

You obtain the authorization token needed to execute the request using `POST /api/auth/login`. You pass the authorization token in the request header.

:::

If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all schedules the user has access to.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json'
  --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' https://demo.microstrategy.com/MicroStrategyLibrary/api/schedules
  ```

Sample Response

- Response Body

  ```json
  {
    "schedules": [
      {
        "name": "All the Time",
        "id": "FF7BB3C811D501F0C00051916B98494F",
        "description": "Starts Friday, January 01, 2010 and ends Sunday, May 30, 2010. The schedule will be triggered every day. 1 hours, 0 minutes",
        "scheduleType": "time_based",
        "scheduleNextDelivery": "2021-08-02T14:00:00+0000",
        "startDate": "2009-12-31",
        "time": {
          "recurrencePattern": "daily",
          "execution": {
            "executionPattern": "repeat",
            "startTime": "00:00:00",
            "stopTime": "23:59:00",
            "repeatInterval": 60
          },
          "daily": {
            "dailyPattern": "day",
            "repeatInterval": 1
          }
        },
        "expired": false,
        "acg": 255
      }
    ]
  }
  ```

  The response body contains the relevant information for each schedule in the list of all available schedules

  - Response Code: 200 (Success)

## Get info for user

End Point: `GET /api/users`

This endpoint allows you to retrieve information for a specific set of users.

:::info

You obtain the authorization token needed to execute the request using `POST /api/auth/login`. You pass the authorization token in the request header.

:::

You identify the set of users to be returned with query parameters that specify the characters that the user name or abbreviation must begin with. You can use other query parameters to limit the results that are returned by specifying a starting point within the results and the maximum number of results that should be returned. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all users that meet the query parameters.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json'
  --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameBegins=MicroStrategy Web User&fields=name,id
  ```

Sample Response

- Response Body

  ```json
  [
    {
      "id": "C1E141E611D603A2100086B3A5E8F8A4",
      "name": "MicroStrategy Web User"
    }
  ]
  ```

- Response Code: 200 (Success)

## Create a user email address

End Point: `POST /api/v2/users/{id}/addresses`

This endpoint allows you to create a new address for a specific user.

:::info

You obtain the authorization token needed to execute the request using `POST /api/auth/login`. You pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request.

:::

You provide the information used to create the new user address in the body parameter of the request - including the name and actual value for the address, whether it is the default address, and the type of delivery and content style. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the newly created address.

Sample Request

- Request Headers

  ```http
  'Accept: application/json
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  ```

- Request Body

  ```json
  {
    "name": "default_email",
    "deliveryMode": "EMAIL",
    "device": "GENERIC_EMAIL",
    "value": "test@yourorganization.com",
    "isDefault": true
  }
  ```

- Curl

  ```bash
  curl -X POST -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' -d '{ "name": "default_email", "deliveryMode": "EMAIL", "device": "GENERIC_EMAIL", "value": "test@yourorganization.com", "isDefault": true }' https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/users/C1E141E611D603A2100086B3A5E8F8A4/addresses
  ```

Sample Response

- Response Body

  ```json
  {
    "addresses": [
      {
        "id": "A778D6BD11E52EFF0BC70080EF357270",
        "name": "admin",
        "deliveryMode": "EMAIL",
        "deviceId": "1D2E6D168A7711D4BE8100B0D04B6F0B",
        "value": "admin@yourorganization.com",
        "isDefault": false
      },
      {
        "id": "394BD5974B65FB3AF894B69C9FFBF2CE",
        "name": "Remote Diagnostics",
        "deliveryMode": "EMAIL",
        "deviceId": "1D2E6D168A7711D4BE8100B0D04B6F0B",
        "value": "diagnostics@microstrategy.com",
        "isDefault": false
      },
      {
        "id": "A4060F8E11EA0BA276EB0080EF356496",
        "name": "Notification device token 2019-11-20T14:32:55.231",
        "deliveryMode": "EMAIL",
        "deviceId": "A74FDF355CED48F1B812B572C835A634",
        "value": "test@yourorganization.com",
        "isDefault": true
      }
    ]
  }
  ```

  - Response Code: 201 (Created)

## Create a new subscription

End Point: `POST /api/subscriptions`

This endpoint allows you to create a new subscription for a given project. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you obtain the project ID using `GET /api/projects`. You provide the information used to create a subscription in the body parameter of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 201 and a response body containing all the information on the newly created subscription.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body

  ```json
  {
    "name": "Example",
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": false,
    "schedules": [
      {
        "id": "3450AE6F4E29E9A6E1075DA93B7062AA"
      }
    ],
    "contents": [
      {
        "id": "E63834A411D5C49EC0000C881FDA1A4F",
        "name": "Unit Tracking by Supplier",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "HTML"
        }
      }
    ],
    "recipients": [
      {
        "id": "54F3D26011D2896560009A8E67019608",
        "type": "user",
        "includeType": "TO"
      }
    ],
    "delivery": {
      "mode": "EMAIL",
      "contactSecurity": false,
      "email": {
        "subject": "Unit Tracking by Supplier",
        "filename": "Unit Tracking by Supplier",
        "sendContentAs": "data",
        "overwriteOlderVersion": false
      }
    }
  }
  ```

- Curl

  ```bash
  curl -X POST -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -d '...' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions
  ```

Sample Response

- Response Body

  ```json
  {
    "id": "0BC64C0AFA4F86A55FB8BEA3332F90B7",
    "multipleContents": false,
    "name": "Example",
    "editable": true,
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": false,
    "dateCreated": "2021-08-03T13:08:47+0000",
    "dateModified": "2021-08-03T13:08:47+0000",
    "owner": {
      "id": "7FC05A65473CE2FD845CE6A1D3F13233",
      "name": "MSTR User"
    },
    "schedules": [
      {
        "id": "3450AE6F4E29E9A6E1075DA93B7062AA",
        "name": "Books Closed",
        "type": "event_based",
        "expired": false
      }
    ],
    "contents": [
      {
        "id": "E63834A411D5C49EC0000C881FDA1A4F",
        "name": "Unit Tracking by Supplier",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "HTML"
        }
      }
    ],
    "recipients": [
      {
        "id": "54F3D26011D2896560009A8E67019608",
        "name": "Administrator",
        "isGroup": false,
        "type": "user",
        "includeType": "TO",
        "childSubscriptionId": "8B1B107C2D4D82C13F1342B7959E9B4D"
      }
    ],
    "delivery": {
      "mode": "EMAIL",
      "contactSecurity": false,
      "email": {
        "subject": "Unit Tracking by Supplier",
        "filename": "Unit Tracking by Supplier",
        "sendContentAs": "data",
        "overwriteOlderVersion": false
      }
    }
  }
  ```

  - Response Code: 201 (Created)

## Get information on a specific subscription

End Point: `GET /api/subscriptions/{id}`

This endpoint returns all of the information on a specific subscription for a given project. This endpoint returns the name, ID, and other information about the Subscription. You obtain the authorization token needed to execute the request using `POST /api/auth/login` and you obtain the project ID using `GET /api/projects`. You retrieve the subscription by specifying the subscription ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the specified subscription.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body: None

- Curl

  ```bash
  curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/0BC64C0AFA4F86A55FB8BEA3332F90B7
  ```

Sample Response

- Response Body

  ```json
  {
    "id": "0BC64C0AFA4F86A55FB8BEA3332F90B7",
    "multipleContents": false,
    "name": "Example",
    "editable": true,
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": false,
    "dateCreated": "2021-08-03T13:08:47+0000",
    "dateModified": "2021-08-03T13:08:47+0000",
    "owner": {
      "id": "7FC05A65473CE2FD845CE6A1D3F13233",
      "name": "MSTR User"
    },
    "schedules": [
      {
        "id": "3450AE6F4E29E9A6E1075DA93B7062AA",
        "name": "Books Closed",
        "type": "event_based",
        "expired": false
      }
    ],
    "contents": [
      {
        "id": "E63834A411D5C49EC0000C881FDA1A4F",
        "name": "Unit Tracking by Supplier",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "HTML"
        }
      }
    ],
    "recipients": [
      {
        "id": "54F3D26011D2896560009A8E67019608",
        "name": "Administrator",
        "isGroup": false,
        "type": "user",
        "includeType": "TO",
        "childSubscriptionId": "8B1B107C2D4D82C13F1342B7959E9B4D"
      }
    ],
    "delivery": {
      "mode": "EMAIL",
      "contactSecurity": false,
      "email": {
        "subject": "Unit Tracking by Supplier",
        "filename": "Unit Tracking by Supplier",
        "sendContentAs": "data",
        "overwriteOlderVersion": false
      }
    }
  }
  ```

- Response Code: 200 (Success)

## Send the specified subscription immediately

End Point: `POST /api/subscriptions/{id}/send`

This endpoint sends the specified subscription immediately. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you obtain the project ID using `GET /api/projects`. You identify the subscription by specifying the subscription ID in the request, you provide the information to send the subscription ID in the path parameter of the request. If the content is prompted and the user wants to update the answers, the user can answer the prompts and then provide content id and instance id as the request body of the call. If the call is successful, the resulting HTTP response returns an HTTP status code of 202 and an empty response body.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body: None

- Curl

```bash
curl -X POST -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/0BC64C0AFA4F86A55FB8BEA3332F90B7/send
```

Sample Response

- Response Body: None

- Response Code: 202 (Accepted)

## Delete the subscription

End Point: `DELETE /api/subscriptions/{id}`

This endpoint allows you to delete/unsubscribe from the specified subscription. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you obtain the project ID using `GET /api/projects`. You delete the subscription by specifying the subscription ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body: None

- Curl

  ```bash
  curl -X DELETE -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/0BC64C0AFA4F86A55FB8BEA3332F90B7
  ```

Sample Response

- Response Body: None

- Response Code: 204 (No Content)

## Delete user email

End Point: `DELETE /api/users/{userID}/addresses/{addressID}`

This endpoint deletes a specific address for a specific user. You obtain the authorization token needed to execute the request using `POST /api/auth/login`. You identify the user and the address by specifying the user ID and address ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  ```

- Request Body: None

- Curl

  ```bash
  curl -X DELETE -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' https://demo.microstrategy.com/MicroStrategyLibrary/api/users/54F3D26011D2896560009A8E67019608/addresses/A4060F8E11EA0BA276EB0080EF356496
  ```

Sample Response

- Response Body: None

- Response Code: 204 (No Content)

## Close existing session and logout

End Point: `POST /api/auth/logout`

This endpoint closes all existing sessions for the authenticated user and logs them out. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  ```

- Request Body: None

- Curl

  ```bash
  curl -X POST -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout
  ```

Sample Response

- Response Body: None

- Response Code: 204 (No Content)
