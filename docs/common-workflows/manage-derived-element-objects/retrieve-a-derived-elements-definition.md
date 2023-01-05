---
title: Workflow sample - Retrieve a derived element's definition
sidebar_label: Retrieve a derived element's definition
description: You can use REST APIs to retrieve the definition for a derived element through the Modeling service.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d4a5b7c7-3dba-46fc-acce-0683a23bb1fe?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to retrieve the definition for a derived element through the Modeling service. This topic includes the following workflows:

- [Retrieve a derived element's definition](#retrieve-a-derived-elements-definition)
- [Retrieve a derived element's definition within a changeset](#retrieve-the-definition-of-a-derived-element-within-a-changeset)

## Retrieve a derived element's definition

You want to get the definition of a derived element that is defined by a list. The object ID of the derived element is `610B9CC14AD9DCB69F094C89D3B5480B` in the MicroStrategy Tutorial project. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Get the derived element's definition using [GET /api/model/derivedElements/{DerivedElementId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/DerivedElements/ms-getDerivedElement).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/derivedElements/610B9CC14AD9DCB69F094C89D3B5480B" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

You can view the derived element's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-02-20T09:18:18.240Z",
    "dateModified": "2021-02-20T09:18:18.240Z",
    "versionId": "FCE28B2C4D9B9B502221089FF2718E77",
    "primaryLocale": "en-US",
    "objectId": "610B9CC14AD9DCB69F094C89D3B5480B",
    "subType": "consolidation_element",
    "name": "Region DE"
  },
  "attribute": {
    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
    "subType": "attribute",
    "name": "Region"
  },
  "elements": [
    {
      "id": "2F68CA1344F2B566F32FEAAFCB2B3462",
      "name": "East Coast",
      "type": "list",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "this_element",
        "includeIndividual": false
      },
      "text": "Mid-Atlantic, Northeast, Southeast",
      "elements": [
        {
          "display": "Mid-Atlantic",
          "elementId": "h2"
        },
        {
          "display": "Northeast",
          "elementId": "h1"
        },
        {
          "display": "Southeast",
          "elementId": "h3"
        }
      ]
    },
    {
      "id": "1B6A9F774B08328E02A4288878A4E956",
      "name": "West Coast",
      "type": "list",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "this_element",
        "includeIndividual": false
      },
      "text": "Northwest, Southwest",
      "elements": [
        {
          "display": "Northwest",
          "elementId": "h6"
        },
        {
          "display": "Southwest",
          "elementId": "h7"
        }
      ]
    },
    {
      "id": "3DA2B7A74DB433E39677B9B5FFEECACE",
      "name": "Central and South",
      "type": "list",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "this_element",
        "includeIndividual": false
      },
      "text": "Central, South",
      "elements": [
        {
          "display": "Central",
          "elementId": "h4"
        },
        {
          "display": "South",
          "elementId": "h5"
        }
      ]
    },
    {
      "id": "06DC5F5B4BE0F51D89259F89F4135F6B",
      "name": "Web",
      "type": "all_other",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "individual_items",
        "subtotal": "this_element"
      }
    }
  ]
}
```

Response Code: 200 (The derived element's definition is returned successfully.)

## Retrieve the definition of a derived element within a changeset

You want to get the definition of the derived element object, `"groupDerivedElement"`. The object ID of the derived element is `610B9CC14AD9DCB69F094C89D3B5480B` in the MicroStrategy Tutorial project. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using `POST /api/auth/login`.

Obtain the project ID from `GET /api/projects`.

:::

### Create a changeset

Use [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://10.23.9.111:8080/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Response Body:

```json
{
  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",
  "dateCreated": "2020-11-17T16:38:09.825650Z",
  "dateModified": "2020-11-17T16:38:09.825665Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 200 (A new changeset is created successfully.)

### Get the derived element's definition within a changeset

Use [GET /api/model/derivedElements/{DerivedElementId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Derived%20Elements/ms-getDerivedElement).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/derivedElements/610B9CC14AD9DCB69F094C89D3B5480B" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

You can view the derived element's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-02-20T09:18:18.240Z",
    "dateModified": "2021-02-20T09:18:18.240Z",
    "versionId": "FCE28B2C4D9B9B502221089FF2718E77",
    "primaryLocale": "en-US",
    "objectId": "610B9CC14AD9DCB69F094C89D3B5480B",
    "subType": "consolidation_element",
    "name": "Region DE"
  },
  "attribute": {
    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
    "subType": "attribute",
    "name": "Region"
  },
  "elements": [
    {
      "id": "2F68CA1344F2B566F32FEAAFCB2B3462",
      "name": "East Coast",
      "type": "list",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "this_element",
        "includeIndividual": false
      },
      "text": "Mid-Atlantic, Northeast, Southeast",
      "elements": [
        {
          "display": "Mid-Atlantic",
          "elementId": "h2"
        },
        {
          "display": "Northeast",
          "elementId": "h1"
        },
        {
          "display": "Southeast",
          "elementId": "h3"
        }
      ]
    },
    {
      "id": "1B6A9F774B08328E02A4288878A4E956",
      "name": "West Coast",
      "type": "list",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "this_element",
        "includeIndividual": false
      },
      "text": "Northwest, Southwest",
      "elements": [
        {
          "display": "Northwest",
          "elementId": "h6"
        },
        {
          "display": "Southwest",
          "elementId": "h7"
        }
      ]
    },
    {
      "id": "3DA2B7A74DB433E39677B9B5FFEECACE",
      "name": "Central and South",
      "type": "list",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "this_element",
        "includeIndividual": false
      },
      "text": "Central, South",
      "elements": [
        {
          "display": "Central",
          "elementId": "h4"
        },
        {
          "display": "South",
          "elementId": "h5"
        }
      ]
    },
    {
      "id": "06DC5F5B4BE0F51D89259F89F4135F6B",
      "name": "Web",
      "type": "all_other",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "individual_items",
        "subtotal": "this_element"
      }
    }
  ]
}
```

Response Code: 200 (The derived element's definition is returned successfully.)
