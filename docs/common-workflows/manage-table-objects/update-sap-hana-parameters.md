---
title: Workflow sample - Update SAP HANA parameters for an SAP HANA table with input parameters
sidebar_label: Update SAP HANA parameters
description: You can use REST APIs to update a prompt of a table through the Modeling service.
---

Similar to [Workflow sample: Update a prompt of an SAP HANA table with input parameters](./update-a-prompt-of-an-sap-hana-table.md), you can use REST APIs to update the table definition through the Modeling service starting in MicroStrategy 2021 Update 6.

:::info

SAP HANA tables may have input parameters and one input parameter corresponds to one prompt. Thus, if you have an SAP HANA table with input parameters, you can follow this workflow to update the `sapHanaParameters` field to replace the current prompts of the input parameters. For more information, see [KB48437: Support for SAP HANA calculation views with input parameters](https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US).

:::

## Workflow

### Step 1: Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ffj9a71c85rrejbbakmvqrqn6d"
"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets?schemaEdit=true' \
-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: 6AB8DFFE4B99B7F6FB0E94AD176C4A28' \
-H 'X-MSTR-AuthToken: ffj9a71c85rrejbbakmvqrqn6d' \
-H 'Cookie: JSESSIONID=FDC0FB1DA99E49C87345CBFD5548E54B; iSession=ffj9a71c85rrejbbakmvqrqn6d' \
--data-raw ''
```

Sample Response Body:

```json
{
  "id": "E04BCEDD47BC4BBC95B7E95197D18A9D",
  "type": "metadata",
  "dateCreated": "2022-06-09T01:35:17.949169Z",
  "dateModified": "2022-06-09T01:35:17.949215Z",
  "status": "Ready",
  "schemaEdit": true,
  "mstrUserId": "54F3D26011D2896560009A8E67019608",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userDisplayLocale": "en-US",
  "mstrProjectId": "6AB8DFFE4B99B7F6FB0E94AD176C4A28",
  "userName": "Administrator"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

### Step 2: Update an existing table using [PATCH /api/model/tables/{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails)

:::info

The format of the list of SAP HANA parameters to update is shown below. The parameters' number and names must strictly tally the existing ones. Use `GET /api/model/tables/{tableId}` and check the `sapHanaParameters` field to view the list of existing prompts.

There are three types of update operations for you to choose:

- Keep the current prompt by using the original prompt ID
- Replace the current prompt with a standalone prompt by using the ID of a standalone prompt. The same prompt can be used by different SAP HANA parameters.
- Reset the current prompt by using `""` or null on the `objectId` field

To replace the current prompt with a standalone prompt, the prompt must either be a value prompt or an attribute element prompt.

:::

The object ID of the table is `84AF2517E662417D9924FD678B44591A`. The table is in the MicroStrategy Tutorial Advanced project and its ID is `6AB8DFFE4B99B7F6FB0E94AD176C4A28`. Different operations on different SAP HANA parameters are done:

- Keep `IP_Column_Hier_Value_Help` the same
- Reset `IP_Static_List`
- Replace the current prompt of `IP_Derived_From_Table` with a value prompt, `B0489F7947A71A18EEAE03A65EE33137`
- Replace current prompts of `IP_Derived_From_Function` and `IP_Using_Conversion_Function` with an attribute element prompt, `38FB260A4099305D4220B485B927D84E`

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ffj9a71c85rrejbbakmvqrqn6d"
"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"
```

Sample Request Body:

```json
{
  "sapHanaParameters": [
    {
      "name": "IP_Column_Hier_Value_Help",
      "prompt": {
        "objectId": "AA1E3898B82D47329BC6BFB44379362D"
      }
    },
    {
      "name": "IP_Static_List",
      "prompt": {
        "objectId": ""
      }
    },
    {
      "name": "IP_Derived_From_Table",
      "prompt": {
        "objectId": "B0489F7947A71A18EEAE03A65EE33137"
      }
    },
    {
      "name": "IP_Derived_From_Function",
      "prompt": {
        "objectId": "38FB260A4099305D4220B485B927D84E"
      }
    },
    {
      "name": "IP_Using_Conversion_Function",
      "prompt": {
        "objectId": "38FB260A4099305D4220B485B927D84E"
      }
    }
  ]
}
```

Sample Curl:

```bash
curl -X PATCH 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A' \
-H 'X-MSTR-MS-Changeset: E04BCEDD47BC4BBC95B7E95197D18A9D' \
-H 'Content-Type: application/json' \
-H 'X-MSTR-AuthToken: ffj9a71c85rrejbbakmvqrqn6d' \
-H 'Cookie: JSESSIONID=FDC0FB1DA99E49C87345CBFD5548E54B; iSession=ffj9a71c85rrejbbakmvqrqn6d' --\
data-raw '{"sapHanaParameters": [{"name": "IP_Column_Hier_Value_Help", "prompt": {"objectId": "AA1E3898B82D47329BC6BFB44379362D"}}, {"name": "IP_Static_List", "prompt": {"objectId": ""}}, {"name": "IP_Derived_From_Table", "prompt": {"objectId": "B0489F7947A71A18EEAE03A65EE33137"}}, {"name": "IP_Derived_From_Function", "prompt": {"objectId": "38FB260A4099305D4220B485B927D84E"}}, {"name": "IP_Using_Conversion_Function", "prompt": {"objectId": "38FB260A4099305D4220B485B927D84E"}}]}'
```

Sample Response Body:

You can view the new table definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-04-19T06:25:44.000Z",
    "dateModified": "2022-05-11T08:29:50.000Z",
    "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",
    "primaryLocale": "en-US",
    "objectId": "84AF2517E662417D9924FD678B44591A",
    "subType": "logical_table",
    "name": "BI.certification::INPUTPARAMETERS"
  },
  "physicalTable": {
    "information": {
      "dateCreated": "2022-04-19T06:25:44.000Z",
      "dateModified": "2022-05-11T08:29:50.000Z",
      "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",
      "primaryLocale": "en-US",
      "objectId": "8E6C19512C6A4FB1A5A8ADBE5F237D82",
      "subType": "physical_table",
      "name": "BI.certification::INPUTPARAMETERS"
    },
    "tableName": "BI.certification::INPUTPARAMETERS",
    "columns": [
      {
        "information": {
          "dateCreated": "2022-04-19T06:25:44.000Z",
          "dateModified": "2022-05-11T08:29:50.000Z",
          "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",
          "primaryLocale": "en-US",
          "objectId": "4F98B51974684640867FBD998701828B",
          "subType": "column",
          "name": "BillingStatus"
        },
        "dataType": {
          "type": "n_var_char",
          "precision": 1,
          "scale": -2147483648
        },
        "columnName": "BillingStatus"
      },
      {
        "information": {
          "dateCreated": "2022-04-19T06:25:44.000Z",
          "dateModified": "2022-05-11T08:29:50.000Z",
          "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",
          "primaryLocale": "en-US",
          "objectId": "D85782A680F84521893EC4EB16E4EB82",
          "subType": "column",
          "name": "City"
        },
        "dataType": {
          "type": "n_var_char",
          "precision": 40,
          "scale": -2147483648
        },
        "columnName": "City"
      }
    ],
    "namespace": "BICERT_MSTR",
    "tablePrefix": "",
    "type": "normal",
    "sapHanaVariables": [
      {
        "variableName": "IP_Column_Hier_Value_Help",
        "columnSqlType": "NVARCHAR(10)",
        "valueType": "attribute_value",
        "valueAttribute": "ProductId",
        "selectionType": "default",
        "multiline": false,
        "mandatory": true,
        "modelElementName": "",
        "placeholderName": "$$IP_Column_Hier_Value_Help$$",
        "defaultValue": "",
        "description": "hierarchical value help",
        "columnDataType": "n_var_char"
      },
      {
        "variableName": "IP_Static_List",
        "columnSqlType": "VARCHAR(13)",
        "valueType": "static_list",
        "valueAttribute": "",
        "selectionType": "default",
        "multiline": true,
        "mandatory": true,
        "modelElementName": "",
        "placeholderName": "$$IP_Static_List$$",
        "defaultValue": "1500211138,1501014825",
        "description": "a static list",
        "columnDataType": "fixed_length_string"
      }
    ],
    "sapHanaTableType": "sap_hana_calculation"
  },
  "logicalSize": 0,
  "isLogicalSizeLocked": false,
  "isTrueKey": true,
  "isPartOfPartition": false,
  "sapHanaParameters": [
    {
      "name": "IP_Column_Hier_Value_Help",
      "prompt": {
        "objectId": "AA1E3898B82D47329BC6BFB44379362D",
        "subType": "prompt_string",
        "name": "IP_Column_Hier_Value_Help"
      }
    },
    {
      "name": "IP_Static_List",
      "prompt": {
        "objectId": "B8E99D1CDC754E01B4C3304415E72CBC",
        "subType": "prompt_string",
        "name": "IP_Static_List"
      }
    }
  ],
  "primaryDataSource": {
    "objectId": "C384DC324EE9450D049410B3A7BCB35E",
    "subType": "db_role_import",
    "name": "SAPXSA2"
  },
  "secondaryDataSources": []
}
```

Sample Response Code: 201 (SAP HANA parameters are updated successfully in the changeset.)

### Step 3: Commit a changeset using [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "ffj9a71c85rrejbbakmvqrqn6d"
```

Sample Curl:

```bash
curl -X POST 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets/E04BCEDD47BC4BBC95B7E95197D18A9D/commit' \
-H 'X-MSTR-AuthToken: ffj9a71c85rrejbbakmvqrqn6d' \
-H 'Cookie: JSESSIONID=FDC0FB1DA99E49C87345CBFD5548E54B; iSession=ffj9a71c85rrejbbakmvqrqn6d'
```

Sample Response Body:

```json
{
  "id": "E04BCEDD47BC4BBC95B7E95197D18A9D",
  "type": "metadata",
  "dateCreated": "2022-06-09T01:35:17.949169Z",
  "dateModified": "2022-06-09T01:46:20.153642Z",
  "status": "Ready",
  "schemaEdit": true,
  "mstrUserId": "54F3D26011D2896560009A8E67019608",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US",
  "userDisplayLocale": "en-US",
  "mstrProjectId": "6AB8DFFE4B99B7F6FB0E94AD176C4A28",
  "userName": "Administrator"
}
```

Sample Response Code: 201 (The changeset is committed successfully.)

### Step 4: Delete a changeset using [DELETE /api/model/changeset/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken: ffj9a71c85rrejbbakmvqrqn6d"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets/EC74E082B9A4428BACB5A33970312311' \
-H 'X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05' \
-H 'Cookie: JSESSIONID=1D94C2B7A595054194E6342EED4B2E29; iSession=sidv53fj5kagqnl544j8krdl05'
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset has been deleted successfully.)
