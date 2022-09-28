---
title: Workflow sample - Update a security filter definition
sidebar_label: Update a security filter definition
description: This workflow sample demonstrates how to update a security filter definition through the Modeling service.
---

This workflow sample demonstrates how to update a security filter definition through the Modeling service.

- [1. Create a changeset using `POST /api/model/changesets`](#1-create-a-changeset-using-post-apimodelchangesets)
- [2. Update the security filter's definition using `PUT /api/model/securityFilters/{securityFilterId}`](#2-update-the-security-filters-definition-using-put-apimodelsecurityfilterssecurityfilterid)
- [3. Commit the changeset using `POST /api/model/changesets/{changesetId}/commit`](#3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit)
- [4. Delete the changeset using `DELETE /api/model/changesets/{changesetId}`](#4-delete-the-changeset-using-delete-apimodelchangesetschangesetid)

You want to update the definition of the `"Year > 2015"` security filter object with a new definition of `"Year@ID > 2020"` and a new object name of `"Year > 2020"`. The object ID of the security filter is `8018C24FEBC4406CB9E36838C01C82D1`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

## 1. Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "C4F6B0E4C87F46EF9B6C5690DFFF87C1",
  "dateCreated": "2020-11-17T17:36:31.187294Z",
  "dateModified": "2020-11-17T17:36:31.187308Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

## 2. Update the security filter's definition using [PUT /api/model/securityFilters/{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/postSecurityFilter)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset": "C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Request Body:

```json
{
  "information": {
    "name": "Year > 2020"
  },
  "qualification": {
    "tree": {
      "type": "predicate_form_qualification",
      "predicateTree": {
        "function": "greater",
        "parameters": [
          {
            "parameterType": "constant",
            "constant": {
              "type": "double",
              "value": "2020"
            }
          }
        ],
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "form": {
          "objectId": "45C11FA478E745FEA08D781CEA190FE5",
          "subType": "attribute_form_system",
          "name": "ID"
        }
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1" -H "Content-Type: application/json" -d '{"information":{"name":"Year > 2020"},"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"2020"}}],"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"form":{"objectId":"45C11FA478E745FEA08D781CEA190FE5","subType":"attribute_form_system","name":"ID"}}}}}'
```

Sample Response Body:

You can view the security filter's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2020-11-17T17:37:35.858Z",
    "dateModified": "2020-11-17T17:43:23.784Z",
    "versionId": "63E6667411EB28FC2AC10080EFB54002",
    "primaryLocale": "en-US",
    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",
    "subType": "filter",
    "name": "Year > 2020"
  },
  "qualification": {
    "text": "Year (ID) > 2020",
    "tree": {
      "type": "predicate_form_qualification",
      "predicateId": "89AECC7DAB354B4A933E83E33928C670",
      "predicateText": "Year (ID) > 2020",
      "predicateTree": {
        "function": "greater",
        "parameters": [
          {
            "parameterType": "constant",
            "constant": {
              "type": "double",
              "value": "2020.0"
            }
          }
        ],
        "attribute": {
          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Year"
        },
        "form": {
          "objectId": "45C11FA478E745FEA08D781CEA190FE5",
          "subType": "attribute_form_system",
          "name": "ID"
        }
      }
    }
  },
  "topLevel": [],
  "bottomLevel": []
}
```

Response Code: 200 (The security filter's definition is updated successfully in the changeset.)

## 3. Commit the changeset using [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset": "C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/C4F6B0E4C87F46EF9B6C5690DFFF87C1/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Response Body:

```json
{
  "id": "C4F6B0E4C87F46EF9B6C5690DFFF87C1",
  "dateCreated": "2020-11-17T18:29:37.268446Z",
  "dateModified": "2020-11-17T18:30:03.381515Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

## 4. Delete the changeset using [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)
