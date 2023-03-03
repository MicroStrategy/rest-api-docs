---
title: Execute a datamart
description: This workflow sample demonstrates how to execute a datamart using REST APIs.
---

<Available since="2021 Update 9" />

This workflow sample demonstrates how to execute a datamart using REST APIs.

The datamart object ID is 85000B907B4EAD3B0D9522A9CFD10DBC. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Execute a datamart and insert the data to table

### Step 1: Create a datamart instance based on an existing datamart

User can create an instance using [POST /api/model/datamarts/{datamartId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-createDatamartInstance).

Sample Request Body: Empty

Sample Request Curl:

```bash
curl -X 'POST' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: csgf8rns3orn8pnd1addkf01bk' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Header:

```http
cache-control: no-cache,no-store,max-age=0,must-revalidate,proxy-revalidate,no-transform
content-encoding: gzip
content-length: 22
content-security-policy: frame-ancestors 'self'
content-type: application/json
date: Thu,09 Feb 2023 06:16:42 GMT
expires: 0
pragma: no-cache
server: MicroStrategy
strict-transport-security: max-age=31536000;includeSubDomains
x-content-type-options: nosniff
x-mstr-ms-instance: 35DCAB983549ECD49FC20F9AB0CC4C28
x-xss-protection: 1; mode=block
```

Sample Response Body: Empty

Sample Response Code: 201 (The in-memory instance is created successfully.)

### Step 2: Execute the datamart

User can execute the datamart using [POST /api/datamarts/{datamartId}/instances/{instanceID}/execution/jobs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/execute).

Execute a datamart may take a long time.

Sample Request Body: Empty

Sample Request Curl:

```bash
curl -X 'POST' \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances/1C818981C44AC7447B9853B1B7F27200/execution/jobs' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Body:

```json
{
  "id": "85000B907B4EAD3B0D9522A9CFD10DBC",
  "instanceId": "1C818981C44AC7447B9853B1B7F27200",
  "status": 5,
  "jobId": "10:RU5WLTMwODE3OUxBSU8yVVNFMQ=="
}
```

Sample Response Code: 200 (OK).

### Step 3: Answer the prompts (skip this step if the datamart has no prompts)

User needs to check whether the datamart contains prompt using: [GET /api/datamarts/{datamartId}/instances/{instanceId}/execution](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/getExecution)

Sample Request Body: Empty

Sample Request Curl:

```bash
curl -X 'GET' \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances/1C818981C44AC7447B9853B1B7F27200/execution' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Body:

```json
{
  "id": "85000B907B4EAD3B0D9522A9CFD10DBC",
  "status": 2,
  "instanceId": "1C818981C44AC7447B9853B1B7F27200"
}
```

Sample Response Code: 200 (OK).

- If status is not 2, the datamart has no prompts.
- If status is 2, the datamart has prompts.

You can refer to [Use prompt objects](https://microstrategy.github.io/rest-api-docs/common-workflows/analytics/use-prompts-objects/) to get the information about the contained prompts.

Then if the datamart contains prompts, user can answer prompt using [PUT /api/reports/{reportId}/instances/{reportInstance}/prompts/answers](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/answerPrompts_2).

Sample Request Body:

```json
{
  "prompts": [
    {
      "name": "Elements of Country",
      "type": "ELEMENTS",
      "required": true,
      "closed": false,
      "source": {
        "id": "8D679D3811D3E4981000E787EC6DE8A4",
        "type": 12
      },
      "defaultAnswer": [],
      "answers": [
        {
          "name": "USA"
        },
        {
          "name": "England"
        }
      ]
    }
  ]
}
```

Sample Request Curl:

```bash
curl -X 'GET' \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/reports/85000B907B4EAD3B0D9522A9CFD10DBC/instances/1C818981C44AC7447B9853B1B7F27200/prompts/answers' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response Body: Empty

Sample Response Code: 204 (Prompt has been answered.)

### Step 4: Change the prompt option and save(skip this step if keeping the default option)

You can change the prompt option using: [POST /api/model/datamarts/{datamartId}/instances/save](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-saveDatamartInstance).

Sample Request Body:

```json
{
  "promptOptions": {
    "saveAsWithAnswers": true,
    "saveAsFilterWithPrompts": true,
    "saveAsTemplateWithPrompts": true
  }
}
```

Sample Request Curl:

```bash
curl -X 'POST' \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances/save' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \
-H 'X-MSTR-MS-Instance: 1C818981C44AC7447B9853B1B7F27200' \
-H 'Content-Type: application/json' \
-d '{
"promptOptions": {
"saveAsWithAnswers": true,
"saveAsFilterWithPrompts": true,
"saveAsTemplateWithPrompts": true
}
}'
```

Sample Response Body:

```json
{
  "objectId": "85000B907B4EAD3B0D9522A9CFD10DBC"
}
```

Sample Response Code: 200 (The datamart definition is saved successfully.)

If you want to change the datamart name or destination folder at the same time, you can use [POST /api/model/datamarts/{datamartId}/instances/saveAs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-saveAsDatamartInstance).

Sample Request Body:

```json
{
  "name": "City",
  "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
  "promptOptions": {
    "saveAsWithAnswers": true,
    "saveAsFilterWithPrompts": true,
    "saveAsTemplateWithPrompts": true
  }
}
```

Sample Request Curl:

```bash
curl -X 'POST' \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances/saveAs' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \
-H 'X-MSTR-MS-Instance: 1C818981C44AC7447B9853B1B7F27200' \
-H 'Content-Type: application/json' \
-d '{
"name": "City",
"destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
"promptOptions": {
"saveAsWithAnswers": true,
"saveAsFilterWithPrompts": true,
"saveAsTemplateWithPrompts": true
}
}'
```

Response is same with that of [POST /api/model/datamarts/{datamartId}/instances/save](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-saveDatamartInstance).

### Step 5: Delete the datamart instance

User can delete the created datamart instance using: [DELETE /api/model/datamarts/{datamartId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/ms-deleteDatamartInstance).

Sample Request Body: Empty

Sample Request Curl:

```bash
curl -X 'DELETE' \
'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/85000B907B4EAD3B0D9522A9CFD10DBC/instances' \
-H 'accept: application/json' \
-H 'X-MSTR-AuthToken: v5t198ft2mdjn571oabe7upibf' \
-H 'X-MSTR-MS-Instance: 1C818981C44AC7447B9853B1B7F27200' \
-H 'Content-Type: application/json'
```

Sample Response Code: 204 (The in-memory instance is deleted successfully.)
