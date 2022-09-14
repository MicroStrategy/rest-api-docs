---
title: Workflow Sample - Create a Dataset with One Request
sidebar_label: Create a Dataset with One Request
description: When you choose to upload external data directly to the Intelligence Server with one REST API request, the dataset can have only one table and it is automatically saved in the My Reports folder for the authenticated user. The workflow to upload and publish data with one REST API request is described below.
---

When you choose to upload external data directly to the Intelligence Server with one REST API request, the dataset can have only one table and it is automatically saved in the My Reports folder for the authenticated user.

The workflow to upload and publish data with one REST API request is described below.

1. Deploy the `MicroStrategyLibrary` war file.
1. Use the `POST /api/auth/login` request to create a session and get an authorization token.

   To make sure that you have permission to create a dataset on the Intelligence Server, send a `POST /api/auth/login` request to create a session. If it is successful, this request returns an authorization token that you then use in the `POST /api/datasets` request.

1. Prepare the external data that you want to upload to MicroStrategy.
1. Use the `POST /api/datasets` request to upload your external data to the MicroStrategy Intelligence Server.

   You define the external data that you want to upload in the `body` parameter of the `POST /api/datasets` request.

To help you get started, we have provided you with a working demo that you can use to try out the single-table Push Data API.

1. Download the [Push Data API demo project](https://www2.microstrategy.com/producthelp/2021/Downloads/RESTSDK/DatasetAPI/JSPushDataDemo.zip).
1. Extract the contents of the project.
1. In the project, click on the file called `push-data-demo.html` and the demo opens.
1. On the **Step 1: Login** tab, enter the configuration information for your environment and create a session on the Intelligence Server.

   1. Enter the name and port of your Intelligence Server, and the MicroStrategy project where you want the dataset to be created.
   1. Enter the name and port of your REST Server, and whether your server uses the HTTPS protocol.
   1. Click **Login**.

1. Open the **Step 2: Create dataset** tab, choose the external data to be uploaded and create the dataset on the Intelligence Server.

   1. Under **A: Configure dataset**, you configure the request to create the model for the data you are uploading. If you want to use the demo data, simply leave the request unchanged because it represents the model that is used with the sample demo data. If you want to use a different data file, you must change the model in the request to reflect the structure of your data file.

      ```json
      {
        "name": "Demo",
        "tables": [{}]
      }
      ```

   1. For **B. Select json data file**:

      1. Click **Choose file** and select the sample demo data file that you downloaded and extracted as part of the demo project. It is located in the `/assets` folder of the downloaded project. This file provides the data that will be used as the value of `"data"` in the request.

         ```json
         {
           "name": "Demo",
           "tables": [
             {
               "data": "Select file to insert data here",
               "name": "SALES_TABLE"
             }
           ]
         }
         ```

      1. Click **Create dataset**, and the response is displayed. Open MicroStrategy and you can now see the dataset you created under My Reports.

This demo shows you how easy it is to upload your external data to the Intelligence Server. When you use the Push Data API with your own data, you define the data to upload in the `body` parameter of the POST request. This request creates a dataset on the Intelligence Server. The dataset is made up of a single table that represents a structured set of data.

If you want to create a dataset with multiple tables, use the [incremental, multiple request workflow](../create-a-dataset-incrementally-with-multiple-requests/create-a-dataset-incrementally-with-multiple-requests.md).

- The `POST /api/datasets` request has the following parameters:

  | Parameter        | Description                                                                                                                                                                | Parameter Type | Data Type |
  | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------- |
  | X-MSTR-AuthToken | Authorization token returned from the POST /api/auth/login request                                                                                                         | header         | string    |
  | body             | Definition of the external data to be uploaded to theMicroStrategy Intelligence Server. The dataset is made up of a single table that represents a set of structured data. | body           | string    |
  |                  |                                                                                                                                                                            |                |           |

- The `body` parameter defines the data you want to upload to the Intelligence Server. The model for this parameter has the following keys:

  | Key            |                | Data Type           | Description                                                                                                                                                   |
  | -------------- | -------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | DatasetCreator |                |                     |                                                                                                                                                               |
  |                | name           | string              | Name of the dataset to be created from the external data                                                                                                      |
  |                | tables         | Array[TableCreator] | Table to be created in the dataset                                                                                                                            |
  |                | attributes     | Array[DIAttribute]  | Attributes to be included in the dataset                                                                                                                      |
  |                | metrics        | Array[DIMetric]     | Metrics to be included in the dataset                                                                                                                         |
  | TableCreator   |                |                     |                                                                                                                                                               |
  |                | name           | string              | Name of the table                                                                                                                                             |
  |                | columnHeaders  | Array[columnHeader] | Column headers for the table                                                                                                                                  |
  |                | data           | string              | Data in the table in stringified JSON format encoded as Base64                                                                                                |
  | DIAttribute    |                |                     |                                                                                                                                                               |
  |                | name           | string              | Name of the attribute                                                                                                                                         |
  |                | attributeForms | Array[DIForm]       | Set of forms for the attribute                                                                                                                                |
  | DIMetric       |                |                     |                                                                                                                                                               |
  |                | name           | string              | Name of the metric                                                                                                                                            |
  |                | expressions    | Array[DIExpression] | Expression that links the metric to a column header in the table                                                                                              |
  | ColumnHeader   |                |                     |                                                                                                                                                               |
  |                | name           | string              | Name of the column header                                                                                                                                     |
  |                | dataType       | string              | Data type for the values in the column with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME' |
  |                | dateFormat     | string (optional)   | Date format for DATETME values in the column with default format of YYYY-MM-DD[(T)hh:mm:[ss]]                                                                 |
  | DIForm         |                |                     |                                                                                                                                                               |
  |                | category       | string              | Category of the attribute form with values such as ID or DESC                                                                                                 |
  |                | expressions    | Array[DIExpression] | Expression that links the attribute form to a column header in the table                                                                                      |
  | DIExpression   |                |                     |                                                                                                                                                               |
  |                | formula        | string              | Expression that links a metric or attribute form in the dataset to a column header in the table, in the format table_name.column_name                         |
  |                |                |                     |                                                                                                                                                               |

- The `POST /api/datasets` request returns a response indicating whether the operation was successful or failed.

  - If the result is successful, you get a response like the following:

    ```json
    {
      "datasetId": "21F855B44A5B75E4E16089BD1A092B9E",
      "name": "Demo",
      "tables": [
        {
          "id": "E281851C158933CA4983912447173529",
          "name": "SALES_TABLE"
        }
      ]
    }
    ```

  - If the operation fails, you get one of the responses below:

    | HTTP Status Code | Reason                |
    | ---------------- | --------------------- |
    | 400              | Bad request           |
    | 401              | Unauthorized          |
    | 500              | Internal server error |
    |                  |                       |
