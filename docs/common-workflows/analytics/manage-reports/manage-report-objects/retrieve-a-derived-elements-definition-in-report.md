---
title: Retrieve a derived element's definition in report
description: You can use REST APIs to retrieve the a derived element’s definition in report through the Modeling service.
---

<Available since="2021 Update 7" />

You can use REST APIs to retrieve a derived element’s definition in report through the Modeling service. The workflow includes the following REST APIs requests.

## Retrieve a derived element’s definition within a report instance

In this sample workflow, we want to get the definition of a derived element in report. The report ID is `9B9ADA7F464E63CE0D0B709B03BD9370`. The derived element ID is `EA18C4C1484F06FF47B603A7A0DCA8D6`. The report is in the project "MicroStrategy Tutorial", and the project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

### 1. Create a report instance

:::tip

A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.

:::

Endpoint: [POST /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

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

### 2. Get derived element's definition within the report instance

Endpoint: [GET /api/model/reports/{reportId}/derivedElements/{derivedElementId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-getReportDerivedElement)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/derivedElements/EA18C4C1484F06FF47B603A7A0DCA8D6' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'
```

Sample Response Body: you can view the derived element’s definition in the body of the response

```json
{
  "information": {
    "dateCreated": "2022-09-02T05:48:20.980Z",
    "dateModified": "2022-09-02T05:48:20.980Z",
    "versionId": "00704A6841F85188FBC37391002334D7",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "EA18C4C1484F06FF47B603A7A0DCA8D6",
    "subType": "consolidation_element"
  },
  "attribute": {
    "objectId": "8D679D5211D3E4981000E787EC6DE8A4",
    "subType": "attribute",
    "name": "Distribution Center"
  },
  "elements": [
    {
      "id": "20C83A1A0F5F4ED9A3401469C89CA39F",
      "name": "Distribution Center in list",
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
      "text": "Washington, DC, Seattle, San Diego",
      "elements": [
        {
          "display": "Washington, DC",
          "elementId": "h1:3"
        },
        {
          "display": "Seattle",
          "elementId": "h1:2"
        },
        {
          "display": "San Diego",
          "elementId": "h1:4"
        }
      ]
    },
    {
      "id": "1618B94E8E8946CD859BC32253B60472",
      "name": "All Others",
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

Response Code: 200 (Derived element's definition is returned successfully.)

### 3. Delete the report instance

Endpoint: [DELETE /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance)

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
