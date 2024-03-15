---
title: Attribute element prompts
description: An attribute element prompt is one of the most commonly used prompt types. It allows the caller to provide a list of attribute elements from which a selection is made. For example, you can define a prompt as "Call Center in USA".
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-fc989893-c6cd-42eb-915f-955f12a7fc05?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

An attribute element prompt is one of the most commonly used prompt types. It allows the caller to provide a list of attribute elements from which a selection is made. For example, you can define a prompt as `"Call Center in USA"`.

Use REST APIs to perform the following actions on attribute element prompts:

- [Retrieve a prompt's definition](../retrieve-a-prompts-definition.md)
- [Create a new prompt](#create-a-new-prompt)
- [Update an existing prompt](#update-an-existing-prompt)

## Create a new prompt

1. To create an attribute element prompt, you must enter the required fields with the correct information, using [POST /api/model/prompts](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt).
1. The response can change based on the request parameters provided by the caller. Use the following parameters.

   | Location | Name                | Description                                                                |
   | -------- | ------------------- | -------------------------------------------------------------------------- |
   | header   | X-MSTR-authToken    | The authorization token                                                    |
   | header   | X-MSTR-ProjectID    | The ID of the project                                                      |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset                                                    |
   | query    | showExpressionAs    | The parameter that specifies the format in which the response is returned. |

1. The model for the definition of an attribute element prompt can be represented using the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.

   | Fields        | Name                 | Description                                                                                                                                                                                                | Data Type | Required?          |
   | ------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------ |
   | information   | name                 | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                                                    | string    | :heavy_check_mark: |
   | information   | subType              | The type of prompt. The "subType" for an attribute element prompt is "prompt_elements".                                                                                                                    | string    | :heavy_check_mark: |
   | information   | destinationFolderId  | The folder ID where the new prompt is saved.                                                                                                                                                               | string    | :heavy_check_mark: |
   | title         |                      | The title of the prompt.                                                                                                                                                                                   | string    |                    |
   | instruction   |                      | The instruction on how to apply the prompt.                                                                                                                                                                | string    |                    |
   | question      | attribute            | The attribute to apply this attribute element prompt to.                                                                                                                                                   | string    | :heavy_check_mark: |
   | question      | listAllElements      | An indicator that specifies if are elements are used for the prompt. If this is set to True, "predefinedElements" and "filter" should be null. Otherwise, the response returns an error.                   | boolean   |                    |
   | question      | predefinedElements   | A list of predefined elements with "display" and "elementId".                                                                                                                                              | string    |                    |
   | question      | filter               | A standalone filter object with "objectId", "subType", and "name". When "listAllElements" is False, "filter" and "predefinedElements" should have an XOR relationship, since only one of them has a value. | string    |                    |
   | defaultAnswer | elements             | A list of elements used as a default answer. Each element should include "display" and "elementId".                                                                                                        | string    |                    |
   | restriction   | required             | An indicator that specifies whether a prompt answer is required or not.                                                                                                                                    | boolean   |                    |
   | restriction   | allowPersonalAnswers | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                                                        | string    |                    |
   | restriction   | min                  | The minimum number of elements that can be selected.                                                                                                                                                       | integer   |                    |
   | restriction   | max                  | The maximum number of elements that can be selected.                                                                                                                                                       | integer   |                    |

   Sample code for creating an attribute element prompt's definition is provided below.

   ```json
   {
     "information": {
       "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
       "subType": "prompt_elements",
       "name": "Call Center In USA"
     },
     "title": "Call Center In USA",
     "instruction": "Choose elements of Call Center.",
     "question": {
       "attribute": {
         "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
         "subType": "attribute",
         "name": "Call Center"
       },
       "listAllElements": false,
       "filter": {
         "objectId": "4C46C8CB43D1BCD0347E10BA3004E70D",
         "subType": "filter",
         "name": "CountryInUSA"
       }
     },
     "defaultAnswer": {
       "elements": [
         {
           "display": "San Diego",
           "elementId": "h2"
         },
         {
           "display": "San Francisco",
           "elementId": "h4"
         },
         {
           "display": "Salt Lake City",
           "elementId": "h6"
         }
       ]
     },
     "restriction": {
       "required": false,
       "allowPersonalAnswers": "none",
       "min": 2,
       "max": 5
     }
   }
   ```

## Update an existing prompt

1. Update the definition of the attribute element prompt using [PUT /api/model/prompts/\{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt).
1. Provide the following headers in the request:

   | Location | Name                | Description                                                                |
   | -------- | ------------------- | -------------------------------------------------------------------------- |
   | header   | X-MSTR-authToken    | The authorization token                                                    |
   | header   | X-MSTR-ProjectID    | The ID of the project                                                      |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset                                                    |
   | query    | showExpressionAs    | The parameter that specifies the format in which the response is returned. |

1. In addition to the above header, you should also provide the ID of the prompt you want to update.
1. You can modify the fields shown below. The `"subType"` field is not included below since it cannot be modified through this REST API.

   | Fields        | Name                 | Description                                                                                                                                                                                                | Data Type |
   | ------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
   | information   | name                 | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                                                    | string    |
   | information   | destinationFolderId  | The folder ID where the new prompt is saved.                                                                                                                                                               | string    |
   | title         |                      | The title of the prompt.                                                                                                                                                                                   | string    |
   | instruction   |                      | The instruction on how to apply the prompt.                                                                                                                                                                | string    |
   | question      | attribute            | The attribute to apply this attribute element prompt to.                                                                                                                                                   | string    |
   | question      | listAllElements      | An indicator that specifies if are elements are used for the prompt. If this is set to True, "predefinedElements" and "filter" should be null. Otherwise, the response returns an error.                   | Boolean   |
   | question      | predefinedElements   | A list of predefined elements with "display" and "elementId".                                                                                                                                              | string    |
   | question      | filter               | A standalone filter object with "objectId", "subType", and "name". When "listAllElements" is False, "filter" and "predefinedElements" should have an XOR relationship, since only one of them has a value. | string    |
   | defaultAnswer | elements             | A list of elements used as a default answer. Each element should include "display" and "elementId".                                                                                                        | string    |
   | restriction   | required             | An indicator that specifies whether a prompt answer is required or not.                                                                                                                                    | Boolean   |
   | restriction   | allowPersonalAnswers | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                                                        | string    |
   | restriction   | min                  | The minimum number of elements that can be selected.                                                                                                                                                       | integer   |
   | restriction   | max                  | The maximum number of elements that can be selected.                                                                                                                                                       | integer   |
