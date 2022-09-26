---
title: Workflow Sample - Retrieve a Subtotal's Definition
sidebar_label: Retrieve a Subtotal's Definition
description: This topic covers several workflows for retrieving a metric's definition.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d1504a52-db9a-4d71-99d2-0ffbd82ee91a?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This topic covers several workflows for retrieving a metric's definition:

You want to get the definition of an object with the ID of `514C2064DF754990AF60432A1C1E4A77` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the definition of the specified metric within a changeset using [GET /api/model/Subtotals/{SubtotalId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Formulas/ms-getFormulaDetails).

The response can change based on the request parameters provided by the caller. Use the following parameters:

| Location | Name             | Description                                                                                                                                                                                                                                            |
| -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken | The authorization token                                                                                                                                                                                                                                |
| header   | X-MSTR-ProjectID | The ID of the project                                                                                                                                                                                                                                  |
| params   | showExpressionAs | Omitted, tree, or tokens:<br/>- If omitted, the expression is returned in only “text“ formats.<br/>- If `tree`, the expression is returned in "text" and "tree" formats.<br/>- If `tokens`, the expression is returned in "text" and "tokens" formats. |

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

## Retrieve a Subtotal's Definition

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the subtotal's definition in the body of the response. The following is an example of an expression in "text" formats.

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
  "expression": { "text": "Revenue" },
  "dimty": {
    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]
  }
}
```

Response Code: 200 (Subtotal's definition is returned successfully.)

## Retrieve a Subtotal's Definition in Tree Format

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the subtotal's definition in the body of the response, including the information and expression of the specified subtotal. The following is an example of the expression in "text" and "tree" formats.

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

## Retrieve a Subtotal's Definition in Tokens Format

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77?showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

The following is an example of the expression in "text" and "tokens" formats.

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
    "tokens": [
      {
        "level": "resolved",
        "state": "initial",
        "value": "Revenue",
        "type": "object_reference",
        "target": {
          "dateCreated": "2022-03-07T09:12:09.283Z",
          "dateModified": "2022-03-07T09:12:09.283Z",
          "versionId": "D62E22D14A34757568AEF480BF7D96AE",
          "primaryLocale": "en-US",
          "objectId": "1116B53103FC4A72BBACBAED388243D6",
          "subType": "agg_metric",
          "name": "Revenue"
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "{",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "@",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "}",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "",
        "type": "end_of_text"
      }
    ]
  },
  "dimty": {
    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]
  }
}
```

Response Code: 200 (Subtotal's definition is returned successfully.)
