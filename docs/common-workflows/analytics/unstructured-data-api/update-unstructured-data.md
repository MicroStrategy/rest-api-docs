---
title: Update unstructured data
description: This page describes how to update unstructured data by re-uploading a file to a specific unstructured data.
---

<Available since="Strategy ONE (March 2026)" />

This API is used to update unstructured data by re-uploading a file. When you need to refresh or replace the content of existing unstructured data, this endpoint allows you to upload a new file that will replace the existing data. The unstructured data's metadata and configuration are preserved while the underlying data source is updated.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Update an unstructured data

Endpoint: [PUT /api/nuggets/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Auto%20Bots/updateNuggets)

Request Parameters:

| Name             | Located in | Description                     | Required | Type    |
| ---------------- | ---------- | ------------------------------- | -------- | ------- |
| id               | path       | ID of the unstructured data     | Yes      | string  |
| X-MSTR-ProjectID | header     | Project ID                      | Yes      | string  |
| X-MSTR-AuthToken | header     | Authentication token            | Yes      | string  |
| fileName         | form-data  | Name of the file being uploaded | Yes      | string  |
| fileLocation     | form-data  | Location of the file            | No       | string  |
| fileType         | form-data  | Type of the file                | Yes      | integer |
| fileSize         | form-data  | Size of the file in bytes       | No       | integer |
| file             | form-data  | The file to upload              | Yes      | binary  |

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
curl -X PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/nuggets/4B7EF8B549D2D32E941C3E9B7E0CD754' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'X-MSTR-AuthToken: pqu5mkrcbv4461hh5qprr9j5ve' \
-F 'file=@/path/to/your/document.pdf' \
-F 'fileName=document.pdf' \
-F 'fileType=0' \
-F 'fileSize=1024000'
```

Sample Response:

HTTP Status: 200 OK

```json
{
  "id": "4B7EF8B549D2D32E941C3E9B7E0CD754"
}
```

Notes:

- This API returns a 200 OK response, indicating that the request was successful.
- You can check the processing status of the unstructured data using a separate status endpoint.
- The file should be uploaded as multipart/form-data.

## Use Cases

Content Refresh:

The main use case for this API is to update existing unstructured data with fresh data:

1. **Document Updates**: When a document that serves as a knowledge source has been updated, you can use this API to replace the old version with the new one while maintaining the same unstructured data ID and configuration.
1. **Data Refresh**: For regularly updated datasets, you can schedule automated updates to ensure the AI agent always works with the latest information.
1. **Content Correction**: If errors are found in the original uploaded content, you can quickly replace it with a corrected version without needing to reconfigure the agent.

Example implementation:

- Monitor source documents for changes using file system watchers or scheduled checks.
- When changes are detected, call this API to upload the updated file.
- Optionally implement a versioning system to track updates and allow rollbacks, if needed.
- Set up monitoring to track the processing status after upload and handle any errors.

Best Practices:

- Ensure the new file is compatible with the original file type to avoid processing errors.
- Consider implementing validation checks before uploading to verify file integrity.
- Keep track of upload timestamps and versions for audit purposes.
- Handle the asynchronous nature of the API by implementing proper status checking mechanisms.
