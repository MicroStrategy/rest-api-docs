---
title: Retrieve a security filter's member in data model
sidebar_label: Retrieve a security filter's member in data model
description: This workflow sample demonstrates how to get the users and user groups that the specified security filter in data model is applied to.
---

<Available since="Strategy ONE (August 2025)" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to get the users and user groups to which the specified security filter in the data model applies. The data model ID is `7F071F619BE244C7B6CDC2626EBB1C6C`. The object ID of the security filter is `8981A1EB828F4888959C0C0A435870CC`.

:::info

To get the authorization token needed to execute the request, use [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

To retrieve the security filter's member, use [GET /api/dataModels/\{dataModelId}/securityFilters/\{id}/members](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getSecurityFilterUsers).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/7F071F619BE244C7B6CDC2626EBB1C6C/securityFilters/8981A1EB828F4888959C0C0A435870CC/members" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the data model's security filter's members in the response body.

```json
{
  "users": [
    {
      "name": "Katharine Shearn",
      "id": "E96A79E011D4BBCE10004694316DE8A4",
      "type": 34,
      "abbreviation": "kshearn",
      "subtype": 8704,
      "dateCreated": "2001-01-02T20:42:34.000+0000",
      "dateModified": "2019-12-04T16:53:47.000+0000",
      "version": "A3930CAE11EA16B600000080EF359083",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "extType": 0,
      "username": "kshearn",
      "fullName": "Katharine Shearn",
      "initials": "KS"
    }
  ],
  "totalUsers": 1,
  "totalUserGroups": 0
}
```

Response Code 200: (The security filter's member is returned successfully.)
