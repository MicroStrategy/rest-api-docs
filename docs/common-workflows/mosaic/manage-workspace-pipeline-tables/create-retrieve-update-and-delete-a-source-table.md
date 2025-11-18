---
title: Create, retrieve, update, and delete a source table
description: This workflow demonstrates how to create, retrieve, update, and delete a source table using REST API.
---

<Available since="Strategy ONE (October 2025)" />

This workflow sample demonstrates how to create, retrieve, update, and delete a source table using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a source table

You can create a source table by specifying the `importSource` property in the request body. The `type` should be set to `source`, and you can also specify `name` and `sampling` properties.

Endpoint: [POST /api/dataServer/workspaces/\{workspaceId}/pipelines/\{pipelineId}/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/createDataServerTable)

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
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/4BAFCC62A574441C8C44611CB7A68319/pipelines/5ACCEE40038F473BA24E484202D6C295/tables' \
-H 'X-MSTR-AuthToken: k74fgfb7d3sk20rld2b1ekv50u' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Source Table",
    "type": "source",
    "importSource": {
        "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
        "type": "single_table",
        "namespace": "public",
        "tableName": "employees_upper"
    },
    "sampling": {
        "type": "first"
    }
}'
```

Sample Response

- Response Body:

```json
{
  "id": "1CF01B803AD24DE3A4156AB8805E8FD9",
  "name": "Source Table",
  "type": "source",
  "columns": [
    {
      "id": "7100747806254F94A6C4E7FC017BE43C",
      "name": "ID",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "F8E73B7FA24B4F2C8FA21469CC5EF26A",
      "name": "NAME",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "DCFDF36880A64367970C9E0C7D4E1313",
      "name": "AGE",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "710F813A1D0B45DD8A0EBB9B7D58226D",
      "name": "DEPART",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "5DB7E0858C8C44239BACCC486A678A55",
      "name": "SALARY",
      "dataType": {
        "type": "double",
        "precision": 10,
        "scale": 2
      },
      "sourceDataType": {
        "type": "double",
        "precision": 10,
        "scale": 2
      }
    },
    {
      "id": "BE8AF9F5BB7B436DA29FD65D77AE6576",
      "name": "iD",
      "dataType": {
        "type": "int64",
        "precision": 8,
        "scale": 0
      },
      "sourceDataType": {
        "type": "int64",
        "precision": 8,
        "scale": 0
      }
    }
  ],
  "importSource": {
    "type": "single_table",
    "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
    "namespace": "public",
    "tableName": "employees_upper",
    "sql": "",
    "filterString": ""
  },
  "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"ID\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"ID\",\"scale\":0}},{\"name\":\"NAME\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"NAME\",\"scale\":0}},{\"name\":\"AGE\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"AGE\",\"scale\":0}},{\"name\":\"DEPART\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"DEPART\",\"scale\":0}},{\"name\":\"SALARY\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":10,\"dssType\":\"double\",\"name\":\"SALARY\",\"scale\":2}},{\"name\":\"iD\",\"type\":\"long\",\"nullable\":true,\"metadata\":{\"precision\":19,\"dssType\":\"int64\",\"name\":\"iD\",\"scale\":0}}]}",
  "sampling": {
    "type": "first"
  }
}
```

- Response Code: 201 (Success: Created)

## Retrieve a source table

Endpoint: [GET /api/dataServer/workspaces/\{workspaceId}/pipelines/\{pipelineId}/tables/\{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/getDataServerTable)

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
curl -L -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/4BAFCC62A574441C8C44611CB7A68319/pipelines/5ACCEE40038F473BA24E484202D6C295/tables/1CF01B803AD24DE3A4156AB8805E8FD9' \
-H 'X-MSTR-AuthToken: k74fgfb7d3sk20rld2b1ekv50u' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "id": "1CF01B803AD24DE3A4156AB8805E8FD9",
  "name": "Source Table",
  "type": "source",
  "columns": [
    {
      "id": "7100747806254F94A6C4E7FC017BE43C",
      "name": "ID",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "F8E73B7FA24B4F2C8FA21469CC5EF26A",
      "name": "NAME",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "DCFDF36880A64367970C9E0C7D4E1313",
      "name": "AGE",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "710F813A1D0B45DD8A0EBB9B7D58226D",
      "name": "DEPART",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "5DB7E0858C8C44239BACCC486A678A55",
      "name": "SALARY",
      "dataType": {
        "type": "double",
        "precision": 10,
        "scale": 2
      },
      "sourceDataType": {
        "type": "double",
        "precision": 10,
        "scale": 2
      }
    },
    {
      "id": "BE8AF9F5BB7B436DA29FD65D77AE6576",
      "name": "iD",
      "dataType": {
        "type": "int64",
        "precision": 8,
        "scale": 0
      },
      "sourceDataType": {
        "type": "int64",
        "precision": 8,
        "scale": 0
      }
    }
  ],
  "importSource": {
    "type": "single_table",
    "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
    "namespace": "public",
    "tableName": "employees_upper",
    "sql": "",
    "filterString": ""
  },
  "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"ID\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"ID\",\"scale\":0}},{\"name\":\"NAME\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"NAME\",\"scale\":0}},{\"name\":\"AGE\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"AGE\",\"scale\":0}},{\"name\":\"DEPART\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"DEPART\",\"scale\":0}},{\"name\":\"SALARY\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":10,\"dssType\":\"double\",\"name\":\"SALARY\",\"scale\":2}},{\"name\":\"iD\",\"type\":\"long\",\"nullable\":true,\"metadata\":{\"precision\":19,\"dssType\":\"int64\",\"name\":\"iD\",\"scale\":0}}]}",
  "sampling": {
    "type": "first"
  }
}
```

