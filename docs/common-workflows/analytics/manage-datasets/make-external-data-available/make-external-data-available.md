---
title: Make external data available using the Push Data API
description: The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server.
---

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-724e8a71-2d94-4887-af80-f57d62503f46?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server.

- By providing a simpler, quicker way to get data out and add data back in, the Push Data API makes it easier to use MicroStrategy as a high-performance data storage and retrieval mechanism and supports predictive workflow by machine learning, artificial intelligence, and data scientist teams.
- The ability to make external data easily available extends MicroStrategy's reach to new and complex data sources where code, rather than end-users, manages the data modeling/mapping flow.
- The Push Data API supports close integration with the ecosystem of third-party ETL tools because it allows them to push data directly into MicroStrategy while allowing the most optimal utilization of MicroStrategy's cube capabilities. The Push Data API provides these tools, whether they are analyst or IT-oriented, with the option to create and update datasets on the MicroStrategy Intelligence Server without requiring an intermediate step of pushing the data into a warehouse.

When the Push Data API was introduced in MicroStrategy 10.11, it supported only a single table and data was uploaded and published in the same request. This single request workflow works well for small, simple dataset creation scenarios, but a newer multiple request workflow supports more complex scenarios where a large number of columns/metrics need to be managed at a different update/load/refresh schedule. This workflow separates dataset definition, data upload, and dataset creation, using multiple requests to incrementally add data before publication.

- [Creating a dataset with one request](create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request.md)

  If you have only a small amount of data, you can upload and publish data to the Intelligence Server at the same time. This method is quick and simple, but it has limitations such as only supporting a single table.

- [Creating a dataset with multiple requests](create-a-dataset-incrementally-with-multiple-requests/create-a-dataset-incrementally-with-multiple-requests.md)

  If you have a large amount of data, you can incrementally upload data to the Intelligence Server and publish it whenever you want. This method is more complex, but it supports multiple tables, is scalable, and allows you to schedule your uploads and publication for better performance.

:::tip

To improve performance, follow the recommendations below for chunking data:

- If the data size \<= 50MB, the recommended practice is to put data into one chunk.
- If the data size > 50MB, the recommended practice is to put data into separate chunks. The chunk size should range from 50-200MB, with an ideal chunk size of 100MB.

:::

Once you create a dataset and publish it to the Intelligence Server with either workflow, developers can use the Cube API or Report API to manipulate the data and users can create dashboards to analyze and present the data.
