---
title: Edit an existing data model
description: This workflow demonstrates how to edit an existing data model using the REST API.
---

<Available since="Strategy (October 2025)" />

This workflow sample demonstrates how to edit an existing data model using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can manage data model objects such as tables and attributes for existing data models. To update data model objects, you need the changeset ID in the request header.

## Update a data model table

Endpoint: [PATCH /api/model/dataModels/\{dataModelId}/tables/\{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/patchDataModelTable)

Sample Request

- Curl

```bash
curl -L -X PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/DE5E8C39C44C45BE9FA0EAFA26FFDD86/tables/6516E7458B49494BA197A2957C14E33F' \
-H 'X-MSTR-MS-Changeset: C83D179BC60F408BAC84DBD5C46A9C26' \
-H 'X-MSTR-AuthToken: qj42fgsq3gofhob3isdr2uju4j' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "name": "year"
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "dateCreated": "2025-09-28T05:05:49.550Z",
    "dateModified": "2025-09-28T05:05:49.550Z",
    "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "6516E7458B49494BA197A2957C14E33F",
    "subType": "logical_table",
    "name": "year"
  },
  "physicalTable": {
    "information": {
      "dateCreated": "2025-09-28T05:05:49.550Z",
      "dateModified": "2025-09-28T05:05:49.550Z",
      "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "AB09B0F8FA1E4CD5819D3767F6B7E6E5",
      "subType": "physical_table",
      "name": "New DB Table"
    },
    "columns": [
      {
        "information": {
          "dateCreated": "2025-09-28T05:05:49.550Z",
          "dateModified": "2025-09-28T05:05:49.550Z",
          "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "B3B7491D12104E468F6E10FDBA8450B0",
          "subType": "column",
          "name": "year_id"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "year_id"
      },
      {
        "information": {
          "dateCreated": "2025-09-28T05:05:49.550Z",
          "dateModified": "2025-09-28T05:05:49.550Z",
          "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "91EB672C86C04675887799AF3C415DDD",
          "subType": "column",
          "name": "year_date"
        },
        "dataType": {
          "type": "time_stamp",
          "precision": 26,
          "scale": 6
        },
        "columnName": "year_date"
      },
      {
        "information": {
          "dateCreated": "2025-09-28T05:05:49.550Z",
          "dateModified": "2025-09-28T05:05:49.550Z",
          "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "EF71AF7C744B4212BADA79CB7A5B3ED5",
          "subType": "column",
          "name": "year_duration"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "year_duration"
      },
      {
        "information": {
          "dateCreated": "2025-09-28T05:05:49.550Z",
          "dateModified": "2025-09-28T05:05:49.550Z",
          "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "6F767C0EAAC44A2F9C0EF2557929684E",
          "subType": "column",
          "name": "prev_year_id"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "prev_year_id"
      }
    ],
    "type": "pipeline",
    "pipeline": "{\"id\":\"1EB86237AA9A4A33BEB9DF58B3FB1BB7\",\"rootTable\":{\"id\":\"08250879E4054A4E814E7B0E9119BEF3\",\"type\":\"root\",\"children\":[{\"columns\":[{\"id\":\"DC815517FF804355A46B6FAD3D930647\",\"name\":\"year_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"B59DC68104B0408A830BF256A7CBDC9A\",\"name\":\"year_date\",\"dataType\":{\"type\":\"time_stamp\",\"precision\":26,\"scale\":6},\"sourceDataType\":{\"type\":\"time_stamp\",\"precision\":26,\"scale\":6}},{\"id\":\"7A86D1CEEA5F4696968D811A709BBF67\",\"name\":\"year_duration\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"68D6894D4E4E43CC84C16D281FC26A37\",\"name\":\"prev_year_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"E93B0C144F9EAF781E3993B5C439220D\",\"namespace\":\"public\",\"tableName\":\"lu_year\",\"sql\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"year_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"year_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"year_date\\\",\\\"type\\\":\\\"timestamp\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":26,\\\"dssType\\\":\\\"time_stamp\\\",\\\"name\\\":\\\"year_date\\\",\\\"scale\\\":6}},{\\\"name\\\":\\\"year_duration\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"year_duration\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"prev_year_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"prev_year_id\\\",\\\"scale\\\":0}}]}\",\"id\":\"1CF4AD1B020644579A646F979BF94064\",\"name\":\"Source Table\",\"type\":\"source\"}]}}"
  },
  "attributes": [
    {
      "information": {
        "objectId": "1CD84A7209DB4D87B0AC74BC5DB948FE",
        "subType": "attribute",
        "name": "Year"
      },
      "forms": [
        {
          "formCategory": {
            "objectId": "45C11FA478E745FEA08D781CEA190FE5",
            "subType": "attribute_form_system",
            "name": "ID"
          },
          "name": "Year ID",
          "dataFormat": "number",
          "isKeyForm": true,
          "lookupTable": {
            "objectId": "6516E7458B49494BA197A2957C14E33F",
            "subType": "logical_table",
            "name": "year"
          },
          "expression": {
            "text": "year_id"
          }
        }
      ],
      "nonAggregatable": false
    }
  ],
  "factMetrics": [
    {
      "information": {
        "objectId": "AF01460F17B54F059210330AA970456C",
        "subType": "fact_metric",
        "name": "Year Duration"
      },
      "expression": {
        "text": "year_duration"
      },
      "semanticRole": "fixed"
    }
  ],
  "refreshPolicy": "replace"
}
```

- Response Code: 200 (Success: OK)

## Update a data model attribute

Endpoint: [PATCH /api/model/dataModels/\{dataModelId}/attributes/\{attributeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/patchDataModelAttribute).

Sample Request

- Curl

```bash
curl -L -X PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/DE5E8C39C44C45BE9FA0EAFA26FFDD86/attributes/F50F0AF7597845849B6168D6347E7601' \
-H 'X-MSTR-AuthToken: qj42fgsq3gofhob3isdr2uju4j' \
-H 'X-MSTR-MS-Changeset: C83D179BC60F408BAC84DBD5C46A9C26' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "name": "Year",
        "description": "Identifier for each financial year."
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "dateCreated": "2025-09-28T05:05:49.550Z",
    "dateModified": "2025-09-28T05:05:49.550Z",
    "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "1CD84A7209DB4D87B0AC74BC5DB948FE",
    "subType": "attribute",
    "name": "Year",
    "description": "Identifier for each financial year.",
    "destinationFolderId": "DD619A34B0B74F3180290ED41CBBAD95"
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
          "expressionId": "E63A2A9841E94A92BD065DDEEF468E29",
          "expression": {
            "text": "year_id"
          },
          "tables": [
            {
              "objectId": "6516E7458B49494BA197A2957C14E33F",
              "subType": "logical_table",
              "name": "year"
            }
          ]
        }
      ],
      "alias": "year_id",
      "lookupTable": {
        "objectId": "6516E7458B49494BA197A2957C14E33F",
        "subType": "logical_table",
        "name": "year"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "6516E7458B49494BA197A2957C14E33F",
    "subType": "logical_table",
    "name": "year"
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

- Response Code: 200 (Success: OK)

If you need to manage pipelines, you need to restore the workspace of the current data model by specifying the existing pipelines and sampling configurations in the request body. You can get sampling configurations from the data model definition, and get the existing pipelines from the physical table definitions of the data model tables.

## Get the data model definition

Endpoint: [GET /api/model/dataModels/\{dataModelId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModel)

Sample Request

- Curl

```bash
curl -L -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/DE5E8C39C44C45BE9FA0EAFA26FFDD86' \
-H 'X-MSTR-MS-Changeset: C83D179BC60F408BAC84DBD5C46A9C26' \
-H 'X-MSTR-AuthToken: qj42fgsq3gofhob3isdr2uju4j'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "dateCreated": "2025-09-28T05:05:49.550Z",
    "dateModified": "2025-09-28T05:05:49.550Z",
    "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "DE5E8C39C44C45BE9FA0EAFA26FFDD86",
    "subType": "report_emma_cube",
    "name": "new data model"
  },
  "dataServeMode": "in_memory",
  "schemaFolderId": "DD619A34B0B74F3180290ED41CBBAD95",
  "enableWrangleRecommendations": true,
  "enableAutoHierarchyRelationships": true,
  "sampling": {
    "type": "first",
    "rowCount": 1000
  },
  "partition": {
    "mode": "none"
  },
  "autoJoin": true
}
```

- Response Code: 200 (Success: OK)

## Get data model tables

Endpoint: [GET /api/model/dataModels/\{dataModelId}/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/getDataModelTables)

Sample Request

- Curl

```bash
curl -L -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/DE5E8C39C44C45BE9FA0EAFA26FFDD86/tables?offset=0&limit=-1&fields=physicalTable' \
-H 'X-MSTR-AuthToken: qj42fgsq3gofhob3isdr2uju4j' \
-H 'X-MSTR-MS-Changeset: C83D179BC60F408BAC84DBD5C46A9C26'
```

Sample Response

- Response Body:

```json
{
  "offset": 0,
  "limit": -1,
  "total": 1,
  "tables": [
    {
      "physicalTable": {
        "information": {
          "dateCreated": "2025-09-28T05:05:49.550Z",
          "dateModified": "2025-09-28T05:05:49.550Z",
          "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "AB09B0F8FA1E4CD5819D3767F6B7E6E5",
          "subType": "physical_table",
          "name": "New DB Table"
        },
        "columns": [
          {
            "information": {
              "dateCreated": "2025-09-28T05:05:49.550Z",
              "dateModified": "2025-09-28T05:05:49.550Z",
              "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "B3B7491D12104E468F6E10FDBA8450B0",
              "subType": "column",
              "name": "year_id"
            },
            "dataType": {
              "type": "integer",
              "precision": 2,
              "scale": 0
            },
            "columnName": "year_id"
          },
          {
            "information": {
              "dateCreated": "2025-09-28T05:05:49.550Z",
              "dateModified": "2025-09-28T05:05:49.550Z",
              "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "91EB672C86C04675887799AF3C415DDD",
              "subType": "column",
              "name": "year_date"
            },
            "dataType": {
              "type": "time_stamp",
              "precision": 26,
              "scale": 6
            },
            "columnName": "year_date"
          },
          {
            "information": {
              "dateCreated": "2025-09-28T05:05:49.550Z",
              "dateModified": "2025-09-28T05:05:49.550Z",
              "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "EF71AF7C744B4212BADA79CB7A5B3ED5",
              "subType": "column",
              "name": "year_duration"
            },
            "dataType": {
              "type": "integer",
              "precision": 2,
              "scale": 0
            },
            "columnName": "year_duration"
          },
          {
            "information": {
              "dateCreated": "2025-09-28T05:05:49.550Z",
              "dateModified": "2025-09-28T05:05:49.550Z",
              "versionId": "BD184EC70F4CE15DD94390B276FC2E60",
              "acg": 255,
              "primaryLocale": "en-US",
              "objectId": "6F767C0EAAC44A2F9C0EF2557929684E",
              "subType": "column",
              "name": "prev_year_id"
            },
            "dataType": {
              "type": "integer",
              "precision": 2,
              "scale": 0
            },
            "columnName": "prev_year_id"
          }
        ],
        "type": "pipeline",
        "pipeline": "{\"id\":\"1EB86237AA9A4A33BEB9DF58B3FB1BB7\",\"rootTable\":{\"id\":\"08250879E4054A4E814E7B0E9119BEF3\",\"type\":\"root\",\"children\":[{\"columns\":[{\"id\":\"DC815517FF804355A46B6FAD3D930647\",\"name\":\"year_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"B59DC68104B0408A830BF256A7CBDC9A\",\"name\":\"year_date\",\"dataType\":{\"type\":\"time_stamp\",\"precision\":26,\"scale\":6},\"sourceDataType\":{\"type\":\"time_stamp\",\"precision\":26,\"scale\":6}},{\"id\":\"7A86D1CEEA5F4696968D811A709BBF67\",\"name\":\"year_duration\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"68D6894D4E4E43CC84C16D281FC26A37\",\"name\":\"prev_year_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"E93B0C144F9EAF781E3993B5C439220D\",\"namespace\":\"public\",\"tableName\":\"lu_year\",\"sql\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"year_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"year_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"year_date\\\",\\\"type\\\":\\\"timestamp\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":26,\\\"dssType\\\":\\\"time_stamp\\\",\\\"name\\\":\\\"year_date\\\",\\\"scale\\\":6}},{\\\"name\\\":\\\"year_duration\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"year_duration\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"prev_year_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"prev_year_id\\\",\\\"scale\\\":0}}]}\",\"id\":\"1CF4AD1B020644579A646F979BF94064\",\"name\":\"Source Table\",\"type\":\"source\"}]}}"
      }
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Restore the workspace

You can restore the workspace of the current data model after you retrieve the data model definition and existing pipelines. The pipelines from the data model physical table definitions should be converted to json format and specified in the request body.

Endpoint: [POST /api/dataServer/workspaces](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/postWorkspace)

Sample Request

- Curl

```bash
curl -L 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces' \
-H 'X-MSTR-AuthToken: qj42fgsq3gofhob3isdr2uju4j' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{
    "pipelines": [{"id":"1EB86237AA9A4A33BEB9DF58B3FB1BB7","rootTable":{"id":"08250879E4054A4E814E7B0E9119BEF3","type":"root","children":[{"columns":[{"id":"DC815517FF804355A46B6FAD3D930647","name":"year_id","dataType":{"type":"integer","precision":2,"scale":0},"sourceDataType":{"type":"integer","precision":2,"scale":0}},{"id":"B59DC68104B0408A830BF256A7CBDC9A","name":"year_date","dataType":{"type":"time_stamp","precision":26,"scale":6},"sourceDataType":{"type":"time_stamp","precision":26,"scale":6}},{"id":"7A86D1CEEA5F4696968D811A709BBF67","name":"year_duration","dataType":{"type":"integer","precision":2,"scale":0},"sourceDataType":{"type":"integer","precision":2,"scale":0}},{"id":"68D6894D4E4E43CC84C16D281FC26A37","name":"prev_year_id","dataType":{"type":"integer","precision":2,"scale":0},"sourceDataType":{"type":"integer","precision":2,"scale":0}}],"importSource":{"type":"single_table","dataSourceId":"E93B0C144F9EAF781E3993B5C439220D","namespace":"public","tableName":"lu_year","sql":""},"originalSchema":"{\"type\":\"struct\",\"fields\":[{\"name\":\"year_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"year_id\",\"scale\":0}},{\"name\":\"year_date\",\"type\":\"timestamp\",\"nullable\":true,\"metadata\":{\"precision\":26,\"dssType\":\"time_stamp\",\"name\":\"year_date\",\"scale\":6}},{\"name\":\"year_duration\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"year_duration\",\"scale\":0}},{\"name\":\"prev_year_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"prev_year_id\",\"scale\":0}}]}","id":"1CF4AD1B020644579A646F979BF94064","name":"Source Table","type":"source"}]}}],
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
  "id": "D7D4AF711C284C27A8054862D207DDF0",
  "sampling": {
    "type": "first",
    "rowCount": 1000
  },
  "dateCreated": "2025-09-28T07:52:13.366326246Z",
  "dateModified": "2025-09-28T07:52:13.366330516Z",
  "datasetServeMode": "in_memory",
  "dssHost": "",
  "dssPort": 0,
  "pipelines": [
    {
      "id": "1EB86237AA9A4A33BEB9DF58B3FB1BB7",
      "rootTable": {
        "id": "08250879E4054A4E814E7B0E9119BEF3",
        "type": "root",
        "children": [
          {
            "id": "1CF4AD1B020644579A646F979BF94064",
            "name": "Source Table",
            "type": "source",
            "columns": [
              {
                "id": "DC815517FF804355A46B6FAD3D930647",
                "name": "year_id",
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
                "id": "B59DC68104B0408A830BF256A7CBDC9A",
                "name": "year_date",
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
                "id": "7A86D1CEEA5F4696968D811A709BBF67",
                "name": "year_duration",
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
                "id": "68D6894D4E4E43CC84C16D281FC26A37",
                "name": "prev_year_id",
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
              }
            ],
            "importSource": {
              "type": "single_table",
              "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
              "namespace": "public",
              "tableName": "lu_year",
              "sql": "",
              "filterString": ""
            },
            "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"year_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"year_id\",\"scale\":0}},{\"name\":\"year_date\",\"type\":\"timestamp\",\"nullable\":true,\"metadata\":{\"precision\":26,\"dssType\":\"time_stamp\",\"name\":\"year_date\",\"scale\":6}},{\"name\":\"year_duration\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"year_duration\",\"scale\":0}},{\"name\":\"prev_year_id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":5,\"dssType\":\"short\",\"name\":\"prev_year_id\",\"scale\":0}}]}"
          }
        ]
      }
    }
  ]
}
```

- Response Code: 201 (Success: Created)

After you restore the workspace, you can manage pipelines in the data model such as adding a new pipeline table, as mentioned in [Create a Data Model From Scratch](create-a-data-model-from-scratch.md).

## Commit the changeset

After you create and modify all the data model objects, you need to commit the changeset to implement changes.

Use [POST /api/model/changesets/\{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset).

Sample Request

- Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/805C5F3FB78A436FAE37C943471C24AD/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD"
```

Sample Response

- Response Body:

```json
{
  "id": "805C5F3FB78A436FAE37C943471C24AD",
  "dateCreated": "2025-09-22T18:39:47.790690Z",
  "dateModified": "2025-09-22T19:03:34.704176Z",
  "status": "Ready",
  "schemaEdit": true,
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userName": "MSTR User"
}
```

- Response Code: 201 (Success: Created)
