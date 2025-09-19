---
title: Retrieve data model metrics
description: This workflow demonstrates how to retrieve data model metrics using REST API.
---

<Available since="Strategy ONE (September 2025)" />

This workflow demonstrates how to retrieve data model metrics and their advanced properties using the REST API, with and without a changeset.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

- [Retrieve a data model metric](#retrieve-a-data-model-metric)
- [Retrieve data model metrics](#retrieve-data-model-metrics)
- [Retrieve data model metric applicable advanced properties](#retrieve-data-model-metric-applicable-advanced-properties)

A detailed description of each step of this workflow is listed below.

## Retrieve a data model metric

You can retrieve a specific data model metric.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/metrics/\{metricId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelMetric)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/metrics/D0D7ED4D7CCB4535AA7609B24FE2B7FC' \
-H 'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/metrics/D0D7ED4D7CCB4535AA7609B24FE2B7FC' \
-H 'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "dateCreated": "2025-08-20T07:40:02.873Z",
    "dateModified": "2025-08-20T07:40:02.873Z",
    "versionId": "0FB11BB44E5EAF9AB7B214AF229CF851",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "D0D7ED4D7CCB4535AA7609B24FE2B7FC",
    "subType": "metric",
    "name": "New Metric",
    "destinationFolderId": "3567B6C7338D4CFFB2F03879C4CB831D"
  },
  "expression": {
    "text": "Count({Call Center}) * 10",
    "inputText": "&count([Call Center])*10",
    "tokenStreamXml": "<tknstrm resf=\"0\"><mi cn=\"8\"><in><oi id=\"1\" did=\"8107C31CDD9911D3B98100C04F2233EA\" ab=\"\" icp=\"\" vr=\"0D9838A7E5404C01813440A99FE34E04\" des=\"Returns the number of values the ValueList. This is a group-value function.\" n=\"Count\" tp=\"11\" stp=\"2816\" acg=\"255\" sta=\"1073873279\" ext_type=\"0\" hid=\"0\"/><oi id=\"2\" did=\"FFA2DF297AAC4EDA9F8DA28A9EC8FBBF\" ab=\"\" icp=\"\" vr=\"6324AEB64689D526B216A08F92B96019\" des=\"Unique identifier for the call center, linking sales data to specific call center operations.\" n=\"Call Center\" tp=\"12\" stp=\"3072\" acg=\"255\" sta=\"4991\" ext_type=\"448\" hid=\"0\"/><oi id=\"3\" did=\"8107C312DD9911D3B98100C04F2233EA\" ab=\"\" icp=\"\" vr=\"9799FF004D45156A6931F6918AF92D09\" des=\"Returns the product of two values.\" n=\"*\" tp=\"11\" stp=\"2816\" acg=\"255\" sta=\"1073873279\" ext_type=\"0\" hid=\"0\"/></in><tkn v=\"&amp;\" tp=\"38\" lv=\"4\" sta=\"2\" sps=\"0\" length=\"1\"/><tkn v=\"count\" tp=\"280\" lv=\"4\" sta=\"2\" sps=\"1\" length=\"5\"><orf><fun rfd=\"1\"/></orf></tkn><tkn v=\"(\" tp=\"40\" lv=\"4\" sta=\"2\" sps=\"6\" length=\"1\"/><tkn v=\"[Call Center]\" tp=\"264\" lv=\"4\" sta=\"2\" sps=\"7\" length=\"13\"><orf><at rfd=\"2\"/></orf></tkn><tkn v=\")\" tp=\"41\" lv=\"4\" sta=\"2\" sps=\"20\" length=\"1\"/><tkn v=\"*\" tp=\"42\" lv=\"4\" sta=\"2\" sps=\"21\" length=\"1\"><orf><fun rfd=\"3\"/></orf></tkn><tkn v=\"10\" tp=\"262\" lv=\"4\" sta=\"2\" sps=\"22\" length=\"2\"/><tkn v=\"\" tp=\"-1\" lv=\"4\" sta=\"2\" sps=\"24\" length=\"0\"/></mi></tknstrm>"
  },
  "metricSubtotals": [
    {
      "definition": {
        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
        "subType": "system_subtotal",
        "name": "Total"
      }
    },
    {
      "definition": {
        "objectId": "078C50834B484EE29948FA9DD5300ADF",
        "subType": "system_subtotal",
        "name": "Count"
      }
    },
    {
      "definition": {
        "objectId": "B328C60462634223B2387D4ADABEEB53",
        "subType": "system_subtotal",
        "name": "Average"
      }
    },
    {
      "definition": {
        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",
        "subType": "system_subtotal",
        "name": "Minimum"
      }
    },
    {
      "definition": {
        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",
        "subType": "system_subtotal",
        "name": "Maximum"
      }
    },
    {
      "definition": {
        "objectId": "54E7BFD129514717A92BC44CF1FE5A32",
        "subType": "system_subtotal",
        "name": "Product"
      }
    },
    {
      "definition": {
        "objectId": "83A663067F7E43B2ABF67FD38ECDC7FE",
        "subType": "system_subtotal",
        "name": "Median"
      }
    },
    {
      "definition": {
        "objectId": "36226A4048A546139BE0AF5F24737BA8",
        "subType": "system_subtotal",
        "name": "Mode"
      }
    },
    {
      "definition": {
        "objectId": "7FBA414995194BBAB2CF1BB599209824",
        "subType": "system_subtotal",
        "name": "Standard Deviation"
      }
    },
    {
      "definition": {
        "objectId": "1769DBFCCF2D4392938E40418C6E065E",
        "subType": "system_subtotal",
        "name": "Variance"
      }
    },
    {
      "definition": {
        "objectId": "E1853D5A36C74F59A9F8DEFB3F9527A1",
        "subType": "system_subtotal",
        "name": "Geometric Mean"
      }
    },
    {
      "definition": {
        "objectId": "F225147A4CA0BB97368A5689D9675E73",
        "subType": "system_subtotal",
        "name": "Aggregation"
      }
    }
  ],
  "aggregateFromBase": false,
  "formulaJoinType": "default",
  "smartTotal": "decomposable_true",
  "dataType": {
    "type": "reserved",
    "precision": 0,
    "scale": 0
  },
  "format": {
    "header": [],
    "values": [
      {
        "type": "number_category",
        "value": "0"
      },
      {
        "type": "number_decimal_places",
        "value": "0"
      },
      {
        "type": "number_format",
        "value": "#,##0;(#,##0)"
      }
    ]
  },
  "subtotalFromBase": false,
  "metricFormatType": "reserved",
  "thresholds": [],
  "embeddedObjects": [
    {
      "id": "D5CAE2E2487E529A01E48AB5F8166AAE",
      "subType": "agg_metric",
      "expression": {
        "text": "Count({Call Center})"
      }
    },
    {
      "id": "E7DAE05F445651112F5A538A2090BEE2",
      "subType": "metric",
      "expression": {
        "text": "Count({Call Center})"
      },
      "dimty": {
        "dimtyUnits": [
          {
            "dimtyUnitType": "report_base_level",
            "aggregation": "normal",
            "filtering": "apply",
            "groupBy": true
          }
        ],
        "excludeAttribute": false,
        "allowAddingUnit": true
      },
      "conditionality": {
        "embedMethod": "report_into_metric_filter",
        "removeElements": true
      }
    }
  ],
  "pushDownBehavior": "automatic"
}
```

- Response Code: 200 (Success: OK)

## Retrieve data model metrics

You can also retrieve data model metrics. Parameters include pagination options such as `limit` and `offset`.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/metrics](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelMetrics)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/metrics?limit=-1&offset=0' \
-H 'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/metrics?limit=-1&offset=0' \
-H 'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response

- Response Body:

```json
{
  "offset": 0,
  "limit": -1,
  "total": 2,
  "metrics": [
    {
      "information": {
        "dateCreated": "2025-08-20T07:40:02.873Z",
        "dateModified": "2025-08-20T07:40:02.873Z",
        "versionId": "0FB11BB44E5EAF9AB7B214AF229CF851",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "D0D7ED4D7CCB4535AA7609B24FE2B7FC",
        "subType": "metric",
        "name": "New Metric",
        "destinationFolderId": "3567B6C7338D4CFFB2F03879C4CB831D"
      },
      "expression": {
        "text": "Count({Call Center}) * 10",
        "inputText": "&count([Call Center])*10",
        "tokenStreamXml": "<tknstrm resf=\"0\"><mi cn=\"8\"><in><oi id=\"1\" did=\"8107C31CDD9911D3B98100C04F2233EA\" ab=\"\" icp=\"\" vr=\"0D9838A7E5404C01813440A99FE34E04\" des=\"Returns the number of values the ValueList. This is a group-value function.\" n=\"Count\" tp=\"11\" stp=\"2816\" acg=\"255\" sta=\"1073873279\" ext_type=\"0\" hid=\"0\"/><oi id=\"2\" did=\"FFA2DF297AAC4EDA9F8DA28A9EC8FBBF\" ab=\"\" icp=\"\" vr=\"6324AEB64689D526B216A08F92B96019\" des=\"Unique identifier for the call center, linking sales data to specific call center operations.\" n=\"Call Center\" tp=\"12\" stp=\"3072\" acg=\"255\" sta=\"4991\" ext_type=\"448\" hid=\"0\"/><oi id=\"3\" did=\"8107C312DD9911D3B98100C04F2233EA\" ab=\"\" icp=\"\" vr=\"9799FF004D45156A6931F6918AF92D09\" des=\"Returns the product of two values.\" n=\"*\" tp=\"11\" stp=\"2816\" acg=\"255\" sta=\"1073873279\" ext_type=\"0\" hid=\"0\"/></in><tkn v=\"&amp;\" tp=\"38\" lv=\"4\" sta=\"2\" sps=\"0\" length=\"1\"/><tkn v=\"count\" tp=\"280\" lv=\"4\" sta=\"2\" sps=\"1\" length=\"5\"><orf><fun rfd=\"1\"/></orf></tkn><tkn v=\"(\" tp=\"40\" lv=\"4\" sta=\"2\" sps=\"6\" length=\"1\"/><tkn v=\"[Call Center]\" tp=\"264\" lv=\"4\" sta=\"2\" sps=\"7\" length=\"13\"><orf><at rfd=\"2\"/></orf></tkn><tkn v=\")\" tp=\"41\" lv=\"4\" sta=\"2\" sps=\"20\" length=\"1\"/><tkn v=\"*\" tp=\"42\" lv=\"4\" sta=\"2\" sps=\"21\" length=\"1\"><orf><fun rfd=\"3\"/></orf></tkn><tkn v=\"10\" tp=\"262\" lv=\"4\" sta=\"2\" sps=\"22\" length=\"2\"/><tkn v=\"\" tp=\"-1\" lv=\"4\" sta=\"2\" sps=\"24\" length=\"0\"/></mi></tknstrm>"
      },
      "metricSubtotals": [
        {
          "definition": {
            "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
            "subType": "system_subtotal",
            "name": "Total"
          }
        },
        {
          "definition": {
            "objectId": "078C50834B484EE29948FA9DD5300ADF",
            "subType": "system_subtotal",
            "name": "Count"
          }
        },
        {
          "definition": {
            "objectId": "B328C60462634223B2387D4ADABEEB53",
            "subType": "system_subtotal",
            "name": "Average"
          }
        },
        {
          "definition": {
            "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",
            "subType": "system_subtotal",
            "name": "Minimum"
          }
        },
        {
          "definition": {
            "objectId": "B1F4AA7DE683441BA559AA6453C5113E",
            "subType": "system_subtotal",
            "name": "Maximum"
          }
        },
        {
          "definition": {
            "objectId": "54E7BFD129514717A92BC44CF1FE5A32",
            "subType": "system_subtotal",
            "name": "Product"
          }
        },
        {
          "definition": {
            "objectId": "83A663067F7E43B2ABF67FD38ECDC7FE",
            "subType": "system_subtotal",
            "name": "Median"
          }
        },
        {
          "definition": {
            "objectId": "36226A4048A546139BE0AF5F24737BA8",
            "subType": "system_subtotal",
            "name": "Mode"
          }
        },
        {
          "definition": {
            "objectId": "7FBA414995194BBAB2CF1BB599209824",
            "subType": "system_subtotal",
            "name": "Standard Deviation"
          }
        },
        {
          "definition": {
            "objectId": "1769DBFCCF2D4392938E40418C6E065E",
            "subType": "system_subtotal",
            "name": "Variance"
          }
        },
        {
          "definition": {
            "objectId": "E1853D5A36C74F59A9F8DEFB3F9527A1",
            "subType": "system_subtotal",
            "name": "Geometric Mean"
          }
        },
        {
          "definition": {
            "objectId": "F225147A4CA0BB97368A5689D9675E73",
            "subType": "system_subtotal",
            "name": "Aggregation"
          }
        }
      ],
      "aggregateFromBase": false,
      "formulaJoinType": "default",
      "smartTotal": "decomposable_true",
      "dataType": {
        "type": "reserved",
        "precision": 0,
        "scale": 0
      },
      "format": {
        "header": [],
        "values": [
          {
            "type": "number_category",
            "value": "0"
          },
          {
            "type": "number_decimal_places",
            "value": "0"
          },
          {
            "type": "number_format",
            "value": "#,##0;(#,##0)"
          }
        ]
      },
      "subtotalFromBase": false,
      "metricFormatType": "reserved",
      "thresholds": [],
      "embeddedObjects": [
        {
          "id": "D5CAE2E2487E529A01E48AB5F8166AAE",
          "subType": "agg_metric",
          "expression": {
            "text": "Count({Call Center})"
          }
        },
        {
          "id": "E7DAE05F445651112F5A538A2090BEE2",
          "subType": "metric",
          "expression": {
            "text": "Count({Call Center})"
          },
          "dimty": {
            "dimtyUnits": [
              {
                "dimtyUnitType": "report_base_level",
                "aggregation": "normal",
                "filtering": "apply",
                "groupBy": true
              }
            ],
            "excludeAttribute": false,
            "allowAddingUnit": true
          },
          "conditionality": {
            "embedMethod": "report_into_metric_filter",
            "removeElements": true
          }
        }
      ],
      "pushDownBehavior": "automatic"
    },
    {
      "information": {
        "dateCreated": "2025-08-20T08:14:31.882Z",
        "dateModified": "2025-08-20T08:14:31.882Z",
        "versionId": "5A5B4B744AACDDD2F9E1FEA73CAEE06F",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "D21F3332BEFA4B5B8AC870C6ADC66572",
        "subType": "metric",
        "name": "New Metric (1)",
        "destinationFolderId": "3567B6C7338D4CFFB2F03879C4CB831D"
      },
      "expression": {
        "text": "Count({Call Center})"
      },
      "dimty": {
        "dimtyUnits": [
          {
            "dimtyUnitType": "report_base_level",
            "aggregation": "normal",
            "filtering": "apply",
            "groupBy": true
          }
        ],
        "excludeAttribute": false,
        "allowAddingUnit": true
      },
      "conditionality": {
        "embedMethod": "report_into_metric_filter",
        "removeElements": true
      },
      "metricSubtotals": [
        {
          "definition": {
            "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
            "subType": "system_subtotal",
            "name": "Total"
          }
        },
        {
          "definition": {
            "objectId": "078C50834B484EE29948FA9DD5300ADF",
            "subType": "system_subtotal",
            "name": "Count"
          }
        },
        {
          "definition": {
            "objectId": "B328C60462634223B2387D4ADABEEB53",
            "subType": "system_subtotal",
            "name": "Average"
          }
        },
        {
          "definition": {
            "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",
            "subType": "system_subtotal",
            "name": "Minimum"
          }
        },
        {
          "definition": {
            "objectId": "B1F4AA7DE683441BA559AA6453C5113E",
            "subType": "system_subtotal",
            "name": "Maximum"
          }
        },
        {
          "definition": {
            "objectId": "54E7BFD129514717A92BC44CF1FE5A32",
            "subType": "system_subtotal",
            "name": "Product"
          }
        },
        {
          "definition": {
            "objectId": "83A663067F7E43B2ABF67FD38ECDC7FE",
            "subType": "system_subtotal",
            "name": "Median"
          }
        },
        {
          "definition": {
            "objectId": "36226A4048A546139BE0AF5F24737BA8",
            "subType": "system_subtotal",
            "name": "Mode"
          }
        },
        {
          "definition": {
            "objectId": "7FBA414995194BBAB2CF1BB599209824",
            "subType": "system_subtotal",
            "name": "Standard Deviation"
          }
        },
        {
          "definition": {
            "objectId": "1769DBFCCF2D4392938E40418C6E065E",
            "subType": "system_subtotal",
            "name": "Variance"
          }
        },
        {
          "definition": {
            "objectId": "E1853D5A36C74F59A9F8DEFB3F9527A1",
            "subType": "system_subtotal",
            "name": "Geometric Mean"
          }
        },
        {
          "definition": {
            "objectId": "F225147A4CA0BB97368A5689D9675E73",
            "subType": "system_subtotal",
            "name": "Aggregation"
          }
        }
      ],
      "aggregateFromBase": true,
      "formulaJoinType": "default",
      "smartTotal": "decomposable_false",
      "dataType": {
        "type": "reserved",
        "precision": 0,
        "scale": 0
      },
      "format": {
        "header": [],
        "values": [
          {
            "type": "number_category",
            "value": "9"
          }
        ]
      },
      "subtotalFromBase": false,
      "metricFormatType": "reserved",
      "thresholds": [],
      "embeddedObjects": [
        {
          "id": "5CF2DFB94113360F7194FCA1B3224326",
          "subType": "agg_metric",
          "expression": {
            "text": "Count({Call Center})"
          }
        }
      ],
      "pushDownBehavior": "automatic"
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Retrieve data model metric applicable advanced properties

You can retrieve applicable advanced properties for a specific data model metric.

Endpoint: [GET /api/model/dataModels/\{dataModelId}/metrics/\{metricId}/applicableAdvancedProperties](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getApplicableAdvancedProperties)

Sample Request Without Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/metrics/D0D7ED4D7CCB4535AA7609B24FE2B7FC/applicableAdvancedProperties?showSqlPreview=false' \
-H 'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X GET 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/metrics/D0D7ED4D7CCB4535AA7609B24FE2B7FC/applicableAdvancedProperties?showSqlPreview=false' \
-H 'X-MSTR-AuthToken: ie09s7dik3vbv8ga9qkodk9luu' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

Sample Response

- Response Body:

```json
{
  "propertyCount": 12,
  "applicableProperties": {
    "[VLDB Function].[Null Check]": {
      "name": "Null Check",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 2,
      "displayType": "options",
      "displayName": "Null Check",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Do nothing",
          "optionValue": 0,
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.STORE_NBR STORE_NBR,\n                    (sum(a21.REG_SLS_DLR) + sum(a21.PML_SLS_DLR)) TOT_SLS,\n                    sum(a21.PML_SLS_DLR) PRM_DLR\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    create table TEMP2 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    a21.TOT_SLS TOT_SLS,\n                    (a23.REG_SLS_DLR + a21. PRM_DLR) TOT_CALC\n                    from TEMP1 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP2 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        },
        {
          "value": "Check for NULL in all queries",
          "optionValue": 1,
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.STORE_NBR STORE_NBR,\n                    (VALUE(sum(a21.REG_SLS_DLR), 0) + VALUE(sum(a21.PML_SLS_DLR), 0)) TOT_SLS_DLR,\n                    sum(a21.PML_SLS_DLR) PRM_DLR\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    create table TEMP2 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    a21.WJXBFS1 WJXBFS1,\n                    (VALUE(a23.REG_SLS_DLR, 0) + VALUE(a21.PRM_DLR, 0)) TOT_CALC\n                    from TEMP1 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP2 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        },
        {
          "value": "Check for NULL in temp table join only",
          "optionValue": 2,
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.STORE_NBR STORE_NBR,\n                    (sum(a21.REG_SLS_DLR) + sum(a21.PML_SLS_DLR)) TOT_SLS_DLR,\n                    sum(a21.PML_SLS_DLR) PRM_DLR\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    create table as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    a21.WJXBFS1 WJXBFS1,\n                    (VALUE(a23.REG_SLS_DLR, 0) + VALUE(a21.PRM_DLR, 0)) TOT_CALC\n                    from TEMP1 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP2 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        }
      ],
      "type": "int32",
      "defaultValue": 2
    },
    "[VLDB Function].[Zero Check]": {
      "name": "Zero Check",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 2,
      "displayType": "options",
      "displayName": "Zero Check",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Do nothing",
          "optionValue": 0,
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    create table TEMP2 as\n                    select a21.STORE_NBR STORE_NBR,\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\n                    (sum(a21.REG_SLS_DLR) / sum(a21.PML_SLS_DLR)) PCT_CONT\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    (a23.REG_SLS_DLR / a21.PML_SLS_DLR) DIV_METRIC,\n                    a21.PCT_CONT PCT_CONT\n                    from TEMP2 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP1 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        },
        {
          "value": "Check for zero in all queries",
          "optionValue": 1,
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    create table TEMP2 as\n                    select a21.STORE_NBR STORE_NBR,\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\n                    (sum(a21.REG_SLS_DLR) / (CASE\n                    sum(a21.PML_SLS_DLR) WHEN 0 THEN NULL ELSE sum(a21.PML_SLS_DLR) END)) PCT_CONT\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    VALUE((a23. REG_SLS_DLR 1 / (CASE a21.PML_SLS_DLR, WHEN 0 THEN NULL ELSE a21.PML_SLS_DLR,)), 0) DIV_METRIC,\n                    a21.PCT_CONT PCT_CONT\n                    from TEMP2 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP1 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        },
        {
          "value": "Check for zero in temp table join only",
          "optionValue": 2,
          "sqlPreview": "\n                \n                    create table TEMP1 as\n                    select a21.REGION_NBR REGION_NBR,\n                    sum(a21.REG_SLS_DLR) REG_SLS_DLR\n                    from REGION_DIVISION a21\n                    group by a21.REGION_NBR\n                    \n                    create table TEMP2 as\n                    select a21.STORE_NBR STORE_NBR,\n                    sum(a21.PML_SLS_DLR) PML_SLS_DLR,\n                    (sum(a21.REG_SLS_DLR) / sum(a21.PML_SLS_DLR)) PCT_CONT\n                    from STORE_DIVISION a21\n                    group by a21.STORE_NBR\n                    \n                    select distinct a22.STORE_NBR STORE_NBR,\n                    a22.STORE_DESC STORE_DESC,\n                    VALUE((a23.REG_SLS_DLR / (CASE a21.PML_SLS_DLR,WHEN 0 THEN NULL ELSE a21.PML_SLS_DLR,END)), 0) DIV_METRIC,\n                    a21.PCT_CONT PCT_CONT\n                    from TEMP2 a21\n                    join LOOKUP_STORE a22\n                    on (a21.STORE_NBR = a22.STORE_NBR)\n                    join TEMP1 a23\n                    on (a22.REGION_NBR = a23.REGION_NBR)\n                \n            "
        }
      ],
      "type": "int32",
      "defaultValue": 1
    },
    "[VLDB Select].[Integer Constant In Metric]": {
      "name": "Integer Constant In Metric",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Integer Constant In Metric",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Add '.0' to integer constants in metric expressions.",
          "optionValue": 0,
          "sqlPreview": ""
        },
        {
          "value": "Do not add '.0' to integer constants in metric expressions.",
          "optionValue": 1,
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Metric Join Type]": {
      "name": "Metric Join Type",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Metric Join Type",
      "showSqlPreview": true,
      "options": [
        {
          "value": "Inner Join",
          "optionValue": 0,
          "sqlPreview": "All metrics are created with an inner join by default."
        },
        {
          "value": "Outer Join",
          "optionValue": 1,
          "sqlPreview": "All metrics are created with an outer by default."
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Smart Metric Transformation]": {
      "name": "Smart Metric Transformation",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Smart Metric Transformation",
      "showSqlPreview": true,
      "options": [
        {
          "value": "False",
          "optionValue": 0,
          "sqlPreview": "\n                \n                    False means Difference/Percentage will be evaluated firstly:\n                    Smart Metric M3 = Greatest(Metric1, Metric2)\n                    1. Transform(M3) = Greatest(Last Year's Metric1, Last Year's Metric2)\n                    2. Difference(M3) = Greatest((Metric1 - LY's Metric1), (Metric2 - LY's Metric2))\n                    3. Variance Percentage(M3) = Greatest((Metric1 - LY's Metric1)/LY's Metric1, (Metric2 - LY's Metric2)/LY's Metric2)\n                \n            "
        },
        {
          "value": "True",
          "optionValue": 1,
          "sqlPreview": "\n                \n                    True means smart metric will be evaluated firstly:\n                    Smart Metric M3 = Greatest(Metric1, Metric2)\n                    1. Transform(M3) = Greatest(Last Year's Metric1, Last Year's Metric2)\n                    2. Difference(M3) = M3 - Transform(M3)\n                    3. Variance Percentage(M3) = (M3 - Transform(M3)) / Transform(M3)\n                \n            "
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Transformable AggMetric]": {
      "name": "Transformable AggMetric",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Transformable AggMetric",
      "showSqlPreview": false,
      "options": [
        {
          "value": "False",
          "optionValue": 0,
          "sqlPreview": "SQL BLOCK"
        },
        {
          "value": "True",
          "optionValue": 1,
          "sqlPreview": "SQL BLOCK"
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Select].[Use Subtotal Dimty for Dynamic Aggregation]": {
      "name": "Use Subtotal Dimty for Dynamic Aggregation",
      "groupId": 2,
      "groupName": "Metrics",
      "maxValue": 3,
      "displayType": "options",
      "displayName": "Subtotal Dimensionality Use",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Use only the grouping property of a level metric for dynamic aggregation ",
          "optionValue": 0,
          "sqlPreview": "SQL BLOCK"
        },
        {
          "value": "Use only the grouping property of a level subtotal for dynamic aggregation",
          "optionValue": 1,
          "sqlPreview": "SQL BLOCK"
        },
        {
          "value": "Use both the grouping and filtering property of a level metric for dynamic aggregation",
          "optionValue": 2,
          "sqlPreview": "SQL BLOCK"
        },
        {
          "value": "Use both the grouping and filtering property of a level subtotal for dynamic aggregation",
          "optionValue": 3,
          "sqlPreview": "SQL BLOCK"
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[VLDB Report].[Count Distinct with Partitions]": {
      "name": "Count Distinct with Partitions",
      "groupId": 4,
      "groupName": "Query Optimizations",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Count distinct elements from each partition",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Disable",
          "optionValue": 0,
          "sqlPreview": ""
        },
        {
          "value": "Enable",
          "optionValue": 1,
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[AnalyticalEngineProperties].[DerivedMetricDynamicAggAndSubtotal]": {
      "name": "DerivedMetricDynamicAggAndSubtotal",
      "groupId": 9,
      "groupName": "Analytical Engine",
      "maxValue": 3,
      "displayType": "options",
      "displayName": "Metric Push Down Behavior",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Automatic",
          "optionValue": 0,
          "sqlPreview": ""
        },
        {
          "value": "Disable",
          "optionValue": 3,
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 0
    },
    "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {
      "name": "NullCheckingForAnalyticalEngine",
      "groupId": 9,
      "groupName": "Analytical Engine",
      "maxValue": 2,
      "displayType": "options",
      "displayName": "Null checking for Analytical Engine",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Scalar calculations return NULL if any operand is NULL; aggregation calculations ignore NULLs.",
          "optionValue": 0,
          "sqlPreview": ""
        },
        {
          "value": "Scalar and aggregation calculations treat NULLs as zero (Deprecated)",
          "optionValue": 1,
          "sqlPreview": ""
        },
        {
          "value": "Scalar calculations treat NULLs as zero; aggregation calculations ignore NULLs (metadata upgrade required for this to take effect for versions 10.7 or later).",
          "optionValue": 2,
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 2
    },
    "[AnalyticalEngineProperties].[SubtotalDimensionalityAware]": {
      "name": "SubtotalDimensionalityAware",
      "groupId": 9,
      "groupName": "Analytical Engine",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Subtotal Dimensionality Aware",
      "showSqlPreview": false,
      "options": [
        {
          "value": "False",
          "optionValue": 0,
          "sqlPreview": ""
        },
        {
          "value": "True",
          "optionValue": 1,
          "sqlPreview": ""
        }
      ],
      "type": "boolean",
      "defaultValue": true
    },
    "[VLDB Select].[No Nulls In Metric For Cube Reuse]": {
      "name": "No Nulls In Metric For Cube Reuse",
      "groupId": 11,
      "groupName": "Dynamic Sourcing",
      "maxValue": 1,
      "displayType": "options",
      "displayName": "Metric Validation",
      "showSqlPreview": false,
      "options": [
        {
          "value": "Enable dynamic sourcing for metric",
          "optionValue": 0,
          "sqlPreview": ""
        },
        {
          "value": "Disable dynamic sourcing for metric",
          "optionValue": 1,
          "sqlPreview": ""
        }
      ],
      "type": "int32",
      "defaultValue": 0
    }
  }
}
```

- Response Code: 200 (Success: OK)
