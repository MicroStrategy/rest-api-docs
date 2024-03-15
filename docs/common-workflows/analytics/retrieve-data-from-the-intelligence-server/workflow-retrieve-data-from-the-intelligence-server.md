---
title: Retrieve data from the Intelligence Server
sidebar_label: Retrieve data from the Intelligence Server
description: You can use REST APIs to retrieve both the definition and data for a report, cube, or dashboard from the Intelligence Server (IServer). The workflow for retrieving the definition or the data for a report, cube, or dashboard includes the following REST API requests. In this workflow, retrieving the data is not dependent on getting the definition; they are separate actions that can be performed independently.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-84db2127-16e8-4fd2-909f-b5990516f889?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to retrieve both the definition and data for a report, cube, or dashboard from the Intelligence Server (IServer). The workflow for retrieving the definition or the data for a report, cube, or dashboard includes the following REST API requests. In this workflow, retrieving the data is not dependent on getting the definition; they are separate actions that can be performed independently.

1. [Log in](#log-in) `POST /api/auth/login`
1. [Retrieve definition from the Intelligence Server](#retrieve-definition-from-the-intelligence-server) You can retrieve the definition of a report or cube—including the metrics and attributes—and the hierarchy of a dashboard—including the chapters, pages and visualizations
   - Get report definition `GET /api/reports/{reportId}`
   - Get cube definition `GET /api/cubes/{cubeId}`
   - Get dashboard definition `GET /api/dossiers/{dossierId}/definition`
1. [Retrieve data from the Intelligence Server](#retrieve-data-from-the-intelligence-server) You can create an instance of a report, cube, or dossier and return the results of that instance. You can return all the results of a report or cube instance, but you can return only the results of a specific visualization in a dossier instance.
   1. Create instance
      - Create report instance `POST /api/reports/{reportId}/instances`
      - Create cube instance `POST /api/cubes/{cubeId}/instances`
      - Create dashboard instance `POST /api/dossiers/{dossierId}/instances`
   1. Retrieve data
      - Get report data `GET /api/reports/{reportId}/instances/{instanceId}`
      - Get cube data `GET /api/cubes/{cubeId}/instances/{instanceId}`
      - Get dashboard data (specific visualization) `GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey}/visualizations/{visualizationKey}`
1. [Log out](#log-out) `POST /api/auth/logout`

To make it easy for you to try out this workflow in your environment, we have provided [sample code](https://github.com/MicroStrategy/rest-api-samples/tree/master/data-api) that you can download. This sample code is for v1 endpoints. It uses Java and Node.js to retrieve definitions and data, but you can use any language you want. The code shown for each step in the workflow reflects the values used in the sample.

## Log in

Endpoint: [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)

This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used in subsequent requests.

![swagger_POST_auth_login](../../../images/swagger_POST_auth_login.png)

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
curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \

  "loginMode":1, \

  "username": "administrator", \

  "password": "" \

}' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login'
```

Sample Response Header:

```json
{
  "pragma": "no-cache",
  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",
  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
  "date": "Wed, 16 Aug 2017 01:42:31 GMT",
  "expires": "0",
  "content-type": null
}
```

The authorization token `“x-mstr-authtoken”` is returned in the response header. It is used in other endpoints to authenticate the user.

Response Body: Empty

Response Code: 204 (Success: No Content)

## Retrieve definition from the Intelligence Server

You can retrieve the definition of a report or cube—including the metrics and attributes—and the hierarchy of a dashboard—including the chapters, pages and visualizations.

- [Retrieve the definition of a report](#retrieve-the-definition-of-a-report) `GET /api/reports/{reportId}`
- [Retrieve the definition of a cube](#retrieve-the-definition-of-a-cube) `GET /api/cubes/{cubeId}`
- [Retrieve the hierarchy of a dashboard](#retrieve-the-hierarchy-of-a-dashboard) `GET /api/dossiers/{dossierId}/definition`

The workflow for retrieving the definition and results is not sequential; they are two unrelated actions. It is not necessary to retrieve the definition in order to get the results.

A detailed explanation of how to retrieve the definition of a report, cube, or dashboard is provided below. The code shown for each endpoint reflects the values used in the [sample code](https://github.com/MicroStrategy/rest-api-samples/tree/master/data-api) that is provided.

### Retrieve the definition of a report

Endpoint: [GET /api/reports/\{reportId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/getDefinition_1)

This endpoint returns the definition for a specific report in a specific project from the MicroStrategy Intelligence Server. The body of the response contains the name and ID for the report and all the attributes and metrics included in the report.

- Identify the project by passing the project ID in the request header.
- Identify the report by passing the report ID in the path of the request.

In the sample provided, you get the definition for the report “01 Basic Report” in the “MicroStrategy Tutorial” project. This report has two attributes and three metrics.

![GET_report_definition](../../../images/GET_report_definition.png)

Sample Request Header:

```http
"Accept": "application/json",
"X-MSTR-AuthToken": "eicii2it34l38u8evnre0lhe6",
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Request Body: Empty

Sample Curl:

```bash
curl -X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: ei-cii2it34l38u8evnre0lhe6' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' 'http://demo.microstrategy.com/api/reports/13CFD83A458A68655A13CBA8D7C62CD5'
```

Sample Response Body:

You can view all the attributes and metrics in the report definition in the body of the response.

```json
{
  "id": "13CFD83A458A68655A13CBA8D7C62CD5",
  "name": "01 Basic Report",
  "result": {
    "definition": {
      "availableObjects": {
        "attributes": [
          {
            "name": "Region",
            "id": "8D679D4B11D3E4981000E787EC6DE8A4",
            "type": "Attribute",
            "forms": [
              {
                "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
                "name": "DESC",
                "dataType": "Char",
                "baseFormType": "Text"
              },
              {
                "id": "45C11FA478E745FEA08D781CEA190FE5",
                "name": "ID",
                "dataType": "Real",
                "baseFormType": "Number"
              }
            ]
          },
          {
            "name": "Employee",
            "id": "8D679D3F11D3E4981000E787EC6DE8A4",
            "type": "Attribute",
            "forms": [
              {
                "id": "8D67A52E11D3E4981000E787EC6DE8A4",
                "name": "Last Name",
                "dataType": "Char",
                "baseFormType": "Text"
              },
              {
                "id": "8D67A53211D3E4981000E787EC6DE8A4",
                "name": "First Name",
                "dataType": "Char",
                "baseFormType": "Text"
              },
              {
                "id": "45C11FA478E745FEA08D781CEA190FE5",
                "name": "ID",
                "dataType": "Real",
                "baseFormType": "Number"
              }
            ]
          }
        ],
        "metrics": [
          {
            "name": "Revenue",
            "id": "4C05177011D3E877C000B3B2D86C964F",
            "type": "Metric"
          },
          {
            "name": "Cost",
            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",
            "type": "Metric"
          },
          {
            "name": "Profit",
            "id": "4C051DB611D3E877C000B3B2D86C964F",
            "type": "Metric"
          }
        ]
      }
    }
  }
}
```

Response Code: 204 (Success: No Content)

### Retrieve the definition of a cube

Endpoint: [GET /api/cubes/\{cubeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/getDefinition)

This endpoint returns the definition for a specific cube in a specific project from the MicroStrategy Intelligence Server. The body of the response contains the name and ID for the cube and all the attributes and metrics included in the cube definition.

- Identify the project by passing the project ID in the request header.
- Identify the cube by passing the cube ID in the path of the request.

In the sample provided, you get the definition for the cube “Advanced sort" in the “MicroStrategy Tutorial” project. This cube has two attributes and two metrics.

![GET_cube_definition](../../../images/GET_cube_definition.png)

Sample Request Header:

```http
"Accept": "application/json",
"X-MSTR-AuthToken": "eicii2it34l38u8evnre0lhe6",
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Request Body: Empty

Sample Curl:

```bash
curl -X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: eicii2it34l38u8evnre0lhe6' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' 'http://demo.microstrategy.com/api/cubes/EC7128EA4685823A2529909F2B15C0DC'
```

Sample Response Body:

You can view all the attributes and metrics in the cube definition in the body of the response.

```json
{
  "id": "EC7128EA4685823A2529909F2B15C0DC",
  "name": "Advanced sort",
  "result": {
    "definition": {
      "availableObjects": {
        "attributes": [
          {
            "name": "Year_number&date",
            "id": "573FF5AB482CA58FDF1F95AF53690D42",
            "type": "Attribute",
            "forms": [
              {
                "id": "45C11FA478E745FEA08D781CEA190FE5",
                "name": "ID",
                "dataType": "Real",
                "baseFormType": "Number"
              }
            ]
          },
          {
            "name": "Category",
            "id": "00F7BED049D72B2D4E8864A39BD2F02D",
            "type": "Attribute",
            "forms": [
              {
                "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
                "name": "DESC",
                "dataType": "Char",
                "baseFormType": "Text"
              },
              {
                "id": "45C11FA478E745FEA08D781CEA190FE5",
                "name": "ID",
                "dataType": "Real",
                "baseFormType": "Number"
              }
            ]
          }
        ],
        "metrics": [
          {
            "name": "Cost",
            "id": "936CFC404BEA55EEA3D124AE4B1B1750",
            "type": "Metric"
          },
          {
            "name": "Revenue",
            "id": "2FBA0F9B416EFE38DCF22F8CFE4AA75C",
            "type": "Metric"
          }
        ]
      }
    }
  }
}
```

Response Code: 204 (Success: No Content)

### Retrieve the hierarchy of a dashboard

Endpoint: [GET /api/dossiers/\{dossierId}/definition](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList)

This endpoint returns the hierarchy for a specific dashboard in a specific project from the MicroStrategy Intelligence Server. The body of the response contains the chapters, pages, and visualizations in the dashboard.

- Identify the project by passing the project ID in the request header.
- Identify the dashboard by passing the dashboard ID in the path of the request.

In the sample provided, you get the hierarchy for the dashboard “Dossier of Advanced sort" in the “MicroStrategy Tutorial” project. This dashboard has one chapter, one page, and one visualization.

![GET_dossier_hierarchy](../../../images/GET_dossier_hierarchy.png)

Sample Request Header:

```http
"Accept": "application/json",
"X-MSTR-AuthToken": "eicii2it34l38u8evnre0lhe6",
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Request Body: Empty

Sample Curl

```bash
curl -X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: 66khsvsqja2gsci9ohhb5f2dql' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' 'https://demo.microstrategy.com/api/dossiers/2E5406B611E8EE3335450080EF25FBCD/definition'
```

Sample Response Body:

The response body contains information about the hierarchy of the dashboard. The results include the chapters, pages in each chapter, and visualizations on each page, as well as the key and name for each chapter, page and visualization. In a subsequent request, you use the chapter key and the visualization key to identify the data that you want to [retrieve from the dashboard](#get-dashboard-data-specific-visualization).

```json
{
  "id": "2E5406B611E8EE3335450080EF25FBCD",
  "name": "Year Cost",
  "chapters": [
    {
      "key": "K36",
      "name": "Chapter 1",
      "pages": [
        {
          "key": "K53",
          "name": "Page 1",
          "visualizations": [
            {
              "key": "K52",
              "name": "Visualization 1"
            }
          ]
        }
      ],
      "filters": []
    }
  ]
}
```

Response Code: 204 (Success: No Content)

## Retrieve data from the Intelligence Server

You can create an instance of a report, cube, or dashboard and retrieve the data for that instance. You can get all the data for a report or cube instance, but you can only get the data for a specific visualization in a dashboard instance.

- [Create an instance](#create-an-instance)
  - [Create report instance](#create-a-report-instance) `POST /api/reports/{reportId}/instances`
  - [Create cube instance](#create-a-cube-instance) `POST /api/cubes/{cubeId}/instances`
  - [Create dossier instance](#create-a-dashboard-instance) `POST /api/dossiers/{dossierId}/instances`
- [Get the data](#get-the-data)

  - [Get report data](#get-report-data) `GET /api/reports/{reportId}/instances/{instanceId}`
  - [Get cube data](#get-cube-data) `GET /api/cubes/{cubeId}/instances/{instanceId}`
  - [Get dossier data (specific visualization)](#get-dashboard-data-specific-visualization) `GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey}/visualizations/{visualizationKey}`

  The workflow for retrieving the definition and results is not sequential; they are two unrelated actions. It is not necessary to retrieve the definition in order to get the results.

  A detailed explanation of how to retrieve the data for a report, cube, or dashboard instance that you create is provided below. The code shown for each endpoint reflects the values used in the [sample code](https://github.com/MicroStrategy/rest-api-samples/tree/master/data-api) that is provided.

### Create an instance

When you create a report or cube instance using a POST request, the instance ID and the results are returned; you can also use that instance ID in a subsequent GET request to return the results of the execution. When you create a dashboard using a POST request, the instance ID is returned, but no results; you must use that instance ID in a GET request to return the data for a specific visualization in that dashboard.

### Create a report instance

Endpoint: [POST /api/reports/\{reportId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/createReportInstance)

This endpoint creates a new instance of a specific report in a specific project on the MicroStrategy Intelligence Server and returns the results if processing has finished. You can refine the amount of data that is returned using offset and limit parameters in the request and specifying filtering parameters in the body of the request. You can check whether processing has finished by checking the value of status in the body of the request.

- Identify the project by passing the project ID in the request header.
- Identify the report by passing the report ID in the path of the request.

:::tip

In the sample that was provided, you create an instance of the report “01 Basic Report” in the “MicroStrategy Tutorial” project. This report has two attributes and three metrics.

:::

- Identity the start and end position of the data as offset and limit request parameters
  - `offset` is the start point of your response. For example, if offset=2, it will return the report data beginning with the second record. The default value is 0.
  - `limit` is the endpoint of your response. For example, if limit =500, it will return only 500 records of the report. The default value is 1000.
- Specify how to filter the results that are returned in the body of the request:
  - `requestObjects` lets you choose the attributes and metrics to include.

:::tip

In the sample that is provided, one attribute (Region) and one metric (Revenue) are specified in the requested objects; the results that are returned include only Region and Revenue. For detailed information, refer to [Filtering report and cube instances using `requestedObjects`](../filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/filter-report-and-cube-instances-using-requested-objects.md).

:::

- `viewFilter` lets you apply a view filter to refine the data you want to return.

:::tip

In the sample that is provided, “Revenue greater than 5000000” is used to filter the data; the results that are returned only include records with the revenue greater than $5,000,000. For detailed information, refer to [Filtering report and cube instances using view filters](../filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/filter-report-and-cube-instances-using-view-filters.md).

:::

- `metricLimit` lets you apply a metric limit filter to refine the data you want to return.

:::tip

In the sample that is provided, the metric limit is set to null. For detailed information, refer to [Filtering report and cube instances using metric limits.](../filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/filter-report-and-cube-instances-using-metric-limits.md) :::

- Specify how to sort the data that is returned in the body parameter of the request.

:::tip

In the sample that is provided, sorting is set to null. For detailed information, refer to [Sorting data](../sort-data.md).

:::

![POST_report_instance](../../../images/POST_report_instance.png)

Sample Request Header:

```http
"Accept": "application/json",
"X-MSTR-AuthToken": "eicii2it34l38u8evnre0lhe6",
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body:

```json
{
  "requestedObjects": {
    "attributes": [
      {
        "name": "Region",
        "id": "8D679D4B11D3E4981000E787EC6DE8A4",
        "type": "Attribute",
        "forms": [
          {
            "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
            "name": "DESC",
            "dataType": "Char"
          },
          {
            "id": "45C11FA478E745FEA08D781CEA190FE5",
            "name": "ID",
            "dataType": "Real"
          }
        ]
      }
    ],
    "metrics": [
      {
        "name": "Revenue",
        "id": "4C05177011D3E877C000B3B2D86C964F",
        "type": "Metric"
      }
    ]
  },
  "viewFilter": {
    "operator": "Greater",
    "operands": [
      {
        "type": "metric",
        "id": "4C05177011D3E877C000B3B2D86C964F",
        "name": "Revenue"
      },
      {
        "type": "constant",
        "dataType": "Real",
        "value": "8000000"
      }
    ]
  },
  "metricLimits": {},
  "sorting": []
}
```

Sample Curl:

```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: 7eppbs1m0u1d1a9v2f5h16crkd' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' --header 'Authorization: Basic bXN0cjpiQm44aHpTejZNRmY=' -d '{
  "requestedObjects":{
    "attributes":[
      {
        "name":"Region",
        "id":"8D679D4B11D3E4981000E787EC6DE8A4",
        "type":"Attribute",
        "forms":[
          {
            "id":"CCFBE2A5EADB4F50941FB879CCF1721C",
            "name":"DESC",
            "dataType":"Char"
          },
          {
            "id":"45C11FA478E745FEA08D781CEA190FE5",
            "name":"ID",
            "dataType":"Real"
          }
        ]
      }
    ],
    "metrics":[
      {
        "name":"Revenue",
        "id":"4C05177011D3E877C000B3B2D86C964F",
        "type":"Metric"
      }
    ]
  },
  "viewFilter":{
    "operator":"Greater",
    "operands":[
      {
        "type":"metric",
        "id":"4C05177011D3E877C000B3B2D86C964F",
        "name":"Revenue"
      },
      {
        "type":"constant",
        "dataType":"Real",
        "value":"3000000"
      }
    ]
  },
  "metricLimits":{},
  "sorting":[]
}' 'https://env-115549.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/reports/13CFD83A458A68655A13CBA8D7C62CD5/instances?offset=0&limit=1000'
```

Sample Response Body:

```json
{
  "id": "13CFD83A458A68655A13CBA8D7C62CD5",
  "name": "01 Basic Report",
  "status": 1,
  "instanceId": "6177631611E8E8ADD96E0080EF75388C",
  "result": {
    "definition": {
      "attributes": [
        {
          "name": "Region",
          "id": "8D679D4B11D3E4981000E787EC6DE8A4",
          "type": "Attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "Char",
              "baseFormType": "Text"
            },
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "Real",
              "baseFormType": "Number"
            }
          ]
        }
      ],
      "metrics": [
        {
          "name": "Revenue",
          "id": "4C05177011D3E877C000B3B2D86C964F",
          "type": "Metric",
          "thresholds": [0],
          "min": 3902762.0500000026,
          "max": 3902762.0500000026,
          "numberFormatting": {
            "category": 1,
            "decimalPlaces": 0,
            "thousandSeparator": true,
            "currencySymbol": "$",
            "currencyPosition": 0,
            "formatString": "\"$\"#,##0",
            "negativeType": 1
          }
        }
      ],
      "thresholds": [
        {
          "id": "4C05177011D3E877C000B3B2D86C964F#0",
          "name": "New Threshold",
          "type": "Metric",
          "format": {
            "font-weight": true,
            "background-color": "#c6c3c6"
          },
          "condition": "Employee = Sawyer:Leanne"
        }
      ],
      "sorting": []
    },
    "data": {
      "paging": {
        "total": 1,
        "current": 1,
        "offset": 0,
        "limit": 1000,
        "prev": null,
        "next": null
      },
      "root": {
        "isPartial": false,
        "children": [
          {
            "depth": 0,
            "element": {
              "attributeIndex": 0,
              "formValues": {
                "DESC": "W",
                "ID": "12"
              },
              "name": "W 12",
              "id": "h12;8D679D4B11D3E4981000E787EC6DE8A4"
            },
            "metrics": {
              "Revenue": {
                "rv": 3902762.0500000026,
                "fv": "$3,902,762",
                "mi": 0
              }
            }
          }
        ]
      }
    }
  }
}
```

Response Code: 204 (Success: OK)

### Create a cube instance

Endpoint: [POST /api/cubes/\{cubeId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/createCubeInstance)

This endpoint creates a new instance of a specific cube in a specific project on the MicroStrategy Intelligence Server and returns the results if processing has finished. You can refine the amount of data that is returned using offset and limit parameters in the request and specifying filtering parameters in the body of the request. You can check whether processing has finished by checking the value of status in the body of the request.

- Identify the project by passing the project ID in the request header.
- Identify the cube by passing the cube ID in the path of the request.

  In sample that was provided, you create an instance of the cube “Advanced Sort” in the “MicroStrategy Tutorial” project. This cube has two attributes and two metrics.

- Identity the start and end position as offset and limit request parameters

  - offset is the start point of your response. For example, if offset=2, it will return the cube data beginning with the second record. The default value is 0.

    In the sample that is provided, the default value("0") is used.

  - limit is the endpoint of your response. For example, if limit =500, it will return only 500 records of the report. The default value is 1000.

    In the sample that is provided, the default value("1000") is used.

- Specify how to filter the results that are returned in the body of the request, but in the sample that is provided filtering and sorting are set to null.

![POST_cube_instance](../../../images/POST_cube_instance.png)

Sample Request Header:

```http
"Accept": "application/json",
"X-MSTR-AuthToken": "eicii2it34l38u8evnre0lhe6",
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken:ao8rt4jkptakk6lbsdtral5r10'--header'X-MSTR-ProjectID:B19DEDCC11D4E0EFC000EB9495D0F44F'-d'{}''https://demo.microstrategy.com/api/cubes/EC7128EA4685823A2529909F2B15C0DC/instances?limit=1000'
```

Sample Response Body:

```json
{
  "id": "EC7128EA4685823A2529909F2B15C0DC",
  "name": "Advanced sort",
  "status": 1,
  "instanceId": "B8BEE0DE11E8E98654610080EF45448B",
  "result": {
    "definition": {
      "attributes": [
        {
          "name": "Category",
          "id": "00F7BED049D72B2D4E8864A39BD2F02D",
          "type": "Attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "Char",
              "baseFormType": "Text"
            }
          ]
        },
        {
          "name": "Year_number&date",
          "id": "573FF5AB482CA58FDF1F95AF53690D42",
          "type": "Attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "Real",
              "baseFormType": "Number"
            }
          ]
        }
      ],
      "metrics": [
        {
          "name": "Cost",
          "id": "936CFC404BEA55EEA3D124AE4B1B1750",
          "type": "Metric",
          "min": 510239.2750000005,
          "max": 8520927.184999987,
          "numberFormatting": {
            "category": 1,
            "decimalPlaces": 2,
            "thousandSeparator": true,
            "currencySymbol": "$",
            "currencyPosition": 0,
            "formatString": "\"$\"#,##0.00;[RED]\"$\"#,##0.00",
            "negativeType": 2
          }
        },
        {
          "name": "Revenue",
          "id": "2FBA0F9B416EFE38DCF22F8CFE4AA75C",
          "type": "Metric",
          "min": 650191.650000001,
          "max": 10342798.050000006,
          "numberFormatting": {
            "category": 1,
            "decimalPlaces": 0,
            "thousandSeparator": true,
            "currencySymbol": "$",
            "currencyPosition": 0,
            "formatString": "\"$\"#,##0",
            "negativeType": 1
          }
        }
      ],
      "thresholds": [],
      "sorting": []
    },
    "data": {
      "paging": {
        "total": 12,
        "current": 12,
        "offset": 0,
        "limit": 1000,
        "prev": null,
        "next": null
      },
      "root": {
        "isPartial": false,
        "children": [
          {
            "depth": 0,
            "element": {
              "attributeIndex": 0,
              "formValues": {
                "DESC": "B"
              },
              "name": "B",
              "id": "h1;00F7BED049D72B2D4E8864A39BD2F02D"
            },
            "isPartial": false,
            "children": [
              {
                "depth": 1,
                "element": {
                  "attributeIndex": 1,
                  "formValues": {
                    "ID": "2014"
                  },
                  "name": "2014",
                  "id": "h2014;573FF5AB482CA58FDF1F95AF53690D42"
                },
                "metrics": {
                  "Cost": {
                    "rv": 510239.2750000005,
                    "fv": "$510,239.28",
                    "mi": 0
                  },
                  "Revenue": {
                    "rv": 650191.650000001,
                    "fv": "$650,192",
                    "mi": 1
                  }
                }
              },
              // Some data is omitted
              {
                "depth": 1,
                "element": {
                  "attributeIndex": 1,
                  "formValues": {
                    "ID": "2016"
                  },
                  "name": "2016",
                  "id": "h2016;573FF5AB482CA58FDF1F95AF53690D42"
                },
                "metrics": {
                  "Cost": {
                    "rv": 1576712.3129999985,
                    "fv": "$1,576,712.31",
                    "mi": 0
                  },
                  "Revenue": {
                    "rv": 1653522.8999999976,
                    "fv": "$1,653,523",
                    "mi": 1
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
}
```

Response Code: 204 (Success: OK)

### Create a dashboard instance

Endpoint: [POST /api/dossiers/\{dossierId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2)

This endpoint allows the caller to create a new instance of a specific dashboard in a specific project from the MicroStrategy Intelligence Server. The request body contains linking and bookmark information for the dashboard. The body of the response contains the instance ID for the dashboard and the status.

In the sample that was provided, you create an instance of the dashboard “Dossier for Advanced sort” in the “MicroStrategy Tutorial” project. This dashboard has two attributes and two metrics.

![POST_dossier_instance](../../../images/POST_dossier_instance.png)

Sample Request Header:

```http
"Accept": "application/json",
"X-MSTR-AuthToken": "eicii2it34l38u8evnre0lhe6",
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: s1c6pammo6u54c8fi736n2mceu' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -d '{}' 'https://demo.microstrategy.com/api/dossiers/2E5406B611E8EE3335450080EF25FBCD/instances'
```

Sample Response Body:

```json
{
  "mid": "8932C2B611E8EE33F45D0080EF65C88C ",
  "status": 1
}
```

Response Code: 204 (Success: OK)

### Get the data

To retrieve the results for a report or cube instance, you can use either a POST request or a GET request. You use a POST request to create an instance of the report or cube and get the results at the same time. You use a GET request to get the results of a previously created instance.

Results are returned only if the status indicates that execution is complete. If the status indicates that the execution is not complete, only the instance ID and status are returned.

When you retrieve the results of a report or cube instance using a GET request, all the specified data for the report or cube are returned. (You specify the data to be returned using filters and limit the amount of data the is returned by setting start and end locations for the data.) When you use a GET request to retrieve results from a dashboard, you specify a particular visualization in the dashboard and only the results of that visualization are returned.

For dashboards, you can retrieve only data for a specific visualization in the dashboard. To retrieve the data, you must first create an instance of the dashboard and then use the keys for the chapter and visualization (found in the results of the instance) to retrieve data for the specified visualization.

### Get report data

Endpoint: [GET /api/reports/\{reportId}/instances/\{instanceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/executeReport)

This endpoint gets the data for a specific report instance in a specific project from the MicroStrategy Intelligence Server. The results are determined by the conditions you applied when you created the instance. You can refine the amount of data that is returned using offset and limit parameters in the request.

- Identify the project by passing the project ID in the request header.
- Identify the report instance by passing the report ID and the report instance ID in the path of the request.

  In the downloadable sample that was provided, you get the data for an instance of the report “01 Basic Report” in the “MicroStrategy Tutorial” project. This report has two attributes and three metrics.

- Identity the start and end position as offset and limit request parameters
  - offset is the start point of your response. For example, if offset=2, it will return the report data beginning with the second record. The default value is 0.
  - limit is the endpoint of your response. For example, if limit =500, it will return only 500 records of the report. The default value is 1000.

![GET_report_instance](../../../images/GET_report_instance.png)

Sample Request Header:

```http
"Accept": "application/json",
"X-MSTR-AuthToken": "eicii2it34l38u8evnre0lhe6",
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Request Body: Empty

Sample Curl:

```bash
curl-X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: i8cjhv404vcbokbutm94lc8641' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F''https://demo.microstrategy.com/api/reports/13CFD83A458A68655A13CBA8D7C62CD5/instances/F5B333E611E8E98654610080EF556389?limit=1000'
```

Sample Response Body:

The response body contain the information about report data with the condition you set in the request.

```json
{
  "id": "13CFD83A458A68655A13CBA8D7C62CD5",
  "name": "01 Basic Report",
  "status": 1,
  "instanceId": "F5B333E611E8E98654610080EF556389",
  "result": {
    "definition": {
      "attributes": [
        {
          "name": "Region",
          "id": "8D679D4B11D3E4981000E787EC6DE8A4",
          "type": "Attribute",
          "forms": [
            {
              "id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "Char",
              "baseFormType": "Text"
            },
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "Real",
              "baseFormType": "Number"
            }
          ]
        }
      ],
      "metrics": [
        {
          "name": "Revenue",
          "id": "4C05177011D3E877C000B3B2D86C964F",
          "type": "Metric",
          "thresholds": [0],
          "min": 3902762.0500000026,
          "max": 3902762.0500000026,
          "numberFormatting": {
            "category": 1,
            "decimalPlaces": 0,
            "thousandSeparator": true,
            "currencySymbol": "$",
            "currencyPosition": 0,
            "formatString": "\"$\"#,##0",
            "negativeType": 1
          }
        }
      ],
      "thresholds": [
        {
          "id": "4C05177011D3E877C000B3B2D86C964F#0",
          "name": "New Threshold",
          "type": "Metric",
          "format": {
            "font-weight": true,
            "background-color": "#c6c3c6"
          },
          "condition": "Employee = Sawyer:Leanne"
        }
      ],
      "sorting": []
    },
    "data": {
      "paging": {
        "total": 1,
        "current": 1,
        "offset": 0,
        "limit": 1000,
        "prev": null,
        "next": null
      },
      "root": {
        "isPartial": false,
        "children": [
          {
            "depth": 0,
            "element": {
              "attributeIndex": 0,
              "formValues": {
                "DESC": "W",
                "ID": "12"
              },
              "name": "W 12",
              "id": "h12;8D679D4B11D3E4981000E787EC6DE8A4"
            },
            "metrics": {
              "Revenue": {
                "rv": 3902762.0500000026,
                "fv": "$3,902,762",
                "mi": 0
              }
            }
          }
        ]
      }
    }
  }
}
```

Response Code: 204 (Success: OK)

### Get cube data

Endpoint: [GET /api/cubes/\{cubeId}/instances/\{instanceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/getReport)

This endpoint gets the data for a specific cube instance in a specific project from the MicroStrategy Intelligence Server. The response body contains the cube data; the results are determined by the conditions you applied when you created the instance. You can refine the amount of data that is returned using offset and limit parameters in the request.

- Identify the project by passing the project ID in the request header.
- Identify the cube instance by passing the cube ID and the cube instance ID in the path of the request. In the sample that was provided, you get the data for an instance of the cube “Advanced sort” in the “MicroStrategy Tutorial” project. This cube has two attributes and two metrics.

- Identity the start and end position as offset and limit request parameters
  - offset is the start point of your response. For example, if offset=2, it will return the cube data beginning with the second record. The default value is 0.
  - limit is the endpoint of your response. For example, if limit =500, it will return only 500 records of the cube. The default value is 1000.

![GET_cube_instance](../../../images/GET_cube_instance.png)

Sample Request Header:

```http
"Accept": "application/json",
"X-MSTR-AuthToken": "eicii2it34l38u8evnre0lhe6",
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Request Body: Empty

Sample Curl:

```bash
curl-X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: i8cjhv404vcbokbutm94lc8641' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F''https://demo.microstrategy.com/api/reports/13CFD83A458A68655A13CBA8D7C62CD5/instances/F5B333E611E8E98654610080EF556389?limit=1000'
```

Sample Response Body:

The response body returns the cube data; the results are determined by the conditions you applied when you created the cube instance.

```json
{
  "id": "EC7128EA4685823A2529909F2B15C0DC",
  "name": "Advanced sort",
  "status": 1,
  "instanceId": "B8BEE0DE11E8E98654610080EF45448B",
  "result": {
    "definition": {
      "attributes": [
        {
          "name": "Category",
          "id": "00F7BED049D72B2D4E8864A39BD2F02D",
          "type": "Attribute",
          "forms": [
            {
"id": "CCFBE2A5EADB4F50941FB879CCF1721C",
              "name": "DESC",
              "dataType": "Char",
              "baseFormType": "Text"
            }
          ]
        },
        {
          "name": "Year_number&date",
          "id": "573FF5AB482CA58FDF1F95AF53690D42",
          "type": "Attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "Real",
              "baseFormType": "Number"
            }
          ]
        }
      ],
      "metrics": [
        {
          "name": "Cost",
          "id": "936CFC404BEA55EEA3D124AE4B1B1750",
          "type": "Metric",
          "min": 510239.2750000005,
          "max": 8520927.184999987,
          "numberFormatting": {
            "category": 1,
            "decimalPlaces": 2,
            "thousandSeparator": true,
            "currencySymbol": "$",
            "currencyPosition": 0,
            "formatString": "\"$\"#,##0.00;[RED]\"$\"#,##0.00",
            "negativeType": 2
          }
        },
        {
          "name": "Revenue",
          "id": "2FBA0F9B416EFE38DCF22F8CFE4AA75C",
          "type": "Metric",
          "min": 650191.650000001,
          "max": 10342798.050000006,
          "numberFormatting": {
            "category": 1,
            "decimalPlaces": 0,
            "thousandSeparator": true,
            "currencySymbol": "$",
            "currencyPosition": 0,
            "formatString": "\"$\"#,##0",
            "negativeType": 1
          }
        }
      ],
      "thresholds": [],
      "sorting": []
    },
    "data": {
      "paging": {
        "total": 12,
        "current": 12,
        "offset": 0,
        "limit": 1000,
        "prev": null,
        "next": null
      },
      "root": {
        "isPartial": false,
        "children": [
          {
            "depth": 0,
            "element": {
              "attributeIndex": 0,
              "formValues": {
                "DESC": "B"
              },
              "name": "B",
              "id": "h1;00F7BED049D72B2D4E8864A39BD2F02D"
            },
            "isPartial": false,
            "children": [
              {
                "depth": 1,
                "element": {
                  "attributeIndex": 1,
                  "formValues": {
                    "ID": "2014"
                  },
                  "name": "2014",
                  "id": "h2014;573FF5AB482CA58FDF1F95AF53690D42"
                },
                "metrics": {
                  "Cost": {
                    "rv": 510239.2750000005,
                    "fv": "$510,239.28",
                    "mi": 0
                  },
                  "Revenue": {
                    "rv": 650191.650000001,
                    "fv": "$650,192",
                    "mi": 1
                  }
                }
              },
              ……(Some data is omitted)
              {
                "depth": 1,
                "element": {
                  "attributeIndex": 1,
                  "formValues": {
                    "ID": "2016"
                  },
                  "name": "2016",
                  "id": "h2016;573FF5AB482CA58FDF1F95AF53690D42"
                },
                "metrics": {
                  "Cost": {
                    "rv": 1576712.3129999985,
                    "fv": "$1,576,712.31",
                    "mi": 0
                  },
                  "Revenue": {
                    "rv": 1653522.8999999976,
                    "fv": "$1,653,523",
                    "mi": 1
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
}
```

Response Code: 204 (Success: OK)

### Get dashboard data (specific visualization)

This endpoint gets dashboard data by visualization for a specific dashboard instance in a specific project from the MicroStrategy Intelligence Server. The response body contains the cube data; the results are determined by the conditions you applied when you created the instance. You can refine the amount of data that is returned using offset and limit parameters in the request.

- Identify the project by passing the project ID in the request header.
- Identify the dashboard instance by passing the dashboard ID and the dashboard instance ID in the path of the request.
- Identify the chapter and visualization by passing the chapter key and visualization key in the path of the request.

  In the sample that was provided, you get the data for a visualization in an instance of the dashboard “Year Cost” in the “MicroStrategy Tutorial” project.

- Identity the start and end position as offset and limit request parameters
  - offset is the start point of your response. For example, if offset=2, it will return the report data beginning with the second record. The default value is 0.
  - limit is the endpoint of your response. For example, if limit =500, it will return only 500 records of the report. The default value is 1000.

Endpoint: [GET /api/dossiers/\{dossierId}/instances/\{instanceId}/chapters/\{chapterKey}/visualizations/\{visualizaitonKey}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationResult)

![GET_dossier_vis_instance](../../../images/GET_dossier_vis_instance.png)

Sample Request Header:

```http
"Accept": "application/json",
"X-MSTR-AuthToken": "eicii2it34l38u8evnre0lhe6",
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Request Body: Empty

Sample Curl:

```bash
curl -X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: bb8573517ncuf36j4rhi4ce5ke' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' --header 'Authorization: Basic bXN0cjo3QWU2ZzRCTW9vY2U=' 'https://env-120951.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/dossiers/2E5406B611E8EE3335450080EF25FBCD/instances/8932C2B611E8EE33F45D0080EF65C88C/chapters/K36/visualizations/K52?limit=1000'
```

Sample Response Body:

```json
{
  "key": "K52",
  "name": "Visualization 1",
  "result": {
    "definition": {
      "attributes": [
        {
          "name": "Year_number&date",
          "id": "573FF5AB482CA58FDF1F95AF53690D42",
          "type": "Attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "Real",
              "baseFormType": "Number"
            }
          ]
        }
      ],
      "metrics": [
        {
          "name": "Cost",
          "id": "936CFC404BEA55EEA3D124AE4B1B1750",
          "type": "Metric",
          "min": 7343097.059599999,
          "max": 12609466.810999991,
          "numberFormatting": {
            "category": 1,
            "decimalPlaces": 2,
            "thousandSeparator": true,
            "currencySymbol": "$",
            "currencyPosition": 0,
            "formatString": "\"$\"#,##0.00;[RED]\"$\"#,##0.00",
            "negativeType": 2
          }
        }
      ],
      "thresholds": [],
      "viewFilterSummary": "",
      "elementFilterSummary": "",
      "metricLimitSummary": ""
    },
    "data": {
      "paging": {
        "total": 3,
        "current": 3,
        "offset": 0,
        "limit": 1000,
        "prev": null,
        "next": null
      },
      "root": {
        "isPartial": false,
        "children": [
          {
            "depth": 0,
            "element": {
              "attributeIndex": 0,
              "formValues": {
                "ID": "2014"
              },
              "name": "2014",
              "id": "h2014;573FF5AB482CA58FDF1F95AF53690D42"
            },
            "metrics": {
              "Cost": {
                "rv": 7343097.059599999,
                "fv": "$7,343,097.06",
                "mi": 0
              }
            }
          },
          {
            "depth": 0,
            "element": {
              "attributeIndex": 0,
              "formValues": {
                "ID": "2015"
              },
              "name": "2015",
              "id": "h2015;573FF5AB482CA58FDF1F95AF53690D42"
            },
            "metrics": {
              "Cost": {
                "rv": 9777520.649799991,
                "fv": "$9,777,520.65",
                "mi": 0
              }
            }
          },
          {
            "depth": 0,
            "element": {
              "attributeIndex": 0,
              "formValues": {
                "ID": "2016"
              },
              "name": "2016",
              "id": "h2016;573FF5AB482CA58FDF1F95AF53690D42"
            },
            "metrics": {
              "Cost": {
                "rv": 12609466.810999991,
                "fv": "$12,609,466.81",
                "mi": 0
              }
            }
          }
        ]
      }
    }
  }
}
```

Response Code: 204 (Success: OK)

## Log out

Endpoint: [POST /api/auth/logout](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout)

This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, `X-MSTR-AuthToken`, generated during login. If the call is successful, the resulting HTTP response returns an HTTP status code 204.

![swagger_POST_auth_logout](../../../images/swagger_POST_auth_logout.png)

Sample Request Header:

```http
'Accept: application/json'
'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
```

Request Body: Empty

Sample Curl

```bash
curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'
```

Response Code: 204 (Success: No Content)
