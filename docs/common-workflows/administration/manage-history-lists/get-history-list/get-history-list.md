---
title: Retrieve history lists
Description: Retrieve history lists using the MicroStrategy REST API.
---

<Available since="2021 Update 8" />

This workflow sample demonstrates how to retrieve messages from the history list using the MicroStrategy REST API.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get History Lists

Use the following endpoint to get a list of history lists:

### Request URL

### Endpoint: [GET /api/v2/historyList](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/History%20List/getHistoryList_1)

### Sample Curl Request

```bash
curl -X 'GET' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/historyList?scope=single_user&projectId=9DE876B611E7C33BF65B0080EF45D3E8&offset=0&limit=-1' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: p3itnh1510c2j7kg29t29ju5us'
```

### Request Headers

| Name               | Type   | Description         |
| ------------------ | ------ | ------------------- |
| `X-MSTR-AuthToken` | Header | Authorization token |

### Request Parameters

| Name                     | Located in | Description                                                                                                  | Required | Type                                     |
| ------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------- |
| scope                    | Query      | History list retrieval scope, options: `single_user` or `all_users`                                          | No       | string (`single_user`, `all_users`)      |
| projectId                | Query      | Field to filter on project ID of the job                                                                     | No       | string                                   |
| targetInfo.name          | Query      | Name of history list message target object, used for filtering as 'contains'                                 | No       | string                                   |
| messageDisplayName       | Query      | Message Display Name                                                                                         | No       | string                                   |
| ownerId                  | Query      | Message Owner ID                                                                                             | No       | string                                   |
| targetInfo.objectCreator | Query      | Name of object creator                                                                                       | No       | string                                   |
| type                     | Query      | Type of the content, options: `report`, `document`, `dossier`                                                | No       | string (`report`, `document`, `dossier`) |
| status                   | Query      | Message status                                                                                               | No       | string                                   |
| readStatus               | Query      | Message read status                                                                                          | No       | boolean                                  |
| applicationType          | Query      | Application type                                                                                             | No       | string                                   |
| offset                   | Query      | Starting point within the collection of returned results. Used to control paging behavior.                   | No       | integer (int32)                          |
| limit                    | Query      | Maximum number of items returned for a single request. Used to control paging behavior. Use -1 for no limit. | No       | integer (int32)                          |

### Response

If successful, this API call returns a `200 OK` status code and the list of documents in the response body. The response body follows the `HistoryListMessages` schema.

#### Sample Response

```json
{
  "historyList": [
    {
      "messageId": "0A6B683C4AF5FECC365F4CA18C11710A",
      "title": "2.NormalRWD",
      "stateId": 0,
      "saveStateId": 0,
      "serverStateId": 0,
      "messageType": "read_message",
      "status": "reserved",
      "sequenceNumber": 10,
      "parentId": "00000000000000000000000000000000",
      "clientType": "MicroStrategyWeb",
      "requestType": "document",
      "requestStatus": "job_running",
      "startTime": "2022-06-30T06:10:50Z",
      "finishTime": "2022-06-30T06:10:52Z",
      "targetInfo": {
        "creationTime": "2022-06-30T06:10:50Z",
        "modificationTime": "2022-06-30T06:10:52Z",
        "objectId": "E0783EAF44DEF424CA5215A228D33606",
        "type": "document_definition",
        "objectDesc": "",
        "objectCreator": "Administrator",
        "folderId": "D6253070472AA691A4E9C88E72B7AC64",
        "folderName": "HLCodeCoverage"
      },
      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8",
      "projectName": "MicroStrategy Tutorial",
      "resultFlags": 0,
      "cacheId": null,
      "messageText": "User request is completed.",
      "displayName": "2.NormalRWD",
      "ownerName": "Administrator",
      "ownerId": "D6253070472AA691A4E9C88E72B7AC6D",
      "locale": 0,
      "language": "English (United States)",
      "children": [
        {
          "messageId": "33732CEC431C52F3FE781183676E2D62",
          "title": "1.NormalReport",
          "stateId": 0,
          "saveStateId": 0,
          "serverStateId": 0,
          "messageType": "general",
          "status": "new_message",
          "sequenceNumber": 11,
          "parentId": "0A6B683C4AF5FECC365F4CA18C11710A",
          "clientType": "MicroStrategyWeb",
          "requestType": "report",
          "requestStatus": 1,
          "startTime": "2022-06-30T06:10:51Z",
          "finishTime": "2022-06-30T06:10:51Z",
          "targetInfo": {
            "creationTime": "2022-06-30T06:10:51Z",
            "modificationTime": "2022-06-30T06:10:51Z",
            "objectId": "1806052048A0120B1168D2B6EF66BA5B",
            "type": "report_definition",
            "objectDesc": "",
            "objectCreator": "Administrator",
            "folderId": "D6253070472AA691A4E9C88E72B7AC64",
            "folderName": "HLCodeCoverage"
          },
          "projectName": "MicroStrategy Tutorial",
          "resultFlags": "dtls_expr_nothing",
          "messageText": "User request is completed.",
          "displayName": "1.NormalReport",
          "ownerName": "Administrator",
          "locale": 0,
          "language": "English (United States)"
        }
      ]
    },
    {
      "messageId": "A414294343F46D29AE9DBF84F6B25A2E",
      "title": "3Ms",
      "stateId": 0,
      "saveStateId": 0,
      "serverStateId": 0,
      "messageType": "general",
      "status": "new_message",
      "sequenceNumber": 9,
      "parentId": "00000000000000000000000000000000",
      "clientType": "MicroStrategyWeb",
      "requestType": "report",
      "requestStatus": "loading_prompt",
      "startTime": "2022-07-30T06:10:51Z",
      "finishTime": "2022-07-30T06:10:58Z",
      "targetInfo": {
        "creationTime": "2022-07-30T06:10:51Z",
        "modificationTime": "2022-06-30T06:10:58Z",
        "objectId": "6B9F06CB452CD307AE4F299EC1CD380A",
        "type": "report_definition",
        "objectDesc": "",
        "objectCreator": "Administrator",
        "folderId": "BE4B09B24918EA987267DBA2D9D11593",
        "folderName": "_Chun"
      },
      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8",
      "projectName": "MicroStrategy Tutorial",
      "resultFlags": "dtls_expr_nothing",
      "messageText": "User request is completed.",
      "displayName": "3Ms",
      "ownerName": "Administrator",
      "locale": 0,
      "language": "English (United States)"
    }
  ]
}
```
