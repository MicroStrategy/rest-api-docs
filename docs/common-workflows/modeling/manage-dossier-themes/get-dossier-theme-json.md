---
title: Get dashboard theme json
sidebar_label: Get dashboard theme json
description: A workflow sample for retrieving dashboard theme instance in json.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to get a dashboard theme instance in json through REST API `GET /api/themes/dossiers/{id}/themeInstances/{instanceId}`.

:::tip

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## get a dashboard theme instance in json

Endpoint: [GET /api/themes/dossiers/\{id}/themeInstances/\{instanceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Themes/getThemeInstance)

In this step, you are retrieving information of a dashboard theme instance. The theme object ID and theme instance ID are in request URL as path parameters. The response will be in json.

:::tip

- In path parameter, the instanceId is ID of dashboard theme instance;
- If the instance has not persisted yet, path parameter of ID can be any GUID

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Curl:

```bash
curl -X 'GET' \
  'http://localhost:8282/consume-dev/api/themes/dossiers/119DEDCC11D4E0EFC000EB9495D0F444/themeInstances/4A2F9667C842E3BB9D0CFFABE6F3ED53' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: mni11f26j5acml4opgf0gckmnk' \
  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'
```

Sample Response Body:

```json
{
  "id": "FC53DDBF4CF41D2B365248BA5150C9D4",
  "name": "Preview Dossier",
  "datasets": [
    {
      "name": "Retail Sample",
      "id": "5320383711EDAE6C15030080EF5E0318",
      "availableObjects": [
        {
          "id": "539386D911EDAE6CB4B80080EF5E82C8",
          "name": "Month",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "UTF8Char",
              "baseFormCategory": "ID",
              "baseFormType": "text"
            }
          ]
        },
        {
          "id": "53938E5911EDAE6CB4EA0080EF5E82C8",
          "name": "City",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "UTF8Char",
              "baseFormCategory": "ID",
              "baseFormType": "text"
            },
            {
              "id": "B191051C48221A6AE44CA2B65B1B65E3",
              "name": "Latitude",
              "dataType": "double",
              "baseFormCategory": "Latitude",
              "baseFormType": "number"
            },
            {
              "id": "2345134F4F5E261C3BB902A874467080",
              "name": "Longitude",
              "dataType": "double",
              "baseFormCategory": "Longitude",
              "baseFormType": "number"
            }
          ]
        },
        {
          "id": "5393A88511EDAE6CB4B70080EF5E82C8",
          "name": "Date",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "date",
              "baseFormCategory": "ID",
              "baseFormType": "date"
            }
          ]
        },
        {
          "id": "5393920F11EDAE6CB4EA0080EF5E82C8",
          "name": "Cost",
          "type": "metric"
        },
        {
          "id": "5393A4C411EDAE6CB4EA0080EF5E82C8",
          "name": "Revenue",
          "type": "metric"
        },
        {
          "id": "5393AC4F11EDAE6CB4B70080EF5E82C8",
          "name": "Open",
          "type": "metric"
        },
        {
          "id": "5393B00411EDAE6CB4B70080EF5E82C8",
          "name": "High",
          "type": "metric"
        },
        {
          "id": "5393B38911EDAE6CB4B70080EF5E82C8",
          "name": "Low",
          "type": "metric"
        },
        {
          "id": "5393B6F911EDAE6CB4B80080EF5E82C8",
          "name": "Close*",
          "type": "metric"
        },
        {
          "id": "FFA3229E11EDAE6CB4EC0080EF5E82C8",
          "name": "Volume",
          "type": "metric"
        },
        {
          "id": "5321C49511EDAE6C01580080EF5E820D",
          "name": "Row Count - data less.csv",
          "type": "metric"
        }
      ],
      "rows": [
        {
          "id": "539386D911EDAE6CB4B80080EF5E82C8",
          "name": "Month",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "UTF8Char",
              "baseFormCategory": "ID",
              "baseFormType": "text"
            }
          ]
        },
        {
          "id": "53938E5911EDAE6CB4EA0080EF5E82C8",
          "name": "City",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "UTF8Char",
              "baseFormCategory": "ID",
              "baseFormType": "text"
            },
            {
              "id": "B191051C48221A6AE44CA2B65B1B65E3",
              "name": "Latitude",
              "dataType": "double",
              "baseFormCategory": "Latitude",
              "baseFormType": "number"
            },
            {
              "id": "2345134F4F5E261C3BB902A874467080",
              "name": "Longitude",
              "dataType": "double",
              "baseFormCategory": "Longitude",
              "baseFormType": "number"
            }
          ]
        },
        {
          "id": "5393A88511EDAE6CB4B70080EF5E82C8",
          "name": "Date",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "date",
              "baseFormCategory": "ID",
              "baseFormType": "date"
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
              "name": "Cost",
              "id": "5393920F11EDAE6CB4EA0080EF5E82C8",
              "type": "metric",
              "dataType": "integer"
            },
            {
              "name": "Revenue",
              "id": "5393A4C411EDAE6CB4EA0080EF5E82C8",
              "type": "metric",
              "dataType": "integer"
            },
            {
              "name": "Open",
              "id": "5393AC4F11EDAE6CB4B70080EF5E82C8",
              "type": "metric",
              "dataType": "integer"
            },
            {
              "name": "High",
              "id": "5393B00411EDAE6CB4B70080EF5E82C8",
              "type": "metric",
              "dataType": "integer"
            },
            {
              "name": "Low",
              "id": "5393B38911EDAE6CB4B70080EF5E82C8",
              "type": "metric",
              "dataType": "integer"
            },
            {
              "name": "Close*",
              "id": "5393B6F911EDAE6CB4B80080EF5E82C8",
              "type": "metric",
              "dataType": "integer"
            },
            {
              "name": "Volume",
              "id": "FFA3229E11EDAE6CB4EC0080EF5E82C8",
              "type": "metric",
              "dataType": "double"
            },
            {
              "name": "Row Count - data less.csv",
              "id": "5321C49511EDAE6C01580080EF5E820D",
              "type": "metric",
              "dataType": "reserved"
            }
          ]
        }
      ],
      "pageBy": []
    }
  ],
  "currentChapter": "K36",
  "chapters": [
    {
      "key": "K36",
      "name": "Visualizations",
      "pages": [
        {
          "key": "WF5CD888982CE49B49C32375100EA57F3",
          "name": "Common Formatting",
          "visualizations": [
            {
              "key": "WDDB796D2FE074073BBDD4481F10141A2",
              "name": "Container Title",
              "visualizationType": "pie_chart"
            },
            {
              "key": "WF98AFCE7C5CC43AE863D259D2BB194B7",
              "name": "Container Title",
              "visualizationType": "bar_chart"
            }
          ],
          "fields": [
            {
              "key": "W63DD88F95C0D45F0AE26B6756D1EAF1C",
              "name": "Image 1",
              "fieldType": "image"
            },
            {
              "key": "W56DA67A60B774687A29B269E20540774",
              "name": "Text 1",
              "fieldType": "text"
            }
          ]
        },
        {
          "key": "K53",
          "name": "Grid",
          "visualizations": [
            {
              "key": "84E7D763373D4C599028919AB4EB329E",
              "name": "Title of your visualization",
              "visualizationType": "microcharts",
              "columnSets": [
                {
                  "key": "K52",
                  "name": "Column Set 1"
                }
              ]
            }
          ]
        },
        {
          "key": "W95CE01B0772A40BB94157E6830161AAE",
          "name": "Graphs",
          "visualizations": [
            {
              "key": "WF8AC10C1B9124B43965009966326E958",
              "name": "Title of your visualization",
              "visualizationType": "bar_chart"
            }
          ]
        },
        {
          "key": "W1E35B86FD86B4EAF8FB384A9078D51B2",
          "name": "KPI",
          "visualizations": [
            {
              "key": "W9C47F6165DC64E168D39ED793C916FDD",
              "name": "Title of your visualization",
              "visualizationType": "kpi"
            }
          ]
        },
        {
          "key": "W3BF7477D8F1849128F311BAE883E8FDE",
          "name": "Multi-Metri KPI",
          "visualizations": [
            {
              "key": "W2975C3D6AB024D38A4A09DBC2A4485B6",
              "name": "Title of your visualization",
              "visualizationType": "multi_metric_kpi"
            }
          ]
        },
        {
          "key": "W8FB185A3C630414699948113D55CAE7B",
          "name": "Comparison KPI",
          "visualizations": [
            {
              "key": "W3D6CBE3886CE4C1FA5B3A68AF9BF2563",
              "name": "Title of your visualization",
              "visualizationType": "comparison_kpi"
            }
          ]
        },
        {
          "key": "WCDDED8563C3F4174A43C4480DAA772BF",
          "name": "Gauge",
          "visualizations": [
            {
              "key": "W3E9B87D1348D49EDA7EB5C101D26FA96",
              "name": "Title of your visualization",
              "visualizationType": "gauge"
            }
          ]
        },
        {
          "key": "W2543E6EA4D744CF39414287C9EAA891C",
          "name": "Geospatial Service",
          "visualizations": [
            {
              "key": "W1B7285588F684484A51943342D1F8F3A",
              "name": "Title of your visualization",
              "visualizationType": "geospatial_service"
            }
          ]
        },
        {
          "key": "WD0E88881BF7F40B4945D30670C239230",
          "name": "Map",
          "visualizations": [
            {
              "key": "WBE059BF5BBBA47EDA69C6E9671EBD67D",
              "name": "Title of your visualization",
              "visualizationType": "google_map"
            }
          ]
        },
        {
          "key": "W8E574508DE914D1FA03BA25AA641E53C",
          "name": "Heatmap",
          "visualizations": [
            {
              "key": "W455DECA8E98A4B2EA11F0D585F59C088",
              "name": "Title of your visualization",
              "visualizationType": "heat_map"
            }
          ]
        },
        {
          "key": "W0FC6E42EB71A424AB84EF6EB1375C289",
          "name": "Waterfall",
          "visualizations": [
            {
              "key": "WB5D2160AFB154F7AB3F072349D43C885",
              "name": "Title of your visualization",
              "visualizationType": "waterfall"
            }
          ]
        },
        {
          "key": "W158206C59B174E61920FD1E5BEFE618D",
          "name": "Box Plot",
          "visualizations": [
            {
              "key": "W986776FFCC7C49C4B6490C9C5743470D",
              "name": "Title of your visualization",
              "visualizationType": "box_plot"
            }
          ]
        },
        {
          "key": "W1F6B2A2A0CCD41E8A101C172C7508F17",
          "name": "Network",
          "visualizations": [
            {
              "key": "WBF6204F34726491D8C0465E7E8606CF8",
              "name": "Title of your visualization",
              "visualizationType": "network"
            }
          ]
        },
        {
          "key": "W2648051442F246229E391F641C618A88",
          "name": "Histogram",
          "visualizations": [
            {
              "key": "WBF4D525218894CE49D9AA500C11272A0",
              "name": "Title of your visualization",
              "visualizationType": "histogram"
            }
          ]
        },
        {
          "key": "W240B06D71E774C3B9CD08CB7064F251C",
          "name": "Sankey",
          "visualizations": [
            {
              "key": "W5A6478F094894DC0AF532AF3339448B6",
              "name": "Title of your visualization",
              "visualizationType": "sankey"
            }
          ]
        },
        {
          "key": "WF58B0B8BA6C94E85AE50D778E17D180C",
          "name": "Time Series",
          "visualizations": [
            {
              "key": "WCA48BB51A18941AAA78A0F41334222AC",
              "name": "Title of your visualization",
              "visualizationType": "time_series"
            }
          ]
        }
      ],
      "filters": []
    },
    {
      "key": "WAB21018152CC446A96AB64FB9E937E95",
      "name": "Components",
      "pages": [
        {
          "key": "K302AD5F111EDACFC1A010080EFDED712",
          "name": "Filter",
          "visualizations": [
            {
              "key": "K302AD65F11EDACFC00000080EFDED711",
              "name": "Title of your visualization",
              "visualizationType": "bar_chart"
            }
          ],
          "selectors": [
            {
              "key": "W0E10C1EAC98E4E1285F6231CD8C064D1",
              "name": "City",
              "summary": "",
              "source": {
                "id": "53938E5911EDAE6CB4EA0080EF5E82C8",
                "name": "City",
                "type": 12
              },
              "selectorType": "attribute_element_list",
              "displayStyle": "hyper_links",
              "hasAllOption": true,
              "targets": [
                {
                  "key": "K302AD65F11EDACFC00000080EFDED711"
                }
              ],
              "multiSelectionAllowed": true,
              "currentSelection": {
                "selectionStatus": "unfiltered",
                "allSelected": false,
                "elements": []
              }
            }
          ]
        },
        {
          "key": "W0C33FD2AB470474AAE713C026D6BEA6D",
          "name": "Text",
          "visualizations": [],
          "fields": [
            {
              "key": "W7627510BC43A4A4FBDD049951B35EF4A",
              "name": "Text 1",
              "fieldType": "text"
            }
          ]
        },
        {
          "key": "W1F733DDF1A894BF0A85BE20719F6140A",
          "name": "Image",
          "visualizations": [],
          "fields": [
            {
              "key": "W165966080C024FBFA818CC324A30C7E3",
              "name": "Image 1",
              "fieldType": "image"
            }
          ]
        },
        {
          "key": "WF4C5CD6182C0461DB133148E08827C61",
          "name": "HTML Container",
          "visualizations": [],
          "fields": [
            {
              "key": "W8502A11C05EC4277AB8A9114CDD07187",
              "name": "HTML Container 1",
              "fieldType": "html"
            }
          ]
        },
        {
          "key": "W18039B5B54534BDCA86ED5F5770AE931",
          "name": "Shape",
          "visualizations": [],
          "fields": [
            {
              "key": "W3E6264A8CB48428099D7354E2DE00B8A",
              "name": "Rectangle",
              "fieldType": "shape"
            }
          ]
        },
        {
          "key": "W113632DF45F044409DBAE5D8B7F21B4D",
          "name": "Panel Stack",
          "visualizations": [],
          "panelStacks": [
            {
              "key": "W5991298B09C24BFFB7391D04EA3C6E38",
              "name": "Panel Stack 1",
              "panels": [
                {
                  "key": "W77A6DE2F0E774A0DBE4B63F072B26E10",
                  "name": "Panel 1",
                  "visualizations": [
                    {
                      "key": "WACB23259C5B34C4F841D0D407F5D2513",
                      "name": "Title of your visualization",
                      "visualizationType": "multi_metric_kpi"
                    },
                    {
                      "key": "B8F50053C0504F64BCEB848F691381BF",
                      "name": "Title of your visualization",
                      "visualizationType": "microcharts",
                      "columnSets": [
                        {
                          "key": "W84C12DD4F5F74EB8A05E25C2F97214F6",
                          "name": "Column Set 1"
                        }
                      ]
                    }
                  ]
                }
              ],
              "currentPanelKey": "W77A6DE2F0E774A0DBE4B63F072B26E10"
            }
          ]
        }
      ],
      "filters": []
    }
  ]
}
```

Sample Response Code: 201 (Dashboard theme instance is saved to metadata.)
