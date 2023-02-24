---
title: Create subscription with prompted content
description: This workflow sample demonstrates how to create a prompted subscription.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-4fce986e-f37b-4fb8-94ff-b0978d1ef849?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a prompted subscription.

1. [Log in.](#log-in)
1. [Get projects.](#get-a-list-of-available-projects)
1. [Create a report instance and answer prompts.](#create-a-report-instance-and-answer-its-prompts)
1. [Get user's ID.](#get-info-for-user)
1. [Create user's email.](#create-a-user-email-address)
1. [Create subscription.](#create-a-new-subscription)
1. [Send subscription now.](#send-the-specified-subscription-immediately)
1. [Delete the subscription.](#delete-the-subscription)
1. [Delete the email.](#delete-the-user-address)
1. [Logout.](#close-existing-session-and-logout)

A detailed description of each step of this workflow is listed down below.

## Log in

Endpoint: [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)

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
  "x-mstr-authtoken": "{AuthToken}",
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

Endpoint: [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1)

This endpoint allows the caller to get the list of projects with the MicroStrategy REST Server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: {AuthToken}'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: {AuthToken}'  https://demo.microstrategy.com/MicroStrategyLibrary/api/projects
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

## Create a report instance and answer its prompts

This workflow is covered in detail under /Common-Workflows/Manage-Prompt-Objects/Prompt-Types/. We will find a prompted report, instantiate it, and answer its prompts for use in a subscription. We use the Auth Token, obtained from `POST /api/auth/login` along with the project id of the tutorial project obtained from `GET /api/projects` to search for a report.

Find a report: `GET /api/searches/results?name=Actual%20vs.%20Forecast&type=3` Create report instance: `POST /api/reports/{reportId}/instances` Get prompts associated with report instance: `GET /api/reports/{reportId}/instances/{instanceId}/prompts` Get available answers for first prompt: `GET /api/reports/{reportId}/instances/{instanceId}/prompts/{promptKey}/elements` Get available answers for second prompt: `GET /api/reports/{reportId}/instances/{instanceId}/prompts/{promptKey}/elements` Answer the prompts: `POST /api/reports/{reportId}/instances`

Save the report id and instance id for use with the subscription.

## Get info for user

Endpoint: [GET /api/users](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers)

This endpoint allows you to retrieve information for a specific set of users. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. You identify the set of users to be returned with query parameters that specify the characters that the user name or abbreviation must begin with. You can use other query parameters to limit the results that are returned by specifying a starting point within the results and the maximum number of results that should be returned. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all users that meet the query parameters.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: {AuthToken}'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json'
  --header 'X-MSTR-AuthToken: {AuthToken}' https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameBegins=MicroStrategy Web User&fields=name,id
  ```

Sample Response

- Response Body

  ```json
  [
    {
      "id": "",
      "name": "MicroStrategy Web User"
    }
  ]
  ```

## Create a user email address

Endpoint: [POST /api/users/{id}/addresses](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createNewAddress)

This endpoint allows you to create a new address for a specific user. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request. You provide the information used to create the new user address in the body parameter of the request - including the name and actual value for the address, whether it is the default address, and the type of delivery and content style. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the newly created address.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: {AuthToken}'
  ```

- Request Body

  ```json
  {
    "name": "default_email",
    "deliveryMode": "EMAIL",
    "device": "GENERIC_EMAIL",
    "value": "user@test.email.com",
    "isDefault": true
  }
  ```

- Curl

  ```bash
  curl -X POST -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/users/{userId}/addresses' \ --header 'X-MSTR-AuthToken: {AuthToken}' \ --header 'Content-Type: application/json' \ --data-raw '{ "name": "default_email", "deliveryMode": "EMAIL", "device": "GENERIC_EMAIL", "value": "user@test.email.com", "isDefault": true }'
  ```

Sample Response

- Response Body

  ```json
  {
    "addresses": [
      {
        "id": "DE83FC6FBA49338EDF075DA65B46A5A5",
        "name": "default_email",
        "deliveryMode": "EMAIL",
        "deviceId": "1D2E6D168A7711D4BE8100B0D04B6F0B",
        "value": "user@test.email.com",
        "isDefault": true
      },
      {
        "id": "DAB285532C1D4659B89C9E224CA8E8E2",
        "name": "Office Address",
        "deliveryMode": "EMAIL",
        "deviceId": "719D165ADFFE4A4D804E93D7A0C6CDE7",
        "value": "user@yourorganization.com",
        "isDefault": false
      },
      {
        "id": "593571F4551E437A8D8A9358AB5CD7C4",
        "name": "Shared Drive",
        "deliveryMode": "EMAIL",
        "deviceId": "18F9613B681E4E4FA671D1AED6B7B375",
        "value": "C:\\Program Files\\MicroStrategy\\Analytics Modules",
        "isDefault": true
      }
    ]
  }
  ```

## Create a new subscription

Endpoint: [POST /api/subscriptions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/createSubscription)

This endpoint allows you to create a new subscription for a given project. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you obtain the project ID using `GET /api/projects`. You provide the information used to create a subscription in the body parameter of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 201 and a response body containing all the information on the newly created subscription.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: {AuthToken}'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body

  ```json
  {
    "name": "Prompt Example Subscription",
    "editable": true,
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
        "id": "{{reportId}}",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "HTML",
          "prompt": {
            "enabled": true,
            "instanceId": "{{instanceId}}"
          }
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
        "subject": "Actual vs. Forecast Performance",
        "filename": "Actual vs. Forecast Performance",
        "sendContentAs": "data",
        "overwriteOlderVersion": false
      }
    }
  }
  ```

- Curl

```bash
curl -X POST -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions' \
    --header 'X-MSTR-AuthToken: {AuthToken}' \
    --header 'Content-Type: application/json' \
    --data-raw '{ "name": "Prompt Example Subscription", "editable": true,
    "allowDeliveryChanges": false, "allowPersonalizationChanges": false,
    "allowUnsubscribe": false, "schedules": [ { "id":
    "3450AE6F4E29E9A6E1075DA93B7062AA" } ], "contents": [ { "id": "{{reportId}}",
    "type": "report", "personalization": { "compressed": false, "formatMode":
    "CURRENT_PAGE", "viewMode": "BOTH", "formatType": "HTML", "prompt": {
    "enabled": true, "instanceId": "{{instanceId}}" } }

        }
    ],
    "recipients": [
        {
            "id": "54F3D26011D2896560009A8E67019608",
            "type": "user",
            "includeType":"TO"

        }
    ],
    "delivery": {
        "mode": "EMAIL",
        "contactSecurity": false,
        "email": {
            "subject": "Actual vs. Forecast Performance",
            "filename": "Actual vs. Forecast Performance",
            "sendContentAs": "data",
            "overwriteOlderVersion": false
        }
    }
    }'
```

Sample Response

- Response Body

  ```json
  {
    "id": "06BB2E9E8E4494F124253AA377AECC1E",
    "multipleContents": false,
    "name": "Prompt Example Subscription",
    "editable": true,
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": false,
    "dateCreated": "2021-08-03T20:37:31+0000",
    "dateModified": "2021-08-03T20:37:31+0000",
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
        "id": "9B5802154BB9F7E388B04480F882F6CF",
        "name": "Actual vs. Forecast Performance",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "HTML",
          "prompt": {
            "enabled": true
          }
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
        "childSubscriptionId": "8C1F55751145A6DEBC36ECA879025BC5"
      }
    ],
    "delivery": {
      "mode": "EMAIL",
      "contactSecurity": false,
      "email": {
        "subject": "Actual vs. Forecast Performance",
        "filename": "Actual vs. Forecast Performance",
        "sendContentAs": "data",
        "overwriteOlderVersion": false
      }
    }
  }
  ```

## Send the specified subscription immediately

Endpoint: [POST /api/subscriptions/{id}/send](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/sendSubscription)

This endpoint sends the specified subscription immediately. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you obtain the project ID using `GET /api/projects`. You identify the subscription by specifying the subscription ID in the request, you provide the information to send the subscription ID in the path parameter of the request. If the content is prompted and the user wants to update the answers, the user can answer the prompts and then provide content id and instance id as the request body of the call. If the call is successful, the resulting HTTP response returns an HTTP status code of 202 and an empty response body.

Sample Request

- Request Headers

  ```http
  'X-MSTR-AuthToken: {AuthToken}'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  'Content-Type: application/json'
  ```

- Request Body

  ```json
  {
    "contentId": "{reportId}",
    "instanceId": "{instanceId}"
  }
  ```

- Curl

  ```bash
  curl -X POST -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/{subId}/send' \ --header 'X-MSTR-AuthToken: {AuthToken}' \ --header 'Content-Type: application/json' \ --data-raw ' { "contentId": "{reportId}", "instanceId": "{instanceId}" }'
  ```

Sample Response

- Response Body

  ```json
  {
    "id": "06BB2E9E8E4494F124253AA377AECC1E",
    "multipleContents": false,
    "name": "Prompt Example Subscription",
    "editable": true,
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": false,
    "dateCreated": "2021-08-03T20:37:31+0000",
    "dateModified": "2021-08-03T20:37:31+0000",
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
        "id": "9B5802154BB9F7E388B04480F882F6CF",
        "name": "Actual vs. Forecast Performance",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "HTML",
          "prompt": {
            "enabled": true
          }
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
        "childSubscriptionId": "8C1F55751145A6DEBC36ECA879025BC5"
      }
    ],
    "delivery": {
      "mode": "EMAIL",
      "contactSecurity": false,
      "email": {
        "subject": "Actual vs. Forecast Performance",
        "filename": "Actual vs. Forecast Performance",
        "sendContentAs": "data",
        "overwriteOlderVersion": false
      }
    }
  }
  ```

## Delete the subscription

Endpoint: [DELETE /api/subscriptions/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/removeSubscription)

This endpoint allows you to delete/unsubscribe from the specified subscription. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you obtain the project ID using `GET /api/projects`. You delete the subscription by specifying the subscription ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body.

Sample Request

- Request Headers

  ```http
  'X-MSTR-AuthToken: {AuthToken}'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  'Accept: application/json'
  ```

- Request Body

  ```json
    No content
  ```

- Curl

  ```bash
  curl -X DELETE -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/{subId}' \ --header 'X-MSTR-AuthToken: {AuthToken}' \ --header 'Accept: application/json'
  ```

Sample Response

- Response Body

  ```json
    No content
  ```

## Delete the user address

Endpoint: [DELETE /api/users/{userID}/addresses/{addressID}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/deleteUserAddress)

This endpoint allows you to delete the specified user address. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you obtain the project ID using `GET /api/projects`. You delete the address by specifying the user ID and address ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body.

Sample Request

- Request Headers

  ```http
  'X-MSTR-AuthToken: {AuthToken}'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  'Accept: application/json'
  ```

- Request Body

  ```json
    No content
  ```

- Curl

  ```bash
  curl -X DELETE -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/users/{userId}/addresses/{addressId}' \ --header 'X-MSTR-AuthToken: {AuthToken}' \ --header 'Accept: application/json'
  ```

Sample Response

- Response Body

  ```json
    No content
  ```

## Close existing session and logout

Endpoint: [POST /api/auth/logout](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout)

This endpoint closes all existing sessions for the authenticated user and logs them out. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body and the authorization token is no longer valid.

Sample Request

- Request Headers

  ```http
  'X-MSTR-AuthToken: {AuthToken}'
  ```

- Request Body

  No content

- Curl

  ```bash
  curl --location --request POST 'https://env-260240.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/auth/logout' \ --header 'Content-Type: application/json' \ --header 'X-MSTR-AuthToken: {AuthToken}'
  ```

Sample Response

- Response Body

  No content
