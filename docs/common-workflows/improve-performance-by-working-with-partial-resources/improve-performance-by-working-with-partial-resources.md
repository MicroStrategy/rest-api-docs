---
title: Improve performance by working with partial resources
description: While API endpoints define full response models, you may only need a subset of the available data. You can ask the server to only send the fields you need and get a partial response instead. This helps improve performance, since extra resources are not devoted transferring, parsing, and storing unnecessary fields.
---

:::tip

You can try out these workflows at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ea1451c1-67fc-44c2-9f08-427b6cd60393?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

While API endpoints define full response models, you may only need a subset of the available data. You can ask the server to only send the fields you need and get a partial response instead. This helps improve performance, since extra resources are not devoted transferring, parsing, and storing unnecessary fields.

MicroStrategy supports top-level field selection on most endpoints.

- For endpoints that return a JSON object, the client specifies which fields to include for the root object.
- For endpoints that return a JSON array, the client specifies which fields to include for every element of the root array.

Field selection only allows the API caller to specify fields at the root level or root level within a collection. It is not possible to specify field selection for child or nested objects.

## Supported endpoints

Top-level field selection is supported for most endpoints that return JSON responses. You can check if an endpoint supports the standard fields parameters through the [REST API Explorer](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html).

Some exceptions are:

- The following Data API v2 result-fetching endpoints. A [specialized version of field selection](./field-selection-for-data-api-v2-result-fetching-endpoints.md) is supported.

  - `POST /api/v2/reports/{reportId}/instances`
  - `GET /api/v2/reports/{reportId}/instances/{instanceId}`
  - `POST /api/v2/cubes/{cubeId}/instances`
  - `GET /api/v2/cubes/{cubeId}/instances/{instanceId}`
  - `GET /api/v2/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey}/visualizations/{visualizationKey}`

- The following endpoint comes with a fields parameter specifically designed for its use cases. This is different from the general field selection described in this topic.

  - `GET /api/dataset/{datasetId}`

## Specify fields

The fields query parameter is exposed on endpoints that support field selection.

- Specify a comma-separated list of field names, without any white space.

  fields=id,name

- When the `fields` parameter is omitted in a query string or had an empty value, the full response is returned.

- Field selection only applies to successful responses. Error responses are always returned in full.

### Field selection on a root object

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-6ea58912-5546-4576-a94b-01db9437118d?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

For endpoints that return a JSON object, the client specifies which fields to include for the root object. If a field is included that holds an array/object value, the entire nested array/object value is kept.

Here is an example using `GET /api/projects/MicroStrategy%20Tutorial?fields=id,name,owner`.

```json
{
  "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
  "name": "MicroStrategy Tutorial",
  "owner": {
    "name": "Administrator",
    "id": "54F3D26011D2896560009A8E67019608"
  }
}
```

Here is an example of full representation without fields.

```json
{
  "acg": 255,
  "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
  "name": "MicroStrategy Tutorial",
  "status": 0,
  "alias": "",
  "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform's rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",
  "dateCreated": "2001-01-02T20:42:04.000+0000",
  "dateModified": "2019-06-28T03:32:24.000+0000",
  "owner": {
    "name": "Administrator",
    "id": "54F3D26011D2896560009A8E67019608"
  }
}
```

### Field selection on root array elements

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2f86322d-d0b2-4005-881e-f8b878c83680?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

For endpoints that return a JSON array, the client specifies which fields to include for every element of the root array. If a field is included and it holds an array/object value, the while nested array/object value is kept.

Here is an example using `GET /api/projects?fields=id,name`.

```json
[
  {
    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",
    "name": "Human Resources Analysis Module"
  },
  {
    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
    "name": "MicroStrategy Tutorial"
  }
]
```
