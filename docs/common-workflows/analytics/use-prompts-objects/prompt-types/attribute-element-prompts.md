---
title: Attribute element prompts
description: The attribute element prompt is one of the most commonly used prompt types. It allows the caller to provide a list of attribute elements from which a selection is made. For example, you can define a prompt as - 'Choose from a list of elements in Month'.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5eeb2bce-6951-41c6-aba0-97565505eaa5?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

The attribute element prompt is one of the most commonly used prompt types. It allows the caller to provide a list of attribute elements from which a selection is made. For example, you can define a prompt as: 'Choose from a list of elements in Month'.

You can use REST APIs to perform the following action on attribute element prompts:

- [Obtain elements for answering attribute element prompts](#obtain-elements-for-answering-attribute-element-prompts)
- [Answer an attribute element prompt](#answer-an-attribute-element-prompt)
  - [Provide specific prompt answers](#provide-specific-prompt-answers)
- [Get information about an attribute element prompt](#get-information-about-an-attribute-element-prompt)
- [Attribute element prompt definition](#attribute-element-prompt-definition)

## Obtain elements for answering attribute element prompts

To answer an attribute element prompt, the user must know which attribute elements can be supplied as an answer. Use the following REST APIs to obtain this list of elements.

- GET `/api/reports/{id}/instances/{instanceId}/prompts/{promptIdentifier}/elements`

- GET `/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/elements`

The response can change based on the request parameters provided by the caller. Use the following parameters:

| Location | Name                  | Description                                                                                                                                                                                                                                     |
| -------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| header   | x-mstr-authToken      | The authorization token                                                                                                                                                                                                                         |
| header   | x-mstr-projectID      | The ID of the project                                                                                                                                                                                                                           |
| path     | reportId or dossierId | The ID of the report or dossier                                                                                                                                                                                                                 |
| path     | instanceId            | The instance ID of the report or dossier                                                                                                                                                                                                        |
| path     | promptIdentifier      | The key or ID of the prompt. Either one can be used to identify the prompt. Only the key is unique, since some prompts can be present multiple times in the dataset. Both of these fields can be obtained from the `GET /api/prompts` API call. |
| query    | offset                | The starting point with the collection of returned results. The default is zero.                                                                                                                                                                |
| query    | limit                 | The maximum number of items returned for a single request. The default value is 100. The maximum value is 200.                                                                                                                                  |
| query    | searchPattern         | The search pattern                                                                                                                                                                                                                              |
|          |                       |                                                                                                                                                                                                                                                 |

Sample code for obtaining the available attribute elements is provided below:

```json
{
  "elements": [
    {
      "id": "h7796;8D679D3C11D3E4981000E787EC6DE8A4",
      "name": "Aaby:Alen"
    },
    {
      "id": "h1874;8D679D3C11D3E4981000E787EC6DE8A4",
      "name": "Aadland:Miko"
    },
    {
      "id": "h1874;8D679D3C11D3E4981000E787EC6DE8A4:3771",
      "name": "Aadland:Warner"
    }
  ]
}
```

## Answer an attribute element prompt

You use the following REST API endpoints to answer an attribute element prompt applied to a dossier, document, or report:

- PUT `/api/documents/{id}/instances/{instanceId}/prompts/answers`

- PUT `/api/reports/{reportId}/instances/{instanceId}/prompts/answers`

### Provide specific prompt answers

You provide answers to an attribute element prompt in the body parameter of the request. You identify the prompt by providing the prompt ID, name or key; you specify the prompt type as "ELEMENTS". You specify the attribute element used to answer the prompt by providing either the full attribute element ID or the attribute element name.

![Prompt Answer Model](../../../../images/swagger_promptAnswerModel.png)

Sample code for answering an attribute element prompt is provided below:

```json
{
  "prompts": [
    {
      "key": "76B7EBEE487913EF5C0A21975B577733@0@10",
      "name": "Elements of Category",
      "type": "ELEMENTS",
      "answers": [
        {
          "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Books"
        }
      ]
    }
  ]
}
```

## Get information about an attribute element prompt

You use the following REST API endpoints to get information about attribute element prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:

- GET `/api/documents/{id}/prompts`

- GET `/api/documents/{id}/instances/{instanceId}/prompts`

- GET `/api/reports/{reportId}/prompts`

- GET `/api/reports/{reportId}/instances/{instanceId}/prompts`

You provide the ID of the document, dossier, or report in the path of the request, as well as the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information.

![Prompt Answer Model Response](../../../../images/swagger_promptAnswerModel_response.png)

## Attribute element prompt definition

The model for the definition of an attribute element prompt can be represented with the following fields:

- `id` GUID of the prompt.
- `name` Name of the prompt. This is the most user-friendly value that can be used to identify the prompt.
- `key` Unique identifier of the prompt. It is important to use this to identify the prompt if the same prompt is used more than once in the report, document or dossier.
- `title` Title of the prompt.
- `required` Specifies whether this prompt is required or optional.
- `type` Prompt type. For attribute element prompts, the value is "ELEMENTS".
- `min` The minimum number of values that must be supplied to answer the prompt.
- `max` The maximum number of values that can be supplied to answer the prompt.
- `source`

  - `name` Name of the attribute that provides the elements that prompt answers are selected from.

  - `id` GUID of the attribute that provides the elements that prompt answers are selected from.

  - `type` Integer value for the object ID. The value of the object ID for an attribute is "12".

- `defaultAnswer`

  - `id` Identifier of the default prompt answer, in the format AttributeID:ElementID.

  - `name` Name of the default prompt answer, in the format AttributeID:ElementID.

- `answers`

  - `id` Identifier of the prompt answer to be used, in the format AttributeID:ElementID. This is the full attribute element ID.

  - `name` Name of the prompt answer to be used. This is the attribute element name.

Sample JSON code for an attribute element prompt definition is provided below:

```json
[
  {
    "id": "0E6BAF5211EB0899810D0080EF25B228",
    "key": "0E6BAF5211EB0899810D0080EF25B228@0@10",
    "name": "Elements of Month",
    "title": "Month",
    "type": "ELEMENTS",
    "required": false,
    "closed": false,
    "source": {
      "name": "Month",
      "id": "415C548749D69B14A728D0B1EF04E29E",
      "type": 12
    },
    "defaultAnswer": [
      {
        "id": "h201411;415C548749D69B14A728D0B1EF04E29E",
        "name": "November"
      },
      {
        "id": "h201412;415C548749D69B14A728D0B1EF04E29E",
        "name": "December"
      }
    ],
    "answers": [
      {
        "id": "h201411;415C548749D69B14A728D0B1EF04E29E",
        "name": "November"
      },
      {
        "id": "h201412;415C548749D69B14A728D0B1EF04E29E",
        "name": "December"
      }
    ]
  }
]
```
