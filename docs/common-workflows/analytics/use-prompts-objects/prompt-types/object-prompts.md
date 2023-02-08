---
title: Object prompts
description: An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-763d27e2-3d03-47ab-9e7b-6b3b4db736b4?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made.

- [Workflow for object prompts](#workflow-for-object-prompts)
- [Obtain elements for answering object prompts](#obtain-elements-for-answering-object-prompts)
- [Answer an object prompt](#answer-an-object-prompt)
  - [Provide specific prompt answers](#provide-specific-prompt-answers)
  - [Get information about an object prompt](#get-information-about-an-object-prompt)
  - [Object prompt definition](#object-prompt-definition)
  - [Possible prompt execution errors for object prompts](#possible-prompt-execution-errors-for-object-prompts)

## Workflow for object prompts

Here is a workflow sample for using REST APIs to execute object prompts:

1. The user authenticates into the environment using the following endpoint and standard authentication:

   - POST `/api/auth/login`

1. Use the following endpoints to create a report or dossier/document instance:

- POST `/api/reports/{reportId}/instances`
- POST `/api/documents/{id}/instances`

1. Use the following endpoints to get the collection of prompts and their respective definitions from a report, document, or dossier:

   - GET `/api/reports/{reportId}/prompts`
   - GET `/api/reports/{reportId}/instances/{instanceId}/prompts`
   - GET `/api/documents/{id}/prompts`
   - GET `/api/documents/{id}/instances/{instanceId}/prompts`

1. Use the following endpoints to get an available list of objects for answering the prompts for a report, document, or dossier instance:

   - GET `/api/reports/{reportId}/instances/{instanceId}/prompts/{promptIdentifier}/objects`
   - GET `/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects`

1. Use the following endpoints to answer a prompt applied to a dossier, document, or report instance:

   - PUT `/api/reports/{reportId}/instances/{instanceId}/prompts/answers`
   - POST `/api/documents/{id}/instances/{instanceId}/prompts/answers`

1. Use the following endpoints to answer specified prompts on the document, dossier, or report instance:

   - PUT `/api/reports/{reportId}/instances/{instanceId}/prompts/answers`
   - PUT `/api/documents/{id}/instances/{instanceId}/prompts/answers`

1. Get the result of a report instance. Use the following API endpoints to get report data after applying a prompt on top of the report instance:

   - GET `/api/reports/{reportId}/instances/{instancesId}`
   - GET `/api/dossiers/{dossierId}/instances/{dossierInstanceId}`

## Obtain elements for answering object prompts

To answer an object prompt, the user needs to know which object can be supplied as the answer. The following REST APIs can be used to obtain this list of objects.

- GET `/api/reports/{reportId}/instances/{instanceId}/prompts/{promptIdentifier}/objects`
- GET `/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects`

The response changes based on the request parameters provided by the caller. All available parameters are shown below.

| Location | Name             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            | Data Type |
| -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| header   | X-MSTR-AuthToken | The authorization token                                                                                                                                                                                                                                                                                                                                                                                                                                | string    |
| header   | X-MSTR-ProjectID | The ID of the project                                                                                                                                                                                                                                                                                                                                                                                                                                  | string    |
| path     | reportId         | The ID of the report                                                                                                                                                                                                                                                                                                                                                                                                                                   | string    |
| path     | instanceId       | The instance ID of the report                                                                                                                                                                                                                                                                                                                                                                                                                          | string    |
| path     | promptIdentifier | The key or ID of the prompt. Either one can be used to identify the prompt. Only the key is unique, since some prompts can be present multiple times in the dataset. Both of these fields can be obtained from the `GET /api/prompts` API call.                                                                                                                                                                                                        |           |
| query    | fields           | Comma-separated top-level field white list. This allows the client to selectively retrieve part of the response model. If specified, extra filtering is applied and the top-level object (If the root model is an array, each array element), only the listed fields are kept in the response. For example, id,elements means to keep only the id field and the whole elements array field, omitting all other fields of the top-level response model. | string    |
| query    | offset           | The starting point within the collection of returned results. Used to control paging behavior. The default is zero.                                                                                                                                                                                                                                                                                                                                    | integer   |
| query    | limit            | The maximum number of items returned for a single request. The default value is 100. The maximum value is 200.                                                                                                                                                                                                                                                                                                                                         | integer   |
| query    | searchPattern    | The search pattern                                                                                                                                                                                                                                                                                                                                                                                                                                     | string    |
|          |                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                        |           |

## Answer an object prompt

You use the following REST API endpoints to answer an object prompt applied to a dossier, document, or report:

- PUT `/api/documents/{id}/instances/{instanceId}/prompts/answers`
- PUT `/api/reports/{reportId}/instances/{instanceId}/prompts/answers`

### Provide specific prompt answers

You provide answers to an object prompt in the body parameter of the request. You identify the prompt by providing the prompt ID or key; you specify the prompt type as "OBJECTS". You specify the object used to answer the prompt by providing the object GUID and the object type; the value of the object type depends on the kind of object used by the prompt.

Object prompts cannot be identified by name because names are not unique in the metadata.

![swagger_promptAnswerModel](../../../../images/swagger_promptAnswerModel.png)

Sample code for answering multiple object prompts in a single request is provided below:

```json
{
  "prompts": [
    {
      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",
      "type": "OBJECTS",
      "answers": [
        {
          "id": "8D679D5111D3E4981000E787EC6DE8A4",
          "type": "attribute"
        },
        {
          "id": "8D679D4A11D3E4981000E787EC6DE8A4",
          "type": "attribute"
        }
      ]
    },
    {
      "key": "07736087478D24656A2A65820F968661@0@10",
      "type": "OBJECTS",
      "answers": [
        {
          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
          "type": "metric"
        },
        {
          "id": "4C051DB611D3E877C000B3B2D86C964F",
          "type": "metric"
        }
      ]
    }
  ]
}
```

### Get information about an object prompt

You use the following REST API endpoints to get information about object prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:

- GET `/api/documents/{id}/prompts`

- GET `/api/documents/{id}/instances/{instanceId}/prompts`

- GET `/api/reports/{reportId}/prompts`

- GET `/api/reports/{reportId}/instances/{instanceId}/prompts`

You provide the ID of the document, dossier, or report in the path of the request, as well as the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information.

![swagger_promptAnswerModel_response](../../../../images/swagger_promptAnswerModel_response.png)

### Object prompt definition

The model for the definition of an object prompt can be represented with the following fields:

- `id` GUID of the prompt.
- `name` Name of the prompt. This is the most user-friendly value that can be used to identify the prompt.
- `key` Unique identifier of the prompt. It is important to use this to identify the prompt if the same prompt is used more than once in the report, document or dossier.
- `title` Title of the prompt.
- `required` Specifies whether this prompt is required or optional.
- `type` Prompt type. For object prompts, the value is "OBJECTS".
- `min` The minimum number of values that must be supplied to answer the prompt.

- `max` The maximum number of values that can be supplied to answer the prompt.

- `defaultAnswer`

  - `id` Object GUID of the default prompt answer.

  - `name` Object name of the default prompt answer.

  - `type` String value for the object type. The value of the object type depends on the kind of object used by the prompt. If the prompt consists of metric choices, the object type is **metric**. If the prompt consists of attribute choices, the object type is **attribute**.

- `answers`

  - `id` Object GUID of the prompt answer to be used.

  - `name` Object name of the prompt answer to be used.

  - `type` String value for the object type. The value of the object type depends on the kind of object used by the prompt. If the prompt consists of metric choices, the object type is **metric**. If the prompt consists of attribute choices, the object type is **attribute**.

Sample JSON for an object prompt definition is provided below.

```json
[
  {
    "id": "0B524DB54440D0280747C1A3058ED474",
    "key": "0B524DB54440D0280747C1A3058ED474@0@10",
    "name": "Metric Prompt",
    "title": "Objects",
    "type": "OBJECTS",
    "required": false,
    "max": 2,
    "min": 1,
    "defaultAnswer": [
      {
        "name": "Cost Growth",
        "id": "D823D64B48A0104B01135587BA87A2BD",
        "type": "metric"
      }
    ],
    "answers": [
      {
        "name": "Cost Growth",
        "id": "D823D64B48A0104B01135587BA87A2BD",
        "type": "metric"
      }
    ]
  }
]
```

Additional sample code for an object prompt definition is provided below:

```json
{
  "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",
  "name": "Predefined list of objects",
  "title": "Objects",
  "type": "OBJECTS",
  "required": true,
  "max": 2,
  "min": 1,
  "defaultAnswer": [
    {
      "name": "Age Range",
      "id": "5603951E4FE1BC04A44E44B85BBB8ED2",
      "type": "attribute"
    },
    {
      "name": "Customer",
      "id": "8D679D3C11D3E4981000E787EC6DE8A4",
      "type": "attribute"
    }
  ],
  "answers": [
    {
      "name": "Age Range",
      "id": "5603951E4FE1BC04A44E44B85BBB8ED2",
      "type": "attribute"
    },
    {
      "name": "Customer",
      "id": "8D679D3C11D3E4981000E787EC6DE8A4",
      "type": "attribute"
    }
  ]
}
```

### Possible prompt execution errors for object prompts

Numerous errors can occur during the prompt execution workflow, when answering prompts. Some of these are [general errors](../prompt-execution-errors.md), and others occur only for specific types of prompts. The errors listed below are specific to object prompts.

- Too many prompt answers provided

  HTTP - 400

  ```json
  {
    "code": "ERR006",
    "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 exceeds the maximum allowed(3} answers",
    "ticketId": "5352773f8b1440a9891911bc2cdd05b4"
  }
  ```

- Too few prompt answers provided

  HTTP - 400

  ```json
  {
    "code": "ERR006",
    "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 does not meet the minimum required(3} answer.",
    "ticketId": "3439cf127157448abfb621998868ad19"
  }
  ```