- Response Code: 200 (Success: OK)

## Update a source table

You can update `name`, `importSource`, and `sampling` properties of a source table. The `type` property cannot be updated.

Endpoint: [PATCH /api/dataServer/workspaces/\{workspaceId}/pipelines/\{pipelineId\}/tables/\{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/updateDataServerTable)

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
curl -L -X PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/4BAFCC62A574441C8C44611CB7A68319/pipelines/5ACCEE40038F473BA24E484202D6C295/tables/1CF01B803AD24DE3A4156AB8805E8FD9' \
-H 'X-MSTR-AuthToken: k74fgfb7d3sk20rld2b1ekv50u' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{
    "name": "updated table name",
    "type": "source",
    "importSource": {
        "type": "single_table",
        "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
        "namespace": "public",
        "tableName": "employees_lower",
        "sql": ""
    }
}'
```

Sample Response

- Response Body:

```json
{
  "id": "1CF01B803AD24DE3A4156AB8805E8FD9",
  "name": "updated table name",
  "type": "source",
  "columns": [
    {
      "id": "DEC96BDD17BB4E24AD00F0330F73BEDC",
      "name": "id",
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
      "id": "F8E73B7FA24B4F2C8FA21469CC5EF26A",
      "name": "name",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "DCFDF36880A64367970C9E0C7D4E1313",
      "name": "age",
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
      "id": "B605045D8CDC427383265283420532B4",
      "name": "department",
      "dataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      },
      "sourceDataType": {
        "type": "utf8_char",
        "precision": 50,
        "scale": 0
      }
    },
    {
      "id": "5DB7E0858C8C44239BACCC486A678A55",
      "name": "salary",
      "dataType": {
        "type": "double",
        "precision": 10,
        "scale": 2
      },
      "sourceDataType": {
        "type": "double",
        "precision": 10,
        "scale": 2
      }
    },
    {
      "id": "76DE329774F347708C90FA38BDCA2056",
      "name": "Id",
      "dataType": {
        "type": "int64",
        "precision": 8,
        "scale": 0
      },
      "sourceDataType": {
        "type": "int64",
        "precision": 8,
        "scale": 0
      }
    }
  ],
  "importSource": {
    "type": "single_table",
    "dataSourceId": "E93B0C144F9EAF781E3993B5C439220D",
    "namespace": "public",
    "tableName": "employees_lower",
    "sql": "",
    "filterString": ""
  },
  "originalSchema": "{\"type\":\"struct\",\"fields\":[{\"name\":\"id\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":10,\"dssType\":\"integer\",\"name\":\"id\",\"scale\":0}},{\"name\":\"name\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"name\",\"scale\":0}},{\"name\":\"age\",\"type\":\"integer\",\"nullable\":true,\"metadata\":{\"precision\":10,\"dssType\":\"integer\",\"name\":\"age\",\"scale\":0}},{\"name\":\"department\",\"type\":\"string\",\"nullable\":true,\"metadata\":{\"precision\":50,\"dssType\":\"utf8_char\",\"name\":\"department\",\"scale\":0}},{\"name\":\"salary\",\"type\":\"double\",\"nullable\":true,\"metadata\":{\"precision\":10,\"dssType\":\"double\",\"name\":\"salary\",\"scale\":2}},{\"name\":\"Id\",\"type\":\"long\",\"nullable\":true,\"metadata\":{\"precision\":19,\"dssType\":\"int64\",\"name\":\"Id\",\"scale\":0}}]}",
  "sampling": {
    "type": "first"
  }
}
```

- Response Code: 200 (Success: OK)

## Delete a source table

Endpoint: [DELETE /api/dataServer/workspaces/\{workspaceId}/pipelines/\{pipelineId}/tables/\{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Workspaces/deleteDataServerTable)

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
curl -L -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataServer/workspaces/4BAFCC62A574441C8C44611CB7A68319/pipelines/5ACCEE40038F473BA24E484202D6C295/tables/1CF01B803AD24DE3A4156AB8805E8FD9' \
-H 'X-MSTR-AuthToken: k74fgfb7d3sk20rld2b1ekv50u' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body: (empty)

- Response Code: 204 (Success: No Content)
