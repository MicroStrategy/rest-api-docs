---
title: Modify value of an advanced property of the attribute
description: The workflow involves modifying attribute's advanced properties values
---

<Available since="2021 Update 9" />

:::tip

You can try these workflows at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-df3dd3da-b225-4637-93dd-c41579ce1074?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

## Update an attribute's advanced property

This workflow sample demonstrates how to update an attribute's advanced property.

To update the advanced properties of the `Age Range` attribute, the object ID is `5603951E4FE1BC04A44E44B85BBB8ED2`.

:::info

Get the authorization token to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Update a property with `PATCH /api/model/attributes/{attributeId}?showAdvancedProperties=true`.

`showAdvancedProperty=true` query parameter is mandatory for the API to return the list of advanced properties. When `"showAdvancedProperty"` query parameter is not provided or is set to `"false"`, the list of advanced property won't be included in the API response.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "3gh0bl35bi5b28432ps68hm0l7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "advancedProperties": {
    "vldbProperties": {
      "[VLDB Select].[Do Case Insensitive Comparison for Strings in Filters]": {
        "value": 1
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/5603951E4FE1BC04A44E44B85BBB8ED2?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: 3gh0bl35bi5b28432ps68hm0l7" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view a list of advanced properties including updated property in the response.

```json
{
  "information": {
    "dateCreated": "2006-11-30T23:59:56.000Z",
    "dateModified": "2023-02-06T11:49:40.206Z",
    "versionId": "5574CA56624FE746076270BDA248A420",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
    "subType": "attribute",
    "name": "Age Range"
  },
  "forms": [
    {
      "id": "45C11FA478E745FEA08D781CEA190FE5",
      "name": "ID",
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
          "expressionId": "A8E63C9AC5D848CC9686C59078FB0BD0",
          "expression": {
            "text": "agerange_id"
          },
          "tables": [
            {
              "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
              "subType": "logical_table",
              "name": "LU_AGERANGE"
            },
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "agerange_id",
      "lookupTable": {
        "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
        "subType": "logical_table",
        "name": "LU_AGERANGE"
      }
    },
    {
      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
      "name": "DESC",
      "category": "DESC",
      "type": "system",
      "isMultilingual": true,
      "displayFormat": "text",
      "dataType": {
        "type": "fixed_length_string",
        "precision": 20,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "D4DB40D9A6FF4643974271E72C92CB4F",
          "expression": {
            "text": "agerange_desc"
          },
          "tables": [
            {
              "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
              "subType": "logical_table",
              "name": "LU_AGERANGE"
            }
          ]
        }
      ],
      "alias": "agerange_desc",
      "lookupTable": {
        "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
        "subType": "logical_table",
        "name": "LU_AGERANGE"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
    "subType": "logical_table",
    "name": "LU_AGERANGE"
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
  "sorts": {},
  "relationships": [
    {
      "parent": {
        "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
        "subType": "attribute",
        "name": "Age Range"
      },
      "child": {
        "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Customer"
      },
      "relationshipTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      },
      "relationshipType": "one_to_many"
    }
  ],
  "advancedProperties": {
    "vldbProperties": {
      "[VLDB Create].[Attribute ID Constraint]": {
        "name": "Attribute ID Constraint",
        "type": "string",
        "value": "",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Select].[Do Case Insensitive Comparison for Strings in Filters]": {
        "name": "Do Case Insensitive Comparison for Strings in Filters",
        "type": "int32",
        "value": "1",
        "resolvedLocation": "object",
        "isInherited": false,
        "nextValue": "0",
        "nextResolvedLocation": "default"
      },
      "[VLDB Select].[Incomplete Lookup Table]": {
        "name": "Incomplete Lookup Table",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Select].[No Nulls All In Lookup In Attribute For Cube Reuse]": {
        "name": "No Nulls All In Lookup In Attribute For Cube Reuse",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      }
    }
  }
}
```

Response Code: 200 (The attribute's advanced properties were updated successfully.)

## Set property value back to default

This is an example to reset the property value to default.

Update a property with `PATCH /api/model/attributes/{attributeId}?showAdvancedProperties=true`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "3gh0bl35bi5b28432ps68hm0l7"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "advancedProperties": {
    "vldbProperties": {
      "[VLDB Select].[Do Case Insensitive Comparison for Strings in Filters]": {
        "value": null
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/5603951E4FE1BC04A44E44B85BBB8ED2?showAdvancedProperties=true" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: 3gh0bl35bi5b28432ps68hm0l7" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view a list of advanced properties including updated property in the response.

```json
{
  "information": {
    "dateCreated": "2006-11-30T23:59:56.000Z",
    "dateModified": "2023-02-06T11:49:40.206Z",
    "versionId": "5574CA56624FE746076270BDA248A420",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
    "subType": "attribute",
    "name": "Age Range"
  },
  "forms": [
    {
      "id": "45C11FA478E745FEA08D781CEA190FE5",
      "name": "ID",
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
          "expressionId": "A8E63C9AC5D848CC9686C59078FB0BD0",
          "expression": {
            "text": "agerange_id"
          },
          "tables": [
            {
              "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
              "subType": "logical_table",
              "name": "LU_AGERANGE"
            },
            {
              "objectId": "8D67935611D3E4981000E787EC6DE8A4",
              "subType": "logical_table",
              "name": "LU_CUSTOMER"
            }
          ]
        }
      ],
      "alias": "agerange_id",
      "lookupTable": {
        "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
        "subType": "logical_table",
        "name": "LU_AGERANGE"
      }
    },
    {
      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
      "name": "DESC",
      "category": "DESC",
      "type": "system",
      "isMultilingual": true,
      "displayFormat": "text",
      "dataType": {
        "type": "fixed_length_string",
        "precision": 20,
        "scale": -2147483648
      },
      "expressions": [
        {
          "expressionId": "D4DB40D9A6FF4643974271E72C92CB4F",
          "expression": {
            "text": "agerange_desc"
          },
          "tables": [
            {
              "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
              "subType": "logical_table",
              "name": "LU_AGERANGE"
            }
          ]
        }
      ],
      "alias": "agerange_desc",
      "lookupTable": {
        "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
        "subType": "logical_table",
        "name": "LU_AGERANGE"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",
    "subType": "logical_table",
    "name": "LU_AGERANGE"
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
  "sorts": {},
  "relationships": [
    {
      "parent": {
        "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",
        "subType": "attribute",
        "name": "Age Range"
      },
      "child": {
        "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
        "subType": "attribute",
        "name": "Customer"
      },
      "relationshipTable": {
        "objectId": "8D67935611D3E4981000E787EC6DE8A4",
        "subType": "logical_table",
        "name": "LU_CUSTOMER"
      },
      "relationshipType": "one_to_many"
    }
  ],
  "advancedProperties": {
    "vldbProperties": {
      "[VLDB Create].[Attribute ID Constraint]": {
        "name": "Attribute ID Constraint",
        "type": "string",
        "value": "",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Select].[Do Case Insensitive Comparison for Strings in Filters]": {
        "name": "Do Case Insensitive Comparison for Strings in Filters",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "object",
        "isInherited": false,
        "nextValue": "0",
        "nextResolvedLocation": "default"
      },
      "[VLDB Select].[Incomplete Lookup Table]": {
        "name": "Incomplete Lookup Table",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      },
      "[VLDB Select].[No Nulls All In Lookup In Attribute For Cube Reuse]": {
        "name": "No Nulls All In Lookup In Attribute For Cube Reuse",
        "type": "int32",
        "value": "0",
        "resolvedLocation": "default",
        "isInherited": true
      }
    }
  }
}
```

Response Code: 200 (The attribute's advanced properties were updated successfully.)
