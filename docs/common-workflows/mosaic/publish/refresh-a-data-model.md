---
title: Refresh a data model
description: This workflow demonstrates how to refresh a data model using REST API.
---

<Available since="Strategy ONE (August 2025)" />

This workflow sample demonstrates how to refresh a data model by creating a data model instance and publish it using the REST API.

- [Log in](#log-in)
- [Create data model instance](#create-data-model-instance)
- [Get tables in the data model](#get-tables-in-the-data-model)
- [Publish](#publish)
- [Get publish status](#get-publish-status)
- [Delete data model instance](#delete-data-model-instance)

A detailed description of each step of this workflow is listed below.

## Log in

Endpoint: [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
```

- Request Body

```json
{
  "loginMode": 1,
  "username": "administrator",
  "password": ""
}
```

- Curl

```bash
curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json'\
--header 'Accept: application/json' -d '{
"loginMode":1,
"username": "administrator",
"password": ""
}' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login'
```

Sample Response

- Response Headers

```json
{
  "pragma": "no-cache",
  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",
  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
  "date": "Wed, 16 Aug 2017 01:42:31 GMT",
  "expires": "0",
  "content-type": null
}
```

The authorization token "`x-mstr-authtoken`" returns in the response header. It is used in other endpoints to authenticate the user.

- Response Body: Empty

- Response Code: 204 (Success: No Content)

## Create data model instance

Before you can publish a data model, you need to create a data model instance.

Endpoint: [POST /api/dataModels/\{dataModelId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/createDataModelInstance)

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
curl --location --request POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/9F4772B837604551B4D3CC916ADC5598/instances' --header 'X-MSTR-AuthToken: 2pgjiac8mvb7n4jfrj1ch6gok4' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Headers

```http
'X-MSTR-DataModelInstanceId: CBE2C87449CEFFF7C089AEA0EE6BBA9C'
```

The data model instance is returned in the response header.

- Response Body: Empty

- Response Code: 204 (Success: No Content)

## Get tables in the data model

You need to retrieve tables in the data model, as table IDs need to be specified in the request body of publish API. Select the tables that you want to refresh and define the refresh policy for each table. You can use query parameters, such as `offset` and `limit`, to control the pagination of tables returned in the response.

Endpoint: GET /api/model/dataModels/\{dataModelId}/tables

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Request Body: Empty

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/9F4772B837604551B4D3CC916ADC5598/tables?offset=0&limit=-1' \
--header 'X-MSTR-AuthToken: 2pgjiac8mvb7n4jfrj1ch6gok4' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--header 'Content-Type: application/json'
```

Sample Response

- Response Body:

```json
{
  "offset": 0,
  "limit": -1,
  "total": 2,
  "tables": [
    {
      "information": {
        "dateCreated": "2025-08-04T01:25:01.671Z",
        "dateModified": "2025-08-04T02:20:51.363Z",
        "versionId": "B754E270234CDD4B1004E5BF1FB5F4B1",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "B8A627B44A7A421C81741B868401E446",
        "subType": "logical_table",
        "name": "ytd_day"
      }
    },
    {
      "information": {
        "dateCreated": "2025-08-04T01:25:01.671Z",
        "dateModified": "2025-08-04T02:20:51.363Z",
        "versionId": "D7A6DE2C594782F4EB98E18BC6A28F75",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "612801B773AF4EFD974FF1F54FFAFB32",
        "subType": "logical_table",
        "name": "city_mnth_sls"
      }
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Publish

Now you can publish the data model with the newly created data model instance. The data model refresh settings are included in the request body, which specifies the refresh policy for each table in the data model. The refresh policy can be 'replace', 'add', 'update', or 'upsert'.

Endpoint: [POST /api/dataModels/\{dataModelId}/publish](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/publishDataModel)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-DataModelInstanceId: CBE2C87449CEFFF7C089AEA0EE6BBA9C'
```

- Request Body

```json
{
  "tables": [
    {
      "id": "0D1436DF3004418086D8BD3FD985EC4A",
      "refreshPolicy": "replace"
    }
  ]
}
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/9F4772B837604551B4D3CC916ADC5598/publish' \
--header 'X-MSTR-AuthToken: 2pgjiac8mvb7n4jfrj1ch6gok4' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--header 'X-MSTR-DataModelInstanceId: CBE2C87449CEFFF7C089AEA0EE6BBA9C' \
--header 'Content-Type: application/json' \
--data '{
  "tables": [
    {
      "id": "0D1436DF3004418086D8BD3FD985EC4A",
      "refreshPolicy": "replace"
    }
  ]
}'
```

Sample Response

- Response Headers

- Response Body: Empty

- Response Code: 204 (Success: No Content)

## Get publish status

It may take some time for the data model to be published. To check the status of the publish operation, use the following endpoint.

Endpoint: [GET /api/dataModels/\{dataModelId}/publishStatus](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/pollPublishStatus)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
'X-MSTR-DataModelInstanceId: CBE2C87449CEFFF7C089AEA0EE6BBA9C'
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/9F4772B837604551B4D3CC916ADC5598/publishStatus' \
--header 'X-MSTR-AuthToken: 2pgjiac8mvb7n4jfrj1ch6gok4' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--header 'X-MSTR-DataModelInstanceId: CBE2C87449CEFFF7C089AEA0EE6BBA9C'
```

Sample Response

- Response Body:

```json
{
  "status": 1
}
```

- Response Code: 200 (Success: OK)

## Delete data model instance

After the data model is published, you can delete the data model instance if it is no longer needed.

Endpoint: [DELETE /api/dataModels/\{dataModelId}/instances/\{instanceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/deleteDataModelInstance)

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
curl --location --request DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/dataModels/9F4772B837604551B4D3CC916ADC5598/instances/CBE2C87449CEFFF7C089AEA0EE6BBA9C' \
--header 'X-MSTR-AuthToken: 2pgjiac8mvb7n4jfrj1ch6gok4' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body: Empty

- Response Code: 204 (Success: No Content)
