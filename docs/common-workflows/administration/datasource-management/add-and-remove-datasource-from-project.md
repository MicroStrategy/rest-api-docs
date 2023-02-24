---
title: Add and remove datasource from project
description: This workflow sample demonstrates how to add a datasource to a project.
---

This workflow sample demonstrates how to add a datasource to a project. To see how to remove a project please click [here](#remove-datasource-to-project).

1. [Get list of datasources based on project.](#get-list-of-datasources-based-on-project) `GET /api/projects/{projectId}/datasources`
1. [Add a datasource to a project.](#add-datasource-to-project) `PATCH /api/projects/{projectId}/datasources`

A detailed description of each step of this request is listed down below. For this sample we are using the MicroStrategy Tutorial project with project ID B7CA92F04B9FAE8D941C3E9B7E0CD754. You can obtain the project ID from `GET /api/projects`.

## Get list of datasources based on project

Endpoint: [GET /api/projects/{projectId}/datasources](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/getProjectDatasources)

This endpoint allows the caller to get the datasources associated with a specific project with the MicroStrategy REST Server. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing the datasources for a project.

Sample Request

- Request Headers

  ```http
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl --location -g --request GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/{{projectId}}/datasources' \
  --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

Sample Response

- Response Body

  ```json
  {
    "datasources": [
      {
        "id": "A23BBC514D336D5B4FCE919FE19661A3",
        "name": "Tutorial Postgres",
        "description": "",
        "dateCreated": "2015-06-15T17:44:06.000+0000",
        "dateModified": "2021-07-28T16:53:43.000+0000",
        "acg": 255,
        "datasourceType": "normal",
        "database": {
          "type": "postgre_sql",
          "version": "postgre_sql_90",
          "connection": {
            "name": "TutorialWHLinux",
            "id": "A7543BCC4AC0AE818ED0F4B4357D2A61",
            "isEmbedded": false
          }
        },
        "tablePrefix": "public.",
        "odbcVersion": "version3x",
        "intermediateStoreDbName": "",
        "intermediateStoreTableSpaceName": "",
        "dbms": {
          "name": "PostgreSQL",
          "id": "702780F3E3594D95AD4C85CE8F803306"
        },
        "owner": {
          "name": "Administrator",
          "id": "54F3D26011D2896560009A8E67019608"
        },
        "isAllowToRemove": false
      },
      {
        "id": "BCB3836D4C70EDF53CB706ABA556B44B",
        "name": "Operational Datamart",
        "description": "Operational Datamart",
        "dateCreated": "2006-08-10T14:37:07.000+0000",
        "dateModified": "2021-07-28T16:53:44.000+0000",
        "acg": 255,
        "datasourceType": "normal",
        "database": {
          "type": "postgre_sql",
          "version": "postgre_sql_90",
          "connection": {
            "name": "OpWHLinux",
            "id": "2D95429243FACC237B23A9AD06417E77",
            "isEmbedded": false
          }
        },
        "tablePrefix": "public.",
        "odbcVersion": "version3x",
        "intermediateStoreDbName": "",
        "intermediateStoreTableSpaceName": "",
        "dbms": {
          "name": "PostgreSQL",
          "id": "702780F3E3594D95AD4C85CE8F803306"
        },
        "owner": {
          "name": "Administrator",
          "id": "54F3D26011D2896560009A8E67019608"
        },
        "isAllowToRemove": false
      }
    ]
  }
  ```

  Sample Response Code: 200 (Get list of datasources.)

## Add datasource to project

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2d0b3eac-9704-42a7-9481-fec12557b752?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Endpoint: [PATCH /api/projects/{projectId}/datasources](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/updateProjectDatasources)

This endpoint allows the caller to add and remove a datasource to a specific project with the MicroStrategy REST Server. In this request we will add a datasource. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. For this sample we will be adding the Act! Essentials datasource to the MicroStrategy Tutorial project. You can find the datasourceId using the endpoint `GET /api/datasources` and the projectId using `GET /api/projects`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a list of the project's datasources.

Sample Request

- Request Headers

  ```http
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body

  ```json
  {
    "operationList": [
      {
        "op": "add",
        "path": "/id",
        "value": "FE0D1FDD7EA146DB954056FD72F04310"
      }
    ]
  }
  ```

- Curl

  ```bash
  curl --location -g --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/{{projectId}}/datasources' \
  --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "operationList": [
          {
              "op": "add",
              "path": "/id",
              "value": "FE0D1FDD7EA146DB954056FD72F04310"
          }
      ]
  }'
  ```

Sample Response

- Response Body:

```json
{
  "datasources": [
    {
      "id": "A23BBC514D336D5B4FCE919FE19661A3",
      "name": "Tutorial Postgres",
      "description": "",
      "dateCreated": "2015-06-15T17:44:06.000+0000",
      "dateModified": "2021-07-28T16:53:43.000+0000",
      "acg": 255,
      "datasourceType": "normal",
      "database": {
        "type": "postgre_sql",
        "version": "postgre_sql_90",
        "connection": {
          "name": "TutorialWHLinux",
          "id": "A7543BCC4AC0AE818ED0F4B4357D2A61",
          "isEmbedded": false
        }
      },
      "tablePrefix": "public.",
      "odbcVersion": "version3x",
      "intermediateStoreDbName": "",
      "intermediateStoreTableSpaceName": "",
      "dbms": {
        "name": "PostgreSQL",
        "id": "702780F3E3594D95AD4C85CE8F803306"
      },
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "isAllowToRemove": false
    },
    {
      "id": "FE0D1FDD7EA146DB954056FD72F04310",
      "name": "Act! Essentials",
      "description": "actessentialsoauth",
      "dateCreated": "2018-08-16T20:34:43.000+0000",
      "dateModified": "2021-07-28T16:53:40.000+0000",
      "acg": 255,
      "datasourceType": "normal",
      "database": {
        "type": "cloud_element",
        "version": "default",
        "connection": {
          "name": "",
          "id": "E1A9CB3D246441B4A6BD9B78B4BF022A",
          "isEmbedded": true
        }
      },
      "tablePrefix": "",
      "odbcVersion": "version3x",
      "intermediateStoreDbName": "",
      "intermediateStoreTableSpaceName": "",
      "dbms": {
        "name": "CloudElement",
        "id": "AD3FCA53A5B84DD49542BF2E1AE4847C"
      },
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "isAllowToRemove": true
    }
  ]
}
```

Sample Response Code: 200 (Add datasource to project.)

## Remove datasource to project

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-577baae8-f1b6-4ed2-8819-bc3aed5ec5c7?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Endpoint: [PATCH /api/projects/{projectId}/datasources](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/updateProjectDatasources)

This endpoint allows the caller to add and remove a datasource to a specific project with the MicroStrategy REST Server. In this request we will remove a datasource. You use the authorization token returned during login as the value for `X-MSTR-AuthToken`. For this sample we will be removing the Act! Essentials datasource from the MicroStrategy Tutorial project. You can find the datasourceId using the endpoint `GET /api/datasources` and the projectId using `GET /api/projects`. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a list of the project's datasources.

Sample Request

- Request Headers

  ```http
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body

  ```json
  {
    "operationList": [
      {
        "op": "remove",
        "path": "/id",
        "value": "FE0D1FDD7EA146DB954056FD72F04310"
      }
    ]
  }
  ```

- Curl

  ```bash
  curl --location -g --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/{{projectId}}/datasources' \
  --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "operationList": [
          {
              "op": "remove",
              "path": "/id",
              "value": "FE0D1FDD7EA146DB954056FD72F04310"
          }
      ]
  }'
  ```

Sample Response

- Response Body:

```json
{
  "datasources": [
    {
      "id": "A23BBC514D336D5B4FCE919FE19661A3",
      "name": "Tutorial Postgres",
      "description": "",
      "dateCreated": "2015-06-15T17:44:06.000+0000",
      "dateModified": "2021-07-28T16:53:43.000+0000",
      "acg": 255,
      "datasourceType": "normal",
      "database": {
        "type": "postgre_sql",
        "version": "postgre_sql_90",
        "connection": {
          "name": "TutorialWHLinux",
          "id": "A7543BCC4AC0AE818ED0F4B4357D2A61",
          "isEmbedded": false
        }
      },
      "tablePrefix": "public.",
      "odbcVersion": "version3x",
      "intermediateStoreDbName": "",
      "intermediateStoreTableSpaceName": "",
      "dbms": {
        "name": "PostgreSQL",
        "id": "702780F3E3594D95AD4C85CE8F803306"
      },
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "isAllowToRemove": false
    }
  ]
}
```

Sample Response Code: 200 (Remove datasource from project.)
