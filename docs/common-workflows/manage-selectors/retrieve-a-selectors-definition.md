---
title: Retrieve a Selector's Definition
description: The workflow to retrieve a selector's definition.
---

You can retrieve a selector's definition using the following APIs.

## API: [GET /api/v2/dossiers/{dossierId}/definition](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList_1)

This endpoint fetches a selector's definition and dataset information of a dossier (without executing it). The following details are returned:

- Current chapter key
- Dataset information:

  - Available object information

    <details><summary>Output example for a dossier and dossier instance definition</summary>

    ```json
    { "id": "D29DC6464099A518DE19FEA4C25D346B", "name": "temp Dossier", "hasPrompt": false, "chapters": [ { "key": "K36", "name": "Chapter 1", "pages": [ { "key": "K53", "name": "Page 1", "visualizations": [ { "key": "K52", "name": "Visualization 1", "filteredTargetVisualizations": [ { "key": "W65" } ] }, { "key": "W62", "name": "Visualization 2" }, { "key": "W65", "name": "Visualization 3" } ], "inCanvasSelectors": [] } ], "filters": [ { "key": "W134", "name": "Cost", "summary": "((Cost Between 5707743.0 And 21191039.0))", "source": { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "type": 4 }, "synchronizedAcrossChapter":false "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "expression": { "operator": "And", "operands": [ { "operator": "Between", "operands": [ { "type": "metric", "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost" }, { "type": "constant", "dataType": "Real", "value": "5707743" }, { "type": "constant", "dataType": "Real", "value": "21191039" } ] } ] }, "selections": [] }, { "key": "W138", "name": "Category", "summary": "Category In List Electronics", "source": { "id": "8D679D3711D3E4981000E787EC6DE8A4", "type": 12 }, "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "selections": [ { "id": "h2;8D679D3711D3E4981000E787EC6DE8A4", "name": "Electronics" } ] } ] } ], "datasets": [ { "name": "8DFA1ABC41C2F43530645FA90B80C745", "id": "New Dataset 1", "availableObjects": [ { "id": "8D679D3711D3E4981000E787EC6DE8A4", "name": "Category", "type": "attribute", "forms": [ { "id": "CCFBE2A5EADB4F50941FB879CCF1721C", "name": "DESC" } ] }, { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost", "type": "metric" } ] } ] }
    ```

    </details>

