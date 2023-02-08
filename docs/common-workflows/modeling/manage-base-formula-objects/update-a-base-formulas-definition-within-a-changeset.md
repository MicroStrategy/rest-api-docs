---
title: Update a base formula's definition within a changeset
sidebar_label: Update a base formula's definition within a changeset
description: This workflow sample demonstrates how to update a base formula's definition through the Modeling service.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bfe3c7f0-372a-44ef-a687-0f694deda59b?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a base formula's definition through the Modeling service.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

You want to update the definition of the `"base_sum(Cost)"` base formula with object ID `1116B53103FC4A72BBACBAED388243D6` to achieve the below changes:

- Modify the expression to `“sum(Profit)-sum(Cost)“`
- Move it to another objects folder with the ID of `8AF48B3D4685C1717B3BDA9804CD1036`
- Rename the base formula to `"Revenue"`

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Update the base formula's definition using [PUT /api/model/formulas/{formulaId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Formulas/ms-putFormula)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"
"Content-Type": "application/json"
```

| Location | Name                | Description                                                                                                                                                                                                                                            |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken    | The authorization token                                                                                                                                                                                                                                |
| header   | X-MSTR-ProjectID    | The ID of the project                                                                                                                                                                                                                                  |
| header   | X-MSTR-MS-Changeset | The ID of the changeset                                                                                                                                                                                                                                |
| params   | showExpressionAs    | Omitted, tree, or tokens:<br/>- If omitted, the expression is returned in only “text“ formats.<br/>- If `tree`, the expression is returned in "text" and "tree" formats.<br/>- If `tokens`, the expression is returned in "text" and "tokens" formats. |

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8AF48B3D4685C1717B3BDA9804CD1036",
    "subType": "agg_metric",
    "name": "Revenue"
  },
  "expression": {
    "text": "Sum(Profit) - Sum(Cost)",
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
        "value": "Profit",
        "type": "object_reference",
        "target": {
          "dateCreated": "2001-09-18T19:50:09.000Z",
          "dateModified": "2022-02-17T03:47:14.966Z",
          "versionId": "1F04706E441FF9C3C69DF5AC3C118FC3",
          "primaryLocale": "en-US",
          "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",
          "subType": "fact",
          "name": "Profit"
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
        "value": "-",
        "type": "character",
        "target": {
          "dateCreated": "2001-01-02T20:47:41.000Z",
          "dateModified": "2021-02-26T03:18:34.045Z",
          "versionId": "21E9227B421DBAD67EA60A929E595E67",
          "primaryLocale": "en-US",
          "objectId": "8107C311DD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": "-",
          "description": "Returns the difference between two values."
        }
      },
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

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/1116B53103FC4A72BBACBAED388243D6" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: EB3A4F66E6A8413E9C36633533D0BA31" -H "Content-Type: application/json" -d "{\"information\":{\"versionId\":\"F8748568ACD64683A888E928B0E3A3BC\",\"primaryLocale\":\"en-US\",\"objectId\":\"1116B53103FC4A72BBACBAED388243D6\",\"subType\":\"agg_metric\",\"name\":\"Revenue\",\"destinationFolderId\":\"8AF48B3D4685C1717B3BDA9804CD1036\"},\"expression\":{\"text\":\"Sum(Profit) - Sum(Cost)\",\"tokens\":[{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"Sum\",\"type\":\"function\",\"target\":{\"dateCreated\":\"2001-01-02T20:47:35.000Z\",\"dateModified\":\"2021-02-26T03:18:39.843Z\",\"versionId\":\"93B1FFD040F7CBECF3C3378D5391AA35\",\"primaryLocale\":\"en-US\",\"objectId\":\"8107C31BDD9911D3B98100C04F2233EA\",\"subType\":\"function\",\"name\":\"Sum\",\"description\":\"Returns the sum of all values in the ValueList. This is a group-value function.\"}},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"<\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"UseLookupForAttributes\",\"type\":\"identifier\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"=\",\"type\":\"function\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"False\",\"type\":\"boolean\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\">\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"(\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"Profit\",\"type\":\"object_reference\",\"target\":{\"dateCreated\":\"2001-09-18T19:50:09.000Z\",\"dateModified\":\"2022-02-17T03:47:14.966Z\",\"versionId\":\"1F04706E441FF9C3C69DF5AC3C118FC3\",\"primaryLocale\":\"en-US\",\"objectId\":\"F30CB66411D5AC5FC000D98A4CC5F24F\",\"subType\":\"fact\",\"name\":\"Profit\"}},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\")\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"-\",\"type\":\"character\",\"target\":{\"dateCreated\":\"2001-01-02T20:47:41.000Z\",\"dateModified\":\"2021-02-26T03:18:34.045Z\",\"versionId\":\"21E9227B421DBAD67EA60A929E595E67\",\"primaryLocale\":\"en-US\",\"objectId\":\"8107C311DD9911D3B98100C04F2233EA\",\"subType\":\"function\",\"name\":\"-\",\"description\":\"Returns the difference between two values.\"}},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"Sum\",\"type\":\"function\",\"target\":{\"dateCreated\":\"2001-01-02T20:47:35.000Z\",\"dateModified\":\"2021-02-26T03:18:39.843Z\",\"versionId\":\"93B1FFD040F7CBECF3C3378D5391AA35\",\"primaryLocale\":\"en-US\",\"objectId\":\"8107C31BDD9911D3B98100C04F2233EA\",\"subType\":\"function\",\"name\":\"Sum\",\"description\":\"Returns the sum of all values in the ValueList. This is a group-value function.\"}},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"<\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"UseLookupForAttributes\",\"type\":\"identifier\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"=\",\"type\":\"function\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"False\",\"type\":\"boolean\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\">\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"(\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"Cost\",\"type\":\"object_reference\",\"target\":{\"dateCreated\":\"2001-09-18T20:21:56.000Z\",\"dateModified\":\"2022-02-17T05:04:23.255Z\",\"versionId\":\"DE098494437C76DA4BBDA688812CDFB2\",\"primaryLocale\":\"en-US\",\"objectId\":\"7A4ABE9111D5AC6FC000D98A4CC5F24F\",\"subType\":\"fact\",\"name\":\"Cost\"}},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\")\",\"type\":\"character\"},{\"level\":\"resolved\",\"state\":\"initial\",\"value\":\"\",\"type\":\"end_of_text\"}]}}"
```

