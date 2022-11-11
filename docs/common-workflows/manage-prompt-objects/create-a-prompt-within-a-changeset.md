---
title: Workflow sample - Create a prompt within a changeset
sidebar_label: Create a prompt within a changeset
description: This workflow sample demonstrates how to create a new prompt object through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bfdf91c2-f8d8-495a-b4ca-cf1daeb7c6db?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new prompt object through the Modeling service.

1. Create a changeset using `POST /api/model/changesets`
1. [Create a prompt using POST/api/model/prompts](#create-a-prompt-using-postapimodelprompts)
1. Commit a changeset using `POST /api/model/changesets/{changesetId}/commit`
1. Delete a changeset using `DELETE /api/model/changesets/{changesetId}`

You want to create a new prompt object for the `"Call Center in USA"` prompt under a specific folder in the MicroStrategy Tutorial project. The folder object ID is `8A1831FF494F528D02A4A8BF5FB73459`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md).

:::

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a prompt using [POST/api/model/prompts](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt)

You want to create a `"Call Center in USA"` prompt of an attribute element prompt under a specific folder in the MicroStrategy Tutorial project. To create the prompt, you must submit the request body with the correct information. In `"information"`, provide the `"subType"`, `"name"`, and `"destinationFolderId"` for the prompt you want to create.

If you are constructing the POST prompt request body based on the response of the GET prompt call of an existing prompt, be aware that any embedded objects (`"isEmbedded":true`) cannot be used to create a new prompt, as the embedded objects are only "local" to their owner.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "prompt_elements",
    "name": "Call Center in USA"
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
        "display": "Atlanta",
        "elementId": "h1"
      },
      {
        "display": "Washington, DC",
        "elementId": "h5"
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

Sample Curl:

```bash
curl -X POST "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/prompts" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51" -H "Content-Type: application/json" -d '{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","subType":"prompt_elements","name":"CallCenter_FilterInUSA_DefaultAnswers"},"title":"Call Center In UAS","instruction":"Choose elements of Call Center.","question":{"attribute":{"objectId":"8D679D3511D3E4981000E787EC6DE8A4","subType":"attribute","name":"Call Center"},"listAllElements":false,"filter":{"objectId":"4C46C8CB43D1BCD0347E10BA3004E70D","subType":"filter","name":"CountryInUSA"}},"defaultAnswer":{"elements":[{"display":"Atlanta","elementId":"h1"},{"display":"Washington, DC","elementId":"h5"},{"display":"Salt Lake City","elementId":"h6"}]},"restriction":{"required":false,"allowPersonalAnswers":"none","min":2,"max":5}}'
```

Sample Response Body:

You can view the new prompt's definition in the body of the response.

```json
{
  "information": {
    "versionId": "24915328E8884E26B1A4155BD6C87741",
    "primaryLocale": "en-US",
    "objectId": "7EBD3A41BC8049FF984E51511BE60FD7",
    "subType": "prompt_elements",
    "name": "Call Center in USA",
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"
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
        "display": "Atlanta",
        "elementId": "h1"
      },
      {
        "display": "Washington, DC",
        "elementId": "h5"
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

Response Code: 201 (A new prompt is created successfully in the changeset.)