- Filter definition:

  - Element list selector (in chapter-level, in canvas)

    <details><summary>Output examples for an element list selector definition</summary>

    Common attribute element list:

    ```json
    {
      "key": "W228",
      "name": "Category",
      "summary": "Category In List Books, Movies",
      "source": {
        "id": "8D679D3711D3E4981000E787EC6DE8A4",
        "name": "Category",
        "type": 12
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "attribute_element_list",
      "displayStyle": "check_boxes",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "allSelected": false,
        "elements": [
          { "id": "h1;8D679D3711D3E4981000E787EC6DE8A4", "name": "Books" },
          { "id": "h3;8D679D3711D3E4981000E787EC6DE8A4", "name": "Movies" }
        ]
      }
    }
    ```

    Dynamic selection applied:

    ```json
    {
      "key": "W77",
      "name": "Year",
      "summary": "",
      "source": {
        "id": "8D679D5111D3E4981000E787EC6DE8A4",
        "name": "Year",
        "type": 12
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "attribute_element_list",
      "displayStyle": "check_boxes",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "dynamicSelectionApplied": true,
        "allSelected": false,
        "elements": []
      },
      "defaultDynamicSelection": { "status": "first_elements", "quantity": 1 }
    }
    ```

    </details>

  - Attribute qualification selector (in chapter-level, in canvas)

    <details><summary>Output example for an attribute qualification selector definition</summary>

    ```json
    {
      "key": "W230",
      "name": "Daytime",
      "summary": "((Daytime@ID Between '1/1/2014 12:00:14 AM' And '12/31/2016 11:59:59 PM'))",
      "source": {
        "id": "664D1AC647064FE9B35FF8A09780BC48",
        "name": "Daytime",
        "type": 12
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "attribute_qualification",
      "displayStyle": "attribute_qualification",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "Between",
          "operands": [
            {
              "type": "form",
              "attribute": {
                "id": "664D1AC647064FE9B35FF8A09780BC48",
                "name": "Daytime"
              },
              "form": { "id": "45C11FA478E745FEA08D781CEA190FE5", "name": "ID" }
            },
            {
              "type": "constant",
              "dataType": "TimeStamp",
              "value": "1/1/2014 12:00:14 AM"
            },
            {
              "type": "constant",
              "dataType": "TimeStamp",
              "value": "12/31/2016 11:59:59 PM"
            }
          ]
        }
      }
    }
    ```

    </details>

  - Metric qualification selector (in chapter-level, in canvas)

    <details><summary>Output examples for a metric qualification selector definition</summary>

    "Greater than" case:

    ```json
    {
      "key": "W232",
      "name": "Cost",
      "summary": "Cost >= 1000.0",
      "source": {
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "name": "Cost",
        "type": 4
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "metric_qualification",
      "displayStyle": "metric_qualification",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "GreaterEqual",
          "operands": [
            {
              "type": "metric",
              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
              "name": "Cost"
            },
            { "type": "constant", "dataType": "Real", "value": "1000" }
          ]
        }
      }
    }
    ```

    "Not in" case:

    ```json
    {
      "key": "W232",
      "name": "Cost",
      "summary": "Cost [Not In] (1000.0,2000.0,3000.0)",
      "source": {
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "name": "Cost",
        "type": 4
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "metric_qualification",
      "displayStyle": "metric_qualification",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "NotIn",
          "operands": [
            {
              "type": "metric",
              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
              "name": "Cost"
            },
            {
              "type": "constants",
              "dataType": "Real",
              "values": ["1000", "2000", "3000"]
            }
          ]
        }
      }
    }
    ```

    "Highest rank" case:

    ```json
    {
      "key": "W234",
      "name": "Revenue",
      "summary": "Rank&lt;ASC=False , ByValue=False &gt;(Revenue) <= 0.4",
      "source": {
        "id": "4C05177011D3E877C000B3B2D86C964F",
        "name": "Revenue",
        "type": 4
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "metric_qualification",
      "displayStyle": "metric_qualification",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "Percent.Top",
          "operands": [
            {
              "type": "metric",
              "id": "4C05177011D3E877C000B3B2D86C964F",
              "name": "Revenue"
            },
            { "type": "constant", "dataType": "Real", "value": "40%" }
          ]
        }
      }
    }
    ```

    </details>

  - Object replacement selector (in-canvas)

    <details><summary>Output example for an object replacement selector definition</summary>

    ```json
    {
      "key": "W203",
      "name": "Selector 2",
      "summary": "Selector 2 In List Cost",
      "selectorType": "object_replacement",
      "displayStyle": "hyper_links",
      "hasAllOption": false,
      "targets": [{ "key": "K52" }],
      "multiSelectionAllowed": false,
      "currentSelection": {
        "selectionStatus": "included",
        "objectItems": [
          {
            "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",
            "name": "Cost"
          }
        ]
      },
      "availableObjectItems": [
        {
          "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",
          "name": "Cost"
        },
        {
          "id": "i381980B211D40BC8C000C8906B98494F;381980B211D40BC8C000C8906B98494F",
          "name": "Discount"
        },
        {
          "id": "i4C051DB611D3E877C000B3B2D86C964F;4C051DB611D3E877C000B3B2D86C964F",
          "name": "Profit"
        }
      ]
    }
    ```

    </details>

  - Set visualization as filter

    <details><summary>Output example for a visualization as filter definition</summary>

    ```json
    {
      "visualizationKey": "W217",
      "selectorType": "visualization_as_filter",
      "targets": [{ "key": "W188" }, { "key": "W193" }],
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "Or",
          "operands": [
            {
              "operator": "In",
              "operands": [
                {
                  "type": "attribute",
                  "id": "8D679D5111D3E4981000E787EC6DE8A4",
                  "name": "Year"
                },
                {
                  "type": "elements",
                  "elements": [
                    {
                      "id": "8D679D5111D3E4981000E787EC6DE8A4:2014",
                      "name": "2014"
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
    ```

    </details>

### Parameters

| Parameter        | Description         | Parameter Type | Data Type | Required? |
| ---------------- | ------------------- | -------------- | --------- | --------- |
| X-MSTR-AuthToken | Authorization token | header         | string    | true      |
| X-MSTR-ProjectId | Project Id          | header         | string    | true      |
| dossierId        | dossier id          | path           | string    | true      |

