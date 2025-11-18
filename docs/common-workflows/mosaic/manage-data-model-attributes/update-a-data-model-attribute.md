---
title: Update a data model attribute
sidebar_label: Update a data model attribute
description: This workflow sample demonstrates how to update a data model attribute through the Modeling service.
---

<Available since="Strategy ONE (October 2025)" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/microstrategy-rest-api/collection/5aq5sem/strategy-rest-api-workflows).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to update a data model attribute through the Modeling service.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can update an attribute in a data model using the following endpoint: [PATCH /api/model/dataModels/\{dataModelId}/attributes/\{attributeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/patchDataModelAttribute).

To update a data model attribute, in the request body, "forms" contains the detailed definition of a list of attribute forms. Each attribute contains one or more attribute forms. Each attribute form contains:

- "expressions": A list of attribute form expressions. An attribute form contains one or more attribute form expressions. Each attribute form expression contains "expression" and "tables".

  - "expression": Must be in either "tree" or "tokens" format.

    Tokens are a semi-structured representation of expression text that includes object references. For example, let’s say an attribute form expression is "Year - 10". When the attribute form expression is represented as tokens, the text is broken down into pieces (tokens) with information about what they represent in the metadata: ("Year_ID", Year_column_ID), ("-", Minus_ID), ("10", Constant).

  - "tables": A list of tables that the "expression" applies to. Only data model tables are allowed here.

- "dataType" and "alias" are optional. If omitted, they can be calculated based on the first attribute form expression.
- "childForms" is specific to a form group, which contains the reference for child forms.

Provide a lookup table on either the attribute level or attribute form level, as it is required for the object to be committed to the metadata. A lookup table can be defined on the attribute level using "attributeLookupTable", or the attribute form level using "lookupTable". If "LookupTable" is defined at the attribute form level, it is used, or it defaults to "attributeLookupTable". You can only use data model tables in the lookup table.

Provide "keyForm" and "displays", as they are required for the attribute to be committed to the metadata.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"
"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"
```

Sample Request Body:

```json
{
  "information": {
    "name": "Year - Updated",
    "description": "Unique identifier for each year in the dataset."
  },
  "forms": [
    {
      "name": "Year ID",
      "description": "Unique identifier for each year in the dataset.",
      "displayFormat": "number",
      "expressions": [
        {
          "expression": {
            "tree": {
              "objectId": "EAA58535D1FC4CC08580016EABE06335",
              "type": "column_reference"
            }
          },
          "tables": [
            {
              "objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA",
              "subType": "logical_table"
            }
          ]
        }
      ],
      "semanticRole": "fixed"
    }
  ],
  "keyForm": {
    "name": "Year ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "name": "Year ID"
      }
    ],
    "browseDisplays": [
      {
        "name": "Year ID"
      }
    ]
  },
  "autoDetectLookupTable": true,
  "attributeLookupTable": {
    "objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA",
    "subType": "logical_table"
  }
}
```

Sample Curl:

```bash
curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/04DCF4F028354FC0AE4B8120CB1983A6/attributes/5D6C76C3A3F548A0B9ADE5F9D2AA65C6?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d '{"information": {"name": "Year - Updated","description": "Unique identifier for each year in the dataset."},"forms": [{"name": "Year ID","description": "Unique identifier for each year in the dataset.","displayFormat": "number","expressions": [{"expression": {"tree": {"objectId": "EAA58535D1FC4CC08580016EABE06335","type": "column_reference"}},"tables": [{"objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA","subType": "logical_table"}]}],"semanticRole": "fixed"}],"keyForm": {"name": "Year ID"},"displays": {"reportDisplays": [{"name": "Year ID"}],"browseDisplays": [{"name": "Year ID"}]},"autoDetectLookupTable": true,"attributeLookupTable": {"objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA","subType": "logical_table"}}'
```

Sample Response Body:

```json
{
  "information": {
    "versionId": "54F2B3F8A9CC4A48A5DFFD2A96A075B7",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "862DA529F9F641DBB41F7C5E11924C3F",
    "subType": "attribute",
    "name": "Year - Updated",
    "description": "Unique identifier for each year in the dataset.",
    "destinationFolderId": "61348EAB766B4763A6A6723CF08F8990"
  },
  "forms": [
    {
      "id": "45C11FA478E745FEA08D781CEA190FE5",
      "name": "Year ID",
      "description": "Unique identifier for each year in the dataset.",
      "category": "ID",
      "type": "system",
      "displayFormat": "number",
      "dataType": {
        "type": "integer",
        "precision": 2,
        "scale": 0
      },
      "expressions": [
        {
          "expressionId": "E52F4DA25C034DF98FC7C6A27846E58C",
          "expression": {
            "text": "year_id",
            "tree": {
              "type": "column_reference",
              "columnName": "year_id",
              "objectId": "EAA58535D1FC4CC08580016EABE06335"
            },
            "tokens": [
              {
                "level": "resolved",
                "state": "initial",
                "value": "year_id",
                "type": "column_reference",
                "target": {
                  "versionId": "A77247E5FBFA430DB8BE94C426CBD40E",
                  "acg": 255,
                  "primaryLocale": "en-US",
                  "objectId": "EAA58535D1FC4CC08580016EABE06335",
                  "subType": "column",
                  "name": "year_id",
                  "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
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
              "objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA",
              "subType": "logical_table",
              "name": "lu_year"
            }
          ]
        }
      ],
      "alias": "year_id",
      "lookupTable": {
        "objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA",
        "subType": "logical_table",
        "name": "lu_year"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "CA59CA2BBCBB47529A54C5B7708C5FCA",
    "subType": "logical_table",
    "name": "lu_year"
  },
  "keyForm": {
    "id": "45C11FA478E745FEA08D781CEA190FE5",
    "name": "Year ID"
  },
  "displays": {
    "reportDisplays": [
      {
        "id": "45C11FA478E745FEA08D781CEA190FE5",
        "name": "Year ID"
      }
    ],
    "browseDisplays": [
      {
        "id": "45C11FA478E745FEA08D781CEA190FE5",
        "name": "Year ID"
      }
    ]
  },
  "sorts": {},
  "relationships": [],
  "nonAggregatable": false,
  "autoDetectLookupTable": true
}
```

Response Code: 200 (The data model attribute's definition is updated successfully in the changeset.)
