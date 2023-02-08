---
title: Retrieve a base formula's definition
sidebar_label: Retrieve a base formula's definition
description: This topic covers several workflows for retrieving a filter's definition.
---

<Available since="2021 Update 5" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-7bcc16b2-2864-4980-b2b1-77681174827a?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This topic covers several workflows for retrieving a filter's definition:

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

You want to get the definition of the `"Cost"` related base formula object, which is defined as `”Sum(Cost)”` and named as `“base_sum(Cost)“`. The object ID of the base formula is `594A680CB5894B25BD3AE8BB47AAF424`  in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the base formula's definition using [GET /api/model/Formulas/{FormulaId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Formulas/ms-getFormulaDetails).

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

With the above parameters, you can retrieve a base formula in different formats.

## Retrieve a base formula's definition

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the base formula's definition in the body of the response. The following is an example of an expression in “text“ formats.

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

## Retrieve a base formula’s definition in tree format

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the base formula's definition in the body of the response, including the information and expression of this specified base formula. The following is an example of an expression in "text" and “tree“ formats.

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
  "expression": {
    "text": "Sum(Cost)",
    "tree": {
      "function": "sum",
      "functionProperties": [
        {
          "name": "UseLookupForAttributes",
          "value": { "type": "boolean", "value": "false" }
        }
      ],
      "children": [
        {
          "type": "object_reference",
          "target": {
            "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",
            "subType": "fact",
            "name": "Cost"
          },
          "isIndependent": 0
        }
      ],
      "text": "Sum(Cost)",
      "type": "operator"
    }
  }
}
```

Response Code: 200 (Base Formula's definition is returned successfully.)

## Retrieve a base formula’s definition in tokens format

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424?showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the base formula's definition in the body of the response, including the information and expression of this specified base formula. The following is an example of an expression in “text“ and “tokens“ formats.

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

Response Code: 200 (Base Formula's definition is returned successfully.)
