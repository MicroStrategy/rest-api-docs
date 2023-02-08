---
sidebar_label: Folder browsing
title: Folder browsing
description: The workflow for browsing folders in the metadata includes the following sequence of REST API requests.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-01bcf62f-9d6f-4ddf-9f63-064d875ddae2?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

The workflow for browsing folders in the metadata includes the following sequence of REST API requests.

1. [Log in](#log-in) User authenticates into the environment with `POST /api/auth/login` and standard authentication
1. [Get project list](#get-project-list) User obtains the project list from `GET /api/projects`
1. [Browse to the Shared Reports folder](#browse-to-the-shared-reports-folder) User calls `GET /api/folders/preDefined` to perform folder browsing to the Shared Reports folder (may be multiple requests)
1. [Log out](#log-out) User calls `POST /api/logout` to close the session

A detailed explanation of each step is provided below:

## Log in

End Point: `POST /api/auth/login`

This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used in subsequent requests.

![swagger_POST_auth_login](../../../images/swagger_POST_auth_login.png)

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin)

Sample Request

- Request Headers

  ```http
  'Content-Type: application/json'
  'Accept: application/json'
  ```

- Request Body

  ```json
  {
    "loginMode": 1,
    "username": "administrator",
    "password": ""
  }
  ```

- Curl

  ```bash
  curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
    "loginMode":1, \
    "username": "administrator", \
    "password": "" \
    }'
  ```

Sample Response

- Response Headers

  ```json
  {
    "pragma": "no-cache",
    "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "date": "Thur, 5 July 2018 01:42:31 GMT",
    "expires": "0",
    "content-type": null
  }
  ```

  The authorization token "x-mstr-authtoken" is returned in the response header. It is used in other endpoints to authenticate the user.

- Response Body: Empty
- Response Code: 204 (Success: No Content)

## Get project list

End Point: `GET /api/projects`

This endpoint allows the caller to get the list of projects with the MicroStrategy REST Server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned during login as the value for the header parameter, X-MSTR-AuthToken. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to.

![swagger_GET_projects](../../../images/swagger_GET_projects.png)

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Projects/getProjects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Projects/getProjects)

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/projects" --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

Sample Response

- Response Body

  ```http
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

The response body contains information for each project that is returned, including the project ID that you use in later endpoints.

- Response Code: 204 (Success: OK)

## Browse to the Shared Reports folder

End Point: `GET /api/folders/preDefined/{folderType}`

This endpoint allows the caller to get the objects under a predefined folder with the MicroStrategy REST Server. In this example, you get the objects under Shared Reports in the "MicroStrategy Tutorial". You use the authorization token returned by `POST /api/auth/login` as the value for X-MSTR-AuthToken and a project ID returned by `GET /api/projects` as the value for X-MSTR-ProjectID. You provide a value for folderType from the [EnumDSSXMLFolderNames](https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLFolderNames.html) enumeration. In this example, you use the value "7" , which specifies the predefined "Shared Reports" folder under the "Public Objects" folder. If the call is successful, the resulting HTTP response returns an HTTP status 200 and a list of metadata objects under the Shared Reports folder.

![swagger_GET_folders_preDefined](../../../images/swagger_GET_folders_preDefined.png)

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Browsing/getPreDefinedFolder](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Browsing/getPreDefinedFolder)

Sample Request

- Request Parameters

  ![swagger_GET_folders_preDefined_Parameters](../../../images/swagger_GET_folders_preDefined_Parameters.png)

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'
  ```

- Curl

  ```bash
  curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/folders/preDefined/7?limit=-1" --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'
  ```

Sample Response

- Response Body

  You can find detail definitions of each parameter in the Response body for this endpoint on the MicroStrategy REST API Explorer page, under Response Class -> Model.

  ```json
    {
      "name": "Business Roles",
      "id": "032A5E114A59D28267BDD8B6D9E58B22",
      "type": 8,
      "description": "These folders contain reports that are appropriate for individuals in different organizational roles.",
      "subtype": 2048,
      "dateCreated": "2005-05-06T17:48:43.000-0400",
      "dateModified": "2007-03-04T11:42:01.000-0500",
      "version": "3940C5CB4136F3B1DB4F5ABD9541F4B8",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      }
    },
    {
      "name": "Documents and Scorecards",
      "id": "F025A94B4C03B6DCEE0F5D9DA825DA67",
      "type": 8,
      "description": "This folder contains several examples of dashboards.",
      "subtype": 2048,
      "dateCreated": "2007-01-13T17:39:22.000-0500",
      "dateModified": "2015-05-04T17:50:35.000-0400",
      "version": "123CF8A84FCD6FA5B2496E96E5915CAA",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      }
    },
    {
      "name": "Enterprise Reporting Documents",
      "id": "92ADD0F84D07AC532AD03BA0F92A836B",
      "type": 8,
      "description": "This folder contains various types of documents such as scorecards and dashboards, managed metrics reports, production and operational reports, invoices and statements, and business reports.",
      "subtype": 2048,
      "dateCreated": "2003-09-08T16:35:27.000-0400",
      "dateModified": "2012-03-29T10:49:01.000-0400",
      "version": "51FF405E46B8C3400027D6896CC8AA4F",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      }
    },
    {
      "name": "MicroStrategy Platform Capabilities",
      "id": "D64C532E4E7FBA74D29A7CA3576F39CF",
      "type": 8,
      "description": "This folder contains examples of many of the sophisticated capabilities within the MicroStrategy platform.",
      "subtype": 2048,
      "dateCreated": "2006-05-23T04:55:20.000-0400",
      "dateModified": "2012-05-17T05:00:38.000-0400",
      "version": "9E78732646B926BB161F32B5E96581D3",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      }
    },
    {
      "name": "Sample Dashboards",
      "id": "C6C5ECF0B571448A9C31C653AB1D5E51",
      "type": 8,
      "hidden": true,
      "subtype": 2048,
      "dateCreated": "2014-10-20T14:13:39.000-0400",
      "dateModified": "2017-02-16T03:46:16.000-0500",
      "version": "25798DEE4C5CFC61B54BE8A6E60AF208",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      }
    },
    {
      "name": "Subject Areas",
      "id": "5B68C5AE433C728679340A91DC8F809C",
      "type": 8,
      "description": "This folder contains reports that are categorized by topic. Topics include Customer Analysis, Enterprise Performance Management, Human Resource Analysis, Inventory and Supply Chain Analysis, Sales and Profitability Analysis, and Supplier Analysis.",
      "subtype": 2048,
      "dateCreated": "2006-05-22T11:42:06.000-0400",
      "dateModified": "2010-04-08T07:13:16.000-0400",
      "version": "D07DA02D455910C463F928ACBDE6AC9D",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      }
    }
  ```

  The REST server returns all the object information under "Shared Reports".

## Log out

End Point: `POST /api/auth/logout`

This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, X-MSTR-AuthToken, generated during login. If the call is successful, the resulting HTTP response returns an HTTP status code 204.

![swagger_POST_auth_logout](../../../images/swagger_POST_auth_logout.png)

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout)

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'
  ```

Sample Response

- Response code: 204
