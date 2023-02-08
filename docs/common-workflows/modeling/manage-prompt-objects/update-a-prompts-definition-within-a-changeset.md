---
title: Update a prompt's definition within a changeset
sidebar_label: Update a prompt's definition within a changeset
description: This workflow demonstrates how to update a prompt's definition through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3952eb54-479d-4930-aac5-64cf1c1dfdaf?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow demonstrates how to update a prompt's definition through the Modeling service.

1. Create a changeset.
1. [Update a prompt's definition.](#update-the-prompts-definition-using-put-apimodelpromptspromptid)
1. Commit a changeset.
1. Delete a changeset.

You want to update the definition of the `"Call Center in USA"` prompt with the following changes:

- Change the filter to `"Call Center in France"` with an ID of `84BEEA764540690980D5E388755B39B2`.
- Move the filter to another Objects folder with an ID of `8A1831FF494F528D02A4A8BF5FB73459`.
- Rename the prompt to `"Call Center in France"`.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

Obtain the prompt ID from [GET /api/model/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-getPromptDetails).

:::

## Update the prompt's definition

Use [PUT /api/model/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"
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
    "name": "Call Center in France"
  },
  "title": "Call Center In France",
  "instruction": "Choose elements of Call Center.",
  "question": {
    "attribute": {
      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
      "subType": "attribute",
      "name": "Call Center"
    },
    "listAllElements": false,
    "filter": {
      "objectId": "84BEEA764540690980D5E388755B39B2",
      "subType": "filter",
      "name": "Country In France"
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
curl -X PUT "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/prompts/2804B5284AFF95E8E0EEB4AC09B5B972" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51" -H "Content-Type: application/json" -d '{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","subType":"prompt_elements","name":"Call Center in France"},"title":"Call Center In France","instruction":"Choose elements of Call Center.","question":{"attribute":{"objectId":"8D679D3511D3E4981000E787EC6DE8A4","subType":"attribute","name":"Call Center"},"listAllElements":false,"filter":{"objectId":"84BEEA764540690980D5E388755B39B2","subType":"filter","name":"Country In France"}},"defaultAnswer":{"elements":[{"display":"Atlanta","elementId":"h1"},{"display":"Washington, DC","elementId":"h5"},{"display":"Salt Lake City","elementId":"h6"}]},"restriction":{"required":false,"allowPersonalAnswers":"none","min":2,"max":5}}'
```

Sample Response Body:

You can view the updated prompt's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-02-19T09:04:10.693Z",
    "dateModified": "2021-02-19T09:05:09.833Z",
    "versionId": "6AACDA444F24436837E717AC1AB54F58",
    "primaryLocale": "en-US",
    "objectId": "2804B5284AFF95E8E0EEB4AC09B5B972",
    "subType": "prompt_elements",
    "name": "Call Center in France",
    "destinationFolderId": "32AF83EA450604021518A284126776E5"
  },
  "title": "Call Center In France",
  "instruction": "Choose elements of Call Center.",
  "question": {
    "attribute": {
      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",
      "subType": "attribute",
      "name": "Call Center"
    },
    "listAllElements": false,
    "filter": {
      "objectId": "84BEEA764540690980D5E388755B39B2",
      "subType": "filter",
      "name": "USA in France"
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

Response Code: 200 (The prompt's definition is updated successfully in the changeset.)
