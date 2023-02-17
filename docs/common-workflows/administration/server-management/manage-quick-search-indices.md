---
title: Manage quick search indices
description: The Manage Quick Search Indices API family allows you to view the search indices status for all projects, get search index status for a specific project, update search index status for a specific project, list properties for the search engine, and update properties for the search engine.
---

<Available since="2021 Update 8" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-75d970f5-31b8-4fda-93cc-1aabe3f7441d?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

The Manage Quick Search Indices API family allows you to view the search indices status for all projects, get search index status for a specific project, update search index status for a specific project, list properties for the search engine, and update properties for the search engine.

This workflow sample demonstrates how to manage quick search indices through Rest API.

Note:

- The API to update the search index status only supports rebuilding the search index for a specific project.

- The API to update search engine properties only supports enabling the search engine.

:::info

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials with the specified authentication mode, it initiates a session with the Intelligence server, and creates a unique authorization token for the client.

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## 1. Get search indices status for all projects

Endpoint: [GET /api/mstrServices/searchEngine/indices](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/listSearchIndices)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b6c4e09g3bt0kdomef8krq370q"
```

Sample Request Body: Empty

Sample Curl Request:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/mstrServices/searchEngine/indices' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: b6c4e09g3bt0kdomef8krq370q'
```

Sample Response Body:

```json
{
  "searchIndices": [
    {
      "projectName": "Platform Analytics",
      "projectId": "0DDDDEC8C94B320B4E93498C1EE98D18",
      "status": "completed_on",
      "percentComplete": 1.0,
      "searchableItems": 3285,
      "lastRealTimeUpdateTime": "2022-10-07T16:56:57.370+0000",
      "lastIncrementalCrawlTime": "2022-09-23T16:27:55.789+0000",
      "machineName": "aws-amazonlinux-base-template"
    },
    {
      "projectName": "MicroStrategy Tutorial",
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "status": "completed_on",
      "percentComplete": 1.0,
      "searchableItems": 5374,
      "lastRealTimeUpdateTime": "2022-10-07T16:56:21.621+0000",
      "lastIncrementalCrawlTime": "2022-09-23T16:22:18.378+0000",
      "machineName": "aws-amazonlinux-base-template"
    }
  ]
}
```

Response Code: 200 (Successfully list search indices information for all loaded projects)

## 2. Get search index status for a specific project

Endpoint: [GET /mstrServices/searchEngine/indices/{projectId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getSearchIndex)

To view your search index status, you need the project ID. E.g.,0DDDDEC8C94B320B4E93498C1EE98D18

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b6c4e09g3bt0kdomef8krq370q"
```

Sample Request Body: Empty

Sample Curl Request:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/mstrServices/searchEngine/indices/0DDDDEC8C94B320B4E93498C1EE98D18' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: b6c4e09g3bt0kdomef8krq370q'
```

Sample Response Body:

```json
{
  "projectName": "Platform Analytics",
  "projectId": "0DDDDEC8C94B320B4E93498C1EE98D18",
  "status": "completed_on",
  "percentComplete": 1.0,
  "searchableItems": 3285,
  "lastRealTimeUpdateTime": "2022-10-07T16:56:57.370+0000",
  "lastIncrementalCrawlTime": "2022-09-23T16:27:55.789+0000",
  "machineName": "aws-amazonlinux-base-template"
}
```

Response code: 200 (The index status of the project is returned successfully)

## 3. Change the search index status for a project

Endpoint: [PATCH /mstrServices/searchEngine/indices/{projectId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/updateSearchIndex)

To update the search index, you need the project ID. Eg. 0DDDDEC8C94B320B4E93498C1EE98D18

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b6c4e09g3bt0kdomef8krq370q"
```

Sample Request Body:

```json
{
  "searchIndexAction": "rebuild_index"
}
```

Curl:

```bash
curl -X 'PATCH' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/mstrServices/searchEngine/indices/0DDDDEC8C94B320B4E93498C1EE98D18' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: b6c4e09g3bt0kdomef8krq370q' \
  -H 'Content-Type: application/json' \
  -d '{
  "searchIndexAction": "rebuild_index"
}'
```

Sample Response Body: Empty

Response Code: 202 (The change search index status request is triggered successfully)

## 4. Obtain quick search engine properties

Endpoint: [GET /mstrServices/searchEngine](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getSearchEngine)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b6c4e09g3bt0kdomef8krq370q"
```

Sample Request Body: Empty

Curl:

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/mstrServices/searchEngine' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: b6c4e09g3bt0kdomef8krq370q'
```

Sample Response Body:

```json
{
  "enableSearchEngine": true,
  "indexDirectory": ".\\SearchData",
  "stopWords": [
    {
      "words": "and the",
      "locale": 1033
    }
  ]
}
```

Response Code: 200 (Successfully list properties for the quick search engine)

## 5. Update quick search engine properties

Endpoint: [PUT /mstrServices/searchEngine](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/updateSearchEngine)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "b6c4e09g3bt0kdomef8krq370q"
```

Sample Request Body:

```json
{
  "enableSearchEngine": true,
  "indexDirectory": ".\\SeachData",
  "stopWords": [
    {
      "words": "and the",
      "locale": 1033
    },
    {
      "words": "et ou la",
      "locale": 1036
    }
  ]
}
```

Curl:

```bash
curl -X 'PUT' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/mstrServices/searchEngine' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: b6c4e09g3bt0kdomef8krq370q' \
  -H 'Content-Type: application/json' \
  -d '{
  "enableSearchEngine": true,
  "indexDirectory": ".\\SeachData",
  "stopWords": [
    {
      "words": "and the",
      "locale": 1033
    },
    {
      "words": "et ou la",
      "locale": 1036
    }
  ]
}'
```

Sample Response Body:

```json
{
  "enableSearchEngine": true,
  "indexDirectory": ".\\SeachData",
  "stopWords": [
    {
      "words": "and the",
      "locale": 1033
    },
    {
      "words": "et ou la",
      "locale": 1036
    }
  ]
}
```

Response Code: 200 (The definition of the search engine is updated successfully)
