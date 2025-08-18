---
title: Update a security filter object in data model
sidebar_label: Update a security filter object in data model
description: This workflow sample demonstrates how to update a security filter object in data model through the Modeling service.
---

<Available since="Strategy ONE (August 2025)" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a security filter definition in a data model using the Modeling service.

1. Create a changeset using `POST /api/model/changesets`
1. [Update the security filter's definition in data model using `PUT /api/model/dataModels/{dataModelId}/securityFilters/{securityFilterId}`](#update-the-security-filters-definition-in-data-model-using-put-apimodeldatamodelsdatamodelidsecurityfilterssecurityfilterid)
1. Commit the changeset using `POST /api/model/changesets/{changesetId}/commit`
1. Delete the changeset using `DELETE /api/model/changesets/{changesetId}`

In this workflow example, you want to update the definition of the `"Year > 2015"` security filter object with a new definition of `"Year@ID > 2020"` and a new object name of `"Year > 2020"`. The data model ID is `7F071F619BE244C7B6CDC2626EBB1C6C`. The object ID of the security filter is `8981A1EB828F4888959C0C0A435870CC`.

:::info

To get the authorization token needed to execute the request, use [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

## Update the security filter's definition in data model using [PUT /api/model/dataModels/\{dataModelId}/securityFilters/\{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/ms-putDataModelSecurityFilter)

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
curl -X PUT "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters/8981A1EB828F4888959C0C0A435870CC" -H "accept: application/json" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1" -H "Content-Type: application/json" -d '{"information":{"name":"Year > 2020"},"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"2020"}}],"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"form":{"objectId":"45C11FA478E745FEA08D781CEA190FE5","subType":"attribute_form_system","name":"ID"}}}}}'
```

Sample Response Body:

You can view the data model's security filter's definition in the response body.

```json
{
  "information": {
    "dateCreated": "2025-08-11T07:37:35.858Z",
    "dateModified": "2025-08-11T07:43:23.784Z",
    "versionId": "C3945CBF4048805AD0F397B6DF3E3DA6",
    "primaryLocale": "en-US",
    "objectId": "8981A1EB828F4888959C0C0A435870CC",
    "subType": "md_security_filter",
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
  },
  "topLevel": [],
  "bottomLevel": []
}
```

Response Code: 200 (The data model's security filter's definition is updated successfully in the changeset.)
