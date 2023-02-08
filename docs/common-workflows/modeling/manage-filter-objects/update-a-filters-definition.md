---
title: Update a filter's definition
sidebar_label: Update a filter's definition
description: This workflow sample demonstrates how to update a filter's definition through the Modeling service.
---

<Available since="2021" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5bb60de6-52e2-43c4-87bc-b404125f96ad?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a filter's definition through the Modeling service.

1. Create a changeset using `POST /api/model/changesets`
1. Update the filter's definition using [`PUT /api/model/filters/{FilterId}`](#update-the-filters-definition-using-put-apimodelfiltersfilterid)
1. Commit the changeset using `POST /api/model/changesets/{changesetId}/commit`
1. Delete the changeset using `DELETE /api/model/changesets/{changesetId}`

You want to update the definition of the "Year > 2015" filter and rename it to "Year > 2020". The filter is in the MicroStrategy Tutorial project. The object ID of the filter is 8018C24FEBC4406CB9E36838C01C82D1. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

## Update the filter's definition using [PUT /api/model/filters/{FilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-ms-postFilter)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset": "C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Request Body:

```json
{
  "information": {
    "name": "Year > 2020"
  },
  "qualification": {
    "tree": {
      "type": "predicate_form_qualification",
      "predicateTree": {
        "function": "greater",
        "parameters": [
          {
            "parameterType": "constant",
            "constant": {
              "type": "double",
              "value": "2020"
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

Sample Curl:

```bash
curl -X PUT "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/filters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1" -H "Content-Type: application/json" -d '{"information":{"name":"Year > 2020"},"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"2020"}}],"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"form":{"objectId":"45C11FA478E745FEA08D781CEA190FE5","subType":"attribute_form_system","name":"ID"}}}}}'
```

Sample Response Body: You can view the filter's new definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2020-11-17T17:37:35.858Z",
    "dateModified": "2020-11-17T17:43:23.784Z",
    "versionId": "63E6667411EB28FC2AC10080EFB54002",
    "primaryLocale": "en-US",
    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",
    "subType": "filter",
    "name": "Year > 2020"
  },
  "qualification": {
    "text": "Year (ID) > 2020",
    "tree": {
      "type": "predicate_form_qualification",
      "predicateId": "89AECC7DAB354B4A933E83E33928C670",
      "predicateText": "Year (ID) > 2020",
      "predicateTree": {
        "function": "greater",
        "parameters": [
          {
            "parameterType": "constant",
            "constant": {
              "type": "double",
              "value": "2020.0"
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

Response Code: 200 (The filter's definition is updated successfully in the changeset.)
