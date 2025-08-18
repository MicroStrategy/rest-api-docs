---
title: Create a security filter object in data model
sidebar_label: Create a security filter object in data model
description: This workflow sample demonstrates how to create a security filter object in data model through the Modeling service.
---

<Available since="Strategy ONE (August 2025)" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a security filter object in data model through the Modeling service.

1. Create a changeset.
1. [Create a security filter in data model.](#create-a-security-filter-in-data-model)
1. Commit a changeset.
1. Delete the changeset.

In this workflow sample, you want to create a "Year > 2015" security filter object in data model in the MicroStrategy Tutorial project. The data model ID is `7F071F619BE244C7B6CDC2626EBB1C6C`. The MicroStrategy Tutorial project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

## Create a security filter in data model

Use [POST /api/model/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/ms-postDataModelSecurityFilter) with `"tree"` format for the `"qualifications"`. For more examples of creating a new security filter, see [Security Filters](/docs/common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object.md) section.

To create a security filter, in the request body, the security filter’s "qualification" must be in either "tree" or "tokens" format. If you add both formats, only "tree" is used.

If you create an attribute element list qualification, only the “tree“ format is supported.

If you create a qualification with inline custom expressions, only the "tree" format is supported.

Any embedded objects (`"isEmbedded":true"`) cannot be used to create a new security filter. Any attributes outside the data model cannot be used to create a new security filter.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"
"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "md_security_filter",
    "name": "Year > 2015"
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

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d '{"information":{"subType":"filter","name":"Year > 2015","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"2015.0"}}],"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"form":{"objectId":"45C11FA478E745FEA08D781CEA190FE5","subType":"attribute_form_system","name":"ID"}}}}}'
```

Sample Response Body:

You can view the new filter's definition in the response body.

```json
{
  "information": {
    "versionId": "88DF4A68957941EBBBC69B975B2D011F",
    "primaryLocale": "en-US",
    "objectId": "8981A1EB828F4888959C0C0A435870CC",
    "subType": "md_security_filter",
    "name": "Year > 2015",
    "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
  },
  "qualification": {
    "text": "Year (ID) > 2015",
    "tree": {
      "type": "predicate_form_qualification",
      "predicateId": "43F6594B23BF4510A090F5AB3C44358F",
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

Response Code: 201 (A new data model security filter is created successfully in the changeset.)
