---
title: Change the owner of an object
sidebar_label: Change the owner of an object
description: Change the owner of an object.
---

<Available since="2021 Update 10" />

:::tip

You can try this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-dc9e5266-db8c-4842-9c44-16b5dd614f47).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve the list of objects owned by a specific user and transfer the specific object's ownership along with the access rights to a new user.

You want to get a list of dossier objects owned by "MSTR User" with ID "7FC05A65473CE2FD845CE6A1D3F13233" and transfer the ownership along with the access rights over the Landing Page dossier with ID "66366F0E11EA112A1A9C0080EF8568D5" to the user "Allister Lewandowski" with ID "E96A7B9311D4BBCE10004694316DE8A4".

:::info

Get the authorization token to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID with [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Retrieve the list of objects owned by a specific user

You can get the list of objects owned by a specific user with `GET /api/searches/results?type={type}&ownerId={ownerId}`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "hs8n6ji36i18oo77g92mc24j2k"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/searches/results?type=55&ownerId=7FC05A65473CE2FD845CE6A1D3F13233" \
-H "accept: application/json" \
-H "X-MSTR-AuthToken: hs8n6ji36i18oo77g92mc24j2k" \
-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the number and list of objects owned by a specific user in the body of the response.

```json
{
  "totalItems": 1,
  "result": [
    {
      "name": "Landing Page",
      "id": "66366F0E11EA112A1A9C0080EF8568D5",
      "type": 55,
      "subtype": 14081,
      "dateCreated": "2019-11-27T15:27:18.000+0000",
      "dateModified": "2022-04-01T17:48:19.000+0000",
      "version": "3F50245EF7466744AFEEE5B726C11CB2",
      "acg": 255,
      "owner": {
        "name": "MSTR User",
        "id": "7FC05A65473CE2FD845CE6A1D3F13233"
      },
      "extType": 0,
      "iconPath": "https://mobilecloud.s3.amazonaws.com/MicroStrategy/landing/Cover.png",
      "viewMedia": 1879072805,
      "certifiedInfo": {
        "certified": false
      },
      "templateInfo": {
        "template": false,
        "lastModifiedBy": {}
      },
      "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
    }
  ]
}
```

Response Code: 200 (The list of objects owned by a specific user was returned successfully.)

## Transfer ownership and access rights over the specific object

You can update an object's information with `PUT /api/objects/{objectId}?type={type}`.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "hs8n6ji36i18oo77g92mc24j2k"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body:

```json
{
  "acl": [
    {
      "op": "remove",
      "trustee": "7FC05A65473CE2FD845CE6A1D3F13233",
      "rights": 255,
      "denied": false,
      "inheritable": false,
      "type": 1
    },
    {
      "op": "add",
      "trustee": "E96A7BBD11D4BBCE10004694316DE8A4",
      "rights": 255,
      "denied": false,
      "inheritable": false,
      "type": 1
    }
  ],
  "ownerId": "E96A7BBD11D4BBCE10004694316DE8A4"
}
```

Sample Curl:

```bash
curl -X 'PUT' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/66366F0E11EA112A1A9C0080EF8568D5?type=55&flags=70' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: hs8n6ji36i18oo77g92mc24j2k' \
  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
  -d '{
  "acl": [
    {
      "op": "remove",
      "trustee": "7FC05A65473CE2FD845CE6A1D3F13233",
      "rights": 255,
      "denied": false,
      "inheritable": false,
      "type": 1
    },
    {
      "op": "add",
      "trustee": "E96A7BBD11D4BBCE10004694316DE8A4",
      "rights": 255,
      "denied": false,
      "inheritable": false,
      "type": 1
    }

  ],
  "ownerId": "E96A7BBD11D4BBCE10004694316DE8A4"
}'
```

Sample Response Body:

You can view the updated owner and access rights information in the body of the response.

```json
{
  "name": "Landing Page",
  "id": "66366F0E11EA112A1A9C0080EF8568D5",
  "type": 55,
  "subtype": 14081,
  "dateCreated": "2019-11-27T15:27:19.000+0000",
  "dateModified": "2023-05-09T16:16:19.000+0000",
  "version": "ECFA316EAB44EF42A89A469632FD8E0F",
  "acg": 255,
  "owner": {
    "name": "Allister Lewandowski",
    "id": "E96A7BBD11D4BBCE10004694316DE8A4"
  },
  "acl": [
    {
      "deny": false,
      "type": 1,
      "rights": 199,
      "trusteeId": "294DEDC011D2F1D56000D98E67019608",
      "trusteeName": "Public / Guest",
      "trusteeType": 34,
      "trusteeSubtype": 8705,
      "inheritable": false
    },
    {
      "deny": false,
      "type": 1,
      "rights": 199,
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
      "trusteeId": "54F3D26011D2896560009A8E67019608",
      "trusteeName": "Administrator",
      "trusteeType": 34,
      "trusteeSubtype": 8704,
      "inheritable": false
    },
    {
      "deny": false,
      "type": 1,
      "rights": 255,
      "trusteeId": "C1E1419F11D603A2100086B3A5E8F8A4",
      "trusteeName": "Developers",
      "trusteeType": 34,
      "trusteeSubtype": 8705,
      "inheritable": false
    },
    {
      "deny": false,
      "type": 1,
      "rights": 255,
      "trusteeId": "E96A7BBD11D4BBCE10004694316DE8A4",
      "trusteeName": "Allister Lewandowski",
      "trusteeType": 34,
      "trusteeSubtype": 8704,
      "inheritable": false
    }
  ],
  "extType": 0,
  "iconPath": "https://mobilecloud.s3.amazonaws.com/MicroStrategy/landing/Cover.png",
  "viewMedia": 1879072805,
  "ancestors": [
    {
      "name": "MicroStrategy Tutorial",
      "id": "D43364C684E34A5F9B2F9AD7108F7828",
      "level": 3
    },
    {
      "name": "Public Objects",
      "id": "98FE182C2A10427EACE0CD30B6768258",
      "level": 2
    },
    {
      "name": "Reports",
      "id": "D3C7D461F69C4610AA6BAA5EF51F4125",
      "level": 1
    }
  ],
  "certifiedInfo": {
    "certified": false
  },
  "templateInfo": {
    "template": false
  }
}
```

Response Code: 200 (The owner and access rights information of the object has been updated successfully.)
