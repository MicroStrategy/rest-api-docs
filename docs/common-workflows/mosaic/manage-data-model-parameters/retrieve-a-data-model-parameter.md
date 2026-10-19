---
title: Retrieve a data model parameter
description: This workflow demonstrates how to retrieve a data model parameter using REST API.
---

<Available since="Strategy (May 2026)" />

This workflow sample demonstrates how to retrieve a specific parameter that belongs to a data model using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

Endpoint: [GET /api/model/dataModels/\{dataModelId}/parameters/\{parameterId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelParameter)

You can use the optional `showExpressionAs` and `showWebOptions` query parameters to control the format of the returned parameter definition.

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/parameters/4737A7E131FC4B77898DE3BD55CC4379?showExpressionAs=tree&showWebOptions=true' \
-H 'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "dateCreated": "2026-08-27T08:51:50.958Z",
    "dateModified": "2026-08-27T08:51:50.958Z",
    "versionId": "C47943524FCA63A86BCDBF99EFE3424C",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "4737A7E131FC4B77898DE3BD55CC4379",
    "subType": "prompt_date",
    "name": "Date Range Prompt",
    "destinationFolderId": "FB63EDEB81474D2DB675CA7E865F814E"
  },
  "defaultAnswer": {
    "value": {
      "parameterType": "dynamic_date_time",
      "dynamicDateTime": {
        "type": "date",
        "date": {
          "mode": "static",
          "value": "2026-08-15"
        }
      }
    }
  },
  "restriction": {
    "min": {
      "parameterType": "dynamic_date_time",
      "dynamicDateTime": {
        "type": "date",
        "date": {
          "mode": "static",
          "value": "2026-08-01"
        }
      }
    },
    "max": {
      "parameterType": "dynamic_date_time",
      "dynamicDateTime": {
        "type": "date",
        "date": {
          "mode": "static",
          "value": "2026-08-20"
        }
      }
    },
    "allowedValueType": "range"
  },
  "showTime": false
}
```

- Response Code: 200 (Success: OK)
