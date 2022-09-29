---
title: Field selection for data API v2 result-fetching endpoints
description: For Data API v2 result-fetching endpoints, the MicroStrategy REST API provides a specialized flavor of field selection support. It is tailored for Data API specific use cases using a similar syntax.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-a6457d75-f616-4092-9485-e6007627b73d?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

For Data API v2 result-fetching endpoints, the MicroStrategy REST API provides a specialized flavor of field selection support. It is tailored for Data API specific use cases using a similar syntax.

The endpoints are:

- `POST /api/v2/reports/{reportId}/instances`
- `PUT /api/v2/reports/{reportId}/instances/{instanceId}`
- `GET /api/v2/reports/{reportId}/instances/{instanceId}`
- `POST /api/v2/cubes/{cubeId}/instances`
- `GET /api/v2/cubes/{cubeId}/instances/{instanceId}`
- `GET /api/v2/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey}/visualizations/{visualizationKey}`

## Background

Keep in the mind the following specific considerations for Data API v2 result-fetching endpoints:

- When performance is a concern, we encourage reducing computations. Rather than just transferring data to the client, use existing [filter functionality](../filter-data/), such as `requestedObjects`, view filters, and metric limits.
- General top-level field selection has been supported since the MicroStrategy 2020 release. However, for the Data API, you rarely exclude top-level fields. If the client only needs a definition, and not data, it is simpler to use the Get Definition endpoints instead.
- Using field selection instead of the recommended ways above, while reducing data transfer size, may lead to unused computations and unnecessary post-computation filtering costs. This is suboptimal in terms of performance.

Therefore, general field selection is designed to not apply to these endpoints. On the other hand, we are also aware of valid client use cases and make them possible through field selection syntax in a disciplined way.

## General usage

You can specify one or more comma-separated rules through the well-known fields param.

POST /api/v2/reports/07E7A82B4E44D13892842AB3FEE26D24/instances?fields=-data.metricValues.formatted,-data.metricValues.extras

Some things to keep in mind:

- The specified fields value only applies to the specific HTTP request. It does not apply to subsequent requests against the same instance.
- Field selection rules are closely related to response models and this topic reflects the status as of 2020 Update 2 release.

## Supported rule: Filtering metric value representations and other per metric-cell information

MicroStrategy Library Server 2020 Update 2 and above

MicroStrategy Intelligence Server 2020 Update 2 and above

By default, metric values are returned in both raw representation (data.metricValues.raw) and formatted representation (`data.metricValues.formatted`). Other metric cell information under extras, such as optional thresholds, are returned as well.

Clients can request part of these fields by using the following exclusion rules:

- -`data.metricValues.raw`: Excludes raw values.
- -`data.metricValues.formatted`: Excludes formatted values.
- -`data.metricValues.extras`: Excludes other per metric-cell information.

Exclusion rules can significantly improve the performance of certain clients, such as the ones mentioned below, roughly halving the size of data transfers:

- Frontend apps and exporters that render results similarly as MicroStrategy client products, by focusing on human-reader formatted values that can be rendered directly. These frontend apps and exporters may need extras for determining advanced formatting.

- Data connectors that focus on raw values are compact and easily parsed and post-processed.

### Example

To obtain data in a raw metric value format, request data excluding formatted and extras.

Report:

- Attribute: Category
- Metrics: Units Sold (numeric), Profit (currency), Profit Margin (percentage with threshold)

Request:

POST /api/v2/reports/07E7A82B4E44D13892842AB3FEE26D24/instances?fields=-data.metricValues.formatted,-data.metricValues.extras

Response:

```json
{
  // ...
  "data": {
    // ...
    "metricValues": {
      "raw": [
        [192668, 569278.3519999967, 0.215628025],
        [83734, 4289602.7975999959, 0.1758660792],
        [287517, 254698.4764999972, 0.0621375922],
        [283554, 180044.0035000003, 0.0462437743]
      ]
    }
  }
}
```

Response without field section:

```json
{
  "data": {
    "metricValues": {
      "raw": [
        [192668, 569278.3519999967, 0.215628025],
        [83734, 4289602.7975999959, 0.1758660792],
        [287517, 254698.4764999972, 0.0621375922],
        [283554, 180044.0035000003, 0.0462437743]
      ],
      "formatted": [
        ["192,668", "$569,278", "21.56%"],
        ["83,734", "$4,289,603", "17.59%"],
        ["287,517", "$254,698", "6.21%"],
        ["283,554", "$180,044", "4.62%"]
      ],
      "extras": [
        [{}, {}, { "ti": 0 }],
        [{}, {}, { "ti": 0 }],
        [{}, {}, {}],
        [{}, {}, {}]
      ]
    }
  }
}
```
