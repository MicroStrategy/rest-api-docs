---
title: Workflow Sample - Modify a Dataset with One Request
sidebar_label: Modify a Dataset with One Request
description: You can use a single Push Data API request to modify a dataset that was created using POST /datasets. You can add new data and modify existing data in the dataset. The workflow for using the Push Data API to modify a dataset is described below.
---

You can use a single Push Data API request to modify a dataset that was [created using `POST /api/datasets`](../create-a-dataset-with-one-request/create-a-dataset-with-one-request.md). You can add new data and modify existing data in the dataset.

The workflow for using the Push Data API to modify a dataset is described below.

1. Deploy the `MicroStrategyLibrary` war file.
1. Use the `POST /api/auth/login` request to create a session and get an authorization token.

   To make sure that you have permission to modify a dataset on the Intelligence Server, send a `POST /api/auth/login` request to create a session. If it is successful, this request returns an authorization token that you then use in the `PATCH /api/datasets/{datasetId}/tables/{tableId}` request.

1. Prepare the external data that you want to use to modify the dataset.
1. Use the `PATCH /api/datasets/{datasetId}/tables/{tableId}` request to upload external data and use it to modify the dataset on the Intelligence Server.

   You define the external data that you want to upload in the `body` parameter of the PATCH request . You specify the action that should be taken to modify the dataset using the `updatePolicy` parameter of the PATCH request.

The dataset is made up of tables, with each table representing a structured set of data. The `datasetId` specifies the dataset that contains the table you want to modify, and the `tabletId` specifies the table that contains the data you want to modify.

:::tip

If you created the dataset with a single request, it can have only one table; if you created it with multiple requests, it can have one or more tables.

:::

- The `PATCH /api/datasets/{datasetId}/tables/{tableId}` request has the following parameters:

  | Parameter        | Description                                                                                                                                                       | Parameter Type | Data Type |
  | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------- |
  | X-MSTR-AuthToken | Authorization token returned from the POST /api/auth/login request                                                                                                | header         | string    |
  | datasetId        | ID of the dataset to be modified                                                                                                                                  | path           | string    |
  | tableId          | ID of the dataset table to be modified                                                                                                                            | path           | string    |
  | updatePolicy     | Type of update action to take: add, update, upsert, or replace                                                                                                    | header         | string    |
  | body             | Defines the external data to be uploaded to the MicroStrategy Intelligence Server. The dataset is made up of tables that each represent a set of structured data. | body           | string    |

- The `updatePolicy` parameter in the header defines the type of action you want to take to modify the database table. Actions include:
  - Add Adds new data if it does not exist in the current dataset table. Does not replace data if it already exists in the current dataset table.
  - Update Replaces data if it does exist in the current dataset table. Does not add new data if it does not exist in the current dataset table.
  - Upsert Adds new data if it does not exist in the current dataset table. Replaces data if it does exist in the current dataset table.
  - Replace Replaces all the existing data in the dataset table with new imported external data.
- The `body` parameter defines the data you want to upload to the Intelligence Server and use to modify the database table. The model for this parameter has the following keys

| Key          |               | Data Type            | Description                                                                                                                                                   |
| ------------ | ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TableCreator |               |                      |                                                                                                                                                               |
|              | name          | string               | Name of the table to be modified                                                                                                                              |
|              | columnHeaders | Array [columnHeader] | Column headers for the table                                                                                                                                  |
|              | data          | string               | Data in the table in stringified JSON format encoded as Base64                                                                                                |
| ColumnHeader |               |                      |                                                                                                                                                               |
|              | name          | string               | Name of the column header                                                                                                                                     |
|              | dataType      | string               | Data type for the values in the column with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME' |
|              | dateFormat    | string (optional)    | Date format for DATETME values in the column with default format of YYYY-MM-DD[(T)hh:mm:[ss]]                                                                 |
|              |               |                      |                                                                                                                                                               |

- If the operation fails, the `PATCH /api/datasets/{datasetId}/tables/{tableId}` request returns a response indicating why it failed.

| HTTP Status Code | Reason                |
| ---------------- | --------------------- |
| 400              | Bad request           |
| 401              | Unauthorized          |
| 500              | Internal server error |
|                  |                       |
