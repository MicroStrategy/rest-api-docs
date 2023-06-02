---
title: Retrieve documents
Description: Retrieve a list of documents using the MicroStrategy REST API.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to retrieve a list of documents using the MicroStrategy REST API.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## GET /api/documents

Retrieve a list of documents in a specific project that meet specific search criteria.

### Request URL

```bash
GET /api/documents
```

### Sample Curl Request

```bash
curl -X 'GET' 'http://demo.microstrategy.com/MicroStrategyLibrary/api/documents?searchTerm=ipad&searchPattern=CONTAINS_ANY_WORD&offset=0&limit=-1&certifiedStatus=ALL' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: p3itnh1510c2j7kg29t29ju5us' \
-H 'X-MSTR-ProjectID: 9DE876B611E7C33BF65B0080EF45D3E8'
```

### Request Headers

| Name               | Type   | Description         |
| ------------------ | ------ | ------------------- |
| `X-MSTR-AuthToken` | Header | Authorization token |
| `X-MSTR-ProjectID` | Header | Project ID          |

### Query Parameters

| Name              | Type  | Description                                                                                                                                   |
| ----------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `searchTerm`      | Query | The value of the search `searchPattern`. This parameter is used with the `searchPattern` parameter.                                           |
| `searchPattern`   | Query | The search pattern that will be applied to the search. Possible search patterns include "Begins with", "Begins with phrase", "Contains", etc. |
| `offset`          | Query | The starting point in a collection of returned search results. This parameter is used to control paging behavior.                             |
| `limit`           | Query | The maximum number of items returned for a single request. This parameter is used to control paging behavior.                                 |
| `certifiedStatus` | Query | Defines a search criteria of the certified status of the object.                                                                              |
| `fields`          | Query | A comma-separated, top-level field whitelist that allows the client to selectively retrieve part of the response model.                       |

### Response

If successful, this API call returns a `200 OK` status code and the list of documents in the response body. The response body follows the `SearchResultInfo` schema.

#### Sample Response

```json
{
  "totalItems": 2,
  "result": [
    {
      "name": "iPad Landscape",
      "id": "036C946741BB821F9DE3BE82C19FA45A",
      "type": 55,
      "description": "Use this template to create dashboards for iPad in landscape mode.",
      "subtype": 14081,
      "dateCreated": "2010-06-12T18:55:38.000+0000",
      "dateModified": "2015-01-12T13:53:09.000+0000",
      "version": "AC1BFF4741F061028A1500AFACF1ACD5",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "hidden": true,
      "extType": 0,
      "viewMedia": 268435711,
      "certifiedInfo": {
        "certified": false
      },
      "templateInfo": {
        "template": false,
        "lastModifiedBy": {}
      },
      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8"
    },
    {
      "name": "iPad Portrait",
      "id": "24C6A93740053621A3A9FFBE66D51F98",
      "type": 55,
      "description": "Use this template to create dashboards for iPad in portrait mode.",
      "subtype": 14081,
      "dateCreated": "2010-06-12T18:58:52.000+0000",
      "dateModified": "2015-01-12T13:53:52.000+0000",
      "version": "4BBE365743ACBB0927C087AFCF736367",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "hidden": true,
      "extType": 0,
      "viewMedia": 268435711,
      "certifiedInfo": {
        "certified": false
      },
      "templateInfo": {
        "template": false,
        "lastModifiedBy": {}
      },
      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8"
    }
  ]
}
```

The `result` field contains an array of document objects, where each object represents a document and includes properties such as `id`, `name`, `createdBy`, `createdTime`, and `certified`. The `totalCount` field indicates the total number of documents found based on the search criteria.

### HTTP Status Codes

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | OK                    |
| 400         | Bad Request           |
| 500         | Internal Server Error |
