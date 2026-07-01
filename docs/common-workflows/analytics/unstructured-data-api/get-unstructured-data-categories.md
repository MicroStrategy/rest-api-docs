---
title: Get categories for an unstructured data
description: This page explains how to retrieve categories (tags) for a specific unstructured data item that helps agents better understand and use the data.
---

<Available since="Strategy (March 2026)" />

This API is used to retrieve the categories for unstructured data. Categories are tags that describe the data within the unstructured data, helping agents better understand the context and content of the data source. By retrieving the categories, you can see which descriptive tags have been assigned to the data and use this information to understand how agents will interpret and utilize the data source when answering questions.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Get categories for an unstructured data

Endpoint: [GET /api/nuggets/\{id}/categories](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Auto%20Bots/getCategories)

Request Parameters:

| Name             | Located in | Description                 | Required | Type   |
| ---------------- | ---------- | --------------------------- | -------- | ------ |
| id               | path       | ID of the unstructured data | Yes      | string |
| X-MSTR-AuthToken | header     | Authentication token        | Yes      | string |
| X-MSTR-ProjectID | header     | Project ID                  | Yes      | string |

Sample Curl:

```bash
# Replace with your actual values
curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/nuggets/4B7EF8B549D2D32E941C3E9B7E0CD754/categories' \
-H 'X-MSTR-AuthToken: pqu5mkrcbv4461hh5qprr9j5ve' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
-H 'Content-Type: application/json'
```

Sample Response:

HTTP Status: 200 OK

```json
{
  "key1": ["v11", "v12", "v13"],
  "key2": ["v2", "v22"]
}
```

Response Structure:

The response is a JSON object where:

- Each key represents a category name (tag type)
- Each value is an array of strings representing the category values (tags) for that category

Notes:

- This API returns a 200 OK response with the categories as a JSON object.
- Categories are key-value pairs where the key is the category name (tag type) and the value is an array of strings (tags).
- If no categories are defined for the unstructured data, an empty object `{}` will be returned.
- Categories serve as descriptive tags that help agents understand the nature and context of the data, enabling them to provide more accurate and relevant answers.

## Use Cases

Tag Discovery and Understanding:

The main use cases for this API include discovering and understanding the descriptive tags assigned to unstructured data:

1. **Understanding Data Context**: Retrieve category tags to understand how the data is described and what context agents use when referencing this data source.
1. **Tag Validation**: Before updating categories, retrieve the current tags to understand the existing descriptive structure and ensure consistency.
1. **Data Source Inspection**: Check which tags are assigned to a data source to verify that agents will have the proper context for answering questions.
1. **UI Display**: Display the category tags in your user interface to help users understand what kind of information is contained in the unstructured data.
1. **Tag Analytics**: Analyze tag usage across multiple data sources to ensure consistent tagging and identify data sources that may need better descriptions.

Example implementation:

- Fetch category tags when displaying an unstructured data detail page to show users what kind of data is contained.
- Retrieve tags before updating them to ensure you maintain consistency with existing descriptive schemes.
- Use tag information to provide users with context about which questions the data source can help answer.
- Display tags in administrative interfaces to help users understand how agents interpret different data sources.
- Analyze tags across multiple data sources to ensure consistent and effective tagging for agent performance.
  Best Practices:

- Cache category tag information to reduce API calls, especially if tags don't change frequently.
- Handle empty category responses gracefully, indicating that the data source has no descriptive tags.
- Review retrieved tags to ensure they accurately describe the data and support agent understanding.
- Use tag information to help users understand what kind of questions this data source can help answer.
- Verify tags are meaningful and descriptive before relying on them for agent context.
