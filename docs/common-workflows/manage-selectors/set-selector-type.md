---
title: Set Selector Type
description: You can set the different types of selector using the following requests.
---

You can set the different types of selector using the following requests.

## API: [`POST /api/dossiers/instances`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Dossiers%20and%20Documents/createDossierInstance_1)

This endpoint is used to execute a dossier with specific filtering criteria applied in the current chapter. You can set the following selector types:

- Element list selector (in chapter-level, in canvas)
- Attribute qualification selector (in chapter-level, in canvas)
- Metric qualification selector (in chapter-level, in canvas)
- Object replacement selector (in canvas)
- Visualization as filter

You can also perform the following:

- Unset filter
- Exclude or include functionality on the element list selector with an attribute target
- Control flag to ignore (or not ignore) unmatched filter

### Parameters

| Parameter        | Description         | Parameter Type | Data Type | Required? |
| ---------------- | ------------------- | -------------- | --------- | --------- |
| X-MSTR-AuthToken | Authorization token | header         | string    | true      |
| X-MSTR-ProjectId | Project ID          | header         | string    | true      |
| dossierId        | dossier ID          | path           | string    | true      |

Sample Input Body:

- Element list selector:

  ```json
  {
    "key": "W228",
    "name": "Category",
    "currentSelection": {
      "selectionStatus": "included",
      "allSelected": false,
      "elements": [
        {
          "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Books"
        },
        {
          "id": "h2;8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Electronics"
        }
      ]
    }
  }
  ```

