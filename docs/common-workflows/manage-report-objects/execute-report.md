---
title: Execute report
description: This workflow sample demonstrates how to execute report using REST APIs.
---

<Available since="2021 Update 7" />

This workflow sample demonstrates how to execute a report through modeling service.

The report object ID is `9B9ADA7F464E63CE0D0B709B03BD9370`. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

Obtain the authorization token needed to execute the request using `POST /api/auth/login`. Obtain the project ID from `GET /api/projects`.

## Get SQL view of a report with prompts

You want to get the SQL view of a report with prompts. You can create a report instance and set the executionStage to resolve_prompts. Then after answering the prompts, the SQL view will be available.

### 1. Create a report instance with execution stage

Endpoint: [POST /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance) with executionStage=resolve_prompts

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances?executionStage=resolve_prompts' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'
```

Sample Response Body:

```json
{
  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"
}
```

Sample Response Code: 201 (A new report instance is created successfully.)

### 2. Answer the prompt

Endpoint: [PUT /api/reports/{reportId}/instances/{reportInstance}/prompts/answers](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/answerPrompts_2)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

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

Sample Response Body: Empty

Sample Response Code: 204 (Prompt has been answered.)

### 3. Get the SQL view

Endpoint: [GET /api/v2/reports/{reportId}/instances/{reportInstance}/sqlView](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/getReportSqlView)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
Sample Request Body: Empty
```

Sample Response Body:

```json
{
  "sqlStatement": "your sql"
}
```

Sample Response Code: 200 (SQL has been returned.)

### 4. Delete the report instance

Endpoint: [DELETE /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'
```

Sample Response Body: Empty

Sample Response Code: 204 (The report instance has been deleted successfully.)

## Execute report and get the data

### 1. Create a report instance with execution stage

Execute report may take a while. You can set "prefer" to "respond-async" in header to run the report asynchronously.

Endpoint: [POST /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance) with executionStage=execute_data

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
"prefer": "respond-async"       # Optional, run report in asynchronous mode
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances?executionStage=execute_data' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'
```

Sample Response Body:

```json
{
  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"
}
```

Sample Response Code: 201 (A new report instance is created successfully.)

### 2. Answer the prompt (skip this step if report has no prompts)

Please refer to Workflow 1 Step 2.

### 3. Get report data

Endpoint: [GET /api/v2/reports/{reportId}/instances/{reportInstance}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/executeReport_1)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Response Body: See details in [MicroStrategy REST](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/executeReport_1)

Sample Response Code: 200 (Report data has been returned.)

### 4. Delete the report instance

Endpoint: [DELETE /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'
```

Sample Response Body: Empty

Sample Response Code: 204 (The report instance has been deleted successfully.)
