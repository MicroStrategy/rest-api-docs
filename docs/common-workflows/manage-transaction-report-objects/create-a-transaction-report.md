---
title: Create a transaction report
description: This workflow sample demonstrates how to create a new transaction report object from scratch.
---

<Available since="2021 Update 8" />

This workflow sample demonstrates how to create a new transaction report object. Before following this workflow, you need to obtain authorization token and project ID.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client.

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

You want to create a new transaction SQL report and name it as `New Transaction SQL Report` in the destination folder of `D3C7D461F69C4610AA6BAA5EF51F4125`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`. You want to use the `Operational Datamart` as the datasource, whose ID is `BCB3836D4C70EDF53CB706ABA556B44B`. You want to update the `F_INVENTORY_ORDERS` table of that datasource.

You want to update column `PRIORITY_FLAG` using an existing metric `Priority_Flag`, and update column `DELEVERY_DATE` using existing metric `Delivery_Date`. The update is restricted under condition column `MONTH_KEY` equals the `ID` form of an existing attribute `Month_I`, and column `ITEM_KEY` equals a newly created attribute `Item_I`'s `ID` form. Note that in the request body, a managed metric or attribute will be created automatically if you don't provide metric or attribute ID. You can use any existing attribute, while only managed metrics are allowed to use. The SQL expression below helps you to understand the workflow:

```sql
Begin Transaction

UPDATE F_INVENTORY_ORDERS
SET
PRIORITY_FLAG=[Priority_Flag],
DELIVERY_DATE=[Delivery_Date]
WHERE
MONTH_KEY=[Month_I@ID]
AND ITEM_KEY=[Item_I@ID]

End Transaction
```

You need to translate the SQL expression to tree form in the later request body.

You don't want to update `DELIVERY_DATE` for every transaction, because sometimes there will be no data provided from the metric `Delivery_Date`. In this case, you can set the `required` field of `Delivery_Date` column to be `false`, and use `apply_optional` function over `,\r\nDELIVERY_DATE =#3 \r\n` (check the request body below for details). Note that you need to include the comma before the `Delivery_Date` so that this whole part can be correctly neglect when no data is provided from the metric.

Endpoint: [POST /api/model/transactionReports](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transaction%20Reports/ms-postTransactionReport)

Sample Request Header:

```json
"accept": "application/json"
"X-MSTR-AuthToken": "a513l5d5dmoi3q73ebdif6bm8n"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "information": {
    "name": "New Transaction SQL Report",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "table": {
    "physicalTable": {
      "columns": [
        {
          "name": "Month_I (ID)",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          },
          "required": true
        },
        {
          "name": "Item_I (ID)",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          },
          "required": true
        },
        {
          "name": "Priority_Flag",
          "dataType": {
            "type": "fixed_length_string",
            "precision": 255,
            "scale": 0
          },
          "required": true
        },
        {
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
                    "value": "#2"
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
                        "value": "DELIVERY_DATE =#3 \r\n"
                      }
                    }
                  ],
                  "type": "operator"
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "WHERE\r\nMONTH_KEY = "
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
                    "value": "\r\nAND ITEM_KEY = "
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
        "id": "B70B6F2B493F50026A21FDA043C63247",
        "name": "Month_I",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "name": "Month_I (ID)"
              }
            }
          }
        ]
      },
      {
        "name": "Item_I",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
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
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transactionReports' -H 'accept: application/json' -H 'X-MSTR-AuthToken: a513l5d5dmoi3q73ebdif6bm8n' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'Content-Type: application/json' --data-raw '{
    "information": {
        "name": "New Transaction SQL Report",
        "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
    },
    "table": {
        "physicalTable": {
            "columns": [
                {
                    "name": "Month_I (ID)",
                    "dataType": {
                        "type": "integer",
                        "precision": 4,
                        "scale": 0
                    },
                    "required": true
                },
                {
                    "name": "Item_I (ID)",
                    "dataType": {
                        "type": "integer",
                        "precision": 4,
                        "scale": 0
                    },
                    "required": true
                },
                {
                    "name": "Priority_Flag",
                    "dataType": {
                        "type": "fixed_length_string",
                        "precision": 255,
                        "scale": 0
                    },
                    "required": true
                },
                {
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
                                        "value": "#2"
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
                                                "value": "DELIVERY_DATE =#3 \r\n"
                                            }
                                        }
                                    ],
                                    "type": "operator"
                                },
                                {
                                    "type": "constant",
                                    "variant": {
                                        "type": "string",
                                        "value": "WHERE\r\nMONTH_KEY = "
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
                                        "value": "\r\nAND ITEM_KEY = "
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
                "id": "B70B6F2B493F50026A21FDA043C63247",
                "name": "Month_I",
                "forms": [
                    {
                        "id": "45C11FA478E745FEA08D781CEA190FE5",
                        "category": "ID",
                        "type": "system",
                        "displayFormat": "number",
                        "expression": {
                            "tree": {
                                "type": "column_reference",
                                "name": "Month_I (ID)"
                            }
                        }
                    }
                ]
            },
            {
                "name": "Item_I",
                "forms": [
                    {
                        "id": "45C11FA478E745FEA08D781CEA190FE5",
                        "category": "ID",
                        "type": "system",
                        "displayFormat": "number",
                        "expression": {
                            "tree": {
                                "type": "column_reference",
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

You can view the new transaction report's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-11-11T08:33:05.159Z",
    "dateModified": "2022-11-11T08:33:05.159Z",
    "versionId": "E10BA9CA4161C046AFA701BBAFCC0B2D",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "B35AA06E4E4B87F327383F9D49289A2B",
    "subType": "report_transaction",
    "name": "New Transaction SQL Report"
  },
  "table": {
    "physicalTable": {
      "columns": [
        {
          "id": "6EDE818EEB504D568D1058FE4FE50CD9",
          "name": "Month_I (ID)",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "E113DA634EB04EC8A0D53C8BAF264626",
          "name": "Item_I (ID)",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "DF6F7DED128A4A629CE541217E44D91A",
          "name": "Priority_Flag",
          "dataType": {
            "type": "fixed_length_string",
            "precision": 255,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "F32A843613FD450EBFC8DBE8CBE03663",
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
                    "value": "#2"
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
                        "value": "DELIVERY_DATE =#3 \r\n"
                      }
                    }
                  ],
                  "type": "operator"
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "WHERE\r\nMONTH_KEY = "
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
                    "value": "\r\nAND ITEM_KEY = "
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
        "id": "B70B6F2B493F50026A21FDA043C63247",
        "name": "Month_I",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "6EDE818EEB504D568D1058FE4FE50CD9",
                "name": "Month_I (ID)"
              }
            }
          }
        ]
      },
      {
        "id": "0EB1405452394FFABC1D4399DC662216",
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
                "objectId": "E113DA634EB04EC8A0D53C8BAF264626",
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
            "objectId": "DF6F7DED128A4A629CE541217E44D91A",
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
            "objectId": "F32A843613FD450EBFC8DBE8CBE03663",
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

Response Code: 201 (A transaction report is created successfully.)
