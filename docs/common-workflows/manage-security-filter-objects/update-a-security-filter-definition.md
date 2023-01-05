---
title: Workflow sample - Update a security filter definition
sidebar_label: Update a security filter definition
description: This workflow sample demonstrates how to update a security filter definition through the Modeling service.
---

<Available since="2021 Update 1" />

This workflow sample demonstrates how to update a security filter definition through the Modeling service.

- 1. Create a changeset using `POST /api/model/changesets`
- [2. Update the security filter's definition using `PUT /api/model/securityFilters/{securityFilterId}`](#2-update-the-security-filters-definition-using-put-apimodelsecurityfilterssecurityfilterid)
- 3. Commit the changeset using `POST /api/model/changesets/{changesetId}/commit`](#3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit)
- 4. Delete the changeset using `DELETE /api/model/changesets/{changesetId}`

You want to update the definition of the `"Year > 2015"` security filter object with a new definition of `"Year@ID > 2020"` and a new object name of `"Year > 2020"`. The object ID of the security filter is `8018C24FEBC4406CB9E36838C01C82D1`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md).

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
