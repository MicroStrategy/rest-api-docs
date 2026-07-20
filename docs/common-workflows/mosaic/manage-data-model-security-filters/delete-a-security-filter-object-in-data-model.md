---
title: Delete a security filter definition in data model
sidebar_label: Delete a security filter definition in data model
description: This workflow sample demonstrates how to delete a security filter object in data model through the Modeling service.
---

<Available since="Strategy (August 2025)" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to delete a security filter object in a data model using the Modeling service.

1. Create a changeset using `POST /api/model/changesets`
1. [Delete the security filter in data model using `DELETE /api/model/dataModels/{dataModelId}/securityFilters/{securityFilterId}`](#delete-the-security-filter-in-data-model-using-delete-apimodeldatamodelsdatamodelidsecurityfilterssecurityfilterid)
1. Commit the changeset using `POST /api/model/changesets/{changesetId}/commit`](#3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit)
1. Delete the changeset using `DELETE /api/model/changesets/{changesetId}`

In this workflow sample, you want to delete the `"Year > 2015"` security filter object in data model in the MicroStrategy Tutorial project. The data model ID is `7F071F619BE244C7B6CDC2626EBB1C6C`. The object ID of the security filter is `8981A1EB828F4888959C0C0A435870CC`.

:::info

To get the authorization token needed to execute the request, use [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

## Delete the security filter in data model using [DELETE /api/model/dataModels/\{dataModelId}/securityFilters/\{securityFilterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/ms-deleteDataModelSecurityFilter)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"
"X-MSTR-MS-Changeset": "C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters/8981A1EB828F4888959C0C0A435870CC" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1"
```

Sample Response Body: Empty

Sample Response Code: 204 (The security filter has been deleted successfully from the data model.)
