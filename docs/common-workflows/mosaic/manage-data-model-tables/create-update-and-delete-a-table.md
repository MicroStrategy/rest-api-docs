---
title: Create, update, and delete a table
description: This workflow demonstrates how to create, update, and delete a table using REST API.
---

<Available since="Strategy ONE (October 2025)" />

This workflow sample demonstrates how to create, update, and delete a table using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

## Create a table

You can create a table by specifying the physical table definition in the request body. The physical table should include the pipeline string. You can create pipelines in a workspace using workspace related APIs, then convert the pipelines to JSON strings manually.

Endpoint: [POST /api/model/dataModels/\{dataModelId}/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/addDataModelTable)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 14c4ooq8loaalb3t231fljor6v'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: F340F6C40D144C619D0E974D7AAC556D'
```

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/0D007AE398F14670899B846A20418034/tables?fields=information%2CphysicalTable' \
-H 'X-MSTR-MS-Changeset: F340F6C40D144C619D0E974D7AAC556D' \
-H 'X-MSTR-AuthToken: 14c4ooq8loaalb3t231fljor6v' \
-H 'Content-Type: application/json' \
-d '{
  "information": {
    "name": "Month"
  },
  "physicalTable": {
    "type": "pipeline",
    "pipeline": "{\"id\":\"4E88D3BBA1054BBF9A2C2CE4AB2E8929\",\"rootTable\":{\"id\":\"AB8BE9F5B93E476498342ED25A40AC83\",\"type\":\"root\",\"children\":[{\"columns\":[{\"id\":\"A9DA53AAFD2C4C6093C094FAA20BD686\",\"name\":\"cust_city_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"65FBE44CEBD94CA9962AB893BD1587C7\",\"name\":\"call_ctr_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"CB7551952BED4E5F8240493187CF5573\",\"name\":\"tot_dollar_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"577EF28D6B3949F2A1CE496FA6A88518\",\"name\":\"tot_unit_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"BA6E8EF95CAB4C0BB4B8CEE8104C6681\",\"name\":\"tot_cost\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"B38C5BE9A7CB4DB69A4B00051440E27E\",\"name\":\"gross_dollar_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"E93B0C144F9EAF781E3993B5C439220D\",\"namespace\":\"public\",\"tableName\":\"city_ctr_sls\",\"sql\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"cust_city_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"cust_city_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"call_ctr_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"call_ctr_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"tot_dollar_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_dollar_sales\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"tot_unit_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_unit_sales\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"tot_cost\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_cost\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"gross_dollar_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"gross_dollar_sales\\\",\\\"scale\\\":998}}]}\",\"id\":\"1AE7EAA7B6234415888CEA6FE71AEEB5\",\"name\":\"city_ctr_sls\",\"type\":\"source\"}]}}"
  }
}
'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "20876800190E464ABC13F1BA46D6A20D",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "FF3991BC3E8248F283F9B5BB5D6D5F70",
    "subType": "logical_table",
    "name": "Month",
    "destinationFolderId": "2022642AE7BB4B5A80683E6F9C0B3ABD"
  },
  "physicalTable": {
    "information": {
      "versionId": "DE5686569BC248C1A8DCF17DFBD83705",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "02A6BA195CEA4BDDBF816B5C06CA58F1",
      "subType": "physical_table",
      "name": "New DB Table",
      "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
    },
    "columns": [
      {
        "information": {
          "versionId": "C117BC0CD6E64FFB959FD3C14D07BD2C",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "06C227908A5049F18BAC8E93E5004CDD",
          "subType": "column",
          "name": "cust_city_id",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "cust_city_id"
      },
      {
        "information": {
          "versionId": "F2E17C239D244C82BBCA3D40E568D6E1",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "36419986A2C548FD894018FFD0EA8C21",
          "subType": "column",
          "name": "call_ctr_id",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "call_ctr_id"
      },
      {
        "information": {
          "versionId": "8387A50241674DEF9BC82F03DB129839",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "812E19C9E4674B628102E7016181DB0A",
          "subType": "column",
          "name": "tot_dollar_sales",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "tot_dollar_sales"
      },
      {
        "information": {
          "versionId": "42FBD75D7682423CB0DACAA9FCD2E257",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "572EB4B53CCB4A09BFFA4F4D39153167",
          "subType": "column",
          "name": "tot_unit_sales",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "tot_unit_sales"
      },
      {
        "information": {
          "versionId": "65F27CB44A114D2BB3FDAF3EC3D14B50",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "BED1BD15E6EF4F93A5E1BEE3C05145A5",
          "subType": "column",
          "name": "tot_cost",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "tot_cost"
      },
      {
        "information": {
          "versionId": "85CE63DA3B104093BFF2050F761DC122",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "C659D8B450BE4BFF9B3D8438AE79EDC5",
          "subType": "column",
          "name": "gross_dollar_sales",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "gross_dollar_sales"
      }
    ],
    "type": "pipeline",
    "pipeline": "{\"id\":\"4E88D3BBA1054BBF9A2C2CE4AB2E8929\",\"rootTable\":{\"id\":\"AB8BE9F5B93E476498342ED25A40AC83\",\"type\":\"root\",\"children\":[{\"columns\":[{\"id\":\"A9DA53AAFD2C4C6093C094FAA20BD686\",\"name\":\"cust_city_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"65FBE44CEBD94CA9962AB893BD1587C7\",\"name\":\"call_ctr_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"CB7551952BED4E5F8240493187CF5573\",\"name\":\"tot_dollar_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"577EF28D6B3949F2A1CE496FA6A88518\",\"name\":\"tot_unit_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"BA6E8EF95CAB4C0BB4B8CEE8104C6681\",\"name\":\"tot_cost\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"B38C5BE9A7CB4DB69A4B00051440E27E\",\"name\":\"gross_dollar_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"E93B0C144F9EAF781E3993B5C439220D\",\"namespace\":\"public\",\"tableName\":\"city_ctr_sls\",\"sql\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"cust_city_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"cust_city_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"call_ctr_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"call_ctr_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"tot_dollar_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_dollar_sales\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"tot_unit_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_unit_sales\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"tot_cost\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_cost\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"gross_dollar_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"gross_dollar_sales\\\",\\\"scale\\\":998}}]}\",\"id\":\"1AE7EAA7B6234415888CEA6FE71AEEB5\",\"name\":\"city_ctr_sls\",\"type\":\"source\"}]}}"
  }
}
```

