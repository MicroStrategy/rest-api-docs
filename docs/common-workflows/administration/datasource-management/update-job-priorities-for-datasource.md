---
title: Update job priorities for datasource
description: This workflow sample demonstrates how to update job priorities for a datasource.
---

This workflow sample demonstrates how to update job priorities for a datasource.

1. [Get job prioritization info for a database source.](#get-job-prioritization-info-for-a-database-source) `GET /api/datasources/{datasourceId}/jobPriorities`
1. [Update job prioritization info for a database source.](#update-job-prioritization-info-for-a-database-source) `PATCH /api/datasources/{datasourceId}/jobPriorities`

A detailed description of each step of this request is listed down below.

## Get job prioritization info for a database source

End Point: `GET /api/datasources/{datasourceId}/jobPriorities`

This endpoint allows the caller to get job prioritization info for a specific database source with the MicroStrategy REST Server. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. You can find the datasourceId using the endpoint `GET /api/datasources`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing info regarding the job priorities for the datasource.

Sample Request

- Request Headers

  ```http
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl --location -g --request GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/{{datasourceId}}/jobPriorities' \
  --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

Sample Response

- Response Body

  ```json
  {
    "name": "Warehouse",
    "lowerBound": 0,
    "upperBound": 0,
    "threadCount": 0,
    "maxThreadCount": -1,
    "minThreadCount": -1,
    "jobQueues": [
      {
        "name": "HIGH",
        "lowerBound": 0,
        "upperBound": 333,
        "threadCount": 0,
        "maxThreadCount": 2,
        "minThreadCount": 2,
        "jobQueues": [],
        "members": {
          "elements": [],
          "defaultPriority": -1
        }
      },
      {
        "name": "MEDIUM",
        "lowerBound": 333,
        "upperBound": 667,
        "threadCount": 0,
        "maxThreadCount": 2,
        "minThreadCount": 2,
        "jobQueues": [],
        "members": {
          "elements": [],
          "defaultPriority": -1
        }
      },
      {
        "name": "LOW",
        "lowerBound": 667,
        "upperBound": 1000,
        "threadCount": 0,
        "maxThreadCount": 2,
        "minThreadCount": 2,
        "jobQueues": [],
        "members": {
          "elements": [],
          "defaultPriority": -1
        }
      }
    ],
    "members": {
      "elements": [],
      "defaultPriority": -1
    }
  }
  ```

  Sample Response Code: 200 (Get job priorities.)

## Update job prioritization info for a database source

End Point: `PATCH /api/datasources/{datasourceId}/jobPriorities`

This endpoint allows the caller to update job prioritization info for a specific database source with the MicroStrategy REST Server. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. You can find the datasourceId using the endpoint `GET /api/datasources`. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a empty response body.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body

  ```json
  {
    "operationList": [
      {
        "op": "replace",
        "path": "/jobQueues/HIGH/threadCount",
        "value": 8
      }
    ]
  }
  ```

- Curl

  ```bash
  curl --location -g --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/{{datasourceId}}/jobPriorities' \
  --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "operationList": [
                      {
                          "op": "replace",
                          "path": "/jobQueues/HIGH/threadCount",
                          "value": 8
                      }
                  ]
  }'
  ```

Sample Response

- Response Body: Empty Sample Response Code: 201 (Update job priorities for datasource.)
