---
title: Update an attribute's definition
sidebar_label: Update an attribute's definition
description: This workflow sample demonstrates how to update an attribute's definition through the Modeling service.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0c9c449c-883d-4112-af6d-f14656ed5d30?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update an attribute's definition through the Modeling service.

You want to update the definition of the "Customer" attribute object under the Public Objects folder in the MicroStrategy Tutorial project. The attribute object ID is `5D6C76C3A3F548A0B9ADE5F9D2AA65C6` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Update the attribute's definition

Use [PATCH /api/model/attributes/{attributeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-updateAttribute).

You want to update the definition of the "Customer" attribute object under the Public Objects folder in the MicroStrategy Tutorial project by ungrouping the "Name" form group and adding a new form group "Email". The attribute object ID is `5D6C76C3A3F548A0B9ADE5F9D2AA65C6` in the MicroStrategy Tutorial project.

:::tip

To update an attribute, in the request body, "forms" contains the detailed definition of a list of attribute forms. Each attribute contains one or more attribute forms. Each attribute form contains:

- "expressions": A list of attribute form expressions. An attribute form contains one or more attribute form expressions. Each attribute form expression contains "expression" and "tables".

  - "expression": Must be in either "tree" or "tokens" format.

    Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let’s say an attribute form expression is "Year - 10". When the attribute form expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Year_ID", Year_column_ID), ("-", Minus_ID), ("10", Constant).

  - "tables": A list of tables that the "expression" applies to. Warehouse partition base tables and metadata partition mapping tables are not allowed here.

- "dataType" and "alias" are optional. If omitted, they can be calculated based on the first attribute form expression.
- "childForms" is specific to a form group, which contains the reference for child forms.

Provide a lookup table on either the attribute level or attribute form level, as it is required for the object to be committed to the metadata. A lookup table can be defined on the attribute level using "attributeLookupTable", or the attribute form level using "lookupTable". If "LookupTable" is defined at the attribute form level, it is used, or it falls back to "attributeLookupTable". Warehouse partition base tables and metadata partition mapping tables are not allowed to use in the lookup table.

Provide "keyForm" and "displays", as they are required for the attribute to be committed to the metadata.

Provide "destinationFolderId" in "information", as it is required for the attribute to be committed to the metadata.

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"
```

Construct the expression.

Make a copy of the following `"tokens"` format template and modify the `"attribute_form_expression"` to construct an expression.

```json
"expression":{
  "tokens":[
    {
      "value":"<attribute_form_expression>"
    }
  ]
}
```

Sample Request Body:

```json
{
  "information": {
    "subType": "attribute",
    "name": "Customer"
  },
  "forms": [
    {
      "name": "ID",
      "description": "Customer ID",
      "category": "ID",
      "displayFormat": "number",
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "CUSTOMER_ID"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "CUSTOMER_ID",
      "lookupTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      }
    },
    {
      "name": "Last Name",
      "description": "Customer Last Name",
      "category": "Customer DESC (1)",
      "displayFormat": "text",
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "CUST_LAST_NAME"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "CUST_LAST_NAME",
      "lookupTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      }
    },
    {
      "name": "First Name",
      "description": "Customer First Name",
      "category": "Customer DESC (2)",
      "displayFormat": "text",
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "CUST_FIRST_NAME"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "CUST_FIRST_NAME",
      "lookupTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      }
    },
    {
      "name": "Email",
      "category": "Customer Email None",
      "displayFormat": "text",
      "expressions": [
        {
          "expressionId": "8A29B203463142E586DF10CD572701A6",
          "expression": {
            "tokens": [
              {
                "value": "EMAIL"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "EMAIL",
      "lookupTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "8D67935611D3E4981000E787EC6DE8A4",
    "subType": "logical_table",
    "name": "LU_CUSTOMER"
  },
  "keyForm": {
    "name": "ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "name": "Last Name"
      },
      {
        "name": "First Name"
      }
    ],
    "browseDisplays": [
      {
        "name": "Last Name"
      },
      {
        "name": "First Name"
      }
    ]
  },
  "sorts": {
    "reportSorts": [
      {
        "form": {
          "name": "Last Name"
        },
        "ascending": true
      }
    ],
    "browseSorts": [
      {
        "form": {
          "name": "Last Name"
        },
        "ascending": true
      }
    ]
  }
}
```

Sample Curl:

In this sample workflow, you want to return the newly created attribute with its expression in all formats. Therefore, you should set `showExpressionAs=tree` and `showExpressionsAs=tokens`.

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/5D6C76C3A3F548A0B9ADE5F9D2AA65C6?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d "{\\"information\\":{\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer2 PATCH\\"},\\"forms\\":[{\\"name\\":\\"ID\\",\\"description\\":\\"Customer ID\\",\\"category\\":\\"ID\\",\\"displayFormat\\":\\"number\\",\\"expressions\\":[{\\"expression\\":{\\"tokens\\":[{\\"value\\":\\"CUSTOMER_ID\\"}]},\\"tables\\":[{\\"objectId\\":\\"8D67935611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_CUSTOMER\\"}]}],\\"alias\\":\\"CUSTOMER_ID\\",\\"lookupTable\\":{\\"objectId\\":\\"8D67935611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_CUSTOMER\\"}},{\\"name\\":\\"Last Name\\",\\"description\\":\\"Customer Last Name\\",\\"category\\":\\"Customer DESC (1)\\",\\"displayFormat\\":\\"text\\",\\"expressions\\":[{\\"expression\\":{\\"tokens\\":[{\\"value\\":\\"CUST_LAST_NAME\\"}]},\\"tables\\":[{\\"objectId\\":\\"8D67935611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_CUSTOMER\\"}]}],\\"alias\\":\\"CUST_LAST_NAME\\",\\"lookupTable\\":{\\"objectId\\":\\"8D67935611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_CUSTOMER\\"}},{\\"name\\":\\"First Name\\",\\"description\\":\\"Customer First Name\\",\\"category\\":\\"Customer DESC (2)\\",\\"displayFormat\\":\\"text\\",\\"expressions\\":[{\\"expression\\":{\\"tokens\\":[{\\"value\\":\\"CUST_FIRST_NAME\\"}]},\\"tables\\":[{\\"objectId\\":\\"8D67935611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_CUSTOMER\\"}]}],\\"alias\\":\\"CUST_FIRST_NAME\\",\\"lookupTable\\":{\\"objectId\\":\\"8D67935611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_CUSTOMER\\"}},{\\"name\\":\\"Email\\",\\"category\\":\\"Customer Email None\\",\\"displayFormat\\":\\"text\\",\\"expressions\\":[{\\"expressionId\\":\\"8A29B203463142E586DF10CD572701A6\\",\\"expression\\":{\\"tokens\\":[{\\"value\\":\\"EMAIL\\"}]},\\"tables\\":[{\\"objectId\\":\\"8D67935611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_CUSTOMER\\"}]}],\\"alias\\":\\"EMAIL\\",\\"lookupTable\\":{\\"objectId\\":\\"8D67935611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_CUSTOMER\\"}}],\\"attributeLookupTable\\":{\\"objectId\\":\\"8D67935611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_CUSTOMER\\"},\\"keyForm\\":{\\"name\\":\\"ID\\"},\\"displays\\":{\\"reportDisplays\\":[{\\"name\\":\\"Last Name\\"},{\\"name\\":\\"First Name\\"}],\\"browseDisplays\\":[{\\"name\\":\\"Last Name\\"},{\\"name\\":\\"First Name\\"}]},\\"sorts\\":{\\"reportSorts\\":[{\\"form\\":{\\"name\\":\\"Last Name\\"},\\"ascending\\":true}],\\"browseSorts\\":[{\\"form\\":{\\"name\\":\\"Last Name\\"},\\"ascending\\":true}]}}"
```

Sample Response Body:

You can view the attribute's new definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-03-23T12:34:42.637Z",
    "dateModified": "2021-03-23T12:34:42.637Z",
    "versionId": "3BC114F23A4DD92CFAB05CB66CAD3DA3",
    "primaryLocale": "en-US",
    "objectId": "5D6C76C3A3F548A0B9ADE5F9D2AA65C6",
    "subType": "attribute",
    "name": "Customer2 PATCH"
  },
  "forms": [
    {
      "id": "45C11FA478E745FEA08D781CEA190FE5",
      "name": "ID",
      "description": "Customer ID",
      "category": "ID",
      "type": "system",
      "displayFormat": "number",
      "dataType": {
        "type": "integer",
        "precision": 4,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "AA920D4EF8594C9486886A41ED958161",
          "expression": {
            "text": "CUSTOMER_ID",
            "tree": {
              "type": "column_reference",
              "columnName": "CUSTOMER_ID",
              "objectId": "BCC632AE4CDF6B07DCC33F8D39C2E06C"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "CUSTOMER_ID",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2015-07-09T15:22:56.000Z",
                  "dateModified": "2016-11-21T01:24:00.000Z",
                  "versionId": "2DEFC44811E6AF890ED50080EF55920E",
                  "primaryLocale": "en-US",
                  "objectId": "BCC632AE4CDF6B07DCC33F8D39C2E06C",
                  "subType": "column",
                  "name": "CUSTOMER_ID"
                }
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "",
                "type": "end_of_text"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "CUSTOMER_ID",
      "lookupTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      }
    },
    {
      "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",
      "name": "Last Name",
      "description": "Customer Last Name",
      "category": "Customer DESC (1)",
      "type": "system",
      "displayFormat": "text",
      "dataType": {
        "type": "n_var_char",
        "precision": 255,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "46130C090C8048D9A38C694FD9AD930B",
          "expression": {
            "text": "CUST_LAST_NAME",
            "tree": {
              "type": "column_reference",
              "columnName": "CUST_LAST_NAME",
              "objectId": "348C2C5848A48C788A0F50B424515880"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "CUST_LAST_NAME",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2015-07-09T15:22:56.000Z",
                  "dateModified": "2015-07-09T15:23:34.000Z",
                  "versionId": "13435FD5471D669840A02BAF676BA1CE",
                  "primaryLocale": "en-US",
                  "objectId": "348C2C5848A48C788A0F50B424515880",
                  "subType": "column",
                  "name": "CUST_LAST_NAME"
                }
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "",
                "type": "end_of_text"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "CUST_LAST_NAME",
      "lookupTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      }
    },
    {
      "id": "F12239D79AD04005B109B481AA5DDA81",
      "name": "First Name",
      "description": "Customer First Name",
      "category": "Customer DESC (2)",
      "type": "system",
      "displayFormat": "text",
      "dataType": {
        "type": "n_var_char",
        "precision": 255,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "CC474C8A56144057A51E187F60978587",
          "expression": {
            "text": "CUST_FIRST_NAME",
            "tree": {
              "type": "column_reference",
              "columnName": "CUST_FIRST_NAME",
              "objectId": "16239103447AA820899DF59BFF610798"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "CUST_FIRST_NAME",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2015-07-09T15:22:56.000Z",
                  "dateModified": "2015-07-09T15:23:34.000Z",
                  "versionId": "A2F2ED7E4689BB3846D7D2ABFD631903",
                  "primaryLocale": "en-US",
                  "objectId": "16239103447AA820899DF59BFF610798",
                  "subType": "column",
                  "name": "CUST_FIRST_NAME"
                }
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "",
                "type": "end_of_text"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "CUST_FIRST_NAME",
      "lookupTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      }
    },
    {
      "id": "27057DA7B0B7435A875108E38D2DD914",
      "name": "Email",
      "category": "Customer Email None",
      "type": "system",
      "displayFormat": "text",
      "dataType": {
        "type": "n_var_char",
        "precision": 50,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "627C94DFA84B450095484D6BA04D05B7",
          "expression": {
            "text": "EMAIL",
            "tree": {
              "type": "column_reference",
              "columnName": "EMAIL",
              "objectId": "1BE9C93F4FB40E92E23B8FAAC574C7A9"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "EMAIL",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2015-07-09T15:22:56.000Z",
                  "dateModified": "2016-08-18T19:29:48.000Z",
                  "versionId": "20099C2C11E6657A08D00080EF75BA15",
                  "primaryLocale": "en-US",
                  "objectId": "1BE9C93F4FB40E92E23B8FAAC574C7A9",
                  "subType": "column",
                  "name": "EMAIL"
                }
              },
              {
                "level": "resolved",
                "state": "initial",
                "value": "",
                "type": "end_of_text"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "EMAIL",
      "lookupTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "8D67935611D3E4981000E787EC6DE8A4",
    "subType": "logical_table",
    "name": "LU_CUSTOMER"
  },
  "keyForm": {
    "id": "45C11FA478E745FEA08D781CEA190FE5",
    "name": "ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",
        "name": "Last Name"
      },
      {
        "id": "F12239D79AD04005B109B481AA5DDA81",
        "name": "First Name"
      }
    ],
    "browseDisplays": [
      {
        "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",
        "name": "Last Name"
      },
      {
        "id": "F12239D79AD04005B109B481AA5DDA81",
        "name": "First Name"
      }
    ]
  },
  "sorts": {
    "reportSorts": [
      {
        "form": {
          "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",
          "name": "Last Name"
        },
        "ascending": true
      }
    ],
    "browseSorts": [
      {
        "form": {
          "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",
          "name": "Last Name"
        },
        "ascending": true
      }
    ]
  },
  "relationships": []
}
```

Response Code: 200 (The attribute's definition is updated successfully in the changeset.)
