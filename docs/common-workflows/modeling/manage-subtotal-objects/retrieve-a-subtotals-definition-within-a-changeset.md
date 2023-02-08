---
title: Retrieve a subtotal's definition within a changeset
sidebar_label: Retrieve a subtotal's definition within a changeset
description: This workflow sample demonstrates how to retrieve a subtotal's definition within a changeset.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d1504a52-db9a-4d71-99d2-0ffbd82ee91a?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a subtotal's definition within a changeset.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

You want to get the definition of an object with the ID of `514C2064DF754990AF60432A1C1E4A77` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

For different formats of subtotal expressions, see [Retrieve a subtotal's definition](retrieve-a-subtotals-definition.md).

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/modeling/changesets.md).

## Get the definition of the specified subtotal ID within a changeset using [GET /api/model/subtotals/{subtotalID}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subtotals/ms-getSubtotalDetails)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

| Location | Name                | Description                                                                                                                                                                                                                                            |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken    | The authorization token                                                                                                                                                                                                                                |
| header   | X-MSTR-MS-Changeset | The ID of the changeset.                                                                                                                                                                                                                               |
| params   | showExpressionAs    | Omitted, tree, or tokens:<br/>- If omitted, the expression is returned in only “text“ formats.<br/>- If `tree`, the expression is returned in "text" and "tree" formats.<br/>- If `tokens`, the expression is returned in "text" and "tokens" formats. |

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"
```

Sample Response Body:

You can view the subtotal's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-03-08T03:36:01.097Z",
    "dateModified": "2022-03-08T03:36:01.097Z",
    "versionId": "C8F384E54BD9E1A415260B9F4A63B643",
    "primaryLocale": "en-US",
    "objectId": "514C2064DF754990AF60432A1C1E4A77",
    "subType": "metric_subtotal",
    "name": "Custom_Max"
  },
  "expression": {
    "text": "Revenue",
    "tree": {
      "type": "object_reference",
      "target": {
        "objectId": "1116B53103FC4A72BBACBAED388243D6",
        "subType": "agg_metric",
        "name": "Revenue"
      },
      "isIndependent": 0
    }
  },
  "dimty": {
    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]
  }
}
```

Response Code: 200 (Subtotal's definition is returned successfully.)
