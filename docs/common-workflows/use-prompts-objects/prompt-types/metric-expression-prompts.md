---
title: Metric expression prompts
description: can define a prompt as "Get data when Avg Revenue per Customer is greater than 10".
---

The metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the date in a report or dossier. For example, you can define a prompt as _Get data when Avg Revenue per Customer is greater than 10_.

Use REST APIs to perform the following actions on metric expression prompts:

- [Get information about a metric expression prompt](#get-information-about-a-metric-expression-prompt)
- [Get the metric expression prompt's available answer](#get-the-metric-expression-prompts-available-answer)
- [Answer a metric expression prompt](#answer-a-metric-expression-prompt)
  - [Provide specific prompt answers](#provide-specific-prompt-answers)
  - [Use default prompt answers](../answer-prompts.md#use-default-prompt-answers)
  - [Close prompts without answers](../answer-prompts.md#close-prompts-without-answers)

## Get information about a metric expression prompt

Use the following REST API endpoints to get information about metric expression prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:

- GET `/api/documents/{id}/prompts`
- GET `/api/documents/{id}/instances/{instanceId}/prompts`
- GET `/api/reports/{reportId}/prompts`
- GET `/api/reports/{reportId}/instances/{instanceId}/prompts`

Provide the ID of the document, dossier, or report in the path of the request. You also need to provide the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information. All available parameters for the prompt definition are shown below.

| Name     | Description                                                                                                                                          | Data Type |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| id       | The ID of the prompt                                                                                                                                 | string    |
| key      | The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report. | string    |
| name     | The name of the prompt                                                                                                                               | string    |
| title    | The title of the prompt                                                                                                                              | string    |
| type     | The type of prompt; Enum: [ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]                                                                            | string    |
| required | An indicator that specifies if a prompt is required                                                                                                  | boolean   |
| closed   | An indicator that specifies if a prompt is closed                                                                                                    | boolean   |

The sample code below contains a metric expression prompt definition in a format that is supported by the API.

```json
{
  "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",
  "name": "test prompt",
  "title": "test prompt",
  "type": "EXPRESSION",
  "required": true,
  "closed": false,
  "max": 2,
  "min": 1,
  "defaultAnswer": {
    "content": "{Avg Revenue per Customer} > 10",
    "expression": {
      "level": {
        "type": "attribute",
        "objects": [
          {
            "id": "4C05177011D3E877C000B3B2D86C964F",
            "name": "day"
          }
        ]
      },
      "operator": "Greater",
      "operands": [
        {
          "type": "metric",
          "id": "4C05177011D3E877C000B3B2D86C964F",
          "name": "Revenue"
        },
        {
          "type": "constant",
          "dataType": "Real",
          "value": "10"
        }
      ]
    }
  },
  "answers": {
    "content": "{Avg Revenue per Customer} > 10",
    "expression": {
      "level": {
        "type": "attribute",
        "objects": [
          {
            "id": "4C05177011D3E877C000B3B2D86C964F",
            "name": "day"
          }
        ]
      },
      "operator": "Greater",
      "operands": [
        {
          "type": "metric",
          "id": "4C05177011D3E877C000B3B2D86C964F",
          "name": "Revenue"
        },
        {
          "type": "constant",
          "dataType": "Real",
          "value": "10"
        }
      ]
    }
  }
}
```

The sample code below contains a metric expression prompt definition in a format that is _not_ supported by the API.

```json
{
    "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",
    "name": "test prompt",
    "title": "test prompt",
    "type": "EXPRESSION",
    "required": true,
    "max": 2,
    "min": 1,
    "defaultAnswer": {
      "content": "{Avg Revenue per Customer} > 10",
        "xml": "xml": "<exp nc="3">{Avg Revenue per Customer} > 10 <nd et="10" nt="4" dmt="7" ddt="-1" is_indp_csi="1" cc="2"><nd et="1" nt="5" dmt="1" ddt="-1" is_indp_csi="1" cc="0"><mt rfd="9">Avg Revenue per Customer</mt></nd><nd et="1" nt="3" dmt="1" ddt="3" is_indp_csi="1" cc="0"><cst ddt="5">10</cst></nd><op fnt="8" fg="0" apply_order="0" node="0"/></nd></exp>"
    },
    "answers":{
      "content": "{Avg Revenue per Customer} > 10",
        "xml": "xml": "<exp nc="3">{Avg Revenue per Customer} > 10 <nd et="10" nt="4" dmt="7" ddt="-1" is_indp_csi="1" cc="2"><nd et="1" nt="5" dmt="1" ddt="-1" is_indp_csi="1" cc="0"><mt rfd="9">Avg Revenue per Customer</mt></nd><nd et="1" nt="3" dmt="1" ddt="3" is_indp_csi="1" cc="0"><cst ddt="5">10</cst></nd><op fnt="8" fg="0" apply_order="0" node="0"/></nd></exp>"
    }
  }
```

Besides the commonly-used fields, the metric expression prompt also contains the fields shown below.

| Field         | Section    | Description                                                                                                                                                                                                                                                                                  |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| min           |            | The minimum number of qualifications that must be supplied to answer the prompt. The qualification here has the same meaning as [operator](../../filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/supported-operators.md).                  |
| max           |            | The maximum number of qualifications that can be supplied to answer the prompt.                                                                                                                                                                                                              |
| defaultAnswer | content    | Describes the default answer expression's content.                                                                                                                                                                                                                                           |
|               | expression | Reuse the [JSON Data API view filter's format](./../../filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/filter-report-and-cube-instances-using-view-filters.md). This field appears when the prompt's expression is supported by the prompt. |
|               | xml        | The xml that represents the prompt's expression. This field appears when the prompt's expression is not supported.                                                                                                                                                                           |
| answers       | content    | Describes the answer expression's content.                                                                                                                                                                                                                                                   |
|               | expression | Reuse the [JSON Data API view filter's format](./../../filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/filter-report-and-cube-instances-using-view-filters.md). This field appears when the prompt's expression is supported by the prompt. |
|               | xml        | The xml that represents the prompt's expression. This field appears when the prompt's expression is not supported.                                                                                                                                                                           |

## Get the metric expression prompt's available answer

Use the following REST API endpoint to get a metric expression prompt's available answer:

GET `/api/reports/{reportId}/instances/{instanceId}/prompts/{promptIdentifier}/objects`

The metric this endpoint returns can be used when you generate the expression to answer the prompt. The operator should work on metrics.

The sample code below contains a metric expression prompt's available answer.

```json
{
  "objects": [
    {
      "name": "Profit",
      "id": "4C051DB611D3E877C000B3B2D86C964F",
      "type": "metric"
    }
  ]
}
```

## Answer a metric expression prompt

Use the following REST API endpoints to answer a metric expression prompt applied to a dossier, document, or report:

- PUT `/api/documents/{id}/instances/{instanceId}/prompts/answers`
- PUT `/api/reports/{reportId}/instances/{instanceId}/prompts/answers`

### Provide specific prompt answers

:::

All available parameters for the prompt answer are shown below.

| Name       | Description                                                                                                                                          | Data Type | Required? |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| key        | The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report. | string    |
| id         | The object ID of the prompt                                                                                                                          | string    |           |
| name       | The name of the prompt                                                                                                                               | string    |           |
| type       | The type of prompt; Enum: [ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]                                                                            | string    | yes       |
| useDefault | An indicator that specifies if the default answer should be used. If this is set to true, the values are ignored.                                    | boolean   |           |

The sample code below answers a metric expression prompt.

```json
{
  "prompts": [
    {
      "id": "753C65EB402C44D3A991F285D3CB7F6D",
      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",
      "name": "test",
      "useDefault": false,
      "type": "EXPRESSION",
      "answers": {
        "content": "{Avg Revenue per Customer} > 10",
        "expression": {
          "level": {
            "type": "attribute",
            "objects": [
              {
                "id": "4C05177011D3E877C000B3B2D86C964F",
                "name": "day"
              }
            ]
          },
          "operator": "Greater",
          "operands": [
            {
              "type": "metric",
              "id": "4C05177011D3E877C000B3B2D86C964F",
              "name": "Revenue"
            },
            {
              "type": "constant",
              "dataType": "Real",
              "value": "10"
            }
          ]
        }
      }
    }
  ]
}
```

:::info

Since some operations are not supported in the [JSON Data API view filter](./../../filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/filter-report-and-cube-instances-using-view-filters.md), we provide a way for you to use XML to answer the prompt, as shown in the code sample below.

:::

```json
{
  "prompts": [
    {
      "id": "753C65EB402C44D3A991F285D3CB7F6D",
      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",
      "name": "test",
      "useDefault": false,
      "type": "EXPRESSION",
      "answers": {
        "content": "{Avg Revenue per Customer} > 10",
        "xml": "<exp nc='3'>{Avg Revenue per Customer} > 10 <nd et='10' nt='4' dmt='7' ddt='-1' is_indp_csi='1' cc='2'><nd et='1' nt='5' dmt='1' ddt='-1' is_indp_csi='1' cc='0'><mt rfd='9'>Avg Revenue per Customer</mt></nd><nd et='1' nt='3' dmt='1' ddt='3' is_indp_csi='1' cc='0'><cst ddt='5'>10</cst></nd><op fnt='8' fg='0' apply_order='0' node='0'/></nd></exp>"
      }
    }
  ]
}
```

Some things to keep in mind:

- You only need to provide one **id**, **key**, or **name**. **Key** is preferred.
- The **useDefault** field is optional, since the default value is false.
- Content in the answer is optional. Its values do not affect the resulting answer. The default value is **""**.

A lighter version of the sample code is provided below.

```json
{
  "prompts": [
    {
      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",
      "type": "EXPRESSION",
      "answers": {
        "expression": {
          "level": {
            "type": "attribute",
            "objects": [
              {
                "id": "4C05177011D3E877C000B3B2D86C964F",
                "name": "day"
              }
            ]
          },
          "operator": "Greater",
          "operands": [
            {
              "type": "metric",
              "id": "4C05177011D3E877C000B3B2D86C964F",
              "name": "Revenue"
            },
            {
              "type": "constant",
              "dataType": "Real",
              "value": "10"
            }
          ]
        }
      }
    }
  ]
}
```
