---
title: Manage mobile subscriptions
description: This workflow sample demonstrates how to create and update a mobile subscription.
---

<Available since="2021 Update 9" />

This workflow sample demonstrates how to create and update a mobile subscription.

1. [Create a new mobile subscription](#create-a-new-mobile-subscription)
1. [Update an existing mobile subscription](#update-an-existing-mobile-subscription)

:::tip

This workflow follows the general steps described in [Create and get a subscription](create-and-get-a-subscription.md). You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-da43d1b1-a332-4452-829f-e07a041abc8f?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

## Create a new mobile subscription

Endpoint: [POST /api/subscriptions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/createSubscription)

This endpoint allows you to create a new subscription for a given project. Obtain the authorization token needed to execute the request using `POST /api/auth/login`. Obtain the project ID using `GET /api/projects`. Provide the information used to create a subscription in the body parameter of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 201 and a response body containing all the information on the newly created subscription.

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
      "mode": "MOBILE",
      "contactSecurity": false,
      "mobile": {
        "clientType": "TABLET",
        "deviceId": "E206C75BABC441C5B13B60C5D956F605",
        "doNotCreateUpdateCaches": false,
        "overwriteOlderVersion": true,
        "reRunHl": false
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
      "mode": "MOBILE",
      "contactSecurity": false,
      "mobile": {
        "clientType": "TABLET",
        "deviceId": "E206C75BABC441C5B13B60C5D956F605",
        "doNotCreateUpdateCaches": false,
        "overwriteOlderVersion": true,
        "reRunHl": false
      }
    }
  }
  ```

  - Response Code: 201 (Created)

## Update an existing mobile subscription

Endpoint: [PUT /api/subscriptions/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/updateSubscription)

This endpoint allows you to update all of the information for a specific subscription. Obtain the authorization token needed to execute the request using `POST /api/auth/login`. Obtain the project ID using `GET /api/projects`. Provide the information used to update a subscription in the body parameter of the request and provide the subscription ID in the request path. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the updated subscription.

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
      "mode": "MOBILE",
      "contactSecurity": false,
      "mobile": {
        "clientType": "TABLET",
        "deviceId": "E206C75BABC441C5B13B60C5D956F605",
        "doNotCreateUpdateCaches": false,
        "overwriteOlderVersion": true,
        "reRunHl": false
      }
    }
  }
  ```

- Curl

  ```bash
  curl -X PUT -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -d '...' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/0BC64C0AFA4F86A55FB8BEA3332F90B7
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
      "mode": "MOBILE",
      "contactSecurity": false,
      "mobile": {
        "clientType": "TABLET",
        "deviceId": "E206C75BABC441C5B13B60C5D956F605",
        "doNotCreateUpdateCaches": false,
        "overwriteOlderVersion": true,
        "reRunHl": false
      }
    }
  }
  ```

  - Response Code: 200 (OK)
