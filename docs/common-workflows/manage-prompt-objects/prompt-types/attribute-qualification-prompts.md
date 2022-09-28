---
title: Attribute qualification prompts
description: An attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user can select elements to define their report filter.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ac7cde77-bb20-4c51-86e3-a457f5b8f43f?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

An attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user can select elements to define their report filter.

Use REST APIs to perform the following actions on attribute qualification prompts:

- [Retrieve a prompt's definition](../retrieve-a-prompts-definition.md)
- [Create a new prompt](#create-a-new-prompt)
- [Update an existing prompt](#update-an-existing-prompt)

## Create a new prompt

1. To create an attribute qualification prompt, you must enter the required fields with the correct information, using [POST /api/model/prompts](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt).
1. The response can change based on the request parameters provided by the caller. Use the following parameters.

   | Location | Name                | Description                                                                |
   | -------- | ------------------- | -------------------------------------------------------------------------- |
   | header   | X-MSTR-authToken    | The authorization token                                                    |
   | header   | X-MSTR-ProjectID    | The ID of the project                                                      |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset                                                    |
   | query    | showExpressionAs    | The parameter that specifies the format in which the response is returned. |

1. The model for the definition of an attribute qualification prompt can be represented using the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.

   | Fields         | Name                   | Description                                                                                                                                                                                                                          | Data Type | Required?          |
   | -------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------------ |
   | information    | name                   | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                                                                              | string    | :heavy_check_mark: |
   | information    | subType                | The type of prompt. The "subType" for an attribute qualification prompt is "prompt_expression".                                                                                                                                      | string    | :heavy_check_mark: |
   | information    | destinationFolderId    | The folder ID where the new prompt is saved.                                                                                                                                                                                         | string    | :heavy_check_mark: |
   | expressionType |                        | Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "attribute" for attribute qualification prompts. | string    | :heavy_check_mark: |
   | title          |                        | The title of the prompt.                                                                                                                                                                                                             | string    |                    |
   | instruction    |                        | The instruction on how to apply the prompt.                                                                                                                                                                                          | string    |                    |
   | question       | displayform            | The displayed forms for the attribute.                                                                                                                                                                                               | string    |                    |
   | question       | customForms            | Custom forms are only available for attribute qualification prompts defined on one attribute.                                                                                                                                        | string    |                    |
   | question       | predefinedObjects      | A list of predefined attributes with "objectId", "subType", and "name".                                                                                                                                                              | string    |                    |
   | question       | search                 | A standalone search object with "objectId", "subType", and "name". When "listAllElements" is False, "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.                            | string    |                    |
   | defaultAnswer  | qualification          | A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.                                                                                                      | string    |                    |
   | restriction    | required               | An indicator that specifies whether a prompt answer is required or not.                                                                                                                                                              | boolean   |                    |
   | restriction    | maxElementPerSelection | The maximum number of elements per selection                                                                                                                                                                                         | integer   |                    |
   | restriction    | allowPersonalAnswers   | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                                                                                  | string    |                    |
   | restriction    | min                    | The minimum number of qualifications that can be added.                                                                                                                                                                              | integer   |                    |
   | restriction    | max                    | The maximum number of qualifications that can be added.                                                                                                                                                                              | integer   |                    |

   Sample code for creating an attribute qualification prompt's definition is provided below.

   ```json
   {
     "information": {
       "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
       "subType": "prompt_expression",
       "name": "Prompt on Customer"
     },
     "title": "Prompt on Customer",
     "instruction": "Qualify on Customer",
     "expressionType": "attribute",
     "question": {
       "predefinedObjects": [
         {
           "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
           "subType": "attribute",
           "name": "Customer"
         }
       ],
       "displayForms": "custom_forms",
       "customForms": [
         {
           "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",
           "subType": "attribute_form_system",
           "name": "Customer DESC 1"
         },
         {
           "objectId": "8D67A35F11D3E4981000E787EC6DE8A4",
           "subType": "attribute_form_system",
           "name": "Customer DESC 2"
         }
       ]
     },
     "restriction": {
       "required": false,
       "allowPersonalAnswers": "single",
       "min": 1,
       "max": 5
     }
   }
   ```

## Update an existing prompt

1. Update the definition of the attribute qualification prompt using [PUT /api/model/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt).
1. Provide the following headers in the request:

   | Location | Name                | Description             |
   | -------- | ------------------- | ----------------------- |
   | header   | X-MSTR-authToken    | The authorization token |
   | header   | X-MSTR-ProjectID    | The ID of the project   |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset |

1. In addition to the above header, you should also provide the ID of the prompt you want to update.
1. You can modify the fields shown below. The `"subType"` field is not included since it cannot be modified through this REST API.

   | Fields         | Name                   | Description                                                                                                                                                                                                                          | Data Type |
   | -------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
   | information    | name                   | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                                                                              | string    |
   | information    | destinationFolderId    | The folder ID where the new prompt is saved.                                                                                                                                                                                         | string    |
   | expressionType |                        | Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "attribute" for attribute qualification prompts. | string    |
   | title          |                        | The title of the prompt.                                                                                                                                                                                                             | string    |
   | instruction    |                        | The instruction on how to apply the prompt.                                                                                                                                                                                          | string    |
   | question       | displayform            | The displayed forms for the attribute.                                                                                                                                                                                               | string    |
   | question       | customForms            | Custom forms are only available for attribute qualification prompts defined on one attribute.                                                                                                                                        | string    |
   | question       | predefinedObjects      | A list of predefined attributes with "objectId", "subType", and "name".                                                                                                                                                              | string    |
   | question       | search                 | A standalone search object with "objectId", "subType", and "name". When "listAllElements" is False, "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.                            | string    |
   | defaultAnswer  | qualification          | A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.                                                                                                      | string    |
   | restriction    | required               | An indicator that specifies whether a prompt answer is required or not.                                                                                                                                                              | Boolean   |
   | restriction    | maxElementPerSelection | The maximum number of elements per selection                                                                                                                                                                                         | integer   |
   | restriction    | allowPersonalAnswers   | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                                                                                  | string    |
   | restriction    | min                    | The minimum number of qualifications that can be added.                                                                                                                                                                              | integer   |
   | restriction    | max                    | The maximum number of qualifications that can be added.                                                                                                                                                                              | integer   |
