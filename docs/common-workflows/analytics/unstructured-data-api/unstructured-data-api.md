---
title: Unstructured Data APIs
description: This page contains a summary of REST APIs for managing unstructured data. You can use REST API requests to update and configure unstructured data that agents use to answer questions.
---

<Available since="Strategy (March 2026)" />

Strategy (March 2026) introduces a set of public APIs designed to manage unstructured data that power agent capabilities.

The Unstructured Data APIs provide comprehensive control over unstructured data, allowing you to update data content, manage categories (tags) that describe the data, and retrieve category information. Unstructured data serves as knowledge sources that agents use to provide contextual and accurate answers to user questions. Categories are descriptive tags that help agents understand the nature and content of each data source, enabling them to provide more relevant and accurate responses. These APIs enable you to keep your data up-to-date and well-described, ensuring optimal agent performance.

Previously available as internal APIs, these endpoints are now publicly accessible, enabling developers to seamlessly integrate unstructured data management into their applications and workflows.

### Key Features

- **Create unstructured data**: Upload new files as unstructured data sources to expand the agent knowledge base.
- **Update unstructured data**: Re-upload files to refresh or replace the content of existing unstructured data, keeping your agent's knowledge base current.
- **Update categories**: Assign or modify category tags that describe the data within unstructured data, helping agents better understand the content and context of each data source.
- **Retrieve categories**: Get the current category tags of an unstructured data source to understand which descriptive information is available to agents.

### Benefits

- **Content Freshness**: Keep your agent's knowledge base up-to-date by replacing outdated documents with current versions.
- **Better Agent Understanding**: Use category tags to describe the data within unstructured data, helping agents understand the context and content of each data source.
- **Improved Answer Accuracy**: By tagging data with relevant categories, agents can better understand when and how to use specific data sources, resulting in more accurate and contextually relevant answers.
- **Flexible Content Management**: Update data without needing to reconfigure your agents or change their IDs.

For more information on how to use these APIs, see the following sections of this manual:

- [Create an unstructured data](./create-unstructured-data.md)
- [Update an unstructured data](./update-unstructured-data.md)
- [Update categories for an unstructured data](./update-unstructured-data-categories.md)
- [Get categories for an unstructured data](./get-unstructured-data-categories.md)
