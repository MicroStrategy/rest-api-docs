---
title: Create a data model from scratch
description: This workflow demonstrates how to create a data model from scratch using the REST API.
---

<Available since="Strategy ONE (October 2025)" />

This workflow sample demonstrates how to create a data model from scratch using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a data model

You can create a data model from scratch using the REST API.

Endpoint: [POST /api/dataModels](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/postDataModel)

Sample Request

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels' \
-H 'X-MSTR-MS-Changeset: DDBCD6A5AA1242478444229F8EC741A9' \
-H 'X-MSTR-AuthToken: jo73smitlfcb5r3dlqvuv2tmmr' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "name": "new data model",
        "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
    },
    "dataServeMode": "in_memory"
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "D258BA398DA1494AB229846C2B04EBB8",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "45794172A2C44A769A095179D442B909",
    "subType": "report_emma_cube",
    "name": "new data model",
    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"
  },
  "dataServeMode": "in_memory",
  "schemaFolderId": "0A99A06FB716423784642224BA298FE6",
  "enableWrangleRecommendations": true,
  "enableAutoHierarchyRelationships": true,
  "sampling": {
    "type": "first",
    "rowCount": 1000
  },
  "partition": {
    "mode": "automatic",
    "number": 4
  },
  "autoJoin": true
}
```

- Response Code: 201 (Success: Created)

## Create a workspace

After you create a data model, you must define tables. If you do not define tables, the data model will not work. As mentioned in [Create, Update, and Delete a Table](../manage-data-model-tables/create-update-and-delete-a-table.md), a pipeline string is required to create tables in the data model. To get the pipeline string, you need to create a pipeline in the workspace. Therefore, you must create a workspace.

Endpoint: [POST /api/dataServer/workspaces](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/postWorkspace)

Sample Request

- Curl

```bash
curl -L 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces' \
-H 'X-MSTR-AuthToken: jo73smitlfcb5r3dlqvuv2tmmr' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{
    "name": "new workspace"
}'
```

Sample Response

- Response Body:

```json
{
  "id": "E3590077C677499D94EC2EA5B98096D6",
  "name": "new workspace",
  "sampling": {
    "type": "first",
    "rowCount": 1000
  },
  "dateCreated": "2025-09-28T06:24:21.128997094Z",
  "dateModified": "2025-09-28T06:24:21.128998246Z",
  "datasetServeMode": "in_memory",
  "dssHost": "",
  "dssPort": 0,
  "pipelines": []
}
```

- Response Code: 201 (Success: Created)

## Create a pipeline

After you have a workspace, you can create a pipeline in the workspace to manage pipeline tables.

Endpoint: [POST /api/dataServer/workspaces/\{workspaceId}/pipelines](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/createPipeline)

Sample Request

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/E3590077C677499D94EC2EA5B98096D6/pipelines' \
-H 'X-MSTR-AuthToken: jo73smitlfcb5r3dlqvuv2tmmr' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{}'
```

Sample Response

- Response Body:

```json
{
  "id": "4C46F18EE1E442E697FBA4F9B3495B04",
  "rootTable": {
    "id": "DBEE96159A8A47E4ADA0085E37F55395",
    "type": "root",
    "children": []
  }
}
```

- Response Code: 201 (Success: Created)

## Create a pipeline table

Now you have a pipeline, you can create a pipeline table in the pipeline.

Endpoint: [POST /api/dataServer/workspaces/\{workspaceId}/pipelines/\{pipelineId}/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/createDataServerTable)

