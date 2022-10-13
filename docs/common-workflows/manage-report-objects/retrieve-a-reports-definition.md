---
title: Retrieve a report's definition
description: You can use REST APIs to retrieve the definition of a report through Modeling service.
---

You can use REST APIs to retrieve the definition of a report through Modeling service. This topic includes the following workflows:

- [Retrieve a report's definition directly](#retrieve-a-reports-definition-directly)
- [Retrieve a report's definition within a report instance](#retrieve-a-reports-definition-within-a-report-instance)
  - [1. Create a report instance](#1-create-a-report-instance)
  - [2. Get a report's definition within the instance](#2-get-a-reports-definition-within-the-instance)
  - [3. Delete report instance](#3-delete-report-instance)

In both sample workflows, we want to retrieve a report’s definition from “MicroStrategy Tutorial“ project. The report ID is `FFDAB82F4CA397073ABD4196FCBCD918`. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Retrieve a report's definition directly

By using this workflow, you can quickly get the report’s definition, but you still need to create a report instance to do any further modification.

Endpoint: [GET /api/model/reports/{reportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-getReport)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "5vcpml6ds4pe9g13c0oevqnmae"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918?showExpressionAs=tree' -H 'X-MSTR-AuthToken: 5vcpml6ds4pe9g13c0oevqnmae' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Cookie: JSESSIONID=0FAABB8353719758660C07AF715CA12C; iSession=5vcpml6ds4pe9g13c0oevqnmae'
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2003-10-17T18:09:11.000Z",
    "dateModified": "2016-08-12T19:33:32.000Z",
    "versionId": "0DDDEEF04A42DE7AB4C752A146D7F446",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "FFDAB82F4CA397073ABD4196FCBCD918",
    "subType": "report_grid",
    "name": "Units Sold Analysis"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "type": "metrics",
          "elements": [
            {
              "id": "803BE0704085BDE65FEA55B03E83D43B",
              "name": "Units Sold Status",
              "subType": "metric"
            },
            {
              "id": "5B3114084613C45EF079279122DD0DDE",
              "name": "Units Sold Forecast",
              "subType": "metric"
            },
            {
              "id": "4C05190A11D3E877C000B3B2D86C964F",
              "name": "Units Sold",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {
      "text": "Month = Dec 2016",
      "tree": {
        "type": "predicate_filter_qualification",
        "predicateId": "9F9A0054208D43BCB89678B9E93C26D4",
        "predicateText": "Month = Dec 2016",
        "predicateTree": {
          "filter": {
            "objectId": "87989C374DF0A7B20BFCDFB9E6E042F1",
            "subType": "filter",
            "name": "Fixed month selection - December current year"
          },
          "isIndependent": 0
        }
      }
    }
  },
  "grid": {
    "viewTemplate": {
      "rows": {
        "units": [],
        "sorts": []
      },
      "columns": {
        "units": [
          {
            "type": "metrics",
            "elements": [
              {
                "id": "803BE0704085BDE65FEA55B03E83D43B",
                "name": "Units Sold Status",
                "subType": "metric",
                "thresholds": [
                  {
                    "format": [
                      {
                        "type": "alignment_horizontal",
                        "value": "3"
                      },
                      {
                        "type": "font_name",
                        "value": "Wingdings"
                      }
                    ],
                    "condition": {
                      "text": "{Units Sold} > {Units Sold Forecast}",
                      "tree": {
                        "type": "predicate_metric_qualification",
                        "predicateId": "3F7973B48873456ABDC742B7CAB7872D",
                        "predicateText": "{Units Sold} > {Units Sold Forecast}",
                        "predicateTree": {
                          "function": "greater",
                          "parameters": [
                            {
                              "parameterType": "object_reference",
                              "target": {
                                "objectId": "5B3114084613C45EF079279122DD0DDE",
                                "subType": "metric",
                                "name": "Units Sold Forecast"
                              }
                            }
                          ],
                          "levelType": "metric_level",
                          "metric": {
                            "objectId": "4C05190A11D3E877C000B3B2D86C964F",
                            "subType": "metric",
                            "name": "Units Sold"
                          },
                          "metricFunction": "value",
                          "isIndependent": 0,
                          "nullInclude": 0
                        }
                      }
                    },
                    "name": "Positive",
                    "replaceText": "4",
                    "semantics": "symbol",
                    "scope": "metric_only",
                    "enable": true
                  }
                ]
              },
              {
                "id": "5B3114084613C45EF079279122DD0DDE",
                "name": "Units Sold Forecast",
                "subType": "metric"
              },
              {
                "id": "4C05190A11D3E877C000B3B2D86C964F",
                "name": "Units Sold",
                "subType": "metric"
              }
            ]
          }
        ],
        "sorts": []
      },
      "pageBy": {
        "units": [],
        "sorts": []
      }
    },
    "viewFilter": {}
  }
}
```

Response Code: 200 (The report's definition is returned successfully.)

## Retrieve a report's definition within a report instance

By using this workflow, you can do modifications after the report instance has been created. A series of modifications and creations will be set to the metadata when you save the report.

:::info

A report instance is required for getting, creating, updating, deleting derived elements in report. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.

:::

### 1. Create a report instance

Endpoint: [POST /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'X-MSTR-ProjectId: B19DEDCC11D4E0EFC000EB9495D0F44F'
```

Sample Response Body:

```json
{
  "id": "25114D344481A2EA0400A1AD21450BED"
}
```

Sample Response Code: 201 (A new report instance is created successfully.)

### 2. Get a report's definition within the instance

Endpoint: [GET /api/model/reports/{reportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-getReport)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "5vcpml6ds4pe9g13c0oevqnmae"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918' -H 'X-MSTR-MS-Instance: 25114D344481A2EA0400A1AD21450BED' -H 'X-MSTR-AuthToken: 5vcpml6ds4pe9g13c0oevqnmae' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Cookie: JSESSIONID=12F90A04AD40EC78CEBEE570A1E496E4; iSession=ldk7lv4emfrqs6rmtfniq1tpfq'
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2003-10-17T18:09:11.000Z",
    "dateModified": "2016-08-12T19:33:32.000Z",
    "versionId": "0DDDEEF04A42DE7AB4C752A146D7F446",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "FFDAB82F4CA397073ABD4196FCBCD918",
    "subType": "report_grid",
    "name": "Units Sold Analysis"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "type": "metrics",
          "elements": [
            {
              "id": "803BE0704085BDE65FEA55B03E83D43B",
              "name": "Units Sold Status",
              "subType": "metric"
            },
            {
              "id": "5B3114084613C45EF079279122DD0DDE",
              "name": "Units Sold Forecast",
              "subType": "metric"
            },
            {
              "id": "4C05190A11D3E877C000B3B2D86C964F",
              "name": "Units Sold",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {
      "text": "Month = Dec 2016",
      "tree": {
        "type": "predicate_filter_qualification",
        "predicateId": "9F9A0054208D43BCB89678B9E93C26D4",
        "predicateText": "Month = Dec 2016",
        "predicateTree": {
          "filter": {
            "objectId": "87989C374DF0A7B20BFCDFB9E6E042F1",
            "subType": "filter",
            "name": "Fixed month selection - December current year"
          },
          "isIndependent": 0
        }
      }
    }
  },
  "grid": {
    "viewTemplate": {
      "rows": {
        "units": [],
        "sorts": []
      },
      "columns": {
        "units": [
          {
            "type": "metrics",
            "elements": [
              {
                "id": "803BE0704085BDE65FEA55B03E83D43B",
                "name": "Units Sold Status",
                "subType": "metric",
                "thresholds": [
                  {
                    "format": [
                      {
                        "type": "alignment_horizontal",
                        "value": "3"
                      },
                      {
                        "type": "font_name",
                        "value": "Wingdings"
                      },
                      {
                        "type": "font_color",
                        "value": "32768"
                      },
                      {
                        "type": "font_script",
                        "value": "2"
                      },
                      {
                        "type": "background_fill_style",
                        "value": "0"
                      }
                    ],
                    "condition": {
                      "text": "{Units Sold} > {Units Sold Forecast}",
                      "tree": {
                        "type": "predicate_metric_qualification",
                        "predicateId": "3F7973B48873456ABDC742B7CAB7872D",
                        "predicateText": "{Units Sold} > {Units Sold Forecast}",
                        "predicateTree": {
                          "function": "greater",
                          "parameters": [
                            {
                              "parameterType": "object_reference",
                              "target": {
                                "objectId": "5B3114084613C45EF079279122DD0DDE",
                                "subType": "metric",
                                "name": "Units Sold Forecast"
                              }
                            }
                          ],
                          "levelType": "metric_level",
                          "metric": {
                            "objectId": "4C05190A11D3E877C000B3B2D86C964F",
                            "subType": "metric",
                            "name": "Units Sold"
                          },
                          "metricFunction": "value",
                          "isIndependent": 0,
                          "nullInclude": 0
                        }
                      }
                    },
                    "name": "Positive",
                    "replaceText": "4",
                    "semantics": "symbol",
                    "scope": "metric_only",
                    "enable": true
                  }
                ]
              },
              {
                "id": "5B3114084613C45EF079279122DD0DDE",
                "name": "Units Sold Forecast",
                "subType": "metric"
              },
              {
                "id": "4C05190A11D3E877C000B3B2D86C964F",
                "name": "Units Sold",
                "subType": "metric"
              }
            ]
          }
        ],
        "sorts": []
      },
      "pageBy": {
        "units": [],
        "sorts": []
      }
    },
    "viewFilter": {}
  }
}
```

Response Code: 200 (The report's definition is returned successfully.)

### 3. Delete report instance

Endpoint: [DELETE /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
"X-MSTR-MS-Instance": "25114D344481A2EA0400A1AD21450BED"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918/instances' -H 'X-MSTR-MS-Instance: 25114D344481A2EA0400A1AD21450BED' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'Cookie: JSESSIONID=DFCB945B0A0DD959D26BA05F9AE20B3B; iSession=vslb4k2o4api370rf2jq2htbm2'
```

Sample Response Body: Empty

Sample Response Code: 204 (The report instance has been deleted successfully.)
