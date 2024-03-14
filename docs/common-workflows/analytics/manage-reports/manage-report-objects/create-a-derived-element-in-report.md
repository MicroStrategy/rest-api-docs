---
title: Create a derived element in report
description: This workflow sample demonstrates how to create a derived element in report using REST APIs.
---

<Available since="2021 Update 7" />

This workflow sample demonstrates how to create a new derived element in report.

## Create a derived element in report

You want to create a new derived element in report. The report object ID is `9B9ADA7F464E63CE0D0B709B03BD9370`. The project ID is `091B51154B22036C53CFBB9958B2E8FC`.

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

Sample Response Code: 201 (A new report instance is created successfully.)

### 2. Create a new derived element in report

The embedded elements in derived element can be "list", "filter", "calculation" or "all_other". In this example, you are creating a derived element which has an embedded "list" element. You can find more examples in following sections on this page.

Endpoint: [POST /api/model/reports/\{reportId}/derivedElements](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-postReportDerivedElement)

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
    "name": "list derived element"
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
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/derivedElements' -H "accept: application/json" -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'Content-Type: application/json' -d '{
  "information": {
    "name": "list derived element"
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
}'
```

Sample Response Body: You can view the new derived element’s definition in the body of the response.

```json
{
  "information": {
    "versionId": "A990C4E70AD0423FAF537A1727029F14",
    "primaryLocale": "en-US",
    "objectId": "5ED9E1F465664B7191D186515960E008",
    "subType": "consolidation_element",
    "name": "list derived element",
    "acg": 255,
    "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
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

Sample Response Code: 201 (A new derived element is created successfully in report.)

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
Sample Request Body: Empty
```

Sample Curl:

```bash
curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'
```

Sample Response Body: Empty

Sample Response Code: 204 (The report instance has been deleted successfully.)

## More examples

In the above example, a derived element with "list" element has been created. Here are more examples about how to create a derived element with "filter" element and "calculation" element.

### 1. Filter element

In derived element, we only support [attribute form qualifications](../../../modeling/manage-filter-objects/create-a-filter-object.md#attribute-form-qualifications) and [attribute element list qualifications](../../../modeling/manage-filter-objects/create-a-filter-object.md#attribute-element-list-qualification) for filter. You can find more examples there.

Example: You want to create `{Age Range} = 25 to 34, Under 24` derived element with a filter element.

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

### 2. Calculation element

Example: You want to create `Average({Age Range=Under 24}, 4.0, 5.0)` derived element with a calculation element.

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
