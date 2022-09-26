---
title: Workflow Sample - Retrieve a prompt's definition
sidebar_label: Retrieve a Prompt's Definition
description: This workflow sample demonstrates how to retrieve a prompt's definition.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3952eb54-479d-4930-aac5-64cf1c1dfdaf?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a prompt's definition.

You want to get the definition of the `"Call Center in USA"` prompt object. The object ID of the prompt is `2804B5284AFF95E8E0EEB4AC09B5B972` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a changeset

Use [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset), to create a changeset.

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "2A131744C91B4915B54A61FFDC528F62",
  "dateCreated": "2021-02-20T07:53:00.849722500Z",
  "dateModified": "2021-02-20T07:53:00.849722500Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MS02_qichen",
  "mstrUserId": "F82DAA9D40D07ACB1FFE12A81D74CE98",
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "userWarehouseLocale": "en-US",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

## Get the prompt's definition within the changeset

Use [GET /api/model/prompts/{PromptID}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-getPromptDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/prompts/2804B5284AFF95E8E0EEB4AC09B5B972" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"
```

Sample Response Body:

You can view the prompt's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-02-19T09:04:10.693Z",
    "dateModified": "2021-02-19T09:05:09.833Z",
    "versionId": "6AACDA444F24436837E717AC1AB54F58",
    "primaryLocale": "en-US",
    "objectId": "2804B5284AFF95E8E0EEB4AC09B5B972",
    "subType": "prompt_elements",
    "name": "Call Center in USA"
  },
  "title": "Call Center in USA",
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

Response Code: 200 (The prompt's definition is returned successfully.)

## Delete a changeset

Use [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: \*/\*" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)