## API: [GET /api/v2/dossiers/{dossierId}/instances/{instanceId}/definition](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList_2)

This endpoint fetches a selector's definition and dataset information from an executed dossier. The following details are returned:

- Current chapter key
- Dataset information:

  - Available object information

    <details><summary>Output example for a dossier and dossier instance definition</summary>

    ```json
    { "id": "D29DC6464099A518DE19FEA4C25D346B", "name": "temp Dossier", "hasPrompt": false, "chapters": [ { "key": "K36", "name": "Chapter 1", "pages": [ { "key": "K53", "name": "Page 1", "visualizations": [ { "key": "K52", "name": "Visualization 1", "filteredTargetVisualizations": [ { "key": "W65" } ] }, { "key": "W62", "name": "Visualization 2" }, { "key": "W65", "name": "Visualization 3" } ], "inCanvasSelectors": [] } ], "filters": [ { "key": "W134", "name": "Cost", "summary": "((Cost Between 5707743.0 And 21191039.0))", "source": { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "type": 4 }, "synchronizedAcrossChapter":false "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "expression": { "operator": "And", "operands": [ { "operator": "Between", "operands": [ { "type": "metric", "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost" }, { "type": "constant", "dataType": "Real", "value": "5707743" }, { "type": "constant", "dataType": "Real", "value": "21191039" } ] } ] }, "selections": [] }, { "key": "W138", "name": "Category", "summary": "Category In List Electronics", "source": { "id": "8D679D3711D3E4981000E787EC6DE8A4", "type": 12 }, "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "selections": [ { "id": "h2;8D679D3711D3E4981000E787EC6DE8A4", "name": "Electronics" } ] } ] } ], "datasets": [ { "name": "8DFA1ABC41C2F43530645FA90B80C745", "id": "New Dataset 1", "availableObjects": [ { "id": "8D679D3711D3E4981000E787EC6DE8A4", "name": "Category", "type": "attribute", "forms": [ { "id": "CCFBE2A5EADB4F50941FB879CCF1721C", "name": "DESC" } ] }, { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost", "type": "metric" } ] } ] }
    ```

    </details>

