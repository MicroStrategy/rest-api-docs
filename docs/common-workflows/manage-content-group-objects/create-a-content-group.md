---
title: Create a content group
description: You can use REST APIs to create a new content group.
---

You can use REST APIs to create a new content group which includes name, color, opacity, emailEnabled, recipients.

In this sample workflow, we want to create a new content group object with the name "Finance", the color black, the opacity 50, enabled email, and the recipient with id `54F3D26011D2896560009A8E67019608` .

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

Endpoint: [POST /api/contentGroups](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/createContentGroup)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"
```

Sample Request Body:

```json
{
  "name": "Finance",
  "color": 0,
  "opacity": 50,
  "emailEnabled": true,
  "recipients": [
    {
      "id": "54F3D26011D2896560009A8E67019608"
    }
  ]
}
```

Sample Curl:

```bash
curl -X 'POST' \
  'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: idlrja15f7gue2n4esiv7mbn7v' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Finance",
  "color": 0,
  "opacity": 50,
  "emailEnabled": true,
  "recipients": [
    {
      "id": "54F3D26011D2896560009A8E67019608"
    }
  ]
}'
```

Sample Response Body:

```json
{
  "id": "D35FC0B04BD79E95612DDB907C4CCDF6",
  "name": "Finance",
  "color": 0,
  "opacity": 50,
  "emailEnabled": true,
  "dateCreated": "2022-10-25T10:10:57.446+0000",
  "dateModified": "2022-10-25T10:10:57.446+0000",
  "owner": {
    "name": "Administrator",
    "id": "54F3D26011D2896560009A8E67019608"
  },
  "type": 77,
  "recipients": [
    {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator",
      "abbreviation": "Administrator",
      "group": false
    }
  ]
}
```

Sample Response Code: 201 (A new content group is created successfully.)
