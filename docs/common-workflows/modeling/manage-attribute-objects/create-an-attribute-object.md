---
title: Create an attribute object
sidebar_label: Create an attribute object
description: This workflow sample demonstrates how to create an attribute object through the Modeling service.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-fc30f1d1-7f8e-4bbb-8f27-7b66c67e6db6?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create an attribute object through the Modeling service.

You want to create a "Subcategory" attribute object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID of the attribute is `98FE182C2A10427EACE0CD30B6768258` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create an attribute object

Use [POST /api/model/attributes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-createAttribute).

You want to create a "Subcategory" attribute object with ID form and DESC form.

To create an attribute, in the request body, "forms" contains the detailed definition of a list of attribute forms. Each attribute contains one or more attribute forms. Each attribute form contains:

- "expressions": A list of attribute form expressions. An attribute form contains one or more attribute form expressions. Each attribute form expression contains "expression" and "tables".

- "expression": Must be in either "tree" or "tokens" format.

  Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let’s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).

- "tables": A list of tables that the "expression" applies to.

- "dataType" and "alias" are optional. If omitted, they can be calculated based on the first attribute form expression.
- "childForms" is specific to a form group, which contains the reference for child forms.

  Provide a lookup table on either the attribute level or attribute form level, as it is required for the object to be committed to the metadata. A lookup table can be defined on the attribute level using "attributeLookupTable", or the attribute form level using "lookupTable". If "LookupTable" is defined at the attribute form level, it is used, or it falls back to "attributeLookupTable".

  Provide "keyForm" and "displays", as they are required for the attribute to be committed to the metadata.

  Provide "destinationFolderId" in "information", as it is required for the attribute to be committed to the metadata.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"
