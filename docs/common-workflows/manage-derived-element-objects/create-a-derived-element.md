---
title: Workflow Sample - Create a Derived Element
sidebar_label: Create a Derived Element
description: This workflow sample demonstrates how to create a new derived element object through Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d4a5b7c7-3dba-46fc-acce-0683a23bb1fe?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new derived element object through Modeling service.

- [Create a Derived Element Using a List Element](#create-a-derived-element-using-a-list-element)
  1. [Create a changeset](#create-a-changeset)
  1. [Create a derived element](#create-a-new-derived-element)
  1. [Commit the changeset](#commit-the-changeset)
  1. [Delete the changeset](#delete-the-changeset)
- [More Examples](#more-examples)
  - [Create a Derived Element Using a Filter Element](#create-a-derived-element-using-a-filter-element)
  - [Create a Derived Element Using a Calculation Element](#create-a-derived-element-using-a-filter-element)

## Create a Derived Element Using a List Element

You want to create a new `"{Age Range} = 25 to 34, Under 24"` derived element object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `091B51154B22036C53CFBB9958B2E8FC`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::tip

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

### Create a changeset

Use [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "091B51154B22036C53CFBB9958B2E8FC"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://10.23.10.77:8443/MicroStrategyLibrary/api/model/changesets?schemaEdit=false" -H "accept: application/json" -H "X-MSTR-AuthToken: agei7vi3q4nn0i6r547r495vaf" -H "X-MSTR-ProjectID: 091B51154B22036C53CFBB9958B2E8FC"
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
  "mstrProjectId": "091B51154B22036C53CFBB9958B2E8FC",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

### Create a new derived element

Use [POST /api/model/derivedElements](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Derived%20Elements/ms-postDerivedElement).

The embedded elements in a derived element can be `"list"`, `"filter"`, `"calculation"` or `"all_other"`. In this example, you are creating a derived element that has an embedded `"list"` element. To create a derived element with a `"filter"` or `"calculation"` element, see [More Examples](#more-examples).

:::tip

Each derived element must have exactly one `"all_other"` element.

:::

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body:

:::tip

For more details on how to set format properties, see [Format Samples for Derived Elements](./format-samples.md).

:::

```json
{
  "information": {
    "name": "list derived element",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "attribute": {
    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
    "name": "Age Range"
  },
  "elements": [
    {
      "name": "Age under 34",
      "type": "list",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "individual_items",
        "subtotal": "individual_items",
        "includeIndividual": true
      },
      "text": "Under 24, 25 to 34",
      "elements": [
        {
          "display": "Under 24",
          "elementId": "h1"
        },
        {
          "display": "25 to 34",
          "elementId": "h2"
        }
      ]
    },
    {
      "name": "All Other",
      "type": "all_other",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "disable"
      }
    }
  ]
}
```

Sample Curl:

```bash
curl -X POST "https://10.23.10.77:8443/MicroStrategyLibrary/api/model/derivedElements" -H "accept: application/json" -H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" -H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" -H "Content-Type: application/json" -d "{\"information\":{\"subType\":\"consolidation_element\",\"name\":\"list derived element\",\"destinationFolderId\":\"98FE182C2A10427EACE0CD30B6768258\"},\"attribute\":{\"objectId\":\"5603951E4FE1BC04A44E44B85BBB8ED2\",\"subType\":\"attribute\",\"name\":\"Age Range\"},\"elements\":[{\"name\":\"Age under 34\",\"type\":\"list\",\"format\":{\"header\":[],\"values\":[]},\"options\":{\"display\":\"individual_items\",\"subtotal\":\"individual_items\",\"includeIndividual\":true},\"text\":\"Under 24, 25 to 34\",\"elements\":[{\"display\":\"Under 24\",\"elementId\":\"h1\"},{\"display\":\"25 to 34\",\"elementId\":\"h2\"}]},{\"id\":\"087A10774C48EA58DEBDEB8C79C7AD53\",\"name\":\"All Other\",\"type\":\"all_other\",\"format\":{\"header\":[],\"values\":[]},\"options\":{\"display\":\"this_element\",\"subtotal\":\"disable\"}}]}"
```

Sample Response Body:

You can view the new derived element's definition in the body of the response.

```json
{
  "information": {
    "versionId": "A990C4E70AD0423FAF537A1727029F14",
    "primaryLocale": "en-US",
    "objectId": "5ED9E1F465664B7191D186515960E008",
    "subType": "consolidation_element",
    "name": "list derived element",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "attribute": {
    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
    "subType": "attribute",
    "name": "Age Range"
  },
  "elements": [
    {
      "id": "772CE3142D5D40B38BFC57BC26664143",
      "name": "Age under 34",
      "type": "list",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "individual_items",
        "subtotal": "individual_items",
        "includeIndividual": true
      },
      "text": "Under 24, 25 to 34",
      "elements": [
        {
          "display": "Under 24",
          "elementId": "h1"
        },
        {
          "display": "25 to 34",
          "elementId": "h2"
        }
      ]
    },
    {
      "id": "B9A54B5DE9FB4D4E8FCEEBFECB1A1808",
      "name": "All Other",
      "type": "all_other",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "disable"
      }
    }
  ]
}
```

Sample Response Code: 201 (A new derived element is created successfully in the changeset.)

### Commit the changeset

Use [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Curl:

```bash
curl -X POST "https://10.23.10.77:8443/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

```json
{
  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",
  "dateCreated": "2020-11-17T17:42:13.312629Z",
  "dateModified": "2020-11-17T17:44:30.814816Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "091B51154B22036C53CFBB9958B2E8FC",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

### Delete the changeset

Use [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Curl:

```bash
curl -X DELETE "https://10.23.10.77:8443/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset is deleted successfully.)

## More Examples

In the above workflow, you created a derived element with `"list"` element. This section contains more examples of how to create a derived element with a `"filter"` or `"calculation"` element.

### Create a Derived Element Using a Filter Element

In a derived element, only [attribute form qualifications](../manage-filter-objects/create-a-filter-object.md#attribute-form-qualifications) and [attribute element list qualifications](../manage-filter-objects/create-a-filter-object.md#attribute-element-list-qualification) are supported for filters. See those pages for more samples.

Create an `{Age Range} = 25 to 34, Under 24` derived element with a filter element.

Sample Response Body:

```json
{
  "information": {
    "name": "filter derived element",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "attribute": {
    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
    "name": "Age Range"
  },
  "elements": [
    {
      "name": "FilterElementList",
      "type": "filter",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "individual_items",
        "subtotal": "this_element",
        "includeIndividual": false
      },
      "qualification": {
        "text": "{Age Range} = 25 to 34, Under 24",
        "tree": {
          "type": "predicate_element_list",
          "predicateId": "2BD916DF10BA4B5CB8CFFF0A3E1F9729",
          "predicateTree": {
            "attribute": {
              "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
              "subType": "attribute",
              "name": "Age Range"
            },
            "elements": [
              {
                "display": "25 to 34",
                "elementId": "h2"
              },
              {
                "display": "Under 24",
                "elementId": "h1"
              }
            ],
            "function": "in"
          }
        }
      }
    },
    {
      "id": "087A10774C48EA58DEBDEB8C79C7AD53",
      "name": "All Other",
      "type": "all_other",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "disable"
      }
    }
  ]
}
```

### Create a Derived Element Using a Calculation Element

Create an `Average({Age Range=Under 24}, 4.0, 5.0)` derived element with a calculation element.

Sample Response Body:

```json
{
  "information": {
    "name": "calculation derived element",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "attribute": {
    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
    "name": "Age Range"
  },
  "elements": [
    {
      "name": "New Calculation 1",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "options": {
        "display": "this_element",
        "subtotal": "this_element",
        "includeIndividual": false
      },
      "expression": {
        "text": "Average(Under 24,4,5)",
        "tree": {
          "function": "average",
          "children": [
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Under 24",
                  "elementId": "h1",
                  "attribute": {
                    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
                    "subType": "attribute",
                    "name": "Age Range"
                  }
                }
              ]
            },
            {
              "type": "constant",
              "variant": {
                "type": "double",
                "value": "4.0"
              }
            },
            {
              "type": "constant",
              "variant": {
                "type": "double",
                "value": "5.0"
              }
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "name": "All Other",
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
