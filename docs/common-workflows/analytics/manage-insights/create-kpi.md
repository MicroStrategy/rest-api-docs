---
title: Create a KPI object
description: This workflow sample demonstrates how to create a KPI object for a user.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to modify a KPI owned by a user.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## 1. Create a dashboard instance

:::info
You should have the dashboard ID and the dashboard project ID before performing the following steps.
:::

Please refer to [Create a dashboard instance](../retrieve-data-from-the-intelligence-server/workflow-retrieve-data-from-the-intelligence-server.md#create-a-dashboard-instance) on how to create a dashboard instance.

Retrieve the `mid` from the response and save it to use later.

## 2. Get the Chapter key, Page key and Visualization key

Chapter keys, Page keys, and Visualization keys are used to identify the visualization that you want to create a KPI object on.

:::caution

This API only supports creating KPI objects based on KPI visualizations. Ensure the visualization is of type KPI, otherwise `step 4` will return an error.

:::

Endpoint: [GET /api/dossiers/\{dossierId}/definition](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList)

Sample Request Header:

```http
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: N/A

Sample Curl:
:::note
Replace `{dossierId}` in `GET /api/dossiers/{dossierId}/definition` with the dashboard ID.
:::

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/dossiers/8CF183CB4346C729EC6E2EA368BF49ED/definition' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: t3r90utftsigqe25hg9ossfmgl' \
  -H 'X-MSTR-ProjectID: A728B9A98C420236E6C825AAB4A812D6'
```

Sample Response:

```json
{
  "id": "8CF183CB4346C729EC6E2EA368BF49ED",
  "name": "Bitcoin Analytics",
  "chapters": [
    {
      "key": "W3BEA2A6BF8A44218B7AC7FF236A20C55",
      "name": "Summary",
      "pages": [
        {
          "key": "W66AE9E04126845EB96453C9C9EB39628",
          "name": "Bitcoin",
          "visualizations": [
            {
              "key": "K0575A35B7B4EE4A87AD0C586829F9799",
              "name": "Latest Price"
            },
            {
              "key": "K79913FEC544356AD52CCF48DD81506EE",
              "name": "Transaction"
            },
            {
              "key": "K31B23A789949C4BF27D3C099974B9634",
              "name": "Market Cap"
            },
            {
              "key": "K658DC9A7B941EF9D5376BDB037C15B73",
              "name": "Addresses"
            },
            {
              "key": "KFE8C6416084281ECE9615D8A723E8888",
              "name": "Hash Rate"
            },
            {
              "key": "K0EC0A72DFC400304562915AB7B0BE0CF",
              "name": "Block Time"
            },
            {
              "key": "KBBE93DCE204BE75A8FED1A8C11C13ABD",
              "name": "Price"
            }
          ]
        }
      ],
      "filters": []
    },
    {
      "key": "W9D847538C2C34219845B9A4465F31475",
      "name": "Blockchain Analytics",
      "pages": [
        {
          "key": "W155",
          "name": "Transactions",
          "visualizations": [
            {
              "key": "W07F29CC0388145F0B0C19B6E30DA839A",
              "name": "Visualization 4 copy"
            }
          ]
        },
        {
          "key": "W153",
          "name": "Mining",
          "visualizations": [
            {
              "key": "W904613A5412949FFB7F3E0C689188ECF",
              "name": "Visualization 3 copy"
            }
          ]
        },
        {
          "key": "WBF01FA492EE94461945FAA5EF010EA39",
          "name": "Distribution",
          "visualizations": [
            {
              "key": "W9A3B8B1B2DBA4EB28E53E24390495BA8",
              "name": "Net Realized P/L KPI copy"
            }
          ]
        },
        {
          "key": "W430AF459B1CB49E5A3C446315A77713D",
          "name": "Addresses",
          "visualizations": [
            {
              "key": "W0D3A7A47A14A4F6984D62DB85F805611",
              "name": "BTC in Top 100 Addresses copy"
            }
          ]
        },
        {
          "key": "W7E06EE12AA4F4357BC38660E6D6675C1",
          "name": "Top Movers",
          "visualizations": [
            {
              "key": "W06DCAA9BDA114754961A1733D92B0968",
              "name": "Visualization 2 copy"
            }
          ]
        }
      ],
      "filters": []
    },
    {
      "key": "W5A12E9C0FFC740D3800DD62E62FCA223",
      "name": "Market Analytics",
      "pages": [
        {
          "key": "W7883EFF7A16A4B648931FF1F18F41F5D",
          "name": "Price Trend",
          "visualizations": [
            {
              "key": "W434C609C25F54D3F89FF798250CF297F",
              "name": "Visualization 1"
            }
          ]
        },
        {
          "key": "W1D753812D4BB4D62948513E1C24E4DF7",
          "name": "Network Valuation",
          "visualizations": [
            {
              "key": "WC71F3328C27540D5857331478735675B",
              "name": "Visualization 1"
            }
          ]
        },
        {
          "key": "W52A2509B41F04AAA972668B96AD9A93E",
          "name": "Network Profitability",
          "visualizations": [
            {
              "key": "WA5A4D4AF7F2D4E85BEC266D85AE26970",
              "name": "Net Realized P/L KPI"
            },
            {
              "key": "W87B07DEB025D4A8090A454A57FEC6635",
              "name": "Net Unrealized P/L KPI"
            },
            {
              "key": "W8429608805D141C5A1D6D320710C14E2",
              "name": "SHT SOPR KPI"
            },
            {
              "key": "W68A92B83FFBD4B71B5EFF0D3FEA81C64",
              "name": "LTH SOPR KPI"
            }
          ]
        }
      ],
      "filters": []
    },
    {
      "key": "W03451867BA5247A4B325C39E5FA65CE0",
      "name": "Bitcoin Energy",
      "pages": [
        {
          "key": "W154",
          "name": "Consumption",
          "visualizations": [
            {
              "key": "W80B3C94F6025411EB4E0B3519005DBBD",
              "name": "Visualization 2"
            },
            {
              "key": "K252F61E2A84BF7EC3C37FBA8C54010D7",
              "name": "Weekly BTC Mining Fees (YTD)"
            }
          ]
        },
        {
          "key": "WED5E86A38E254DE48F17C260E3E84677",
          "name": "Comparison",
          "visualizations": [
            {
              "key": "K4D98B639FE4EC4AD82DF479C6F23DC6F",
              "name": "Visualization 5"
            }
          ]
        }
      ],
      "filters": []
    }
  ]
}
```

From the response, identify the Visualization which you want to create a KPI object , then collect the Visualization key, Page key and Chapter key to use later.

For example, you want to create a KPI object on a `Latest Price` visualization, you check the response and notice that the key of `Latest Price` is `K0575A35B7B4EE4A87AD0C586829F9799`. The Page that contains the visualization is `Bitcoin` and its key is `W66AE9E04126845EB96453C9C9EB39628`. The Chapter which contains page `Bitcoin` is `Summary` and the key is `W3BEA2A6BF8A44218B7AC7FF236A20C55`.

## 3. Get the metric id

Endpoint: [GET /api/dossiers/\{dossierId}/instances/\{instanceId}/chapters/\{chapterKey}/visualizations/\{visualizationKey}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationResult)

Sample Request Header:

```http
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: N/A

Sample Curl:

:::note
Replace `{dossierId}` with the dashboard ID.

Replace `{instanceId}` with the value of `mid` found in `step 1`.

Replace `{chapterKey}` and `{visualizationKey}` with the key value found in `step 2`.
:::

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/dossiers/8CF183CB4346C729EC6E2EA368BF49ED/instances/F164FB81C54DAB9A936196ACDC2287CA/chapters/W3BEA2A6BF8A44218B7AC7FF236A20C55/visualizations/K0575A35B7B4EE4A87AD0C586829F9799?offset=0&limit=0' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: t3r90utftsigqe25hg9ossfmgl' \
  -H 'X-MSTR-ProjectID: A728B9A98C420236E6C825AAB4A812D6'
```

Sample Response:

```json
{
  "key": "K0575A35B7B4EE4A87AD0C586829F9799",
  "name": "Latest Price",
  "result": {
    "definition": {
      "metrics": [
        {
          "name": "Latest Price",
          "id": "5B1EA76011EB75E45C3A0080EFA52176",
          "type": "Metric",
          "min": 22212.82,
          "max": 22212.82,
          "dataType": "Double",
          "numberFormatting": {
            "category": 1,
            "decimalPlaces": 0,
            "currencySymbol": "$",
            "currencyPosition": 0,
            "formatString": "\"$\"#,##0;(\"$\"#,##0)",
            "negativeType": 3
          }
        }
      ],
      "attributes": [],
      "thresholds": [],
      "viewFilterSummary": "",
      "elementFilterSummary": "",
      "metricLimitSummary": ""
    },
    "data": {
      "paging": {
        "total": 1,
        "current": 0,
        "offset": 0,
        "limit": 0,
        "prev": null,
        "next": null
      },
      "root": null
    }
  }
}
```

Get the metric id `.result.definition.metrics[0].id` from response.

## 4. Create a KPI object

Endpoint: [POST /api/insight/KPIs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/createKPI)

Sample Request Header:

```http
"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

:::note
See [KPI fields explanation](./get-kpi.md#kpi-fields-explanation) for detailed explanations of each field.

All fields in the example are **required** to create a KPI object.

Set the value of `mid` from `step 1` to `content.instanceId`.

Set the value of `Chapter Key` from `step 2` to `kpiTarget.chapterKey`.

Set the value of `Page Key` from `step 2` to `kpiTarget.pageKey`.

Set the value of `Visualization Key` from `step 2` to `kpiTarget.nodeKey`.

Set the value of `metric id` from `step 3` to `kpiTarget.kpiObjects[0].id`.

:::

```json
{
  "name": "Profit of North America",
  "content": {
    "id": "D5EA39B447058084F270F5ADA3ED0433",
    "type": 55,
    "instanceId": "54F3D26011D2896560009A8E67019608"
  },
  "configString": "{\"color\":100}",
  "disabled": false,
  "kpiTarget": {
    "chapterKey": "K3",
    "pageKey": "K34",
    "nodeKey": "W68",
    "kpiObjects": [
      {
        "id": "CE132A8447058084F270F5ADA3ED0433",
        "type": 4
      }
    ]
  }
}
```

Sample Curl:

```bash
curl -X 'POST' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/KPIs' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
  -d '{
  "name": "Profit of North America",
  "content": {
    "id": "D5EA39B447058084F270F5ADA3ED0433",
    "type": 55,
    "instanceId": "54F3D26011D2896560009A8E67019608"
  },
  "configString": "{\"color\":100}",
  "disabled": false,
  "kpiTarget": {
    "chapterKey": "K3",
    "pageKey": "K34",
    "nodeKey": "W68",
    "kpiObjects": [
      {
        "id": "CE132A8447058084F270F5ADA3ED0433",
        "type": 4
      }
    ]
  }
}'
```

Sample Response:

:::note

See to [KPI fields explanation](./get-kpi.md#kpi-fields-explanation) for detailed explanations of each field.

The `data` field is not presented in the response.

:::

```json
{
  "id": "53F0076E4A46369A13121886DEB3FEA5",
  "name": "Profit of North America",
  "dateCreated": "2023-03-08T09:11:53.069Z",
  "dateModified": "2023-03-08T09:11:53.069Z",
  "schedule": {
    "id": "CA5683F942AD1F8529627D945B254A4A",
    "recurrenceIntervalInHour": 1
  },
  "content": {
    "id": "D5EA39B447058084F270F5ADA3ED0433",
    "type": 55,
    "name": "Financial"
  },
  "configString": "{\"color\":100}",
  "disabled": false,
  "bookmarkId": "AD33B215438A71FC2825C9A5AA059BE6",
  "subscriptionId": "ACBAFEF247DCE4701682E9872F54804F",
  "kpiTarget": {
    "chapterKey": "K3",
    "pageKey": "K34",
    "nodeKey": "K68",
    "kpiObjects": [
      {
        "id": "CE132A8447058084F270F5ADA3ED0433",
        "type": 4,
        "name": "Latest Price"
      }
    ],
    "elements": []
  }
}
```
