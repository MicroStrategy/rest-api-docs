---
title: Metric Expression Prompts
description: A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dossier. For example, you define a prompt as "Get data when Avg Revenue per Customer is greater than 10".
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bca657c1-687a-4ba4-9050-3b45b4a5ce39?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dossier. For example, you define a prompt as `"Get data when Avg Revenue per Customer is greater than 10"`.

Use REST APIs to perform the following actions on metric expression prompts:

- [Retrieve a Prompt's Definition](../retrieve-a-prompts-definition.md)
- [Create a New Prompt](#create-a-new-prompt)
- [Update an Existing Prompt](#update-an-existing-prompt)

## Create a New Prompt

1. To create a metric expression prompt, you must enter the required fields with the correct information, using [POST /api/model/prompts](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt).
1. The response can change based on the request parameters provided by the caller. Use the following parameters.

   | Location | Name                | Description                                                                |
   | -------- | ------------------- | -------------------------------------------------------------------------- |
   | header   | X-MSTR-authToken    | The authorization token                                                    |
   | header   | X-MSTR-ProjectID    | The ID of the project                                                      |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset                                                    |
   | query    | showExpressionAs    | The parameter that specifies the format in which the response is returned. |

1. The model for the definition of a metric expression prompt can be represented using the fields below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.

   | Fields         | Name                   | Description                                                                                                                                                                                                                 | Data Type | Required?          |
   | -------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------ |
   | information    | name                   | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                                                                     | string    | :heavy_check_mark: |
   | information    | subType                | The type of prompt. The "subType" for a metric expression prompt is "prompt_expression".                                                                                                                                    | string    | :heavy_check_mark: |
   | information    | destinationFolderId    | The folder ID where the new prompt is saved.                                                                                                                                                                                | string    | :heavy_check_mark: |
   | expressionType |                        | Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "metric" for metric expression prompts. | string    | :heavy_check_mark: |
   | title          |                        | The title of the prompt.                                                                                                                                                                                                    | string    |                    |
   | instruction    |                        | The instruction on how to apply the prompt.                                                                                                                                                                                 | string    |                    |
   | question       | predefinedObjects      | A list of predefined metrics with "objectId", "subType", and "name".                                                                                                                                                        | string    |                    |
   | question       | search                 | A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.                                                    | string    |                    |
   | defaultAnswer  | qualification          | A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.                                                                                             | string    |                    |
   | restriction    | required               | An indicator that specifies whether a prompt answer is required or not.                                                                                                                                                     | boolean   |                    |
   | restriction    | maxElementPerSelection | The maximum number of elements per selection                                                                                                                                                                                | integer   |                    |
   | restriction    | allowPersonalAnswers   | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                                                                         | string    |                    |
   | restriction    | min                    | The minimum number of qualifications that can be added.                                                                                                                                                                     | integer   |                    |
   | restriction    | max                    | The maximum number of qualifications that can be added.                                                                                                                                                                     | integer   |                    |

   Sample code for creating a metric expression prompt's definition is provided below.

   ```json
   {
     "information": {
       "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
       "subType": "prompt_expression",
       "name": "Metric Prompt with Custom Expression"
     },
     "title": "Metric qualification",
     "instruction": "Choose a metric to begin building a qualification.",
     "expressionType": "metric",
     "question": {
       "predefinedObjects": [
         {
           "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
           "subType": "metric",
           "name": "Cost"
         },
         {
           "objectId": "381980B211D40BC8C000C8906B98494F",
           "subType": "metric",
           "name": "Discount"
         }
       ]
     },
     "defaultAnswer": {
       "qualification": {
         "text": "Cost = Discount + 4",
         "tree": {
           "type": "predicate_metric_qualification",
           "predicateId": "8126CF7F22C847AE8A112F3ABA5A27DA",
           "predicateText": "Cost = Discount + 4",
           "predicateTree": {
             "function": "equals",
             "parameters": [
               {
                 "parameterType": "expression",
                 "expression": {
                   "text": "Discount + 4"
                 }
               }
             ],
             "levelType": "none",
             "metric": {
               "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
               "subType": "metric",
               "name": "Cost"
             },
             "metricFunction": "value",
             "isIndependent": 0,
             "nullInclude": 0
           }
         }
       }
     },
     "restriction": {
       "required": false,
       "allowPersonalAnswers": "none",
       "min": 3,
       "max": 10
     }
   }
   ```

## Update an Existing Prompt

1. Update the definition of a metric expression prompt using [PUT /api/model/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt).
1. Provide the following headers in the request:

   | Location | Name                | Description             |
   | -------- | ------------------- | ----------------------- |
   | header   | X-MSTR-authToken    | The authorization token |
   | header   | X-MSTR-ProjectID    | The ID of the project   |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset |

1. In addition to the above header, you should also provide the ID of the prompt you want to update.
1. You can modify the fields shown below. The `"subType"` field is not included below since it cannot be modified through this REST API.

   | Fields         | Name                   | Description                                                                                                                                                                                                                 | Data Type |
   | -------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
   | information    | name                   | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                                                                     | string    |
   | information    | destinationFolderId    | The folder ID where the new prompt is saved.                                                                                                                                                                                | string    |
   | expressionType |                        | Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "metric" for metric expression prompts. | string    |
   | title          |                        | The title of the prompt.                                                                                                                                                                                                    | string    |
   | instruction    |                        | The instruction on how to apply the prompt.                                                                                                                                                                                 | string    |
   | question       | predefinedObjects      | A list of predefined metrics with "objectId", "subType", and "name".                                                                                                                                                        | string    |
   | question       | search                 | A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.                                                    | string    |
   | defaultAnswer  | qualification          | A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.                                                                                             | string    |
   | restriction    | required               | An indicator that specifies whether a prompt answer is required or not.                                                                                                                                                     | boolean   |
   | restriction    | maxElementPerSelection | The maximum number of elements per selection                                                                                                                                                                                | integer   |
   | restriction    | allowPersonalAnswers   | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                                                                         | string    |
   | restriction    | min                    | The minimum number of qualifications that can be added.                                                                                                                                                                     | integer   |
   | restriction    | max                    | The maximum number of qualifications that can be added.                                                                                                                                                                     | integer   |
