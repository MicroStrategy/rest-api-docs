---
title: Hierarchy Qualification Prompts
description: A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters.
---

A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters.

Use REST APIs to perform the following actions on hierarchy qualification prompts:

- [Get Information About a Hierarchy Qualification Prompt](#get-information-about-a-hierarchy-qualification-prompt)
- [Get the Hierarchy Qualification Prompt's Available Objects](#get-the-hierarchy-qualification-prompts-available-objects)
- [Get the Attributes of a Hierarchy](#get-the-attributes-of-a-hierarchy)
- [Answer a Hierarchy Qualification Prompt](#answer-a-hierarchy-qualification-prompt)
  - [Provide Specific Prompt Answers](#provide-specific-prompt-answers)

## Get Information About a Hierarchy Qualification Prompt

Use the following REST API endpoints to get information about hierarchy qualification prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:

- GET `/api/documents/{id}/prompts`
- GET `/api/documents/{id}/instances/{instanceId}/prompts`
- GET `/api/reports/{reportId}/prompts`
- GET `/api/reports/{reportId}/instances/{instanceId}/prompts`

Provide the ID of the document, dossier, or report in the path of the request. In addition, you need to supply the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information. All available parameters for the prompt definition are shown below.

| Name     | Description                                                                                                                                          | Data Type |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| id       | The ID of the prompt                                                                                                                                 | string    |
| key      | The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report. | string    |
| name     | The name of the prompt                                                                                                                               | string    |
| title    | The title of the prompt                                                                                                                              | string    |
| type     | The type of prompt; Enum: [ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]                                                                            | string    |
| required | An indicator that specifies if a prompt is required                                                                                                  | boolean   |
| closed   | An indicator that specifies if a prompt is closed                                                                                                    | boolean   |

The sample code below contains a hierarchy qualification prompt definition.

```json
{
  "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",
  "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",
  "name": "test prompt",
  "title": "test prompt",
  "type": "EXPRESSION",
  "closed": false,
  "required": true,
  "max": 2,
  "min": 1,
  "displayForms": "all", // all|browseForms|reportDisplayForms|customForms
  "maxElementsPerSelection": -1,
  "defaultAnswer": {
    "content": "Category ID In 1, 2, 3, 4, 5",
    "xml": "<exp></exp>",
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

Besides the commonly-used fields, the hierarchy qualification prompt also contains the following field:

**maxElementsPerSelection** The maximum number of elements that can be supplied to answer the prompt per selection. The default setting of **-1** means there is no limit to the maximum number of elements.

## Get the Hierarchy Qualification Prompt's Available Objects

Use the following REST API endpoints to get a hierarchy qualification prompt's available objects:

- GET `/api/reports/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects`
- GET `/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects`

In a hierarchy qualification prompt, the available objects returned by this endpoint are hierarchies, which contain an ID and name. The hierarchy prompt provides the user with a list of available objects. These objects can come from three different sources:

- Predefined list of objects
- Result of a search object
- List of all attributes and hierarchies

The sample code below contains a hierarchy qualification prompt's available objects.

```json
{
  "objects": [
  {
    "id": "C11D3E4981000E8D679D3787EC6DE8A4",
    "name": "Time",
    "type": "HIERARCHY"
  }
]
```

## Get the Attributes of a Hierarchy

After getting a hierarchy qualification prompt's available objects, the user may need to get the attributes of some hierarchies to construct their own view filter expression. Use the following REST API endpoints to retrieve the attributes of a hierarchy.

GET `/api/hierarchies/{hierarchyId}/attributes`

The sample code below contains the definition of the attributes of a hierarchy.

```json
{
  "attributes": [
    {
      "name": "Month",
      "id": "8D679D4411D3E4981000E787EC6DE8A4",
      "type": "attribute",
      "forms": [
        {
          "id": "45C11FA478E745FEA08D781CEA190FE5",
          "name": "ID"
        },
        {
          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
          "name": "DESC"
        },
        {
          "id": "4B97DFC611D5AEDAC000E38A4CC5F24F",
          "name": "DATE"
        }
      ]
    }
  ]
}
```

## Answer a Hierarchy Qualification Prompt

Use the following REST API endpoints to answer a hierarchy qualification prompt applied to a dossier, document, or report:

- PUT `/api/reports/{id}/instances/{instanceId}/prompts/answers`
- PUT `/api/documents/{id}/instances/{instanceId}/prompts/answers`

### Provide Specific Prompt Answers

You provide answers to a hierarchy qualification prompt in the body parameter of the request. Identify the prompt by providing the prompt ID, name or key, and specify the prompt type as EXPRESSION. Then, specify the expression used to answer the prompt. The format of the expression is the same as the [JSON Data API's view filter](./../../filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/filter-report-and-cube-instances-using-view-filters.md). This expression can be used with attribute elements.

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
  "prompts":[{
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
```

Some things to keep in mind:

- You only need to provide one **id**, **key**, or **name**. **Key** is preferred.
- The **useDefault** field is optional, since the default value is false.
- Content in the answer is optional. Its values do not affect the resulting answer. The default value is **""**.
