---
title: Delete a derived element in report
description: This workflow sample demonstrates how to delete a derived element in report using REST APIs.
---

<Available since="2021 Update 7" />

This workflow sample demonstrates how to delete an existing derived element in report. Please be noted that if standalone derived element is referred in report, this API will not delete the standalone derived element, but clear its reference on report.

## Delete a derived element in report

You want to delete the existing derived element in report. The report object ID is `9B9ADA7F464E63CE0D0B709B03BD9370`. The derived element object ID is `610B9CC14AD9DCB69F094C89D3B5480B`. The project ID is `B19DEDCC11D4E0EFC000EB9495D0F44F`.

Obtain the authorization token needed to execute the request using `POST /api/auth/login`. Obtain the project ID from `GET /api/projects`.

:::info

A report instance is required for getting, creating, updating, deleting derived elements in report. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.

:::

### 1. Create a report instance

Endpoint: [POST /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance)

Sample Request Header:

```json
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'
```

Sample Response Body:

```json
{
  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"
}
```

Sample Response Code: 201 (A new report instance is created successfully.)

### 2. Delete an existing derived element in report

Endpoint: [DELETE /api/model/reports/{reportId}/derivedElements/{derivedElementId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportDerivedElement)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/derivedElements/610B9CC14AD9DCB69F094C89D3B5480B' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4' -H 'Content-Type: application/json'
```

Sample Response Body: Empty

Response Code: 204 (The derived element is deleted from report.)

### 3. Save the report instance

The delete operation will take effect on metadata once the report instance is saved..

Endpoint: [POST /api/model/reports/{reportId}/instances/save](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-saveReportInstance)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"
```

Sample Curl:

```bash
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances/save' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'
```

Sample Response Body:

```json
{
  "objectId": "9B9ADA7F464E63CE0D0B709B03BD9370"
}
```

Sample Response Code: 201 (The report is saved successfully.)

### 4. Delete the report instance

Endpoint: [DELETE /api/model/reports/{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance)

Sample Request Header:

```json
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
