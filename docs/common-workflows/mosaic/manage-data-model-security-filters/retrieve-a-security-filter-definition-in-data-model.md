---
title: Retrieve a security filter definition in data model
sidebar_label: Retrieve a security filter definition in data model
description: This workflow sample demonstrates how to retrieve a security filter's definition in data model through the Modeling service.
---

<Available since="Strategy (August 2025)" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a security filter's definition in data model through the Modeling service.

1. Create a changeset using `POST /api/model/changesets`
1. [Retrieve a data model's security filter's definition using `GET /api/model/dataModels/{dataModelId}/securityFilters/{securityFilterId}`](#retrieve-a-data-models-security-filters-definition)
1. [Retrieve a data model's security filter's definition in tokens format using `GET /api/model/dataModels/{dataModelId}/securityFilters/{securityFilterId}?showFilterTokens=true`](#retrieve-a-data-models-security-filters-definition-in-tokens-format)
1. Delete the changeset using `DELETE /api/model/changesets/{changesetId}`

### Create a changeset

Use [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",
  "dateCreated": "2025-08-11T16:38:09.825650Z",
  "dateModified": "2025-08-11T16:38:09.825665Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 200 (A new changeset is created successfully.)

### Retrieve a data model's security filter's definition

In this workflow sample, you want to get the definition of the "Year > 2015" security filter object. The data model ID is `7F071F619BE244C7B6CDC2626EBB1C6C`. The object ID of the security filter is `8981A1EB828F4888959C0C0A435870CC` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

Use [GET /api/model/dataModels/\{dataModelId}/securityFilters/\{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/ms-getDataModelSecurityFilter).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters/8981A1EB828F4888959C0C0A435870CC" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

You can view the security filter's definition in the response body.

```json
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
```

Response Code: 200 (The data model's security filter's definition is returned successfully.)

### Retrieve a data model's security filter's definition in tokens format

In this workflow sample, you want to get the definition of the "Year > 2015" security filter object in data model. The data model ID is `7F071F619BE244C7B6CDC2626EBB1C6C`. The object ID of the security filter is `8981A1EB828F4888959C0C0A435870CC` in the MicroStrategy Tutorial project. This procedure is similar to [Retrieve a data model's security filter's definition](#retrieve-a-data-models-security-filters-definition), except you want to enable the `showFilterTokens` parameter to retrieve the security filter's definition in tokens format.

:::tip

Security filter tokens are used the same as filter tokens. Tokens are a semi-structured representation of expression text that includes object references. For example, let's say a security filter expression is "Revenue > Cost". When the security filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).<br/><br/>A security filter's "qualification" is presented in the following formats:

- "text": A human-readable, but non-parsable text, describing a filter's qualification.
- "tree": A tree data structure fully defining the filter's qualification.
- "tokens": A list of parsed tokens that define a filter's qualification. Be aware that generating tokens requires additional time.

If `showFilterTokens` is omitted or `false`, only "text" and "tree" formats return.<br/>If `showFilterTokens` is `true`, all "text", "tree" and "tokens" formats return.

:::

To get the security filter's definition in tokens format, use [GET /api/model/dataModels/\{dataModelId}/securityFilters/\{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/ms-getDataModelSecurityFilter) with `showFilterTokens=true`.

Sample Curl:

```bash
curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters/8981A1EB828F4888959C0C0A435870CC?showFilterTokens=true" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8""
```

Sample Response Body:

You can view the security filter's definition in the body of the response. Note that compared to [Retrieve a data model's security filter's definition](#retrieve-a-data-models-security-filters-definition), "qualification"`has an extra`"tokens"` field.

```json
{
  "information": {
    "dateCreated": "2025-08-11T07:37:35.858Z",
    "dateModified": "2025-08-11T07:37:35.858Z",
    "versionId": "6602277211EB330B01430080EF051B59",
    "primaryLocale": "en-US",
    "objectId": "8981A1EB828F4888959C0C0A435870CC",
    "subType": "md_security_filter",
    "name": "Year > 2015"
  },
  "qualification": {
    "text": "Year (ID) > 2015",
    "tree": {
      "type": "predicate_form_qualification",
      "predicateId": "A0D326D440304DC4B07F12DA6631447F",
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
    },
    "tokens": [
      {
        "level": "resolved",
        "state": "initial",
        "value": "%",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "Year@ID",
        "type": "object_at_form",
        "target": {
          "dateCreated": "2001-01-02T20:48:10.000Z",
          "dateModified": "2012-01-27T12:00:32.000Z",
          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",
          "primaryLocale": "en-US",
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "attributeForm": {
          "objectId": "45C11FA478E745FEA08D781CEA190FE5"
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": ">",
        "type": "character",
        "target": {
          "dateCreated": "2001-01-02T20:47:41.000Z",
          "dateModified": "2018-01-29T21:13:06.000Z",
          "versionId": "332E00E411E8053925F00080EF7500C5",
          "primaryLocale": "en-US",
          "objectId": "8107C317DD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": ">",
          "description": "Returns TRUE if the first value is greater than the second value."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "2015.0",
        "type": "integer"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "",
        "type": "end_of_text"
      }
    ]
  },
  "topLevel": [],
  "bottomLevel": []
}
```

### Delete a changeset

Use [DELETE /api/model/changesets/\{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/changesets/0E9F01172ECF4BA2BB510F7B9FB4F6E8" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully)
