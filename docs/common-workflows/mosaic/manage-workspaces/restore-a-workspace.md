---
title: Restore a workspace
description: This workflow demonstrates how to restore a workspace using REST API.
---

<Available since="Strategy (October 2025)" />

This workflow sample demonstrates how to restore a workspace using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can restore an existing workspace by specifying the full definition of the pipelines in the workspace request body and you can update it, as needed.

Endpoint: [POST /api/dataServer/workspaces](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/postWorkspace)

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
curl -L 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces' \
-H 'X-MSTR-AuthToken: 1maet46058o01842068n55llko' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{
    "pipelines": [
        {
            "id": "658E7AF4CA4D4DA1A9664B2474513EB0",
            "rootTable": {
                "id": "D2D02127E4E547B6A7B6679E7B68FD7C",
                "type": "root",
                "children": [
                    {
                        "columns": [
                            {
                                "id": "D2E036E4D3904D948EBF117288A56F20",
                                "name": "day_date",
                                "dataType": {
                                    "type": "time_stamp",
                                    "precision": 26,
                                    "scale": 6
                                },
                                "sourceDataType": {
                                    "type": "time_stamp",
                                    "precision": 26,
                                    "scale": 6
                                }
                            },
                            {
                                "id": "070105D731E340FCACB7935970EE095A",
                                "name": "call_ctr_id",
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
                                "id": "5F661515367E47E7B0B3F286825A82B8",
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
                                "id": "A21841BAF27B40099873E901F42C2230",
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
                                "id": "F347450D180B4C058AAD7D9BDAD4EF7C",
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
                                "id": "E5D4E7C3F4F149538D948C6F3D1A9EA2",
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
                            },
                            {
                                "id": "F3214AB149974F259E6D40FE0CE98260",
                                "name": "gross_dollar_sales_1",
                                "dataType": {
                                    "type": "utf8_char",
                                    "precision": 0,
                                    "scale": 0
                                },
                                "sourceDataType": {
                                    "type": "utf8_char",
                                    "precision": 0,
                                    "scale": 0
                                }
                            }
                        ],
                        "id": "47F24D9FF0BC4A10B6BBE631B2D13AC9",
                        "name": "day_ctr_sls",
                        "type": "wrangle",
                        "operations": [
                            {
                                "id": "eb032e75fe00413caa9613bb72c9dcd4",
                                "op": "mergeColumns",
                                "category": "merge",
                                "source": "manual",
                                "description": "Merge columns to [gross_dollar_sales]",
                                "analyzed": true,
                                "newColumnName": "gross_dollar_sales_1",
                                "newColumnId": "F3214AB149974F259E6D40FE0CE98260",
                                "columnNames": [
                                    "gross_dollar_sales",
                                    "call_ctr_id"
                                ],
                                "glue": " "
                            }
                        ],
                        "children": [
                            {
                                "columns": [
                                    {
                                        "id": "D2E036E4D3904D948EBF117288A56F20",
                                        "name": "day_date",
                                        "dataType": {
                                            "type": "time_stamp",
                                            "precision": 26,
                                            "scale": 6
                                        },
                                        "sourceDataType": {
                                            "type": "time_stamp",
                                            "precision": 26,
                                            "scale": 6
                                        }
                                    },
                                    {
                                        "id": "070105D731E340FCACB7935970EE095A",
                                        "name": "call_ctr_id",
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
                                        "id": "5F661515367E47E7B0B3F286825A82B8",
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
                                        "id": "A21841BAF27B40099873E901F42C2230",
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
                                        "id": "F347450D180B4C058AAD7D9BDAD4EF7C",
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
                                        "id": "E5D4E7C3F4F149538D948C6F3D1A9EA2",
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
                                    "tableName": "day_ctr_sls",
                                    "sql": ""
                                },
                                "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"day_date\",\"type\":\"timestamp\",\"nullable\":true,\"metadata\":{\"precision\":26,\"dssType\":\"time_stamp\",\"name\":\"day_date\",\"scale\":6}},{\"name\":\"call_ctr_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"call_ctr_id\",\"scale\":0}},{\"name\":\"tot_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_dollar_sales\",\"scale\":998}},{\"name\":\"tot_unit_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_unit_sales\",\"scale\":998}},{\"name\":\"tot_cost\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_cost\",\"scale\":998}},{\"name\":\"gross_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"gross_dollar_sales\",\"scale\":998}}]}",
                                "id": "1676439C8B2D4784B29B2C0FA488AAA0",
                                "name": "day_ctr_sls",
                                "type": "source"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "id": "A45CFC1C2004425CB2F6138E2E6A7575",
            "rootTable": {
                "id": "5239E93D5AB74DB5ABE162AA2FD19D02",
                "type": "root",
                "children": [
                    {
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
                            "sql": ""
                        },
                        "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"item_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"item_id\",\"scale\":0}},{\"name\":\"month_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":10,\"dssType\":\"integer\",\"name\":\"month_id\",\"scale\":0}},{\"name\":\"tot_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_dollar_sales\",\"scale\":998}},{\"name\":\"tot_unit_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_unit_sales\",\"scale\":998}},{\"name\":\"tot_cost\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_cost\",\"scale\":998}},{\"name\":\"gross_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"gross_dollar_sales\",\"scale\":998}}]}",
                        "id": "BA5C182DC15C4C00AA85A73EBB0C081A",
                        "name": "item_mnth_sls",
                        "type": "source"
                    }
                ]
            }
        }
    ],
    "sampling": {
        "type": "first",
        "rowCount": 1000
    }
}'
```

Sample Response

- Response Body:

```json
{
  "id": "0C7271FE77164069B771D864BC752C6E",
  "sampling": {
    "type": "first",
    "rowCount": 1000
  },
  "dateCreated": "2025-09-25T02:39:14.487691972Z",
  "dateModified": "2025-09-25T02:39:14.487703664Z",
  "datasetServeMode": "in_memory",
  "dssHost": "",
  "dssPort": 0,
  "pipelines": [
    {
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
    },
    {
      "id": "658E7AF4CA4D4DA1A9664B2474513EB0",
      "rootTable": {
        "id": "D2D02127E4E547B6A7B6679E7B68FD7C",
        "type": "root",
        "children": [
          {
            "id": "47F24D9FF0BC4A10B6BBE631B2D13AC9",
            "name": "day_ctr_sls",
            "type": "wrangle",
            "columns": [
              {
                "id": "D2E036E4D3904D948EBF117288A56F20",
                "name": "day_date",
                "dataType": {
                  "type": "time_stamp",
                  "precision": 26,
                  "scale": 6
                },
                "sourceDataType": {
                  "type": "time_stamp",
                  "precision": 26,
                  "scale": 6
                }
              },
              {
                "id": "070105D731E340FCACB7935970EE095A",
                "name": "call_ctr_id",
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
                "id": "5F661515367E47E7B0B3F286825A82B8",
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
                "id": "A21841BAF27B40099873E901F42C2230",
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
                "id": "F347450D180B4C058AAD7D9BDAD4EF7C",
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
                "id": "E5D4E7C3F4F149538D948C6F3D1A9EA2",
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
              },
              {
                "id": "F3214AB149974F259E6D40FE0CE98260",
                "name": "gross_dollar_sales_1",
                "dataType": {
                  "type": "utf8_char",
                  "precision": 0,
                  "scale": 0
                },
                "sourceDataType": {
                  "type": "utf8_char",
                  "precision": 0,
                  "scale": 0
                }
              }
            ],
            "operations": [
              {
                "id": "eb032e75fe00413caa9613bb72c9dcd4",
                "op": "mergeColumns",
                "category": "merge",
                "source": "manual",
                "description": "Merge columns to [gross_dollar_sales]",
                "analyzed": true,
                "newColumnName": "gross_dollar_sales_1",
                "newColumnId": "F3214AB149974F259E6D40FE0CE98260",
                "columnNames": ["gross_dollar_sales", "call_ctr_id"],
                "glue": " "
              }
            ],
            "children": [
              {
                "id": "1676439C8B2D4784B29B2C0FA488AAA0",
                "name": "day_ctr_sls",
                "type": "source",
                "columns": [
                  {
                    "id": "D2E036E4D3904D948EBF117288A56F20",
                    "name": "day_date",
                    "dataType": {
                      "type": "time_stamp",
                      "precision": 26,
                      "scale": 6
                    },
                    "sourceDataType": {
                      "type": "time_stamp",
                      "precision": 26,
                      "scale": 6
                    }
                  },
                  {
                    "id": "070105D731E340FCACB7935970EE095A",
                    "name": "call_ctr_id",
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
                    "id": "5F661515367E47E7B0B3F286825A82B8",
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
                    "id": "A21841BAF27B40099873E901F42C2230",
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
                    "id": "F347450D180B4C058AAD7D9BDAD4EF7C",
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
                    "id": "E5D4E7C3F4F149538D948C6F3D1A9EA2",
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
                  "tableName": "day_ctr_sls",
                  "sql": "",
                  "filterString": ""
                },
                "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"day_date\",\"type\":\"timestamp\",\"nullable\":true,\"metadata\":{\"precision\":26,\"dssType\":\"time_stamp\",\"name\":\"day_date\",\"scale\":6}},{\"name\":\"call_ctr_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"call_ctr_id\",\"scale\":0}},{\"name\":\"tot_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_dollar_sales\",\"scale\":998}},{\"name\":\"tot_unit_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_unit_sales\",\"scale\":998}},{\"name\":\"tot_cost\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"tot_cost\",\"scale\":998}},{\"name\":\"gross_dollar_sales\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":1000,\"dssType\":\"double\",\"name\":\"gross_dollar_sales\",\"scale\":998}}]}"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

- Response Code: 201 (Success: Created)
