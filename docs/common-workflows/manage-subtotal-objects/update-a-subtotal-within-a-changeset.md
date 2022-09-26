---
title: Workflow Sample - Update a Subtotal within a Changeset
sidebar_label: Update a Subtotal within a Changeset
description: This workflow sample demonstrates how to update a subtotal's definition through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0054ca44-40a6-4387-b766-35fc5f00e428?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a subtotal's definition through the Modeling service.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

You want to update the definition of the max subtotal with object ID `77C1228E42FCD8EF5CA7779988763A35` to achieve the below changes:

- Add a calculated level of “Customer Region“
- Move it to another objects folder with the ID of `8A1831FF494F528D02A4A8BF5FB73459`
- Rename the subtotal to `"Average at Customer Region"`

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
  "mstrUserId": "54F3D26011D2896560009A8E67019608",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "Administrator"
}
```

Sample Response Code: 200 (A new changeset is created successfully.)

## 2. Update the metric's definition using [PUT /api/model/subtotals/{subtotalId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subtotals/ms-putSubtotal)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"
"Content-Type": "application/json"
```

Sample Request Body:

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "metric_subtotal",
    "name": "Average at Customer Region"
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
          "dateCreated": "2001-01-02T20:42:52.000Z",
          "dateModified": "2007-03-04T16:43:12.000Z",
          "versionId": "CBFF0429433BF148C21DEF8E9BCB851F",
          "primaryLocale": "en-US",
          "objectId": "4C05176211D3E877C000B3B2D86C964F",
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
        "value": ",",
        "type": "character"
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "[Customer Region]",
        "type": "object_reference",
        "target": {
          "dateCreated": "2001-01-02T20:48:07.000Z",
          "dateModified": "2021-02-26T03:18:48.000Z",
          "versionId": "989B300749981E32FFC00886259028BC",
          "primaryLocale": "en-US",
          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Customer Region"
        }
      },
      {
        "level": "resolved",
        "state": "initial",
        "value": "+",
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
    "dimtyUnits": [
      { "dimtyUnitType": "report_level", "relativePosition": 0 },
      {
        "dimtyUnitType": "attribute",
        "target": {
          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Customer Region"
        }
      }
    ]
  }
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/77C1228E42FCD8EF5CA7779988763A35?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mtl3j38atj8tmrfip3vofrjes6" -H "X-MSTR-MS-Changeset: 038AB22B5A8D4E5A9749D74B77712C50 " -H "Content-Type: application/json" -d "{\"information\":{\"destinationFolderId\":\"8A1831FF494F528D02A4A8BF5FB73459\",\"subType\":\"metric_subtotal\",\"name\":\"Average at Customer Region\"},\"expression\":{\"text\":\"Avg(Revenue)\",\"tree\":{\"type\":\"object_reference\",\"target\":{\"objectId\":\"EE5BF65E4E565AE84587468203AF8237\",\"subType\":\"agg_metric\",\"isEmbedded\":true},\"isIndependent\":0}},\"dimty\":{\"dimtyUnits\":[{\"dimtyUnitType\":\"report_level\",\"relativePosition\":0},{\"dimtyUnitType\":\"attribute\",\"target\":{\"objectId\":\"8D679D3B11D3E4981000E787EC6DE8A4\",\"subType\":\"attribute\",\"name\":\"Customer Region\"}}]}}"
```

Sample Response Body:

You can view the updated subtotal's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-03-10T09:00:50.991Z",
    "dateModified": "2022-03-10T09:01:55.226Z",
    "versionId": "2BCB1BC246EDA06088DC7E92C4794DF4",
    "primaryLocale": "en-US",
    "objectId": "77C1228E42FCD8EF5CA7779988763A35",
    "subType": "metric_subtotal",
    "name": "Average at Customer Region"
  },
  "expression": {
    "text": "Avg(Revenue)",
    "tree": {
      "type": "object_reference",
      "target": {
        "objectId": "EE5BF65E4E565AE84587468203AF8237",
        "subType": "agg_metric",
        "isEmbedded": true
      },
      "isIndependent": 0
    }
  },
  "dimty": {
    "dimtyUnits": [
      { "dimtyUnitType": "report_level", "relativePosition": 0 },
      {
        "dimtyUnitType": "attribute",
        "target": {
          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Customer Region"
        }
      }
    ]
  }
}
```

Response Code: 200 (The subtotal's definition is updated successfully in the changeset.)

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

The model for the definition of a subtotal can be updated with the following fields:

| Fields      | Name                | Description                                                                                           | Data Type                       | Required? |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------- | --------- |
| information | name                | Name of the subtotal. This is the most user-friendly value that can be used to identify the subtotal. | String                          | Yes       |
|             | subtype             | For the subtotal, `subType` is `metric_subtotal`.                                                     | String                          | Yes       |
|             | destinationFolderId | Folder ID where the new metric is saved.                                                              | String                          | Yes       |
| expression  | text                | A human readable, but non-parsable text, describing the expression.                                   | String                          | No        |
|             | tree                | A tree data structure fully defining the expression.                                                  | List&lt;ObjectInfoReference&gt; | No        |
|             | tokens              | A list of parsed tokens.                                                                              | List&lt;ObjectInfoReference&gt; | No        |
| dimty       | dimtyUnits          | Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated.      | List&lt;ObjectInfoReference&gt; | No        |
|             | allowAddingUnit     | This setting allows other users to add extra units to this definition.                                | Boolean                         | No        |
