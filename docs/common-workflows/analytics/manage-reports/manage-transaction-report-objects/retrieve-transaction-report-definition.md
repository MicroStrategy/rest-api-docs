---
title: Retrieve a transaction report's definition
description: This workflow sample demonstrates how to retrieve a transaction report's definition.
---

<Available since="2021 Update 8" />

This workflow sample demonstrates how to retrieve an existing transaction report's definition.

You want to get the definition of the "Insert Sales Opportunity Action" transaction report. The object ID of the transaction report is `34D6AC79420AF8365B176480D411C3A9` in the "MicroStrategy Tutorial" project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`. You also need to fetch authorization token to send correct request.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client.

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Endpoint: [GET /api/model/transactionReports/{transactionReportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transaction%20Reports/ms-getTransactionReport)

Sample Request Header:

```json
"accept": "application/json"
"X-MSTR-AuthToken": "hiq010aleeadhllq0lodq7r6hb"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET '10.23.33.32:8080/MicroStrategyLibrary/api/model/transactionReports/34D6AC79420AF8365B176480D411C3A9' -H 'X-MSTR-AuthToken: hiq010aleeadhllq0lodq7r6hb' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'Cookie: JSESSIONID=73DAD31EF81161B92DE36CEC3B266F5C; iSession=hiq010aleeadhllq0lodq7r6hb'
```

Sample Response Body:

You can view the transaction SQL report's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2012-02-08T15:31:56.000Z",
    "dateModified": "2016-08-12T19:33:37.000Z",
    "versionId": "38056ADF4E34060FC452978075E52405",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "34D6AC79420AF8365B176480D411C3A9",
    "subType": "report_transaction",
    "name": "Insert Sales Opportunity Action"
  },
  "table": {
    "physicalTable": {
      "columns": [
        {
          "id": "1C591D1E49135023BF563889131620C8",
          "name": "Opportunity (ID)",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "576B04A54450ABD49383CEB49F9A23CC",
          "name": "Action (ID)",
          "dataType": {
            "type": "integer",
            "precision": 4,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "746A76B24F43297F8FCCE292F2635048",
          "name": "Action (DESC)",
          "dataType": {
            "type": "fixed_length_string",
            "precision": 255,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "05FA15DB4F6B8F7E81685FB480B877F1",
          "name": "Opportunity Status (ID)",
          "dataType": {
            "type": "fixed_length_string",
            "precision": 255,
            "scale": 0
          },
          "required": true
        },
        {
          "id": "F0C9155541F904CB9BDADB8EAC5E7612",
          "name": "Action Date (ID)",
          "dataType": {
            "type": "time_stamp",
            "precision": 6,
            "scale": 0
          },
          "required": true
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
                    "value": " \r\n\r\nINSERT INTO F_SALES_ACTIONS\r\nVALUES\r\n("
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
                    "value": ", "
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
                    "value": ", "
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
                    "value": ", "
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "#3"
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": ", "
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": "#4"
                  }
                },
                {
                  "type": "constant",
                  "variant": {
                    "type": "string",
                    "value": ")\r\n\r\n"
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
        "id": "82E57B1D48B416E10CD0CAB07A1D5613",
        "name": "Opportunity",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "1C591D1E49135023BF563889131620C8",
                "name": "Opportunity (ID)"
              }
            }
          }
        ]
      },
      {
        "id": "B11D0DB949462D5576E61A82D73C4594",
        "name": "Action",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "number",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "576B04A54450ABD49383CEB49F9A23CC",
                "name": "Action (ID)"
              }
            }
          },
          {
            "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
            "name": "DESC",
            "category": "DESC",
            "type": "system",
            "displayFormat": "text",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "746A76B24F43297F8FCCE292F2635048",
                "name": "Action (DESC)"
              }
            }
          }
        ]
      },
      {
        "id": "BA6A970D4EFB4D39CA4848A97C4301D7",
        "name": "Opportunity Status",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "text",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "05FA15DB4F6B8F7E81685FB480B877F1",
                "name": "Opportunity Status (ID)"
              }
            }
          }
        ]
      },
      {
        "id": "6D3C7BF94F042D9DB6B65A84EBB59D5A",
        "name": "Action Date",
        "forms": [
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "category": "ID",
            "type": "system",
            "displayFormat": "date_time",
            "expression": {
              "tree": {
                "type": "column_reference",
                "objectId": "F0C9155541F904CB9BDADB8EAC5E7612",
                "name": "Action Date (ID)"
              }
            }
          }
        ]
      }
    ],
    "metrics": [],
    "dataSource": {
      "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",
      "subType": "db_role",
      "name": "Operational Datamart"
    }
  }
}
```

Response Code: 200 (The transaction report's definition is returned successfully.)
