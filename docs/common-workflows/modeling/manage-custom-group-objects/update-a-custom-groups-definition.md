---
title: Update a custom group's definition
sidebar_label: Update a custom group's definition
description: This workflow sample demonstrates how to update a custom group’s definition through the Modeling service.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3c57732e-0689-406a-a6ad-c73ece5960c2?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a custom group’s definition through the Modeling service.

You want to update the definition of the "Customers Value Metric Value Banding" custom group and rename it to "Customers Value Points Banding". The custom group is in the MicroStrategy Tutorial project. The object ID of the custom group is C4E98C9B4BACB6D57CCF58BD95672BF4. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Update the filter's definition

Endpoint: [PUT /api/model/customGroups/{CustomGroupId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-putCustomGroup).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bkf2bee310a9olr23h68dhgsvb"
"X-MSTR-MS-Changeset": "0187393B5F524C8781B7CF86A1A70FB9"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "custom_group",
    "name": "Customers Value Points Banding",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "name": "All Customers",
      "displayOption": "element",
      "qualification": {
        "text": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",
        "tree": {
          "type": "predicate_banding_points",
          "predicateText": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",
          "predicateTree": {
            "level": [
              {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              }
            ],
            "metric": {
              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",
              "subType": "metric",
              "name": "Running Revenue Contribution to All Customers Abs."
            },
            "bandMetricFunction": "value",
            "bandNames": ["bottom 20%", "20%-40%", "40%-60%", "60%-80%", "Top 20%"],
            "points": [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        }
      }
    }
  ]
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups/C4E98C9B4BACB6D57CCF58BD95672BF4" -H "accept: application/json" -H "X-MSTR-AuthToken: bkf2bee310a9olr23h68dhgsvb" -H "X-MSTR-MS-Changeset: 0187393B5F524C8781B7CF86A1A70FB9" -H "Content-Type: application/json" -d "{\"information\":{\"name\":\"Customers Value Points Banding\"},\"options\":{\"hierarchyDisplay\":true,\"subtotalsDisplay\":false,\"elementHeaderAboveChild\":true},\"elements\":[{\"name\":\"All Customers\",\"displayOption\":\"element\",\"qualification\":{\"text\":\"Set of Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)\",\"tree\":{\"type\":\"predicate_banding_points\",\"predicateText\":\"Set of Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)\",\"predicateTree\":{\"level\":[{\"objectId\":\"8D679D3C11D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer\"}],\"metric\":{\"objectId\":\"4C051BCD11D3E877C000B3B2D86C964F\",\"subType\":\"metric\",\"name\":\"Running Revenue Contribution to All Customers Abs.\"},\"bandMetricFunction\":\"value\",\"bandNames\":[\"bottom 20%\",\"20%-40%\",\"40%-60%\",\"60%-80%\",\"Top 20%\"],\"points\":[0,0.2,0.4,0.6,0.8,1]}}}}]}"
```

Sample Response Body: You can view the custom group's new definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-06-17T12:18:16.462Z",
    "dateModified": "2021-06-17T12:18:24.204Z",
    "versionId": "E24959DD554D98FE656EA898E332103E",
    "primaryLocale": "en-US",
    "objectId": "C4E98C9B4BACB6D57CCF58BD95672BF4",
    "subType": "custom_group",
    "name": "Customers Value Points Banding",
    "description": "Custom group defined with metric banding on Running Revenue Contribution to all Customers Abs."
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "id": "040A250F4DFD4052B918A1F2A42D02C9",
      "name": "All Customers",
      "displayOption": "element",
      "qualification": {
        "text": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",
        "tree": {
          "type": "predicate_banding_points",
          "predicateId": "040A250F4DFD4052B918A1F2A42D02C9",
          "predicateText": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",
          "predicateTree": {
            "level": [
              {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              }
            ],
            "metric": {
              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",
              "subType": "metric",
              "name": "Running Revenue Contribution to All Customers Abs."
            },
            "bandMetricFunction": "value",
            "bandNames": ["bottom 20%", "20%-40%", "40%-60%", "60%-80%", "Top 20%"],
            "points": [0, 0.2, 0.4, 0.6, 0.8, 1]
          }
        }
      }
    }
  ]
}
```

Response Code: 200 (The custom group's definition is updated successfully in the changeset.)
