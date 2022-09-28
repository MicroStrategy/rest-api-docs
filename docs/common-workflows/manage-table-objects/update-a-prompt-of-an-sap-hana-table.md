---
title: Workflow sample - Update a prompt of an SAP HANA table with input parameters
sidebar_label: Update a prompt of an SAP HANA table
description: You can use REST APIs to update a prompt of a table through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-e3e4974a-dc93-4f79-9ea6-259a1693dc0d?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Starting in MicroStrategy 2021 Update 6, you can use REST APIs to update a prompt of a table through the Modeling service.

:::info

This workflow applies only to SAP HANA tables with input parameters because only these tables have prompts, and one input parameters corresponds to one prompt. For more information, see [KB48437: Support for SAP HANA calculation views with input parameters](https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US).

:::

:::tip

You should at least have **read access** to the table to successfully complete this workflow. If the prompt you want to update is a managed object, **write access** to the table is also required. The managed prompts of an SAP HANA table with input parameters are automatically created by MicroStrategy by default. However, you can choose to replace these managed prompts with standalone ones by following the steps in [Workflow Sample: Update SAP HANA Parameters for an SAP HANA Table with Input Parameters](./update-sap-hana-parameters.md). For more information on managed objects, see [About Managed Objects](https://www2.microstrategy.com/producthelp/2021/MDXCubeReporting/WebHelp/Lang_1033/Content/About_managed_objects.htm).

:::

You want to update the prompt of a table. The object ID of the table is `84AF2517E662417D9924FD678B44591A`. The table is in the MicroStrategy Tutorial Advanced project and its ID is `6AB8DFFE4B99B7F6FB0E94AD176C4A28`. The object ID of the current prompt is `339585B03F354D11AE8760C4489160F1` and you want to update fields of the prompt, for example, the name and default answers.

:::info

A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.

`schemaEdit` is required to be `true` if this changeset ID is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions).

:::

## Workflow

### Step 1: Create a changeset using [POST /api/model/changesets](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"
"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets?schemaEdit=true' \
-H 'Content-Type: application/json' \
-H 'X-MSTR-ProjectID: 6AB8DFFE4B99B7F6FB0E94AD176C4A28' \
-H 'X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05' \
-H 'Cookie: JSESSIONID=1D94C2B7A595054194E6342EED4B2E29; iSession=sidv53fj5kagqnl544j8krdl05' \
--data-raw ''
```

Sample Response Body:

```json
{
  "id": "EC74E082B9A4428BACB5A33970312311",
  "type": "metadata",
  "dateCreated": "2022-06-08T05:33:36.613900Z",
  "dateModified": "2022-06-08T05:33:36.613918Z",
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

### Step 2: Update a table prompt with [PUT /api/model/tables/{tableId}/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-putTablePrompt)

The prompt you are updating must already be in the prompt list of the current table.

You must use `GET /api/model/tables/{tableId}` and check the `sapHanaParameters` field to view the list of existing prompts.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"
"X-MSTR-MS-Changeset": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"
```

Sample Request Body:

```json
{
  "information": {
    "subType": "prompt_string",
    "name": "newName",
    "description": "a new prompt definition"
  },
  "title": "a new static list",
  "instruction": "a new static list",
  "defaultAnswer": {
    "value": "111,222"
  },
  "restriction": {
    "required": true,
    "allowPersonalAnswers": "none"
  }
}
```

Sample Curl:

```bash
curl -X PUT "http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1" \
-H "X-MSTR-MS-Changeset: 6AB8DFFE4B99B7F6FB0E94AD176C4A28" \
-H "Content-Type: application/json" \
-H "X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05" \
-H "Cookie: JSESSIONID=3374D7CF489BEAC87C495CE5BB0BD7ED; iSession=62i31bvfoctesonlukpo8r83th" \
--data-raw '{"information": {"subType": "prompt_string", "name": "newName", "description": "a new prompt definition"}, "title": "a new static list", "instruction": "a new static list", "defaultAnswer": {"value": "111,222"}, "restriction": {"required": true, "allowPersonalAnswers": "none"}}'
```

Sample Response Body:

You can view the new prompt definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-04-19T06:25:44.000Z",
    "dateModified": "2022-06-08T09:29:08.875Z",
    "versionId": "5821E67A4847D914ABA627BB4F9DBB08",
    "primaryLocale": "en-US",
    "objectId": "339585B03F354D11AE8760C4489160F1",
    "subType": "prompt_string",
    "name": "newName",
    "description": "a new prompt definition"
  },
  "title": "a new static list",
  "instruction": "a new static list",
  "defaultAnswer": {
    "value": "111,222"
  },
  "restriction": {
    "required": true,
    "allowPersonalAnswers": "none"
  }
}
```

Response Code: 201 (The prompt of the table is updated successfully in the changeset.)

### Step 3: Commit a changeset using [POST /api/model/changesets/{changesetId}/commit](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"
```

Sample Curl:

```bash
curl -X POST 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets/EC74E082B9A4428BACB5A33970312311/commit' \
-H 'X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05' \
-H 'Cookie: JSESSIONID=1D94C2B7A595054194E6342EED4B2E29; iSession=sidv53fj5kagqnl544j8krdl05'
```

Sample Response Body:

```json
{
  "id": "EC74E082B9A4428BACB5A33970312311",
  "type": "metadata",
  "dateCreated": "2022-06-08T05:33:36.613900Z",
  "dateModified": "2022-06-08T05:41:58.543362Z",
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
"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"
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
