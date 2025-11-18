---
title: Create and update a metric embedded object
description: This workflow demonstrates how to create and update a metric embedded object using REST API.
---

<Available since="Strategy ONE (October 2025)" />

This workflow sample demonstrates how to create and update a metric embedded object using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a metric embedded object

Endpoint: [POST /api/model/dataModels/\{dataModelId\}/metrics/\{metricId\}/embeddedObjects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/postDataModelMetricEmbeddedObject)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 4E8D3C2F1C4B4E6E8C8F7A9B6D5E4C3B'
```

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/9345A3B387441C5E30E3338A5486BCE5/metrics/765C2AF2E8C9479F86FB917B0491EF1C/embeddedObjects' \
-H 'X-MSTR-AuthToken: ujv2agc3532ha8ukp8fb2unpiu' \
-H 'X-MSTR-MS-Changeset: 693B5EBB1E5D431192096D19C1DB727A' \
-H 'Content-Type: application/json' \
-d '{
    "subType": "filter",
    "qualification": {
        "tree": {
            "type": "predicate_relationship",
            "predicateTree": {
                "isIndependent": 1,
                "level": [
                    {
                        "objectId": "66B218EE474DA80FFA78E2888559BEFB",
                        "subType": "attribute"
                    }
                ],
                "guide": {
                    "objectId": "D00AC8903A419BA5B50091BC9DC3EB56",
                    "subType": "fact_metric"
                }
            },
            "children": [
                {
                    "type": "predicate_form_qualification",
                    "predicateTree": {
                        "function": "greater",
                        "parameters": [
                            {
                                "parameterType": "constant",
                                "constant": {
                                    "type": "int32",
                                    "value": "2010"
                                }
                            }
                        ],
                        "attribute": {
                            "objectId": "66B218EE474DA80FFA78E2888559BEFB",
                            "subType": "attribute"
                        },
                        "form": {
                            "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                            "subType": "attribute_form_system",
                            "name": "ID"
                        },
                        "dataLocale": ""
                    }
                }
            ]
        }
    }
}'
```

Sample Response

- Response Body:

```json
{
  "id": "F0826F8706A540CAB2380EBCD9D83B9E",
  "subType": "filter",
  "qualification": {
    "text": "(Year where (Year (Year) > 2010) Relate by {On-Time Flights})",
    "tree": {
      "type": "predicate_relationship",
      "predicateId": "B80C438D90CB4DFBB22C4B5BB1FC53A4",
      "predicateTree": {
        "level": [
          {
            "objectId": "66B218EE474DA80FFA78E2888559BEFB",
            "subType": "attribute",
            "name": "Year"
          }
        ],
        "guide": {
          "objectId": "D00AC8903A419BA5B50091BC9DC3EB56",
          "subType": "fact_metric",
          "name": "On-Time Flights"
        },
        "isIndependent": 1
      },
      "children": [
        {
          "type": "predicate_form_qualification",
          "predicateId": "6154744C40884C53AD34318CBF5B0B04",
          "predicateText": "(Year (Year) > 2010)",
          "predicateTree": {
            "function": "greater",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "int32",
                  "value": "2010"
                }
              }
            ],
            "attribute": {
              "objectId": "66B218EE474DA80FFA78E2888559BEFB",
              "subType": "attribute",
              "name": "Year"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "Year"
            },
            "dataLocale": ""
          }
        }
      ]
    }
  }
}
```

- Response Code: 201 (Success: Created)

## Update a metric embedded object

Endpoint: [PUT /api/model/dataModels/\{dataModelId}/metrics/\{metricId}/embeddedObjects/\{embeddedObjectId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelMetricEmbeddedObjects)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 4E8D3C2F1C4B4E6E8C8F7A9B6D5E4C3B'
```

- Curl

```bash
curl -L -X PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/9345A3B387441C5E30E3338A5486BCE5/metrics/765C2AF2E8C9479F86FB917B0491EF1C/embeddedObjects/88AD3CF858884A8DBD87E0FD87F2F24B' \
-H 'X-MSTR-AuthToken: ujv2agc3532ha8ukp8fb2unpiu' \
-H 'X-MSTR-MS-Changeset: 693B5EBB1E5D431192096D19C1DB727A' \
-H 'Content-Type: application/json' \
-H 'Cookie: JSESSIONID=AB0848052B6C47D19F2B73B44E2ACD43; iSession=ujv2agc3532ha8ukp8fb2unpiu; MSTRDEVICEID=6D0C8A89BC844B38AF1E4974D15AC76C; library-ingress="4be3345f9a169478"' \
-d '{
    "qualification": {
        "tree": {
            "type": "predicate_relationship",
            "predicateTree": {
                "isIndependent": 1,
                "level": [
                    {
                        "objectId": "66B218EE474DA80FFA78E2888559BEFB",
                        "subType": "attribute"
                    }
                ],
                "guide": {
                    "objectId": "D00AC8903A419BA5B50091BC9DC3EB56",
                    "subType": "fact_metric",
                    "name": "New Dataset Table"
                }
            },
            "children": [
                {
                    "type": "predicate_form_qualification",
                    "predicateTree": {
                        "function": "less",
                        "parameters": [
                            {
                                "parameterType": "constant",
                                "constant": {
                                    "type": "int32",
                                    "value": "2020"
                                }
                            }
                        ],
                        "attribute": {
                            "objectId": "66B218EE474DA80FFA78E2888559BEFB",
                            "subType": "attribute"
                        },
                        "form": {
                            "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                            "subType": "attribute_form_system",
                            "name": "ID"
                        },
                        "dataLocale": ""
                    }
                }
            ]
        }
    }
}'
```

Sample Response

- Response Body:

```json
{
  "id": "F0826F8706A540CAB2380EBCD9D83B9E",
  "subType": "filter",
  "qualification": {
    "text": "(Year where (Year (Year) < 2020) Relate by {On-Time Flights})",
    "tree": {
      "type": "predicate_relationship",
      "predicateId": "CF872293268F46FCB412D4DE804DA562",
      "predicateTree": {
        "level": [
          {
            "objectId": "66B218EE474DA80FFA78E2888559BEFB",
            "subType": "attribute",
            "name": "Year"
          }
        ],
        "guide": {
          "objectId": "D00AC8903A419BA5B50091BC9DC3EB56",
          "subType": "fact_metric",
          "name": "On-Time Flights"
        },
        "isIndependent": 1
      },
      "children": [
        {
          "type": "predicate_form_qualification",
          "predicateId": "57934D97CA784533A182143F49AB4558",
          "predicateText": "(Year (Year) < 2020)",
          "predicateTree": {
            "function": "less",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "int32",
                  "value": "2020"
                }
              }
            ],
            "attribute": {
              "objectId": "66B218EE474DA80FFA78E2888559BEFB",
              "subType": "attribute",
              "name": "Year"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "Year"
            },
            "dataLocale": ""
          }
        }
      ]
    }
  }
}
```

- Response Code: 200 (Success: OK)
