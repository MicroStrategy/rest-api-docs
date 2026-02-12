---
title: Update categories for an unstructured data
description: This page explains how to retrieve categories (tags) for a specific unstructured data item that helps agents better understand and use the data.
---

<Available since="Strategy ONE (March 2026)" />

This API is used to update the categories for unstructured data. Categories are tags that describe the data within the unstructured data, helping agents better understand the context and content of the data source. By assigning appropriate categories (tags), you enable agents to provide more accurate and contextually relevant answers to user questions.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Update categories for an unstructured data

Endpoint: [PUT /api/nuggets/\{id}/categories](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Auto%20Bots/updateCategories)

Request Parameters:

| Name             | Located in | Description                 | Required | Type   |
| ---------------- | ---------- | --------------------------- | -------- | ------ |
| id               | path       | ID of the unstructured data | Yes      | string |
| X-MSTR-AuthToken | header     | Authentication token        | Yes      | string |
| X-MSTR-ProjectID | header     | Project ID                  | Yes      | string |
| body             | body       | Categories to update        | Yes      | object |

Request Body:

The request body should be a JSON object where each key represents a category name and the value is an array of category values. For example:

```json
{
  "key1": ["v11", "v12", "v13"],
  "key2": ["v2", "v22"]
}
```

Sample Curl:

```bash
# Replace with your actual values
curl -X PUT 'https://demo.microstrategy.com/MicroStrategyLibrary/api/nuggets/4B7EF8B549D2D32E941C3E9B7E0CD754/categories' \
-H 'X-MSTR-AuthToken: pqu5mkrcbv4461hh5qprr9j5ve' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json' \
-d '{
  "department": [
    "sales",
    "marketing",
    "engineering"
  ],
  "region": [
    "north",
    "south"
  ]
}'
```

Sample Response:

HTTP Status: 200 OK

```json
{
  "status": "success"
}
```

Notes:

- This API returns a 200 OK response upon successful update of the categories.
- Categories are key-value pairs where the key is the category name (tag type) and the value is an array of strings representing category values (tags).
- Updating categories will replace the existing categories for the specified unstructured data.
- Categories serve as descriptive tags that help agents understand the nature and context of the data, enabling them to provide more accurate and relevant answers.

## Use Cases

Data Description and Agent Enhancement:

The main use cases for this API include tagging unstructured data to help agents better understand and utilize the content:

1. **Content Description**: Tag unstructured data with descriptive categories (e.g., content type, department, topic) to help agents understand what kind of information is contained in the data source.
1. **Contextual Understanding**: Use category tags to provide context about the data, enabling agents to determine when this data source is relevant for answering specific questions.
1. **Improved Answer Accuracy**: By tagging data with relevant categories, agents can better match user questions to the appropriate data sources, resulting in more accurate and contextually relevant answers.
1. **Domain-Specific Knowledge**: Assign domain-specific tags (e.g., "finance", "HR policies", "technical documentation") to help agents identify which data sources to reference for different types of questions.

Example implementation:

- Define a standard set of category tags for your organization (e.g., "sales", "product-info", "policies", "technical-specs").
- When uploading new unstructured data, assign descriptive tags based on the content and its intended use.
- Update category tags as the content or organizational focus changes to keep agent responses relevant.
- Use consistent tagging schemes across all unstructured data to help agents make better connections.
- Tag data with multiple categories when appropriate to cover different aspects of the content.

Best Practices:

- Use consistent and descriptive naming conventions for category tags across your organization.
- Keep tags simple, clear, and focused on helping agents understand the data content.
- Document your tagging schema to ensure all team members use tags consistently.
- Use specific tags rather than overly broad ones to give agents more precise context.
- Regularly review and update tags to ensure they accurately describe the current data and support agent performance.
