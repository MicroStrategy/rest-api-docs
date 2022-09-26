---
title: Workflow Sample - Update a Base Formula's Definition within a Changeset
sidebar_label: Update a Base Formula's Definition within a Changeset
description: This workflow sample demonstrates how to update a base formula's definition through the Modeling service.
---

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

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

:::

## 1. Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "2A131744C91B4915B54A61FFDC528F62",
  "dateCreated": "2021-06-15T03:04:56.613866Z",
  "dateModified": "2021-06-15T03:04:56.613916Z",
  "status": "Ready",
  "schemaEdit": false,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "4bb7n1dhjo860e7tlpchg57hl",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "Administrator"
}
```

Sample Response Code: 200 (A new changeset is created successfully.)

## 2. Update the base formula's definition using [PUT /api/model/formulas/{formulaId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Formulas/ms-putFormula)

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

## 3. Commit a changeset using [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"
```

Sample Response Body:

```json
{
  "id": "4E830DF576A24E4B9120455EE576EB51",
  "dateCreated": "2021-02-23T10:51:04.336913300Z",
  "dateModified": "2021-02-23T10:51:18.780285700Z",
  "status": "Ready",
  "schemaEdit": false,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "CFC4E856492FEF1A2BB6F1BC37ABFD06",
  "userMetadataLocale": "en-US",
  "userDateNumberLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "MS"
}
```

Sample Response: 201 (The changeset is committed successfully.)

## 4. Delete a changeset using [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)

The model for the definition of a base formula can be represented with the following fields:

| Fields      | Name                | Description                                        | Data Type                       | Required? |
| ----------- | ------------------- | -------------------------------------------------- | ------------------------------- | --------- |
| information | objectID            | ID of the base formula you want to edit.           | String                          | Yes       |
|             | destinationFolderId | Folder ID where you want to move the base formula. | String                          | No        |
|             | name                | Name of the base formula you want to edit.         | String                          | No        |
| expression  | text                | The text you want to modify.                       | String                          | No        |
|             | tree                | The tree structure you want to modify.             | List&lt;ObjectInfoReference&gt; | No        |
|             | tokens              | The list of parsed tokens you want to modify.      | List&lt;ObjectInfoReference&gt; | No        |
