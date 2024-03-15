---
title: Put a derived element in report
description: This workflow sample demonstrates how to put a derived element in report using REST APIs.
---

<Available since="2021 Update 7" />

This workflow sample demonstrates how to replace an existing derived element in report. Please be noted that standalone derived element referred in report cannot be updated using this API. Please use `PUT /api/model/derivedElements/{derivedElementId}` instead.

## Put a derived element in report

You want to replace the existing derived element in report. The report object ID is `9B9ADA7F464E63CE0D0B709B03BD9370`. The derived element object ID is `610B9CC14AD9DCB69F094C89D3B5480B`. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

Obtain the authorization token needed to execute the request using `POST /api/auth/login`. Obtain the project ID from `GET /api/projects`.

:::info

A report instance is required for getting, creating, updating, deleting derived elements in report. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.

:::

### 1. Create a report instance

Endpoint: [POST /api/model/reports/\{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
Sample Request Body: Empty
```

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'
```

Sample Response Body:

```json
{
  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"
}
```

Sample Response Code: 201 (A new report instance is created successfully.)

### 2. Replace an existing derived element in report

The embedded elements in a derived element can be "list", "filter", "calculation" or "all_other". In this example, you are replacing the existing `Region DE` derived element with an embedded "list" element and an "all_other" element.

Endpoint: [PUT /api/model/reports/\{reportId}/derivedElements/\{derivedElementId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-putReportDerivedElement)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"
```

Sample Request Body:

:::info

For more details on how to set format properties, please refer to [Format samples](../../../modeling/manage-derived-element-objects/format-samples.md).

:::

```json
{
  "information": {
    "name": "Replaced Region DE"
  },
  "attribute": {
    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
    "name": "Region"
  },
  "elements": [
    {
      "name": "offline",
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
      "text": "Mid-Atlantic, Northeast, Southeast, Northwest, Sourthwest, Central, South",
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
        },
        {
          "display": "Northwest",
          "elementId": "h4"
        },
        {
          "display": "Southwest",
          "elementId": "h5"
        },
        {
          "display": "Central",
          "elementId": "h6"
        },
        {
          "display": "South",
          "elementId": "h7"
        }
      ]
    },
    {
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

Sample Curl:

```bash
curl -X PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/derivedElements/610B9CC14AD9DCB69F094C89D3B5480B' -H "accept: application/json" -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'Content-Type: application/json' -d '{
  "information": {
    "name": "Replaced Region DE"
  },
  "attribute": {
    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
    "name": "Region"
  },
  "elements": [
    {
      "name": "offline",
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
      "text": "Mid-Atlantic, Northeast, Southeast, Northwest, Sourthwest, Central, South",
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
        },
        {
          "display": "Northwest",
          "elementId": "h4"
        },
        {
          "display": "Southwest",
          "elementId": "h5"
        },
        {
          "display": "Central",
          "elementId": "h6"
        },
        {
          "display": "South",
          "elementId": "h7"
        }
      ]
    },
    {
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
}'
```

Sample Response Body: You can view the new derived element’s definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-02-20T09:18:18.000Z",
    "dateModified": "2021-02-20T09:40:14.000Z",
    "versionId": "325929D9432F9D23C7CEDFA473E70D7F",
    "primaryLocale": "en-US",
    "objectId": "610B9CC14AD9DCB69F094C89D3B5480B",
    "subType": "consolidation_element",
    "name": "Replaced Region DE"
  },
  "attribute": {
    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",
    "subType": "attribute",
    "name": "Region"
  },
  "elements": [
    {
      "id": "26785E245237495E908D9F620F81E02F",
      "name": "offline",
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
      "text": "Mid-Atlantic, Northeast, Southeast, Northwest, Southwest, Central, South",
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
        },
        {
          "display": "Northwest",
          "elementId": "h4"
        },
        {
          "display": "Southwest",
          "elementId": "h5"
        },
        {
          "display": "Central",
          "elementId": "h6"
        },
        {
          "display": "South",
          "elementId": "h7"
        }
      ]
    },
    {
      "id": "33686BC5418B4CFDAEC01298E5201E53",
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

Response Code: 201 (The derived element is replaced successfully in the report.)

### 3. Save the report instance

The derived element will be saved together with report using save report instance API.

Endpoint: [POST /api/model/reports/\{reportId}/instances/save](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-saveReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"
```

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances/save' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'
```

Sample Response Body:

```json
{
  "objectId": "9B9ADA7F464E63CE0D0B709B03BD9370"
}
```

Sample Response Code: 201 (The report is saved successfully.)

### 4. Delete the report instance

Endpoint: [DELETE /api/model/reports/\{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'
```

Sample Response Body: Empty

Sample Response Code: 204 (The report instance has been deleted successfully.)