Sample Response Body:

You can view the updated base formula's definition in the body of the response.

```json
{
  "information": {
    "versionId": "F8748568ACD64683A888E928B0E3A3BC",
    "primaryLocale": "en-US",
    "objectId": "1116B53103FC4A72BBACBAED388243D6",
    "subType": "agg_metric",
    "name": "Revenue",
    "destinationFolderId": "8AF48B3D4685C1717B3BDA9804CD1036"
  },
  "expression": {
    "text": "Sum(Profit) - Sum(Cost)",
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
        "value": "Profit",
        "type": "object_reference",
        "target": {
          "dateCreated": "2001-09-18T19:50:09.000Z",
          "dateModified": "2022-02-17T03:47:14.966Z",
          "versionId": "1F04706E441FF9C3C69DF5AC3C118FC3",
          "primaryLocale": "en-US",
          "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",
          "subType": "fact",
          "name": "Profit"
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
        "value": "-",
        "type": "character",
        "target": {
          "dateCreated": "2001-01-02T20:47:41.000Z",
          "dateModified": "2021-02-26T03:18:34.045Z",
          "versionId": "21E9227B421DBAD67EA60A929E595E67",
          "primaryLocale": "en-US",
          "objectId": "8107C311DD9911D3B98100C04F2233EA",
          "subType": "function",
          "name": "-",
          "description": "Returns the difference between two values."
        }
      },
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

Response Code: 200 (The Base Formula's definition is updated successfully in the changeset.)

The model for the definition of a base formula can be represented with the following fields:

| Fields      | Name                | Description                                        | Data Type                       | Required? |
| ----------- | ------------------- | -------------------------------------------------- | ------------------------------- | --------- |
| information | objectID            | ID of the base formula you want to edit.           | String                          | Yes       |
|             | destinationFolderId | Folder ID where you want to move the base formula. | String                          | No        |
|             | name                | Name of the base formula you want to edit.         | String                          | No        |
| expression  | text                | The text you want to modify.                       | String                          | No        |
|             | tree                | The tree structure you want to modify.             | List&lt;ObjectInfoReference&gt; | No        |
|             | tokens              | The list of parsed tokens you want to modify.      | List&lt;ObjectInfoReference&gt; | No        |