- Response Code: 201 (Success: Created)

## Create a table alias in the data model

You can create a table alias by specifying an existing physical table in the request body.

Endpoint: [POST /api/model/dataModels/\{dataModelId}/tables](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/addDataModelTable)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: sh9k098ofiakm2drhmq8ml5q4p'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 17C4159267604C969838822859D7D4CD'
```

- Curl

```bash
curl -L -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/4490081B72354FCE9827DB1053A0050A/tables?fields=information%2CphysicalTable' \
-H 'X-MSTR-MS-Changeset: 17C4159267604C969838822859D7D4CD' \
-H 'X-MSTR-AuthToken: sh9k098ofiakm2drhmq8ml5q4p' \
-H 'Content-Type: application/json' \
-d '{
    "physicalTable": {
        "information": {
            "objectId": "02A6BA195CEA4BDDBF816B5C06CA58F1",
            "subType": "physical_table"
        }
    }
}'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "EACDF6EFB55E4A1F920169AAD525601E",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "3C3A7C3EDDDF4813B06CCB55132F95D6",
    "subType": "logical_table",
    "name": "city_ctr_sls",
    "destinationFolderId": "2022642AE7BB4B5A80683E6F9C0B3ABD"
  },
  "physicalTable": {
    "information": {
      "versionId": "DE5686569BC248C1A8DCF17DFBD83705",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "02A6BA195CEA4BDDBF816B5C06CA58F1",
      "subType": "physical_table",
      "name": "New DB Table",
      "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
    },
    "columns": [
      {
        "information": {
          "versionId": "C117BC0CD6E64FFB959FD3C14D07BD2C",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "06C227908A5049F18BAC8E93E5004CDD",
          "subType": "column",
          "name": "cust_city_id",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "cust_city_id"
      },
      {
        "information": {
          "versionId": "F2E17C239D244C82BBCA3D40E568D6E1",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "36419986A2C548FD894018FFD0EA8C21",
          "subType": "column",
          "name": "call_ctr_id",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "integer",
          "precision": 2,
          "scale": 0
        },
        "columnName": "call_ctr_id"
      },
      {
        "information": {
          "versionId": "8387A50241674DEF9BC82F03DB129839",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "812E19C9E4674B628102E7016181DB0A",
          "subType": "column",
          "name": "tot_dollar_sales",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "tot_dollar_sales"
      },
      {
        "information": {
          "versionId": "42FBD75D7682423CB0DACAA9FCD2E257",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "572EB4B53CCB4A09BFFA4F4D39153167",
          "subType": "column",
          "name": "tot_unit_sales",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "tot_unit_sales"
      },
      {
        "information": {
          "versionId": "65F27CB44A114D2BB3FDAF3EC3D14B50",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "BED1BD15E6EF4F93A5E1BEE3C05145A5",
          "subType": "column",
          "name": "tot_cost",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "tot_cost"
      },
      {
        "information": {
          "versionId": "85CE63DA3B104093BFF2050F761DC122",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "C659D8B450BE4BFF9B3D8438AE79EDC5",
          "subType": "column",
          "name": "gross_dollar_sales",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "double",
          "precision": 1000,
          "scale": 998
        },
        "columnName": "gross_dollar_sales"
      }
    ],
    "type": "pipeline",
    "pipeline": "{\"id\":\"4E88D3BBA1054BBF9A2C2CE4AB2E8929\",\"rootTable\":{\"id\":\"AB8BE9F5B93E476498342ED25A40AC83\",\"type\":\"root\",\"children\":[{\"columns\":[{\"id\":\"A9DA53AAFD2C4C6093C094FAA20BD686\",\"name\":\"cust_city_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"65FBE44CEBD94CA9962AB893BD1587C7\",\"name\":\"call_ctr_id\",\"dataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0},\"sourceDataType\":{\"type\":\"integer\",\"precision\":2,\"scale\":0}},{\"id\":\"CB7551952BED4E5F8240493187CF5573\",\"name\":\"tot_dollar_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"577EF28D6B3949F2A1CE496FA6A88518\",\"name\":\"tot_unit_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"BA6E8EF95CAB4C0BB4B8CEE8104C6681\",\"name\":\"tot_cost\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}},{\"id\":\"B38C5BE9A7CB4DB69A4B00051440E27E\",\"name\":\"gross_dollar_sales\",\"dataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998},\"sourceDataType\":{\"type\":\"double\",\"precision\":1000,\"scale\":998}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"E93B0C144F9EAF781E3993B5C439220D\",\"namespace\":\"public\",\"tableName\":\"city_ctr_sls\",\"sql\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"cust_city_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"cust_city_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"call_ctr_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":5,\\\"dssType\\\":\\\"short\\\",\\\"name\\\":\\\"call_ctr_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"tot_dollar_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_dollar_sales\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"tot_unit_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_unit_sales\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"tot_cost\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"tot_cost\\\",\\\"scale\\\":998}},{\\\"name\\\":\\\"gross_dollar_sales\\\",\\\"type\\\":\\\"double\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"precision\\\":1000,\\\"dssType\\\":\\\"double\\\",\\\"name\\\":\\\"gross_dollar_sales\\\",\\\"scale\\\":998}}]}\",\"id\":\"1AE7EAA7B6234415888CEA6FE71AEEB5\",\"name\":\"city_ctr_sls\",\"type\":\"source\"}]}}"
  }
}
```

- Response Code: 201 (Success: Created)

## Update a table in the data model

You can update the name, destination folder, pipeline, and refresh policy of a table in the data model.

Endpoint: [PATCH /api/model/dataModels/\{dataModelId}/tables/\{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/patchDataModelTable)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pk2dudliaoqh5hmv240ururl82'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: 889D6EF5F47541309FC97BAA41F944D5'
```

- Curl

```bash
curl -L -X PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/0D007AE398F14670899B846A20418034/tables/3C3A7C3EDDDF4813B06CCB55132F95D6' \
-H 'X-MSTR-MS-Changeset: F340F6C40D144C619D0E974D7AAC556D' \
-H 'X-MSTR-AuthToken: 14c4ooq8loaalb3t231fljor6v' \
-H 'Content-Type: application/json' \
-d '{
    "physicalTable": {
      "type": "pipeline",
      "pipeline": "{\"id\":\"02FA6FBB46F94D73A82F4271989C99C5\",\"rootTable\":{\"id\":\"495603C2FCC6404FAC5B286AFA2DB28C\",\"type\":\"root\",\"children\":[{\"id\":\"71F61F3BF13C4B1D9086603EA1A0F57A\",\"name\":\"lu_brand\",\"type\":\"source\",\"columns\":[{\"id\":\"11CC38EBA46C44D1A82AE86CDBCC12F7\",\"name\":\"brand_id\",\"dataType\":{\"type\":\"integer\",\"precision\":0,\"scale\":0},\"sourceDataType\":{\"type\":\"utf8_char\",\"precision\":4,\"scale\":0}},{\"id\":\"10DD5C5566104A978F67A7B965D9A1C4\",\"name\":\"brand_desc\",\"dataType\":{\"type\":\"utf8_char\",\"precision\":0,\"scale\":0},\"sourceDataType\":{\"type\":\"utf8_char\",\"precision\":4,\"scale\":0}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"16286AD84D2C2E6635CF5BB56B5210BE\",\"namespace\":\"public\",\"tableName\":\"lu_brand\",\"sql\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"brand_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"jdbcType\\\":5,\\\"precision\\\":0,\\\"name\\\":\\\"brand_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"brand_desc\\\",\\\"type\\\":\\\"string\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"jdbcType\\\":12,\\\"precision\\\":0,\\\"name\\\":\\\"brand_desc\\\",\\\"scale\\\":0}}]}\"}]}}"
    }
  }'
```

Sample Response

- Response Body:

```json
{
  "information": {
    "versionId": "EACDF6EFB55E4A1F920169AAD525601E",
    "acg": 255,
    "primaryLocale": "en-US",
    "objectId": "3C3A7C3EDDDF4813B06CCB55132F95D6",
    "subType": "logical_table",
    "name": "city_ctr_sls",
    "destinationFolderId": "2022642AE7BB4B5A80683E6F9C0B3ABD"
  },
  "physicalTable": {
    "information": {
      "versionId": "DE5686569BC248C1A8DCF17DFBD83705",
      "acg": 255,
      "primaryLocale": "en-US",
      "objectId": "02A6BA195CEA4BDDBF816B5C06CA58F1",
      "subType": "physical_table",
      "name": "New DB Table",
      "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
    },
    "columns": [
      {
        "information": {
          "versionId": "88A5BC88B2DD42318FC6A1AD68318B11",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "4EF148965CB64D49BB7F39652D1BCBEA",
          "subType": "column",
          "name": "brand_id",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "integer",
          "precision": 0,
          "scale": 0
        },
        "columnName": "brand_id"
      },
      {
        "information": {
          "versionId": "D2042A4F06E84DB39F01DE3488FD84D9",
          "acg": 255,
          "primaryLocale": "en-US",
          "objectId": "5FEF4BB5765B4BF2916902586DD11F72",
          "subType": "column",
          "name": "brand_desc",
          "destinationFolderId": "EE9BD70043F0F571B38E43BF19B9301A"
        },
        "dataType": {
          "type": "utf8_char",
          "precision": 0,
          "scale": 0
        },
        "columnName": "brand_desc"
      }
    ],
    "type": "pipeline",
    "pipeline": "{\"id\":\"02FA6FBB46F94D73A82F4271989C99C5\",\"rootTable\":{\"id\":\"495603C2FCC6404FAC5B286AFA2DB28C\",\"type\":\"root\",\"children\":[{\"columns\":[{\"id\":\"11CC38EBA46C44D1A82AE86CDBCC12F7\",\"name\":\"brand_id\",\"dataType\":{\"type\":\"integer\",\"precision\":0,\"scale\":0},\"sourceDataType\":{\"type\":\"utf8_char\",\"precision\":4,\"scale\":0}},{\"id\":\"10DD5C5566104A978F67A7B965D9A1C4\",\"name\":\"brand_desc\",\"dataType\":{\"type\":\"utf8_char\",\"precision\":0,\"scale\":0},\"sourceDataType\":{\"type\":\"utf8_char\",\"precision\":4,\"scale\":0}}],\"importSource\":{\"type\":\"single_table\",\"dataSourceId\":\"16286AD84D2C2E6635CF5BB56B5210BE\",\"namespace\":\"public\",\"tableName\":\"lu_brand\",\"sql\":\"\"},\"originalSchema\":\"{\\\"type\\\":\\\"struct\\\",\\\"fields\\\":[{\\\"name\\\":\\\"brand_id\\\",\\\"type\\\":\\\"integer\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"jdbcType\\\":5,\\\"precision\\\":0,\\\"name\\\":\\\"brand_id\\\",\\\"scale\\\":0}},{\\\"name\\\":\\\"brand_desc\\\",\\\"type\\\":\\\"string\\\",\\\"nullable\\\":true,\\\"metadata\\\":{\\\"jdbcType\\\":12,\\\"precision\\\":0,\\\"name\\\":\\\"brand_desc\\\",\\\"scale\\\":0}}]}\",\"id\":\"71F61F3BF13C4B1D9086603EA1A0F57A\",\"name\":\"lu_brand\",\"type\":\"source\"}]}}"
  },
  "refreshPolicy": "replace"
}
```

- Response Code: 200 (Success: OK)

## Delete a table from the data model

You can delete a table from the data model by specifying the table ID in the endpoint. After the table is deleted, all attributes and base metrics that depend on this table are also deleted.

Endpoint: [DELETE /api/model/dataModels/\{dataModelId}/tables/\{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/deleteDataModelTable)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: 14c4ooq8loaalb3t231fljor6v'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-MS-Changeset: F340F6C40D144C619D0E974D7AAC556D'
```

- Curl

```bash
curl -L -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/0D007AE398F14670899B846A20418034/tables/3C3A7C3EDDDF4813B06CCB55132F95D6' \
-H 'X-MSTR-MS-Changeset: F340F6C40D144C619D0E974D7AAC556D' \
-H 'X-MSTR-AuthToken: 14c4ooq8loaalb3t231fljor6v'
```

Sample Response

- Response Body: (empty)
- Response Code: 204 (Success: No Content)
