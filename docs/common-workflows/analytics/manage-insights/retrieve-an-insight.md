---
title: Retrieve an insight
description: You can use REST APIs to retrieve an insight.
---

<Available since="2021 Update 10" />

You can use REST APIs to retrieve an insight by ID.

This workflow sample retrieves an existing insight with ID `4028f2df86340c5f018634c2f945000e` and project id `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Endpoint: [GET /api/insight/insightCards/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20Insights/getInsightCard)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "5f8qohkckd5d4tm18c9etbe0vd"
```

Sample Request Body: N/A

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/insightCards/4028f2df86340c5f018634c2f945000e' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Body:

```json
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
      "template": null,
      "templatePropertySet": {
        "timestamp": "2023-02-09T06:00:23.000Z",
        "value": "5135661.126100001",
        "lowerBoundary": "1.3956862745098038",
        "upperBoundary": "8.518039215686276"
      },
      "models": [0, 1, 0]
    }
  ]
}
```

Sample Response Code: 200 (The insight is returned successfully.)