Sample Request

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/E3590077C677499D94EC2EA5B98096D6/pipelines/4C46F18EE1E442E697FBA4F9B3495B04/tables' \
-H 'X-MSTR-AuthToken: jo73smitlfcb5r3dlqvuv2tmmr' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Source Table",
    "type": "source",
    "importSource": {
        "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
        "type": "single_table",
        "namespace": "public",
        "tableName": "lu_year"
    }
}'
```

Sample Response

- Response Body:

```json
{
  "id": "EC8508FAC5FE4299ADE4783F0182E0CC",
  "name": "Source Table",
  "type": "source",
  "columns": [
    {
      "id": "7ED2F8A6EE744007807543E080F700F3",
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
      "id": "BA7373D6B3F84EA7BB3C15BAA95D179E",
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
      "id": "920197083CF54ACABCDBB6845BEE38C7",
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
      "id": "E876E5F31E2B47AF937591414738D489",
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
```

- Response Code: 201 (Success: Created)

## Get the pipeline definition

After you create the pipeline table, you can get the pipeline definition. The pipeline definition is required to create tables in the data model.

**Note**: The pipeline definition is not required to create alias tables. These tables require physical table references in the request body.

Endpoint: [GET /api/dataServer/workspaces/\{workspaceId}/pipelines/\{pipelineId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/getPipeline)

Sample Request

- Curl

```bash
curl -L -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/E3590077C677499D94EC2EA5B98096D6/pipelines/4C46F18EE1E442E697FBA4F9B3495B04' \
-H 'X-MSTR-AuthToken: jo73smitlfcb5r3dlqvuv2tmmr' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "id": "4C46F18EE1E442E697FBA4F9B3495B04",
  "rootTable": {
    "id": "DBEE96159A8A47E4ADA0085E37F55395",
    "type": "root",
    "children": [
      {
        "id": "EC8508FAC5FE4299ADE4783F0182E0CC",
        "name": "Source Table",
        "type": "source",
        "columns": [
          {
            "id": "7ED2F8A6EE744007807543E080F700F3",
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
            "id": "BA7373D6B3F84EA7BB3C15BAA95D179E",
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
            "id": "920197083CF54ACABCDBB6845BEE38C7",
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
            "id": "E876E5F31E2B47AF937591414738D489",
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
```

- Response Code: 200 (Success: OK)

## Create a table in the data model

Before you create a table in the data model, you must stringify the pipeline definition and include it in the request body.

After the table is created, you can create other data model objects such as attributes and base metrics based on the table, or metrics based on attributes and base metrics.

Endpoint: [POST /api/model/dataModels/\{dataModelId}/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/addDataModelTable)

Sample Request

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/45794172A2C44A769A095179D442B909/tables?fields=information%2CphysicalTable' \
-H 'X-MSTR-MS-Changeset: DDBCD6A5AA1242478444229F8EC741A9' \
-H 'X-MSTR-AuthToken: jo73smitlfcb5r3dlqvuv2tmmr' \
-H 'Content-Type: application/json' \
-H 'Cookie: JSESSIONID=31D36E8681E7428895F6C8DED54A1281; iSession=jo73smitlfcb5r3dlqvuv2tmmr; mstrRememberMe=ABFC525FBB1C45F094820D50C7AA0CBE; MSTRDEVICEID=6D0C8A89BC844B38AF1E4974D15AC76C; library-ingress="1051814a7721ec08"' \
-d '{
    "information": {
        "name": "Year"
    },
    "physicalTable": {
        "type": "pipeline",
        "pipeline": "{\"id\":\"4C46F18EE1E442E697FBA4F9B3495B04\",\"rootTable\":{\"id\":\"DBEE96159A8A47E4ADA0085E37F55395\",\"type\":\"root\",\"children\":[{\"id\":\"EC8508FAC5FE4299ADE4783F0182E0CC\",\"name\":\"Source Table\",\"type\":\"source\",\"columns\":[{\"id\":\"7ED2F8A6EE744007807543E080F700F3\",\"name\":\"year_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"BA7373D6B3F84EA7BB3C15BAA95D179E\",\"name\":\"year_date\",\"dataType\":{\"type\":\"time_stamp\",\"precision\":26,\"scale\":6},\"sourceDataType\":{\"type\":\"time_stamp\",\"precision\":26,\"scale\":6}},{\"id\":\"920197083CF54ACABCDBB6845BEE38C7\",\"name\":\"year_duration\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"E876E5F31E2B47AF937591414738D489\",\"name\":\"prev_year_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"E93B0C144F9EAF781E3993B5C439220D\",\"namespace\":\"public\",\"tableName\":\"lu_year\",\"sql\":\"\",\"filterString\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"year_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"year_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"year_date\\\",\\\"type\\\":\\\"timestamp\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":26,\\\"dssType\\\":\\\"time_stamp\\\",\\\"name\\\":\\\"year_date\\\",\\\"scale\\\":6}},{\\\"name\\\":\\\"year_duration\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"year_duration\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"prev_year_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"prev_year_id\\\",\\\"scale\\\":0}}]}\"}]}}"
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "BC7EE94261FD455CA635B268A2B49802",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "4E2759DBA47945BBB7535B2A4B039D01",
    "subType": "logical_table",
    "name": "Year",
    "destinationFolderId": "0A99A06FB716423784642224BA298FE6"
  },
  "physicalTable": {
    "information": {
      "versionId": "A1116B85E7A84F0E86937058AFD3BEDA",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "5DD55D1BDD4B4DB1A1D676CB3D61092C",
      "subType": "physical_table",
      "name": "New DB Table",
      "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
    },
    "columns": [
      {
        "information": {
          "versionId": "4266CCCE727144DEA010BD74860A14A3",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "F3C76BAFC1504EDD813F85FE483DAA9E",
          "subType": "column",
          "name": "year_id",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
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
          "versionId": "39FFA7CE317043CB8040521D520E1BC0",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "28DCF919B13C4058B598415CA3E08D87",
          "subType": "column",
          "name": "year_date",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
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
          "versionId": "E9D42C5689F94738880A8399043A457F",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "53E0674AE57E4E2A92657CCED767A3EA",
          "subType": "column",
          "name": "year_duration",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
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
          "versionId": "047E6F5EB56546E682A2196571D83873",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "E5BC1BFA40684D9EA158490830D01B59",
          "subType": "column",
          "name": "prev_year_id",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
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
    "pipeline": "{\"id\":\"4C46F18EE1E442E697FBA4F9B3495B04\",\"rootTable\":{\"id\":\"DBEE96159A8A47E4ADA0085E37F55395\",\"type\":\"root\",\"children\":[{\"columns\":[{\"id\":\"7ED2F8A6EE744007807543E080F700F3\",\"name\":\"year_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"BA7373D6B3F84EA7BB3C15BAA95D179E\",\"name\":\"year_date\",\"dataType\":{\"type\":\"time_stamp\",\"precision\":26,\"scale\":6},\"sourceDataType\":{\"type\":\"time_stamp\",\"precision\":26,\"scale\":6}},{\"id\":\"920197083CF54ACABCDBB6845BEE38C7\",\"name\":\"year_duration\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"E876E5F31E2B47AF937591414738D489\",\"name\":\"prev_year_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"E93B0C144F9EAF781E3993B5C439220D\",\"namespace\":\"public\",\"tableName\":\"lu_year\",\"sql\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"year_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"year_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"year_date\\\",\\\"type\\\":\\\"timestamp\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":26,\\\"dssType\\\":\\\"time_stamp\\\",\\\"name\\\":\\\"year_date\\\",\\\"scale\\\":6}},{\\\"name\\\":\\\"year_duration\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"year_duration\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"prev_year_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"prev_year_id\\\",\\\"scale\\\":0}}]}\",\"id\":\"EC8508FAC5FE4299ADE4783F0182E0CC\",\"name\":\"Source Table\",\"type\":\"source\"}]}}"
  }
}
```

- Response Code: 201 (Success: Created)

## Create an attribute

Endpoint: [POST /api/model/dataModels/\{dataModelId}/attributes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/postDataModelAttribute).

Sample Request

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/45794172A2C44A769A095179D442B909/attributes' \
-H 'X-MSTR-AuthToken: jo73smitlfcb5r3dlqvuv2tmmr' \
-H 'X-MSTR-MS-Changeset: DDBCD6A5AA1242478444229F8EC741A9' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "name": "Year",
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
                            "objectId": "F3C76BAFC1504EDD813F85FE483DAA9E",
                            "type": "column_reference"
                        }
                    },
                    "tables": [
                        {
                            "objectId": "4E2759DBA47945BBB7535B2A4B039D01",
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
        "objectId": "4E2759DBA47945BBB7535B2A4B039D01",
        "subType": "logical_table"
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "B3F7F9AA91494DB78263AA9FA6B71A95",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "F50F0AF7597845849B6168D6347E7601",
    "subType": "attribute",
    "name": "Year",
    "description": "Unique identifier for each year in the dataset.",
    "destinationFolderId": "0A99A06FB716423784642224BA298FE6"
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
          "expressionId": "B03083AF853740519B5FE19BB10C14BA",
          "expression": {
            "text": "year_id"
          },
          "tables": [
            {
              "objectId": "4E2759DBA47945BBB7535B2A4B039D01",
              "subType": "logical_table",
              "name": "Year"
            }
          ]
        }
      ],
      "alias": "year_id",
      "lookupTable": {
        "objectId": "4E2759DBA47945BBB7535B2A4B039D01",
        "subType": "logical_table",
        "name": "Year"
      }
    }
  ],
  "attributeLookupTable": {
    "objectId": "4E2759DBA47945BBB7535B2A4B039D01",
    "subType": "logical_table",
    "name": "Year"
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

- Response Code: 201 (Success: Created)

## Create a base metric

Endpoint: [POST /api/model/dataModels/\{dataModelId}/factMetrics](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Models/postDataModelFactMetric).

Sample Request

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/45794172A2C44A769A095179D442B909/factMetrics' \
-H 'X-MSTR-AuthToken: jo73smitlfcb5r3dlqvuv2tmmr' \
-H 'X-MSTR-MS-Changeset: DDBCD6A5AA1242478444229F8EC741A9' \
-H 'Content-Type: application/json' \
-d '{
    "information": {
        "name": "Year Duration",
        "subType": "fact_metric",
        "description": "Number of days in each year, accounting for leap years."
    },
    "fact": {
        "expressions": [
            {
                "expression": {
                    "tree": {
                        "type": "column_reference",
                        "objectId": "53E0674AE57E4E2A92657CCED767A3EA"
                    }
                },
                "tables": [
                    {
                        "objectId": "4E2759DBA47945BBB7535B2A4B039D01",
                        "subType": "logical_table"
                    }
                ]
            }
        ]
    },
    "format": {
        "header": [],
        "values": [
            {
                "type": "number_category",
                "value": "0"
            },
            {
                "type": "number_decimal_places",
                "value": "0"
            },
            {
                "type": "number_thousand_separator",
                "value": "false"
            },
            {
                "type": "number_currency_symbol",
                "value": ""
            },
            {
                "type": "number_currency_position",
                "value": "0"
            },
            {
                "type": "number_negative_numbers",
                "value": "1"
            }
        ]
    },
    "semanticRole": "fixed"
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "E297463F0E5646BAA4B0F40BB9DC404C",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "C90D09DE9BD144F6A6D67A0E84ABAED7",
    "subType": "fact_metric",
    "name": "Year Duration",
    "description": "Number of days in each year, accounting for leap years.",
    "destinationFolderId": "0A99A06FB716423784642224BA298FE6"
  },
  "fact": {
    "dataType": {
      "type": "integer",
      "precision": 2,
      "scale": 0
    },
    "expressions": [
      {
        "expressionId": "662190F1CEC044A99340F4AC35D8658F",
        "expression": {
          "text": "year_duration"
        },
        "tables": [
          {
            "objectId": "4E2759DBA47945BBB7535B2A4B039D01",
            "subType": "logical_table",
            "name": "Year"
          }
        ]
      }
    ],
    "extensions": [],
    "entryLevel": []
  },
  "function": "sum",
  "functionProperties": [
    {
      "name": "UseLookupForAttributes",
      "value": {
        "type": "boolean",
        "value": "false"
      }
    }
  ],
  "dimty": {
    "dimtyUnits": [
      {
        "dimtyUnitType": "report_base_level",
        "aggregation": "normal",
        "filtering": "apply",
        "groupBy": true
      }
    ],
    "excludeAttribute": false,
    "allowAddingUnit": true
  },
  "metricSubtotals": [
    {
      "definition": {
        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
        "subType": "system_subtotal",
        "name": "Total"
      }
    },
    {
      "definition": {
        "objectId": "078C50834B484EE29948FA9DD5300ADF",
        "subType": "system_subtotal",
        "name": "Count"
      }
    },
    {
      "definition": {
        "objectId": "B328C60462634223B2387D4ADABEEB53",
        "subType": "system_subtotal",
        "name": "Average"
      }
    },
    {
      "definition": {
        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",
        "subType": "system_subtotal",
        "name": "Minimum"
      }
    },
    {
      "definition": {
        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",
        "subType": "system_subtotal",
        "name": "Maximum"
      }
    },
    {
      "definition": {
        "objectId": "54E7BFD129514717A92BC44CF1FE5A32",
        "subType": "system_subtotal",
        "name": "Product"
      }
    },
    {
      "definition": {
        "objectId": "83A663067F7E43B2ABF67FD38ECDC7FE",
        "subType": "system_subtotal",
        "name": "Median"
      }
    },
    {
      "definition": {
        "objectId": "36226A4048A546139BE0AF5F24737BA8",
        "subType": "system_subtotal",
        "name": "Mode"
      }
    },
    {
      "definition": {
        "objectId": "7FBA414995194BBAB2CF1BB599209824",
        "subType": "system_subtotal",
        "name": "Standard Deviation"
      }
    },
    {
      "definition": {
        "objectId": "1769DBFCCF2D4392938E40418C6E065E",
        "subType": "system_subtotal",
        "name": "Variance"
      }
    },
    {
      "definition": {
        "objectId": "E1853D5A36C74F59A9F8DEFB3F9527A1",
        "subType": "system_subtotal",
        "name": "Geometric Mean"
      }
    },
    {
      "definition": {
        "objectId": "F225147A4CA0BB97368A5689D9675E73",
        "subType": "system_subtotal",
        "name": "Aggregation"
      },
      "implementation": {
        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",
        "subType": "system_subtotal",
        "name": "Total"
      }
    }
  ],
  "format": {
    "header": [],
    "values": [
      {
        "type": "number_category",
        "value": "0"
      },
      {
        "type": "number_format",
        "value": "###0"
      },
      {
        "type": "number_currency_position",
        "value": "0"
      },
      {
        "type": "number_currency_symbol",
        "value": ""
      },
      {
        "type": "number_decimal_places",
        "value": "0"
      },
      {
        "type": "number_negative_numbers",
        "value": "1"
      },
      {
        "type": "number_thousand_separator",
        "value": "false"
      }
    ]
  },
  "metricFormatType": "reserved",
  "semanticRole": "fixed"
}
```

- Response Code: 201 (Success: Created)

## Commit the changeset

After you create and modify all objects in the data model, commit the changeset to implement the changes.

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
