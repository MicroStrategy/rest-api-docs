---
title: Retrieve hierarchy of document
Description: Retrieve a hierarchy of document using the MicroStrategy REST API.
---

<Available since="2021 Update 10" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-01bcf62f-9d6f-4ddf-9f63-064d875ddae2?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

The workflow sample demonstrates how to retrieve a document definition directly using the MicroStrategy REST API.

We want to retrieve a document's definition from “MicroStrategy Tutorial“ project. The document ID is `643209B54CC84199C48A238ACB6CB621`. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Retrieve a document's definition directly

Retrieve hierarchy of document by document ID in a specific project.

### Request URL

```bash
GET /api/documents/{id}/definition
```

### Sample Curl Request

```bash
curl -X 'GET' 'http://demo.microstrategy.com/MicroStrategyLibrary/api/documents/643209B54CC84199C48A238ACB6CB621/definition' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: 7tb1sp0u7te3t73fvu5qn368r' \
  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'
```

### Request Headers

| Name               | Type   | Description         |
| ------------------ | ------ | ------------------- |
| `X-MSTR-AuthToken` | Header | Authorization token |
| `X-MSTR-ProjectID` | Header | Project ID          |

### Query Parameters

| Name     | Type  | Description                                                                                                           |
| -------- | ----- | --------------------------------------------------------------------------------------------------------------------- |
| `fields` | Query | Comma-separated, top-level field whitelist that allows the client to selectively retrieve part of the response model. |

### Response

If successful, this API call returns a `200 OK` status code along with the hierarchy of document in the response body. The response body follows the `DocumentTreeDefinition` schema.

#### Sample Response

