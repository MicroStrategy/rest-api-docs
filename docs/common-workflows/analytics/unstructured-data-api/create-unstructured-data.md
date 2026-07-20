---
title: Create unstructured data
description: This page describes how to create unstructured data by uploading a file to a specific folder.
---

<Available since="Strategy (April 2026)" />

Use this API to create unstructured data by uploading a file. When you add a new knowledge source for agents, call this endpoint to upload the file and create an unstructured data item that can be indexed and used to answer questions.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Create an unstructured data

Endpoint: [POST /api/nuggets?type=unstructuredData](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Agent/createNuggets)

Request Parameters:

| Name             | Located in | Description                       | Required | Type    |
| ---------------- | ---------- | --------------------------------- | -------- | ------- |
| type             | query      | Must be `unstructuredData`        | Yes      | string  |
| X-MSTR-AuthToken | header     | Authentication token              | Yes      | string  |
| X-MSTR-ProjectID | header     | Project ID                        | Yes      | string  |
| fileName         | form-data  | Name of the file being uploaded   | Yes      | string  |
| fileType         | form-data  | File type code                    | Yes      | integer |
| fileSize         | form-data  | Size of the file in bytes         | No       | integer |
| folderId         | form-data  | Parent folder ID for organization | Yes      | string  |
| file             | form-data  | The file to upload                | Yes      | binary  |

File Type Mapping (the `fileType` parameter must be a numeric value):

| File Type | Content Type | Value |
| --------- | ------------ | ----- |
| PDF       | PDF          | 0     |
| WORD      | DOCX         | 1     |
| MARKDOWN  | MD           | 3     |
| TEXT      | TXT          | 4     |
| EMAIL     | EMAIL        | 5     |

Sample Curl:

```bash
# Replace with your actual values
curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/nuggets?type=unstructuredData' \
-H 'X-MSTR-AuthToken: pqu5mkrcbv4461hh5qprr9j5ve' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-F 'file=@/path/to/your/document.pdf' \
-F 'fileName=document.pdf' \
-F 'fileType=0' \
-F 'fileSize=1024000' \
-F 'folderId=4B7EF8B549D2D32E941C3E9B7E0CD700'
```

Sample Response:

HTTP Status: 200 OK

```json
{
  "id": "4B7EF8B549D2D32E941C3E9B7E0CD754"
}
```

Notes:

- This API returns a 200 OK response, indicating successful creation.
- The uploaded data is created first, then indexing and processing continue in the background.
- You can use status/query APIs to track processing progress for one or more unstructured data items.
- The file must be uploaded as `multipart/form-data`.

## Use Cases

Knowledge Source Onboarding:

The main use cases for this API include creating new unstructured data sources for agents:

1. **Document Ingestion**: Upload policy documents, product manuals, or knowledge base content to make the content available for agent responses.
1. **Departmental Knowledge Setup**: Create data sources per team or domain and optionally organize the content by `folderId`.
1. **Incremental Rollout**: Add content in batches and monitor asynchronous indexing before making it broadly available.
1. **Automation Pipelines**: Integrate this API in CI/CD or data workflows to keep agent-accessible content up to date.

Example implementation:

- Validate file format and size before upload.
- Call this API to create unstructured data and persist the returned nugget ID.
- Poll status endpoints to detect completion or failures.
- Update categories after ingestion to improve downstream retrieval quality.

Best Practices:

- Always send `type=unstructuredData` explicitly for unstructured data creation.
- Keep file metadata (`fileName`, `fileType`, `fileSize`) consistent with the actual uploaded file.
- Use `folderId` to maintain a manageable hierarchy when ingesting many sources.
- Implement retry and timeout handling because processing is asynchronous.
- Apply a consistent naming convention for files and related categories to improve maintainability.
