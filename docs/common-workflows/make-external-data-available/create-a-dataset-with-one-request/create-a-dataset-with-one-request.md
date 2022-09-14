---
title: Create a Dataset with One Request
description: You can use a single REST API to create a dataset using external data you upload directly to the Intelligence Server. If you have a small amount of data and need only one table in your dataset, this request workflow is the easiest to use. You simply define a single-table dataset and upload data to it using one Push Data API request.
---

You can use a single REST API to create a dataset using external data you upload directly to the Intelligence Server. If you have a small amount of data and need only one table in your dataset, this request workflow is the easiest to use. You simply define a single-table dataset and upload data to it using one Push Data API request.

:::tip

If you have a large amount of data, the recommendation is to use the [incremental approach to uploading data to the Intelligence Server](../create-a-dataset-incrementally-with-multiple-requests/create-a-dataset-incrementally-with-multiple-requests.md).

:::

- [Workflow for creating a dataset with one request](./workflow-create-a-dataset-with-one-request.md)

  You can create a dataset using external data with a single REST API request, `POST /api/datasets`. When you use this method, the dataset can have only one table and it is automatically saved in the My Reports folder for the authenticated user.

- [Workflow for modifying a dataset with one request](./workflow-modify-a-dataset-with-one-request.md)

  You can modify a dataset that was created using `POST /api/datasets` with a single REST API request, `PATCH /api/datasets/{datasetId}/tables/{tableId}`. Datasets created in other ways, such as Data Import in MicroStrategy Web, cannot be modified using a Push Data API.

:::tip

Datasets created using `POST /api/datasets/models` cannot be modified with `PATCH /api/datasets/{datasetId}/tables/{tableId}`. They are updated using the same [upload session workflow](../create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally.md) used to create the dataset; datasets created using `POST /api/datasets` can also be updated using the upload session workflow.

:::

- [Sample request workflow for creating and modifying a dataset](./workflow-create-and-modify-a-dataset-with-one-request.md)

  This workflow illustrates how to create a simple, one-table dataset with one REST API request and modify it with another single request.
