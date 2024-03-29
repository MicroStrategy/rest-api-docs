---
title: Create a base formula's definition within a changeset
sidebar_label: Create a base formula's definition within a changeset
description: This workflow sample demonstrates how to create an attribute object through the Modeling service.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bfe3c7f0-372a-44ef-a687-0f694deda59b?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create an attribute object through the Modeling service.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

You want to create a new base formula object, which is defined as `”Sum(Cost)”` and named as `“base_sum(Cost)“`. The destination folder ID is `31727EF14E35DAA437B716BA56466585`  in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a new base formula using [POST /api/model/formulas](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Base%20Formulas/ms-postFormula)

In `"Information"`, you must provide `name` and `destinationFolderID` for the base formula you want to create.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
"Content-Type": "application/json"
```

| Location | Name                | Description                                                                                                                                                                                                                                            |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken    | The authorization token.                                                                                                                                                                                                                               |
| header   | X-MSTR-ProjectID    | The project ID.                                                                                                                                                                                                                                        |
| header   | X-MSTR-MS-Changeset | The changeset ID.                                                                                                                                                                                                                                      |
| params   | showExpressionAs    | Omitted, tree, or tokens:<br/>- If omitted, the expression is returned in only “text“ formats.<br/>- If `tree`, the expression is returned in "text" and "tree" formats.<br/>- If `tokens`, the expression is returned in "text" and "tokens" formats. |

Sample Request Body:

:::tip

`objectID`, `dateCreated`, `dateModified`, and `versionId` are generated automatically. Currently, only `en-US` is available for `primaryLocale`.

:::

```json
{
  "information": {
    "destinationFolderId": "31727EF14E35DAA437B716BA56466585",
    "subType": "agg_metric",
    "name": "sum(Cost)"
  },
  "expression": {
    "text": "Sum(Cost)",
    "tokens": [
      {
        "level": "resolved",
        "state": "initial",
        "value": "Sum",
        "type": "function",
        "target": {
          "dateCreated": "2001-01-02T20:47:35.000Z",
          "dateModified": "2021-02-26T03:18:39.843Z",
          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",
          "primaryLocale": "en-US",
          "objectId": "8107C31BDD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": "Sum",
          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "<",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "UseLookupForAttributes",
        "type": "identifier"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "=",
        "type": "function"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "False",
        "type": "boolean"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": ">",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "(",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "Cost",
        "type": "object_reference",
        "target": {
          "dateCreated": "2001-09-18T20:21:56.000Z",
          "dateModified": "2021-02-26T03:18:52.304Z",
          "versionId": "66BBCD784D52223085BBC2BC81EB8F16",
          "primaryLocale": "en-US",
          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",
          "subType": "fact",
          "name": "Cost"
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": ")",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "",
        "type": "end_of_text"
      }
    ]
  }
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas?showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51" -H "Content-Type: application/json" -d "{\"information\":{\"destinationFolderId\":\"{{destinationFolder}}\",\"subType\":\"agg_metric\",\"name\":\"sum(Cost)\"},\"expression\":{\"text\":\"Sum(Cost)\",\"tokens\":[{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"Sum\",\"type\":\"function\",\"target\":{\"dateCreated\":\"2001-01-02T20:47:35.000Z\",\"dateModified\":\"2021-02-26T03:18:39.843Z\",\"versionId\":\"93B1FFD040F7CBECF3C3378D5391AA35\",\"primaryLocale\":\"en-US\",\"objectId\":\"8107C31BDD9911D3B98100C04F2233EA\",\"subType\":\"function\",\"name\":\"Sum\",\"description\":\"Returns the sum of all values in the ValueList. This is a group-value function.\"}},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"<\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"UseLookupForAttributes\",\"type\":\"identifier\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"=\",\"type\":\"function\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"False\",\"type\":\"boolean\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\">\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"(\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"Cost\",\"type\":\"object_reference\",\"target\":{\"dateCreated\":\"2001-09-18T20:21:56.000Z\",\"dateModified\":\"2021-02-26T03:18:52.304Z\",\"versionId\":\"66BBCD784D52223085BBC2BC81EB8F16\",\"primaryLocale\":\"en-US\",\"objectId\":\"7A4ABE9111D5AC6FC000D98A4CC5F24F\",\"subType\":\"fact\",\"name\":\"Cost\"}},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\")\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"\",\"type\":\"end_of_text\"}]}}"
```

Sample Response Body:

You can view the new base formula's definition in the body of the response.

:::tip

`objectID`, `dateCreated`, `dateModified`, and `versionId` are generated automatically. Currently, only `en-US` is available for `primaryLocale`.

:::

```json
{
  "information": {
    "versionId": "698642F6B82249FDA9927616C557F8FB",
    "primaryLocale": "en-US",
    "objectId": "72E1149476D94F789280A9E8AA9F7B63",
    "subType": "agg_metric",
    "name": "sum(Cost)",
    "destinationFolderId": "31727EF14E35DAA437B716BA56466585"
  },
  "expression": {
    "text": "Sum(Cost)",
    "tokens": [
      {
        "level": "resolved",
        "state": "initial",
        "value": "Sum",
        "type": "function",
        "target": {
          "dateCreated": "2001-01-02T20:47:35.000Z",
          "dateModified": "2021-02-26T03:18:39.843Z",
          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",
          "primaryLocale": "en-US",
          "objectId": "8107C31BDD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": "Sum",
          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "<",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "UseLookupForAttributes",
        "type": "identifier"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "=",
        "type": "function"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "False",
        "type": "boolean"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": ">",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "(",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "Cost",
        "type": "object_reference",
        "target": {
          "dateCreated": "2001-09-18T20:21:56.000Z",
          "dateModified": "2022-02-17T05:04:23.255Z",
          "versionId": "DE098494437C76DA4BBDA688812CDFB2",
          "primaryLocale": "en-US",
          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",
          "subType": "fact",
          "name": "Cost"
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": ")",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "",
        "type": "end_of_text"
      }
    ]
  }
}
```

Response Code: 201 (A new Base Formula is created successfully in the changeset.)
