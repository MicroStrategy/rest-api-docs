---
title: Update a transaction report's definition
description: This workflow sample demonstrates how to update a transaction report's definition.
---

<Available since="2021 Update 8" />

This workflow sample demonstrates how to update an existing transaction report's definition. You are allowed to modify the following parts:

- `description` in the `information` field;
- `id`, `name`, `dataType` and `required` of `columns` field. If you don't provide the `id`, a new column will be created, and don't forget to delete the reference `objectId` field of the attribute form or metric that is mapped to this column;
- SQL tree in the `sqlExpression` field;
- `id`, `name` (if `id` is provided, name changing will not take effect), `forms` and column reference of attributes.
- `id`, `name` (if `id` is provided, name changing will not take effect), and column reference of metrics.

In the previous workflow [Create a transaction report](create-a-transaction-report.md), we have successfully created a new transaction report, now we can use this API to do some modifications. You don't want to use the `MONTH_KEY` column anymore, so you delete this column in `columns` field, `sqlExpression` field, and delete the mapped attribute form `Month_I@ID` in the `attributes` field. You also want to use a new managed attribute's ID form to map to `Item_I (ID)` column, so you delete the `id` field of the attribute `Item_I`. Check the request body in the example for more details. Before using this API, you need to fetch authorization token to send correct request.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client.

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Endpoint: [PUT /api/model/transactionReports/{transactionReportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transaction%20Reports/ms-putTransactionReport)

Sample Request Header:

```json
"accept": "application/json"
"X-MSTR-AuthToken": "3alafjm0of25n86ku28vnubft1"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "information": {
    "dateCreated": "2022-11-16T02:31:21.691Z",
    "dateModified": "2022-11-16T02:31:21.691Z",
    "versionId": "089090544E85201798426BA82FAEA928",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "D2D43808411EE9CD8BC615AB8A0D61D1",
    "subType": "report_transaction",
    "name": "New Transaction SQL Report"
  },
  "table": {
    "physicalTable": {
      "columns": [
        {
          "id": "D550FCD9B3104023935842866B48D81E",
          "name": "Item_I (ID)",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "2CB365E8E1434E09BD8266B2FE9AFB82",
          "name": "Priority_Flag",
          "dataType": {
            "type": "fixed_length_string",
            "precision": 255,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "4E66C04A89064C18B348240660036A93",
          "name": "Delivery_Date",
          "dataType": {
            "type": "date",
            "precision": 6,
            "scale": 0
          },
          "required": false
        }
      ],
      "sqlExpression": {
        "tree": {
          "function": "concat_no_blank",
          "children": [
            {
              "function": "repeat",
              "functionProperties": [
                {
                  "name": "Distinct",
                  "value": {
                    "type": "boolean",
                    "value": "true"
                  }
                }
              ],
              "children": [
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": " \r\n\r\nUPDATE F_INVENTORY_ORDERS\r\nSET\r\nPRIORITY_FLAG = "
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "#1"
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": ",\r\n"
                  }
                },
                {
                  "function": "apply_optional",
                  "children": [
                    {
                      "type": "constant",
                      "variant": {
                        "type": "string",
                        "value": "DELIVERY_DATE =#2 \r\n"
                      }
                    }
                  ],
                  "type": "operator"
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "WHERE\r\n"
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "ITEM_KEY = "
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "#0"
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "\r\n\r\n"
                  }
                }
              ],
              "type": "operator"
            }
          ],
          "type": "operator"
        }
      }
    },
    "attributes": [
      {
        "name": "Item_I",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "D550FCD9B3104023935842866B48D81E",
                "name": "Item_I (ID)"
              }
            }
          }
        ]
      }
    ],
    "metrics": [
      {
        "id": "A1A0A7834AA1A0C79393E692E18C5369",
        "name": "Priority_Flag",
        "dataType": {
          "type": "fixed_length_string",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "2CB365E8E1434E09BD8266B2FE9AFB82",
            "name": "Priority_Flag"
          }
        }
      },
      {
        "id": "D48B3EE94649A881B28C9FB967BE3B14",
        "name": "Delivery_Date",
        "dataType": {
          "type": "date",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "4E66C04A89064C18B348240660036A93",
            "name": "Delivery_Date"
          }
        }
      }
    ],
    "dataSource": {
      "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",
      "subType": "db_role",
      "name": "Operational Datamart"
    }
  }
}
```

Sample Curl:

```bash
curl -X PUT '10.23.33.32:8080/MicroStrategyLibrary/api/model/transactionReports/D2D43808411EE9CD8BC615AB8A0D61D1' -H 'X-MSTR-AuthToken: 3alafjm0of25n86ku28vnubft1' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'Content-Type: application/json' -H 'Cookie: JSESSIONID=F13B1C3F6CAC20D4A37680C58AD0BB5D; iSession=3alafjm0of25n86ku28vnubft1' --data-raw '{
    "information": {
        "dateCreated": "2022-11-16T02:31:21.691Z",
        "dateModified": "2022-11-16T02:31:21.691Z",
        "versionId": "089090544E85201798426BA82FAEA928",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "D2D43808411EE9CD8BC615AB8A0D61D1",
        "subType": "report_transaction",
        "name": "New Transaction SQL Report"
    },
    "table": {
        "physicalTable": {
            "columns": [
                {
                    "id": "D550FCD9B3104023935842866B48D81E",
                    "name": "Item_I (ID)",
                    "dataType": {
                        "type": "integer",
                        "precision": 4,
                        "scale": 0
                    },
                    "required": true
                },
                {
                    "id": "2CB365E8E1434E09BD8266B2FE9AFB82",
                    "name": "Priority_Flag",
                    "dataType": {
                        "type": "fixed_length_string",
                        "precision": 255,
                        "scale": 0
                    },
                    "required": true
                },
                {
                    "id": "4E66C04A89064C18B348240660036A93",
                    "name": "Delivery_Date",
                    "dataType": {
                        "type": "date",
                        "precision": 6,
                        "scale": 0
                    },
                    "required": false
                }
            ],
            "sqlExpression": {
                "tree": {
                    "function": "concat_no_blank",
                    "children": [
                        {
                            "function": "repeat",
                            "functionProperties": [
                                {
                                    "name": "Distinct",
                                    "value": {
                                        "type": "boolean",
                                        "value": "true"
                                    }
                                }
                            ],
                            "children": [
                                {
                                    "type": "constant",
                                    "variant": {
                                        "type": "string",
                                        "value": " \r\n\r\nUPDATE F_INVENTORY_ORDERS\r\nSET\r\nPRIORITY_FLAG = "
                                    }
                                },
                                {
                                    "type": "constant",
                                    "variant": {
                                        "type": "string",
                                        "value": "#1"
                                    }
                                },
                                {
                                    "type": "constant",
                                    "variant": {
                                        "type": "string",
                                        "value": ",\r\n"
                                    }
                                },
                                {
                                    "function": "apply_optional",
                                    "children": [
                                        {
                                            "type": "constant",
                                            "variant": {
                                                "type": "string",
                                                "value": "DELIVERY_DATE =#2 \r\n"
                                            }
                                        }
                                    ],
                                    "type": "operator"
                                },
                                {
                                    "type": "constant",
                                    "variant": {
                                        "type": "string",
                                        "value": "WHERE\r\n"
                                    }
                                },
                                {
                                    "type": "constant",
                                    "variant": {
                                        "type": "string",
                                        "value": "ITEM_KEY = "
                                    }
                                },
                                {
                                    "type": "constant",
                                    "variant": {
                                        "type": "string",
                                        "value": "#0"
                                    }
                                },
                                {
                                    "type": "constant",
                                    "variant": {
                                        "type": "string",
                                        "value": "\r\n\r\n"
                                    }
                                }
                            ],
                            "type": "operator"
                        }
                    ],
                    "type": "operator"
                }
            }
        },
        "attributes": [
            {
                "name": "Item_I",
                "forms": [
                    {
                        "id": "45C11FA478E745FEA08D781CEA190FE5",
                        "name": "ID",
                        "category": "ID",
                        "type": "system",
                        "displayFormat": "number",
                        "expression": {
                            "tree": {
                                "type": "column_reference",
                                "objectId": "D550FCD9B3104023935842866B48D81E",
                                "name": "Item_I (ID)"
                            }
                        }
                    }
                ]
            }
        ],
        "metrics": [
            {
                "id": "A1A0A7834AA1A0C79393E692E18C5369",
                "name": "Priority_Flag",
                "dataType": {
                    "type": "fixed_length_string",
                    "precision": 0,
                    "scale": 0
                },
                "expression": {
                    "tree": {
                        "type": "column_reference",
                        "objectId": "2CB365E8E1434E09BD8266B2FE9AFB82",
                        "name": "Priority_Flag"
                    }
                }
            },
            {
                "id": "D48B3EE94649A881B28C9FB967BE3B14",
                "name": "Delivery_Date",
                "dataType": {
                    "type": "date",
                    "precision": 0,
                    "scale": 0
                },
                "expression": {
                    "tree": {
                        "type": "column_reference",
                        "objectId": "4E66C04A89064C18B348240660036A93",
                        "name": "Delivery_Date"
                    }
                }
            }
        ],
        "dataSource": {
            "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",
            "subType": "db_role",
            "name": "Operational Datamart"
        }
    }
}'
```

Sample Response Body:

You can view the transaction report's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-11-16T02:31:21.691Z",
    "dateModified": "2022-11-16T09:27:12.187Z",
    "versionId": "2CFFB4954DE48837DEEEDA8D585345CC",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "D2D43808411EE9CD8BC615AB8A0D61D1",
    "subType": "report_transaction",
    "name": "New Transaction SQL Report",
    "description": "heihei",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "table": {
    "physicalTable": {
      "columns": [
        {
          "id": "D550FCD9B3104023935842866B48D81E",
          "name": "Item_I (ID)",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "2CB365E8E1434E09BD8266B2FE9AFB82",
          "name": "Priority_Flag",
          "dataType": {
            "type": "fixed_length_string",
            "precision": 255,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "4E66C04A89064C18B348240660036A93",
          "name": "Delivery_Date",
          "dataType": {
            "type": "date",
            "precision": 6,
            "scale": 0
          },
          "required": false
        }
      ],
      "sqlExpression": {
        "tree": {
          "function": "concat_no_blank",
          "children": [
            {
              "function": "repeat",
              "functionProperties": [
                {
                  "name": "Distinct",
                  "value": {
                    "type": "boolean",
                    "value": "true"
                  }
                }
              ],
              "children": [
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": " \r\n\r\nUPDATE F_INVENTORY_ORDERS\r\nSET\r\nPRIORITY_FLAG = "
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "#1"
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": ",\r\n"
                  }
                },
                {
                  "function": "apply_optional",
                  "children": [
                    {
                      "type": "constant",
                      "variant": {
                        "type": "string",
                        "value": "DELIVERY_DATE =#2 \r\n"
                      }
                    }
                  ],
                  "type": "operator"
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "WHERE\r\n"
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "ITEM_KEY = "
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "#0"
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "\r\n\r\n"
                  }
                }
              ],
              "type": "operator"
            }
          ],
          "type": "operator"
        }
      }
    },
    "attributes": [
      {
        "id": "8C79A47F197C43C79E313A40A35950D4",
        "name": "Item_I",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "D550FCD9B3104023935842866B48D81E",
                "name": "Item_I (ID)"
              }
            }
          }
        ]
      }
    ],
    "metrics": [
      {
        "id": "A1A0A7834AA1A0C79393E692E18C5369",
        "name": "Priority_Flag",
        "dataType": {
          "type": "fixed_length_string",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "2CB365E8E1434E09BD8266B2FE9AFB82",
            "name": "Priority_Flag"
          }
        }
      },
      {
        "id": "D48B3EE94649A881B28C9FB967BE3B14",
        "name": "Delivery_Date",
        "dataType": {
          "type": "date",
          "precision": 0,
          "scale": 0
        },
        "expression": {
          "tree": {
            "type": "column_reference",
            "objectId": "4E66C04A89064C18B348240660036A93",
            "name": "Delivery_Date"
          }
        }
      }
    ],
    "dataSource": {
      "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",
      "subType": "db_role",
      "name": "Operational Datamart"
    }
  }
}
```

Response Code: 200 (The transaction report's definition is updated successfully.)