```json
{
  "id": "643209B54CC84199C48A238ACB6CB621",
  "name": "Cockpit",
  "datasets": [
    {
      "name": "Cockpit Dataset",
      "id": "E0B145DF4EC22379FDC3AEAD21392EB2",
      "availableObjects": [
        {
          "id": "8D679D4F11D3E4981000E787EC6DE8A4",
          "name": "Subcategory",
          "type": "attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "varChar",
              "baseFormCategory": "DESC",
              "baseFormType": "text"
            }
          ]
        },
        {
          "id": "8D679D4A11D3E4981000E787EC6DE8A4",
          "name": "Quarter",
          "type": "attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "varChar",
              "baseFormCategory": "DESC",
              "baseFormType": "text"
            }
          ]
        },
        {
          "id": "8D679D4B11D3E4981000E787EC6DE8A4",
          "name": "Region",
          "type": "attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "varChar",
              "baseFormCategory": "DESC",
              "baseFormType": "text"
            }
          ]
        },
        {
          "id": "8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Category",
          "type": "attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "varChar",
              "baseFormCategory": "DESC",
              "baseFormType": "text"
            }
          ]
        },
        {
          "id": "4C05177011D3E877C000B3B2D86C964F",
          "name": "Revenue",
          "type": "metric"
        },
        {
          "id": "4C051DB611D3E877C000B3B2D86C964F",
          "name": "Profit",
          "type": "metric"
        },
        {
          "id": "A0458DCF46FC7BECE12290A486E30E85",
          "name": "Last Quarter's Revenue",
          "type": "metric"
        },
        {
          "id": "07DED03E4B9E165A6E273FABEFF78E89",
          "name": "Last Quarter's Profit",
          "type": "metric"
        },
        {
          "id": "2680DF9E11D5C3FEC0000B881FDA1A4F",
          "name": "Profit Margin",
          "type": "metric"
        },
        {
          "id": "2EB83FAB41D98A679CE415913E82D0DD",
          "name": "Last Quarter's Profit Margin",
          "type": "metric"
        },
        {
          "id": "1FAF96994873E7CEFC71BDB269522636",
          "name": "Profit Forecast",
          "type": "metric"
        },
        {
          "id": "8D7D59C144AB891C57FEFA873ABE1C92",
          "name": "Revenue Forecast",
          "type": "metric"
        },
        {
          "id": "C701B0A045218C0949793BB6499CCECB",
          "name": "Profit Margin Forecast",
          "type": "metric"
        }
      ],
      "rows": [
        {
          "id": "8D679D4F11D3E4981000E787EC6DE8A4",
          "name": "Subcategory",
          "type": "attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "varChar",
              "baseFormCategory": "DESC",
              "baseFormType": "text"
            }
          ]
        },
        {
          "id": "8D679D4A11D3E4981000E787EC6DE8A4",
          "name": "Quarter",
          "type": "attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "varChar",
              "baseFormCategory": "DESC",
              "baseFormType": "text"
            }
          ]
        },
        {
          "id": "8D679D4B11D3E4981000E787EC6DE8A4",
          "name": "Region",
          "type": "attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "varChar",
              "baseFormCategory": "DESC",
              "baseFormType": "text"
            }
          ]
        },
        {
          "id": "8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Category",
          "type": "attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "varChar",
              "baseFormCategory": "DESC",
              "baseFormType": "text"
            }
          ]
        }
      ],
      "columns": [
        {
          "id": "00000000000000000000000000000000",
          "name": "Metrics",
          "type": "templateMetrics",
          "elements": [
            {
              "name": "Revenue",
              "id": "4C05177011D3E877C000B3B2D86C964F",
              "type": "metric",
              "dataType": "unknown"
            },
            {
              "name": "Profit",
              "id": "4C051DB611D3E877C000B3B2D86C964F",
              "type": "metric",
              "dataType": "unknown"
            },
            {
              "name": "Last Quarter's Revenue",
              "id": "A0458DCF46FC7BECE12290A486E30E85",
              "type": "metric",
              "dataType": "unknown"
            },
            {
              "name": "Last Quarter's Profit",
              "id": "07DED03E4B9E165A6E273FABEFF78E89",
              "type": "metric",
              "dataType": "unknown"
            },
            {
              "name": "Profit Margin",
              "id": "2680DF9E11D5C3FEC0000B881FDA1A4F",
              "type": "metric",
              "dataType": "unknown"
            },
            {
              "name": "Last Quarter's Profit Margin",
              "id": "2EB83FAB41D98A679CE415913E82D0DD",
              "type": "metric",
              "dataType": "unknown"
            },
            {
              "name": "Profit Forecast",
              "id": "1FAF96994873E7CEFC71BDB269522636",
              "type": "metric",
              "dataType": "unknown"
            },
            {
              "name": "Revenue Forecast",
              "id": "8D7D59C144AB891C57FEFA873ABE1C92",
              "type": "metric",
              "dataType": "unknown"
            },
            {
              "name": "Profit Margin Forecast",
              "id": "C701B0A045218C0949793BB6499CCECB",
              "type": "metric",
              "dataType": "unknown"
            }
          ]
        }
      ],
      "pageBy": []
    }
  ],
  "currentLayout": "K3",
  "layouts": [
    {
      "key": "K3",
      "name": "Layout 1",
      "visualizations": [
        {
          "key": "K17",
          "name": "GridGraph1",
          "visualizationType": "grid"
        },
        {
          "key": "K36",
          "name": "GridGraph3",
          "visualizationType": "grid"
        },
        {
          "key": "W112",
          "name": "GridGraph112",
          "visualizationType": "grid"
        },
        {
          "key": "W83",
          "name": "GridGraph83",
          "visualizationType": "grid"
        },
        {
          "key": "K45",
          "name": "GridGraph4",
          "visualizationType": "grid"
        },
        {
          "key": "K46",
          "name": "GridGraph5",
          "visualizationType": "grid"
        },
        {
          "key": "W31",
          "name": "GridGraph31",
          "visualizationType": "grid"
        },
        {
          "key": "W29",
          "name": "GridGraph29",
          "visualizationType": "grid"
        }
      ],
      "fields": [
        {
          "key": "W139",
          "name": "Text139",
          "fieldType": "text"
        },
        {
          "key": "W76",
          "name": "Rectangle76",
          "fieldType": "shape"
        },
        {
          "key": "W28",
          "name": "Rectangle28",
          "fieldType": "shape"
        },
        {
          "key": "W77",
          "name": "Line77",
          "fieldType": "line"
        },
        {
          "key": "W93",
          "name": "Line93",
          "fieldType": "line"
        },
        {
          "key": "W94",
          "name": "Line94",
          "fieldType": "line"
        },
        {
          "key": "W80",
          "name": "Text78",
          "fieldType": "text"
        },
        {
          "key": "W87",
          "name": "Text87",
          "fieldType": "text"
        },
        {
          "key": "W88",
          "name": "Text87",
          "fieldType": "text"
        },
        {
          "key": "W78",
          "name": "Text78",
          "fieldType": "text"
        },
        {
          "key": "W79",
          "name": "Text78",
          "fieldType": "text"
        },
        {
          "key": "W132",
          "name": "Line132",
          "fieldType": "line"
        },
        {
          "key": "W41",
          "name": "Text40",
          "fieldType": "text"
        },
        {
          "key": "W40",
          "name": "Text40",
          "fieldType": "text"
        },
        {
          "key": "W82",
          "name": "Text78",
          "fieldType": "text"
        },
        {
          "key": "W81",
          "name": "Text78",
          "fieldType": "text"
        },
        {
          "key": "W89",
          "name": "Text87",
          "fieldType": "text"
        },
        {
          "key": "W90",
          "name": "Text87",
          "fieldType": "text"
        },
        {
          "key": "W91",
          "name": "Text87",
          "fieldType": "text"
        },
        {
          "key": "W92",
          "name": "Text87",
          "fieldType": "text"
        },
        {
          "key": "W99",
          "name": "Line97",
          "fieldType": "line"
        },
        {
          "key": "W98",
          "name": "Line97",
          "fieldType": "line"
        },
        {
          "key": "W97",
          "name": "Line97",
          "fieldType": "line"
        },
        {
          "key": "W95",
          "name": "Line95",
          "fieldType": "line"
        },
        {
          "key": "W96",
          "name": "Line96",
          "fieldType": "line"
        },
        {
          "key": "K35",
          "name": "Line1",
          "fieldType": "line"
        },
        {
          "key": "W23",
          "name": "Text23",
          "fieldType": "text"
        },
        {
          "key": "W24",
          "name": "Text23",
          "fieldType": "text"
        },
        {
          "key": "W21",
          "name": "Rectangle21",
          "fieldType": "shape"
        },
        {
          "key": "W25",
          "name": "Text23",
          "fieldType": "text"
        }
      ],
      "panelStacks": [
        {
          "key": "W142",
          "name": "Panel Stack142",
          "panels": [
            {
              "key": "W143",
              "name": "Panel143",
              "visualizations": [],
              "fields": [
                {
                  "key": "W117",
                  "name": "Line117",
                  "fieldType": "line"
                },
                {
                  "key": "W116",
                  "name": "Line116",
                  "fieldType": "line"
                },
                {
                  "key": "W140",
                  "name": "Line140",
                  "fieldType": "line"
                },
                {
                  "key": "W141",
                  "name": "Rectangle141",
                  "fieldType": "shape_round"
                },
                {
                  "key": "W42",
                  "name": "Text42",
                  "fieldType": "text"
                },
                {
                  "key": "W43",
                  "name": "Text42",
                  "fieldType": "text"
                },
                {
                  "key": "W148",
                  "name": "Text148",
                  "fieldType": "text"
                },
                {
                  "key": "W144",
                  "name": "Text144",
                  "fieldType": "text"
                },
                {
                  "key": "W44",
                  "name": "Text42",
                  "fieldType": "text"
                },
                {
                  "key": "W45",
                  "name": "Text42",
                  "fieldType": "text"
                },
                {
                  "key": "W46",
                  "name": "Text42",
                  "fieldType": "text"
                },
                {
                  "key": "K22",
                  "name": "Text2",
                  "fieldType": "text"
                },
                {
                  "key": "K21",
                  "name": "Text1",
                  "fieldType": "text"
                },
                {
                  "key": "W149",
                  "name": "Text148",
                  "fieldType": "text"
                },
                {
                  "key": "K23",
                  "name": "Text3",
                  "fieldType": "text"
                }
              ]
            }
          ],
          "currentPanelKey": "W143"
        }
      ]
    },
    {
      "key": "K2",
      "name": "",
      "visualizations": []
    },
    {
      "key": "K16",
      "name": "",
      "visualizations": []
    }
  ]
}
```

The `datasets` field contains an array of `availableObjects`, `rows`, `columns` and `pageBy` where each object represents an element.

- Attribute element includes properties such as `id`, `name`, `type` and `forms`.
- Metric element includes only `id`, `name` and `type` properties.

The `layouts` field contains an array of `visualizations`, `fields` and `panelStacks` where each object represents either `visualization`, `field` or `panel stack`.

- Visualization object includes properties such as `key`, `name`, `visualizationType`.
- Field object includes properties such as `key`, `name`, `fieldType`.
- Panel stack object includes properties such as `key`, `name`, `currentPanelKey` and array of `panels`. Every object in `panels` arrays represents a panel object.
  - Panel object includes properties such as `key`, `name` and array of `visualizations`, `fields`.

### HTTP Status Codes

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | OK                    |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 403         | Forbidden             |
| 404         | Not Foun              |
| 500         | Internal Server Error |
