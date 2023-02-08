---
title: Retrieve a filter's definition within a changeset
sidebar_label: Retrieve a filter's definition within a changeset
description: This workflow sample demonstrates how to retrieve a filter's definition within a changeset.
---

<Available since="2021" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-67e58dfc-a902-47a6-9166-a26e308ef644?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a filter's definition within a changeset.

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md). If you plan to use the response of `GET /api/model/filters/{filterId}` to create a new filter or update the filter's definition, it is recommended to associate all requests to one changeset.

1. Create a changeset.
1. [Get the filter's definition within a changeset.](#get-a-filter-definition-within-a-changeset)
1. Delete the changeset.

You want to get the definition of the "Year > 2015" filter object. The object ID of the filter is `8018C24FEBC4406CB9E36838C01C82D1` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Get a filter definition within a changeset

Endpoint: [GET /api/model/filters/{filterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-getFilterDetails)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/filters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

You can view the filter's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2020-11-17T16:42:39.776Z",
    "dateModified": "2020-11-17T16:42:57.268Z",
    "versionId": "F253FD1211EB28F32AE10080EFC56102",
    "primaryLocale": "en-US",
    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",
    "subType": "filter",
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
  }
}
```

Response Code: 200 (The filter's definition is returned successfully.)
