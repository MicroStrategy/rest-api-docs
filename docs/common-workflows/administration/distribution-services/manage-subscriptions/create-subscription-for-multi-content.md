---
title: Create subscription for multi content
description: This workflow sample demonstrates how to create email subscriptions with multiple types of content contained within them.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b83f6f30-6232-4e88-9d90-aee4837da5e7?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create email subscriptions with multiple types of content contained within them.

1. [Get a list of schedules.](#get-a-list-of-available-schedules)
1. [Create user email.](#create-a-user-email)
1. [Create multi-content subscription.](#create-a-multi-content-subscription)
1. [Delete subscription.](#delete-the-subscription)

A detailed description of the critical steps in this workflow are listed down below. For a full list of API calls in the workflow, you can look at the workflow in the MicroStrategy POSTMAN collection.

## Get a list of available schedules

Endpoint: [GET /api/schedules](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schedules/listSchedules)

This endpoint allows the user to retrieve a list of all schedules that they have access to. This endpoint returns the name, ID, and other information about schedules. You obtain the authorization token needed to execute the request using `POST /api/auth/login`. You pass the authorization token in the request header. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all schedules the user has access to.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7'
  ```

- Request Body: None

- Curl

  ```bash
  curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7' https://demo.microstrategy.com/MicroStrategyLibrary/api/schedules
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
        "scheduleNextDelivery": "2021-08-04T14:00:00+0000",
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

- Response Code: 200 (Success)

## Create a user email

Endpoint: [POST /api/v2/users/\{id}/addresses](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createAddress)

This endpoint allows you to create a new address for a specific user. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; the user ID can be obtained by using `GET /api/users`. You provide the information used to create the new user address in the body parameter of the request - including the name and actual value for the address, whether it is the default address, and the type of delivery and content style. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the newly created address.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7'
  ```

- Request Body

  ```json
  {
    "name": "default_email",
    "deliveryMode": "EMAIL",
    "device": "GENERIC_EMAIL",
    "value": "google@8.8.8.8",
    "isDefault": true
  }
  ```

- Curl

  ```bash
  curl -X POST -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header
  'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7' -d '{
      "name": "default_email",
      "deliveryMode": "EMAIL",
      "device": "GENERIC_EMAIL",
      "value": "google@8.8.8.8",
      "isDefault": true
  }' https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/users/C1E141E611D603A2100086B3A5E8F8A4/addresses
  ```

Sample Response

- Response Body

  ```json
  {
    "addresses": [
      {
        "id": "4AC10E164A4F71200E836B8768231559",
        "name": "default_email",
        "deliveryMode": "EMAIL",
        "deviceId": "1D2E6D168A7711D4BE8100B0D04B6F0B",
        "value": "google@8.8.8.8",
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

- Response Code: 200 (Success)

## Create a multi-content subscription

Endpoint: [POST /api/subscriptions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/createSubscription)

This endpoint allows you to create a subscription containing multiple pieces of content. You obtain the authorization token needed to execute the request using `POST /api/auth/login` and you obtain the project ID using `GET /api/projects`; you pass these values in the request headers. If the call is successful, the resulting HTTP response returns an HTTP status code of 201 and a response body containing all the information on the newly created multi-content subscription.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body

  ```json
  {
    "name": "create_email_subscription_multi_content_reports",
    "sendNow": true,
    "multipleContents": true,
    "schedules": [
      {
        "id": "{{schedulesId}}"
      }
    ],
    "contents": [
      {
        "id": "C9594161446CBF1137FE4783A51B6B8A",
        "name": "Category Subcategory Revenue (Report Drill Map)",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "GRID",
          "formatType": "PLAIN_TEXT",
          "delimiter": ","
        }
      },
      {
        "id": "74065ED8403137215C1F01B4EAE7EDF9",
        "name": "Profit Margin by Region - Drill on Metrics",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "GRID",
          "formatType": "CSV"
        }
      },
      {
        "id": "E2DEA25E11D3EAD7C000B4B2D86C964F",
        "name": "Sales by Age Groups - Drill on custom group",
        "type": "report",
        "personalization": {
          "compressed": true,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "EXCEL"
        }
      },
      {
        "id": "BEC722A6406320A3E67DBFBAB2F033CB",
        "name": "Category Sales Report",
        "type": "report",
        "personalization": {
          "compressed": true,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "PDF"
        }
      },
      {
        "id": "3B75A0454B2D5F9D5A76778723777502",
        "name": "Report Display Options - Alias and Null Values",
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
        "id": "{{userId}}",
        "type": "user",
        "includeType": "TO"
      }
    ],
    "delivery": {
      "mode": "EMAIL",
      "expiration": "2050-12-01",
      "contactSecurity": false,
      "email": {
        "subject": "create_email_subscription_MultiContent_Reports",
        "message": "This subscription contains 5 reports delivered in different format. Event_based schedule, no advanced settings, compressed true and false, send content as data, spaceDelimiter is ;",
        "sendContentAs": "data",
        "spaceDelimiter": ";",
        "overwriteOlderVersion": true
      }
    }
  }
  ```

- Curl

  ```bash
  curl -X POST -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -d '{ ... }' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions
  ```

Sample Response

- Response Body

  ```json
  {
    "id": "04338C95B7472072FE13E9A8113D7E1A",
    "multipleContents": true,
    "name": "create_email_subscription_multi_content_reports",
    "editable": true,
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": false,
    "dateCreated": "2021-08-04T13:20:54+0000",
    "dateModified": "2021-08-04T13:20:54+0000",
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
        "id": "C9594161446CBF1137FE4783A51B6B8A",
        "name": "Category Subcategory Revenue (Report Drill Map)",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "GRID",
          "formatType": "PLAIN_TEXT",
          "delimiter": ","
        }
      },
      {
        "id": "74065ED8403137215C1F01B4EAE7EDF9",
        "name": "Profit Margin by Region - Drill on Metrics",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "GRID",
          "formatType": "CSV"
        }
      },
      {
        "id": "E2DEA25E11D3EAD7C000B4B2D86C964F",
        "name": "Sales by Age Groups - Drill on custom group",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "EXCEL"
        }
      },
      {
        "id": "BEC722A6406320A3E67DBFBAB2F033CB",
        "name": "Category Sales Report",
        "type": "report",
        "personalization": {
          "compressed": false,
          "formatMode": "CURRENT_PAGE",
          "viewMode": "BOTH",
          "formatType": "PDF"
        }
      },
      {
        "id": "3B75A0454B2D5F9D5A76778723777502",
        "name": "Report Display Options - Alias and Null Values",
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
        "id": "C1E141E611D603A2100086B3A5E8F8A4",
        "name": "MicroStrategy Web User",
        "isGroup": false,
        "type": "user",
        "includeType": "TO",
        "childSubscriptionId": "254737F84E4D307690BBB480C24BDEEE"
      }
    ],
    "delivery": {
      "mode": "EMAIL",
      "expiration": "2050-12-01",
      "contactSecurity": false,
      "email": {
        "subject": "create_email_subscription_MultiContent_Reports",
        "message": "This subscription contains 5 reports delivered in different format. Event_based schedule, no advanced settings, compressed true and false, send content as data, spaceDelimiter is ;",
        "sendContentAs": "data",
        "overwriteOlderVersion": true
      }
    }
  }
  ```

- Response Code: 201 (Created)

## Delete the subscription

Endpoint: [DELETE /api/subscriptions/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/removeSubscription)

This endpoint allows you to delete/unsubscribe from the specified subscription. You obtain the authorization token needed to execute the request using `POST /api/auth/login`, you obtain the project ID using `GET /api/projects`, and you obtain the subscription ID through `GET /api/subscriptions`. You delete the subscription by specifying the subscription ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body: None

- Curl

  ```bash
  curl -X DELETE -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header
  'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7' --header 'X-MSTR-ProjectID:
  B7CA92F04B9FAE8D941C3E9B7E0CD754' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/04338C95B7472072FE13E9A8113D7E1A
  ```

Sample Response

- Response Body: None

- Response Code: 204 (No Content)
