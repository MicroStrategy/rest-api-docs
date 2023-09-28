---
title: Create security roles
sidebar_label: Create security roles
description: A security role is a set of privileges that can be assigned to users and reused from project to project. Security roles enable you to assign a unique set of privileges to users on a per project basis. They are created and maintained at the project source level and assigned to users at the project level.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ff1b1eae-77f6-461b-85cd-d63709d4b747?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

A security role is a set of privileges that can be assigned to users and reused from project to project. Security roles enable you to assign a unique set of privileges to users on a per project basis. They are created and maintained at the project source level and assigned to users at the project level.

Administrators can make REST API calls to perform a full set of operations on the security role objects, which includes:

- Creating new security roles.
- Assigning privileges to new and existing security roles.
- Deleting security roles.
- Specifying security role project and user/group relationships.
- Getting information about all or specific security roles.

To avoid security vulnerabilities, administrators should have a clear understanding of the privileges and security requirements of their system before assigning privileges which provide access to application functionality.

:::info

The [DssXmlPrivilegesUseSecurityRoleManager](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseSecurityRoleManager) privilege is required to manage the security role object.

:::

## Creating a security role and managing privileges of a security role

A workflow sample for creating a new security role in the metadata is provided below. The following sequence of REST API requests allows an administrator to create a new security role, and optionally get information about the security role to confirm the creation and updates.

