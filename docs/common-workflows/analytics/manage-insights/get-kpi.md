---
title: Get KPI objects
description: This workflow sample demonstrates how to get KPIs owned by a user.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to get KPIs owned by a user.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get all KPIs

Endpoint: [GET /api/insight/KPIs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/getKPIs)

Sample Request Header:

:::tip
The project ID is not required as a request header, this API will automatically get KPIs owned by a user from all projects.
:::

```http
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
```

Sample Request Body: N/A

Sample Curl:

For URL parameters like `dataRangeUnit` in the sample, see [API parameters explanation](#api-parameters-explanation) for details.

```bash
curl -X 'DELETE' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/KPIs?dataRangeUnit=1p' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7'
```

Sample Response:

| Response Code | Status                   |
| ------------- | ------------------------ |
| 200           | Success                  |
| 500           | Error in retrieving KPIs |

Sample Response Body on Success:

See [KPI fields explanation](#kpi-fields-explanation) for detailed explanations of each field.

```json
{
  "kpis": [
    {
      "bookmarkId": "57C048045D4AD82A4778138CDA891E27",
      "data": {
        "latestPostStamp": "2023-03-03T02:02:46Z",
        "maxIndex": 0,
        "numberFormat": [
          {
            "numberFormat": "0%;(0%)"
          }
        ],
        "filterSummary": "{\n   \"k\" : \"K49\",\n   \"objects\" : [\n      {\n         \"ces\" : [\n            {\n               \"n\" : \"(ALL)\",\n               \"t\" : 14,\n               \"v\" : \"u;\"\n            }\n         ],\n         \"include\" : true,\n         \"k\" : \"W1029\",\n         \"ttl\" : \"Applicant Position\",\n         \"unset\" : true,\n         \"wid\" : 1\n      }\n   ],\n   \"wid\" : 1\n}",
        "dataPoints": [
          {
            "rawValue": 0.76,
            "formattedValue": "76%",
            "timestamp": "2023-03-03T02:02:46Z"
          }
        ],
        "minIndex": 0,
        "initialTimestamp": "2023-02-22T08:03:38Z"
      },
      "dataCompares": [
        {
          "timeStamp": "2023-03-02T02:00:00Z",
          "indicator": "1d",
          "compare": "0%",
          "value": 0.76
        },
        {
          "timeStamp": "2023-02-24T02:00:00Z",
          "indicator": "1w",
          "compare": "0%",
          "value": 0.76
        }
      ],
      "dateModified": "2022-11-28T21:02:03.039Z",
      "hashInfo": {
        "data": {
          "ALL": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
          },
          "1D": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
          },
          "1QT": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
          },
          "1W": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
          },
          "YTD": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
          },
          "1Y": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
          },
          "1M": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
          }
        },
        "defn": {
          "validUntil": "2023-03-03T03:00:00Z",
          "id": "9fe7e818bfddacd7a55bc70dbe13f1f90d52b582a74e46ceebf0e10cf9be38e1"
        }
      },
      "content": {
        "name": "Human Resources",
        "id": "8B6F07718442A90D584D31A1ABF93223",
        "type": 55
      },
      "schedule": {
        "name": null,
        "id": "CA5683F942AD1F8529627D945B254A4A",
        "recurrenceIntervalInHour": 1
      },
      "dateCreated": "2022-11-23T07:10:11.017Z",
      "configString": "{\"reversedPalette\":false,\"selectedDataCompare\":\"1d\"}",
      "name": "Offer Acceptance Rate",
      "disabled": false,
      "id": "BB3FD5B6AC410B389F2AEDB379856BED",
      "projectId": "47761EC611EA16DDAA780080EFB5CE10"
    },
    {
      "bookmarkId": "A1DD30D6B14DA56C6AD15A862009D009",
      "data": {
        "latestPostStamp": "2023-03-03T02:02:40Z",
        "maxIndex": 0,
        "numberFormat": [
          {
            "numberFormat": "General"
          }
        ],
        "filterSummary": "{\n   \"k\" : \"K63BBA2DC1C4C4F4E45CC5AAD8573748A\",\n   \"objects\" : [\n      {\n         \"ces\" : [\n            {\n               \"n\" : \"(ALL)\",\n               \"t\" : 14,\n               \"v\" : \"u;\"\n            }\n         ],\n         \"include\" : true,\n         \"k\" : \"W671337E25E29472884929F176EBA22A1\",\n         \"ttl\" : \"Test Set Production Release\",\n         \"unset\" : true,\n         \"wid\" : 1\n      },\n      {\n         \"ces\" : [],\n         \"include\" : true,\n         \"k\" : \"W55E97CF99CCB4464AA43D9402C6B1EA0\",\n         \"ttl\" : \"Testcase Result Production Release\",\n         \"unset\" : true,\n         \"wid\" : 1\n      }\n   ],\n   \"wid\" : 1\n}",
        "dataPoints": [
          {
            "rawValue": 1059832,
            "formattedValue": "1059832",
            "timestamp": "2023-03-03T02:02:40Z"
          }
        ],
        "minIndex": 0,
        "initialTimestamp": "2023-02-22T08:03:23Z"
      },
      "dataCompares": [
        {
          "timeStamp": "2023-03-02T02:00:00Z",
          "indicator": "1d",
          "compare": "3%",
          "value": 1030319
        },
        {
          "timeStamp": "2023-02-24T02:00:00Z",
          "indicator": "1w",
          "compare": "3%",
          "value": 1027733
        }
      ],
      "dateModified": "2023-02-06T14:01:17.568Z",
      "hashInfo": {
        "data": {
          "ALL": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "a73d4c5b7f6ddde327092f1ac9b7c3ce509c33644fa95d5474b7247bf78f7bd5"
          },
          "1D": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "a73d4c5b7f6ddde327092f1ac9b7c3ce509c33644fa95d5474b7247bf78f7bd5"
          },
          "1QT": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "a73d4c5b7f6ddde327092f1ac9b7c3ce509c33644fa95d5474b7247bf78f7bd5"
          },
          "1W": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "a73d4c5b7f6ddde327092f1ac9b7c3ce509c33644fa95d5474b7247bf78f7bd5"
          },
          "YTD": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "a73d4c5b7f6ddde327092f1ac9b7c3ce509c33644fa95d5474b7247bf78f7bd5"
          },
          "1Y": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "a73d4c5b7f6ddde327092f1ac9b7c3ce509c33644fa95d5474b7247bf78f7bd5"
          },
          "1M": {
            "validUntil": "2023-03-03T03:00:00Z",
            "id": "a73d4c5b7f6ddde327092f1ac9b7c3ce509c33644fa95d5474b7247bf78f7bd5"
          }
        },
        "defn": {
          "validUntil": "2023-03-03T03:00:00Z",
          "id": "c77f03216840cd1b27bbe5c27355fa0fbef2e0bced37347db9d11614eb93aad6"
        }
      },
      "content": {
        "name": "TEC.QA",
        "id": "4624A25611E8A24CBA800080EFF52D2D",
        "type": 55
      },
      "schedule": {
        "name": null,
        "id": "CA5683F942AD1F8529627D945B254A4A",
        "recurrenceIntervalInHour": 1
      },
      "dateCreated": "2022-11-23T07:21:08.309Z",
      "configString": "{\"reversedPalette\":false,\"selectedDataCompare\":\"1d\"}",
      "name": "#Total TC",
      "disabled": false,
      "id": "0856CD76014EDE93368C12901BDE1A9F",
      "projectId": "47761EC611EA16DDAA780080EFB5CE10"
    }
  ]
}
```

## Get single KPI

Endpoint: [GET /api/insight/KPIs/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/getKPI)

Sample Request Header:

```http
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: N/A

Sample Curl:

For URL parameters like `dataRangeUnit` in the sample, see [API parameters explanation](#api-parameters-explanation) for details.

```bash
curl -X 'DELETE' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/KPIs/BB3FD5B6AC410B389F2AEDB379856BED?dataRangeUnit=1p' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response:

| Response Code | Status                                                   |
| ------------- | -------------------------------------------------------- |
| 200           | Success                                                  |
| 400           | Request is invalid, e.g. KPI id is not in correct format |
| 404           | KPI with given id does not exist                         |

Sample Response Body on Success:

See [KPI fields explanation](#kpi-fields-explanation) for detailed explanations of each field.

```json
{
  "bookmarkId": "57C048045D4AD82A4778138CDA891E27",
  "data": {
    "latestPostStamp": "2023-03-03T02:02:46Z",
    "maxIndex": 0,
    "numberFormat": [
      {
        "numberFormat": "0%;(0%)"
      }
    ],
    "filterSummary": "{\n   \"k\" : \"K49\",\n   \"objects\" : [\n      {\n         \"ces\" : [\n            {\n               \"n\" : \"(ALL)\",\n               \"t\" : 1\n               \"v\" : \"u;\"\n            }\n         ],\n         \"include\" : true,\n         \"k\" : \"W1029\",\n         \"ttl\" : \"Applicant Position\",\n       \"unset\" : true,\n         \"wid\" : 1\n      }\n   ],\n   \"wid\" : 1\n}",
    "dataPoints": [
      {
        "rawValue": 0.76,
        "formattedValue": "76%",
        "timestamp": "2023-03-03T02:02:46Z"
      }
    ],
    "minIndex": 0,
    "initialTimestamp": "2023-02-22T08:03:38Z"
  },
  "dataCompares": [
    {
      "timeStamp": "2023-03-02T02:00:00Z",
      "indicator": "1d",
      "compare": "0%",
      "value": 0.76
    },
    {
      "timeStamp": "2023-02-24T02:00:00Z",
      "indicator": "1w",
      "compare": "0%",
      "value": 0.76
    }
  ],
  "dateModified": "2022-11-28T21:02:03.039Z",
  "hashInfo": {
    "data": {
      "ALL": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1D": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1QT": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1W": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "YTD": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1Y": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1M": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      }
    },
    "defn": {
      "validUntil": "2023-03-03T03:00:00Z",
      "id": "9fe7e818bfddacd7a55bc70dbe13f1f90d52b582a74e46ceebf0e10cf9be38e1"
    }
  },
  "content": {
    "name": "Human Resources",
    "id": "8B6F07718442A90D584D31A1ABF93223",
    "type": 55
  },
  "schedule": {
    "name": null,
    "id": "CA5683F942AD1F8529627D945B254A4A",
    "recurrenceIntervalInHour": 1
  },
  "dateCreated": "2022-11-23T07:10:11.017Z",
  "configString": "{\"reversedPalette\":false,\"selectedDataCompare\":\"1d\"}",
  "name": "Offer Acceptance Rate",
  "disabled": false,
  "id": "BB3FD5B6AC410B389F2AEDB379856BED",
  "projectId": "47761EC611EA16DDAA780080EFB5CE10"
}
```

## API parameters explanation

| URL parameter      | Explanation                                                                                                                                                                                                                                                                                                                                                                   | Acceptable Value                                                                                                                                                                                                                                                                                                                                                             | Default value | Comment                                                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeFilter      | Determines whether to add a filter summary to the KPI object                                                                                                                                                                                                                                                                                                                  | `true` or `false`                                                                                                                                                                                                                                                                                                                                                            | `false`       |                                                                                                                                                                  |
| dataRangeUnit      | A unit that indicates data point range in the response body                                                                                                                                                                                                                                                                                                                   | `1p`(one data point), `1d`(data points in range [now - 1d, now]), `1w`(data points in range [now - 1 week, now]), `1m`(data points in range [now - 4 weeks, now]), `1qt`(data points in range [now - 13 weeks, now]), `1y`(data points in range [now - 52 weeks, now]), `ytd`(data points in range [start time of this year, now], `all`(all data points), `nodata`(no data) | `nodata`      | `all` is not available for [Get /api/insight/KPIs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/getKPIs) |
| compareWith        | A list of comparison indicators to get comparison results in the response body according to indicators. Comparisons are performed by the latest data point and the data point specified by indicator. e.g. 1d means to compare a data point of the current time with a data point 24 hours before the current time. Indicators are separated by a comma. For example: `1d,1w` | 1d(one day), 1w(one week), 1m(4 weeks), 1qt(13 weeks), 1y(52 weeks)                                                                                                                                                                                                                                                                                                          | Empty         |                                                                                                                                                                  |
| dataAggregateLevel | Aggregate level for the returned data                                                                                                                                                                                                                                                                                                                                         | `hourly` or `daily`                                                                                                                                                                                                                                                                                                                                                          | `hourly`      |                                                                                                                                                                  |
| contentId          | A dashboard ID, if this ID is provided, the response body will only contain KPIs defined in this dashboard                                                                                                                                                                                                                                                                    | GUID                                                                                                                                                                                                                                                                                                                                                                         | Empty         | only available for [GET /api/insight/KPIs/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/getKPI)    |
| contentType        | This value should be `55` if `contentId` is provided                                                                                                                                                                                                                                                                                                                          | Must be `55` for now                                                                                                                                                                                                                                                                                                                                                         | `0`           | only available for [GET /api/insight/KPIs/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/getKPI)    |

## KPI fields explanation

KPI in response:

```json
{
  "bookmarkId": "57C048045D4AD82A4778138CDA891E27",
  "data": {
    "latestPostStamp": "2023-03-03T02:02:46Z",
    "maxIndex": 0,
    "numberFormat": [
      {
        "numberFormat": "0%;(0%)"
      }
    ],
    "filterSummary": "{\n   \"k\" : \"K49\",\n   \"objects\" : [\n      {\n         \"ces\" : [\n            {\n               \"n\" : \"(ALL)\",\n               \"t\" : 1\n               \"v\" : \"u;\"\n            }\n         ],\n         \"include\" : true,\n         \"k\" : \"W1029\",\n         \"ttl\" : \"Applicant Position\",\n       \"unset\" : true,\n         \"wid\" : 1\n      }\n   ],\n   \"wid\" : 1\n}",
    "dataPoints": [
      {
        "rawValue": 0.76,
        "formattedValue": "76%",
        "timestamp": "2023-03-03T02:02:46Z"
      }
    ],
    "minIndex": 0,
    "initialTimestamp": "2023-02-22T08:03:38Z"
  },
  "dataCompares": [
    {
      "timeStamp": "2023-03-02T02:00:00Z",
      "indicator": "1d",
      "compare": "0%",
      "value": 0.76
    },
    {
      "timeStamp": "2023-02-24T02:00:00Z",
      "indicator": "1w",
      "compare": "0%",
      "value": 0.76
    }
  ],
  "dateModified": "2022-11-28T21:02:03.039Z",
  "hashInfo": {
    "data": {
      "ALL": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1D": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1QT": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1W": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "YTD": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1Y": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      },
      "1M": {
        "validUntil": "2023-03-03T03:00:00Z",
        "id": "25222b32a9212dcf208af5b69355927fbb3ee1b4592862573d7cbb3dc1f96a13"
      }
    },
    "defn": {
      "validUntil": "2023-03-03T03:00:00Z",
      "id": "9fe7e818bfddacd7a55bc70dbe13f1f90d52b582a74e46ceebf0e10cf9be38e1"
    }
  },
  "content": {
    "name": "Human Resources",
    "id": "8B6F07718442A90D584D31A1ABF93223",
    "type": 55
  },
  "schedule": {
    "name": null,
    "id": "CA5683F942AD1F8529627D945B254A4A",
    "recurrenceIntervalInHour": 1
  },
  "dateCreated": "2022-11-23T07:10:11.017Z",
  "configString": "{\"reversedPalette\":false,\"selectedDataCompare\":\"1d\"}",
  "name": "Offer Acceptance Rate",
  "disabled": false,
  "id": "BB3FD5B6AC410B389F2AEDB379856BED",
  "projectId": "47761EC611EA16DDAA780080EFB5CE10"
}
```

| KPI field                         | Explanation                                                                                                                                                                                                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                                | The KPI object ID                                                                                                                                                                                                                                                             |
| projectId                         | The project ID of KPI object                                                                                                                                                                                                                                                  |
| disabled                          | Determines whether the KPI object is disabled or not                                                                                                                                                                                                                          |
| name                              | The KPI object name                                                                                                                                                                                                                                                           |
| dateCreated                       | The KPI object creation time                                                                                                                                                                                                                                                  |
| dateModified                      | The last KPI object modification time                                                                                                                                                                                                                                         |
| bookmarkId                        | The bookmark ID that captures the status when you define the KPI object                                                                                                                                                                                                       |
| configString                      | A pure string, this is used by the Library client to save some client specific configurations for KPIs                                                                                                                                                                        |
| content                           | Determines the dashboard that the KPI is defined on                                                                                                                                                                                                                           |
| content.name                      | The dashboard name                                                                                                                                                                                                                                                            |
| content.type                      | The dashboard type, should be `55`                                                                                                                                                                                                                                            |
| content.id                        | The dashboard ID                                                                                                                                                                                                                                                              |
| content.instanceId                | The instance ID of the dashboard, only required in [POST /api/insight/KPIs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/createKPI)                                                                                   |
| schedule                          | Internal property, this field can be ignored                                                                                                                                                                                                                                  |
| hashInfo                          | Used only by MicroStrategy App for cache purposes                                                                                                                                                                                                                             |
| dataCompares                      | The comparison results according to `compareWith` parameter in URL. Comparisons are performed by the latest data point and the data point specified by indicator. e.g. "1d" compares the data point of the current time with the data point 24 hours before the current time. |
| dataCompares[*].timestamp         | The timestamp of the data point used for comparison                                                                                                                                                                                                                           |
| dataCompares[*].indicator         | The comparison indicator                                                                                                                                                                                                                                                      |
| dataCompares[*].compare           | The comparison result                                                                                                                                                                                                                                                         |
| dataCompares[*].value             | The data point value                                                                                                                                                                                                                                                          |
| data                              | Data related information                                                                                                                                                                                                                                                      |
| data.filterSummary                | The filter summary when data points are generated                                                                                                                                                                                                                             |
| data.initialTimestamp             | The timestamp of the earliest data point                                                                                                                                                                                                                                      |
| data.latestPostStamp              | The timestamp of the latest data point                                                                                                                                                                                                                                        |
| data.numberFormat[*].numberFormat | The number format of the data point                                                                                                                                                                                                                                           |
| data.minIndex                     | The index of the minimum data point in `data.dataPoints`                                                                                                                                                                                                                      |
| data.maxIndex                     | The index of the maximum data point in `data.dataPoints`                                                                                                                                                                                                                      |
| data.dataPoints                   | The array of data points                                                                                                                                                                                                                                                      |
| data.dataPoints[*].rawValue       | The raw value of the data point. If `dataAggregateLevel` is set to `daily`, this is the medium value of the day specified in `data.dataPoints[*].timeStamp`                                                                                                                   |
| data.dataPoints[*].formattedValue | The formatted value of the data point                                                                                                                                                                                                                                         |
| data.dataPoints[*].timeStamp      | The timestamp when a data point is generated                                                                                                                                                                                                                                  |
| data.dataPoints[*].min            | The minimum data point value (formatted) of the data specified in `data.dataPoints[*].timeStamp`. This field displays when `dataAggregateLevel` is set to `daily`.                                                                                                            |
| data.dataPoints[*].max            | The maximum data point value (formatted) of the data specified in `data.dataPoints[*].timeStamp`. This field displays when `dataAggregateLevel` is set to `daily`.                                                                                                            |
