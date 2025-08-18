---
title: Schedule refresh a data model
description: This workflow demonstrates how to schedule a refresh for a data model.
---

<Available since="Strategy ONE (August 2025)" />

This workflow sample demonstrates how to schedule a refresh for a data model using the REST API.

- [Log in](#log-in)
- [Get all subscriptions](#get-all-subscriptions)
- [Create a subscription](#create-a-subscription)
- [Update a subscription](#update-a-subscription)
- [Get a subscription by ID](#get-a-subscription-by-id)

A detailed description of each step of this workflow is listed below.

## Log in

Endpoint: [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)

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
curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json'\
--header 'Accept: application/json' -d '{
"loginMode":1,
"username": "administrator",
"password": ""
}' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login'
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

## Get all subscriptions

To retrieve all subscriptions within a project, use the following endpoint. `offset` and `limit` parameters can be used for pagination. For example, if you want to retrieve the first 10 subscriptions, you can set `offset=0` and `limit=10` in the request.

Endpoint: [GET /api/subscriptions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/getSubscriptions)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions?offset=0&limit=10' \
--header 'Accept: application/json' \
--header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
```

Sample Response

- Response Body:

```json
{
  "subscriptions": [
    {
      "name": "Updated Subscription",
      "id": "0730C69A4EBAA20BD967EA86274F0C2F",
      "multipleContents": false,
      "editable": true,
      "allowDeliveryChanges": false,
      "allowPersonalizationChanges": false,
      "allowUnsubscribe": false,
      "allowUnsubscribeFromEmail": false,
      "dateCreated": "2025-07-29T05:48:30+0000",
      "dateModified": "2025-07-29T05:52:37+0000",
      "owner": {
        "id": "54F3D26011D2896560009A8E67019608",
        "name": "Administrator"
      },
      "schedules": [
        {
          "id": "E24F501E802911E1BBCB892C4924019B",
          "name": "Personal View",
          "type": "event_based",
          "expired": true
        }
      ],
      "contents": [
        {
          "id": "9F4772B837604551B4D3CC916ADC5598",
          "name": "_test api",
          "type": "data_model",
          "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
        }
      ],
      "recipients": [
        {
          "id": "54F3D26011D2896560009A8E67019608",
          "name": "Administrator",
          "isGroup": false,
          "type": "user",
          "includeType": "TO",
          "childSubscriptionId": "2A3D6DFB4FE66AF22B228E89DCE4847D"
        }
      ],
      "delivery": {
        "mode": "HISTORY_LIST",
        "contactSecurity": false,
        "historyList": {
          "doNotCreateUpdateCaches": false,
          "overwriteOlderVersion": false,
          "reRunHl": false
        },
        "notificationEnabled": false
      },
      "alert": false
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Create a subscription

To schedule a refresh for a data model, create a subscription. In the `contents` section of the request body, you need to specify the type as `data_model`.

Endpoint: [POST /api/subscriptions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/createSubscription)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ot5sr2resn9jjjm3fo30lch2lq'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Request Body

```json
{
  "name": "Data Model Subscription Example",
  "allowDeliveryChanges": false,
  "allowPersonalizationChanges": false,
  "allowUnsubscribe": false,
  "sendNow": false,
  "schedules": [
    {
      "id": "FF7BB3C811D501F0C00051916B98494F"
    }
  ],
  "contents": [
    {
      "id": "9F4772B837604551B4D3CC916ADC5598",
      "type": "data_model",
      "refreshCondition": {
        "tables": [
          {
            "id": "0D1436DF3004418086D8BD3FD985EC4A",
            "refreshPolicy": "upsert"
          }
        ]
      }
    }
  ],
  "delivery": {
    "mode": "HISTORY_LIST"
  }
}
```

Strategy supports attribute form qualification in the `refreshCondition.filters` section. Refer to the qualification field in [Attribute form qualifications](https://microstrategy.github.io/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object/#attribute-form-qualifications) to create your own filter expression." See the following example request body:

- Request Body

```json
{
  "name": "Data Model Subscription Example",
  "allowDeliveryChanges": false,
  "allowPersonalizationChanges": false,
  "allowUnsubscribe": false,
  "sendNow": false,
  "schedules": [
    {
      "id": "FF7BB3C811D501F0C00051916B98494F"
    }
  ],
  "contents": [
    {
      "id": "9F4772B837604551B4D3CC916ADC5598",
      "type": "data_model",
      "refreshCondition": {
        "filters": [
          {
            "type": "refresh",
            "qualification": {
              "tree": {
                "type": "predicate_form_qualification",
                "predicateTree": {
                  "function": "equals",
                  "parameters": [
                    {
                      "parameterType": "constant",
                      "constant": {
                        "type": "string",
                        "value": "jan"
                      }
                    }
                  ],
                  "attribute": {
                    "objectId": "74BA634076BE435F913BA476BFEA2E9B",
                    "subType": "attribute"
                  },
                  "form": {
                    "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                    "subType": "attribute_form_system"
                  },
                  "dataLocale": "en-US"
                }
              }
            }
          }
        ],
        "tables": [
          {
            "id": "0D1436DF3004418086D8BD3FD985EC4A",
            "refreshPolicy": "upsert"
          }
        ]
      }
    }
  ],
  "delivery": {
    "mode": "HISTORY_LIST"
  }
}
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/' \
--header 'Accept: application/json' \
--header 'X-MSTR-AuthToken: ot5sr2resn9jjjm3fo30lch2lq' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Data Model Subscription Example",
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": false,
    "sendNow": false,
    "schedules": [
        {
            "id": "FF7BB3C811D501F0C00051916B98494F"
        }
    ],
    "contents": [
        {
            "id": "9F4772B837604551B4D3CC916ADC5598",
            "type": "data_model",
            "refreshCondition": {
                "tables": [
                    {
                        "id": "0D1436DF3004418086D8BD3FD985EC4A",
                        "refreshPolicy": "upsert"
                    }
                ]
            }
        }
    ],
    "delivery": {
        "mode": "HISTORY_LIST"
    }
}'
```

Sample Response

- Response Body:

```json
{
  "name": "Data Model Subscription Example",
  "id": "0730C69A4EBAA20BD967EA86274F0C2F",
  "multipleContents": false,
  "editable": true,
  "allowDeliveryChanges": false,
  "allowPersonalizationChanges": false,
  "allowUnsubscribe": false,
  "allowUnsubscribeFromEmail": false,
  "dateCreated": "2025-07-29T05:48:30+0000",
  "dateModified": "2025-07-29T05:48:30+0000",
  "owner": {
    "id": "54F3D26011D2896560009A8E67019608",
    "name": "Administrator"
  },
  "schedules": [
    {
      "id": "FF7BB3C811D501F0C00051916B98494F",
      "name": "All the Time",
      "type": "time_based",
      "nextDelivery": "2025-07-29T06:00:00+0000",
      "expired": false
    }
  ],
  "contents": [
    {
      "id": "9F4772B837604551B4D3CC916ADC5598",
      "name": "_test api",
      "type": "data_model",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "refreshCondition": {
        "tables": [
          {
            "id": "0D1436DF3004418086D8BD3FD985EC4A",
            "refreshPolicy": "upsert"
          }
        ]
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
      "childSubscriptionId": "2A3D6DFB4FE66AF22B228E89DCE4847D"
    }
  ],
  "delivery": {
    "mode": "HISTORY_LIST",
    "contactSecurity": false,
    "historyList": {
      "doNotCreateUpdateCaches": false,
      "overwriteOlderVersion": false,
      "reRunHl": false
    },
    "notificationEnabled": false
  },
  "nextDelivery": "2025-07-29T06:00:00+0000",
  "alert": false
}
```

- Response Code: 201 (Success: Created)

## Update a subscription

To update an existing subscription, send a PUT request to the subscription endpoint with the updated details.

Endpoint: [PUT /api/subscriptions/\{subscriptionId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/updateSubscription)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ot5sr2resn9jjjm3fo30lch2lq'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Request Body

```json
{
  "name": "Updated Subscription",
  "contents": [
    {
      "id": "9F4772B837604551B4D3CC916ADC5598",
      "type": "data_model",
      "refreshCondition": {
        "tables": [
          {
            "id": "0D1436DF3004418086D8BD3FD985EC4A",
            "refreshPolicy": "upsert"
          }
        ]
      }
    }
  ],
  "schedules": [
    {
      "id": "E24F501E802911E1BBCB892C4924019B",
      "name": "Personal View",
      "type": "unknown"
    }
  ],
  "recipients": [
    {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator",
      "isGroup": false,
      "type": "user",
      "includeType": "TO",
      "childSubscriptionId": "7283682811E5CA909DFA0080EFB579EC"
    }
  ],
  "delivery": {
    "mode": "HISTORY_LIST",
    "historyList": {
      "doNotCreateUpdateCaches": false,
      "overwriteOlderVersion": true,
      "reRunHl": false
    }
  }
}
```

- Curl

```bash
curl --location --request PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/0730C69A4EBAA20BD967EA86274F0C2F' \
--header 'X-MSTR-AuthToken: ot5sr2resn9jjjm3fo30lch2lq' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Updated Subscription",
    "contents": [
        {
            "id": "9F4772B837604551B4D3CC916ADC5598",
            "type": "data_model",
            "refreshCondition": {
                "tables": [
                    {
                        "id": "0D1436DF3004418086D8BD3FD985EC4A",
                        "refreshPolicy": "upsert"
                    }
                ]
            }
        }
    ],
    "schedules": [
        {
            "id": "E24F501E802911E1BBCB892C4924019B",
            "name": "Personal View",
            "type": "unknown"
        }
    ],
    "recipients": [
        {
            "id": "54F3D26011D2896560009A8E67019608",
            "name": "Administrator",
            "isGroup": false,
            "type": "user",
            "includeType": "TO",
            "childSubscriptionId": "7283682811E5CA909DFA0080EFB579EC"
        }
    ],
    "delivery": {
        "mode": "HISTORY_LIST",
        "historyList": {
            "doNotCreateUpdateCaches": false,
            "overwriteOlderVersion": true,
            "reRunHl": false
        }
    }
}'
```

Sample Response

- Response Body:

```json
{
  "name": "Updated Subscription",
  "id": "0730C69A4EBAA20BD967EA86274F0C2F",
  "multipleContents": false,
  "editable": true,
  "allowDeliveryChanges": false,
  "allowPersonalizationChanges": false,
  "allowUnsubscribe": false,
  "allowUnsubscribeFromEmail": false,
  "dateCreated": "2025-07-29T05:48:30+0000",
  "dateModified": "2025-07-29T05:52:37+0000",
  "owner": {
    "id": "54F3D26011D2896560009A8E67019608",
    "name": "Administrator"
  },
  "schedules": [
    {
      "id": "E24F501E802911E1BBCB892C4924019B",
      "name": "Personal View",
      "type": "event_based",
      "expired": true
    }
  ],
  "contents": [
    {
      "id": "9F4772B837604551B4D3CC916ADC5598",
      "name": "_test api",
      "type": "data_model",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "refreshCondition": {
        "tables": [
          {
            "id": "0D1436DF3004418086D8BD3FD985EC4A",
            "refreshPolicy": "upsert"
          }
        ]
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
      "childSubscriptionId": "2A3D6DFB4FE66AF22B228E89DCE4847D"
    }
  ],
  "delivery": {
    "mode": "HISTORY_LIST",
    "contactSecurity": false,
    "historyList": {
      "doNotCreateUpdateCaches": false,
      "overwriteOlderVersion": false,
      "reRunHl": false
    },
    "notificationEnabled": false
  },
  "alert": false
}
```

- Response Code: 200 (Success: OK)

## Get a subscription by ID

To retrieve a specific subscription by its ID, use the following endpoint.

Endpoint: [GET /api/subscriptions/\{subscriptionId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/getSubscriptionById)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ot5sr2resn9jjjm3fo30lch2lq'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/0730C69A4EBAA20BD967EA86274F0C2F' \
--header 'Accept: application/json' \
--header 'X-MSTR-AuthToken: ot5sr2resn9jjjm3fo30lch2lq' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "name": "Updated Subscription",
  "id": "0730C69A4EBAA20BD967EA86274F0C2F",
  "multipleContents": false,
  "editable": true,
  "allowDeliveryChanges": false,
  "allowPersonalizationChanges": false,
  "allowUnsubscribe": false,
  "allowUnsubscribeFromEmail": false,
  "dateCreated": "2025-07-29T05:48:30+0000",
  "dateModified": "2025-07-29T05:52:37+0000",
  "owner": {
    "id": "54F3D26011D2896560009A8E67019608",
    "name": "Administrator"
  },
  "schedules": [
    {
      "id": "E24F501E802911E1BBCB892C4924019B",
      "name": "Personal View",
      "type": "event_based",
      "expired": true
    }
  ],
  "contents": [
    {
      "id": "9F4772B837604551B4D3CC916ADC5598",
      "name": "_test api",
      "type": "data_model",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "refreshCondition": {
        "tables": [
          {
            "id": "0D1436DF3004418086D8BD3FD985EC4A",
            "refreshPolicy": "upsert"
          }
        ]
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
      "childSubscriptionId": "2A3D6DFB4FE66AF22B228E89DCE4847D"
    }
  ],
  "delivery": {
    "mode": "HISTORY_LIST",
    "contactSecurity": false,
    "historyList": {
      "doNotCreateUpdateCaches": false,
      "overwriteOlderVersion": false,
      "reRunHl": false
    },
    "notificationEnabled": false
  },
  "alert": false
}
```

- Response Code: 200 (Success: OK)
