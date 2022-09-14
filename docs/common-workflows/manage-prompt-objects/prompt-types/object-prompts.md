---
title: Object Prompts
description: An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made. Folder objects cannot be used in object prompts.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-10f21f1c-3d27-4459-80ba-729a44b945a7?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made. Folder objects cannot be used in object prompts.

Use REST APIs to perform the following actions on object prompts:

- [Retrieve a Prompt's Definition](../retrieve-a-prompts-definition.md)
- [Create a New Prompt](#create-a-new-prompt)
- [Update an Existing Prompt](#update-an-existing-prompt)

## Create a New Prompt

1. To create an object prompt, you must enter the required fields with the correct information, using [POST /api/model/prompts](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt).
1. The response can change based on the request parameters provided by the caller. Use the following parameters.

   | Location | Name                | Description                                                                |
   | -------- | ------------------- | -------------------------------------------------------------------------- |
   | header   | X-MSTR-authToken    | The authorization token                                                    |
   | header   | X-MSTR-ProjectID    | The ID of the project                                                      |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset                                                    |
   | query    | showExpressionAs    | The parameter that specifies the format in which the response is returned. |

1. The model for the definition of an object prompt can be represented using the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.

   | Fields        | Name                 | Description                                                                                                                                                              | Data Type | Required?          |
   | ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------------ |
   | information   | name                 | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                  | string    | :heavy_check_mark: |
   | information   | subType              | The type of prompt. The "subType" for an object prompt is "prompt_objects".                                                                                              | string    | :heavy_check_mark: |
   | information   | destinationFolderId  | The folder ID where the new prompt is saved.                                                                                                                             | string    | :heavy_check_mark: |
   | title         |                      | The title of the prompt.                                                                                                                                                 | string    |                    |
   | instruction   |                      | The instruction on how to apply the prompt.                                                                                                                              | string    |                    |
   | question      | predefinedObjects    | A list of predefined metrics with "objectId", "subType", and "name".                                                                                                     | string    |                    |
   | question      | search               | A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value. | string    |                    |
   | defaultAnswer | objects              | A list of objects used to define the default answer. Each object should include "objectId", "subType", and "name".                                                       | string    |                    |
   | restriction   | required             | An indicator that specifies whether a prompt answer is required or not.                                                                                                  | boolean   |                    |
   | restriction   | allowPersonalAnswers | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                      | string    |                    |
   | restriction   | min                  | The minimum number of objects that can be selected.                                                                                                                      | integer   |                    |
   | restriction   | max                  | The maximum number of objects that can be selected.                                                                                                                      | integer   |                    |

   Sample code for creating an object prompt's definition is provided below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.

   ```json
   {
     "information": {
       "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
       "subType": "prompt_objects",
       "name": "Search all"
     },
     "title": "Objects",
     "instruction": "Choose objects from the list.",
     "question": {
       "search": {
         "objectId": "4E583DB34D3BE82E7356E0966962CEF0",
         "subType": "search",
         "name": "Search for all objects"
       }
     },
     "restriction": {
       "required": false,
       "allowPersonalAnswers": "none",
       "min": 2
     }
   }
   ```

## Update an Existing Prompt

1. Update the definition of an object prompt using [PUT /api/model/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt).
1. Provide the following headers in the request:

   | Location | Name                | Description             |
   | -------- | ------------------- | ----------------------- |
   | header   | X-MSTR-authToken    | The authorization token |
   | header   | X-MSTR-ProjectID    | The ID of the project   |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset |

1. In addition to the above header, you should also provide the ID of the prompt you want to update.
1. You can modify the fields shown below. The `"subType"` field is not included below since it cannot be modified through this REST API.

   | Fields        | Name                 | Description                                                                                                                                                              | Data Type |
   | ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
   | information   | name                 | The name of the prompt. This should be a user-friendly name for identifying the prompt.                                                                                  | string    |
   | information   | destinationFolderId  | The folder ID where the new prompt is saved.                                                                                                                             | string    |
   | title         |                      | The title of the prompt.                                                                                                                                                 | string    |
   | instruction   |                      | The instruction on how to apply the prompt.                                                                                                                              | string    |
   | question      | predefinedObjects    | A list of predefined metrics with "objectId", "subType", and "name".                                                                                                     | string    |
   | question      | search               | A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value. | string    |
   | defaultAnswer | objects              | A list of objects used to define the default answer. Each object should include "objectId", "subType", and "name".                                                       | string    |
   | restriction   | required             | An indicator that specifies whether a prompt answer is required or not.                                                                                                  | boolean   |
   | restriction   | allowPersonalAnswers | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".                                                      | string    |
   | restriction   | min                  | The minimum number of objects that can be selected.                                                                                                                      | integer   |
   | restriction   | max                  | The maximum number of objects that can be selected.                                                                                                                      | integer   |
