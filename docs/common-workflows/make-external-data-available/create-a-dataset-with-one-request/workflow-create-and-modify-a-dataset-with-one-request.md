---
title: Workflow Sample - Create and Modify a Dataset with One Request
sidebar_label: Create and Modify a Dataset with One Request
description: The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request.
---

The steps below illustrate the workflow for creating and modifying a dataset, using external data uploaded directly to the Intelligence Server. In this workflow, you create the dataset with one REST API request and you modify it with another single request.

1. [Log in](#log-in) User authenticates into the environment with `POST /api/auth/login`
1. [Get project list](#get-project-list) User obtains the project list from `GET /api/projects`
1. [Create a dataset](#create-a-dataset) User calls `POST /api/datasets` to create a dataset
1. [Update a dataset](#update-a-dataset) User calls `PATCH /api/datasets/{datasetId}/tables/{tableId}` to update the dataset
1. [Log out](#log-out) User calls `POST /api/logout` to close the session.

A detailed explanation of each step is provided below:

## Log in

End Point: `POST /api/auth/login`

This endpoint allows the caller to authenticate with the MicroStrategy REST server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used in subsequent requests.

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin)

Sample Request Header:

```http
'Content-Type: application/json'
'Accept: application/json'
```

Sample Request Body:

```json
{
  "loginMode": 1,
  "username": "administrator",
  "password": ""
}
```

Sample Curl:

```bash
curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json'\
--header 'Accept: application/json' -d '{ \
"loginMode":1, \
"username": "administrator", \
"password": "" \
}' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login'
```

Sample Response Header:

```json
{
  "pragma": "no-cache",
  "x-mstr-authtoken": "rllckqkm598s8vm9h3mgvfqhus",
  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
  "date": "Wed, 16 Aug 2017 01:42:31 GMT",
  "expires": "0",
  "content-type": null
}
```

The authorization token `“x-mstr-authtoken”` is returned in the response header. It is used in other endpoints to authenticate the user.

![swaggerLogin_response](../../../images/swaggerLogin_response.png)

Response Body: Empty

## Get project list

End Point: `GET /api/projects`

This endpoint allows the caller to get the list of projects with the MicroStrategy REST server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned in step 1 as the value for `X-MSTR-AuthToken`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to.

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#/Projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#/Projects)

Sample Request Header

```http
'Accept: application/json'
'X-MSTR-AuthToken: i5cggnjsm7cqb5snnmkbrmnjb7'
```

Request Body: Empty

Sample Curl:

```bash
curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json'\
--header 'X-MSTR-AuthToken: dlv58lvan2uh83skmbp55a9a7v'
      https://demo.microstrategy.com/MicroStrategyLibrary/api/projects'
```

Sample Response Body:

```json
[
  {
    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
    "name": "MicroStrategy Tutorial",
    "alias": "",
    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform's rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",
    "status": 0
  },
  {
    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",
    "name": "Human Resources Analysis Module",
    "alias": "",
    "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",
    "status": 0
  }
]
```

The project information, including the project ID, is included in the response body. The project ID is used in other endpoints.

## Create a dataset

End Point: `POST /api/datasets`

This endpoint allows the caller to create a dataset with the MicroStrategy REST server. You use the authorization token returned in step 1 as the value for `X-MSTR-AuthToken` and the ID for the "test" project returned in step 2 as the value for `X-MSTR-ProjectID`.

The dataset is created from the data in the `body` parameter of the request. The `body` parameter defines the data you want to upload to the Intelligence Server. The model for this parameter has the following keys:

| Key            |                | Data Type           | Description                                                                                                                                                    |
| -------------- | -------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DatasetCreator |                |                     |                                                                                                                                                                |
|                | name           | string              | Name of the dataset to be created from the external data                                                                                                       |
|                | tables         | Array[TableCreator] | Tables to be created in the dataset                                                                                                                            |
|                | attributes     | Array[DIAttribute]  | Attributes to be included in the dataset                                                                                                                       |
|                | metrics        | Array[DIMetric]     | Metrics to be included in the dataset                                                                                                                          |
| TableCreator   |                |                     |                                                                                                                                                                |
|                | name           | string              | Name of the table                                                                                                                                              |
|                | columnHeaders  | Array[columnHeader] | Column headers for the table                                                                                                                                   |
|                | data           | string              | Data in the table in stringified JSON format encoded as Base64                                                                                                 |
| DIAttribute    |                |                     |                                                                                                                                                                |
|                | name           | string              | Name of the attribute                                                                                                                                          |
|                | attributeForms | Array[DIForm]       | Set of forms for the attribute                                                                                                                                 |
| DIMetric       |                |                     |                                                                                                                                                                |
|                | name           | string              | Name of the metric                                                                                                                                             |
|                | expressions    | Array[DIExpression] | Expression that links the metric to a column header in the table                                                                                               |
| ColumnHeader   |                |                     |                                                                                                                                                                |
|                | name           | string              | Name of the column header                                                                                                                                      |
|                | dataType       | string              | Data type for the values in the column, with possible values 'STRING', 'INTEGER', 'BIGINTEGER', 'BOOL', 'DOUBLE', 'BIGDECIMAL', 'DATE', 'TIME', and 'DATETIME' |
|                | dateFormat     | string (optional)   | Date format for DATETME values in the column, with default format of YYYY-MM-DD[(T)hh:mm:[ss]]                                                                 |
| DIForm         |                |                     |                                                                                                                                                                |
|                | category       | string              | Category of the attribute form, with values such as ID or DESC                                                                                                 |
|                | expressions    | Array[DIExpression] | Expression that links the attribute form to a column header in the table                                                                                       |
| DIExpression   |                |                     |                                                                                                                                                                |
|                | formula        | string              | Expression that links a metric or attribute form in the dataset to a column header in the table, in the format table_name.column_name                          |
|                |                |                     |                                                                                                                                                                |

The resulting HTTP response returns an HTTP status 200 and a response body containing the name and ID of the dataset and the ID of the table containing the data.

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Datasets/createDICubeInstance](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Datasets/createDICubeInstance)

Request Parameters:

![CreateDataset_ReqParams](../../../images/CreateDataset_ReqParams.png)

Sample Request Headers:

```http
'Accept: application/json'
'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'
```

Sample Request Body:

```json
{
  "name": "SALES_TABLE",
  "tables": [
    {
      "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjoyLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0IjozMDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOCwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjQwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjUwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",
      "name": "SALES_TABLE",
      "columnHeaders": [
        {
          "name": "Year",
          "dataType": "INTEGER"
        },
        {
          "name": "Category_ID",
          "dataType": "INTEGER"
        },
        {
          "name": "Category_DESC",
          "dataType": "string"
        },
        {
          "name": "Cost",
          "dataType": "DOUBLE"
        },
        {
          "name": "Profit",
          "dataType": "DOUBLE"
        }
      ]
    }
  ],
  "metrics": [
    {
      "name": "Cost",
      "dataType": "DOUBLE",
      "expressions": [
        {
          "formula": "SALES_TABLE.Cost"
        }
      ]
    },
    {
      "name": "Profit",
      "dataType": "DOUBLE",
      "expressions": [
        {
          "formula": "SALES_TABLE.Profit"
        }
      ]
    }
  ],
  "attributes": [
    {
      "name": "Year",
      "attributeForms": [
        {
          "category": "ID",
          "expressions": [{ "formula": "SALES_TABLE.Year" }],
          "dataType": "INTEGER"
        }
      ]
    },
    {
      "name": "category",
      "attributeForms": [
        {
          "category": "ID",
          "expressions": [{ "formula": "SALES_TABLE.Category_ID" }],
          "dataType": "INTEGER"
        },
        {
          "category": "DESC",
          "expressions": [{ "formula": "SALES_TABLE.Category_DESC" }],
          "dataType": "string"
        }
      ]
    }
  ]
}
```

Sample Curl:

```bash
curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json'\
--header 'Accept: application/json' --header 'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\
--header 'X-MSTR-ProjectID: A773B25B4E505595455EF5B11D90049B' -d '{
  "name": "SALES_TABLE",
  "tables":[
    {
      "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjoyLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0IjozMDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOCwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjQwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjUwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",
      "name":"SALES_TABLE",
          "columnHeaders": [
            {
              "name" : "Year",
              "dataType" : "INTEGER"
            },
            {
              "name" : "Category_ID",
              "dataType" : "INTEGER"
            },
            {
              "name" : "Category_DESC",
              "dataType" : "string"
            },
            {
              "name" : "Cost",
              "dataType" : "DOUBLE"
            },
            {
              "name" : "Profit",
              "dataType" : "DOUBLE"
            }
          ]
    }
  ],
  "metrics" : [
    {
      "name": "Cost",
      "dataType": "DOUBLE",
      "expressions": [
        {
          "formula": "SALES_TABLE.Cost"
        }
      ]
    },
    {
      "name": "Profit",
      "dataType": "DOUBLE",
      "expressions": [
        {
          "formula": "SALES_TABLE.Profit"
        }
      ]
    }
  ],
  "attributes" : [
    {
      "name":"Year",
      "attributeForms":[
        {
          "category" : "ID",
          "expressions" : [{"formula" : "SALES_TABLE.Year"}],
          "dataType": "INTEGER"
        }
      ]
    },
    {
      "name":"category",
      "attributeForms":[
        {
          "category" : "ID",
          "expressions" : [{"formula" : "SALES_TABLE.Category_ID"}],
          "dataType": "INTEGER"
        },
        {
          "category" : "DESC",
          "expressions" : [{"formula" : "SALES_TABLE.Category_DESC"}],
          "dataType": "string"
        }
      ]
    }
  ]
}
```

Sample Response Body:

```json
{
  "datasetId": "105E10C94CF881BE3DDBA6B97E61FBC5",
  "name": "SALES_TABLE",
  "tables": [
    {
      "id": "67DD8A4015E4C176A2517420A3D14666",
      "name": "SALES_TABLE"
    }
  ]
}
```

A dataset named SALES_TABLE is created under the My Reports folder. The dataset ID and the table ID, returned in the response body, are used in other endpoints, such as `PATCH /api/datasets/{datasetId}/tables/{tableId}`.

## Update a dataset

End Point: `PATCH /api/datasets/{datasetId}/tables/{tableId}`

This endpoint allows the caller to update and republish a dataset that was created by the MicroStrategy REST server (using `POST /api/datasets`). To update and republish a specific dataset, you provide the authorization token, `X-MSTR-AuthToken`, generated in step 1, the dataset ID and table ID to identify the dataset to be updated, the type of update action that should be performed, and the data to be applied. If successful, the resulting HTTP response returns an HTTP status 200.

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Datasets/updateDICubeInstance](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Datasets/updateDICubeInstance)

Request Parameters

![UpdateDataset_ReqParams](../../../images/UpdateDataset_ReqParams.png)

Sample Request Header:

```http
'Accept: application/json'
'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'
```

Sample Request Body:

```json
{
  "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjo1LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0Ijo2MDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOSwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjYwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjYwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",
  "name": "SALES_TABLE",
  "columnHeaders": [
    {
      "name": "Year",
      "dataType": "INTEGER"
    },
    {
      "name": "Category_ID",
      "dataType": "INTEGER"
    },
    {
      "name": "Category_DESC",
      "dataType": "string"
    },
    {
      "name": "Cost",
      "dataType": "DOUBLE"
    },
    {
      "name": "Profit",
      "dataType": "DOUBLE"
    }
  ]
}
```

Sample Curl:

```bash
curl -X PATCH -b ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasets/105E10C94CF881BE3DDBA6B97E61FBC5/tables/67DD8A4015E4C176A2517420A3D14666'\
--header 'Content-Type: application/json'\
--header 'Accept: application/json' --header 'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'\
--header 'X-MSTR-ProjectID: A773B25B4E505595455EF5B11D90049B'\
--header 'updatePolicy: Replace' -d '       {
  "data": "WyAgICAgICAgIA0KICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAiWWVhciI6IDIwMTUsDQoJCQkJCSJDYXRlZ29yeV9JRCI6MSwNCgkJCQkJIkNhdGVnb3J5X0RFU0MiOiJCb29rcyIsDQoJCQkJCSJDb3N0IjoxMDAwLjAwLA0KCQkJCQkiUHJvZml0IjoyMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNiwNCgkJCQkJIkNhdGVnb3J5X0lEIjo1LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik1vdmllcyIsDQoJCQkJCSJDb3N0IjoyMDAwLjAwLA0KCQkJCQkiUHJvZml0IjozMDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxNywNCgkJCQkJIkNhdGVnb3J5X0lEIjozLA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6Ik11c2ljcyIsDQoJCQkJCSJDb3N0Ijo2MDAwLjAwLA0KCQkJCQkiUHJvZml0Ijo0MDAwLjAwDQogICAgICAgICAgICAgICAgfSwNCgkJCQl7DQogICAgICAgICAgICAgICAgICAgICJZZWFyIjogMjAxOSwNCgkJCQkJIkNhdGVnb3J5X0lEIjo0LA0KCQkJCQkiQ2F0ZWdvcnlfREVTQyI6IkVsZWN0cm9uaWNzIiwNCgkJCQkJIkNvc3QiOjYwMDAuMDAsDQoJCQkJCSJQcm9maXQiOjYwMDAuMDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICBd",
  "name":"SALES_TABLE",
  "columnHeaders": [
    {
      "name" : "Year",
      "dataType" : "INTEGER"
    },
    {
      "name" : "Category_ID",
      "dataType" : "INTEGER"
    },
    {
      "name" : "Category_DESC",
      "dataType" : "string"
    },
    {
      "name" : "Cost",
      "dataType" : "DOUBLE"
    },
    {
      "name" : "Profit",
      "dataType" : "DOUBLE"
    }
  ]
}'
```

Response Body: Empty

Response Code: 204

The dataset named SALES_TABLE, under the My Reports folder, is updated and republished using the specified type of update action and data. In this example, the update action is to replace the existing data with new data.

## Log out

End Point: `POST /api/auth/logout`

This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST server. In this example, you close the active user session by providing the authorization token, X-MSTR-AuthToken, generated in step 1. If the call is successful, the resulting HTTP response returns an HTTP status code 204.

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout)

Sample Request Header:

```http
'Accept: application/json'
'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs'
```

Request Body: Empty

Sample Curl:

```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json'\
--header 'X-MSTR-AuthToken: mt1a5egc9mkvmjoba7f56c2jbs' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'
```

Response Code: 204