- Attribute qualification selector:

  ```json
  {
    "key": "W230",
    "name": "Daytime",
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
            "form": {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID"
            }
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

- Metric qualification selector ("highest" rank):

  ```json
  {
    "key": "W234",
    "name": "Revenue",
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
          {
            "type": "constant",
            "dataType": "Real",
            "value": "40%"
          }
        ]
      }
    }
  }
  ```

- Object replacement selector:

  ```json
  {
    "key": "W203",
    "name": "Selector 2",
    "currentSelection": {
      "selectionStatus": "included",
      "objectItems": [
        {
          "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",
          "name": "Cost"
        }
      ]
    }
  }
  ```

- Visualization as filter (choose year=2014):

  ```json
  {
    "visualizationKey": "W217",
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

Response Code: 201 (successfully created)

Sample Response Body:

```json
{
  "mid": "1D7BCE494E814EC29F95218147721042",
  "status": 1
}
```

### Error Handling

| Invalid Input                                                                                             | Error Message                                                                                                                                                                                       | HTTP Response Code | Note                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| No matches on the filter's data input (key, name, source id, source name)                                 | Following constraint violations have been detected: At least one of the following fields cannot be null or empty; key, name, source                                                                 | 400                | Previous error message: Following constraint violations have been detected: At least one of the following fields cannot be null or empty: key, name. |
| Invalid filter key input                                                                                  | Failed to locate the filter by either key: {filter key}, or name: null, or target (attribute/metric) id: null, or target (attribute/metric) name: null, please verify this information is correct.  | 400                |                                                                                                                                                      |
| Invalid filter name input                                                                                 | Failed to locate the filter by either key: null, or name: {filter name}, or target (attribute/metric) id: null, or target (attribute/metric) name: null, please verify this information is correct. | 400                |                                                                                                                                                      |
| Set 'excluded' status for a metric or attribute qualification selector                                    | Unsupported excluded status for qualification selector                                                                                                                                              | 400                | The 'excluded' status is not allowed to set for a metric or attribute qualification selector                                                         |
| Set 'excluded' status for element list selector with target on consolidation or custom group              | Unsupported 'excluded' status for element list selector with targeted on consolidation or custom group                                                                                              | 400                | The 'excluded' status is not allowed to set for an element list selector with a target a on consolidation or custom group                            |
| Set dynamic selection applied to enable or disable an element list selector                               | Unsupported setting dynamic selection applied currently, please remove the property 'dynamicSelectionApplied' in the request body                                                                   | 400                | Applying dynamic selection to enable or disable an element list selector is not supported.                                                           |
| Set only support single selection selector's multi selections for attribute element list selector         | The {filter name} filter does not support multiple selections, please verify the request                                                                                                            | 400                | Only the attribute element list selector and object replacement selector                                                                             |
| Specifying consolidation or custom group elements only by name                                            | Specifying {Consolidation\|custom group} elements by name is currently not supported, please verify input for {filter name} filter.                                                                 | 501                | Only attribute element list selector and object replacement selector                                                                                 |
| (new expression json input)<br/><br/>Invalid operator input                                               | Invalid operator - {input operator}                                                                                                                                                                 | 400                | Only metric expression selector. Similar error in view filter functionality.                                                                         |
| (new expression json input)<br/><br/>Invalid constants counts                                             | There should be {expected constant count} operands for operator - {input operator}                                                                                                                  | 400                | Only metric expression selector. Similar error in view filter functionality.                                                                         |
| (new expression json input)<br/><br/>The operands type combination is not supported for operator - {1}    | The operands type combination of {0} is not supported for operator - {1}                                                                                                                            | 400                | Only metric expression selector. Similar error in view filter functionality.                                                                         |
| (new expression json input)<br/><br/>The first input of Rank/Percent metric qualification is not a metric | The first input of Rank/Percent metric qualification must be a metric                                                                                                                               | 400                | Only metric expression selector. Similar error in view filter functionality.                                                                         |
| (existed old metric selector json input)<br/><br/>Invalid operator input                                  | Invalid operator - {input operator}                                                                                                                                                                 | 400                | Only metric expression selector. Existed old metric selector json input.                                                                             |
| (existed old metric selector json input)<br/><br/>Invalid constant counts                                 | Constants count is not right                                                                                                                                                                        | 400                | Only metric expression selector.<br/><br/>Similar error in view filter functionality. Existed old metric selector json input.                        |

## API: [`PUT/dossiers/{dossierId}/instances/{instancesId}/filters`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Dossiers%20and%20Documents/setFilters)

This endpoint is used to execute a dossier with specific filtering criteria applied in the current chapter. You can set the following selector types:

- Element list selector (in chapter-level, in canvas)
- Attribute qualification selector (in chapter-level, in canvas)
- Metric qualification selector (in chapter-level, in canvas)
- Object replacement selector (in canvas)
- Visualization as filter

You can also perform the following:

- Unset filter
- Exclude or include functionality on the element list selector with an attribute target
- Control flag to ignore (or not ignore) unmatched filter

### Parameters

| Parameter        | Description         | Parameter Type | Data Type | Required? |
| ---------------- | ------------------- | -------------- | --------- | --------- |
| X-MSTR-AuthToken | Authorization token | header         | string    | true      |
| X-MSTR-ProjectId | Project ID          | header         | string    | true      |
| dossierId        | Dossier ID          | path           | string    | true      |

Sample Input Body:

- Element list selector:

  ```json
  {
    "key": "W228",
    "name": "Category",
    "currentSelection": {
      "selectionStatus": "included",
      "allSelected": false,
      "elements": [
        {
          "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Books"
        },
        {
          "id": "h2;8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Electronics"
        }
      ]
    }
  }
  ```

- Attribute qualification selector:

  ```json
  {
    "key": "W230",
    "name": "Daytime",
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
            "form": {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID"
            }
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

- Metric qualification selector ("highest" rank):

  ```json
  {
    "key": "W234",
    "name": "Revenue",
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
          {
            "type": "constant",
            "dataType": "Real",
            "value": "40%"
          }
        ]
      }
    }
  }
  ```

- Object replacement selector:

  ```json
  {
    "key": "W203",
    "name": "Selector 2",
    "currentSelection": {
      "selectionStatus": "included",
      "objectItems": [
        {
          "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",
          "name": "Cost"
        }
      ]
    }
  }
  ```

- Visualization as filter (choose year=2014):

  ```json
  {
    "visualizationKey": "W217",
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

Response Code: 204 (no content)

### Error Handling

| Invalid Input                                                                                             | Error Message                                                                                                                                                                                       | HTTP Response Code | Note                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| No matches on the filter's data input (key, name, source id, source name)                                 | Following constraint violations have been detected: At least one of the following fields cannot be null or empty; key, name, source                                                                 | 400                | Previous error message: Following constraint violations have been detected: At least one of the following fields cannot be null or empty: key, name. |
| Invalid filter key input                                                                                  | Failed to locate the filter by either key: {filter key}, or name: null, or target (attribute/metric) id: null, or target (attribute/metric) name: null, please verify this information is correct.  | 400                |                                                                                                                                                      |
| Invalid filter name input                                                                                 | Failed to locate the filter by either key: null, or name: {filter name}, or target (attribute/metric) id: null, or target (attribute/metric) name: null, please verify this information is correct. | 400                |                                                                                                                                                      |
| Set 'excluded' status for a metric or attribute qualification selector                                    | Unsupported excluded status for qualification selector                                                                                                                                              | 400                | The 'excluded' status is not allowed to set for a metric or attribute qualification selector                                                         |
| Set 'excluded' status for element list selector with target on consolidation or custom group              | Unsupported 'excluded' status for element list selector with targeted on consolidation or custom group                                                                                              | 400                | The 'excluded' status is not allowed to set for an element list selector with a target a on consolidation or custom group                            |
| Set dynamic selection applied to enable or disable an element list selector                               | Unsupported setting dynamic selection applied currently, please remove the property 'dynamicSelectionApplied' in the request body                                                                   | 400                | Applying dynamic selection to enable or disable an element list selector is not supported                                                            |
| Set only support single selection selector's multi selections for attribute element list selector         | The {filter name} filter does not support multiple selections, please verify the request                                                                                                            | 400                | Only the attribute element list selector and object replacement selector                                                                             |
| Specifying consolidation or custom group elements only by name                                            | Specifying {Consolidation\|custom group} elements by name is currently not supported, please verify input for {filter name} filter.                                                                 | 501                | Only attribute element list selector and object replacement selector                                                                                 |
| (new expression json input)<br/><br/>Invalid operator input                                               | Invalid operator - {input operator}                                                                                                                                                                 | 400                | Only metric expression selector. Similar error in view filter functionality.                                                                         |
| (new expression json input)<br/><br/>Invalid constants counts                                             | There should be {expected constant count} operands for operator - {input operator}                                                                                                                  | 400                | Only metric expression selector. Similar error in view filter functionality.                                                                         |
| (new expression json input)<br/><br/>The operands type combination is not supported for operator - {1}    | The operands type combination of {0} is not supported for operator - {1}                                                                                                                            | 400                | Only metric expression selector. Similar error in view filter functionality.                                                                         |
| (new expression json input)<br/><br/>The first input of Rank/Percent metric qualification is not a metric | The first input of Rank/Percent metric qualification must be a metric                                                                                                                               | 400                | Only metric expression selector. Similar error in view filter functionality.                                                                         |
| (existed old metric selector json input)<br/><br/>Invalid operator input                                  | Invalid operator - {input operator}                                                                                                                                                                 | 400                | Only metric expression selector. Existed old metric selector json input.                                                                             |
| (existed old metric selector json input)<br/><br/>Invalid constant counts                                 | Constants count is not right                                                                                                                                                                        | 400                | Only metric expression selector.<br/><br/>Similar error in view filter functionality. Existed old metric selector json input.                        |

## API: [`GET /api/dossiers/{dossierId}/instances/{instanceId}/elements`](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Dossiers%20and%20Documents/getDossierDatasetFilterElements)

This endpoint is used to fetch available elements for the element list selector.

### Functionality

Get information for available elements of a dossier selector.

Get information for search elements of a dossier selector based on the search pattern.

### Parameters

| Parameter        | Description                                                                                                               | Default Value | Parameter Type | Data Type |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------- | --------- |
| X-MSTR-AuthToken | The previously generated session ID                                                                                       |               | header         | string    |
| X-MSTR-ProjectId | Project ID                                                                                                                |               | header         | string    |
| dossierId        | The ID of the executed dossier                                                                                            |               | path           | string    |
| instanceId       | The ID of the dossier instance                                                                                            |               | path           | string    |
| offset           | The starting point within the collection of returned results. Use to control paging behavior.                             | 0             | query          | integer   |
| limit            | The maximum number of items returned for a single request. Used to control paging behavior.<br/><br/>Use -1 for no limit. | 0             | query          | integer   |
| targetObjectId   | The ID of the target object                                                                                               |               | query          | string    |
| targetObjectType | The type of the target object.<br/><br/>Available values: attribute, consolidation                                        |               | query          | string    |
| searchForms      | Collection of search form IDs                                                                                             |               | query          | string    |
| searchPattern    | The search pattern                                                                                                        |               | query          | string    |
| filterKey        | Filter (selection) key                                                                                                    |               | query          | string    |

Sample Response Body:

```json
[
  {
    "name": "Books",
    "id": "h1;;Books"
  },
  {
    "name": "Electronics",
    "id": "h2;;Electronics"
  },
  {
    "name": "Movies",
    "id": "h3;;Movies"
  },
  {
    "name": "Music",
    "id": "h4;;Music"
  }
]
```

### Error Handling

| Invalid Input                      | Error Message                                                                                                                                                    | HTTP Response Code |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| At least search form is not a GUID | Following constraint violations have been detected: At least one of the form ID provided is not a valid value {search forms input} is not a valid value for GUID | 400                |
| targetObjectId is not a GUID       | {input object id} is not a valid for GUID                                                                                                                        | 400                |
| targetObjectType is invalid        | targetObjectType is invalid                                                                                                                                      | 400                |