```

Construct the expression.

Make a copy of the following "tokens" format template and modify the `"attribute_form_expression"` to construct an expression.

```json
{
  "expression": {
    "tokens": [
      {
        "value": "<attribute_form_expression>"
      }
    ]
  }
}
```

Sample Request Body:

```json
{
  "information": {
    "subType": "attribute",
    "name": "Subcategory",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "forms": [
    {
      "name": "ID",
      "description": "Subcategory ID",
      "category": "ID",
      "displayFormat": "number",
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "SUBCAT_ID"
              }
            ]
          },
          "tables": [
            {
              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",
              "subType": "logical_table",
              "name": "CITY_SUBCATEG_SLS"
            },
            {
              "objectId": "8D67937411D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_ITEM"
            },
            {
              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_SUBCATEG"
            }
          ]
        }
      ],
      "alias": "SUBCAT_ID",
      "lookupTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      }
    },
    {
      "name": "DESC",
      "description": "Subcategory Name",
      "category": "DESC",
      "isMultilingual": true,
      "displayFormat": "text",
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "SUBCAT_DESC"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_SUBCATEG"
            }
          ]
        }
      ],
      "alias": "SUBCAT_DESC",
      "lookupTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
    "subType": "logical_table",
    "name": "LU_SUBCATEG"
  },
  "keyForm": {
    "name": "ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "name": "DESC"
      }
    ],
    "browseDisplays": [
      {
        "name": "DESC"
      }
    ]
  },
  "sorts": {
    "reportSorts": [
      {
        "form": {
          "name": "DESC"
        },
        "ascending": true
      }
    ],
    "browseSorts": [
      {
        "form": {
          "name": "DESC"
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
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d "{\\"information\\":{\\"subType\\":\\"attribute\\",\\"name\\":\\"Subcategory\\",\\"destinationFolderId\\":\\"98FE182C2A10427EACE0CD30B6768258\\"},\\"forms\\":[{\\"name\\":\\"ID\\",\\"description\\":\\"Subcategory ID\\",\\"category\\":\\"ID\\",\\"displayFormat\\":\\"number\\",\\"expressions\\":[{\\"expression\\":{\\"tokens\\":[{\\"value\\":\\"SUBCAT_ID\\"}]},\\"tables\\":[{\\"objectId\\":\\"76C6FEAB49D08F57BC6FC9B644743EEF\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"CITY_SUBCATEG_SLS\\"},{\\"objectId\\":\\"8D67937411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_ITEM\\"},{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"}]}],\\"alias\\":\\"SUBCAT_ID\\",\\"lookupTable\\":{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"}},{\\"name\\":\\"DESC\\",\\"description\\":\\"Subcategory Name\\",\\"category\\":\\"DESC\\",\\"isMultilingual\\":true,\\"displayFormat\\":\\"text\\",\\"expressions\\":[{\\"expression\\":{\\"tokens\\":[{\\"value\\":\\"SUBCAT_DESC\\"}]},\\"tables\\":[{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"}]}],\\"alias\\":\\"SUBCAT_DESC\\",\\"lookupTable\\":{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"}}],\\"attributeLookupTable\\":{\\"objectId\\":\\"8D6793B611D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"logical_table\\",\\"name\\":\\"LU_SUBCATEG\\"},\\"keyForm\\":{\\"name\\":\\"ID\\"},\\"displays\\":{\\"reportDisplays\\":[{\\"name\\":\\"DESC\\"}],\\"browseDisplays\\":[{\\"name\\":\\"DESC\\"}]},\\"sorts\\":{\\"reportSorts\\":[{\\"form\\":{\\"name\\":\\"DESC\\"},\\"ascending\\":true}],\\"browseSorts\\":[{\\"form\\":{\\"name\\":\\"DESC\\"},\\"ascending\\":true}]}}"
```

Sample Response Body:

You can view the new attribute's definition in the body of the response.

```json
{
  "information": {
    "versionId": "45E696C357BC4BE882ED945E3EEDFE09",
    "primaryLocale": "en-US",
    "objectId": "27DA76BDDD8B4EEEA890B76F9BC77C9D",
    "subType": "attribute",
    "name": "Subcategory",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "forms": [
    {
      "id": "45C11FA478E745FEA08D781CEA190FE5",
      "name": "ID",
      "description": "Subcategory ID",
      "category": "ID",
      "type": "system",
      "displayFormat": "number",
      "dataType": {
        "type": "integer",
        "precision": 2,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "B8AAB62201C44E349D3CE80CEC36200E",
          "expression": {
            "text": "SUBCAT_ID",
            "tree": {
              "type": "column_reference",
              "columnName": "SUBCAT_ID",
              "objectId": "8D67921711D3E4981000E787EC6DE8A4"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "SUBCAT_ID",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2001-01-02T20:48:47.000Z",
                  "dateModified": "2012-06-06T12:13:04.000Z",
                  "versionId": "256D148442065F43BDC42FBB79438A3F",
                  "primaryLocale": "en-US",
                  "objectId": "8D67921711D3E4981000E787EC6DE8A4",
                  "subType": "column",
                  "name": "SUBCAT_ID"
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
              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",
              "subType": "logical_table",
              "name": "CITY_SUBCATEG_SLS"
            },
            {
              "objectId": "8D67937411D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_ITEM"
            },
            {
              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_SUBCATEG"
            }
          ]
        }
      ],
      "alias": "SUBCAT_ID",
      "lookupTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      }
    },
    {
      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
      "name": "DESC",
      "description": "Subcategory Name",
      "category": "DESC",
      "type": "system",
      "isMultilingual": true,
      "displayFormat": "text",
      "dataType": {
        "type": "n_var_char",
        "precision": 50,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "41C08B7CE11440569CA7AE54A28DCC55",
          "expression": {
            "text": "SUBCAT_DESC",
            "tree": {
              "type": "column_reference",
              "columnName": "SUBCAT_DESC",
              "objectId": "8D67928711D3E4981000E787EC6DE8A4"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "SUBCAT_DESC",
                "type": "column_reference",
                "target": {
                  "dateCreated": "2001-01-02T20:48:34.000Z",
                  "dateModified": "2012-06-06T12:13:04.000Z",
                  "versionId": "256D148442065F43BDC42FBB79438A3F",
                  "primaryLocale": "en-US",
                  "objectId": "8D67928711D3E4981000E787EC6DE8A4",
                  "subType": "column",
                  "name": "SUBCAT_DESC"
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
              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_SUBCATEG"
            }
          ]
        }
      ],
      "alias": "SUBCAT_DESC",
      "lookupTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
    "subType": "logical_table",
    "name": "LU_SUBCATEG"
  },
  "keyForm": {
    "id": "45C11FA478E745FEA08D781CEA190FE5",
    "name": "ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
        "name": "DESC"
      }
    ],
    "browseDisplays": [
      {
        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
        "name": "DESC"
      }
    ]
  },
  "sorts": {
    "reportSorts": [
      {
        "form": {
          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
          "name": "DESC"
        },
        "ascending": true
      }
    ],
    "browseSorts": [
      {
        "form": {
          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
          "name": "DESC"
        },
        "ascending": true
      }
    ]
  },
  "relationships": []
}
```

Response Code: 201 (A new attribute is created successfully in the changeset.)

## More samples

The following are additional examples for creating an attribute object.

### Attribute form mapped to multiple expressions

You can create an attribute with attribute forms mapped to multiple expressions. In this sample, you want to create an attribute named "Day" with ID form maps to two expressions: 1) `"DAY_DATE"` used in the tables `"DAY_CTR_SLS"` and `"LU_DAY"` and 2) `"ORDER_DATE"` used in the table `"ORDER_FACT"`.

Sample Request Body:

```json
{
  "information": {
    "subType": "attribute",
    "name": "Day",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "forms": [
    {
      "name": "ID",
      "category": "ID",
      "displayFormat": "date",
      "dataType": {
        "type": "time_stamp",
        "precision": 0,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "DAY_DATE"
              }
            ]
          },
          "tables": [
            {
              "objectId": "6F4FF0C84F271FC9851E9F8F502FF1C0",
              "subType": "logical_table",
              "name": "DAY_CTR_SLS"
            },
            {
              "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",
              "subType": "logical_table",
              "name": "LU_DAY"
            }
          ]
        },
        {
          "expression": {
            "tokens": [
              {
                "value": "ORDER_DATE"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D6793D411D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "ORDER_FACT"
            }
          ]
        }
      ],
      "alias": "DAY_DATE",
      "lookupTable": {
        "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",
        "subType": "logical_table",
        "name": "LU_DAY"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",
    "subType": "logical_table",
    "name": "LU_DAY"
  },
  "keyForm": {
    "name": "ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "name": "ID"
      }
    ],
    "browseDisplays": [
      {
        "name": "ID"
      }
    ]
  },
  "sorts": {}
}
```

### Attribute with a form group

You can create an attribute with a form group. In this sample, you want to create an attribute named `"Customer"` that contains the form group "Name" with "First Name" and "Last Name".

Sample Request Body:

```json
{
  "information": {
    "subType": "attribute",
    "name": "Customer",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
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
      "name": "Name",
      "description": "Customer Full Name",
      "category": "DESC",
      "isFormGroup": true,
      "childForms": [
        {
          "name": "Last Name"
        },
        {
          "name": "First Name"
        }
      ]
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

### Compound attribute

You can create a compound attribute. In this sample, you want to create an attribute named "Distribution Center" that contains the compound keys "COUNTRY_ID" and "DIST_CTR_ID".

```json
{
  "information": {
    "subType": "attribute",
    "name": "Distribution Center",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "forms": [
    {
      "name": "ID",
      "description": "Distribution Center Compound ID",
      "category": "ID",
      "isFormGroup": true,
      "childForms": [
        {
          "name": "ID (1)"
        },
        {
          "name": "ID (2)"
        }
      ]
    },
    {
      "name": "ID (1)",
      "description": "Distribution Center ID1",
      "category": "Distribution Center ID_1",
      "displayFormat": "number",
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "COUNTRY_ID"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67933211D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CALL_CTR"
            },
            {
              "objectId": "8D67934411D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_COUNTRY"
            },
            {
              "objectId": "8D67936211D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_DIST_CTR"
            }
          ]
        }
      ],
      "alias": "COUNTRY_ID",
      "lookupTable": {
        "objectId": "8D67936211D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_DIST_CTR"
      }
    },
    {
      "name": "ID (2)",
      "description": "Distribution Center ID2",
      "category": "Distribution Center ID_2",
      "displayFormat": "number",
      "expressions": [
        {
          "expressionId": "8D679FA4E49811D387E70010A4E86DEC",
          "expression": {
            "tokens": [
              {
                "value": "DIST_CTR_ID"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67933211D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CALL_CTR"
            },
            {
              "objectId": "8D67936211D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_DIST_CTR"
            }
          ]
        }
      ],
      "alias": "DIST_CTR_ID",
      "lookupTable": {
        "objectId": "8D67936211D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_DIST_CTR"
      }
    },
    {
      "name": "DESC",
      "description": "Distribution Center Name",
      "category": "DESC",
      "displayFormat": "text",
      "dataType": {
        "type": "n_var_char",
        "precision": 50,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expression": {
            "tokens": [
              {
                "value": "DIST_CTR_NAME"
              }
            ]
          },
          "tables": [
            {
              "objectId": "8D67936211D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_DIST_CTR"
            }
          ]
        }
      ],
      "alias": "DIST_CTR_NAME",
      "lookupTable": {
        "objectId": "8D67936211D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_DIST_CTR"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "8D67936211D3E4981000E787EC6DE8A4",
    "subType": "logical_table",
    "name": "LU_DIST_CTR"
  },
  "keyForm": {
    "name": "ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "name": "DESC"
      }
    ],
    "browseDisplays": [
      {
        "name": "DESC"
      }
    ]
  },
  "sorts": {}
}
```

### Expressions in "tree" format"

You can create an attribute with expressions in "tree" format.

```json
{
  "information": {
    "subType": "attribute",
    "name": "Subcategory_tree",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "forms": [
    {
      "name": "ID",
      "description": "Subcategory ID",
      "category": "ID",
      "displayFormat": "number",
      "expressions": [
        {
          "expression": {
            "tree": {
              "type": "column_reference",
              "columnName": "SUBCAT_ID",
              "objectId": "8D67921711D3E4981000E787EC6DE8A4"
            }
          },
          "tables": [
            {
              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",
              "subType": "logical_table",
              "name": "CITY_SUBCATEG_SLS"
            },
            {
              "objectId": "8D67937411D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_ITEM"
            },
            {
              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_SUBCATEG"
            }
          ]
        }
      ],
      "alias": "SUBCAT_ID",
      "lookupTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      }
    },
    {
      "name": "DESC",
      "description": "Subcategory Name",
      "category": "DESC",
      "isMultilingual": true,
      "displayFormat": "text",
      "expressions": [
        {
          "expression": {
            "tree": {
              "type": "column_reference",
              "columnName": "SUBCAT_DESC",
              "objectId": "8D67928711D3E4981000E787EC6DE8A4"
            }
          },
          "tables": [
            {
              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_SUBCATEG"
            }
          ]
        }
      ],
      "alias": "SUBCAT_DESC",
      "lookupTable": {
        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_SUBCATEG"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",
    "subType": "logical_table",
    "name": "LU_SUBCATEG"
  },
  "keyForm": {
    "name": "ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "name": "DESC"
      }
    ],
    "browseDisplays": [
      {
        "name": "DESC"
      }
    ]
  },
  "sorts": {
    "reportSorts": [
      {
        "form": {
          "name": "DESC"
        },
        "ascending": true
      }
    ],
    "browseSorts": [
      {
        "form": {
          "name": "DESC"
        },
        "ascending": true
      }
    ]
  }
}
```
