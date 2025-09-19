---
title: Retrieve smart attributes for an attribute in a data model
sidebar_label: Retrieve smart attributes for an attribute in a data model
description: This workflow sample demonstrates how to retrieve smart attributes for an attribute in a data model.
---

<Available since="Strategy ONE (September 2025)" />

:::tip

You can try these workflows with
[REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve smart attributes for an attribute in a data model.

:::info

Get the authorization token needed to execute the request with
[POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from
[GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

Retrieve the attribute's smart attributes using
`GET /api/dataModels/{dataModelId}/attributes/{id}/smartAttributes`.

Sample Request Without Changeset

- Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

- Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/attributes/8D679D5111D3E4981000E787EC6DE8A4/smartAttributes" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request With Changeset

- Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"X-MSTR-MS-Changeset": "C1DB31C15B9FBA8D942B4E0B7E0CD812"
```

- Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/attributes/8D679D5111D3E4981000E787EC6DE8A4/smartAttributes/templates" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "X-MSTR-MS-Changeset: C1DB31C15B9FBA8D942B4E0B7E0CD812"
```

Sample Response Body:

You can view the smart attributes of an attribute in the data model in the response body.

```json
{
  "smartAttributes": [
    {
      "objectId": "621D19985BB145F6A376CE9D3E657A21",
      "subType": "attribute_smart",
      "name": "Shipping Date (15 min interval)",
      "definition": {
        "smartAttributeType": "15_min_interval",
        "parameters": [],
        "ascending": true
      }
    },
    {
      "objectId": "DEE81CADF87E4734B7AA8D3B9EE3C4E5",
      "subType": "attribute_smart",
      "name": "Shipping Date (30 min interval)",
      "definition": {
        "smartAttributeType": "30_min_interval",
        "parameters": [],
        "ascending": true
      }
    },
    {
      "objectId": "DA21A19023E043668DC297983CC5DFF0",
      "subType": "attribute_smart",
      "name": "Shipping Date (Hour interval)",
      "definition": {
        "smartAttributeType": "hour_interval",
        "parameters": [],
        "ascending": true
      }
    },
    {
      "objectId": "687357641F5D446DAE058FA2060B84D7",
      "subType": "attribute_smart",
      "name": "Shipping Date (Day interval)",
      "definition": {
        "smartAttributeType": "day_interval",
        "parameters": [],
        "ascending": true
      }
    },
    {
      "objectId": "3032722E5B7F4F45B3504D8B2CEF66D4",
      "subType": "attribute_smart",
      "name": "Shipping Date (Month interval)",
      "definition": {
        "smartAttributeType": "month_interval",
        "parameters": [],
        "ascending": true
      }
    },
    {
      "objectId": "18336EF1CFB542CE9E46BC92817D102C",
      "subType": "attribute_smart",
      "name": "Shipping Date (Quarter interval)",
      "definition": {
        "smartAttributeType": "quarter_interval",
        "parameters": [],
        "ascending": true
      }
    },
    {
      "objectId": "BC1BF75276C24297B8542020ED654776",
      "subType": "attribute_smart",
      "name": "Shipping Date (Year interval)",
      "definition": {
        "smartAttributeType": "year_interval",
        "parameters": [],
        "ascending": true
      }
    }
  ]
}
```

Response Code 200: (The attribute's smart attributes is returned successfully.)
