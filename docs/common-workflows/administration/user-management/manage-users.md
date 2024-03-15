---
title: Manage users
sidebar_label: Manage users
description: A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-be8db67e-6743-49ef-beb5-9efb96e01e4b?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

A workflow sample for managing users in the metadata is provided below. The following sequence of REST API requests allows an administrative user to search for a user, update the user, and get information about the user to confirm the updates.

1. [Log in](#log-in) Admin user calls `POST /api/auth/login` to authenticate into the environment.
1. [Search for a user](#search-for-a-user) Admin user calls `GET /api/users` to search for a specific user.
1. [Update a user](#update-a-user) Admin user calls `PATCH /api/users/{id}` to update information for a specific user.
1. [Get information about a user](#get-information-about-a-user) Admin user calls `GET /api/users/{id}` to view information for a user, including changes made to the user.
1. [Log out](#log-out) Admin user calls `POST /api/logout` to close the session.

To make it easy for you to test this workflow in your environment, [download the zipped Postman script](https://www2.microstrategy.com/producthelp/2021/downloads/RESTSDK/PostmanScripts/ManagingUsers_postman_collection.zip) provided for you, extract the JSON file, and configure it to point to your Web server.

A detailed explanation of each step is provided below:

## Log in

Endpoint: [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)

This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide `username`, `password`, and `loginMode` (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns a status code 204 and a response header containing `X-MSTR-AuthToken`, the authorization token that will be used by subsequent requests.

![swagger_POST_auth_login](../../../images/swagger_POST_auth_login.png)

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)

Sample Request

- Request Header

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
  curl -X POST -i -c --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
    "loginMode":1, \
    "username": "administrator", \
    "password": "" \
  }' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login'
  ```

Sample Response

- Response Header

  The authorization token "x-mstr-authtoken" is returned in the response header. It is used by other endpoints to authenticate the user.

  ```json
  {
    "pragma": "no-cache",
    "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "date": "Wed, 22 Aug 2018 01:42:31 GMT",
    "expires": "0",
    "content-type": null
  }
  ```

- Response Body: Empty

- Response Code: 204 (Success: No Content)

## Search for a user

Endpoint: [GET /api/users](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers)

This endpoint allows the caller to get information for a specific set of users. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. You identify the set of users to be returned with query parameters in the URL that specify the characters that the user name or abbreviation must begin with. You can use other query parameters to limit the results that are returned by specifying a starting point within the results and the maximum number of results that should be returned.

In this example, you are going to search for the user "John Smith". To do this, you use the query parameter `nameBegins` and set it to "John". If there are multiple users whose first name is John, you choose "John Smith" and get his user ID.

![swagger_GET_users](../../../images/swagger_GET_users.png)

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/createUserGroup)

Sample Request

- Request Parameters

- **X-MSTR-AuthToken** Authorization token generated by `POST /api/auth/login`, required to authenticate caller
- **nameBegins** Characters that the user name must begin with.
- **abbreviationBegins** Characters that the user abbreviation must begin with.
- **offset** Starting point within the collection of returned search results.
- **limit** Maximum number of items returned for a single search request.

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' -d
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameegins=John&offset=0&amp;limit=-1
  ```

Sample Response

- Response Body

  The response body contains information about the user that was created, including the user ID that will be used by later endpoints to identify the user.

  ```json
  [
    {
      "name": "John Smith",
      "id": "8D0C05F2456F52E4AA737891B4659201",
      "abbreviation": "jsmith",
      "description": "Senior Software Engineer",
      "type": 34,
      "subtype": 8704,
      "extType": 0,
      "dateCreated": "2019-03-04T17:55:07.000+0000",
      "dateModified": "2019-03-04T18:08:38.000+0000",
      "version": "D5C5F280432238D70EE14F839E136711",
      "acg": 255,
      "iconPath": "",
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "initials": "JS"
    }
  ]
  ```

- Response Code: 200 (Success: OK)

## Update a user

Endpoint: [PATCH /api/users/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updatePartialUser)

This endpoint allows the caller to update specific information for a specific user. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; you obtain the user ID using `GET /api/users` (as you did in a previous step). You specify the type of update operation (add, replace or remove), provide the value to be used in the update operation, and specify the path to the target where the update operation will be performed, in the body parameter of the request.

In this example, you are going to update the description for the user "John Smith". He received a promotion and is now Principal Software Engineer, instead of Senior Software Engineer.

![swagger_PATCH_users_id](../../../images/swagger_PATCH_users_id.png)

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updatePartialUser](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/updateUserGroup)

Sample Request

- Request Parameters

  - **X-MSTR-AuthToken** Authorization token generated by `POST /api/auth/login`.
  - **id** ID of the user to be updated. This ID was generated when the user was created and can be retrieved using `GET /api/users` with query parameters to search for hte user.
  - **body** Information used to perform the update, including the user to be updated, the update operation to be performed ("add", "replace", or "remove"), and the value to be used in the update operation.

- Request Headers

  ```json
  {
    "Accept": "application/json",
    "X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"
  }
  ```

- Request Body:

  ```json
  {
    "operationList": [
      {
        "op": "replace",
        "path": "/description",
        "value": "Principal Software Engineer"
      }
    ]
  }
  ```

- Curl

  ```bash
  curl -X PATCH --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' -d '{
    "operationList": [
      {
        "op": "replace",
        "path": "/description",
        "value": "Principal Software Engineer"
      }
    ]
  } 'https://demo.microstrategy.com/MicroStrategyLibrary/api/users/8D0C05F2456F52E4AA737891B4659201'
  ```

Sample Response

- Response Body

  The REST server returns a JSON object containing the updated user information.

  ```json
  {
    "name": "John Smith",
    "id": "8D0C05F2456F52E4AA737891B4659201",
    "abbreviation": "jsmith",
    "description": "Principal Software Engineer",
    "type": 34,
    "subtype": 8704,
    "extType": 0,
    "dateCreated": "2019-03-04T17:55:07.000+0000",
    "dateModified": "2019-03-04T18:57:57.000+0000",
    "version": "D5C5F280432238D70EE14F839E136711",
    "acg": 255,
    "iconPath": "",
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    }
  }
  ```

- Response Code: 200 (Success: OK)

## Get information about a user

Endpoint: [GET /api/users/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUser)

This endpoint allows the caller to get information for a specific user. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; you obtain the user ID using `GET /api/users` (as you did in a previous step).

![swagger_GET_users_id](../../../images/swagger_GET_users_id.png)

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUsers](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management/getUserGroups)

Sample Request

- Request Parameters

  - **X-MSTR-AuthToken** Authorization token generated by `POST /api/auth/login`.**offset** Location in the list of users to begin returning results.
  - **id** ID of the user to be updated. This ID was generated when the user was created and can be retrieved using `GET /api/users` with query parameters to search for the user.

- Request Header

  ```bash
  {
    "Accept": "application/json",
    "X-MSTR-AuthToken": "nllmm5lpmkjdsj4d4etgdikc6c"
  }
  ```

- Request Body: Empty

- Curl

  ```bash
  curl -X GET --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameBegins=Neel&offset=0&limit=-1'
  ```

Sample Response

- Response Body

  In this example, the REST server returns information about the user "John Smith". Yuu can verify that the description was changed to "Principal Software Engineer".

  ```json
  {
    "name": "John Smith",
    "id": "8D0C05F2456F52E4AA737891B4659201",
    "abbreviation": "jsmith",
    "description": "Principal Software Engineer",
    "type": 34,
    "subtype": 8704,
    "extType": 0,
    "dateCreated": "2019-03-04T17:55:07.000+0000",
    "dateModified": "2019-03-04T18:57:57.000+0000",
    "version": "D5C5F280432238D70EE14F839E136711",
    "acg": 255,
    "iconPath": "",
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    }
  }
  ```

- Response Code: 200(Success: OK)

## Log out

Endpoint: [POST /api/auth/logout](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout)

This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, `X-MSTR-AuthToken`, generated by `POST /api/auth/login`. If the call is successful, the resulting HTTP response returns an HTTP status code 204.

![swagger_POST_auth_logout](../../../images/swagger_POST_auth_logout.png)

REST API Explorer: [https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout)

Sample Request

- Request Header

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
