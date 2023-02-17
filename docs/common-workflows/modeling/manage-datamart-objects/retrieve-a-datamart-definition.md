---
title: Retrieve a datamart definition
description: This topic covers several workflows to retrieve an Datamart definition.
---

<Available since="2021 Update 7" />

This topic covers several workflows to retrieve a datamart definition:

- [Retrieve a datamart definition](#retrieve-a-datamart-definition)
- [Retrieve a datamart definition with a filter in tokens format](#retrieve-a-datamart-definition-with-a-filter-in-tokens-format)
- [Retrieve a datamart definition with a filter custom expression in tree and tokens formats](#retrieve-a-datamart-definition-with-a-filter-custom-expression-in-tree-and-tokens-formats)
- [Retrieve a datamart definition with advanced properties](#retrieve-a-datamart-definition-with-advanced-properties)

You want to get the definition of the “Customer" datamart object as below screenshot with datamart options. The object ID of the datamart is  CEA3C6FC4E6749C8F8B19580D16D2443 in the "MicroStrategy Tutorial" project. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

The response can change based on the request parameters provided by the caller. Use the following parameters:

| Location | Name                   | Description                                                                                                                                                                                                  |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header   | X-MSTR-authToken       | The authorization token.                                                                                                                                                                                     |
| header   | X-MSTR-ProjectID       | The project ID.                                                                                                                                                                                              |
| params   | showFilterTokens       | Specify whether the Datamart’s "filter" is returned in "tokens" format, along with "text" and "tree" formats.                                                                                                |
| params   | showExpressionAs       | Specify the format in which the expressions are returned in response, applied to the expressions in a fact or attribute and custom expressions used in a filter, prompt, security filter, custom group, etc. |
| params   | showAdvancedProperties | Specify whether the datamart’s definition is returned with advanced properties.                                                                                                                              |

## Retrieve a datamart definition

Retrieve the datamart definition using [GET /api/model/datamarts/{datamartId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/get_api_model_datamarts__datamartId_).

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/CEA3C6FC4E6749C8F8B19580D16D2443' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: 767tgudpermlvic06qb4mauv9k' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Body:

You can view the datamart definition in the body of the response. Below is an example of the filter in `text` and `tree` formats.

```json
{
  "information": {
    "dateCreated": "2022-08-31T06:59:57.985Z",
    "dateModified": "2022-09-08T03:28:05.547Z",
    "versionId": "70F09F0F4F5A2D620921FBB2CB4B4AD2",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "CEA3C6FC4E6749C8F8B19580D16D2443",
    "subType": "report_datamart",
    "name": "Customer",
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3C11D3E4981000E787EC6DE8A4",
          "name": "Customer",
          "type": "attribute"
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
              "name": "Cost",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {
      "text": "{Customer Region} = Northeast",
      "tree": {
        "type": "predicate_element_list",
        "predicateId": "5F0037DA9E5E4923B379D2D581965D24",
        "predicateTree": {
          "attribute": {
            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Customer Region"
          },
          "elements": [
            {
              "display": "Northeast",
              "elementId": "h1"
            }
          ],
          "function": "in"
        }
      }
    }
  },
  "datamartOptions": {
    "append": true,
    "targetSource": {
      "objectId": "62871E84AEBB479C92F81BB075A55910",
      "subType": "db_role_cloud_element",
      "name": "Sage One"
    },
    "tableName": "!p_adddata_shxu",
    "placeholderIncluded": true,
    "datamartProperties": {
      "[DatamartProperties].[Create Table Post String]": {
        "name": "Create Table Post String",
        "value": "create",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Insert SQLs]": {
        "name": "Insert SQLs",
        "value": "select * from dssmdobjinfo",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Execution Time]": {
        "name": "Maximum Execution Time",
        "value": "11",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Rows]": {
        "name": "Maximum Rows",
        "value": "999999999",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Post SQLs]": {
        "name": "Post SQLs",
        "value": "select * from dssmdobjinfo",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Pre SQLs]": {
        "name": "Pre SQLs",
        "value": "select * from dssmdobjinfo",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Descriptor]": {
        "name": "Table Descriptor",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Option]": {
        "name": "Table Option",
        "value": "options",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Prefix]": {
        "name": "Table Prefix",
        "value": "test",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Qualifier]": {
        "name": "Table Qualifier",
        "value": "a",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Space]": {
        "name": "Table Space",
        "value": "shxu",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Type]": {
        "name": "Table Type",
        "value": "1",
        "type": "int32",
        "resolvedLocation": "object"
      }
    }
  }
}
```

Response Code: 200 (The datamart definition is returned successfully.)

## Retrieve a datamart definition with a filter in tokens format

This workflow sample demonstrates how to retrieve the definition of a datamart with its filter in tokens format through the Modeling service. Unlike the first workflow, you want to enable the showFilterTokens parameter to retrieve the filter definition in tokens format as well.

A filter qualification is presented in the following formats:

- "text": A human readable, but non-parsable text, describing a filter's qualification.
- "tree": A tree data structure fully defining the filter's qualification.
- "tokens": A list of parsed tokens that define a filter's qualification. Be aware that generating tokens requires additional time.

If `showFilterTokens` is omitted or false, only "text" and "tree" formats are returned.

If `showFilterTokens` is true, all "text", "tree" and "tokens" formats are returned.

This workflow sample is similar to Retrieve a Datamart Definition, except with showFilterTokens=true.

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/CEA3C6FC4E6749C8F8B19580D16D2443?showFilterTokens=true' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: n64eqd6mi28ma3vp8tmf8b1jdg' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Body:

You can view the Datamart definition in the body of the response in `text`, `tree`, and `tokens` formats.

```json
{
  "information": {
    "dateCreated": "2022-08-31T06:59:57.985Z",
    "dateModified": "2022-09-08T03:28:05.547Z",
    "versionId": "70F09F0F4F5A2D620921FBB2CB4B4AD2",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "CEA3C6FC4E6749C8F8B19580D16D2443",
    "subType": "report_datamart",
    "name": "Customer",
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3C11D3E4981000E787EC6DE8A4",
          "name": "Customer",
          "type": "attribute"
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
              "name": "Cost",
              "subType": "metric"
            }
          ],
          "limit": {
            "tokens": []
          }
        }
      ]
    },
    "filter": {
      "text": "{Customer Region} = Northeast",
      "tree": {
        "type": "predicate_element_list",
        "predicateId": "980459BEE19243D9ABF1D6224B7DD7F0",
        "predicateTree": {
          "attribute": {
            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Customer Region"
          },
          "elements": [
            {
              "display": "Northeast",
              "elementId": "h1"
            }
          ],
          "function": "in"
        }
      },
      "tokens": [
        {
          "level": "resolved",
          "state": "initial",
          "value": "%",
          "type": "character"
        },
        {
          "level": "resolved",
          "state": "initial",
          "value": "[Customer Region]",
          "type": "object_reference",
          "target": {
            "dateCreated": "2001-01-02T20:48:07.000Z",
            "dateModified": "2022-03-31T03:54:54.000Z",
            "versionId": "DDFEE73C42D3E76DEC239A9F1D734FFC",
            "acg": 255,
            "primaryLocale": "en-US",
            "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
            "subType": "attribute",
            "name": "Customer Region"
          }
        },
        {
          "level": "resolved",
          "state": "initial",
          "value": "In",
          "type": "function",
          "target": {
            "dateCreated": "1900-01-01T00:00:00.000Z",
            "dateModified": "2021-02-26T03:18:34.000Z",
            "versionId": "A3808F5B4E6620E24102E48D99550BB2",
            "acg": 255,
            "primaryLocale": "en-US",
            "objectId": "8107C325DD9911D3B98100C04F2233EA",
            "subType": "function",
            "name": "In",
            "description": "Returns TRUE if Arg1 is in Arg2, otherwise, returns FALSE."
          }
        },
        {
          "level": "resolved",
          "state": "initial",
          "value": "{Customer Region=Northeast}",
          "type": "elements"
        },
        {
          "level": "resolved",
          "state": "initial",
          "value": "",
          "type": "end_of_text"
        }
      ]
    }
  },
  "datamartOptions": {
    "append": true,
    "targetSource": {
      "objectId": "62871E84AEBB479C92F81BB075A55910",
      "subType": "db_role_cloud_element",
      "name": "Sage One"
    },
    "tableName": "!p_adddata_shxu",
    "placeholderIncluded": true,
    "datamartProperties": {
      "[DatamartProperties].[Create Table Post String]": {
        "name": "Create Table Post String",
        "value": "create",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Insert SQLs]": {
        "name": "Insert SQLs",
        "value": "select * from dssmdobjinfo",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Execution Time]": {
        "name": "Maximum Execution Time",
        "value": "11",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Rows]": {
        "name": "Maximum Rows",
        "value": "999999999",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Post SQLs]": {
        "name": "Post SQLs",
        "value": "select * from dssmdobjinfo",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Pre SQLs]": {
        "name": "Pre SQLs",
        "value": "select * from dssmdobjinfo",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Descriptor]": {
        "name": "Table Descriptor",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Option]": {
        "name": "Table Option",
        "value": "options",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Prefix]": {
        "name": "Table Prefix",
        "value": "test",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Qualifier]": {
        "name": "Table Qualifier",
        "value": "a",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Space]": {
        "name": "Table Space",
        "value": "shxu",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Type]": {
        "name": "Table Type",
        "value": "1",
        "type": "int32",
        "resolvedLocation": "object"
      }
    }
  }
}
```

Response Code: 200 (The datamart definition is returned successfully.)

## Retrieve a datamart definition with a filter custom expression in tree and tokens formats

In this workflow sample, you want to get a datamart definition when its filter contains the inline custom expression”cost + 1000 > 10000", with the expression returned in tree and tokens formats. The object ID of the cube is B017E2E54F4967B2C8A6759459248BE8.

The expression is presented in the following formats:

- "text": A human readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.
- "tree": A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.
- "tokens": A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Note that generating tokens requires additional time.

If `showExpressionAs` is omitted, the expression is returned in "text" format.

If `showExpressionAs` is `tree`, the expression is returned in "text" and "tree" formats.

If `showExpressionAs` is `tokens`, the expression is returned in "text" and "tokens" formats.

Get the datamart filter definition with its inline custom expression in tree and tokens format. This workflow is similar to Retrieve a Datamart's Definition, except with showExpressionAs=tokens using GET /api/model/datamarts/{datamartId}.

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/B017E2E54F4967B2C8A6759459248BE8?showExpressionAs=tokens' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: la1loq0l5700p1lm95gb08ktb6' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Body: You can view the Datamart definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-09-08T06:32:28.551Z",
    "dateModified": "2022-09-08T06:41:23.153Z",
    "versionId": "B60AB35E41EE93C408F734BC4B542F64",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "B017E2E54F4967B2C8A6759459248BE8",
    "subType": "report_datamart",
    "name": "Customer with certain condition",
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3811D3E4981000E787EC6DE8A4",
          "name": "Country",
          "type": "attribute"
        },
        {
          "id": "8D679D5211D3E4981000E787EC6DE8A4",
          "name": "Distribution Center",
          "type": "attribute"
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
              "name": "Cost",
              "subType": "metric"
            },
            {
              "id": "4C051DB611D3E877C000B3B2D86C964F",
              "name": "Profit",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {
      "text": "Cost + 1000 > 10000",
      "tree": {
        "type": "predicate_custom",
        "predicateId": "BC0E8714D18B44279042E690F5733872",
        "predicateText": "Cost + 1000 > 10000",
        "predicateTree": {
          "expression": {
            "text": "Cost + 1000 > 10000",
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "%",
                "type": "character"
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "Cost",
                "type": "object_reference",
                "target": {
                  "dateCreated": "2001-09-18T20:56:27.000Z",
                  "dateModified": "2022-04-19T07:17:07.000Z",
                  "versionId": "DC6020454F85D040699E20AE5B588A7D",
                  "acg": 255,
                  "primaryLocale": "en-US",
                  "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",
                  "subType": "metric",
                  "name": "Cost"
                }
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "+",
                "type": "character",
                "target": {
                  "dateCreated": "2001-01-02T20:47:41.000Z",
                  "dateModified": "2021-02-26T03:18:34.000Z",
                  "versionId": "21E9227B421DBAD67EA60A929E595E67",
                  "acg": 255,
                  "primaryLocale": "en-US",
                  "objectId": "8107C310DD9911D3B98100C04F2233EA",
                  "subType": "function",
                  "name": "+",
                  "description": "Returns the sum of two values."
                }
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "1000",
                "type": "integer"
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": ">",
                "type": "character",
                "target": {
                  "dateCreated": "2001-01-02T20:47:41.000Z",
                  "dateModified": "2021-02-26T03:18:34.000Z",
                  "versionId": "A3808F5B4E6620E24102E48D99550BB2",
                  "acg": 255,
                  "primaryLocale": "en-US",
                  "objectId": "8107C317DD9911D3B98100C04F2233EA",
                  "subType": "function",
                  "name": ">",
                  "description": "Returns TRUE if the first value is greater than the second value."
                }
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "10000",
                "type": "integer"
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "",
                "type": "end_of_text"
              }
            ]
          }
        }
      }
    }
  },
  "datamartOptions": {
    "append": true,
    "targetSource": {
      "objectId": "62871E84AEBB479C92F81BB075A55910",
      "subType": "db_role_cloud_element",
      "name": "Sage One"
    },
    "tableName": "!p_adddata_shxu",
    "placeholderIncluded": true,
    "datamartProperties": {
      "[DatamartProperties].[Create Table Post String]": {
        "name": "Create Table Post String",
        "value": "create",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Insert SQLs]": {
        "name": "Insert SQLs",
        "value": "select * from dssmdobjinfo",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Execution Time]": {
        "name": "Maximum Execution Time",
        "value": "11",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Maximum Rows]": {
        "name": "Maximum Rows",
        "value": "999999999",
        "type": "int32",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Post SQLs]": {
        "name": "Post SQLs",
        "value": "select * from dssmdobjinfo",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Pre SQLs]": {
        "name": "Pre SQLs",
        "value": "select * from dssmdobjinfo",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Descriptor]": {
        "name": "Table Descriptor",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Option]": {
        "name": "Table Option",
        "value": "options",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Prefix]": {
        "name": "Table Prefix",
        "value": "test",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Qualifier]": {
        "name": "Table Qualifier",
        "value": "a",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Space]": {
        "name": "Table Space",
        "value": "shxu",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Table Type]": {
        "name": "Table Type",
        "value": "1",
        "type": "int32",
        "resolvedLocation": "object"
      }
    }
  }
}
```

Response Code: 200 (The datamart definition is returned successfully.)

## Retrieve a datamart definition with advanced properties

This workflow sample demonstrates how to retrieve the definition of a datamart with advanced properties through the Modeling service.

This workflow is similar to Retrieve a Datamart Definition, except with showAdvancedProperties=true using GET /api/model/datamarts/{datamartId}.

If `showAdvancedProperties` is omitted or false, the advanced properties are not returned.

If `showAdvancedProperties` is true, the advanced properties are are returned.

Sample Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/CEA3C6FC4E6749C8F8B19580D16D2443?showAdvancedProperties=true' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: n64eqd6mi28ma3vp8tmf8b1jdg' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Body: You can view the Datamart's definition in the body of the response. Below is an example of filter in “text“ and “tree“ formats.

```json
{
  "information": {
    "dateCreated": "2022-09-08T10:03:46.524Z",
    "dateModified": "2022-09-08T10:03:46.524Z",
    "versionId": "53A787E94D62295045F546A0F9F3A8DE",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "E552D3CE48D2FE0ECC1D42BB71B3BD76",
    "subType": "report_datamart",
    "name": "DMR advanced properties"
  },
  "sourceType": "normal",
  "dataSource": {
    "dataTemplate": {
      "units": [
        {
          "id": "8D679D3711D3E4981000E787EC6DE8A4",
          "name": "Category",
          "type": "attribute"
        },
        {
          "id": "8D679D4F11D3E4981000E787EC6DE8A4",
          "name": "Subcategory",
          "type": "attribute"
        },
        {
          "type": "metrics",
          "elements": [
            {
              "id": "1FAF96994873E7CEFC71BDB269522636",
              "name": "Profit Forecast",
              "subType": "metric"
            }
          ]
        }
      ]
    },
    "filter": {}
  },
  "datamartOptions": {
    "append": true,
    "targetSource": {
      "objectId": "05AC49F849389A20A6C9C19A3105A69B",
      "subType": "db_role",
      "name": "Statistics"
    },
    "tableName": "MD_TEST",
    "placeholderIncluded": true,
    "datamartProperties": {
      "[DatamartProperties].[Create Table Post String]": {
        "name": "Create Table Post String",
        "value": "",
        "type": "string",
        "resolvedLocation": "object"
      },
      "[DatamartProperties].[Insert SQLs]": {
        "name": "Insert SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Maximum Execution Time]": {
        "name": "Maximum Execution Time",
        "value": "0",
        "type": "int32",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Maximum Rows]": {
        "name": "Maximum Rows",
        "value": "65536",
        "type": "int32",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Post SQLs]": {
        "name": "Post SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Pre SQLs]": {
        "name": "Pre SQLs",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Descriptor]": {
        "name": "Table Descriptor",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Option]": {
        "name": "Table Option",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Prefix]": {
        "name": "Table Prefix",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Qualifier]": {
        "name": "Table Qualifier",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Space]": {
        "name": "Table Space",
        "value": "",
        "type": "string",
        "resolvedLocation": "default"
      },
      "[DatamartProperties].[Table Type]": {
        "name": "Table Type",
        "value": "0",
        "type": "int32",
        "resolvedLocation": "default"
      }
    }
  },
  "advancedProperties": {
    "vldbProperties": {
      "[AnalyticalEngineProperties].[EvaluationOrdering]": {
        "name": "EvaluationOrdering",
        "value": "2",
        "type": "int32",
        "resolvedLocation": "report"
      },
      "[AnalyticalEngineProperties].[MetricLevelDetermination]": {
        "name": "MetricLevelDetermination",
        "value": "false",
        "type": "boolean",
        "resolvedLocation": "default"
      }
    },
    "metricJoinTypes": {
      "1FAF96994873E7CEFC71BDB269522636": {
        "metric": {
          "objectId": "1FAF96994873E7CEFC71BDB269522636",
          "subType": "metric",
          "name": "Profit Forecast"
        },
        "joinType": "inner",
        "resolvedLocation": "default"
      }
    },
    "attributeJoinTypes": {
      "8D679D3711D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Category"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      },
      "8D679D4F11D3E4981000E787EC6DE8A4": {
        "attribute": {
          "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",
          "subType": "attribute",
          "name": "Subcategory"
        },
        "noParticipationInPreserveRow": false,
        "resolvedLocation": "default"
      }
    },
    "useDefaultEvaluationOrder": true
  }
}
```

Response Code: 200 (The datamart definition is returned successfully.)