- Filter definition:

  - Element list selector (in chapter-level, in canvas)

    <details><summary>Output examples for an element list selector definition</summary>

    Common attribute element list:

    ```json
    {
      "key": "W228",
      "name": "Category",
      "summary": "Category In List Books, Movies",
      "source": {
        "id": "8D679D3711D3E4981000E787EC6DE8A4",
        "name": "Category",
        "type": 12
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "attribute_element_list",
      "displayStyle": "check_boxes",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "allSelected": false,
        "elements": [
          { "id": "h1;8D679D3711D3E4981000E787EC6DE8A4", "name": "Books" },
          { "id": "h3;8D679D3711D3E4981000E787EC6DE8A4", "name": "Movies" }
        ]
      }
    }
    ```

    Dynamic selection applied:

    ```json
    {
      "key": "W77",
      "name": "Year",
      "summary": "",
      "source": {
        "id": "8D679D5111D3E4981000E787EC6DE8A4",
        "name": "Year",
        "type": 12
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "attribute_element_list",
      "displayStyle": "check_boxes",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "dynamicSelectionApplied": true,
        "allSelected": false,
        "elements": []
      },
      "defaultDynamicSelection": { "status": "first_elements", "quantity": 1 }
    }
    ```

    </details>

  - Attribute qualification selector (in chapter-level, in canvas)

    <details><summary>Output example for an attribute qualification selector definition</summary>

    ```json
    {
      "key": "W230",
      "name": "Daytime",
      "summary": "((Daytime@ID Between '1/1/2014 12:00:14 AM' And '12/31/2016 11:59:59 PM'))",
      "source": {
        "id": "664D1AC647064FE9B35FF8A09780BC48",
        "name": "Daytime",
        "type": 12
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "attribute_qualification",
      "displayStyle": "attribute_qualification",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "Between",
          "operands": [
            {
              "type": "form",
              "attribute": {
                "id": "664D1AC647064FE9B35FF8A09780BC48",
                "name": "Daytime"
              },
              "form": { "id": "45C11FA478E745FEA08D781CEA190FE5", "name": "ID" }
            },
            {
              "type": "constant",
              "dataType": "TimeStamp",
              "value": "1/1/2014 12:00:14 AM"
            },
            {
              "type": "constant",
              "dataType": "TimeStamp",
              "value": "12/31/2016 11:59:59 PM"
            }
          ]
        }
      }
    }
    ```

    </details>

  - Metric qualification selector (in chapter-level, in canvas)

    <details><summary>Output examples for a metric qualification selector definition</summary>

    "Greater than" case:

    ```json
    {
      "key": "W232",
      "name": "Cost",
      "summary": "Cost >= 1000.0",
      "source": {
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "name": "Cost",
        "type": 4
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "metric_qualification",
      "displayStyle": "metric_qualification",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "GreaterEqual",
          "operands": [
            {
              "type": "metric",
              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
              "name": "Cost"
            },
            { "type": "constant", "dataType": "Real", "value": "1000" }
          ]
        }
      }
    }
    ```

    "Not in" case:

    ```json
    {
      "key": "W232",
      "name": "Cost",
      "summary": "Cost [Not In] (1000.0,2000.0,3000.0)",
      "source": {
        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
        "name": "Cost",
        "type": 4
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "metric_qualification",
      "displayStyle": "metric_qualification",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "NotIn",
          "operands": [
            {
              "type": "metric",
              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
              "name": "Cost"
            },
            {
              "type": "constants",
              "dataType": "Real",
              "values": ["1000", "2000", "3000"]
            }
          ]
        }
      }
    }
    ```

    "Highest rank" case:

    ```json
    {
      "key": "W234",
      "name": "Revenue",
      "summary": "Rank&lt;ASC=False , ByValue=False &gt;(Revenue) <= 0.4",
      "source": {
        "id": "4C05177011D3E877C000B3B2D86C964F",
        "name": "Revenue",
        "type": 4
      },
      "synchronizedAcrossChapter": false,
      "selectorType": "metric_qualification",
      "displayStyle": "metric_qualification",
      "hasAllOption": true,
      "targets": [],
      "multiSelectionAllowed": true,
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "Percent.Top",
          "operands": [
            {
              "type": "metric",
              "id": "4C05177011D3E877C000B3B2D86C964F",
              "name": "Revenue"
            },
            { "type": "constant", "dataType": "Real", "value": "40%" }
          ]
        }
      }
    }
    ```

    </details>

  - Object replacement selector (in-canvas)

    <details><summary>Output example for an object replacement selector definition</summary>

    ```json
    {
      "key": "W203",
      "name": "Selector 2",
      "summary": "Selector 2 In List Cost",
      "selectorType": "object_replacement",
      "displayStyle": "hyper_links",
      "hasAllOption": false,
      "targets": [{ "key": "K52" }],
      "multiSelectionAllowed": false,
      "currentSelection": {
        "selectionStatus": "included",
        "objectItems": [
          {
            "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",
            "name": "Cost"
          }
        ]
      },
      "availableObjectItems": [
        {
          "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",
          "name": "Cost"
        },
        {
          "id": "i381980B211D40BC8C000C8906B98494F;381980B211D40BC8C000C8906B98494F",
          "name": "Discount"
        },
        {
          "id": "i4C051DB611D3E877C000B3B2D86C964F;4C051DB611D3E877C000B3B2D86C964F",
          "name": "Profit"
        }
      ]
    }
    ```

    </details>

  - Set visualization as filter

    <details><summary>Output example for a visualization as filter definition</summary>

    ```json
    {
      "visualizationKey": "W217",
      "selectorType": "visualization_as_filter",
      "targets": [{ "key": "W188" }, { "key": "W193" }],
      "currentSelection": {
        "selectionStatus": "included",
        "expression": {
          "operator": "Or",
          "operands": [
            {
              "operator": "In",
              "operands": [
                {
                  "type": "attribute",
                  "id": "8D679D5111D3E4981000E787EC6DE8A4",
                  "name": "Year"
                },
                {
                  "type": "elements",
                  "elements": [
                    {
                      "id": "8D679D5111D3E4981000E787EC6DE8A4:2014",
                      "name": "2014"
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
    ```

    </details>

### Parameters

| Parameter        | Description         | Parameter Type | Data Type | Required? |
| ---------------- | ------------------- | -------------- | --------- | --------- |
| X-MSTR-AuthToken | Authorization token | header         | string    | true      |
| X-MSTR-ProjectId | Project Id          | header         | string    | true      |
| dossierId        | dossier id          | path           | string    | true      |
| instanceId       | dossier instance id | path           | string    | true      |
