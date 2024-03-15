---
title: Hierarchy qualification prompts
description: A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you determine a single hierarchy or a list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c7bb0522-b646-4b0a-93a1-159c55b3af82?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you determine a single hierarchy or a list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters.

Use REST APIs to perform the following actions on attribute element prompts:

- [Retrieve a prompt's definition](../retrieve-a-prompts-definition.md)
- [Create a new prompt](#create-a-new-prompt)
- [Update an existing prompt](#update-an-existing-prompt)

## Create a new prompt

1. To create a hierarchy qualification prompt, you must enter the required fields with the correct information, using [POST /api/model/prompts](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt).
1. The response can change based on the request parameters provided by the caller. Use the following parameters.

   | Location | Name                | Description                                                                |
   | -------- | ------------------- | -------------------------------------------------------------------------- |
   | header   | X-MSTR-authToken    | The authorization token                                                    |
   | header   | X-MSTR-ProjectID    | The ID of the project                                                      |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset                                                    |
   | query    | showExpressionAs    | The parameter that specifies the format in which the response is returned. |

1. The model for the definition of an hierarchy qualification prompt can be represented using the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.

   | Fields         | Name                   | Description                                                                                                                                                                                                                          | Data Type | Required?          |
   | -------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------------ |
   | information    | name                   | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                                                                              | string    | :heavy_check_mark: |
   | information    | subType                | The type of prompt. The "subType" for a hierarchy qualification prompt is "prompt_expression".                                                                                                                                       | string    | :heavy_check_mark: |
   | information    | destinationFolderId    | The folder ID where the new prompt is saved.                                                                                                                                                                                         | string    | :heavy_check_mark: |
   | expressionType |                        | Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "hierarchy" for hierarchy qualification prompts. | string    | :heavy_check_mark: |
   | title          |                        | The title of the prompt.                                                                                                                                                                                                             | string    |                    |
   | instruction    |                        | The instruction on how to apply the prompt.                                                                                                                                                                                          | string    |                    |
   | question       | displayform            | The displayed forms for the hierarchy.                                                                                                                                                                                               | string    |                    |
   | question       | listallHierarchy       | An indicator that specifies if are hierarchies are used for the prompt. If this is set to True, "predefinedObjects" and "search" should be null. Otherwise, the response returns an error.                                           | string    |                    |
   | question       | predefinedObjects      | A list of predefined hierarchies with "objectId", "subType", and "name".                                                                                                                                                             | string    |                    |
   | question       | search                 | A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.                                                             | string    |                    |
   | defaultAnswer  | qualification          | A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.                                                                                                      | string    |                    |
   | restriction    | required               | An indicator that specifies whether a prompt answer is required or not.                                                                                                                                                              | boolean   |                    |
   | restriction    | maxElementPerSelection | The maximum number of elements per selection                                                                                                                                                                                         | integer   |                    |
   | restriction    | allowPersonalAnswers   | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                                                                                  | string    |                    |
   | restriction    | min                    | The minimum number of qualifications that can be added.                                                                                                                                                                              | integer   |                    |
   | restriction    | max                    | The maximum number of qualifications that can be added.                                                                                                                                                                              | integer   |                    |

   Sample code for creating a hierarchy qualification prompt's definition is provided below.

   ```json
   {
     "information": {
       "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
       "subType": "prompt_expression",
       "name": "Hierarchy - ListAll"
     },
     "title": "Hierarchies",
     "instruction": "Choose a hierarchy to begin building a qualification.",
     "expressionType": "hierarchy",
     "question": {
       "displayForms": "all_forms",
       "listAllHierarchies": true
     },
     "restriction": {
       "required": false,
       "allowPersonalAnswers": "multiple",
       "maxElementPerSelection": 100,
       "min": 2,
       "max": 5
     }
   }
   ```

## Update an existing prompt

1. Update the definition of the hierarchy qualification prompt using [PUT /api/model/prompts/\{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt).
1. Provide the following headers in the request:

   | Location | Name                | Description             |
   | -------- | ------------------- | ----------------------- |
   | header   | X-MSTR-authToken    | The authorization token |
   | header   | X-MSTR-ProjectID    | The ID of the project   |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset |

1. In addition to the above header, you should also provide the ID of the prompt you want to update.
1. You can modify the fields shown below. The `"subType"` field is not included below since it cannot be modified through this REST API.

   | Fields         | Name                   | Description                                                                                                                                                                                                                          | Data Type |
   | -------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
   | information    | name                   | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                                                                              | string    |
   | information    | destinationFolderId    | The folder ID where the new prompt is saved.                                                                                                                                                                                         | string    |
   | expressionType |                        | Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "hierarchy" for hierarchy qualification prompts. | string    |
   | title          |                        | The title of the prompt.                                                                                                                                                                                                             | string    |
   | instruction    |                        | The instruction on how to apply the prompt.                                                                                                                                                                                          | string    |
   | question       | displayform            | The displayed forms for the hierarchy.                                                                                                                                                                                               | string    |
   | question       | listallHierarchy       | An indicator that specifies if are hierarchies are used for the prompt. If this is set to True, "predefinedObjects" and "search" should be null. Otherwise, the response returns an error.                                           | string    |
   | question       | predefinedObjects      | A list of predefined hierarchies with "objectId", "subType", and "name".                                                                                                                                                             | string    |
   | question       | search                 | A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.                                                             | string    |
   | defaultAnswer  | qualification          | A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.                                                                                                      | string    |
   | restriction    | required               | An indicator that specifies whether a prompt answer is required or not.                                                                                                                                                              | boolean   |
   | restriction    | maxElementPerSelection | The maximum number of elements per selection                                                                                                                                                                                         | integer   |
   | restriction    | allowPersonalAnswers   | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                                                                                  | string    |
   | restriction    | min                    | The minimum number of qualifications that can be added.                                                                                                                                                                              | integer   |
   | restriction    | max                    | The maximum number of qualifications that can be added.                                                                                                                                                                              | integer   |
