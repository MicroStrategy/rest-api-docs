---
title: Create, update, and delete a metric
description: This workflow demonstrates how to create, update, and delete a metric using REST API.
---

<Available since="Strategy (October 2025)" />

This workflow sample demonstrates how to create, update, and delete a metric in the data model using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a metric

You can create a metric based on existing attributes or base metrics in the data model, or with an empty expression definition that you can define later.

Endpoint: [POST /api/model/dataModels/\{dataModelId}/metrics](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/postDataModelMetric)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ujv2agc3532ha8ukp8fb2unpiu'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: F5427A0FB16F45ED8838BF0A9DAE1ADE'
```

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/9345A3B387441C5E30E3338A5486BCE5/metrics' \
-H 'X-MSTR-AuthToken: ujv2agc3532ha8ukp8fb2unpiu' \
-H 'X-MSTR-MS-Changeset: F5427A0FB16F45ED8838BF0A9DAE1ADE' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "subType": "metric",
        "name": "Sum of On-Time Flights"
    },
    "expression": {
        "tokens": [
            {
                "value": "Sum([On-Time Flights])",
                "type": "unknown",
                "level": "client",
                "state": "initial"
            },
            {
                "state": "initial",
                "value": "",
                "type": "end_of_text"
            }
        ]
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "6E4453515B394056B18126573779D9EC",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "50773CD772F24006A8A043982F05F5A0",
    "subType": "metric",
    "name": "Sum of On-Time Flights",
    "destinationFolderId": "AEAFB673F041C535FFB27F8FCCC87408"
  },
  "expression": {
    "text": "Sum({On-Time Flights})"
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
    "values": []
  },
  "subtotalFromBase": false,
  "metricFormatType": "reserved",
  "thresholds": [],
  "embeddedObjects": [
    {
      "id": "3F1858796346C3653F66C2882E6BCDF2",
      "subType": "agg_metric",
      "expression": {
        "text": "Sum({On-Time Flights})"
      }
    }
  ],
  "pushDownBehavior": "automatic"
}
```

- Response Code: 201 (Success: Created)

## Update a metric

Endpoint: [PUT /api/model/dataModels/\{dataModelId}/metrics/\{metricId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/updateDataModelMetric)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ujv2agc3532ha8ukp8fb2unpiu'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: F5427A0FB16F45ED8838BF0A9DAE1ADE'
```

- Curl

```bash
curl -L -X PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/9345A3B387441C5E30E3338A5486BCE5/metrics/50773CD772F24006A8A043982F05F5A0' \
-H 'X-MSTR-AuthToken: ujv2agc3532ha8ukp8fb2unpiu' \
-H 'X-MSTR-MS-Changeset: F5427A0FB16F45ED8838BF0A9DAE1ADE' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "name": "Sum of On-Time Flights Updated"
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "6E4453515B394056B18126573779D9EC",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "50773CD772F24006A8A043982F05F5A0",
    "subType": "metric",
    "name": "Sum of On-Time Flights Updated",
    "destinationFolderId": "AEAFB673F041C535FFB27F8FCCC87408"
  },
  "expression": {
    "text": "Sum({On-Time Flights})"
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
    "values": []
  },
  "subtotalFromBase": false,
  "metricFormatType": "reserved",
  "thresholds": [],
  "embeddedObjects": [
    {
      "id": "3F1858796346C3653F66C2882E6BCDF2",
      "subType": "agg_metric",
      "expression": {
        "text": "Sum({On-Time Flights})"
      }
    }
  ],
  "pushDownBehavior": "automatic"
}
```

- Response Code: 200 (Success: OK)

## Delete a metric

Endpoint: [DELETE /api/model/dataModels/\{dataModelId}/metrics/\{metricId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/deleteDataModelMetric)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: ujv2agc3532ha8ukp8fb2unpiu'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: F5427A0FB16F45ED8838BF0A9DAE1ADE'
```

- Curl

```bash
curl -L -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/9345A3B387441C5E30E3338A5486BCE5/metrics/50773CD772F24006A8A043982F05F5A0' \
-H 'X-MSTR-AuthToken: ujv2agc3532ha8ukp8fb2unpiu' \
-H 'X-MSTR-MS-Changeset: F5427A0FB16F45ED8838BF0A9DAE1ADE'
```

Sample Response

- Response Body: (empty)

- Response Code: 204 (Success: No Content)
