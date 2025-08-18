---
title: Retrieve all security filters in data model
sidebar_label: Retrieve all security filters in data model
description: This topic covers several workflows for retrieving all security filters in data model.
---

<Available since="Strategy ONE (August 2025)" />

This topic covers several workflows to retrieve all security filters in a data model.

- [Retrieve all security filters in data model within a changeset](#retrieve-all-security-filters-in-data-model-within-a-changeset)
- [Retrieve all security filters with users info in data model](#retrieve-all-security-filters-with-users-info-in-data-model)

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

## Retrieve all security filters in data model within a changeset

You can retrieve all security filters in a data model using a changeset.

1. Create a changeset using `POST /api/model/changesets`
1. [Retrieve all security filters in data model using `GET /api/model/dataModels/{dataModelId}/securityFilters`](#retrieve-all-security-filters-in-data-model-using-get-apimodeldatamodelsdatamodelidsecurityfilters)
1. Delete the changeset using `DELETE /api/model/changesets/{changesetId}`

In this workflow sample, you want to retrieve all security filters in a data model. The data model ID is `7F071F619BE244C7B6CDC2626EBB1C6C`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

### Retrieve all security filters in data model using [GET /api/model/dataModels/\{dataModelId}/securityFilters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/ms-getDataModelSecurityFilters)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset": "C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Response Body:

```json
{
  "offset": 0,
  "limit": -1,
  "total": 1,
  "securityFilters": [
    {
      "information": {
        "dateCreated": "2025-08-11T07:37:35.858Z",
        "dateModified": "2025-08-11T07:37:35.858Z",
        "versionId": "88DF4A68957941EBBBC69B975B2D011F",
        "primaryLocale": "en-US",
        "objectId": "8981A1EB828F4888959C0C0A435870CC",
        "subType": "md_security_filter",
        "name": "Year > 2015"
      },
      "qualification": {
        "text": "Year (ID) > 2015",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "62EE53C755F64508BAEE99989E9EACCC",
          "predicateText": "Year (ID) > 2015",
          "predicateTree": {
            "function": "greater",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "2015.0"
                }
              }
            ],
            "attribute": {
              "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
              "subType": "attribute",
              "name": "Year"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      },
      "topLevel": [],
      "bottomLevel": []
    }
  ]
}
```

Response Code: 200 (All security filters in data model were returned successfully.)

## Retrieve all security filters with users info in data model

Use [GET /api/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelSecurityFilters).

:::info

To get the authorization token needed to execute the request, use [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the security filter's definition in the response body.

```json
{
  "securityFilters": [
    {
      "id": "8981A1EB828F4888959C0C0A435870CC",
      "name": "Year > 2015",
      "description": "",
      "dateCreated": "2025-08-11T07:37:35.858Z",
      "dateModified": "2025-08-11T07:37:35.858Z",
      "users": [
        {
          "name": "Katharine Shearn",
          "id": "E96A79E011D4BBCE10004694316DE8A4",
          "type": 34,
          "abbreviation": "kshearn",
          "subtype": 8704,
          "dateCreated": "2001-01-02T20:42:34.000+0000",
          "dateModified": "2019-12-04T16:53:47.000+0000",
          "version": "A3930CAE11EA16B600000080EF359083",
          "acg": 255,
          "owner": {
            "name": "Administrator",
            "id": "54F3D26011D2896560009A8E67019608"
          },
          "extType": 0,
          "username": "kshearn",
          "fullName": "Katharine Shearn",
          "initials": "KS"
        }
      ],
      "totalUsers": 1,
      "totalUserGroups": 0
    }
  ]
}
```

Response Code: 200 (All security filters in data model were returned successfully, as well as the users info.)
