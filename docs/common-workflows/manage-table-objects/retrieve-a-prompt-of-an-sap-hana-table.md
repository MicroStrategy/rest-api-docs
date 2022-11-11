---
title: Workflow samples - Retrieve a prompt of an SAP HANA table with input parameters
sidebar_label: Retrieve a prompt of an SAP HANA table
description: You can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-6ddc138b-b2ab-4c53-8172-b2af26f4586d?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Starting in MicroStrategy 2021 Update 6, you can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table.

This workflow applies only to SAP HANA tables with input parameters because only these tables have prompts, and one input parameters corresponds to one prompt. For more information, see [KB48437: Support for SAP HANA calculation views with input parameters](https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US).

## Retrieve a prompt of a table

This workflow sample demonstrates how to retrieve an existing prompt of an SAP HANA table.

The object ID of the table is `84AF2517E662417D9924FD678B44591A` and the object ID of the prompt is `339585B03F354D11AE8760C4489160F1`. The table is in the MicroStrategy Tutorial Advanced project and its project ID is `6AB8DFFE4B99B7F6FB0E94AD176C4A28`.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the table prompt using [GET /api/model/tables/{tableId}/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTablePromptDetails).

:::info

The prompt you are retrieving must already be in the prompt list of the current table.

You must use [GET /api/model/tables/{tableId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails) and check the `sapHanaParameters` field to view the list of existing prompts.

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "qu6j11maseap1gc67mrsf7ivdq"
"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1' \
-H 'X-MSTR-AuthToken: qu6j11maseap1gc67mrsf7ivdq' \
-H 'X-MSTR-ProjectID: 6AB8DFFE4B99B7F6FB0E94AD176C4A28' \
-H 'Cookie: JSESSIONID=741610581756E9B5B624E71E7FA84DD3; iSession=qu6j11maseap1gc67mrsf7ivdq'
```

Sample Response Body:

You can view the table's prompt in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-04-19T06:25:44.000Z",
    "dateModified": "2022-05-11T08:29:50.000Z",
    "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",
    "primaryLocale": "en-US",
    "objectId": "339585B03F354D11AE8760C4489160F1",
    "subType": "prompt_string",
    "name": "IP_Static_List",
    "description": "a static list"
  },
  "title": "a static list",
  "instruction": "a static list",
  "defaultAnswer": {
    "value": "1500211138,1501014825"
  },
  "restriction": {
    "required": true,
    "allowPersonalAnswers": "none"
  }
}
```

Response Code: 200 (Table's prompt is returned successfully.)

## Retrieve a table prompt within a changeset

You want to get the prompt of the same table object mentioned in [Retrieve a prompt of a table](#retrieve-a-prompt-of-a-table), while within a changeset. The object ID of the table is `84AF2517E662417D9924FD678B44591A`. The table is in the MicroStrategy Tutorial Advanced project and its project ID is `6AB8DFFE4B99B7F6FB0E94AD176C4A28`.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::info

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md). If you plan to use the response of [GET /api/model/tables/{tableId}/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTablePromptDetails) to update the table’s prompts, it is recommended to associate all requests to one changeset.

:::

### Get a table's prompt within a changeset using [GET /api/model/tables/{tableId}/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTablePromptDetails)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "qu6j11maseap1gc67mrsf7ivdq"
"X-MSTR-MS-Changeset": "99B0CDA74BD6480DAA4C164FC361F4F0"
```

Sample Request Body: Empty

Sample Request Curl:

```bash
curl -X GET 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1' \
-H 'X-MSTR-MS-Changeset: 99B0CDA74BD6480DAA4C164FC361F4F0' \
-H 'X-MSTR-AuthToken: qu6j11maseap1gc67mrsf7ivdq' \
-H 'Cookie: JSESSIONID=741610581756E9B5B624E71E7FA84DD3; iSession=qu6j11maseap1gc67mrsf7ivdq'
```

Sample Response Body:

You can view the table’s definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2022-04-19T06:25:44.000Z",
    "dateModified": "2022-05-11T08:29:50.000Z",
    "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",
    "primaryLocale": "en-US",
    "objectId": "339585B03F354D11AE8760C4489160F1",
    "subType": "prompt_string",
    "name": "IP_Static_List",
    "description": "a static list"
  },
  "title": "a static list",
  "instruction": "a static list",
  "defaultAnswer": {
    "value": "1500211138,1501014825"
  },
  "restriction": {
    "required": true,
    "allowPersonalAnswers": "none"
  }
}
```

Sample Response Code: 200 (Table's prompt is returned successfully.)
