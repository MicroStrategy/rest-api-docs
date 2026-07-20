---
title: Create, retrieve, update, and delete a pipeline
description: This workflow demonstrates how to create, retrieve, update, and delete a pipeline using REST API.
---

<Available since="Strategy (October 2025)" />

This workflow sample demonstrates how to create, retrieve, update, and delete a pipeline using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

Pipeline is the main component in a workspace, which defines a root table. The child of the root table can be a source table or a wrangle table.

## Create an empty pipeline

Endpoint: [POST /api/dataServer/workspaces/\{workspaceId}/pipelines](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/createPipeline)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/1230A03B66734BDE96236391F836AB43/pipelines' \
-H 'X-MSTR-AuthToken: 34jp6e0j4sahqd8ttedqe800ed' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{}'
```

Sample Response

- Response Body:

```json
{
  "id": "5EF18E2548AD40E89C41E574126A7758",
  "rootTable": {
    "id": "87C403052D3A41299F3813D45FFE92F6",
    "type": "root",
    "children": []
  }
}
```

- Response Code: 201 (Success: Created)

## Update a pipeline

Endpoint: [PATCH /api/dataServer/workspaces/\{workspaceId}/pipelines/\{pipelineId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/updatePipeline)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/1230A03B66734BDE96236391F836AB43/pipelines/5EF18E2548AD40E89C41E574126A7758' \
-H 'X-MSTR-AuthToken: 34jp6e0j4sahqd8ttedqe800ed' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{
    "id": "A45CFC1C2004425CB2F6138E2E6A7575",
    "rootTable": {
        "id": "5239E93D5AB74DB5ABE162AA2FD19D02",
        "type": "root",
        "children": [
            {
                "id": "BA5C182DC15C4C00AA85A73EBB0C081A",
                "name": "item_mnth_sls",
                "type": "source",
                "columns": [
                    {
                        "id": "CDD9AD8EA17E400A93759A3EAD7FA377",
                        "name": "item_id",
                        "dataType": {
                            "type": "integer",
                            "precision": 2,
                            "scale": 0
                        },
                        "sourceDataType": {
                            "type": "integer",
                            "precision": 2,
                            "scale": 0
                        }
                    },
                    {
                        "id": "90A2E151F50A4C13A18D300CCEF64DCA",
                        "name": "month_id",
                        "dataType": {
                            "type": "integer",
                            "precision": 4,
                            "scale": 0
                        },
                        "sourceDataType": {
                            "type": "integer",
                            "precision": 4,
                            "scale": 0
                        }
                    },
                    {
                        "id": "F27737BAAF64414CA8B2B45F0FC3D949",
                        "name": "tot_dollar_sales",
                        "dataType": {
                            "type": "double",
                            "precision": 1000,
                            "scale": 998
                        },
                        "sourceDataType": {
                            "type": "double",
                            "precision": 1000,
                            "scale": 998
                        }
                    },
                    {
                        "id": "95BEB2D7E167480F8B0C258A494F5631",
                        "name": "tot_unit_sales",
                        "dataType": {
                            "type": "double",
                            "precision": 1000,
                            "scale": 998
                        },
                        "sourceDataType": {
                            "type": "double",
                            "precision": 1000,
                            "scale": 998
                        }
                    },
                    {
                        "id": "96B6744A5CAF40E7A70769182EEF019B",
                        "name": "tot_cost",
                        "dataType": {
                            "type": "double",
                            "precision": 1000,
                            "scale": 998
                        },
                        "sourceDataType": {
                            "type": "double",
                            "precision": 1000,
                            "scale": 998
                        }
                    },
                    {
                        "id": "9B538947DDFF4394829125558EB2D688",
                        "name": "gross_dollar_sales",
                        "dataType": {
                            "type": "double",
                            "precision": 1000,
                            "scale": 998
                        },
                        "sourceDataType": {
                            "type": "double",
                            "precision": 1000,
                            "scale": 998
                        }
                    }
                ],
                "importSource": {
                    "type": "single_table",
                    "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
                    "namespace": "public",
                    "tableName": "item_mnth_sls",
                    "sql": "",
                    "filterString": ""
                },
                "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"item_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"item_id\",\"scale\":0}},{\"name\":\"month_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":10,\"dssType\":\"integer\",\"name\":\"month_id\",\"scale\":0}},{\"name\":\"tot_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_dollar_sales\",\"scale\":998}},{\"name\":\"tot_unit_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_unit_sales\",\"scale\":998}},{\"name\":\"tot_cost\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_cost\",\"scale\":998}},{\"name\":\"gross_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"gross_dollar_sales\",\"scale\":998}}]}"
            }
        ]
    }
}'
```

Sample Response

- Response Body:

