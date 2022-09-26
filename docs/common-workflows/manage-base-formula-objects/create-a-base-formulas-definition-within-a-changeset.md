---
title: Workflow Sample - Create a Base Formula's Definition within a Changeset
sidebar_label: Create a Base Formula's Definition within a Changeset
description: This workflow sample demonstrates how to create an attribute object through the Modeling service.
---

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

## 2. Create a new base formula using [POST /api/model/formulas](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Formulas/ms-postFormula)

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
| header   | X-MSTR-ProjectID    | The ID of the project.                                                                                                                                                                                                                                 |
| header   | X-MSTR-MS-Changeset | The ID of the changeset.                                                                                                                                                                                                                               |
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

Sample Response Code: 201 (The changeset is committed successfully.)

## 4. Delete a changeset using [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

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
