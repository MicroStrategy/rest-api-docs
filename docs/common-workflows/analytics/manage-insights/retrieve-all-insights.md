---
title: Retrieve all insights
description: You can use REST APIs to retrieve all insights.
---

<Available since="2021 Update 10" />

You can use REST APIs to retrieve all insights.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Retrieve all insights without KPI data

The following sample workflow retrieves all insights without KPI data.

Endpoint: [GET /api/insight/insightCards](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20Insights/getInsightCards)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
```

Sample Request Body: N/A

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/insightCards' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd'
```

Sample Response Body:

```json
{
  "insightCards": [
    {
      "id": "4028f2df86340c5f018634c2f945000e",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "kpiId": "82B43E695D4C08AF3236E3AE886700F8",
      "type": "OUTLIER",
      "read": false,
      "generatedTimestamp": "2023-02-09T06:00:38.466Z",
      "results": [
        {
          "insightDataPoints": [
            {
              "rawValue": 5135661.126100001,
              "formattedValue": "$5,135,661",
              "timestamp": "2023-02-09T06:00:23.000Z",
              "slope": 0
            }
          ],
          "insightDataTrends": [],
          "seasonalityPresence": false,
          "seasonalities": [],
          "lowerBoundary": [1.3956862745098038],
          "upperBoundary": [8.518039215686276],
          "score": 0,
          "templateKey": "UNEXPECTED_HIGH",
          "template": "{{kpiName}} was unexpectedly <span data-formatting='bold positive'>high</span> on {{timestamp}}, with a value of <span data-formatting='bold positive'>{{value}}</span>. This value is outside the expected range of <span data-formatting='bold positive'>{{lowerBoundary}}</span> to <span data-formatting='bold positive'>{{upperBoundary}}</span>.",
          "templatePropertySet": {
            "timestamp": "2023-02-09T06:00:23.000Z",
            "value": "5135661.126100001",
            "lowerBoundary": "1.3956862745098038",
            "upperBoundary": "8.518039215686276",
            "kpiName": "Profit - autotest"
          },
          "models": [0, 1, 0]
        }
      ]
    },
    {
      "id": "4028f2df86340c5f018634374d24000b",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "kpiId": "82B43E695D4C08AF3236E3AE886700F8",
      "type": "TREND",
      "read": false,
      "generatedTimestamp": "2023-02-09T03:28:04.892Z",
      "results": [
        {
          "insightDataPoints": [],
          "insightDataTrends": [
            {
              "startRawValue": 3.5802976486733438,
              "startFormattedValue": "",
              "startTimestamp": "2023-01-08T21:55:19.000Z",
              "endRawValue": 2.550248068741387,
              "endFormattedValue": "",
              "endTimestamp": "2023-01-23T08:00:00.000Z",
              "slope": -0.0736
            }
          ],
          "seasonalityPresence": false,
          "seasonalities": [],
          "lowerBoundary": [],
          "upperBoundary": [],
          "score": 0,
          "templateKey": "TREND_DOWNWARDS",
          "template": "{{kpiName}} <span data-formatting='bold negative'>trended down</span> between {{timestampStart}} and {{timestampEnd}}, decreasing by <span data-formatting='bold negative'>{{percentChange}}</span>.",
          "templatePropertySet": {
            "startValue": "3.5802976486733438",
            "endValue": "2.550248068741387",
            "timestampStart": "2023-01-08T21:55:19.000Z",
            "timestampEnd": "2023-01-23T08:00:00.000Z",
            "percentChange": "28.77%",
            "kpiName": "Profit - autotest"
          },
          "models": []
        }
      ]
    }
  ]
}
```

Sample Response Code: 200 (All insights are returned successfully.)

## Retrieve specified insights with KPI data

Next, you can retrieve the definition and KPI data for insights with ID `4028f2df86340c5f018634c2f945000e` and `4028f2df86340c5f018634374d24000b`.

Endpoint: [GET /api/insight/insightCards](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20Insights/getInsightCards)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
```

Sample Request Parameters:

```http
"ids": "4028f2df86340c5f018634c2f945000e,4028f2df86340c5f018634374d24000b"
"includeData": "true"
```

Sample Request Body: N/A

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/insightCards?ids=4028f2df86340c5f018634c2f945000e&ids=4028f2df86340c5f018634374d24000b&includeData=true' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd'
```

Sample Response Body:

