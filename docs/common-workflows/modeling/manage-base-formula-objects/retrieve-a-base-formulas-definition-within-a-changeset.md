---
title: Retrieve a base formula's definition within a changeset
sidebar_label: Retrieve a base formula's definition within a changeset
description: This workflow sample demonstrates how to retrieve a base formula's definition within a changeset.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-7bcc16b2-2864-4980-b2b1-77681174827a?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a base formula's definition within a changeset.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

::::

You want to get the definition of the `"Cost"` related base formula object, which is defined as `”Sum(Cost)”` and named as `“base_sum(Cost)“`. The object ID of the base formula is `594A680CB5894B25BD3AE8BB47AAF424`  in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

For different formats of base formula expressions, please refer to [Retrieve a base formula's definition](retrieve-a-base-formulas-definition.md).

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Get the definition of the specified base formula ID within a changeset using [GET /api/model/formulas/{formulaId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Base%20Formulas/ms-getFormulaDetails)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"
```

Sample Response Body:

You can view the base formula's definition in the body of the response, including the information, attributes, and relationships of this specified base formula.

| Location | Name                | Description                                                                                                                                                                                                                                            |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken    | The authorization token                                                                                                                                                                                                                                |
| header   | X-MSTR-MS-Changeset | The ID of the changeset.                                                                                                                                                                                                                               |
| params   | showExpressionAs    | Omitted, tree, or tokens:<br/>- If omitted, the expression is returned in only “text“ formats.<br/>- If `tree`, the expression is returned in "text" and "tree" formats.<br/>- If `tokens`, the expression is returned in "text" and "tokens" formats. |

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"
```

Sample Response Body:

You can view the base formula's definition in the body of the response, including the expression of this specified base formula.

```json
{
  "information": {
    "dateCreated": "2022-03-03T03:36:08.382Z",
    "dateModified": "2022-03-03T03:36:08.382Z",
    "versionId": "CAF77F9B432CD7FE85F2F390621F38F2",
    "primaryLocale": "en-US",
    "objectId": "594A680CB5894B25BD3AE8BB47AAF424",
    "subType": "agg_metric",
    "name": "base_sum(Cost)"
  },
  "expression": { "text": "Sum(Cost)" }
}
```

Response Code: 200 (Base Formula's definition is returned successfully.)
