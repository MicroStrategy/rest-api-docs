---
title: Workflow sample - Retrieve a security filter's member
sidebar_label: Retrieve a security filter's member
description: This workflow sample demonstrates how to get the users and user groups that the specified security filter is applied to.
---

<Available since="2021 Update 1" />

This workflow sample demonstrates how to get the users and user groups that the specified security filter is applied to. The object ID of the security filter is `8018C24FEBC4406CB9E36838C01C82D1`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the security filter's member using `GET /api/securityFilters/{id}/members`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/8018C24FEBC4406CB9E36838C01C82D1/members" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the filter's definition in the body of the response.

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