```json
{
  "insightCards": [
    {
      "id": "4028f2df86340c5f018634c2f945000e",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "kpiId": "82B43E695D4C08AF3236E3AE886700F8",
      "numberFormat": "\"$\"#,##0;(\"$\"#,##0)",
      "type": "OUTLIER",
      "read": false,
      "generatedTimestamp": "2023-02-09T06:00:38.466Z",
      "results": [
        {
          "insightDataPoints": [
            {
              "rawValue": 5135661.126100001,
              "formattedValue": "$5,135,661",
              "timestamp": "2023-02-09T06:00:23.000Z",
              "slope": 0
            }
          ],
          "insightDataTrends": [],
          "seasonalityPresence": false,
          "seasonalities": [],
          "lowerBoundary": [1.3956862745098038],
          "upperBoundary": [8.518039215686276],
          "score": 0,
          "templateKey": "UNEXPECTED_HIGH",
          "template": "{{kpiName}} was unexpectedly <span data-formatting='bold positive'>high</span> on {{timestamp}}, with a value of <span data-formatting='bold positive'>{{value}}</span>. This value is outside the expected range of <span data-formatting='bold positive'>{{lowerBoundary}}</span> to <span data-formatting='bold positive'>{{upperBoundary}}</span>.",
          "templatePropertySet": {
            "timestamp": "2023-02-09T06:00:23.000Z",
            "value": "5135661.126100001",
            "lowerBoundary": "1.3956862745098038",
            "upperBoundary": "8.518039215686276",
            "kpiName": "Profit - autotest"
          },
          "models": [0, 1, 0]
        }
      ],
      "dataPoints": [
        {
          "rawValue": 4,
          "formattedValue": "4",
          "timestamp": "2023-01-29T15:00:00.000Z"
        },
        {
          "rawValue": 4,
          "formattedValue": "4",
          "timestamp": "2023-01-29T16:00:00.000Z"
        },
        {
          "rawValue": 5,
          "formattedValue": "5",
          "timestamp": "2023-01-29T17:55:19.000Z"
        },
        {
          "rawValue": 5,
          "formattedValue": "5",
          "timestamp": "2023-01-29T18:00:00.000Z"
        },
        {
          "rawValue": 5,
          "formattedValue": "5",
          "timestamp": "2023-01-29T19:00:00.000Z"
        },
        {
          "rawValue": 5,
          "formattedValue": "5",
          "timestamp": "2023-01-29T20:00:00.000Z"
        },
        {
          "rawValue": 3,
          "formattedValue": "3",
          "timestamp": "2023-01-29T21:55:19.000Z"
        },
        {
          "rawValue": 3,
          "formattedValue": "3",
          "timestamp": "2023-01-29T22:00:00.000Z"
        },
        {
          "rawValue": 3,
          "formattedValue": "3",
          "timestamp": "2023-01-29T23:00:00.000Z"
        },
        {
          "rawValue": 3,
          "formattedValue": "3",
          "timestamp": "2023-01-30T00:00:00.000Z"
        }
      ]
    },
    {
      "id": "4028f2df86340c5f018634374d24000b",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "kpiId": "82B43E695D4C08AF3236E3AE886700F8",
      "numberFormat": "\"$\"#,##0;(\"$\"#,##0)",
      "type": "TREND",
      "read": false,
      "generatedTimestamp": "2023-02-09T03:28:04.892Z",
      "results": [
        {
          "insightDataPoints": [],
          "insightDataTrends": [
            {
              "startRawValue": 3.5802976486733438,
              "startFormattedValue": "",
              "startTimestamp": "2023-01-08T21:55:19.000Z",
              "endRawValue": 2.550248068741387,
              "endFormattedValue": "",
              "endTimestamp": "2023-01-23T08:00:00.000Z",
              "slope": -0.0736
            }
          ],
          "seasonalityPresence": false,
          "seasonalities": [],
          "lowerBoundary": [],
          "upperBoundary": [],
          "score": 0,
          "templateKey": "TREND_DOWNWARDS",
          "template": "{{kpiName}} <span data-formatting='bold negative'>trended down</span> between {{timestampStart}} and {{timestampEnd}}, decreasing by <span data-formatting='bold negative'>{{percentChange}}</span>.",
          "templatePropertySet": {
            "startValue": "3.5802976486733438",
            "endValue": "2.550248068741387",
            "timestampStart": "2023-01-08T21:55:19.000Z",
            "timestampEnd": "2023-01-23T08:00:00.000Z",
            "percentChange": "28.77%",
            "kpiName": "Profit - autotest"
          },
          "models": []
        }
      ],
      "dataPoints": [
        {
          "rawValue": 4,
          "formattedValue": "4",
          "timestamp": "2023-01-08T21:55:19.000Z"
        },
        {
          "rawValue": 2,
          "formattedValue": "2",
          "timestamp": "2023-01-09T05:00:00.000Z"
        },
        {
          "rawValue": 2,
          "formattedValue": "2",
          "timestamp": "2023-01-10T05:00:00.000Z"
        },
        {
          "rawValue": 3,
          "formattedValue": "3",
          "timestamp": "2023-01-11T05:00:00.000Z"
        },
        {
          "rawValue": 5,
          "formattedValue": "5",
          "timestamp": "2023-01-12T05:00:00.000Z"
        },
        {
          "rawValue": 2,
          "formattedValue": "2",
          "timestamp": "2023-01-13T05:00:00.000Z"
        },
        {
          "rawValue": 1,
          "formattedValue": "1",
          "timestamp": "2023-01-14T05:00:00.000Z"
        },
        {
          "rawValue": 1,
          "formattedValue": "1",
          "timestamp": "2023-01-15T05:00:00.000Z"
        },
        {
          "rawValue": 3,
          "formattedValue": "3",
          "timestamp": "2023-01-16T05:00:00.000Z"
        },
        {
          "rawValue": 4,
          "formattedValue": "4",
          "timestamp": "2023-01-17T05:00:00.000Z"
        }
      ]
    }
  ]
}
```

Sample Response Code: 200 (Specified insights are returned successfully.)