```json
{
  "id": "5EF18E2548AD40E89C41E574126A7758",
  "rootTable": {
    "id": "5239E93D5AB74DB5ABE162AA2FD19D02",
    "type": "root",
    "children": [
      {
        "id": "BA5C182DC15C4C00AA85A73EBB0C081A",
        "name": "item_mnth_sls",
        "type": "source",
        "columns": [
          {
            "id": "CDD9AD8EA17E400A93759A3EAD7FA377",
            "name": "item_id",
            "dataType": {
              "type": "integer",
              "precision": 2,
              "scale": 0
            },
            "sourceDataType": {
              "type": "integer",
              "precision": 2,
              "scale": 0
            }
          },
          {
            "id": "90A2E151F50A4C13A18D300CCEF64DCA",
            "name": "month_id",
            "dataType": {
              "type": "integer",
              "precision": 4,
              "scale": 0
            },
            "sourceDataType": {
              "type": "integer",
              "precision": 4,
              "scale": 0
            }
          },
          {
            "id": "F27737BAAF64414CA8B2B45F0FC3D949",
            "name": "tot_dollar_sales",
            "dataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            },
            "sourceDataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            }
          },
          {
            "id": "95BEB2D7E167480F8B0C258A494F5631",
            "name": "tot_unit_sales",
            "dataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            },
            "sourceDataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            }
          },
          {
            "id": "96B6744A5CAF40E7A70769182EEF019B",
            "name": "tot_cost",
            "dataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            },
            "sourceDataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            }
          },
          {
            "id": "9B538947DDFF4394829125558EB2D688",
            "name": "gross_dollar_sales",
            "dataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            },
            "sourceDataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            }
          }
        ],
        "importSource": {
          "type": "single_table",
          "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
          "namespace": "public",
          "tableName": "item_mnth_sls",
          "sql": "",
          "filterString": ""
        },
        "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"item_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"item_id\",\"scale\":0}},{\"name\":\"month_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":10,\"dssType\":\"integer\",\"name\":\"month_id\",\"scale\":0}},{\"name\":\"tot_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_dollar_sales\",\"scale\":998}},{\"name\":\"tot_unit_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_unit_sales\",\"scale\":998}},{\"name\":\"tot_cost\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_cost\",\"scale\":998}},{\"name\":\"gross_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"gross_dollar_sales\",\"scale\":998}}]}"
      }
    ]
  }
}
```

- Response Code: 200 (Success: OK)

## Retrieve a pipeline

Endpoint: [GET /api/dataServer/workspaces/\{workspaceId}/pipelines/\{pipelineId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/getPipeline)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/1230A03B66734BDE96236391F836AB43/pipelines/5EF18E2548AD40E89C41E574126A7758' \
-H 'X-MSTR-AuthToken: 34jp6e0j4sahqd8ttedqe800ed' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "id": "5EF18E2548AD40E89C41E574126A7758",
  "rootTable": {
    "id": "5239E93D5AB74DB5ABE162AA2FD19D02",
    "type": "root",
    "children": [
      {
        "id": "BA5C182DC15C4C00AA85A73EBB0C081A",
        "name": "item_mnth_sls",
        "type": "source",
        "columns": [
          {
            "id": "CDD9AD8EA17E400A93759A3EAD7FA377",
            "name": "item_id",
            "dataType": {
              "type": "integer",
              "precision": 2,
              "scale": 0
            },
            "sourceDataType": {
              "type": "integer",
              "precision": 2,
              "scale": 0
            }
          },
          {
            "id": "90A2E151F50A4C13A18D300CCEF64DCA",
            "name": "month_id",
            "dataType": {
              "type": "integer",
              "precision": 4,
              "scale": 0
            },
            "sourceDataType": {
              "type": "integer",
              "precision": 4,
              "scale": 0
            }
          },
          {
            "id": "F27737BAAF64414CA8B2B45F0FC3D949",
            "name": "tot_dollar_sales",
            "dataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            },
            "sourceDataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            }
          },
          {
            "id": "95BEB2D7E167480F8B0C258A494F5631",
            "name": "tot_unit_sales",
            "dataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            },
            "sourceDataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            }
          },
          {
            "id": "96B6744A5CAF40E7A70769182EEF019B",
            "name": "tot_cost",
            "dataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            },
            "sourceDataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            }
          },
          {
            "id": "9B538947DDFF4394829125558EB2D688",
            "name": "gross_dollar_sales",
            "dataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            },
            "sourceDataType": {
              "type": "double",
              "precision": 1000,
              "scale": 998
            }
          }
        ],
        "importSource": {
          "type": "single_table",
          "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
          "namespace": "public",
          "tableName": "item_mnth_sls",
          "sql": "",
          "filterString": ""
        },
        "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"item_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"item_id\",\"scale\":0}},{\"name\":\"month_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":10,\"dssType\":\"integer\",\"name\":\"month_id\",\"scale\":0}},{\"name\":\"tot_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_dollar_sales\",\"scale\":998}},{\"name\":\"tot_unit_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_unit_sales\",\"scale\":998}},{\"name\":\"tot_cost\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_cost\",\"scale\":998}},{\"name\":\"gross_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"gross_dollar_sales\",\"scale\":998}}]}"
      }
    ]
  }
}
```

- Response Code: 200 (Success: OK)

## Delete a pipeline

Endpoint: [DELETE /api/dataServer/workspaces/\{workspaceId}/pipelines/\{pipelineId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/deletePipeline)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/1230A03B66734BDE96236391F836AB43/pipelines/5EF18E2548AD40E89C41E574126A7758' \
-H 'X-MSTR-AuthToken: 34jp6e0j4sahqd8ttedqe800ed' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body: (empty)

- Response Code: 204 (Success: No Content)
