---
title: Attribute Qualification Prompts
description: The attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user that executes the report can select elements to define their report filter.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-6fe150ae-169d-441e-8d1d-311c78db3663?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

The attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user that executes the report can select elements to define their report filter.

You can use REST APIs to perform the following actions on attribute qualification prompts:

- [Get Information About an Attribute Qualification Prompt](#get-information-about-an-attribute-qualification-prompt)
- [Get the Attribute Qualification Prompt's Available Objects](#get-the-attribute-qualification-prompts-available-objects)
- [Get the Elements of an Attribute](#get-the-elements-of-an-attribute)
- [Answer an Attribute Qualification Prompt](#answer-an-attribute-qualification-prompt)
  - [Provide Specific Prompt Answers](#provide-specific-prompt-answers)

## Get Information About an Attribute Qualification Prompt

Use the following REST API endpoints to get information about attribute qualification prompts applied to dossier, document, and report objects in the metadata, as well as instance of those objects:

- GET `/api/documents/{id}/prompts`
- GET `/api/documents/{id}/instances/{instanceId}/prompts`
- GET `/api/reports/{reportId}/prompts`
- GET `/api/reports/{reportId}/instances/{instanceId}/prompts`

Provide the ID of the document, dossier, or report in the path of the request. You also need to provide the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information. All available parameters for the prompt definition are shown below.

| Name     | Description                                                                                                                                          | Data Type |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --- | --- |
| id       | The ID of the prompt                                                                                                                                 | string    |
| key      | The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report. | string    |
| name     | The name of the prompt                                                                                                                               | string    |
| title    | The title of the prompt                                                                                                                              | string    |
| type     | The type of prompt; Enum: [ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]                                                                            | string    |
| required | An indicator that specifies if a prompt is required                                                                                                  | boolean   |
| closed   | An indicator that specifies if a prompt is closed                                                                                                    | boolean   |     |     |

The sample code below contains an attribute qualification prompt definition.

```json
{
    "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",
    "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",
    "name": "test prompt",
    "title": "test prompt",
    "type": "EXPRESSION",
    "required": true,
    "closed": false
    "max": 2,
    "min": 1,
    "maxElementsPerSelection": -1,
    "defaultAnswer": {
        "content": "Category ID In 1, 2, 3, 4, 5",
        "xml": "<exp></exp>",
        "expression": {
            "operator": "In",
            "operands": [
              {
                "type": "form",
                "attribute":{
                  "id": "8D679D3711D3E4981000E787EC6DE8A4",
                  "name": "Category"
                },
                "form": {
                  "id": "45C11FA478E745FEA08D781CEA190FE5",
                  "name": "ID"
                }
              },
              {
                "type": "constants",
                "dataType": "Real",
                "values": ["1", "2", "3", "4", "5"]
              }
           ]
        }
    },
    "answers": {
        "content": "Category In List Books, Movies",
        "xml": "<exp></exp>",
        "expression": {
            "operator": "In",
            "operands": [
              {
                "type": "attribute",
                "id": "8D679D3711D3E4981000E787EC6DE8A4",
                "name": "Category"
              },
              {
                "type": "elements",
                "elements": [
                  {
                    "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",
                    "name": "Books"
                  },
                  {
                    "id": "h2;8D679D3711D3E4981000E787EC6DE8A4",
                    "name": "Electronics"
                  }
                ]
              }
           ]
        }
    }
}
```

Besides the commonly-used fields, the attribute qualification prompt also contains the following field:

**maxElementsPerSelection** The maximum number of elements that can be supplied to answer the prompt per selection. The default setting of **-1** means there is no limit to the maximum number of elements.

## Get the Attribute Qualification Prompt's Available Objects

Use the following REST API endpoints to get an attribute qualification prompt's available answer:

- GET `/api/reports/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects`
- GET `/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects`

In an attribute qualification prompt, the available objects returned by this endpoint, as well as the objects used to answer the prompt, are attributes that contain the attribute ID/name and its form ID/name. The level prompt provides the user with a list of available answers. These answers can come from three different sources:

- Specified attribute
- Result of a search object
- Predefined list of objects

The sample code below contains an attribute qualification prompt's available answer.

```json
[
  {
    "id": "C11D3E4981000E8D679D3787EC6DE8A4",
    "name": "Day",
    "type": "attribute",
    "forms": [
      {
        "id": "4C05177011D3E877C000B3B2D86C964F",
        "name": "ID"
      }
    ]
  }
]
```

## Get the Elements of an Attribute

After getting an attribute qualification prompt's available objects, the user may need to get the elements of some attributes to construct their own view filter expression. Use the following REST API endpoints to retrieve the elements of an attribute:

GET `/api/{reportId}/instances/{instanceId}/attributes/{attributeId}/elements`

The sample code below contains the definition of the elements of an attribute.

```json
[
  {
    "name": "2014",
    "id": "h2014;;2014"
  },
  {
    "name": "2015",
    "id": "h2015;;2015"
  }
]
```

## Answer an Attribute Qualification Prompt

Use the following REST API endpoints to answer an attribute qualification prompt applied to a dossier, document, or report:

- PUT `/api/reports/{id}/instances/{instanceId}/prompts/answers`
- PUT `/api/documents/{id}/instances/{instanceId}/prompts/answers`

### Provide Specific Prompt Answers

You provide answers to an attribute qualification prompt in the body parameter of the request. Identify the prompt by providing the prompt ID, name or key, and specify the prompt type as EXPRESSION. Then, specify the expression used to answer the prompt. The format of the expression is the same as the [JSON Data API's view filter](../../filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/filter-report-and-cube-instances-using-view-filters.md). This expression can be used with attribute elements.

All available parameters for the prompt answer are shown below.

| Name       | Description                                                                                                                                          | Data Type | Required? |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| key        | The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report. | string    |           |
| id         | The object ID of the prompt                                                                                                                          | string    |           |
| name       | The name of the prompt                                                                                                                               | string    |           |
| type       | The type of prompt; Enum: [ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]                                                                            | string    | yes       |
| useDefault | An indicator that specifies if the default answer should be used. If this is set to true, the values are ignored.                                    | boolean   |           |

The sample code below answers an attribute qualification prompt.

```json
{
  "prompts": [
    {
      "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",
      "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",
      "name": "test prompt",
      "type": "EXPRESSION",
      "answers": {
        "content": "Category In List 1, 2, 3, 4, 5",
        "expression": {
          "operator": "In",
          "operands": [
            {
              "type": "form",
              "attribute": {
                "id": "8D679D3711D3E4981000E787EC6DE8A4",
                "name": "Category"
              },
              "form": {
                "id": "45C11FA478E745FEA08D781CEA190FE5",
                "name": "ID"
              }
            },
            {
              "type": "constants",
              "dataType": "Real",
              "values": ["1", "2", "3", "4", "5"]
            }
          ]
        }
      }
    }
  ]
}
```

Some things to keep in mind:

- You only need to provide one **id**, **key**, or **name**. **Key** is preferred.
- The **useDefault** field is optional, since the default value is false.
- Content in the answer is optional. Its values do not affect the resulting answer. The default value is **""**.
