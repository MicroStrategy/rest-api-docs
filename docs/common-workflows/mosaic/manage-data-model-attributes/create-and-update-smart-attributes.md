---
title: Create and update smart attributes
description: This workflow demonstrates how to create and update smart attributes using REST API.
---

<Available since="Strategy (October 2025)" />

This workflow sample demonstrates how to create and update smart attributes using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a smart attribute

You can create a new smart attribute by specifying its details in the request body without providing the `objectId`. If you provide an `objectId`, the request will be treated as an update operation instead of a create operation.

Endpoint: [PUT /api/model/dataModels/\{dataModelId}/attributes/\{attributeId}/smartAttributes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/updateDataModelSmartAttributes)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 303805A81AE24C8AB87C7B87C517B3A5'
```

- Curl

```bash
curl -L -X PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/4490081B72354FCE9827DB1053A0050A/attributes/73C488AE71C54D7EB22D63A93FC85CD1/smartAttributes' \
-H 'X-MSTR-AuthToken: sh9k098ofiakm2drhmq8ml5q4p' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'X-MSTR-MS-Changeset: 17C4159267604C969838822859D7D4CD' \
-H 'Content-Type: application/json' \
-d '{
    "smartAttributes": [
        {
            "subType": "attribute_smart",
            "name": "Shipping Date (month interval)",
            "definition": {
                "smartAttributeType": "month_interval",
                "parameters": [],
                "ascending": true
            }
        }
    ]
}'
```

Sample Response

- Response Body:

```json
{
  "smartAttributes": [
    {
      "objectId": "9FF854FC9033439187CD7FC6F353FF4B",
      "subType": "attribute_smart",
      "name": "Shipping Date (month interval)",
      "definition": {
        "smartAttributeType": "month_interval",
        "parameters": [],
        "ascending": true
      }
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Update smart attributes

You can update existing or newly created smart attributes by specifying their updated details in the request body. Each smart attribute with an `objectId` will be updated, while those without an `objectId` will be created as new smart attributes, and original smart attributes not included in the request will be deleted.

Endpoint: [PUT /api/model/dataModels/\{dataModelId}/attributes/\{attributeId}/smartAttributes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/updateDataModelSmartAttributes)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 303805A81AE24C8AB87C7B87C517B3A5'
```

- Curl

```bash
curl -L -X PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/4490081B72354FCE9827DB1053A0050A/attributes/73C488AE71C54D7EB22D63A93FC85CD1/smartAttributes' \
-H 'X-MSTR-AuthToken: sh9k098ofiakm2drhmq8ml5q4p' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'X-MSTR-MS-Changeset: 17C4159267604C969838822859D7D4CD' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{
    "smartAttributes": [
        {
            "objectId": "9FF854FC9033439187CD7FC6F353FF4B",
            "subType": "attribute_smart",
            "name": "Shipping Date",
            "definition": {
                "smartAttributeType": "month_interval",
                "parameters": [],
                "ascending": true
            }
        }
    ]
}'
```

Sample Response

- Response Body:

```json
{
  "smartAttributes": [
    {
      "objectId": "9FF854FC9033439187CD7FC6F353FF4B",
      "subType": "attribute_smart",
      "name": "Shipping Date",
      "definition": {
        "smartAttributeType": "month_interval",
        "parameters": [],
        "ascending": true
      }
    }
  ]
}
```

- Response Code: 200 (Success: OK)