1. [Log in](#log-in)

   The REST API endpoint `POST /api/auth/login` is called by a user to authenticate an environment.

1. [Create a security role](#create-a-security-role)

   The REST API endpoint `POST /api/securityRoles` is called by an admin user to create new security roles.

1. [Modify a security role](#modify-a-security-role)

   The REST API endpoint `PATCH /api/securityRoles/{id}` is called by an admin user to add, remove, replace privileges of the security role with the mentioned security role id. Also, add/remove members of a security role.

1. [Get information about a specific security role](#get-information-about-a-specific-security-role)

   The REST API endpoint `GET /api/securityRoles/{id}` is called by an admin user to view information about the security role with the mentioned id.

1. [Delete a security role](#delete-a-security-role)

   The REST API endpoint `DELETE /api/securityRoles/{id}` is called by an admin user to delete the security role with the mentioned id.

1. [Get information about all security roles](#get-information-about-all-security-roles)

   The REST API endpoint `/api/securityRoles` is called by an admin user to view information about all security roles.

1. [Log out](#log-out)

   A user calls the REST API endpoint `GET /api/auth/logout` to end the current session.

To make it easy for you to test this workflow in your environment, [download the zipped Postman script](https://www2.microstrategy.com/producthelp/2021/downloads/RESTSDK/PostmanScripts/SecurityRoles_postman_collection.zip) provided for you, extract the JSON file, and configure it to point to your Web server.

## Log in

Endpoint: [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)

This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication, so you need to provide `username`, `password`, and `loginMode` (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns a status code 204 and a response header containing `X-MSTR-AuthToken`, the authorization token that will be used by subsequent requests.

In this example, standard authentication and log in credentials "administrator" with `<blank>` password is used.

### Sample request

- Request Headers:

  ```http
  'Content-Type: application/json' 'Accept: application/json'
  ```

- Request Body:

  When `loginMode` is set to "1", Standard authentication is used.

  ```json
  {
    "loginMode": 1,
    "username": "administrator",
    "password": ""
  }
  ```

- Curl:

  ```bash
  curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" -H "accept: application/json"-
  H "Content-Type: application/json" -d "{\"username\":\"administrator\",\"password\":\"\",\"loginMode\":1}"
  ```

### Sample response

- Response Headers:

  The authorization token `"x-mstr-authtoken"` is returned in the response header. It is used by other endpoints to authenticate the user.

  ```json
  {
    "pragma": "no-cache",
    "x-mstr-authtoken": "pdcmrontjrlf494tl1eu6nt7hg",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "date: Tue, 14 May 2019 20:29:21 GMT expires: 0",
    "expires": "0",
    "content-type": null
  }
  ```

- Response Body: Empty
- Response Code: 204 (Success: No Content)

## Create a security role

Endpoint: [POST /api/securityRoles](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Roles/createSecurityRole)

This endpoint is for administrative user to create a new security role and specify name, description, privileges. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. You provide the information to create the security role in the body parameter of the request.

In this example, you create a new security role called "NewSecurityRole". You must provide description for the security role along with a privilege id. Here the id is 1. For a complete list of privilege ids visit EnumDSSXMLPrivilegeTypes. The response to this endpoint includes the ID of the Security Role object in the metadata. This ID can be directly used to access the security role to view, modify or delete it.

### Sample request

- Request parameters:

  - `X-MSTR-AuthToken` - Authorization token generated by `POST /api/auth/login`, required to authenticate caller
  - `body` - Information used to create the security role, including the name and description of the security role, and the IDs of privileges that the security role must have. Here the name of the security role is "NewSecurityRole" and has only one privilege.

- Request headers:

  ```http
  'Accept: application/json'
  ‘X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg’
  ```

- Request body:

  ```json
  {
    "name": "NewSecurityRole",
    "description": "a new Security Role for testing",
    "privileges": [
      {
        "id": "1"
      }
    ]
  }
  ```

- Curl:

  ```bash
  curl -X POST " https://demo.microstrategy.com/MicroStrategyLibrary/api/securityRoles" -H "accept:
  application/json" -H "X-MSTR
  AuthToken: pdcmrontjrlf494tl1eu6nt7hg" -H "Content-Type: application/json" -d "{\"name\":\"NewSecurityRole\",\"description\":\"a new Security Role for testing\",\"privileges\":[{\"id\":\"1\"}]}"
  ```

### Sample response

- Response headers:

  ```http
  access-control-allow-headers: Content-Type access-control-allow-methods: GET, POST, DELETE, PUT, PATCH,
  HEAD, OPTIONS  cache-control: no-store  content-encoding: gzip  content-length: 61  content-security-policy: frame-ancestors 'self'  content-type: application/json  date: Tue, 14 May 2019 20:37:36 GMT  location: https://demo.microstrategy.com/MicroStrategyLibrary/api/securityRoles/F80E38174DA4A8AF4C82D18F34A2D5E8  x-content-type-options: nosniff  x-xss-protection: 1; mode=block
  ```

- Response body:

  The API returns the id of the security role created. This id can be used to retrieve, modify or delete the security role.

  ```json
  {
    "id": "F80E38174DA4A8AF4C82D18F34A2D5E8"
  }
  ```

- Response code: 201 (Success: Created new security role)

## Modify a security role

Endpoint: [PATCH /api/securityRoles/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Roles/updatePartialSecurityRole)

- Functionalities are defined in operations.
- Any invocation of this API is either to perform security role assignments using path "/members", OR privilege update using path "/privileges". It is not allowed to mix two types of operation together.

This endpoint is used to update information for a specific security role. It is used for two purposes:

- **Security Role Assignments**: To assign security role to a list of users/usergroups for specified project
- **Privileges Update**: Update privileges binding to a security role. It can be used to assign additional privileges to, remove assigned privileges from a security role.

For both purposes, the workflow is as follows:

1. Obtain the authorization token needed to execute the request using `POST /api/auth/login`.
1. Pass the authorization token in the request header.
1. Identify the security role to update by specifying the security role ID in the path of the request.

   The security role ID can be obtained using `GET /api/securityRoles`.

1. Provide the information for updating the security role in the body parameter of the request.

   The body of the request contains the operations to be performed toward the security role, either updating security role assignments, or updating privileges of the security role.

Two examples are provided below. In the first example to make security role assignment, the `PATCH` operation `replace` is being performed to the information of members for a particular project id associated with a specified security role id. The member ids present in the body of the request will replace the previously existing members for this security role and project id. In the second example, `addElement` operation is used in request body to add one privilege to the security role.

### Sample request for security role assignment

- Request parameters:

  - `X-MSTR-AuthToken` - Authorization token generated by `POST /api/auth/login`.

  - `id` - id of the security role to be updated. You generated this id when you created the new security role using `POST /api/securityRoles` API.

  - `body`- Contains information used to perform the update, the update operation to be performed ("add", "replace", or "remove"), the property to be updated, the path property be "/members", and the value to be used in the update operation. You can perform one or more update operations.

- Request header:

  ```http
  'Accept: application/json'
  "X-MSTR-AuthToken": "pdcmrontjrlf494tl1eu6nt7hg"
  ```

- Request parameters:

  ```json
  {
    "X-MSTR-AuthToken": " pdcmrontjrlf494tl1eu6nt7hg",
    "id": "F80E38174DA4A8AF4C82D18F34A2D5E8"
  }
  ```

- Request body:

  ```json
  {
    "operationList": [
      {
        "op": "replace",
        "path": "/members",
        "value": {
          "projectId": "22B97E444CEF8A6B58CF468BC190CC6E",
          "memberIds": ["D09773F94699124B4D75B48F1B358327", "54F3D26011D2896560009A8E67019608"]
        }
      }
    ]
  }
  ```

- Curl:

  ```bash
  curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/securityRoles/F80E38174DA4A8AF4C82D18F34A2D5E8" \
  -H "accept: application/json" \
  -H "X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg’" \
  -H "Content-Type: application/json" \
  -d '"operationList":[{"op":"replace","path": "member","value":{"projectId":" B19DEDCC11D4E0EFC000EB9495D0F44F","memberIds":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}}]'
  ```

### Sample response for security role assignment

- Response header:

  ```http
  access-control-allow-headers: Content-Type  access-control-allow-methods: GET, POST, DELETE, PUT, PATCH, HEAD, OPTIONS  cache-control: no-store  connection: close  content-encoding: gzip  content-length: 155  content-security-policy: frame-ancestors 'self'  content-type: application/json date: Tue, 14 May 2019 20:32:28 GMT  x-content-type-options: nosniff  x-xss-protection: 1; mode=block
  ```

- Response body:

  ```json
  {
    "name": "NewSecurityRole",
    "id": "F80E38174DA4A8AF4C82D18F34A2D5E8",
    "type": 44,
    "description": "testing",
    "subtype": 11264,
    "dateCreated": "2019-05-21T18:34:36.000+0000",
    "dateModified": "2019-05-21T18:34:36.000+0000",
    "version": "F07A19FC4CCEC22CC2E2A9978DF79A4F",
    "acg": 255,
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    },
    "acl": [
      {
        "deny": false,
        "type": 1,
        "rights": 255,
        "trusteeId": "54F3D26011D2896560009A8E67019608",
        "trusteeName": "Administrator",
        "trusteeType": 34,
        "trusteeSubtype": 8704,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 1,
        "trusteeId": "294DEDC011D2F1D56000D98E67019608",
        "trusteeName": "Public / Guest",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 1,
        "trusteeId": "C82C6B1011D2894CC0009D9F29718E4F",
        "trusteeName": "Everyone",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 255,
        "trusteeId": "5F3FAFE111D2D8CC6000CC8E67019608",
        "trusteeName": "System Administrators",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 5,
        "trusteeId": "5F3FAFE011D2D8CC6000CC8E67019608",
        "trusteeName": "System Monitors",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      }
    ],
    "privileges": [
      {
        "name": "Create application objects",
        "id": "1"
      }
    ],
    "projects": [
      {
        "name": "Human Resources Analysis Module",
        "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",
        "members": []
      }
    ]
  }
  ```

- Response code: 200 (Success : OK)

### Sample request for security role update

- Request parameters:

  - `X-MSTR-AuthToken` - Authorization token generated by `POST /api/auth/login`.

  - `id` - id of the security role to be updated. You generated this id when you created the new security role using `POST /api/securityRoles` API.

  - `body`- Contains information used to perform the update: the update operation to be performed ("addElement", or "removeElement") using "op" property; and the value to be used in the update operation is a list of privileges to be added or removed, each with name (optional) and ID; The path property is `/privileges`. You can perform one or more update operations:

- Request header:

  ```http
  'Accept: application/json'
  "X-MSTR-AuthToken": "pdcmrontjrlf494tl1eu6nt7hg"
  ```

- Request parameters:

  ```json
  {
    "X-MSTR-AuthToken": " pdcmrontjrlf494tl1eu6nt7hg",
    "id": "F80E38174DA4A8AF4C82D18F34A2D5E8"
  }
  ```

- Request body:

  ```json
  {
    "operationList": [
      {
        "op": "addElement",
        "path": "/privileges",
        "value": [
          {
            "name": "use consolidation editor",
            "id": "12"
          }
        ]
      }
    ]
  }
  ```

- Curl:

  ```bash
  curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/securityRoles/F80E38174DA4A8AF4C82D18F34A2D5E8" -H
  "accept: application/json" -H "X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg’" -H "Content-Type: application/json" -d "{"operationList":[{"op":"replace","path":"/privileges","value": [{  "name": "use consolidation editor", "id": "12"} ]}]}"
  ```

### Sample response for security role update

- Response header:

  ```http
  access-control-allow-headers: Content-Type  access-control-allow-methods: GET, POST, DELETE, PUT, PATCH, HEAD, OPTIONS  cache-control: no-store  connection: close  content-encoding: gzip  content-length: 155  content-security-policy: frame-ancestors 'self'  content-type: application/json date: Tue, 14 May 2019 20:32:28 GMT  x-content-type-options: nosniff  x-xss-protection: 1; mode=block
  ```

- Response body:

  ```json
  {
    "name": "NewSecurityRole",
    "id": "F80E38174DA4A8AF4C82D18F34A2D5E8",
    "type": 44,
    "description": "testing",
    "subtype": 11264,
    "dateCreated": "2019-05-21T18:34:36.000+0000",
    "dateModified": "2019-05-21T18:34:36.000+0000",
    "version": "F07A19FC4CCEC22CC2E2A9978DF79A4F",
    "acg": 255,
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    },
    "acl": [
      {
        "deny": false,
        "type": 1,
        "rights": 255,
        "trusteeId": "54F3D26011D2896560009A8E67019608",
        "trusteeName": "Administrator",
        "trusteeType": 34,
        "trusteeSubtype": 8704,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 1,
        "trusteeId": "294DEDC011D2F1D56000D98E67019608",
        "trusteeName": "Public / Guest",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 1,
        "trusteeId": "C82C6B1011D2894CC0009D9F29718E4F",
        "trusteeName": "Everyone",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 255,
        "trusteeId": "5F3FAFE111D2D8CC6000CC8E67019608",
        "trusteeName": "System Administrators",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 5,
        "trusteeId": "5F3FAFE011D2D8CC6000CC8E67019608",
        "trusteeName": "System Monitors",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      }
    ],
    "privileges": [
      {
        "name": "Create application objects",
        "id": "1"
      }
    ],
    "projects": [
      {
        "name": "Human Resources Analysis Module",
        "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",
        "members": []
      },
      {
        "name": "MicroStrategy Tutorial",
        "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
        "members": []
      }
    ]
  }
  ```

- Response code: 200 (Success : OK)

## Get information about a specific security role

Endpoint: [GET /api/securityRoles/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Roles/getSecurityRole)

Get information for a specific security role using the security role id. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. You specify security role ID in the path of the request, then you can obtain the security role information about its base info(such as name, id and type), assigned privileges and assigned <project, members> relations info about assigning this created security role to user/userGroup in specified project.

### Sample request

- Request parameters:

  - `X-MSTR-AuthToken` - Authorization token generated by `POST /api/auth/login`.

  - `id` - id of the security role to be updated. You generated this id when you created the new security role using `POST /api/securityRoles` API.

- Request header:

  ```http
  'Accept: application/json'
  "X-MSTR-AuthToken": "pdcmrontjrlf494tl1eu6nt7hg"
  ```

- Request body: Empty.

- Curl:

  ```bash
  "https://demo.microstrategy.com/MicroStrategyLibrary/api/securityRoles/F80E38174DA4A8AF4C82D18F34A2D5E8" -H "accept: application/json" -H "X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg"
  ```

### Sample response

- Response header:

  ```http
  access-control-allow-headers: Content-Type  access-control-allow-methods: GET, POST, DELETE, PUT, PATCH, HEAD, OPTIONS  cache-control: no-store  content-encoding: gzip  content-length: 569  content-security-policy: frame-ancestors 'self'  content-type: application/json  date: Tue, 14 May 2019 20:46:47 GMT  x-content-type-options: nosniff  x-xss-protection: 1; mode=block
  ```

- Response body:

  ```json
  {
    "name": "NewSecurityRole",
    "id": "F80E38174DA4A8AF4C82D18F34A2D5E8",
    "type": 44,
    "description": "testing",
    "subtype": 11264,
    "dateCreated": "2019-05-21T18:34:36.000+0000",
    "dateModified": "2019-05-21T18:34:36.000+0000",
    "version": "F07A19FC4CCEC22CC2E2A9978DF79A4F",
    "acg": 255,
    "owner": {
      "name": "Administrator",
      "id": "54F3D26011D2896560009A8E67019608"
    },
    "acl": [
      {
        "deny": false,
        "type": 1,
        "rights": 255,
        "trusteeId": "54F3D26011D2896560009A8E67019608",
        "trusteeName": "Administrator",
        "trusteeType": 34,
        "trusteeSubtype": 8704,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 1,
        "trusteeId": "294DEDC011D2F1D56000D98E67019608",
        "trusteeName": "Public / Guest",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 1,
        "trusteeId": "C82C6B1011D2894CC0009D9F29718E4F",
        "trusteeName": "Everyone",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 255,
        "trusteeId": "5F3FAFE111D2D8CC6000CC8E67019608",
        "trusteeName": "System Administrators",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      },
      {
        "deny": false,
        "type": 1,
        "rights": 5,
        "trusteeId": "5F3FAFE011D2D8CC6000CC8E67019608",
        "trusteeName": "System Monitors",
        "trusteeType": 34,
        "trusteeSubtype": 8705,
        "inheritable": false
      }
    ],
    "privileges": [
      {
        "name": "Create application objects",
        "id": "1"
      }
    ],
    "projects": [
      {
        "name": "Human Resources Analysis Module",
        "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",
        "members": []
      },
      {
        "name": "MicroStrategy Tutorial",
        "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",
        "members": []
      }
    ]
  }
  ```

- Response code: 200 (Success: OK)

## Delete a security role

Endpoint: [DELETE /api/securityRoles/{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Roles/deleteSecurityRole)

Delete info for a security role with given Id. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. You delete the security role using `Delete /api/securityRoles/{id}`.

### Sample request

- Request parameters:

  - `X-MSTR-AuthToken` - Authorization token generated by `POST /api/auth/login`.

  - `id` - id of the security role to be updated. You generated this id when you created the new security role using `POST /api/securityRoles` API.

- Request header:

  ```http
  'Accept: application/json'
  "X-MSTR-AuthToken": "pdcmrontjrlf494tl1eu6nt7hg"
  ```

- Request body: Empty

- Curl:

  ```bash
  curl -X DELETE "https://demo.microstrategy.com/api/MicroStrategyLibrary/api/securityRoles/F80E38174DA4A8AF4C82D18F34A2D5E8" -H "accept: */*" -H "X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg"
  ```

### Sample response

- Response header:

  ```http
  access-control-allow-headers: Content-Type  access-control-allow-methods: GET, POST, DELETE, PUT, PATCH, HEAD, OPTIONS  cache-control: no-store  content-encoding: gzip  content-length: 107  content-security-policy: frame-ancestors 'self'  content-type: application/json  date: Tue, 14 May 2019 21:28:55 GMT  x-content-type-options: nosniff  x-xss-protection: 1; mode=block
  ```

- Response code: 204 (Success: Security Role is deleted)

## Get information about all security roles

Endpoint: [GET /api/securityRoles](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Roles/getSecurityRoles)

This API endpoint is used to get information for all security roles. A security role describes the ability to do something, such as create, edit, add, delete, view, manage, save, search, share, export, and so on. A security role has a name, a description, and a privilege. You obtain the authorization token needed to execute the request using `POST /api/auth/login`; you pass the authorization token in the request header. The response includes the security role ID, which other endpoints use as a request parameter to specify the security role to perform an action on.

### Sample request

- Request parameters:

  `X-MSTR-AuthToken` - Authorization token generated by `POST /api/auth/login`.

- Request header:

  ```http
  'Accept: application/json'
  "X-MSTR-AuthToken": "pdcmrontjrlf494tl1eu6nt7hg"
  ```

- Request body: Empty

- Curl:

  ```bash
  curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/securityRoles" -H "accept: application/json" -H "X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg"
  ```

### Sample response

- Response header:

  ```http
  access-control-allow-headers: Content-Type  access-control-allow-methods: GET, POST, DELETE, PUT, PATCH, HEAD, OPTIONS  cache-control: no-store  content-encoding: gzip  content-length: 569  content-security-policy: frame-ancestors 'self'  content-type: application/json  date: Tue, 14 May 2019 21:46:47 GMT  x-content-type-options: nosniff  x-xss-protection: 1; mode=block
  ```

- Response body:

  ```json
  [
    {
      "name": "Analyst",
      "id": "CCC8F238462EC1D212607BA3D20894FB",
      "type": 44,
      "description": "Users granted this role have authoring capabilities",
      "subtype": 11264,
      "dateCreated": "2017-09-15T06:19:15.000+0000",
      "dateModified": "2019-04-03T17:43:27.000+0000",
      "version": "C8FA06D143822E771AFBFA97CEFB3859",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "extType": 0
    },
    {
      "name": "Analytics Architect",
      "id": "C68F245F416EAEEB200F14A70765AFB6",
      "type": 44,
      "description": "Users granted this role can create, publish, and optimize a federated data layer as the enterprise's single version of truth. Users can build and maintain schema objects and abstraction layer on top of various, changing enterprise assets.",
      "subtype": 11264,
      "dateCreated": "2018-09-06T09:14:19.000+0000",
      "dateModified": "2018-11-29T06:50:15.000+0000",
      "version": "86EF393344EAA47F726CA49F8C489DDA",
      "acg": 255,
      "owner": {
        "name": "Administrator",
        "id": "54F3D26011D2896560009A8E67019608"
      },
      "extType": 0
    }
  ]
  ```

- Response code: 200 (Success: OK)

## Log out

Endpoint: [POST /api/auth/logout](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout)

This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, X-MSTR-AuthToken, generated by `POST /api/auth/login`. If the call is successful, the resulting HTTP response returns an HTTP status code 204.

### Sample request

- Request header:

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg
  ```

- Request body: Empty

- Curl:

  ```bash
  curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'
  ```

### Sample response

- Response code: 204 (Success: OK)
